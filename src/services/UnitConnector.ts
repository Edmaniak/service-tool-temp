import Connector from '@/services/Connector';

export default class UnitConnector extends Connector {
    public async getConfig () {
        return (await this.request('controller/list/config')).response.config
    }

    public async getInputs () {
        return (await this.request('controller/list/inputs')).response.inputs
    }

    public async getOutputs () {
        return (await this.request('controller/list/outputs')).response.outputs
    }

    public async getContext () {
        return (await this.request('controller/list/context')).response.context
    }

    public async getTypes () {
        return (await this.request('controller/list/types')).response.types
    }

    public async getBoards () {
        return (await this.request('boards/connected')).response.types
    }

    public async getMapping () {
        return (await this.request('boards/info')).response.boards
    }

    public async save () {
        return (await this.request('save'))
    }
}