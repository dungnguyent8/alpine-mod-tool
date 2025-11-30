var detector=(function(){"use strict";function A(t){return t==null||typeof t=="function"?{main:t}:t}const b="__ALPINEJS_PRO_DEVTOOLS_DETECTED__",C="__ALPINEJS_PRO_DEVTOOLS_ATTRIBUTES__",x="__ALPINEJS_PRO_DEVTOOLS_ELEMENTS__",D="__ALPINEJS_PRO_DEVTOOLS_TOGGLE_HIGHLIGHT__",I="__ALPINEJS_PRO_DEVTOOLS_SCROLL_INTO_VIEW__",v="__ALPINEJS_PRO_DEVTOOLS_OVERLAYS__",P={CONTENT:"content"},$={ALPINE_DETECTED:"alpine-detected"},G=A(()=>{if(window[b])return;let t=!1;const E=["x-data",...window[C]||[]],c={delay:100,retries:30};function g(n){t=!!window.Alpine||!!document.querySelector(`[${E.join("], [")}]`),t&&(window[b]=!0,window.postMessage({source:P.CONTENT,type:$.ALPINE_DETECTED,payload:{alpineDetected:t}},"*")),!t&&n>0&&setTimeout(()=>{g(n-1)},c.delay)}g(c.retries),window.addEventListener("pageshow",n=>{n.persisted&&(c.retries=30,g(c.retries))});const S=new MutationObserver(n=>{if(t){S.disconnect();return}n.some(i=>{if(i.type==="childList"){for(const d of Array.from(i.addedNodes))if(d.nodeType===Node.ELEMENT_NODE&&d.querySelector(`[${E.join("], [")}]`))return!0}return!1})&&(c.retries=5,g(c.retries))});S.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:E});function N(){const n="alpine-devtools-overlay-styles";if(document.getElementById(n))return;const a=`
      /* Flash Effect */
      .__alpine-devtools-flash-overlay {
        position: fixed !important;
        z-index: 9999 !important;
        pointer-events: none !important;
        border: 2px solid rgb(104, 182, 255) !important;
        background-color: rgba(104, 182, 255, 0) !important;
        opacity: 0 !important;
        transition: background-color 400ms ease-in-out, opacity 400ms ease-in-out !important;
        margin: 0 !important;
        padding: 0 !important;
        box-sizing: border-box !important;
      }
      .__alpine-devtools-flash-overlay--active {
        background-color: rgba(104, 182, 255, 0.4) !important;
        opacity: 1 !important;
      }
      
      /* Highlight Overlay */
      .__alpine-devtools-highlight-overlay {
        position: fixed !important;
        z-index: 9998 !important; /* Below tooltip */
        pointer-events: none !important;
        border: 1px solid rgb(104, 182, 255) !important;
        background-color: rgba(104, 182, 255, 0.35) !important;
        margin: 0 !important;
        padding: 0 !important;
        box-sizing: border-box !important;
      }
      
      /* Tooltip */
      .__alpine-devtools-tooltip {
        position: fixed !important;
        z-index: 9999 !important;
        pointer-events: none !important;
        background-color: #333 !important;
        color: white !important;
        font-size: 11px !important;
        font-family: monospace !important;
        padding: 3px 6px !important;
        border-radius: 3px !important;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2) !important;
        white-space: nowrap !important;
      }
      .__alpine-devtools-tooltip__tag-name {
        color: #9cdcfe !important;
      }
      .__alpine-devtools-tooltip__dimension {
          color: #ce9178 !important;
      }
      .__alpine-devtools-tooltip__separator {
          color: #b5cea8 !important;
      }
    `,i=document.createElement("style");i.id=n,i.textContent=a,document.head.appendChild(i)}window[D]=function(n,a,i){const d=i?.showTooltip!==!1;N(),window[v]=window[v]||{};const r=window[v];if(r.highlight&&(r.highlight.remove(),r.highlight=void 0),r.tooltip&&(r.tooltip.remove(),r.tooltip=void 0),!a)return!0;const w=window[x];if(!w)return console.warn("Alpine Devtools: Elements map not found for highlighting."),!1;const _=w[n.id];if(!_)return console.warn(`Alpine Devtools: Could not find element for id "${n.id}" to highlight.`),!1;const o=_.getBoundingClientRect(),s=document.createElement("div");if(s.className="__alpine-devtools-highlight-overlay",s.style.left=`${o.left}px`,s.style.top=`${o.top}px`,s.style.width=`${o.width}px`,s.style.height=`${o.height}px`,document.body.appendChild(s),r.highlight=s,d){const e=document.createElement("div");e.className="__alpine-devtools-tooltip";const h=Math.round(o.width),l=Math.round(o.height),y=document.createElement("span");y.className="__alpine-devtools-tooltip__tag-name",y.textContent=`<${_.tagName.toLowerCase()}>`;const L=document.createElement("span");L.className="__alpine-devtools-tooltip__dimension",L.textContent=`${h}px`;const T=document.createElement("span");T.className="__alpine-devtools-tooltip__separator",T.textContent="×";const O=document.createElement("span");O.className="__alpine-devtools-tooltip__dimension",O.textContent=`${l}px`,e.appendChild(y),e.appendChild(L),e.appendChild(T),e.appendChild(O);let p,m=o.left;e.style.visibility="hidden",e.style.position="absolute",e.style.top="-9999px",e.style.left="-9999px",e.style.position="fixed",document.body.appendChild(e);const u=e.getBoundingClientRect();o.bottom<0?p=5:o.top>window.innerHeight?p=window.innerHeight-u.height-5:(p=o.bottom+5,p+u.height>window.innerHeight&&(p=o.top-u.height-5),p<0&&(p=5)),m+u.width>window.innerWidth&&(m=window.innerWidth-u.width-5),m<0&&(m=5),e.style.top=`${p}px`,e.style.left=`${m}px`,e.style.visibility="visible",r.tooltip=e}return!0},window[I]=function(n){const a=window[x];if(!a)return console.warn("Alpine Devtools: Elements map not found for scrolling."),!1;const i=a[n];if(!i)return console.warn(`Alpine Devtools: Could not find element for id "${n}" to scroll into view.`),!1;try{const d=i.offsetHeight,r=window.innerHeight,w=d<r?"center":"start",_=()=>{const e=a[n];if(!e)return;N();const h=e.getBoundingClientRect(),l=document.createElement("div");l.className="__alpine-devtools-flash-overlay",l.style.left=`${h.left}px`,l.style.top=`${h.top}px`,l.style.width=`${h.width}px`,l.style.height=`${h.height}px`,document.body.appendChild(l),l.offsetHeight,l.classList.add("__alpine-devtools-flash-overlay--active"),setTimeout(()=>{l.classList.remove("__alpine-devtools-flash-overlay--active")},400),setTimeout(()=>{l.remove()},800)};let o=null;const s=()=>{o!==null&&(clearTimeout(o),o=null,_())};return window.addEventListener("scrollend",s,{once:!0}),o=window.setTimeout(()=>{console.warn("Alpine Devtools: scrollend event not detected within 2s, flashing anyway."),o!==null&&(_(),o=null)},2e3),i.scrollIntoView({behavior:"smooth",block:w}),!0}catch(d){return console.error("Alpine Devtools: Error scrolling element:",d),!1}}});function R(){}function f(t,...E){}const H={debug:(...t)=>f(console.debug,...t),log:(...t)=>f(console.log,...t),warn:(...t)=>f(console.warn,...t),error:(...t)=>f(console.error,...t)};return(async()=>{try{return await G.main()}catch(t){throw H.error('The unlisted script "detector" crashed on startup!',t),t}})()})();
detector;