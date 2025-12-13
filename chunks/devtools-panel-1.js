import { D as kn, b as he, M as Ie, a as _a, c as as, d as cs, e as Yi } from "./constants-Danu3nx7.js";

import { Rr, de, re } from "./dist/base-0.js";

import { gi, Da, ki, hd, _i, _e, X, Ei, G, ps, _d } from "./dist/base-1.js";

import {
    _n,
    Rn,
    Mt,
    it,
    Re,
    ut,
    gn,
    Ud,
    Hd,
    Oe,
    No,
    je,
    _c,
    ce,
    C,
    _r,
    N,
    ke,
    b,
    ge,
    Te,
    ae,
    _f,
    te,
    hl,
} from "./dist/base-2.js";

import { co, _l, Qt, Pc, ep, tt, Vo, lp } from "./dist/base-3.js";

// Import utilities and stores from base-4.js
import {
    Y,
    Ii,
    up,
    Di,
    wp,
    _p,
    oi,

    // Stores
    jn,
    Bt,
    Vn,
    useStoresStore,
    gu,
} from "./dist/base-4.js";

const ji = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t) n[r] = s;
    return n;
};
const xv = {};
const wv = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 460 460",
    fill: "currentColor",
    stroke: "none",
};
function kv(e, t) {
    return (
        C(),
        N(
            "svg",
            wv,
            t[0] ||
            (t[0] = [
                b(
                    "polygon",
                    {
                        class: "transform text-alpine-400 transition-colors duration-700 dark:text-ice-500",
                        points: "50,230 140,140 320,320 140,320",
                    },
                    null,
                    -1
                ),
                b(
                    "polygon",
                    {
                        class: "transform text-silver-600 transition-colors duration-700 dark:text-silver-500",
                        points: "320,140 410,230 320,320 230,230",
                    },
                    null,
                    -1
                ),
            ])
        )
    );
}
const bu = ji(xv, [["render", kv]]);
const yu = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const Qs = (e, t, n, r = "") => {
    const s = e.split(":");
    if (e.slice(0, 1) === "@") {
        if (s.length < 2 || s.length > 3) return null;
        r = s.shift().slice(1);
    }
    if (s.length > 3 || !s.length) return null;
    if (s.length > 1) {
        const l = s.pop(),
            a = s.pop(),
            u = {
                provider: s.length > 0 ? s[0] : r,
                prefix: a,
                name: l,
            };
        return t && !os(u) ? null : u;
    }
    const o = s[0],
        i = o.split("-");
    if (i.length > 1) {
        const l = {
            provider: r,
            prefix: i.shift(),
            name: i.join("-"),
        };
        return t && !os(l) ? null : l;
    }
    if (n && r === "") {
        const l = {
            provider: r,
            prefix: "",
            name: o,
        };
        return t && !os(l, n) ? null : l;
    }
    return null;
};
const os = (e, t) => (e ? !!(((t && e.prefix === "") || e.prefix) && e.name) : !1);
const xu = Object.freeze({
    left: 0,
    top: 0,
    width: 16,
    height: 16,
});
const Es = Object.freeze({
    rotate: 0,
    vFlip: !1,
    hFlip: !1,
});
const Zs = Object.freeze({
    ...xu,
    ...Es,
});
const ii = Object.freeze({
    ...Zs,
    body: "",
    hidden: !1,
});
function _v(e, t) {
    const n = {};
    !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
    const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
    return r && (n.rotate = r), n;
}
function aa(e, t) {
    const n = _v(e, t);
    for (const r in ii)
        r in Es ? r in e && !(r in n) && (n[r] = Es[r]) : r in t ? (n[r] = t[r]) : r in e && (n[r] = e[r]);
    return n;
}
function Sv(e, t) {
    const n = e.icons,
        r = e.aliases || Object.create(null),
        s = Object.create(null);
    function o(i) {
        if (n[i]) return (s[i] = []);
        if (!(i in s)) {
            s[i] = null;
            const l = r[i] && r[i].parent,
                a = l && o(l);
            a && (s[i] = [l].concat(a));
        }
        return s[i];
    }
    return Object.keys(n).concat(Object.keys(r)).forEach(o), s;
}
function Ev(e, t, n) {
    const r = e.icons,
        s = e.aliases || Object.create(null);
    let o = {};
    function i(l) {
        o = aa(r[l] || s[l], o);
    }
    return i(t), n.forEach(i), aa(e, o);
}
function wu(e, t) {
    const n = [];
    if (typeof e != "object" || typeof e.icons != "object") return n;
    e.not_found instanceof Array &&
        e.not_found.forEach((s) => {
            t(s, null), n.push(s);
        });
    const r = Sv(e);
    for (const s in r) {
        const o = r[s];
        o && (t(s, Ev(e, s, o)), n.push(s));
    }
    return n;
}
const Cv = {
    provider: "",
    aliases: {},
    not_found: {},
    ...xu,
};
function Ro(e, t) {
    for (const n in t) if (n in e && typeof e[n] != typeof t[n]) return !1;
    return !0;
}
function ku(e) {
    if (typeof e != "object" || e === null) return null;
    const t = e;
    if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !Ro(e, Cv)) return null;
    const n = t.icons;
    for (const s in n) {
        const o = n[s];
        if (!s || typeof o.body != "string" || !Ro(o, ii)) return null;
    }
    const r = t.aliases || Object.create(null);
    for (const s in r) {
        const o = r[s],
            i = o.parent;
        if (!s || typeof i != "string" || (!n[i] && !r[i]) || !Ro(o, ii)) return null;
    }
    return t;
}
const ca = Object.create(null);
function Av(e, t) {
    return {
        provider: e,
        prefix: t,
        icons: Object.create(null),
        missing: new Set(),
    };
}
function Nn(e, t) {
    const n = ca[e] || (ca[e] = Object.create(null));
    return n[t] || (n[t] = Av(e, t));
}
function _u(e, t) {
    return ku(t)
        ? wu(t, (n, r) => {
            r ? (e.icons[n] = r) : e.missing.add(n);
        })
        : [];
}
function Tv(e, t, n) {
    try {
        if (typeof n.body == "string")
            return (
                (e.icons[t] = {
                    ...n,
                }),
                !0
            );
    } catch { }
    return !1;
}
let Tr = !1;
function Su(e) {
    return typeof e == "boolean" && (Tr = e), Tr;
}
function Ov(e) {
    const t = typeof e == "string" ? Qs(e, !0, Tr) : e;
    if (t) {
        const n = Nn(t.provider, t.prefix),
            r = t.name;
        return n.icons[r] || (n.missing.has(r) ? null : void 0);
    }
}
function Rv(e, t) {
    const n = Qs(e, !0, Tr);
    if (!n) return !1;
    const r = Nn(n.provider, n.prefix);
    return t ? Tv(r, n.name, t) : (r.missing.add(n.name), !0);
}
function Iv(e, t) {
    if (typeof e != "object") return !1;
    if ((typeof t != "string" && (t = e.provider || ""), Tr && !t && !e.prefix)) {
        let s = !1;
        return (
            ku(e) &&
            ((e.prefix = ""),
                wu(e, (o, i) => {
                    Rv(o, i) && (s = !0);
                })),
            s
        );
    }
    const n = e.prefix;
    if (
        !os({
            prefix: n,
            name: "a",
        })
    )
        return !1;
    const r = Nn(t, n);
    return !!_u(r, e);
}
const Eu = Object.freeze({
    width: null,
    height: null,
});
const Cu = Object.freeze({
    ...Eu,
    ...Es,
});
const Dv = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const Pv = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function ua(e, t, n) {
    if (t === 1) return e;
    if (((n = n || 100), typeof e == "number")) return Math.ceil(e * t * n) / n;
    if (typeof e != "string") return e;
    const r = e.split(Dv);
    if (r === null || !r.length) return e;
    const s = [];
    let o = r.shift(),
        i = Pv.test(o);
    for (; ;) {
        if (i) {
            const l = parseFloat(o);
            isNaN(l) ? s.push(o) : s.push(Math.ceil(l * t * n) / n);
        } else s.push(o);
        if (((o = r.shift()), o === void 0)) return s.join("");
        i = !i;
    }
}
function $v(e, t = "defs") {
    let n = "";
    const r = e.indexOf("<" + t);
    for (; r >= 0;) {
        const s = e.indexOf(">", r),
            o = e.indexOf("</" + t);
        if (s === -1 || o === -1) break;
        const i = e.indexOf(">", o);
        if (i === -1) break;
        (n += e.slice(s + 1, o).trim()), (e = e.slice(0, r).trim() + e.slice(i + 1));
    }
    return {
        defs: n,
        content: e,
    };
}
function Lv(e, t) {
    return e ? "<defs>" + e + "</defs>" + t : t;
}
function Nv(e, t, n) {
    const r = $v(e);
    return Lv(r.defs, t + r.content + n);
}
const Fv = (e) => e === "unset" || e === "undefined" || e === "none";
function Mv(e, t) {
    const n = {
        ...Zs,
        ...e,
    },
        r = {
            ...Cu,
            ...t,
        },
        s = {
            left: n.left,
            top: n.top,
            width: n.width,
            height: n.height,
        };
    let o = n.body;
    [n, r].forEach((v) => {
        const f = [],
            x = v.hFlip,
            S = v.vFlip;
        let A = v.rotate;
        x
            ? S
                ? (A += 2)
                : (f.push("translate(" + (s.width + s.left).toString() + " " + (0 - s.top).toString() + ")"),
                    f.push("scale(-1 1)"),
                    (s.top = s.left = 0))
            : S &&
            (f.push("translate(" + (0 - s.left).toString() + " " + (s.height + s.top).toString() + ")"),
                f.push("scale(1 -1)"),
                (s.top = s.left = 0));
        let k;
        switch ((A < 0 && (A -= Math.floor(A / 4) * 4), (A = A % 4), A)) {
            case 1:
                (k = s.height / 2 + s.top), f.unshift("rotate(90 " + k.toString() + " " + k.toString() + ")");
                break;
            case 2:
                f.unshift("rotate(180 " + (s.width / 2 + s.left).toString() + " " + (s.height / 2 + s.top).toString() + ")");
                break;
            case 3:
                (k = s.width / 2 + s.left), f.unshift("rotate(-90 " + k.toString() + " " + k.toString() + ")");
                break;
        }
        A % 2 === 1 &&
            (s.left !== s.top && ((k = s.left), (s.left = s.top), (s.top = k)),
                s.width !== s.height && ((k = s.width), (s.width = s.height), (s.height = k))),
            f.length && (o = Nv(o, '<g transform="' + f.join(" ") + '">', "</g>"));
    });
    const i = r.width,
        l = r.height,
        a = s.width,
        u = s.height;
    let c, d;
    i === null
        ? ((d = l === null ? "1em" : l === "auto" ? u : l), (c = ua(d, a / u)))
        : ((c = i === "auto" ? a : i), (d = l === null ? ua(c, u / a) : l === "auto" ? u : l));
    const p = {},
        m = (v, f) => {
            Fv(f) || (p[v] = f.toString());
        };
    m("width", c), m("height", d);
    const y = [s.left, s.top, a, u];
    return (
        (p.viewBox = y.join(" ")),
        {
            attributes: p,
            viewBox: y,
            body: o,
        }
    );
}
const jv = /\sid="(\S+)"/g;
const Uv = "IconifyId" + Date.now().toString(16) + ((Math.random() * 16777216) | 0).toString(16);
let Hv = 0;
function Bv(e, t = Uv) {
    const n = [];
    let r;
    for (; (r = jv.exec(e));) n.push(r[1]);
    if (!n.length) return e;
    const s = "suffix" + ((Math.random() * 16777216) | Date.now()).toString(16);
    return (
        n.forEach((o) => {
            const i = typeof t == "function" ? t(o) : t + (Hv++).toString(),
                l = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            e = e.replace(new RegExp('([#;"])(' + l + ')([")]|\\.[a-z])', "g"), "$1" + i + s + "$3");
        }),
        (e = e.replace(new RegExp(s, "g"), "")),
        e
    );
}
const li = Object.create(null);
function Vv(e, t) {
    li[e] = t;
}
function ai(e) {
    return li[e] || li[""];
}
function Ui(e) {
    let t;
    if (typeof e.resources == "string") t = [e.resources];
    else if (((t = e.resources), !(t instanceof Array) || !t.length)) return null;
    return {
        resources: t,
        path: e.path || "/",
        maxURL: e.maxURL || 500,
        rotate: e.rotate || 750,
        timeout: e.timeout || 5e3,
        random: e.random === !0,
        index: e.index || 0,
        dataAfterTimeout: e.dataAfterTimeout !== !1,
    };
}
const Hi = Object.create(null);
const ir = ["https://api.simplesvg.com", "https://api.unisvg.com"];
const is = [];
for (; ir.length > 0;) ir.length === 1 || Math.random() > 0.5 ? is.push(ir.shift()) : is.push(ir.pop());
Hi[""] = Ui({
    resources: ["https://api.iconify.design"].concat(is),
});
function zv(e, t) {
    const n = Ui(t);
    return n === null ? !1 : ((Hi[e] = n), !0);
}
function Bi(e) {
    return Hi[e];
}
const qv = () => {
    let e;
    try {
        if (((e = fetch), typeof e == "function")) return e;
    } catch { }
};
let da = qv();
function Kv(e, t) {
    const n = Bi(e);
    if (!n) return 0;
    let r;
    if (!n.maxURL) r = 0;
    else {
        let s = 0;
        n.resources.forEach((i) => {
            s = Math.max(s, i.length);
        });
        const o = t + ".json?icons=";
        r = n.maxURL - s - n.path.length - o.length;
    }
    return r;
}
function Wv(e) {
    return e === 404;
}
const Gv = (e, t, n) => {
    const r = [],
        s = Kv(e, t),
        o = "icons";
    let i = {
        type: o,
        provider: e,
        prefix: t,
        icons: [],
    },
        l = 0;
    return (
        n.forEach((a, u) => {
            (l += a.length + 1),
                l >= s &&
                u > 0 &&
                (r.push(i),
                    (i = {
                        type: o,
                        provider: e,
                        prefix: t,
                        icons: [],
                    }),
                    (l = a.length)),
                i.icons.push(a);
        }),
        r.push(i),
        r
    );
};
function Jv(e) {
    if (typeof e == "string") {
        const t = Bi(e);
        if (t) return t.path;
    }
    return "/";
}
const Yv = (e, t, n) => {
    if (!da) {
        n("abort", 424);
        return;
    }
    let r = Jv(t.provider);
    switch (t.type) {
        case "icons": {
            const o = t.prefix,
                l = t.icons.join(","),
                a = new URLSearchParams({
                    icons: l,
                });
            r += o + ".json?" + a.toString();
            break;
        }
        case "custom": {
            const o = t.uri;
            r += o.slice(0, 1) === "/" ? o.slice(1) : o;
            break;
        }
        default:
            n("abort", 400);
            return;
    }
    let s = 503;
    da(e + r)
        .then((o) => {
            const i = o.status;
            if (i !== 200) {
                setTimeout(() => {
                    n(Wv(i) ? "abort" : "next", i);
                });
                return;
            }
            return (s = 501), o.json();
        })
        .then((o) => {
            if (typeof o != "object" || o === null) {
                setTimeout(() => {
                    o === 404 ? n("abort", o) : n("next", s);
                });
                return;
            }
            setTimeout(() => {
                n("success", o);
            });
        })
        .catch(() => {
            n("next", s);
        });
};
const Xv = {
    prepare: Gv,
    send: Yv,
};
function Qv(e) {
    const t = {
        loaded: [],
        missing: [],
        pending: [],
    },
        n = Object.create(null);
    e.sort((s, o) =>
        s.provider !== o.provider
            ? s.provider.localeCompare(o.provider)
            : s.prefix !== o.prefix
                ? s.prefix.localeCompare(o.prefix)
                : s.name.localeCompare(o.name)
    );
    let r = {
        provider: "",
        prefix: "",
        name: "",
    };
    return (
        e.forEach((s) => {
            if (r.name === s.name && r.prefix === s.prefix && r.provider === s.provider) return;
            r = s;
            const o = s.provider,
                i = s.prefix,
                l = s.name,
                a = n[o] || (n[o] = Object.create(null)),
                u = a[i] || (a[i] = Nn(o, i));
            let c;
            l in u.icons ? (c = t.loaded) : i === "" || u.missing.has(l) ? (c = t.missing) : (c = t.pending);
            const d = {
                provider: o,
                prefix: i,
                name: l,
            };
            c.push(d);
        }),
        t
    );
}
function Au(e, t) {
    e.forEach((n) => {
        const r = n.loaderCallbacks;
        r && (n.loaderCallbacks = r.filter((s) => s.id !== t));
    });
}
function Zv(e) {
    e.pendingCallbacksFlag ||
        ((e.pendingCallbacksFlag = !0),
            setTimeout(() => {
                e.pendingCallbacksFlag = !1;
                const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
                if (!t.length) return;
                let n = !1;
                const r = e.provider,
                    s = e.prefix;
                t.forEach((o) => {
                    const i = o.icons,
                        l = i.pending.length;
                    (i.pending = i.pending.filter((a) => {
                        if (a.prefix !== s) return !0;
                        const u = a.name;
                        if (e.icons[u])
                            i.loaded.push({
                                provider: r,
                                prefix: s,
                                name: u,
                            });
                        else if (e.missing.has(u))
                            i.missing.push({
                                provider: r,
                                prefix: s,
                                name: u,
                            });
                        else return (n = !0), !0;
                        return !1;
                    })),
                        i.pending.length !== l &&
                        (n || Au([e], o.id), o.callback(i.loaded.slice(0), i.missing.slice(0), i.pending.slice(0), o.abort));
                });
            }));
}
let em = 0;
function tm(e, t, n) {
    const r = em++,
        s = Au.bind(null, n, r);
    if (!t.pending.length) return s;
    const o = {
        id: r,
        icons: t,
        callback: e,
        abort: s,
    };
    return (
        n.forEach((i) => {
            (i.loaderCallbacks || (i.loaderCallbacks = [])).push(o);
        }),
        s
    );
}
function nm(e, t = !0, n = !1) {
    const r = [];
    return (
        e.forEach((s) => {
            const o = typeof s == "string" ? Qs(s, t, n) : s;
            o && r.push(o);
        }),
        r
    );
}
var rm = {
    resources: [],
    index: 0,
    timeout: 2e3,
    rotate: 750,
    random: !1,
    dataAfterTimeout: !1,
};
function sm(e, t, n, r) {
    const s = e.resources.length,
        o = e.random ? Math.floor(Math.random() * s) : e.index;
    let i;
    if (e.random) {
        let O = e.resources.slice(0);
        for (i = []; O.length > 1;) {
            const U = Math.floor(Math.random() * O.length);
            i.push(O[U]), (O = O.slice(0, U).concat(O.slice(U + 1)));
        }
        i = i.concat(O);
    } else i = e.resources.slice(o).concat(e.resources.slice(0, o));
    const l = Date.now();
    let a = "pending",
        u = 0,
        c,
        d = null,
        p = [],
        m = [];
    typeof r == "function" && m.push(r);
    function y() {
        d && (clearTimeout(d), (d = null));
    }
    function v() {
        a === "pending" && (a = "aborted"),
            y(),
            p.forEach((O) => {
                O.status === "pending" && (O.status = "aborted");
            }),
            (p = []);
    }
    function f(O, U) {
        U && (m = []), typeof O == "function" && m.push(O);
    }
    function x() {
        return {
            startTime: l,
            payload: t,
            status: a,
            queriesSent: u,
            queriesPending: p.length,
            subscribe: f,
            abort: v,
        };
    }
    function S() {
        (a = "failed"),
            m.forEach((O) => {
                O(void 0, c);
            });
    }
    function A() {
        p.forEach((O) => {
            O.status === "pending" && (O.status = "aborted");
        }),
            (p = []);
    }
    function k(O, U, V) {
        const D = U !== "success";
        switch (((p = p.filter((se) => se !== O)), a)) {
            case "pending":
                break;
            case "failed":
                if (D || !e.dataAfterTimeout) return;
                break;
            default:
                return;
        }
        if (U === "abort") {
            (c = V), S();
            return;
        }
        if (D) {
            (c = V), p.length || (i.length ? $() : S());
            return;
        }
        if ((y(), A(), !e.random)) {
            const se = e.resources.indexOf(O.resource);
            se !== -1 && se !== e.index && (e.index = se);
        }
        (a = "completed"),
            m.forEach((se) => {
                se(V);
            });
    }
    function $() {
        if (a !== "pending") return;
        y();
        const O = i.shift();
        if (O === void 0) {
            if (p.length) {
                d = setTimeout(() => {
                    y(), a === "pending" && (A(), S());
                }, e.timeout);
                return;
            }
            S();
            return;
        }
        const U = {
            status: "pending",
            resource: O,
            callback: (V, D) => {
                k(U, V, D);
            },
        };
        p.push(U), u++, (d = setTimeout($, e.rotate)), n(O, t, U.callback);
    }
    return setTimeout($), x;
}
function Tu(e) {
    const t = {
        ...rm,
        ...e,
    };
    let n = [];
    function r() {
        n = n.filter((l) => l().status === "pending");
    }
    function s(l, a, u) {
        const c = sm(t, l, a, (d, p) => {
            r(), u && u(d, p);
        });
        return n.push(c), c;
    }
    function o(l) {
        return n.find((a) => l(a)) || null;
    }
    return {
        query: s,
        find: o,
        setIndex: (l) => {
            t.index = l;
        },
        getIndex: () => t.index,
        cleanup: r,
    };
}
function fa() { }
const Io = Object.create(null);
function om(e) {
    if (!Io[e]) {
        const t = Bi(e);
        if (!t) return;
        const n = Tu(t),
            r = {
                config: t,
                redundancy: n,
            };
        Io[e] = r;
    }
    return Io[e];
}
function im(e, t, n) {
    let r, s;
    if (typeof e == "string") {
        const o = ai(e);
        if (!o) return n(void 0, 424), fa;
        s = o.send;
        const i = om(e);
        i && (r = i.redundancy);
    } else {
        const o = Ui(e);
        if (o) {
            r = Tu(o);
            const i = e.resources ? e.resources[0] : "",
                l = ai(i);
            l && (s = l.send);
        }
    }
    return !r || !s ? (n(void 0, 424), fa) : r.query(t, s, n)().abort;
}
function pa() { }
function lm(e) {
    e.iconsLoaderFlag ||
        ((e.iconsLoaderFlag = !0),
            setTimeout(() => {
                (e.iconsLoaderFlag = !1), Zv(e);
            }));
}
function am(e) {
    const t = [],
        n = [];
    return (
        e.forEach((r) => {
            (r.match(yu) ? t : n).push(r);
        }),
        {
            valid: t,
            invalid: n,
        }
    );
}
function lr(e, t, n) {
    function r() {
        const s = e.pendingIcons;
        t.forEach((o) => {
            s && s.delete(o), e.icons[o] || e.missing.add(o);
        });
    }
    if (n && typeof n == "object")
        try {
            if (!_u(e, n).length) {
                r();
                return;
            }
        } catch (s) {
            console.error(s);
        }
    r(), lm(e);
}

