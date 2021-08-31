import IUnit from '@/model/interface/IUnit';
import UnitConnector from '@/UnitConnector';

export default class Unit {
    public connector;
    public link: {addresses: string};
    public unit: IUnit;
    public port: number;
    public variables = {};
    public mapping;
    public board_serials = {};
    public inputs;
    public outputs;
    public config;
    public context;
    public boards;
    public variable_types;
    public callback
    public edited;

    constructor (unit: IUnit, callback: Function) {

        this.callback = callback

        Object.keys(unit).forEach(property => {
            this[property] = unit[property]
        })

        if (unit.connector === undefined) {
            this.connector = new UnitConnector(this.getSocketUrl())
            this.connector.onopen = async () => {
                await this.refresh()
                this.callback()
            }
            this.connector.open()
            console.log('Connecting to unit: ' + this.getHost())
        }

    }

    getHost () {
        return `${this.link.address}:${this.port}`
    }

    getSocketUrl () {
        return `ws://${this.getHost()}/service/ws`
    }

    async refresh () {
        this.config = await this.connector.getConfig()
        this.inputs = await this.connector.getInputs()
        this.outputs = await this.connector.getOutputs()
        this.context = await this.connector.getContext()
        this.variable_types = await this.connector.getTypes()
        this.boards = await this.connector.getBoards()

        this.mapping = await this.connector.getMapping()
        console.log(this.mapping)
        this.mapping.forEach(board => this.board_serials[board.name] = board.serial)

        console.log(this.context)

        const data = [...this.config, ...this.inputs, ...this.outputs, ...this.context]
        data.forEach(v => this.variables[v.name] = v)

        this.connector.setListener('variable_changes', (ev) => {
            Object.keys(ev).forEach(variable => {
                if (this.variables[variable] != undefined)
                    this.variables[variable] = ev[variable]
            });
            this.callback()
        })
    }

    async save () {
        const res = await this.connector.save()
        this.edited = false
        console.info('Configuration saved', res)
        this.callback()
    }
}