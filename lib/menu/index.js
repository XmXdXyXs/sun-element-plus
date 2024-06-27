import { defineComponent as A, resolveComponent as f, openBlock as t, createBlock as l, mergeProps as B, withCtx as a, createElementBlock as m, Fragment as y, renderList as k, resolveDynamicComponent as x, unref as s, createCommentVNode as c, createElementVNode as v, toDisplayString as g } from "vue";
const h = (e) => e.replace(/(A-Z)g/, "-$1").toLocaleLowerCase(), L = /* @__PURE__ */ A({
  __name: "index",
  props: {
    // 导航菜单的数据
    data: {
      type: Array,
      required: !0
    },
    // 默认选中的菜单
    defaultActive: {
      type: String,
      default: ""
    },
    // 是否是路由模式
    router: {
      type: Boolean,
      default: !1
    },
    // 键名
    // 菜单标题的键名
    name: {
      type: String,
      default: "name"
    },
    // 菜单标识的键名
    index: {
      type: String,
      default: "index"
    },
    // 菜单图标的键名
    icon: {
      type: String,
      default: "icon"
    },
    // 菜单子菜单的键名
    children: {
      type: String,
      default: "children"
    }
  },
  setup(e) {
    return (o, d) => {
      const u = f("el-menu-item"), i = f("el-sub-menu"), C = f("el-menu");
      return t(), l(C, B({
        class: "el-menu-vertical-demo",
        "default-active": e.defaultActive,
        router: e.router
      }, o.$attrs), {
        default: a(() => [
          (t(!0), m(
            y,
            null,
            k(e.data, (n, S) => (t(), m(
              y,
              { key: S },
              [
                !n[e.children] || !n[e.children].length ? (t(), l(u, {
                  key: 0,
                  index: n[e.index]
                }, {
                  default: a(() => [
                    n[e.icon] ? (t(), l(x(`el-icon-${s(h)(n[e.icon])}`), { key: 0 })) : c("v-if", !0),
                    v(
                      "span",
                      null,
                      g(n[e.name]),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["index"])) : c("v-if", !0),
                n[e.children] && n[e.children].length ? (t(), l(i, {
                  key: 1,
                  index: n[e.index]
                }, {
                  title: a(() => [
                    n[e.icon] ? (t(), l(x(`el-icon-${s(h)(n[e.icon])}`), { key: 0 })) : c("v-if", !0),
                    v(
                      "span",
                      null,
                      g(n[e.name]),
                      1
                      /* TEXT */
                    )
                  ]),
                  default: a(() => [
                    (t(!0), m(
                      y,
                      null,
                      k(n[e.children], (r, $) => (t(), l(u, {
                        key: $,
                        index: r.index
                      }, {
                        default: a(() => [
                          r[e.icon] ? (t(), l(x(`el-icon-${s(h)(r[e.icon])}`), { key: 0 })) : c("v-if", !0),
                          v(
                            "span",
                            null,
                            g(r[e.name]),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["index"]))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["index"])) : c("v-if", !0)
              ],
              64
              /* STABLE_FRAGMENT */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 16, ["default-active", "router"]);
    };
  }
}), b = (e, o) => {
  const d = e.__vccOpts || e;
  for (const [u, i] of o)
    d[u] = i;
  return d;
}, w = /* @__PURE__ */ b(L, [["__scopeId", "data-v-d0e2ba74"]]), E = {
  install(e) {
    e.component("sun-menu", w);
  }
};
export {
  E as default
};
