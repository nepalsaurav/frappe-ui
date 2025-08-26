import { Node } from '@tiptap/core';
import { UploadedFile } from '../../utils/useFileUpload';
export interface VideoOptions {
    uploadFunction: ((file: File) => Promise<UploadedFile>) | null;
    HTMLAttributes: Record<string, any>;
}
export interface SetVideoOptions {
    src: string;
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        video: {
            setVideo: (options: SetVideoOptions) => ReturnType;
            uploadVideo: (file: File) => ReturnType;
            selectAndUploadVideo: () => ReturnType;
        };
    }
}
declare const _default: Node<VideoOptions, any>;
export default _default;
