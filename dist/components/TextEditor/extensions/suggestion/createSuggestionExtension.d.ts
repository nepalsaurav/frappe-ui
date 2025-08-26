import { Extension, Editor, Range } from '@tiptap/core';
import { SuggestionOptions } from '@tiptap/suggestion';
import { PluginKey } from '@tiptap/pm/state';
import { Props as TippyProps } from 'tippy.js';
import { Component as VueComponent } from 'vue';
export interface BaseSuggestionItem {
    title?: string;
    name?: string;
    [key: string]: any;
}
export interface CreateSuggestionExtensionOptions<TItem extends BaseSuggestionItem> {
    name: string;
    char: string;
    pluginKey: PluginKey;
    items: (props: {
        query: string;
        editor: Editor;
    }) => TItem[] | Promise<TItem[]>;
    command: (props: {
        editor: Editor;
        range: Range;
        props: TItem;
    }) => void;
    component: VueComponent;
    tippyOptions?: Partial<TippyProps>;
    allowSpaces?: boolean;
    startOfLine?: boolean;
    decorationTag?: string;
    decorationClass?: string;
    addOptions?: () => Record<string, any>;
}
export declare function createSuggestionExtension<TItem extends BaseSuggestionItem>(options: CreateSuggestionExtensionOptions<TItem>): Extension<Record<string, any> & {
    suggestion: Omit<SuggestionOptions<TItem>, "editor">;
}, any>;