function ha(e, t) {
    e instanceof Promise
        ? e
            .then((n) => {
                t(n);
            })
            .catch(() => {
                t(null);
            })
        : t(e);
}
function cm(e, t) {
    e.iconsToLoad ? (e.iconsToLoad = e.iconsToLoad.concat(t).sort()) : (e.iconsToLoad = t),
        e.iconsQueueFlag ||
        ((e.iconsQueueFlag = !0),
            setTimeout(() => {
                e.iconsQueueFlag = !1;
                const { provider: n, prefix: r } = e,
                    s = e.iconsToLoad;
                if ((delete e.iconsToLoad, !s || !s.length)) return;
                const o = e.loadIcon;
                if (e.loadIcons && (s.length > 1 || !o)) {
                    ha(e.loadIcons(s, r, n), (c) => {
                        lr(e, s, c);
                    });
                    return;
                }
                if (o) {
                    s.forEach((c) => {
                        const d = o(c, r, n);
                        ha(d, (p) => {
                            const m = p
                                ? {
                                    prefix: r,
                                    icons: {
                                        [c]: p,
                                    },
                                }
                                : null;
                            lr(e, [c], m);
                        });
                    });
                    return;
                }
                const { valid: i, invalid: l } = am(s);
                if ((l.length && lr(e, l, null), !i.length)) return;
                const a = r.match(yu) ? ai(n) : null;
                if (!a) {
                    lr(e, i, null);
                    return;
                }
                a.prepare(n, r, i).forEach((c) => {
                    im(n, c, (d) => {
                        lr(e, c.icons, d);
                    });
                });
            }));
}
const um = (e, t) => {
    const n = nm(e, !0, Su()),
        r = Qv(n);
    if (!r.pending.length) {
        let a = !0;
        return (
            t &&
            setTimeout(() => {
                a && t(r.loaded, r.missing, r.pending, pa);
            }),
            () => {
                a = !1;
            }
        );
    }
    const s = Object.create(null),
        o = [];
    let i, l;
    return (
        r.pending.forEach((a) => {
            const { provider: u, prefix: c } = a;
            if (c === l && u === i) return;
            (i = u), (l = c), o.push(Nn(u, c));
            const d = s[u] || (s[u] = Object.create(null));
            d[c] || (d[c] = []);
        }),
        r.pending.forEach((a) => {
            const { provider: u, prefix: c, name: d } = a,
                p = Nn(u, c),
                m = p.pendingIcons || (p.pendingIcons = new Set());
            m.has(d) || (m.add(d), s[u][c].push(d));
        }),
        o.forEach((a) => {
            const u = s[a.provider][a.prefix];
            u.length && cm(a, u);
        }),
        t ? tm(t, r, o) : pa
    );
};
function dm(e, t) {
    const n = {
        ...e,
    };
    for (const r in t) {
        const s = t[r],
            o = typeof s;
        r in Eu
            ? (s === null || (s && (o === "string" || o === "number"))) && (n[r] = s)
            : o === typeof n[r] && (n[r] = r === "rotate" ? s % 4 : s);
    }
    return n;
}
const fm = /[\s,]+/;
function pm(e, t) {
    t.split(fm).forEach((n) => {
        switch (n.trim()) {
            case "horizontal":
                e.hFlip = !0;
                break;
            case "vertical":
                e.vFlip = !0;
                break;
        }
    });
}
function hm(e, t = 0) {
    const n = e.replace(/^-?[0-9.]*/, "");
    function r(s) {
        for (; s < 0;) s += 4;
        return s % 4;
    }
    if (n === "") {
        const s = parseInt(e);
        return isNaN(s) ? 0 : r(s);
    } else if (n !== e) {
        let s = 0;
        switch (n) {
            case "%":
                s = 25;
                break;
            case "deg":
                s = 90;
        }
        if (s) {
            let o = parseFloat(e.slice(0, e.length - n.length));
            return isNaN(o) ? 0 : ((o = o / s), o % 1 === 0 ? r(o) : 0);
        }
    }
    return t;
}
function vm(e, t) {
    let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for (const r in t) n += " " + r + '="' + t[r] + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function mm(e) {
    return e
        .replace(/"/g, "'")
        .replace(/%/g, "%25")
        .replace(/#/g, "%23")
        .replace(/</g, "%3C")
        .replace(/>/g, "%3E")
        .replace(/\s+/g, " ");
}
function gm(e) {
    return "data:image/svg+xml," + mm(e);
}
function bm(e) {
    return 'url("' + gm(e) + '")';
}
const va = {
    ...Cu,
    inline: !1,
};
const ym = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "aria-hidden": !0,
    role: "img",
};
const xm = {
    display: "inline-block",
};
const ci = {
    backgroundColor: "currentColor",
};
const Ou = {
    backgroundColor: "transparent",
};
const ma = {
    Image: "var(--svg)",
    Repeat: "no-repeat",
    Size: "100% 100%",
};
const ga = {
    webkitMask: ci,
    mask: ci,
    background: Ou,
};
for (const e in ga) {
    const t = ga[e];
    for (const n in ma) t[e + n] = ma[n];
}
const ls = {};
["horizontal", "vertical"].forEach((e) => {
    const t = e.slice(0, 1) + "Flip";
    (ls[e + "-flip"] = t), (ls[e.slice(0, 1) + "-flip"] = t), (ls[e + "Flip"] = t);
});
function ba(e) {
    return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const ya = (e, t) => {
    const n = dm(va, t),
        r = {
            ...ym,
        },
        s = t.mode || "svg",
        o = {},
        i = t.style,
        l = typeof i == "object" && !(i instanceof Array) ? i : {};
    for (let v in t) {
        const f = t[v];
        if (f !== void 0)
            switch (v) {
                case "icon":
                case "style":
                case "onLoad":
                case "mode":
                case "ssr":
                    break;
                case "inline":
                case "hFlip":
                case "vFlip":
                    n[v] = f === !0 || f === "true" || f === 1;
                    break;
                case "flip":
                    typeof f == "string" && pm(n, f);
                    break;
                case "color":
                    o.color = f;
                    break;
                case "rotate":
                    typeof f == "string" ? (n[v] = hm(f)) : typeof f == "number" && (n[v] = f);
                    break;
                case "ariaHidden":
                case "aria-hidden":
                    f !== !0 && f !== "true" && delete r["aria-hidden"];
                    break;
                default: {
                    const x = ls[v];
                    x ? (f === !0 || f === "true" || f === 1) && (n[x] = !0) : va[v] === void 0 && (r[v] = f);
                }
            }
    }
    const a = Mv(e, n),
        u = a.attributes;
    if ((n.inline && (o.verticalAlign = "-0.125em"), s === "svg")) {
        (r.style = {
            ...o,
            ...l,
        }),
            Object.assign(r, u);
        let v = 0,
            f = t.id;
        return (
            typeof f == "string" && (f = f.replace(/-/g, "_")),
            (r.innerHTML = Bv(a.body, f ? () => f + "ID" + v++ : "iconifyVue")),
            hl("svg", r)
        );
    }
    const { body: c, width: d, height: p } = e,
        m = s === "mask" || (s === "bg" ? !1 : c.indexOf("currentColor") !== -1),
        y = vm(c, {
            ...u,
            width: d + "",
            height: p + "",
        });
    return (
        (r.style = {
            ...o,
            "--svg": bm(y),
            width: ba(u.width),
            height: ba(u.height),
            ...xm,
            ...(m ? ci : Ou),
            ...l,
        }),
        hl("span", r)
    );
};
Su(!0);
Vv("", Xv);
if (typeof document < "u" && typeof window < "u") {
    const e = window;
    if (e.IconifyPreload !== void 0) {
        const t = e.IconifyPreload,
            n = "Invalid IconifyPreload syntax.";
        typeof t == "object" &&
            t !== null &&
            (t instanceof Array ? t : [t]).forEach((r) => {
                try {
                    (typeof r != "object" ||
                        r === null ||
                        r instanceof Array ||
                        typeof r.icons != "object" ||
                        typeof r.prefix != "string" ||
                        !Iv(r)) &&
                        console.error(n);
                } catch {
                    console.error(n);
                }
            });
    }
    if (e.IconifyProviders !== void 0) {
        const t = e.IconifyProviders;
        if (typeof t == "object" && t !== null)
            for (let n in t) {
                const r = "IconifyProviders[" + n + "] is invalid.";
                try {
                    const s = t[n];
                    if (typeof s != "object" || !s || s.resources === void 0) continue;
                    zv(n, s) || console.error(r);
                } catch {
                    console.error(r);
                }
            }
    }
}
const wm = {
    ...Zs,
    body: "",
};
const Cs = Re(
    (e, { emit: t }) => {
        const n = X(null);
        function r() {
            n.value && (n.value.abort?.(), (n.value = null));
        }
        const s = X(!!e.ssr),
            o = X(""),
            i = Ei(null);
        function l() {
            const u = e.icon;
            if (typeof u == "object" && u !== null && typeof u.body == "string")
                return (
                    (o.value = ""),
                    {
                        data: u,
                    }
                );
            let c;
            if (typeof u != "string" || (c = Qs(u, !1, !0)) === null) return null;
            let d = Ov(c);
            if (!d) {
                const y = n.value;
                return (
                    (!y || y.name !== u) &&
                    (d === null
                        ? (n.value = {
                            name: u,
                        })
                        : (n.value = {
                            name: u,
                            abort: um([c], a),
                        })),
                    null
                );
            }
            r(),
                o.value !== u &&
                ((o.value = u),
                    Rn(() => {
                        t("load", u);
                    }));
            const p = e.customise;
            if (p) {
                d = Object.assign({}, d);
                const y = p(d.body, c.name, c.prefix, c.provider);
                typeof y == "string" && (d.body = y);
            }
            const m = ["iconify"];
            return (
                c.prefix !== "" && m.push("iconify--" + c.prefix),
                c.provider !== "" && m.push("iconify--" + c.provider),
                {
                    data: d,
                    classes: m,
                }
            );
        }
        function a() {
            const u = l();
            u ? u.data !== i.value?.data && (i.value = u) : (i.value = null);
        }
        return (
            s.value
                ? a()
                : ut(() => {
                    (s.value = !0), a();
                }),
            je(() => e.icon, a),
            gn(r),
            () => {
                const u = i.value;
                if (!u) return ya(wm, e);
                let c = e;
                return (
                    u.classes &&
                    (c = {
                        ...e,
                        class: u.classes.join(" "),
                    }),
                    ya(
                        {
                            ...Zs,
                            ...u.data,
                        },
                        c
                    )
                );
            }
        );
    },
    {
        props: [
            "icon",
            "mode",
            "ssr",
            "width",
            "height",
            "style",
            "color",
            "inline",
            "rotate",
            "hFlip",
            "horizontalFlip",
            "vFlip",
            "verticalFlip",
            "flip",
            "id",
            "ariaHidden",
            "customise",
            "title",
        ],
        emits: ["load"],
    }
);
const km = Re({
    __name: "IconifyIcon",
    props: {
        icon: {},
        size: {},
    },
    setup(e) {
        return (t, n) => (
            C(),
            ke(
                G(Cs),
                {
                    icon: t.icon,
                    width: t.size || 20,
                    height: t.size || 20,
                },
                null,
                8,
                ["icon", "width", "height"]
            )
        );
    },
});
const _m = {
    key: 0,
    class:
        "ml-auto rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-200",
};
const xa = Re({
    __name: "SideNavItem",
    props: {
        id: {},
        title: {},
        active: {
            type: Boolean,
        },
        icon: {},
        collapsed: {
            type: Boolean,
        },
        disabled: {
            type: Boolean,
        },
        badge: {},
    },
    emits: ["select"],
    setup(e) {
        return (t, n) => (
            C(),
            N(
                "div",
                {
                    onClick: n[0] || (n[0] = (r) => t.$emit("select", t.id)),
                    class: de([
                        "flex min-h-[42px] min-w-[42px] cursor-pointer items-center rounded transition-colors duration-200 hover:bg-devtools-state-hover dark:hover:bg-devtools-state-hover-dark",
                        {
                            "bg-devtools-state-selected dark:bg-devtools-state-selected-dark": t.active,
                            "cursor-not-allowed opacity-70": t.disabled,
                        },
                    ]),
                },
                [
                    ge(
                        km,
                        {
                            icon: t.icon,
                            class: de([
                                "m-3 h-4 w-4 flex-shrink-0",
                                {
                                    "text-devtools-primary dark:text-devtools-primary-dark": t.active,
                                    "text-devtools-text-primary dark:text-devtools-text-primary-dark": !t.active && !t.disabled,
                                    "text-devtools-text-disabled dark:text-devtools-text-disabled-dark": t.disabled,
                                },
                            ]),
                        },
                        null,
                        8,
                        ["icon", "class"]
                    ),
                    b(
                        "div",
                        {
                            class: de([
                                "flex items-center overflow-hidden transition-all duration-200",
                                {
                                    "w-0": t.collapsed,
                                    "w-[calc(100%-42px)]": !t.collapsed,
                                },
                            ]),
                        },
                        [
                            b(
                                "span",
                                {
                                    class: de([
                                        "whitespace-nowrap pr-2 text-sm font-medium",
                                        {
                                            "text-devtools-primary dark:text-devtools-primary-dark": t.active,
                                            "text-devtools-text-primary dark:text-devtools-text-primary-dark": !t.active && !t.disabled,
                                            "text-devtools-text-disabled dark:text-devtools-text-disabled-dark": t.disabled,
                                        },
                                    ]),
                                },
                                re(t.title),
                                3
                            ),
                            t.badge ? (C(), N("span", _m, re(t.badge), 1)) : ae("", !0),
                        ],
                        2
                    ),
                ],
                2
            )
        );
    },
});
const Sm = {
    class: "border-devtools-divider dark:border-devtools-divider-dark flex flex-shrink-0 items-center border-b p-1",
};
const Em = {
    class: "flex h-8 w-8 flex-shrink-0 items-center justify-center",
};
const Cm = {
    class: "flex-1 overflow-y-auto p-1",
};
const Am = {
    class: "flex flex-col gap-1",
};
const Tm = {
    class: "border-devtools-divider dark:border-devtools-divider-dark flex flex-shrink-0 items-center border-t p-1",
};
const Om = {
    class: "flex w-full flex-col gap-1",
};
const Rm = Re({
    __name: "SideNav",
    setup(e) {
        const t = Bt(),
            n = X(!1),
            r = X(!1),
            s = () => {
                const u = window.innerWidth < as;
                u && !r.value ? (n.value = !0) : !u && r.value && (n.value = !1), (r.value = u);
            };
        ut(() => {
            const u = window.innerWidth < as;
            (n.value = u), (r.value = u), window.addEventListener("resize", s);
        }),
            gn(() => {
                window.removeEventListener("resize", s);
            });
        const o = () => {
            n.value = !n.value;
        },
            i = (u) => {
                t.setActiveTab(u);
            },
            l = X([
                {
                    id: "components",
                    title: "Components",
                    icon: "carbon:tree-view-alt",
                },
                {
                    id: "stores",
                    title: "Stores",
                    icon: "carbon:db2-database",
                },
                {
                    id: "events",
                    title: "Events",
                    icon: "carbon:roadmap",
                },
                {
                    id: "mutations",
                    title: "Mutations",
                    icon: "carbon:time",
                },
            ]),
            a = X(
                [
                    void 0,
                    {
                        id: "settings",
                        title: "Settings",
                        icon: "carbon:settings-adjust",
                    },
                ].filter((u) => u !== void 0)
            );
        return (u, c) => (
            C(),
            N(
                "div",
                {
                    class: de([
                        "border-devtools-divider dark:border-devtools-divider-dark flex h-full flex-shrink-0 flex-col border-r transition-all duration-200 ease-in-out",
                        n.value ? "w-[51px]" : "w-[120px]",
                    ]),
                },
                [
                    b("div", Sm, [
                        b(
                            "button",
                            {
                                type: "button",
                                class:
                                    "hover:bg-devtools-element-header dark:hover:bg-devtools-element-header-dark flex w-full items-center rounded p-1",
                                onClick: o,
                            },
                            [
                                b("span", Em, [
                                    ge(bu, {
                                        class: "cursor-pointer",
                                    }),
                                ]),
                                b(
                                    "span",
                                    {
                                        class: de([
                                            "overflow-hidden pl-1 text-left transition-all duration-200",
                                            {
                                                "w-0": n.value,
                                                "w-[calc(100%-42px)]": !n.value,
                                            },
                                        ]),
                                    },
                                    c[0] ||
                                    (c[0] = [
                                        b(
                                            "span",
                                            {
                                                class:
                                                    "text-devtools-text-primary dark:text-devtools-text-primary-dark text-lg font-bold whitespace-nowrap",
                                            },
                                            " DevTools ",
                                            -1
                                        ),
                                    ]),
                                    2
                                ),
                            ]
                        ),
                    ]),
                    b("div", Cm, [
                        b("div", Am, [
                            (C(!0),
                                N(
                                    ce,
                                    null,
                                    Oe(
                                        l.value,
                                        (d) => (
                                            C(),
                                            ke(
                                                xa,
                                                {
                                                    key: d.id,
                                                    id: d.id,
                                                    title: d.title,
                                                    icon: d.icon,
                                                    active: G(t).activeTab === d.id,
                                                    collapsed: n.value,
                                                    badge: d.badge,
                                                    onSelect: i,
                                                },
                                                null,
                                                8,
                                                ["id", "title", "icon", "active", "collapsed", "badge"]
                                            )
                                        )
                                    ),
                                    128
                                )),
                        ]),
                    ]),
                    b("div", Tm, [
                        b("div", Om, [
                            (C(!0),
                                N(
                                    ce,
                                    null,
                                    Oe(
                                        a.value,
                                        (d) => (
                                            C(),
                                            ke(
                                                xa,
                                                {
                                                    key: d.id,
                                                    id: d.id,
                                                    title: d.title,
                                                    icon: d.icon,
                                                    active: G(t).activeTab === d.id,
                                                    collapsed: n.value,
                                                    onSelect: i,
                                                },
                                                null,
                                                8,
                                                ["id", "title", "icon", "active", "collapsed"]
                                            )
                                        )
                                    ),
                                    128
                                )),
                        ]),
                    ]),
                ],
                2
            )
        );
    },
});
const Im = {
    key: 0,
    class:
        "flex w-full flex-col items-center justify-between gap-1 border-t border-devtools-divider bg-devtools-surface px-2 py-1 text-[10px] text-devtools-text-primary dark:border-devtools-divider-dark dark:bg-devtools-surface-dark dark:text-devtools-text-primary-dark sm:flex-row sm:gap-0",
},
    Pm = ["type", "disabled"];
const wa = Re({
    __name: "Button",
    props: {
        variant: {
            default: "secondary",
        },
        size: {
            default: "md",
        },
        disabled: {
            type: Boolean,
            default: !1,
        },
        type: {
            default: "button",
        },
    },
    emits: ["click"],
    setup(e, { emit: t }) {
        const n = e,
            r = t,
            s = te(
                () =>
                    "inline-flex items-center justify-center font-medium rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-150 ease-in-out"
            ),
            o = te(() => {
                switch (n.size) {
                    case "sm":
                        return "px-2.5 py-1.5 text-xs";
                    case "lg":
                        return "px-4 py-2 text-base";
                    case "md":
                    default:
                        return "px-3 py-2 text-sm";
                }
            }),
            i = te(() => {
                if (n.disabled)
                    return "bg-devtools-state-disabled-bg text-devtools-state-disabled-text cursor-not-allowed dark:bg-devtools-state-disabled-bg-dark dark:text-devtools-state-disabled-text-dark";
                switch (n.variant) {
                    case "primary":
                        return "border border-transparent text-white dark:text-devtools-text-primary bg-devtools-primary hover:bg-devtools-primary-hover dark:bg-devtools-primary-dark dark:hover:bg-devtools-primary-hover-dark focus:ring-devtools-primary dark:focus:ring-devtools-primary-dark";
                    case "danger":
                        return "border border-transparent text-white bg-devtools-error hover:bg-devtools-error-hover dark:bg-devtools-error dark:hover:bg-devtools-error-hover focus:ring-devtools-error dark:focus:ring-devtools-error";
                    case "ghost":
                        return "border border-transparent text-devtools-text-primary hover:bg-devtools-state-hover dark:text-devtools-text-primary-dark dark:hover:bg-devtools-state-hover-dark focus:ring-devtools-primary dark:focus:ring-devtools-primary-dark";
                    case "secondary":
                    default:
                        return "border border-devtools-outline bg-devtools-surface text-devtools-text-primary hover:bg-devtools-state-hover focus:ring-devtools-primary dark:border-devtools-outline-dark dark:bg-devtools-surface-dark dark:text-devtools-text-primary-dark dark:hover:bg-devtools-state-hover-dark dark:focus:ring-devtools-primary-dark";
                }
            });
        function l(a) {
            n.disabled || r("click", a);
        }
        return (a, u) => (
            C(),
            N(
                "button",
                {
                    type: a.type,
                    class: de([s.value, o.value, i.value]),
                    disabled: a.disabled,
                    onClick: l,
                },
                [No(a.$slots, "default")],
                10,
                Pm
            )
        );
    },
});
const $m = {
    class: "fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50",
};
const Lm = {
    class:
        "bg-devtools-surface text-devtools-text-primary dark:bg-devtools-surface-dark dark:text-devtools-text-primary-dark w-full max-w-md rounded-lg p-8 text-center shadow-2xl",
};
const Nm = {
    class: "mx-auto mb-4 flex h-12 w-12 items-center justify-center",
};
const Fm = {
    class: "mb-6",
};
const Mm = {
    class: "relative",
};
const jm = {
    class: "flex flex-col justify-center gap-1",
};
const Um = {
    key: 0,
};
const Hm = {
    key: 1,
};
const Bm = "https://alpinejs.pro/?utm_source=extension&utm_campaign=soft-nag-v1#pricing";
const zm = {
    class: "h-full space-y-4 overflow-auto bg-devtools-surface p-4 py-8 scrollbar-hide dark:bg-devtools-surface-dark",
};
const qm = {
    class: "space-y-1 text-center",
};
const Km = {
    class: "flex text-sm text-devtools-text-secondary dark:text-devtools-text-secondary-dark",
};
const Wm = {
    class: "pl-1",
};
const Gm = {
    key: 0,
    class: "mt-3 space-y-1",
};
const Jm = {
    class: "list-inside list-disc text-sm text-devtools-text-secondary dark:text-devtools-text-secondary-dark",
};
const Ym = {
    key: 1,
    class: "mt-1 text-xs text-devtools-text-secondary dark:text-devtools-text-secondary-dark",
};
const Xm = {
    class: "flex flex-col items-center space-y-2",
};
const Qm = ["disabled"];
const eg = {
    class: "text-devtools-syntax-tag dark:text-devtools-syntax-tag-dark",
};
const tg = {
    key: 0,
    class: "text-devtools-syntax-attribute dark:text-devtools-syntax-attribute-dark",
};
const ng = {
    class: "text-devtools-syntax-attribute-value dark:text-devtools-syntax-attribute-value-dark",
};
const rg = {
    key: 1,
    class: "text-devtools-syntax-attribute dark:text-devtools-syntax-attribute-dark",
    textContent: "x-data",
};
const sg = {
    key: 2,
    class: "text-devtools-syntax-attribute dark:text-devtools-syntax-attribute-dark",
};
const og = {
    class: "text-devtools-syntax-attribute-value dark:text-devtools-syntax-attribute-value-dark",
};
const ig = Re({
    __name: "Component",
    props: {
        component: {},
        openComponent: {},
    },
    emits: ["hover", "mouseleave"],
    setup(e, { emit: t }) {
        const n = t,
            r = Vn();
        function s(o) {
            r.selectComponent(o.id);
        }
        return (o, i) => (
            C(),
            N(
                "button",
                {
                    type: "button",
                    class: de([
                        "flex w-full flex-shrink-0 cursor-pointer items-center justify-start overflow-hidden break-all rounded px-2 text-left font-mono transition",
                        {
                            "bg-devtools-state-selected text-devtools-primary dark:bg-devtools-state-selected-dark dark:text-devtools-primary-dark":
                                o.openComponent && o.component.isOpened,
                            "text-devtools-text-primary hover:bg-devtools-state-hover dark:text-devtools-text-primary-dark dark:hover:bg-devtools-state-hover-dark":
                                !o.openComponent || !o.component.isOpened,
                        },
                    ]),
                    style: Rr(`padding-left: ${o.component.depth * 20 + 8}px;`),
                    onClick: i[0] || (i[0] = (l) => s(o.component)),
                    onMouseenter: i[1] || (i[1] = (l) => n("hover", o.component)),
                    onMouseleave: i[2] || (i[2] = (l) => n("mouseleave", o.component)),
                },
                [
                    b("span", eg, [
                        Te(" <" + re(o.component.tagName) + " ", 1),
                        o.component.attributes["x-title"]
                            ? (C(),
                                N("span", tg, [
                                    i[3] || (i[3] = Te(' x-title="', -1)),
                                    b("span", ng, re(o.component.attributes["x-title"]), 1),
                                    i[4] || (i[4] = Te('" ', -1)),
                                ]))
                            : o.component.attributes["x-data"] === ""
                                ? (C(), N("span", rg))
                                : o.component.attributes["x-data"]
                                    ? (C(),
                                        N("span", sg, [
                                            i[5] || (i[5] = Te(' x-data="', -1)),
                                            b("span", og, re(o.component.attributes["x-data"]), 1),
                                            i[6] || (i[6] = Te('"', -1)),
                                        ]))
                                    : ae("", !0),
                        i[7] || (i[7] = Te("> ", -1)),
                    ]),
                ],
                38
            )
        );
    },
});
const lg = {};
const ag = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "none",
};
function cg(e, t) {
    return (
        C(),
        N(
            "svg",
            ag,
            t[0] ||
            (t[0] = [
                b(
                    "path",
                    {
                        d: "M10 12 6 8h8z",
                        fill: "currentColor",
                    },
                    null,
                    -1
                ),
            ])
        )
    );
}
const ug = ji(lg, [["render", cg]]);
const dg = {};
const fg = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "none",
};
function pg(e, t) {
    return (
        C(),
        N(
            "svg",
            fg,
            t[0] ||
            (t[0] = [
                b(
                    "path",
                    {
                        d: "M8 14V6l4 4z",
                        fill: "currentColor",
                    },
                    null,
                    -1
                ),
            ])
        )
    );
}
const hg = ji(dg, [["render", pg]]);
function Ru(e) {
    he.devtools.inspectedWindow.eval(`window.${cs} && window.${cs}(${JSON.stringify(e)}, true)`);
}
function Iu(e) {
    e?.id && he.devtools.inspectedWindow.eval(`window.${cs} && window.${cs}(${JSON.stringify(e)}, false)`);
}
function Du(e) {
    he.devtools.inspectedWindow.eval(
        `(() => {
      const element = window.${kn}?.[${JSON.stringify(e.id)}]
      if (element) {
        inspect(element);
        return true;
      }
      return false;
    })()`,
        (t, n) => {
            n && console.error("Error inspecting element:", n);
        }
    );
}
const vg = ["data-path"];
const mg = {
    key: 0,
    class:
        "absolute bottom-0 left-[-14px] top-0 m-auto h-[20px] w-[20px] text-devtools-on-surface-icon dark:text-devtools-on-surface-icon-dark",
};
const gg = ["textContent"];
const bg = {
    class: "ml-1 break-all text-devtools-syntax-attribute-value dark:text-devtools-syntax-attribute-value-dark",
};
const yg = ["textContent"];
const xg = ["textContent"];
const wg = ["textContent"];
const kg = {
    key: 4,
    class: "text-devtools-syntax-token-keyword dark:text-devtools-syntax-token-keyword-dark",
};
const _g = {
    key: 5,
    class: "text-devtools-syntax-token-keyword dark:text-devtools-syntax-token-keyword-dark",
};
const Sg = {
    key: 6,
};
const Eg = ["textContent"];
const Cg = ["textContent"];
const Ag = {
    key: 0,
    class: "flex flex-col",
};
const Tg = {
    class: "flex flex-row items-center",
};
const Og = ["type"];
const $t = Re({
    __name: "Attribute",
    props: {
        id: {
            type: String,
            required: !0,
        },
        dataSource: {
            type: String,
            required: !0,
            validator: (e) => ["component", "store", "eventData"].includes(e),
        },
        attribute: {
            type: Object,
            required: !0,
        },
        flattenedData: {
            type: Array,
            required: !0,
        },
        entityId: {
            type: [Number, String],
            required: !0,
        },
        entityName: {
            type: String,
            default: "",
        },
        isArrayItem: {
            type: Boolean,
            default: !1
        },
    },
    emits: ["update-data", "delete-property"],
    setup(e, { emit: t }) {
        const n = e,
            r = t,
            s = te(() => n.attribute?.name || ""),
            o = te(() => {
                const V = n.attribute;
                if (!V) return "";
                const D = V.value;
                switch (V.type) {
                    case "object":
                        return d.value ? "Object" : "{}";
                    case "array":
                        return d.value ? "Array" : "[]";
                    case "function":
                        return "function";
                    case "null":
                        return "null";
                    case "undefined":
                        return "undefined";
                    case "HTMLElement":
                        if (D?.name) {
                            let se = `<${D.name}`;
                            return (
                                D.attributes?.id && (se += ` id="${D.attributes?.id}"`),
                                D.attributes?.for && (se += ` for="${D.attributes?.for}"`),
                                D.attributes?.name && (se += ` name="${D.attributes?.name}"`),
                                se + ">"
                            );
                        }
                        return "HTMLElement";
                    default:
                        return D === null ? "null" : D;
                }
            }),
            i = (V) => {
                const D = document.querySelector(`[data-path="${V}"]`);
                D &&
                    (D.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                    }),
                        D.classList.add("highlight-flash"),
                        setTimeout(() => {
                            D.classList.remove("highlight-flash");
                        }, 1500));
            },
            l = () => {
                Du({
                    id: n?.attribute?.value?.devtoolsId,
                });
            },
            a = () => {
                Ru({
                    id: n?.attribute?.value?.devtoolsId,
                });
            },
            deleteItem = () => {
                const V = n.dataSource === "component" ? n.attribute.path || n.id : n.attribute.path || n.attribute.name;
                r("delete-property", {
                    dataSource: n.dataSource,
                    entityId: n.entityId,
                    entityName: n.entityName,
                    attributeSequence: V,
                });
            },
            u = () => {
                Iu({
                    id: n?.attribute?.value?.devtoolsId,
                });
            },
            c = te(() => n.attribute?.type || ""),
            d = te(() => {
                const V = n.attribute;
                return !V || (V.type !== "object" && V.type !== "array") || V.value === "{}" || V.value === "[]"
                    ? !1
                    : V.value === null
                        ? (n.flattenedData?.filter((ie) => ie.parentId === n.id) || []).length > 0
                        : !1;
            }),
            p = te(() => {
                switch (n.attribute?.type) {
                    case "boolean":
                        return "checkbox";
                    case "number":
                        return "number";
                    default:
                        return "text";
                }
            }),
            m = X(!1),
            y = X([]),
            v = X(!1),
            f = X(null),
            x = te(() =>
                n.dataSource === "eventData" ||
                    (n.attribute?.type === "object" && (n.attribute?.value === null || n.attribute?.value === "{}")) ||
                    (n.attribute?.type === "array" && (n.attribute?.value === null || n.attribute?.value === "[]"))
                    ? !0
                    : n.attribute?.readOnly || !1
            );
        ut(() => {
            (f.value = n.attribute?.value), d.value && m.value && A();
        }),
            je(
                () => n.flattenedData,
                () => {
                    m.value && A();
                },
                {
                    deep: !0,
                }
            ),
            je(
                () => n.attribute,
                (V) => {
                    v.value || (f.value = V?.value), m.value && A();
                },
                {
                    deep: !0,
                }
            );
        function S() {
            d.value && ((m.value = !m.value), m.value && A());
        }
        function A() {
            y.value = k();
        }
        function k() {
            return n.flattenedData
                ? n.flattenedData.filter((D) => D.parentId === n.id).sort((D, se) => D.name.localeCompare(se.name))
                : [];
        }
        function $() {
            x.value || ((v.value = !0), (f.value = n.attribute?.value));
        }
        function O() {
            if (!x.value && ((v.value = !1), n.attribute)) {
                const V = n.dataSource === "component" ? n.attribute.path || n.id : n.attribute.path || n.attribute.name,
                    D = {
                        dataSource: n.dataSource,
                        entityId: n.entityId,
                        entityName: n.entityName,
                        attributeSequence: V,
                        attributeValue: f.value,
                    };
                r("update-data", D);
            }
        }
        function U() {
            (f.value = n.attribute?.value), (v.value = !1);
        }
        return (V, D) => {
            const se = Ud("Attribute", !0);
            return (
                C(),
                N(
                    ce,
                    null,
                    [
                        b(
                            "div",
                            {
                                class: "group flex items-center",
                                "data-path": e.attribute?.path,
                            },
                            [
                                b(
                                    "button",
                                    {
                                        class: de([
                                            "relative block rounded px-1 text-left hover:bg-devtools-state-hover dark:hover:bg-devtools-state-hover-dark",
                                            {
                                                "cursor-pointer": d.value,
                                            },
                                        ]),
                                        onClick: D[7] || (D[7] = (ie) => S()),
                                    },
                                    [
                                        d.value
                                            ? (C(),
                                                N("div", mg, [
                                                    m.value
                                                        ? (C(),
                                                            ke(ug, {
                                                                key: 0,
                                                            }))
                                                        : (C(),
                                                            ke(hg, {
                                                                key: 1,
                                                            })),
                                                ]))
                                            : ae("", !0),
                                        b(
                                            "span",
                                            {
                                                class: "text-devtools-syntax-attribute dark:text-devtools-syntax-attribute-dark",
                                                textContent: re(`${s.value}:`),
                                            },
                                            null,
                                            8,
                                            gg
                                        ),
                                        it(
                                            b(
                                                "span",
                                                bg,
                                                [
                                                    c.value === "circular"
                                                        ? (C(),
                                                            N(
                                                                "span",
                                                                {
                                                                    key: 0,
                                                                    class:
                                                                        "relative inline-flex truncate px-1.5 py-1 text-[10px] leading-none before:absolute before:inset-0 before:z-10 before:rounded before:border before:border-devtools-divider before:bg-devtools-state-hover before:transition-colors before:dark:border-devtools-divider-dark before:dark:bg-devtools-state-hover-dark before:dark:text-devtools-text-secondary-dark",
                                                                    onClick: D[0] || (D[0] = tt((ie) => i(o.value), ["stop"])),
                                                                },
                                                                " → " + re(o.value),
                                                                1
                                                            ))
                                                        : ["string"].includes(c.value)
                                                            ? (C(),
                                                                N(
                                                                    "span",
                                                                    {
                                                                        key: 1,
                                                                        class:
                                                                            "text-devtools-syntax-token-type dark:text-devtools-syntax-token-type-dark cursor-pointer",
                                                                        textContent: re(`"${o.value}"`),
                                                                        onClick: D[1] || (D[1] = (ie) => $()),
                                                                    },
                                                                    null,
                                                                    8,
                                                                    yg
                                                                ))
                                                            : ["undefined", "null", "function"].includes(c.value)
                                                                ? (C(),
                                                                    N(
                                                                        "span",
                                                                        {
                                                                            key: 2,
                                                                            class:
                                                                                "text-devtools-syntax-token-type dark:text-devtools-syntax-token-type-dark",
                                                                            textContent: re(o.value),
                                                                        },
                                                                        null,
                                                                        8,
                                                                        xg
                                                                    ))
                                                                : c.value === "HTMLElement"
                                                                    ? (C(),
                                                                        N(
                                                                            "span",
                                                                            {
                                                                                key: 3,
                                                                                class:
                                                                                    "cursor-pointer text-devtools-syntax-tag dark:text-devtools-syntax-tag-dark",
                                                                                onClick: l,
                                                                                onMouseenter: a,
                                                                                onMouseleave: u,
                                                                                textContent: re(o.value),
                                                                            },
                                                                            null,
                                                                            40,
                                                                            wg
                                                                        ))
                                                                    : c.value === "document"
                                                                        ? (C(), N("span", kg, " Document "))
                                                                        : c.value === "window"
                                                                            ? (C(), N("span", _g, " Window "))
                                                                            : c.value === "boolean"
                                                                                ? (C(),
                                                                                    N("span", Sg, [
                                                                                        b(
                                                                                            "span",
                                                                                            {
                                                                                                class:
                                                                                                    "text-devtools-syntax-token-value dark:text-devtools-syntax-token-value-dark cursor-pointer pr-1",
                                                                                                textContent: re(o.value),
                                                                                                onClick: D[2] || (D[2] = (ie) => ((f.value = !o.value), O())),
                                                                                            },
                                                                                            null,
                                                                                            8,
                                                                                            Eg
                                                                                        ),
                                                                                        x.value
                                                                                            ? ae("", !0)
                                                                                            : it(
                                                                                                (C(),
                                                                                                    N(
                                                                                                        "input",
                                                                                                        {
                                                                                                            key: 0,
                                                                                                            type: "checkbox",
                                                                                                            "onUpdate:modelValue": D[3] || (D[3] = (ie) => (f.value = ie)),
                                                                                                            onChange: D[4] || (D[4] = tt((ie) => O(), ["stop"])),
                                                                                                            class:
                                                                                                                "ml-1 h-3 w-3 cursor-pointer rounded border-devtools-divider text-devtools-primary opacity-0 transition duration-150 ease-in-out focus:ring-transparent group-hover:opacity-100 dark:border-devtools-divider-dark dark:text-devtools-primary-dark",
                                                                                                        },
                                                                                                        null,
                                                                                                        544
                                                                                                    )),
                                                                                                [[Pc, f.value]]
                                                                                            ),
                                                                                    ]))
                                                                                : (C(),
                                                                                    N(
                                                                                        "button",
                                                                                        {
                                                                                            key: 7,
                                                                                            type: "button",
                                                                                            class: de({
                                                                                                "text-devtools-text-secondary dark:text-devtools-text-secondary-dark":
                                                                                                    d.value,
                                                                                                "text-devtools-syntax-token-variable dark:text-devtools-syntax-token-variable-dark":
                                                                                                    !d.value && c.value === "number",
                                                                                                "text-devtools-syntax-token-keyword dark:text-devtools-syntax-token-keyword-dark":
                                                                                                    !d.value && (o.value === "null" || o.value === "undefined"),
                                                                                            }),
                                                                                            onClick: D[5] || (D[5] = (ie) => $()),
                                                                                            onDblclick: D[6] || (D[6] = (ie) => S()),
                                                                                            textContent: re(o.value),
                                                                                        },
                                                                                        null,
                                                                                        42,
                                                                                        Cg
                                                                                    )),
                                                ],
                                                512
                                            ),
                                            [[co, !v.value]]
                                        ),
                                    ],
                                    2
                                ),
                                !x.value && !d.value
                                    ? (C(),
                                        N("div", Ag, [
                                            it(
                                                (C(),
                                                    N(
                                                        "svg",
                                                        {
                                                            fill: "currentColor",
                                                            onClick: D[8] || (D[8] = (ie) => $()),
                                                            viewBox: "0 0 20 20",
                                                            class:
                                                                "h-4 w-4 cursor-pointer text-devtools-text-link opacity-0 hover:opacity-75 group-hover:opacity-100 dark:text-devtools-text-link-dark",
                                                        },
                                                        D[15] ||
                                                        (D[15] = [
                                                            b(
                                                                "path",
                                                                {
                                                                    d: "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z",
                                                                },
                                                                null,
                                                                -1
                                                            ),
                                                        ]),
                                                        512
                                                    )),
                                                [[co, !v.value && c.value !== "boolean"]]
                                            ),
                                            it(
                                                b(
                                                    "div",
                                                    Tg,
                                                    [
                                                        it(
                                                            b(
                                                                "input",
                                                                {
                                                                    class:
                                                                        "flex w-2/3 appearance-none rounded border border-devtools-outline bg-devtools-surface px-1 py-1 text-sm leading-tight text-devtools-text-primary shadow focus:outline-none focus:ring-2 focus:ring-devtools-outline-focus dark:border-devtools-outline-dark dark:bg-devtools-surface-dark dark:text-devtools-text-primary-dark dark:focus:ring-devtools-outline-focus-dark",
                                                                    type: p.value,
                                                                    "onUpdate:modelValue": D[9] || (D[9] = (ie) => (f.value = ie)),
                                                                    onKeydown: [
                                                                        D[10] ||
                                                                        (D[10] = Vo(
                                                                            tt((ie) => O(), ["stop"]),
                                                                            ["enter"]
                                                                        )),
                                                                        D[11] ||
                                                                        (D[11] = Vo(
                                                                            tt((ie) => U(), ["stop"]),
                                                                            ["escape"]
                                                                        )),
                                                                    ],
                                                                },
                                                                null,
                                                                40,
                                                                Og
                                                            ),
                                                            [[ep, f.value]]
                                                        ),
                                                        (C(),
                                                            N(
                                                                "svg",
                                                                {
                                                                    fill: "currentColor",
                                                                    onClick: D[12] || (D[12] = (ie) => O()),
                                                                    viewBox: "0 0 20 20",
                                                                    class:
                                                                        "ml-2 flex h-5 w-5 cursor-pointer text-devtools-success hover:opacity-75 dark:text-devtools-success-dark",
                                                                },
                                                                D[16] ||
                                                                (D[16] = [
                                                                    b(
                                                                        "path",
                                                                        {
                                                                            "fill-rule": "evenodd",
                                                                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                                            "clip-rule": "evenodd",
                                                                        },
                                                                        null,
                                                                        -1
                                                                    ),
                                                                ])
                                                            )),
                                                        (C(),
                                                            N(
                                                                "svg",
                                                                {
                                                                    fill: "currentColor",
                                                                    onClick: D[13] || (D[13] = (ie) => U()),
                                                                    viewBox: "0 0 20 20",
                                                                    class:
                                                                        "ml-1 flex h-5 w-5 cursor-pointer text-devtools-error hover:opacity-75 dark:text-devtools-error-dark",
                                                                },
                                                                D[17] ||
                                                                (D[17] = [
                                                                    b(
                                                                        "path",
                                                                        {
                                                                            "fill-rule": "evenodd",
                                                                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                                                                            "clip-rule": "evenodd",
                                                                        },
                                                                        null,
                                                                        -1
                                                                    ),
                                                                ])
                                                            )),
                                                    ],
                                                    512
                                                ),
                                                [[co, v.value && c.value !== "boolean"]]
                                            ),
                                        ]))
                                    : ae("", !0),
                            ],
                            8,
                            vg
                        ),
                        e.isArrayItem
                            ? (C(),
                                N(
                                    "svg",
                                    {
                                        fill: "currentColor",
                                        onClick: D[20] || (D[20] = (ie) => deleteItem()),
                                        viewBox: "0 0 20 20",
                                        class:
                                            "ml-2 flex h-4 w-4 flex-shrink-0 cursor-pointer text-devtools-text-disabled hover:text-devtools-error dark:text-devtools-text-disabled-dark dark:hover:text-devtools-error-dark transition-opacity",
                                        title: "Remove item"
                                    },
                                    D[21] ||
                                    (D[21] = [
                                        b(
                                            "path",
                                            {
                                                "fill-rule": "evenodd",
                                                d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                                "clip-rule": "evenodd",
                                            },
                                            null,
                                            -1
                                        ),
                                    ])
                                ))
                            : ae("", !0),
                        m.value && y.value.length > 0
                            ? (C(!0),
                                N(
                                    ce,
                                    {
                                        key: 0,
                                    },
                                    Oe(
                                        y.value,
                                        (ie) => (
                                            C(),
                                            N(
                                                "div",
                                                {
                                                    class: "ml-[8px]",
                                                    key: ie.id,
                                                },
                                                [
                                                    ge(
                                                        se,
                                                        {
                                                            id: ie.id,
                                                            "data-source": e.dataSource,
                                                            attribute: ie,
                                                            "flattened-data": e.flattenedData,
                                                            "entity-id": e.entityId,
                                                            "entity-name": e.entityName,
                                                            "entity-name": e.entityName,
                                                            onUpdateData: D[14] || (D[14] = (Ze) => V.$emit("update-data", Ze)),
                                                            onDeleteProperty: D[22] || (D[22] = (Ze) => V.$emit("delete-property", Ze)),
                                                            isArrayItem: c.value === 'array'
                                                        },
                                                        null,
                                                        8,
                                                        ["id", "data-source", "attribute", "flattened-data", "entity-id", "entity-name"]
                                                    ),
                                                ]
                                            )
                                        )
                                    ),
                                    128
                                ))
                            : ae("", !0),
                    ],
                    64
                )
            );
        };
    },
});
const Rg = 12;
const Vi = Re({
    __name: "ResizablePanes",
    props: {
        direction: {
            default: "vertical",
        },
        initialSizePercent: {
            default: 50,
        },
        minPaneSizePx: {
            default: 100,
        },
    },
    setup(e) {
        const t = e,
            n = X(null),
            r = X(t.initialSizePercent),
            s = X(!1),
            o = X(0),
            i = X(0),
            l = te(() => t.direction === "vertical"),
            a = te(() => {
                const y = {};
                return l.value ? (y.width = `${r.value}%`) : (y.height = `${r.value}%`), y;
            }),
            u = (y) => {
                const v = "touches" in y ? y.touches[0] : y;
                return l.value ? v.clientX : v.clientY;
            },
            c = (y) => {
                n.value &&
                    (y.preventDefault(),
                        (s.value = !0),
                        (o.value = u(y)),
                        (i.value = r.value),
                        document.addEventListener("mousemove", d),
                        document.addEventListener("mouseup", p),
                        document.addEventListener("touchmove", d, {
                            passive: !1,
                        }),
                        document.addEventListener("touchend", p),
                        (document.body.style.cursor = l.value ? "col-resize" : "row-resize"),
                        (document.body.style.userSelect = "none"));
            },
            d = (y) => {
                if (!s.value || !n.value) return;
                y.preventDefault();
                const f = u(y) - o.value,
                    x = l.value ? n.value.offsetWidth : n.value.offsetHeight;
                if (x <= 0) return;
                const S = (f / x) * 100;
                let A = i.value + S;
                const k = (t.minPaneSizePx / x) * 100,
                    O = ((x - t.minPaneSizePx - Rg) / x) * 100;
                (A = Math.max(k, Math.min(A, O))), (r.value = A);
            },
            p = () => {
                s.value &&
                    ((s.value = !1),
                        document.removeEventListener("mousemove", d),
                        document.removeEventListener("mouseup", p),
                        document.removeEventListener("touchmove", d),
                        document.removeEventListener("touchend", p),
                        (document.body.style.cursor = ""),
                        (document.body.style.userSelect = ""));
            },
            m = () => {
                r.value = t.initialSizePercent;
            };
        return (
            je(
                () => t.initialSizePercent,
                () => {
                    m();
                }
            ),
            je(
                () => t.direction,
                () => {
                    m();
                }
            ),
            ut(() => {
                m();
            }),
            gn(() => {
                s.value && p();
            }),
            (y, v) => (
                C(),
                N(
                    "div",
                    {
                        ref_key: "containerRef",
                        ref: n,
                        class: de(["flex h-full w-full overflow-hidden", [l.value ? "flex-row" : "flex-col"]]),
                    },
                    [
                        b(
                            "div",
                            {
                                style: Rr(a.value),
                                class: de(["relative flex-shrink-0 overflow-hidden", [l.value ? "-mr-1.5" : "-mb-1.5"]]),
                            },
                            [No(y.$slots, "left")],
                            6
                        ),
                        b(
                            "div",
                            {
                                onMousedown: c,
                                onTouchstartPassive: c,
                                class: de([
                                    "group relative z-10 flex flex-shrink-0 items-center justify-center",
                                    [l.value ? "w-3 cursor-col-resize" : "h-3 cursor-row-resize"],
                                ]),
                            },
                            [
                                b(
                                    "div",
                                    {
                                        class: de([
                                            "absolute",
                                            [
                                                l.value ? "left-1/2 h-full w-px -translate-x-1/2" : "top-1/2 h-px w-full -translate-y-1/2",
                                                "group-hover:bg-devtools-accent dark:group-hover:bg-devtools-accent-dark bg-devtools-divider transition-colors duration-150 ease-in-out dark:bg-devtools-divider-dark",
                                            ],
                                        ]),
                                    },
                                    null,
                                    2
                                ),
                                b(
                                    "div",
                                    {
                                        class: de([
                                            "relative rounded-full transition-colors duration-150 ease-in-out",
                                            [
                                                l.value ? "h-8 w-1" : "h-1 w-8",
                                                "group-hover:bg-devtools-accent dark:group-hover:bg-devtools-accent-dark bg-devtools-divider dark:bg-devtools-divider-dark",
                                            ],
                                        ]),
                                    },
                                    null,
                                    2
                                ),
                            ],
                            34
                        ),
                        b(
                            "div",
                            {
                                class: de(["relative flex-grow overflow-hidden", [l.value ? "-ml-1.5" : "-mt-1.5"]]),
                            },
                            [No(y.$slots, "right")],
                            2
                        ),
                    ],
                    2
                )
            )
        );
    },
});
const Ig = {
    class:
        "relative flex h-full max-h-full min-h-full min-w-full flex-col justify-start overflow-y-auto bg-devtools-surface p-1 scrollbar-hide dark:bg-devtools-surface-dark",
};
const Dg = {
    key: 0,
    class:
        "flex h-full w-full items-center justify-center p-4 text-devtools-text-secondary dark:text-devtools-text-secondary-dark",
};
const Pg = {
    class:
        "relative flex h-full max-h-full flex-col overflow-y-auto bg-devtools-surface scrollbar-hide dark:bg-devtools-surface-dark",
};
const $g = {
    key: 0,
    class:
        "sticky left-0 top-0 z-20 flex h-[27px] w-full flex-shrink-0 items-center justify-between border-b border-devtools-divider bg-devtools-surface px-1 dark:border-devtools-divider-dark dark:bg-devtools-surface-dark",
};
const Lg = {
    class: "flex items-center gap-1",
};
const Ng = {
    key: 1,
    "data-testid": "select-component-message",
    class:
        "flex h-full w-full items-center justify-center p-4 text-devtools-text-secondary dark:text-devtools-text-secondary-dark",
};
const Fg = {
    class: "font-mono",
};
const Mg = {
    key: 0,
};
const jg = {
    class: "ml-[8px]",
};
const Ug = ["textContent"];
const Hg = ["textContent"];
const Bg = {
    key: 1,
};
const Vg = {
    class: "ml-[8px]",
};
const zg = {
    key: 2,
};
const qg = {
    class: "ml-[8px]",
};
const Kg = {
    key: 3,
};
const Wg = {
    class: "ml-[8px]",
};

