(this.webpackJsonpToDoApp = this.webpackJsonpToDoApp || []).push([
  [0],
  // eslint-disable-next-line no-sparse-arrays
  [
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      t.exports = {
        "form-control": "CourseInput_form-control__2bl6C",
        invalid: "CourseInput_invalid__27t7T",
      };
    },
    ,
    ,
    function (t, e, n) {
      t.exports = { button: "Button_button__2w4wY" };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {},
    function (t, e, n) {},
    ,
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(1),
        c = n(7),
        i = n.n(c),
        r = (n(18), n(9)),
        l = n(3),
        s = (n(19), n(0)),
        u = function (t) {
          return Object(s.jsx)("li", {
            className: "goal-item",
            onClick: function () {
              t.onDelete(t.id);
            },
            children: t.children,
          });
        },
        a =
          (n(21),
          function (t) {
            return Object(s.jsx)("ul", {
              className: "goal-list",
              children: t.items.map(function (e) {
                return Object(s.jsx)(
                  u,
                  { id: e.id, onDelete: t.onDeleteItem, children: e.text },
                  e.id
                );
              }),
            });
          }),
        d = n(8),
        j = n.n(d),
        b = function (t) {
          return Object(s.jsx)("button", {
            type: t.type,
            className: j.a.button,
            onClick: t.onClick,
            children: t.children,
          });
        },
        f = n(5),
        h = n.n(f),
        x = function (t) {
          var e = Object(o.useState)(""),
            n = Object(l.a)(e, 2),
            c = n[0],
            i = n[1],
            r = Object(o.useState)(!0),
            u = Object(l.a)(r, 2),
            a = u[0],
            d = u[1];
          return Object(s.jsxs)("form", {
            onSubmit: function (e) {
              // eslint-disable-next-line no-unused-expressions
              e.preventDefault(),
                0 !== c.trim().length ? t.onAddGoal(c) : d(!1);
            },
            children: [
              Object(s.jsxs)("div", {
                className: ""
                  .concat(h.a["form-control"], " ")
                  .concat(!a && h.a.invalid),
                children: [
                  Object(s.jsx)("label", { children: "Course Goal" }),
                  Object(s.jsx)("input", {
                    type: "text",
                    onChange: function (t) {
                      // eslint-disable-next-line no-unused-expressions
                      t.target.value.trim().length > 0 && d(!0),
                        i(t.target.value);
                    },
                  }),
                ],
              }),
              Object(s.jsx)(b, { type: "submit", children: "Add Goal" }),
            ],
          });
        },
        O =
          (n(22),
          function () {
            var t = Object(o.useState)([
                { text: "Do all exercises!", id: "g1" },
                { text: "Finish the course!", id: "g2" },
              ]),
              e = Object(l.a)(t, 2),
              n = e[0],
              c = e[1],
              i = Object(s.jsx)("p", {
                style: { textAlign: "center" },
                children: "No goals found. Maybe add one?",
              });
            return (
              n.length > 0 &&
                (i = Object(s.jsx)(a, {
                  items: n,
                  onDeleteItem: function (t) {
                    c(function (e) {
                      return e.filter(function (e) {
                        return e.id !== t;
                      });
                    });
                  },
                })),
              Object(s.jsxs)("div", {
                children: [
                  Object(s.jsx)("section", {
                    id: "goal-form",
                    children: Object(s.jsx)(x, {
                      onAddGoal: function (t) {
                        c(function (e) {
                          var n = Object(r.a)(e);
                          return (
                            n.unshift({
                              text: t,
                              id: Math.random().toString(),
                            }),
                            n
                          );
                        });
                      },
                    }),
                  }),
                  Object(s.jsx)("section", { id: "goals", children: i }),
                ],
              })
            );
          });
      i.a
        .createRoot(document.getElementById("root"))
        .render(Object(s.jsx)(O, {}));
    },
  ],
  [[23, 1, 2]],
]);
//# sourceMappingURL=main.fe423003.chunk.js.map
