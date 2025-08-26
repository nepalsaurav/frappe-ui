export declare function formatLabel(name: string): string;
export declare function formatValue(value: number, precision?: number, shorten?: boolean): string;
export type TimeGrain = 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
export declare function formatDate(date: string, format?: string, grain?: TimeGrain): string;
export declare function isObject(item: any): any;
export declare function mergeDeep(target: any, ...sources: any[]): any;
