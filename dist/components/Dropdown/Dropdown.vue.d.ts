import { DropdownProps, DropdownOption, DropdownOptions } from './types';
declare function close(): void;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            open: boolean;
            close: typeof close;
        }): any;
        item?(_: {
            item: DropdownOption;
            close: typeof close;
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<DropdownProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<DropdownProps> & Readonly<{}>, {
    placement: string;
    options: DropdownOptions;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
