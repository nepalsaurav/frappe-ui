import { _ as x, a as u, b } from "./index-jP4nMNKX.js";
import { createBlock as d, openBlock as t, withCtx as o, createElementVNode as r, createElementBlock as i, Fragment as k, renderList as g, normalizeClass as m, renderSlot as f, normalizeProps as y, guardReactiveProps as C } from "vue";
const _ = {
  name: "FontColor",
  props: ["editor"],
  components: { Popover: b, Tooltip: u },
  methods: {
    setBackgroundColor(a) {
      a.name != "Default" ? this.editor.chain().focus().toggleHighlightByName(a.name.toLowerCase()).run() : this.editor.chain().focus().unsetHighlight().run();
    },
    setForegroundColor(a) {
      a.name != "Default" ? this.editor.chain().focus().setColorByName(a.name.toLowerCase()).run() : this.editor.chain().focus().unsetColor().run();
    }
  },
  computed: {
    foregroundColors() {
      return [
        { name: "Default", class: "text-ink-gray-9" },
        { name: "Red", class: "text-red-600 dark:text-dark-red-400" },
        { name: "Orange", class: "text-orange-600 dark:text-dark-orange-400" },
        { name: "Yellow", class: "text-yellow-600 dark:text-dark-yellow-400" },
        { name: "Green", class: "text-green-600 dark:text-dark-green-400" },
        { name: "Teal", class: "text-teal-600 dark:text-dark-teal-400" },
        { name: "Cyan", class: "text-cyan-600 dark:text-dark-cyan-400" },
        { name: "Blue", class: "text-blue-600 dark:text-dark-blue-400" },
        { name: "Purple", class: "text-purple-600 dark:text-dark-purple-400" },
        { name: "Pink", class: "text-pink-600 dark:text-dark-pink-400" },
        { name: "Gray", class: "text-gray-600 dark:text-dark-gray-400" }
      ];
    },
    backgroundColors() {
      return [
        { name: "Default", class: "border-outline-gray-modals" },
        {
          name: "Red",
          class: "bg-red-100 dark:bg-dark-red-800 border-transparent"
        },
        {
          name: "Orange",
          class: "bg-orange-100 dark:bg-dark-orange-800 border-transparent"
        },
        {
          name: "Yellow",
          class: "bg-yellow-100 dark:bg-dark-yellow-800 border-transparent"
        },
        {
          name: "Green",
          class: "bg-green-100 dark:bg-dark-green-800 border-transparent"
        },
        {
          name: "Teal",
          class: "bg-teal-100 dark:bg-dark-teal-800 border-transparent"
        },
        {
          name: "Cyan",
          class: "bg-cyan-100 dark:bg-dark-cyan-800 border-transparent"
        },
        {
          name: "Blue",
          class: "bg-blue-100 dark:bg-dark-blue-800 border-transparent"
        },
        {
          name: "Purple",
          class: "bg-purple-100 dark:bg-dark-purple-800 border-transparent"
        },
        {
          name: "Pink",
          class: "bg-pink-100 dark:bg-dark-pink-800 border-transparent"
        },
        {
          name: "Gray",
          class: "bg-gray-100 dark:bg-dark-gray-800 border-transparent"
        }
      ];
    }
  }
}, h = { class: "p-2" }, v = { class: "mt-1 grid grid-cols-6 gap-1" }, w = ["aria-label", "onClick"], B = { class: "mt-1 grid grid-cols-6 gap-1" }, P = ["aria-label", "onClick"];
function F(a, n, T, $, D, s) {
  const c = u, p = b;
  return t(), d(p, { transition: "default" }, {
    target: o(({ togglePopover: e, isOpen: l }) => [
      f(a.$slots, "default", y(C({ onClick: () => e(), isActive: l })))
    ]),
    "body-main": o(() => [
      r("div", h, [
        n[0] || (n[0] = r("div", { class: "text-sm text-ink-gray-7" }, "Text Color", -1)),
        r("div", v, [
          (t(!0), i(k, null, g(s.foregroundColors, (e) => (t(), d(c, {
            class: "flex",
            key: e.name,
            text: e.name
          }, {
            default: o(() => [
              r("button", {
                "aria-label": e.name,
                class: m(["flex h-5 w-5 items-center justify-center rounded border text-base", e.class]),
                onClick: (l) => s.setForegroundColor(e)
              }, " A ", 10, w)
            ]),
            _: 2
          }, 1032, ["text"]))), 128))
        ]),
        n[1] || (n[1] = r("div", { class: "mt-2 text-sm text-ink-gray-7" }, "Background Color", -1)),
        r("div", B, [
          (t(!0), i(k, null, g(s.backgroundColors, (e) => (t(), d(c, {
            class: "flex",
            key: e.name,
            text: e.name
          }, {
            default: o(() => [
              r("button", {
                "aria-label": e.name,
                class: m(["flex h-5 w-5 items-center justify-center rounded border text-base text-ink-gray-9", e.class]),
                onClick: (l) => s.setBackgroundColor(e)
              }, " A ", 10, P)
            ]),
            _: 2
          }, 1032, ["text"]))), 128))
        ])
      ])
    ]),
    _: 3
  });
}
const L = /* @__PURE__ */ x(_, [["render", F]]);
export {
  L as default
};
