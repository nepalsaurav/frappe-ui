interface ImageInfo {
    src: string;
    alt: string | null;
}
type __VLS_Props = {
    show: boolean;
    images: ImageInfo[];
    initialIndex: number;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:show": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:show"?: ((value: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    imageContainer: HTMLDivElement;
    backdropElement: HTMLDivElement;
    controlsBar: HTMLDivElement;
}, any>;
export default _default;
