/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/


import {
    // Utilities gốc của Vue Shared
    fi,
    me,
    Sn,
    St,
    Nu,
    As,
    pi,
    Ue, // Đổi tên Object.assign thành extend
    hi,
    fe,
    J,
    En,
    Fn,
    Xi,
    ee,
    Ce,
    ct,
    we,
    Sa,
    Or,
    Mu,
    Ca,
    vi,
    dr,
    Ts,
    st,
    tn,
    Os,
    to,
    Yt,
    Xr,
    Do,
    us,
    Rs,
    Rr,
    zu,
    de,
    Ku,
    Aa,
    Wu,
    vn,
    mi,
    Ta,
    re
} from './base-0.js'


let $e;
class Ra {
    constructor(t = !1) {
        this.detached = t,
            this._active = !0,
            this._on = 0,
            this.effects = [],
            this.cleanups = [],
            this._isPaused = !1,
            this.parent = $e,
            !t && $e && (this.index = ($e.scopes || ($e.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes)
                for (t = 0,
                    n = this.scopes.length; t < n; t++)
                    this.scopes[t].pause();
            for (t = 0,
                n = this.effects.length; t < n; t++)
                this.effects[t].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes)
                for (t = 0,
                    n = this.scopes.length; t < n; t++)
                    this.scopes[t].resume();
            for (t = 0,
                n = this.effects.length; t < n; t++)
                this.effects[t].resume()
        }
    }
    run(t) {
        if (this._active) {
            const n = $e;
            try {
                return $e = this,
                    t()
            } finally {
                $e = n
            }
        }
    }
    on() {
        ++this._on === 1 && (this.prevScope = $e,
            $e = this)
    }
    off() {
        this._on > 0 && --this._on === 0 && ($e = this.prevScope,
            this.prevScope = void 0)
    }
    stop(t) {
        if (this._active) {
            this._active = !1;
            let n, r;
            for (n = 0,
                r = this.effects.length; n < r; n++)
                this.effects[n].stop();
            for (this.effects.length = 0,
                n = 0,
                r = this.cleanups.length; n < r; n++)
                this.cleanups[n]();
            if (this.cleanups.length = 0,
                this.scopes) {
                for (n = 0,
                    r = this.scopes.length; n < r; n++)
                    this.scopes[n].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !t) {
                const s = this.parent.scopes.pop();
                s && s !== this && (this.parent.scopes[this.index] = s,
                    s.index = this.index)
            }
            this.parent = void 0
        }
    }
}
function Ia(e) {
    return new Ra(e)
}
function gi() {
    return $e
}
function Da(e, t = !1) {
    $e && $e.cleanups.push(e)
}
let xe;
const ro = new WeakSet;
class Pa {
    constructor(t) {
        this.fn = t,
            this.deps = void 0,
            this.depsTail = void 0,
            this.flags = 5,
            this.next = void 0,
            this.cleanup = void 0,
            this.scheduler = void 0,
            $e && $e.active && $e.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65,
            ro.has(this) && (ro.delete(this),
                this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || La(this)
    }
    run() {
        if (!(this.flags & 1))
            return this.fn();
        this.flags |= 2,
            Zi(this),
            Na(this);
        const t = xe
            , n = at;
        xe = this,
            at = !0;
        try {
            return this.fn()
        } finally {
            Fa(this),
                xe = t,
                at = n,
                this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep)
                xi(t);
            this.deps = this.depsTail = void 0,
                Zi(this),
                this.onStop && this.onStop(),
                this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? ro.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        Po(this) && this.run()
    }
    get dirty() {
        return Po(this)
    }
}
let $a = 0, fr, pr;
function La(e, t = !1) {
    if (e.flags |= 8,
        t) {
        e.next = pr,
            pr = e;
        return
    }
    e.next = fr,
        fr = e
}
function bi() {
    $a++
}
function yi() {
    if (--$a > 0)
        return;
    if (pr) {
        let t = pr;
        for (pr = void 0; t;) {
            const n = t.next;
            t.next = void 0,
                t.flags &= -9,
                t = n
        }
    }
    let e;
    for (; fr;) {
        let t = fr;
        for (fr = void 0; t;) {
            const n = t.next;
            if (t.next = void 0,
                t.flags &= -9,
                t.flags & 1)
                try {
                    t.trigger()
                } catch (r) {
                    e || (e = r)
                }
            t = n
        }
    }
    if (e)
        throw e
}
function Na(e) {
    for (let t = e.deps; t; t = t.nextDep)
        t.version = -1,
            t.prevActiveLink = t.dep.activeLink,
            t.dep.activeLink = t
}
function Fa(e) {
    let t, n = e.depsTail, r = n;
    for (; r;) {
        const s = r.prevDep;
        r.version === -1 ? (r === n && (n = s),
            xi(r),
            Gu(r)) : t = r,
            r.dep.activeLink = r.prevActiveLink,
            r.prevActiveLink = void 0,
            r = s
    }
    e.deps = t,
        e.depsTail = n
}
function Po(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && (Ma(t.dep.computed) || t.dep.version !== t.version))
            return !0;
    return !!e._dirty
}
function Ma(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17,
        e.globalVersion === xr) || (e.globalVersion = xr,
            !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Po(e))))
        return;
    e.flags |= 2;
    const t = e.dep
        , n = xe
        , r = at;
    xe = e,
        at = !0;
    try {
        Na(e);
        const s = e.fn(e._value);
        (t.version === 0 || Yt(s, e._value)) && (e.flags |= 128,
            e._value = s,
            t.version++)
    } catch (s) {
        throw t.version++,
        s
    } finally {
        xe = n,
            at = r,
            Fa(e),
            e.flags &= -3
    }
}
function xi(e, t = !1) {
    const { dep: n, prevSub: r, nextSub: s } = e;
    if (r && (r.nextSub = s,
        e.prevSub = void 0),
        s && (s.prevSub = r,
            e.nextSub = void 0),
        n.subs === e && (n.subs = r,
            !r && n.computed)) {
        n.computed.flags &= -5;
        for (let o = n.computed.deps; o; o = o.nextDep)
            xi(o, !0)
    }
    !t && !--n.sc && n.map && n.map.delete(n.key)
}
function Gu(e) {
    const { prevDep: t, nextDep: n } = e;
    t && (t.nextDep = n,
        e.prevDep = void 0),
        n && (n.prevDep = t,
            e.nextDep = void 0)
}
let at = !0;
const ja = [];
function Nt() {
    ja.push(at),
        at = !1
}
function Ft() {
    const e = ja.pop();
    at = e === void 0 ? !0 : e
}
function Zi(e) {
    const { cleanup: t } = e;
    if (e.cleanup = void 0,
        t) {
        const n = xe;
        xe = void 0;
        try {
            t()
        } finally {
            xe = n
        }
    }
}
let xr = 0;
class Ju {
    constructor(t, n) {
        this.sub = t,
            this.dep = n,
            this.version = n.version,
            this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class wi {
    constructor(t) {
        this.computed = t,
            this.version = 0,
            this.activeLink = void 0,
            this.subs = void 0,
            this.map = void 0,
            this.key = void 0,
            this.sc = 0,
            this.__v_skip = !0
    }
    track(t) {
        if (!xe || !at || xe === this.computed)
            return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== xe)
            n = this.activeLink = new Ju(xe, this),
                xe.deps ? (n.prevDep = xe.depsTail,
                    xe.depsTail.nextDep = n,
                    xe.depsTail = n) : xe.deps = xe.depsTail = n,
                Ua(n);
        else if (n.version === -1 && (n.version = this.version,
            n.nextDep)) {
            const r = n.nextDep;
            r.prevDep = n.prevDep,
                n.prevDep && (n.prevDep.nextDep = r),
                n.prevDep = xe.depsTail,
                n.nextDep = void 0,
                xe.depsTail.nextDep = n,
                xe.depsTail = n,
                xe.deps === n && (xe.deps = r)
        }
        return n
    }
    trigger(t) {
        this.version++,
            xr++,
            this.notify(t)
    }
    notify(t) {
        bi();
        try {
            for (let n = this.subs; n; n = n.prevSub)
                n.sub.notify() && n.sub.dep.notify()
        } finally {
            yi()
        }
    }
}
function Ua(e) {
    if (e.dep.sc++,
        e.sub.flags & 4) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let r = t.deps; r; r = r.nextDep)
                Ua(r)
        }
        const n = e.dep.subs;
        n !== e && (e.prevSub = n,
            n && (n.nextSub = e)),
            e.dep.subs = e
    }
}
const ds = new WeakMap
    , fn = Symbol("")
    , $o = Symbol("")
    , wr = Symbol("");
