(function(){
    const relList = document.createElement("link").relList;
    if (relList && relList.supports && relList.supports("modulepreload")) return;
    
    for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        preloadModule(link);
    }
    
    new MutationObserver(mutations => {
        for (const mutation of mutations) {
            if (mutation.type === "childList") {
                for (const node of mutation.addedNodes) {
                    if (node.tagName === "LINK" && node.rel === "modulepreload") {
                        preloadModule(node);
                    }
                }
            }
        }
    }).observe(document, { childList: true, subtree: true });
    
    function getFetchOptions(link) {
        const options = {};
        if (link.integrity) options.integrity = link.integrity;
        if (link.referrerPolicy) options.referrerPolicy = link.referrerPolicy;
        
        if (link.crossOrigin === "use-credentials") {
            options.credentials = "include";
        } else if (link.crossOrigin === "anonymous") {
            options.credentials = "omit";
        } else {
            options.credentials = "same-origin";
        }
        
        return options;
    }
    
    function preloadModule(link) {
        if (link.ep) return;
        link.ep = true;
        const options = getFetchOptions(link);
        fetch(link.href, options);
    }
})();

try {} catch (error) {
    console.error("[wxt] Failed to initialize plugins", error);
}

// Browser API detection
const browserAPI = globalThis.browser?.runtime?.id ? globalThis.browser : globalThis.chrome;
const T = browserAPI;

// Constants
const TABLET_BREAKPOINT = 768;
const O = TABLET_BREAKPOINT;

// Storage keys
const LICENSE_KEY = "license";
const SETTINGS_KEY = "settings";
const NAG_SCREEN_KEY = "nag-screen-v1-shown-at";
const i = LICENSE_KEY;
const c = SETTINGS_KEY;
const a = NAG_SCREEN_KEY;

// Global detection flags
const ALPINEJS_PRO_DEVTOOLS_DETECTED = "__ALPINEJS_PRO_DEVTOOLS_DETECTED__";
const ALPINEJS_PRO_DEVTOOLS_INSPECTOR_INITIALIZED = "__ALPINEJS_PRO_DEVTOOLS_INSPECTOR_INITIALIZED__";
const ALPINEJS_PRO_DEVTOOLS_ELEMENTS = "__ALPINEJS_PRO_DEVTOOLS_ELEMENTS__";
const ALPINEJS_PRO_DEVTOOLS_TOGGLE_HIGHLIGHT = "__ALPINEJS_PRO_DEVTOOLS_TOGGLE_HIGHLIGHT__";
const ALPINEJS_PRO_DEVTOOLS_SCROLL_INTO_VIEW = "__ALPINEJS_PRO_DEVTOOLS_SCROLL_INTO_VIEW__";

const S = ALPINEJS_PRO_DEVTOOLS_DETECTED;
const L = ALPINEJS_PRO_DEVTOOLS_INSPECTOR_INITIALIZED;
const d = ALPINEJS_PRO_DEVTOOLS_ELEMENTS;
const l = ALPINEJS_PRO_DEVTOOLS_TOGGLE_HIGHLIGHT;
const A = ALPINEJS_PRO_DEVTOOLS_SCROLL_INTO_VIEW;

// Context types
const CONTEXT_TYPES = {
    BACKGROUND: "background",
    CONTENT: "content",
    DEVTOOLS: "devtools",
    PROXY: "proxy",
    INSPECTOR: "inspector"
};
const I = CONTEXT_TYPES;

// Message types
const MESSAGE_TYPES = {
    LOAD_DETECTOR: "load-detector",
    INJECT_INSPECTOR: "inject-inspector",
    ADD_ERROR: "add-error",
    ALPINE_DETECTED: "alpine-detected",
    DEVTOOLS_READY: "devtools-ready",
    EDIT_ATTRIBUTE: "edit-attribute",
    HEARTBEAT: "heartbeat",
    HEARTBEAT_RESPONSE: "heartbeat-response",
    PROXY_FAIL: "proxy-fail",
    PROXY_READY: "proxy-ready",
    PROXY_SHUTDOWN: "proxy-shutdown",
    SET_COMPONENTS: "set-components",
    SET_DATA: "set-data",
    SET_VERSION: "set-version",
    SETTINGS_CHANGED: "settings-changed",
    SET_STORES: "set-stores",
    SET_STORE_DATA: "set-store-data",
    EDIT_STORE_VALUE: "edit-store-value",
    EVENT_DISPATCHED: "event-dispatched"
};
const N = MESSAGE_TYPES;

// Export with original names to maintain compatibility
export {S as A, d as D, L as I, i as L, N as M, a as N, c as S, I as a, T as b, O as c, l as d, A as e};
