import { Extension } from '@tiptap/core';
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        imageViewer: {
            /**
             * Open the image viewer
             */
            openImageViewer: (src: string) => ReturnType;
        };
    }
}
declare const _default: Extension<any, any>;
export default _default;
