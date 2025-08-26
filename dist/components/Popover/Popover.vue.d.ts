import { PopoverProps } from './types';
declare function togglePopover(flag?: boolean | Event): void;
declare function updatePosition(): void;
declare function open(): void;
declare function close(): void;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        target?(_: {
            togglePopover: typeof togglePopover;
            updatePosition: typeof updatePosition;
            open: typeof open;
            close: typeof close;
            isOpen: boolean | undefined;
        }): any;
        body?(_: {
            togglePopover: typeof togglePopover;
            updatePosition: typeof updatePosition;
            open: typeof open;
            close: typeof close;
            isOpen: boolean | undefined;
        }): any;
        'body-main'?(_: {
            togglePopover: typeof togglePopover;
            updatePosition: typeof updatePosition;
            open: typeof open;
            close: typeof close;
            isOpen: boolean | undefined;
        }): any;
    };
    refs: {
        anchorRef: HTMLDivElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<PopoverProps, {
    open: typeof open;
    close: typeof close;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
    open: () => any;
    "update:show": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<PopoverProps> & Readonly<{
    onClose?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
    "onUpdate:show"?: ((value: boolean) => any) | undefined;
}>, {
    show: boolean;
    trigger: "click" | "hover";
    hoverDelay: number;
    leaveDelay: number;
    placement: "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
    popoverClass: string | object | Array<string | object>;
    transition: "default" | null;
    hideOnBlur: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    anchorRef: HTMLDivElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
