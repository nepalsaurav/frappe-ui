import { TreeNode, TreeProps } from './types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        node: {
            node: TreeNode;
            hasChildren: boolean;
            isCollapsed: boolean;
            toggleCollapsed: (event: MouseEvent) => void;
        };
        icon: {
            hasChildren: boolean;
            isCollapsed: boolean;
        };
        label: {
            node: TreeNode;
            hasChildren: boolean;
            isCollapsed: boolean;
        };
    }> & {
        node: {
            node: TreeNode;
            hasChildren: boolean;
            isCollapsed: boolean;
            toggleCollapsed: (event: MouseEvent) => void;
        };
        icon: {
            hasChildren: boolean;
            isCollapsed: boolean;
        };
        label: {
            node: TreeNode;
            hasChildren: boolean;
            isCollapsed: boolean;
        };
    };
    refs: {
        iconRef: HTMLDivElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<TreeProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<TreeProps> & Readonly<{}>, {
    options: import('./types').TreeOptions;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    iconRef: HTMLDivElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
