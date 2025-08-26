import { PropType } from 'vue';
import { BaseSuggestionItem } from './createSuggestionExtension';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            item: BaseSuggestionItem;
            index: number;
        }): any;
    };
    refs: {
        container: HTMLDivElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    items: {
        type: PropType<BaseSuggestionItem[]>;
        required: true;
    };
    command: {
        type: PropType<(item: BaseSuggestionItem) => void>;
        required: true;
    };
    containerClass: {
        type: StringConstructor;
        default: string;
    };
    itemClass: {
        type: StringConstructor;
        default: string;
    };
    showNoResults: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    onKeyDown: ({ event }: {
        event: KeyboardEvent;
    }) => boolean;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    items: {
        type: PropType<BaseSuggestionItem[]>;
        required: true;
    };
    command: {
        type: PropType<(item: BaseSuggestionItem) => void>;
        required: true;
    };
    containerClass: {
        type: StringConstructor;
        default: string;
    };
    itemClass: {
        type: StringConstructor;
        default: string;
    };
    showNoResults: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    containerClass: string;
    itemClass: string;
    showNoResults: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    container: HTMLDivElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
