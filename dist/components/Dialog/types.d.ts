import { ButtonProps } from '../Button';
export type DialogIcon = {
    name: string;
    appearance?: 'warning' | 'info' | 'danger' | 'success';
};
type DialogOptions = {
    title?: string;
    message?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
    icon?: DialogIcon | string;
    actions?: Array<DialogAction>;
    position?: 'top' | 'center';
};
export type DialogActionContext = {
    close: () => void;
};
export type DialogAction = ButtonProps & {
    onClick?: (context: DialogActionContext) => void | Promise<void>;
};
export interface DialogProps {
    modelValue: boolean;
    options?: DialogOptions;
    disableOutsideClickToClose?: boolean;
}
export {};
