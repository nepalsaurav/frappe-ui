import { defineComponent as t, renderSlot as s, normalizeProps as d, guardReactiveProps as i } from "vue";
const p = /* @__PURE__ */ t({
  __name: "InsertVideo",
  props: {
    editor: {}
  },
  setup(e) {
    const o = e;
    function n() {
      o.editor.chain().focus().selectAndUploadVideo().run();
    }
    return (r, a) => s(r.$slots, "default", d(i({ onClick: n })));
  }
});
export {
  p as default
};
