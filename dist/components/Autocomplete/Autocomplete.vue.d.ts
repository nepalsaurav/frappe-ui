declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        target?(_: {
            open: any;
            close: any;
            togglePopover: any;
            isOpen: any;
        }): any;
        prefix?(_: {}): any;
        suffix?(_: {}): any;
        'item-prefix'?(_: {
            active: any;
            selected: any;
            option: any;
        }): any;
        'item-suffix'?(_: {
            active: any;
            selected: any;
            option: any;
        }): any;
        footer?(_: {
            togglePopover: any;
        }): any;
    };
    refs: {
        rootRef: unknown;
        searchInput: unknown;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineSetupFnComponent<Record<string, any>, {}, {}, Record<string, any> & {}, import('vue').PublicProps>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
