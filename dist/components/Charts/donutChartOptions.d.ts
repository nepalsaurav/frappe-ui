import { DonutChartConfig } from './types';
export default function useDonutChartOptions(config: DonutChartConfig): {
    animation: boolean;
    animationDuration: number;
    color: string[] | undefined;
    textStyle: {
        fontFamily: string[];
    };
    title: {
        top: string;
        left: string;
        text: string;
        subtext: string | undefined;
        padding: number;
        itemGap: number;
        textStyle: {
            fontSize: number;
            fontWeight: number;
            lineHeight: number;
            color: string;
        };
        subtextStyle: {
            fontSize: number;
            fontWeight: number;
            lineHeight: number;
            color: string;
        };
    };
    dataset: {
        source: any[][];
    };
    series: {
        type: string;
        name: string;
        center: string[];
        radius: string[];
        labelLine: {
            show: boolean | undefined;
            lineStyle: {
                width: number;
            };
            length: number;
            length2: number;
            smooth: boolean;
        };
        label: {
            show: boolean | undefined;
            formatter: ({ value, name }: any) => string;
        };
        emphasis: {
            scaleSize: number;
        };
    }[];
    legend: {
        left: string;
        bottom: number;
        padding: number[];
        orient: string;
        show: boolean;
        type: string;
        itemGap: number;
        formatter: (name: string) => string;
        textStyle: {
            padding: number[];
            color: string;
        };
        icon: string;
        pageIcons: {
            horizontal: string[];
        };
        pageIconColor: string;
        pageInactiveColor: string;
        pageIconSize: number;
        pageTextStyle: {
            color: string;
        };
        animationDurationUpdate: number;
    } | null;
    tooltip: {
        trigger: string;
        confine: boolean;
        appendToBody: boolean;
        formatter: (params: any) => string;
    };
};
