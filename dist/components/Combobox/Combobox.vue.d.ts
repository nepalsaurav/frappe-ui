import { Component } from 'vue';
type SimpleOption = string | {
    label: string;
    value: string;
    icon?: string | Component;
    disabled?: boolean;
};
type GroupedOption = {
    group: string;
    options: SimpleOption[];
};
type ComboboxOption = SimpleOption | GroupedOption;
interface ComboboxProps {
    options: Array<ComboboxOption>;
    modelValue?: string | null;
    placeholder?: string;
    disabled?: boolean;
}
declare const _default: import('vue').DefineComponent<ComboboxProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    blur: (...args: any[]) => void;
    focus: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    "update:selectedOption": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<ComboboxProps> & Readonly<{
    onBlur?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onUpdate:selectedOption"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
