export default class Time {
    public hour: number;
    public minute: number

    constructor (hour: number, minute: number) {
        this.hour = hour;
        this.minute = minute;
    }
    public getFormatted () {
        return `${this.hour}:${this.minute}${this.minute < 10 ? '0' : ''}`
    }
}