function handleDeleteProperty(payload) {
    const { dataSource, entityId, entityName, attributeSequence } = payload;
    const code = `(function() {
        try {
            let target;
            if ("${dataSource}" === "store") {
                target = Alpine.store("${entityName}");
            } else if ("${dataSource}" === "component") {
                const all = Array.from(document.querySelectorAll('[x-data]'));
                const el = all.find(e => e.__ALPINEJS_PRO_DEVTOOLS_COMPONENT_INTERNALS__?.id == "${entityId}");
                if (el) target = Alpine.$data(el);
            }
            
            if (!target) return;
            
            const path = "${attributeSequence}".split('.');
            const key = path.pop();
            const parent = path.reduce((acc, k) => acc[k], target);
            
            if (parent) {
                if (Array.isArray(parent)) {
                    parent.splice(Number(key), 1);
                } else {
                    delete parent[key];
                }
            }
        } catch(e) { console.error('Delete failed:', e); }
    })()`;
    he.devtools.inspectedWindow.eval(code);
}

const Gg = Re({
    __name: "Components",
    setup(e) {
        const t = Vn(),
            n = te(() => t.components.filter((v) => v.attributes["x-devtools"] === void 0)),
            r = te(() => t.selectedComponent),
            s = te(() => t.sortedAttributes?.filter((v) => !v.parentId) || []),
            o = te(() => {
                const v = r.value?.attributes || [],
                    f = ["x-", "@", ":", "wire:"];
                return Object.keys(v)
                    .filter((S) => f.some((A) => S.startsWith(A)))
                    .reduce((S, A) => ((S[A] = v[A]), S), {});
            }),
            i = te(() => {
                const v = {
                    props: [],
                    getters: [],
                    methods: [],
                };
                return (
                    s.value.forEach((f) => {
                        if (f.type === "function") {
                            v.methods.push(f);
                            return;
                        }
                        if (f.isGetter) {
                            v.getters.push(f);
                            return;
                        }
                        v.props.push(f);
                    }),
                    v
                );
            });
        function l(v) {
            Ru({
                id: v.id,
            });
        }
        function a(v) {
            Iu({
                id: v.id,
            });
        }
        const u = X(!1),
            c = () => {
                u.value = window.innerWidth < as;
            };
        ut(() => {
            c(), window.addEventListener("resize", c);
        }),
            gn(() => {
                window.removeEventListener("resize", c);
            });
        const d = te(() => (u.value ? "horizontal" : "vertical"));
        function p(v) {
            v &&
                Du({
                    id: v,
                });
        }
        function m(v) {
            v && he.devtools.inspectedWindow.eval(`window.${Yi} && window.${Yi}("${v}")`);
        }
        function q(v) {
            if (v) {
                // Component logging function
                he.devtools.inspectedWindow.eval(`
                    (function() {
                        const alpineElements = Array.from(document.querySelectorAll('[x-data]'));
                        let targetElement = null;

                        for (const el of alpineElements) {
                            const devtoolsId = el.__ALPINEJS_PRO_DEVTOOLS_COMPONENT_INTERNALS__?.id;

                            if (devtoolsId == ${v}) {
                                targetElement = el;
                                break;
                            }
                        }

                        console.log('Element found:', targetElement);

                      if (targetElement) {
                            const internals = targetElement.__ALPINEJS_PRO_DEVTOOLS_COMPONENT_INTERNALS__;

                            // Log DevTools internals if available
                            if (internals) {
                                // Parse and log serialized data if available
                                if (internals.serializedData) {
                                    try {
                                        const componentData = JSON.parse(internals.serializedData);
                                        console.log('Component data:', componentData);
                                    } catch (e) {
                                        console.log('Serialized data (raw):', internals.serializedData);
                                    }
                                }
                            }

                            // Log Alpine data stack if available
                            if (targetElement._x_dataStack && targetElement._x_dataStack.length > 0) {
                                console.log('Alpine data stack:', targetElement._x_dataStack);
                            }
                        } else {
                            console.warn('Element not found with ID:', ${v});
                        }

                        return targetElement;
                    })()
                `);
            }
        }

        function logComponentMethod(componentId, methodName) {
            if (componentId && methodName) {
                he.devtools.inspectedWindow.eval(`
                    (function() {
                        try {
                            // Find the component element
                            const alpineElements = Array.from(document.querySelectorAll('[x-data]'));
                            let targetElement = null;
                            let componentData = null;

                            for (const el of alpineElements) {
                                const devtoolsId = el.__ALPINEJS_PRO_DEVTOOLS_COMPONENT_INTERNALS__?.id;
                                if (devtoolsId == ${componentId}) {
                                    targetElement = el;
                                    break;
                                }
                            }

                            if (targetElement) {
                                // Try to get component data
                                const internals = targetElement.__ALPINEJS_PRO_DEVTOOLS_COMPONENT_INTERNALS__;
                                if (internals && internals.serializedData) {
                                    try {
                                        componentData = JSON.parse(internals.serializedData);
                                        console.log('Component data:', componentData);
                                    } catch (e) {
                                        console.log('Could not parse component data');
                                    }
                                }

                                // Also try Alpine data stack
                                if (targetElement._x_dataStack && targetElement._x_dataStack.length > 0) {
                                    // Try to find method in data stack
                                    for (const data of targetElement._x_dataStack) {
                                        if (data && typeof data["${methodName}"] === 'function') {
                                            const method = data["${methodName}"];
                                            inspect(method);
                                            return;
                                        }
                                    }
                                }

                                console.log('Method not found in component data or data stack');
                            } else {
                                console.log('Component element not found');
                            }
                        } catch (e) {
                            console.error('Error accessing component method:', e);
                        }
                    })()
                `);
            }
        }

        function y(v) {
            v.dataSource === "component" &&
                t.editComponentAttribute(String(v.entityId), v.attributeSequence, v.attributeValue);
        }
        return (v, f) => (
            C(),
            ke(
                Vi,
                {
                    direction: d.value,
                    class: "font-mono text-[11px] leading-5",
                },
                {
                    left: Mt(() => [
                        b("div", Ig, [
                            n.value.length ? ae("", !0) : (C(), N("div", Dg, re("No components found"))),
                            (C(!0),
                                N(
                                    ce,
                                    null,
                                    Oe(
                                        n.value,
                                        (x) => (
                                            C(),
                                            ke(
                                                ig,
                                                {
                                                    key: x.id,
                                                    component: x,
                                                    openComponent: r.value,
                                                    onHover: (S) => l(x),
                                                    onMouseleave: (S) => a(x),
                                                },
                                                null,
                                                8,
                                                ["component", "openComponent", "onHover", "onMouseleave"]
                                            )
                                        )
                                    ),
                                    128
                                )),
                        ]),
                    ]),
                    right: Mt(() => [
                        b("div", Pg, [
                            r.value
                                ? (C(),
                                    N("div", $g, [
                                        f[2] || (f[2] = b("div", null, null, -1)),
                                        b("div", Lg, [
                                            b(
                                                "button",
                                                {
                                                    class:
                                                        "rounded-full p-1 text-devtools-text-secondary hover:bg-devtools-state-hover dark:text-devtools-text-secondary-dark dark:hover:bg-devtools-state-hover-dark",
                                                    title: "Scroll element into view",
                                                    onClick: f[0] || (f[0] = tt((x) => m(r.value?.id || ""), ["stop"])),
                                                },
                                                [
                                                    ge(G(Cs), {
                                                        icon: "carbon:center-to-fit",
                                                        class: "h-4 w-4",
                                                    }),
                                                ]
                                            ),
                                            b(
                                                "button",
                                                {
                                                    class:
                                                        "rounded-full p-1 text-devtools-text-secondary hover:bg-devtools-state-hover dark:text-devtools-text-secondary-dark dark:hover:bg-devtools-state-hover-dark",
                                                    title: "Inspect element",
                                                    onClick: f[1] || (f[1] = tt((x) => p(r.value?.id || ""), ["stop"])),
                                                },
                                                [
                                                    ge(G(Cs), {
                                                        icon: "carbon:code-block",
                                                        class: "h-4 w-4",
                                                    }),
                                                ]
                                            ),
                                            b(
                                                "button",
                                                {
                                                    class:
                                                        "rounded-full p-1 text-devtools-text-secondary hover:bg-devtools-state-hover dark:text-devtools-text-secondary-dark dark:hover:bg-devtools-state-hover-dark",
                                                    title: "Log element to console",
                                                    onClick: f[11] || (f[11] = tt((x) => q(r.value?.id || ""), ["stop"])),
                                                },
                                                [
                                                    ge(G(Cs), {
                                                        icon: "carbon:terminal",
                                                        class: "h-4 w-4",
                                                    }),
                                                ]
                                            ),
                                        ]),
                                    ]))
                                : ae("", !0),
                            r.value ? ae("", !0) : (C(), N("div", Ng, re(n.value.length > 0 ? "Select a component to view" : ""), 1)),
                            b(
                                "div",
                                {
                                    class: de([
                                        {
                                            hidden: !r.value,
                                        },
                                        "flex-1 px-3",
                                    ]),
                                },
                                [
                                    b("div", Fg, [
                                        Object.keys(o.value).length > 0
                                            ? (C(),
                                                N("div", Mg, [
                                                    f[3] ||
                                                    (f[3] = b(
                                                        "div",
                                                        {
                                                            class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark",
                                                        },
                                                        " attributes: { ",
                                                        -1
                                                    )),
                                                    b("div", jg, [
                                                        (C(!0),
                                                            N(
                                                                ce,
                                                                null,
                                                                Oe(
                                                                    Object.keys(o.value),
                                                                    (x) => (
                                                                        C(),
                                                                        N(
                                                                            "div",
                                                                            {
                                                                                key: x,
                                                                                class:
                                                                                    "block break-all rounded px-1 pl-2 hover:bg-devtools-state-hover dark:hover:bg-devtools-state-hover-dark",
                                                                            },
                                                                            [
                                                                                b(
                                                                                    "span",
                                                                                    {
                                                                                        class:
                                                                                            "text-devtools-syntax-attribute dark:text-devtools-syntax-attribute-dark",
                                                                                        textContent: re(`${x}${o.value[x] ? ":" : ""}`),
                                                                                    },
                                                                                    null,
                                                                                    8,
                                                                                    Ug
                                                                                ),
                                                                                o.value[x]
                                                                                    ? (C(),
                                                                                        N(
                                                                                            "span",
                                                                                            {
                                                                                                key: 0,
                                                                                                class:
                                                                                                    "ml-1 text-devtools-syntax-attribute-value dark:text-devtools-syntax-attribute-value-dark",
                                                                                                textContent: re(`"${o.value[x]}"`),
                                                                                            },
                                                                                            null,
                                                                                            8,
                                                                                            Hg
                                                                                        ))
                                                                                    : ae("", !0),
                                                                            ]
                                                                        )
                                                                    )
                                                                ),
                                                                128
                                                            )),
                                                    ]),
                                                    f[4] ||
                                                    (f[4] = b(
                                                        "div",
                                                        {
                                                            class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark",
                                                        },
                                                        " } ",
                                                        -1
                                                    )),
                                                ]))
                                            : ae("", !0),
                                        i.value.props.length > 0
                                            ? (C(),
                                                N("div", Bg, [
                                                    f[5] ||
                                                    (f[5] = b(
                                                        "div",
                                                        {
                                                            class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark",
                                                        },
                                                        " state: { ",
                                                        -1
                                                    )),
                                                    b("div", Vg, [
                                                        (C(!0),
                                                            N(
                                                                ce,
                                                                null,
                                                                Oe(
                                                                    i.value.props,
                                                                    (x) => (
                                                                        C(),
                                                                        ke(
                                                                            $t,
                                                                            {
                                                                                key: x.id,
                                                                                id: x.id,
                                                                                "data-source": "component",
                                                                                attribute: x,
                                                                                "flattened-data": G(t).selectedComponentFlattenedData || [],
                                                                                "entity-id": r.value?.id || "",
                                                                                "entity-name": r.value?.tagName || "",
                                                                                onUpdateData: y,
                                                                                onDeleteProperty: handleDeleteProperty,
                                                                            },
                                                                            null,
                                                                            8,
                                                                            ["id", "attribute", "flattened-data", "entity-id", "entity-name"]
                                                                        )
                                                                    )
                                                                ),
                                                                128
                                                            )),
                                                    ]),
                                                    f[6] ||
                                                    (f[6] = b(
                                                        "div",
                                                        {
                                                            class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark",
                                                        },
                                                        " } ",
                                                        -1
                                                    )),
                                                ]))
                                            : ae("", !0),
                                        i.value.getters.length > 0
                                            ? (C(),
                                                N("div", zg, [
                                                    f[7] ||
                                                    (f[7] = b(
                                                        "div",
                                                        {
                                                            class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark",
                                                        },
                                                        " getters: { ",
                                                        -1
                                                    )),
                                                    b("div", qg, [
                                                        (C(!0),
                                                            N(
                                                                ce,
                                                                null,
                                                                Oe(
                                                                    i.value.getters,
                                                                    (x) => (
                                                                        C(),
                                                                        ke(
                                                                            $t,
                                                                            {
                                                                                key: x.id,
                                                                                id: x.id,
                                                                                "data-source": "component",
                                                                                attribute: x,
                                                                                "flattened-data": G(t).selectedComponentFlattenedData || [],
                                                                                "entity-id": r.value?.id || "",
                                                                                "entity-name": r.value?.tagName || "",
                                                                                onUpdateData: y,
                                                                            },
                                                                            null,
                                                                            8,
                                                                            ["id", "attribute", "flattened-data", "entity-id", "entity-name"]
                                                                        )
                                                                    )
                                                                ),
                                                                128
                                                            )),
                                                    ]),
                                                    f[8] ||
                                                    (f[8] = b(
                                                        "div",
                                                        {
                                                            class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark",
                                                        },
                                                        " } ",
                                                        -1
                                                    )),
                                                ]))
                                            : ae("", !0),
                                        i.value.methods.length > 0
                                            ? (C(),
                                                N("div", Kg, [
                                                    f[9] ||
                                                    (f[9] = b(
                                                        "div",
                                                        {
                                                            class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark",
                                                        },
                                                        " methods: { ",
                                                        -1
                                                    )),
                                                    b("div", Wg, [
                                                        (C(!0),
                                                            N(
                                                                ce,
                                                                null,
                                                                Oe(
                                                                    i.value.methods,
                                                                    (x) => (
                                                                        C(),
                                                                        N(
                                                                            "div",
                                                                            {
                                                                                key: x.id,
                                                                                class:
                                                                                    "cursor-pointer hover:bg-devtools-state-hover dark:hover:bg-devtools-state-hover-dark p-2 rounded transition-colors",
                                                                                "data-method-name": x.name || "",
                                                                                onClick:
                                                                                    f[12] ||
                                                                                    (f[12] = function (event) {
                                                                                        const componentId = r.value?.id || "";
                                                                                        const methodName = event.currentTarget.getAttribute("data-method-name") || "";
                                                                                        console.log("Clicked component method:", methodName); // Debug
                                                                                        if (componentId && methodName) {
                                                                                            logComponentMethod(componentId, methodName);
                                                                                        }
                                                                                    }),
                                                                            },
                                                                            [
                                                                                b(
                                                                                    "span",
                                                                                    {
                                                                                        class: "text-devtools-text-primary dark:text-devtools-text-primary-dark",
                                                                                    },
                                                                                    re(x.name + ": "),
                                                                                    1
                                                                                ),
                                                                                b(
                                                                                    "span",
                                                                                    {
                                                                                        class:
                                                                                            "text-devtools-text-secondary dark:text-devtools-text-secondary-dark ml-2",
                                                                                    },
                                                                                    re("(function)"),
                                                                                    1
                                                                                ),
                                                                            ]
                                                                        )
                                                                    )
                                                                ),
                                                                128
                                                            )),
                                                    ]),
                                                    f[10] ||
                                                    (f[10] = b(
                                                        "div",
                                                        {
                                                            class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark",
                                                        },
                                                        " } ",
                                                        -1
                                                    )),
                                                ]))
                                            : ae("", !0),
                                    ]),
                                ],
                                2
                            ),
                        ]),
                    ]),
                    _: 1,
                },
                8,
                ["direction"]
            )
        );
    },
});
const Jg = {
    class: "fixed top-0 flex flex-row gap-2 bg-devtools-surface p-2 dark:bg-devtools-surface-dark",
};
const Yg = ["onClick"];
const Xg = ["innerHTML"];
const Qg = Re({
    __name: "Debug",
    setup(e) {
        const t = Bt(),
            n = jn(),
            r = Vn(),
            s = useStoresStore(),
            o = ["components", "stores", "ui", "settings"],
            i = X("components"),
            l = te(() => {
                try {
                    return Ii(
                        (() => {
                            switch (i.value) {
                                case "components":
                                    return r.$state;
                                case "stores":
                                    return s.$state;
                                case "ui":
                                    return t.$state;
                                case "settings":
                                    return n.$state;
                                default:
                                    return {};
                            }
                        })(),
                        void 0,
                        2
                    );
                } catch (a) {
                    return console.error(a), "Can't stringify the data";
                }
            });
        return (a, u) => (
            C(),
            N(
                ce,
                null,
                [
                    b("div", Jg, [
                        (C(),
                            N(
                                ce,
                                null,
                                Oe(o, (c) =>
                                    b(
                                        "button",
                                        {
                                            key: c,
                                            class: de([
                                                "rounded border px-4 py-2 capitalize text-devtools-text-primary dark:text-devtools-text-primary-dark",
                                                {
                                                    "bg-devtools-background-primary dark:bg-devtools-background-primary-dark": G(i) === c,
                                                },
                                            ]),
                                            onClick: (d) => (i.value = c),
                                        },
                                        re(c),
                                        11,
                                        Yg
                                    )
                                ),
                                64
                            )),
                    ]),
                    b(
                        "pre",
                        {
                            class:
                                "h-full w-full overflow-auto p-4 pt-14 text-devtools-text-primary scrollbar-hide dark:text-devtools-text-primary-dark",
                            innerHTML: l.value,
                        },
                        null,
                        8,
                        Xg
                    ),
                ],
                64
            )
        );
    },
});
function ui(e) {
    return gi() ? (Da(e), !0) : !1;
}
const di = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
function Zg(e, t = 1e3, n = {}) {
    const { immediate: r = !0, immediateCallback: s = !1 } = n;
    let o = null;
    const i = Ei(!1);
    function l() {
        o && (clearInterval(o), (o = null));
    }
    function a() {
        (i.value = !1), l();
    }
    function u() {
        const c = ps(t);
        c <= 0 || ((i.value = !0), s && e(), l(), i.value && (o = setInterval(e, c)));
    }
    if ((r && di && u(), _e(t) || typeof t == "function")) {
        const c = je(t, () => {
            i.value && di && u();
        });
        ui(c);
    }
    return (
        ui(a),
        {
            isActive: hd(i),
            pause: a,
            resume: u,
        }
    );
}
const eb = di ? window : void 0;
function tb(e, t = {}) {
    const { immediate: n = !0, fpsLimit: r = void 0, window: s = eb, once: o = !1 } = t,
        i = Ei(!1),
        l = te(() => (r ? 1e3 / ps(r) : null));
    let a = 0,
        u = null;
    function c(m) {
        if (!i.value || !s) return;
        a || (a = m);
        const y = m - a;
        if (l.value && y < l.value) {
            u = s.requestAnimationFrame(c);
            return;
        }
        if (
            ((a = m),
                e({
                    delta: y,
                    timestamp: m,
                }),
                o)
        ) {
            (i.value = !1), (u = null);
            return;
        }
        u = s.requestAnimationFrame(c);
    }
    function d() {
        !i.value && s && ((i.value = !0), (a = 0), (u = s.requestAnimationFrame(c)));
    }
    function p() {
        (i.value = !1), u != null && s && (s.cancelAnimationFrame(u), (u = null));
    }
    return (
        n && d(),
        ui(p),
        {
            isActive: ki(i),
            pause: p,
            resume: d,
        }
    );
}
function nb(e = {}) {
    const { controls: t = !1, interval: n = "requestAnimationFrame", immediate: r = !0 } = e,
        s = X(new Date()),
        o = () => (s.value = new Date()),
        i =
            n === "requestAnimationFrame"
                ? tb(o, {
                    immediate: r,
                })
                : Zg(o, n, {
                    immediate: r,
                });
    return t
        ? {
            now: s,
            ...i,
        }
        : s;
}
const rb = [
    {
        max: 6e4,
        value: 1e3,
        name: "second",
    },
    {
        max: 276e4,
        value: 6e4,
        name: "minute",
    },
    {
        max: 72e6,
        value: 36e5,
        name: "hour",
    },
    {
        max: 5184e5,
        value: 864e5,
        name: "day",
    },
    {
        max: 24192e5,
        value: 6048e5,
        name: "week",
    },
    {
        max: 28512e6,
        value: 2592e6,
        name: "month",
    },
    {
        max: Number.POSITIVE_INFINITY,
        value: 31536e6,
        name: "year",
    },
];
const sb = {
    justNow: "just now",
    past: (e) => (e.match(/\d/) ? `${e} ago` : e),
    future: (e) => (e.match(/\d/) ? `in ${e}` : e),
    month: (e, t) => (e === 1 ? (t ? "last month" : "next month") : `${e} month${e > 1 ? "s" : ""}`),
    year: (e, t) => (e === 1 ? (t ? "last year" : "next year") : `${e} year${e > 1 ? "s" : ""}`),
    day: (e, t) => (e === 1 ? (t ? "yesterday" : "tomorrow") : `${e} day${e > 1 ? "s" : ""}`),
    week: (e, t) => (e === 1 ? (t ? "last week" : "next week") : `${e} week${e > 1 ? "s" : ""}`),
    hour: (e) => `${e} hour${e > 1 ? "s" : ""}`,
    minute: (e) => `${e} minute${e > 1 ? "s" : ""}`,
    second: (e) => `${e} second${e > 1 ? "s" : ""}`,
    invalid: "",
};
function ob(e) {
    return e.toISOString().slice(0, 10);
}
function ib(e, t = {}) {
    const { controls: n = !1, updateInterval: r = 3e4 } = t,
        { now: s, ...o } = nb({
            interval: r,
            controls: !0,
        }),
        i = te(() => lb(new Date(ps(e)), t, ps(s)));
    return n
        ? {
            timeAgo: i,
            ...o,
        }
        : i;
}
function lb(e, t = {}, n = Date.now()) {
    var r;
    const {
        max: s,
        messages: o = sb,
        fullDateFormatter: i = ob,
        units: l = rb,
        showSecond: a = !1,
        rounding: u = "round",
    } = t,
        c = typeof u == "number" ? (f) => +f.toFixed(u) : Math[u],
        d = +n - +e,
        p = Math.abs(d);
    function m(f, x) {
        return c(Math.abs(f) / x.value);
    }
    function y(f, x) {
        const S = m(f, x),
            A = f > 0,
            k = v(x.name, S, A);
        return v(A ? "past" : "future", k, A);
    }
    function v(f, x, S) {
        const A = o[f];
        return typeof A == "function" ? A(x, S) : A.replace("{0}", x.toString());
    }
    if (p < 6e4 && !a) return o.justNow;
    if (typeof s == "number" && p > s) return i(new Date(e));
    if (typeof s == "string") {
        const f = (r = l.find((x) => x.name === s)) == null ? void 0 : r.max;
        if (f && p > f) return i(new Date(e));
    }
    for (const [f, x] of l.entries()) {
        if (m(d, x) <= 0 && l[f - 1]) return y(d, l[f - 1]);
        if (p < x.max) return y(d, x);
    }
    return o.invalid;
}
const ab = {
    class: "truncate",
};
const cb = ["title"];
const ub = Re({
    __name: "Event",
    props: {
        event: {},
        selectedEvent: {},
    },
    emits: ["selectEvent"],
    setup(e) {
        const n = ib(e.event.metadata.timestamp, {
            showSecond: !0,
            updateInterval: 1e3,
        });
        return (r, s) => (
            C(),
            N(
                "button",
                {
                    type: "button",
                    class: de([
                        "flex h-5 w-full flex-shrink-0 cursor-pointer items-center justify-between overflow-hidden break-all rounded px-2 text-left font-mono transition",
                        {
                            "bg-devtools-state-selected text-devtools-primary dark:bg-devtools-state-selected-dark dark:text-devtools-primary-dark":
                                r.selectedEvent?.id === r.event.id,
                            "text-devtools-text-primary hover:bg-devtools-state-hover dark:text-devtools-text-primary-dark dark:hover:bg-devtools-state-hover-dark":
                                r.selectedEvent?.id !== r.event.id,
                        },
                    ]),
                    onClick: s[0] || (s[0] = (o) => r.$emit("selectEvent", r.event)),
                },
                [
                    b("div", ab, re(r.event.event.type.value), 1),
                    b(
                        "div",
                        {
                            class: "truncate text-devtools-text-disabled dark:text-devtools-text-disabled-dark",
                            title: `Dispatched ${Math.round(r.event.event.timeStamp.value)} ms after page began loading.`,
                        },
                        re(G(n)),
                        9,
                        cb
                    ),
                ],
                2
            )
        );
    },
});
const db = {
    class:
        "relative flex h-full max-h-full min-h-full min-w-full flex-col justify-start overflow-y-auto bg-devtools-surface p-1 scrollbar-hide dark:bg-devtools-surface-dark",
};
const fb = {
    key: 0,
};
const pb = {
    key: 1,
    class: "p-10 text-center text-gray-500 dark:text-gray-400",
};
const hb = {
    class:
        "relative flex h-full max-h-full flex-col overflow-y-auto bg-devtools-surface scrollbar-hide dark:bg-devtools-surface-dark",
};
const vb = {
    key: 0,
    class:
        "sticky left-0 top-0 z-20 flex h-[27px] w-full items-center justify-between border-b border-devtools-divider bg-devtools-surface px-1 dark:border-devtools-divider-dark dark:bg-devtools-surface-dark",
};
const mb = {
    key: 1,
    class:
        "flex h-full w-full items-center justify-center p-4 text-devtools-text-secondary dark:text-devtools-text-secondary-dark",
};
const gb = {
    class: "ml-2 space-y-0.5",
};
const bb = {
    key: 1,
};
const yb = {
    key: 0,
};
const xb = {
    class: "ml-2 space-y-0.5",
};
const wb = {
    key: 1,
    class: "text-gray-700 dark:text-gray-300",
};
const kb = Re({
    __name: "Events",
    setup(e) {
        const t = gu(),
            n = te(() => t.getEvents),
            r = te(() => t.isRecordingActive),
            s = X(null),
            o = X([]),
            i = [
                "AT_TARGET",
                "BUBBLE",
                "BUBBLING_PHASE",
                "CAPTURE",
                "CAPTURING_PHASE",
                "detail",
                "NONE",
                "TARGET",
                "timestamp",
                "type",
                "timeStamp",
            ],
            l = te(() => o.value.filter((c) => c.parentId === "detail")),
            a = te(() =>
                o.value
                    .filter((c) => c.parentId === "" && c.type !== "function" && !i.includes(c.name))
                    .sort((c, d) => c.name.localeCompare(d.name))
            );
        je(s, (c) => {
            c && c.event ? (o.value = Di(c.event)) : (o.value = []);
        });
        function u(c) {
            s.value = c;
        }
        return (c, d) => (
            C(),
            ke(
                Vi,
                {
                    class: "font-mono text-[11px] leading-5",
                },
                {
                    left: Mt(() => [
                        b("div", db, [
                            n.value.length > 0
                                ? (C(),
                                    N("div", fb, [
                                        (C(!0),
                                            N(
                                                ce,
                                                null,
                                                Oe(
                                                    n.value,
                                                    (p) => (
                                                        C(),
                                                        ke(
                                                            ub,
                                                            {
                                                                key: p.id,
                                                                event: p,
                                                                "selected-event": s.value,
                                                                onSelectEvent: u,
                                                            },
                                                            null,
                                                            8,
                                                            ["event", "selected-event"]
                                                        )
                                                    )
                                                ),
                                                128
                                            )),
                                    ]))
                                : (C(),
                                    N("div", pb, re(r.value ? "Waiting for events..." : "Recording is paused. No events to show."), 1)),
                        ]),
                    ]),
                    right: Mt(() => [
                        b("div", hb, [
                            s.value
                                ? (C(),
                                    N(
                                        "div",
                                        vb,
                                        d[0] ||
                                        (d[0] = [
                                            b(
                                                "div",
                                                {
                                                    class: "h-[27px]",
                                                },
                                                null,
                                                -1
                                            ),
                                        ])
                                    ))
                                : ae("", !0),
                            s.value ? ae("", !0) : (C(), N("div", mb, " Select an event to see its details. ")),
                            b(
                                "div",
                                {
                                    class: de([
                                        {
                                            hidden: !s.value,
                                        },
                                        "flex-1 px-3",
                                    ]),
                                },
                                [
                                    b("div", null, [
                                        d[2] ||
                                        (d[2] = b(
                                            "div",
                                            {
                                                class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark",
                                            },
                                            " detail: { ",
                                            -1
                                        )),
                                        b("div", gb, [
                                            l.value.length > 0
                                                ? (C(!0),
                                                    N(
                                                        ce,
                                                        {
                                                            key: 0,
                                                        },
                                                        Oe(
                                                            l.value,
                                                            (p) => (
                                                                C(),
                                                                ke(
                                                                    $t,
                                                                    {
                                                                        key: p.id,
                                                                        id: p.id,
                                                                        "data-source": "eventData",
                                                                        attribute: p,
                                                                        "flattened-data": o.value,
                                                                        "entity-id": s.value.id.toString(),
                                                                        "entity-name": p.name,
                                                                    },
                                                                    null,
                                                                    8,
                                                                    ["id", "attribute", "flattened-data", "entity-id", "entity-name"]
                                                                )
                                                            )
                                                        ),
                                                        128
                                                    ))
                                                : (C(),
                                                    N(
                                                        "div",
                                                        bb,
                                                        d[1] ||
                                                        (d[1] = [
                                                            b(
                                                                "div",
                                                                {
                                                                    class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark",
                                                                },
                                                                " empty ",
                                                                -1
                                                            ),
                                                        ])
                                                    )),
                                        ]),
                                        d[3] ||
                                        (d[3] = b(
                                            "div",
                                            {
                                                class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark",
                                            },
                                            " } ",
                                            -1
                                        )),
                                    ]),
                                    a.value.length > 0
                                        ? (C(),
                                            N("div", yb, [
                                                d[4] ||
                                                (d[4] = b(
                                                    "div",
                                                    {
                                                        class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark",
                                                    },
                                                    " properties: { ",
                                                    -1
                                                )),
                                                b("div", xb, [
                                                    (C(!0),
                                                        N(
                                                            ce,
                                                            null,
                                                            Oe(
                                                                a.value,
                                                                (p) => (
                                                                    C(),
                                                                    ke(
                                                                        $t,
                                                                        {
                                                                            key: p.id,
                                                                            id: p.id,
                                                                            "data-source": "eventData",
                                                                            attribute: p,
                                                                            "flattened-data": o.value,
                                                                            "entity-id": s.value.id.toString(),
                                                                            "entity-name": p.name,
                                                                        },
                                                                        null,
                                                                        8,
                                                                        ["id", "attribute", "flattened-data", "entity-id", "entity-name"]
                                                                    )
                                                                )
                                                            ),
                                                            128
                                                        )),
                                                ]),
                                                d[5] ||
                                                (d[5] = b(
                                                    "div",
                                                    {
                                                        class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark",
                                                    },
                                                    " } ",
                                                    -1
                                                )),
                                            ]))
                                        : ae("", !0),
                                    o.value.length === 0
                                        ? (C(), N("p", wb, " (Event data might be null, undefined, or empty) "))
                                        : ae("", !0),
                                ],
                                2
                            ),
                        ]),
                    ]),
                    _: 1,
                }
            )
        );
    },
});
const _b = {
    class: "flex flex-col gap-y-6",
};
const Sb = {
    class: "flex flex-col gap-y-3",
};
const Eb = {
    class: "flex items-center gap-x-2",
};
const Cb = {
    key: 0,
    class: "text-sm text-red-500",
};
const Ab = {
    class: "flex flex-col gap-y-1.5",
};
const Tb = ["disabled"];
const Ob = {
    class: "flex flex-col gap-y-1.5",
};
const Rb = ["disabled"];
const Ib = ["disabled"];
const Db = ["disabled"];
const Pb = {
    key: 0,
    class: "mt-2",
};
const $b = {
    class: "mb-3 text-base font-medium text-devtools-text-primary dark:text-devtools-text-primary-dark",
};
const Lb = {
    key: 0,
};
const Nb = {
    class: "space-y-2",
};
const Fb = {
    class: "flex flex-col",
};
const Mb = {
    class: "text-sm font-medium text-devtools-text-primary dark:text-devtools-text-primary-dark",
};
const jb = {
    class: "text-xs text-devtools-text-secondary dark:text-devtools-text-secondary-dark",
};
const Ub = ["onClick", "disabled"];
const Hb = {
    key: 1,
    class: "pr-2 text-xs text-devtools-text-disabled dark:text-devtools-text-disabled-dark",
};
const Vb = {
    class: "h-full w-full overflow-auto bg-devtools-surface scrollbar-hide dark:bg-devtools-surface-dark",
};
const zb = {
    class: "p-4",
};
const qb = {
    class: "w-full",
};
const Kb = {
    class: "mb-6",
};
const Wb = {
    class: "mb-6",
};
const Gb = {
    class: "flex space-x-3",
};
const Jb = {
    class: "mb-6",
};
const Yb = {
    class: "mb-4 flex",
};
const Xb = {
    class: "space-y-2",
};
const Qb = {
    class: "text-devtools-text-primary dark:text-devtools-text-primary-dark",
};
const Zb = ["onClick"];
const ey = Re({
    __name: "Settings",
    setup(e) {
        const t = jn(),
            n = X("");
        function r() {
            if (n.value && n.value.toLowerCase() !== "x-data" && !t.customAttributesToDetect.includes(n.value)) {
                const o = [...t.customAttributesToDetect, n.value];
                t.updateSetting("customAttributesToDetect", o), (n.value = "");
            }
        }
        function s(o) {
            const i = t.customAttributesToDetect.filter((l) => l !== o);
            t.updateSetting("customAttributesToDetect", i);
        }
        return (o, i) => (
            C(),
            N("div", Vb, [
                b("div", zb, [
                    b("div", qb, [
                        b("div", Wb, [
                            i[8] ||
                            (i[8] = b(
                                "h4",
                                {
                                    class: "mb-2 text-lg font-medium text-devtools-text-primary dark:text-devtools-text-primary-dark",
                                },
                                " Theme ",
                                -1
                            )),
                            b("div", Gb, [
                                b(
                                    "button",
                                    {
                                        class: de([
                                            "flex items-center rounded border px-4 py-2",
                                            {
                                                "border-devtools-primary bg-devtools-primary-container text-devtools-primary dark:border-devtools-primary-dark dark:bg-devtools-primary-container-dark dark:text-devtools-primary-dark":
                                                    G(t).theme === "system",
                                                "border-devtools-outline text-devtools-text-primary dark:border-devtools-outline-dark dark:text-devtools-text-primary-dark":
                                                    G(t).theme !== "system",
                                            },
                                        ]),
                                        onClick: i[0] || (i[0] = (l) => G(t).updateSetting("theme", "system")),
                                    },
                                    i[5] ||
                                    (i[5] = [
                                        b(
                                            "svg",
                                            {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                class: "mr-1 h-5 w-5",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                            },
                                            [
                                                b("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                                                }),
                                                b("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                                                }),
                                            ],
                                            -1
                                        ),
                                        Te(" System ", -1),
                                    ]),
                                    2
                                ),
                                b(
                                    "button",
                                    {
                                        class: de([
                                            "flex items-center rounded border px-4 py-2",
                                            {
                                                "border-devtools-primary bg-devtools-primary-container text-devtools-primary dark:border-devtools-primary-dark dark:bg-devtools-primary-container-dark dark:text-devtools-primary-dark":
                                                    G(t).theme === "light",
                                                "border-devtools-outline text-devtools-text-primary dark:border-devtools-outline-dark dark:text-devtools-text-primary-dark":
                                                    G(t).theme !== "light",
                                            },
                                        ]),
                                        onClick: i[1] || (i[1] = (l) => G(t).updateSetting("theme", "light")),
                                    },
                                    i[6] ||
                                    (i[6] = [
                                        b(
                                            "svg",
                                            {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                class: "mr-1 h-5 w-5",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                            },
                                            [
                                                b("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
                                                }),
                                            ],
                                            -1
                                        ),
                                        Te(" Light ", -1),
                                    ]),
                                    2
                                ),
                                b(
                                    "button",
                                    {
                                        class: de([
                                            "flex items-center rounded border px-4 py-2",
                                            {
                                                "border-devtools-primary bg-devtools-primary-container text-devtools-primary dark:border-devtools-primary-dark dark:bg-devtools-primary-container-dark dark:text-devtools-primary-dark":
                                                    G(t).theme === "dark",
                                                "border-devtools-outline text-devtools-text-primary dark:border-devtools-outline-dark dark:text-devtools-text-primary-dark":
                                                    G(t).theme !== "dark",
                                            },
                                        ]),
                                        onClick: i[2] || (i[2] = (l) => G(t).updateSetting("theme", "dark")),
                                    },
                                    i[7] ||
                                    (i[7] = [
                                        b(
                                            "svg",
                                            {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                class: "mr-1 h-5 w-5",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                            },
                                            [
                                                b("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
                                                }),
                                            ],
                                            -1
                                        ),
                                        Te(" Dark ", -1),
                                    ]),
                                    2
                                ),
                            ]),
                        ]),
                        b("div", Jb, [
                            i[11] ||
                            (i[11] = b(
                                "h4",
                                {
                                    class: "mb-2 text-lg font-medium text-devtools-text-primary dark:text-devtools-text-primary-dark",
                                },
                                " Alpine.js detection ",
                                -1
                            )),
                            i[12] ||
                            (i[12] = b(
                                "p",
                                {
                                    class: "mb-3 text-sm text-devtools-text-secondary dark:text-devtools-text-secondary-dark",
                                },
                                [
                                    Te(" Customize detection of Alpine.js components, by adding additional attributes to look for. "),
                                    b("br"),
                                    Te(" After adding an attribute, reload the page to see the changes. "),
                                ],
                                -1
                            )),
                            b("div", Yb, [
                                it(
                                    b(
                                        "input",
                                        {
                                            "onUpdate:modelValue": i[3] || (i[3] = (l) => (n.value = l)),
                                            type: "text",
                                            placeholder: "Enter attribute e.g. data-x",
                                            class:
                                                "flex-1 rounded-l border border-devtools-outline bg-devtools-surface px-3 py-2 text-devtools-text-primary dark:border-devtools-outline-dark dark:bg-devtools-surface-dark dark:text-devtools-text-primary-dark",
                                            onKeyup: Vo(r, ["enter"]),
                                        },
                                        null,
                                        544
                                    ),
                                    [[Qt, n.value]]
                                ),
                                b(
                                    "button",
                                    {
                                        onClick: r,
                                        class:
                                            "rounded-r border border-l-0 border-devtools-primary bg-devtools-primary-container px-4 py-2 text-devtools-primary dark:border-devtools-primary-dark dark:bg-devtools-primary-container-dark dark:text-devtools-primary-dark",
                                    },
                                    " Add "
                                ),
                            ]),
                            b("div", Xb, [
                                i[10] ||
                                (i[10] = b(
                                    "div",
                                    {
                                        class:
                                            "flex items-center rounded border border-devtools-outline bg-devtools-surface-variant px-3 py-2 dark:border-devtools-outline-dark dark:bg-devtools-surface-variant-dark",
                                    },
                                    [
                                        b(
                                            "span",
                                            {
                                                class: "font-medium text-devtools-text-primary dark:text-devtools-text-primary-dark",
                                            },
                                            " x-data "
                                        ),
                                        b(
                                            "span",
                                            {
                                                class: "ml-auto text-xs text-devtools-text-disabled dark:text-devtools-text-disabled-dark",
                                            },
                                            "Default"
                                        ),
                                    ],
                                    -1
                                )),
                                (C(!0),
                                    N(
                                        ce,
                                        null,
                                        Oe(
                                            G(t).customAttributesToDetect,
                                            (l) => (
                                                C(),
                                                N(
                                                    "div",
                                                    {
                                                        key: l,
                                                        class:
                                                            "flex items-center justify-between rounded border border-devtools-outline px-3 py-2 dark:border-devtools-outline-dark",
                                                    },
                                                    [
                                                        b("span", Qb, re(l), 1),
                                                        b(
                                                            "button",
                                                            {
                                                                onClick: (a) => s(l),
                                                                class: "text-devtools-error dark:text-devtools-error-dark",
                                                            },
                                                            i[9] ||
                                                            (i[9] = [
                                                                b(
                                                                    "svg",
                                                                    {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        class: "h-5 w-5",
                                                                        fill: "none",
                                                                        viewBox: "0 0 24 24",
                                                                        stroke: "currentColor",
                                                                    },
                                                                    [
                                                                        b("path", {
                                                                            "stroke-linecap": "round",
                                                                            "stroke-linejoin": "round",
                                                                            "stroke-width": "2",
                                                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                                                        }),
                                                                    ],
                                                                    -1
                                                                ),
                                                            ]),
                                                            8,
                                                            Zb
                                                        ),
                                                    ]
                                                )
                                            )
                                        ),
                                        128
                                    )),
                            ]),
                        ]),
                    ]),
                ]),
            ])
        );
    },
});
const ty = {
    class:
        "relative flex h-full max-h-full min-h-full min-w-full flex-col justify-start overflow-y-auto bg-devtools-surface p-1 scrollbar-hide dark:bg-devtools-surface-dark",
};
const ny = {
    key: 0,
    class:
        "flex h-full w-full items-center justify-center p-4 text-devtools-text-secondary dark:text-devtools-text-secondary-dark",
};
const ry = ["onClick"];
const sy = {
    class: "flex items-baseline",
};
const oy = {
    class: "font-mono text-xs leading-none",
};
const iy = {
    class: "ml-2 font-mono leading-none",
};
const ly = {
    class:
        "relative flex h-full max-h-full flex-col overflow-y-auto bg-devtools-surface scrollbar-hide dark:bg-devtools-surface-dark",
};
const ay = {
    key: 0,
    class:
        "sticky left-0 top-0 z-20 flex h-[27px] w-full items-center justify-between border-b border-devtools-divider bg-devtools-surface px-1 dark:border-devtools-divider-dark dark:bg-devtools-surface-dark",
};
const cy = {
    key: 1,
    class:
        "flex h-full w-full items-center justify-center p-4 text-devtools-text-secondary dark:text-devtools-text-secondary-dark",
};
const uy = {
    key: 0,
    class: "font-mono",
};
const dy = {
    class: "ml-[8px]",
};
const fy = {
    key: 1,
    class: "font-mono",
};
const py = {
    key: 0,
};
const hy = {
    class: "ml-[8px]",
};
const vy = {
    key: 1,
};
const my = {
    class: "ml-[8px]",
};
const gy = {
    key: 2,
};
const by = {
    class: "ml-[8px]",
};
const yy = {
    key: 2,
    class: "p-4 text-devtools-text-secondary dark:text-devtools-text-secondary-dark",
};
const xy = Re({
    __name: "Stores",
    setup(e) {
        const t = useStoresStore(),
            n = te(() => t.filteredStores),
            r = te(() => t.selectedStore),
            s = te(() => t.sortedAttributes?.filter((f) => !f.parentId) || []),
            o = te(() => s.value.filter((f) => !f.readOnly && f.type !== "function")),
            i = te(() => s.value.filter((f) => f.readOnly && f.type !== "function")),
            l = te(() => s.value.filter((f) => f.type === "function")),
            a = te(() => {
                if (!r.value || !r.value.data) return !1;
                const f = r.value.data,
                    x = Object.keys(f || {});
                return x.length === 1 && x[0] === "value" && "value" in f && "type" in f.value;
            }),
            u = te(() => (!a.value || !r.value || !r.value.data ? null : r.value.data.value)),
            c = te(() =>
                typeof r.value > "u" || r.value === null
                    ? null
                    : {
                        id: `${r.value.id}-primitive`,
                        name: r.value.name,
                        value: u.value.value,
                        type: u.value.type,
                        path: "",
                        readOnly: !1,
                        parentId: "",
                    }
            ),
            d = X(!1),
            p = () => {
                d.value = window.innerWidth < as;
            };
        ut(() => {
            p(), window.addEventListener("resize", p);
        }),
            gn(() => {
                window.removeEventListener("resize", p);
            });
        const m = te(() => (d.value ? "horizontal" : "vertical"));
        function y(f) {
            t.selectStore(f);
        }
        function v(f) {
            f.dataSource === "store" &&
                (a.value && (f.attributeSequence = ""),
                    t.editStoreAttribute(f.entityName, f.attributeSequence, f.attributeValue));
        }
        function logStore(storeName) {
            if (storeName) {
                he.devtools.inspectedWindow.eval(`
                    (function() {
                        try {
                            // Get specific store data
                            console.log('storeData:')
                            console.log('tmp')
                            tmp = Alpine.store("${storeName}");
                            console.log(tmp);
                        } catch (e) {
                            console.error('Error accessing Alpine store:', e);
                        }
                    })()
                `);
            }
        }

        function logStoreMethod(storeName, methodName) {
            if (storeName && methodName) {
                he.devtools.inspectedWindow.eval(`
                    (function() {
                        try {
                            const storeData = Alpine.store("${storeName}");
                            if (storeData) {
                                let fn = storeData["${methodName}"];
                                if (fn && fn.__original_fn) {
                                    fn = fn.__original_fn;
                                }
                                inspect(fn);
                            }
                        } catch (e) {
                            console.error('Error accessing store method:', e);
                        }
                    })()
                `);
            }
        }
        return (f, x) => (
            C(),
            ke(
                Vi,
                {
                    direction: m.value,
                    class: "font-mono text-[11px] leading-5",
                },
                {
                    left: Mt(() => [
                        b("div", ty, [
                            n.value.length ? ae("", !0) : (C(), N("div", ny, re("No stores found"))),
                            (C(!0),
                                N(
                                    ce,
                                    null,
                                    Oe(
                                        n.value,
                                        (S) => (
                                            C(),
                                            N(
                                                "div",
                                                {
                                                    key: S.id,
                                                    class: de([
                                                        "flex cursor-pointer flex-row items-center gap-2 overflow-hidden rounded p-2 transition",
                                                        {
                                                            "bg-devtools-state-selected text-devtools-primary dark:bg-devtools-state-selected-dark dark:text-devtools-primary-dark":
                                                                r.value?.id === S.id,
                                                            "text-devtools-text-primary hover:bg-devtools-state-hover dark:text-devtools-text-primary-dark dark:hover:bg-devtools-state-hover-dark":
                                                                r.value?.id !== S.id,
                                                        },
                                                    ]),
                                                    onClick: (A) => y(S.id),
                                                },
                                                [
                                                    ge(G(Cs), {
                                                        icon: "carbon:db2-database",
                                                        class: "h-4 w-4",
                                                    }),
                                                    b("div", sy, [b("span", oy, re(S.name), 1), b("span", iy, re(S.type), 1)]),
                                                ],
                                                10,
                                                ry
                                            )
                                        )
                                    ),
                                    128
                                )),
                        ]),
                    ]),
                    right: Mt(() => [
                        b("div", ly, [
                            r.value
                                ? (C(),
                                    N("div", ay, [
                                        x[0] ||
                                        (x[0] = b(
                                            "div",
                                            {
                                                class: "h-[27px]",
                                            },
                                            null,
                                            -1
                                        )),
                                        b(
                                            "div",
                                            {
                                                class: "flex gap-1",
                                                style: "position: absolute; right: 8px; top: 8px;",
                                            },
                                            [
                                                b(
                                                    "button",
                                                    {
                                                        class:
                                                            "rounded-full p-1 text-devtools-text-secondary hover:bg-devtools-state-hover dark:text-devtools-text-secondary-dark dark:hover:bg-devtools-state-hover-dark",
                                                        title: "Log store to console",
                                                        onClick:
                                                            x[11] ||
                                                            (x[11] = function () {
                                                                const storeName = r.value?.name || "";
                                                                if (storeName) {
                                                                    logStore(storeName);
                                                                }
                                                            }),
                                                    },
                                                    [
                                                        ge(G(Cs), {
                                                            icon: "carbon:terminal",
                                                            class: "h-4 w-4",
                                                        }),
                                                    ]
                                                ),
                                            ]
                                        ),
                                    ]))
                                : ae("", !0),
                            r.value ? ae("", !0) : (C(), N("div", cy, " Select a store to view ")),
                            b(
                                "div",
                                {
                                    class: de([
                                        {
                                            hidden: !r.value,
                                        },
                                        "flex-1 px-3",
                                    ]),
                                },
                                [
                                    a.value && c.value
                                        ? (C(),
                                            N("div", uy, [
                                                x[1] ||
                                                (x[1] = b(
                                                    "div",
                                                    {
                                                        class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark",
                                                    },
                                                    " data: { ",
                                                    -1
                                                )),
                                                b("div", dy, [
                                                    ge(
                                                        $t,
                                                        {
                                                            id: c.value.id,
                                                            "data-source": "store",
                                                            attribute: c.value,
                                                            "flattened-data": [],
                                                            "entity-id": r.value?.id || 0,
                                                            "entity-name": r.value?.name || "",
                                                            onUpdateData: v,
                                                        },
                                                        null,
                                                        8,
                                                        ["id", "attribute", "entity-id", "entity-name"]
                                                    ),
                                                ]),
                                                x[2] ||
                                                (x[2] = b(
                                                    "div",
                                                    {
                                                        class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark",
                                                    },
                                                    " } ",
                                                    -1
                                                )),
                                            ]))
                                        : s.value && s.value.length > 0 && !a.value
                                            ? (C(),
                                                N("div", fy, [
                                                    o.value.length > 0
                                                        ? (C(),
                                                            N("div", py, [
                                                                x[3] ||
                                                                (x[3] = b(
                                                                    "div",
                                                                    {
                                                                        class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark",
                                                                    },
                                                                    " data: { ",
                                                                    -1
                                                                )),
                                                                b("div", hy, [
                                                                    (C(!0),
                                                                        N(
                                                                            ce,
                                                                            null,
                                                                            Oe(
                                                                                o.value,
                                                                                (S) => (
                                                                                    C(),
                                                                                    ke(
                                                                                        $t,
                                                                                        {
                                                                                            key: S.id,
                                                                                            id: S.id,
                                                                                            "data-source": "store",
                                                                                            attribute: S,
                                                                                            "flattened-data": G(t).selectedStoreFlattenedData || [],
                                                                                            "entity-id": r.value?.id || 0,
                                                                                            "entity-name": r.value?.name || "",
                                                                                            onUpdateData: v,
                                                                                            onDeleteProperty: handleDeleteProperty,
                                                                                        },
                                                                                        null,
                                                                                        8,
                                                                                        ["id", "attribute", "flattened-data", "entity-id", "entity-name"]
                                                                                    )
                                                                                )
                                                                            ),
                                                                            128
                                                                        )),
                                                                ]),
                                                                x[4] ||
                                                                (x[4] = b(
                                                                    "div",
                                                                    {
                                                                        class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark",
                                                                    },
                                                                    " } ",
                                                                    -1
                                                                )),
                                                            ]))
                                                        : ae("", !0),
                                                    i.value.length > 0
                                                        ? (C(),
                                                            N("div", vy, [
                                                                x[5] ||
                                                                (x[5] = b(
                                                                    "div",
                                                                    {
                                                                        class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark",
                                                                    },
                                                                    " computed: { ",
                                                                    -1
                                                                )),
                                                                b("div", my, [
                                                                    (C(!0),
                                                                        N(
                                                                            ce,
                                                                            null,
                                                                            Oe(
                                                                                i.value,
                                                                                (S) => (
                                                                                    C(),
                                                                                    ke(
                                                                                        $t,
                                                                                        {
                                                                                            key: S.id,
                                                                                            id: S.id,
                                                                                            "data-source": "store",
                                                                                            attribute: S,
                                                                                            "flattened-data": G(t).selectedStoreFlattenedData || [],
                                                                                            "entity-id": r.value?.id || 0,
                                                                                            "entity-name": r.value?.name || "",
                                                                                            onUpdateData: v,
                                                                                        },
                                                                                        null,
                                                                                        8,
                                                                                        ["id", "attribute", "flattened-data", "entity-id", "entity-name"]
                                                                                    )
                                                                                )
                                                                            ),
                                                                            128
                                                                        )),
                                                                ]),
                                                                x[6] ||
                                                                (x[6] = b(
                                                                    "div",
                                                                    {
                                                                        class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark",
                                                                    },
                                                                    " } ",
                                                                    -1
                                                                )),
                                                            ]))
                                                        : ae("", !0),
                                                    l.value.length > 0
                                                        ? (C(),
                                                            N("div", gy, [
                                                                x[7] ||
                                                                (x[7] = b(
                                                                    "div",
                                                                    {
                                                                        class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark",
                                                                    },
                                                                    " methods: { ",
                                                                    -1
                                                                )),
                                                                b("div", by, [
                                                                    (C(!0),
                                                                        N(
                                                                            ce,
                                                                            null,
                                                                            Oe(
                                                                                l.value,
                                                                                (S) => (
                                                                                    C(),
                                                                                    N(
                                                                                        "div",
                                                                                        {
                                                                                            key: S.id,
                                                                                            class:
                                                                                                "cursor-pointer hover:bg-devtools-state-hover dark:hover:bg-devtools-state-hover-dark p-2 rounded transition-colors",
                                                                                            "data-method-name": S.name || "",
                                                                                            onClick:
                                                                                                x[12] ||
                                                                                                (x[12] = function (event) {
                                                                                                    const storeName = r.value?.name || "";
                                                                                                    const methodName =
                                                                                                        event.currentTarget.getAttribute("data-method-name") || "";
                                                                                                    console.log("Clicked method:", methodName); // Debug
                                                                                                    if (storeName && methodName) {
                                                                                                        logStoreMethod(storeName, methodName);
                                                                                                    }
                                                                                                }),
                                                                                        },
                                                                                        [
                                                                                            b(
                                                                                                "span",
                                                                                                {
                                                                                                    class:
                                                                                                        "text-devtools-text-primary dark:text-devtools-text-primary-dark",
                                                                                                },
                                                                                                re(S.name + ": "),
                                                                                                1
                                                                                            ),
                                                                                            b(
                                                                                                "span",
                                                                                                {
                                                                                                    class:
                                                                                                        "text-devtools-text-secondary dark:text-devtools-text-secondary-dark ml-2",
                                                                                                },
                                                                                                re("(function)"),
                                                                                                1
                                                                                            ),
                                                                                        ]
                                                                                    )
                                                                                )
                                                                            ),
                                                                            128
                                                                        )),
                                                                ]),
                                                                x[8] ||
                                                                (x[8] = b(
                                                                    "div",
                                                                    {
                                                                        class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark",
                                                                    },
                                                                    " } ",
                                                                    -1
                                                                )),
                                                            ]))
                                                        : ae("", !0),
                                                ]))
                                            : (C(), N("div", yy, " No data available ")),
                                ],
                                2
                            ),
                        ]),
                    ]),
                    _: 1,
                },
                8,
                ["direction"]
            )
        );
    },
});