function Ne(e, t, n) {
    if (at && xe) {
        let r = ds.get(e);
        r || ds.set(e, r = new Map);
        let s = r.get(n);
        s || (r.set(n, s = new wi),
            s.map = r,
            s.key = n),
            s.track()
    }
}
function Tt(e, t, n, r, s, o) {
    const i = ds.get(e);
    if (!i) {
        xr++;
        return
    }
    const l = a => {
        a && a.trigger()
    }
        ;
    if (bi(),
        t === "clear")
        i.forEach(l);
    else {
        const a = J(e)
            , u = a && vi(n);
        if (a && n === "length") {
            const c = Number(r);
            i.forEach((d, p) => {
                (p === "length" || p === wr || !ct(p) && p >= c) && l(d)
            }
            )
        } else
            switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)),
            u && l(i.get(wr)),
            t) {
                case "add":
                    a ? u && l(i.get("length")) : (l(i.get(fn)),
                        En(e) && l(i.get($o)));
                    break;
                case "delete":
                    a || (l(i.get(fn)),
                        En(e) && l(i.get($o)));
                    break;
                case "set":
                    En(e) && l(i.get(fn));
                    break
            }
    }
    yi()
}
function Yu(e, t) {
    const n = ds.get(e);
    return n && n.get(t)
}
function bn(e) {
    const t = ue(e);
    return t === e ? t : (Ne(t, "iterate", wr),
        nt(e) ? t : t.map(De))
}
function Is(e) {
    return Ne(e = ue(e), "iterate", wr),
        e
}
const Xu = {
    __proto__: null,
    [Symbol.iterator]() {
        return so(this, Symbol.iterator, De)
    },
    concat(...e) {
        return bn(this).concat(...e.map(t => J(t) ? bn(t) : t))
    },
    entries() {
        return so(this, "entries", e => (e[1] = De(e[1]),
            e))
    },
    every(e, t) {
        return Ct(this, "every", e, t, void 0, arguments)
    },
    filter(e, t) {
        return Ct(this, "filter", e, t, n => n.map(De), arguments)
    },
    find(e, t) {
        return Ct(this, "find", e, t, De, arguments)
    },
    findIndex(e, t) {
        return Ct(this, "findIndex", e, t, void 0, arguments)
    },
    findLast(e, t) {
        return Ct(this, "findLast", e, t, De, arguments)
    },
    findLastIndex(e, t) {
        return Ct(this, "findLastIndex", e, t, void 0, arguments)
    },
    forEach(e, t) {
        return Ct(this, "forEach", e, t, void 0, arguments)
    },
    includes(...e) {
        return oo(this, "includes", e)
    },
    indexOf(...e) {
        return oo(this, "indexOf", e)
    },
    join(e) {
        return bn(this).join(e)
    },
    lastIndexOf(...e) {
        return oo(this, "lastIndexOf", e)
    },
    map(e, t) {
        return Ct(this, "map", e, t, void 0, arguments)
    },
    pop() {
        return Gn(this, "pop")
    },
    push(...e) {
        return Gn(this, "push", e)
    },
    reduce(e, ...t) {
        return el(this, "reduce", e, t)
    },
    reduceRight(e, ...t) {
        return el(this, "reduceRight", e, t)
    },
    shift() {
        return Gn(this, "shift")
    },
    some(e, t) {
        return Ct(this, "some", e, t, void 0, arguments)
    },
    splice(...e) {
        return Gn(this, "splice", e)
    },
    toReversed() {
        return bn(this).toReversed()
    },
    toSorted(e) {
        return bn(this).toSorted(e)
    },
    toSpliced(...e) {
        return bn(this).toSpliced(...e)
    },
    unshift(...e) {
        return Gn(this, "unshift", e)
    },
    values() {
        return so(this, "values", De)
    }
};
function so(e, t, n) {
    const r = Is(e)
        , s = r[t]();
    return r !== e && !nt(e) && (s._next = s.next,
        s.next = () => {
            const o = s._next();
            return o.value && (o.value = n(o.value)),
                o
        }
    ),
        s
}
const Qu = Array.prototype;
function Ct(e, t, n, r, s, o) {
    const i = Is(e)
        , l = i !== e && !nt(e)
        , a = i[t];
    if (a !== Qu[t]) {
        const d = a.apply(e, o);
        return l ? De(d) : d
    }
    let u = n;
    i !== e && (l ? u = function (d, p) {
        return n.call(this, De(d), p, e)
    }
        : n.length > 2 && (u = function (d, p) {
            return n.call(this, d, p, e)
        }
        ));
    const c = a.call(i, u, r);
    return l && s ? s(c) : c
}
function el(e, t, n, r) {
    const s = Is(e);
    let o = n;
    return s !== e && (nt(e) ? n.length > 3 && (o = function (i, l, a) {
        return n.call(this, i, l, a, e)
    }
    ) : o = function (i, l, a) {
        return n.call(this, i, De(l), a, e)
    }
    ),
        s[t](o, ...r)
}
function oo(e, t, n) {
    const r = ue(e);
    Ne(r, "iterate", wr);
    const s = r[t](...n);
    return (s === -1 || s === !1) && _i(n[0]) ? (n[0] = ue(n[0]),
        r[t](...n)) : s
}
function Gn(e, t, n = []) {
    Nt(),
        bi();
    const r = ue(e)[t].apply(e, n);
    return yi(),
        Ft(),
        r
}
const Zu = fi("__proto__,__v_isRef,__isVue")
    , Ha = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(ct));
