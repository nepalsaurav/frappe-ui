import { RouteLocationRaw } from 'vue-router';
export type SidebarHeaderProps = {
    title: string;
    subtitle?: string;
    logo?: any;
    menuItems?: {
        label: string;
        icon: any;
        onClick?: () => void;
    }[];
};
export type SidebarItemProps = {
    label: string;
    accessKey?: string;
    icon?: any;
    suffix?: string;
    to?: RouteLocationRaw;
    isActive?: boolean;
    onClick?: () => void;
};
export type SidebarSectionProps = {
    label?: string;
    items: SidebarItemProps[];
    collapsible?: boolean;
};
export type SidebarProps = {
    header?: SidebarHeaderProps;
    sections?: SidebarSectionProps[];
};
