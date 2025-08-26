import { TextareaProps } from './types';
declare const _default: import('vue').DefineComponent<TextareaProps, {
    el: import('vue').Ref<HTMLTextAreaElement | null, HTMLTextAreaElement | null>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<TextareaProps> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    size: "sm" | "md" | "lg" | "xl";
    variant: "subtle" | "outline";
    rows: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    textareaRef: HTMLTextAreaElement;
}, HTMLDivElement>;
export default _default;
