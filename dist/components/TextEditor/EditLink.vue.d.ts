import { nextTick } from 'vue';
type __VLS_Props = {
    href: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
    updateHref: (href: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClose?: (() => any) | undefined;
    onUpdateHref?: ((href: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    input: ({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: {
            readonly type?: import('../types/TextInput').TextInputTypes | undefined;
            readonly size?: "sm" | "md" | "lg" | "xl" | undefined;
            readonly variant?: "subtle" | "outline" | undefined;
            readonly placeholder?: string | undefined;
            readonly disabled?: boolean | undefined;
            readonly id?: string | undefined;
            readonly modelValue?: string | number | undefined;
            readonly debounce?: number | undefined;
            readonly required?: boolean | undefined;
            readonly "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        } & {
            inputRef: HTMLInputElement;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance | null;
        $parent: import('vue').ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: import('vue').ComponentOptionsBase<Readonly<import('../TextInput').TextInputProps> & Readonly<{
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>, {
            el: import('vue').Ref<HTMLInputElement | null, HTMLInputElement | null>;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (...args: any[]) => void;
        }, string, {
            type: import('../types/TextInput').TextInputTypes;
            size: "sm" | "md" | "lg" | "xl";
            variant: "subtle" | "outline";
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
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
    } & Readonly<{
        type: import('../types/TextInput').TextInputTypes;
        size: "sm" | "md" | "lg" | "xl";
        variant: "subtle" | "outline";
    }> & Omit<Readonly<import('../TextInput').TextInputProps> & Readonly<{
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, "el" | ("type" | "size" | "variant")> & import('vue').ShallowUnwrapRef<{
        el: import('vue').Ref<HTMLInputElement | null, HTMLInputElement | null>;
    }> & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: {
            prefix?(_: {}): any;
            suffix?(_: {}): any;
        };
    }) | null;
}, HTMLDivElement>;
export default _default;