// ==================== MUTATIONS TIMELINE ====================
const Mb_container = {
    class: "relative flex h-full max-h-full min-h-full min-w-full flex-col justify-start overflow-y-auto bg-devtools-surface p-1 dark:bg-devtools-surface-dark",
};
const Mb_header = {
    class: "sticky left-0 top-0 z-20 flex w-full flex-col gap-2 border-b border-devtools-divider bg-devtools-surface p-2 dark:border-devtools-divider-dark dark:bg-devtools-surface-dark",
};
const Mb_item = {
    class: "flex w-full cursor-pointer items-center justify-between break-all rounded px-2 py-1 text-left font-mono transition hover:bg-devtools-state-hover dark:hover:bg-devtools-state-hover-dark",
};
const Mb_empty = {
    class: "flex h-full w-full items-center justify-center p-4 text-devtools-text-secondary dark:text-devtools-text-secondary-dark",
};
const Mb_detail = {
    class: "relative flex h-full max-h-full flex-col overflow-y-auto bg-devtools-surface scrollbar-thin dark:bg-devtools-surface-dark",
    style: "scrollbar-width: thin;",
};
const Mb_badge = {
    class: "ml-2 rounded bg-devtools-primary px-1.5 py-0.5 text-[10px] font-medium text-white dark:bg-devtools-primary-dark",
};

