import { formatValue } from './helpers';
import { NumberChartConfig } from './types';
type __VLS_Props = {
    config: NumberChartConfig;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        body?(_: {}): any;
        title?(_: {}): any;
        subtitle?(_: {
            formatValue: typeof formatValue;
        }): any;
        delta?(_: {
            formatValue: typeof formatValue;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
