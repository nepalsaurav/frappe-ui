export interface UploadOptions {
    private?: boolean;
    folder?: string;
    file_url?: string;
    doctype?: string;
    docname?: string;
    fieldname?: string;
    method?: string;
    type?: string;
    upload_endpoint?: string;
    optimize?: boolean;
    max_width?: number;
    max_height?: number;
    params?: object;
}
export interface UploadState {
    uploading: boolean;
    progress: number;
    uploaded: number;
    total: number;
    error: any | null;
    result: UploadedFile | null;
}
export interface UploadedFile {
    file_name: string;
    file_size: number;
    file_url: string;
    name?: string;
    owner?: string;
    creation?: string;
    modified?: string;
    modified_by?: string;
    is_private?: 0 | 1;
    file_type?: string;
    folder?: string;
    is_folder?: 0 | 1;
    content_hash?: string;
}
export declare function useFileUpload(): {
    upload: (file: File, options?: UploadOptions) => Promise<UploadedFile>;
    reset: () => void;
    state: {
        uploading: boolean;
        progress: number;
        uploaded: number;
        total: number;
        error: any | null;
        result: {
            file_name: string;
            file_size: number;
            file_url: string;
            name?: string | undefined;
            owner?: string | undefined;
            creation?: string | undefined;
            modified?: string | undefined;
            modified_by?: string | undefined;
            is_private?: 0 | 1 | undefined;
            file_type?: string | undefined;
            folder?: string | undefined;
            is_folder?: 0 | 1 | undefined;
            content_hash?: string | undefined;
        } | null;
    };
    isUploading: import('vue').ComputedRef<boolean>;
    progress: import('vue').ComputedRef<number>;
    error: import('vue').ComputedRef<any>;
    result: import('vue').ComputedRef<{
        file_name: string;
        file_size: number;
        file_url: string;
        name?: string | undefined;
        owner?: string | undefined;
        creation?: string | undefined;
        modified?: string | undefined;
        modified_by?: string | undefined;
        is_private?: 0 | 1 | undefined;
        file_type?: string | undefined;
        folder?: string | undefined;
        is_folder?: 0 | 1 | undefined;
        content_hash?: string | undefined;
    } | null>;
};
declare function upload(file: File | null, options: UploadOptions | undefined, state: UploadState, reset: () => void): Promise<UploadedFile>;
declare global {
    interface Window {
        csrf_token?: string;
    }
}
export { upload };