// Mutations store for tracking
let mutationsData = X([]);
let mutationIdCounter = X(0);
let selectedMutation = X(null);
let storeFilter = X("");


function addMutation(mutation) {

    mutationIdCounter.value++;
    mutationsData.value.push({
        id: mutationIdCounter.value,
        timestamp: new Date(),
        ...mutation
    });
    // Keep only last 500 mutations
    if (mutationsData.value.length > 500) {
        mutationsData.value = mutationsData.value.slice(-500);
    }
}

function clearMutations() {
    mutationsData.value = [];
    selectedMutation.value = null;
}

let pollingInterval = null;
let storeWatchInterval = null;

function initMutationTracking() {
    console.log('[DevTools Panel] initMutationTracking called');

    try {
        // First, inject initialization script to setup mutation queue
        he.devtools.inspectedWindow.eval(`
            (function() {
                if (!window.__ALPINE_MUTATIONS_QUEUE__) {
                    window.__ALPINE_MUTATIONS_QUEUE__ = [];
                }
                if (!window.__ALPINE_TRACKED_STORES__) {
                    window.__ALPINE_TRACKED_STORES__ = new Set();
                }
                
                // --- Component Discovery (Global) ---
                window.__getAlpineComponents__ = () => {
                     const components = [];
                     document.querySelectorAll('[x-data]').forEach((el, index) => {
                         let name = el.getAttribute('x-data');
                         // Try to get a better name from other attributes if x-data is generic or empty
                         if (!name || name === '{}' || name.startsWith('{')) {
                             if (el.hasAttribute('x-id')) {
                                 name = el.getAttribute('x-id'); 
                             } else if (el.id) {
                                 name = '#' + el.id;
                             } else if (el.getAttribute('name')) {
                                 name = el.getAttribute('name');
                             } else if (!name || name === '{}') {
                                 name = 'Component ' + (index + 1);
                             } else {
                                // Keep the raw object string if it's short, otherwise anonymize
                                name = name.length > 20 ? 'Anonymous Component ' + (index + 1) : name;
                             }
                         }

                         // Reuse existing ID if available or assign one
                         let id = el.__ALPINEJS_PRO_DEVTOOLS_COMPONENT_INTERNALS__?.id;
                         if (!id) {
                             try {
                                 if (!el.hasAttribute('data-alpine-devtool-id')) {
                                     el.setAttribute('data-alpine-devtool-id', 'temp-' + index + '-' + Date.now());
                                 }
                                 id = el.getAttribute('data-alpine-devtool-id');
                             } catch(e) {}
                         }

                         if (id) {
                            components.push({
                                id: id,
                                name: name
                            });
                         }
                     });
                     return components;
                };
                
                // Function to watch a store
                window.__watchAlpineStore__ = function(storeName) {
                    if (window.__ALPINE_TRACKED_STORES__.has(storeName)) {
                        // Store is already watched, just return quiet confirmation
                        return 'already_watching';
                    }
                    
                    if (typeof Alpine === 'undefined') {
                        console.log('[Alpine DevTools] Alpine not defined');
                        return 'no_alpine';
                    }
                    
                    try {
                        const store = Alpine.store(storeName);
                        if (!store || typeof store !== 'object') {
                            console.log('[Alpine DevTools] Store not found or not object:', storeName);
                            return 'not_found';
                        }
                        
                        window.__ALPINE_TRACKED_STORES__.add(storeName);
                        
                        // --- Global Helper Functions ---
                        const serializeArg = (arg) => {
                             if (arg === null) return null;
                             if (arg === undefined) return undefined;
                             if (typeof arg === 'function') return '[Function]';
                             if (typeof arg === 'object') {
                                 if (arg instanceof Element) return '[Element: ' + arg.tagName.toLowerCase() + ']';
                                 if (arg instanceof Event) return '[Event: ' + arg.type + ']';
                                 try {
                                     JSON.stringify(arg);
                                     return arg;
                                 } catch (e) {
                                     return '[Object (Circular/Unserializable)]';
                                 }
                             }
                             return arg;
                        };

                        const wrapMethods = (target, namePrefix, isStore = true) => {
                            if (!target) return;
                            
                            // Use Alpine.raw if available to get the underlying object
                            // This helps when target is a Proxy that doesn't report keys
                            let workTarget = target;
                            if (typeof Alpine !== 'undefined' && Alpine.raw) {
                                workTarget = Alpine.raw(target);
                            }

                            // Collect all keys including prototype chain and non-enumerables
                            const keySet = new Set();
                            for (const key in workTarget) {
                                keySet.add(key);
                            }
                            Object.getOwnPropertyNames(workTarget).forEach(k => keySet.add(k));
                            
                            const keys = Array.from(keySet);
                            
                            keys.forEach(key => {
                                try {
                                    // Skip magic properties to avoid Alpine warnings
                                    if (key.startsWith('$')) return;
                                    
                                    // Accessing property might trigger getters, so wrap in try-catch
                                    const value = workTarget[key];
                                    
                                    // Skip internal Alpine properties
                                    if (typeof key === 'string' && key.startsWith('_x_')) return;

                                    if (typeof value === 'function' && key !== 'init') {
                                        const originalFn = value;
                                        if (!originalFn.__devtools_wrapped) {
                                            const wrappedFn = function(...args) {
                                                let result;
                                                let error;
                                                try {
                                                    result = originalFn.apply(this, args);
                                                } catch (err) {
                                                    error = err;
                                                    throw err;
                                                } finally {
                                                    try {
                                                        if (window.__ALPINE_MUTATIONS_QUEUE__) {
                                                            const fnId = 'fn_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
                                                            if (!window.__ALPINE_FN_CACHE__) window.__ALPINE_FN_CACHE__ = {};
                                                            window.__ALPINE_FN_CACHE__[fnId] = originalFn;

                                                            const mutation = {
                                                                storeName: namePrefix,
                                                                sourceType: isStore ? 'store' : 'component',
                                                                property: key + '()',
                                                                oldValue: args.map(serializeArg), 
                                                                newValue: error ? '[Error: ' + error.message + ']' : serializeArg(result),
                                                                mutationType: 'function-call',
                                                                timestamp: Date.now(),
                                                                fnId: fnId
                                                            };
                                                            window.__ALPINE_MUTATIONS_QUEUE__.push(mutation);
                                                        }
                                                    } catch(e) { console.error(e); }
                                                }
                                                return result;
                                            };
                                            wrappedFn.__devtools_wrapped = true;
                                            try { Object.defineProperty(wrappedFn, 'name', { value: key }); } catch (e) {}
                                            wrappedFn.__original_fn = originalFn;
                                            workTarget[key] = wrappedFn;
                                        } else {
                                             // already wrapped
                                        }
                                    }
                                } catch (e) {
                                    // Ignore errors accessing properties (e.g. getters that fail)
                                }
                            });
                        };

                        // --- Polling Logic for Data Changes ---
                        if (!window.__ALPINE_TRACKING_INTERVALS__) {
                            window.__ALPINE_TRACKING_INTERVALS__ = new Map();
                        }

                        const startPolling = (target, namePrefix, isStore = true) => {
                             // Initialize snapshot
                             let previousSnapshot;
                             try {
                                 previousSnapshot = JSON.stringify(target);
                             } catch(e) {
                                 console.warn('[Alpine DevTools] Cannot stringify target for polling:', namePrefix);
                                 return;
                             }
                             
                             if (window.__ALPINE_TRACKING_INTERVALS__.has(namePrefix)) {
                                 clearInterval(window.__ALPINE_TRACKING_INTERVALS__.get(namePrefix));
                             }

                             const intervalId = setInterval(() => {
                                 try {
                                    const currentSnapshot = JSON.stringify(target);
                                    if (currentSnapshot !== previousSnapshot) {
                                        const prev = JSON.parse(previousSnapshot);
                                        const curr = JSON.parse(currentSnapshot);
                                        
                                        const allKeys = new Set([...Object.keys(prev), ...Object.keys(curr)]);
                                        allKeys.forEach(key => {
                                            if (typeof curr[key] === 'function' || typeof prev[key] === 'function') return;
                                            
                                            const prevVal = JSON.stringify(prev[key]);
                                            const currVal = JSON.stringify(curr[key]);
                                            if (prevVal !== currVal) {
                                                window.__ALPINE_MUTATIONS_QUEUE__.push({
                                                    storeName: isStore ? namePrefix : (namePrefix || 'Component'),
                                                    sourceType: isStore ? 'store' : 'component',
                                                    property: key,
                                                    oldValue: prev[key],
                                                    newValue: curr[key],
                                                    mutationType: prev[key] === undefined ? 'add' : (curr[key] === undefined ? 'delete' : 'set'),
                                                    timestamp: Date.now()
                                                });
                                            }
                                        });
                                        previousSnapshot = currentSnapshot;
                                    }
                                 } catch(e) {}
                             }, 200);
                             
                             window.__ALPINE_TRACKING_INTERVALS__.set(namePrefix, intervalId);
                        };
                        
                        const stopPolling = (namePrefix) => {
                            if (window.__ALPINE_TRACKING_INTERVALS__.has(namePrefix)) {
                                clearInterval(window.__ALPINE_TRACKING_INTERVALS__.get(namePrefix));
                                window.__ALPINE_TRACKING_INTERVALS__.delete(namePrefix);
                            }
                        };

                        const unwrapMethods = (target) => {
                             if (!target) return;
                             let workTarget = target;
                             if (typeof Alpine !== 'undefined' && Alpine.raw) {
                                 workTarget = Alpine.raw(target);
                             }
                             
                             for (const key in workTarget) {
                                try {
                                    if (typeof workTarget[key] === 'function' && workTarget[key].__devtools_wrapped && workTarget[key].__original_fn) {
                                        workTarget[key] = workTarget[key].__original_fn;
                                    }
                                } catch(e) {}
                            }
                        };

                        // --- Global Toggle Function ---
                        if (!window.__devtools_toggle_component_tracking__) {
                            window.__devtools_toggle_component_tracking__ = (componentId, shouldTrack) => {
                                 try {
                                     const alpineElements = Array.from(document.querySelectorAll('[x-data]'));
                                     // Try matching by internal ID or data-attribute
                                     const el = alpineElements.find(e => 
                                        e.__ALPINEJS_PRO_DEVTOOLS_COMPONENT_INTERNALS__?.id == componentId || 
                                        e.getAttribute('data-alpine-devtool-id') == componentId
                                     );
                                     
                                     if (el) {
                                         // Use generic $data which works for both
                                         const data = Alpine.$data(el);
                                         
                                         const nameAttr = el.getAttribute('x-data');
                                         const name = (nameAttr && nameAttr !== '{}') ? nameAttr : 'Component ' + componentId;
                                         
                                         if (shouldTrack) {
                                             console.log('[Alpine DevTools] Starting tracking for:', name);
                                             wrapMethods(data, name, false);
                                             startPolling(data, name, false);
                                         } else {
                                             console.log('[Alpine DevTools] Stopping tracking for:', name);
                                             unwrapMethods(data);
                                             stopPolling(name);
                                         }
                                     } else {
                                         console.warn('[Alpine DevTools] Component not found for tracking:', componentId);
                                     }
                                 } catch(e) {
                                     console.error('[Alpine DevTools] Toggle tracking error:', e);
                                 }
                            };
                        }

                        wrapMethods(store, storeName, true);
                        startPolling(store, storeName, true);
                        
                        return 'watching';
                    } catch(e) {
                        console.error('[Alpine DevTools] Error:', e);
                        return 'error';
                    }
                };
                
                return 'ready';
            })()
        `);

        // Periodically try to watch stores from the DevTools internal state
        if (storeWatchInterval) clearInterval(storeWatchInterval);
        storeWatchInterval = setInterval(() => {
            try {
                const storesStore = useStoresStore();
                const storesList = storesStore?.filteredStores || [];

                // if (storesList.length > 0) {
                //     console.log('[DevTools Panel] Found stores:', storesList.map(s => s.name));
                // }

                storesList.forEach(store => {
                    const name = store?.name;
                    if (name) {
                        he.devtools.inspectedWindow.eval(
                            `window.__watchAlpineStore__ && window.__watchAlpineStore__("${name}")`
                        );
                    }
                });
            } catch (e) {
                console.log('[DevTools Panel] Error in storeWatchInterval:', e);
            }
        }, 2000);

        // Poll for mutations
        if (pollingInterval) clearInterval(pollingInterval);
        pollingInterval = setInterval(() => {


            he.devtools.inspectedWindow.eval(`
                (function() {
                    if (!window.__ALPINE_MUTATIONS_QUEUE__ || window.__ALPINE_MUTATIONS_QUEUE__.length === 0) {
                        return '[]';
                    }
                    const mutations = window.__ALPINE_MUTATIONS_QUEUE__.splice(0);
                    return JSON.stringify(mutations);
                })()
            `, (result, isException) => {
                if (isException || !result) return;
                try {
                    const mutations = JSON.parse(result);
                    mutations.forEach(m => {
                        addMutation({
                            storeName: m.storeName,
                            sourceType: m.sourceType,
                            property: m.property,
                            oldValue: m.oldValue,
                            newValue: m.newValue,
                            mutationType: m.mutationType,
                            pageTimestamp: m.timestamp,
                            fnId: m.fnId
                        });
                    });
                } catch (e) { }
            });
        }, 500);

    } catch (e) {
        console.error('[DevTools Panel] Error in initMutationTracking:', e);
    }
}

