import axios from 'axios';

export default class DiscoveryApi {
    public static async scanIp (ip: string) {
        return (await axios.get(`http://${ip}/api/discovery`)).data.result
    }
}