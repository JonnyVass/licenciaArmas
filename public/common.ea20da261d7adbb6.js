"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{6712:(T,v,i)=>{i.d(v,{c:()=>a});var _=i(1688),d=i(7150),r=i(9203);const a=(e,s)=>{let t,n;const g=(c,E,y)=>{if(typeof document>"u")return;const C=document.elementFromPoint(c,E);C&&s(C)?C!==t&&(o(),u(C,y)):o()},u=(c,E)=>{t=c,n||(n=t);const y=t;(0,_.w)(()=>y.classList.add("ion-activated")),E()},o=(c=!1)=>{if(!t)return;const E=t;(0,_.w)(()=>E.classList.remove("ion-activated")),c&&n!==t&&t.click(),t=void 0};return(0,r.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:c=>g(c.currentX,c.currentY,d.a),onMove:c=>g(c.currentX,c.currentY,d.b),onEnd:()=>{o(!0),(0,d.h)(),n=void 0}})}},4874:(T,v,i)=>{i.d(v,{g:()=>d});var _=i(6225);const d=()=>{if(void 0!==_.w)return _.w.Capacitor}},5149:(T,v,i)=>{i.d(v,{g:()=>_});const _=(s,t,n,g,u)=>r(s[1],t[1],n[1],g[1],u).map(o=>d(s[0],t[0],n[0],g[0],o)),d=(s,t,n,g,u)=>u*(3*t*Math.pow(u-1,2)+u*(-3*n*u+3*n+g*u))-s*Math.pow(u-1,3),r=(s,t,n,g,u)=>e((g-=u)-3*(n-=u)+3*(t-=u)-(s-=u),3*n-6*t+3*s,3*t-3*s,s).filter(c=>c>=0&&c<=1),e=(s,t,n,g)=>{if(0===s)return((s,t,n)=>{const g=t*t-4*s*n;return g<0?[]:[(-t+Math.sqrt(g))/(2*s),(-t-Math.sqrt(g))/(2*s)]})(t,n,g);const u=(3*(n/=s)-(t/=s)*t)/3,o=(2*t*t*t-9*t*n+27*(g/=s))/27;if(0===u)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-u),-Math.sqrt(-u)];const c=Math.pow(o/2,2)+Math.pow(u/3,3);if(0===c)return[Math.pow(o/2,.5)-t/3];if(c>0)return[Math.pow(-o/2+Math.sqrt(c),1/3)-Math.pow(o/2+Math.sqrt(c),1/3)-t/3];const E=Math.sqrt(Math.pow(-u/3,3)),y=Math.acos(-o/(2*Math.sqrt(Math.pow(-u/3,3)))),C=2*Math.pow(E,1/3);return[C*Math.cos(y/3)-t/3,C*Math.cos((y+2*Math.PI)/3)-t/3,C*Math.cos((y+4*Math.PI)/3)-t/3]}},5085:(T,v,i)=>{i.d(v,{i:()=>_});const _=d=>d&&""!==d.dir?"rtl"===d.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},2779:(T,v,i)=>{i.r(v),i.d(v,{startFocusVisible:()=>a});const _="ion-focused",r=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],a=e=>{let s=[],t=!0;const n=e?e.shadowRoot:document,g=e||document.body,u=P=>{s.forEach(h=>h.classList.remove(_)),P.forEach(h=>h.classList.add(_)),s=P},o=()=>{t=!1,u([])},c=P=>{t=r.includes(P.key),t||u([])},E=P=>{if(t&&void 0!==P.composedPath){const h=P.composedPath().filter(w=>!!w.classList&&w.classList.contains("ion-focusable"));u(h)}},y=()=>{n.activeElement===g&&u([])};return n.addEventListener("keydown",c),n.addEventListener("focusin",E),n.addEventListener("focusout",y),n.addEventListener("touchstart",o,{passive:!0}),n.addEventListener("mousedown",o),{destroy:()=>{n.removeEventListener("keydown",c),n.removeEventListener("focusin",E),n.removeEventListener("focusout",y),n.removeEventListener("touchstart",o),n.removeEventListener("mousedown",o)},setFocus:u}}},5487:(T,v,i)=>{i.d(v,{c:()=>d});var _=i(839);const d=s=>{const t=s;let n;return{hasLegacyControl:()=>{if(void 0===n){const u=void 0!==t.label||r(t),o=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&null===t.shadowRoot,c=(0,_.h)(t);n=!0===t.legacy||!u&&!o&&null!==c}return n}}},r=s=>null!==s.shadowRoot&&!!(a.includes(s.tagName)&&null!==s.querySelector('[slot="label"]')||e.includes(s.tagName)&&""!==s.textContent),a=["ION-RANGE"],e=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},7150:(T,v,i)=>{i.d(v,{I:()=>d,a:()=>t,b:()=>n,c:()=>s,d:()=>u,h:()=>g});var _=i(4874),d=function(o){return o.Heavy="HEAVY",o.Medium="MEDIUM",o.Light="LIGHT",o}(d||{});const a={getEngine(){const o=window.TapticEngine;if(o)return o;const c=(0,_.g)();return null!=c&&c.isPluginAvailable("Haptics")?c.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const c=(0,_.g)();return"web"!==(null==c?void 0:c.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,_.g)(),impact(o){const c=this.getEngine();if(!c)return;const E=this.isCapacitor()?o.style:o.style.toLowerCase();c.impact({style:E})},notification(o){const c=this.getEngine();if(!c)return;const E=this.isCapacitor()?o.type:o.type.toLowerCase();c.notification({type:E})},selection(){const o=this.isCapacitor()?d.Light:"light";this.impact({style:o})},selectionStart(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionStart():o.gestureSelectionStart())},selectionChanged(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionChanged():o.gestureSelectionChanged())},selectionEnd(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionEnd():o.gestureSelectionEnd())}},e=()=>a.available(),s=()=>{e()&&a.selection()},t=()=>{e()&&a.selectionStart()},n=()=>{e()&&a.selectionChanged()},g=()=>{e()&&a.selectionEnd()},u=o=>{e()&&a.impact(o)}},8360:(T,v,i)=>{i.d(v,{I:()=>s,a:()=>u,b:()=>e,c:()=>E,d:()=>C,f:()=>o,g:()=>g,i:()=>n,p:()=>y,r:()=>P,s:()=>c});var _=i(5861),d=i(839),r=i(6710);const e="ion-content",s=".ion-content-scroll-host",t=`${e}, ${s}`,n=h=>"ION-CONTENT"===h.tagName,g=function(){var h=(0,_.Z)(function*(w){return n(w)?(yield new Promise(p=>(0,d.c)(w,p)),w.getScrollElement()):w});return function(p){return h.apply(this,arguments)}}(),u=h=>h.querySelector(s)||h.querySelector(t),o=h=>h.closest(t),c=(h,w)=>n(h)?h.scrollToTop(w):Promise.resolve(h.scrollTo({top:0,left:0,behavior:w>0?"smooth":"auto"})),E=(h,w,p,x)=>n(h)?h.scrollByPoint(w,p,x):Promise.resolve(h.scrollBy({top:p,left:w,behavior:x>0?"smooth":"auto"})),y=h=>(0,r.b)(h,e),C=h=>{if(n(h)){const p=h.scrollY;return h.scrollY=!1,p}return h.style.setProperty("overflow","hidden"),!0},P=(h,w)=>{n(h)?h.scrollY=w:h.style.removeProperty("overflow")}},3173:(T,v,i)=>{i.d(v,{a:()=>_,b:()=>E,c:()=>t,d:()=>y,e:()=>l,f:()=>s,g:()=>C,h:()=>r,i:()=>d,j:()=>x,k:()=>A,l:()=>n,m:()=>o,n:()=>P,o:()=>u,p:()=>e,q:()=>a,r:()=>p,s:()=>f,t:()=>c,u:()=>h,v:()=>w,w:()=>g});const _="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",x="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",A="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2894:(T,v,i)=>{i.d(v,{c:()=>a,g:()=>e});var _=i(6225),d=i(839),r=i(6710);const a=(t,n,g)=>{let u,o;void 0!==_.w&&"MutationObserver"in _.w&&(u=new MutationObserver(C=>{for(const P of C)for(const h of P.addedNodes)if(h.nodeType===Node.ELEMENT_NODE&&h.slot===n)return g(),void(0,d.r)(()=>c(h))}),u.observe(t,{childList:!0}));const c=C=>{var P;o&&(o.disconnect(),o=void 0),o=new MutationObserver(h=>{g();for(const w of h)for(const p of w.removedNodes)p.nodeType===Node.ELEMENT_NODE&&p.slot===n&&y()}),o.observe(null!==(P=C.parentElement)&&void 0!==P?P:C,{subtree:!0,childList:!0})},y=()=>{o&&(o.disconnect(),o=void 0)};return{destroy:()=>{u&&(u.disconnect(),u=void 0),y()}}},e=(t,n,g)=>{const u=null==t?0:t.toString().length,o=s(u,n);if(void 0===g)return o;try{return g(u,n)}catch(c){return(0,r.a)("Exception in provided `counterFormatter`.",c),o}},s=(t,n)=>`${t} / ${n}`},7484:(T,v,i)=>{i.d(v,{K:()=>a,a:()=>r});var _=i(4874),d=function(e){return e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE",e}(d||{}),r=function(e){return e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none",e}(r||{});const a={getEngine(){const e=(0,_.g)();if(null!=e&&e.isPluginAvailable("Keyboard"))return e.Plugins.Keyboard},getResizeMode(){const e=this.getEngine();return null!=e&&e.getResizeMode?e.getResizeMode().catch(s=>{if(s.code!==d.Unimplemented)throw s}):Promise.resolve(void 0)}}},1612:(T,v,i)=>{i.r(v),i.d(v,{KEYBOARD_DID_CLOSE:()=>e,KEYBOARD_DID_OPEN:()=>a,copyVisualViewport:()=>A,keyboardDidClose:()=>h,keyboardDidOpen:()=>C,keyboardDidResize:()=>P,resetKeyboardAssist:()=>u,setKeyboardClose:()=>y,setKeyboardOpen:()=>E,startKeyboardAssist:()=>o,trackViewportChanges:()=>x});var _=i(7484);i(4874),i(6225);const a="ionKeyboardDidShow",e="ionKeyboardDidHide";let t={},n={},g=!1;const u=()=>{t={},n={},g=!1},o=f=>{if(_.K.getEngine())c(f);else{if(!f.visualViewport)return;n=A(f.visualViewport),f.visualViewport.onresize=()=>{x(f),C()||P(f)?E(f):h(f)&&y(f)}}},c=f=>{f.addEventListener("keyboardDidShow",l=>E(f,l)),f.addEventListener("keyboardDidHide",()=>y(f))},E=(f,l)=>{w(f,l),g=!0},y=f=>{p(f),g=!1},C=()=>!g&&t.width===n.width&&(t.height-n.height)*n.scale>150,P=f=>g&&!h(f),h=f=>g&&n.height===f.innerHeight,w=(f,l)=>{const O=new CustomEvent(a,{detail:{keyboardHeight:l?l.keyboardHeight:f.innerHeight-n.height}});f.dispatchEvent(O)},p=f=>{const l=new CustomEvent(e);f.dispatchEvent(l)},x=f=>{t=Object.assign({},n),n=A(f.visualViewport)},A=f=>({width:Math.round(f.width),height:Math.round(f.height),offsetTop:f.offsetTop,offsetLeft:f.offsetLeft,pageTop:f.pageTop,pageLeft:f.pageLeft,scale:f.scale})},3459:(T,v,i)=>{i.d(v,{c:()=>s});var _=i(5861),d=i(6225),r=i(7484);const a=t=>{if(void 0===d.d||t===r.a.None||void 0===t)return null;const n=d.d.querySelector("ion-app");return null!=n?n:d.d.body},e=t=>{const n=a(t);return null===n?0:n.clientHeight},s=function(){var t=(0,_.Z)(function*(n){let g,u,o,c;const E=function(){var w=(0,_.Z)(function*(){const p=yield r.K.getResizeMode(),x=void 0===p?void 0:p.mode;g=()=>{void 0===c&&(c=e(x)),o=!0,y(o,x)},u=()=>{o=!1,y(o,x)},null==d.w||d.w.addEventListener("keyboardWillShow",g),null==d.w||d.w.addEventListener("keyboardWillHide",u)});return function(){return w.apply(this,arguments)}}(),y=(w,p)=>{n&&n(w,C(p))},C=w=>{if(0===c||c===e(w))return;const p=a(w);return null!==p?new Promise(x=>{const f=new ResizeObserver(()=>{p.clientHeight===c&&(f.disconnect(),x())});f.observe(p)}):void 0};return yield E(),{init:E,destroy:()=>{null==d.w||d.w.removeEventListener("keyboardWillShow",g),null==d.w||d.w.removeEventListener("keyboardWillHide",u),g=u=void 0},isKeyboardVisible:()=>o}});return function(g){return t.apply(this,arguments)}}()},679:(T,v,i)=>{i.d(v,{c:()=>r});var _=i(6225),d=i(839);const r=(a,e,s)=>{let t;const n=()=>!(void 0===e()||void 0!==a.label||null===s()),u=()=>{const c=e();if(void 0===c)return;if(!n())return void c.style.removeProperty("width");const E=s().scrollWidth;if(0===E&&null===c.offsetParent&&void 0!==_.w&&"IntersectionObserver"in _.w){if(void 0!==t)return;const y=t=new IntersectionObserver(C=>{1===C[0].intersectionRatio&&(u(),y.disconnect(),t=void 0)},{threshold:.01,root:a});y.observe(c)}else c.style.setProperty("width",.75*E+"px")};return{calculateNotchWidth:()=>{n()&&(0,d.r)(()=>{u()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},3781:(T,v,i)=>{i.d(v,{S:()=>d});const d={bubbles:{dur:1e3,circles:9,fn:(r,a,e)=>{const s=r*a/e-r+"ms",t=2*Math.PI*a/e;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(r,a,e)=>{const s=a/e,t=r*s-r+"ms",n=2*Math.PI*s;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(r,a)=>({r:6,style:{left:32-32*a+"%","animation-delay":-110*a+"ms"}})},lines:{dur:1e3,lines:8,fn:(r,a,e)=>({y1:14,y2:26,style:{transform:`rotate(${360/e*a+(a<e/2?180:-180)}deg)`,"animation-delay":r*a/e-r+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(r,a,e)=>({y1:12,y2:20,style:{transform:`rotate(${360/e*a+(a<e/2?180:-180)}deg)`,"animation-delay":r*a/e-r+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(r,a,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":r*a/e-r+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(r,a,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":r*a/e-r+"ms"}})}}},8466:(T,v,i)=>{i.r(v),i.d(v,{createSwipeBackGesture:()=>e});var _=i(839),d=i(5085),r=i(9203);i(619);const e=(s,t,n,g,u)=>{const o=s.ownerDocument.defaultView;let c=(0,d.i)(s);const y=p=>c?-p.deltaX:p.deltaX;return(0,r.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:p=>(c=(0,d.i)(s),(p=>{const{startX:A}=p;return c?A>=o.innerWidth-50:A<=50})(p)&&t()),onStart:n,onMove:p=>{const A=y(p)/o.innerWidth;g(A)},onEnd:p=>{const x=y(p),A=o.innerWidth,f=x/A,l=(p=>c?-p.velocityX:p.velocityX)(p),O=l>=0&&(l>.2||x>A/2),m=(O?1-f:f)*A;let D=0;if(m>5){const b=m/Math.abs(l);D=Math.min(b,540)}u(O,f<=0?.01:(0,_.l)(0,f,.9999),D)}})}},7063:(T,v,i)=>{i.d(v,{w:()=>_});const _=(a,e,s)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(n=>{s(d(n,e))});return t.observe(a,{childList:!0,subtree:!0}),t},d=(a,e)=>{let s;return a.forEach(t=>{for(let n=0;n<t.addedNodes.length;n++)s=r(t.addedNodes[n],e)||s}),s},r=(a,e)=>1!==a.nodeType?void 0:(a.tagName===e.toUpperCase()?[a]:Array.from(a.querySelectorAll(e))).find(t=>t.value===a.value)},3554:(T,v,i)=>{i.d(v,{e:()=>e});var _=i(6814),d=i(95),r=i(9843),a=i(9468);let e=(()=>{var s;class t{}return(s=t).\u0275fac=function(g){return new(g||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[_.ez,d.u5,r.Pc]}),t})()},9007:(T,v,i)=>{i.r(v),i.d(v,{QuestionarioPageModule:()=>f});var _=i(6814),d=i(95),r=i(9843),a=i(1379),e=i(9468),s=i(9862);function t(l,L){1&l&&(e.TgZ(0,"ion-item"),e._UZ(1,"ion-icon",9),e.qZA())}function n(l,L){1&l&&(e.TgZ(0,"ion-item")(1,"ion-label")(2,"h1",10),e._uU(3,"Has respondido ya todas las preguntas"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"- Revisa los resultados"),e.qZA(),e.TgZ(6,"p"),e._uU(7,"- Borra el test para empezar de nuevo"),e.qZA()()())}function g(l,L){if(1&l){const O=e.EpF();e.TgZ(0,"ion-radio",14),e.NdJ("click",function(){const D=e.CHM(O).$implicit,b=e.oxw().$implicit,S=e.oxw(2);return e.KtG(S.resuelveRespuesta(b,D.order))}),e._uU(1),e.qZA()}if(2&l){const O=L.$implicit;e.s9C("value",O.order),e.xp6(1),e.hij(" ",O.label," ")}}function u(l,L){if(1&l&&(e.TgZ(0,"ion-item")(1,"ion-card",12)(2,"ion-card-header")(3,"ion-card-title"),e._uU(4),e.qZA()(),e.TgZ(5,"ion-card-content")(6,"ion-radio-group"),e.YNc(7,g,2,2,"ion-radio",13),e.qZA()()()()),2&l){const O=L.$implicit;e.xp6(4),e.Oqu(O.question),e.xp6(3),e.Q6J("ngForOf",O.answers)}}function o(l,L){if(1&l&&(e.TgZ(0,"ion-list")(1,"ion-item"),e._uU(2," Listado preguntas Restantes: "),e.qZA(),e.YNc(3,u,8,2,"ion-item",11),e.qZA()),2&l){const O=e.oxw();e.xp6(3),e.Q6J("ngForOf",O.items)}}const c=function(l){return["/acertadas",l]};function E(l,L){if(1&l&&(e.TgZ(0,"ion-footer")(1,"ion-toolbar")(2,"ion-button",15),e._uU(3," Validas - OK "),e.qZA()()()),2&l){const O=e.oxw();e.xp6(2),e.Q6J("routerLink",e.VKq(1,c,O.tema))}}function y(l,L){if(1&l&&(e.TgZ(0,"ion-button",15),e._uU(1," Validas - OK "),e.qZA()),2&l){const O=e.oxw(2);e.Q6J("routerLink",e.VKq(1,c,O.tema))}}const C=function(){return["/resultados"]};function P(l,L){if(1&l){const O=e.EpF();e.TgZ(0,"ion-row")(1,"ion-col")(2,"ion-button",15),e._uU(3," Validas - OK "),e.qZA()(),e.TgZ(4,"ion-col")(5,"ion-button",17),e.NdJ("click",function(){e.CHM(O);const m=e.oxw(2);return e.KtG(m.enviaResultados())}),e._uU(6," Resolver "),e.qZA()()()}if(2&l){const O=e.oxw(2);e.xp6(2),e.Q6J("routerLink",e.VKq(2,c,O.tema)),e.xp6(3),e.Q6J("routerLink",e.DdM(4,C))}}function h(l,L){if(1&l&&(e.TgZ(0,"ion-footer")(1,"ion-toolbar"),e.YNc(2,y,2,3,"ion-button",16),e.YNc(3,P,7,5,"ion-row",8),e.qZA()()),2&l){const O=e.oxw();e.xp6(2),e.Q6J("ngIf",0==O.respuestaPregunta),e.xp6(1),e.Q6J("ngIf",1==O.respuestaPregunta)}}const w=function(){return["/"]},x=[{path:"",component:(()=>{var l;class L{constructor(M,m){this.http=M,this.activatedRoute=m,this.tema={},this.items=[],this.sinPreguntas=!1,this.respuestaPregunta=!1,this.totales=0,this.restantes=0,this.failResponse=[],this.CorrectResponse=[],this.alertButtons=[{text:"Cancelar",role:"cancel",handler:()=>{}},{text:"OK",role:"confirm",handler:()=>{this.resetCuestionario()}}]}ngOnInit(){this.tema=this.activatedRoute.snapshot.paramMap.get("id"),console.log("parametro tema",this.tema);let M="",m=[];if(M=localStorage.getItem("Preguntas"+this.tema)||"",""!=M){m=JSON.parse(M),console.log("Listado preguntas "+this.tema+" Completo",m);for(let D=0;D<m.length;D++)m[D].usada?(console.log("Pregunta YA USADA",D,m[D].question),this.CorrectResponse.push(m[D])):this.items.push(m[D])}this.items.length<1&&(this.sinPreguntas=!0),this.totales=m.length,this.restantes=this.items.length}resuelveRespuesta(M,m){this.respuestaPregunta=!0,M.userAns=m,console.log("Evaluacion pregunta "),M.correctAns==m?(console.log("True "),this.CorrectResponse.push(M)):(console.log("FALSE "),this.failResponse.push(M))}enviaResultados(){for(let M=0;M<this.items.length;M++)for(let m=0;m<this.CorrectResponse.length;m++)if(this.items[M].question==this.CorrectResponse[m].question){this.items[M].usada=!0,console.log("Marco como USADA",M,this.items[M].question);break}console.log("Listado Actualizado:",this.items),this.items.length>0&&localStorage.setItem("Preguntas"+this.tema,JSON.stringify(this.items)),console.log("Listado de Errores:",this.failResponse),this.failResponse.length>0&&localStorage.setItem("failResponse",JSON.stringify(this.failResponse))}resetCuestionario(){console.log("Inicio el RESET");let M="",m=[];if(M=localStorage.getItem("Preguntas"+this.tema)||"",""!=M){m=JSON.parse(M),console.log("Listado preguntas "+this.tema+" Completo",m);for(let D=0;D<m.length;D++)m[D].usada&&(console.log("Pregunta YA USADA, hago RESET",D,m[D].question),m[D].usada=!1,m[D].userAns="-1")}this.items=m,localStorage.removeItem("Preguntas"+this.tema),localStorage.setItem("Preguntas"+this.tema,JSON.stringify(this.items)),this.sinPreguntas=!1,this.respuestaPregunta=!1,this.failResponse=[],this.CorrectResponse=[],console.log("Fin del RESET")}}return(l=L).\u0275fac=function(M){return new(M||l)(e.Y36(s.eN),e.Y36(a.gz))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-questionario"]],decls:16,vars:14,consts:[[3,"translucent"],["slot","start"],["default-href","#",3,"routerLink"],["slot","end"],["id","present-alert"],["slot","icon-only","name","trash"],["trigger","present-alert","message","Se borran las respuestas ya contestadas y se reinicia el tema",3,"header","buttons"],[3,"fullscreen"],[4,"ngIf"],["name","checkmark-circle",2,"color","green"],[1,"ion-text-wrap"],[4,"ngFor","ngForOf"],["expand","full"],["labelPlacement","end","justify","start",3,"value","click",4,"ngFor","ngForOf"],["labelPlacement","end","justify","start",3,"value","click"],["expand","full","color","secondary",3,"routerLink"],["expand","full","color","secondary",3,"routerLink",4,"ngIf"],["expand","full",3,"routerLink","click"]],template:function(M,m){1&M&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e._UZ(3,"ion-back-button",2),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5),e.qZA(),e.TgZ(6,"ion-buttons",3)(7,"ion-button",4),e._UZ(8,"ion-icon",5),e.qZA()(),e._UZ(9,"ion-alert",6),e.qZA()(),e.TgZ(10,"ion-content",7),e.YNc(11,t,2,0,"ion-item",8),e.YNc(12,n,8,0,"ion-item",8),e.YNc(13,o,4,1,"ion-list",8),e.YNc(14,E,4,3,"ion-footer",8),e.YNc(15,h,4,2,"ion-footer",8),e.qZA()),2&M&&(e.Q6J("translucent",!0),e.xp6(3),e.Q6J("routerLink",e.DdM(13,w)),e.xp6(2),e.lnq("Quiz ",m.tema," (",m.restantes," / ",m.totales,")"),e.xp6(4),e.MGl("header","\xbfBorrar questionario ",m.tema,"?"),e.Q6J("buttons",m.alertButtons),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(1),e.Q6J("ngIf",1==m.sinPreguntas),e.xp6(1),e.Q6J("ngIf",1==m.sinPreguntas),e.xp6(1),e.Q6J("ngIf",0==m.sinPreguntas),e.xp6(1),e.Q6J("ngIf",1==m.sinPreguntas),e.xp6(1),e.Q6J("ngIf",0==m.sinPreguntas))},dependencies:[_.sg,_.O5,r.Ge,r.oU,r.YG,r.Sm,r.PM,r.FN,r.Zi,r.Dq,r.wI,r.W2,r.fr,r.Gu,r.gu,r.Ie,r.Q$,r.q_,r.B7,r.se,r.Nd,r.wd,r.sr,r.U5,r.QI,r.cs,r.YI,a.rH],styles:["ion-icon[_ngcontent-%COMP%]{font-size:256px}"]}),L})()}];let A=(()=>{var l;class L{}return(l=L).\u0275fac=function(M){return new(M||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.Bz.forChild(x),a.Bz]}),L})(),f=(()=>{var l;class L{}return(l=L).\u0275fac=function(M){return new(M||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[_.ez,d.u5,r.Pc,A]}),L})()}}]);