function ed(e) {
    ct(e) || (e = String(e));
    const t = ue(this);
    return Ne(t, "has", e),
        t.hasOwnProperty(e)
}
class Ba {
    constructor(t = !1, n = !1) {
        this._isReadonly = t,
            this._isShallow = n
    }
    get(t, n, r) {
        if (n === "__v_skip")
            return t.__v_skip;
        const s = this._isReadonly
            , o = this._isShallow;
        if (n === "__v_isReactive")
            return !s;
        if (n === "__v_isReadonly")
            return s;
        if (n === "__v_isShallow")
            return o;
        if (n === "__v_raw")
            return r === (s ? o ? Ga : Wa : o ? Ka : qa).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
        const i = J(t);
        if (!s) {
            let a;
            if (i && (a = Xu[n]))
                return a;
            if (n === "hasOwnProperty")
                return ed
        }
        const l = Reflect.get(t, n, _e(t) ? t : r);
        return (ct(n) ? Ha.has(n) : Zu(n)) || (s || Ne(t, "get", n),
            o) ? l : _e(l) ? i && vi(n) ? l : l.value : we(l) ? s ? ki(l) : Ps(l) : l
    }
}
class Va extends Ba {
    constructor(t = !1) {
        super(!1, t)
    }
    set(t, n, r, s) {
        let o = t[n];
        if (!this._isShallow) {
            const a = Zt(o);
            if (!nt(r) && !Zt(r) && (o = ue(o),
                r = ue(r)),
                !J(t) && _e(o) && !_e(r))
                return a ? !1 : (o.value = r,
                    !0)
        }
        const i = J(t) && vi(n) ? Number(n) < t.length : fe(t, n)
            , l = Reflect.set(t, n, r, _e(t) ? t : s);
        return t === ue(s) && (i ? Yt(r, o) && Tt(t, "set", n, r) : Tt(t, "add", n, r)),
            l
    }
    deleteProperty(t, n) {
        const r = fe(t, n);
        t[n];
        const s = Reflect.deleteProperty(t, n);
        return s && r && Tt(t, "delete", n, void 0),
            s
    }
    has(t, n) {
        const r = Reflect.has(t, n);
        return (!ct(n) || !Ha.has(n)) && Ne(t, "has", n),
            r
    }
    ownKeys(t) {
        return Ne(t, "iterate", J(t) ? "length" : fn),
            Reflect.ownKeys(t)
    }
}
class za extends Ba {
    constructor(t = !1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const td = new Va
    , nd = new za
    , rd = new Va(!0)
    , sd = new za(!0)
    , Lo = e => e
    , Hr = e => Reflect.getPrototypeOf(e);
function od(e, t, n) {
    return function (...r) {
        const s = this.__v_raw
            , o = ue(s)
            , i = En(o)
            , l = e === "entries" || e === Symbol.iterator && i
            , a = e === "keys" && i
            , u = s[e](...r)
            , c = n ? Lo : t ? fs : De;
        return !t && Ne(o, "iterate", a ? $o : fn),
        {
            next() {
                const { value: d, done: p } = u.next();
                return p ? {
                    value: d,
                    done: p
                } : {
                    value: l ? [c(d[0]), c(d[1])] : c(d),
                    done: p
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function Br(e) {
    return function (...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function id(e, t) {
    const n = {
        get(s) {
            const o = this.__v_raw
                , i = ue(o)
                , l = ue(s);
            e || (Yt(s, l) && Ne(i, "get", s),
                Ne(i, "get", l));
            const { has: a } = Hr(i)
                , u = t ? Lo : e ? fs : De;
            if (a.call(i, s))
                return u(o.get(s));
            if (a.call(i, l))
                return u(o.get(l));
            o !== i && o.get(s)
        },
        get size() {
            const s = this.__v_raw;
            return !e && Ne(ue(s), "iterate", fn),
                Reflect.get(s, "size", s)
        },
        has(s) {
            const o = this.__v_raw
                , i = ue(o)
                , l = ue(s);
            return e || (Yt(s, l) && Ne(i, "has", s),
                Ne(i, "has", l)),
                s === l ? o.has(s) : o.has(s) || o.has(l)
        },
        forEach(s, o) {
            const i = this
                , l = i.__v_raw
                , a = ue(l)
                , u = t ? Lo : e ? fs : De;
            return !e && Ne(a, "iterate", fn),
                l.forEach((c, d) => s.call(o, u(c), u(d), i))
        }
    };
    return Ue(n, e ? {
        add: Br("add"),
        set: Br("set"),
        delete: Br("delete"),
        clear: Br("clear")
    } : {
        add(s) {
            !t && !nt(s) && !Zt(s) && (s = ue(s));
            const o = ue(this);
            return Hr(o).has.call(o, s) || (o.add(s),
                Tt(o, "add", s, s)),
                this
        },
        set(s, o) {
            !t && !nt(o) && !Zt(o) && (o = ue(o));
            const i = ue(this)
                , { has: l, get: a } = Hr(i);
            let u = l.call(i, s);
            u || (s = ue(s),
                u = l.call(i, s));
            const c = a.call(i, s);
            return i.set(s, o),
                u ? Yt(o, c) && Tt(i, "set", s, o) : Tt(i, "add", s, o),
                this
        },
        delete(s) {
            const o = ue(this)
                , { has: i, get: l } = Hr(o);
            let a = i.call(o, s);
            a || (s = ue(s),
                a = i.call(o, s)),
                l && l.call(o, s);
            const u = o.delete(s);
            return a && Tt(o, "delete", s, void 0),
                u
        },
        clear() {
            const s = ue(this)
                , o = s.size !== 0
                , i = s.clear();
            return o && Tt(s, "clear", void 0, void 0),
                i
        }
    }),
        ["keys", "values", "entries", Symbol.iterator].forEach(s => {
            n[s] = od(s, e, t)
        }
        ),
        n
}
function Ds(e, t) {
    const n = id(e, t);
    return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(fe(n, s) && s in r ? n : r, s, o)
}
const ld = {
    get: Ds(!1, !1)
}
    , ad = {
        get: Ds(!1, !0)
    }
    , cd = {
        get: Ds(!0, !1)
    }
    , ud = {
        get: Ds(!0, !0)
    }
    , qa = new WeakMap
    , Ka = new WeakMap
    , Wa = new WeakMap
    , Ga = new WeakMap;
function dd(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}
function fd(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : dd(Mu(e))
}
function Ps(e) {
    return Zt(e) ? e : $s(e, !1, td, ld, qa)
}
function pd(e) {
    return $s(e, !1, rd, ad, Ka)
}
function ki(e) {
    return $s(e, !0, nd, cd, Wa)
}
function hd(e) {
    return $s(e, !0, sd, ud, Ga)
}
function $s(e, t, n, r, s) {
    if (!we(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const o = fd(e);
    if (o === 0)
        return e;
    const i = s.get(e);
    if (i)
        return i;
    const l = new Proxy(e, o === 2 ? r : n);
    return s.set(e, l),
        l
}
function Xt(e) {
    return Zt(e) ? Xt(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Zt(e) {
    return !!(e && e.__v_isReadonly)
}
function nt(e) {
    return !!(e && e.__v_isShallow)
}
function _i(e) {
    return e ? !!e.__v_raw : !1
}
function ue(e) {
    const t = e && e.__v_raw;
    return t ? ue(t) : e
}
function Si(e) {
    return !fe(e, "__v_skip") && Object.isExtensible(e) && Do(e, "__v_skip", !0),
        e
}
const De = e => we(e) ? Ps(e) : e
    , fs = e => we(e) ? ki(e) : e;
function _e(e) {
    return e ? e.__v_isRef === !0 : !1
}
function X(e) {
    return Ja(e, !1)
}
function Ei(e) {
    return Ja(e, !0)
}
function Ja(e, t) {
    return _e(e) ? e : new vd(e, t)
}
class vd {
    constructor(t, n) {
        this.dep = new wi,
            this.__v_isRef = !0,
            this.__v_isShallow = !1,
            this._rawValue = n ? t : ue(t),
            this._value = n ? t : De(t),
            this.__v_isShallow = n
    }
    get value() {
        return this.dep.track(),
            this._value
    }
    set value(t) {
        const n = this._rawValue
            , r = this.__v_isShallow || nt(t) || Zt(t);
        t = r ? t : ue(t),
            Yt(t, n) && (this._rawValue = t,
                this._value = r ? t : De(t),
                this.dep.trigger())
    }
}
function G(e) {
    return _e(e) ? e.value : e
}
function ps(e) {
    return ee(e) ? e() : G(e)
}
const md = {
    get: (e, t, n) => t === "__v_raw" ? e : G(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
        const s = e[t];
        return _e(s) && !_e(n) ? (s.value = n,
            !0) : Reflect.set(e, t, n, r)
    }
};
function Ya(e) {
    return Xt(e) ? e : new Proxy(e, md)
}
function gd(e) {
    const t = J(e) ? new Array(e.length) : {};
    for (const n in e)
        t[n] = yd(e, n);
    return t
}
class bd {
    constructor(t, n, r) {
        this._object = t,
            this._key = n,
            this._defaultValue = r,
            this.__v_isRef = !0,
            this._value = void 0
    }
    get value() {
        const t = this._object[this._key];
        return this._value = t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return Yu(ue(this._object), this._key)
    }
}
function yd(e, t, n) {
    const r = e[t];
    return _e(r) ? r : new bd(e, t, n)
}
class xd {
    constructor(t, n, r) {
        this.fn = t,
            this.setter = n,
            this._value = void 0,
            this.dep = new wi(this),
            this.__v_isRef = !0,
            this.deps = void 0,
            this.depsTail = void 0,
            this.flags = 16,
            this.globalVersion = xr - 1,
            this.next = void 0,
            this.effect = this,
            this.__v_isReadonly = !n,
            this.isSSR = r
    }
    notify() {
        if (this.flags |= 16,
            !(this.flags & 8) && xe !== this)
            return La(this, !0),
                !0
    }
    get value() {
        const t = this.dep.track();
        return Ma(this),
            t && (t.version = this.dep.version),
            this._value
    }
    set value(t) {
        this.setter && this.setter(t)
    }
}
function wd(e, t, n = !1) {
    let r, s;
    return ee(e) ? r = e : (r = e.get,
        s = e.set),
        new xd(r, s, n)
}
const Vr = {}
    , hs = new WeakMap;
let cn;
function kd(e, t = !1, n = cn) {
    if (n) {
        let r = hs.get(n);
        r || hs.set(n, r = []),
            r.push(e)
    }
}
function _d(e, t, n = me) {
    const { immediate: r, deep: s, once: o, scheduler: i, augmentJob: l, call: a } = n
        , u = k => s ? k : nt(k) || s === !1 || s === 0 ? Ot(k, 1) : Ot(k);
    let c, d, p, m, y = !1, v = !1;
    if (_e(e) ? (d = () => e.value,
        y = nt(e)) : Xt(e) ? (d = () => u(e),
            y = !0) : J(e) ? (v = !0,
                y = e.some(k => Xt(k) || nt(k)),
                d = () => e.map(k => {
                    if (_e(k))
                        return k.value;
                    if (Xt(k))
                        return u(k);
                    if (ee(k))
                        return a ? a(k, 2) : k()
                }
                )) : ee(e) ? t ? d = a ? () => a(e, 2) : e : d = () => {
                    if (p) {
                        Nt();
                        try {
                            p()
                        } finally {
                            Ft()
                        }
                    }
                    const k = cn;
                    cn = c;
                    try {
                        return a ? a(e, 3, [m]) : e(m)
                    } finally {
                        cn = k
                    }
                }
        : d = St,
        t && s) {
        const k = d
            , $ = s === !0 ? 1 / 0 : s;
        d = () => Ot(k(), $)
    }
    const f = gi()
        , x = () => {
            c.stop(),
                f && f.active && hi(f.effects, c)
        }
        ;
    if (o && t) {
        const k = t;
        t = (...$) => {
            k(...$),
                x()
        }
    }
    let S = v ? new Array(e.length).fill(Vr) : Vr;
    const A = k => {
        if (!(!(c.flags & 1) || !c.dirty && !k))
            if (t) {
                const $ = c.run();
                if (s || y || (v ? $.some((O, U) => Yt(O, S[U])) : Yt($, S))) {
                    p && p();
                    const O = cn;
                    cn = c;
                    try {
                        const U = [$, S === Vr ? void 0 : v && S[0] === Vr ? [] : S, m];
                        S = $,
                            a ? a(t, 3, U) : t(...U)
                    } finally {
                        cn = O
                    }
                }
            } else
                c.run()
    }
        ;
    return l && l(A),
        c = new Pa(d),
        c.scheduler = i ? () => i(A, !1) : A,
        m = k => kd(k, !1, c),
        p = c.onStop = () => {
            const k = hs.get(c);
            if (k) {
                if (a)
                    a(k, 4);
                else
                    for (const $ of k)
                        $();
                hs.delete(c)
            }
        }
        ,
        t ? r ? A(!0) : S = c.run() : i ? i(A.bind(null, !0), !0) : c.run(),
        x.pause = c.pause.bind(c),
        x.resume = c.resume.bind(c),
        x.stop = x,
        x
}
function Ot(e, t = 1 / 0, n) {
    if (t <= 0 || !we(e) || e.__v_skip || (n = n || new Set,
        n.has(e)))
        return e;
    if (n.add(e),
        t--,
        _e(e))
        Ot(e.value, t, n);
    else if (J(e))
        for (let r = 0; r < e.length; r++)
            Ot(e[r], t, n);
    else if (Fn(e) || En(e))
        e.forEach(r => {
            Ot(r, t, n)
        }
        );
    else if (Ca(e)) {
        for (const r in e)
            Ot(e[r], t, n);
        for (const r of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, r) && Ot(e[r], t, n)
    }
    return e
}

export {
    $e,
    Ia,
    Ra,
    gi,
    Da,
    xe,
    Pa,
    $a,
    fr,
    pr,
    La,
    bi,
    yi,
    Na,
    Fa,
    Po,
    Ma,
    xi,
    Gu,
    at,
    Nt,
    Ft,
    Zi,
    xr,
    Ju,
    wi,
    Ua,
    fn,
    $o,
    wr,
    Ne,
    Tt,
    Yu,
    bn,
    Is,
    so,
    Ct,
    el,
    oo,
    Gn,
    ed,
    Ba,
    Va,
    za,
    td,
    nd,
    rd,
    sd,
    qa,
    Ka,
    Wa,
    Ga,
    $s,
    Ps,
    pd,
    ki,
    hd,
    Xt,
    Zt,
    nt,
    _i,
    ue,
    Si,
    De,
    fs,
    _e,
    X,
    Ei,
    Ja,
    vd,
    G,
    ps,
    Ya,
    gd,
    bd,
    yd,
    xd,
    wd,
    Vr,
    cn,
    kd,
    _d,
    Ot
};

