import { FunnelChartConfig } from './types';
export default function getFunnelChartOptions(config: FunnelChartConfig): {
    animation: boolean;
    animationDuration: number;
    color: string[];
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
    series: {
        name: string;
        type: string;
        orient: string;
        funnelAlign: string;
        top: number;
        left: string;
        width: string;
        height: string;
        minSize: string;
        maxSize: string;
        sort: string;
        label: {
            show: boolean;
            position: string;
            lineHeight: number;
            formatter: (params: any) => string;
        };
        labelLine: {
            show: boolean;
        };
        gap: number;
        data: {
            name: any;
            value: any;
            itemStyle: {
                color: string;
                borderColor: string;
                borderWidth: number;
                borderCap: string;
                borderJoin: string;
            };
            emphasis: {
                itemStyle: {
                    color: string;
                    borderColor: string;
                    borderWidth: number;
                    borderCap: string;
                    borderJoin: string;
                };
            };
        }[];
    }[];
    tooltip: {
        trigger: string;
        confine: boolean;
        appendToBody: boolean;
        formatter: (params: any) => string;
    };
};
