/**
 * Shared utilities for color conversion and mapping across text editor extensions
 */
export declare const textColorHexMap: Record<string, string>;
export declare const highlightColorHexMap: Record<string, string>;
export declare const legacyTextColorMap: Record<string, string>;
export declare const legacyHighlightColorMap: Record<string, string>;
/**
 * Converts a hex or RGB color to the closest named color from our allowed list
 * @param color - Color to convert (e.g. "#fee2e2" or "rgb(254, 226, 226)")
 * @param allowedColors - List of allowed color names
 * @param colorMap - Map of color names to hex values to compare against
 * @param legacyMap - Optional legacy color mapping for exact matches
 * @returns The closest named color
 */
export declare function getClosestNamedColor(color: string, allowedColors: string[], colorMap: Record<string, string>, legacyMap?: Record<string, string>): string | null;
/**
 * Extracts color from a style attribute and converts it to the closest named color
 * @param style - CSS style string (e.g., "color: #ff0000; font-weight: bold;")
 * @param allowedColors - List of allowed color names
 * @param colorMap - Map of color names to hex values
 * @param legacyMap - Optional legacy color mapping
 * @param property - CSS property to extract ('color' or 'background-color')
 * @returns The closest named color or null
 */
export declare function extractColorFromStyle(style: string, allowedColors: string[], colorMap?: Record<string, string>, legacyMap?: Record<string, string>, property?: string): string | null;
/**
 * Extracts text color from a style attribute
 */
export declare function extractTextColorFromStyle(style: string, allowedColors: string[]): string | null;
/**
 * Extracts background color from a style attribute for highlights
 */
export declare function extractHighlightColorFromStyle(style: string, allowedColors: string[]): string | null;
