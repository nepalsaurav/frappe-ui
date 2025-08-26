import { DialogProps, DialogIcon, DialogAction } from './types';
declare function close(): void;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        body?(_: {}): any;
        'body-main'?(_: {}): any;
        'body-header'?(_: {}): any;
        'body-title'?(_: {}): any;
        'body-content'?(_: {}): any;
        actions?(_: {
            close: typeof close;
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<DialogProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
    "update:modelValue": (value: boolean) => any;
    "after-leave": () => any;
}, string, import('vue').PublicProps, Readonly<DialogProps> & Readonly<{
    onClose?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    "onAfter-leave"?: (() => any) | undefined;
}>, {
    options: {
        title?: string;
        message?: string;
        size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
        icon?: DialogIcon | string;
        actions?: Array<DialogAction>;
        position?: "top" | "center";
    };
    disableOutsideClickToClose: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
