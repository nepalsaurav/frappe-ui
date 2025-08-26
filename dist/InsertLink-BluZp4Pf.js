import { defineComponent as t, renderSlot as i, normalizeProps as s, guardReactiveProps as p } from "vue";
const c = /* @__PURE__ */ t({
  __name: "InsertLink",
  props: {
    editor: {}
  },
  setup(o) {
    const e = o;
    function n() {
      e.editor.commands.openLinkEditor();
    }
    return (r, a) => i(r.$slots, "default", s(p({ onClick: n })));
  }
});
export {
  c as default
};
