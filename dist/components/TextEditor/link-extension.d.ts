declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        link: {
            /**
             * Opens the link editor bubble menu.
             */
            openLinkEditor: () => ReturnType;
        };
    }
}
export declare const LinkExtension: import('@tiptap/core').Mark<import('@tiptap/extension-link').LinkOptions, any>;
export default LinkExtension;
