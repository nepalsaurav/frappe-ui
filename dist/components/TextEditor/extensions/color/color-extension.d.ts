import { Extension } from '@tiptap/core';
export type ColorOptions = {
    /**
     * The types where the color can be applied
     * @default ['textStyle']
     */
    types: string[];
    /**
     * Available color names that can be used
     * @default ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'gray']
     */
    colors: string[];
};
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        namedColor: {
            /**
             * Set the text color by name
             * @param colorName The named color to set (e.g., 'blue', 'red')
             * @example editor.commands.setColorByName('blue')
             */
            setColorByName: (colorName: string) => ReturnType;
            /**
             * Unset the text color
             * @example editor.commands.unsetColor()
             */
            unsetColor: () => ReturnType;
        };
    }
}
/**
 * This extension allows you to color your text using named colors instead of hex/rgb values.
 * Colors are applied as data attributes that can be styled with CSS for light/dark mode support.
 */
export declare const NamedColorExtension: Extension<ColorOptions, any>;
export { NamedColorExtension as default };
