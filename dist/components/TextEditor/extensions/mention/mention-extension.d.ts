import { MaybeRefOrGetter, Component } from 'vue';
import { Extension } from '@tiptap/core';
import { BaseSuggestionItem } from '../suggestion/createSuggestionExtension';
export interface MentionSuggestionItem extends BaseSuggestionItem {
    id: string;
    label: string;
    value?: string;
    email?: string;
    full_name?: string;
}
export declare const MentionExtension: Extension<{
    mentions: MaybeRefOrGetter<MentionSuggestionItem[]>;
    component?: Component;
}, any>;
