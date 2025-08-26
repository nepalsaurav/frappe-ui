import { Editor } from '@tiptap/vue-3';
interface ExistingImage {
    src: string;
    alt: string;
}
type __VLS_Props = {
    modelValue: boolean;
    files: File[];
    editor: Editor;
    mode: 'new' | 'edit';
    existingImages?: ExistingImage[];
    initialColumns?: number;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    "update:files": (...args: any[]) => void;
    save: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onUpdate:files"?: ((...args: any[]) => any) | undefined;
    onSave?: ((...args: any[]) => any) | undefined;
}>, {
    mode: "new" | "edit";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    captionInput: HTMLInputElement;
}, any>;
export default _default;
