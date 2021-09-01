import UnitDTO from '@/model/UnitDTO';
import UnitConnector from '@/services/UnitConnector';
import Brand from '@/enums/Brand';
import Connector from '@/services/Connector';
import Localization from '@/enums/Localization';

export default class Unit {
    public unit: UnitDTO;
    public port: number;
    public variables = {};
    public mapping: any;
    public board_serials = {};
    public inputs: any;
    public outputs: any;
    public config: any;
    public context: any;
    public boards: any;
    public variable_types: any;
    public callback
    public edited: any;
    public addresses: Record<string, string>;
    public board_number: string;
    public brand: Brand;
    public connector: UnitConnector;
    public cloud: {
        enable: boolean;
        link: string;
        support: string;
    };
    public localisation: Localization;
    public name: string;
    public production_number: string;
    public type: string;
    public version: string;
    public target: {
        broadcast: string;
        interface: string;
    };
    public link: { address: string };
    public last_seen: string | Date;
    public connected: boolean;

    constructor (unit: UnitDTO, callback?: Function) {

        this.callback = callback

        Object.keys(unit).forEach(property => this[property] = unit[property])

        this.connector = new UnitConnector(this.getSocketUrl())
        this.connector.onOpen = async () => {
            await this.refresh()
            if (this.callback) this.callback()
            console.log('Connecting to unit: ' + this.getHost())
        }

    }

    public connect (): void {
        this.connector.open()
        this.connected = true
    }

    public disconnect (): void {
        this.connector.close()
        this.connected = false
    }

    public getHost (): string {
        return `${this.link.address}:${this.port}`
    }

    public getSocketUrl (): string {
        return `ws://${this.getHost()}/service/ws`
    }

    public async refresh (): Promise<void> {
        this.config = await this.connector.getConfig()
        this.inputs = await this.connector.getInputs()
        this.outputs = await this.connector.getOutputs()
        this.context = await this.connector.getContext()
        this.variable_types = await this.connector.getTypes()
        this.boards = await this.connector.getBoards()

        this.mapping = await this.connector.getMapping()
        console.log(this.mapping)
        this.mapping.forEach((board: any) => this.board_serials[board.name] = board.serial)

        console.log(this.context)

        const data = [...this.config, ...this.inputs, ...this.outputs, ...this.context]
        data.forEach(v => this.variables[v.name] = v)

        this.connector.setListener('variable_changes', (ev: any) => {
            Object.keys(ev).forEach(variable => {
                if (this.variables[variable] != undefined)
                    this.variables[variable] = ev[variable]
            });
            if (this.callback) this.callback()
        })
    }

    async save () {
        const res = await this.connector.save()
        this.edited = false
        console.info('Configuration saved', res)
        if (this.callback) this.callback()
    }
}