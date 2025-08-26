import { defineComponent as d, useTemplateRef as p, ref as r, createElementBlock as g, openBlock as u, Fragment as v, renderSlot as k, createElementVNode as I, createBlock as C, createCommentVNode as V, normalizeProps as h, guardReactiveProps as y } from "vue";
import { c as B } from "./index-jP4nMNKX.js";
const _ = /* @__PURE__ */ d({
  __name: "InsertImage",
  props: {
    editor: {}
  },
  setup(i) {
    const s = i, a = p("fileInput"), t = r(!1), n = r([]);
    function f() {
      var l;
      (l = a.value) == null || l.click();
    }
    function c(l) {
      const e = l.target.files;
      e && e.length > 0 && (e.length === 1 ? s.editor.chain().focus().uploadImage(e[0]).run() : (n.value = Array.from(e), t.value = !0));
    }
    function m() {
      t.value = !1, n.value = [];
    }
    return (l, o) => (u(), g(v, null, [
      k(l.$slots, "default", h(y({ onClick: f }))),
      I("input", {
        ref_key: "fileInput",
        ref: a,
        type: "file",
        class: "hidden",
        onChange: c,
        accept: "image/*",
        multiple: ""
      }, null, 544),
      t.value ? (u(), C(B, {
        key: 0,
        mode: "new",
        modelValue: t.value,
        "onUpdate:modelValue": o[0] || (o[0] = (e) => t.value = e),
        files: n.value,
        "onUpdate:files": o[1] || (o[1] = (e) => n.value = e),
        editor: l.editor,
        onClose: m
      }, null, 8, ["modelValue", "files", "editor"])) : V("", !0)
    ], 64));
  }
});
export {
  _ as default
};
