import { defineComponent as $, openBlock as e, createBlock as f, createVNode as s, resolveComponent as i, createElementBlock as n, withCtx as u, Fragment as y, renderList as g, unref as m, createCommentVNode as r, createElementVNode as k, toDisplayString as p, createTextVNode as L, normalizeClass as N } from "vue";
var x = $({
  name: "Delete"
});
const D = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, M = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
}, null, -1);
function T(o, _, c, d, v, a) {
  return e(), f("svg", D, [
    M
  ]);
}
x.render = T;
x.__file = "packages/components/Delete.vue";
var C = $({
  name: "Edit"
});
const q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, F = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"
}, null, -1), O = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
}, null, -1);
function S(o, _, c, d, v, a) {
  return e(), f("svg", q, [
    F,
    O
  ]);
}
C.render = S;
C.__file = "packages/components/Edit.vue";
const j = { class: "list-tabs__item" }, G = ["onClick"], J = {
  key: 0,
  class: "avatar"
}, K = { class: "content" }, P = {
  key: 0,
  class: "title"
}, Q = {
  key: 1,
  class: "time"
}, R = {
  key: 2,
  class: "time"
}, U = { class: "actions" }, W = ["onClick"], X = {
  key: 0,
  class: "a-icon"
}, Y = { key: 0 }, Z = { key: 1 }, tt = { class: "a-text" }, et = /* @__PURE__ */ $({
  __name: "index",
  props: {
    // 列表的内容
    list: {
      type: Array,
      required: !0
    },
    // 操作的内容
    actions: {
      type: Array,
      default: () => []
    }
  },
  emits: ["clickItem", "clickAction"],
  setup(o, { emit: _ }) {
    let c = _, d = (a, h) => {
      c("clickItem", { item: a, index: h });
    }, v = (a, h) => {
      c("clickAction", { item: a, index: h });
    };
    return (a, h) => {
      const w = i("el-avatar"), z = i("el-tag"), b = i("el-icon"), H = i("el-scrollbar"), A = i("el-tab-pane"), B = i("el-tabs");
      return e(), n("div", j, [
        s(B, null, {
          default: u(() => [
            (e(!0), n(
              y,
              null,
              g(o.list, (V, E) => (e(), f(A, {
                key: E,
                label: V.title
              }, {
                default: u(() => [
                  s(
                    H,
                    { "max-height": "300px" },
                    {
                      default: u(() => [
                        (e(!0), n(
                          y,
                          null,
                          g(V.content, (t, l) => (e(), n("div", {
                            class: "container",
                            onClick: (I) => m(d)(t, l),
                            key: l
                          }, [
                            t.avatar ? (e(), n("div", J, [
                              s(w, {
                                size: "small",
                                src: t.avatar
                              }, null, 8, ["src"])
                            ])) : r("v-if", !0),
                            k("div", K, [
                              t.title ? (e(), n("div", P, [
                                k(
                                  "div",
                                  null,
                                  p(t.title),
                                  1
                                  /* TEXT */
                                ),
                                t.tag ? (e(), f(z, {
                                  key: 0,
                                  size: "mini",
                                  type: t.tagType
                                }, {
                                  default: u(() => [
                                    L(
                                      p(t.tag),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                }, 1032, ["type"])) : r("v-if", !0)
                              ])) : r("v-if", !0),
                              t.desc ? (e(), n(
                                "div",
                                Q,
                                p(t.desc),
                                1
                                /* TEXT */
                              )) : r("v-if", !0),
                              t.time ? (e(), n(
                                "div",
                                R,
                                p(t.time),
                                1
                                /* TEXT */
                              )) : r("v-if", !0)
                            ])
                          ], 8, G))),
                          128
                          /* KEYED_FRAGMENT */
                        )),
                        k("div", U, [
                          (e(!0), n(
                            y,
                            null,
                            g(o.actions, (t, l) => (e(), n("div", {
                              class: N(["a-item", { border: l !== o.actions.length }]),
                              key: l,
                              onClick: (I) => m(v)(t, l)
                            }, [
                              t.icon ? (e(), n("div", X, [
                                s(
                                  b,
                                  null,
                                  {
                                    default: u(() => [
                                      t.icon == "edit" ? (e(), n("div", Y, [
                                        s(m(C))
                                      ])) : (e(), n("div", Z, [
                                        s(m(x))
                                      ]))
                                    ]),
                                    _: 2
                                    /* DYNAMIC */
                                  },
                                  1024
                                  /* DYNAMIC_SLOTS */
                                )
                              ])) : r("v-if", !0),
                              k(
                                "div",
                                tt,
                                p(t.text),
                                1
                                /* TEXT */
                              )
                            ], 10, W))),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["label"]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        })
      ]);
    };
  }
}), nt = (o, _) => {
  const c = o.__vccOpts || o;
  for (const [d, v] of _)
    c[d] = v;
  return c;
}, ot = /* @__PURE__ */ nt(et, [["__scopeId", "data-v-c7dc41c7"]]), ct = {
  install(o) {
    o.component("sun-list", ot);
  }
};
export {
  ct as default
};
