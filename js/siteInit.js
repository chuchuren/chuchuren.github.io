import{$ as I,A as me,B as y,C as P,D as j,E as pe,F as U,G as F,H as fe,I as ve,J as we,K as ge,L as ye,M as be,N as Ce,O as Ee,P as Ae,Q as Le,R as ke,S as xe,T as Te,U as Se,V as Re,W as He,X as qe,Y as Me,Z as b,_ as C,a as Oe,b as d,ba as J,ca as Ne,d as _,da as Ie,ea as Pe,f as x,fa as je,g as Ue,ga as ze,ha as Xe,i as z,ia as Be,j as E,ja as K,k as De,l as m,m as G,n as T,o as X,p as $e,q as We,r as Q,s as B,t as Ye,u as S,v,w as V,x as R,y as Z,z as h}from"./chunk-32ZON4C6.js";import"./chunk-QAWHJ5B3.js";import"./chunk-XAPXFKQU.js";De();var H=(e,t)=>{h.hasClass("on")?(h.removeClass("on"),R.removeClass("close"),t?h.style="":b(h,"slideRightOut")):t?h.style="":b(h,"slideRightIn",()=>{h.addClass("on"),R.addClass("close")})},Fe=()=>{let e=E(h,".inner");h.child(".tab")&&e.removeChild(h.child(".tab"));let t=document.createElement("ul"),s="active";t.className="tab",["contents","related","overview"].forEach(a=>{let i=h.child(".panel."+a);if(i.innerHTML.trim().length<1){a==="contents"&&z(U,"none");return}a==="contents"&&z(U,"");let n=document.createElement("li"),r=document.createElement("span"),o=document.createTextNode(i.getAttribute("data-title"));r.appendChild(o),n.appendChild(r),n.addClass(a+" item"),s?(i.addClass(s),n.addClass(s)):i.removeClass("active"),n.addEventListener("click",l=>{let c=l.currentTarget;c.hasClass("active")||(h.find(".tab .item").forEach(u=>{u.removeClass("active")}),h.find(".panel").forEach(u=>{u.removeClass("active")}),h.child(".panel."+c.className.replace(" item","")).addClass("active"),c.addClass("active"))}),t.appendChild(n),s=""}),t.childNodes.length>1?(e.insertBefore(t,e.childNodes[0]),h.child(".panels").style.paddingTop=""):h.child(".panels").style.paddingTop=".625rem"},Je=()=>{let e=r=>{let o=t[r];if(!o||o.hasClass("current"))return;d.each(".toc .active",c=>{c&&c.removeClass("active current")}),s.forEach(c=>{c&&c.removeClass("active")}),o.addClass("active current"),s[r]&&s[r].addClass("active");let l=o.parentNode;for(;!l.matches(".contents");){if(l.matches("li")){l.addClass("active");let c=d(l.child("a.toc-link").getAttribute("href"));c&&c.addClass("active")}l=l.parentNode}getComputedStyle(h).display!=="none"&&i.hasClass("active")&&C(i,o.offsetTop-i.offsetHeight/4)},t=d.all(".contents li");if(t.length<1)return;let s=[...t],a=null;s=s.map((r,o)=>{let l=r.child("a.toc-link"),c=d(decodeURI(l.getAttribute("href")));if(!c)return null;let u=c.child("a.anchor"),k=p=>{p.preventDefault();let N=d(decodeURI(p.currentTarget.getAttribute("href")));a=o,C(N,null,()=>{e(o),a=null})};return l.addEventListener("click",k),u&&u.addEventListener("click",p=>{k(p),Ie(m.hostname+"/"+LOCAL.path+p.currentTarget.getAttribute("href"))}),c});let i=h.child(".contents.panel"),n=r=>{let o=0,l=r[o];if(l.boundingClientRect.top>0)return o=s.indexOf(l.target),o===0?0:o-1;for(;o<r.length;o++)if(r[o].boundingClientRect.top<=0)l=r[o];else return s.indexOf(l.target);return s.indexOf(l.target)};(()=>{let r=new IntersectionObserver(o=>{let l=n(o)+(X<0?1:0);a===null&&e(l)},{rootMargin:"0px 0px -100% 0px",threshold:0});s.forEach(o=>{o&&r.observe(o)})})()},ee=()=>{C(0)},_e=()=>{C(parseInt(String(x(Ye))))},Ke=()=>{C(d("#comments"))},Ge=()=>{d.each(".menu .item:not(.title)",e=>{let t=e.child("a[href]"),s=e.parentNode.parentNode;if(!t)return;let a=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),i=!m.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname),n=!t.onclick&&t.hostname===location.hostname&&(a||i);e.toggleClass("active",n),e.parentNode.child(".active")&&s.hasClass("dropdown")?s.removeClass("active").addClass("expand"):s.removeClass("expand")})},w={timer:void 0,lock:!1,show(){clearTimeout(this.timer),document.body.removeClass("loaded"),S.setAttribute("style","display:block"),w.lock=!1},hide(e){m.loader.start||(e=-1),this.timer=setTimeout(this.vanish,e||3e3)},vanish(){w.lock||(m.loader.start&&b(S,0),document.body.addClass("loaded"),w.lock=!0)}};function Qe(){d.each(".overview .menu > .item",e=>{E(v,".menu").appendChild(e.cloneNode(!0))}),S.addEventListener("click",w.vanish),R.addEventListener("click",H),d(".dimmer").addEventListener("click",H),E(Z,".down").addEventListener("click",_e),E(Z,".up").addEventListener("click",ee),y||Me(_(V,"div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})),Se(y.child(".player")),Re(y.child(".back-to-top")),He(y.child(".chat")),qe(y.child(".contents")),j.addEventListener("click",ee),pe.addEventListener("click",Ke),U.addEventListener("click",H),je(P),d("main").addEventListener("click",()=>{P.player.mini()}),new IntersectionObserver(([e])=>{e.isIntersecting?(document.querySelectorAll(".parallax>use").forEach(t=>{t.classList.remove("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(t=>{t.classList.remove("stop-animation")})):(document.querySelectorAll(".parallax>use").forEach(t=>{t.classList.add("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(t=>{t.classList.add("stop-animation")}))},{root:null,threshold:.2}).observe(document.getElementById("waves")),new IntersectionObserver(([e])=>{e.isIntersecting?document.querySelectorAll(".with-love>i").forEach(t=>{t.classList.remove("stop-animation")}):document.querySelectorAll(".with-love>i").forEach(t=>{t.classList.add("stop-animation")})},{root:null,threshold:.2}).observe(document.querySelector(".with-love"))}var Ve=()=>{if(!d(".index.wrap"))return;let e=new IntersectionObserver(t=>{t.forEach(s=>{s.target.hasClass("show")?e.unobserve(s.target):(s.isIntersecting||s.intersectionRatio>0)&&(s.target.addClass("show"),e.unobserve(s.target))})},{root:null,threshold:[.3]});d.each(".index.wrap article.item, .index.wrap section.item",t=>{e.observe(t)}),d(".index.wrap .item:first-child").addClass("show"),d.each(".cards .item",t=>{["mouseenter","touchstart"].forEach(s=>{t.addEventListener(s,()=>{d(".cards .item.active")&&d(".cards .item.active").removeClass("active"),t.addClass("active")},{passive:!0})}),["mouseleave"].forEach(s=>{t.addEventListener(s,()=>{t.removeClass("active")},{passive:!0})})})},f=e=>{let t=d(".theme .ic");e==="dark"?(B.setAttribute("data-theme",e),t.removeClass("i-sun"),t.addClass("i-moon")):(B.removeAttribute("data-theme"),t.removeClass("i-moon"),t.addClass("i-sun"))},Ze=()=>{m.auto_dark.enable&&(new Date().getHours()>=m.auto_dark.start||new Date().getHours()<=m.auto_dark.end?f("dark"):f())},te=e=>{B.getAttribute("data-theme")==="dark"&&(e="#222"),d('meta[name="theme-color"]').setAttribute("content",e)},et=()=>{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?f("dark"):f()});let e=I.get("theme");e?f(e):m.darkmode&&f("dark")},se=()=>{we(x(v)),ge(x(V)),ye(F+x(d("#waves"))),ve!==window.innerWidth&&H(null,1),be(window.innerHeight),Ce(window.innerWidth)},tt=()=>{let e=window.innerHeight,t=Oe(),s=t>e?t-e:document.body.scrollHeight-e,a=window.scrollY>F,i=window.scrollY>0;te(a?"#FFF":"#222"),v.toggleClass("show",a),y.toggleClass("affix",i),me.toggleClass("affix",i),h.toggleClass("affix",window.scrollY>fe&&document.body.offsetWidth>991),typeof T.y>"u"&&(T.y=window.scrollY),Ee(T.y-window.scrollY),X<0?(v.removeClass("up"),v.toggleClass("down",a)):X>0&&(v.removeClass("down"),v.toggleClass("up",a)),T.y=window.scrollY;let n=Math.round(Math.min(100*window.scrollY/s,100))+"%";j.child("span").innerText!==n&&(j.child("span").innerText=n),(d("#sidebar").hasClass("affix")||d("#sidebar").hasClass("on"))&&Ue(d(".percent"),n)},st=()=>{let e=d('[rel="icon"]');document.addEventListener("visibilitychange",()=>{switch(document.visibilityState){case"hidden":e.setAttribute("href",G+m.favicon.hidden),document.title=LOCAL.favicon.hide,m.loader.switch&&w.show(),clearTimeout(We);break;case"visible":e.setAttribute("href",G+m.favicon.normal),document.title=LOCAL.favicon.show,m.loader.switch&&w.hide(1e3),Ae(setTimeout(()=>{document.title=$e},2e3));break}},{passive:!0})},ae=typeof window>"u",at=!ae&&"loading"in HTMLImageElement.prototype,ot=!ae&&(!("onscroll"in window)||/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent));function it(e,t=document){return typeof e=="string"?[...t.querySelectorAll(e)]:e instanceof Element?[e]:[...e]}function nt(e,t){let s;return function(...a){s&&clearTimeout(s),s=setTimeout(()=>{s=void 0,e(...a)},t)}}var rt=32,lt="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",ct=Math.PI,Rt=ct*2;function dt(e='img[loading="lazy"]',{hash:t=!0,hashType:s="blurhash",placeholderSize:a=rt,updateSizesOnResize:i=!1,onImageLoad:n}={}){let r=new Set;for(let o of it(e)){let l=D(o,{updateOnResize:i});if(i&&l&&r.add(l),!o.dataset.src&&!o.dataset.srcset)continue;if(ot||!at){ie(o),W(o),$(o);continue}if(o.src||(o.src=lt),o.complete&&o.naturalWidth>0){oe(o,n);continue}let c=()=>oe(o,n);o.addEventListener("load",c,{once:!0}),r.add(()=>o.removeEventListener("load",c))}return()=>{for(let o of r)o();r.clear()}}function oe(e,t){let s=new Image,{srcset:a,src:i,sizes:n}=e.dataset;if(n==="auto"){let r=ne(e);r&&(s.sizes=`${r}px`)}else e.sizes&&(s.sizes=e.sizes);a&&(s.srcset=a),i&&(s.src=i),s.addEventListener("load",()=>{ie(e),W(e),$(e),t?.(e)})}var q=new WeakMap;function D(e,t){if(e.dataset.sizes!=="auto")return;let s=ne(e);if(s&&(e.sizes=`${s}px`),e.parentElement?.tagName.toLowerCase()==="picture"&&!t?.skipChildren&&[...e.parentElement.getElementsByTagName("source")].forEach(a=>D(a,{skipChildren:!0})),t?.updateOnResize){if(!q.has(e)){let a=nt(()=>D(e),500),i=new ResizeObserver(a);q.set(e,i),i.observe(e)}return()=>{let a=q.get(e);a&&(a.disconnect(),q.delete(e))}}}function $(e){e.dataset.src&&(e.src=e.dataset.src,e.removeAttribute("data-src"))}function W(e){e.dataset.srcset&&(e.srcset=e.dataset.srcset,e.removeAttribute("data-srcset"))}function ie(e){let t=e.parentElement;t?.tagName.toLowerCase()==="picture"&&([...t.querySelectorAll("source[data-srcset]")].forEach(W),[...t.querySelectorAll("source[data-src]")].forEach($))}function ne(e){return e instanceof HTMLSourceElement?e.parentElement?.getElementsByTagName("img")[0]?.offsetWidth:e.offsetWidth}var ht=()=>{J(),h.hasClass("on")&&b(h,0,()=>{h.removeClass("on"),R.removeClass("close")});let e=d("#main");e.innerHTML="",e.appendChild(S.lastChild.cloneNode(!0)),C(0)},re=e=>{Le(0),ke(window.location.href),K("katex"),Be("copy_tex"),K("mermaid");let t=new IntersectionObserver(function(s,a){s.forEach(i=>{if(i.isIntersecting){let n=i.target;n.style.backgroundImage=`url("${n.getAttribute("data-background-image")}")`,n.removeAttribute("data-background-image"),a.unobserve(n)}})},{root:null,threshold:.2});if(document.querySelectorAll("[data-background-image]").forEach(s=>{t.observe(s)}),e!==1&&d.each("script[data-pjax]",Xe),Te(document.title),se(),Ge(),Fe(),Je(),LOCAL.ispost){import("./post-3WXLWIUW.js").then(({postBeauty:a})=>{a()});let s=new IntersectionObserver(a=>{a.forEach(i=>{i.isIntersecting&&s.disconnect()})},{root:null,threshold:.2});s.observe(d("#copyright"))}dt(),Pe(),P.player.load(LOCAL.audio||m.audio||{}),w.hide(500),setTimeout(()=>{Ne()},500),Ve()};function g(e,t,s){return e instanceof HTMLCollection||e instanceof NodeList||e instanceof Array?Array.prototype.forEach.call(e,t,s):t.call(s,e,0,[e])}var le=(e,t)=>{e=typeof e=="string"?e.split(" "):e,e.forEach(t)};function Y(e,t,s,a){le(t,i=>{g(e,n=>{n.addEventListener(i,s,a)})})}function A(e,t,s={}){le(t,a=>{let i=new CustomEvent(a,{bubbles:!0,cancelable:!0,...s});g(e,n=>{n.dispatchEvent(i)})})}function ce(e){let t=e.text||e.textContent||e.innerHTML||"",s=e.src||"",a=e.parentNode||document.querySelector("head")||document.documentElement,i=document.createElement("script");return t.match("document.write")?!1:(i.type="text/javascript",i.id=e.id,s!==""&&(i.src=s,i.async=!1),t!==""&&i.appendChild(document.createTextNode(t)),a.appendChild(i),(a instanceof HTMLHeadElement||a instanceof HTMLBodyElement)&&a.contains(i)&&a.removeChild(i),!0)}function ut(e){e.tagName.toLowerCase()==="script"&&ce(e),g(e.querySelectorAll("script"),t=>{let s=t;(!s.type||s.type.toLowerCase()==="text/javascript")&&(s.parentNode&&s.parentNode.removeChild(s),ce(s))})}function mt(e,t,s,a=document){e.forEach(i=>{g(a.querySelectorAll(i),t,s)})}var M=(()=>{let e=0;return()=>`pjax${new Date().getTime()}_${e++}`})();function de(e,t){e.outerHTML=t.outerHTML,this.onSwitch()}function pt(e,t){e.innerHTML=t.innerHTML,t.className===""?e.removeAttribute("class"):e.className=t.className,this.onSwitch()}function he(e,t){if(e.innerHTML=t.innerHTML,t.hasAttributes()){let s=t.attributes;for(let a=0;a<s.length;a++)e.attributes.setNamedItem(s[a].cloneNode())}this.onSwitch()}function ft({elements:e="a[href]",selectors:t=["title",".js-Pjax"],switches:s={},switchesOptions:a={},history:i=!0,scrollTo:n=0,scrollRestoration:r=!0,cacheBust:o=!0,timeout:l=0,currentUrlFullReload:c=!1}={}){let u={elements:e,selectors:t,switches:s,switchesOptions:a,history:i,scrollTo:n,scrollRestoration:r,cacheBust:o,timeout:l,currentUrlFullReload:c};return u.switches.head||(u.switches.head=he),u.switches.body||(u.switches.body=he),u}var O="data-pjax-state";function ue(e,t){if(t.defaultPrevented||t.returnValue===!1)return;let s={...this.options},a=vt(e,t);if(a){e.setAttribute(O,a);return}if(t.preventDefault(),this.options.currentUrlFullReload&&e.href===window.location.href.split("#")[0]){e.setAttribute(O,"reload"),this.reload();return}e.setAttribute(O,"load"),s.triggerElement=e,this.loadUrl(e.href,s)}function vt(e,t){return t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey?"modifier":e.protocol!==window.location.protocol||e.host!==window.location.host?"external":e.hash&&e.href.replace(e.hash,"")===window.location.href.replace(location.hash,"")?"anchor":e.href===window.location.href.split("#")[0]+"#"?"anchor-empty":null}function wt(e){e.setAttribute(O,""),Y(e,"click",t=>ue.call(this,e,t)),Y(e,"keyup",t=>{let s=t;s.keyCode===13&&ue.call(this,e,s)})}function gt(e,t,s,a){if(a={...a||this.options},a.request=t,e===!1){A(document,"pjax:complete pjax:error",a);return}let i=window.history.state||{};window.history.replaceState({url:i.url||window.location.href,title:i.title||document.title,uid:i.uid||M(),scrollPos:[document.documentElement.scrollLeft||document.body.scrollLeft,document.documentElement.scrollTop||document.body.scrollTop]},document.title,window.location.href);let n=s;t.responseURL?s!==t.responseURL&&(s=t.responseURL):t.getResponseHeader("X-PJAX-URL")?s=t.getResponseHeader("X-PJAX-URL"):t.getResponseHeader("X-XHR-Redirected-To")&&(s=t.getResponseHeader("X-XHR-Redirected-To"));let r=document.createElement("a");r.href=n;let o=r.hash;r.href=s,o&&!r.hash&&(r.hash=o,s=r.href),this.state.href=s,this.state.options=a;try{this.loadContent(e,a)}catch(l){return A(document,"pjax:error",a),console.error("Pjax switch fail: ",l),this.latestChance(s)}}function yt(e){switch(e.tagName.toLowerCase()){case"a":e.hasAttribute("data-pjax-state")||this.attachLink(e);break;default:throw new Error("theme-shokax-pjax can only be applied on <a>")}}function bt(e,t,s){let a=new RegExp("([?&])"+t+"=.*?(&|$)","i"),i=e.indexOf("?")!==-1?"&":"?";return e.match(a)?e.replace(a,"$1"+t+"="+s+"$2"):e+i+t+"="+s}function Ct(e,t={},s){let a=t.requestOptions||{},i=(a.requestMethod||"GET").toUpperCase(),n=a.requestParams||null,r=null,o=new XMLHttpRequest,l=t.timeout;if(o.onreadystatechange=()=>{o.readyState===4&&(o.status===200?s(o.responseText,o,e,t):o.status!==0&&s(null,o,e,t))},o.onerror=c=>{console.error(c),s(null,o,e,t)},o.ontimeout=()=>{s(null,o,e,t)},n&&n.length){let c=n.map(u=>u.name+"="+u.value).join("&");switch(i){case"GET":e=e.split("?")[0],e+="?"+c;break;case"POST":r=c;break}}return t.cacheBust&&(e=bt(e,"t",Date.now())),o.open(i,e,!0),o.timeout=l,o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.setRequestHeader("X-PJAX","true"),o.setRequestHeader("X-PJAX-Selectors",JSON.stringify(t.selectors)),o.send(r),o}function Et(e,t,s,a,i,n){let r=[];s.forEach(o=>{let l=a.querySelectorAll(o),c=i.querySelectorAll(o);if(l.length!==c.length)throw new Error(`DOM doesn't look the same on new loaded page: '${o}' - new ${l.length}, old ${c.length}`);g(l,(u,k)=>{let p=c[k],N=e[o]?e[o].bind(this,p,u,n,t[o]):de.bind(this,p,u,n);r.push(N)},this)},this),this.state.numPendingSwitches=r.length,r.forEach(o=>{o()})}function At(e,t,s){for(let a of t){let i=e.querySelectorAll(a);for(let n=0;n<i.length;n++)if(i[n].contains(s))return!0}return!1}var L=class{constructor(e){this.state={numPendingSwitches:0,href:null,options:null},this.options=ft(e),this.options.scrollRestoration&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),this.maxUid=this.lastUid=M(),this.parseDOM(document),Y(window,"popstate",t=>{let s=t;if(s.state){let a={...this.options};a.url=s.state.url,a.title=s.state.title,a.history=!1,a.scrollPos=s.state.scrollPos,s.state.uid<this.lastUid?a.backward=!0:a.forward=!0,this.lastUid=s.state.uid,this.loadUrl(s.state.url,a)}})}getElements(e){return e.querySelectorAll(this.options.elements)}parseDOM(e){g(this.getElements(e),yt,this)}refresh(e){this.parseDOM(e||document)}reload(){window.location.reload()}forEachSelectors(e,t,s){return mt.bind(this)(this.options.selectors,e,t,s)}switchSelectors(e,t,s,a){return Et.bind(this)(this.options.switches,this.options.switchesOptions,e,t,s,a)}latestChance(e){window.location=e}onSwitch(){A(window,"resize scroll"),this.state.numPendingSwitches--,this.state.numPendingSwitches===0&&this.afterAllSwitches()}loadContent(e,t){if(typeof e!="string"){A(document,"pjax:complete pjax:error",t);return}let s=document.implementation.createHTMLDocument("pjax"),a=/<html[^>]+>/gi,i=/\s?[a-z:]+(?:=['"][^'">]+['"])*/gi,n=e.match(a);if(n&&n.length&&(n=n[0].match(i),n.length&&(n.shift(),n.forEach(r=>{let o=r.trim().split("=");o.length===1?s.documentElement.setAttribute(o[0],"true"):s.documentElement.setAttribute(o[0],o[1].slice(1,-1))}))),s.documentElement.innerHTML=e,document.activeElement&&At(document,this.options.selectors,document.activeElement))try{document.activeElement.blur()}catch{}this.switchSelectors(this.options.selectors,s,document,t)}loadUrl(e,t){t=typeof t=="object"?{...this.options,...t}:{...this.options},this.abortRequest(this.request),A(document,"pjax:send",t),this.request=this.doRequest(e,t,this.handleResponse.bind(this))}afterAllSwitches(){var e,t,s;this.options.selectors.forEach(i=>{g(document.querySelectorAll(i),n=>{ut(n)})});let a=this.state;if(!((e=a.options)===null||e===void 0)&&e.history&&(window.history.state||(this.lastUid=this.maxUid=M(),window.history.replaceState({url:window.location.href,title:document.title,uid:this.maxUid,scrollPos:[0,0]},document.title)),this.lastUid=this.maxUid=M(),window.history.pushState({url:a.href,title:a.options.title,uid:this.maxUid,scrollPos:[0,0]},a.options.title,a.href)),this.forEachSelectors(i=>{this.parseDOM(i)},this),A(document,"pjax:complete pjax:success",a.options),!((t=a.options)===null||t===void 0)&&t.history){let i=document.createElement("a");if(i.href=this.state.href,i.hash){let n=i.hash.slice(1);n=decodeURIComponent(n);let r=0,o=document.getElementById(n)||document.getElementsByName(n)[0];if(o&&o.offsetParent)do r+=o.offsetTop,o=o.offsetParent;while(o);window.scrollTo(0,r)}else a.options.scrollTo!==!1&&(Array.isArray(a.options.scrollTo)?window.scrollTo(a.options.scrollTo[0],a.options.scrollTo[1]):window.scrollTo(0,a.options.scrollTo))}else!((s=a.options)===null||s===void 0)&&s.scrollRestoration&&a.options.scrollPos&&window.scrollTo(a.options.scrollPos[0],a.options.scrollPos[1]);this.state={numPendingSwitches:0,href:null,options:null}}abortRequest(e){e&&e.readyState<4&&(e.onreadystatechange=()=>{},e.abort())}};L.prototype.attachLink=wt,L.prototype.doRequest=Ct,L.prototype.handleResponse=gt,L.switches={innerHTML:pt,outerHTML:de};function Lt(){function e(){let t,s=E(d(".theme"),".ic"),a=_(Q,"div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'}),i=()=>{b(a,{delay:2500,opacity:0},()=>{Q.removeChild(a)})};s.hasClass("i-sun")?t=()=>{a.addClass("dark"),f("dark"),I.set("theme","dark"),i()}:(a.addClass("dark"),t=()=>{a.removeClass("dark"),f(),I.set("theme","light"),i()}),b(a,1,()=>{setTimeout(t,210)},()=>{z(a,"block")})}E(d("#rightNav"),".theme .ic").addEventListener("click",e)}var kt=()=>{Lt(),Qe(),xe(new L({selectors:["head title",".languages",".twikoo",".pjax",".leancloud-recent-comment","script[data-config]"],cacheBust:!1})),m.quicklink.ignores=LOCAL.ignores,import("./quicklink-CHAN25W5.js").then(({listen:e})=>{e(m.quicklink)}),Ze(),st(),et(),import("./index.esm-W3CXYCWN.js").then(e=>{e.default(m.fireworks)}),window.addEventListener("scroll",tt,{passive:!0}),window.addEventListener("resize",se,{passive:!0}),window.addEventListener("pjax:send",ht,{passive:!0}),window.addEventListener("pjax:success",re,{passive:!0}),window.addEventListener("beforeunload",()=>{J()}),re(1)};ze(),window.addEventListener("DOMContentLoaded",kt,{passive:!0}),console.log("%c Theme.ShokaX v"+m.version+" %c https://github.com/theme-shoka-x/hexo-theme-shokaX ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");/*! For license information please see siteInit.js.LEGAL.txt */
