import { default as DialogMain } from './Dialog.vue';
import { DialogTitle, DialogDescription } from 'reka-ui';
export type { DialogProps } from './types';
type DialogExport = typeof DialogMain & {
    Title: typeof DialogTitle;
    Description: typeof DialogDescription;
};
declare const Dialog: DialogExport;
export { Dialog };
