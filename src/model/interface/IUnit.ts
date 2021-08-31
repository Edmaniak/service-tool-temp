import Brand from '@/enums/Brand';
import Localization from '@/enums/Localization';
import Connector from '@/Connector';

export default interface IUnit {
    addresses: Record<string, string>;
    board_number: string;
    brand: Brand;
    connector?: Connector;
    cloud: {
        enable: boolean;
        link: string;
        support: string;
    };
    localisation: Localization;
    name: string;
    port: number;
    production_number: string;
    type: string;
    version: string;
    target: {
        broadcast: string;
        interface: string;
    };
    link: {address: string};
    last_seen: string | Date;
    edited: boolean;
}