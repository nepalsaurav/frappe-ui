import { Node } from '@tiptap/core';
import { UploadedFile } from '../../../../utils/useFileUpload';
export interface ImageGroupOptions {
    /**
     * Function to handle image uploads
     * @default null
     */
    uploadFunction: ((file: File) => Promise<UploadedFile>) | null;
    HTMLAttributes: Record<string, any>;
}
export interface ImageGroupAttrs {
    columns?: number;
    images: {
        src: string;
        alt?: string;
    }[];
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        imageGroup: {
            /**
             * Insert an image group/gallery node
             */
            setImageGroup: (attrs: {
                columns?: number;
                images: {
                    src: string;
                    alt?: string;
                }[];
            }) => ReturnType;
        };
    }
}
export declare const ImageGroup: Node<ImageGroupOptions, any>;
