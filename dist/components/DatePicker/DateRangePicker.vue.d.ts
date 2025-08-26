import { DatePickerProps } from './types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        prefix?(_: {}): any;
    };
    refs: {
        popoverRef: ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: {
                readonly show?: boolean | undefined;
                readonly trigger?: "click" | "hover" | undefined;
                readonly hoverDelay?: number | undefined;
                readonly leaveDelay?: number | undefined;
                readonly placement?: "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end" | undefined;
                readonly popoverClass?: (string | object | Array<string | object>) | undefined;
                readonly transition?: "default" | null | undefined;
                readonly hideOnBlur?: boolean | undefined;
                readonly onClose?: (() => any) | undefined;
                readonly onOpen?: (() => any) | undefined;
                readonly "onUpdate:show"?: ((value: boolean) => any) | undefined;
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            } & {
                anchorRef: HTMLDivElement;
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: ((event: "close") => void) & ((event: "open") => void) & ((event: "update:show", value: boolean) => void);
            $el: any;
            $options: import('vue').ComponentOptionsBase<Readonly<import('../Popover/types').PopoverProps> & Readonly<{
                onClose?: (() => any) | undefined;
                onOpen?: (() => any) | undefined;
                "onUpdate:show"?: ((value: boolean) => any) | undefined;
            }>, {
                open: () => void;
                close: () => void;
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
                close: () => any;
                open: () => any;
                "update:show": (value: boolean) => any;
            }, string, {
                show: boolean;
                trigger: "click" | "hover";
                hoverDelay: number;
                leaveDelay: number;
                placement: "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
                popoverClass: string | object | Array<string | object>;
                transition: "default" | null;
                hideOnBlur: boolean;
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import('vue').nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
        } & Readonly<{
            show: boolean;
            trigger: "click" | "hover";
            hoverDelay: number;
            leaveDelay: number;
            placement: "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
            popoverClass: string | object | Array<string | object>;
            transition: "default" | null;
            hideOnBlur: boolean;
        }> & Omit<Readonly<import('../Popover/types').PopoverProps> & Readonly<{
            onClose?: (() => any) | undefined;
            onOpen?: (() => any) | undefined;
            "onUpdate:show"?: ((value: boolean) => any) | undefined;
        }>, "close" | "open" | ("show" | "trigger" | "hoverDelay" | "leaveDelay" | "placement" | "popoverClass" | "transition" | "hideOnBlur")> & import('vue').ShallowUnwrapRef<{
            open: () => void;
            close: () => void;
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: {
                target?(_: {
                    togglePopover: (flag?: boolean | Event) => void;
                    updatePosition: () => void;
                    open: () => void;
                    close: () => void;
                    isOpen: boolean | undefined;
                }): any;
                body?(_: {
                    togglePopover: (flag?: boolean | Event) => void;
                    updatePosition: () => void;
                    open: () => void;
                    close: () => void;
                    isOpen: boolean | undefined;
                }): any;
                'body-main'?(_: {
                    togglePopover: (flag?: boolean | Event) => void;
                    updatePosition: () => void;
                    open: () => void;
                    close: () => void;
                    isOpen: boolean | undefined;
                }): any;
            };
        }) | null;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<DatePickerProps, {
    open: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: string) => any;
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<DatePickerProps> & Readonly<{
    onChange?: ((value: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    popoverRef: ({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: {
            readonly show?: boolean | undefined;
            readonly trigger?: "click" | "hover" | undefined;
            readonly hoverDelay?: number | undefined;
            readonly leaveDelay?: number | undefined;
            readonly placement?: "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end" | undefined;
            readonly popoverClass?: (string | object | Array<string | object>) | undefined;
            readonly transition?: "default" | null | undefined;
            readonly hideOnBlur?: boolean | undefined;
            readonly onClose?: (() => any) | undefined;
            readonly onOpen?: (() => any) | undefined;
            readonly "onUpdate:show"?: ((value: boolean) => any) | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        } & {
            anchorRef: HTMLDivElement;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance | null;
        $parent: import('vue').ComponentPublicInstance | null;
        $host: Element | null;
        $emit: ((event: "close") => void) & ((event: "open") => void) & ((event: "update:show", value: boolean) => void);
        $el: any;
        $options: import('vue').ComponentOptionsBase<Readonly<import('../Popover/types').PopoverProps> & Readonly<{
            onClose?: (() => any) | undefined;
            onOpen?: (() => any) | undefined;
            "onUpdate:show"?: ((value: boolean) => any) | undefined;
        }>, {
            open: () => void;
            close: () => void;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            close: () => any;
            open: () => any;
            "update:show": (value: boolean) => any;
        }, string, {
            show: boolean;
            trigger: "click" | "hover";
            hoverDelay: number;
            leaveDelay: number;
            placement: "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
            popoverClass: string | object | Array<string | object>;
            transition: "default" | null;
            hideOnBlur: boolean;
        }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import('vue').nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
    } & Readonly<{
        show: boolean;
        trigger: "click" | "hover";
        hoverDelay: number;
        leaveDelay: number;
        placement: "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
        popoverClass: string | object | Array<string | object>;
        transition: "default" | null;
        hideOnBlur: boolean;
    }> & Omit<Readonly<import('../Popover/types').PopoverProps> & Readonly<{
        onClose?: (() => any) | undefined;
        onOpen?: (() => any) | undefined;
        "onUpdate:show"?: ((value: boolean) => any) | undefined;
    }>, "close" | "open" | ("show" | "trigger" | "hoverDelay" | "leaveDelay" | "placement" | "popoverClass" | "transition" | "hideOnBlur")> & import('vue').ShallowUnwrapRef<{
        open: () => void;
        close: () => void;
    }> & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: {
            target?(_: {
                togglePopover: (flag?: boolean | Event) => void;
                updatePosition: () => void;
                open: () => void;
                close: () => void;
                isOpen: boolean | undefined;
            }): any;
            body?(_: {
                togglePopover: (flag?: boolean | Event) => void;
                updatePosition: () => void;
                open: () => void;
                close: () => void;
                isOpen: boolean | undefined;
            }): any;
            'body-main'?(_: {
                togglePopover: (flag?: boolean | Event) => void;
                updatePosition: () => void;
                open: () => void;
                close: () => void;
                isOpen: boolean | undefined;
            }): any;
        };
    }) | null;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
