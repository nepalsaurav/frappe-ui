interface UIConfig {
    systemTimezone?: string | null;
    localTimezone?: string | null;
}
export declare function setConfig<K extends keyof UIConfig>(key: K, value: UIConfig[K]): void;
export declare function getConfig<K extends keyof UIConfig>(key: K): UIConfig[K] | null;
export {};
