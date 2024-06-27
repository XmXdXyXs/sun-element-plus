import { defineComponent as p, openBlock as u, createBlock as d, createVNode as t, resolveComponent as c, withCtx as r, renderSlot as _, unref as f } from "vue";
var s = p({
  name: "Bell"
});
const m = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, v = /* @__PURE__ */ t("path", {
  fill: "currentColor",
  d: "M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z"
}, null, -1), h = /* @__PURE__ */ t("path", {
  fill: "currentColor",
  d: "M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z"
}, null, -1), x = /* @__PURE__ */ t("path", {
  fill: "currentColor",
  d: "M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm352 128h128a64 64 0 0 1-128 0z"
}, null, -1);
function g(e, o, n, l, a, i) {
  return u(), d("svg", m, [
    v,
    h,
    x
  ]);
}
s.render = g;
s.__file = "packages/components/Bell.vue";
const b = /* @__PURE__ */ p({
  __name: "index",
  props: {
    // 显示的图标
    icon: {
      type: String,
      default: "Bell"
    },
    // 通知数量
    value: {
      type: [String, Number],
      default: ""
    },
    // 最大值
    max: {
      type: Number
    },
    // 是否显示小圆点
    isDot: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (o, n) => {
      const l = c("el-icon"), a = c("el-badge"), i = c("el-popover");
      return u(), d(i, {
        "popper-class": "notification-popper-class",
        placement: "bottom",
        width: 300,
        trigger: "click"
      }, {
        default: r(() => [
          _(o.$slots, "default", {}, void 0, !0)
        ]),
        reference: r(() => [
          t(a, {
            style: { cursor: "pointer" },
            value: e.value,
            max: e.max,
            "is-dot": e.isDot
          }, {
            default: r(() => [
              t(l, null, {
                default: r(() => [
                  t(f(s))
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["value", "max", "is-dot"])
        ]),
        _: 3
        /* FORWARDED */
      });
    };
  }
}), w = (e, o) => {
  const n = e.__vccOpts || e;
  for (const [l, a] of o)
    n[l] = a;
  return n;
}, B = /* @__PURE__ */ w(b, [["__scopeId", "data-v-719b5a4b"]]), C = {
  install(e) {
    e.component("sun-notification", B);
  }
};
export {
  C as default
};
