import { DirectiveBinding, VNode } from 'vue';
interface VisibilityElement extends Element {
    _visibility_observer?: IntersectionObserver;
}
declare const _default: {
    beforeMount(el: VisibilityElement, binding: DirectiveBinding, vnode: VNode): void;
    unmounted(el: VisibilityElement): void;
};
export default _default;
