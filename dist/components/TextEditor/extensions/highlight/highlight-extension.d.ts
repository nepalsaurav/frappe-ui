import { Mark } from '@tiptap/core';
export interface HighlightOptions {
    /**
     * HTML tag to wrap the highlighted text
     * @default 'mark'
     */
    HTMLAttributes: Record<string, any>;
    /**
     * Available highlight color names that can be used
     * @default ['yellow', 'blue', 'green', 'red', 'orange', 'purple', 'pink', 'gray']
     */
    colors: string[];
    /**
     * Enable multiple highlight colors
     * @default true
     */
    multicolor: boolean;
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        namedHighlight: {
            /**
             * Set a highlight by color name
             * @param colorName The named color to set (e.g., 'yellow', 'blue')
             * @example editor.commands.setHighlightByName('yellow')
             */
            setHighlightByName: (colorName: string) => ReturnType;
            /**
             * Toggle a highlight by color name
             * @param colorName The named color to toggle (e.g., 'yellow', 'blue')
             * @example editor.commands.toggleHighlightByName('yellow')
             */
            toggleHighlightByName: (colorName: string) => ReturnType;
            /**
             * Unset the highlight
             * @example editor.commands.unsetHighlight()
             */
            unsetHighlight: () => ReturnType;
        };
    }
}
/**
 * This extension allows you to highlight your text using named colors instead of hex/rgb values.
 * Highlights are applied as data attributes that can be styled with CSS for light/dark mode support.
 */
export declare const NamedHighlightExtension: Mark<HighlightOptions, any>;
export { NamedHighlightExtension as default };
