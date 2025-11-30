/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function fi(e) {
    const t = Object.create(null);
    for (const n of e.split(","))
        t[n] = 1;
    return n => n in t
}
const me = {}
    , Sn = []
    , St = () => { }
    , Nu = () => !1
    , As = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
    , pi = e => e.startsWith("onUpdate:")
    , Ue = Object.assign
    , hi = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    }
    , Fu = Object.prototype.hasOwnProperty
    , fe = (e, t) => Fu.call(e, t)
    , J = Array.isArray
    , En = e => Or(e) === "[object Map]"
    , Fn = e => Or(e) === "[object Set]"
    , Xi = e => Or(e) === "[object Date]"
    , ee = e => typeof e == "function"
    , Ce = e => typeof e == "string"
    , ct = e => typeof e == "symbol"
    , we = e => e !== null && typeof e == "object"
    , Sa = e => (we(e) || ee(e)) && ee(e.then) && ee(e.catch)
    , Ea = Object.prototype.toString
    , Or = e => Ea.call(e)
    , Mu = e => Or(e).slice(8, -1)
    , Ca = e => Or(e) === "[object Object]"
    , vi = e => Ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
    , dr = fi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
    , Ts = e => {
        const t = Object.create(null);
        return n => t[n] || (t[n] = e(n))
    }
    , ju = /-(\w)/g
    , st = Ts(e => e.replace(ju, (t, n) => n ? n.toUpperCase() : ""))
    , Uu = /\B([A-Z])/g
    , tn = Ts(e => e.replace(Uu, "-$1").toLowerCase())
    , Os = Ts(e => e.charAt(0).toUpperCase() + e.slice(1))
    , to = Ts(e => e ? `on${Os(e)}` : "")
    , Yt = (e, t) => !Object.is(e, t)
    , Xr = (e, ...t) => {
        for (let n = 0; n < e.length; n++)
            e[n](...t)
    }
    , Do = (e, t, n, r = !1) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: r,
            value: n
        })
    }
    , us = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    }
    ;
let Qi;
const Rs = () => Qi || (Qi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Rr(e) {
    if (J(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
                , s = Ce(r) ? zu(r) : Rr(r);
            if (s)
                for (const o in s)
                    t[o] = s[o]
        }
        return t
    } else if (Ce(e) || we(e))
        return e
}
const Hu = /;(?![^(]*\))/g
    , Bu = /:([^]+)/
    , Vu = /\/\*[^]*?\*\//g;
function zu(e) {
    const t = {};
    return e.replace(Vu, "").split(Hu).forEach(n => {
        if (n) {
            const r = n.split(Bu);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }
    ),
        t
}
function de(e) {
    let t = "";
    if (Ce(e))
        t = e;
    else if (J(e))
        for (let n = 0; n < e.length; n++) {
            const r = de(e[n]);
            r && (t += r + " ")
        }
    else if (we(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
const qu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
    , Ku = fi(qu);
function Aa(e) {
    return !!e || e === ""
}
function Wu(e, t) {
    if (e.length !== t.length)
        return !1;
    let n = !0;
    for (let r = 0; n && r < e.length; r++)
        n = vn(e[r], t[r]);
    return n
}
function vn(e, t) {
    if (e === t)
        return !0;
    let n = Xi(e)
        , r = Xi(t);
    if (n || r)
        return n && r ? e.getTime() === t.getTime() : !1;
    if (n = ct(e),
        r = ct(t),
        n || r)
        return e === t;
    if (n = J(e),
        r = J(t),
        n || r)
        return n && r ? Wu(e, t) : !1;
    if (n = we(e),
        r = we(t),
        n || r) {
        if (!n || !r)
            return !1;
        const s = Object.keys(e).length
            , o = Object.keys(t).length;
        if (s !== o)
            return !1;
        for (const i in e) {
            const l = e.hasOwnProperty(i)
                , a = t.hasOwnProperty(i);
            if (l && !a || !l && a || !vn(e[i], t[i]))
                return !1
        }
    }
    return String(e) === String(t)
}
function mi(e, t) {
    return e.findIndex(n => vn(n, t))
}
const Ta = e => !!(e && e.__v_isRef === !0)
    , re = e => Ce(e) ? e : e == null ? "" : J(e) || we(e) && (e.toString === Ea || !ee(e.toString)) ? Ta(e) ? re(e.value) : JSON.stringify(e, Oa, 2) : String(e)
    , Oa = (e, t) => Ta(t) ? Oa(e, t.value) : En(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, s], o) => (n[no(r, o) + " =>"] = s,
            n), {})
    } : Fn(t) ? {
        [`Set(${t.size})`]: [...t.values()].map(n => no(n))
    } : ct(t) ? no(t) : we(t) && !J(t) && !Ca(t) ? String(t) : t
    , no = (e, t = "") => {
        var n;
        return ct(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
    }
    ;

// export {
//     // Utilities gốc của Vue Shared
//     fi as makeMap, 
//     me as EMPTY_OBJ,
//     Sn as EMPTY_ARR,
//     St as NOOP,
//     Nu as NO,
//     As as isOn,
//     pi as isModelListener,
//     Ue as extend, // Đổi tên Object.assign thành extend
//     hi as remove,
//     fe as hasOwn,
//     J as isArray,
//     En as isMap,
//     Fn as isSet,
//     Xi as isDate,
//     ee as isFunction,
//     Ce as isString,
//     ct as isSymbol,
//     we as isObject,
//     Sa as isPromise,
//     Or as toTypeString,
//     Mu as toRawType,
//     Ca as isPlainObject,
//     vi as isIntegerKey,
//     dr as isSpecialProp,
//     Ts as cacheStringFunction,
//     st as camelize,
//     tn as hyphenate,
//     Os as capitalize,
//     to as toHandlerKey,
//     Yt as isEqual,
//     Xr as invokeArrayFns,
//     Do as def,
//     us as looseToNumber,
//     Rs as getGlobalThis,
//     Rr as normalizeStyle,
//     zu as parseStringStyle,
//     de as normalizeClass,
//     Ku as isBooleanAttr,
//     Aa as includeBooleanAttr,
//     Wu as isShallowEqual,
//     vn as looseEqual,
//     mi as looseIndexOf,
//     Ta as isRef,
//     re as toDisplayString
// };

export {
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
};