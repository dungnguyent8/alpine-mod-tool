import {
    // Utilities gÑc cça Vue Shared
    fi,
    me,
    Sn,
    St,
    Nu,
    As,
    pi,
    Ue, // Õi tên Object.assign thành extend
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

import {
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
} from './base-1.js'

import {
    Ir,
    Et,
    Ls,
    Sd,
    Be,
    yt,
    Cn,
    Kt,
    _n,
    Xa,
    vs,
    Rn,
    Ed,
    Ci,
    Qa,
    Cd,
    tl,
    Za,
    kr,
    ec,
    Pe,
    tc,
    ms,
    Mt,
    it,
    on,
    Ad,
    Td,
    Ai,
    Re,
    nc,
    hr,
    An,
    rc,
    Od,
    Rd,
    sc,
    Id,
    Ns,
    Ht,
    Dd,
    ut,
    Pd,
    $d,
    Ld,
    gn,
    Nd,
    Fd,
    Md,
    jd,
    Ud,
    ic,
    Hd,
    lc,
    nl,
    Oe,
    No,
    Fo,
    vr,
    io,
    Bd,
    rl,
    Mo,
    Vd,
    zd,
    sl,
    cc,
    uc,
    gs,
    qd,
    ol,
    Kd,
    jo,
    He,
    ar,
    il,
    Wd,
    dc,
    Gd,
    Jd,
    pn,
    Yd,
    mr,
    Xd,
    fc,
    pc,
    hc,
    Qd,
    Zd,
    vc,
    Uo,
    ef,
    mc,
    ll,
    Ti,
    Oi,
    tf,
    gc,
    bc,
    yc,
    nf,
    rf,
    Xe,
    sf,
    of,
    lo,
    ln,
    lf,
    xc,
    af,
    wc,
    al,
    cf,
    uf,
    je,
    kc,
    df,
    _c,
    ff,
    pf,
    Sc,
    Fs,
    cl,
    hf,
    vf,
    mf,
    ul,
    gf,
    Ec,
    bf,
    ce,
    Ms,
    jt,
    ao,
    gr,
    Qe,
    C,
    yf,
    _r,
    dl,
    Cc,
    N,
    ke,
    Sr,
    Jn,
    Ac,
    Qr,
    b,
    ge,
    xf,
    wf,
    In,
    Te,
    ae,
    wt,
    Wt,
    Ri,
    kf,
    mt,
    _f,
    Sf,
    Ef,
    Fe,
    Tc,
    bs,
    Ho,
    Dr,
    fl,
    Oc,
    Er,
    Cf,
    Af,
    pl,
    Rc,
    Tf,
    Of,
    js,
    Rf,
    If,
    te,
    hl,
    Df
} from './base-2.js'

/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Bo;
const vl = typeof window < "u" && window.trustedTypes;
if (vl)
    try {
        Bo = vl.createPolicy("vue", {
            createHTML: e => e
        })
    } catch {}
const Ic = Bo ? e => Bo.createHTML(e) : e => e
  , Pf = "http://www.w3.org/2000/svg"
  , $f = "http://www.w3.org/1998/Math/MathML"
  , At = typeof document < "u" ? document : null
  , ml = At && At.createElement("template")
  , Lf = {
    insert: (e, t, n) => {
        t.insertBefore(e, n || null)
    }
    ,
    remove: e => {
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e, t, n, r) => {
        const s = t === "svg" ? At.createElementNS(Pf, e) : t === "mathml" ? At.createElementNS($f, e) : n ? At.createElement(e, {
            is: n
        }) : At.createElement(e);
        return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple),
        s
    }
    ,
    createText: e => At.createTextNode(e),
    createComment: e => At.createComment(e),
    setText: (e, t) => {
        e.nodeValue = t
    }
    ,
    setElementText: (e, t) => {
        e.textContent = t
    }
    ,
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => At.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, r, s, o) {
        const i = n ? n.previousSibling : t.lastChild;
        if (s && (s === o || s.nextSibling))
            for (; t.insertBefore(s.cloneNode(!0), n),
            !(s === o || !(s = s.nextSibling)); )
                ;
        else {
            ml.innerHTML = Ic(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
            const l = ml.content;
            if (r === "svg" || r === "mathml") {
                const a = l.firstChild;
                for (; a.firstChild; )
                    l.appendChild(a.firstChild);
                l.removeChild(a)
            }
            t.insertBefore(l, n)
        }
        return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , Nf = Symbol("_vtc");
function Ff(e, t, n) {
    const r = e[Nf];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const ys = Symbol("_vod")
  , Dc = Symbol("_vsh")
  , co = {
    beforeMount(e, {value: t}, {transition: n}) {
        e[ys] = e.style.display === "none" ? "" : e.style.display,
        n && t ? n.beforeEnter(e) : Yn(e, t)
    },
    mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    },
    updated(e, {value: t, oldValue: n}, {transition: r}) {
        !t != !n && (r ? t ? (r.beforeEnter(e),
        Yn(e, !0),
        r.enter(e)) : r.leave(e, () => {
            Yn(e, !1)
        }
        ) : Yn(e, t))
    },
    beforeUnmount(e, {value: t}) {
        Yn(e, t)
    }
};
function Yn(e, t) {
    e.style.display = t ? e[ys] : "none",
    e[Dc] = !t
}
const Mf = Symbol("")
  , jf = /(^|;)\s*display\s*:/;
function Uf(e, t, n) {
    const r = e.style
      , s = Ce(n);
    let o = !1;
    if (n && !s) {
        if (t)
            if (Ce(t))
                for (const i of t.split(";")) {
                    const l = i.slice(0, i.indexOf(":")).trim();
                    n[l] == null && Zr(r, l, "")
                }
            else
                for (const i in t)
                    n[i] == null && Zr(r, i, "");
        for (const i in n)
            i === "display" && (o = !0),
            Zr(r, i, n[i])
    } else if (s) {
        if (t !== n) {
            const i = r[Mf];
            i && (n += ";" + i),
            r.cssText = n,
            o = jf.test(n)
        }
    } else
        t && e.removeAttribute("style");
    ys in e && (e[ys] = o ? r.display : "",
    e[Dc] && (r.display = "none"))
}
const gl = /\s*!important$/;
function Zr(e, t, n) {
    if (J(n))
        n.forEach(r => Zr(e, t, r));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const r = Hf(e, t);
        gl.test(n) ? e.setProperty(tn(r), n.replace(gl, ""), "important") : e[r] = n
    }
}
const bl = ["Webkit", "Moz", "ms"]
  , uo = {};
function Hf(e, t) {
    const n = uo[t];
    if (n)
        return n;
    let r = st(t);
    if (r !== "filter" && r in e)
        return uo[t] = r;
    r = Os(r);
    for (let s = 0; s < bl.length; s++) {
        const o = bl[s] + r;
        if (o in e)
            return uo[t] = o
    }
    return t
}
const yl = "http://www.w3.org/1999/xlink";
function xl(e, t, n, r, s, o=Ku(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(yl, t.slice(6, t.length)) : e.setAttributeNS(yl, t, n) : n == null || o && !Aa(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : ct(n) ? String(n) : n)
}
function wl(e, t, n, r, s) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? Ic(n) : n);
        return
    }
    const o = e.tagName;
    if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
        const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value
          , a = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
        (l !== a || !("_value"in e)) && (e.value = a),
        n == null && e.removeAttribute(t),
        e._value = n;
        return
    }
    let i = !1;
    if (n === "" || n == null) {
        const l = typeof e[t];
        l === "boolean" ? n = Aa(n) : n == null && l === "string" ? (n = "",
        i = !0) : l === "number" && (n = 0,
        i = !0)
    }
    try {
        e[t] = n
    } catch {}
    i && e.removeAttribute(s || t)
}
function Rt(e, t, n, r) {
    e.addEventListener(t, n, r)
}
function Bf(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
const kl = Symbol("_vei");
function Vf(e, t, n, r, s=null) {
    const o = e[kl] || (e[kl] = {})
      , i = o[t];
    if (r && i)
        i.value = r;
    else {
        const [l,a] = zf(t);
        if (r) {
            const u = o[t] = Wf(r, s);
            Rt(e, l, u, a)
        } else
            i && (Bf(e, l, i, a),
            o[t] = void 0)
    }
}
const _l = /(?:Once|Passive|Capture)$/;
function zf(e) {
    let t;
    if (_l.test(e)) {
        t = {};
        let r;
        for (; r = e.match(_l); )
            e = e.slice(0, e.length - r[0].length),
            t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : tn(e.slice(2)), t]
}
let fo = 0;
const qf = Promise.resolve()
  , Kf = () => fo || (qf.then( () => fo = 0),
fo = Date.now());
function Wf(e, t) {
    const n = r => {
        if (!r._vts)
            r._vts = Date.now();
        else if (r._vts <= n.attached)
            return;
        Et(Gf(r, n.value), t, 5, [r])
    }
    ;
    return n.value = e,
    n.attached = Kf(),
    n
}
function Gf(e, t) {
    if (J(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(r => s => !s._stopped && r && r(s))
    } else
        return t
}
const Sl = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , Jf = (e, t, n, r, s, o) => {
    const i = s === "svg";
    t === "class" ? Ff(e, r, i) : t === "style" ? Uf(e, n, r) : As(t) ? pi(t) || Vf(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : Yf(e, t, r, i)) ? (wl(e, t, r),
    !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && xl(e, t, r, i, o, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !Ce(r)) ? wl(e, st(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r),
    xl(e, t, r, i))
}
;
function Yf(e, t, n, r) {
    if (r)
        return !!(t === "innerHTML" || t === "textContent" || t in e && Sl(t) && ee(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const s = e.tagName;
        if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
            return !1
    }
    return Sl(t) && Ce(n) ? !1 : t in e
}
const en = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return J(t) ? n => Xr(t, n) : t
}
;
function Xf(e) {
    e.target.composing = !0
}
function El(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const rt = Symbol("_assign")
  , Qt = {
    created(e, {modifiers: {lazy: t, trim: n, number: r}}, s) {
        e[rt] = en(s);
        const o = r || s.props && s.props.type === "number";
        Rt(e, t ? "change" : "input", i => {
            if (i.target.composing)
                return;
            let l = e.value;
            n && (l = l.trim()),
            o && (l = us(l)),
            e[rt](l)
        }
        ),
        n && Rt(e, "change", () => {
            e.value = e.value.trim()
        }
        ),
        t || (Rt(e, "compositionstart", Xf),
        Rt(e, "compositionend", El),
        Rt(e, "change", El))
    },
    mounted(e, {value: t}) {
        e.value = t ?? ""
    },
    beforeUpdate(e, {value: t, oldValue: n, modifiers: {lazy: r, trim: s, number: o}}, i) {
        if (e[rt] = en(i),
        e.composing)
            return;
        const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? us(e.value) : e.value
          , a = t ?? "";
        l !== a && (document.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === a) || (e.value = a))
    }
}
  , Pc = {
    deep: !0,
    created(e, t, n) {
        e[rt] = en(n),
        Rt(e, "change", () => {
            const r = e._modelValue
              , s = Dn(e)
              , o = e.checked
              , i = e[rt];
            if (J(r)) {
                const l = mi(r, s)
                  , a = l !== -1;
                if (o && !a)
                    i(r.concat(s));
                else if (!o && a) {
                    const u = [...r];
                    u.splice(l, 1),
                    i(u)
                }
            } else if (Fn(r)) {
                const l = new Set(r);
                o ? l.add(s) : l.delete(s),
                i(l)
            } else
                i($c(e, o))
        }
        )
    },
    mounted: Cl,
    beforeUpdate(e, t, n) {
        e[rt] = en(n),
        Cl(e, t, n)
    }
};
function Cl(e, {value: t, oldValue: n}, r) {
    e._modelValue = t;
    let s;
    if (J(t))
        s = mi(t, r.props.value) > -1;
    else if (Fn(t))
        s = t.has(r.props.value);
    else {
        if (t === n)
            return;
        s = vn(t, $c(e, !0))
    }
    e.checked !== s && (e.checked = s)
}
const Qf = {
    created(e, {value: t}, n) {
        e.checked = vn(t, n.props.value),
        e[rt] = en(n),
        Rt(e, "change", () => {
            e[rt](Dn(e))
        }
        )
    },
    beforeUpdate(e, {value: t, oldValue: n}, r) {
        e[rt] = en(r),
        t !== n && (e.checked = vn(t, r.props.value))
    }
}
  , Zf = {
    deep: !0,
    created(e, {value: t, modifiers: {number: n}}, r) {
        const s = Fn(t);
        Rt(e, "change", () => {
            const o = Array.prototype.filter.call(e.options, i => i.selected).map(i => n ? us(Dn(i)) : Dn(i));
            e[rt](e.multiple ? s ? new Set(o) : o : o[0]),
            e._assigning = !0,
            Rn( () => {
                e._assigning = !1
            }
            )
        }
        ),
        e[rt] = en(r)
    },
    mounted(e, {value: t}) {
        Al(e, t)
    },
    beforeUpdate(e, t, n) {
        e[rt] = en(n)
    },
    updated(e, {value: t}) {
        e._assigning || Al(e, t)
    }
};
function Al(e, t) {
    const n = e.multiple
      , r = J(t);
    if (!(n && !r && !Fn(t))) {
        for (let s = 0, o = e.options.length; s < o; s++) {
            const i = e.options[s]
              , l = Dn(i);
            if (n)
                if (r) {
                    const a = typeof l;
                    a === "string" || a === "number" ? i.selected = t.some(u => String(u) === String(l)) : i.selected = mi(t, l) > -1
                } else
                    i.selected = t.has(l);
            else if (vn(Dn(i), t)) {
                e.selectedIndex !== s && (e.selectedIndex = s);
                return
            }
        }
        !n && e.selectedIndex !== -1 && (e.selectedIndex = -1)
    }
}
function Dn(e) {
    return "_value"in e ? e._value : e.value
}
function $c(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t
}
const ep = {
    created(e, t, n) {
        zr(e, t, n, null, "created")
    },
    mounted(e, t, n) {
        zr(e, t, n, null, "mounted")
    },
    beforeUpdate(e, t, n, r) {
        zr(e, t, n, r, "beforeUpdate")
    },
    updated(e, t, n, r) {
        zr(e, t, n, r, "updated")
    }
};
function tp(e, t) {
    switch (e) {
    case "SELECT":
        return Zf;
    case "TEXTAREA":
        return Qt;
    default:
        switch (t) {
        case "checkbox":
            return Pc;
        case "radio":
            return Qf;
        default:
            return Qt
        }
    }
}
function zr(e, t, n, r, s) {
    const i = tp(e.tagName, n.props && n.props.type)[s];
    i && i(e, t, n, r)
}
const np = ["ctrl", "shift", "alt", "meta"]
  , rp = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button"in e && e.button !== 0,
    middle: e => "button"in e && e.button !== 1,
    right: e => "button"in e && e.button !== 2,
    exact: (e, t) => np.some(n => e[`${n}Key`] && !t.includes(n))
}
  , tt = (e, t) => {
    const n = e._withMods || (e._withMods = {})
      , r = t.join(".");
    return n[r] || (n[r] = (s, ...o) => {
        for (let i = 0; i < t.length; i++) {
            const l = rp[t[i]];
            if (l && l(s, t))
                return
        }
        return e(s, ...o)
    }
    )
}
  , sp = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , Vo = (e, t) => {
    const n = e._withKeys || (e._withKeys = {})
      , r = t.join(".");
    return n[r] || (n[r] = s => {
        if (!("key"in s))
            return;
        const o = tn(s.key);
        if (t.some(i => i === o || sp[i] === o))
            return e(s)
    }
    )
}
  , op = Ue({
    patchProp: Jf
}, Lf);
let Tl;
function ip() {
    return Tl || (Tl = sf(op))
}
const lp = (...e) => {
    const t = ip().createApp(...e)
      , {mount: n} = t;
    return t.mount = r => {
        const s = cp(r);
        if (!s)
            return;
        const o = t._component;
        !ee(o) && !o.render && !o.template && (o.template = s.innerHTML),
        s.nodeType === 1 && (s.textContent = "");
        const i = n(s, !1, ap(s));
        return s instanceof Element && (s.removeAttribute("v-cloak"),
        s.setAttribute("data-v-app", "")),
        i
    }
    ,
    t
}
;
function ap(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function cp(e) {
    return Ce(e) ? document.querySelector(e) : e
}

export {
    Bo,
    vl,
    Ic,
    Pf,
    $f,
    At,
    ml,
    Lf,
    Nf,
    Ff,
    ys,
    Dc,
    co,
    Yn,
    Mf,
    jf,
    Uf,
    gl,
    Zr,
    bl,
    uo,
    Hf,
    yl,
    xl,
    wl,
    Rt,
    Bf,
    kl,
    Vf,
    _l,
    zf,
    fo,
    qf,
    Kf,
    Wf,
    Gf,
    Sl,
    Jf,
    Yf,
    en,
    Xf,
    El,
    rt,
    Qt,
    Pc,
    Cl,
    Qf,
    Zf,
    Al,
    Dn,
    $c,
    ep,
    tp,
    zr,
    np,
    rp,
    tt,
    sp,
    Vo,
    op,
    Tl,
    ip,
    lp,
    ap,
    cp
};