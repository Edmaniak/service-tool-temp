import UserPermissions from '@/enums/UserPermissions';

export default interface CardDropdownMenuItem {
    id: string;
    iconPath: string;
    title: string;
    callback: Function;
    color?: string;
    permissions?: Array<UserPermissions>;
}