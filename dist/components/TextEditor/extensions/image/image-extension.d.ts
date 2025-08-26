import { Node as NodeExtension } from '@tiptap/core';
import { EditorView } from '@tiptap/pm/view';
import { UploadedFile } from '../../../../utils/useFileUpload';
export interface ImageExtensionOptions {
    /**
     * Function to handle image uploads
     * @default null
     */
    uploadFunction: ((file: File) => Promise<UploadedFile>) | null;
    /**
     * HTML attributes to add to the image element
     * @default {}
     */
    HTMLAttributes: Record<string, any>;
}
export interface SetImageOptions {
    src: string;
    alt?: string;
    title?: string;
    width?: string | number | null;
    height?: string | number | null;
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        image: {
            /**
             * Insert an image
             */
            setImage: (options: SetImageOptions) => ReturnType;
            /**
             * Upload and insert an image
             */
            uploadImage: (file: File) => ReturnType;
            /**
             * Select an image file using the file picker and upload it
             */
            selectAndUploadImage: () => ReturnType;
            /**
             * Set image alignment
             */
            setImageAlign: (align: 'left' | 'center' | 'right') => ReturnType;
        };
    }
}
export declare const ImageExtension: NodeExtension<ImageExtensionOptions, any>;
/**
 * Process multiple image uploads sequentially
 */
export declare function processMultipleImages(images: File[], view: EditorView, pos: number | null, options: Record<string, any>): void;
