import { EChartsOption } from 'echarts';
type __VLS_Props = {
    options: EChartsOption;
    events?: {
        click: (params: any) => void;
    };
    error?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    chartDiv: HTMLDivElement;
}, any>;
export default _default;
