import { AxisChartConfig } from './types';
export declare const PADDING_TOP = 0;
export declare const PADDING_BOTTOM = 10;
export declare const AXIS_TITLE_HEIGHT = 20;
export declare const LEGEND_HEIGHT = 30;
export declare const LEGEND_BOTTOM = 10;
export declare const TITLE_HEIGHT = 20;
export declare const SUBTITLE_HEIGHT = 18;
export declare const TITLE_BOTTOM = 24;
export default function useEchartsOptions(config: AxisChartConfig): {
    animation: boolean;
    animationDuration: number;
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
    color: string[] | undefined;
    grid: {
        left: string;
        right: string;
        top: number;
        bottom: number;
        containLabel: boolean;
    };
    xAxis: any;
    yAxis: ({
        show: boolean;
        type: "time" | "value" | "category";
        z: number;
        scale: boolean;
        inverse: string;
        splitLine: {
            show: boolean;
            width?: undefined;
            lineStyle?: undefined;
        };
        axisLine: {
            show: boolean;
            onZero?: undefined;
        };
        axisTick: {
            show: boolean;
            alignWithLabel: boolean;
        };
        axisLabel: {
            show: boolean;
            hideOverlap: boolean;
            margin: number;
            formatter?: undefined;
        };
        boundaryGap?: undefined;
        name?: undefined;
        nameGap?: undefined;
        nameLocation?: undefined;
        nameTextStyle?: undefined;
        min?: undefined;
        max?: undefined;
    } | {
        show: boolean;
        type: string;
        z: number;
        scale: boolean;
        boundaryGap: string[];
        name: string;
        nameGap: number;
        nameLocation: string;
        nameTextStyle: {
            align: string;
            verticalAlign: string;
            padding: number[];
            backgroundColor: string;
            borderColor: string;
            color: string;
            borderWidth: number;
        };
        splitLine: {
            show: boolean;
            width: number;
            lineStyle: {
                color: string;
            };
        };
        axisLine: {
            show: boolean;
            onZero: boolean;
        };
        axisTick: {
            show: boolean;
            alignWithLabel: boolean;
        };
        axisLabel: {
            show: boolean;
            hideOverlap: boolean;
            margin: number;
            formatter: (value: number) => string;
        };
        min: number | undefined;
        max: number | undefined;
        inverse?: undefined;
    } | {
        show: boolean;
        type: string;
        z: number;
        alignTicks: boolean;
        scale: boolean;
        boundaryGap: string[];
        name: string;
        nameLocation: string;
        nameTextStyle: {
            align: string;
            verticalAlign: string;
            padding: number[];
            backgroundColor: string;
            borderColor: string;
            color: string;
        };
        nameGap: number;
        splitLine: {
            show: boolean;
            width: number;
            lineStyle: {
                color: string;
            };
        };
        axisLine: {
            show: boolean;
            onZero: boolean;
        };
        axisTick: {
            show: boolean;
            alignWithLabel: boolean;
        };
        axisLabel: {
            show: boolean;
            hideOverlap: boolean;
            margin: number;
            formatter: (value: number) => string;
        };
        min: number | undefined;
        max: number | undefined;
    })[];
    series: never[];
    tooltip: {
        show: boolean;
        trigger: string;
        formatter: (params: Object | Array<Object>) => string | undefined;
        confine: boolean;
        appendToBody: boolean;
        axisPointer: {
            type: string;
        };
    };
    legend: {
        show: number;
        type: string;
        bottom: number;
        orient: string;
        itemGap: number;
        padding: number[];
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
    };
};
export declare function getTitleOptions(title: string, subtitle?: string): {
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
