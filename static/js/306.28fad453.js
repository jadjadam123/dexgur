"use strict";(self.webpackChunkdexguru=self.webpackChunkdexguru||[]).push([[306],{40306:(t,e,n)=>{n.d(e,{Me:()=>D,oo:()=>H});var o=n(80814),i=n(11485);function r(t){return s(t)?(t.nodeName||"").toLowerCase():"#document"}function c(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function l(t){var e;return null==(e=(s(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function s(t){return t instanceof Node||t instanceof c(t).Node}function u(t){return t instanceof Element||t instanceof c(t).Element}function f(t){return t instanceof HTMLElement||t instanceof c(t).HTMLElement}function a(t){return"undefined"!==typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof c(t).ShadowRoot)}function d(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=y(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function h(t){return["table","td","th"].includes(r(t))}function p(t){const e=g(),n=y(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function g(){return!("undefined"===typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function m(t){return["html","body","#document"].includes(r(t))}function y(t){return c(t).getComputedStyle(t)}function w(t){return u(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function x(t){if("html"===r(t))return t;const e=t.assignedSlot||t.parentNode||a(t)&&t.host||l(t);return a(e)?e.host:e}function v(t){const e=x(t);return m(e)?t.ownerDocument?t.ownerDocument.body:t.body:f(e)&&d(e)?e:v(e)}function b(t,e){var n;void 0===e&&(e=[]);const o=v(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),r=c(o);return i?e.concat(r,r.visualViewport||[],d(o)?o:[]):e.concat(o,b(o))}function L(t){const e=y(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=f(t),c=r?t.offsetWidth:n,l=r?t.offsetHeight:o,s=(0,i.NM)(n)!==c||(0,i.NM)(o)!==l;return s&&(n=c,o=l),{width:n,height:o,$:s}}function T(t){return u(t)?t:t.contextElement}function R(t){const e=T(t);if(!f(e))return(0,i.ze)(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:c}=L(e);let l=(c?(0,i.NM)(n.width):n.width)/o,s=(c?(0,i.NM)(n.height):n.height)/r;return l&&Number.isFinite(l)||(l=1),s&&Number.isFinite(s)||(s=1),{x:l,y:s}}const F=(0,i.ze)(0);function E(t){const e=c(t);return g()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:F}function W(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const r=t.getBoundingClientRect(),l=T(t);let s=(0,i.ze)(1);e&&(o?u(o)&&(s=R(o)):s=R(t));const f=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==c(t))&&e}(l,n,o)?E(l):(0,i.ze)(0);let a=(r.left+f.x)/s.x,d=(r.top+f.y)/s.y,h=r.width/s.x,p=r.height/s.y;if(l){const t=c(l),e=o&&u(o)?c(o):o;let n=t.frameElement;for(;n&&o&&e!==t;){const t=R(n),e=n.getBoundingClientRect(),o=y(n),i=e.left+(n.clientLeft+parseFloat(o.paddingLeft))*t.x,r=e.top+(n.clientTop+parseFloat(o.paddingTop))*t.y;a*=t.x,d*=t.y,h*=t.x,p*=t.y,a+=i,d+=r,n=c(n).frameElement}}return(0,i.JB)({width:h,height:p,x:a,y:d})}function z(t){return W(l(t)).left+w(t).scrollLeft}function C(t,e,n){let o;if("viewport"===e)o=function(t,e){const n=c(t),o=l(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,u=0,f=0;if(i){r=i.width,s=i.height;const t=g();(!t||t&&"fixed"===e)&&(u=i.offsetLeft,f=i.offsetTop)}return{width:r,height:s,x:u,y:f}}(t,n);else if("document"===e)o=function(t){const e=l(t),n=w(t),o=t.ownerDocument.body,r=(0,i.Fp)(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),c=(0,i.Fp)(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+z(t);const u=-n.scrollTop;return"rtl"===y(o).direction&&(s+=(0,i.Fp)(e.clientWidth,o.clientWidth)-r),{width:r,height:c,x:s,y:u}}(l(t));else if(u(e))o=function(t,e){const n=W(t,!0,"fixed"===e),o=n.top+t.clientTop,r=n.left+t.clientLeft,c=f(t)?R(t):(0,i.ze)(1);return{width:t.clientWidth*c.x,height:t.clientHeight*c.y,x:r*c.x,y:o*c.y}}(e,n);else{const n=E(t);o={...e,x:e.x-n.x,y:e.y-n.y}}return(0,i.JB)(o)}function V(t,e){const n=x(t);return!(n===e||!u(n)||m(n))&&("fixed"===y(n).position||V(n,e))}function M(t,e,n){const o=f(e),c=l(e),s="fixed"===n,u=W(t,!0,s,e);let a={scrollLeft:0,scrollTop:0};const h=(0,i.ze)(0);if(o||!o&&!s)if(("body"!==r(e)||d(c))&&(a=w(e)),o){const t=W(e,!0,s,e);h.x=t.x+e.clientLeft,h.y=t.y+e.clientTop}else c&&(h.x=z(c));return{x:u.left+a.scrollLeft-h.x,y:u.top+a.scrollTop-h.y,width:u.width,height:u.height}}function S(t,e){return f(t)&&"fixed"!==y(t).position?e?e(t):t.offsetParent:null}function N(t,e){const n=c(t);if(!f(t))return n;let o=S(t,e);for(;o&&h(o)&&"static"===y(o).position;)o=S(o,e);return o&&("html"===r(o)||"body"===r(o)&&"static"===y(o).position&&!p(o))?n:o||function(t){let e=x(t);for(;f(e)&&!m(e);){if(p(e))return e;e=x(e)}return null}(t)||n}const k={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const c=f(n),s=l(n);if(n===s)return e;let u={scrollLeft:0,scrollTop:0},a=(0,i.ze)(1);const h=(0,i.ze)(0);if((c||!c&&"fixed"!==o)&&(("body"!==r(n)||d(s))&&(u=w(n)),f(n))){const t=W(n);a=R(n),h.x=t.x+n.clientLeft,h.y=t.y+n.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-u.scrollLeft*a.x+h.x,y:e.y*a.y-u.scrollTop*a.y+h.y}},getDocumentElement:l,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:c}=t;const l=[..."clippingAncestors"===n?function(t,e){const n=e.get(t);if(n)return n;let o=b(t).filter((t=>u(t)&&"body"!==r(t))),i=null;const c="fixed"===y(t).position;let l=c?x(t):t;for(;u(l)&&!m(l);){const e=y(l),n=p(l);n||"fixed"!==e.position||(i=null),(c?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||d(l)&&!n&&V(t,l))?o=o.filter((t=>t!==l)):i=e,l=x(l)}return e.set(t,o),o}(e,this._c):[].concat(n),o],s=l[0],f=l.reduce(((t,n)=>{const o=C(e,n,c);return t.top=(0,i.Fp)(o.top,t.top),t.right=(0,i.VV)(o.right,t.right),t.bottom=(0,i.VV)(o.bottom,t.bottom),t.left=(0,i.Fp)(o.left,t.left),t}),C(e,s,c));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}},getOffsetParent:N,getElementRects:async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||N,r=this.getDimensions;return{reference:M(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){return L(t)},getScale:R,isElement:u,isRTL:function(t){return"rtl"===y(t).direction}};function D(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:r=!0,ancestorResize:c=!0,elementResize:s="function"===typeof ResizeObserver,layoutShift:u="function"===typeof IntersectionObserver,animationFrame:f=!1}=o,a=T(t),d=r||c?[...a?b(a):[],...b(e)]:[];d.forEach((t=>{r&&t.addEventListener("scroll",n,{passive:!0}),c&&t.addEventListener("resize",n)}));const h=a&&u?function(t,e){let n,o=null;const r=l(t);function c(){clearTimeout(n),o&&o.disconnect(),o=null}return function l(s,u){void 0===s&&(s=!1),void 0===u&&(u=1),c();const{left:f,top:a,width:d,height:h}=t.getBoundingClientRect();if(s||e(),!d||!h)return;const p={rootMargin:-(0,i.GW)(a)+"px "+-(0,i.GW)(r.clientWidth-(f+d))+"px "+-(0,i.GW)(r.clientHeight-(a+h))+"px "+-(0,i.GW)(f)+"px",threshold:(0,i.Fp)(0,(0,i.VV)(1,u))||1};let g=!0;function m(t){const e=t[0].intersectionRatio;if(e!==u){if(!g)return l();e?l(!1,e):n=setTimeout((()=>{l(!1,1e-7)}),100)}g=!1}try{o=new IntersectionObserver(m,{...p,root:r.ownerDocument})}catch(y){o=new IntersectionObserver(m,p)}o.observe(t)}(!0),c}(a,n):null;let p,g=-1,m=null;s&&(m=new ResizeObserver((t=>{let[o]=t;o&&o.target===a&&m&&(m.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{m&&m.observe(e)}))),n()})),a&&!f&&m.observe(a),m.observe(e));let y=f?W(t):null;return f&&function e(){const o=W(t);!y||o.x===y.x&&o.y===y.y&&o.width===y.width&&o.height===y.height||n();y=o,p=requestAnimationFrame(e)}(),n(),()=>{d.forEach((t=>{r&&t.removeEventListener("scroll",n),c&&t.removeEventListener("resize",n)})),h&&h(),m&&m.disconnect(),m=null,f&&cancelAnimationFrame(p)}}const H=(t,e,n)=>{const i=new Map,r={platform:k,...n},c={...r.platform,_c:i};return(0,o.oo)(t,e,{...r,platform:c})}},11485:(t,e,n)=>{n.d(e,{uZ:()=>f,ze:()=>l,ku:()=>a,GW:()=>c,hp:()=>h,Wh:()=>y,i8:()=>w,I4:()=>g,gy:()=>x,Rn:()=>p,KX:()=>b,pw:()=>L,yd:()=>T,k3:()=>d,Qq:()=>m,Fp:()=>i,VV:()=>o,JB:()=>R,NM:()=>r});const o=Math.min,i=Math.max,r=Math.round,c=Math.floor,l=t=>({x:t,y:t}),s={left:"right",right:"left",bottom:"top",top:"bottom"},u={start:"end",end:"start"};function f(t,e,n){return i(t,o(e,n))}function a(t,e){return"function"===typeof t?t(e):t}function d(t){return t.split("-")[0]}function h(t){return t.split("-")[1]}function p(t){return"x"===t?"y":"x"}function g(t){return"y"===t?"height":"width"}function m(t){return["top","bottom"].includes(d(t))?"y":"x"}function y(t){return p(m(t))}function w(t,e,n){void 0===n&&(n=!1);const o=h(t),i=y(t),r=g(i);let c="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(c=L(c)),[c,L(c)]}function x(t){const e=L(t);return[v(t),e,v(e)]}function v(t){return t.replace(/start|end/g,(t=>u[t]))}function b(t,e,n,o){const i=h(t);let r=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],c=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:c;default:return[]}}(d(t),"start"===n,o);return i&&(r=r.map((t=>t+"-"+i)),e&&(r=r.concat(r.map(v)))),r}function L(t){return t.replace(/left|right|bottom|top/g,(t=>s[t]))}function T(t){return"number"!==typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function R(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}}}]);