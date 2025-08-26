import { Editor, Range } from '@tiptap/core';
import { PluginKey } from '@tiptap/pm/state';
import { BaseSuggestionItem } from '../suggestion/createSuggestionExtension';
import { Component as VueComponent } from 'vue';
export declare const SlashCommandSuggestionKey: PluginKey<any>;
export interface CommandItem extends BaseSuggestionItem {
    title: string;
    icon: VueComponent;
    command: (props: CommandExecutionProps) => void;
}
type CommandExecutionProps = {
    editor: Editor;
    range: Range;
};
export declare const SlashCommands: import('@tiptap/core').Extension<Record<string, any> & {
    suggestion: Omit<import('@tiptap/suggestion').SuggestionOptions<CommandItem, any>, "editor">;
}, any>;
export default SlashCommands;
