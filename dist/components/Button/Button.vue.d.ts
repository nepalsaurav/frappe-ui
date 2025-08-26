import { ButtonProps } from './types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        prefix?(_: {}): any;
        icon?(_: {}): any;
        default?(_: {}): any;
        default?(_: {}): any;
        suffix?(_: {}): any;
    };
    refs: {
        rootRef: HTMLButtonElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ButtonProps, {
    rootRef: import('vue').Ref<any, any>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ButtonProps> & Readonly<{}>, {
    disabled: boolean;
    theme: "gray" | "blue" | "green" | "red";
    size: "sm" | "md" | "lg" | "xl" | "2xl";
    variant: "solid" | "subtle" | "outline" | "ghost";
    loading: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    rootRef: HTMLButtonElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
