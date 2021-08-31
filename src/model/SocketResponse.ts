import SocketEvents from '@/enums/SocketEvents';


export default interface SocketResponse<T> {
    code: number;
    error: string | null;
    event?: SocketEvents;
    args?: T;
    id: number;
    type: string;
    response?: T;
}