import {D as kn, b as he, S as ka, L as Ur, N as Ji, I as Lu, M as Ie, a as _a, c as as, d as cs, e as Yi} from "./constants-Danu3nx7.js";

import {
    Rr,
    de,
    re
} from './dist/base-0.js'

import {
    Ia,
    gi,
    Da,
    Ps,
    ki,
    hd,
    Xt,
    _i,
    ue,
    Si,
    _e,
    X,
    Ei,
    G,
    ps,
    gd,
    _d} from './dist/base-1.js'

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
    mr,
    Xd,
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
    hl} from './dist/base-2.js'

import {
    co,
    _l,
    Qt,
    Pc,
    ep,
    tt,
    Vo,
    lp} from './dist/base-3.js'
/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Lc;
const Us = e => Lc = e
  , Nc = Symbol();
function zo(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var br;
(function(e) {
    e.direct = "direct",
    e.patchObject = "patch object",
    e.patchFunction = "patch function"
}
)(br || (br = {}));
function up() {
    const e = Ia(!0)
      , t = e.run( () => X({}));
    let n = []
      , r = [];
    const s = Si({
        install(o) {
            Us(s),
            s._a = o,
            o.provide(Nc, s),
            o.config.globalProperties.$pinia = s,
            r.forEach(i => n.push(i)),
            r = []
        },
        use(o) {
            return this._a ? n.push(o) : r.push(o),
            this
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map,
        state: t
    });
    return s
}
const Fc = () => {}
;
function Ol(e, t, n, r=Fc) {
    e.push(t);
    const s = () => {
        const o = e.indexOf(t);
        o > -1 && (e.splice(o, 1),
        r())
    }
    ;
    return !n && gi() && Da(s),
    s
}
function yn(e, ...t) {
    e.slice().forEach(n => {
        n(...t)
    }
    )
}
const dp = e => e()
  , Rl = Symbol()
  , po = Symbol();
function qo(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach( (n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n))
            continue;
        const r = t[n]
          , s = e[n];
        zo(s) && zo(r) && e.hasOwnProperty(n) && !_e(r) && !Xt(r) ? e[n] = qo(s, r) : e[n] = r
    }
    return e
}
const fp = Symbol();
function pp(e) {
    return !zo(e) || !Object.prototype.hasOwnProperty.call(e, fp)
}
const {assign: qt} = Object;
function hp(e) {
    return !!(_e(e) && e.effect)
}
function vp(e, t, n, r) {
    const {state: s, actions: o, getters: i} = t
      , l = n.state.value[e];
    let a;
    function u() {
        l || (n.state.value[e] = s ? s() : {});
        const c = gd(n.state.value[e]);
        return qt(c, o, Object.keys(i || {}).reduce( (d, p) => (d[p] = Si(te( () => {
            Us(n);
            const m = n._s.get(e);
            return i[p].call(m, m)
        }
        )),
        d), {}))
    }
    return a = Mc(e, u, t, n, r, !0),
    a
}
function Mc(e, t, n={}, r, s, o) {
    let i;
    const l = qt({
        actions: {}
    }, n)
      , a = {
        deep: !0
    };
    let u, c, d = [], p = [], m;
    const y = r.state.value[e];
    !o && !y && (r.state.value[e] = {}),
    X({});
    let v;
    function f(V) {
        let D;
        u = c = !1,
        typeof V == "function" ? (V(r.state.value[e]),
        D = {
            type: br.patchFunction,
            storeId: e,
            events: m
        }) : (qo(r.state.value[e], V),
        D = {
            type: br.patchObject,
            payload: V,
            storeId: e,
            events: m
        });
        const se = v = Symbol();
        Rn().then( () => {
            v === se && (u = !0)
        }
        ),
        c = !0,
        yn(d, D, r.state.value[e])
    }
    const x = o ? function() {
        const {state: D} = n
          , se = D ? D() : {};
        this.$patch(ie => {
            qt(ie, se)
        }
        )
    }
    : Fc;
    function S() {
        i.stop(),
        d = [],
        p = [],
        r._s.delete(e)
    }
    const A = (V, D="") => {
        if (Rl in V)
            return V[po] = D,
            V;
        const se = function() {
            Us(r);
            const ie = Array.from(arguments)
              , Ze = []
              , Vt = [];
            function zn(oe) {
                Ze.push(oe)
            }
            function Fr(oe) {
                Vt.push(oe)
            }
            yn(p, {
                args: ie,
                name: se[po],
                store: $,
                after: zn,
                onError: Fr
            });
            let Ee;
            try {
                Ee = V.apply(this && this.$id === e ? this : $, ie)
            } catch (oe) {
                throw yn(Vt, oe),
                oe
            }
            return Ee instanceof Promise ? Ee.then(oe => (yn(Ze, oe),
            oe)).catch(oe => (yn(Vt, oe),
            Promise.reject(oe))) : (yn(Ze, Ee),
            Ee)
        };
        return se[Rl] = !0,
        se[po] = D,
        se
    }
      , k = {
        _p: r,
        $id: e,
        $onAction: Ol.bind(null, p),
        $patch: f,
        $reset: x,
        $subscribe(V, D={}) {
            const se = Ol(d, V, D.detached, () => ie())
              , ie = i.run( () => je( () => r.state.value[e], Ze => {
                (D.flush === "sync" ? c : u) && V({
                    storeId: e,
                    type: br.direct,
                    events: m
                }, Ze)
            }
            , qt({}, a, D)));
            return se
        },
        $dispose: S
    }
      , $ = Ps(k);
    r._s.set(e, $);
    const U = (r._a && r._a.runWithContext || dp)( () => r._e.run( () => (i = Ia()).run( () => t({
        action: A
    }))));
    for (const V in U) {
        const D = U[V];
        if (_e(D) && !hp(D) || Xt(D))
            o || (y && pp(D) && (_e(D) ? D.value = y[V] : qo(D, y[V])),
            r.state.value[e][V] = D);
        else if (typeof D == "function") {
            const se = A(D, V);
            U[V] = se,
            l.actions[V] = D
        }
    }
    return qt($, U),
    qt(ue($), U),
    Object.defineProperty($, "$state", {
        get: () => r.state.value[e],
        set: V => {
            f(D => {
                qt(D, V)
            }
            )
        }
    }),
    r._p.forEach(V => {
        qt($, i.run( () => V({
            store: $,
            app: r._a,
            pinia: r,
            options: l
        })))
    }
    ),
    y && o && n.hydrate && n.hydrate($.$state, y),
    u = !0,
    c = !0,
    $
}
/*! #__NO_SIDE_EFFECTS__ */
function Mn(e, t, n) {
    let r;
    const s = typeof t == "function";
    r = s ? n : t;
    function o(i, l) {
        const a = Xd();
        return i = i || (a ? mr(Nc, null) : null),
        i && Us(i),
        i = Lc,
        i._s.has(e) || (s ? Mc(e, t, r, i) : vp(e, r, i)),
        i._s.get(e)
    }
    return o.$id = e,
    o
}
const Xn = () => {}
  , mp = () => ({
    log: Xn,
    warn: Xn,
    error: Xn,
    info: Xn,
    debug: Xn
})
  , Y = mp();
function gp(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var ho, Il;
function bp() {
    if (Il)
        return ho;
    Il = 1,
    ho = o,
    o.default = o,
    o.stable = u,
    o.stableStringify = u;
    var e = "[...]"
      , t = "[Circular]"
      , n = []
      , r = [];
    function s() {
        return {
            depthLimit: Number.MAX_SAFE_INTEGER,
            edgesLimit: Number.MAX_SAFE_INTEGER
        }
    }
    function o(p, m, y, v) {
        typeof v > "u" && (v = s()),
        l(p, "", 0, [], void 0, 0, v);
        var f;
        try {
            r.length === 0 ? f = JSON.stringify(p, m, y) : f = JSON.stringify(p, d(m), y)
        } catch {
            return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
        } finally {
            for (; n.length !== 0; ) {
                var x = n.pop();
                x.length === 4 ? Object.defineProperty(x[0], x[1], x[3]) : x[0][x[1]] = x[2]
            }
        }
        return f
    }
    function i(p, m, y, v) {
        var f = Object.getOwnPropertyDescriptor(v, y);
        f.get !== void 0 ? f.configurable ? (Object.defineProperty(v, y, {
            value: p
        }),
        n.push([v, y, m, f])) : r.push([m, y, p]) : (v[y] = p,
        n.push([v, y, m]))
    }
    function l(p, m, y, v, f, x, S) {
        x += 1;
        var A;
        if (typeof p == "object" && p !== null) {
            for (A = 0; A < v.length; A++)
                if (v[A] === p) {
                    i(t, p, m, f);
                    return
                }
            if (typeof S.depthLimit < "u" && x > S.depthLimit) {
                i(e, p, m, f);
                return
            }
            if (typeof S.edgesLimit < "u" && y + 1 > S.edgesLimit) {
                i(e, p, m, f);
                return
            }
            if (v.push(p),
            Array.isArray(p))
                for (A = 0; A < p.length; A++)
                    l(p[A], A, A, v, p, x, S);
            else {
                var k = Object.keys(p);
                for (A = 0; A < k.length; A++) {
                    var $ = k[A];
                    l(p[$], $, A, v, p, x, S)
                }
            }
            v.pop()
        }
    }
    function a(p, m) {
        return p < m ? -1 : p > m ? 1 : 0
    }
    function u(p, m, y, v) {
        typeof v > "u" && (v = s());
        var f = c(p, "", 0, [], void 0, 0, v) || p, x;
        try {
            r.length === 0 ? x = JSON.stringify(f, m, y) : x = JSON.stringify(f, d(m), y)
        } catch {
            return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
        } finally {
            for (; n.length !== 0; ) {
                var S = n.pop();
                S.length === 4 ? Object.defineProperty(S[0], S[1], S[3]) : S[0][S[1]] = S[2]
            }
        }
        return x
    }
    function c(p, m, y, v, f, x, S) {
        x += 1;
        var A;
        if (typeof p == "object" && p !== null) {
            for (A = 0; A < v.length; A++)
                if (v[A] === p) {
                    i(t, p, m, f);
                    return
                }
            try {
                if (typeof p.toJSON == "function")
                    return
            } catch {
                return
            }
            if (typeof S.depthLimit < "u" && x > S.depthLimit) {
                i(e, p, m, f);
                return
            }
            if (typeof S.edgesLimit < "u" && y + 1 > S.edgesLimit) {
                i(e, p, m, f);
                return
            }
            if (v.push(p),
            Array.isArray(p))
                for (A = 0; A < p.length; A++)
                    c(p[A], A, A, v, p, x, S);
            else {
                var k = {}
                  , $ = Object.keys(p).sort(a);
                for (A = 0; A < $.length; A++) {
                    var O = $[A];
                    c(p[O], O, A, v, p, x, S),
                    k[O] = p[O]
                }
                if (typeof f < "u")
                    n.push([f, m, p]),
                    f[m] = k;
                else
                    return k
            }
            v.pop()
        }
    }
    function d(p) {
        return p = typeof p < "u" ? p : function(m, y) {
            return y
        }
        ,
        function(m, y) {
            if (r.length > 0)
                for (var v = 0; v < r.length; v++) {
                    var f = r[v];
                    if (f[1] === m && f[0] === y) {
                        y = f[2],
                        r.splice(v, 1);
                        break
                    }
                }
            return p.call(this, m, y)
        }
    }
    return ho
}
var yp = bp();
const Ii = gp(yp);
function jc(e, {include: t=[]}={}) {
    const n = {
        name: e.localName
    };
    return t.includes("attributes") && (n.attributes = Array.from(e.attributes).reduce( (r, s) => (r[s.name] = s.value,
    r), {})),
    t.includes("children") && (n.children = Array.from(e.children).map(r => jc(r).name)),
    n
}
function Ko(e, t, n, r, s, o) {
    const i = []
      , l = n ? `${n}.${e}` : e
      , a = r ? `${r}.${e}` : e
      , u = t === null || typeof t != "object" || !("type"in t) ? !1 : !!("value"in t || ["window", "document"].includes(t.type));
    if (t && typeof t == "object" && "__type"in t)
        switch (t.__type) {
        case "circular":
            return i.push({
                id: l,
                name: e,
                value: t.path,
                type: "circular",
                readOnly: !0,
                parentId: n,
                path: a
            }),
            i;
        case "max_depth":
            return i.push({
                id: l,
                name: e,
                value: `[Max Depth at ${t.path}]`,
                type: "error",
                readOnly: !0,
                parentId: n,
                path: a
            }),
            i;
        case "error":
            return i.push({
                id: l,
                name: e,
                value: t.value,
                type: "error",
                readOnly: !0,
                parentId: n,
                path: a
            }),
            i;
        case "function":
            return i.push({
                id: l,
                name: e,
                value: "function",
                type: "function",
                readOnly: !0,
                parentId: n,
                path: a
            }),
            i;
        case "getter":
            return i.push({
                id: l,
                name: e,
                value: "[Getter]",
                type: "getter",
                readOnly: !0,
                parentId: n,
                path: a
            }),
            i;
        case "proxy_details":
            i.push({
                id: l,
                name: e,
                value: null,
                type: "object",
                readOnly: !0,
                parentId: n,
                path: a
            });
            for (const [f,x] of Object.entries(t))
                f !== "__type" && i.push(...Ko(f, x, l, a, !0, o));
            return i
        }
    let c = u ? t.value : t
      , d = u ? t.type : typeof c
      , p = s || u && t.readOnly;
    if (c !== null && typeof c == "object") {
        if (o.has(c))
            return i.push({
                id: l,
                name: e,
                value: "[Circular]",
                type: "circular",
                readOnly: !0,
                parentId: n,
                path: a
            }),
            i;
        o.add(c)
    }
    let m = c
      , y = null;
    if (c === null)
        d = "null";
    else if (d === "function")
        p = !0;
    else if (d === "HTMLElement" || c instanceof HTMLElement) {
        d = "HTMLElement",
        p = !0;
        const v = c instanceof HTMLElement ? c : t.value.element
          , f = t?.value?.devtoolsId || crypto.randomUUID();
        v && (!window[kn] || !window[kn][f]) && (window[kn] = window[kn] || {},
        window[kn][f] = v),
        m = {
            ...u ? t.value : jc(v, {
                include: ["attributes"]
            }),
            devtoolsId: f
        }
    } else if (Array.isArray(c))
        d = "array",
        c.length === 0 ? m = "[]" : (m = null,
        y = c.map( (v, f) => [String(f), v]));
    else if (typeof c == "object") {
        d = "object";
        const v = Object.keys(c);
        v.length === 0 ? m = "{}" : (m = null,
        y = v.map(f => [f, c[f]]))
    }
    if (i.push({
        id: l,
        name: e,
        value: m,
        type: d,
        readOnly: !!p,
        parentId: n,
        path: a
    }),
    y)
        for (const [v,f] of y)
            i.push(...Ko(v, f, l, a, !!p, o));
    return c !== null && typeof c == "object" && o.delete(c),
    i
}
function Di(e) {
    if (!e)
        return [];
    const t = [];
    for (const n in e)
        t.push(...Ko(n, e[n], "", "", e[n]?.readOnly, new Set));
    return t
}
const kt = {
    async get(e) {
        return new Promise( (t, n) => {
            he.storage.local.get(e, r => {
                if (he.runtime.lastError)
                    return n(he.runtime.lastError);
                t(r[e])
            }
            )
        }
        )
    },
    async set(e, t) {
        return new Promise( (n, r) => {
            he.storage.local.set({
                [e]: t
            }, () => {
                if (he.runtime.lastError)
                    return r(he.runtime.lastError);
                n()
            }
            )
        }
        )
    },
    async remove(e) {
        return new Promise( (t, n) => {
            he.storage.local.remove(e, () => {
                if (he.runtime.lastError)
                    return n(he.runtime.lastError);
                t()
            }
            )
        }
        )
    }
};
let Dl = !1;
async function xp() {
    try {
        const e = await kt.get(ka);
        if (e == null)
            return null;
        const t = JSON.parse(e);
        return typeof t != "object" || t === null ? (Y.warn("Parsed settings data is not a valid object structure:", t),
        null) : t
    } catch (e) {
        return Y.error("Failed to read/parse settings from storage:", e),
        null
    }
}
async function wp() {
    if (Dl) {
        Y.warn("Settings service already initialized.");
        return
    }
    Dl = !0;
    const e = jn();
    try {
        const t = await xp();
        t ? e.setState(t) : (Y.log("No valid settings found in storage, saving defaults."),
        await Uc(e.$state)),
        e.initializeSettingsSaver(),
        he.storage.onChanged.addListener(n => {
            if (n.settings?.newValue === void 0)
                return;
            const r = n.settings.newValue;
            try {
                const s = JSON.parse(r);
                if (typeof s != "object" || s === null) {
                    Y.warn("Incoming settings change: Parsed data is not a valid object structure:", s);
                    return
                }
                Y.log("Settings changed externally, updating store with parsed value..."),
                e.setState(s)
            } catch (s) {
                Y.error("Failed to parse incoming settings JSON from storage change:", s, "Raw value:", r)
            }
        }
        ),
        Y.log("Settings service initialized and listener attached.")
    } catch (t) {
        Y.error("Failed to initialize settings service:", t)
    }
}
async function Uc(e) {
    try {
        const t = Ii(e);
        await kt.set(ka, t),
        Y.log("Settings saved via service (as JSON string):", t)
    } catch (t) {
        Y.error("Failed to save settings via service:", t)
    }
}
const jn = Mn("settings", {
    state: () => ({
        theme: "system",
        customAttributesToDetect: []
    }),
    getters: {},
    actions: {
        setState(e) {
            this.$patch(e)
        },
        updateSetting(e, t) {
            e in this.$state ? this.$patch({
                [e]: t
            }) : Y.warn(`Attempted to update unknown setting: ${e}`)
        },
        initializeSettingsSaver() {
            this.$subscribe(async (e, t) => {
                await Uc(t)
            }
            ),
            Y.log("Settings save subscription initialized.")
        }
    }
});
function Hc(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: kp} = Object.prototype
  , {getPrototypeOf: Pi} = Object
  , {iterator: Hs, toStringTag: Bc} = Symbol
  , Bs = (e => t => {
    const n = kp.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , dt = e => (e = e.toLowerCase(),
t => Bs(t) === e)
  , Vs = e => t => typeof t === e
  , {isArray: Un} = Array
  , Cr = Vs("undefined");
function Pr(e) {
    return e !== null && !Cr(e) && e.constructor !== null && !Cr(e.constructor) && Ge(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const Vc = dt("ArrayBuffer");
function _p(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Vc(e.buffer),
    t
}
const Sp = Vs("string")
  , Ge = Vs("function")
  , zc = Vs("number")
  , $r = e => e !== null && typeof e == "object"
  , Ep = e => e === !0 || e === !1
  , es = e => {
    if (Bs(e) !== "object")
        return !1;
    const t = Pi(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Bc in e) && !(Hs in e)
}
  , Cp = e => {
    if (!$r(e) || Pr(e))
        return !1;
    try {
        return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype
    } catch {
        return !1
    }
}
  , Ap = dt("Date")
  , Tp = dt("File")
  , Op = dt("Blob")
  , Rp = dt("FileList")
  , Ip = e => $r(e) && Ge(e.pipe)
  , Dp = e => {
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || Ge(e.append) && ((t = Bs(e)) === "formdata" || t === "object" && Ge(e.toString) && e.toString() === "[object FormData]"))
}
  , Pp = dt("URLSearchParams")
  , [$p,Lp,Np,Fp] = ["ReadableStream", "Request", "Response", "Headers"].map(dt)
  , Mp = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Lr(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let r, s;
    if (typeof e != "object" && (e = [e]),
    Un(e))
        for (r = 0,
        s = e.length; r < s; r++)
            t.call(null, e[r], r, e);
    else {
        if (Pr(e))
            return;
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , i = o.length;
        let l;
        for (r = 0; r < i; r++)
            l = o[r],
            t.call(null, e[l], l, e)
    }
}
function qc(e, t) {
    if (Pr(e))
        return null;
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length, s;
    for (; r-- > 0; )
        if (s = n[r],
        t === s.toLowerCase())
            return s;
    return null
}
const dn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , Kc = e => !Cr(e) && e !== dn;
function Wo() {
    const {caseless: e} = Kc(this) && this || {}
      , t = {}
      , n = (r, s) => {
        const o = e && qc(t, s) || s;
        es(t[o]) && es(r) ? t[o] = Wo(t[o], r) : es(r) ? t[o] = Wo({}, r) : Un(r) ? t[o] = r.slice() : t[o] = r
    }
    ;
    for (let r = 0, s = arguments.length; r < s; r++)
        arguments[r] && Lr(arguments[r], n);
    return t
}
const jp = (e, t, n, {allOwnKeys: r}={}) => (Lr(t, (s, o) => {
    n && Ge(s) ? e[o] = Hc(s, n) : e[o] = s
}
, {
    allOwnKeys: r
}),
e)
  , Up = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , Hp = (e, t, n, r) => {
    e.prototype = Object.create(t.prototype, r),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    n && Object.assign(e.prototype, n)
}
  , Bp = (e, t, n, r) => {
    let s, o, i;
    const l = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (s = Object.getOwnPropertyNames(e),
        o = s.length; o-- > 0; )
            i = s[o],
            (!r || r(i, e, t)) && !l[i] && (t[i] = e[i],
            l[i] = !0);
        e = n !== !1 && Pi(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}
  , Vp = (e, t, n) => {
    e = String(e),
    (n === void 0 || n > e.length) && (n = e.length),
    n -= t.length;
    const r = e.indexOf(t, n);
    return r !== -1 && r === n
}
  , zp = e => {
    if (!e)
        return null;
    if (Un(e))
        return e;
    let t = e.length;
    if (!zc(t))
        return null;
    const n = new Array(t);
    for (; t-- > 0; )
        n[t] = e[t];
    return n
}
  , qp = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && Pi(Uint8Array))
  , Kp = (e, t) => {
    const r = (e && e[Hs]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
        const o = s.value;
        t.call(e, o[0], o[1])
    }
}
  , Wp = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; )
        r.push(n);
    return r
}
  , Gp = dt("HTMLFormElement")
  , Jp = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, s) {
    return r.toUpperCase() + s
})
  , Pl = ( ({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype)
  , Yp = dt("RegExp")
  , Wc = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e)
      , r = {};
    Lr(n, (s, o) => {
        let i;
        (i = t(s, o, e)) !== !1 && (r[o] = i || s)
    }
    ),
    Object.defineProperties(e, r)
}
  , Xp = e => {
    Wc(e, (t, n) => {
        if (Ge(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const r = e[n];
        if (Ge(r)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
  , Qp = (e, t) => {
    const n = {}
      , r = s => {
        s.forEach(o => {
            n[o] = !0
        }
        )
    }
    ;
    return Un(e) ? r(e) : r(String(e).split(t)),
    n
}
  , Zp = () => {}
  , eh = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function th(e) {
    return !!(e && Ge(e.append) && e[Bc] === "FormData" && e[Hs])
}
const nh = e => {
    const t = new Array(10)
      , n = (r, s) => {
        if ($r(r)) {
            if (t.indexOf(r) >= 0)
                return;
            if (Pr(r))
                return r;
            if (!("toJSON"in r)) {
                t[s] = r;
                const o = Un(r) ? [] : {};
                return Lr(r, (i, l) => {
                    const a = n(i, s + 1);
                    !Cr(a) && (o[l] = a)
                }
                ),
                t[s] = void 0,
                o
            }
        }
        return r
    }
    ;
    return n(e, 0)
}
  , rh = dt("AsyncFunction")
  , sh = e => e && ($r(e) || Ge(e)) && Ge(e.then) && Ge(e.catch)
  , Gc = ( (e, t) => e ? setImmediate : t ? ( (n, r) => (dn.addEventListener("message", ({source: s, data: o}) => {
    s === dn && o === n && r.length && r.shift()()
}
, !1),
s => {
    r.push(s),
    dn.postMessage(n, "*")
}
))(`axios@${Math.random()}`, []) : n => setTimeout(n))(typeof setImmediate == "function", Ge(dn.postMessage))
  , oh = typeof queueMicrotask < "u" ? queueMicrotask.bind(dn) : typeof process < "u" && process.nextTick || Gc
  , ih = e => e != null && Ge(e[Hs])
  , w = {
    isArray: Un,
    isArrayBuffer: Vc,
    isBuffer: Pr,
    isFormData: Dp,
    isArrayBufferView: _p,
    isString: Sp,
    isNumber: zc,
    isBoolean: Ep,
    isObject: $r,
    isPlainObject: es,
    isEmptyObject: Cp,
    isReadableStream: $p,
    isRequest: Lp,
    isResponse: Np,
    isHeaders: Fp,
    isUndefined: Cr,
    isDate: Ap,
    isFile: Tp,
    isBlob: Op,
    isRegExp: Yp,
    isFunction: Ge,
    isStream: Ip,
    isURLSearchParams: Pp,
    isTypedArray: qp,
    isFileList: Rp,
    forEach: Lr,
    merge: Wo,
    extend: jp,
    trim: Mp,
    stripBOM: Up,
    inherits: Hp,
    toFlatObject: Bp,
    kindOf: Bs,
    kindOfTest: dt,
    endsWith: Vp,
    toArray: zp,
    forEachEntry: Kp,
    matchAll: Wp,
    isHTMLForm: Gp,
    hasOwnProperty: Pl,
    hasOwnProp: Pl,
    reduceDescriptors: Wc,
    freezeMethods: Xp,
    toObjectSet: Qp,
    toCamelCase: Jp,
    noop: Zp,
    toFiniteNumber: eh,
    findKey: qc,
    global: dn,
    isContextDefined: Kc,
    isSpecCompliantForm: th,
    toJSONObject: nh,
    isAsyncFn: rh,
    isThenable: sh,
    setImmediate: Gc,
    asap: oh,
    isIterable: ih
};
function ne(e, t, n, r, s) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && (this.response = s,
    this.status = s.status ? s.status : null)
}
w.inherits(ne, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: w.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const Jc = ne.prototype
  , Yc = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    Yc[e] = {
        value: e
    }
}
);
Object.defineProperties(ne, Yc);
Object.defineProperty(Jc, "isAxiosError", {
    value: !0
});
ne.from = (e, t, n, r, s, o) => {
    const i = Object.create(Jc);
    return w.toFlatObject(e, i, function(a) {
        return a !== Error.prototype
    }, l => l !== "isAxiosError"),
    ne.call(i, e.message, t, n, r, s),
    i.cause = e,
    i.name = e.name,
    o && Object.assign(i, o),
    i
}
;
const lh = null;
function Go(e) {
    return w.isPlainObject(e) || w.isArray(e)
}
function Xc(e) {
    return w.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function $l(e, t, n) {
    return e ? e.concat(t).map(function(s, o) {
        return s = Xc(s),
        !n && o ? "[" + s + "]" : s
    }).join(n ? "." : "") : t
}
function ah(e) {
    return w.isArray(e) && !e.some(Go)
}
const ch = w.toFlatObject(w, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});
function zs(e, t, n) {
    if (!w.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData,
    n = w.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(v, f) {
        return !w.isUndefined(f[v])
    });
    const r = n.metaTokens
      , s = n.visitor || c
      , o = n.dots
      , i = n.indexes
      , a = (n.Blob || typeof Blob < "u" && Blob) && w.isSpecCompliantForm(t);
    if (!w.isFunction(s))
        throw new TypeError("visitor must be a function");
    function u(y) {
        if (y === null)
            return "";
        if (w.isDate(y))
            return y.toISOString();
        if (w.isBoolean(y))
            return y.toString();
        if (!a && w.isBlob(y))
            throw new ne("Blob is not supported. Use a Buffer instead.");
        return w.isArrayBuffer(y) || w.isTypedArray(y) ? a && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y
    }
    function c(y, v, f) {
        let x = y;
        if (y && !f && typeof y == "object") {
            if (w.endsWith(v, "{}"))
                v = r ? v : v.slice(0, -2),
                y = JSON.stringify(y);
            else if (w.isArray(y) && ah(y) || (w.isFileList(y) || w.endsWith(v, "[]")) && (x = w.toArray(y)))
                return v = Xc(v),
                x.forEach(function(A, k) {
                    !(w.isUndefined(A) || A === null) && t.append(i === !0 ? $l([v], k, o) : i === null ? v : v + "[]", u(A))
                }),
                !1
        }
        return Go(y) ? !0 : (t.append($l(f, v, o), u(y)),
        !1)
    }
    const d = []
      , p = Object.assign(ch, {
        defaultVisitor: c,
        convertValue: u,
        isVisitable: Go
    });
    function m(y, v) {
        if (!w.isUndefined(y)) {
            if (d.indexOf(y) !== -1)
                throw Error("Circular reference detected in " + v.join("."));
            d.push(y),
            w.forEach(y, function(x, S) {
                (!(w.isUndefined(x) || x === null) && s.call(t, x, w.isString(S) ? S.trim() : S, v, p)) === !0 && m(x, v ? v.concat(S) : [S])
            }),
            d.pop()
        }
    }
    if (!w.isObject(e))
        throw new TypeError("data must be an object");
    return m(e),
    t
}
function Ll(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}
function $i(e, t) {
    this._pairs = [],
    e && zs(e, this, t)
}
const Qc = $i.prototype;
Qc.append = function(t, n) {
    this._pairs.push([t, n])
}
;
Qc.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, Ll)
    }
    : Ll;
    return this._pairs.map(function(s) {
        return n(s[0]) + "=" + n(s[1])
    }, "").join("&")
}
;
function uh(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function Zc(e, t, n) {
    if (!t)
        return e;
    const r = n && n.encode || uh;
    w.isFunction(n) && (n = {
        serialize: n
    });
    const s = n && n.serialize;
    let o;
    if (s ? o = s(t, n) : o = w.isURLSearchParams(t) ? t.toString() : new $i(t,n).toString(r),
    o) {
        const i = e.indexOf("#");
        i !== -1 && (e = e.slice(0, i)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + o
    }
    return e
}
class Nl {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        w.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const eu = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , dh = typeof URLSearchParams < "u" ? URLSearchParams : $i
  , fh = typeof FormData < "u" ? FormData : null
  , ph = typeof Blob < "u" ? Blob : null
  , hh = {
    isBrowser: !0,
    classes: {
        URLSearchParams: dh,
        FormData: fh,
        Blob: ph
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , Li = typeof window < "u" && typeof document < "u"
  , Jo = typeof navigator == "object" && navigator || void 0
  , vh = Li && (!Jo || ["ReactNative", "NativeScript", "NS"].indexOf(Jo.product) < 0)
  , mh = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , gh = Li && window.location.href || "http://localhost"
  , bh = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: Li,
    hasStandardBrowserEnv: vh,
    hasStandardBrowserWebWorkerEnv: mh,
    navigator: Jo,
    origin: gh
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Me = {
    ...bh,
    ...hh
};
function yh(e, t) {
    return zs(e, new Me.classes.URLSearchParams, {
        visitor: function(n, r, s, o) {
            return Me.isNode && w.isBuffer(n) ? (this.append(r, n.toString("base64")),
            !1) : o.defaultVisitor.apply(this, arguments)
        },
        ...t
    })
}
function xh(e) {
    return w.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}
function wh(e) {
    const t = {}
      , n = Object.keys(e);
    let r;
    const s = n.length;
    let o;
    for (r = 0; r < s; r++)
        o = n[r],
        t[o] = e[o];
    return t
}
function tu(e) {
    function t(n, r, s, o) {
        let i = n[o++];
        if (i === "__proto__")
            return !0;
        const l = Number.isFinite(+i)
          , a = o >= n.length;
        return i = !i && w.isArray(s) ? s.length : i,
        a ? (w.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r,
        !l) : ((!s[i] || !w.isObject(s[i])) && (s[i] = []),
        t(n, r, s[i], o) && w.isArray(s[i]) && (s[i] = wh(s[i])),
        !l)
    }
    if (w.isFormData(e) && w.isFunction(e.entries)) {
        const n = {};
        return w.forEachEntry(e, (r, s) => {
            t(xh(r), s, n, 0)
        }
        ),
        n
    }
    return null
}
function kh(e, t, n) {
    if (w.isString(e))
        try {
            return (t || JSON.parse)(e),
            w.trim(e)
        } catch (r) {
            if (r.name !== "SyntaxError")
                throw r
        }
    return (n || JSON.stringify)(e)
}
const Nr = {
    transitional: eu,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || ""
          , s = r.indexOf("application/json") > -1
          , o = w.isObject(t);
        if (o && w.isHTMLForm(t) && (t = new FormData(t)),
        w.isFormData(t))
            return s ? JSON.stringify(tu(t)) : t;
        if (w.isArrayBuffer(t) || w.isBuffer(t) || w.isStream(t) || w.isFile(t) || w.isBlob(t) || w.isReadableStream(t))
            return t;
        if (w.isArrayBufferView(t))
            return t.buffer;
        if (w.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let l;
        if (o) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return yh(t, this.formSerializer).toString();
            if ((l = w.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const a = this.env && this.env.FormData;
                return zs(l ? {
                    "files[]": t
                } : t, a && new a, this.formSerializer)
            }
        }
        return o || s ? (n.setContentType("application/json", !1),
        kh(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const n = this.transitional || Nr.transitional
          , r = n && n.forcedJSONParsing
          , s = this.responseType === "json";
        if (w.isResponse(t) || w.isReadableStream(t))
            return t;
        if (t && w.isString(t) && (r && !this.responseType || s)) {
            const i = !(n && n.silentJSONParsing) && s;
            try {
                return JSON.parse(t)
            } catch (l) {
                if (i)
                    throw l.name === "SyntaxError" ? ne.from(l, ne.ERR_BAD_RESPONSE, this, null, this.response) : l
            }
        }
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: Me.classes.FormData,
        Blob: Me.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
w.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    Nr.headers[e] = {}
}
);
const _h = w.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , Sh = e => {
    const t = {};
    let n, r, s;
    return e && e.split(`
`).forEach(function(i) {
        s = i.indexOf(":"),
        n = i.substring(0, s).trim().toLowerCase(),
        r = i.substring(s + 1).trim(),
        !(!n || t[n] && _h[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
    }),
    t
}
  , Fl = Symbol("internals");
function Qn(e) {
    return e && String(e).trim().toLowerCase()
}
function ts(e) {
    return e === !1 || e == null ? e : w.isArray(e) ? e.map(ts) : String(e)
}
function Eh(e) {
    const t = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e); )
        t[r[1]] = r[2];
    return t
}
const Ch = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function vo(e, t, n, r, s) {
    if (w.isFunction(r))
        return r.call(this, t, n);
    if (s && (t = n),
    !!w.isString(t)) {
        if (w.isString(r))
            return t.indexOf(r) !== -1;
        if (w.isRegExp(r))
            return r.test(t)
    }
}
function Ah(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function Th(e, t) {
    const n = w.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function(s, o, i) {
                return this[r].call(this, t, s, o, i)
            },
            configurable: !0
        })
    }
    )
}
let Je = class {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const s = this;
        function o(l, a, u) {
            const c = Qn(a);
            if (!c)
                throw new Error("header name must be a non-empty string");
            const d = w.findKey(s, c);
            (!d || s[d] === void 0 || u === !0 || u === void 0 && s[d] !== !1) && (s[d || a] = ts(l))
        }
        const i = (l, a) => w.forEach(l, (u, c) => o(u, c, a));
        if (w.isPlainObject(t) || t instanceof this.constructor)
            i(t, n);
        else if (w.isString(t) && (t = t.trim()) && !Ch(t))
            i(Sh(t), n);
        else if (w.isObject(t) && w.isIterable(t)) {
            let l = {}, a, u;
            for (const c of t) {
                if (!w.isArray(c))
                    throw TypeError("Object iterator must return a key-value pair");
                l[u = c[0]] = (a = l[u]) ? w.isArray(a) ? [...a, c[1]] : [a, c[1]] : c[1]
            }
            i(l, n)
        } else
            t != null && o(n, t, r);
        return this
    }
    get(t, n) {
        if (t = Qn(t),
        t) {
            const r = w.findKey(this, t);
            if (r) {
                const s = this[r];
                if (!n)
                    return s;
                if (n === !0)
                    return Eh(s);
                if (w.isFunction(n))
                    return n.call(this, s, r);
                if (w.isRegExp(n))
                    return n.exec(s);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = Qn(t),
        t) {
            const r = w.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || vo(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let s = !1;
        function o(i) {
            if (i = Qn(i),
            i) {
                const l = w.findKey(r, i);
                l && (!n || vo(r, r[l], l, n)) && (delete r[l],
                s = !0)
            }
        }
        return w.isArray(t) ? t.forEach(o) : o(t),
        s
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length
          , s = !1;
        for (; r--; ) {
            const o = n[r];
            (!t || vo(this, this[o], o, t, !0)) && (delete this[o],
            s = !0)
        }
        return s
    }
    normalize(t) {
        const n = this
          , r = {};
        return w.forEach(this, (s, o) => {
            const i = w.findKey(r, o);
            if (i) {
                n[i] = ts(s),
                delete n[o];
                return
            }
            const l = t ? Ah(o) : String(o).trim();
            l !== o && delete n[o],
            n[l] = ts(s),
            r[l] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return w.forEach(this, (r, s) => {
            r != null && r !== !1 && (n[s] = t && w.isArray(r) ? r.join(", ") : r)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([t,n]) => t + ": " + n).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(s => r.set(s)),
        r
    }
    static accessor(t) {
        const r = (this[Fl] = this[Fl] = {
            accessors: {}
        }).accessors
          , s = this.prototype;
        function o(i) {
            const l = Qn(i);
            r[l] || (Th(s, i),
            r[l] = !0)
        }
        return w.isArray(t) ? t.forEach(o) : o(t),
        this
    }
}
;
Je.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
w.reduceDescriptors(Je.prototype, ({value: e}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r
        }
    }
}
);
w.freezeMethods(Je);
function mo(e, t) {
    const n = this || Nr
      , r = t || n
      , s = Je.from(r.headers);
    let o = r.data;
    return w.forEach(e, function(l) {
        o = l.call(n, o, s.normalize(), t ? t.status : void 0)
    }),
    s.normalize(),
    o
}
function nu(e) {
    return !!(e && e.__CANCEL__)
}
function Hn(e, t, n) {
    ne.call(this, e ?? "canceled", ne.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
w.inherits(Hn, ne, {
    __CANCEL__: !0
});
function ru(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new ne("Request failed with status code " + n.status,[ne.ERR_BAD_REQUEST, ne.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
function Oh(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function Rh(e, t) {
    e = e || 10;
    const n = new Array(e)
      , r = new Array(e);
    let s = 0, o = 0, i;
    return t = t !== void 0 ? t : 1e3,
    function(a) {
        const u = Date.now()
          , c = r[o];
        i || (i = u),
        n[s] = a,
        r[s] = u;
        let d = o
          , p = 0;
        for (; d !== s; )
            p += n[d++],
            d = d % e;
        if (s = (s + 1) % e,
        s === o && (o = (o + 1) % e),
        u - i < t)
            return;
        const m = c && u - c;
        return m ? Math.round(p * 1e3 / m) : void 0
    }
}
function Ih(e, t) {
    let n = 0, r = 1e3 / t, s, o;
    const i = (u, c=Date.now()) => {
        n = c,
        s = null,
        o && (clearTimeout(o),
        o = null),
        e(...u)
    }
    ;
    return [ (...u) => {
        const c = Date.now()
          , d = c - n;
        d >= r ? i(u, c) : (s = u,
        o || (o = setTimeout( () => {
            o = null,
            i(s)
        }
        , r - d)))
    }
    , () => s && i(s)]
}
const xs = (e, t, n=3) => {
    let r = 0;
    const s = Rh(50, 250);
    return Ih(o => {
        const i = o.loaded
          , l = o.lengthComputable ? o.total : void 0
          , a = i - r
          , u = s(a)
          , c = i <= l;
        r = i;
        const d = {
            loaded: i,
            total: l,
            progress: l ? i / l : void 0,
            bytes: a,
            rate: u || void 0,
            estimated: u && l && c ? (l - i) / u : void 0,
            event: o,
            lengthComputable: l != null,
            [t ? "download" : "upload"]: !0
        };
        e(d)
    }
    , n)
}
  , Ml = (e, t) => {
    const n = e != null;
    return [r => t[0]({
        lengthComputable: n,
        total: e,
        loaded: r
    }), t[1]]
}
  , jl = e => (...t) => w.asap( () => e(...t))
  , Dh = Me.hasStandardBrowserEnv ? ( (e, t) => n => (n = new URL(n,Me.origin),
e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(Me.origin), Me.navigator && /(msie|trident)/i.test(Me.navigator.userAgent)) : () => !0
  , Ph = Me.hasStandardBrowserEnv ? {
    write(e, t, n, r, s, o) {
        const i = [e + "=" + encodeURIComponent(t)];
        w.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
        w.isString(r) && i.push("path=" + r),
        w.isString(s) && i.push("domain=" + s),
        o === !0 && i.push("secure"),
        document.cookie = i.join("; ")
    },
    read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function $h(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function Lh(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function su(e, t, n) {
    let r = !$h(t);
    return e && (r || n == !1) ? Lh(e, t) : t
}
const Ul = e => e instanceof Je ? {
    ...e
} : e;
function mn(e, t) {
    t = t || {};
    const n = {};
    function r(u, c, d, p) {
        return w.isPlainObject(u) && w.isPlainObject(c) ? w.merge.call({
            caseless: p
        }, u, c) : w.isPlainObject(c) ? w.merge({}, c) : w.isArray(c) ? c.slice() : c
    }
    function s(u, c, d, p) {
        if (w.isUndefined(c)) {
            if (!w.isUndefined(u))
                return r(void 0, u, d, p)
        } else
            return r(u, c, d, p)
    }
    function o(u, c) {
        if (!w.isUndefined(c))
            return r(void 0, c)
    }
    function i(u, c) {
        if (w.isUndefined(c)) {
            if (!w.isUndefined(u))
                return r(void 0, u)
        } else
            return r(void 0, c)
    }
    function l(u, c, d) {
        if (d in t)
            return r(u, c);
        if (d in e)
            return r(void 0, u)
    }
    const a = {
        url: o,
        method: o,
        data: o,
        baseURL: i,
        transformRequest: i,
        transformResponse: i,
        paramsSerializer: i,
        timeout: i,
        timeoutMessage: i,
        withCredentials: i,
        withXSRFToken: i,
        adapter: i,
        responseType: i,
        xsrfCookieName: i,
        xsrfHeaderName: i,
        onUploadProgress: i,
        onDownloadProgress: i,
        decompress: i,
        maxContentLength: i,
        maxBodyLength: i,
        beforeRedirect: i,
        transport: i,
        httpAgent: i,
        httpsAgent: i,
        cancelToken: i,
        socketPath: i,
        responseEncoding: i,
        validateStatus: l,
        headers: (u, c, d) => s(Ul(u), Ul(c), d, !0)
    };
    return w.forEach(Object.keys({
        ...e,
        ...t
    }), function(c) {
        const d = a[c] || s
          , p = d(e[c], t[c], c);
        w.isUndefined(p) && d !== l || (n[c] = p)
    }),
    n
}
const ou = e => {
    const t = mn({}, e);
    let {data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: l} = t;
    t.headers = i = Je.from(i),
    t.url = Zc(su(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer),
    l && i.set("Authorization", "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : "")));
    let a;
    if (w.isFormData(n)) {
        if (Me.hasStandardBrowserEnv || Me.hasStandardBrowserWebWorkerEnv)
            i.setContentType(void 0);
        else if ((a = i.getContentType()) !== !1) {
            const [u,...c] = a ? a.split(";").map(d => d.trim()).filter(Boolean) : [];
            i.setContentType([u || "multipart/form-data", ...c].join("; "))
        }
    }
    if (Me.hasStandardBrowserEnv && (r && w.isFunction(r) && (r = r(t)),
    r || r !== !1 && Dh(t.url))) {
        const u = s && o && Ph.read(o);
        u && i.set(s, u)
    }
    return t
}
  , Nh = typeof XMLHttpRequest < "u"
  , Fh = Nh && function(e) {
    return new Promise(function(n, r) {
        const s = ou(e);
        let o = s.data;
        const i = Je.from(s.headers).normalize();
        let {responseType: l, onUploadProgress: a, onDownloadProgress: u} = s, c, d, p, m, y;
        function v() {
            m && m(),
            y && y(),
            s.cancelToken && s.cancelToken.unsubscribe(c),
            s.signal && s.signal.removeEventListener("abort", c)
        }
        let f = new XMLHttpRequest;
        f.open(s.method.toUpperCase(), s.url, !0),
        f.timeout = s.timeout;
        function x() {
            if (!f)
                return;
            const A = Je.from("getAllResponseHeaders"in f && f.getAllResponseHeaders())
              , $ = {
                data: !l || l === "text" || l === "json" ? f.responseText : f.response,
                status: f.status,
                statusText: f.statusText,
                headers: A,
                config: e,
                request: f
            };
            ru(function(U) {
                n(U),
                v()
            }, function(U) {
                r(U),
                v()
            }, $),
            f = null
        }
        "onloadend"in f ? f.onloadend = x : f.onreadystatechange = function() {
            !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(x)
        }
        ,
        f.onabort = function() {
            f && (r(new ne("Request aborted",ne.ECONNABORTED,e,f)),
            f = null)
        }
        ,
        f.onerror = function() {
            r(new ne("Network Error",ne.ERR_NETWORK,e,f)),
            f = null
        }
        ,
        f.ontimeout = function() {
            let k = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
            const $ = s.transitional || eu;
            s.timeoutErrorMessage && (k = s.timeoutErrorMessage),
            r(new ne(k,$.clarifyTimeoutError ? ne.ETIMEDOUT : ne.ECONNABORTED,e,f)),
            f = null
        }
        ,
        o === void 0 && i.setContentType(null),
        "setRequestHeader"in f && w.forEach(i.toJSON(), function(k, $) {
            f.setRequestHeader($, k)
        }),
        w.isUndefined(s.withCredentials) || (f.withCredentials = !!s.withCredentials),
        l && l !== "json" && (f.responseType = s.responseType),
        u && ([p,y] = xs(u, !0),
        f.addEventListener("progress", p)),
        a && f.upload && ([d,m] = xs(a),
        f.upload.addEventListener("progress", d),
        f.upload.addEventListener("loadend", m)),
        (s.cancelToken || s.signal) && (c = A => {
            f && (r(!A || A.type ? new Hn(null,e,f) : A),
            f.abort(),
            f = null)
        }
        ,
        s.cancelToken && s.cancelToken.subscribe(c),
        s.signal && (s.signal.aborted ? c() : s.signal.addEventListener("abort", c)));
        const S = Oh(s.url);
        if (S && Me.protocols.indexOf(S) === -1) {
            r(new ne("Unsupported protocol " + S + ":",ne.ERR_BAD_REQUEST,e));
            return
        }
        f.send(o || null)
    }
    )
}
  , Mh = (e, t) => {
    const {length: n} = e = e ? e.filter(Boolean) : [];
    if (t || n) {
        let r = new AbortController, s;
        const o = function(u) {
            if (!s) {
                s = !0,
                l();
                const c = u instanceof Error ? u : this.reason;
                r.abort(c instanceof ne ? c : new Hn(c instanceof Error ? c.message : c))
            }
        };
        let i = t && setTimeout( () => {
            i = null,
            o(new ne(`timeout ${t} of ms exceeded`,ne.ETIMEDOUT))
        }
        , t);
        const l = () => {
            e && (i && clearTimeout(i),
            i = null,
            e.forEach(u => {
                u.unsubscribe ? u.unsubscribe(o) : u.removeEventListener("abort", o)
            }
            ),
            e = null)
        }
        ;
        e.forEach(u => u.addEventListener("abort", o));
        const {signal: a} = r;
        return a.unsubscribe = () => w.asap(l),
        a
    }
}
  , jh = function*(e, t) {
    let n = e.byteLength;
    if (n < t) {
        yield e;
        return
    }
    let r = 0, s;
    for (; r < n; )
        s = r + t,
        yield e.slice(r, s),
        r = s
}
  , Uh = async function*(e, t) {
    for await(const n of Hh(e))
        yield*jh(n, t)
}
  , Hh = async function*(e) {
    if (e[Symbol.asyncIterator]) {
        yield*e;
        return
    }
    const t = e.getReader();
    try {
        for (; ; ) {
            const {done: n, value: r} = await t.read();
            if (n)
                break;
            yield r
        }
    } finally {
        await t.cancel()
    }
}
  , Hl = (e, t, n, r) => {
    const s = Uh(e, t);
    let o = 0, i, l = a => {
        i || (i = !0,
        r && r(a))
    }
    ;
    return new ReadableStream({
        async pull(a) {
            try {
                const {done: u, value: c} = await s.next();
                if (u) {
                    l(),
                    a.close();
                    return
                }
                let d = c.byteLength;
                if (n) {
                    let p = o += d;
                    n(p)
                }
                a.enqueue(new Uint8Array(c))
            } catch (u) {
                throw l(u),
                u
            }
        },
        cancel(a) {
            return l(a),
            s.return()
        }
    },{
        highWaterMark: 2
    })
}
  , qs = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function"
  , iu = qs && typeof ReadableStream == "function"
  , Bh = qs && (typeof TextEncoder == "function" ? (e => t => e.encode(t))(new TextEncoder) : async e => new Uint8Array(await new Response(e).arrayBuffer()))
  , lu = (e, ...t) => {
    try {
        return !!e(...t)
    } catch {
        return !1
    }
}
  , Vh = iu && lu( () => {
    let e = !1;
    const t = new Request(Me.origin,{
        body: new ReadableStream,
        method: "POST",
        get duplex() {
            return e = !0,
            "half"
        }
    }).headers.has("Content-Type");
    return e && !t
}
)
  , Bl = 64 * 1024
  , Yo = iu && lu( () => w.isReadableStream(new Response("").body))
  , ws = {
    stream: Yo && (e => e.body)
};
qs && (e => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => {
        !ws[t] && (ws[t] = w.isFunction(e[t]) ? n => n[t]() : (n, r) => {
            throw new ne(`Response type '${t}' is not supported`,ne.ERR_NOT_SUPPORT,r)
        }
        )
    }
    )
}
)(new Response);
const zh = async e => {
    if (e == null)
        return 0;
    if (w.isBlob(e))
        return e.size;
    if (w.isSpecCompliantForm(e))
        return (await new Request(Me.origin,{
            method: "POST",
            body: e
        }).arrayBuffer()).byteLength;
    if (w.isArrayBufferView(e) || w.isArrayBuffer(e))
        return e.byteLength;
    if (w.isURLSearchParams(e) && (e = e + ""),
    w.isString(e))
        return (await Bh(e)).byteLength
}
  , qh = async (e, t) => {
    const n = w.toFiniteNumber(e.getContentLength());
    return n ?? zh(t)
}
  , Kh = qs && (async e => {
    let {url: t, method: n, data: r, signal: s, cancelToken: o, timeout: i, onDownloadProgress: l, onUploadProgress: a, responseType: u, headers: c, withCredentials: d="same-origin", fetchOptions: p} = ou(e);
    u = u ? (u + "").toLowerCase() : "text";
    let m = Mh([s, o && o.toAbortSignal()], i), y;
    const v = m && m.unsubscribe && ( () => {
        m.unsubscribe()
    }
    );
    let f;
    try {
        if (a && Vh && n !== "get" && n !== "head" && (f = await qh(c, r)) !== 0) {
            let $ = new Request(t,{
                method: "POST",
                body: r,
                duplex: "half"
            }), O;
            if (w.isFormData(r) && (O = $.headers.get("content-type")) && c.setContentType(O),
            $.body) {
                const [U,V] = Ml(f, xs(jl(a)));
                r = Hl($.body, Bl, U, V)
            }
        }
        w.isString(d) || (d = d ? "include" : "omit");
        const x = "credentials"in Request.prototype;
        y = new Request(t,{
            ...p,
            signal: m,
            method: n.toUpperCase(),
            headers: c.normalize().toJSON(),
            body: r,
            duplex: "half",
            credentials: x ? d : void 0
        });
        let S = await fetch(y, p);
        const A = Yo && (u === "stream" || u === "response");
        if (Yo && (l || A && v)) {
            const $ = {};
            ["status", "statusText", "headers"].forEach(D => {
                $[D] = S[D]
            }
            );
            const O = w.toFiniteNumber(S.headers.get("content-length"))
              , [U,V] = l && Ml(O, xs(jl(l), !0)) || [];
            S = new Response(Hl(S.body, Bl, U, () => {
                V && V(),
                v && v()
            }
            ),$)
        }
        u = u || "text";
        let k = await ws[w.findKey(ws, u) || "text"](S, e);
        return !A && v && v(),
        await new Promise( ($, O) => {
            ru($, O, {
                data: k,
                headers: Je.from(S.headers),
                status: S.status,
                statusText: S.statusText,
                config: e,
                request: y
            })
        }
        )
    } catch (x) {
        throw v && v(),
        x && x.name === "TypeError" && /Load failed|fetch/i.test(x.message) ? Object.assign(new ne("Network Error",ne.ERR_NETWORK,e,y), {
            cause: x.cause || x
        }) : ne.from(x, x && x.code, e, y)
    }
}
)
  , Xo = {
    http: lh,
    xhr: Fh,
    fetch: Kh
};
w.forEach(Xo, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const Vl = e => `- ${e}`
  , Wh = e => w.isFunction(e) || e === null || e === !1
  , au = {
    getAdapter: e => {
        e = w.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, r;
        const s = {};
        for (let o = 0; o < t; o++) {
            n = e[o];
            let i;
            if (r = n,
            !Wh(n) && (r = Xo[(i = String(n)).toLowerCase()],
            r === void 0))
                throw new ne(`Unknown adapter '${i}'`);
            if (r)
                break;
            s[i || "#" + o] = r
        }
        if (!r) {
            const o = Object.entries(s).map( ([l,a]) => `adapter ${l} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build"));
            let i = t ? o.length > 1 ? `since :
` + o.map(Vl).join(`
`) : " " + Vl(o[0]) : "as no adapter specified";
            throw new ne("There is no suitable adapter to dispatch the request " + i,"ERR_NOT_SUPPORT")
        }
        return r
    }
    ,
    adapters: Xo
};
function go(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new Hn(null,e)
}
function zl(e) {
    return go(e),
    e.headers = Je.from(e.headers),
    e.data = mo.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    au.getAdapter(e.adapter || Nr.adapter)(e).then(function(r) {
        return go(e),
        r.data = mo.call(e, e.transformResponse, r),
        r.headers = Je.from(r.headers),
        r
    }, function(r) {
        return nu(r) || (go(e),
        r && r.response && (r.response.data = mo.call(e, e.transformResponse, r.response),
        r.response.headers = Je.from(r.response.headers))),
        Promise.reject(r)
    })
}
const cu = "1.11.0"
  , Ks = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (e, t) => {
    Ks[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
);
const ql = {};
Ks.transitional = function(t, n, r) {
    function s(o, i) {
        return "[Axios v" + cu + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "")
    }
    return (o, i, l) => {
        if (t === !1)
            throw new ne(s(i, " has been removed" + (n ? " in " + n : "")),ne.ERR_DEPRECATED);
        return n && !ql[i] && (ql[i] = !0,
        console.warn(s(i, " has been deprecated since v" + n + " and will be removed in the near future"))),
        t ? t(o, i, l) : !0
    }
}
;
Ks.spelling = function(t) {
    return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`),
    !0)
}
;
function Gh(e, t, n) {
    if (typeof e != "object")
        throw new ne("options must be an object",ne.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let s = r.length;
    for (; s-- > 0; ) {
        const o = r[s]
          , i = t[o];
        if (i) {
            const l = e[o]
              , a = l === void 0 || i(l, o, e);
            if (a !== !0)
                throw new ne("option " + o + " must be " + a,ne.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new ne("Unknown option " + o,ne.ERR_BAD_OPTION)
    }
}
const ns = {
    assertOptions: Gh,
    validators: Ks
}
  , gt = ns.validators;
let hn = class {
    constructor(t) {
        this.defaults = t || {},
        this.interceptors = {
            request: new Nl,
            response: new Nl
        }
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (r) {
            if (r instanceof Error) {
                let s = {};
                Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error;
                const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
                try {
                    r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o
                } catch {}
            }
            throw r
        }
    }
    _request(t, n) {
        typeof t == "string" ? (n = n || {},
        n.url = t) : n = t || {},
        n = mn(this.defaults, n);
        const {transitional: r, paramsSerializer: s, headers: o} = n;
        r !== void 0 && ns.assertOptions(r, {
            silentJSONParsing: gt.transitional(gt.boolean),
            forcedJSONParsing: gt.transitional(gt.boolean),
            clarifyTimeoutError: gt.transitional(gt.boolean)
        }, !1),
        s != null && (w.isFunction(s) ? n.paramsSerializer = {
            serialize: s
        } : ns.assertOptions(s, {
            encode: gt.function,
            serialize: gt.function
        }, !0)),
        n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0),
        ns.assertOptions(n, {
            baseUrl: gt.spelling("baseURL"),
            withXsrfToken: gt.spelling("withXSRFToken")
        }, !0),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let i = o && w.merge(o.common, o[n.method]);
        o && w.forEach(["delete", "get", "head", "post", "put", "patch", "common"], y => {
            delete o[y]
        }
        ),
        n.headers = Je.concat(i, o);
        const l = [];
        let a = !0;
        this.interceptors.request.forEach(function(v) {
            typeof v.runWhen == "function" && v.runWhen(n) === !1 || (a = a && v.synchronous,
            l.unshift(v.fulfilled, v.rejected))
        });
        const u = [];
        this.interceptors.response.forEach(function(v) {
            u.push(v.fulfilled, v.rejected)
        });
        let c, d = 0, p;
        if (!a) {
            const y = [zl.bind(this), void 0];
            for (y.unshift(...l),
            y.push(...u),
            p = y.length,
            c = Promise.resolve(n); d < p; )
                c = c.then(y[d++], y[d++]);
            return c
        }
        p = l.length;
        let m = n;
        for (d = 0; d < p; ) {
            const y = l[d++]
              , v = l[d++];
            try {
                m = y(m)
            } catch (f) {
                v.call(this, f);
                break
            }
        }
        try {
            c = zl.call(this, m)
        } catch (y) {
            return Promise.reject(y)
        }
        for (d = 0,
        p = u.length; d < p; )
            c = c.then(u[d++], u[d++]);
        return c
    }
    getUri(t) {
        t = mn(this.defaults, t);
        const n = su(t.baseURL, t.url, t.allowAbsoluteUrls);
        return Zc(n, t.params, t.paramsSerializer)
    }
}
;
w.forEach(["delete", "get", "head", "options"], function(t) {
    hn.prototype[t] = function(n, r) {
        return this.request(mn(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
w.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(o, i, l) {
            return this.request(mn(l || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: o,
                data: i
            }))
        }
    }
    hn.prototype[t] = n(),
    hn.prototype[t + "Form"] = n(!0)
});
let Jh = class uu {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(o) {
            n = o
        }
        );
        const r = this;
        this.promise.then(s => {
            if (!r._listeners)
                return;
            let o = r._listeners.length;
            for (; o-- > 0; )
                r._listeners[o](s);
            r._listeners = null
        }
        ),
        this.promise.then = s => {
            let o;
            const i = new Promise(l => {
                r.subscribe(l),
                o = l
            }
            ).then(s);
            return i.cancel = function() {
                r.unsubscribe(o)
            }
            ,
            i
        }
        ,
        t(function(o, i, l) {
            r.reason || (r.reason = new Hn(o,i,l),
            n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    toAbortSignal() {
        const t = new AbortController
          , n = r => {
            t.abort(r)
        }
        ;
        return this.subscribe(n),
        t.signal.unsubscribe = () => this.unsubscribe(n),
        t.signal
    }
    static source() {
        let t;
        return {
            token: new uu(function(s) {
                t = s
            }
            ),
            cancel: t
        }
    }
}
;
function Yh(e) {
    return function(n) {
        return e.apply(null, n)
    }
}
function Xh(e) {
    return w.isObject(e) && e.isAxiosError === !0
}
const Qo = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Qo).forEach( ([e,t]) => {
    Qo[t] = e
}
);
function du(e) {
    const t = new hn(e)
      , n = Hc(hn.prototype.request, t);
    return w.extend(n, hn.prototype, t, {
        allOwnKeys: !0
    }),
    w.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = function(s) {
        return du(mn(e, s))
    }
    ,
    n
}
const Se = du(Nr);
Se.Axios = hn;
Se.CanceledError = Hn;
Se.CancelToken = Jh;
Se.isCancel = nu;
Se.VERSION = cu;
Se.toFormData = zs;
Se.AxiosError = ne;
Se.Cancel = Se.CanceledError;
Se.all = function(t) {
    return Promise.all(t)
}
;
Se.spread = Yh;
Se.isAxiosError = Xh;
Se.mergeConfig = mn;
Se.AxiosHeaders = Je;
Se.formToJSON = e => tu(w.isHTMLForm(e) ? new FormData(e) : e);
Se.getAdapter = au.getAdapter;
Se.HttpStatusCode = Qo;
Se.default = Se;
const {Axios: Ry, AxiosError: Iy, CanceledError: Dy, isCancel: Py, CancelToken: $y, VERSION: Ly, all: Ny, Cancel: Fy, isAxiosError: My, spread: jy, toFormData: Uy, AxiosHeaders: Hy, HttpStatusCode: By, formToJSON: Vy, getAdapter: zy, mergeConfig: qy} = Se;
var Qh = "2.0.4"
  , Zo = 500
  , Kl = "user-agent"
  , Pn = ""
  , Wl = "?"
  , ks = "function"
  , Jt = "undefined"
  , $n = "object"
  , ei = "string"
  , qe = "browser"
  , It = "cpu"
  , _t = "device"
  , ot = "engine"
  , et = "os"
  , Tn = "result"
  , I = "name"
  , E = "type"
  , R = "vendor"
  , P = "version"
  , Ke = "architecture"
  , Ar = "major"
  , T = "model"
  , cr = "console"
  , Z = "mobile"
  , ve = "tablet"
  , Ae = "smarttv"
  , bt = "wearable"
  , qr = "xr"
  , ur = "embedded"
  , Zn = "inapp"
  , Ni = "brands"
  , un = "formFactors"
  , Fi = "fullVersionList"
  , On = "platform"
  , Mi = "platformVersion"
  , Ws = "bitness"
  , nn = "sec-ch-ua"
  , Zh = nn + "-full-version-list"
  , ev = nn + "-arch"
  , tv = nn + "-" + Ws
  , nv = nn + "-form-factors"
  , rv = nn + "-" + Z
  , sv = nn + "-" + T
  , fu = nn + "-" + On
  , ov = fu + "-version"
  , pu = [Ni, Fi, Z, T, On, Mi, Ke, un, Ws]
  , Kr = "Amazon"
  , xn = "Apple"
  , Gl = "ASUS"
  , Jl = "BlackBerry"
  , an = "Google"
  , Yl = "Huawei"
  , bo = "Lenovo"
  , Xl = "Honor"
  , Wr = "LG"
  , yo = "Microsoft"
  , xo = "Motorola"
  , wo = "Nvidia"
  , Ql = "OnePlus"
  , ko = "OPPO"
  , er = "Samsung"
  , Zl = "Sharp"
  , tr = "Sony"
  , _o = "Xiaomi"
  , So = "Zebra"
  , ea = "Chrome"
  , ta = "Chromium"
  , zt = "Chromecast"
  , rs = "Edge"
  , nr = "Firefox"
  , rr = "Opera"
  , Eo = "Facebook"
  , na = "Sogou"
  , wn = "Mobile "
  , sr = " Browser"
  , ti = "Windows"
  , iv = typeof window !== Jt
  , We = iv && window.navigator ? window.navigator : void 0
  , Gt = We && We.userAgentData ? We.userAgentData : void 0
  , lv = function(e, t) {
    var n = {}
      , r = t;
    if (!_s(t)) {
        r = {};
        for (var s in t)
            for (var o in t[s])
                r[o] = t[s][o].concat(r[o] ? r[o] : [])
    }
    for (var i in e)
        n[i] = r[i] && r[i].length % 2 === 0 ? r[i].concat(e[i]) : e[i];
    return n
}
  , Gs = function(e) {
    for (var t = {}, n = 0; n < e.length; n++)
        t[e[n].toUpperCase()] = e[n];
    return t
}
  , ni = function(e, t) {
    if (typeof e === $n && e.length > 0) {
        for (var n in e)
            if (Dt(t) == Dt(e[n]))
                return !0;
        return !1
    }
    return Bn(e) ? Dt(t) == Dt(e) : !1
}
  , _s = function(e, t) {
    for (var n in e)
        return /^(browser|cpu|device|engine|os)$/.test(n) || (t ? _s(e[n]) : !1)
}
  , Bn = function(e) {
    return typeof e === ei
}
  , Co = function(e) {
    if (e) {
        for (var t = [], n = Ln(/\\?\"/g, e).split(","), r = 0; r < n.length; r++)
            if (n[r].indexOf(";") > -1) {
                var s = Ss(n[r]).split(";v=");
                t[r] = {
                    brand: s[0],
                    version: s[1]
                }
            } else
                t[r] = Ss(n[r]);
        return t
    }
}
  , Dt = function(e) {
    return Bn(e) ? e.toLowerCase() : e
}
  , Ao = function(e) {
    return Bn(e) ? Ln(/[^\d\.]/g, e).split(".")[0] : void 0
}
  , Pt = function(e) {
    for (var t in e) {
        var n = e[t];
        typeof n == $n && n.length == 2 ? this[n[0]] = n[1] : this[n] = void 0
    }
    return this
}
  , Ln = function(e, t) {
    return Bn(t) ? t.replace(e, Pn) : t
}
  , or = function(e) {
    return Ln(/\\?\"/g, e)
}
  , Ss = function(e, t) {
    if (Bn(e))
        return e = Ln(/^\s\s*/, e),
        typeof t === Jt ? e : e.substring(0, Zo)
}
  , To = function(e, t) {
    if (!(!e || !t))
        for (var n = 0, r, s, o, i, l, a; n < t.length && !l; ) {
            var u = t[n]
              , c = t[n + 1];
            for (r = s = 0; r < u.length && !l && u[r]; )
                if (l = u[r++].exec(e),
                l)
                    for (o = 0; o < c.length; o++)
                        a = l[++s],
                        i = c[o],
                        typeof i === $n && i.length > 0 ? i.length === 2 ? typeof i[1] == ks ? this[i[0]] = i[1].call(this, a) : this[i[0]] = i[1] : i.length >= 3 && (typeof i[1] === ks && !(i[1].exec && i[1].test) ? i.length > 3 ? this[i[0]] = a ? i[1].apply(this, i.slice(2)) : void 0 : this[i[0]] = a ? i[1].call(this, a, i[2]) : void 0 : i.length == 3 ? this[i[0]] = a ? a.replace(i[1], i[2]) : void 0 : i.length == 4 ? this[i[0]] = a ? i[3].call(this, a.replace(i[1], i[2])) : void 0 : i.length > 4 && (this[i[0]] = a ? i[3].apply(this, [a.replace(i[1], i[2])].concat(i.slice(4))) : void 0)) : this[i] = a || void 0;
            n += 2
        }
}
  , xt = function(e, t) {
    for (var n in t)
        if (typeof t[n] === $n && t[n].length > 0) {
            for (var r = 0; r < t[n].length; r++)
                if (ni(t[n][r], e))
                    return n === Wl ? void 0 : n
        } else if (ni(t[n], e))
            return n === Wl ? void 0 : n;
    return t.hasOwnProperty("*") ? t["*"] : e
}
  , ra = {
    ME: "4.90",
    "NT 3.51": "3.51",
    "NT 4.0": "4.0",
    2e3: ["5.0", "5.01"],
    XP: ["5.1", "5.2"],
    Vista: "6.0",
    7: "6.1",
    8: "6.2",
    "8.1": "6.3",
    10: ["6.4", "10.0"],
    NT: ""
}
  , sa = {
    embedded: "Automotive",
    mobile: "Mobile",
    tablet: ["Tablet", "EInk"],
    smarttv: "TV",
    wearable: "Watch",
    xr: ["VR", "XR"],
    "?": ["Desktop", "Unknown"],
    "*": void 0
}
  , av = {
    Chrome: "Google Chrome",
    Edge: "Microsoft Edge",
    "Edge WebView2": "Microsoft Edge WebView2",
    "Chrome WebView": "Android WebView",
    "Chrome Headless": "HeadlessChrome",
    "Huawei Browser": "HuaweiBrowser",
    "MIUI Browser": "Miui Browser",
    "Opera Mobi": "OperaMobile",
    Yandex: "YaBrowser"
}
  , oa = {
    browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [P, [I, wn + "Chrome"]], [/webview.+edge\/([\w\.]+)/i], [P, [I, rs + " WebView"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [P, [I, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [I, P], [/opios[\/ ]+([\w\.]+)/i], [P, [I, rr + " Mini"]], [/\bop(?:rg)?x\/([\w\.]+)/i], [P, [I, rr + " GX"]], [/\bopr\/([\w\.]+)/i], [P, [I, rr]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [P, [I, "Baidu"]], [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i], [P, [I, "Maxthon"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:lg |qute)browser)\/([-\w\.]+)/i, /(heytap|ovi|115|surf)browser\/([\d\.]+)/i, /(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i], [I, P], [/quark(?:pc)?\/([-\w\.]+)/i], [P, [I, "Quark"]], [/\bddg\/([\w\.]+)/i], [P, [I, "DuckDuckGo"]], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [P, [I, "UCBrowser"]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [P, [I, "WeChat"]], [/konqueror\/([\w\.]+)/i], [P, [I, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [P, [I, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [P, [I, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [P, [I, "Smart " + bo + sr]], [/(avast|avg)\/([\w\.]+)/i], [[I, /(.+)/, "$1 Secure" + sr], P], [/\bfocus\/([\w\.]+)/i], [P, [I, nr + " Focus"]], [/\bopt\/([\w\.]+)/i], [P, [I, rr + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [P, [I, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [P, [I, "Dolphin"]], [/coast\/([\w\.]+)/i], [P, [I, rr + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [P, [I, "MIUI" + sr]], [/fxios\/([\w\.-]+)/i], [P, [I, wn + nr]], [/\bqihoobrowser\/?([\w\.]*)/i], [P, [I, "360"]], [/\b(qq)\/([\w\.]+)/i], [[I, /(.+)/, "$1Browser"], P], [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i], [[I, /(.+)/, "$1" + sr], P], [/samsungbrowser\/([\w\.]+)/i], [P, [I, er + " Internet"]], [/metasr[\/ ]?([\d\.]+)/i], [P, [I, na + " Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[I, na + " Mobile"], P], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i], [I, P], [/(lbbrowser|rekonq)/i], [I], [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i], [P, I], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[I, Eo], P, [E, Zn]], [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(instagram|snapchat|klarna)[\/ ]([-\w\.]+)/i], [I, P, [E, Zn]], [/\bgsa\/([\w\.]+) .*safari\//i], [P, [I, "GSA"], [E, Zn]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [P, [I, "TikTok"], [E, Zn]], [/\[(linkedin)app\]/i], [I, [E, Zn]], [/(chromium)[\/ ]([-\w\.]+)/i], [I, P], [/headlesschrome(?:\/([\w\.]+)| )/i], [P, [I, ea + " Headless"]], [/wv\).+chrome\/([\w\.]+).+edgw\//i], [P, [I, rs + " WebView2"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[I, ea + " WebView"], P], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [P, [I, "Android" + sr]], [/chrome\/([\w\.]+) mobile/i], [P, [I, wn + "Chrome"]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [I, P], [/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i], [P, [I, wn + "Safari"]], [/iphone .*mobile(?:\/\w+ | ?)safari/i], [[I, wn + "Safari"]], [/version\/([\w\.\,]+) .*(safari)/i], [P, I], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [I, [P, "1"]], [/(webkit|khtml)\/([\w\.]+)/i], [I, P], [/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i], [[I, wn + nr], P], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[I, "Netscape"], P], [/(wolvic|librewolf)\/([\w\.]+)/i], [I, P], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [P, [I, nr + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i], [I, [P, /_/g, "."]], [/(cobalt)\/([\w\.]+)/i], [I, [P, /[^\d\.]+./, Pn]]],
    cpu: [[/\b((amd|x|x86[-_]?|wow|win)64)\b/i], [[Ke, "amd64"]], [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i], [[Ke, "ia32"]], [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i], [[Ke, "arm64"]], [/\b(arm(v[67])?ht?n?[fl]p?)\b/i], [[Ke, "armhf"]], [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i], [[Ke, "arm"]], [/((ppc|powerpc)(64)?)( mac|;|\))/i], [[Ke, /ower/, Pn, Dt]], [/ sun4\w[;\)]/i], [[Ke, "sparc"]], [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i], [[Ke, Dt]]],
    device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [T, [R, er], [E, ve]], [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i, /sec-(sgh\w+)/i], [T, [R, er], [E, Z]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [T, [R, xn], [E, Z]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [T, [R, xn], [E, ve]], [/(macintosh);/i], [T, [R, xn]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [T, [R, Zl], [E, Z]], [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i], [T, [R, Xl], [E, ve]], [/honor([-\w ]+)[;\)]/i], [T, [R, Xl], [E, Z]], [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i], [T, [R, Yl], [E, ve]], [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [T, [R, Yl], [E, Z]], [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i], [[T, /_/g, " "], [R, _o], [E, ve]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i], [[T, /_/g, " "], [R, _o], [E, Z]], [/droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-k]\w[1m]10)\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [T, [R, Ql], [E, Z]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [T, [R, ko], [E, Z]], [/\b(opd2(\d{3}a?))(?: bui|\))/i], [T, [R, xt, {
        OnePlus: ["203", "304", "403", "404", "413", "415"],
        "*": ko
    }], [E, ve]], [/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i], [T, [R, "BLU"], [E, Z]], [/; vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [T, [R, "Vivo"], [E, Z]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [T, [R, "Realme"], [E, Z]], [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i], [T, [R, bo], [E, ve]], [/lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i], [T, [R, bo], [E, Z]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i, /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i], [T, [R, xo], [E, Z]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [T, [R, xo], [E, ve]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [T, [R, Wr], [E, ve]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i, /\blg-?([\d\w]+) bui/i], [T, [R, Wr], [E, Z]], [/(nokia) (t[12][01])/i], [R, T, [E, ve]], [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i], [[T, /_/g, " "], [E, Z], [R, "Nokia"]], [/(pixel (c|tablet))\b/i], [T, [R, an], [E, ve]], [/droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i], [T, [R, an], [E, Z]], [/(google) (pixelbook( go)?)/i], [R, T], [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [T, [R, tr], [E, Z]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[T, "Xperia Tablet"], [R, tr], [E, ve]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [T, [R, Kr], [E, ve]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[T, /(.+)/g, "Fire Phone $1"], [R, Kr], [E, Z]], [/(playbook);[-\w\),; ]+(rim)/i], [T, R, [E, ve]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [T, [R, Jl], [E, Z]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [T, [R, Gl], [E, ve]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [T, [R, Gl], [E, Z]], [/(nexus 9)/i], [T, [R, "HTC"], [E, ve]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [R, [T, /_/g, " "], [E, Z]], [/tcl (xess p17aa)/i, /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i], [T, [R, "TCL"], [E, ve]], [/droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i], [T, [R, "TCL"], [E, Z]], [/(itel) ((\w+))/i], [[R, Dt], T, [E, xt, {
        tablet: ["p10001l", "w7001"],
        "*": "mobile"
    }]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [T, [R, "Acer"], [E, ve]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [T, [R, "Meizu"], [E, Z]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [T, [R, "Ulefone"], [E, Z]], [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i], [T, [R, "Energizer"], [E, Z]], [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i], [T, [R, "Cat"], [E, Z]], [/((?:new )?andromax[\w- ]+)(?: bui|\))/i], [T, [R, "Smartfren"], [E, Z]], [/droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i], [T, [R, "Nothing"], [E, Z]], [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i], [T, [R, "Archos"], [E, ve]], [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i], [T, [R, "Archos"], [E, Z]], [/; (n159v)/i], [T, [R, "HMD"], [E, Z]], [/(imo) (tab \w+)/i, /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i], [R, T, [E, ve]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (blu|hmd|imo|infinix|lava|oneplus|tcl)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(oppo) ?([\w ]+) bui/i], [R, T, [E, Z]], [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i], [R, T, [E, ve]], [/(surface duo)/i], [T, [R, yo], [E, ve]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [T, [R, "Fairphone"], [E, Z]], [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i], [T, [R, wo], [E, ve]], [/(sprint) (\w+)/i], [R, T, [E, Z]], [/(kin\.[onetw]{3})/i], [[T, /\./g, " "], [R, yo], [E, Z]], [/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [T, [R, So], [E, ve]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [T, [R, So], [E, Z]], [/smart-tv.+(samsung)/i], [R, [E, Ae]], [/hbbtv.+maple;(\d+)/i], [[T, /^/, "SmartTV"], [R, er], [E, Ae]], [/(vizio)(?: |.+model\/)(\w+-\w+)/i, /tcast.+(lg)e?. ([-\w]+)/i], [R, T, [E, Ae]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[R, Wr], [E, Ae]], [/(apple) ?tv/i], [R, [T, xn + " TV"], [E, Ae]], [/crkey.*devicetype\/chromecast/i], [[T, zt + " Third Generation"], [R, an], [E, Ae]], [/crkey.*devicetype\/([^/]*)/i], [[T, /^/, "Chromecast "], [R, an], [E, Ae]], [/fuchsia.*crkey/i], [[T, zt + " Nest Hub"], [R, an], [E, Ae]], [/crkey/i], [[T, zt], [R, an], [E, Ae]], [/(portaltv)/i], [T, [R, Eo], [E, Ae]], [/droid.+aft(\w+)( bui|\))/i], [T, [R, Kr], [E, Ae]], [/(shield \w+ tv)/i], [T, [R, wo], [E, Ae]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [T, [R, Zl], [E, Ae]], [/(bravia[\w ]+)( bui|\))/i], [T, [R, tr], [E, Ae]], [/(mi(tv|box)-?\w+) bui/i], [T, [R, _o], [E, Ae]], [/Hbbtv.*(technisat) (.*);/i], [R, T, [E, Ae]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[R, /.+\/(\w+)/, "$1", xt, {
        LG: "lge"
    }], [T, Ss], [E, Ae]], [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i], [T, [E, Ae]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:|large screen[\w ]+safari)\b/i], [[E, Ae]], [/(playstation \w+)/i], [T, [R, tr], [E, cr]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [T, [R, yo], [E, cr]], [/(ouya)/i, /(nintendo) (\w+)/i, /(retroid) (pocket ([^\)]+))/i], [R, T, [E, cr]], [/droid.+; (shield)( bui|\))/i], [T, [R, wo], [E, cr]], [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i], [T, [R, er], [E, bt]], [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i], [R, T, [E, bt]], [/(ow(?:19|20)?we?[1-3]{1,3})/i], [T, [R, ko], [E, bt]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [T, [R, xn], [E, bt]], [/(opwwe\d{3})/i], [T, [R, Ql], [E, bt]], [/(moto 360)/i], [T, [R, xo], [E, bt]], [/(smartwatch 3)/i], [T, [R, tr], [E, bt]], [/(g watch r)/i], [T, [R, Wr], [E, bt]], [/droid.+; (wt63?0{2,3})\)/i], [T, [R, So], [E, bt]], [/droid.+; (glass) \d/i], [T, [R, an], [E, qr]], [/(pico) (4|neo3(?: link|pro)?)/i], [R, T, [E, qr]], [/(quest( \d| pro)?s?).+vr/i], [T, [R, Eo], [E, qr]], [/mobile vr; rv.+firefox/i], [[E, qr]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [R, [E, ur]], [/(aeobc)\b/i], [T, [R, Kr], [E, ur]], [/(homepod).+mac os/i], [T, [R, xn], [E, ur]], [/windows iot/i], [[E, ur]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i], [T, [E, xt, {
        mobile: "Mobile",
        xr: "VR",
        "*": ve
    }]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[E, ve]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[E, Z]], [/droid .+?; ([\w\. -]+)( bui|\))/i], [T, [R, "Generic"]]],
    engine: [[/windows.+ edge\/([\w\.]+)/i], [P, [I, rs + "HTML"]], [/(arkweb)\/([\w\.]+)/i], [I, P], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [P, [I, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [I, P], [/ladybird\//i], [[I, "LibWeb"]], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [P, I]],
    os: [[/(windows nt) (6\.[23]); arm/i], [[I, /N/, "R"], [P, xt, ra]], [/(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i, /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i], [I, P], [/windows nt ?([\d\.\)]*)(?!.+xbox)/i, /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i], [[P, /(;|\))/g, "", xt, ra], [I, ti]], [/(windows ce)\/?([\d\.]*)/i], [I, P], [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[P, /_/g, "."], [I, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i], [[I, "macOS"], [P, /_/g, "."]], [/android ([\d\.]+).*crkey/i], [P, [I, zt + " Android"]], [/fuchsia.*crkey\/([\d\.]+)/i], [P, [I, zt + " Fuchsia"]], [/crkey\/([\d\.]+).*devicetype\/smartspeaker/i], [P, [I, zt + " SmartSpeaker"]], [/linux.*crkey\/([\d\.]+)/i], [P, [I, zt + " Linux"]], [/crkey\/([\d\.]+)/i], [P, [I, zt]], [/droid ([\w\.]+)\b.+(android[- ]x86)/i], [P, I], [/(ubuntu) ([\w\.]+) like android/i], [[I, /(.+)/, "$1 Touch"], P], [/(harmonyos)[\/ ]?([\d\.]*)/i, /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i], [I, P], [/\(bb(10);/i], [P, [I, Jl]], [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i], [P, [I, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [P, [I, nr + " OS"]], [/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i, /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i], [P, [I, "webOS"]], [/web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i], [[P, xt, {
        25: "120",
        24: "108",
        23: "94",
        22: "87",
        6: "79",
        5: "68",
        4: "53",
        3: "38",
        2: "538",
        1: "537",
        "*": "TV"
    }], [I, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [P, [I, "watchOS"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[I, "Chrome OS"], P], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) (\w+)/i, /(xbox); +xbox ([^\);]+)/i, /(pico) .+os([\w\.]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /linux.+(mint)[\/\(\) ]?([\w\.]*)/i, /(mageia|vectorlinux|fuchsia|arcaos|arch(?= ?linux))[;l ]([\d\.]*)/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire|knoppix)(?: gnu[\/ ]linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /\b(aix)[; ]([1-9\.]{0,4})/i, /(hurd|linux|morphos)(?: (?:arm|x86|ppc)\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) ?(r\d)?/i], [I, P], [/(sunos) ?([\d\.]*)/i], [[I, "Solaris"], P], [/\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [I, P]]
}
  , Gr = (function() {
    var e = {
        init: {},
        isIgnore: {},
        isIgnoreRgx: {},
        toString: {}
    };
    return Pt.call(e.init, [[qe, [I, P, Ar, E]], [It, [Ke]], [_t, [E, T, R]], [ot, [I, P]], [et, [I, P]]]),
    Pt.call(e.isIgnore, [[qe, [P, Ar]], [ot, [P]], [et, [P]]]),
    Pt.call(e.isIgnoreRgx, [[qe, / ?browser$/i], [et, / ?os$/i]]),
    Pt.call(e.toString, [[qe, [I, P]], [It, [Ke]], [_t, [R, T]], [ot, [I, P]], [et, [I, P]]]),
    e
}
)()
  , cv = function(e, t) {
    var n = Gr.init[t]
      , r = Gr.isIgnore[t] || 0
      , s = Gr.isIgnoreRgx[t] || 0
      , o = Gr.toString[t] || 0;
    function i() {
        Pt.call(this, n)
    }
    return i.prototype.getItem = function() {
        return e
    }
    ,
    i.prototype.withClientHints = function() {
        return Gt ? Gt.getHighEntropyValues(pu).then(function(l) {
            return e.setCH(new hu(l,!1)).parseCH().get()
        }) : e.parseCH().get()
    }
    ,
    i.prototype.withFeatureCheck = function() {
        return e.detectFeature().get()
    }
    ,
    t != Tn && (i.prototype.is = function(l) {
        var a = !1;
        for (var u in this)
            if (this.hasOwnProperty(u) && !ni(r, u) && Dt(s ? Ln(s, this[u]) : this[u]) == Dt(s ? Ln(s, l) : l)) {
                if (a = !0,
                l != Jt)
                    break
            } else if (l == Jt && a) {
                a = !a;
                break
            }
        return a
    }
    ,
    i.prototype.toString = function() {
        var l = Pn;
        for (var a in o)
            typeof this[o[a]] !== Jt && (l += (l ? " " : Pn) + this[o[a]]);
        return l || Jt
    }
    ),
    Gt || (i.prototype.then = function(l) {
        var a = this
          , u = function() {
            for (var d in a)
                a.hasOwnProperty(d) && (this[d] = a[d])
        };
        u.prototype = {
            is: i.prototype.is,
            toString: i.prototype.toString
        };
        var c = new u;
        return l(c),
        c
    }
    ),
    new i
};
function hu(e, t) {
    if (e = e || {},
    Pt.call(this, pu),
    t)
        Pt.call(this, [[Ni, Co(e[nn])], [Fi, Co(e[Zh])], [Z, /\?1/.test(e[rv])], [T, or(e[sv])], [On, or(e[fu])], [Mi, or(e[ov])], [Ke, or(e[ev])], [un, Co(e[nv])], [Ws, or(e[tv])]]);
    else
        for (var n in e)
            this.hasOwnProperty(n) && typeof e[n] !== Jt && (this[n] = e[n])
}
function ia(e, t, n, r) {
    return this.get = function(s) {
        return s ? this.data.hasOwnProperty(s) ? this.data[s] : void 0 : this.data
    }
    ,
    this.set = function(s, o) {
        return this.data[s] = o,
        this
    }
    ,
    this.setCH = function(s) {
        return this.uaCH = s,
        this
    }
    ,
    this.detectFeature = function() {
        if (We && We.userAgent == this.ua)
            switch (this.itemType) {
            case qe:
                We.brave && typeof We.brave.isBrave == ks && this.set(I, "Brave");
                break;
            case _t:
                !this.get(E) && Gt && Gt[Z] && this.set(E, Z),
                this.get(T) == "Macintosh" && We && typeof We.standalone !== Jt && We.maxTouchPoints && We.maxTouchPoints > 2 && this.set(T, "iPad").set(E, ve);
                break;
            case et:
                !this.get(I) && Gt && Gt[On] && this.set(I, Gt[On]);
                break;
            case Tn:
                var s = this.data
                  , o = function(i) {
                    return s[i].getItem().detectFeature().get()
                };
                this.set(qe, o(qe)).set(It, o(It)).set(_t, o(_t)).set(ot, o(ot)).set(et, o(et))
            }
        return this
    }
    ,
    this.parseUA = function() {
        return this.itemType != Tn && To.call(this.data, this.ua, this.rgxMap),
        this.itemType == qe && this.set(Ar, Ao(this.get(P))),
        this
    }
    ,
    this.parseCH = function() {
        var s = this.uaCH
          , o = this.rgxMap;
        switch (this.itemType) {
        case qe:
        case ot:
            var i = s[Fi] || s[Ni], l;
            if (i)
                for (var a in i) {
                    var u = i[a].brand || i[a]
                      , c = i[a].version;
                    this.itemType == qe && !/not.a.brand/i.test(u) && (!l || /Chrom/.test(l) && u != ta || l == rs && /WebView2/.test(u)) && (u = xt(u, av),
                    l = this.get(I),
                    l && !/Chrom/.test(l) && /Chrom/.test(u) || this.set(I, u).set(P, c).set(Ar, Ao(c)),
                    l = u),
                    this.itemType == ot && u == ta && this.set(P, c)
                }
            break;
        case It:
            var d = s[Ke];
            d && (d && s[Ws] == "64" && (d += "64"),
            To.call(this.data, d + ";", o));
            break;
        case _t:
            if (s[Z] && this.set(E, Z),
            s[T] && (this.set(T, s[T]),
            !this.get(E) || !this.get(R))) {
                var p = {};
                To.call(p, "droid 9; " + s[T] + ")", o),
                !this.get(E) && p.type && this.set(E, p.type),
                !this.get(R) && p.vendor && this.set(R, p.vendor)
            }
            if (s[un]) {
                var m;
                if (typeof s[un] != "string")
                    for (var y = 0; !m && y < s[un].length; )
                        m = xt(s[un][y++], sa);
                else
                    m = xt(s[un], sa);
                this.set(E, m)
            }
            break;
        case et:
            var v = s[On];
            if (v) {
                var f = s[Mi];
                v == ti && (f = parseInt(Ao(f), 10) >= 13 ? "11" : "10"),
                this.set(I, v).set(P, f)
            }
            this.get(I) == ti && s[T] == "Xbox" && this.set(I, "Xbox").set(P, void 0);
            break;
        case Tn:
            var x = this.data
              , S = function(A) {
                return x[A].getItem().setCH(s).parseCH().get()
            };
            this.set(qe, S(qe)).set(It, S(It)).set(_t, S(_t)).set(ot, S(ot)).set(et, S(et))
        }
        return this
    }
    ,
    Pt.call(this, [["itemType", e], ["ua", t], ["uaCH", r], ["rgxMap", n], ["data", cv(this, e)]]),
    this
}
function Ut(e, t, n) {
    if (typeof e === $n ? (_s(e, !0) ? (typeof t === $n && (n = t),
    t = e) : (n = e,
    t = void 0),
    e = void 0) : typeof e === ei && !_s(t, !0) && (n = t,
    t = void 0),
    n && typeof n.append === ks) {
        var r = {};
        n.forEach(function(a, u) {
            r[u] = a
        }),
        n = r
    }
    if (!(this instanceof Ut))
        return new Ut(e,t,n).getResult();
    var s = typeof e === ei ? e : n && n[Kl] ? n[Kl] : We && We.userAgent ? We.userAgent : Pn
      , o = new hu(n,!0)
      , i = t ? lv(oa, t) : oa
      , l = function(a) {
        return a == Tn ? function() {
            return new ia(a,s,i,o).set("ua", s).set(qe, this.getBrowser()).set(It, this.getCPU()).set(_t, this.getDevice()).set(ot, this.getEngine()).set(et, this.getOS()).get()
        }
        : function() {
            return new ia(a,s,i[a],o).parseUA().get()
        }
    };
    return Pt.call(this, [["getBrowser", l(qe)], ["getCPU", l(It)], ["getDevice", l(_t)], ["getEngine", l(ot)], ["getOS", l(et)], ["getResult", l(Tn)], ["getUA", function() {
        return s
    }
    ], ["setUA", function(a) {
        return Bn(a) && (s = a.length > Zo ? Ss(a, Zo) : a),
        this
    }
    ]]).setUA(s),
    this
}
Ut.VERSION = Qh;
Ut.BROWSER = Gs([I, P, Ar, E]);
Ut.CPU = Gs([Ke]);
Ut.DEVICE = Gs([T, R, E, cr, Z, Ae, ve, bt, ur]);
Ut.ENGINE = Ut.OS = Gs([I, P]);
const uv = "https://alpinejs.pro";
async function Jr() {
    const e = "DevTools Instance";
    try {
        const n = await new Ut().getResult().withClientHints()
          , r = n.browser.name
          , s = n.os.name;
        if (r && s)
            return `${r} on ${s}`;
        if (r)
            return `${r}`;
        if (s)
            return `Unknown Browser on ${s}`
    } catch (t) {
        console.error("Error generating device name:", t)
    }
    return e
}
const Js = Mn("license", () => {
    const e = X(null)
      , t = X(null)
      , n = X(null)
      , r = X([])
      , s = X(!1)
      , o = X(null)
      , i = X(uv)
      , l = te( () => !!n.value?.activated)
      , a = te( () => n.value?.instance?.id)
      , u = te( () => n.value?.license_key?.id);
    async function c(k, $) {
        s.value = !0,
        o.value = null;
        try {
            return (await Se({
                method: "POST",
                baseURL: i.value,
                url: k,
                data: $,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }
            })).data
        } catch (O) {
            throw O.response ? {
                status: O.response.status,
                data: O.response.data
            } : O.request ? {
                status: 0,
                data: {
                    error: "No response from server."
                }
            } : {
                status: 0,
                data: {
                    error: O.message || "Unknown error"
                }
            }
        } finally {
            s.value = !1
        }
    }
    async function d() {
        try {
            const k = "alpinejs_devtools_license"
              , $ = await kt.get(k);
            $ && (await kt.set(Ur, $),
            await kt.remove(k));
            const O = await kt.get(Ur);
            O && typeof O == "object" ? (e.value = O.licenseKey || null,
            t.value = O.deviceName && O.deviceName.trim() !== "" ? O.deviceName : await Jr(),
            n.value = O.licenseData || null,
            n.value?.license_key?.key && n.value?.instance?.id && await f(!1)) : (t.value = await Jr(),
            e.value = null,
            n.value = null,
            r.value = [])
        } catch (k) {
            console.error("Failed to load license from storage:", k),
            t.value = await Jr(),
            e.value = null,
            n.value = null,
            r.value = [],
            o.value = "Could not load license data."
        }
    }
    async function p() {
        const k = {
            licenseKey: e.value,
            deviceName: t.value,
            licenseData: n.value
        };
        try {
            await kt.set(Ur, k)
        } catch ($) {
            console.error("Failed to save license to storage:", $),
            o.value = "Could not save license data."
        }
    }
    async function m() {
        try {
            await kt.remove(Ur),
            e.value = null,
            n.value = null,
            r.value = [],
            t.value = await Jr(),
            o.value = null
        } catch (k) {
            console.error("Failed to clear license from storage:", k),
            o.value = "Could not clear license data."
        }
    }
    async function y() {
        if (!e.value || !t.value) {
            o.value = "License key and device name are required.";
            return
        }
        try {
            const k = await c("/api/v1/licenses/activate", {
                licenseKey: e.value,
                instanceName: t.value
            });
            if (k.activated)
                n.value = k,
                await p(),
                o.value = null,
                r.value = k.instances || [];
            else {
                const $ = {
                    activated: !1,
                    valid: !1,
                    license_key: k.license_key,
                    meta: k.meta
                };
                n.value = $,
                o.value = k.meta?.error || "License activation failed.",
                r.value = k.instances || []
            }
        } catch (k) {
            console.error("Activation error:", k);
            const $ = {
                activated: !1,
                valid: !1,
                meta: k?.data?.meta || {
                    error: k?.data?.error || "API error"
                }
            };
            k?.data?.license_key && ($.license_key = k.data.license_key),
            n.value = $,
            o.value = k?.data?.meta?.error || k?.data?.error || "An API error occurred during activation.",
            r.value = k?.data?.instances || [],
            (k?.data?.meta?.error?.includes("limit") || k?.data?.error?.includes("limit")) && (n.value?.license_key || k?.data?.license_key) && await x()
        }
    }
    async function v(k=null) {
        const $ = e.value
          , O = k ?? a.value;
        if (!$ || !O) {
            o.value = "Missing license key or instance ID for deactivation.";
            return
        }
        try {
            const U = await c("/api/v1/licenses/deactivate", {
                licenseKey: $,
                instanceId: O
            });
            U.deactivated ? (o.value = null,
            O === a.value ? await m() : await x()) : o.value = U.meta?.error || "License deactivation failed."
        } catch (U) {
            console.error("Deactivation error:", U),
            o.value = U?.data?.meta?.error || U?.data?.error || "An API error occurred during deactivation."
        }
    }
    async function f(k=!0) {
        const $ = n.value;
        if (!$?.license_key?.key || !$?.instance?.id) {
            n.value = {
                ...$,
                activated: !1,
                valid: !1
            };
            return
        }
        k || (s.value = !1);
        try {
            const O = await c("/api/v1/licenses/validate", {
                licenseKey: $.license_key.key,
                instanceId: $.instance.id
            });
            O.valid ? (n.value = {
                ...$,
                ...O,
                activated: !0
            },
            await p()) : (n.value = {
                ...$,
                activated: !1,
                valid: !1
            },
            o.value = O.meta?.error || "License validation failed.",
            await m())
        } catch (O) {
            console.error("Validation error:", O),
            O.status === 403 ? (n.value = {
                ...$,
                activated: !1,
                valid: !1,
                meta: {
                    error: O?.data?.error || "License is invalid"
                }
            },
            o.value = O?.data?.error || O?.data?.meta?.error || "Your license is no longer valid.",
            await m()) : console.log("Could not validate license due to a server or network issue. Assuming license is valid for now.")
        } finally {
            k || (s.value = !1)
        }
    }
    async function x() {
        const k = e.value;
        if (!k) {
            o.value = "Cannot fetch instances without a license key.",
            r.value = [];
            return
        }
        try {
            const $ = await c("/api/v1/licenses/instances", {
                licenseKey: k
            });
            Array.isArray($) ? r.value = $ : $.data && Array.isArray($.data) ? r.value = $.data : $.instances && Array.isArray($.instances) ? r.value = $.instances : r.value = []
        } catch ($) {
            console.error("Fetch instances error:", $),
            o.value = $?.data?.meta?.error || $?.data?.error || "Failed to fetch license instances.",
            r.value = []
        }
    }
    function S(k) {
        e.value = k,
        n.value = null,
        r.value = [],
        o.value = null
    }
    function A(k) {
        t.value = k,
        n.value && p()
    }
    return {
        licenseKey: e,
        deviceName: t,
        licenseData: n,
        instances: r,
        isLoading: s,
        errorMessage: o,
        apiBaseUrl: i,
        isActivated: l,
        currentInstanceId: a,
        licenseKeyId: u,
        loadLicenseFromStorage: d,
        activateLicense: y,
        deactivateLicense: v,
        validateLicense: f,
        fetchInstances: x,
        setLicenseKey: S,
        setDeviceName: A
    }
}
);
let Oo = null;
const dv = () => (fv(),
window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
function fv() {
    Oo || (Oo = window.matchMedia("(prefers-color-scheme: dark)"),
    Oo.addEventListener("change", e => {
        const t = Bt();
        t.systemTheme = e.matches ? "dark" : "light"
    }
    ))
}
const Bt = Mn("ui", {
    state: () => ({
        activeTab: "components",
        loadingText: "Checking Alpine.js version...",
        devtoolsVersion: "",
        alpineVersion: "",
        isLatest: !0,
        latest: "",
        systemTheme: dv(),
        lastNagScreenShownAt: null
    }),
    getters: {
        effectiveTheme(e) {
            const t = jn();
            return t.theme === "system" ? e.systemTheme : t.theme
        },
        shouldShowNagScreen() {
            return Js().isActivated ? !1 : this.lastNagScreenShownAt ? Date.now() - this.lastNagScreenShownAt > 1440 * 60 * 1e3 : !0
        }
    },
    actions: {
        async loadNagScreenFromStorage() {
            try {
                const e = await kt.get(Ji);
                e && (this.lastNagScreenShownAt = e)
            } catch (e) {
                console.error("Failed to load nag screen from storage:", e)
            }
        },
        async nagScreenShown() {
            this.lastNagScreenShownAt = Date.now();
            try {
                await kt.set(Ji, this.lastNagScreenShownAt)
            } catch (e) {
                console.error("Failed to save nag screen to storage:", e)
            }
        },
        setActiveTab(e) {
            this.activeTab = e
        },
        setVersions(e) {
            this.devtoolsVersion = e.devtoolsVersion,
            this.alpineVersion = e.alpineVersion
        }
    }
})
  , pv = Object.values(_a)
  , hv = Object.values(Ie);
let lt = null
  , Lt = null
  , Le = null;
const vv = 25 * 1e3
  , la = 5 * 1e3;
let ri, yr, ss, si;
function Ys({type: e, payload: t}) {
    if (!lt) {
        Y.warn("devtools -> inspector: No port available to send message:", e);
        return
    }
    if (e === Ie.EDIT_ATTRIBUTE && t?.componentId) {
        let n;
        try {
            if (n = parseInt(t.componentId, 10),
            isNaN(n)) {
                Y.error("Invalid component ID (NaN):", t.componentId);
                return
            }
        } catch (r) {
            Y.error("Error parsing component ID:", r);
            return
        }
        Y.log(`Editing component ID ${t.componentId} → ${n}, path: ${t.attributeSequence}`),
        t = {
            ...t,
            componentId: n
        }
    }
    Y.log(`devtools -> inspector: ${e}`, t),
    lt.postMessage({
        source: _a.DEVTOOLS,
        type: e,
        payload: t
    })
}
function mv() {
    Lt !== null && clearInterval(Lt),
    Lt = setInterval( () => {
        if (!lt) {
            vu();
            return
        }
        Ys({
            type: Ie.HEARTBEAT,
            payload: {}
        })
    }
    , vv),
    Y.log("Connection Service: Started heartbeat interval")
}
function vu() {
    Lt !== null && (clearInterval(Lt),
    Lt = null,
    Y.log("Connection Service: Stopped heartbeat interval"))
}
function gv(e) {
    if (!pv.includes(e.source)) {
        Y.log("Unhandled message source:", e.source);
        return
    }
    if (!hv.includes(e.type)) {
        Y.log("Unhandled message type:", e.type);
        return
    }
    if (!ri || !yr || !ss || !si) {
        Y.error("Stores not available in handleMessage");
        return
    }
    const t = e.payload || {};
    switch (e?.type) {
    case Ie.HEARTBEAT_RESPONSE:
        Y.log("Connection Service: Received heartbeat response");
        break;
    case Ie.SET_VERSION:
        ri.setVersions({
            alpineVersion: t.version,
            devtoolsVersion: "1.0.2"
        });
        break;
    case Ie.SET_COMPONENTS:
        yr.setComponents(t.components || []);
        break;
    case Ie.SET_DATA:
        const n = JSON.parse(t.data);
        yr.updateComponentData(t.componentId, n);
        break;
    case Ie.ADD_ERROR:
        Y.log(`inspector -> devtools: ${Ie.ADD_ERROR}`, t);
        break;
    case Ie.SET_STORES:
        ss.setStores(t.stores || []);
        break;
    case Ie.SET_STORE_DATA:
        const r = JSON.parse(t.data);
        ss.updateStoreData(t.storeId, t.storeName, r);
        break;
    case Ie.EVENT_DISPATCHED:
        Y.log(`inspector -> devtools: ${Ie.EVENT_DISPATCHED}`, t);
        try {
            const s = JSON.parse(t);
            typeof s == "object" && s !== null && s.event && s.metadata ? si.addEvent(s) : Y.error("Connection Service: Invalid structure for EVENT_DISPATCHED payload:", s)
        } catch (s) {
            Y.error("Connection Service: Failed to parse EVENT_DISPATCHED payload:", s, "Raw payload:", t)
        }
        break;
    default:
        Y.log("Unhandled message type in Connection Service:", e.type)
    }
}
function mu(e) {
    lt = e,
    Y.log("Setting up port connection..."),
    yr.resetComponents();
    let t = !1;
    lt.onDisconnect.addListener( () => {
        t || (t = !0,
        Y.warn("Port disconnected."),
        lt = null,
        vu(),
        Y.log(`Will attempt to reconnect every ${la / 1e3} seconds...`),
        Le !== null && clearInterval(Le),
        Le = setInterval(bv, la))
    }
    ),
    lt.onMessage.addListener(n => {
        if (t) {
            Y.warn("Ignoring message on disconnected port:", n.type);
            return
        }
        Y.log("Message received:", n.type),
        gv(n)
    }
    ),
    mv(),
    Ys({
        type: Ie.DEVTOOLS_READY,
        payload: {}
    }),
    Y.log("Port connection setup complete.")
}
function bv() {
    if (lt || Le === null) {
        Y.log("Reconnect attempt skipped (already connected or interval stopped)."),
        Le !== null && (clearInterval(Le),
        Le = null);
        return
    }
    Y.log("Attempting to reconnect...");
    try {
        const e = he.runtime.connect({
            name: "" + he.devtools.inspectedWindow.tabId
        });
        if (he.runtime.lastError) {
            Y.warn("Reconnect failed:", he.runtime.lastError.message || "Unknown error");
            return
        }
        Y.log("Reconnection successful!"),
        Le !== null && (clearInterval(Le),
        Le = null),
        mu(e)
    } catch (e) {
        Y.error("Error during reconnect attempt:", e)
    }
}
function yv() {
    if (lt) {
        try {
            lt.disconnect()
        } catch {}
        lt = null
    }
    Lt !== null && (clearInterval(Lt),
    Lt = null),
    Le !== null && (clearInterval(Le),
    Le = null),
    Y.log("Connection service cleaned up")
}
function oi() {
    yv(),
    ri = Bt(),
    yr = Vn(),
    ss = Xs(),
    si = gu(),
    he.devtools.inspectedWindow.eval(`!!window.${Lu}`, async (e, t) => {
        if (t) {
            Y.error("Error checking inspector initialization:", t);
            return
        }
        if (!e) {
            Y.log("Inspector not found, requesting injection from background...");
            try {
                await he.runtime.sendMessage({
                    type: Ie.INJECT_INSPECTOR,
                    payload: {
                        tabId: he.devtools.inspectedWindow.tabId
                    }
                }),
                Y.log("Inspector injection requested from background")
            } catch (r) {
                Y.error("Failed to request inspector script injection:", r);
                return
            }
        }
        Y.log("Connecting to runtime...");
        const n = he.runtime.connect({
            name: "" + he.devtools.inspectedWindow.tabId
        });
        if (he.runtime.lastError) {
            Y.error("Initial connection failed:", he.runtime.lastError.message || "Unknown error");
            return
        }
        Y.log("Initial connection established."),
        Le !== null && (clearInterval(Le),
        Le = null),
        mu(n)
    }
    )
}
const Vn = Mn("components", {
    state: () => ({
        components: [],
        selectedComponentId: null,
        searchQuery: "",
        showInactive: !1
    }),
    getters: {
        filteredComponents(e) {
            return e.components
        },
        selectedComponent(e) {
            return e.selectedComponentId && e.components.find(t => t.id === e.selectedComponentId) || null
        },
        selectedComponentFlattenedData() {
            return !this.selectedComponent || !this.selectedComponent.data ? null : Di(this.selectedComponent.data)
        },
        sortedAttributes() {
            return this.selectedComponentFlattenedData ? this.selectedComponentFlattenedData.slice().sort( (e, t) => e.name.localeCompare(t.name)) : null
        }
    },
    actions: {
        resetComponents() {
            this.components = [],
            this.selectedComponentId = null,
            this.searchQuery = ""
        },
        setComponents(e) {
            const t = this.components.reduce( (n, r) => (n[r.id] = r,
            n), {});
            this.components = e.map(n => {
                const r = t[n.id];
                return {
                    ...n,
                    data: r?.data || n.data,
                    isOpened: r ? r.isOpened : !1
                }
            }
            )
        },
        updateComponentData(e, t) {
            const n = this.components.find(r => r.id === e);
            n && (n.data = t)
        },
        selectComponent(e) {
            if (this.selectedComponentId) {
                const t = this.components.find(n => n.id === this.selectedComponentId);
                t && (t.isOpened = !1)
            }
            if (this.selectedComponentId = e,
            e) {
                const t = this.components.find(n => n.id === e);
                t && (t.isOpened = !0)
            }
        },
        setSearchQuery(e) {
            this.searchQuery = e
        },
        toggleShowInactive() {
            this.showInactive = !this.showInactive
        },
        editComponentAttribute(e, t, n) {
            Ys({
                type: Ie.EDIT_ATTRIBUTE,
                payload: {
                    componentId: e,
                    attributeSequence: t,
                    attributeValue: n
                }
            })
        }
    }
})
  , Xs = Mn("stores", {
    state: () => ({
        stores: [],
        selectedStoreId: null,
        searchQuery: ""
    }),
    getters: {
        filteredStores(e) {
            return e.stores
        },
        selectedStore(e) {
            return e.selectedStoreId === null ? null : e.stores.find(t => t.id === e.selectedStoreId) || null
        },
        selectedStoreFlattenedData() {
            return !this.selectedStore || !this.selectedStore.data ? null : Di(this.selectedStore.data)
        },
        sortedAttributes() {
            return this.selectedStoreFlattenedData ? this.selectedStoreFlattenedData.slice().sort( (e, t) => e.name.localeCompare(t.name)) : null
        }
    },
    actions: {
        resetStores() {
            this.stores = [],
            this.selectedStoreId = null,
            this.searchQuery = ""
        },
        setStores(e) {
            const t = this.stores.reduce( (n, r) => (n[r.id] = r,
            n), {});
            this.stores = e.map(n => {
                const r = t[n.id];
                return {
                    ...n,
                    data: r?.data || n.data,
                    isOpened: r ? r.isOpened : !1
                }
            }
            )
        },
        updateStoreData(e, t, n) {
            const r = this.stores.find(s => s.id === e);
            r && (r.data = n)
        },
        selectStore(e) {
            if (this.selectedStoreId !== null) {
                const t = this.stores.find(n => n.id === this.selectedStoreId);
                t && (t.isOpened = !1)
            }
            if (this.selectedStoreId = e,
            e !== null) {
                const t = this.stores.find(n => n.id === e);
                t && (t.isOpened = !0)
            }
        },
        setSearchQuery(e) {
            this.searchQuery = e
        },
        editStoreAttribute(e, t, n) {
            Ys({
                type: Ie.EDIT_STORE_VALUE,
                payload: {
                    storeName: e,
                    attributeSequence: t,
                    attributeValue: n
                }
            })
        }
    }
})
  , gu = Mn("events", {
    state: () => ({
        events: [],
        isRecording: !0,
        nextEventId: 1
    }),
    getters: {
        getEvents(e) {
            return e.events
        },
        isRecordingActive(e) {
            return e.isRecording
        },
        eventCount(e) {
            return e.events.length
        }
    },
    actions: {
        addEvent(e) {
            if (!this.isRecording)
                return;
            const t = typeof e.event?.type == "string" ? e.event.type : "unknown"
              , n = {
                id: this.nextEventId++,
                type: t,
                event: e.event,
                metadata: e.metadata
            };
            this.events.unshift(n)
        },
        toggleRecording() {
            this.isRecording = !this.isRecording
        },
        clearEvents() {
            this.events = [],
            this.nextEventId = 1
        },
        linkEventToComponent(e) {
            const t = this.events.find(n => n.id === e.eventId);
            t && (t.metadata.alpineComponentId = e.componentId,
            t.event && typeof t.event == "object" && (t.event.alpineComponentId = e.componentId))
        }
    }
})
  , ji = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r,s] of t)
        n[r] = s;
    return n
}
  , xv = {}
  , wv = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 460 460",
    fill: "currentColor",
    stroke: "none"
};
function kv(e, t) {
    return C(),
    N("svg", wv, t[0] || (t[0] = [b("polygon", {
        class: "transform text-alpine-400 transition-colors duration-700 dark:text-ice-500",
        points: "50,230 140,140 320,320 140,320"
    }, null, -1), b("polygon", {
        class: "transform text-silver-600 transition-colors duration-700 dark:text-silver-500",
        points: "320,140 410,230 320,320 230,230"
    }, null, -1)]))
}
const bu = ji(xv, [["render", kv]])
  , yu = /^[a-z0-9]+(-[a-z0-9]+)*$/
  , Qs = (e, t, n, r="") => {
    const s = e.split(":");
    if (e.slice(0, 1) === "@") {
        if (s.length < 2 || s.length > 3)
            return null;
        r = s.shift().slice(1)
    }
    if (s.length > 3 || !s.length)
        return null;
    if (s.length > 1) {
        const l = s.pop()
          , a = s.pop()
          , u = {
            provider: s.length > 0 ? s[0] : r,
            prefix: a,
            name: l
        };
        return t && !os(u) ? null : u
    }
    const o = s[0]
      , i = o.split("-");
    if (i.length > 1) {
        const l = {
            provider: r,
            prefix: i.shift(),
            name: i.join("-")
        };
        return t && !os(l) ? null : l
    }
    if (n && r === "") {
        const l = {
            provider: r,
            prefix: "",
            name: o
        };
        return t && !os(l, n) ? null : l
    }
    return null
}
  , os = (e, t) => e ? !!((t && e.prefix === "" || e.prefix) && e.name) : !1
  , xu = Object.freeze({
    left: 0,
    top: 0,
    width: 16,
    height: 16
})
  , Es = Object.freeze({
    rotate: 0,
    vFlip: !1,
    hFlip: !1
})
  , Zs = Object.freeze({
    ...xu,
    ...Es
})
  , ii = Object.freeze({
    ...Zs,
    body: "",
    hidden: !1
});
function _v(e, t) {
    const n = {};
    !e.hFlip != !t.hFlip && (n.hFlip = !0),
    !e.vFlip != !t.vFlip && (n.vFlip = !0);
    const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
    return r && (n.rotate = r),
    n
}
function aa(e, t) {
    const n = _v(e, t);
    for (const r in ii)
        r in Es ? r in e && !(r in n) && (n[r] = Es[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
    return n
}
function Sv(e, t) {
    const n = e.icons
      , r = e.aliases || Object.create(null)
      , s = Object.create(null);
    function o(i) {
        if (n[i])
            return s[i] = [];
        if (!(i in s)) {
            s[i] = null;
            const l = r[i] && r[i].parent
              , a = l && o(l);
            a && (s[i] = [l].concat(a))
        }
        return s[i]
    }
    return Object.keys(n).concat(Object.keys(r)).forEach(o),
    s
}
function Ev(e, t, n) {
    const r = e.icons
      , s = e.aliases || Object.create(null);
    let o = {};
    function i(l) {
        o = aa(r[l] || s[l], o)
    }
    return i(t),
    n.forEach(i),
    aa(e, o)
}
function wu(e, t) {
    const n = [];
    if (typeof e != "object" || typeof e.icons != "object")
        return n;
    e.not_found instanceof Array && e.not_found.forEach(s => {
        t(s, null),
        n.push(s)
    }
    );
    const r = Sv(e);
    for (const s in r) {
        const o = r[s];
        o && (t(s, Ev(e, s, o)),
        n.push(s))
    }
    return n
}
const Cv = {
    provider: "",
    aliases: {},
    not_found: {},
    ...xu
};
function Ro(e, t) {
    for (const n in t)
        if (n in e && typeof e[n] != typeof t[n])
            return !1;
    return !0
}
function ku(e) {
    if (typeof e != "object" || e === null)
        return null;
    const t = e;
    if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !Ro(e, Cv))
        return null;
    const n = t.icons;
    for (const s in n) {
        const o = n[s];
        if (!s || typeof o.body != "string" || !Ro(o, ii))
            return null
    }
    const r = t.aliases || Object.create(null);
    for (const s in r) {
        const o = r[s]
          , i = o.parent;
        if (!s || typeof i != "string" || !n[i] && !r[i] || !Ro(o, ii))
            return null
    }
    return t
}
const ca = Object.create(null);
function Av(e, t) {
    return {
        provider: e,
        prefix: t,
        icons: Object.create(null),
        missing: new Set
    }
}
function Nn(e, t) {
    const n = ca[e] || (ca[e] = Object.create(null));
    return n[t] || (n[t] = Av(e, t))
}
function _u(e, t) {
    return ku(t) ? wu(t, (n, r) => {
        r ? e.icons[n] = r : e.missing.add(n)
    }
    ) : []
}
function Tv(e, t, n) {
    try {
        if (typeof n.body == "string")
            return e.icons[t] = {
                ...n
            },
            !0
    } catch {}
    return !1
}
let Tr = !1;
function Su(e) {
    return typeof e == "boolean" && (Tr = e),
    Tr
}
function Ov(e) {
    const t = typeof e == "string" ? Qs(e, !0, Tr) : e;
    if (t) {
        const n = Nn(t.provider, t.prefix)
          , r = t.name;
        return n.icons[r] || (n.missing.has(r) ? null : void 0)
    }
}
function Rv(e, t) {
    const n = Qs(e, !0, Tr);
    if (!n)
        return !1;
    const r = Nn(n.provider, n.prefix);
    return t ? Tv(r, n.name, t) : (r.missing.add(n.name),
    !0)
}
function Iv(e, t) {
    if (typeof e != "object")
        return !1;
    if (typeof t != "string" && (t = e.provider || ""),
    Tr && !t && !e.prefix) {
        let s = !1;
        return ku(e) && (e.prefix = "",
        wu(e, (o, i) => {
            Rv(o, i) && (s = !0)
        }
        )),
        s
    }
    const n = e.prefix;
    if (!os({
        prefix: n,
        name: "a"
    }))
        return !1;
    const r = Nn(t, n);
    return !!_u(r, e)
}
const Eu = Object.freeze({
    width: null,
    height: null
})
  , Cu = Object.freeze({
    ...Eu,
    ...Es
})
  , Dv = /(-?[0-9.]*[0-9]+[0-9.]*)/g
  , Pv = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function ua(e, t, n) {
    if (t === 1)
        return e;
    if (n = n || 100,
    typeof e == "number")
        return Math.ceil(e * t * n) / n;
    if (typeof e != "string")
        return e;
    const r = e.split(Dv);
    if (r === null || !r.length)
        return e;
    const s = [];
    let o = r.shift()
      , i = Pv.test(o);
    for (; ; ) {
        if (i) {
            const l = parseFloat(o);
            isNaN(l) ? s.push(o) : s.push(Math.ceil(l * t * n) / n)
        } else
            s.push(o);
        if (o = r.shift(),
        o === void 0)
            return s.join("");
        i = !i
    }
}
function $v(e, t="defs") {
    let n = "";
    const r = e.indexOf("<" + t);
    for (; r >= 0; ) {
        const s = e.indexOf(">", r)
          , o = e.indexOf("</" + t);
        if (s === -1 || o === -1)
            break;
        const i = e.indexOf(">", o);
        if (i === -1)
            break;
        n += e.slice(s + 1, o).trim(),
        e = e.slice(0, r).trim() + e.slice(i + 1)
    }
    return {
        defs: n,
        content: e
    }
}
function Lv(e, t) {
    return e ? "<defs>" + e + "</defs>" + t : t
}
function Nv(e, t, n) {
    const r = $v(e);
    return Lv(r.defs, t + r.content + n)
}
const Fv = e => e === "unset" || e === "undefined" || e === "none";
function Mv(e, t) {
    const n = {
        ...Zs,
        ...e
    }
      , r = {
        ...Cu,
        ...t
    }
      , s = {
        left: n.left,
        top: n.top,
        width: n.width,
        height: n.height
    };
    let o = n.body;
    [n, r].forEach(v => {
        const f = []
          , x = v.hFlip
          , S = v.vFlip;
        let A = v.rotate;
        x ? S ? A += 2 : (f.push("translate(" + (s.width + s.left).toString() + " " + (0 - s.top).toString() + ")"),
        f.push("scale(-1 1)"),
        s.top = s.left = 0) : S && (f.push("translate(" + (0 - s.left).toString() + " " + (s.height + s.top).toString() + ")"),
        f.push("scale(1 -1)"),
        s.top = s.left = 0);
        let k;
        switch (A < 0 && (A -= Math.floor(A / 4) * 4),
        A = A % 4,
        A) {
        case 1:
            k = s.height / 2 + s.top,
            f.unshift("rotate(90 " + k.toString() + " " + k.toString() + ")");
            break;
        case 2:
            f.unshift("rotate(180 " + (s.width / 2 + s.left).toString() + " " + (s.height / 2 + s.top).toString() + ")");
            break;
        case 3:
            k = s.width / 2 + s.left,
            f.unshift("rotate(-90 " + k.toString() + " " + k.toString() + ")");
            break
        }
        A % 2 === 1 && (s.left !== s.top && (k = s.left,
        s.left = s.top,
        s.top = k),
        s.width !== s.height && (k = s.width,
        s.width = s.height,
        s.height = k)),
        f.length && (o = Nv(o, '<g transform="' + f.join(" ") + '">', "</g>"))
    }
    );
    const i = r.width
      , l = r.height
      , a = s.width
      , u = s.height;
    let c, d;
    i === null ? (d = l === null ? "1em" : l === "auto" ? u : l,
    c = ua(d, a / u)) : (c = i === "auto" ? a : i,
    d = l === null ? ua(c, u / a) : l === "auto" ? u : l);
    const p = {}
      , m = (v, f) => {
        Fv(f) || (p[v] = f.toString())
    }
    ;
    m("width", c),
    m("height", d);
    const y = [s.left, s.top, a, u];
    return p.viewBox = y.join(" "),
    {
        attributes: p,
        viewBox: y,
        body: o
    }
}
const jv = /\sid="(\S+)"/g
  , Uv = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Hv = 0;
function Bv(e, t=Uv) {
    const n = [];
    let r;
    for (; r = jv.exec(e); )
        n.push(r[1]);
    if (!n.length)
        return e;
    const s = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
    return n.forEach(o => {
        const i = typeof t == "function" ? t(o) : t + (Hv++).toString()
          , l = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        e = e.replace(new RegExp('([#;"])(' + l + ')([")]|\\.[a-z])',"g"), "$1" + i + s + "$3")
    }
    ),
    e = e.replace(new RegExp(s,"g"), ""),
    e
}
const li = Object.create(null);
function Vv(e, t) {
    li[e] = t
}
function ai(e) {
    return li[e] || li[""]
}
function Ui(e) {
    let t;
    if (typeof e.resources == "string")
        t = [e.resources];
    else if (t = e.resources,
    !(t instanceof Array) || !t.length)
        return null;
    return {
        resources: t,
        path: e.path || "/",
        maxURL: e.maxURL || 500,
        rotate: e.rotate || 750,
        timeout: e.timeout || 5e3,
        random: e.random === !0,
        index: e.index || 0,
        dataAfterTimeout: e.dataAfterTimeout !== !1
    }
}
const Hi = Object.create(null)
  , ir = ["https://api.simplesvg.com", "https://api.unisvg.com"]
  , is = [];
for (; ir.length > 0; )
    ir.length === 1 || Math.random() > .5 ? is.push(ir.shift()) : is.push(ir.pop());
Hi[""] = Ui({
    resources: ["https://api.iconify.design"].concat(is)
});
function zv(e, t) {
    const n = Ui(t);
    return n === null ? !1 : (Hi[e] = n,
    !0)
}
function Bi(e) {
    return Hi[e]
}
const qv = () => {
    let e;
    try {
        if (e = fetch,
        typeof e == "function")
            return e
    } catch {}
}
;
let da = qv();
function Kv(e, t) {
    const n = Bi(e);
    if (!n)
        return 0;
    let r;
    if (!n.maxURL)
        r = 0;
    else {
        let s = 0;
        n.resources.forEach(i => {
            s = Math.max(s, i.length)
        }
        );
        const o = t + ".json?icons=";
        r = n.maxURL - s - n.path.length - o.length
    }
    return r
}
function Wv(e) {
    return e === 404
}
const Gv = (e, t, n) => {
    const r = []
      , s = Kv(e, t)
      , o = "icons";
    let i = {
        type: o,
        provider: e,
        prefix: t,
        icons: []
    }
      , l = 0;
    return n.forEach( (a, u) => {
        l += a.length + 1,
        l >= s && u > 0 && (r.push(i),
        i = {
            type: o,
            provider: e,
            prefix: t,
            icons: []
        },
        l = a.length),
        i.icons.push(a)
    }
    ),
    r.push(i),
    r
}
;
function Jv(e) {
    if (typeof e == "string") {
        const t = Bi(e);
        if (t)
            return t.path
    }
    return "/"
}
const Yv = (e, t, n) => {
    if (!da) {
        n("abort", 424);
        return
    }
    let r = Jv(t.provider);
    switch (t.type) {
    case "icons":
        {
            const o = t.prefix
              , l = t.icons.join(",")
              , a = new URLSearchParams({
                icons: l
            });
            r += o + ".json?" + a.toString();
            break
        }
    case "custom":
        {
            const o = t.uri;
            r += o.slice(0, 1) === "/" ? o.slice(1) : o;
            break
        }
    default:
        n("abort", 400);
        return
    }
    let s = 503;
    da(e + r).then(o => {
        const i = o.status;
        if (i !== 200) {
            setTimeout( () => {
                n(Wv(i) ? "abort" : "next", i)
            }
            );
            return
        }
        return s = 501,
        o.json()
    }
    ).then(o => {
        if (typeof o != "object" || o === null) {
            setTimeout( () => {
                o === 404 ? n("abort", o) : n("next", s)
            }
            );
            return
        }
        setTimeout( () => {
            n("success", o)
        }
        )
    }
    ).catch( () => {
        n("next", s)
    }
    )
}
  , Xv = {
    prepare: Gv,
    send: Yv
};
function Qv(e) {
    const t = {
        loaded: [],
        missing: [],
        pending: []
    }
      , n = Object.create(null);
    e.sort( (s, o) => s.provider !== o.provider ? s.provider.localeCompare(o.provider) : s.prefix !== o.prefix ? s.prefix.localeCompare(o.prefix) : s.name.localeCompare(o.name));
    let r = {
        provider: "",
        prefix: "",
        name: ""
    };
    return e.forEach(s => {
        if (r.name === s.name && r.prefix === s.prefix && r.provider === s.provider)
            return;
        r = s;
        const o = s.provider
          , i = s.prefix
          , l = s.name
          , a = n[o] || (n[o] = Object.create(null))
          , u = a[i] || (a[i] = Nn(o, i));
        let c;
        l in u.icons ? c = t.loaded : i === "" || u.missing.has(l) ? c = t.missing : c = t.pending;
        const d = {
            provider: o,
            prefix: i,
            name: l
        };
        c.push(d)
    }
    ),
    t
}
function Au(e, t) {
    e.forEach(n => {
        const r = n.loaderCallbacks;
        r && (n.loaderCallbacks = r.filter(s => s.id !== t))
    }
    )
}
function Zv(e) {
    e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0,
    setTimeout( () => {
        e.pendingCallbacksFlag = !1;
        const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
        if (!t.length)
            return;
        let n = !1;
        const r = e.provider
          , s = e.prefix;
        t.forEach(o => {
            const i = o.icons
              , l = i.pending.length;
            i.pending = i.pending.filter(a => {
                if (a.prefix !== s)
                    return !0;
                const u = a.name;
                if (e.icons[u])
                    i.loaded.push({
                        provider: r,
                        prefix: s,
                        name: u
                    });
                else if (e.missing.has(u))
                    i.missing.push({
                        provider: r,
                        prefix: s,
                        name: u
                    });
                else
                    return n = !0,
                    !0;
                return !1
            }
            ),
            i.pending.length !== l && (n || Au([e], o.id),
            o.callback(i.loaded.slice(0), i.missing.slice(0), i.pending.slice(0), o.abort))
        }
        )
    }
    ))
}
let em = 0;
function tm(e, t, n) {
    const r = em++
      , s = Au.bind(null, n, r);
    if (!t.pending.length)
        return s;
    const o = {
        id: r,
        icons: t,
        callback: e,
        abort: s
    };
    return n.forEach(i => {
        (i.loaderCallbacks || (i.loaderCallbacks = [])).push(o)
    }
    ),
    s
}
function nm(e, t=!0, n=!1) {
    const r = [];
    return e.forEach(s => {
        const o = typeof s == "string" ? Qs(s, t, n) : s;
        o && r.push(o)
    }
    ),
    r
}
var rm = {
    resources: [],
    index: 0,
    timeout: 2e3,
    rotate: 750,
    random: !1,
    dataAfterTimeout: !1
};
function sm(e, t, n, r) {
    const s = e.resources.length
      , o = e.random ? Math.floor(Math.random() * s) : e.index;
    let i;
    if (e.random) {
        let O = e.resources.slice(0);
        for (i = []; O.length > 1; ) {
            const U = Math.floor(Math.random() * O.length);
            i.push(O[U]),
            O = O.slice(0, U).concat(O.slice(U + 1))
        }
        i = i.concat(O)
    } else
        i = e.resources.slice(o).concat(e.resources.slice(0, o));
    const l = Date.now();
    let a = "pending", u = 0, c, d = null, p = [], m = [];
    typeof r == "function" && m.push(r);
    function y() {
        d && (clearTimeout(d),
        d = null)
    }
    function v() {
        a === "pending" && (a = "aborted"),
        y(),
        p.forEach(O => {
            O.status === "pending" && (O.status = "aborted")
        }
        ),
        p = []
    }
    function f(O, U) {
        U && (m = []),
        typeof O == "function" && m.push(O)
    }
    function x() {
        return {
            startTime: l,
            payload: t,
            status: a,
            queriesSent: u,
            queriesPending: p.length,
            subscribe: f,
            abort: v
        }
    }
    function S() {
        a = "failed",
        m.forEach(O => {
            O(void 0, c)
        }
        )
    }
    function A() {
        p.forEach(O => {
            O.status === "pending" && (O.status = "aborted")
        }
        ),
        p = []
    }
    function k(O, U, V) {
        const D = U !== "success";
        switch (p = p.filter(se => se !== O),
        a) {
        case "pending":
            break;
        case "failed":
            if (D || !e.dataAfterTimeout)
                return;
            break;
        default:
            return
        }
        if (U === "abort") {
            c = V,
            S();
            return
        }
        if (D) {
            c = V,
            p.length || (i.length ? $() : S());
            return
        }
        if (y(),
        A(),
        !e.random) {
            const se = e.resources.indexOf(O.resource);
            se !== -1 && se !== e.index && (e.index = se)
        }
        a = "completed",
        m.forEach(se => {
            se(V)
        }
        )
    }
    function $() {
        if (a !== "pending")
            return;
        y();
        const O = i.shift();
        if (O === void 0) {
            if (p.length) {
                d = setTimeout( () => {
                    y(),
                    a === "pending" && (A(),
                    S())
                }
                , e.timeout);
                return
            }
            S();
            return
        }
        const U = {
            status: "pending",
            resource: O,
            callback: (V, D) => {
                k(U, V, D)
            }
        };
        p.push(U),
        u++,
        d = setTimeout($, e.rotate),
        n(O, t, U.callback)
    }
    return setTimeout($),
    x
}
function Tu(e) {
    const t = {
        ...rm,
        ...e
    };
    let n = [];
    function r() {
        n = n.filter(l => l().status === "pending")
    }
    function s(l, a, u) {
        const c = sm(t, l, a, (d, p) => {
            r(),
            u && u(d, p)
        }
        );
        return n.push(c),
        c
    }
    function o(l) {
        return n.find(a => l(a)) || null
    }
    return {
        query: s,
        find: o,
        setIndex: l => {
            t.index = l
        }
        ,
        getIndex: () => t.index,
        cleanup: r
    }
}
function fa() {}
const Io = Object.create(null);
function om(e) {
    if (!Io[e]) {
        const t = Bi(e);
        if (!t)
            return;
        const n = Tu(t)
          , r = {
            config: t,
            redundancy: n
        };
        Io[e] = r
    }
    return Io[e]
}
function im(e, t, n) {
    let r, s;
    if (typeof e == "string") {
        const o = ai(e);
        if (!o)
            return n(void 0, 424),
            fa;
        s = o.send;
        const i = om(e);
        i && (r = i.redundancy)
    } else {
        const o = Ui(e);
        if (o) {
            r = Tu(o);
            const i = e.resources ? e.resources[0] : ""
              , l = ai(i);
            l && (s = l.send)
        }
    }
    return !r || !s ? (n(void 0, 424),
    fa) : r.query(t, s, n)().abort
}
function pa() {}
function lm(e) {
    e.iconsLoaderFlag || (e.iconsLoaderFlag = !0,
    setTimeout( () => {
        e.iconsLoaderFlag = !1,
        Zv(e)
    }
    ))
}
function am(e) {
    const t = []
      , n = [];
    return e.forEach(r => {
        (r.match(yu) ? t : n).push(r)
    }
    ),
    {
        valid: t,
        invalid: n
    }
}
function lr(e, t, n) {
    function r() {
        const s = e.pendingIcons;
        t.forEach(o => {
            s && s.delete(o),
            e.icons[o] || e.missing.add(o)
        }
        )
    }
    if (n && typeof n == "object")
        try {
            if (!_u(e, n).length) {
                r();
                return
            }
        } catch (s) {
            console.error(s)
        }
    r(),
    lm(e)
}
function ha(e, t) {
    e instanceof Promise ? e.then(n => {
        t(n)
    }
    ).catch( () => {
        t(null)
    }
    ) : t(e)
}
function cm(e, t) {
    e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t,
    e.iconsQueueFlag || (e.iconsQueueFlag = !0,
    setTimeout( () => {
        e.iconsQueueFlag = !1;
        const {provider: n, prefix: r} = e
          , s = e.iconsToLoad;
        if (delete e.iconsToLoad,
        !s || !s.length)
            return;
        const o = e.loadIcon;
        if (e.loadIcons && (s.length > 1 || !o)) {
            ha(e.loadIcons(s, r, n), c => {
                lr(e, s, c)
            }
            );
            return
        }
        if (o) {
            s.forEach(c => {
                const d = o(c, r, n);
                ha(d, p => {
                    const m = p ? {
                        prefix: r,
                        icons: {
                            [c]: p
                        }
                    } : null;
                    lr(e, [c], m)
                }
                )
            }
            );
            return
        }
        const {valid: i, invalid: l} = am(s);
        if (l.length && lr(e, l, null),
        !i.length)
            return;
        const a = r.match(yu) ? ai(n) : null;
        if (!a) {
            lr(e, i, null);
            return
        }
        a.prepare(n, r, i).forEach(c => {
            im(n, c, d => {
                lr(e, c.icons, d)
            }
            )
        }
        )
    }
    ))
}
const um = (e, t) => {
    const n = nm(e, !0, Su())
      , r = Qv(n);
    if (!r.pending.length) {
        let a = !0;
        return t && setTimeout( () => {
            a && t(r.loaded, r.missing, r.pending, pa)
        }
        ),
        () => {
            a = !1
        }
    }
    const s = Object.create(null)
      , o = [];
    let i, l;
    return r.pending.forEach(a => {
        const {provider: u, prefix: c} = a;
        if (c === l && u === i)
            return;
        i = u,
        l = c,
        o.push(Nn(u, c));
        const d = s[u] || (s[u] = Object.create(null));
        d[c] || (d[c] = [])
    }
    ),
    r.pending.forEach(a => {
        const {provider: u, prefix: c, name: d} = a
          , p = Nn(u, c)
          , m = p.pendingIcons || (p.pendingIcons = new Set);
        m.has(d) || (m.add(d),
        s[u][c].push(d))
    }
    ),
    o.forEach(a => {
        const u = s[a.provider][a.prefix];
        u.length && cm(a, u)
    }
    ),
    t ? tm(t, r, o) : pa
}
;
function dm(e, t) {
    const n = {
        ...e
    };
    for (const r in t) {
        const s = t[r]
          , o = typeof s;
        r in Eu ? (s === null || s && (o === "string" || o === "number")) && (n[r] = s) : o === typeof n[r] && (n[r] = r === "rotate" ? s % 4 : s)
    }
    return n
}
const fm = /[\s,]+/;
function pm(e, t) {
    t.split(fm).forEach(n => {
        switch (n.trim()) {
        case "horizontal":
            e.hFlip = !0;
            break;
        case "vertical":
            e.vFlip = !0;
            break
        }
    }
    )
}
function hm(e, t=0) {
    const n = e.replace(/^-?[0-9.]*/, "");
    function r(s) {
        for (; s < 0; )
            s += 4;
        return s % 4
    }
    if (n === "") {
        const s = parseInt(e);
        return isNaN(s) ? 0 : r(s)
    } else if (n !== e) {
        let s = 0;
        switch (n) {
        case "%":
            s = 25;
            break;
        case "deg":
            s = 90
        }
        if (s) {
            let o = parseFloat(e.slice(0, e.length - n.length));
            return isNaN(o) ? 0 : (o = o / s,
            o % 1 === 0 ? r(o) : 0)
        }
    }
    return t
}
function vm(e, t) {
    let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for (const r in t)
        n += " " + r + '="' + t[r] + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>"
}
function mm(e) {
    return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ")
}
function gm(e) {
    return "data:image/svg+xml," + mm(e)
}
function bm(e) {
    return 'url("' + gm(e) + '")'
}
const va = {
    ...Cu,
    inline: !1
}
  , ym = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "aria-hidden": !0,
    role: "img"
}
  , xm = {
    display: "inline-block"
}
  , ci = {
    backgroundColor: "currentColor"
}
  , Ou = {
    backgroundColor: "transparent"
}
  , ma = {
    Image: "var(--svg)",
    Repeat: "no-repeat",
    Size: "100% 100%"
}
  , ga = {
    webkitMask: ci,
    mask: ci,
    background: Ou
};
for (const e in ga) {
    const t = ga[e];
    for (const n in ma)
        t[e + n] = ma[n]
}
const ls = {};
["horizontal", "vertical"].forEach(e => {
    const t = e.slice(0, 1) + "Flip";
    ls[e + "-flip"] = t,
    ls[e.slice(0, 1) + "-flip"] = t,
    ls[e + "Flip"] = t
}
);
function ba(e) {
    return e + (e.match(/^[-0-9.]+$/) ? "px" : "")
}
const ya = (e, t) => {
    const n = dm(va, t)
      , r = {
        ...ym
    }
      , s = t.mode || "svg"
      , o = {}
      , i = t.style
      , l = typeof i == "object" && !(i instanceof Array) ? i : {};
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
                typeof f == "string" ? n[v] = hm(f) : typeof f == "number" && (n[v] = f);
                break;
            case "ariaHidden":
            case "aria-hidden":
                f !== !0 && f !== "true" && delete r["aria-hidden"];
                break;
            default:
                {
                    const x = ls[v];
                    x ? (f === !0 || f === "true" || f === 1) && (n[x] = !0) : va[v] === void 0 && (r[v] = f)
                }
            }
    }
    const a = Mv(e, n)
      , u = a.attributes;
    if (n.inline && (o.verticalAlign = "-0.125em"),
    s === "svg") {
        r.style = {
            ...o,
            ...l
        },
        Object.assign(r, u);
        let v = 0
          , f = t.id;
        return typeof f == "string" && (f = f.replace(/-/g, "_")),
        r.innerHTML = Bv(a.body, f ? () => f + "ID" + v++ : "iconifyVue"),
        hl("svg", r)
    }
    const {body: c, width: d, height: p} = e
      , m = s === "mask" || (s === "bg" ? !1 : c.indexOf("currentColor") !== -1)
      , y = vm(c, {
        ...u,
        width: d + "",
        height: p + ""
    });
    return r.style = {
        ...o,
        "--svg": bm(y),
        width: ba(u.width),
        height: ba(u.height),
        ...xm,
        ...m ? ci : Ou,
        ...l
    },
    hl("span", r)
}
;
Su(!0);
Vv("", Xv);
if (typeof document < "u" && typeof window < "u") {
    const e = window;
    if (e.IconifyPreload !== void 0) {
        const t = e.IconifyPreload
          , n = "Invalid IconifyPreload syntax.";
        typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach(r => {
            try {
                (typeof r != "object" || r === null || r instanceof Array || typeof r.icons != "object" || typeof r.prefix != "string" || !Iv(r)) && console.error(n)
            } catch {
                console.error(n)
            }
        }
        )
    }
    if (e.IconifyProviders !== void 0) {
        const t = e.IconifyProviders;
        if (typeof t == "object" && t !== null)
            for (let n in t) {
                const r = "IconifyProviders[" + n + "] is invalid.";
                try {
                    const s = t[n];
                    if (typeof s != "object" || !s || s.resources === void 0)
                        continue;
                    zv(n, s) || console.error(r)
                } catch {
                    console.error(r)
                }
            }
    }
}
const wm = {
    ...Zs,
    body: ""
}
  , Cs = Re( (e, {emit: t}) => {
    const n = X(null);
    function r() {
        n.value && (n.value.abort?.(),
        n.value = null)
    }
    const s = X(!!e.ssr)
      , o = X("")
      , i = Ei(null);
    function l() {
        const u = e.icon;
        if (typeof u == "object" && u !== null && typeof u.body == "string")
            return o.value = "",
            {
                data: u
            };
        let c;
        if (typeof u != "string" || (c = Qs(u, !1, !0)) === null)
            return null;
        let d = Ov(c);
        if (!d) {
            const y = n.value;
            return (!y || y.name !== u) && (d === null ? n.value = {
                name: u
            } : n.value = {
                name: u,
                abort: um([c], a)
            }),
            null
        }
        r(),
        o.value !== u && (o.value = u,
        Rn( () => {
            t("load", u)
        }
        ));
        const p = e.customise;
        if (p) {
            d = Object.assign({}, d);
            const y = p(d.body, c.name, c.prefix, c.provider);
            typeof y == "string" && (d.body = y)
        }
        const m = ["iconify"];
        return c.prefix !== "" && m.push("iconify--" + c.prefix),
        c.provider !== "" && m.push("iconify--" + c.provider),
        {
            data: d,
            classes: m
        }
    }
    function a() {
        const u = l();
        u ? u.data !== i.value?.data && (i.value = u) : i.value = null
    }
    return s.value ? a() : ut( () => {
        s.value = !0,
        a()
    }
    ),
    je( () => e.icon, a),
    gn(r),
    () => {
        const u = i.value;
        if (!u)
            return ya(wm, e);
        let c = e;
        return u.classes && (c = {
            ...e,
            class: u.classes.join(" ")
        }),
        ya({
            ...Zs,
            ...u.data
        }, c)
    }
}
, {
    props: ["icon", "mode", "ssr", "width", "height", "style", "color", "inline", "rotate", "hFlip", "horizontalFlip", "vFlip", "verticalFlip", "flip", "id", "ariaHidden", "customise", "title"],
    emits: ["load"]
})
  , km = Re({
    __name: "IconifyIcon",
    props: {
        icon: {},
        size: {}
    },
    setup(e) {
        return (t, n) => (C(),
        ke(G(Cs), {
            icon: t.icon,
            width: t.size || 20,
            height: t.size || 20
        }, null, 8, ["icon", "width", "height"]))
    }
})
  , _m = {
    key: 0,
    class: "ml-auto rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-200"
}
  , xa = Re({
    __name: "SideNavItem",
    props: {
        id: {},
        title: {},
        active: {
            type: Boolean
        },
        icon: {},
        collapsed: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        badge: {}
    },
    emits: ["select"],
    setup(e) {
        return (t, n) => (C(),
        N("div", {
            onClick: n[0] || (n[0] = r => t.$emit("select", t.id)),
            class: de(["flex min-h-[42px] min-w-[42px] cursor-pointer items-center rounded transition-colors duration-200 hover:bg-devtools-state-hover dark:hover:bg-devtools-state-hover-dark", {
                "bg-devtools-state-selected dark:bg-devtools-state-selected-dark": t.active,
                "cursor-not-allowed opacity-70": t.disabled
            }])
        }, [ge(km, {
            icon: t.icon,
            class: de(["m-3 h-4 w-4 flex-shrink-0", {
                "text-devtools-primary dark:text-devtools-primary-dark": t.active,
                "text-devtools-text-primary dark:text-devtools-text-primary-dark": !t.active && !t.disabled,
                "text-devtools-text-disabled dark:text-devtools-text-disabled-dark": t.disabled
            }])
        }, null, 8, ["icon", "class"]), b("div", {
            class: de(["flex items-center overflow-hidden transition-all duration-200", {
                "w-0": t.collapsed,
                "w-[calc(100%-42px)]": !t.collapsed
            }])
        }, [b("span", {
            class: de(["whitespace-nowrap pr-2 text-sm font-medium", {
                "text-devtools-primary dark:text-devtools-primary-dark": t.active,
                "text-devtools-text-primary dark:text-devtools-text-primary-dark": !t.active && !t.disabled,
                "text-devtools-text-disabled dark:text-devtools-text-disabled-dark": t.disabled
            }])
        }, re(t.title), 3), t.badge ? (C(),
        N("span", _m, re(t.badge), 1)) : ae("", !0)], 2)], 2))
    }
})
  , Sm = {
    class: "border-devtools-divider dark:border-devtools-divider-dark flex flex-shrink-0 items-center border-b p-1"
}
  , Em = {
    class: "flex h-8 w-8 flex-shrink-0 items-center justify-center"
}
  , Cm = {
    class: "flex-1 overflow-y-auto p-1"
}
  , Am = {
    class: "flex flex-col gap-1"
}
  , Tm = {
    class: "border-devtools-divider dark:border-devtools-divider-dark flex flex-shrink-0 items-center border-t p-1"
}
  , Om = {
    class: "flex w-full flex-col gap-1"
}
  , Rm = Re({
    __name: "SideNav",
    setup(e) {
        const t = Bt()
          , n = X(!1)
          , r = X(!1)
          , s = () => {
            const u = window.innerWidth < as;
            u && !r.value ? n.value = !0 : !u && r.value && (n.value = !1),
            r.value = u
        }
        ;
        ut( () => {
            const u = window.innerWidth < as;
            n.value = u,
            r.value = u,
            window.addEventListener("resize", s)
        }
        ),
        gn( () => {
            window.removeEventListener("resize", s)
        }
        );
        const o = () => {
            n.value = !n.value
        }
          , i = u => {
            t.setActiveTab(u)
        }
          , l = X([{
            id: "components",
            title: "Components",
            icon: "carbon:tree-view-alt"
        }, {
            id: "stores",
            title: "Stores",
            icon: "carbon:db2-database"
        }, {
            id: "events",
            title: "Events",
            icon: "carbon:roadmap"
        }])
          , a = X([void 0, {
            id: "settings",
            title: "Settings",
            icon: "carbon:settings-adjust"
        }].filter(u => u !== void 0));
        return (u, c) => (C(),
        N("div", {
            class: de(["border-devtools-divider dark:border-devtools-divider-dark flex h-full flex-shrink-0 flex-col border-r transition-all duration-200 ease-in-out", n.value ? "w-[51px]" : "w-[251px]"])
        }, [b("div", Sm, [b("button", {
            type: "button",
            class: "hover:bg-devtools-element-header dark:hover:bg-devtools-element-header-dark flex w-full items-center rounded p-1",
            onClick: o
        }, [b("span", Em, [ge(bu, {
            class: "cursor-pointer"
        })]), b("span", {
            class: de(["overflow-hidden pl-1 text-left transition-all duration-200", {
                "w-0": n.value,
                "w-[calc(100%-42px)]": !n.value
            }])
        }, c[0] || (c[0] = [b("span", {
            class: "text-devtools-text-primary dark:text-devtools-text-primary-dark text-lg font-bold whitespace-nowrap"
        }, " DevTools ", -1)]), 2)])]), b("div", Cm, [b("div", Am, [(C(!0),
        N(ce, null, Oe(l.value, d => (C(),
        ke(xa, {
            key: d.id,
            id: d.id,
            title: d.title,
            icon: d.icon,
            active: G(t).activeTab === d.id,
            collapsed: n.value,
            badge: d.badge,
            onSelect: i
        }, null, 8, ["id", "title", "icon", "active", "collapsed", "badge"]))), 128))])]), b("div", Tm, [b("div", Om, [(C(!0),
        N(ce, null, Oe(a.value, d => (C(),
        ke(xa, {
            key: d.id,
            id: d.id,
            title: d.title,
            icon: d.icon,
            active: G(t).activeTab === d.id,
            collapsed: n.value,
            onSelect: i
        }, null, 8, ["id", "title", "icon", "active", "collapsed"]))), 128))])])], 2))
    }
})
  , Im = {
    key: 0,
    class: "flex w-full flex-col items-center justify-between gap-1 border-t border-devtools-divider bg-devtools-surface px-2 py-1 text-[10px] text-devtools-text-primary dark:border-devtools-divider-dark dark:bg-devtools-surface-dark dark:text-devtools-text-primary-dark sm:flex-row sm:gap-0"
}
  , Dm = Re({
    __name: "License",
    setup(e) {
        const t = Js()
          , n = Bt()
          , r = te( () => !t.isActivated)
          , s = () => {
            n.activeTab = "settings"
        }
        ;
        return (o, i) => r.value ? (C(),
        N("div", Im, [i[1] || (i[1] = b("div", {
            class: ""
        }, "Unregistered - Non commercial use only ", -1)), b("div", {
            class: "flex items-center gap-1"
        }, [b("button", {
            class: "rounded px-2 py-0.5 transition hover:bg-devtools-state-selected hover:dark:bg-devtools-state-selected-dark",
            onClick: s
        }, " Register license "), i[0] || (i[0] = b("a", {
            class: "rounded border border-devtools-divider px-2 py-0.5 font-medium transition hover:bg-devtools-state-selected dark:border-devtools-divider-dark hover:dark:bg-devtools-state-selected-dark",
            href: "https://alpinejs.pro/#pricing",
            target: "_blank"
        }, " Get license ", -1))])])) : ae("", !0)
    }
})
  , Pm = ["type", "disabled"]
  , wa = Re({
    __name: "Button",
    props: {
        variant: {
            default: "secondary"
        },
        size: {
            default: "md"
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        type: {
            default: "button"
        }
    },
    emits: ["click"],
    setup(e, {emit: t}) {
        const n = e
          , r = t
          , s = te( () => "inline-flex items-center justify-center font-medium rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-150 ease-in-out")
          , o = te( () => {
            switch (n.size) {
            case "sm":
                return "px-2.5 py-1.5 text-xs";
            case "lg":
                return "px-4 py-2 text-base";
            case "md":
            default:
                return "px-3 py-2 text-sm"
            }
        }
        )
          , i = te( () => {
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
                return "border border-devtools-outline bg-devtools-surface text-devtools-text-primary hover:bg-devtools-state-hover focus:ring-devtools-primary dark:border-devtools-outline-dark dark:bg-devtools-surface-dark dark:text-devtools-text-primary-dark dark:hover:bg-devtools-state-hover-dark dark:focus:ring-devtools-primary-dark"
            }
        }
        );
        function l(a) {
            n.disabled || r("click", a)
        }
        return (a, u) => (C(),
        N("button", {
            type: a.type,
            class: de([s.value, o.value, i.value]),
            disabled: a.disabled,
            onClick: l
        }, [No(a.$slots, "default")], 10, Pm))
    }
})
  , $m = {
    class: "fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50"
}
  , Lm = {
    class: "bg-devtools-surface text-devtools-text-primary dark:bg-devtools-surface-dark dark:text-devtools-text-primary-dark w-full max-w-md rounded-lg p-8 text-center shadow-2xl"
}
  , Nm = {
    class: "mx-auto mb-4 flex h-12 w-12 items-center justify-center"
}
  , Fm = {
    class: "mb-6"
}
  , Mm = {
    class: "relative"
}
  , jm = {
    class: "flex flex-col justify-center gap-1"
}
  , Um = {
    key: 0
}
  , Hm = {
    key: 1
}
  , Bm = "https://alpinejs.pro/?utm_source=extension&utm_campaign=soft-nag-v1#pricing"
  , Vm = Re({
    __name: "NagScreen",
    setup(e) {
        const t = Bt()
          , n = X(["an hour of your work.", "lunch for two.", "a single ride to the airport.", "fixing a small bug for a client.", "a week of coffee at the office.", "losing an hour debugging.", "your company’s daily stand-up.", "one hour of billable client time.", "attending one pointless meeting.", "a domain name you’ll never use.", "a SaaS tool you forgot to cancel."])
          , r = X(Math.floor(Math.random() * n.value.length));
        setInterval( () => {
            r.value = (r.value + 1) % n.value.length
        }
        , 5e3);
        const s = te( () => n.value[r.value])
          , o = X("");
        let i, l;
        je(s, (p, m="") => {
            clearInterval(i),
            clearInterval(l);
            let y = m.length;
            l = setInterval( () => {
                if (y > 0)
                    o.value = m.substring(0, y - 1),
                    y--;
                else {
                    clearInterval(l);
                    let v = 0;
                    i = setInterval( () => {
                        v < p.length ? (o.value = p.substring(0, v + 1),
                        v++) : clearInterval(i)
                    }
                    , 50)
                }
            }
            , 30)
        }
        , {
            immediate: !0
        });
        function a() {
            t.nagScreenShown()
        }
        const u = X(!0)
          , c = X(10);
        function d() {
            he.tabs.create({
                url: Bm
            }),
            a()
        }
        return ut( () => {
            const p = setInterval( () => {
                c.value > 1 ? c.value-- : (clearInterval(p),
                u.value = !1)
            }
            , 1e3);
            setTimeout( () => {
                u.value = !1
            }
            , 1e4)
        }
        ),
        (p, m) => (C(),
        N("div", $m, [b("div", Lm, [b("div", Nm, [ge(bu, {
            class: "h-12 w-12"
        })]), m[4] || (m[4] = b("h2", {
            class: "mb-2 text-xl font-bold"
        }, " Just a friendly reminder ", -1)), m[5] || (m[5] = b("p", {
            class: "mb-4"
        }, [Te(" Alpine.js DevTools Pro are free only for non-commercial use. "), b("br"), Te(" If you're using it at work, please "), b("strong", null, " get a license. "), b("br"), Te(" It runs on trust, and trust only works if it's mutual. ")], -1)), b("p", Fm, [m[1] || (m[1] = Te(" A license costs as little as ", -1)), b("span", Mm, [b("span", null, re(o.value), 1), m[0] || (m[0] = b("span", {
            class: "animate-blink absolute -right-1 bottom-0 inline-block h-full w-px bg-gray-800 dark:bg-gray-200"
        }, null, -1))])]), b("div", jm, [ge(wa, {
            variant: "primary",
            onClick: d
        }, {
            default: Mt( () => m[2] || (m[2] = [Te(" Get a license ", -1)])),
            _: 1,
            __: [2]
        }), ge(wa, {
            variant: "ghost",
            onClick: a,
            disabled: u.value
        }, {
            default: Mt( () => [u.value ? (C(),
            N("span", Um, " Hold your horses, read it first 😇 (" + re(c.value) + "s) ", 1)) : (C(),
            N("span", Hm, "Not now, thanks"))]),
            _: 1
        }, 8, ["disabled"]), m[3] || (m[3] = b("p", {
            class: "mb-1 text-xs text-gray-500 dark:text-gray-400"
        }, " Get a license and this goes away forever ", -1))])])]))
    }
})
  , zm = {
    class: "h-full space-y-4 overflow-auto bg-devtools-surface p-4 py-8 scrollbar-hide dark:bg-devtools-surface-dark"
}
  , qm = {
    class: "space-y-1 text-center"
}
  , Km = {
    class: "flex text-sm text-devtools-text-secondary dark:text-devtools-text-secondary-dark"
}
  , Wm = {
    class: "pl-1"
}
  , Gm = {
    key: 0,
    class: "mt-3 space-y-1"
}
  , Jm = {
    class: "list-inside list-disc text-sm text-devtools-text-secondary dark:text-devtools-text-secondary-dark"
}
  , Ym = {
    key: 1,
    class: "mt-1 text-xs text-devtools-text-secondary dark:text-devtools-text-secondary-dark"
}
  , Xm = {
    class: "flex flex-col items-center space-y-2"
}
  , Qm = ["disabled"]
  , eg = {
    class: "text-devtools-syntax-tag dark:text-devtools-syntax-tag-dark"
}
  , tg = {
    key: 0,
    class: "text-devtools-syntax-attribute dark:text-devtools-syntax-attribute-dark"
}
  , ng = {
    class: "text-devtools-syntax-attribute-value dark:text-devtools-syntax-attribute-value-dark"
}
  , rg = {
    key: 1,
    class: "text-devtools-syntax-attribute dark:text-devtools-syntax-attribute-dark",
    textContent: "x-data"
}
  , sg = {
    key: 2,
    class: "text-devtools-syntax-attribute dark:text-devtools-syntax-attribute-dark"
}
  , og = {
    class: "text-devtools-syntax-attribute-value dark:text-devtools-syntax-attribute-value-dark"
}
  , ig = Re({
    __name: "Component",
    props: {
        component: {},
        openComponent: {}
    },
    emits: ["hover", "mouseleave"],
    setup(e, {emit: t}) {
        const n = t
          , r = Vn();
        function s(o) {
            r.selectComponent(o.id)
        }
        return (o, i) => (C(),
        N("button", {
            type: "button",
            class: de(["flex w-full flex-shrink-0 cursor-pointer items-center justify-start overflow-hidden break-all rounded px-2 text-left font-mono transition", {
                "bg-devtools-state-selected text-devtools-primary dark:bg-devtools-state-selected-dark dark:text-devtools-primary-dark": o.openComponent && o.component.isOpened,
                "text-devtools-text-primary hover:bg-devtools-state-hover dark:text-devtools-text-primary-dark dark:hover:bg-devtools-state-hover-dark": !o.openComponent || !o.component.isOpened
            }]),
            style: Rr(`padding-left: ${o.component.depth * 20 + 8}px;`),
            onClick: i[0] || (i[0] = l => s(o.component)),
            onMouseenter: i[1] || (i[1] = l => n("hover", o.component)),
            onMouseleave: i[2] || (i[2] = l => n("mouseleave", o.component))
        }, [b("span", eg, [Te(" <" + re(o.component.tagName) + " ", 1), o.component.attributes["x-title"] ? (C(),
        N("span", tg, [i[3] || (i[3] = Te(' x-title="', -1)), b("span", ng, re(o.component.attributes["x-title"]), 1), i[4] || (i[4] = Te('" ', -1))])) : o.component.attributes["x-data"] === "" ? (C(),
        N("span", rg)) : o.component.attributes["x-data"] ? (C(),
        N("span", sg, [i[5] || (i[5] = Te(' x-data="', -1)), b("span", og, re(o.component.attributes["x-data"]), 1), i[6] || (i[6] = Te('"', -1))])) : ae("", !0), i[7] || (i[7] = Te("> ", -1))])], 38))
    }
})
  , lg = {}
  , ag = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "none"
};
function cg(e, t) {
    return C(),
    N("svg", ag, t[0] || (t[0] = [b("path", {
        d: "M10 12 6 8h8z",
        fill: "currentColor"
    }, null, -1)]))
}
const ug = ji(lg, [["render", cg]])
  , dg = {}
  , fg = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "none"
};
function pg(e, t) {
    return C(),
    N("svg", fg, t[0] || (t[0] = [b("path", {
        d: "M8 14V6l4 4z",
        fill: "currentColor"
    }, null, -1)]))
}
const hg = ji(dg, [["render", pg]]);
function Ru(e) {
    he.devtools.inspectedWindow.eval(`window.${cs} && window.${cs}(${JSON.stringify(e)}, true)`)
}
function Iu(e) {
    e?.id && he.devtools.inspectedWindow.eval(`window.${cs} && window.${cs}(${JSON.stringify(e)}, false)`)
}
function Du(e) {
    he.devtools.inspectedWindow.eval(`(() => {
      const element = window.${kn}?.[${JSON.stringify(e.id)}]
      if (element) {
        inspect(element);
        return true;
      }
      return false;
    })()`, (t, n) => {
        n && console.error("Error inspecting element:", n)
    }
    )
}
const vg = ["data-path"]
  , mg = {
    key: 0,
    class: "absolute bottom-0 left-[-14px] top-0 m-auto h-[20px] w-[20px] text-devtools-on-surface-icon dark:text-devtools-on-surface-icon-dark"
}
  , gg = ["textContent"]
  , bg = {
    class: "ml-1 break-all text-devtools-syntax-attribute-value dark:text-devtools-syntax-attribute-value-dark"
}
  , yg = ["textContent"]
  , xg = ["textContent"]
  , wg = ["textContent"]
  , kg = {
    key: 4,
    class: "text-devtools-syntax-token-keyword dark:text-devtools-syntax-token-keyword-dark"
}
  , _g = {
    key: 5,
    class: "text-devtools-syntax-token-keyword dark:text-devtools-syntax-token-keyword-dark"
}
  , Sg = {
    key: 6
}
  , Eg = ["textContent"]
  , Cg = ["textContent"]
  , Ag = {
    key: 0,
    class: "flex flex-col"
}
  , Tg = {
    class: "flex flex-row items-center"
}
  , Og = ["type"]
  , $t = Re({
    __name: "Attribute",
    props: {
        id: {
            type: String,
            required: !0
        },
        dataSource: {
            type: String,
            required: !0,
            validator: e => ["component", "store", "eventData"].includes(e)
        },
        attribute: {
            type: Object,
            required: !0
        },
        flattenedData: {
            type: Array,
            required: !0
        },
        entityId: {
            type: [Number, String],
            required: !0
        },
        entityName: {
            type: String,
            default: ""
        }
    },
    emits: ["update-data"],
    setup(e, {emit: t}) {
        const n = e
          , r = t
          , s = te( () => n.attribute?.name || "")
          , o = te( () => {
            const V = n.attribute;
            if (!V)
                return "";
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
                    return D.attributes?.id && (se += ` id="${D.attributes?.id}"`),
                    D.attributes?.for && (se += ` for="${D.attributes?.for}"`),
                    D.attributes?.name && (se += ` name="${D.attributes?.name}"`),
                    se + ">"
                }
                return "HTMLElement";
            default:
                return D === null ? "null" : D
            }
        }
        )
          , i = V => {
            const D = document.querySelector(`[data-path="${V}"]`);
            D && (D.scrollIntoView({
                behavior: "smooth",
                block: "center"
            }),
            D.classList.add("highlight-flash"),
            setTimeout( () => {
                D.classList.remove("highlight-flash")
            }
            , 1500))
        }
          , l = () => {
            Du({
                id: n?.attribute?.value?.devtoolsId
            })
        }
          , a = () => {
            Ru({
                id: n?.attribute?.value?.devtoolsId
            })
        }
          , u = () => {
            Iu({
                id: n?.attribute?.value?.devtoolsId
            })
        }
          , c = te( () => n.attribute?.type || "")
          , d = te( () => {
            const V = n.attribute;
            return !V || V.type !== "object" && V.type !== "array" || V.value === "{}" || V.value === "[]" ? !1 : V.value === null ? (n.flattenedData?.filter(ie => ie.parentId === n.id) || []).length > 0 : !1
        }
        )
          , p = te( () => {
            switch (n.attribute?.type) {
            case "boolean":
                return "checkbox";
            case "number":
                return "number";
            default:
                return "text"
            }
        }
        )
          , m = X(!1)
          , y = X([])
          , v = X(!1)
          , f = X(null)
          , x = te( () => n.dataSource === "eventData" || n.attribute?.type === "object" && (n.attribute?.value === null || n.attribute?.value === "{}") || n.attribute?.type === "array" && (n.attribute?.value === null || n.attribute?.value === "[]") ? !0 : n.attribute?.readOnly || !1);
        ut( () => {
            f.value = n.attribute?.value,
            d.value && m.value && A()
        }
        ),
        je( () => n.flattenedData, () => {
            m.value && A()
        }
        , {
            deep: !0
        }),
        je( () => n.attribute, V => {
            v.value || (f.value = V?.value),
            m.value && A()
        }
        , {
            deep: !0
        });
        function S() {
            d.value && (m.value = !m.value,
            m.value && A())
        }
        function A() {
            y.value = k()
        }
        function k() {
            return n.flattenedData ? n.flattenedData.filter(D => D.parentId === n.id).sort( (D, se) => D.name.localeCompare(se.name)) : []
        }
        function $() {
            x.value || (v.value = !0,
            f.value = n.attribute?.value)
        }
        function O() {
            if (!x.value && (v.value = !1,
            n.attribute)) {
                const V = n.dataSource === "component" ? n.attribute.path || n.id : n.attribute.path || n.attribute.name
                  , D = {
                    dataSource: n.dataSource,
                    entityId: n.entityId,
                    entityName: n.entityName,
                    attributeSequence: V,
                    attributeValue: f.value
                };
                r("update-data", D)
            }
        }
        function U() {
            f.value = n.attribute?.value,
            v.value = !1
        }
        return (V, D) => {
            const se = Ud("Attribute", !0);
            return C(),
            N(ce, null, [b("div", {
                class: "group flex items-center",
                "data-path": e.attribute?.path
            }, [b("button", {
                class: de(["relative block rounded px-1 text-left hover:bg-devtools-state-hover dark:hover:bg-devtools-state-hover-dark", {
                    "cursor-pointer": d.value
                }]),
                onClick: D[7] || (D[7] = ie => S())
            }, [d.value ? (C(),
            N("div", mg, [m.value ? (C(),
            ke(ug, {
                key: 0
            })) : (C(),
            ke(hg, {
                key: 1
            }))])) : ae("", !0), b("span", {
                class: "text-devtools-syntax-attribute dark:text-devtools-syntax-attribute-dark",
                textContent: re(`${s.value}:`)
            }, null, 8, gg), it(b("span", bg, [c.value === "circular" ? (C(),
            N("span", {
                key: 0,
                class: "relative inline-flex truncate px-1.5 py-1 text-[10px] leading-none before:absolute before:inset-0 before:z-10 before:rounded before:border before:border-devtools-divider before:bg-devtools-state-hover before:transition-colors before:dark:border-devtools-divider-dark before:dark:bg-devtools-state-hover-dark before:dark:text-devtools-text-secondary-dark",
                onClick: D[0] || (D[0] = tt(ie => i(o.value), ["stop"]))
            }, " → " + re(o.value), 1)) : ["string"].includes(c.value) ? (C(),
            N("span", {
                key: 1,
                class: "text-devtools-syntax-token-type dark:text-devtools-syntax-token-type-dark cursor-pointer",
                textContent: re(`"${o.value}"`),
                onClick: D[1] || (D[1] = ie => $())
            }, null, 8, yg)) : ["undefined", "null", "function"].includes(c.value) ? (C(),
            N("span", {
                key: 2,
                class: "text-devtools-syntax-token-type dark:text-devtools-syntax-token-type-dark",
                textContent: re(o.value)
            }, null, 8, xg)) : c.value === "HTMLElement" ? (C(),
            N("span", {
                key: 3,
                class: "cursor-pointer text-devtools-syntax-tag dark:text-devtools-syntax-tag-dark",
                onClick: l,
                onMouseenter: a,
                onMouseleave: u,
                textContent: re(o.value)
            }, null, 40, wg)) : c.value === "document" ? (C(),
            N("span", kg, " Document ")) : c.value === "window" ? (C(),
            N("span", _g, " Window ")) : c.value === "boolean" ? (C(),
            N("span", Sg, [b("span", {
                class: "text-devtools-syntax-token-value dark:text-devtools-syntax-token-value-dark cursor-pointer pr-1",
                textContent: re(o.value),
                onClick: D[2] || (D[2] = ie => (f.value = !o.value,
                O()))
            }, null, 8, Eg), x.value ? ae("", !0) : it((C(),
            N("input", {
                key: 0,
                type: "checkbox",
                "onUpdate:modelValue": D[3] || (D[3] = ie => f.value = ie),
                onChange: D[4] || (D[4] = tt(ie => O(), ["stop"])),
                class: "ml-1 h-3 w-3 cursor-pointer rounded border-devtools-divider text-devtools-primary opacity-0 transition duration-150 ease-in-out focus:ring-transparent group-hover:opacity-100 dark:border-devtools-divider-dark dark:text-devtools-primary-dark"
            }, null, 544)), [[Pc, f.value]])])) : (C(),
            N("button", {
                key: 7,
                type: "button",
                class: de({
                    "text-devtools-text-secondary dark:text-devtools-text-secondary-dark": d.value,
                    "text-devtools-syntax-token-variable dark:text-devtools-syntax-token-variable-dark": !d.value && c.value === "number",
                    "text-devtools-syntax-token-keyword dark:text-devtools-syntax-token-keyword-dark": !d.value && (o.value === "null" || o.value === "undefined")
                }),
                onClick: D[5] || (D[5] = ie => $()),
                onDblclick: D[6] || (D[6] = ie => S()),
                textContent: re(o.value)
            }, null, 42, Cg))], 512), [[co, !v.value]])], 2), !x.value && !d.value ? (C(),
            N("div", Ag, [it((C(),
            N("svg", {
                fill: "currentColor",
                onClick: D[8] || (D[8] = ie => $()),
                viewBox: "0 0 20 20",
                class: "h-4 w-4 cursor-pointer text-devtools-text-link opacity-0 hover:opacity-75 group-hover:opacity-100 dark:text-devtools-text-link-dark"
            }, D[15] || (D[15] = [b("path", {
                d: "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
            }, null, -1)]), 512)), [[co, !v.value && c.value !== "boolean"]]), it(b("div", Tg, [it(b("input", {
                class: "flex w-2/3 appearance-none rounded border border-devtools-outline bg-devtools-surface px-1 py-1 text-sm leading-tight text-devtools-text-primary shadow focus:outline-none focus:ring-2 focus:ring-devtools-outline-focus dark:border-devtools-outline-dark dark:bg-devtools-surface-dark dark:text-devtools-text-primary-dark dark:focus:ring-devtools-outline-focus-dark",
                type: p.value,
                "onUpdate:modelValue": D[9] || (D[9] = ie => f.value = ie),
                onKeydown: [D[10] || (D[10] = Vo(tt(ie => O(), ["stop"]), ["enter"])), D[11] || (D[11] = Vo(tt(ie => U(), ["stop"]), ["escape"]))]
            }, null, 40, Og), [[ep, f.value]]), (C(),
            N("svg", {
                fill: "currentColor",
                onClick: D[12] || (D[12] = ie => O()),
                viewBox: "0 0 20 20",
                class: "ml-2 flex h-5 w-5 cursor-pointer text-devtools-success hover:opacity-75 dark:text-devtools-success-dark"
            }, D[16] || (D[16] = [b("path", {
                "fill-rule": "evenodd",
                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                "clip-rule": "evenodd"
            }, null, -1)]))), (C(),
            N("svg", {
                fill: "currentColor",
                onClick: D[13] || (D[13] = ie => U()),
                viewBox: "0 0 20 20",
                class: "ml-1 flex h-5 w-5 cursor-pointer text-devtools-error hover:opacity-75 dark:text-devtools-error-dark"
            }, D[17] || (D[17] = [b("path", {
                "fill-rule": "evenodd",
                d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                "clip-rule": "evenodd"
            }, null, -1)])))], 512), [[co, v.value && c.value !== "boolean"]])])) : ae("", !0)], 8, vg), m.value && y.value.length > 0 ? (C(!0),
            N(ce, {
                key: 0
            }, Oe(y.value, ie => (C(),
            N("div", {
                class: "ml-[8px]",
                key: ie.id
            }, [ge(se, {
                id: ie.id,
                "data-source": e.dataSource,
                attribute: ie,
                "flattened-data": e.flattenedData,
                "entity-id": e.entityId,
                "entity-name": e.entityName,
                onUpdateData: D[14] || (D[14] = Ze => V.$emit("update-data", Ze))
            }, null, 8, ["id", "data-source", "attribute", "flattened-data", "entity-id", "entity-name"])]))), 128)) : ae("", !0)], 64)
        }
    }
})
  , Rg = 12
  , Vi = Re({
    __name: "ResizablePanes",
    props: {
        direction: {
            default: "vertical"
        },
        initialSizePercent: {
            default: 50
        },
        minPaneSizePx: {
            default: 100
        }
    },
    setup(e) {
        const t = e
          , n = X(null)
          , r = X(t.initialSizePercent)
          , s = X(!1)
          , o = X(0)
          , i = X(0)
          , l = te( () => t.direction === "vertical")
          , a = te( () => {
            const y = {};
            return l.value ? y.width = `${r.value}%` : y.height = `${r.value}%`,
            y
        }
        )
          , u = y => {
            const v = "touches"in y ? y.touches[0] : y;
            return l.value ? v.clientX : v.clientY
        }
          , c = y => {
            n.value && (y.preventDefault(),
            s.value = !0,
            o.value = u(y),
            i.value = r.value,
            document.addEventListener("mousemove", d),
            document.addEventListener("mouseup", p),
            document.addEventListener("touchmove", d, {
                passive: !1
            }),
            document.addEventListener("touchend", p),
            document.body.style.cursor = l.value ? "col-resize" : "row-resize",
            document.body.style.userSelect = "none")
        }
          , d = y => {
            if (!s.value || !n.value)
                return;
            y.preventDefault();
            const f = u(y) - o.value
              , x = l.value ? n.value.offsetWidth : n.value.offsetHeight;
            if (x <= 0)
                return;
            const S = f / x * 100;
            let A = i.value + S;
            const k = t.minPaneSizePx / x * 100
              , O = (x - t.minPaneSizePx - Rg) / x * 100;
            A = Math.max(k, Math.min(A, O)),
            r.value = A
        }
          , p = () => {
            s.value && (s.value = !1,
            document.removeEventListener("mousemove", d),
            document.removeEventListener("mouseup", p),
            document.removeEventListener("touchmove", d),
            document.removeEventListener("touchend", p),
            document.body.style.cursor = "",
            document.body.style.userSelect = "")
        }
          , m = () => {
            r.value = t.initialSizePercent
        }
        ;
        return je( () => t.initialSizePercent, () => {
            m()
        }
        ),
        je( () => t.direction, () => {
            m()
        }
        ),
        ut( () => {
            m()
        }
        ),
        gn( () => {
            s.value && p()
        }
        ),
        (y, v) => (C(),
        N("div", {
            ref_key: "containerRef",
            ref: n,
            class: de(["flex h-full w-full overflow-hidden", [l.value ? "flex-row" : "flex-col"]])
        }, [b("div", {
            style: Rr(a.value),
            class: de(["relative flex-shrink-0 overflow-hidden", [l.value ? "-mr-1.5" : "-mb-1.5"]])
        }, [No(y.$slots, "left")], 6), b("div", {
            onMousedown: c,
            onTouchstartPassive: c,
            class: de(["group relative z-10 flex flex-shrink-0 items-center justify-center", [l.value ? "w-3 cursor-col-resize" : "h-3 cursor-row-resize"]])
        }, [b("div", {
            class: de(["absolute", [l.value ? "left-1/2 h-full w-px -translate-x-1/2" : "top-1/2 h-px w-full -translate-y-1/2", "group-hover:bg-devtools-accent dark:group-hover:bg-devtools-accent-dark bg-devtools-divider transition-colors duration-150 ease-in-out dark:bg-devtools-divider-dark"]])
        }, null, 2), b("div", {
            class: de(["relative rounded-full transition-colors duration-150 ease-in-out", [l.value ? "h-8 w-1" : "h-1 w-8", "group-hover:bg-devtools-accent dark:group-hover:bg-devtools-accent-dark bg-devtools-divider dark:bg-devtools-divider-dark"]])
        }, null, 2)], 34), b("div", {
            class: de(["relative flex-grow overflow-hidden", [l.value ? "-ml-1.5" : "-mt-1.5"]])
        }, [No(y.$slots, "right")], 2)], 2))
    }
})
  , Ig = {
    class: "relative flex h-full max-h-full min-h-full min-w-full flex-col justify-start overflow-y-auto bg-devtools-surface p-1 scrollbar-hide dark:bg-devtools-surface-dark"
}
  , Dg = {
    key: 0,
    class: "flex h-full w-full items-center justify-center p-4 text-devtools-text-secondary dark:text-devtools-text-secondary-dark"
}
  , Pg = {
    class: "relative flex h-full max-h-full flex-col overflow-y-auto bg-devtools-surface scrollbar-hide dark:bg-devtools-surface-dark"
}
  , $g = {
    key: 0,
    class: "sticky left-0 top-0 z-20 flex h-[27px] w-full flex-shrink-0 items-center justify-between border-b border-devtools-divider bg-devtools-surface px-1 dark:border-devtools-divider-dark dark:bg-devtools-surface-dark"
}
  , Lg = {
    class: "flex items-center gap-1"
}
  , Ng = {
    key: 1,
    "data-testid": "select-component-message",
    class: "flex h-full w-full items-center justify-center p-4 text-devtools-text-secondary dark:text-devtools-text-secondary-dark"
}
  , Fg = {
    class: "font-mono"
}
  , Mg = {
    key: 0
}
  , jg = {
    class: "ml-[8px]"
}
  , Ug = ["textContent"]
  , Hg = ["textContent"]
  , Bg = {
    key: 1
}
  , Vg = {
    class: "ml-[8px]"
}
  , zg = {
    key: 2
}
  , qg = {
    class: "ml-[8px]"
}
  , Kg = {
    key: 3
}
  , Wg = {
    class: "ml-[8px]"
}
  , Gg = Re({
    __name: "Components",
    setup(e) {
        const t = Vn()
          , n = te( () => t.components.filter(v => v.attributes["x-devtools"] === void 0))
          , r = te( () => t.selectedComponent)
          , s = te( () => t.sortedAttributes?.filter(v => !v.parentId) || [])
          , o = te( () => {
            const v = r.value?.attributes || []
              , f = ["x-", "@", ":", "wire:"];
            return Object.keys(v).filter(S => f.some(A => S.startsWith(A))).reduce( (S, A) => (S[A] = v[A],
            S), {})
        }
        )
          , i = te( () => {
            const v = {
                props: [],
                getters: [],
                methods: []
            };
            return s.value.forEach(f => {
                if (f.type === "function") {
                    v.methods.push(f);
                    return
                }
                if (f.isGetter) {
                    v.getters.push(f);
                    return
                }
                v.props.push(f)
            }
            ),
            v
        }
        );
        function l(v) {
            Ru({
                id: v.id
            })
        }
        function a(v) {
            Iu({
                id: v.id
            })
        }
        const u = X(!1)
          , c = () => {
            u.value = window.innerWidth < as
        }
        ;
        ut( () => {
            c(),
            window.addEventListener("resize", c)
        }
        ),
        gn( () => {
            window.removeEventListener("resize", c)
        }
        );
        const d = te( () => u.value ? "horizontal" : "vertical");
        function p(v) {
            v && Du({
                id: v
            })
        }
        function m(v) {
            v && he.devtools.inspectedWindow.eval(`window.${Yi} && window.${Yi}("${v}")`)
        }
        function y(v) {
            v.dataSource === "component" && t.editComponentAttribute(String(v.entityId), v.attributeSequence, v.attributeValue)
        }
        return (v, f) => (C(),
        ke(Vi, {
            direction: d.value,
            class: "font-mono text-[11px] leading-5"
        }, {
            left: Mt( () => [b("div", Ig, [n.value.length ? ae("", !0) : (C(),
            N("div", Dg, re("No components found"))), (C(!0),
            N(ce, null, Oe(n.value, x => (C(),
            ke(ig, {
                key: x.id,
                component: x,
                openComponent: r.value,
                onHover: S => l(x),
                onMouseleave: S => a(x)
            }, null, 8, ["component", "openComponent", "onHover", "onMouseleave"]))), 128))])]),
            right: Mt( () => [b("div", Pg, [r.value ? (C(),
            N("div", $g, [f[2] || (f[2] = b("div", null, null, -1)), b("div", Lg, [b("button", {
                class: "rounded-full p-1 text-devtools-text-secondary hover:bg-devtools-state-hover dark:text-devtools-text-secondary-dark dark:hover:bg-devtools-state-hover-dark",
                title: "Scroll element into view",
                onClick: f[0] || (f[0] = tt(x => m(r.value?.id || ""), ["stop"]))
            }, [ge(G(Cs), {
                icon: "carbon:center-to-fit",
                class: "h-4 w-4"
            })]), b("button", {
                class: "rounded-full p-1 text-devtools-text-secondary hover:bg-devtools-state-hover dark:text-devtools-text-secondary-dark dark:hover:bg-devtools-state-hover-dark",
                title: "Inspect element",
                onClick: f[1] || (f[1] = tt(x => p(r.value?.id || ""), ["stop"]))
            }, [ge(G(Cs), {
                icon: "carbon:code-block",
                class: "h-4 w-4"
            })])])])) : ae("", !0), r.value ? ae("", !0) : (C(),
            N("div", Ng, re(n.value.length > 0 ? "Select a component to view" : ""), 1)), b("div", {
                class: de([{
                    hidden: !r.value
                }, "flex-1 px-3"])
            }, [b("div", Fg, [Object.keys(o.value).length > 0 ? (C(),
            N("div", Mg, [f[3] || (f[3] = b("div", {
                class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark"
            }, " attributes: { ", -1)), b("div", jg, [(C(!0),
            N(ce, null, Oe(Object.keys(o.value), x => (C(),
            N("div", {
                key: x,
                class: "block break-all rounded px-1 pl-2 hover:bg-devtools-state-hover dark:hover:bg-devtools-state-hover-dark"
            }, [b("span", {
                class: "text-devtools-syntax-attribute dark:text-devtools-syntax-attribute-dark",
                textContent: re(`${x}${o.value[x] ? ":" : ""}`)
            }, null, 8, Ug), o.value[x] ? (C(),
            N("span", {
                key: 0,
                class: "ml-1 text-devtools-syntax-attribute-value dark:text-devtools-syntax-attribute-value-dark",
                textContent: re(`"${o.value[x]}"`)
            }, null, 8, Hg)) : ae("", !0)]))), 128))]), f[4] || (f[4] = b("div", {
                class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark"
            }, " } ", -1))])) : ae("", !0), i.value.props.length > 0 ? (C(),
            N("div", Bg, [f[5] || (f[5] = b("div", {
                class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark"
            }, " state: { ", -1)), b("div", Vg, [(C(!0),
            N(ce, null, Oe(i.value.props, x => (C(),
            ke($t, {
                key: x.id,
                id: x.id,
                "data-source": "component",
                attribute: x,
                "flattened-data": G(t).selectedComponentFlattenedData || [],
                "entity-id": r.value?.id || "",
                "entity-name": r.value?.tagName || "",
                onUpdateData: y
            }, null, 8, ["id", "attribute", "flattened-data", "entity-id", "entity-name"]))), 128))]), f[6] || (f[6] = b("div", {
                class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark"
            }, " } ", -1))])) : ae("", !0), i.value.getters.length > 0 ? (C(),
            N("div", zg, [f[7] || (f[7] = b("div", {
                class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark"
            }, " getters: { ", -1)), b("div", qg, [(C(!0),
            N(ce, null, Oe(i.value.getters, x => (C(),
            ke($t, {
                key: x.id,
                id: x.id,
                "data-source": "component",
                attribute: x,
                "flattened-data": G(t).selectedComponentFlattenedData || [],
                "entity-id": r.value?.id || "",
                "entity-name": r.value?.tagName || "",
                onUpdateData: y
            }, null, 8, ["id", "attribute", "flattened-data", "entity-id", "entity-name"]))), 128))]), f[8] || (f[8] = b("div", {
                class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark"
            }, " } ", -1))])) : ae("", !0), i.value.methods.length > 0 ? (C(),
            N("div", Kg, [f[9] || (f[9] = b("div", {
                class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark"
            }, " methods: { ", -1)), b("div", Wg, [(C(!0),
            N(ce, null, Oe(i.value.methods, x => (C(),
            ke($t, {
                key: x.id,
                id: x.id,
                "data-source": "component",
                attribute: x,
                "flattened-data": G(t).selectedComponentFlattenedData || [],
                "entity-id": r.value?.id || "",
                "entity-name": r.value?.tagName || "",
                onUpdateData: y
            }, null, 8, ["id", "attribute", "flattened-data", "entity-id", "entity-name"]))), 128))]), f[10] || (f[10] = b("div", {
                class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark"
            }, " } ", -1))])) : ae("", !0)])], 2)])]),
            _: 1
        }, 8, ["direction"]))
    }
})
  , Jg = {
    class: "fixed top-0 flex flex-row gap-2 bg-devtools-surface p-2 dark:bg-devtools-surface-dark"
}
  , Yg = ["onClick"]
  , Xg = ["innerHTML"]
  , Qg = Re({
    __name: "Debug",
    setup(e) {
        const t = Bt()
          , n = jn()
          , r = Vn()
          , s = Xs()
          , o = ["components", "stores", "ui", "settings"]
          , i = X("components")
          , l = te( () => {
            try {
                return Ii(( () => {
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
                        return {}
                    }
                }
                )(), void 0, 2)
            } catch (a) {
                return console.error(a),
                "Can't stringify the data"
            }
        }
        );
        return (a, u) => (C(),
        N(ce, null, [b("div", Jg, [(C(),
        N(ce, null, Oe(o, c => b("button", {
            key: c,
            class: de(["rounded border px-4 py-2 capitalize text-devtools-text-primary dark:text-devtools-text-primary-dark", {
                "bg-devtools-background-primary dark:bg-devtools-background-primary-dark": G(i) === c
            }]),
            onClick: d => i.value = c
        }, re(c), 11, Yg)), 64))]), b("pre", {
            class: "h-full w-full overflow-auto p-4 pt-14 text-devtools-text-primary scrollbar-hide dark:text-devtools-text-primary-dark",
            innerHTML: l.value
        }, null, 8, Xg)], 64))
    }
});
function ui(e) {
    return gi() ? (Da(e),
    !0) : !1
}
const di = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
function Zg(e, t=1e3, n={}) {
    const {immediate: r=!0, immediateCallback: s=!1} = n;
    let o = null;
    const i = Ei(!1);
    function l() {
        o && (clearInterval(o),
        o = null)
    }
    function a() {
        i.value = !1,
        l()
    }
    function u() {
        const c = ps(t);
        c <= 0 || (i.value = !0,
        s && e(),
        l(),
        i.value && (o = setInterval(e, c)))
    }
    if (r && di && u(),
    _e(t) || typeof t == "function") {
        const c = je(t, () => {
            i.value && di && u()
        }
        );
        ui(c)
    }
    return ui(a),
    {
        isActive: hd(i),
        pause: a,
        resume: u
    }
}
const eb = di ? window : void 0;
function tb(e, t={}) {
    const {immediate: n=!0, fpsLimit: r=void 0, window: s=eb, once: o=!1} = t
      , i = Ei(!1)
      , l = te( () => r ? 1e3 / ps(r) : null);
    let a = 0
      , u = null;
    function c(m) {
        if (!i.value || !s)
            return;
        a || (a = m);
        const y = m - a;
        if (l.value && y < l.value) {
            u = s.requestAnimationFrame(c);
            return
        }
        if (a = m,
        e({
            delta: y,
            timestamp: m
        }),
        o) {
            i.value = !1,
            u = null;
            return
        }
        u = s.requestAnimationFrame(c)
    }
    function d() {
        !i.value && s && (i.value = !0,
        a = 0,
        u = s.requestAnimationFrame(c))
    }
    function p() {
        i.value = !1,
        u != null && s && (s.cancelAnimationFrame(u),
        u = null)
    }
    return n && d(),
    ui(p),
    {
        isActive: ki(i),
        pause: p,
        resume: d
    }
}
function nb(e={}) {
    const {controls: t=!1, interval: n="requestAnimationFrame", immediate: r=!0} = e
      , s = X(new Date)
      , o = () => s.value = new Date
      , i = n === "requestAnimationFrame" ? tb(o, {
        immediate: r
    }) : Zg(o, n, {
        immediate: r
    });
    return t ? {
        now: s,
        ...i
    } : s
}
const rb = [{
    max: 6e4,
    value: 1e3,
    name: "second"
}, {
    max: 276e4,
    value: 6e4,
    name: "minute"
}, {
    max: 72e6,
    value: 36e5,
    name: "hour"
}, {
    max: 5184e5,
    value: 864e5,
    name: "day"
}, {
    max: 24192e5,
    value: 6048e5,
    name: "week"
}, {
    max: 28512e6,
    value: 2592e6,
    name: "month"
}, {
    max: Number.POSITIVE_INFINITY,
    value: 31536e6,
    name: "year"
}]
  , sb = {
    justNow: "just now",
    past: e => e.match(/\d/) ? `${e} ago` : e,
    future: e => e.match(/\d/) ? `in ${e}` : e,
    month: (e, t) => e === 1 ? t ? "last month" : "next month" : `${e} month${e > 1 ? "s" : ""}`,
    year: (e, t) => e === 1 ? t ? "last year" : "next year" : `${e} year${e > 1 ? "s" : ""}`,
    day: (e, t) => e === 1 ? t ? "yesterday" : "tomorrow" : `${e} day${e > 1 ? "s" : ""}`,
    week: (e, t) => e === 1 ? t ? "last week" : "next week" : `${e} week${e > 1 ? "s" : ""}`,
    hour: e => `${e} hour${e > 1 ? "s" : ""}`,
    minute: e => `${e} minute${e > 1 ? "s" : ""}`,
    second: e => `${e} second${e > 1 ? "s" : ""}`,
    invalid: ""
};
function ob(e) {
    return e.toISOString().slice(0, 10)
}
function ib(e, t={}) {
    const {controls: n=!1, updateInterval: r=3e4} = t
      , {now: s, ...o} = nb({
        interval: r,
        controls: !0
    })
      , i = te( () => lb(new Date(ps(e)), t, ps(s)));
    return n ? {
        timeAgo: i,
        ...o
    } : i
}
function lb(e, t={}, n=Date.now()) {
    var r;
    const {max: s, messages: o=sb, fullDateFormatter: i=ob, units: l=rb, showSecond: a=!1, rounding: u="round"} = t
      , c = typeof u == "number" ? f => +f.toFixed(u) : Math[u]
      , d = +n - +e
      , p = Math.abs(d);
    function m(f, x) {
        return c(Math.abs(f) / x.value)
    }
    function y(f, x) {
        const S = m(f, x)
          , A = f > 0
          , k = v(x.name, S, A);
        return v(A ? "past" : "future", k, A)
    }
    function v(f, x, S) {
        const A = o[f];
        return typeof A == "function" ? A(x, S) : A.replace("{0}", x.toString())
    }
    if (p < 6e4 && !a)
        return o.justNow;
    if (typeof s == "number" && p > s)
        return i(new Date(e));
    if (typeof s == "string") {
        const f = (r = l.find(x => x.name === s)) == null ? void 0 : r.max;
        if (f && p > f)
            return i(new Date(e))
    }
    for (const [f,x] of l.entries()) {
        if (m(d, x) <= 0 && l[f - 1])
            return y(d, l[f - 1]);
        if (p < x.max)
            return y(d, x)
    }
    return o.invalid
}
const ab = {
    class: "truncate"
}
  , cb = ["title"]
  , ub = Re({
    __name: "Event",
    props: {
        event: {},
        selectedEvent: {}
    },
    emits: ["selectEvent"],
    setup(e) {
        const n = ib(e.event.metadata.timestamp, {
            showSecond: !0,
            updateInterval: 1e3
        });
        return (r, s) => (C(),
        N("button", {
            type: "button",
            class: de(["flex h-5 w-full flex-shrink-0 cursor-pointer items-center justify-between overflow-hidden break-all rounded px-2 text-left font-mono transition", {
                "bg-devtools-state-selected text-devtools-primary dark:bg-devtools-state-selected-dark dark:text-devtools-primary-dark": r.selectedEvent?.id === r.event.id,
                "text-devtools-text-primary hover:bg-devtools-state-hover dark:text-devtools-text-primary-dark dark:hover:bg-devtools-state-hover-dark": r.selectedEvent?.id !== r.event.id
            }]),
            onClick: s[0] || (s[0] = o => r.$emit("selectEvent", r.event))
        }, [b("div", ab, re(r.event.event.type.value), 1), b("div", {
            class: "truncate text-devtools-text-disabled dark:text-devtools-text-disabled-dark",
            title: `Dispatched ${Math.round(r.event.event.timeStamp.value)} ms after page began loading.`
        }, re(G(n)), 9, cb)], 2))
    }
})
  , db = {
    class: "relative flex h-full max-h-full min-h-full min-w-full flex-col justify-start overflow-y-auto bg-devtools-surface p-1 scrollbar-hide dark:bg-devtools-surface-dark"
}
  , fb = {
    key: 0
}
  , pb = {
    key: 1,
    class: "p-10 text-center text-gray-500 dark:text-gray-400"
}
  , hb = {
    class: "relative flex h-full max-h-full flex-col overflow-y-auto bg-devtools-surface scrollbar-hide dark:bg-devtools-surface-dark"
}
  , vb = {
    key: 0,
    class: "sticky left-0 top-0 z-20 flex h-[27px] w-full items-center justify-between border-b border-devtools-divider bg-devtools-surface px-1 dark:border-devtools-divider-dark dark:bg-devtools-surface-dark"
}
  , mb = {
    key: 1,
    class: "flex h-full w-full items-center justify-center p-4 text-devtools-text-secondary dark:text-devtools-text-secondary-dark"
}
  , gb = {
    class: "ml-2 space-y-0.5"
}
  , bb = {
    key: 1
}
  , yb = {
    key: 0
}
  , xb = {
    class: "ml-2 space-y-0.5"
}
  , wb = {
    key: 1,
    class: "text-gray-700 dark:text-gray-300"
}
  , kb = Re({
    __name: "Events",
    setup(e) {
        const t = gu()
          , n = te( () => t.getEvents)
          , r = te( () => t.isRecordingActive)
          , s = X(null)
          , o = X([])
          , i = ["AT_TARGET", "BUBBLE", "BUBBLING_PHASE", "CAPTURE", "CAPTURING_PHASE", "detail", "NONE", "TARGET", "timestamp", "type", "timeStamp"]
          , l = te( () => o.value.filter(c => c.parentId === "detail"))
          , a = te( () => o.value.filter(c => c.parentId === "" && c.type !== "function" && !i.includes(c.name)).sort( (c, d) => c.name.localeCompare(d.name)));
        je(s, c => {
            c && c.event ? o.value = Di(c.event) : o.value = []
        }
        );
        function u(c) {
            s.value = c
        }
        return (c, d) => (C(),
        ke(Vi, {
            class: "font-mono text-[11px] leading-5"
        }, {
            left: Mt( () => [b("div", db, [n.value.length > 0 ? (C(),
            N("div", fb, [(C(!0),
            N(ce, null, Oe(n.value, p => (C(),
            ke(ub, {
                key: p.id,
                event: p,
                "selected-event": s.value,
                onSelectEvent: u
            }, null, 8, ["event", "selected-event"]))), 128))])) : (C(),
            N("div", pb, re(r.value ? "Waiting for events..." : "Recording is paused. No events to show."), 1))])]),
            right: Mt( () => [b("div", hb, [s.value ? (C(),
            N("div", vb, d[0] || (d[0] = [b("div", {
                class: "h-[27px]"
            }, null, -1)]))) : ae("", !0), s.value ? ae("", !0) : (C(),
            N("div", mb, " Select an event to see its details. ")), b("div", {
                class: de([{
                    hidden: !s.value
                }, "flex-1 px-3"])
            }, [b("div", null, [d[2] || (d[2] = b("div", {
                class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark"
            }, " detail: { ", -1)), b("div", gb, [l.value.length > 0 ? (C(!0),
            N(ce, {
                key: 0
            }, Oe(l.value, p => (C(),
            ke($t, {
                key: p.id,
                id: p.id,
                "data-source": "eventData",
                attribute: p,
                "flattened-data": o.value,
                "entity-id": s.value.id.toString(),
                "entity-name": p.name
            }, null, 8, ["id", "attribute", "flattened-data", "entity-id", "entity-name"]))), 128)) : (C(),
            N("div", bb, d[1] || (d[1] = [b("div", {
                class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark"
            }, " empty ", -1)])))]), d[3] || (d[3] = b("div", {
                class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark"
            }, " } ", -1))]), a.value.length > 0 ? (C(),
            N("div", yb, [d[4] || (d[4] = b("div", {
                class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark"
            }, " properties: { ", -1)), b("div", xb, [(C(!0),
            N(ce, null, Oe(a.value, p => (C(),
            ke($t, {
                key: p.id,
                id: p.id,
                "data-source": "eventData",
                attribute: p,
                "flattened-data": o.value,
                "entity-id": s.value.id.toString(),
                "entity-name": p.name
            }, null, 8, ["id", "attribute", "flattened-data", "entity-id", "entity-name"]))), 128))]), d[5] || (d[5] = b("div", {
                class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark"
            }, " } ", -1))])) : ae("", !0), o.value.length === 0 ? (C(),
            N("p", wb, " (Event data might be null, undefined, or empty) ")) : ae("", !0)], 2)])]),
            _: 1
        }))
    }
})
  , _b = {
    class: "flex flex-col gap-y-6"
}
  , Sb = {
    class: "flex flex-col gap-y-3"
}
  , Eb = {
    class: "flex items-center gap-x-2"
}
  , Cb = {
    key: 0,
    class: "text-sm text-red-500"
}
  , Ab = {
    class: "flex flex-col gap-y-1.5"
}
  , Tb = ["disabled"]
  , Ob = {
    class: "flex flex-col gap-y-1.5"
}
  , Rb = ["disabled"]
  , Ib = ["disabled"]
  , Db = ["disabled"]
  , Pb = {
    key: 0,
    class: "mt-2"
}
  , $b = {
    class: "mb-3 text-base font-medium text-devtools-text-primary dark:text-devtools-text-primary-dark"
}
  , Lb = {
    key: 0
}
  , Nb = {
    class: "space-y-2"
}
  , Fb = {
    class: "flex flex-col"
}
  , Mb = {
    class: "text-sm font-medium text-devtools-text-primary dark:text-devtools-text-primary-dark"
}
  , jb = {
    class: "text-xs text-devtools-text-secondary dark:text-devtools-text-secondary-dark"
}
  , Ub = ["onClick", "disabled"]
  , Hb = {
    key: 1,
    class: "pr-2 text-xs text-devtools-text-disabled dark:text-devtools-text-disabled-dark"
}
  , Bb = Re({
    __name: "LicenseSettings",
    setup(e) {
        const t = Js()
          , n = X("")
          , r = X("");
        function s() {
            n.value = t.deviceName || "",
            r.value = t.licenseKey || ""
        }
        ut(async () => {
            await t.loadLicenseFromStorage(),
            s(),
            (t.isActivated || t.instances.length > 0) && t.licenseKey && await t.fetchInstances()
        }
        ),
        je( () => t.deviceName, a => {
            n.value = a || ""
        }
        ),
        je( () => t.licenseKey, a => {
            r.value = a || ""
        }
        );
        async function o() {
            t.setDeviceName(n.value),
            t.setLicenseKey(r.value),
            await t.activateLicense(),
            t.licenseKey && await t.fetchInstances()
        }
        async function i(a) {
            await t.deactivateLicense(a || null),
            (t.licenseKey || t.isActivated) && await t.fetchInstances()
        }
        function l(a) {
            if (!a)
                return "N/A";
            try {
                return new Date(a).toLocaleDateString()
            } catch {
                return a
            }
        }
        return (a, u) => (C(),
        N("div", _b, [b("div", Sb, [b("div", Eb, [u[3] || (u[3] = b("span", {
            class: "text-sm font-medium text-devtools-text-secondary dark:text-devtools-text-secondary-dark"
        }, " Status: ", -1)), b("span", {
            class: de(["rounded px-3 py-0.5 text-xs font-medium text-white", {
                "bg-green-500": G(t).isActivated,
                "bg-red-500": !G(t).isActivated && !G(t).isLoading,
                "bg-gray-400": G(t).isLoading
            }])
        }, re(G(t).isLoading ? "Checking..." : G(t).isActivated ? "Activated" : "Not Activated"), 3)]), G(t).errorMessage ? (C(),
        N("div", Cb, re(G(t).errorMessage), 1)) : ae("", !0)]), b("form", {
            onSubmit: tt(o, ["prevent"]),
            class: "flex flex-col gap-y-4"
        }, [b("div", Ab, [u[4] || (u[4] = b("label", {
            for: "deviceName",
            class: "block text-sm font-medium text-devtools-text-primary dark:text-devtools-text-primary-dark"
        }, " Device name ", -1)), it(b("input", {
            id: "deviceName",
            "onUpdate:modelValue": u[0] || (u[0] = c => n.value = c),
            disabled: G(t).isActivated,
            type: "text",
            placeholder: "Name of this device (e.g., Work Laptop)",
            class: de(["block w-full rounded border-devtools-outline bg-devtools-surface px-3 py-2 text-sm text-devtools-text-primary shadow-sm focus:border-devtools-primary focus:ring-devtools-primary dark:border-devtools-outline-dark dark:bg-devtools-surface-dark dark:text-devtools-text-primary-dark dark:focus:border-devtools-primary-dark dark:focus:ring-devtools-primary-dark", {
                "cursor-not-allowed bg-gray-100 dark:bg-gray-700": G(t).isActivated
            }])
        }, null, 10, Tb), [[Qt, n.value]])]), b("div", Ob, [u[5] || (u[5] = b("label", {
            for: "licenseKey",
            class: "block text-sm font-medium text-devtools-text-primary dark:text-devtools-text-primary-dark"
        }, "License key", -1)), it(b("input", {
            id: "licenseKey",
            "onUpdate:modelValue": u[1] || (u[1] = c => r.value = c),
            disabled: G(t).isActivated,
            type: "text",
            placeholder: "Enter your license key",
            class: de(["block w-full rounded border-devtools-outline bg-devtools-surface px-3 py-2 text-sm text-devtools-text-primary shadow-sm focus:border-devtools-primary focus:ring-devtools-primary dark:border-devtools-outline-dark dark:bg-devtools-surface-dark dark:text-devtools-text-primary-dark dark:focus:border-devtools-primary-dark dark:focus:ring-devtools-primary-dark", {
                "cursor-not-allowed bg-gray-100 dark:bg-gray-700": G(t).isActivated
            }])
        }, null, 10, Rb), [[Qt, r.value]])]), b("div", null, [G(t).isActivated ? (C(),
        N("button", {
            key: 1,
            type: "button",
            onClick: u[2] || (u[2] = c => i()),
            disabled: G(t).isLoading,
            class: "rounded border border-red-500 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 shadow-sm hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-red-600 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-800/30 dark:focus:ring-red-500 dark:focus:ring-offset-gray-800"
        }, re(G(t).isLoading ? "Deactivating..." : "Deactivate this device"), 9, Db)) : (C(),
        N("button", {
            key: 0,
            type: "submit",
            disabled: G(t).isLoading || !n.value || !r.value,
            class: "hover:bg-devtools-primary-container-hover dark:hover:bg-devtools-primary-container-hover-dark rounded border border-devtools-primary bg-devtools-primary-container px-4 py-2 text-sm font-medium text-devtools-primary shadow-sm focus:outline-none focus:ring-2 focus:ring-devtools-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-devtools-primary-dark dark:bg-devtools-primary-container-dark dark:text-devtools-primary-dark dark:focus:ring-devtools-primary-dark dark:focus:ring-offset-gray-800"
        }, re(G(t).isLoading ? "Activating..." : "Activate license"), 9, Ib))])], 32), G(t).instances && G(t).instances.length > 0 ? (C(),
        N("div", Pb, [b("h5", $b, [u[6] || (u[6] = Te(" Activated devices ", -1)), G(t).isActivated ? (C(),
        N("span", Lb, " (" + re(G(t).licenseData?.license_key?.activation_usage) + " of " + re(G(t).licenseData?.license_key?.activation_limit || "∞") + ") ", 1)) : ae("", !0)]), b("ul", Nb, [(C(!0),
        N(ce, null, Oe(G(t).instances, c => (C(),
        N("li", {
            key: c.id,
            class: "flex items-center justify-between rounded border border-devtools-outline bg-devtools-surface-variant p-3 dark:border-devtools-outline-dark dark:bg-devtools-surface-variant-dark"
        }, [b("div", Fb, [b("span", Mb, re(c.attributes.name), 1), b("span", jb, " Activated: " + re(l(c.attributes.created_at)), 1)]), c.id !== G(t).currentInstanceId || !G(t).isActivated ? (C(),
        N("button", {
            key: 0,
            type: "button",
            onClick: d => i(c.id),
            disabled: G(t).isLoading,
            class: "rounded border border-red-500 px-2 py-0.5 text-xs font-medium text-red-600 hover:bg-red-50 focus:outline-none focus:ring-1 focus:ring-red-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-red-600 dark:text-red-500 dark:hover:bg-red-700/10 dark:focus:ring-offset-gray-800"
        }, re(G(t).isLoading ? "Deactivating..." : "Deactivate"), 9, Ub)) : (C(),
        N("span", Hb, " Current device "))]))), 128))]), u[7] || (u[7] = b("p", {
            class: "mt-3 text-xs text-devtools-text-secondary dark:text-devtools-text-secondary-dark"
        }, [Te(" To manage all license keys, instances, invoices, and more, please visit your "), b("a", {
            href: "https://alpinejs.pro/dashboard/licenses",
            target: "_blank",
            class: "font-medium text-devtools-primary hover:underline dark:text-devtools-primary-dark"
        }, " online dashboard"), Te(". ")], -1))])) : ae("", !0)]))
    }
})
  , Vb = {
    class: "h-full w-full overflow-auto bg-devtools-surface scrollbar-hide dark:bg-devtools-surface-dark"
}
  , zb = {
    class: "p-4"
}
  , qb = {
    class: "w-full"
}
  , Kb = {
    class: "mb-6"
}
  , Wb = {
    class: "mb-6"
}
  , Gb = {
    class: "flex space-x-3"
}
  , Jb = {
    class: "mb-6"
}
  , Yb = {
    class: "mb-4 flex"
}
  , Xb = {
    class: "space-y-2"
}
  , Qb = {
    class: "text-devtools-text-primary dark:text-devtools-text-primary-dark"
}
  , Zb = ["onClick"]
  , ey = Re({
    __name: "Settings",
    setup(e) {
        const t = jn()
          , n = X("");
        function r() {
            if (n.value && n.value.toLowerCase() !== "x-data" && !t.customAttributesToDetect.includes(n.value)) {
                const o = [...t.customAttributesToDetect, n.value];
                t.updateSetting("customAttributesToDetect", o),
                n.value = ""
            }
        }
        function s(o) {
            const i = t.customAttributesToDetect.filter(l => l !== o);
            t.updateSetting("customAttributesToDetect", i)
        }
        return (o, i) => (C(),
        N("div", Vb, [b("div", zb, [b("div", qb, [b("div", Kb, [i[4] || (i[4] = b("h4", {
            class: "mb-2 text-lg font-medium text-devtools-text-primary dark:text-devtools-text-primary-dark"
        }, " License management ", -1)), ge(Bb)]), b("div", Wb, [i[8] || (i[8] = b("h4", {
            class: "mb-2 text-lg font-medium text-devtools-text-primary dark:text-devtools-text-primary-dark"
        }, " Theme ", -1)), b("div", Gb, [b("button", {
            class: de(["flex items-center rounded border px-4 py-2", {
                "border-devtools-primary bg-devtools-primary-container text-devtools-primary dark:border-devtools-primary-dark dark:bg-devtools-primary-container-dark dark:text-devtools-primary-dark": G(t).theme === "system",
                "border-devtools-outline text-devtools-text-primary dark:border-devtools-outline-dark dark:text-devtools-text-primary-dark": G(t).theme !== "system"
            }]),
            onClick: i[0] || (i[0] = l => G(t).updateSetting("theme", "system"))
        }, i[5] || (i[5] = [b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "mr-1 h-5 w-5",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
        }, [b("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        }), b("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        })], -1), Te(" System ", -1)]), 2), b("button", {
            class: de(["flex items-center rounded border px-4 py-2", {
                "border-devtools-primary bg-devtools-primary-container text-devtools-primary dark:border-devtools-primary-dark dark:bg-devtools-primary-container-dark dark:text-devtools-primary-dark": G(t).theme === "light",
                "border-devtools-outline text-devtools-text-primary dark:border-devtools-outline-dark dark:text-devtools-text-primary-dark": G(t).theme !== "light"
            }]),
            onClick: i[1] || (i[1] = l => G(t).updateSetting("theme", "light"))
        }, i[6] || (i[6] = [b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "mr-1 h-5 w-5",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
        }, [b("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        })], -1), Te(" Light ", -1)]), 2), b("button", {
            class: de(["flex items-center rounded border px-4 py-2", {
                "border-devtools-primary bg-devtools-primary-container text-devtools-primary dark:border-devtools-primary-dark dark:bg-devtools-primary-container-dark dark:text-devtools-primary-dark": G(t).theme === "dark",
                "border-devtools-outline text-devtools-text-primary dark:border-devtools-outline-dark dark:text-devtools-text-primary-dark": G(t).theme !== "dark"
            }]),
            onClick: i[2] || (i[2] = l => G(t).updateSetting("theme", "dark"))
        }, i[7] || (i[7] = [b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "mr-1 h-5 w-5",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
        }, [b("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        })], -1), Te(" Dark ", -1)]), 2)])]), b("div", Jb, [i[11] || (i[11] = b("h4", {
            class: "mb-2 text-lg font-medium text-devtools-text-primary dark:text-devtools-text-primary-dark"
        }, " Alpine.js detection ", -1)), i[12] || (i[12] = b("p", {
            class: "mb-3 text-sm text-devtools-text-secondary dark:text-devtools-text-secondary-dark"
        }, [Te(" Customize detection of Alpine.js components, by adding additional attributes to look for. "), b("br"), Te(" After adding an attribute, reload the page to see the changes. ")], -1)), b("div", Yb, [it(b("input", {
            "onUpdate:modelValue": i[3] || (i[3] = l => n.value = l),
            type: "text",
            placeholder: "Enter attribute e.g. data-x",
            class: "flex-1 rounded-l border border-devtools-outline bg-devtools-surface px-3 py-2 text-devtools-text-primary dark:border-devtools-outline-dark dark:bg-devtools-surface-dark dark:text-devtools-text-primary-dark",
            onKeyup: Vo(r, ["enter"])
        }, null, 544), [[Qt, n.value]]), b("button", {
            onClick: r,
            class: "rounded-r border border-l-0 border-devtools-primary bg-devtools-primary-container px-4 py-2 text-devtools-primary dark:border-devtools-primary-dark dark:bg-devtools-primary-container-dark dark:text-devtools-primary-dark"
        }, " Add ")]), b("div", Xb, [i[10] || (i[10] = b("div", {
            class: "flex items-center rounded border border-devtools-outline bg-devtools-surface-variant px-3 py-2 dark:border-devtools-outline-dark dark:bg-devtools-surface-variant-dark"
        }, [b("span", {
            class: "font-medium text-devtools-text-primary dark:text-devtools-text-primary-dark"
        }, " x-data "), b("span", {
            class: "ml-auto text-xs text-devtools-text-disabled dark:text-devtools-text-disabled-dark"
        }, "Default")], -1)), (C(!0),
        N(ce, null, Oe(G(t).customAttributesToDetect, l => (C(),
        N("div", {
            key: l,
            class: "flex items-center justify-between rounded border border-devtools-outline px-3 py-2 dark:border-devtools-outline-dark"
        }, [b("span", Qb, re(l), 1), b("button", {
            onClick: a => s(l),
            class: "text-devtools-error dark:text-devtools-error-dark"
        }, i[9] || (i[9] = [b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-5 w-5",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
        }, [b("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        })], -1)]), 8, Zb)]))), 128))])])])])]))
    }
})
  , ty = {
    class: "relative flex h-full max-h-full min-h-full min-w-full flex-col justify-start overflow-y-auto bg-devtools-surface p-1 scrollbar-hide dark:bg-devtools-surface-dark"
}
  , ny = {
    key: 0,
    class: "flex h-full w-full items-center justify-center p-4 text-devtools-text-secondary dark:text-devtools-text-secondary-dark"
}
  , ry = ["onClick"]
  , sy = {
    class: "flex items-baseline"
}
  , oy = {
    class: "font-mono text-xs leading-none"
}
  , iy = {
    class: "ml-2 font-mono leading-none"
}
  , ly = {
    class: "relative flex h-full max-h-full flex-col overflow-y-auto bg-devtools-surface scrollbar-hide dark:bg-devtools-surface-dark"
}
  , ay = {
    key: 0,
    class: "sticky left-0 top-0 z-20 flex h-[27px] w-full items-center justify-between border-b border-devtools-divider bg-devtools-surface px-1 dark:border-devtools-divider-dark dark:bg-devtools-surface-dark"
}
  , cy = {
    key: 1,
    class: "flex h-full w-full items-center justify-center p-4 text-devtools-text-secondary dark:text-devtools-text-secondary-dark"
}
  , uy = {
    key: 0,
    class: "font-mono"
}
  , dy = {
    class: "ml-[8px]"
}
  , fy = {
    key: 1,
    class: "font-mono"
}
  , py = {
    key: 0
}
  , hy = {
    class: "ml-[8px]"
}
  , vy = {
    key: 1
}
  , my = {
    class: "ml-[8px]"
}
  , gy = {
    key: 2
}
  , by = {
    class: "ml-[8px]"
}
  , yy = {
    key: 2,
    class: "p-4 text-devtools-text-secondary dark:text-devtools-text-secondary-dark"
}
  , xy = Re({
    __name: "Stores",
    setup(e) {
        const t = Xs()
          , n = te( () => t.filteredStores)
          , r = te( () => t.selectedStore)
          , s = te( () => t.sortedAttributes?.filter(f => !f.parentId) || [])
          , o = te( () => s.value.filter(f => !f.readOnly && f.type !== "function"))
          , i = te( () => s.value.filter(f => f.readOnly && f.type !== "function"))
          , l = te( () => s.value.filter(f => f.type === "function"))
          , a = te( () => {
            if (!r.value || !r.value.data)
                return !1;
            const f = r.value.data
              , x = Object.keys(f || {});
            return x.length === 1 && x[0] === "value" && "value"in f && "type"in f.value
        }
        )
          , u = te( () => !a.value || !r.value || !r.value.data ? null : r.value.data.value)
          , c = te( () => typeof r.value > "u" || r.value === null ? null : {
            id: `${r.value.id}-primitive`,
            name: r.value.name,
            value: u.value.value,
            type: u.value.type,
            path: "",
            readOnly: !1,
            parentId: ""
        })
          , d = X(!1)
          , p = () => {
            d.value = window.innerWidth < as
        }
        ;
        ut( () => {
            p(),
            window.addEventListener("resize", p)
        }
        ),
        gn( () => {
            window.removeEventListener("resize", p)
        }
        );
        const m = te( () => d.value ? "horizontal" : "vertical");
        function y(f) {
            t.selectStore(f)
        }
        function v(f) {
            f.dataSource === "store" && (a.value && (f.attributeSequence = ""),
            t.editStoreAttribute(f.entityName, f.attributeSequence, f.attributeValue))
        }
        return (f, x) => (C(),
        ke(Vi, {
            direction: m.value,
            class: "font-mono text-[11px] leading-5"
        }, {
            left: Mt( () => [b("div", ty, [n.value.length ? ae("", !0) : (C(),
            N("div", ny, re("No stores found"))), (C(!0),
            N(ce, null, Oe(n.value, S => (C(),
            N("div", {
                key: S.id,
                class: de(["flex cursor-pointer flex-row items-center gap-2 overflow-hidden rounded p-2 transition", {
                    "bg-devtools-state-selected text-devtools-primary dark:bg-devtools-state-selected-dark dark:text-devtools-primary-dark": r.value?.id === S.id,
                    "text-devtools-text-primary hover:bg-devtools-state-hover dark:text-devtools-text-primary-dark dark:hover:bg-devtools-state-hover-dark": r.value?.id !== S.id
                }]),
                onClick: A => y(S.id)
            }, [ge(G(Cs), {
                icon: "carbon:db2-database",
                class: "h-4 w-4"
            }), b("div", sy, [b("span", oy, re(S.name), 1), b("span", iy, re(S.type), 1)])], 10, ry))), 128))])]),
            right: Mt( () => [b("div", ly, [r.value ? (C(),
            N("div", ay, x[0] || (x[0] = [b("div", {
                class: "h-[27px]"
            }, null, -1)]))) : ae("", !0), r.value ? ae("", !0) : (C(),
            N("div", cy, " Select a store to view ")), b("div", {
                class: de([{
                    hidden: !r.value
                }, "flex-1 px-3"])
            }, [a.value && c.value ? (C(),
            N("div", uy, [x[1] || (x[1] = b("div", {
                class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark"
            }, " data: { ", -1)), b("div", dy, [ge($t, {
                id: c.value.id,
                "data-source": "store",
                attribute: c.value,
                "flattened-data": [],
                "entity-id": r.value?.id || 0,
                "entity-name": r.value?.name || "",
                onUpdateData: v
            }, null, 8, ["id", "attribute", "entity-id", "entity-name"])]), x[2] || (x[2] = b("div", {
                class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark"
            }, " } ", -1))])) : s.value && s.value.length > 0 && !a.value ? (C(),
            N("div", fy, [o.value.length > 0 ? (C(),
            N("div", py, [x[3] || (x[3] = b("div", {
                class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark"
            }, " data: { ", -1)), b("div", hy, [(C(!0),
            N(ce, null, Oe(o.value, S => (C(),
            ke($t, {
                key: S.id,
                id: S.id,
                "data-source": "store",
                attribute: S,
                "flattened-data": G(t).selectedStoreFlattenedData || [],
                "entity-id": r.value?.id || 0,
                "entity-name": r.value?.name || "",
                onUpdateData: v
            }, null, 8, ["id", "attribute", "flattened-data", "entity-id", "entity-name"]))), 128))]), x[4] || (x[4] = b("div", {
                class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark"
            }, " } ", -1))])) : ae("", !0), i.value.length > 0 ? (C(),
            N("div", vy, [x[5] || (x[5] = b("div", {
                class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark"
            }, " computed: { ", -1)), b("div", my, [(C(!0),
            N(ce, null, Oe(i.value, S => (C(),
            ke($t, {
                key: S.id,
                id: S.id,
                "data-source": "store",
                attribute: S,
                "flattened-data": G(t).selectedStoreFlattenedData || [],
                "entity-id": r.value?.id || 0,
                "entity-name": r.value?.name || "",
                onUpdateData: v
            }, null, 8, ["id", "attribute", "flattened-data", "entity-id", "entity-name"]))), 128))]), x[6] || (x[6] = b("div", {
                class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark"
            }, " } ", -1))])) : ae("", !0), l.value.length > 0 ? (C(),
            N("div", gy, [x[7] || (x[7] = b("div", {
                class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark"
            }, " methods: { ", -1)), b("div", by, [(C(!0),
            N(ce, null, Oe(l.value, S => (C(),
            ke($t, {
                key: S.id,
                id: S.id,
                "data-source": "store",
                attribute: S,
                "flattened-data": G(t).selectedStoreFlattenedData || [],
                "entity-id": r.value?.id || 0,
                "entity-name": r.value?.name || "",
                onUpdateData: v
            }, null, 8, ["id", "attribute", "flattened-data", "entity-id", "entity-name"]))), 128))]), x[8] || (x[8] = b("div", {
                class: "text-devtools-text-disabled dark:text-devtools-text-disabled-dark"
            }, " } ", -1))])) : ae("", !0)])) : (C(),
            N("div", yy, " No data available "))], 2)])]),
            _: 1
        }, 8, ["direction"]))
    }
})
  , wy = {
    class: "relative flex h-screen w-screen flex-row bg-devtools-surface dark:bg-devtools-surface-dark"
}
  , ky = {
    class: "relative flex min-w-0 flex-1 flex-col"
}
  , _y = Re({
    __name: "Panel",
    setup(e) {
        const t = te( () => {
            switch (n.activeTab) {
            case "components":
                return Gg;
            case "stores":
                return xy;
            case "events":
                return kb;
            case "settings":
                return ey;
            case "debug":
                return Qg;
            default:
                return null
            }
        }
        )
          , n = Bt()
          , r = Js()
          , s = te( () => n.shouldShowNagScreen);
        function o() {
            const i = n.effectiveTheme;
            i === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"),
            document.documentElement.classList.remove("light-theme", "dark-theme"),
            document.documentElement.classList.add(`${i}-theme`)
        }
        return ut( () => {
            o(),
            r.loadLicenseFromStorage(),
            r.validateLicense(),
            n.loadNagScreenFromStorage(),
            je( () => n.effectiveTheme, () => {
                o()
            }
            )
        }
        ),
        (i, l) => (C(),
        N("div", wy, [ge(Rm), b("main", ky, [(C(),
        ke(Hd(t.value))), ge(Dm), s.value ? (C(),
        ke(Vm, {
            key: 0
        })) : ae("", !0)])]))
    }
})
  , Sy = up();
let Yr = null;
async function Ey() {
    Yr || (Yr = lp(_y),
    Yr.use(Sy),
    jn(),
    Bt(),
    Vn(),
    Xs(),
    await wp(),
    oi(),
    Yr.mount("#app"),
    Y.log("Devtools panel app mounted and services initialized."),
    he.devtools.network.onNavigated.addListener( () => {
        Y.log("Page navigation detected, reinitializing connection service..."),
        oi()
    }
    ))
}
Ey();
he.runtime.onMessage.addListener(e => {
    e.type === Ie.ALPINE_DETECTED && (Y.log("Alpine detected message received, re-initializing connection service..."),
    oi())
}
);
