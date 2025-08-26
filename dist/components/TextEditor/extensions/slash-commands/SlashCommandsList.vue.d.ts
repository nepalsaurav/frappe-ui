import { PropType } from 'vue';
import { Editor, Range } from '@tiptap/core';
import { CommandItem } from './slash-commands-extension';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    items: {
        type: PropType<CommandItem[]>;
        required: true;
    };
    editor: {
        type: PropType<Editor>;
        required: true;
    };
    range: {
        type: PropType<Range>;
        required: true;
    };
    command: {
        type: PropType<(item: CommandItem) => void>;
        required: true;
    };
    query: StringConstructor;
}>, {
    onKeyDown: ({ event }: {
        event: KeyboardEvent;
    }) => boolean;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    items: {
        type: PropType<CommandItem[]>;
        required: true;
    };
    editor: {
        type: PropType<Editor>;
        required: true;
    };
    range: {
        type: PropType<Range>;
        required: true;
    };
    command: {
        type: PropType<(item: CommandItem) => void>;
        required: true;
    };
    query: StringConstructor;
}>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    suggestionList: ({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            containerClass: string;
            itemClass: string;
            showNoResults: boolean;
        }> & Omit<{
            readonly items: import('../suggestion/createSuggestionExtension').BaseSuggestionItem[];
            readonly command: (item: import('../suggestion/createSuggestionExtension').BaseSuggestionItem) => void;
            readonly containerClass: string;
            readonly itemClass: string;
            readonly showNoResults: boolean;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, "containerClass" | "itemClass" | "showNoResults">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        } & {
            container: HTMLDivElement;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance | null;
        $parent: import('vue').ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
            items: {
                type: PropType<import('../suggestion/createSuggestionExtension').BaseSuggestionItem[]>;
                required: true;
            };
            command: {
                type: PropType<(item: import('../suggestion/createSuggestionExtension').BaseSuggestionItem) => void>;
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
            onKeyDown: ({ event }: {
                event: KeyboardEvent;
            }) => boolean;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
            containerClass: string;
            itemClass: string;
            showNoResults: boolean;
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
        containerClass: string;
        itemClass: string;
        showNoResults: boolean;
    }> & Omit<Readonly<import('vue').ExtractPropTypes<{
        items: {
            type: PropType<import('../suggestion/createSuggestionExtension').BaseSuggestionItem[]>;
            required: true;
        };
        command: {
            type: PropType<(item: import('../suggestion/createSuggestionExtension').BaseSuggestionItem) => void>;
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
    }>> & Readonly<{}>, "onKeyDown" | ("containerClass" | "itemClass" | "showNoResults")> & import('vue').ShallowUnwrapRef<{
        onKeyDown: ({ event }: {
            event: KeyboardEvent;
        }) => boolean;
    }> & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: {
            default?(_: {
                item: import('../suggestion/createSuggestionExtension').BaseSuggestionItem;
                index: number;
            }): any;
        };
    }) | null;
}, any>;
export default _default;
