interface UIConfig {
  // Timezone configurations
  systemTimezone?: string | null
  localTimezone?: string | null
}

let config: UIConfig = {}

export function setConfig<K extends keyof UIConfig>(
  key: K,
  value: UIConfig[K],
): void {
  config[key] = value
}

export function getConfig<K extends keyof UIConfig>(
  key: K,
): UIConfig[K] | null {
  return config[key] ?? null
}