const MutationsTimeline = Re({
    __name: "MutationsTimeline",
    setup(e) {
        // Use local state for components instead of global store
        const availableComponents = X([]);
        const isRefreshingComponents = X(false);
        const trackedIds = X(new Set());
        const renderKey = X(0); // Force re-render trigger
        const isDropdownOpen = X(false); // Custom dropdown state

        const refreshComponents = () => {
            isRefreshingComponents.value = true;
            he.devtools.inspectedWindow.eval('window.__getAlpineComponents__ && JSON.stringify(window.__getAlpineComponents__())', (result, isException) => {
                isRefreshingComponents.value = false;
                if (!isException && result) {
                    try {
                        const parsed = JSON.parse(result);
                        // Force reactivity by creating new array reference
                        availableComponents.value = [...parsed];
                        renderKey.value++; // Force re-render
                    } catch (e) {
                        console.error('[DevTools] Failed to parse components:', e, 'Raw result:', result);
                        availableComponents.value = [];
                    }
                } else {
                    console.warn('[DevTools] No result or exception occurred');
                    availableComponents.value = [];
                }
            });
        };

        // Refresh on mount
        ut(() => {
            refreshComponents();
        });

        const toggleComponent = (event) => {
            const id = String(event.target.value);
            if (!id) return;

            const shouldTrack = !trackedIds.value.has(id);

            he.devtools.inspectedWindow.eval(`
                window.__devtools_toggle_component_tracking__ && 
                window.__devtools_toggle_component_tracking__("${id}", ${shouldTrack})
            `, (res, err) => {
                if (!err) {
                    // Create new Set to trigger reactivity
                    const newSet = new Set(trackedIds.value);
                    if (shouldTrack) newSet.add(id);
                    else newSet.delete(id);
                    trackedIds.value = newSet;
                    renderKey.value++; // Force re-render to update checkmarks
                }
            });
        };

        // Computed property to ensure reactivity
        // Computed to track Set changes (Sets aren't reactive by default)
        const trackedIdsArray = te(() => {
            renderKey.value; // Force dependency on renderKey
            return Array.from(trackedIds.value).map(String);
        });

        const filteredMutations = te(() => {
            if (!storeFilter.value) return mutationsData.value;
            const filterText = storeFilter.value.toLowerCase();
            return mutationsData.value.filter(m =>
                m.storeName.toLowerCase().includes(filterText) ||
                (m.property && m.property.toLowerCase().includes(filterText))
            );
        });

        const formatTime = (date) => {
            return date.toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                fractionalSecondDigits: 3
            });
        };

        const isDeepEqual = (a, b) => {
            try { return JSON.stringify(a) === JSON.stringify(b); } catch (e) { return false; }
        };

        const handleJsonClick = (event) => {
            const target = event.target;
            if (target.classList.contains('json-toggler')) {
                const collapsible = target.closest('.json-collapsible');
                if (collapsible) {
                    const content = collapsible.querySelector('.json-content');
                    const placeholder = collapsible.querySelector('.json-placeholder');

                    if (content.style.display === 'none') {
                        content.style.display = 'inline';
                        placeholder.style.display = 'none';
                        target.textContent = '▼';
                    } else {
                        content.style.display = 'none';
                        placeholder.style.display = 'inline';
                        target.textContent = '▶';
                    }
                }
                event.stopPropagation();
            } else if (target.classList.contains('json-placeholder')) {
                const collapsible = target.closest('.json-collapsible');
                if (collapsible) {
                    const toggler = collapsible.querySelector('.json-toggler');
                    if (toggler) toggler.click();
                }
                event.stopPropagation();
            }
        };

        const renderDiffJSON = (val, other, indent = 0) => {
            const sp = '  '.repeat(indent);

            // Inline styles for reliability
            const styleNull = 'color: #718096; font-style: italic;';
            const styleUndefined = 'color: #a0aec0; font-style: italic;';
            const styleString = 'color: #38a169;'; // green-600
            const styleNumber = 'color: #3182ce;'; // blue-600
            const styleBool = 'color: #e53e3e;';   // red-600
            const styleKey = 'color: #805ad5; font-weight: 500;'; // purple-600

            const bgDiff = 'background-color: rgba(250, 204, 21, 0.2);'; // yellow-400 at 0.2 opacity
            const styleDiffBlock = `display: inline-block; width: 100%; border-radius: 2px; ${bgDiff}`;

            // Primitive Render
            if (val === null) return `<span style="${styleNull}">null</span>`;
            if (val === undefined) return `<span style="${styleUndefined}">undefined</span>`;
            if (typeof val !== 'object') {
                let str = String(val);
                let style = styleNumber;

                if (typeof val === 'string') {
                    style = styleString;
                    str = JSON.stringify(val).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                } else if (typeof val === 'boolean') {
                    style = styleBool;
                }
                return `<span style="${style}">${str}</span>`;
            }

            // Complex Render
            const isArr = Array.isArray(val);
            const keys = Object.keys(val);
            if (keys.length === 0) return isArr ? '[]' : '{}';

            const open = isArr ? '[' : '{';
            const close = isArr ? ']' : '}';

            let html = '<span class="json-collapsible">';

            // Toggler
            html += `<span class="json-toggler" style="cursor: pointer; display: inline-block; width: 14px; text-align: center; color: #718096; user-select: none; margin-right: 2px;">▼</span>`;

            html += open;

            // Content
            html += '<span class="json-content">';
            html += '\n';

            keys.forEach((k, i) => {
                const v = val[k];
                const ov = (other && typeof other === 'object') ? other[k] : undefined;

                const isDiff = ov !== undefined && !isDeepEqual(v, ov);
                const shouldHighlightLine = isDiff && (v === null || typeof v !== 'object');

                let line = sp + '  ';
                if (!isArr) {
                    line += `<span style="${styleKey}">${JSON.stringify(k)}</span>: `;
                }

                line += renderDiffJSON(v, ov, indent + 1);

                if (i < keys.length - 1) line += ',';

                if (shouldHighlightLine) {
                    html += `<span style="${styleDiffBlock}">${line}</span>\n`;
                } else {
                    html += line + '\n';
                }
            });

            html += sp; // Indent for closing brace
            html += '</span>'; // End content

            // Placeholder
            html += `<span class="json-placeholder" style="display: none; color: #a0aec0; cursor: pointer; user-select: none;"> ... </span>`;

            html += close;
            html += '</span>'; // End collapsible
            return html;
        };

        const selectMutation = (m) => {
            selectedMutation.value = m;
        };

        ut(() => {
            initMutationTracking();
        });

        return (t, n) => (
            C(),
            ke(
                Vi,
                { class: "font-mono text-[11px] leading-5" },
                {
                    left: Mt(() => [
                        b("div", Mb_container, [
                            b("div", Mb_header, [
                                b("div", { class: "flex w-full items-center gap-1" }, [
                                    // Custom Dropdown
                                    b("div", { class: "relative flex-1" }, [
                                        // Dropdown Button
                                        b("button", {
                                            class: "flex w-full items-center justify-between rounded border border-devtools-divider bg-devtools-surface px-2 py-1 text-[11px] text-green-600 dark:border-devtools-divider-dark dark:bg-devtools-surface-dark h-6",
                                            onClick: () => { isDropdownOpen.value = !isDropdownOpen.value; }
                                        }, [
                                            b("span", { class: "truncate" }, re(G(trackedIdsArray).length > 0 ? G(trackedIdsArray).length + " component(s) tracked" : "Select Component"), 1),
                                            b("span", { class: "ml-1 opacity-50" }, "▼")
                                        ]),
                                        // Dropdown Menu
                                        G(isDropdownOpen) ? (C(), N("div", {
                                            key: 0,
                                            class: "absolute left-0 top-full z-50 mt-1 max-h-60 w-full overflow-y-auto rounded border border-devtools-divider bg-devtools-surface shadow-lg dark:border-devtools-divider-dark dark:bg-devtools-surface-dark"
                                        }, [
                                            (C(!0), N(ce, null, Oe(G(availableComponents), (comp) => (
                                                C(), N("div", {
                                                    key: comp.id,
                                                    class: de([
                                                        "cursor-pointer truncate px-2 py-1 text-[11px] hover:bg-devtools-state-hover dark:hover:bg-devtools-state-hover-dark",
                                                        { "bg-devtools-state-selected dark:bg-devtools-state-selected-dark": G(trackedIdsArray).includes(String(comp.id)) }
                                                    ]),
                                                    onClick: () => {
                                                        toggleComponent({ target: { value: comp.id } });
                                                        isDropdownOpen.value = false;
                                                    },
                                                    onMouseenter: () => {
                                                        he.devtools.inspectedWindow.eval(`
                                                            (function() {
                                                                var existing = document.getElementById('__alpine_devtools_highlight__');
                                                                if (existing) existing.remove();
                                                                var els = document.querySelectorAll('[x-data]');
                                                                for (var i = 0; i < els.length; i++) {
                                                                    var el = els[i];
                                                                    if ((el.__ALPINEJS_PRO_DEVTOOLS_COMPONENT_INTERNALS__ && el.__ALPINEJS_PRO_DEVTOOLS_COMPONENT_INTERNALS__.id == "${comp.id}") || el.getAttribute('data-alpine-devtool-id') == "${comp.id}") {
                                                                        var rect = el.getBoundingClientRect();
                                                                        var overlay = document.createElement('div');
                                                                        overlay.id = '__alpine_devtools_highlight__';
                                                                        overlay.style.cssText = 'position:fixed;left:'+rect.left+'px;top:'+rect.top+'px;width:'+rect.width+'px;height:'+rect.height+'px;background:rgba(100,149,237,0.3);border:2px solid cornflowerblue;z-index:999999;pointer-events:none;';
                                                                        document.body.appendChild(overlay);
                                                                        break;
                                                                    }
                                                                }
                                                            })()
                                                        `);
                                                    },
                                                    onMouseleave: () => {
                                                        he.devtools.inspectedWindow.eval(`
                                                            var o = document.getElementById('__alpine_devtools_highlight__');
                                                            if (o) o.remove();
                                                        `);
                                                    }
                                                }, [
                                                    b("span", null, re((G(trackedIdsArray).includes(String(comp.id)) ? "✓ " : "") + comp.name), 1)
                                                ], 42, ["onClick", "onMouseenter", "onMouseleave"])
                                            )), 128))
                                        ])) : ae("", true)
                                    ]),
                                    // Refresh Button
                                    b("button", {
                                        class: "flex items-center justify-center p-1 rounded hover:bg-devtools-state-hover dark:hover:bg-devtools-state-hover-dark text-devtools-text-secondary dark:text-devtools-text-secondary-dark",
                                        title: "Refresh Component List",
                                        onClick: refreshComponents
                                    }, [
                                        b("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            class: de(["h-4 w-4", { "animate-spin": G(isRefreshingComponents) }]),
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor"
                                        }, [
                                            b("path", {
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                "stroke-width": "2",
                                                d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                            })
                                        ])
                                    ], 8, ["onClick"]),
                                ]),
                                b("div", { class: "flex w-full items-center gap-1" }, [
                                    b("input", {
                                        type: "text",
                                        placeholder: "Filter...",
                                        class: "h-6 flex-1 rounded border border-devtools-divider bg-devtools-surface px-2 text-[11px] text-green-600 dark:border-devtools-divider-dark dark:bg-devtools-surface-dark",
                                        value: G(storeFilter),
                                        onInput: (e) => { storeFilter.value = e.target.value; }
                                    }, null, 40, ["value", "onInput"]),
                                    b("span", Mb_badge, re(G(mutationsData).length), 1),
                                    b("button", {
                                        class: "rounded px-2 py-0.5 text-[10px] text-red-500 hover:bg-devtools-state-hover dark:hover:bg-devtools-state-hover-dark",
                                        onClick: clearMutations
                                    }, "🗑 Clear"),
                                ]),
                            ]),
                            G(filteredMutations).length > 0
                                ? (C(!0), N(ce, { key: 0 }, Oe(G(filteredMutations), (m) => (
                                    C(),
                                    N("div", {
                                        key: m.id,
                                        class: de([
                                            Mb_item.class,
                                            {
                                                "bg-devtools-state-selected dark:bg-devtools-state-selected-dark": G(selectedMutation)?.id === m.id,
                                                "text-green-400 dark:text-green-400": m.mutationType === 'function-call' && G(selectedMutation)?.id !== m.id
                                            }
                                        ]),
                                        onClick: () => selectMutation(m)
                                    }, [
                                        b("div", { class: "flex items-center gap-2" }, [
                                            // Source type badge
                                            b("span", {
                                                class: m.sourceType === 'store'
                                                    ? "px-1 py-0.5 rounded text-[9px] text-green-600 font-medium bg-green-500/20 text-green-400"
                                                    : "px-1 py-0.5 rounded text-[9px] text-white"
                                            }, re(m.sourceType === 'store' ? 'S' : 'C'), 1),
                                            b("span", { class: m.sourceType === 'store' ? "text-red-500 dark:text-red-400" : "text-white" }, re(m.storeName), 1),
                                            b("span", { class: m.mutationType === 'function-call' ? "text-green-400 dark:text-green-400" : "text-devtools-text-secondary dark:text-devtools-text-secondary-dark" }, "." + re(m.property), 1),
                                        ]),
                                        b("span", { class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark text-[10px]" }, re(formatTime(m.timestamp)), 1),
                                    ], 10, ["onClick"])
                                )), 128))
                                : (C(), N("div", { key: 1, ...Mb_empty }, " No mutations recorded. Make changes to Alpine stores to see them here. ")),
                        ]),
                    ]),
                    right: Mt(() => [
                        b("div", Mb_detail, [
                            G(selectedMutation)
                                ? (C(), N("div", { key: 0, class: "p-3" }, [
                                    b("div", { class: "mb-3 font-semibold text-devtools-text-primary dark:text-devtools-text-primary-dark flex items-center gap-2" }, [
                                        re("Source: "),
                                        b("span", {
                                            class: G(selectedMutation).sourceType === 'store'
                                                ? "px-1.5 py-0.5 rounded text-[10px] font-medium bg-green-500/20 text-green-400"
                                                : "px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-500/20 text-blue-400"
                                        }, re(G(selectedMutation).sourceType === 'store' ? 'Store' : 'Component'), 1),
                                        b("span", { class: "text-devtools-primary dark:text-devtools-primary-dark" }, re(G(selectedMutation).storeName), 1),
                                    ]),
                                    b("div", { class: "mb-3" }, [
                                        b("div", { class: "text-devtools-text-secondary dark:text-devtools-text-secondary-dark mb-1" }, "Property:"),
                                        b("div", { class: "text-devtools-text-primary dark:text-devtools-text-primary-dark" }, re(G(selectedMutation).property), 1),
                                    ]),
                                    b("div", { class: "mb-3" }, [
                                        b("div", { class: "text-red-500 dark:text-red-400 font-semibold mb-1" },
                                            re(G(selectedMutation).mutationType === 'function-call' ? "Arguments:" : "Old Value:"),
                                            1
                                        ),
                                        b("pre", {
                                            class: "bg-devtools-element-header dark:bg-devtools-element-header-dark rounded p-2 text-[10px] overflow-x-auto text-devtools-text-primary dark:text-devtools-text-primary-dark font-mono whitespace-pre",
                                            innerHTML: renderDiffJSON(G(selectedMutation).oldValue,
                                                G(selectedMutation).mutationType === 'function-call' ? undefined : G(selectedMutation).newValue
                                            ),
                                            onClick: handleJsonClick
                                        }, null, 8, ["innerHTML"]),
                                    ]),
                                    b("div", { class: "mb-3" }, [
                                        b("div", { class: "text-green-600 dark:text-green-400 font-semibold mb-1" },
                                            re(G(selectedMutation).mutationType === 'function-call' ? "Return Value:" : "New Value:"),
                                            1
                                        ),
                                        b("pre", {
                                            class: "bg-devtools-element-header dark:bg-devtools-element-header-dark rounded p-2 text-[10px] overflow-x-auto text-devtools-text-primary dark:text-devtools-text-primary-dark font-mono whitespace-pre",
                                            innerHTML: renderDiffJSON(G(selectedMutation).newValue,
                                                G(selectedMutation).mutationType === 'function-call' ? undefined : G(selectedMutation).oldValue
                                            ),
                                            onClick: handleJsonClick
                                        }, null, 8, ["innerHTML"]),
                                    ]),
                                    b("div", { class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark text-[10px]" }, [
                                        re("Type: " + G(selectedMutation).mutationType + " | Time: " + formatTime(G(selectedMutation).timestamp)),
                                    ]),
                                    // Simple View Source button
                                    b("button", {
                                        class: "mt-3 flex items-center gap-1 px-3 py-1.5 text-[11px] bg-blue-500 text-white rounded font-medium hover:bg-devtools-primary-hover cursor-pointer",
                                        onClick: () => {
                                            const m = G(selectedMutation);

                                            if (m.fnId) {
                                                he.devtools.inspectedWindow.eval(`
                                                    window.__ALPINE_FN_CACHE__ && 
                                                    window.__ALPINE_FN_CACHE__["${m.fnId}"] && 
                                                    inspect(window.__ALPINE_FN_CACHE__["${m.fnId}"])
                                                `);
                                            } else {
                                                console.warn('[DevTools] No fnId available for inspection');
                                            }
                                        }
                                    }, "📄 View Source", 8, ["onClick"]),
                                ]))
                                : (C(), N("div", { key: 1, ...Mb_empty }, " Select a mutation to see its details. ")),
                        ]),
                    ]),
                    _: 1,
                }
            )
        );
    },
});

