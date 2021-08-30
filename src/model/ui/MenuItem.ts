import {RouteLocation} from 'vue-router';
import UserPermissions from '@/enums/UserPermissions';

export default interface MenuItem {
    title: string;
    to: Partial<RouteLocation>;
    permissions?: Array<UserPermissions>;
}