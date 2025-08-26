import { Node } from '@tiptap/core';
import { BaseSuggestionItem } from '../suggestion/createSuggestionExtension';
export declare const TagNode: Node<any, any>;
interface TagSuggestionItem extends BaseSuggestionItem {
    name?: string;
    label: string;
    isNew?: boolean;
}
export declare const TagExtension: import('@tiptap/core').Extension<Record<string, any> & {
    suggestion: Omit<import('@tiptap/suggestion').SuggestionOptions<TagSuggestionItem, any>, "editor">;
}, any>;
export {};
