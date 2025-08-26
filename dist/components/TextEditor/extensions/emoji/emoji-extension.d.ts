import { BaseSuggestionItem } from '../suggestion/createSuggestionExtension';
export interface EmojiItem extends BaseSuggestionItem {
    name: string;
    emoji: string;
}
declare const _default: import('@tiptap/core').Extension<Record<string, any> & {
    suggestion: Omit<import('@tiptap/suggestion').SuggestionOptions<EmojiItem, any>, "editor">;
}, any>;
export default _default;
