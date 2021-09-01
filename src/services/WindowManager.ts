import {BrowserWindow} from '@electron/remote';
import store from '@/store'
import Events from '@/enums/Events';

export default class WindowManager {
    public windows: Array<any> = []

    public static async openWindow (url: string) {
        const win = new BrowserWindow({
            width: 1920, height: 1080, webPreferences: {
                nodeIntegration: true,
                nodeIntegrationInWorker: true,
                contextIsolation: false,
                //@ts-ignore
                enableRemoteModule: true
            }
        })
        await win.loadURL(url)
        win.webContents.send(Events.WINDOW_OPENED, JSON.stringify(store.state))
        return win
    }
}