const wy = {
    class: "relative flex h-screen w-screen flex-row bg-devtools-surface dark:bg-devtools-surface-dark",
};
const ky = {
    class: "relative flex min-w-0 flex-1 flex-col",
};
const _y = Re({
    __name: "Panel",
    setup(e) {
        const t = te(() => {
            switch (n.activeTab) {
                case "components":
                    return Gg;
                case "stores":
                    return xy;
                case "events":
                    return kb;
                case "mutations":
                    return MutationsTimeline;
                case "settings":
                    return ey;
                case "debug":
                    return Qg;
                default:
                    return null;
            }
        }),
            n = Bt(),
            r = { isActivated: true },
            s = te(() => n.shouldShowNagScreen);
        function o() {
            const i = n.effectiveTheme;
            i === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"),
                document.documentElement.classList.remove("light-theme", "dark-theme"),
                document.documentElement.classList.add(`${i}-theme`);
        }
        return (
            ut(() => {
                o(),
                    n.loadNagScreenFromStorage(),
                    je(
                        () => n.effectiveTheme,
                        () => {
                            o();
                        }
                    );
            }),
            (i, l) => (C(), N("div", wy, [ge(Rm), b("main", ky, [(C(), ke(Hd(t.value)))])]))
        );
    },
});
const Sy = up();
let Yr = null;
async function Ey() {
    Yr ||
        ((Yr = lp(_y)),
            Yr.use(Sy),
            jn(),
            Bt(),
            Vn(),
            useStoresStore(),
            await wp(),
            oi(),
            Yr.mount("#app"),
            Y.log("Devtools panel app mounted and services initialized."),
            // Initialize mutation tracking when panel loads
            setTimeout(() => {
                initMutationTracking();
                Y.log("Mutation tracking initialized on panel load.");
            }, 1000),
            he.devtools.network.onNavigated.addListener(() => {
                Y.log("Page navigation detected, reinitializing connection service..."), oi();
                // Re-initialize mutation tracking on page navigation
                setTimeout(() => {
                    window.__ALPINE_MUTATIONS_TRACKING__ = false; // Reset flag so it re-inits
                    initMutationTracking();
                    Y.log("Mutation tracking re-initialized after navigation.");
                }, 1000);
            }));
}
Ey();
he.runtime.onMessage.addListener((e) => {
    e.type === Ie.ALPINE_DETECTED &&
        (Y.log("Alpine detected message received, re-initializing connection service..."), oi());
});
