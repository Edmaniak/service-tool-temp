//@ts-ignore
import {PersistentWebsocket} from 'persistent-websocket';
import SocketResponse from '@/model/SocketResponse';

export default class Connector {
    public onError: Function | null = null

    public onClose: Function | null = null

    public onOpen: Function | null = null

    public onEvent: Function | null = null

    public socket: PersistentWebsocket = null

    private id: number;

    public promises: Record<string, any> = {}

    public handlers = {}


    constructor (url: string) {
        this.id = 1;

        this.promises = {}
        this.socket = new PersistentWebsocket(url, {
            pingSendFunction: () => this.ping(),
            maxBackoffDelayMillis: 15000,
            //reachabilityTestUrl: "/favicon.ico"
        })
        this.socket.onmessage = (e: any) => {
            const message = JSON.parse(e.data)
            if (message.event !== undefined) {
                if (this.onEvent) this.onEvent(message);
                return;
            }
            if (message.id >= 0) {
                this.resolve(message.id, message)
                return
            }
            console.log('Unhandled message', message)
        }
        // TODO error types
        this.socket.onopen = (e: any) => {
            if (this.onOpen) this.onOpen(e);
        }
        this.socket.onclose = (e: any) => {
            if (this.onClose) this.onClose(e);
        }
        this.socket.onerror = (e: any) => {
            if (this.onError) this.onError(e);
        }
    }

    async ping () {
        await this.request('ping')
    }

    resolve (id: any, response: any) {
        const promise = this.promises[response.id]
        if (promise != undefined) {
            if (response.error === null) promise.resolve(response)
            else promise.error(response)
            delete this.promises[response.id]
        } else {
            console.error('Promise not found for request ', id)
        }
    }

    setUrl (url: string, reconnect: boolean) {
        this.socket._url = url
        if (reconnect) {
            this.close()
            this.open()
        }
    }

    readyState () {
        return this.socket.readyState
    }

    open () {
        this.socket.open()
    }

    close () {
        this.socket.close()
    }

    request (endpoint: string, args = {}): Promise<SocketResponse<any>> {
        const reqId = this.id;
        this.id = (this.id + 1) % 2 ** 32;
        console.log(this.id, endpoint, args)
        return new Promise((r, e) => {
            if (this.socket.readyState !== WebSocket.OPEN) {
                e('Not connected')
            }
            this.socket.send(JSON.stringify({
                endpoint: endpoint,
                args: args,
                id: reqId,
            }))
            this.promises[reqId] = {resolve: r, error: e}
        })
    }

    setListener (event: string, handler: any) {
        this.handlers[event] = handler
    }

    onevent (ev: any) {
        const handler = this.handlers[ev.event];
        if (handler) {
            handler(ev.args)
        }
    }
}