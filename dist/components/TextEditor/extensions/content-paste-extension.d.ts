import { Extension } from '@tiptap/core';
export interface ContentPasteOptions {
    enabled: boolean;
    showConfirmation: boolean;
    uploadFunction: Function | null;
}
export declare const ContentPasteExtension: Extension<ContentPasteOptions, any>;
