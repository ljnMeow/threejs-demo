(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function oa(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function aa(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=dt(i)?kf(i):aa(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(dt(n))return n;if(et(n))return n}}const Uf=/;(?![^(]*\))/g,zf=/:([^]+)/,Bf=/\/\*.*?\*\//gs;function kf(n){const e={};return n.replace(Bf,"").split(Uf).forEach(t=>{if(t){const i=t.split(zf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function la(n){let e="";if(dt(n))e=n;else if(Ie(n))for(let t=0;t<n.length;t++){const i=la(n[t]);i&&(e+=i+" ")}else if(et(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Gf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hf=oa(Gf);function Xc(n){return!!n||n===""}const Je={},Ni=[],Jt=()=>{},Vf=()=>!1,Wf=/^on[^a-z]/,Ms=n=>Wf.test(n),ca=n=>n.startsWith("onUpdate:"),xt=Object.assign,ua=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},qf=Object.prototype.hasOwnProperty,Ve=(n,e)=>qf.call(n,e),Ie=Array.isArray,hr=n=>bs(n)==="[object Map]",Xf=n=>bs(n)==="[object Set]",Oe=n=>typeof n=="function",dt=n=>typeof n=="string",fa=n=>typeof n=="symbol",et=n=>n!==null&&typeof n=="object",jc=n=>et(n)&&Oe(n.then)&&Oe(n.catch),jf=Object.prototype.toString,bs=n=>jf.call(n),Yf=n=>bs(n).slice(8,-1),$f=n=>bs(n)==="[object Object]",ha=n=>dt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,cs=oa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ss=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Kf=/-(\w)/g,ln=Ss(n=>n.replace(Kf,(e,t)=>t?t.toUpperCase():"")),Zf=/\B([A-Z])/g,Ki=Ss(n=>n.replace(Zf,"-$1").toLowerCase()),ws=Ss(n=>n.charAt(0).toUpperCase()+n.slice(1)),ks=Ss(n=>n?`on${ws(n)}`:""),_r=(n,e)=>!Object.is(n,e),Gs=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},gs=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Jf=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let za;const Qf=()=>za||(za=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let jt;class eh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=jt,!e&&jt&&(this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=jt;try{return jt=this,e()}finally{jt=t}}}on(){jt=this}off(){jt=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function th(n,e=jt){e&&e.active&&e.effects.push(n)}function nh(){return jt}const da=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Yc=n=>(n.w&Un)>0,$c=n=>(n.n&Un)>0,ih=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Un},rh=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];Yc(r)&&!$c(r)?r.delete(n):e[t++]=r,r.w&=~Un,r.n&=~Un}e.length=t}},Do=new WeakMap;let cr=0,Un=1;const Io=30;let Yt;const ii=Symbol(""),Fo=Symbol("");class pa{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,th(this,i)}run(){if(!this.active)return this.fn();let e=Yt,t=Fn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Yt,Yt=this,Fn=!0,Un=1<<++cr,cr<=Io?ih(this):Ba(this),this.fn()}finally{cr<=Io&&rh(this),Un=1<<--cr,Yt=this.parent,Fn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Yt===this?this.deferStop=!0:this.active&&(Ba(this),this.onStop&&this.onStop(),this.active=!1)}}function Ba(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Fn=!0;const Kc=[];function Zi(){Kc.push(Fn),Fn=!1}function Ji(){const n=Kc.pop();Fn=n===void 0?!0:n}function At(n,e,t){if(Fn&&Yt){let i=Do.get(n);i||Do.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=da()),Zc(r)}}function Zc(n,e){let t=!1;cr<=Io?$c(n)||(n.n|=Un,t=!Yc(n)):t=!n.has(Yt),t&&(n.add(Yt),Yt.deps.push(n))}function bn(n,e,t,i,r,s){const a=Do.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Ie(n)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Ie(n)?ha(t)&&o.push(a.get("length")):(o.push(a.get(ii)),hr(n)&&o.push(a.get(Fo)));break;case"delete":Ie(n)||(o.push(a.get(ii)),hr(n)&&o.push(a.get(Fo)));break;case"set":hr(n)&&o.push(a.get(ii));break}if(o.length===1)o[0]&&Oo(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Oo(da(l))}}function Oo(n,e){const t=Ie(n)?n:[...n];for(const i of t)i.computed&&ka(i);for(const i of t)i.computed||ka(i)}function ka(n,e){(n!==Yt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const sh=oa("__proto__,__v_isRef,__isVue"),Jc=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(fa)),oh=ma(),ah=ma(!1,!0),lh=ma(!0),Ga=ch();function ch(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=qe(this);for(let s=0,a=this.length;s<a;s++)At(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(qe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Zi();const i=qe(this)[e].apply(this,t);return Ji(),i}}),n}function uh(n){const e=qe(this);return At(e,"has",n),e.hasOwnProperty(n)}function ma(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?Th:iu:e?nu:tu).get(i))return i;const a=Ie(i);if(!n){if(a&&Ve(Ga,r))return Reflect.get(Ga,r,s);if(r==="hasOwnProperty")return uh}const o=Reflect.get(i,r,s);return(fa(r)?Jc.has(r):sh(r))||(n||At(i,"get",r),e)?o:_t(o)?a&&ha(r)?o:o.value:et(o)?n?ru(o):Cr(o):o}}const fh=Qc(),hh=Qc(!0);function Qc(n=!1){return function(t,i,r,s){let a=t[i];if(Hi(a)&&_t(a)&&!_t(r))return!1;if(!n&&(!_s(r)&&!Hi(r)&&(a=qe(a),r=qe(r)),!Ie(t)&&_t(a)&&!_t(r)))return a.value=r,!0;const o=Ie(t)&&ha(i)?Number(i)<t.length:Ve(t,i),l=Reflect.set(t,i,r,s);return t===qe(s)&&(o?_r(r,a)&&bn(t,"set",i,r):bn(t,"add",i,r)),l}}function dh(n,e){const t=Ve(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&bn(n,"delete",e,void 0),i}function ph(n,e){const t=Reflect.has(n,e);return(!fa(e)||!Jc.has(e))&&At(n,"has",e),t}function mh(n){return At(n,"iterate",Ie(n)?"length":ii),Reflect.ownKeys(n)}const eu={get:oh,set:fh,deleteProperty:dh,has:ph,ownKeys:mh},gh={get:lh,set(n,e){return!0},deleteProperty(n,e){return!0}},_h=xt({},eu,{get:ah,set:hh}),ga=n=>n,Es=n=>Reflect.getPrototypeOf(n);function Fr(n,e,t=!1,i=!1){n=n.__v_raw;const r=qe(n),s=qe(e);t||(e!==s&&At(r,"get",e),At(r,"get",s));const{has:a}=Es(r),o=i?ga:t?va:xr;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function Or(n,e=!1){const t=this.__v_raw,i=qe(t),r=qe(n);return e||(n!==r&&At(i,"has",n),At(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Nr(n,e=!1){return n=n.__v_raw,!e&&At(qe(n),"iterate",ii),Reflect.get(n,"size",n)}function Ha(n){n=qe(n);const e=qe(this);return Es(e).has.call(e,n)||(e.add(n),bn(e,"add",n,n)),this}function Va(n,e){e=qe(e);const t=qe(this),{has:i,get:r}=Es(t);let s=i.call(t,n);s||(n=qe(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?_r(e,a)&&bn(t,"set",n,e):bn(t,"add",n,e),this}function Wa(n){const e=qe(this),{has:t,get:i}=Es(e);let r=t.call(e,n);r||(n=qe(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&bn(e,"delete",n,void 0),s}function qa(){const n=qe(this),e=n.size!==0,t=n.clear();return e&&bn(n,"clear",void 0,void 0),t}function Ur(n,e){return function(i,r){const s=this,a=s.__v_raw,o=qe(a),l=e?ga:n?va:xr;return!n&&At(o,"iterate",ii),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function zr(n,e,t){return function(...i){const r=this.__v_raw,s=qe(r),a=hr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?ga:e?va:xr;return!e&&At(s,"iterate",l?Fo:ii),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function En(n){return function(...e){return n==="delete"?!1:this}}function xh(){const n={get(s){return Fr(this,s)},get size(){return Nr(this)},has:Or,add:Ha,set:Va,delete:Wa,clear:qa,forEach:Ur(!1,!1)},e={get(s){return Fr(this,s,!1,!0)},get size(){return Nr(this)},has:Or,add:Ha,set:Va,delete:Wa,clear:qa,forEach:Ur(!1,!0)},t={get(s){return Fr(this,s,!0)},get size(){return Nr(this,!0)},has(s){return Or.call(this,s,!0)},add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear"),forEach:Ur(!0,!1)},i={get(s){return Fr(this,s,!0,!0)},get size(){return Nr(this,!0)},has(s){return Or.call(this,s,!0)},add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear"),forEach:Ur(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=zr(s,!1,!1),t[s]=zr(s,!0,!1),e[s]=zr(s,!1,!0),i[s]=zr(s,!0,!0)}),[n,t,e,i]}const[vh,yh,Mh,bh]=xh();function _a(n,e){const t=e?n?bh:Mh:n?yh:vh;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ve(t,r)&&r in i?t:i,r,s)}const Sh={get:_a(!1,!1)},wh={get:_a(!1,!0)},Eh={get:_a(!0,!1)},tu=new WeakMap,nu=new WeakMap,iu=new WeakMap,Th=new WeakMap;function Ah(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ch(n){return n.__v_skip||!Object.isExtensible(n)?0:Ah(Yf(n))}function Cr(n){return Hi(n)?n:xa(n,!1,eu,Sh,tu)}function Lh(n){return xa(n,!1,_h,wh,nu)}function ru(n){return xa(n,!0,gh,Eh,iu)}function xa(n,e,t,i,r){if(!et(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=Ch(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Ui(n){return Hi(n)?Ui(n.__v_raw):!!(n&&n.__v_isReactive)}function Hi(n){return!!(n&&n.__v_isReadonly)}function _s(n){return!!(n&&n.__v_isShallow)}function su(n){return Ui(n)||Hi(n)}function qe(n){const e=n&&n.__v_raw;return e?qe(e):n}function ou(n){return gs(n,"__v_skip",!0),n}const xr=n=>et(n)?Cr(n):n,va=n=>et(n)?ru(n):n;function au(n){Fn&&Yt&&(n=qe(n),Zc(n.dep||(n.dep=da())))}function lu(n,e){n=qe(n);const t=n.dep;t&&Oo(t)}function _t(n){return!!(n&&n.__v_isRef===!0)}function cu(n){return uu(n,!1)}function Ph(n){return uu(n,!0)}function uu(n,e){return _t(n)?n:new Rh(n,e)}class Rh{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:qe(e),this._value=t?e:xr(e)}get value(){return au(this),this._value}set value(e){const t=this.__v_isShallow||_s(e)||Hi(e);e=t?e:qe(e),_r(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:xr(e),lu(this))}}function zi(n){return _t(n)?n.value:n}const Dh={get:(n,e,t)=>zi(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return _t(r)&&!_t(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function fu(n){return Ui(n)?n:new Proxy(n,Dh)}var hu;class Ih{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[hu]=!1,this._dirty=!0,this.effect=new pa(e,()=>{this._dirty||(this._dirty=!0,lu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=qe(this);return au(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}hu="__v_isReadonly";function Fh(n,e,t=!1){let i,r;const s=Oe(n);return s?(i=n,r=Jt):(i=n.get,r=n.set),new Ih(i,r,s||!r,t)}function On(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){Ts(s,e,t)}return r}function Ht(n,e,t,i){if(Oe(n)){const s=On(n,e,t,i);return s&&jc(s)&&s.catch(a=>{Ts(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Ht(n[s],e,t,i));return r}function Ts(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){On(l,null,10,[n,a,o]);return}}Oh(n,t,r,i)}function Oh(n,e,t,i=!0){console.error(n)}let vr=!1,No=!1;const gt=[];let an=0;const Bi=[];let _n=null,Zn=0;const du=Promise.resolve();let ya=null;function Ma(n){const e=ya||du;return n?e.then(this?n.bind(this):n):e}function Nh(n){let e=an+1,t=gt.length;for(;e<t;){const i=e+t>>>1;yr(gt[i])<n?e=i+1:t=i}return e}function ba(n){(!gt.length||!gt.includes(n,vr&&n.allowRecurse?an+1:an))&&(n.id==null?gt.push(n):gt.splice(Nh(n.id),0,n),pu())}function pu(){!vr&&!No&&(No=!0,ya=du.then(gu))}function Uh(n){const e=gt.indexOf(n);e>an&&gt.splice(e,1)}function zh(n){Ie(n)?Bi.push(...n):(!_n||!_n.includes(n,n.allowRecurse?Zn+1:Zn))&&Bi.push(n),pu()}function Xa(n,e=vr?an+1:0){for(;e<gt.length;e++){const t=gt[e];t&&t.pre&&(gt.splice(e,1),e--,t())}}function mu(n){if(Bi.length){const e=[...new Set(Bi)];if(Bi.length=0,_n){_n.push(...e);return}for(_n=e,_n.sort((t,i)=>yr(t)-yr(i)),Zn=0;Zn<_n.length;Zn++)_n[Zn]();_n=null,Zn=0}}const yr=n=>n.id==null?1/0:n.id,Bh=(n,e)=>{const t=yr(n)-yr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function gu(n){No=!1,vr=!0,gt.sort(Bh);const e=Jt;try{for(an=0;an<gt.length;an++){const t=gt[an];t&&t.active!==!1&&On(t,null,14)}}finally{an=0,gt.length=0,mu(),vr=!1,ya=null,(gt.length||Bi.length)&&gu()}}function kh(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Je;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=i[u]||Je;h&&(r=t.map(m=>dt(m)?m.trim():m)),f&&(r=t.map(Jf))}let o,l=i[o=ks(e)]||i[o=ks(ln(e))];!l&&s&&(l=i[o=ks(Ki(e))]),l&&Ht(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Ht(c,n,6,r)}}function _u(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Oe(n)){const l=c=>{const u=_u(c,e,!0);u&&(o=!0,xt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(et(n)&&i.set(n,null),null):(Ie(s)?s.forEach(l=>a[l]=null):xt(a,s),et(n)&&i.set(n,a),a)}function As(n,e){return!n||!Ms(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ve(n,e[0].toLowerCase()+e.slice(1))||Ve(n,Ki(e))||Ve(n,e))}let Gt=null,xu=null;function xs(n){const e=Gt;return Gt=n,xu=n&&n.type.__scopeId||null,e}function vu(n,e=Gt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&il(-1);const s=xs(e);let a;try{a=n(...r)}finally{xs(s),i._d&&il(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Hs(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:g,inheritAttrs:p}=n;let d,x;const E=xs(n);try{if(t.shapeFlag&4){const S=r||i;d=sn(u.call(S,S,f,s,m,h,g)),x=l}else{const S=e;d=sn(S.length>1?S(s,{attrs:l,slots:o,emit:c}):S(s,null)),x=e.props?l:Gh(l)}}catch(S){pr.length=0,Ts(S,n,1),d=It(yn)}let y=d;if(x&&p!==!1){const S=Object.keys(x),{shapeFlag:T}=y;S.length&&T&7&&(a&&S.some(ca)&&(x=Hh(x,a)),y=zn(y,x))}return t.dirs&&(y=zn(y),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),d=y,xs(E),d}const Gh=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ms(t))&&((e||(e={}))[t]=n[t]);return e},Hh=(n,e)=>{const t={};for(const i in n)(!ca(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Vh(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?ja(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!As(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?ja(i,a,c):!0:!!a;return!1}function ja(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!As(t,s))return!0}return!1}function Wh({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const qh=n=>n.__isSuspense;function Xh(n,e){e&&e.pendingBranch?Ie(n)?e.effects.push(...n):e.effects.push(n):zh(n)}function us(n,e){if(Qe){let t=Qe.provides;const i=Qe.parent&&Qe.parent.provides;i===t&&(t=Qe.provides=Object.create(i)),t[n]=e}}function vn(n,e,t=!1){const i=Qe||Gt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Oe(e)?e.call(i.proxy):e}}const Br={};function fs(n,e,t){return yu(n,e,t)}function yu(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=Je){const o=nh()===(Qe==null?void 0:Qe.scope)?Qe:null;let l,c=!1,u=!1;if(_t(n)?(l=()=>n.value,c=_s(n)):Ui(n)?(l=()=>n,i=!0):Ie(n)?(u=!0,c=n.some(y=>Ui(y)||_s(y)),l=()=>n.map(y=>{if(_t(y))return y.value;if(Ui(y))return Fi(y);if(Oe(y))return On(y,o,2)})):Oe(n)?e?l=()=>On(n,o,2):l=()=>{if(!(o&&o.isUnmounted))return f&&f(),Ht(n,o,3,[h])}:l=Jt,e&&i){const y=l;l=()=>Fi(y())}let f,h=y=>{f=x.onStop=()=>{On(y,o,4)}},m;if(br)if(h=Jt,e?t&&Ht(e,o,3,[l(),u?[]:void 0,h]):l(),r==="sync"){const y=Hd();m=y.__watcherHandles||(y.__watcherHandles=[])}else return Jt;let g=u?new Array(n.length).fill(Br):Br;const p=()=>{if(x.active)if(e){const y=x.run();(i||c||(u?y.some((S,T)=>_r(S,g[T])):_r(y,g)))&&(f&&f(),Ht(e,o,3,[y,g===Br?void 0:u&&g[0]===Br?[]:g,h]),g=y)}else x.run()};p.allowRecurse=!!e;let d;r==="sync"?d=p:r==="post"?d=()=>wt(p,o&&o.suspense):(p.pre=!0,o&&(p.id=o.uid),d=()=>ba(p));const x=new pa(l,d);e?t?p():g=x.run():r==="post"?wt(x.run.bind(x),o&&o.suspense):x.run();const E=()=>{x.stop(),o&&o.scope&&ua(o.scope.effects,x)};return m&&m.push(E),E}function jh(n,e,t){const i=this.proxy,r=dt(n)?n.includes(".")?Mu(i,n):()=>i[n]:n.bind(i,i);let s;Oe(e)?s=e:(s=e.handler,t=e);const a=Qe;Vi(this);const o=yu(r,s.bind(i),t);return a?Vi(a):ri(),o}function Mu(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Fi(n,e){if(!et(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),_t(n))Fi(n.value,e);else if(Ie(n))for(let t=0;t<n.length;t++)Fi(n[t],e);else if(Xf(n)||hr(n))n.forEach(t=>{Fi(t,e)});else if($f(n))for(const t in n)Fi(n[t],e);return n}function Yh(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Eu(()=>{n.isMounted=!0}),Tu(()=>{n.isUnmounting=!0}),n}const Nt=[Function,Array],$h={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Nt,onEnter:Nt,onAfterEnter:Nt,onEnterCancelled:Nt,onBeforeLeave:Nt,onLeave:Nt,onAfterLeave:Nt,onLeaveCancelled:Nt,onBeforeAppear:Nt,onAppear:Nt,onAfterAppear:Nt,onAppearCancelled:Nt},setup(n,{slots:e}){const t=Fd(),i=Yh();let r;return()=>{const s=e.default&&Su(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const p of s)if(p.type!==yn){a=p;break}}const o=qe(n),{mode:l}=o;if(i.isLeaving)return Vs(a);const c=Ya(a);if(!c)return Vs(a);const u=Uo(c,o,i,t);zo(c,u);const f=t.subTree,h=f&&Ya(f);let m=!1;const{getTransitionKey:g}=c.type;if(g){const p=g();r===void 0?r=p:p!==r&&(r=p,m=!0)}if(h&&h.type!==yn&&(!Jn(c,h)||m)){const p=Uo(h,o,i,t);if(zo(h,p),l==="out-in")return i.isLeaving=!0,p.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&t.update()},Vs(a);l==="in-out"&&c.type!==yn&&(p.delayLeave=(d,x,E)=>{const y=bu(i,h);y[String(h.key)]=h,d._leaveCb=()=>{x(),d._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=E})}return a}}},Kh=$h;function bu(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Uo(n,e,t,i){const{appear:r,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:p,onAppear:d,onAfterAppear:x,onAppearCancelled:E}=e,y=String(n.key),S=bu(t,n),T=(v,L)=>{v&&Ht(v,i,9,L)},R=(v,L)=>{const F=L[1];T(v,L),Ie(v)?v.every($=>$.length<=1)&&F():v.length<=1&&F()},z={mode:s,persisted:a,beforeEnter(v){let L=o;if(!t.isMounted)if(r)L=p||o;else return;v._leaveCb&&v._leaveCb(!0);const F=S[y];F&&Jn(n,F)&&F.el._leaveCb&&F.el._leaveCb(),T(L,[v])},enter(v){let L=l,F=c,$=u;if(!t.isMounted)if(r)L=d||l,F=x||c,$=E||u;else return;let ce=!1;const k=v._enterCb=U=>{ce||(ce=!0,U?T($,[v]):T(F,[v]),z.delayedLeave&&z.delayedLeave(),v._enterCb=void 0)};L?R(L,[v,k]):k()},leave(v,L){const F=String(n.key);if(v._enterCb&&v._enterCb(!0),t.isUnmounting)return L();T(f,[v]);let $=!1;const ce=v._leaveCb=k=>{$||($=!0,L(),k?T(g,[v]):T(m,[v]),v._leaveCb=void 0,S[F]===n&&delete S[F])};S[F]=n,h?R(h,[v,ce]):ce()},clone(v){return Uo(v,e,t,i)}};return z}function Vs(n){if(Cs(n))return n=zn(n),n.children=null,n}function Ya(n){return Cs(n)?n.children?n.children[0]:void 0:n}function zo(n,e){n.shapeFlag&6&&n.component?zo(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Su(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===rn?(a.patchFlag&128&&r++,i=i.concat(Su(a.children,e,o))):(e||a.type!==yn)&&i.push(o!=null?zn(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Sa(n){return Oe(n)?{setup:n,name:n.name}:n}const hs=n=>!!n.type.__asyncLoader,Cs=n=>n.type.__isKeepAlive;function Zh(n,e){wu(n,"a",e)}function Jh(n,e){wu(n,"da",e)}function wu(n,e,t=Qe){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ls(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Cs(r.parent.vnode)&&Qh(i,e,t,r),r=r.parent}}function Qh(n,e,t,i){const r=Ls(e,n,i,!0);Au(()=>{ua(i[e],r)},t)}function Ls(n,e,t=Qe,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;Zi(),Vi(t);const o=Ht(e,t,n,a);return ri(),Ji(),o});return i?r.unshift(s):r.push(s),s}}const Sn=n=>(e,t=Qe)=>(!br||n==="sp")&&Ls(n,(...i)=>e(...i),t),ed=Sn("bm"),Eu=Sn("m"),td=Sn("bu"),nd=Sn("u"),Tu=Sn("bum"),Au=Sn("um"),id=Sn("sp"),rd=Sn("rtg"),sd=Sn("rtc");function od(n,e=Qe){Ls("ec",n,e)}function Vn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Zi(),Ht(l,t,8,[n.el,o,n,e]),Ji())}}const Cu="components";function $a(n,e){return ld(Cu,n,!0,e)||n}const ad=Symbol();function ld(n,e,t=!0,i=!1){const r=Gt||Qe;if(r){const s=r.type;if(n===Cu){const o=Bd(s,!1);if(o&&(o===e||o===ln(e)||o===ws(ln(e))))return s}const a=Ka(r[n]||s[n],e)||Ka(r.appContext[n],e);return!a&&i?s:a}}function Ka(n,e){return n&&(n[e]||n[ln(e)]||n[ws(ln(e))])}const Bo=n=>n?Hu(n)?Aa(n)||n.proxy:Bo(n.parent):null,dr=xt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Bo(n.parent),$root:n=>Bo(n.root),$emit:n=>n.emit,$options:n=>wa(n),$forceUpdate:n=>n.f||(n.f=()=>ba(n.update)),$nextTick:n=>n.n||(n.n=Ma.bind(n.proxy)),$watch:n=>jh.bind(n)}),Ws=(n,e)=>n!==Je&&!n.__isScriptSetup&&Ve(n,e),cd={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ws(i,e))return a[e]=1,i[e];if(r!==Je&&Ve(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&Ve(c,e))return a[e]=3,s[e];if(t!==Je&&Ve(t,e))return a[e]=4,t[e];ko&&(a[e]=0)}}const u=dr[e];let f,h;if(u)return e==="$attrs"&&At(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==Je&&Ve(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,Ve(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ws(r,e)?(r[e]=t,!0):i!==Je&&Ve(i,e)?(i[e]=t,!0):Ve(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==Je&&Ve(n,a)||Ws(e,a)||(o=s[0])&&Ve(o,a)||Ve(i,a)||Ve(dr,a)||Ve(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ve(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let ko=!0;function ud(n){const e=wa(n),t=n.proxy,i=n.ctx;ko=!1,e.beforeCreate&&Za(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:g,activated:p,deactivated:d,beforeDestroy:x,beforeUnmount:E,destroyed:y,unmounted:S,render:T,renderTracked:R,renderTriggered:z,errorCaptured:v,serverPrefetch:L,expose:F,inheritAttrs:$,components:ce,directives:k,filters:U}=e;if(c&&fd(c,i,null,n.appContext.config.unwrapInjectedRef),a)for(const se in a){const W=a[se];Oe(W)&&(i[se]=W.bind(t))}if(r){const se=r.call(t,t);et(se)&&(n.data=Cr(se))}if(ko=!0,s)for(const se in s){const W=s[se],he=Oe(W)?W.bind(t,t):Oe(W.get)?W.get.bind(t,t):Jt,le=!Oe(W)&&Oe(W.set)?W.set.bind(t):Jt,Y=kt({get:he,set:le});Object.defineProperty(i,se,{enumerable:!0,configurable:!0,get:()=>Y.value,set:q=>Y.value=q})}if(o)for(const se in o)Lu(o[se],i,t,se);if(l){const se=Oe(l)?l.call(t):l;Reflect.ownKeys(se).forEach(W=>{us(W,se[W])})}u&&Za(u,n,"c");function re(se,W){Ie(W)?W.forEach(he=>se(he.bind(t))):W&&se(W.bind(t))}if(re(ed,f),re(Eu,h),re(td,m),re(nd,g),re(Zh,p),re(Jh,d),re(od,v),re(sd,R),re(rd,z),re(Tu,E),re(Au,S),re(id,L),Ie(F))if(F.length){const se=n.exposed||(n.exposed={});F.forEach(W=>{Object.defineProperty(se,W,{get:()=>t[W],set:he=>t[W]=he})})}else n.exposed||(n.exposed={});T&&n.render===Jt&&(n.render=T),$!=null&&(n.inheritAttrs=$),ce&&(n.components=ce),k&&(n.directives=k)}function fd(n,e,t=Jt,i=!1){Ie(n)&&(n=Go(n));for(const r in n){const s=n[r];let a;et(s)?"default"in s?a=vn(s.from||r,s.default,!0):a=vn(s.from||r):a=vn(s),_t(a)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function Za(n,e,t){Ht(Ie(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Lu(n,e,t,i){const r=i.includes(".")?Mu(t,i):()=>t[i];if(dt(n)){const s=e[n];Oe(s)&&fs(r,s)}else if(Oe(n))fs(r,n.bind(t));else if(et(n))if(Ie(n))n.forEach(s=>Lu(s,e,t,i));else{const s=Oe(n.handler)?n.handler.bind(t):e[n.handler];Oe(s)&&fs(r,s,n)}}function wa(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>vs(l,c,a,!0)),vs(l,e,a)),et(e)&&s.set(e,l),l}function vs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&vs(n,s,t,!0),r&&r.forEach(a=>vs(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=hd[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const hd={data:Ja,props:Yn,emits:Yn,methods:Yn,computed:Yn,beforeCreate:Mt,created:Mt,beforeMount:Mt,mounted:Mt,beforeUpdate:Mt,updated:Mt,beforeDestroy:Mt,beforeUnmount:Mt,destroyed:Mt,unmounted:Mt,activated:Mt,deactivated:Mt,errorCaptured:Mt,serverPrefetch:Mt,components:Yn,directives:Yn,watch:pd,provide:Ja,inject:dd};function Ja(n,e){return e?n?function(){return xt(Oe(n)?n.call(this,this):n,Oe(e)?e.call(this,this):e)}:e:n}function dd(n,e){return Yn(Go(n),Go(e))}function Go(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Mt(n,e){return n?[...new Set([].concat(n,e))]:e}function Yn(n,e){return n?xt(xt(Object.create(null),n),e):e}function pd(n,e){if(!n)return e;if(!e)return n;const t=xt(Object.create(null),n);for(const i in e)t[i]=Mt(n[i],e[i]);return t}function md(n,e,t,i=!1){const r={},s={};gs(s,Rs,1),n.propsDefaults=Object.create(null),Pu(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Lh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function gd(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=qe(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(As(n.emitsOptions,h))continue;const m=e[h];if(l)if(Ve(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const g=ln(h);r[g]=Ho(l,o,g,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Pu(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Ve(e,f)&&((u=Ki(f))===f||!Ve(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Ho(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Ve(e,f))&&(delete s[f],c=!0)}c&&bn(n,"set","$attrs")}function Pu(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(cs(l))continue;const c=e[l];let u;r&&Ve(r,u=ln(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:As(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=qe(t),c=o||Je;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Ho(r,l,f,c[f],n,!Ve(c,f))}}return a}function Ho(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Ve(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&Oe(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Vi(r),i=c[t]=l.call(null,e),ri())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Ki(t))&&(i=!0))}return i}function Ru(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Oe(n)){const u=f=>{l=!0;const[h,m]=Ru(f,e,!0);xt(a,h),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return et(n)&&i.set(n,Ni),Ni;if(Ie(s))for(let u=0;u<s.length;u++){const f=ln(s[u]);Qa(f)&&(a[f]=Je)}else if(s)for(const u in s){const f=ln(u);if(Qa(f)){const h=s[u],m=a[f]=Ie(h)||Oe(h)?{type:h}:Object.assign({},h);if(m){const g=nl(Boolean,m.type),p=nl(String,m.type);m[0]=g>-1,m[1]=p<0||g<p,(g>-1||Ve(m,"default"))&&o.push(f)}}}const c=[a,o];return et(n)&&i.set(n,c),c}function Qa(n){return n[0]!=="$"}function el(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function tl(n,e){return el(n)===el(e)}function nl(n,e){return Ie(e)?e.findIndex(t=>tl(t,n)):Oe(e)&&tl(e,n)?0:-1}const Du=n=>n[0]==="_"||n==="$stable",Ea=n=>Ie(n)?n.map(sn):[sn(n)],_d=(n,e,t)=>{if(e._n)return e;const i=vu((...r)=>Ea(e(...r)),t);return i._c=!1,i},Iu=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Du(r))continue;const s=n[r];if(Oe(s))e[r]=_d(r,s,i);else if(s!=null){const a=Ea(s);e[r]=()=>a}}},Fu=(n,e)=>{const t=Ea(e);n.slots.default=()=>t},xd=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=qe(e),gs(e,"_",t)):Iu(e,n.slots={})}else n.slots={},e&&Fu(n,e);gs(n.slots,Rs,1)},vd=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Je;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(xt(r,e),!t&&o===1&&delete r._):(s=!e.$stable,Iu(e,r)),a=e}else e&&(Fu(n,e),a={default:1});if(s)for(const o in r)!Du(o)&&!(o in a)&&delete r[o]};function Ou(){return{app:null,config:{isNativeTag:Vf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yd=0;function Md(n,e){return function(i,r=null){Oe(i)||(i=Object.assign({},i)),r!=null&&!et(r)&&(r=null);const s=Ou(),a=new Set;let o=!1;const l=s.app={_uid:yd++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Vd,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Oe(c.install)?(a.add(c),c.install(l,...u)):Oe(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const h=It(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),o=!0,l._container=c,c.__vue_app__=l,Aa(h.component)||h.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Vo(n,e,t,i,r=!1){if(Ie(n)){n.forEach((h,m)=>Vo(h,e&&(Ie(e)?e[m]:e),t,i,r));return}if(hs(i)&&!r)return;const s=i.shapeFlag&4?Aa(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Je?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(dt(c)?(u[c]=null,Ve(f,c)&&(f[c]=null)):_t(c)&&(c.value=null)),Oe(l))On(l,o,12,[a,u]);else{const h=dt(l),m=_t(l);if(h||m){const g=()=>{if(n.f){const p=h?Ve(f,l)?f[l]:u[l]:l.value;r?Ie(p)&&ua(p,s):Ie(p)?p.includes(s)||p.push(s):h?(u[l]=[s],Ve(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=a,Ve(f,l)&&(f[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};a?(g.id=-1,wt(g,t)):g()}}}const wt=Xh;function bd(n){return Sd(n)}function Sd(n,e){const t=Qf();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=Jt,insertStaticContent:g}=n,p=(b,A,H,X=null,K=null,ue=null,de=!1,ie=null,pe=!!A.dynamicChildren)=>{if(b===A)return;b&&!Jn(b,A)&&(X=ae(b),q(b,K,ue,!0),b=null),A.patchFlag===-2&&(pe=!1,A.dynamicChildren=null);const{type:oe,ref:M,shapeFlag:_}=A;switch(oe){case Ps:d(b,A,H,X);break;case yn:x(b,A,H,X);break;case qs:b==null&&E(A,H,X,de);break;case rn:ce(b,A,H,X,K,ue,de,ie,pe);break;default:_&1?T(b,A,H,X,K,ue,de,ie,pe):_&6?k(b,A,H,X,K,ue,de,ie,pe):(_&64||_&128)&&oe.process(b,A,H,X,K,ue,de,ie,pe,ve)}M!=null&&K&&Vo(M,b&&b.ref,ue,A||b,!A)},d=(b,A,H,X)=>{if(b==null)i(A.el=o(A.children),H,X);else{const K=A.el=b.el;A.children!==b.children&&c(K,A.children)}},x=(b,A,H,X)=>{b==null?i(A.el=l(A.children||""),H,X):A.el=b.el},E=(b,A,H,X)=>{[b.el,b.anchor]=g(b.children,A,H,X,b.el,b.anchor)},y=({el:b,anchor:A},H,X)=>{let K;for(;b&&b!==A;)K=h(b),i(b,H,X),b=K;i(A,H,X)},S=({el:b,anchor:A})=>{let H;for(;b&&b!==A;)H=h(b),r(b),b=H;r(A)},T=(b,A,H,X,K,ue,de,ie,pe)=>{de=de||A.type==="svg",b==null?R(A,H,X,K,ue,de,ie,pe):L(b,A,K,ue,de,ie,pe)},R=(b,A,H,X,K,ue,de,ie)=>{let pe,oe;const{type:M,props:_,shapeFlag:O,transition:j,dirs:Q}=b;if(pe=b.el=a(b.type,ue,_&&_.is,_),O&8?u(pe,b.children):O&16&&v(b.children,pe,null,X,K,ue&&M!=="foreignObject",de,ie),Q&&Vn(b,null,X,"created"),z(pe,b,b.scopeId,de,X),_){for(const Me in _)Me!=="value"&&!cs(Me)&&s(pe,Me,null,_[Me],ue,b.children,X,K,P);"value"in _&&s(pe,"value",null,_.value),(oe=_.onVnodeBeforeMount)&&tn(oe,X,b)}Q&&Vn(b,null,X,"beforeMount");const fe=(!K||K&&!K.pendingBranch)&&j&&!j.persisted;fe&&j.beforeEnter(pe),i(pe,A,H),((oe=_&&_.onVnodeMounted)||fe||Q)&&wt(()=>{oe&&tn(oe,X,b),fe&&j.enter(pe),Q&&Vn(b,null,X,"mounted")},K)},z=(b,A,H,X,K)=>{if(H&&m(b,H),X)for(let ue=0;ue<X.length;ue++)m(b,X[ue]);if(K){let ue=K.subTree;if(A===ue){const de=K.vnode;z(b,de,de.scopeId,de.slotScopeIds,K.parent)}}},v=(b,A,H,X,K,ue,de,ie,pe=0)=>{for(let oe=pe;oe<b.length;oe++){const M=b[oe]=ie?Rn(b[oe]):sn(b[oe]);p(null,M,A,H,X,K,ue,de,ie)}},L=(b,A,H,X,K,ue,de)=>{const ie=A.el=b.el;let{patchFlag:pe,dynamicChildren:oe,dirs:M}=A;pe|=b.patchFlag&16;const _=b.props||Je,O=A.props||Je;let j;H&&Wn(H,!1),(j=O.onVnodeBeforeUpdate)&&tn(j,H,A,b),M&&Vn(A,b,H,"beforeUpdate"),H&&Wn(H,!0);const Q=K&&A.type!=="foreignObject";if(oe?F(b.dynamicChildren,oe,ie,H,X,Q,ue):de||W(b,A,ie,null,H,X,Q,ue,!1),pe>0){if(pe&16)$(ie,A,_,O,H,X,K);else if(pe&2&&_.class!==O.class&&s(ie,"class",null,O.class,K),pe&4&&s(ie,"style",_.style,O.style,K),pe&8){const fe=A.dynamicProps;for(let Me=0;Me<fe.length;Me++){const C=fe[Me],N=_[C],be=O[C];(be!==N||C==="value")&&s(ie,C,N,be,K,b.children,H,X,P)}}pe&1&&b.children!==A.children&&u(ie,A.children)}else!de&&oe==null&&$(ie,A,_,O,H,X,K);((j=O.onVnodeUpdated)||M)&&wt(()=>{j&&tn(j,H,A,b),M&&Vn(A,b,H,"updated")},X)},F=(b,A,H,X,K,ue,de)=>{for(let ie=0;ie<A.length;ie++){const pe=b[ie],oe=A[ie],M=pe.el&&(pe.type===rn||!Jn(pe,oe)||pe.shapeFlag&70)?f(pe.el):H;p(pe,oe,M,null,X,K,ue,de,!0)}},$=(b,A,H,X,K,ue,de)=>{if(H!==X){if(H!==Je)for(const ie in H)!cs(ie)&&!(ie in X)&&s(b,ie,H[ie],null,de,A.children,K,ue,P);for(const ie in X){if(cs(ie))continue;const pe=X[ie],oe=H[ie];pe!==oe&&ie!=="value"&&s(b,ie,oe,pe,de,A.children,K,ue,P)}"value"in X&&s(b,"value",H.value,X.value)}},ce=(b,A,H,X,K,ue,de,ie,pe)=>{const oe=A.el=b?b.el:o(""),M=A.anchor=b?b.anchor:o("");let{patchFlag:_,dynamicChildren:O,slotScopeIds:j}=A;j&&(ie=ie?ie.concat(j):j),b==null?(i(oe,H,X),i(M,H,X),v(A.children,H,M,K,ue,de,ie,pe)):_>0&&_&64&&O&&b.dynamicChildren?(F(b.dynamicChildren,O,H,K,ue,de,ie),(A.key!=null||K&&A===K.subTree)&&Nu(b,A,!0)):W(b,A,H,M,K,ue,de,ie,pe)},k=(b,A,H,X,K,ue,de,ie,pe)=>{A.slotScopeIds=ie,b==null?A.shapeFlag&512?K.ctx.activate(A,H,X,de,pe):U(A,H,X,K,ue,de,pe):ee(b,A,pe)},U=(b,A,H,X,K,ue,de)=>{const ie=b.component=Id(b,X,K);if(Cs(b)&&(ie.ctx.renderer=ve),Od(ie),ie.asyncDep){if(K&&K.registerDep(ie,re),!b.el){const pe=ie.subTree=It(yn);x(null,pe,A,H)}return}re(ie,b,A,H,K,ue,de)},ee=(b,A,H)=>{const X=A.component=b.component;if(Vh(b,A,H))if(X.asyncDep&&!X.asyncResolved){se(X,A,H);return}else X.next=A,Uh(X.update),X.update();else A.el=b.el,X.vnode=A},re=(b,A,H,X,K,ue,de)=>{const ie=()=>{if(b.isMounted){let{next:M,bu:_,u:O,parent:j,vnode:Q}=b,fe=M,Me;Wn(b,!1),M?(M.el=Q.el,se(b,M,de)):M=Q,_&&Gs(_),(Me=M.props&&M.props.onVnodeBeforeUpdate)&&tn(Me,j,M,Q),Wn(b,!0);const C=Hs(b),N=b.subTree;b.subTree=C,p(N,C,f(N.el),ae(N),b,K,ue),M.el=C.el,fe===null&&Wh(b,C.el),O&&wt(O,K),(Me=M.props&&M.props.onVnodeUpdated)&&wt(()=>tn(Me,j,M,Q),K)}else{let M;const{el:_,props:O}=A,{bm:j,m:Q,parent:fe}=b,Me=hs(A);if(Wn(b,!1),j&&Gs(j),!Me&&(M=O&&O.onVnodeBeforeMount)&&tn(M,fe,A),Wn(b,!0),_&&Ee){const C=()=>{b.subTree=Hs(b),Ee(_,b.subTree,b,K,null)};Me?A.type.__asyncLoader().then(()=>!b.isUnmounted&&C()):C()}else{const C=b.subTree=Hs(b);p(null,C,H,X,b,K,ue),A.el=C.el}if(Q&&wt(Q,K),!Me&&(M=O&&O.onVnodeMounted)){const C=A;wt(()=>tn(M,fe,C),K)}(A.shapeFlag&256||fe&&hs(fe.vnode)&&fe.vnode.shapeFlag&256)&&b.a&&wt(b.a,K),b.isMounted=!0,A=H=X=null}},pe=b.effect=new pa(ie,()=>ba(oe),b.scope),oe=b.update=()=>pe.run();oe.id=b.uid,Wn(b,!0),oe()},se=(b,A,H)=>{A.component=b;const X=b.vnode.props;b.vnode=A,b.next=null,gd(b,A.props,X,H),vd(b,A.children,H),Zi(),Xa(),Ji()},W=(b,A,H,X,K,ue,de,ie,pe=!1)=>{const oe=b&&b.children,M=b?b.shapeFlag:0,_=A.children,{patchFlag:O,shapeFlag:j}=A;if(O>0){if(O&128){le(oe,_,H,X,K,ue,de,ie,pe);return}else if(O&256){he(oe,_,H,X,K,ue,de,ie,pe);return}}j&8?(M&16&&P(oe,K,ue),_!==oe&&u(H,_)):M&16?j&16?le(oe,_,H,X,K,ue,de,ie,pe):P(oe,K,ue,!0):(M&8&&u(H,""),j&16&&v(_,H,X,K,ue,de,ie,pe))},he=(b,A,H,X,K,ue,de,ie,pe)=>{b=b||Ni,A=A||Ni;const oe=b.length,M=A.length,_=Math.min(oe,M);let O;for(O=0;O<_;O++){const j=A[O]=pe?Rn(A[O]):sn(A[O]);p(b[O],j,H,null,K,ue,de,ie,pe)}oe>M?P(b,K,ue,!0,!1,_):v(A,H,X,K,ue,de,ie,pe,_)},le=(b,A,H,X,K,ue,de,ie,pe)=>{let oe=0;const M=A.length;let _=b.length-1,O=M-1;for(;oe<=_&&oe<=O;){const j=b[oe],Q=A[oe]=pe?Rn(A[oe]):sn(A[oe]);if(Jn(j,Q))p(j,Q,H,null,K,ue,de,ie,pe);else break;oe++}for(;oe<=_&&oe<=O;){const j=b[_],Q=A[O]=pe?Rn(A[O]):sn(A[O]);if(Jn(j,Q))p(j,Q,H,null,K,ue,de,ie,pe);else break;_--,O--}if(oe>_){if(oe<=O){const j=O+1,Q=j<M?A[j].el:X;for(;oe<=O;)p(null,A[oe]=pe?Rn(A[oe]):sn(A[oe]),H,Q,K,ue,de,ie,pe),oe++}}else if(oe>O)for(;oe<=_;)q(b[oe],K,ue,!0),oe++;else{const j=oe,Q=oe,fe=new Map;for(oe=Q;oe<=O;oe++){const we=A[oe]=pe?Rn(A[oe]):sn(A[oe]);we.key!=null&&fe.set(we.key,oe)}let Me,C=0;const N=O-Q+1;let be=!1,Te=0;const Se=new Array(N);for(oe=0;oe<N;oe++)Se[oe]=0;for(oe=j;oe<=_;oe++){const we=b[oe];if(C>=N){q(we,K,ue,!0);continue}let Re;if(we.key!=null)Re=fe.get(we.key);else for(Me=Q;Me<=O;Me++)if(Se[Me-Q]===0&&Jn(we,A[Me])){Re=Me;break}Re===void 0?q(we,K,ue,!0):(Se[Re-Q]=oe+1,Re>=Te?Te=Re:be=!0,p(we,A[Re],H,null,K,ue,de,ie,pe),C++)}const Ce=be?wd(Se):Ni;for(Me=Ce.length-1,oe=N-1;oe>=0;oe--){const we=Q+oe,Re=A[we],ze=we+1<M?A[we+1].el:X;Se[oe]===0?p(null,Re,H,ze,K,ue,de,ie,pe):be&&(Me<0||oe!==Ce[Me]?Y(Re,H,ze,2):Me--)}}},Y=(b,A,H,X,K=null)=>{const{el:ue,type:de,transition:ie,children:pe,shapeFlag:oe}=b;if(oe&6){Y(b.component.subTree,A,H,X);return}if(oe&128){b.suspense.move(A,H,X);return}if(oe&64){de.move(b,A,H,ve);return}if(de===rn){i(ue,A,H);for(let _=0;_<pe.length;_++)Y(pe[_],A,H,X);i(b.anchor,A,H);return}if(de===qs){y(b,A,H);return}if(X!==2&&oe&1&&ie)if(X===0)ie.beforeEnter(ue),i(ue,A,H),wt(()=>ie.enter(ue),K);else{const{leave:_,delayLeave:O,afterLeave:j}=ie,Q=()=>i(ue,A,H),fe=()=>{_(ue,()=>{Q(),j&&j()})};O?O(ue,Q,fe):fe()}else i(ue,A,H)},q=(b,A,H,X=!1,K=!1)=>{const{type:ue,props:de,ref:ie,children:pe,dynamicChildren:oe,shapeFlag:M,patchFlag:_,dirs:O}=b;if(ie!=null&&Vo(ie,null,H,b,!0),M&256){A.ctx.deactivate(b);return}const j=M&1&&O,Q=!hs(b);let fe;if(Q&&(fe=de&&de.onVnodeBeforeUnmount)&&tn(fe,A,b),M&6)I(b.component,H,X);else{if(M&128){b.suspense.unmount(H,X);return}j&&Vn(b,null,A,"beforeUnmount"),M&64?b.type.remove(b,A,H,K,ve,X):oe&&(ue!==rn||_>0&&_&64)?P(oe,A,H,!1,!0):(ue===rn&&_&384||!K&&M&16)&&P(pe,A,H),X&&xe(b)}(Q&&(fe=de&&de.onVnodeUnmounted)||j)&&wt(()=>{fe&&tn(fe,A,b),j&&Vn(b,null,A,"unmounted")},H)},xe=b=>{const{type:A,el:H,anchor:X,transition:K}=b;if(A===rn){ge(H,X);return}if(A===qs){S(b);return}const ue=()=>{r(H),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(b.shapeFlag&1&&K&&!K.persisted){const{leave:de,delayLeave:ie}=K,pe=()=>de(H,ue);ie?ie(b.el,ue,pe):pe()}else ue()},ge=(b,A)=>{let H;for(;b!==A;)H=h(b),r(b),b=H;r(A)},I=(b,A,H)=>{const{bum:X,scope:K,update:ue,subTree:de,um:ie}=b;X&&Gs(X),K.stop(),ue&&(ue.active=!1,q(de,b,A,H)),ie&&wt(ie,A),wt(()=>{b.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},P=(b,A,H,X=!1,K=!1,ue=0)=>{for(let de=ue;de<b.length;de++)q(b[de],A,H,X,K)},ae=b=>b.shapeFlag&6?ae(b.component.subTree):b.shapeFlag&128?b.suspense.next():h(b.anchor||b.el),ne=(b,A,H)=>{b==null?A._vnode&&q(A._vnode,null,null,!0):p(A._vnode||null,b,A,null,null,null,H),Xa(),mu(),A._vnode=b},ve={p,um:q,m:Y,r:xe,mt:U,mc:v,pc:W,pbc:F,n:ae,o:n};let _e,Ee;return e&&([_e,Ee]=e(ve)),{render:ne,hydrate:_e,createApp:Md(ne,_e)}}function Wn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Nu(n,e,t=!1){const i=n.children,r=e.children;if(Ie(i)&&Ie(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Rn(r[s]),o.el=a.el),t||Nu(a,o)),o.type===Ps&&(o.el=a.el)}}function wd(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const Ed=n=>n.__isTeleport,rn=Symbol(void 0),Ps=Symbol(void 0),yn=Symbol(void 0),qs=Symbol(void 0),pr=[];let Zt=null;function Uu(n=!1){pr.push(Zt=n?null:[])}function Td(){pr.pop(),Zt=pr[pr.length-1]||null}let Mr=1;function il(n){Mr+=n}function Ad(n){return n.dynamicChildren=Mr>0?Zt||Ni:null,Td(),Mr>0&&Zt&&Zt.push(n),n}function zu(n,e,t,i,r,s){return Ad(ku(n,e,t,i,r,s,!0))}function Wo(n){return n?n.__v_isVNode===!0:!1}function Jn(n,e){return n.type===e.type&&n.key===e.key}const Rs="__vInternal",Bu=({key:n})=>n??null,ds=({ref:n,ref_key:e,ref_for:t})=>n!=null?dt(n)||_t(n)||Oe(n)?{i:Gt,r:n,k:e,f:!!t}:n:null;function ku(n,e=null,t=null,i=0,r=null,s=n===rn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Bu(e),ref:e&&ds(e),scopeId:xu,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Gt};return o?(Ta(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=dt(t)?8:16),Mr>0&&!a&&Zt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Zt.push(l),l}const It=Cd;function Cd(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===ad)&&(n=yn),Wo(n)){const o=zn(n,e,!0);return t&&Ta(o,t),Mr>0&&!s&&Zt&&(o.shapeFlag&6?Zt[Zt.indexOf(n)]=o:Zt.push(o)),o.patchFlag|=-2,o}if(kd(n)&&(n=n.__vccOpts),e){e=Ld(e);let{class:o,style:l}=e;o&&!dt(o)&&(e.class=la(o)),et(l)&&(su(l)&&!Ie(l)&&(l=xt({},l)),e.style=aa(l))}const a=dt(n)?1:qh(n)?128:Ed(n)?64:et(n)?4:Oe(n)?2:0;return ku(n,e,t,i,r,a,s,!0)}function Ld(n){return n?su(n)||Rs in n?xt({},n):n:null}function zn(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?Pd(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&Bu(o),ref:e&&e.ref?t&&r?Ie(r)?r.concat(ds(e)):[r,ds(e)]:ds(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==rn?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&zn(n.ssContent),ssFallback:n.ssFallback&&zn(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Gu(n=" ",e=0){return It(Ps,null,n,e)}function sn(n){return n==null||typeof n=="boolean"?It(yn):Ie(n)?It(rn,null,n.slice()):typeof n=="object"?Rn(n):It(Ps,null,String(n))}function Rn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:zn(n)}function Ta(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ta(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Rs in e)?e._ctx=Gt:r===3&&Gt&&(Gt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Oe(e)?(e={default:e,_ctx:Gt},t=32):(e=String(e),i&64?(t=16,e=[Gu(e)]):t=8);n.children=e,n.shapeFlag|=t}function Pd(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=la([e.class,i.class]));else if(r==="style")e.style=aa([e.style,i.style]);else if(Ms(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ie(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function tn(n,e,t,i=null){Ht(n,e,7,[t,i])}const Rd=Ou();let Dd=0;function Id(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Rd,s={uid:Dd++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new eh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ru(i,r),emitsOptions:_u(i,r),emit:null,emitted:null,propsDefaults:Je,inheritAttrs:i.inheritAttrs,ctx:Je,data:Je,props:Je,attrs:Je,slots:Je,refs:Je,setupState:Je,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=kh.bind(null,s),n.ce&&n.ce(s),s}let Qe=null;const Fd=()=>Qe||Gt,Vi=n=>{Qe=n,n.scope.on()},ri=()=>{Qe&&Qe.scope.off(),Qe=null};function Hu(n){return n.vnode.shapeFlag&4}let br=!1;function Od(n,e=!1){br=e;const{props:t,children:i}=n.vnode,r=Hu(n);md(n,t,r,e),xd(n,i);const s=r?Nd(n,e):void 0;return br=!1,s}function Nd(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=ou(new Proxy(n.ctx,cd));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?zd(n):null;Vi(n),Zi();const s=On(i,n,0,[n.props,r]);if(Ji(),ri(),jc(s)){if(s.then(ri,ri),e)return s.then(a=>{rl(n,a,e)}).catch(a=>{Ts(a,n,0)});n.asyncDep=s}else rl(n,s,e)}else Vu(n,e)}function rl(n,e,t){Oe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:et(e)&&(n.setupState=fu(e)),Vu(n,t)}let sl;function Vu(n,e,t){const i=n.type;if(!n.render){if(!e&&sl&&!i.render){const r=i.template||wa(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=xt(xt({isCustomElement:s,delimiters:o},a),l);i.render=sl(r,c)}}n.render=i.render||Jt}Vi(n),Zi(),ud(n),Ji(),ri()}function Ud(n){return new Proxy(n.attrs,{get(e,t){return At(n,"get","$attrs"),e[t]}})}function zd(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=Ud(n))},slots:n.slots,emit:n.emit,expose:e}}function Aa(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(fu(ou(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in dr)return dr[t](n)},has(e,t){return t in e||t in dr}}))}function Bd(n,e=!0){return Oe(n)?n.displayName||n.name:n.name||e&&n.__name}function kd(n){return Oe(n)&&"__vccOpts"in n}const kt=(n,e)=>Fh(n,e,br);function Wu(n,e,t){const i=arguments.length;return i===2?et(e)&&!Ie(e)?Wo(e)?It(n,null,[e]):It(n,e):It(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Wo(t)&&(t=[t]),It(n,e,t))}const Gd=Symbol(""),Hd=()=>vn(Gd),Vd="3.2.47",Wd="http://www.w3.org/2000/svg",Qn=typeof document<"u"?document:null,ol=Qn&&Qn.createElement("template"),qd={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Qn.createElementNS(Wd,n):Qn.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Qn.createTextNode(n),createComment:n=>Qn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Qn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{ol.innerHTML=i?`<svg>${n}</svg>`:n;const o=ol.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Xd(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function jd(n,e,t){const i=n.style,r=dt(t);if(t&&!r){if(e&&!dt(e))for(const s in e)t[s]==null&&qo(i,s,"");for(const s in t)qo(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const al=/\s*!important$/;function qo(n,e,t){if(Ie(t))t.forEach(i=>qo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Yd(n,e);al.test(t)?n.setProperty(Ki(i),t.replace(al,""),"important"):n[i]=t}}const ll=["Webkit","Moz","ms"],Xs={};function Yd(n,e){const t=Xs[e];if(t)return t;let i=ln(e);if(i!=="filter"&&i in n)return Xs[e]=i;i=ws(i);for(let r=0;r<ll.length;r++){const s=ll[r]+i;if(s in n)return Xs[e]=s}return e}const cl="http://www.w3.org/1999/xlink";function $d(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(cl,e.slice(6,e.length)):n.setAttributeNS(cl,e,t);else{const s=Hf(e);t==null||s&&!Xc(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Kd(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t??"";return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t??"";(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Xc(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(e)}function Zd(n,e,t,i){n.addEventListener(e,t,i)}function Jd(n,e,t,i){n.removeEventListener(e,t,i)}function Qd(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=ep(e);if(i){const c=s[e]=ip(i,r);Zd(n,o,c,l)}else a&&(Jd(n,o,a,l),s[e]=void 0)}}const ul=/(?:Once|Passive|Capture)$/;function ep(n){let e;if(ul.test(n)){e={};let i;for(;i=n.match(ul);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ki(n.slice(2)),e]}let js=0;const tp=Promise.resolve(),np=()=>js||(tp.then(()=>js=0),js=Date.now());function ip(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Ht(rp(i,t.value),e,5,[i])};return t.value=n,t.attached=np(),t}function rp(n,e){if(Ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const fl=/^on[a-z]/,sp=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?Xd(n,i,r):e==="style"?jd(n,t,i):Ms(e)?ca(e)||Qd(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):op(n,e,i,r))?Kd(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),$d(n,e,i,r))};function op(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&fl.test(e)&&Oe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||fl.test(e)&&dt(t)?!1:e in n}const ap={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Kh.props;const lp=xt({patchProp:sp},qd);let hl;function cp(){return hl||(hl=bd(lp))}const up=(...n)=>{const e=cp().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=fp(i);if(!r)return;const s=e._component;!Oe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function fp(n){return dt(n)?document.querySelector(n):n}const hp=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},dp={};function pp(n,e){const t=$a("router-link"),i=$a("router-view");return Uu(),zu("div",null,[It(t,{to:"/raining"},{default:vu(()=>[Gu("raining")]),_:1}),It(i)])}const mp=hp(dp,[["render",pp]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Di=typeof window<"u";function gp(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const je=Object.assign;function Ys(n,e){const t={};for(const i in e){const r=e[i];t[i]=en(r)?r.map(n):n(r)}return t}const mr=()=>{},en=Array.isArray,_p=/\/$/,xp=n=>n.replace(_p,"");function $s(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=n(s)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=bp(i??e,t),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:a}}function vp(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function dl(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function yp(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Wi(e.matched[i],t.matched[r])&&qu(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Wi(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function qu(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Mp(n[t],e[t]))return!1;return!0}function Mp(n,e){return en(n)?pl(n,e):en(e)?pl(e,n):n===e}function pl(n,e){return en(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function bp(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let r=t.length-1,s,a;for(s=0;s<i.length;s++)if(a=i[s],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var Sr;(function(n){n.pop="pop",n.push="push"})(Sr||(Sr={}));var gr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(gr||(gr={}));function Sp(n){if(!n)if(Di){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),xp(n)}const wp=/^[^#]+#/;function Ep(n,e){return n.replace(wp,"#")+e}function Tp(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Ds=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ap(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Tp(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ml(n,e){return(history.state?history.state.position-e:-1)+n}const Xo=new Map;function Cp(n,e){Xo.set(n,e)}function Lp(n){const e=Xo.get(n);return Xo.delete(n),e}let Pp=()=>location.protocol+"//"+location.host;function Xu(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),dl(l,"")}return dl(t,n)+i+r}function Rp(n,e,t,i){let r=[],s=[],a=null;const o=({state:h})=>{const m=Xu(n,location),g=t.value,p=e.value;let d=0;if(h){if(t.value=m,e.value=h,a&&a===g){a=null;return}d=p?h.position-p.position:0}else i(m);r.forEach(x=>{x(t.value,g,{delta:d,type:Sr.pop,direction:d?d>0?gr.forward:gr.back:gr.unknown})})};function l(){a=t.value}function c(h){r.push(h);const m=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(m),m}function u(){const{history:h}=window;h.state&&h.replaceState(je({},h.state,{scroll:Ds()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function gl(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Ds():null}}function Dp(n){const{history:e,location:t}=window,i={value:Xu(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:Pp()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(m){console.error(m),t[u?"replace":"assign"](h)}}function a(l,c){const u=je({},e.state,gl(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,c){const u=je({},r.value,e.state,{forward:l,scroll:Ds()});s(u.current,u,!0);const f=je({},gl(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function Ip(n){n=Sp(n);const e=Dp(n),t=Rp(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=je({location:"",base:n,go:i,createHref:Ep.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Fp(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),Ip(n)}function Op(n){return typeof n=="string"||n&&typeof n=="object"}function ju(n){return typeof n=="string"||typeof n=="symbol"}const Tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Yu=Symbol("");var _l;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(_l||(_l={}));function qi(n,e){return je(new Error,{type:n,[Yu]:!0},e)}function fn(n,e){return n instanceof Error&&Yu in n&&(e==null||!!(n.type&e))}const xl="[^/]+?",Np={sensitive:!1,strict:!1,start:!0,end:!0},Up=/[.+*?^${}()[\]/\\]/g;function zp(n,e){const t=je({},Np,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let m=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(Up,"\\$&"),m+=40;else if(h.type===1){const{value:g,repeatable:p,optional:d,regexp:x}=h;s.push({name:g,repeatable:p,optional:d});const E=x||xl;if(E!==xl){m+=10;try{new RegExp(`(${E})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${g}" (${E}): `+S.message)}}let y=p?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(y=d&&c.length<2?`(?:/${y})`:"/"+y),d&&(y+="?"),r+=y,m+=20,d&&(m+=-8),p&&(m+=-20),E===".*"&&(m+=-50)}u.push(m)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",g=s[h-1];f[g.name]=m&&g.repeatable?m.split("/"):m}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:p,optional:d}=m,x=g in c?c[g]:"";if(en(x)&&!p)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const E=en(x)?x.join("/"):x;if(!E)if(d)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=E}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function Bp(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function kp(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=Bp(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(vl(i))return 1;if(vl(r))return-1}return r.length-i.length}function vl(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Gp={type:0,value:""},Hp=/[a-zA-Z0-9_]/;function Vp(n){if(!n)return[[]];if(n==="/")return[[Gp]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${c}": ${m}`)}let t=0,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:Hp.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}function Wp(n,e,t){const i=zp(Vp(n.path),t),r=je(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function qp(n,e){const t=[],i=new Map;e=bl({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const m=!h,g=Xp(u);g.aliasOf=h&&h.record;const p=bl(e,u),d=[g];if("alias"in u){const y=typeof u.alias=="string"?[u.alias]:u.alias;for(const S of y)d.push(je({},g,{components:h?h.record.components:g.components,path:S,aliasOf:h?h.record:g}))}let x,E;for(const y of d){const{path:S}=y;if(f&&S[0]!=="/"){const T=f.record.path,R=T[T.length-1]==="/"?"":"/";y.path=f.record.path+(S&&R+S)}if(x=Wp(y,f,p),h?h.alias.push(x):(E=E||x,E!==x&&E.alias.push(x),m&&u.name&&!Ml(x)&&a(u.name)),g.children){const T=g.children;for(let R=0;R<T.length;R++)s(T[R],x,h&&h.children[R])}h=h||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&l(x)}return E?()=>{a(E)}:mr}function a(u){if(ju(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return t}function l(u){let f=0;for(;f<t.length&&kp(u,t[f])>=0&&(u.record.path!==t[f].record.path||!$u(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!Ml(u)&&i.set(u.record.name,u)}function c(u,f){let h,m={},g,p;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw qi(1,{location:u});p=h.record.name,m=je(yl(f.params,h.keys.filter(E=>!E.optional).map(E=>E.name)),u.params&&yl(u.params,h.keys.map(E=>E.name))),g=h.stringify(m)}else if("path"in u)g=u.path,h=t.find(E=>E.re.test(g)),h&&(m=h.parse(g),p=h.record.name);else{if(h=f.name?i.get(f.name):t.find(E=>E.re.test(f.path)),!h)throw qi(1,{location:u,currentLocation:f});p=h.record.name,m=je({},f.params,u.params),g=h.stringify(m)}const d=[];let x=h;for(;x;)d.unshift(x.record),x=x.parent;return{name:p,path:g,params:m,matched:d,meta:Yp(d)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:a,getRoutes:o,getRecordMatcher:r}}function yl(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Xp(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:jp(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function jp(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function Ml(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Yp(n){return n.reduce((e,t)=>je(e,t.meta),{})}function bl(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function $u(n,e){return e.children.some(t=>t===n||$u(n,t))}const Ku=/#/g,$p=/&/g,Kp=/\//g,Zp=/=/g,Jp=/\?/g,Zu=/\+/g,Qp=/%5B/g,em=/%5D/g,Ju=/%5E/g,tm=/%60/g,Qu=/%7B/g,nm=/%7C/g,ef=/%7D/g,im=/%20/g;function Ca(n){return encodeURI(""+n).replace(nm,"|").replace(Qp,"[").replace(em,"]")}function rm(n){return Ca(n).replace(Qu,"{").replace(ef,"}").replace(Ju,"^")}function jo(n){return Ca(n).replace(Zu,"%2B").replace(im,"+").replace(Ku,"%23").replace($p,"%26").replace(tm,"`").replace(Qu,"{").replace(ef,"}").replace(Ju,"^")}function sm(n){return jo(n).replace(Zp,"%3D")}function om(n){return Ca(n).replace(Ku,"%23").replace(Jp,"%3F")}function am(n){return n==null?"":om(n).replace(Kp,"%2F")}function ys(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function lm(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Zu," "),a=s.indexOf("="),o=ys(a<0?s:s.slice(0,a)),l=a<0?null:ys(s.slice(a+1));if(o in e){let c=e[o];en(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function Sl(n){let e="";for(let t in n){const i=n[t];if(t=sm(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(en(i)?i.map(s=>s&&jo(s)):[i&&jo(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function cm(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=en(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const um=Symbol(""),wl=Symbol(""),La=Symbol(""),tf=Symbol(""),Yo=Symbol("");function tr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function Dn(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,o)=>{const l=f=>{f===!1?o(qi(4,{from:t,to:e})):f instanceof Error?o(f):Op(f)?o(qi(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),a())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>o(f))})}function Ks(n,e,t,i){const r=[];for(const s of n)for(const a in s.components){let o=s.components[a];if(!(e!=="beforeRouteEnter"&&!s.instances[a]))if(fm(o)){const c=(o.__vccOpts||o)[e];c&&r.push(Dn(c,t,i,s,a))}else{let l=o();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=gp(c)?c.default:c;s.components[a]=u;const h=(u.__vccOpts||u)[e];return h&&Dn(h,t,i,s,a)()}))}}return r}function fm(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function El(n){const e=vn(La),t=vn(tf),i=kt(()=>e.resolve(zi(n.to))),r=kt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Wi.bind(null,u));if(h>-1)return h;const m=Tl(l[c-2]);return c>1&&Tl(u)===m&&f[f.length-1].path!==m?f.findIndex(Wi.bind(null,l[c-2])):h}),s=kt(()=>r.value>-1&&mm(t.params,i.value.params)),a=kt(()=>r.value>-1&&r.value===t.matched.length-1&&qu(t.params,i.value.params));function o(l={}){return pm(l)?e[zi(n.replace)?"replace":"push"](zi(n.to)).catch(mr):Promise.resolve()}return{route:i,href:kt(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}const hm=Sa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:El,setup(n,{slots:e}){const t=Cr(El(n)),{options:i}=vn(La),r=kt(()=>({[Al(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Al(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:Wu("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),dm=hm;function pm(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function mm(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!en(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function Tl(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Al=(n,e,t)=>n??e??t,gm=Sa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=vn(Yo),r=kt(()=>n.route||i.value),s=vn(wl,0),a=kt(()=>{let c=zi(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=kt(()=>r.value.matched[a.value]);us(wl,kt(()=>a.value+1)),us(um,o),us(Yo,r);const l=cu();return fs(()=>[l.value,o.value,n.name],([c,u,f],[h,m,g])=>{u&&(u.instances[f]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Wi(u,m)||!h)&&(u.enterCallbacks[f]||[]).forEach(p=>p(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=o.value,h=f&&f.components[u];if(!h)return Cl(t.default,{Component:h,route:c});const m=f.props[u],g=m?m===!0?c.params:typeof m=="function"?m(c):m:null,d=Wu(h,je({},g,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Cl(t.default,{Component:d,route:c})||d}}});function Cl(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const _m=gm;function xm(n){const e=qp(n.routes,n),t=n.parseQuery||lm,i=n.stringifyQuery||Sl,r=n.history,s=tr(),a=tr(),o=tr(),l=Ph(Tn);let c=Tn;Di&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ys.bind(null,I=>""+I),f=Ys.bind(null,am),h=Ys.bind(null,ys);function m(I,P){let ae,ne;return ju(I)?(ae=e.getRecordMatcher(I),ne=P):ne=I,e.addRoute(ne,ae)}function g(I){const P=e.getRecordMatcher(I);P&&e.removeRoute(P)}function p(){return e.getRoutes().map(I=>I.record)}function d(I){return!!e.getRecordMatcher(I)}function x(I,P){if(P=je({},P||l.value),typeof I=="string"){const b=$s(t,I,P.path),A=e.resolve({path:b.path},P),H=r.createHref(b.fullPath);return je(b,A,{params:h(A.params),hash:ys(b.hash),redirectedFrom:void 0,href:H})}let ae;if("path"in I)ae=je({},I,{path:$s(t,I.path,P.path).path});else{const b=je({},I.params);for(const A in b)b[A]==null&&delete b[A];ae=je({},I,{params:f(I.params)}),P.params=f(P.params)}const ne=e.resolve(ae,P),ve=I.hash||"";ne.params=u(h(ne.params));const _e=vp(i,je({},I,{hash:rm(ve),path:ne.path})),Ee=r.createHref(_e);return je({fullPath:_e,hash:ve,query:i===Sl?cm(I.query):I.query||{}},ne,{redirectedFrom:void 0,href:Ee})}function E(I){return typeof I=="string"?$s(t,I,l.value.path):je({},I)}function y(I,P){if(c!==I)return qi(8,{from:P,to:I})}function S(I){return z(I)}function T(I){return S(je(E(I),{replace:!0}))}function R(I){const P=I.matched[I.matched.length-1];if(P&&P.redirect){const{redirect:ae}=P;let ne=typeof ae=="function"?ae(I):ae;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=E(ne):{path:ne},ne.params={}),je({query:I.query,hash:I.hash,params:"path"in ne?{}:I.params},ne)}}function z(I,P){const ae=c=x(I),ne=l.value,ve=I.state,_e=I.force,Ee=I.replace===!0,b=R(ae);if(b)return z(je(E(b),{state:typeof b=="object"?je({},ve,b.state):ve,force:_e,replace:Ee}),P||ae);const A=ae;A.redirectedFrom=P;let H;return!_e&&yp(i,ne,ae)&&(H=qi(16,{to:A,from:ne}),le(ne,ne,!0,!1)),(H?Promise.resolve(H):L(A,ne)).catch(X=>fn(X)?fn(X,2)?X:he(X):se(X,A,ne)).then(X=>{if(X){if(fn(X,2))return z(je({replace:Ee},E(X.to),{state:typeof X.to=="object"?je({},ve,X.to.state):ve,force:_e}),P||A)}else X=$(A,ne,!0,Ee,ve);return F(A,ne,X),X})}function v(I,P){const ae=y(I,P);return ae?Promise.reject(ae):Promise.resolve()}function L(I,P){let ae;const[ne,ve,_e]=vm(I,P);ae=Ks(ne.reverse(),"beforeRouteLeave",I,P);for(const b of ne)b.leaveGuards.forEach(A=>{ae.push(Dn(A,I,P))});const Ee=v.bind(null,I,P);return ae.push(Ee),mi(ae).then(()=>{ae=[];for(const b of s.list())ae.push(Dn(b,I,P));return ae.push(Ee),mi(ae)}).then(()=>{ae=Ks(ve,"beforeRouteUpdate",I,P);for(const b of ve)b.updateGuards.forEach(A=>{ae.push(Dn(A,I,P))});return ae.push(Ee),mi(ae)}).then(()=>{ae=[];for(const b of I.matched)if(b.beforeEnter&&!P.matched.includes(b))if(en(b.beforeEnter))for(const A of b.beforeEnter)ae.push(Dn(A,I,P));else ae.push(Dn(b.beforeEnter,I,P));return ae.push(Ee),mi(ae)}).then(()=>(I.matched.forEach(b=>b.enterCallbacks={}),ae=Ks(_e,"beforeRouteEnter",I,P),ae.push(Ee),mi(ae))).then(()=>{ae=[];for(const b of a.list())ae.push(Dn(b,I,P));return ae.push(Ee),mi(ae)}).catch(b=>fn(b,8)?b:Promise.reject(b))}function F(I,P,ae){for(const ne of o.list())ne(I,P,ae)}function $(I,P,ae,ne,ve){const _e=y(I,P);if(_e)return _e;const Ee=P===Tn,b=Di?history.state:{};ae&&(ne||Ee?r.replace(I.fullPath,je({scroll:Ee&&b&&b.scroll},ve)):r.push(I.fullPath,ve)),l.value=I,le(I,P,ae,Ee),he()}let ce;function k(){ce||(ce=r.listen((I,P,ae)=>{if(!ge.listening)return;const ne=x(I),ve=R(ne);if(ve){z(je(ve,{replace:!0}),ne).catch(mr);return}c=ne;const _e=l.value;Di&&Cp(ml(_e.fullPath,ae.delta),Ds()),L(ne,_e).catch(Ee=>fn(Ee,12)?Ee:fn(Ee,2)?(z(Ee.to,ne).then(b=>{fn(b,20)&&!ae.delta&&ae.type===Sr.pop&&r.go(-1,!1)}).catch(mr),Promise.reject()):(ae.delta&&r.go(-ae.delta,!1),se(Ee,ne,_e))).then(Ee=>{Ee=Ee||$(ne,_e,!1),Ee&&(ae.delta&&!fn(Ee,8)?r.go(-ae.delta,!1):ae.type===Sr.pop&&fn(Ee,20)&&r.go(-1,!1)),F(ne,_e,Ee)}).catch(mr)}))}let U=tr(),ee=tr(),re;function se(I,P,ae){he(I);const ne=ee.list();return ne.length?ne.forEach(ve=>ve(I,P,ae)):console.error(I),Promise.reject(I)}function W(){return re&&l.value!==Tn?Promise.resolve():new Promise((I,P)=>{U.add([I,P])})}function he(I){return re||(re=!I,k(),U.list().forEach(([P,ae])=>I?ae(I):P()),U.reset()),I}function le(I,P,ae,ne){const{scrollBehavior:ve}=n;if(!Di||!ve)return Promise.resolve();const _e=!ae&&Lp(ml(I.fullPath,0))||(ne||!ae)&&history.state&&history.state.scroll||null;return Ma().then(()=>ve(I,P,_e)).then(Ee=>Ee&&Ap(Ee)).catch(Ee=>se(Ee,I,P))}const Y=I=>r.go(I);let q;const xe=new Set,ge={currentRoute:l,listening:!0,addRoute:m,removeRoute:g,hasRoute:d,getRoutes:p,resolve:x,options:n,push:S,replace:T,go:Y,back:()=>Y(-1),forward:()=>Y(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:ee.add,isReady:W,install(I){const P=this;I.component("RouterLink",dm),I.component("RouterView",_m),I.config.globalProperties.$router=P,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>zi(l)}),Di&&!q&&l.value===Tn&&(q=!0,S(r.location).catch(ve=>{}));const ae={};for(const ve in Tn)ae[ve]=kt(()=>l.value[ve]);I.provide(La,P),I.provide(tf,Cr(ae)),I.provide(Yo,l);const ne=I.unmount;xe.add(I),I.unmount=function(){xe.delete(I),xe.size<1&&(c=Tn,ce&&ce(),ce=null,l.value=Tn,q=!1,re=!1),ne()}}};return ge}function mi(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function vm(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>Wi(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>Wi(c,l))||r.push(l))}return[t,i,r]}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pa="148",gi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ym=0,Ll=1,Mm=2,nf=1,bm=2,ur=3,li=0,Vt=1,Ra=2,kr=3,Nn=0,ki=1,$o=2,Pl=3,Rl=4,Sm=5,Ii=100,wm=101,Em=102,Dl=103,Il=104,Tm=200,Am=201,Cm=202,Lm=203,rf=204,sf=205,Pm=206,Rm=207,Dm=208,Im=209,Fm=210,Om=0,Nm=1,Um=2,Ko=3,zm=4,Bm=5,km=6,Gm=7,of=0,Hm=1,Vm=2,Mn=0,Wm=1,qm=2,Xm=3,jm=4,Ym=5,af=300,Xi=301,ji=302,Zo=303,Jo=304,Is=306,Qo=1e3,$t=1001,ea=1002,St=1003,Fl=1004,Zs=1005,zt=1006,$m=1007,wr=1008,ci=1009,Km=1010,Zm=1011,lf=1012,Jm=1013,ti=1014,ni=1015,Er=1016,Qm=1017,eg=1018,Gi=1020,tg=1021,ng=1022,Kt=1023,ig=1024,rg=1025,si=1026,Yi=1027,sg=1028,og=1029,ag=1030,lg=1031,cg=1033,Js=33776,Qs=33777,eo=33778,to=33779,Ol=35840,Nl=35841,Ul=35842,zl=35843,ug=36196,Bl=37492,kl=37496,Gl=37808,Hl=37809,Vl=37810,Wl=37811,ql=37812,Xl=37813,jl=37814,Yl=37815,$l=37816,Kl=37817,Zl=37818,Jl=37819,Ql=37820,ec=37821,tc=36492,ui=3e3,$e=3001,fg=3200,hg=3201,dg=0,pg=1,nn="srgb",Tr="srgb-linear",no=7680,mg=519,nc=35044,ic="300 es",ta=1035;class pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],io=Math.PI/180,rc=180/Math.PI;function Lr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]).toLowerCase()}function Et(n,e,t){return Math.max(e,Math.min(t,n))}function gg(n,e){return(n%e+e)%e}function ro(n,e,t){return(1-t)*n+t*e}function sc(n){return(n&n-1)===0&&n!==0}function na(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gr(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],g=i[8],p=r[0],d=r[3],x=r[6],E=r[1],y=r[4],S=r[7],T=r[2],R=r[5],z=r[8];return s[0]=a*p+o*E+l*T,s[3]=a*d+o*y+l*R,s[6]=a*x+o*S+l*z,s[1]=c*p+u*E+f*T,s[4]=c*d+u*y+f*R,s[7]=c*x+u*S+f*z,s[2]=h*p+m*E+g*T,s[5]=h*d+m*y+g*R,s[8]=h*x+m*S+g*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,g=t*f+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=f*p,e[1]=(r*c-u*i)*p,e[2]=(o*i-r*a)*p,e[3]=h*p,e[4]=(u*t-r*l)*p,e[5]=(r*s-o*t)*p,e[6]=m*p,e[7]=(i*l-c*t)*p,e[8]=(a*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(so.makeScale(e,t)),this}rotate(e){return this.premultiply(so.makeRotation(-e)),this}translate(e,t){return this.premultiply(so.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const so=new Ft;function cf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ar(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ps(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const oo={[nn]:{[Tr]:oi},[Tr]:{[nn]:ps}},yt={legacyMode:!0,get workingColorSpace(){return Tr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(oo[e]&&oo[e][t]!==void 0){const i=oo[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},st={r:0,g:0,b:0},Wt={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function ao(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Vr(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=yt.workingColorSpace){if(e=gg(e,1),t=Et(t,0,1),i=Et(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ao(a,s,e+1/3),this.g=ao(a,s,e),this.b=ao(a,s,e-1/3)}return yt.toWorkingColorSpace(this,r),this}setStyle(e,t=nn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,yt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,yt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,yt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,yt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=nn){const i=uf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return yt.fromWorkingColorSpace(Vr(this,st),e),Et(st.r*255,0,255)<<16^Et(st.g*255,0,255)<<8^Et(st.b*255,0,255)<<0}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(Vr(this,st),t);const i=st.r,r=st.g,s=st.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(Vr(this,st),t),e.r=st.r,e.g=st.g,e.b=st.b,e}getStyle(e=nn){return yt.fromWorkingColorSpace(Vr(this,st),e),e!==nn?`color(${e} ${st.r} ${st.g} ${st.b})`:`rgb(${st.r*255|0},${st.g*255|0},${st.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Wt),Wt.h+=e,Wt.s+=t,Wt.l+=i,this.setHSL(Wt.h,Wt.s,Wt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wt),e.getHSL(Hr);const i=ro(Wt.h,Hr.h,t),r=ro(Wt.s,Hr.s,t),s=ro(Wt.l,Hr.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ke.NAMES=uf;let xi;class ff{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xi===void 0&&(xi=Ar("canvas")),xi.width=e.width,xi.height=e.height;const i=xi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ar("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=oi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(oi(t[i]/255)*255):t[i]=oi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class hf{constructor(e=null){this.isSource=!0,this.uuid=Lr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(lo(r[a].image)):s.push(lo(r[a]))}else s=lo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function lo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ff.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _g=0;class Tt extends pi{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,i=$t,r=$t,s=zt,a=wr,o=Kt,l=ci,c=Tt.DEFAULT_ANISOTROPY,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=Lr(),this.name="",this.source=new hf(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==af)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qo:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qo:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=af;Tt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,i=0,r=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],p=l[2],d=l[6],x=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(m+1)/2,T=(x+1)/2,R=(u+h)/4,z=(f+p)/4,v=(g+d)/4;return y>S&&y>T?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=R/i,s=z/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=v/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=z/s,r=v/s),this.set(i,r,s,t),this}let E=Math.sqrt((d-g)*(d-g)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(d-g)/E,this.y=(f-p)/E,this.z=(h-u)/E,this.w=Math.acos((c+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fi extends pi{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Tt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:zt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class df extends Tt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xg extends Tt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],g=s[a+2],p=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(f!==p||l!==h||c!==m||u!==g){let d=1-o;const x=l*h+c*m+u*g+f*p,E=x>=0?1:-1,y=1-x*x;if(y>Number.EPSILON){const T=Math.sqrt(y),R=Math.atan2(T,x*E);d=Math.sin(d*R)/T,o=Math.sin(o*R)/T}const S=o*E;if(l=l*d+h*S,c=c*d+m*S,u=u*d+g*S,f=f*d+p*S,d===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*m-c*h,e[t+1]=l*g+u*h+c*f-o*m,e[t+2]=c*g+u*m+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return co.copy(this).projectOnVector(e),this.sub(co)}reflect(e){return this.sub(co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const co=new V,oc=new hi;class Pr{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)qn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(qn)}else i.boundingBox===null&&i.computeBoundingBox(),uo.copy(i.boundingBox),uo.applyMatrix4(e.matrixWorld),this.union(uo);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),Wr.subVectors(this.max,nr),vi.subVectors(e.a,nr),yi.subVectors(e.b,nr),Mi.subVectors(e.c,nr),An.subVectors(yi,vi),Cn.subVectors(Mi,yi),Xn.subVectors(vi,Mi);let t=[0,-An.z,An.y,0,-Cn.z,Cn.y,0,-Xn.z,Xn.y,An.z,0,-An.x,Cn.z,0,-Cn.x,Xn.z,0,-Xn.x,-An.y,An.x,0,-Cn.y,Cn.x,0,-Xn.y,Xn.x,0];return!fo(t,vi,yi,Mi,Wr)||(t=[1,0,0,0,1,0,0,0,1],!fo(t,vi,yi,Mi,Wr))?!1:(qr.crossVectors(An,Cn),t=[qr.x,qr.y,qr.z],fo(t,vi,yi,Mi,Wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return qn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hn=[new V,new V,new V,new V,new V,new V,new V,new V],qn=new V,uo=new Pr,vi=new V,yi=new V,Mi=new V,An=new V,Cn=new V,Xn=new V,nr=new V,Wr=new V,qr=new V,jn=new V;function fo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){jn.fromArray(n,s);const o=r.x*Math.abs(jn.x)+r.y*Math.abs(jn.y)+r.z*Math.abs(jn.z),l=e.dot(jn),c=t.dot(jn),u=i.dot(jn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const vg=new Pr,ir=new V,ho=new V;class Fs{constructor(e=new V,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):vg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);const t=ir.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ir,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ho.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(ho)),this.expandByPoint(ir.copy(e.center).sub(ho))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new V,po=new V,Xr=new V,Ln=new V,mo=new V,jr=new V,go=new V;class pf{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.direction).multiplyScalar(t).add(this.origin),dn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){po.copy(e).add(t).multiplyScalar(.5),Xr.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(po);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Xr),o=Ln.dot(this.direction),l=-Ln.dot(Xr),c=Ln.lengthSq(),u=Math.abs(1-a*a);let f,h,m,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const p=1/u;f*=p,h*=p,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Xr).multiplyScalar(h).add(po),m}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const i=dn.dot(this.direction),r=dn.dot(dn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,i,r,s){mo.subVectors(t,e),jr.subVectors(i,e),go.crossVectors(mo,jr);let a=this.direction.dot(go),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ln.subVectors(this.origin,e);const l=o*this.direction.dot(jr.crossVectors(Ln,jr));if(l<0)return null;const c=o*this.direction.dot(mo.cross(Ln));if(c<0||l+c>a)return null;const u=-o*Ln.dot(go);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,a,o,l,c,u,f,h,m,g,p,d){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=r,x[1]=s,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=u,x[10]=f,x[14]=h,x[3]=m,x[7]=g,x[11]=p,x[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/bi.setFromMatrixColumn(e,0).length(),s=1/bi.setFromMatrixColumn(e,1).length(),a=1/bi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,g=o*u,p=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=h-p*c,t[9]=-o*l,t[2]=p-h*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,p=c*f;t[0]=h+p*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=p+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,p=c*f;t[0]=h-p*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=p-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,g=o*u,p=o*f;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+p,t[1]=l*f,t[5]=p*c+h,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=p-h*f,t[8]=g*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+g,t[10]=h-p*f}else if(e.order==="XZY"){const h=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+p,t[5]=a*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yg,e,Mg)}lookAt(e,t,i){const r=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),Pn.crossVectors(i,Rt),Pn.lengthSq()===0&&(Math.abs(i.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),Pn.crossVectors(i,Rt)),Pn.normalize(),Yr.crossVectors(Rt,Pn),r[0]=Pn.x,r[4]=Yr.x,r[8]=Rt.x,r[1]=Pn.y,r[5]=Yr.y,r[9]=Rt.y,r[2]=Pn.z,r[6]=Yr.z,r[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],g=i[2],p=i[6],d=i[10],x=i[14],E=i[3],y=i[7],S=i[11],T=i[15],R=r[0],z=r[4],v=r[8],L=r[12],F=r[1],$=r[5],ce=r[9],k=r[13],U=r[2],ee=r[6],re=r[10],se=r[14],W=r[3],he=r[7],le=r[11],Y=r[15];return s[0]=a*R+o*F+l*U+c*W,s[4]=a*z+o*$+l*ee+c*he,s[8]=a*v+o*ce+l*re+c*le,s[12]=a*L+o*k+l*se+c*Y,s[1]=u*R+f*F+h*U+m*W,s[5]=u*z+f*$+h*ee+m*he,s[9]=u*v+f*ce+h*re+m*le,s[13]=u*L+f*k+h*se+m*Y,s[2]=g*R+p*F+d*U+x*W,s[6]=g*z+p*$+d*ee+x*he,s[10]=g*v+p*ce+d*re+x*le,s[14]=g*L+p*k+d*se+x*Y,s[3]=E*R+y*F+S*U+T*W,s[7]=E*z+y*$+S*ee+T*he,s[11]=E*v+y*ce+S*re+T*le,s[15]=E*L+y*k+S*se+T*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],p=e[7],d=e[11],x=e[15];return g*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+p*(+t*l*m-t*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+d*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+x*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],p=e[13],d=e[14],x=e[15],E=f*d*c-p*h*c+p*l*m-o*d*m-f*l*x+o*h*x,y=g*h*c-u*d*c-g*l*m+a*d*m+u*l*x-a*h*x,S=u*p*c-g*f*c+g*o*m-a*p*m-u*o*x+a*f*x,T=g*f*l-u*p*l-g*o*h+a*p*h+u*o*d-a*f*d,R=t*E+i*y+r*S+s*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/R;return e[0]=E*z,e[1]=(p*h*s-f*d*s-p*r*m+i*d*m+f*r*x-i*h*x)*z,e[2]=(o*d*s-p*l*s+p*r*c-i*d*c-o*r*x+i*l*x)*z,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*z,e[4]=y*z,e[5]=(u*d*s-g*h*s+g*r*m-t*d*m-u*r*x+t*h*x)*z,e[6]=(g*l*s-a*d*s-g*r*c+t*d*c+a*r*x-t*l*x)*z,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*m+t*l*m)*z,e[8]=S*z,e[9]=(g*f*s-u*p*s-g*i*m+t*p*m+u*i*x-t*f*x)*z,e[10]=(a*p*s-g*o*s+g*i*c-t*p*c-a*i*x+t*o*x)*z,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*z,e[12]=T*z,e[13]=(u*p*r-g*f*r+g*i*h-t*p*h-u*i*d+t*f*d)*z,e[14]=(g*o*r-a*p*r-g*i*l+t*p*l+a*i*d-t*o*d)*z,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*z,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,g=s*f,p=a*u,d=a*f,x=o*f,E=l*c,y=l*u,S=l*f,T=i.x,R=i.y,z=i.z;return r[0]=(1-(p+x))*T,r[1]=(m+S)*T,r[2]=(g-y)*T,r[3]=0,r[4]=(m-S)*R,r[5]=(1-(h+x))*R,r[6]=(d+E)*R,r[7]=0,r[8]=(g+y)*z,r[9]=(d-E)*z,r[10]=(1-(h+p))*z,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=bi.set(r[0],r[1],r[2]).length();const a=bi.set(r[4],r[5],r[6]).length(),o=bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qt.copy(this);const c=1/s,u=1/a,f=1/o;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=u,qt.elements[5]*=u,qt.elements[6]*=u,qt.elements[8]*=f,qt.elements[9]*=f,qt.elements[10]*=f,t.setFromRotationMatrix(qt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),f=(t+e)*l,h=(i+r)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const bi=new V,qt=new rt,yg=new V(0,0,0),Mg=new V(1,1,1),Pn=new V,Yr=new V,Rt=new V,ac=new rt,lc=new hi;class Rr{constructor(e=0,t=0,i=0,r=Rr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ac,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lc.setFromEuler(this),this.setFromQuaternion(lc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Rr.DefaultOrder="XYZ";Rr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class mf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bg=0;const cc=new V,Si=new hi,pn=new rt,$r=new V,rr=new V,Sg=new V,wg=new hi,uc=new V(1,0,0),fc=new V(0,1,0),hc=new V(0,0,1),Eg={type:"added"},dc={type:"removed"};class ht extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DefaultUp.clone();const e=new V,t=new Rr,i=new hi,r=new V(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new Ft}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=ht.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ht.DefaultMatrixWorldAutoUpdate,this.layers=new mf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.multiply(Si),this}rotateOnWorldAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.premultiply(Si),this}rotateX(e){return this.rotateOnAxis(uc,e)}rotateY(e){return this.rotateOnAxis(fc,e)}rotateZ(e){return this.rotateOnAxis(hc,e)}translateOnAxis(e,t){return cc.copy(e).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uc,e)}translateY(e){return this.translateOnAxis(fc,e)}translateZ(e){return this.translateOnAxis(hc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$r.copy(e):$r.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(rr,$r,this.up):pn.lookAt($r,rr,this.up),this.quaternion.setFromRotationMatrix(pn),r&&(pn.extractRotation(r.matrixWorld),Si.setFromRotationMatrix(pn),this.quaternion.premultiply(Si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Eg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(dc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,Sg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,wg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ht.DefaultUp=new V(0,1,0);ht.DefaultMatrixAutoUpdate=!0;ht.DefaultMatrixWorldAutoUpdate=!0;const Xt=new V,mn=new V,_o=new V,gn=new V,wi=new V,Ei=new V,pc=new V,xo=new V,vo=new V,yo=new V;class xn{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xt.subVectors(e,t),r.cross(Xt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Xt.subVectors(r,t),mn.subVectors(i,t),_o.subVectors(e,t);const a=Xt.dot(Xt),o=Xt.dot(mn),l=Xt.dot(_o),c=mn.dot(mn),u=mn.dot(_o),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,gn),gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getUV(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,gn),l.set(0,0),l.addScaledVector(s,gn.x),l.addScaledVector(a,gn.y),l.addScaledVector(o,gn.z),l}static isFrontFacing(e,t,i,r){return Xt.subVectors(i,t),mn.subVectors(e,t),Xt.cross(mn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Xt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return xn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;wi.subVectors(r,i),Ei.subVectors(s,i),xo.subVectors(e,i);const l=wi.dot(xo),c=Ei.dot(xo);if(l<=0&&c<=0)return t.copy(i);vo.subVectors(e,r);const u=wi.dot(vo),f=Ei.dot(vo);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(wi,a);yo.subVectors(e,s);const m=wi.dot(yo),g=Ei.dot(yo);if(g>=0&&m<=g)return t.copy(s);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ei,o);const d=u*g-m*f;if(d<=0&&f-u>=0&&m-g>=0)return pc.subVectors(s,r),o=(f-u)/(f-u+(m-g)),t.copy(r).addScaledVector(pc,o);const x=1/(d+p+h);return a=p*x,o=h*x,t.copy(i).addScaledVector(wi,a).addScaledVector(Ei,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Tg=0;class Dr extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=ki,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=rf,this.blendDst=sf,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(i.blending=this.blending),this.side!==li&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gf extends Dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const it=new V,Kr=new Ue;class Qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=nc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyMatrix3(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class _f extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class xf extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ai extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ag=0;const Ut=new rt,Mo=new ht,Ti=new V,Dt=new Pr,sr=new Pr,ut=new V;class wn extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cf(e)?xf:_f)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ft().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,i){return Ut.makeTranslation(e,t,i),this.applyMatrix4(Ut),this}scale(e,t,i){return Ut.makeScale(e,t,i),this.applyMatrix4(Ut),this}lookAt(e){return Mo.lookAt(e),Mo.updateMatrix(),this.applyMatrix4(Mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ai(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];sr.setFromBufferAttribute(o),this.morphTargetsRelative?(ut.addVectors(Dt.min,sr.min),Dt.expandByPoint(ut),ut.addVectors(Dt.max,sr.max),Dt.expandByPoint(ut)):(Dt.expandByPoint(sr.min),Dt.expandByPoint(sr.max))}Dt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ut));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ut.fromBufferAttribute(o,c),l&&(Ti.fromBufferAttribute(e,c),ut.add(Ti)),r=Math.max(r,i.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let F=0;F<o;F++)c[F]=new V,u[F]=new V;const f=new V,h=new V,m=new V,g=new Ue,p=new Ue,d=new Ue,x=new V,E=new V;function y(F,$,ce){f.fromArray(r,F*3),h.fromArray(r,$*3),m.fromArray(r,ce*3),g.fromArray(a,F*2),p.fromArray(a,$*2),d.fromArray(a,ce*2),h.sub(f),m.sub(f),p.sub(g),d.sub(g);const k=1/(p.x*d.y-d.x*p.y);isFinite(k)&&(x.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(k),E.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(k),c[F].add(x),c[$].add(x),c[ce].add(x),u[F].add(E),u[$].add(E),u[ce].add(E))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let F=0,$=S.length;F<$;++F){const ce=S[F],k=ce.start,U=ce.count;for(let ee=k,re=k+U;ee<re;ee+=3)y(i[ee+0],i[ee+1],i[ee+2])}const T=new V,R=new V,z=new V,v=new V;function L(F){z.fromArray(s,F*3),v.copy(z);const $=c[F];T.copy($),T.sub(z.multiplyScalar(z.dot($))).normalize(),R.crossVectors(v,$);const k=R.dot(u[F])<0?-1:1;l[F*4]=T.x,l[F*4+1]=T.y,l[F*4+2]=T.z,l[F*4+3]=k}for(let F=0,$=S.length;F<$;++F){const ce=S[F],k=ce.start,U=ce.count;for(let ee=k,re=k+U;ee<re;ee+=3)L(i[ee+0]),L(i[ee+1]),L(i[ee+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new V,s=new V,a=new V,o=new V,l=new V,c=new V,u=new V,f=new V;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,d),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,d),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let p=0,d=l.length;p<d;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let x=0;x<u;x++)h[g++]=c[m++]}return new Qt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const mc=new rt,Ai=new pf,bo=new Fs,or=new V,ar=new V,lr=new V,So=new V,Zr=new V,Jr=new Ue,Qr=new Ue,es=new Ue,wo=new V,ts=new V;class In extends ht{constructor(e=new wn,t=new gf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Zr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(So.fromBufferAttribute(f,e),a?Zr.addScaledVector(So,u):Zr.addScaledVector(So.sub(t),u))}t.add(Zr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(s),e.ray.intersectsSphere(bo)===!1)||(mc.copy(s).invert(),Ai.copy(e.ray).applyMatrix4(mc),i.boundingBox!==null&&Ai.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv2,f=i.groups,h=i.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,g=f.length;m<g;m++){const p=f[m],d=r[p.materialIndex],x=Math.max(p.start,h.start),E=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let y=x,S=E;y<S;y+=3){const T=o.getX(y),R=o.getX(y+1),z=o.getX(y+2);a=ns(this,d,e,Ai,c,u,T,R,z),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let p=m,d=g;p<d;p+=3){const x=o.getX(p),E=o.getX(p+1),y=o.getX(p+2);a=ns(this,r,e,Ai,c,u,x,E,y),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,g=f.length;m<g;m++){const p=f[m],d=r[p.materialIndex],x=Math.max(p.start,h.start),E=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let y=x,S=E;y<S;y+=3){const T=y,R=y+1,z=y+2;a=ns(this,d,e,Ai,c,u,T,R,z),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let p=m,d=g;p<d;p+=3){const x=p,E=p+1,y=p+2;a=ns(this,r,e,Ai,c,u,x,E,y),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function Cg(n,e,t,i,r,s,a,o){let l;if(e.side===Vt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===li,o),l===null)return null;ts.copy(o),ts.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ts);return c<t.near||c>t.far?null:{distance:c,point:ts.clone(),object:n}}function ns(n,e,t,i,r,s,a,o,l){n.getVertexPosition(a,or),n.getVertexPosition(o,ar),n.getVertexPosition(l,lr);const c=Cg(n,e,t,i,or,ar,lr,wo);if(c){r&&(Jr.fromBufferAttribute(r,a),Qr.fromBufferAttribute(r,o),es.fromBufferAttribute(r,l),c.uv=xn.getUV(wo,or,ar,lr,Jr,Qr,es,new Ue)),s&&(Jr.fromBufferAttribute(s,a),Qr.fromBufferAttribute(s,o),es.fromBufferAttribute(s,l),c.uv2=xn.getUV(wo,or,ar,lr,Jr,Qr,es,new Ue));const u={a,b:o,c:l,normal:new V,materialIndex:0};xn.getNormal(or,ar,lr,u.normal),c.face=u}return c}class Ir extends wn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ai(c,3)),this.setAttribute("normal",new ai(u,3)),this.setAttribute("uv",new ai(f,2));function g(p,d,x,E,y,S,T,R,z,v,L){const F=S/z,$=T/v,ce=S/2,k=T/2,U=R/2,ee=z+1,re=v+1;let se=0,W=0;const he=new V;for(let le=0;le<re;le++){const Y=le*$-k;for(let q=0;q<ee;q++){const xe=q*F-ce;he[p]=xe*E,he[d]=Y*y,he[x]=U,c.push(he.x,he.y,he.z),he[p]=0,he[d]=0,he[x]=R>0?1:-1,u.push(he.x,he.y,he.z),f.push(q/z),f.push(1-le/v),se+=1}}for(let le=0;le<v;le++)for(let Y=0;Y<z;Y++){const q=h+Y+ee*le,xe=h+Y+ee*(le+1),ge=h+(Y+1)+ee*(le+1),I=h+(Y+1)+ee*le;l.push(q,xe,I),l.push(xe,ge,I),W+=6}o.addGroup(m,W,L),m+=W,h+=se}}static fromJSON(e){return new Ir(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $i(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function bt(n){const e={};for(let t=0;t<n.length;t++){const i=$i(n[t]);for(const r in i)e[r]=i[r]}return e}function Lg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vf(n){return n.getRenderTarget()===null&&n.outputEncoding===$e?nn:Tr}const Pg={clone:$i,merge:bt};var Rg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rg,this.fragmentShader=Dg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=Lg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class yf extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Bt extends yf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rc*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(io*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ci=-90,Li=1;class Ig extends ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Bt(Ci,Li,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Bt(Ci,Li,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Bt(Ci,Li,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Bt(Ci,Li,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Bt(Ci,Li,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Bt(Ci,Li,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Mn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Mf extends Tt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Xi,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fg extends fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Mf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ir(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:$i(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:Nn});s.uniforms.tEquirect.value=t;const a=new In(r,s),o=t.minFilter;return t.minFilter===wr&&(t.minFilter=zt),new Ig(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Eo=new V,Og=new V,Ng=new Ft;class $n{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Eo.subVectors(i,t).cross(Og.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Eo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ng.getNormalMatrix(e),r=this.coplanarPoint(Eo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new Fs,is=new V;class Da{constructor(e=new $n,t=new $n,i=new $n,r=new $n,s=new $n,a=new $n){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],m=i[9],g=i[10],p=i[11],d=i[12],x=i[13],E=i[14],y=i[15];return t[0].setComponents(o-r,f-l,p-h,y-d).normalize(),t[1].setComponents(o+r,f+l,p+h,y+d).normalize(),t[2].setComponents(o+s,f+c,p+m,y+x).normalize(),t[3].setComponents(o-s,f-c,p-m,y-x).normalize(),t[4].setComponents(o-a,f-u,p-g,y-E).normalize(),t[5].setComponents(o+a,f+u,p+g,y+E).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSprite(e){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(is.x=r.normal.x>0?e.max.x:e.min.x,is.y=r.normal.y>0?e.max.y:e.min.y,is.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ug(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Ia extends wn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,m=[],g=[],p=[],d=[];for(let x=0;x<u;x++){const E=x*h-a;for(let y=0;y<c;y++){const S=y*f-s;g.push(S,-E,0),p.push(0,0,1),d.push(y/o),d.push(1-x/l)}}for(let x=0;x<l;x++)for(let E=0;E<o;E++){const y=E+c*x,S=E+c*(x+1),T=E+1+c*(x+1),R=E+1+c*x;m.push(y,S,R),m.push(S,T,R)}this.setIndex(m),this.setAttribute("position",new ai(g,3)),this.setAttribute("normal",new ai(p,3)),this.setAttribute("uv",new ai(d,2))}static fromJSON(e){return new Ia(e.width,e.height,e.widthSegments,e.heightSegments)}}var zg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Bg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wg="vec3 transformed = vec3( position );",qg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xg=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,jg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,e_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,t_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,n_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,i_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,r_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,s_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,o_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,l_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u_="gl_FragColor = linearToOutputTexel( gl_FragColor );",f_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,h_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,d_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,p_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,m_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,__=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,b_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,S_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,A_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,C_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,R_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,I_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,F_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,O_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,N_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,U_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,k_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,G_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,W_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Y_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,K_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Z_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,J_=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,i0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,r0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,s0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,o0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,c0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_0=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,x0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,v0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,M0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,S0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,E0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,T0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,A0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,C0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,L0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,P0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,R0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,D0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,I0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,F0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,O0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,H0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,V0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,W0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,q0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Y0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K0=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Z0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ex=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ix=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ox=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ax=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ux=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,px=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fe={alphamap_fragment:zg,alphamap_pars_fragment:Bg,alphatest_fragment:kg,alphatest_pars_fragment:Gg,aomap_fragment:Hg,aomap_pars_fragment:Vg,begin_vertex:Wg,beginnormal_vertex:qg,bsdfs:Xg,iridescence_fragment:jg,bumpmap_pars_fragment:Yg,clipping_planes_fragment:$g,clipping_planes_pars_fragment:Kg,clipping_planes_pars_vertex:Zg,clipping_planes_vertex:Jg,color_fragment:Qg,color_pars_fragment:e_,color_pars_vertex:t_,color_vertex:n_,common:i_,cube_uv_reflection_fragment:r_,defaultnormal_vertex:s_,displacementmap_pars_vertex:o_,displacementmap_vertex:a_,emissivemap_fragment:l_,emissivemap_pars_fragment:c_,encodings_fragment:u_,encodings_pars_fragment:f_,envmap_fragment:h_,envmap_common_pars_fragment:d_,envmap_pars_fragment:p_,envmap_pars_vertex:m_,envmap_physical_pars_fragment:A_,envmap_vertex:g_,fog_vertex:__,fog_pars_vertex:x_,fog_fragment:v_,fog_pars_fragment:y_,gradientmap_pars_fragment:M_,lightmap_fragment:b_,lightmap_pars_fragment:S_,lights_lambert_fragment:w_,lights_lambert_pars_fragment:E_,lights_pars_begin:T_,lights_toon_fragment:C_,lights_toon_pars_fragment:L_,lights_phong_fragment:P_,lights_phong_pars_fragment:R_,lights_physical_fragment:D_,lights_physical_pars_fragment:I_,lights_fragment_begin:F_,lights_fragment_maps:O_,lights_fragment_end:N_,logdepthbuf_fragment:U_,logdepthbuf_pars_fragment:z_,logdepthbuf_pars_vertex:B_,logdepthbuf_vertex:k_,map_fragment:G_,map_pars_fragment:H_,map_particle_fragment:V_,map_particle_pars_fragment:W_,metalnessmap_fragment:q_,metalnessmap_pars_fragment:X_,morphcolor_vertex:j_,morphnormal_vertex:Y_,morphtarget_pars_vertex:$_,morphtarget_vertex:K_,normal_fragment_begin:Z_,normal_fragment_maps:J_,normal_pars_fragment:Q_,normal_pars_vertex:e0,normal_vertex:t0,normalmap_pars_fragment:n0,clearcoat_normal_fragment_begin:i0,clearcoat_normal_fragment_maps:r0,clearcoat_pars_fragment:s0,iridescence_pars_fragment:o0,output_fragment:a0,packing:l0,premultiplied_alpha_fragment:c0,project_vertex:u0,dithering_fragment:f0,dithering_pars_fragment:h0,roughnessmap_fragment:d0,roughnessmap_pars_fragment:p0,shadowmap_pars_fragment:m0,shadowmap_pars_vertex:g0,shadowmap_vertex:_0,shadowmask_pars_fragment:x0,skinbase_vertex:v0,skinning_pars_vertex:y0,skinning_vertex:M0,skinnormal_vertex:b0,specularmap_fragment:S0,specularmap_pars_fragment:w0,tonemapping_fragment:E0,tonemapping_pars_fragment:T0,transmission_fragment:A0,transmission_pars_fragment:C0,uv_pars_fragment:L0,uv_pars_vertex:P0,uv_vertex:R0,uv2_pars_fragment:D0,uv2_pars_vertex:I0,uv2_vertex:F0,worldpos_vertex:O0,background_vert:N0,background_frag:U0,backgroundCube_vert:z0,backgroundCube_frag:B0,cube_vert:k0,cube_frag:G0,depth_vert:H0,depth_frag:V0,distanceRGBA_vert:W0,distanceRGBA_frag:q0,equirect_vert:X0,equirect_frag:j0,linedashed_vert:Y0,linedashed_frag:$0,meshbasic_vert:K0,meshbasic_frag:Z0,meshlambert_vert:J0,meshlambert_frag:Q0,meshmatcap_vert:ex,meshmatcap_frag:tx,meshnormal_vert:nx,meshnormal_frag:ix,meshphong_vert:rx,meshphong_frag:sx,meshphysical_vert:ox,meshphysical_frag:ax,meshtoon_vert:lx,meshtoon_frag:cx,points_vert:ux,points_frag:fx,shadow_vert:hx,shadow_frag:dx,sprite_vert:px,sprite_frag:mx},ye={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ft},uv2Transform:{value:new Ft},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ft}}},on={basic:{uniforms:bt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:bt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:bt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:bt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:bt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:bt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:bt([ye.points,ye.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:bt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:bt([ye.common,ye.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:bt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:bt([ye.sprite,ye.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:bt([ye.common,ye.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:bt([ye.lights,ye.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};on.physical={uniforms:bt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const rs={r:0,b:0,g:0};function gx(n,e,t,i,r,s,a){const o=new Ke(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function g(d,x){let E=!1,y=x.isScene===!0?x.background:null;y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y));const S=n.xr,T=S.getSession&&S.getSession();T&&T.environmentBlendMode==="additive"&&(y=null),y===null?p(o,l):y&&y.isColor&&(p(y,1),E=!0),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Is)?(u===void 0&&(u=new In(new Ir(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:$i(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,z,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=y.encoding!==$e,(f!==y||h!==y.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,m=n.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new In(new Ia(2,2),new di({name:"BackgroundMaterial",uniforms:$i(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=y.encoding!==$e,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,m=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function p(d,x){d.getRGB(rs,vf(n)),i.buffers.color.setClear(rs.r,rs.g,rs.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(d,x=1){o.set(d),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,p(o,l)},render:g}}function _x(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=d(null);let c=l,u=!1;function f(U,ee,re,se,W){let he=!1;if(a){const le=p(se,re,ee);c!==le&&(c=le,m(c.object)),he=x(U,se,re,W),he&&E(U,se,re,W)}else{const le=ee.wireframe===!0;(c.geometry!==se.id||c.program!==re.id||c.wireframe!==le)&&(c.geometry=se.id,c.program=re.id,c.wireframe=le,he=!0)}W!==null&&t.update(W,34963),(he||u)&&(u=!1,v(U,ee,re,se),W!==null&&n.bindBuffer(34963,t.get(W).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(U){return i.isWebGL2?n.bindVertexArray(U):s.bindVertexArrayOES(U)}function g(U){return i.isWebGL2?n.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function p(U,ee,re){const se=re.wireframe===!0;let W=o[U.id];W===void 0&&(W={},o[U.id]=W);let he=W[ee.id];he===void 0&&(he={},W[ee.id]=he);let le=he[se];return le===void 0&&(le=d(h()),he[se]=le),le}function d(U){const ee=[],re=[],se=[];for(let W=0;W<r;W++)ee[W]=0,re[W]=0,se[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:re,attributeDivisors:se,object:U,attributes:{},index:null}}function x(U,ee,re,se){const W=c.attributes,he=ee.attributes;let le=0;const Y=re.getAttributes();for(const q in Y)if(Y[q].location>=0){const ge=W[q];let I=he[q];if(I===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(I=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(I=U.instanceColor)),ge===void 0||ge.attribute!==I||I&&ge.data!==I.data)return!0;le++}return c.attributesNum!==le||c.index!==se}function E(U,ee,re,se){const W={},he=ee.attributes;let le=0;const Y=re.getAttributes();for(const q in Y)if(Y[q].location>=0){let ge=he[q];ge===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(ge=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(ge=U.instanceColor));const I={};I.attribute=ge,ge&&ge.data&&(I.data=ge.data),W[q]=I,le++}c.attributes=W,c.attributesNum=le,c.index=se}function y(){const U=c.newAttributes;for(let ee=0,re=U.length;ee<re;ee++)U[ee]=0}function S(U){T(U,0)}function T(U,ee){const re=c.newAttributes,se=c.enabledAttributes,W=c.attributeDivisors;re[U]=1,se[U]===0&&(n.enableVertexAttribArray(U),se[U]=1),W[U]!==ee&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,ee),W[U]=ee)}function R(){const U=c.newAttributes,ee=c.enabledAttributes;for(let re=0,se=ee.length;re<se;re++)ee[re]!==U[re]&&(n.disableVertexAttribArray(re),ee[re]=0)}function z(U,ee,re,se,W,he){i.isWebGL2===!0&&(re===5124||re===5125)?n.vertexAttribIPointer(U,ee,re,W,he):n.vertexAttribPointer(U,ee,re,se,W,he)}function v(U,ee,re,se){if(i.isWebGL2===!1&&(U.isInstancedMesh||se.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const W=se.attributes,he=re.getAttributes(),le=ee.defaultAttributeValues;for(const Y in he){const q=he[Y];if(q.location>=0){let xe=W[Y];if(xe===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(xe=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(xe=U.instanceColor)),xe!==void 0){const ge=xe.normalized,I=xe.itemSize,P=t.get(xe);if(P===void 0)continue;const ae=P.buffer,ne=P.type,ve=P.bytesPerElement;if(xe.isInterleavedBufferAttribute){const _e=xe.data,Ee=_e.stride,b=xe.offset;if(_e.isInstancedInterleavedBuffer){for(let A=0;A<q.locationSize;A++)T(q.location+A,_e.meshPerAttribute);U.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let A=0;A<q.locationSize;A++)S(q.location+A);n.bindBuffer(34962,ae);for(let A=0;A<q.locationSize;A++)z(q.location+A,I/q.locationSize,ne,ge,Ee*ve,(b+I/q.locationSize*A)*ve)}else{if(xe.isInstancedBufferAttribute){for(let _e=0;_e<q.locationSize;_e++)T(q.location+_e,xe.meshPerAttribute);U.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let _e=0;_e<q.locationSize;_e++)S(q.location+_e);n.bindBuffer(34962,ae);for(let _e=0;_e<q.locationSize;_e++)z(q.location+_e,I/q.locationSize,ne,ge,I*ve,I/q.locationSize*_e*ve)}}else if(le!==void 0){const ge=le[Y];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(q.location,ge);break;case 3:n.vertexAttrib3fv(q.location,ge);break;case 4:n.vertexAttrib4fv(q.location,ge);break;default:n.vertexAttrib1fv(q.location,ge)}}}}R()}function L(){ce();for(const U in o){const ee=o[U];for(const re in ee){const se=ee[re];for(const W in se)g(se[W].object),delete se[W];delete ee[re]}delete o[U]}}function F(U){if(o[U.id]===void 0)return;const ee=o[U.id];for(const re in ee){const se=ee[re];for(const W in se)g(se[W].object),delete se[W];delete ee[re]}delete o[U.id]}function $(U){for(const ee in o){const re=o[ee];if(re[U.id]===void 0)continue;const se=re[U.id];for(const W in se)g(se[W].object),delete se[W];delete re[U.id]}}function ce(){k(),u=!0,c!==l&&(c=l,m(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ce,resetDefaultState:k,dispose:L,releaseStatesOfGeometry:F,releaseStatesOfProgram:$,initAttributes:y,enableAttribute:S,disableUnusedAttributes:R}}function xx(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function vx(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(z){if(z==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";z="mediump"}return z==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),m=n.getParameter(3379),g=n.getParameter(34076),p=n.getParameter(34921),d=n.getParameter(36347),x=n.getParameter(36348),E=n.getParameter(36349),y=h>0,S=a||e.has("OES_texture_float"),T=y&&S,R=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:E,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:R}}function yx(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new $n,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const g=f.length!==0||h||i!==0||r;return r=h,t=u(f,m,0),i=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,m){const g=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,x=n.get(f);if(!r||g===null||g.length===0||s&&!d)s?u(null):c();else{const E=s?0:i,y=E*4;let S=x.clippingState||null;l.value=S,S=u(g,h,y,m);for(let T=0;T!==y;++T)S[T]=t[T];x.clippingState=S,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,g){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=l.value,g!==!0||d===null){const x=m+p*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(d===null||d.length<x)&&(d=new Float32Array(x));for(let y=0,S=m;y!==p;++y,S+=4)a.copy(f[y]).applyMatrix4(E,o),a.normal.toArray(d,S),d[S+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function Mx(n){let e=new WeakMap;function t(a,o){return o===Zo?a.mapping=Xi:o===Jo&&(a.mapping=ji),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Zo||o===Jo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Fg(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Sf extends yf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Oi=4,gc=[.125,.215,.35,.446,.526,.582],ei=20,To=new Sf,_c=new Ke;let Ao=null;const Kn=(1+Math.sqrt(5))/2,Ri=1/Kn,xc=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Kn,Ri),new V(0,Kn,-Ri),new V(Ri,0,Kn),new V(-Ri,0,Kn),new V(Kn,Ri,0),new V(-Kn,Ri,0)];class vc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ao=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ao),e.scissorTest=!1,ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xi||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ao=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Er,format:Kt,encoding:ui,depthBuffer:!1},r=yc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bx(s)),this._blurMaterial=Sx(s,e,t)}return r}_compileMaterial(e){const t=new In(this._lodPlanes[0],e);this._renderer.compile(t,To)}_sceneToCubeUV(e,t,i,r){const o=new Bt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(_c),u.toneMapping=Mn,u.autoClear=!1;const m=new gf({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),g=new In(new Ir,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(_c),p=!0);for(let x=0;x<6;x++){const E=x%3;E===0?(o.up.set(0,l[x],0),o.lookAt(c[x],0,0)):E===1?(o.up.set(0,0,l[x]),o.lookAt(0,c[x],0)):(o.up.set(0,l[x],0),o.lookAt(0,0,c[x]));const y=this._cubeSize;ss(r,E*y,x>2?y:0,y,y),u.setRenderTarget(r),p&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Xi||e.mapping===ji;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new In(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ss(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,To)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=xc[(r-1)%xc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new In(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ei-1),p=s/g,d=isFinite(s)?1+Math.floor(u*p):ei;d>ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ei}`);const x=[];let E=0;for(let z=0;z<ei;++z){const v=z/p,L=Math.exp(-v*v/2);x.push(L),z===0?E+=L:z<d&&(E+=2*L)}for(let z=0;z<x.length;z++)x[z]=x[z]/E;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=x,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const S=this._sizeLods[r],T=3*S*(r>y-Oi?r-y+Oi:0),R=4*(this._cubeSize-S);ss(t,T,R,3*S,2*S),l.setRenderTarget(t),l.render(f,To)}}function bx(n){const e=[],t=[],i=[];let r=n;const s=n-Oi+1+gc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Oi?l=gc[a-n+Oi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,p=3,d=2,x=1,E=new Float32Array(p*g*m),y=new Float32Array(d*g*m),S=new Float32Array(x*g*m);for(let R=0;R<m;R++){const z=R%3*2/3-1,v=R>2?0:-1,L=[z,v,0,z+2/3,v,0,z+2/3,v+1,0,z,v,0,z+2/3,v+1,0,z,v+1,0];E.set(L,p*g*R),y.set(h,d*g*R);const F=[R,R,R,R,R,R];S.set(F,x*g*R)}const T=new wn;T.setAttribute("position",new Qt(E,p)),T.setAttribute("uv",new Qt(y,d)),T.setAttribute("faceIndex",new Qt(S,x)),e.push(T),r>Oi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yc(n,e,t){const i=new fi(n,e,t);return i.texture.mapping=Is,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ss(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Sx(n,e,t){const i=new Float32Array(ei),r=new V(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Mc(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function bc(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Fa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Zo||l===Jo,u=l===Xi||l===ji;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new vc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new vc(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Ex(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Tx(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const m=f.morphAttributes;for(const g in m){const p=m[g];for(let d=0,x=p.length;d<x;d++)e.update(p[d],34962)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let p=0;if(m!==null){const E=m.array;p=m.version;for(let y=0,S=E.length;y<S;y+=3){const T=E[y+0],R=E[y+1],z=E[y+2];h.push(T,R,R,z,z,T)}}else{const E=g.array;p=g.version;for(let y=0,S=E.length/3-1;y<S;y+=3){const T=y+0,R=y+1,z=y+2;h.push(T,R,R,z,z,T)}}const d=new(cf(h)?xf:_f)(h,1);d.version=p;const x=s.get(f);x&&e.remove(x),s.set(f,d)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Ax(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){n.drawElements(s,m,o,h*l),t.update(m,s,1)}function f(h,m,g){if(g===0)return;let p,d;if(r)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,o,h*l,g),t.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function Cx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Lx(n,e){return n[0]-e[0]}function Px(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Rx(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new ft,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let d=s.get(u);if(d===void 0||d.count!==p){let ee=function(){k.dispose(),s.delete(u),u.removeEventListener("dispose",ee)};d!==void 0&&d.texture.dispose();const y=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],z=u.morphAttributes.normal||[],v=u.morphAttributes.color||[];let L=0;y===!0&&(L=1),S===!0&&(L=2),T===!0&&(L=3);let F=u.attributes.position.count*L,$=1;F>e.maxTextureSize&&($=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const ce=new Float32Array(F*$*4*p),k=new df(ce,F,$,p);k.type=ni,k.needsUpdate=!0;const U=L*4;for(let re=0;re<p;re++){const se=R[re],W=z[re],he=v[re],le=F*$*4*re;for(let Y=0;Y<se.count;Y++){const q=Y*U;y===!0&&(a.fromBufferAttribute(se,Y),ce[le+q+0]=a.x,ce[le+q+1]=a.y,ce[le+q+2]=a.z,ce[le+q+3]=0),S===!0&&(a.fromBufferAttribute(W,Y),ce[le+q+4]=a.x,ce[le+q+5]=a.y,ce[le+q+6]=a.z,ce[le+q+7]=0),T===!0&&(a.fromBufferAttribute(he,Y),ce[le+q+8]=a.x,ce[le+q+9]=a.y,ce[le+q+10]=a.z,ce[le+q+11]=he.itemSize===4?a.w:1)}}d={count:p,texture:k,size:new Ue(F,$)},s.set(u,d),u.addEventListener("dispose",ee)}let x=0;for(let y=0;y<m.length;y++)x+=m[y];const E=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",m),h.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}else{const g=m===void 0?0:m.length;let p=i[u.id];if(p===void 0||p.length!==g){p=[];for(let S=0;S<g;S++)p[S]=[S,0];i[u.id]=p}for(let S=0;S<g;S++){const T=p[S];T[0]=S,T[1]=m[S]}p.sort(Px);for(let S=0;S<8;S++)S<g&&p[S][1]?(o[S][0]=p[S][0],o[S][1]=p[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(Lx);const d=u.morphAttributes.position,x=u.morphAttributes.normal;let E=0;for(let S=0;S<8;S++){const T=o[S],R=T[0],z=T[1];R!==Number.MAX_SAFE_INTEGER&&z?(d&&u.getAttribute("morphTarget"+S)!==d[R]&&u.setAttribute("morphTarget"+S,d[R]),x&&u.getAttribute("morphNormal"+S)!==x[R]&&u.setAttribute("morphNormal"+S,x[R]),r[S]=z,E+=z):(d&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),x&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const y=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Dx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const wf=new Tt,Ef=new df,Tf=new xg,Af=new Mf,Sc=[],wc=[],Ec=new Float32Array(16),Tc=new Float32Array(9),Ac=new Float32Array(4);function Qi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Sc[r];if(s===void 0&&(s=new Float32Array(r),Sc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function at(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Os(n,e){let t=wc[e];t===void 0&&(t=new Int32Array(e),wc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ix(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Fx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;n.uniform2fv(this.addr,e),at(t,e)}}function Ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;n.uniform3fv(this.addr,e),at(t,e)}}function Nx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;n.uniform4fv(this.addr,e),at(t,e)}}function Ux(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(ot(t,i))return;Ac.set(i),n.uniformMatrix2fv(this.addr,!1,Ac),at(t,i)}}function zx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(ot(t,i))return;Tc.set(i),n.uniformMatrix3fv(this.addr,!1,Tc),at(t,i)}}function Bx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(ot(t,i))return;Ec.set(i),n.uniformMatrix4fv(this.addr,!1,Ec),at(t,i)}}function kx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Gx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;n.uniform2iv(this.addr,e),at(t,e)}}function Hx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;n.uniform3iv(this.addr,e),at(t,e)}}function Vx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;n.uniform4iv(this.addr,e),at(t,e)}}function Wx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function qx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;n.uniform2uiv(this.addr,e),at(t,e)}}function Xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;n.uniform3uiv(this.addr,e),at(t,e)}}function jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;n.uniform4uiv(this.addr,e),at(t,e)}}function Yx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||wf,r)}function $x(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Tf,r)}function Kx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Af,r)}function Zx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ef,r)}function Jx(n){switch(n){case 5126:return Ix;case 35664:return Fx;case 35665:return Ox;case 35666:return Nx;case 35674:return Ux;case 35675:return zx;case 35676:return Bx;case 5124:case 35670:return kx;case 35667:case 35671:return Gx;case 35668:case 35672:return Hx;case 35669:case 35673:return Vx;case 5125:return Wx;case 36294:return qx;case 36295:return Xx;case 36296:return jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return $x;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return Zx}}function Qx(n,e){n.uniform1fv(this.addr,e)}function ev(n,e){const t=Qi(e,this.size,2);n.uniform2fv(this.addr,t)}function tv(n,e){const t=Qi(e,this.size,3);n.uniform3fv(this.addr,t)}function nv(n,e){const t=Qi(e,this.size,4);n.uniform4fv(this.addr,t)}function iv(n,e){const t=Qi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function rv(n,e){const t=Qi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function sv(n,e){const t=Qi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ov(n,e){n.uniform1iv(this.addr,e)}function av(n,e){n.uniform2iv(this.addr,e)}function lv(n,e){n.uniform3iv(this.addr,e)}function cv(n,e){n.uniform4iv(this.addr,e)}function uv(n,e){n.uniform1uiv(this.addr,e)}function fv(n,e){n.uniform2uiv(this.addr,e)}function hv(n,e){n.uniform3uiv(this.addr,e)}function dv(n,e){n.uniform4uiv(this.addr,e)}function pv(n,e,t){const i=this.cache,r=e.length,s=Os(t,r);ot(i,s)||(n.uniform1iv(this.addr,s),at(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||wf,s[a])}function mv(n,e,t){const i=this.cache,r=e.length,s=Os(t,r);ot(i,s)||(n.uniform1iv(this.addr,s),at(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Tf,s[a])}function gv(n,e,t){const i=this.cache,r=e.length,s=Os(t,r);ot(i,s)||(n.uniform1iv(this.addr,s),at(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Af,s[a])}function _v(n,e,t){const i=this.cache,r=e.length,s=Os(t,r);ot(i,s)||(n.uniform1iv(this.addr,s),at(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ef,s[a])}function xv(n){switch(n){case 5126:return Qx;case 35664:return ev;case 35665:return tv;case 35666:return nv;case 35674:return iv;case 35675:return rv;case 35676:return sv;case 5124:case 35670:return ov;case 35667:case 35671:return av;case 35668:case 35672:return lv;case 35669:case 35673:return cv;case 5125:return uv;case 36294:return fv;case 36295:return hv;case 36296:return dv;case 35678:case 36198:case 36298:case 36306:case 35682:return pv;case 35679:case 36299:case 36307:return mv;case 35680:case 36300:case 36308:case 36293:return gv;case 36289:case 36303:case 36311:case 36292:return _v}}class vv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Jx(t.type)}}class yv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=xv(t.type)}}class Mv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Co=/(\w+)(\])?(\[|\.)?/g;function Cc(n,e){n.seq.push(e),n.map[e.id]=e}function bv(n,e,t){const i=n.name,r=i.length;for(Co.lastIndex=0;;){const s=Co.exec(i),a=Co.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Cc(t,c===void 0?new vv(o,n,e):new yv(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Mv(o),Cc(t,f)),t=f}}}class ms{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);bv(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Lc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Sv=0;function wv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Ev(n){switch(n){case ui:return["Linear","( value )"];case $e:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Pc(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+wv(n.getShaderSource(e),a)}else return r}function Tv(n,e){const t=Ev(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Av(n,e){let t;switch(e){case Wm:t="Linear";break;case qm:t="Reinhard";break;case Xm:t="OptimizedCineon";break;case jm:t="ACESFilmic";break;case Ym:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Cv(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fr).join(`
`)}function Lv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Pv(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function fr(n){return n!==""}function Rc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ia(n){return n.replace(Rv,Dv)}function Dv(n,e){const t=Fe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ia(t)}const Iv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ic(n){return n.replace(Iv,Fv)}function Fv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ov(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===bm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ur&&(e="SHADOWMAP_TYPE_VSM"),e}function Nv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xi:case ji:e="ENVMAP_TYPE_CUBE";break;case Is:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Uv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ji:e="ENVMAP_MODE_REFRACTION";break}return e}function zv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case of:e="ENVMAP_BLENDING_MULTIPLY";break;case Hm:e="ENVMAP_BLENDING_MIX";break;case Vm:e="ENVMAP_BLENDING_ADD";break}return e}function Bv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function kv(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ov(t),c=Nv(t),u=Uv(t),f=zv(t),h=Bv(t),m=t.isWebGL2?"":Cv(t),g=Lv(s),p=r.createProgram();let d,x,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(fr).join(`
`),d.length>0&&(d+=`
`),x=[m,g].filter(fr).join(`
`),x.length>0&&(x+=`
`)):(d=[Fc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),x=[m,Fc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Mn?Av("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.encodings_pars_fragment,Tv("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),a=ia(a),a=Rc(a,t),a=Dc(a,t),o=ia(o),o=Rc(o,t),o=Dc(o,t),a=Ic(a),o=Ic(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["#define varying in",t.glslVersion===ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=E+d+a,S=E+x+o,T=Lc(r,35633,y),R=Lc(r,35632,S);if(r.attachShader(p,T),r.attachShader(p,R),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const L=r.getProgramInfoLog(p).trim(),F=r.getShaderInfoLog(T).trim(),$=r.getShaderInfoLog(R).trim();let ce=!0,k=!0;if(r.getProgramParameter(p,35714)===!1){ce=!1;const U=Pc(r,T,"vertex"),ee=Pc(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+L+`
`+U+`
`+ee)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(F===""||$==="")&&(k=!1);k&&(this.diagnostics={runnable:ce,programLog:L,vertexShader:{log:F,prefix:d},fragmentShader:{log:$,prefix:x}})}r.deleteShader(T),r.deleteShader(R);let z;this.getUniforms=function(){return z===void 0&&(z=new ms(r,p)),z};let v;return this.getAttributes=function(){return v===void 0&&(v=Pv(r,p)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Sv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=R,this}let Gv=0;class Hv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Vv(e),t.set(e,i)),i}}class Vv{constructor(e){this.id=Gv++,this.code=e,this.usedTimes=0}}function Wv(n,e,t,i,r,s,a){const o=new mf,l=new Hv,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,L,F,$,ce){const k=$.fog,U=ce.geometry,ee=v.isMeshStandardMaterial?$.environment:null,re=(v.isMeshStandardMaterial?t:e).get(v.envMap||ee),se=re&&re.mapping===Is?re.image.height:null,W=g[v.type];v.precision!==null&&(m=r.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const he=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,le=he!==void 0?he.length:0;let Y=0;U.morphAttributes.position!==void 0&&(Y=1),U.morphAttributes.normal!==void 0&&(Y=2),U.morphAttributes.color!==void 0&&(Y=3);let q,xe,ge,I;if(W){const Ee=on[W];q=Ee.vertexShader,xe=Ee.fragmentShader}else q=v.vertexShader,xe=v.fragmentShader,l.update(v),ge=l.getVertexShaderID(v),I=l.getFragmentShaderID(v);const P=n.getRenderTarget(),ae=v.alphaTest>0,ne=v.clearcoat>0,ve=v.iridescence>0;return{isWebGL2:u,shaderID:W,shaderName:v.type,vertexShader:q,fragmentShader:xe,defines:v.defines,customVertexShaderID:ge,customFragmentShaderID:I,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:ce.isInstancedMesh===!0,instancingColor:ce.isInstancedMesh===!0&&ce.instanceColor!==null,supportsVertexTextures:h,outputEncoding:P===null?n.outputEncoding:P.isXRRenderTarget===!0?P.texture.encoding:ui,map:!!v.map,matcap:!!v.matcap,envMap:!!re,envMapMode:re&&re.mapping,envMapCubeUVHeight:se,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===pg,tangentSpaceNormalMap:v.normalMapType===dg,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===$e,clearcoat:ne,clearcoatMap:ne&&!!v.clearcoatMap,clearcoatRoughnessMap:ne&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ne&&!!v.clearcoatNormalMap,iridescence:ve,iridescenceMap:ve&&!!v.iridescenceMap,iridescenceThicknessMap:ve&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===ki,alphaMap:!!v.alphaMap,alphaTest:ae,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!U.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!k,useFog:v.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ce.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Y,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:v.toneMapped?n.toneMapping:Mn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ra,flipSided:v.side===Vt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const L=[];if(v.shaderID?L.push(v.shaderID):(L.push(v.customVertexShaderID),L.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)L.push(F),L.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(x(L,v),E(L,v),L.push(n.outputEncoding)),L.push(v.customProgramCacheKey),L.join()}function x(v,L){v.push(L.precision),v.push(L.outputEncoding),v.push(L.envMapMode),v.push(L.envMapCubeUVHeight),v.push(L.combine),v.push(L.vertexUvs),v.push(L.fogExp2),v.push(L.sizeAttenuation),v.push(L.morphTargetsCount),v.push(L.morphAttributeCount),v.push(L.numDirLights),v.push(L.numPointLights),v.push(L.numSpotLights),v.push(L.numSpotLightMaps),v.push(L.numHemiLights),v.push(L.numRectAreaLights),v.push(L.numDirLightShadows),v.push(L.numPointLightShadows),v.push(L.numSpotLightShadows),v.push(L.numSpotLightShadowsWithMaps),v.push(L.shadowMapType),v.push(L.toneMapping),v.push(L.numClippingPlanes),v.push(L.numClipIntersection),v.push(L.depthPacking)}function E(v,L){o.disableAll(),L.isWebGL2&&o.enable(0),L.supportsVertexTextures&&o.enable(1),L.instancing&&o.enable(2),L.instancingColor&&o.enable(3),L.map&&o.enable(4),L.matcap&&o.enable(5),L.envMap&&o.enable(6),L.lightMap&&o.enable(7),L.aoMap&&o.enable(8),L.emissiveMap&&o.enable(9),L.bumpMap&&o.enable(10),L.normalMap&&o.enable(11),L.objectSpaceNormalMap&&o.enable(12),L.tangentSpaceNormalMap&&o.enable(13),L.clearcoat&&o.enable(14),L.clearcoatMap&&o.enable(15),L.clearcoatRoughnessMap&&o.enable(16),L.clearcoatNormalMap&&o.enable(17),L.iridescence&&o.enable(18),L.iridescenceMap&&o.enable(19),L.iridescenceThicknessMap&&o.enable(20),L.displacementMap&&o.enable(21),L.specularMap&&o.enable(22),L.roughnessMap&&o.enable(23),L.metalnessMap&&o.enable(24),L.gradientMap&&o.enable(25),L.alphaMap&&o.enable(26),L.alphaTest&&o.enable(27),L.vertexColors&&o.enable(28),L.vertexAlphas&&o.enable(29),L.vertexUvs&&o.enable(30),L.vertexTangents&&o.enable(31),L.uvsVertexOnly&&o.enable(32),v.push(o.mask),o.disableAll(),L.fog&&o.enable(0),L.useFog&&o.enable(1),L.flatShading&&o.enable(2),L.logarithmicDepthBuffer&&o.enable(3),L.skinning&&o.enable(4),L.morphTargets&&o.enable(5),L.morphNormals&&o.enable(6),L.morphColors&&o.enable(7),L.premultipliedAlpha&&o.enable(8),L.shadowMapEnabled&&o.enable(9),L.physicallyCorrectLights&&o.enable(10),L.doubleSided&&o.enable(11),L.flipSided&&o.enable(12),L.useDepthPacking&&o.enable(13),L.dithering&&o.enable(14),L.specularIntensityMap&&o.enable(15),L.specularColorMap&&o.enable(16),L.transmission&&o.enable(17),L.transmissionMap&&o.enable(18),L.thicknessMap&&o.enable(19),L.sheen&&o.enable(20),L.sheenColorMap&&o.enable(21),L.sheenRoughnessMap&&o.enable(22),L.decodeVideoTexture&&o.enable(23),L.opaque&&o.enable(24),v.push(o.mask)}function y(v){const L=g[v.type];let F;if(L){const $=on[L];F=Pg.clone($.uniforms)}else F=v.uniforms;return F}function S(v,L){let F;for(let $=0,ce=c.length;$<ce;$++){const k=c[$];if(k.cacheKey===L){F=k,++F.usedTimes;break}}return F===void 0&&(F=new kv(n,L,v,s),c.push(F)),F}function T(v){if(--v.usedTimes===0){const L=c.indexOf(v);c[L]=c[c.length-1],c.pop(),v.destroy()}}function R(v){l.remove(v)}function z(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:y,acquireProgram:S,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:z}}function qv(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Xv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Oc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Nc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,m,g,p,d){let x=n[e];return x===void 0?(x={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:p,group:d},n[e]=x):(x.id=f.id,x.object=f,x.geometry=h,x.material=m,x.groupOrder=g,x.renderOrder=f.renderOrder,x.z=p,x.group=d),e++,x}function o(f,h,m,g,p,d){const x=a(f,h,m,g,p,d);m.transmission>0?i.push(x):m.transparent===!0?r.push(x):t.push(x)}function l(f,h,m,g,p,d){const x=a(f,h,m,g,p,d);m.transmission>0?i.unshift(x):m.transparent===!0?r.unshift(x):t.unshift(x)}function c(f,h){t.length>1&&t.sort(f||Xv),i.length>1&&i.sort(h||Oc),r.length>1&&r.sort(h||Oc)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function jv(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Nc,n.set(i,[a])):r>=s.length?(a=new Nc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Yv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Ke};break;case"SpotLight":t={position:new V,direction:new V,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function $v(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Kv=0;function Zv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Jv(n,e){const t=new Yv,i=$v(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new V);const s=new V,a=new rt,o=new rt;function l(u,f){let h=0,m=0,g=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let p=0,d=0,x=0,E=0,y=0,S=0,T=0,R=0,z=0,v=0;u.sort(Zv);const L=f!==!0?Math.PI:1;for(let $=0,ce=u.length;$<ce;$++){const k=u[$],U=k.color,ee=k.intensity,re=k.distance,se=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=U.r*ee*L,m+=U.g*ee*L,g+=U.b*ee*L;else if(k.isLightProbe)for(let W=0;W<9;W++)r.probe[W].addScaledVector(k.sh.coefficients[W],ee);else if(k.isDirectionalLight){const W=t.get(k);if(W.color.copy(k.color).multiplyScalar(k.intensity*L),k.castShadow){const he=k.shadow,le=i.get(k);le.shadowBias=he.bias,le.shadowNormalBias=he.normalBias,le.shadowRadius=he.radius,le.shadowMapSize=he.mapSize,r.directionalShadow[p]=le,r.directionalShadowMap[p]=se,r.directionalShadowMatrix[p]=k.shadow.matrix,S++}r.directional[p]=W,p++}else if(k.isSpotLight){const W=t.get(k);W.position.setFromMatrixPosition(k.matrixWorld),W.color.copy(U).multiplyScalar(ee*L),W.distance=re,W.coneCos=Math.cos(k.angle),W.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),W.decay=k.decay,r.spot[x]=W;const he=k.shadow;if(k.map&&(r.spotLightMap[z]=k.map,z++,he.updateMatrices(k),k.castShadow&&v++),r.spotLightMatrix[x]=he.matrix,k.castShadow){const le=i.get(k);le.shadowBias=he.bias,le.shadowNormalBias=he.normalBias,le.shadowRadius=he.radius,le.shadowMapSize=he.mapSize,r.spotShadow[x]=le,r.spotShadowMap[x]=se,R++}x++}else if(k.isRectAreaLight){const W=t.get(k);W.color.copy(U).multiplyScalar(ee),W.halfWidth.set(k.width*.5,0,0),W.halfHeight.set(0,k.height*.5,0),r.rectArea[E]=W,E++}else if(k.isPointLight){const W=t.get(k);if(W.color.copy(k.color).multiplyScalar(k.intensity*L),W.distance=k.distance,W.decay=k.decay,k.castShadow){const he=k.shadow,le=i.get(k);le.shadowBias=he.bias,le.shadowNormalBias=he.normalBias,le.shadowRadius=he.radius,le.shadowMapSize=he.mapSize,le.shadowCameraNear=he.camera.near,le.shadowCameraFar=he.camera.far,r.pointShadow[d]=le,r.pointShadowMap[d]=se,r.pointShadowMatrix[d]=k.shadow.matrix,T++}r.point[d]=W,d++}else if(k.isHemisphereLight){const W=t.get(k);W.skyColor.copy(k.color).multiplyScalar(ee*L),W.groundColor.copy(k.groundColor).multiplyScalar(ee*L),r.hemi[y]=W,y++}}E>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;const F=r.hash;(F.directionalLength!==p||F.pointLength!==d||F.spotLength!==x||F.rectAreaLength!==E||F.hemiLength!==y||F.numDirectionalShadows!==S||F.numPointShadows!==T||F.numSpotShadows!==R||F.numSpotMaps!==z)&&(r.directional.length=p,r.spot.length=x,r.rectArea.length=E,r.point.length=d,r.hemi.length=y,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=R+z-v,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=v,F.directionalLength=p,F.pointLength=d,F.spotLength=x,F.rectAreaLength=E,F.hemiLength=y,F.numDirectionalShadows=S,F.numPointShadows=T,F.numSpotShadows=R,F.numSpotMaps=z,r.version=Kv++)}function c(u,f){let h=0,m=0,g=0,p=0,d=0;const x=f.matrixWorldInverse;for(let E=0,y=u.length;E<y;E++){const S=u[E];if(S.isDirectionalLight){const T=r.directional[h];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(x),h++}else if(S.isSpotLight){const T=r.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(x),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(x),g++}else if(S.isRectAreaLight){const T=r.rectArea[p];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(x),o.identity(),a.copy(S.matrixWorld),a.premultiply(x),o.extractRotation(a),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),p++}else if(S.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(x),m++}else if(S.isHemisphereLight){const T=r.hemi[d];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(x),d++}}}return{setup:l,setupView:c,state:r}}function Uc(n,e){const t=new Jv(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Qv(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Uc(n,e),t.set(s,[l])):a>=o.length?(l=new Uc(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class ey extends Dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ty extends Dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new V,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ry(n,e,t){let i=new Da;const r=new Ue,s=new Ue,a=new ft,o=new ey({depthPacking:hg}),l=new ty,c={},u=t.maxTextureSize,f={0:Vt,1:li,2:Ra},h=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:ny,fragmentShader:iy}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new wn;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new In(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nf,this.render=function(S,T,R){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||S.length===0)return;const z=n.getRenderTarget(),v=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Nn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let $=0,ce=S.length;$<ce;$++){const k=S[$],U=k.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const ee=U.getFrameExtents();if(r.multiply(ee),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,U.mapSize.y=s.y)),U.map===null){const se=this.type!==ur?{minFilter:St,magFilter:St}:{};U.map=new fi(r.x,r.y,se),U.map.texture.name=k.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const re=U.getViewportCount();for(let se=0;se<re;se++){const W=U.getViewport(se);a.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),F.viewport(a),U.updateMatrices(k,se),i=U.getFrustum(),y(T,R,U.camera,k,this.type)}U.isPointLightShadow!==!0&&this.type===ur&&x(U,R),U.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(z,v,L)};function x(S,T){const R=e.update(p);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new fi(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(T,null,R,h,p,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(T,null,R,m,p,null)}function E(S,T,R,z,v,L){let F=null;const $=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if($!==void 0)F=$;else if(F=R.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const ce=F.uuid,k=T.uuid;let U=c[ce];U===void 0&&(U={},c[ce]=U);let ee=U[k];ee===void 0&&(ee=F.clone(),U[k]=ee),F=ee}return F.visible=T.visible,F.wireframe=T.wireframe,L===ur?F.side=T.shadowSide!==null?T.shadowSide:T.side:F.side=T.shadowSide!==null?T.shadowSide:f[T.side],F.alphaMap=T.alphaMap,F.alphaTest=T.alphaTest,F.map=T.map,F.clipShadows=T.clipShadows,F.clippingPlanes=T.clippingPlanes,F.clipIntersection=T.clipIntersection,F.displacementMap=T.displacementMap,F.displacementScale=T.displacementScale,F.displacementBias=T.displacementBias,F.wireframeLinewidth=T.wireframeLinewidth,F.linewidth=T.linewidth,R.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(R.matrixWorld),F.nearDistance=z,F.farDistance=v),F}function y(S,T,R,z,v){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===ur)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const $=e.update(S),ce=S.material;if(Array.isArray(ce)){const k=$.groups;for(let U=0,ee=k.length;U<ee;U++){const re=k[U],se=ce[re.materialIndex];if(se&&se.visible){const W=E(S,se,z,R.near,R.far,v);n.renderBufferDirect(R,null,$,W,S,re)}}}else if(ce.visible){const k=E(S,ce,z,R.near,R.far,v);n.renderBufferDirect(R,null,$,k,S,null)}}const F=S.children;for(let $=0,ce=F.length;$<ce;$++)y(F[$],T,R,z,v)}}function sy(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const Z=new ft;let me=null;const Ae=new ft(0,0,0,0);return{setMask:function(Le){me!==Le&&!D&&(n.colorMask(Le,Le,Le,Le),me=Le)},setLocked:function(Le){D=Le},setClear:function(Le,Xe,lt,pt,Bn){Bn===!0&&(Le*=pt,Xe*=pt,lt*=pt),Z.set(Le,Xe,lt,pt),Ae.equals(Z)===!1&&(n.clearColor(Le,Xe,lt,pt),Ae.copy(Z))},reset:function(){D=!1,me=null,Ae.set(-1,0,0,0)}}}function s(){let D=!1,Z=null,me=null,Ae=null;return{setTest:function(Le){Le?ae(2929):ne(2929)},setMask:function(Le){Z!==Le&&!D&&(n.depthMask(Le),Z=Le)},setFunc:function(Le){if(me!==Le){switch(Le){case Om:n.depthFunc(512);break;case Nm:n.depthFunc(519);break;case Um:n.depthFunc(513);break;case Ko:n.depthFunc(515);break;case zm:n.depthFunc(514);break;case Bm:n.depthFunc(518);break;case km:n.depthFunc(516);break;case Gm:n.depthFunc(517);break;default:n.depthFunc(515)}me=Le}},setLocked:function(Le){D=Le},setClear:function(Le){Ae!==Le&&(n.clearDepth(Le),Ae=Le)},reset:function(){D=!1,Z=null,me=null,Ae=null}}}function a(){let D=!1,Z=null,me=null,Ae=null,Le=null,Xe=null,lt=null,pt=null,Bn=null;return{setTest:function(Ze){D||(Ze?ae(2960):ne(2960))},setMask:function(Ze){Z!==Ze&&!D&&(n.stencilMask(Ze),Z=Ze)},setFunc:function(Ze,cn,Ot){(me!==Ze||Ae!==cn||Le!==Ot)&&(n.stencilFunc(Ze,cn,Ot),me=Ze,Ae=cn,Le=Ot)},setOp:function(Ze,cn,Ot){(Xe!==Ze||lt!==cn||pt!==Ot)&&(n.stencilOp(Ze,cn,Ot),Xe=Ze,lt=cn,pt=Ot)},setLocked:function(Ze){D=Ze},setClear:function(Ze){Bn!==Ze&&(n.clearStencil(Ze),Bn=Ze)},reset:function(){D=!1,Z=null,me=null,Ae=null,Le=null,Xe=null,lt=null,pt=null,Bn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,p=[],d=null,x=!1,E=null,y=null,S=null,T=null,R=null,z=null,v=null,L=!1,F=null,$=null,ce=null,k=null,U=null;const ee=n.getParameter(35661);let re=!1,se=0;const W=n.getParameter(7938);W.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(W)[1]),re=se>=1):W.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),re=se>=2);let he=null,le={};const Y=n.getParameter(3088),q=n.getParameter(2978),xe=new ft().fromArray(Y),ge=new ft().fromArray(q);function I(D,Z,me){const Ae=new Uint8Array(4),Le=n.createTexture();n.bindTexture(D,Le),n.texParameteri(D,10241,9728),n.texParameteri(D,10240,9728);for(let Xe=0;Xe<me;Xe++)n.texImage2D(Z+Xe,0,6408,1,1,0,6408,5121,Ae);return Le}const P={};P[3553]=I(3553,3553,1),P[34067]=I(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ae(2929),l.setFunc(Ko),K(!1),ue(Ll),ae(2884),H(Nn);function ae(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function ne(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function ve(D,Z){return m[D]!==Z?(n.bindFramebuffer(D,Z),m[D]=Z,i&&(D===36009&&(m[36160]=Z),D===36160&&(m[36009]=Z)),!0):!1}function _e(D,Z){let me=p,Ae=!1;if(D)if(me=g.get(Z),me===void 0&&(me=[],g.set(Z,me)),D.isWebGLMultipleRenderTargets){const Le=D.texture;if(me.length!==Le.length||me[0]!==36064){for(let Xe=0,lt=Le.length;Xe<lt;Xe++)me[Xe]=36064+Xe;me.length=Le.length,Ae=!0}}else me[0]!==36064&&(me[0]=36064,Ae=!0);else me[0]!==1029&&(me[0]=1029,Ae=!0);Ae&&(t.isWebGL2?n.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function Ee(D){return d!==D?(n.useProgram(D),d=D,!0):!1}const b={[Ii]:32774,[wm]:32778,[Em]:32779};if(i)b[Dl]=32775,b[Il]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(b[Dl]=D.MIN_EXT,b[Il]=D.MAX_EXT)}const A={[Tm]:0,[Am]:1,[Cm]:768,[rf]:770,[Fm]:776,[Dm]:774,[Pm]:772,[Lm]:769,[sf]:771,[Im]:775,[Rm]:773};function H(D,Z,me,Ae,Le,Xe,lt,pt){if(D===Nn){x===!0&&(ne(3042),x=!1);return}if(x===!1&&(ae(3042),x=!0),D!==Sm){if(D!==E||pt!==L){if((y!==Ii||R!==Ii)&&(n.blendEquation(32774),y=Ii,R=Ii),pt)switch(D){case ki:n.blendFuncSeparate(1,771,1,771);break;case $o:n.blendFunc(1,1);break;case Pl:n.blendFuncSeparate(0,769,0,1);break;case Rl:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ki:n.blendFuncSeparate(770,771,1,771);break;case $o:n.blendFunc(770,1);break;case Pl:n.blendFuncSeparate(0,769,0,1);break;case Rl:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,T=null,z=null,v=null,E=D,L=pt}return}Le=Le||Z,Xe=Xe||me,lt=lt||Ae,(Z!==y||Le!==R)&&(n.blendEquationSeparate(b[Z],b[Le]),y=Z,R=Le),(me!==S||Ae!==T||Xe!==z||lt!==v)&&(n.blendFuncSeparate(A[me],A[Ae],A[Xe],A[lt]),S=me,T=Ae,z=Xe,v=lt),E=D,L=!1}function X(D,Z){D.side===Ra?ne(2884):ae(2884);let me=D.side===Vt;Z&&(me=!me),K(me),D.blending===ki&&D.transparent===!1?H(Nn):H(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const Ae=D.stencilWrite;c.setTest(Ae),Ae&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ie(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(32926):ne(32926)}function K(D){F!==D&&(D?n.frontFace(2304):n.frontFace(2305),F=D)}function ue(D){D!==ym?(ae(2884),D!==$&&(D===Ll?n.cullFace(1029):D===Mm?n.cullFace(1028):n.cullFace(1032))):ne(2884),$=D}function de(D){D!==ce&&(re&&n.lineWidth(D),ce=D)}function ie(D,Z,me){D?(ae(32823),(k!==Z||U!==me)&&(n.polygonOffset(Z,me),k=Z,U=me)):ne(32823)}function pe(D){D?ae(3089):ne(3089)}function oe(D){D===void 0&&(D=33984+ee-1),he!==D&&(n.activeTexture(D),he=D)}function M(D,Z,me){me===void 0&&(he===null?me=33984+ee-1:me=he);let Ae=le[me];Ae===void 0&&(Ae={type:void 0,texture:void 0},le[me]=Ae),(Ae.type!==D||Ae.texture!==Z)&&(he!==me&&(n.activeTexture(me),he=me),n.bindTexture(D,Z||P[D]),Ae.type=D,Ae.texture=Z)}function _(){const D=le[he];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function O(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function C(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function N(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(D){xe.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),xe.copy(D))}function we(D){ge.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ge.copy(D))}function Re(D,Z){let me=f.get(Z);me===void 0&&(me=new WeakMap,f.set(Z,me));let Ae=me.get(D);Ae===void 0&&(Ae=n.getUniformBlockIndex(Z,D.name),me.set(D,Ae))}function ze(D,Z){const Ae=f.get(Z).get(D);u.get(Z)!==Ae&&(n.uniformBlockBinding(Z,Ae,D.__bindingPointIndex),u.set(Z,Ae))}function Ye(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},he=null,le={},m={},g=new WeakMap,p=[],d=null,x=!1,E=null,y=null,S=null,T=null,R=null,z=null,v=null,L=!1,F=null,$=null,ce=null,k=null,U=null,xe.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ae,disable:ne,bindFramebuffer:ve,drawBuffers:_e,useProgram:Ee,setBlending:H,setMaterial:X,setFlipSided:K,setCullFace:ue,setLineWidth:de,setPolygonOffset:ie,setScissorTest:pe,activeTexture:oe,bindTexture:M,unbindTexture:_,compressedTexImage2D:O,compressedTexImage3D:j,texImage2D:Te,texImage3D:Se,updateUBOMapping:Re,uniformBlockBinding:ze,texStorage2D:N,texStorage3D:be,texSubImage2D:Q,texSubImage3D:fe,compressedTexSubImage2D:Me,compressedTexSubImage3D:C,scissor:Ce,viewport:we,reset:Ye}}function oy(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(M,_){return x?new OffscreenCanvas(M,_):Ar("canvas")}function y(M,_,O,j){let Q=1;if((M.width>j||M.height>j)&&(Q=j/Math.max(M.width,M.height)),Q<1||_===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const fe=_?na:Math.floor,Me=fe(Q*M.width),C=fe(Q*M.height);p===void 0&&(p=E(Me,C));const N=O?E(Me,C):p;return N.width=Me,N.height=C,N.getContext("2d").drawImage(M,0,0,Me,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+Me+"x"+C+")."),N}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function S(M){return sc(M.width)&&sc(M.height)}function T(M){return o?!1:M.wrapS!==$t||M.wrapT!==$t||M.minFilter!==St&&M.minFilter!==zt}function R(M,_){return M.generateMipmaps&&_&&M.minFilter!==St&&M.minFilter!==zt}function z(M){n.generateMipmap(M)}function v(M,_,O,j,Q=!1){if(o===!1)return _;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let fe=_;return _===6403&&(O===5126&&(fe=33326),O===5131&&(fe=33325),O===5121&&(fe=33321)),_===33319&&(O===5126&&(fe=33328),O===5131&&(fe=33327),O===5121&&(fe=33323)),_===6408&&(O===5126&&(fe=34836),O===5131&&(fe=34842),O===5121&&(fe=j===$e&&Q===!1?35907:32856),O===32819&&(fe=32854),O===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function L(M,_,O){return R(M,O)===!0||M.isFramebufferTexture&&M.minFilter!==St&&M.minFilter!==zt?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function F(M){return M===St||M===Fl||M===Zs?9728:9729}function $(M){const _=M.target;_.removeEventListener("dispose",$),k(_),_.isVideoTexture&&g.delete(_)}function ce(M){const _=M.target;_.removeEventListener("dispose",ce),ee(_)}function k(M){const _=i.get(M);if(_.__webglInit===void 0)return;const O=M.source,j=d.get(O);if(j){const Q=j[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&U(M),Object.keys(j).length===0&&d.delete(O)}i.remove(M)}function U(M){const _=i.get(M);n.deleteTexture(_.__webglTexture);const O=M.source,j=d.get(O);delete j[_.__cacheKey],a.memory.textures--}function ee(M){const _=M.texture,O=i.get(M),j=i.get(_);if(j.__webglTexture!==void 0&&(n.deleteTexture(j.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)n.deleteFramebuffer(O.__webglFramebuffer[Q]),O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[Q]);else{if(n.deleteFramebuffer(O.__webglFramebuffer),O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let Q=0;Q<O.__webglColorRenderbuffer.length;Q++)O.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[Q]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let Q=0,fe=_.length;Q<fe;Q++){const Me=i.get(_[Q]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),a.memory.textures--),i.remove(_[Q])}i.remove(_),i.remove(M)}let re=0;function se(){re=0}function W(){const M=re;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),re+=1,M}function he(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.encoding),_.join()}function le(M,_){const O=i.get(M);if(M.isVideoTexture&&pe(M),M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){const j=M.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(O,M,_);return}}t.bindTexture(3553,O.__webglTexture,33984+_)}function Y(M,_){const O=i.get(M);if(M.version>0&&O.__version!==M.version){ne(O,M,_);return}t.bindTexture(35866,O.__webglTexture,33984+_)}function q(M,_){const O=i.get(M);if(M.version>0&&O.__version!==M.version){ne(O,M,_);return}t.bindTexture(32879,O.__webglTexture,33984+_)}function xe(M,_){const O=i.get(M);if(M.version>0&&O.__version!==M.version){ve(O,M,_);return}t.bindTexture(34067,O.__webglTexture,33984+_)}const ge={[Qo]:10497,[$t]:33071,[ea]:33648},I={[St]:9728,[Fl]:9984,[Zs]:9986,[zt]:9729,[$m]:9985,[wr]:9987};function P(M,_,O){if(O?(n.texParameteri(M,10242,ge[_.wrapS]),n.texParameteri(M,10243,ge[_.wrapT]),(M===32879||M===35866)&&n.texParameteri(M,32882,ge[_.wrapR]),n.texParameteri(M,10240,I[_.magFilter]),n.texParameteri(M,10241,I[_.minFilter])):(n.texParameteri(M,10242,33071),n.texParameteri(M,10243,33071),(M===32879||M===35866)&&n.texParameteri(M,32882,33071),(_.wrapS!==$t||_.wrapT!==$t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,10240,F(_.magFilter)),n.texParameteri(M,10241,F(_.minFilter)),_.minFilter!==St&&_.minFilter!==zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===St||_.minFilter!==Zs&&_.minFilter!==wr||_.type===ni&&e.has("OES_texture_float_linear")===!1||o===!1&&_.type===Er&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(M,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function ae(M,_){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",$));const j=_.source;let Q=d.get(j);Q===void 0&&(Q={},d.set(j,Q));const fe=he(_);if(fe!==M.__cacheKey){Q[fe]===void 0&&(Q[fe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[fe].usedTimes++;const Me=Q[M.__cacheKey];Me!==void 0&&(Q[M.__cacheKey].usedTimes--,Me.usedTimes===0&&U(_)),M.__cacheKey=fe,M.__webglTexture=Q[fe].texture}return O}function ne(M,_,O){let j=3553;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=35866),_.isData3DTexture&&(j=32879);const Q=ae(M,_),fe=_.source;t.bindTexture(j,M.__webglTexture,33984+O);const Me=i.get(fe);if(fe.version!==Me.__version||Q===!0){t.activeTexture(33984+O),n.pixelStorei(37440,_.flipY),n.pixelStorei(37441,_.premultiplyAlpha),n.pixelStorei(3317,_.unpackAlignment),n.pixelStorei(37443,0);const C=T(_)&&S(_.image)===!1;let N=y(_.image,C,!1,u);N=oe(_,N);const be=S(N)||o,Te=s.convert(_.format,_.encoding);let Se=s.convert(_.type),Ce=v(_.internalFormat,Te,Se,_.encoding,_.isVideoTexture);P(j,_,be);let we;const Re=_.mipmaps,ze=o&&_.isVideoTexture!==!0,Ye=Me.__version===void 0||Q===!0,D=L(_,N,be);if(_.isDepthTexture)Ce=6402,o?_.type===ni?Ce=36012:_.type===ti?Ce=33190:_.type===Gi?Ce=35056:Ce=33189:_.type===ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===si&&Ce===6402&&_.type!==lf&&_.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=ti,Se=s.convert(_.type)),_.format===Yi&&Ce===6402&&(Ce=34041,_.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Gi,Se=s.convert(_.type))),Ye&&(ze?t.texStorage2D(3553,1,Ce,N.width,N.height):t.texImage2D(3553,0,Ce,N.width,N.height,0,Te,Se,null));else if(_.isDataTexture)if(Re.length>0&&be){ze&&Ye&&t.texStorage2D(3553,D,Ce,Re[0].width,Re[0].height);for(let Z=0,me=Re.length;Z<me;Z++)we=Re[Z],ze?t.texSubImage2D(3553,Z,0,0,we.width,we.height,Te,Se,we.data):t.texImage2D(3553,Z,Ce,we.width,we.height,0,Te,Se,we.data);_.generateMipmaps=!1}else ze?(Ye&&t.texStorage2D(3553,D,Ce,N.width,N.height),t.texSubImage2D(3553,0,0,0,N.width,N.height,Te,Se,N.data)):t.texImage2D(3553,0,Ce,N.width,N.height,0,Te,Se,N.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ze&&Ye&&t.texStorage3D(35866,D,Ce,Re[0].width,Re[0].height,N.depth);for(let Z=0,me=Re.length;Z<me;Z++)we=Re[Z],_.format!==Kt?Te!==null?ze?t.compressedTexSubImage3D(35866,Z,0,0,0,we.width,we.height,N.depth,Te,we.data,0,0):t.compressedTexImage3D(35866,Z,Ce,we.width,we.height,N.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage3D(35866,Z,0,0,0,we.width,we.height,N.depth,Te,Se,we.data):t.texImage3D(35866,Z,Ce,we.width,we.height,N.depth,0,Te,Se,we.data)}else{ze&&Ye&&t.texStorage2D(3553,D,Ce,Re[0].width,Re[0].height);for(let Z=0,me=Re.length;Z<me;Z++)we=Re[Z],_.format!==Kt?Te!==null?ze?t.compressedTexSubImage2D(3553,Z,0,0,we.width,we.height,Te,we.data):t.compressedTexImage2D(3553,Z,Ce,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage2D(3553,Z,0,0,we.width,we.height,Te,Se,we.data):t.texImage2D(3553,Z,Ce,we.width,we.height,0,Te,Se,we.data)}else if(_.isDataArrayTexture)ze?(Ye&&t.texStorage3D(35866,D,Ce,N.width,N.height,N.depth),t.texSubImage3D(35866,0,0,0,0,N.width,N.height,N.depth,Te,Se,N.data)):t.texImage3D(35866,0,Ce,N.width,N.height,N.depth,0,Te,Se,N.data);else if(_.isData3DTexture)ze?(Ye&&t.texStorage3D(32879,D,Ce,N.width,N.height,N.depth),t.texSubImage3D(32879,0,0,0,0,N.width,N.height,N.depth,Te,Se,N.data)):t.texImage3D(32879,0,Ce,N.width,N.height,N.depth,0,Te,Se,N.data);else if(_.isFramebufferTexture){if(Ye)if(ze)t.texStorage2D(3553,D,Ce,N.width,N.height);else{let Z=N.width,me=N.height;for(let Ae=0;Ae<D;Ae++)t.texImage2D(3553,Ae,Ce,Z,me,0,Te,Se,null),Z>>=1,me>>=1}}else if(Re.length>0&&be){ze&&Ye&&t.texStorage2D(3553,D,Ce,Re[0].width,Re[0].height);for(let Z=0,me=Re.length;Z<me;Z++)we=Re[Z],ze?t.texSubImage2D(3553,Z,0,0,Te,Se,we):t.texImage2D(3553,Z,Ce,Te,Se,we);_.generateMipmaps=!1}else ze?(Ye&&t.texStorage2D(3553,D,Ce,N.width,N.height),t.texSubImage2D(3553,0,0,0,Te,Se,N)):t.texImage2D(3553,0,Ce,Te,Se,N);R(_,be)&&z(j),Me.__version=fe.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function ve(M,_,O){if(_.image.length!==6)return;const j=ae(M,_),Q=_.source;t.bindTexture(34067,M.__webglTexture,33984+O);const fe=i.get(Q);if(Q.version!==fe.__version||j===!0){t.activeTexture(33984+O),n.pixelStorei(37440,_.flipY),n.pixelStorei(37441,_.premultiplyAlpha),n.pixelStorei(3317,_.unpackAlignment),n.pixelStorei(37443,0);const Me=_.isCompressedTexture||_.image[0].isCompressedTexture,C=_.image[0]&&_.image[0].isDataTexture,N=[];for(let Z=0;Z<6;Z++)!Me&&!C?N[Z]=y(_.image[Z],!1,!0,c):N[Z]=C?_.image[Z].image:_.image[Z],N[Z]=oe(_,N[Z]);const be=N[0],Te=S(be)||o,Se=s.convert(_.format,_.encoding),Ce=s.convert(_.type),we=v(_.internalFormat,Se,Ce,_.encoding),Re=o&&_.isVideoTexture!==!0,ze=fe.__version===void 0||j===!0;let Ye=L(_,be,Te);P(34067,_,Te);let D;if(Me){Re&&ze&&t.texStorage2D(34067,Ye,we,be.width,be.height);for(let Z=0;Z<6;Z++){D=N[Z].mipmaps;for(let me=0;me<D.length;me++){const Ae=D[me];_.format!==Kt?Se!==null?Re?t.compressedTexSubImage2D(34069+Z,me,0,0,Ae.width,Ae.height,Se,Ae.data):t.compressedTexImage2D(34069+Z,me,we,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+Z,me,0,0,Ae.width,Ae.height,Se,Ce,Ae.data):t.texImage2D(34069+Z,me,we,Ae.width,Ae.height,0,Se,Ce,Ae.data)}}}else{D=_.mipmaps,Re&&ze&&(D.length>0&&Ye++,t.texStorage2D(34067,Ye,we,N[0].width,N[0].height));for(let Z=0;Z<6;Z++)if(C){Re?t.texSubImage2D(34069+Z,0,0,0,N[Z].width,N[Z].height,Se,Ce,N[Z].data):t.texImage2D(34069+Z,0,we,N[Z].width,N[Z].height,0,Se,Ce,N[Z].data);for(let me=0;me<D.length;me++){const Le=D[me].image[Z].image;Re?t.texSubImage2D(34069+Z,me+1,0,0,Le.width,Le.height,Se,Ce,Le.data):t.texImage2D(34069+Z,me+1,we,Le.width,Le.height,0,Se,Ce,Le.data)}}else{Re?t.texSubImage2D(34069+Z,0,0,0,Se,Ce,N[Z]):t.texImage2D(34069+Z,0,we,Se,Ce,N[Z]);for(let me=0;me<D.length;me++){const Ae=D[me];Re?t.texSubImage2D(34069+Z,me+1,0,0,Se,Ce,Ae.image[Z]):t.texImage2D(34069+Z,me+1,we,Se,Ce,Ae.image[Z])}}}R(_,Te)&&z(34067),fe.__version=Q.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function _e(M,_,O,j,Q){const fe=s.convert(O.format,O.encoding),Me=s.convert(O.type),C=v(O.internalFormat,fe,Me,O.encoding);i.get(_).__hasExternalTextures||(Q===32879||Q===35866?t.texImage3D(Q,0,C,_.width,_.height,_.depth,0,fe,Me,null):t.texImage2D(Q,0,C,_.width,_.height,0,fe,Me,null)),t.bindFramebuffer(36160,M),ie(_)?h.framebufferTexture2DMultisampleEXT(36160,j,Q,i.get(O).__webglTexture,0,de(_)):(Q===3553||Q>=34069&&Q<=34074)&&n.framebufferTexture2D(36160,j,Q,i.get(O).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ee(M,_,O){if(n.bindRenderbuffer(36161,M),_.depthBuffer&&!_.stencilBuffer){let j=33189;if(O||ie(_)){const Q=_.depthTexture;Q&&Q.isDepthTexture&&(Q.type===ni?j=36012:Q.type===ti&&(j=33190));const fe=de(_);ie(_)?h.renderbufferStorageMultisampleEXT(36161,fe,j,_.width,_.height):n.renderbufferStorageMultisample(36161,fe,j,_.width,_.height)}else n.renderbufferStorage(36161,j,_.width,_.height);n.framebufferRenderbuffer(36160,36096,36161,M)}else if(_.depthBuffer&&_.stencilBuffer){const j=de(_);O&&ie(_)===!1?n.renderbufferStorageMultisample(36161,j,35056,_.width,_.height):ie(_)?h.renderbufferStorageMultisampleEXT(36161,j,35056,_.width,_.height):n.renderbufferStorage(36161,34041,_.width,_.height),n.framebufferRenderbuffer(36160,33306,36161,M)}else{const j=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let Q=0;Q<j.length;Q++){const fe=j[Q],Me=s.convert(fe.format,fe.encoding),C=s.convert(fe.type),N=v(fe.internalFormat,Me,C,fe.encoding),be=de(_);O&&ie(_)===!1?n.renderbufferStorageMultisample(36161,be,N,_.width,_.height):ie(_)?h.renderbufferStorageMultisampleEXT(36161,be,N,_.width,_.height):n.renderbufferStorage(36161,N,_.width,_.height)}}n.bindRenderbuffer(36161,null)}function b(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),le(_.depthTexture,0);const j=i.get(_.depthTexture).__webglTexture,Q=de(_);if(_.depthTexture.format===si)ie(_)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,j,0,Q):n.framebufferTexture2D(36160,36096,3553,j,0);else if(_.depthTexture.format===Yi)ie(_)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,j,0,Q):n.framebufferTexture2D(36160,33306,3553,j,0);else throw new Error("Unknown depthTexture format")}function A(M){const _=i.get(M),O=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");b(_.__webglFramebuffer,M)}else if(O){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(36160,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]=n.createRenderbuffer(),Ee(_.__webglDepthbuffer[j],M,!1)}else t.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),Ee(_.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function H(M,_,O){const j=i.get(M);_!==void 0&&_e(j.__webglFramebuffer,M,M.texture,36064,3553),O!==void 0&&A(M)}function X(M){const _=M.texture,O=i.get(M),j=i.get(_);M.addEventListener("dispose",ce),M.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=_.version,a.memory.textures++);const Q=M.isWebGLCubeRenderTarget===!0,fe=M.isWebGLMultipleRenderTargets===!0,Me=S(M)||o;if(Q){O.__webglFramebuffer=[];for(let C=0;C<6;C++)O.__webglFramebuffer[C]=n.createFramebuffer()}else{if(O.__webglFramebuffer=n.createFramebuffer(),fe)if(r.drawBuffers){const C=M.texture;for(let N=0,be=C.length;N<be;N++){const Te=i.get(C[N]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&ie(M)===!1){const C=fe?_:[_];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,O.__webglMultisampledFramebuffer);for(let N=0;N<C.length;N++){const be=C[N];O.__webglColorRenderbuffer[N]=n.createRenderbuffer(),n.bindRenderbuffer(36161,O.__webglColorRenderbuffer[N]);const Te=s.convert(be.format,be.encoding),Se=s.convert(be.type),Ce=v(be.internalFormat,Te,Se,be.encoding,M.isXRRenderTarget===!0),we=de(M);n.renderbufferStorageMultisample(36161,we,Ce,M.width,M.height),n.framebufferRenderbuffer(36160,36064+N,36161,O.__webglColorRenderbuffer[N])}n.bindRenderbuffer(36161,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(O.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}}if(Q){t.bindTexture(34067,j.__webglTexture),P(34067,_,Me);for(let C=0;C<6;C++)_e(O.__webglFramebuffer[C],M,_,36064,34069+C);R(_,Me)&&z(34067),t.unbindTexture()}else if(fe){const C=M.texture;for(let N=0,be=C.length;N<be;N++){const Te=C[N],Se=i.get(Te);t.bindTexture(3553,Se.__webglTexture),P(3553,Te,Me),_e(O.__webglFramebuffer,M,Te,36064+N,3553),R(Te,Me)&&z(3553)}t.unbindTexture()}else{let C=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?C=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(C,j.__webglTexture),P(C,_,Me),_e(O.__webglFramebuffer,M,_,36064,C),R(_,Me)&&z(C),t.unbindTexture()}M.depthBuffer&&A(M)}function K(M){const _=S(M)||o,O=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let j=0,Q=O.length;j<Q;j++){const fe=O[j];if(R(fe,_)){const Me=M.isWebGLCubeRenderTarget?34067:3553,C=i.get(fe).__webglTexture;t.bindTexture(Me,C),z(Me),t.unbindTexture()}}}function ue(M){if(o&&M.samples>0&&ie(M)===!1){const _=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],O=M.width,j=M.height;let Q=16384;const fe=[],Me=M.stencilBuffer?33306:36096,C=i.get(M),N=M.isWebGLMultipleRenderTargets===!0;if(N)for(let be=0;be<_.length;be++)t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+be,36161,null),t.bindFramebuffer(36160,C.__webglFramebuffer),n.framebufferTexture2D(36009,36064+be,3553,null,0);t.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,C.__webglFramebuffer);for(let be=0;be<_.length;be++){fe.push(36064+be),M.depthBuffer&&fe.push(Me);const Te=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(Te===!1&&(M.depthBuffer&&(Q|=256),M.stencilBuffer&&(Q|=1024)),N&&n.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[be]),Te===!0&&(n.invalidateFramebuffer(36008,[Me]),n.invalidateFramebuffer(36009,[Me])),N){const Se=i.get(_[be]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Se,0)}n.blitFramebuffer(0,0,O,j,0,0,O,j,Q,9728),m&&n.invalidateFramebuffer(36008,fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),N)for(let be=0;be<_.length;be++){t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+be,36161,C.__webglColorRenderbuffer[be]);const Te=i.get(_[be]).__webglTexture;t.bindFramebuffer(36160,C.__webglFramebuffer),n.framebufferTexture2D(36009,36064+be,3553,Te,0)}t.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function de(M){return Math.min(f,M.samples)}function ie(M){const _=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function pe(M){const _=a.render.frame;g.get(M)!==_&&(g.set(M,_),M.update())}function oe(M,_){const O=M.encoding,j=M.format,Q=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===ta||O!==ui&&(O===$e?o===!1?e.has("EXT_sRGB")===!0&&j===Kt?(M.format=ta,M.minFilter=zt,M.generateMipmaps=!1):_=ff.sRGBToLinear(_):(j!==Kt||Q!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",O)),_}this.allocateTextureUnit=W,this.resetTextureUnits=se,this.setTexture2D=le,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=xe,this.rebindTextures=H,this.setupRenderTarget=X,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=A,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ie}function ay(n,e,t){const i=t.isWebGL2;function r(s,a=null){let o;if(s===ci)return 5121;if(s===Qm)return 32819;if(s===eg)return 32820;if(s===Km)return 5120;if(s===Zm)return 5122;if(s===lf)return 5123;if(s===Jm)return 5124;if(s===ti)return 5125;if(s===ni)return 5126;if(s===Er)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===tg)return 6406;if(s===Kt)return 6408;if(s===ig)return 6409;if(s===rg)return 6410;if(s===si)return 6402;if(s===Yi)return 34041;if(s===ng)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===ta)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===sg)return 6403;if(s===og)return 36244;if(s===ag)return 33319;if(s===lg)return 33320;if(s===cg)return 36249;if(s===Js||s===Qs||s===eo||s===to)if(a===$e)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Js)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===eo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===to)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Js)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Qs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===eo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===to)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ol||s===Nl||s===Ul||s===zl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ol)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Nl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ul)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ug)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Bl||s===kl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Bl)return a===$e?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===kl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gl||s===Hl||s===Vl||s===Wl||s===ql||s===Xl||s===jl||s===Yl||s===$l||s===Kl||s===Zl||s===Jl||s===Ql||s===ec)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Gl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Wl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ql)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===jl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Yl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===$l)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Kl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Jl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ql)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ec)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===tc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===tc)return a===$e?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Gi?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class ly extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class os extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cy={type:"move"};class Lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,i),x=this._getHandJoint(c,p);d!==null&&(x.matrix.fromArray(d.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=d.radius),x.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cy)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new os;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class uy extends Tt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:si,u!==si&&u!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===si&&(i=ti),i===void 0&&u===Yi&&(i=Gi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:St,this.minFilter=l!==void 0?l:St,this.flipY=!1,this.generateMipmaps=!1}}class fy extends pi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,f=null,h=null,m=null;const g=t.getContextAttributes();let p=null,d=null;const x=[],E=[],y=new Set,S=new Map,T=new Bt;T.layers.enable(1),T.viewport=new ft;const R=new Bt;R.layers.enable(2),R.viewport=new ft;const z=[T,R],v=new ly;v.layers.enable(1),v.layers.enable(2);let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let q=x[Y];return q===void 0&&(q=new Lo,x[Y]=q),q.getTargetRaySpace()},this.getControllerGrip=function(Y){let q=x[Y];return q===void 0&&(q=new Lo,x[Y]=q),q.getGripSpace()},this.getHand=function(Y){let q=x[Y];return q===void 0&&(q=new Lo,x[Y]=q),q.getHandSpace()};function $(Y){const q=E.indexOf(Y.inputSource);if(q===-1)return;const xe=x[q];xe!==void 0&&xe.dispatchEvent({type:Y.type,data:Y.inputSource})}function ce(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",ce),r.removeEventListener("inputsourceschange",k);for(let Y=0;Y<x.length;Y++){const q=E[Y];q!==null&&(E[Y]=null,x[Y].disconnect(q))}L=null,F=null,e.setRenderTarget(p),h=null,f=null,u=null,r=null,d=null,le.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",ce),r.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:h}),d=new fi(h.framebufferWidth,h.framebufferHeight,{format:Kt,type:ci,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let q=null,xe=null,ge=null;g.depth&&(ge=g.stencil?35056:33190,q=g.stencil?Yi:si,xe=g.stencil?Gi:ti);const I={colorFormat:32856,depthFormat:ge,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(I),r.updateRenderState({layers:[f]}),d=new fi(f.textureWidth,f.textureHeight,{format:Kt,type:ci,depthTexture:new uy(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const P=e.properties.get(d);P.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function k(Y){for(let q=0;q<Y.removed.length;q++){const xe=Y.removed[q],ge=E.indexOf(xe);ge>=0&&(E[ge]=null,x[ge].disconnect(xe))}for(let q=0;q<Y.added.length;q++){const xe=Y.added[q];let ge=E.indexOf(xe);if(ge===-1){for(let P=0;P<x.length;P++)if(P>=E.length){E.push(xe),ge=P;break}else if(E[P]===null){E[P]=xe,ge=P;break}if(ge===-1)break}const I=x[ge];I&&I.connect(xe)}}const U=new V,ee=new V;function re(Y,q,xe){U.setFromMatrixPosition(q.matrixWorld),ee.setFromMatrixPosition(xe.matrixWorld);const ge=U.distanceTo(ee),I=q.projectionMatrix.elements,P=xe.projectionMatrix.elements,ae=I[14]/(I[10]-1),ne=I[14]/(I[10]+1),ve=(I[9]+1)/I[5],_e=(I[9]-1)/I[5],Ee=(I[8]-1)/I[0],b=(P[8]+1)/P[0],A=ae*Ee,H=ae*b,X=ge/(-Ee+b),K=X*-Ee;q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(K),Y.translateZ(X),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const ue=ae+X,de=ne+X,ie=A-K,pe=H+(ge-K),oe=ve*ne/de*ue,M=_e*ne/de*ue;Y.projectionMatrix.makePerspective(ie,pe,oe,M,ue,de)}function se(Y,q){q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;v.near=R.near=T.near=Y.near,v.far=R.far=T.far=Y.far,(L!==v.near||F!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),L=v.near,F=v.far);const q=Y.parent,xe=v.cameras;se(v,q);for(let I=0;I<xe.length;I++)se(xe[I],q);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),Y.matrix.copy(v.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale);const ge=Y.children;for(let I=0,P=ge.length;I<P;I++)ge[I].updateMatrixWorld(!0);xe.length===2?re(v,T,R):v.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(Y){f!==null&&(f.fixedFoveation=Y),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Y)},this.getPlanes=function(){return y};let W=null;function he(Y,q){if(c=q.getViewerPose(l||a),m=q,c!==null){const xe=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let ge=!1;xe.length!==v.cameras.length&&(v.cameras.length=0,ge=!0);for(let I=0;I<xe.length;I++){const P=xe[I];let ae=null;if(h!==null)ae=h.getViewport(P);else{const ve=u.getViewSubImage(f,P);ae=ve.viewport,I===0&&(e.setRenderTargetTextures(d,ve.colorTexture,f.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(d))}let ne=z[I];ne===void 0&&(ne=new Bt,ne.layers.enable(I),ne.viewport=new ft,z[I]=ne),ne.matrix.fromArray(P.transform.matrix),ne.projectionMatrix.fromArray(P.projectionMatrix),ne.viewport.set(ae.x,ae.y,ae.width,ae.height),I===0&&v.matrix.copy(ne.matrix),ge===!0&&v.cameras.push(ne)}}for(let xe=0;xe<x.length;xe++){const ge=E[xe],I=x[xe];ge!==null&&I!==void 0&&I.update(ge,q,l||a)}if(W&&W(Y,q),q.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let xe=null;for(const ge of y)q.detectedPlanes.has(ge)||(xe===null&&(xe=[]),xe.push(ge));if(xe!==null)for(const ge of xe)y.delete(ge),S.delete(ge),i.dispatchEvent({type:"planeremoved",data:ge});for(const ge of q.detectedPlanes)if(!y.has(ge))y.add(ge),S.set(ge,q.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ge});else{const I=S.get(ge);ge.lastChangedTime>I&&(S.set(ge,ge.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ge}))}}m=null}const le=new bf;le.setAnimationLoop(he),this.setAnimationLoop=function(Y){W=Y},this.dispose=function(){}}}function hy(n,e){function t(p,d){d.color.getRGB(p.fogColor.value,vf(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,x,E,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),c(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,y)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),g(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?o(p,d,x,E):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Vt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Vt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const x=e.get(d).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const S=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*S}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let E;d.map?E=d.map:d.specularMap?E=d.specularMap:d.displacementMap?E=d.displacementMap:d.normalMap?E=d.normalMap:d.bumpMap?E=d.bumpMap:d.roughnessMap?E=d.roughnessMap:d.metalnessMap?E=d.metalnessMap:d.alphaMap?E=d.alphaMap:d.emissiveMap?E=d.emissiveMap:d.clearcoatMap?E=d.clearcoatMap:d.clearcoatNormalMap?E=d.clearcoatNormalMap:d.clearcoatRoughnessMap?E=d.clearcoatRoughnessMap:d.iridescenceMap?E=d.iridescenceMap:d.iridescenceThicknessMap?E=d.iridescenceThicknessMap:d.specularIntensityMap?E=d.specularIntensityMap:d.specularColorMap?E=d.specularColorMap:d.transmissionMap?E=d.transmissionMap:d.thicknessMap?E=d.thicknessMap:d.sheenColorMap?E=d.sheenColorMap:d.sheenRoughnessMap&&(E=d.sheenRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix));let y;d.aoMap?y=d.aoMap:d.lightMap&&(y=d.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function o(p,d,x,E){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*x,p.scale.value=E*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let y;d.map?y=d.map:d.alphaMap&&(y=d.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let x;d.map?x=d.map:d.alphaMap&&(x=d.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,x){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Vt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function dy(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(35375):0;function l(E,y){const S=y.program;i.uniformBlockBinding(E,S)}function c(E,y){let S=r[E.id];S===void 0&&(g(E),S=u(E),r[E.id]=S,E.addEventListener("dispose",d));const T=y.program;i.updateUBOMapping(E,T);const R=e.render.frame;s[E.id]!==R&&(h(E),s[E.id]=R)}function u(E){const y=f();E.__bindingPointIndex=y;const S=n.createBuffer(),T=E.__size,R=E.usage;return n.bindBuffer(35345,S),n.bufferData(35345,T,R),n.bindBuffer(35345,null),n.bindBufferBase(35345,y,S),S}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const y=r[E.id],S=E.uniforms,T=E.__cache;n.bindBuffer(35345,y);for(let R=0,z=S.length;R<z;R++){const v=S[R];if(m(v,R,T)===!0){const L=v.__offset,F=Array.isArray(v.value)?v.value:[v.value];let $=0;for(let ce=0;ce<F.length;ce++){const k=F[ce],U=p(k);typeof k=="number"?(v.__data[0]=k,n.bufferSubData(35345,L+$,v.__data)):k.isMatrix3?(v.__data[0]=k.elements[0],v.__data[1]=k.elements[1],v.__data[2]=k.elements[2],v.__data[3]=k.elements[0],v.__data[4]=k.elements[3],v.__data[5]=k.elements[4],v.__data[6]=k.elements[5],v.__data[7]=k.elements[0],v.__data[8]=k.elements[6],v.__data[9]=k.elements[7],v.__data[10]=k.elements[8],v.__data[11]=k.elements[0]):(k.toArray(v.__data,$),$+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,L,v.__data)}}n.bindBuffer(35345,null)}function m(E,y,S){const T=E.value;if(S[y]===void 0){if(typeof T=="number")S[y]=T;else{const R=Array.isArray(T)?T:[T],z=[];for(let v=0;v<R.length;v++)z.push(R[v].clone());S[y]=z}return!0}else if(typeof T=="number"){if(S[y]!==T)return S[y]=T,!0}else{const R=Array.isArray(S[y])?S[y]:[S[y]],z=Array.isArray(T)?T:[T];for(let v=0;v<R.length;v++){const L=R[v];if(L.equals(z[v])===!1)return L.copy(z[v]),!0}}return!1}function g(E){const y=E.uniforms;let S=0;const T=16;let R=0;for(let z=0,v=y.length;z<v;z++){const L=y[z],F={boundary:0,storage:0},$=Array.isArray(L.value)?L.value:[L.value];for(let ce=0,k=$.length;ce<k;ce++){const U=$[ce],ee=p(U);F.boundary+=ee.boundary,F.storage+=ee.storage}if(L.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,z>0){R=S%T;const ce=T-R;R!==0&&ce-F.boundary<0&&(S+=T-R,L.__offset=S)}S+=F.storage}return R=S%T,R>0&&(S+=T-R),E.__size=S,E.__cache={},this}function p(E){const y={boundary:0,storage:0};return typeof E=="number"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function d(E){const y=E.target;y.removeEventListener("dispose",d);const S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function x(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:x}}function py(){const n=Ar("canvas");return n.style.display="block",n}function my(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:py(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,o=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ui,this.physicallyCorrectLights=!1,this.toneMapping=Mn,this.toneMappingExposure=1;const p=this;let d=!1,x=0,E=0,y=null,S=-1,T=null;const R=new ft,z=new ft;let v=null,L=e.width,F=e.height,$=1,ce=null,k=null;const U=new ft(0,0,L,F),ee=new ft(0,0,L,F);let re=!1;const se=new Da;let W=!1,he=!1,le=null;const Y=new rt,q=new Ue,xe=new V,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function I(){return y===null?$:1}let P=t;function ae(w,G){for(let J=0;J<w.length;J++){const B=w[J],te=e.getContext(B,G);if(te!==null)return te}return null}try{const w={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pa}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",Re,!1),P===null){const G=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&G.shift(),P=ae(G,w),P===null)throw ae(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ne,ve,_e,Ee,b,A,H,X,K,ue,de,ie,pe,oe,M,_,O,j,Q,fe,Me,C,N,be;function Te(){ne=new Ex(P),ve=new vx(P,ne,n),ne.init(ve),C=new ay(P,ne,ve),_e=new sy(P,ne,ve),Ee=new Cx,b=new qv,A=new oy(P,ne,_e,b,ve,C,Ee),H=new Mx(p),X=new wx(p),K=new Ug(P,ve),N=new _x(P,ne,K,ve),ue=new Tx(P,K,Ee,N),de=new Dx(P,ue,K,Ee),Q=new Rx(P,ve,A),_=new yx(b),ie=new Wv(p,H,X,ne,ve,N,_),pe=new hy(p,b),oe=new jv,M=new Qv(ne,ve),j=new gx(p,H,X,_e,de,u,a),O=new ry(p,de,ve),be=new dy(P,Ee,ve,_e),fe=new xx(P,ne,Ee,ve),Me=new Ax(P,ne,Ee,ve),Ee.programs=ie.programs,p.capabilities=ve,p.extensions=ne,p.properties=b,p.renderLists=oe,p.shadowMap=O,p.state=_e,p.info=Ee}Te();const Se=new fy(p,P);this.xr=Se,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=ne.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ne.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(L,F,!1))},this.getSize=function(w){return w.set(L,F)},this.setSize=function(w,G,J){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=w,F=G,e.width=Math.floor(w*$),e.height=Math.floor(G*$),J!==!1&&(e.style.width=w+"px",e.style.height=G+"px"),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(L*$,F*$).floor()},this.setDrawingBufferSize=function(w,G,J){L=w,F=G,$=J,e.width=Math.floor(w*J),e.height=Math.floor(G*J),this.setViewport(0,0,w,G)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(U)},this.setViewport=function(w,G,J,B){w.isVector4?U.set(w.x,w.y,w.z,w.w):U.set(w,G,J,B),_e.viewport(R.copy(U).multiplyScalar($).floor())},this.getScissor=function(w){return w.copy(ee)},this.setScissor=function(w,G,J,B){w.isVector4?ee.set(w.x,w.y,w.z,w.w):ee.set(w,G,J,B),_e.scissor(z.copy(ee).multiplyScalar($).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(w){_e.setScissorTest(re=w)},this.setOpaqueSort=function(w){ce=w},this.setTransparentSort=function(w){k=w},this.getClearColor=function(w){return w.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(w=!0,G=!0,J=!0){let B=0;w&&(B|=16384),G&&(B|=256),J&&(B|=1024),P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",Re,!1),oe.dispose(),M.dispose(),b.dispose(),H.dispose(),X.dispose(),de.dispose(),N.dispose(),be.dispose(),ie.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Ae),Se.removeEventListener("sessionend",Le),le&&(le.dispose(),le=null),Xe.stop()};function Ce(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const w=Ee.autoReset,G=O.enabled,J=O.autoUpdate,B=O.needsUpdate,te=O.type;Te(),Ee.autoReset=w,O.enabled=G,O.autoUpdate=J,O.needsUpdate=B,O.type=te}function Re(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ze(w){const G=w.target;G.removeEventListener("dispose",ze),Ye(G)}function Ye(w){D(w),b.remove(w)}function D(w){const G=b.get(w).programs;G!==void 0&&(G.forEach(function(J){ie.releaseProgram(J)}),w.isShaderMaterial&&ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,J,B,te,Pe){G===null&&(G=ge);const De=te.isMesh&&te.matrixWorld.determinant()<0,Ne=If(w,G,J,B,te);_e.setMaterial(B,De);let Be=J.index,We=1;B.wireframe===!0&&(Be=ue.getWireframeAttribute(J),We=2);const ke=J.drawRange,Ge=J.attributes.position;let tt=ke.start*We,Ct=(ke.start+ke.count)*We;Pe!==null&&(tt=Math.max(tt,Pe.start*We),Ct=Math.min(Ct,(Pe.start+Pe.count)*We)),Be!==null?(tt=Math.max(tt,0),Ct=Math.min(Ct,Be.count)):Ge!=null&&(tt=Math.max(tt,0),Ct=Math.min(Ct,Ge.count));const un=Ct-tt;if(un<0||un===1/0)return;N.setup(te,B,Ne,J,Be);let kn,nt=fe;if(Be!==null&&(kn=K.get(Be),nt=Me,nt.setIndex(kn)),te.isMesh)B.wireframe===!0?(_e.setLineWidth(B.wireframeLinewidth*I()),nt.setMode(1)):nt.setMode(4);else if(te.isLine){let He=B.linewidth;He===void 0&&(He=1),_e.setLineWidth(He*I()),te.isLineSegments?nt.setMode(1):te.isLineLoop?nt.setMode(2):nt.setMode(3)}else te.isPoints?nt.setMode(0):te.isSprite&&nt.setMode(4);if(te.isInstancedMesh)nt.renderInstances(tt,un,te.count);else if(J.isInstancedBufferGeometry){const He=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ns=Math.min(J.instanceCount,He);nt.renderInstances(tt,un,Ns)}else nt.render(tt,un)},this.compile=function(w,G){function J(B,te,Pe){B.transparent===!0&&B.side===kr?(B.side=Vt,B.needsUpdate=!0,Ot(B,te,Pe),B.side=li,B.needsUpdate=!0,Ot(B,te,Pe),B.side=kr):Ot(B,te,Pe)}h=M.get(w),h.init(),g.push(h),w.traverseVisible(function(B){B.isLight&&B.layers.test(G.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights(p.physicallyCorrectLights),w.traverse(function(B){const te=B.material;if(te)if(Array.isArray(te))for(let Pe=0;Pe<te.length;Pe++){const De=te[Pe];J(De,w,B)}else J(te,w,B)}),g.pop(),h=null};let Z=null;function me(w){Z&&Z(w)}function Ae(){Xe.stop()}function Le(){Xe.start()}const Xe=new bf;Xe.setAnimationLoop(me),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(w){Z=w,Se.setAnimationLoop(w),w===null?Xe.stop():Xe.start()},Se.addEventListener("sessionstart",Ae),Se.addEventListener("sessionend",Le),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(G),G=Se.getCamera()),w.isScene===!0&&w.onBeforeRender(p,w,G,y),h=M.get(w,g.length),h.init(),g.push(h),Y.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),se.setFromProjectionMatrix(Y),he=this.localClippingEnabled,W=_.init(this.clippingPlanes,he,G),f=oe.get(w,m.length),f.init(),m.push(f),lt(w,G,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(ce,k),W===!0&&_.beginShadows();const J=h.state.shadowsArray;if(O.render(J,w,G),W===!0&&_.endShadows(),this.info.autoReset===!0&&this.info.reset(),j.render(f,w),h.setupLights(p.physicallyCorrectLights),G.isArrayCamera){const B=G.cameras;for(let te=0,Pe=B.length;te<Pe;te++){const De=B[te];pt(f,w,De,De.viewport)}}else pt(f,w,G);y!==null&&(A.updateMultisampleRenderTarget(y),A.updateRenderTargetMipmap(y)),w.isScene===!0&&w.onAfterRender(p,w,G),N.resetDefaultState(),S=-1,T=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function lt(w,G,J,B){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||se.intersectsSprite(w)){B&&xe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Y);const De=de.update(w),Ne=w.material;Ne.visible&&f.push(w,De,Ne,J,xe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Ee.render.frame&&(w.skeleton.update(),w.skeleton.frame=Ee.render.frame),!w.frustumCulled||se.intersectsObject(w))){B&&xe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Y);const De=de.update(w),Ne=w.material;if(Array.isArray(Ne)){const Be=De.groups;for(let We=0,ke=Be.length;We<ke;We++){const Ge=Be[We],tt=Ne[Ge.materialIndex];tt&&tt.visible&&f.push(w,De,tt,J,xe.z,Ge)}}else Ne.visible&&f.push(w,De,Ne,J,xe.z,null)}}const Pe=w.children;for(let De=0,Ne=Pe.length;De<Ne;De++)lt(Pe[De],G,J,B)}function pt(w,G,J,B){const te=w.opaque,Pe=w.transmissive,De=w.transparent;h.setupLightsView(J),Pe.length>0&&Bn(te,G,J),B&&_e.viewport(R.copy(B)),te.length>0&&Ze(te,G,J),Pe.length>0&&Ze(Pe,G,J),De.length>0&&Ze(De,G,J),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Bn(w,G,J){const B=ve.isWebGL2;le===null&&(le=new fi(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")?Er:ci,minFilter:wr,samples:B&&s===!0?4:0})),p.getDrawingBufferSize(q),B?le.setSize(q.x,q.y):le.setSize(na(q.x),na(q.y));const te=p.getRenderTarget();p.setRenderTarget(le),p.clear();const Pe=p.toneMapping;p.toneMapping=Mn,Ze(w,G,J),p.toneMapping=Pe,A.updateMultisampleRenderTarget(le),A.updateRenderTargetMipmap(le),p.setRenderTarget(te)}function Ze(w,G,J){const B=G.isScene===!0?G.overrideMaterial:null;for(let te=0,Pe=w.length;te<Pe;te++){const De=w[te],Ne=De.object,Be=De.geometry,We=B===null?De.material:B,ke=De.group;Ne.layers.test(J.layers)&&cn(Ne,G,J,Be,We,ke)}}function cn(w,G,J,B,te,Pe){w.onBeforeRender(p,G,J,B,te,Pe),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),te.onBeforeRender(p,G,J,B,w,Pe),te.transparent===!0&&te.side===kr?(te.side=Vt,te.needsUpdate=!0,p.renderBufferDirect(J,G,B,te,w,Pe),te.side=li,te.needsUpdate=!0,p.renderBufferDirect(J,G,B,te,w,Pe),te.side=kr):p.renderBufferDirect(J,G,B,te,w,Pe),w.onAfterRender(p,G,J,B,te,Pe)}function Ot(w,G,J){G.isScene!==!0&&(G=ge);const B=b.get(w),te=h.state.lights,Pe=h.state.shadowsArray,De=te.state.version,Ne=ie.getParameters(w,te.state,Pe,G,J),Be=ie.getProgramCacheKey(Ne);let We=B.programs;B.environment=w.isMeshStandardMaterial?G.environment:null,B.fog=G.fog,B.envMap=(w.isMeshStandardMaterial?X:H).get(w.envMap||B.environment),We===void 0&&(w.addEventListener("dispose",ze),We=new Map,B.programs=We);let ke=We.get(Be);if(ke!==void 0){if(B.currentProgram===ke&&B.lightsStateVersion===De)return Oa(w,Ne),ke}else Ne.uniforms=ie.getUniforms(w),w.onBuild(J,Ne,p),w.onBeforeCompile(Ne,p),ke=ie.acquireProgram(Ne,Be),We.set(Be,ke),B.uniforms=Ne.uniforms;const Ge=B.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ge.clippingPlanes=_.uniform),Oa(w,Ne),B.needsLights=Of(w),B.lightsStateVersion=De,B.needsLights&&(Ge.ambientLightColor.value=te.state.ambient,Ge.lightProbe.value=te.state.probe,Ge.directionalLights.value=te.state.directional,Ge.directionalLightShadows.value=te.state.directionalShadow,Ge.spotLights.value=te.state.spot,Ge.spotLightShadows.value=te.state.spotShadow,Ge.rectAreaLights.value=te.state.rectArea,Ge.ltc_1.value=te.state.rectAreaLTC1,Ge.ltc_2.value=te.state.rectAreaLTC2,Ge.pointLights.value=te.state.point,Ge.pointLightShadows.value=te.state.pointShadow,Ge.hemisphereLights.value=te.state.hemi,Ge.directionalShadowMap.value=te.state.directionalShadowMap,Ge.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ge.spotShadowMap.value=te.state.spotShadowMap,Ge.spotLightMatrix.value=te.state.spotLightMatrix,Ge.spotLightMap.value=te.state.spotLightMap,Ge.pointShadowMap.value=te.state.pointShadowMap,Ge.pointShadowMatrix.value=te.state.pointShadowMatrix);const tt=ke.getUniforms(),Ct=ms.seqWithValue(tt.seq,Ge);return B.currentProgram=ke,B.uniformsList=Ct,ke}function Oa(w,G){const J=b.get(w);J.outputEncoding=G.outputEncoding,J.instancing=G.instancing,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function If(w,G,J,B,te){G.isScene!==!0&&(G=ge),A.resetTextureUnits();const Pe=G.fog,De=B.isMeshStandardMaterial?G.environment:null,Ne=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:ui,Be=(B.isMeshStandardMaterial?X:H).get(B.envMap||De),We=B.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ke=!!B.normalMap&&!!J.attributes.tangent,Ge=!!J.morphAttributes.position,tt=!!J.morphAttributes.normal,Ct=!!J.morphAttributes.color,un=B.toneMapped?p.toneMapping:Mn,kn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,nt=kn!==void 0?kn.length:0,He=b.get(B),Ns=h.state.lights;if(W===!0&&(he===!0||w!==T)){const Lt=w===T&&B.id===S;_.setState(B,w,Lt)}let ct=!1;B.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Ns.state.version||He.outputEncoding!==Ne||te.isInstancedMesh&&He.instancing===!1||!te.isInstancedMesh&&He.instancing===!0||te.isSkinnedMesh&&He.skinning===!1||!te.isSkinnedMesh&&He.skinning===!0||He.envMap!==Be||B.fog===!0&&He.fog!==Pe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==_.numPlanes||He.numIntersection!==_.numIntersection)||He.vertexAlphas!==We||He.vertexTangents!==ke||He.morphTargets!==Ge||He.morphNormals!==tt||He.morphColors!==Ct||He.toneMapping!==un||ve.isWebGL2===!0&&He.morphTargetsCount!==nt)&&(ct=!0):(ct=!0,He.__version=B.version);let Gn=He.currentProgram;ct===!0&&(Gn=Ot(B,G,te));let Na=!1,er=!1,Us=!1;const vt=Gn.getUniforms(),Hn=He.uniforms;if(_e.useProgram(Gn.program)&&(Na=!0,er=!0,Us=!0),B.id!==S&&(S=B.id,er=!0),Na||T!==w){if(vt.setValue(P,"projectionMatrix",w.projectionMatrix),ve.logarithmicDepthBuffer&&vt.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),T!==w&&(T=w,er=!0,Us=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const Lt=vt.map.cameraPosition;Lt!==void 0&&Lt.setValue(P,xe.setFromMatrixPosition(w.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&vt.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||te.isSkinnedMesh)&&vt.setValue(P,"viewMatrix",w.matrixWorldInverse)}if(te.isSkinnedMesh){vt.setOptional(P,te,"bindMatrix"),vt.setOptional(P,te,"bindMatrixInverse");const Lt=te.skeleton;Lt&&(ve.floatVertexTextures?(Lt.boneTexture===null&&Lt.computeBoneTexture(),vt.setValue(P,"boneTexture",Lt.boneTexture,A),vt.setValue(P,"boneTextureSize",Lt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const zs=J.morphAttributes;if((zs.position!==void 0||zs.normal!==void 0||zs.color!==void 0&&ve.isWebGL2===!0)&&Q.update(te,J,B,Gn),(er||He.receiveShadow!==te.receiveShadow)&&(He.receiveShadow=te.receiveShadow,vt.setValue(P,"receiveShadow",te.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Hn.envMap.value=Be,Hn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),er&&(vt.setValue(P,"toneMappingExposure",p.toneMappingExposure),He.needsLights&&Ff(Hn,Us),Pe&&B.fog===!0&&pe.refreshFogUniforms(Hn,Pe),pe.refreshMaterialUniforms(Hn,B,$,F,le),ms.upload(P,He.uniformsList,Hn,A)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ms.upload(P,He.uniformsList,Hn,A),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&vt.setValue(P,"center",te.center),vt.setValue(P,"modelViewMatrix",te.modelViewMatrix),vt.setValue(P,"normalMatrix",te.normalMatrix),vt.setValue(P,"modelMatrix",te.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Lt=B.uniformsGroups;for(let Bs=0,Nf=Lt.length;Bs<Nf;Bs++)if(ve.isWebGL2){const Ua=Lt[Bs];be.update(Ua,Gn),be.bind(Ua,Gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gn}function Ff(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function Of(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(w,G,J){b.get(w.texture).__webglTexture=G,b.get(w.depthTexture).__webglTexture=J;const B=b.get(w);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=J===void 0,B.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,G){const J=b.get(w);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(w,G=0,J=0){y=w,x=G,E=J;let B=!0,te=null,Pe=!1,De=!1;if(w){const Be=b.get(w);Be.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(36160,null),B=!1):Be.__webglFramebuffer===void 0?A.setupRenderTarget(w):Be.__hasExternalTextures&&A.rebindTextures(w,b.get(w.texture).__webglTexture,b.get(w.depthTexture).__webglTexture);const We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(De=!0);const ke=b.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(te=ke[G],Pe=!0):ve.isWebGL2&&w.samples>0&&A.useMultisampledRTT(w)===!1?te=b.get(w).__webglMultisampledFramebuffer:te=ke,R.copy(w.viewport),z.copy(w.scissor),v=w.scissorTest}else R.copy(U).multiplyScalar($).floor(),z.copy(ee).multiplyScalar($).floor(),v=re;if(_e.bindFramebuffer(36160,te)&&ve.drawBuffers&&B&&_e.drawBuffers(w,te),_e.viewport(R),_e.scissor(z),_e.setScissorTest(v),Pe){const Be=b.get(w.texture);P.framebufferTexture2D(36160,36064,34069+G,Be.__webglTexture,J)}else if(De){const Be=b.get(w.texture),We=G||0;P.framebufferTextureLayer(36160,36064,Be.__webglTexture,J||0,We)}S=-1},this.readRenderTargetPixels=function(w,G,J,B,te,Pe,De){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne){_e.bindFramebuffer(36160,Ne);try{const Be=w.texture,We=Be.format,ke=Be.type;if(We!==Kt&&C.convert(We)!==P.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=ke===Er&&(ne.has("EXT_color_buffer_half_float")||ve.isWebGL2&&ne.has("EXT_color_buffer_float"));if(ke!==ci&&C.convert(ke)!==P.getParameter(35738)&&!(ke===ni&&(ve.isWebGL2||ne.has("OES_texture_float")||ne.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-B&&J>=0&&J<=w.height-te&&P.readPixels(G,J,B,te,C.convert(We),C.convert(ke),Pe)}finally{const Be=y!==null?b.get(y).__webglFramebuffer:null;_e.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(w,G,J=0){const B=Math.pow(2,-J),te=Math.floor(G.image.width*B),Pe=Math.floor(G.image.height*B);A.setTexture2D(G,0),P.copyTexSubImage2D(3553,J,0,0,w.x,w.y,te,Pe),_e.unbindTexture()},this.copyTextureToTexture=function(w,G,J,B=0){const te=G.image.width,Pe=G.image.height,De=C.convert(J.format),Ne=C.convert(J.type);A.setTexture2D(J,0),P.pixelStorei(37440,J.flipY),P.pixelStorei(37441,J.premultiplyAlpha),P.pixelStorei(3317,J.unpackAlignment),G.isDataTexture?P.texSubImage2D(3553,B,w.x,w.y,te,Pe,De,Ne,G.image.data):G.isCompressedTexture?P.compressedTexSubImage2D(3553,B,w.x,w.y,G.mipmaps[0].width,G.mipmaps[0].height,De,G.mipmaps[0].data):P.texSubImage2D(3553,B,w.x,w.y,De,Ne,G.image),B===0&&J.generateMipmaps&&P.generateMipmap(3553),_e.unbindTexture()},this.copyTextureToTexture3D=function(w,G,J,B,te=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=w.max.x-w.min.x+1,De=w.max.y-w.min.y+1,Ne=w.max.z-w.min.z+1,Be=C.convert(B.format),We=C.convert(B.type);let ke;if(B.isData3DTexture)A.setTexture3D(B,0),ke=32879;else if(B.isDataArrayTexture)A.setTexture2DArray(B,0),ke=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(37440,B.flipY),P.pixelStorei(37441,B.premultiplyAlpha),P.pixelStorei(3317,B.unpackAlignment);const Ge=P.getParameter(3314),tt=P.getParameter(32878),Ct=P.getParameter(3316),un=P.getParameter(3315),kn=P.getParameter(32877),nt=J.isCompressedTexture?J.mipmaps[0]:J.image;P.pixelStorei(3314,nt.width),P.pixelStorei(32878,nt.height),P.pixelStorei(3316,w.min.x),P.pixelStorei(3315,w.min.y),P.pixelStorei(32877,w.min.z),J.isDataTexture||J.isData3DTexture?P.texSubImage3D(ke,te,G.x,G.y,G.z,Pe,De,Ne,Be,We,nt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(ke,te,G.x,G.y,G.z,Pe,De,Ne,Be,nt.data)):P.texSubImage3D(ke,te,G.x,G.y,G.z,Pe,De,Ne,Be,We,nt),P.pixelStorei(3314,Ge),P.pixelStorei(32878,tt),P.pixelStorei(3316,Ct),P.pixelStorei(3315,un),P.pixelStorei(32877,kn),te===0&&B.generateMipmaps&&P.generateMipmap(ke),_e.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),_e.unbindTexture()},this.resetState=function(){x=0,E=0,y=null,_e.reset(),N.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Cf extends my{}Cf.prototype.isWebGL1Renderer=!0;class gy extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Lf extends Dr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zc=new rt,ra=new pf,as=new Fs,ls=new V;class _y extends ht{constructor(e=new wn,t=new Lf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),as.copy(i.boundingSphere),as.applyMatrix4(r),as.radius+=s,e.ray.intersectsSphere(as)===!1)return;zc.copy(r).invert(),ra.copy(e.ray).applyMatrix4(zc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=h,p=m;g<p;g++){const d=c.getX(g);ls.fromBufferAttribute(f,d),Bc(ls,d,l,r,e,t,this)}}else{const h=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let g=h,p=m;g<p;g++)ls.fromBufferAttribute(f,g),Bc(ls,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Bc(n,e,t,i,r,s,a){const o=ra.distanceSqToPoint(n);if(o<t){const l=new V;ra.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}const kc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class xy{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const vy=new xy;class Pf{constructor(e){this.manager=e!==void 0?e:vy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class yy extends Pf{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=kc.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Ar("img");function l(){u(),kc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class My extends Pf{constructor(e){super(e)}load(e,t,i,r){const s=new Tt,a=new yy(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Rf extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Po=new rt,Gc=new V,Hc=new V;class by{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Da,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Gc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gc),Hc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hc),t.updateMatrixWorld(),Po.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Po),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Po)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Sy extends by{constructor(){super(new Sf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wy extends Rf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DefaultUp),this.updateMatrix(),this.target=new ht,this.shadow=new Sy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ey extends Rf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Vc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pa);const Wc={type:"change"},Ro={type:"start"},qc={type:"end"};class Ty extends pi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gi.ROTATE,MIDDLE:gi.DOLLY,RIGHT:gi.PAN},this.touches={ONE:_i.ROTATE,TWO:_i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",oe),this._domElementKeyEvents=C},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Wc),i.update(),s=r.NONE},this.update=function(){const C=new V,N=new hi().setFromUnitVectors(e.up,new V(0,1,0)),be=N.clone().invert(),Te=new V,Se=new hi,Ce=2*Math.PI;return function(){const Re=i.object.position;C.copy(Re).sub(i.target),C.applyQuaternion(N),o.setFromVector3(C),i.autoRotate&&s===r.NONE&&L(z()),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ze=i.minAzimuthAngle,Ye=i.maxAzimuthAngle;return isFinite(ze)&&isFinite(Ye)&&(ze<-Math.PI?ze+=Ce:ze>Math.PI&&(ze-=Ce),Ye<-Math.PI?Ye+=Ce:Ye>Math.PI&&(Ye-=Ce),ze<=Ye?o.theta=Math.max(ze,Math.min(Ye,o.theta)):o.theta=o.theta>(ze+Ye)/2?Math.max(ze,o.theta):Math.min(Ye,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(i.minDistance,Math.min(i.maxDistance,o.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),C.setFromSpherical(o),C.applyQuaternion(be),Re.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||Te.distanceToSquared(i.object.position)>a||8*(1-Se.dot(i.object.quaternion))>a?(i.dispatchEvent(Wc),Te.copy(i.object.position),Se.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",O),i.domElement.removeEventListener("pointerdown",H),i.domElement.removeEventListener("pointercancel",ue),i.domElement.removeEventListener("wheel",pe),i.domElement.removeEventListener("pointermove",X),i.domElement.removeEventListener("pointerup",K),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",oe)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Vc,l=new Vc;let c=1;const u=new V;let f=!1;const h=new Ue,m=new Ue,g=new Ue,p=new Ue,d=new Ue,x=new Ue,E=new Ue,y=new Ue,S=new Ue,T=[],R={};function z(){return 2*Math.PI/60/60*i.autoRotateSpeed}function v(){return Math.pow(.95,i.zoomSpeed)}function L(C){l.theta-=C}function F(C){l.phi-=C}const $=function(){const C=new V;return function(be,Te){C.setFromMatrixColumn(Te,0),C.multiplyScalar(-be),u.add(C)}}(),ce=function(){const C=new V;return function(be,Te){i.screenSpacePanning===!0?C.setFromMatrixColumn(Te,1):(C.setFromMatrixColumn(Te,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(be),u.add(C)}}(),k=function(){const C=new V;return function(be,Te){const Se=i.domElement;if(i.object.isPerspectiveCamera){const Ce=i.object.position;C.copy(Ce).sub(i.target);let we=C.length();we*=Math.tan(i.object.fov/2*Math.PI/180),$(2*be*we/Se.clientHeight,i.object.matrix),ce(2*Te*we/Se.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?($(be*(i.object.right-i.object.left)/i.object.zoom/Se.clientWidth,i.object.matrix),ce(Te*(i.object.top-i.object.bottom)/i.object.zoom/Se.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function U(C){i.object.isPerspectiveCamera?c/=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*C)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ee(C){i.object.isPerspectiveCamera?c*=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/C)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function re(C){h.set(C.clientX,C.clientY)}function se(C){E.set(C.clientX,C.clientY)}function W(C){p.set(C.clientX,C.clientY)}function he(C){m.set(C.clientX,C.clientY),g.subVectors(m,h).multiplyScalar(i.rotateSpeed);const N=i.domElement;L(2*Math.PI*g.x/N.clientHeight),F(2*Math.PI*g.y/N.clientHeight),h.copy(m),i.update()}function le(C){y.set(C.clientX,C.clientY),S.subVectors(y,E),S.y>0?U(v()):S.y<0&&ee(v()),E.copy(y),i.update()}function Y(C){d.set(C.clientX,C.clientY),x.subVectors(d,p).multiplyScalar(i.panSpeed),k(x.x,x.y),p.copy(d),i.update()}function q(C){C.deltaY<0?ee(v()):C.deltaY>0&&U(v()),i.update()}function xe(C){let N=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?F(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,i.keyPanSpeed),N=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?F(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,-i.keyPanSpeed),N=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?L(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(i.keyPanSpeed,0),N=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?L(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(-i.keyPanSpeed,0),N=!0;break}N&&(C.preventDefault(),i.update())}function ge(){if(T.length===1)h.set(T[0].pageX,T[0].pageY);else{const C=.5*(T[0].pageX+T[1].pageX),N=.5*(T[0].pageY+T[1].pageY);h.set(C,N)}}function I(){if(T.length===1)p.set(T[0].pageX,T[0].pageY);else{const C=.5*(T[0].pageX+T[1].pageX),N=.5*(T[0].pageY+T[1].pageY);p.set(C,N)}}function P(){const C=T[0].pageX-T[1].pageX,N=T[0].pageY-T[1].pageY,be=Math.sqrt(C*C+N*N);E.set(0,be)}function ae(){i.enableZoom&&P(),i.enablePan&&I()}function ne(){i.enableZoom&&P(),i.enableRotate&&ge()}function ve(C){if(T.length==1)m.set(C.pageX,C.pageY);else{const be=Me(C),Te=.5*(C.pageX+be.x),Se=.5*(C.pageY+be.y);m.set(Te,Se)}g.subVectors(m,h).multiplyScalar(i.rotateSpeed);const N=i.domElement;L(2*Math.PI*g.x/N.clientHeight),F(2*Math.PI*g.y/N.clientHeight),h.copy(m)}function _e(C){if(T.length===1)d.set(C.pageX,C.pageY);else{const N=Me(C),be=.5*(C.pageX+N.x),Te=.5*(C.pageY+N.y);d.set(be,Te)}x.subVectors(d,p).multiplyScalar(i.panSpeed),k(x.x,x.y),p.copy(d)}function Ee(C){const N=Me(C),be=C.pageX-N.x,Te=C.pageY-N.y,Se=Math.sqrt(be*be+Te*Te);y.set(0,Se),S.set(0,Math.pow(y.y/E.y,i.zoomSpeed)),U(S.y),E.copy(y)}function b(C){i.enableZoom&&Ee(C),i.enablePan&&_e(C)}function A(C){i.enableZoom&&Ee(C),i.enableRotate&&ve(C)}function H(C){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",X),i.domElement.addEventListener("pointerup",K)),j(C),C.pointerType==="touch"?M(C):de(C))}function X(C){i.enabled!==!1&&(C.pointerType==="touch"?_(C):ie(C))}function K(C){Q(C),T.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",X),i.domElement.removeEventListener("pointerup",K)),i.dispatchEvent(qc),s=r.NONE}function ue(C){Q(C)}function de(C){let N;switch(C.button){case 0:N=i.mouseButtons.LEFT;break;case 1:N=i.mouseButtons.MIDDLE;break;case 2:N=i.mouseButtons.RIGHT;break;default:N=-1}switch(N){case gi.DOLLY:if(i.enableZoom===!1)return;se(C),s=r.DOLLY;break;case gi.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;W(C),s=r.PAN}else{if(i.enableRotate===!1)return;re(C),s=r.ROTATE}break;case gi.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;re(C),s=r.ROTATE}else{if(i.enablePan===!1)return;W(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ro)}function ie(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;he(C);break;case r.DOLLY:if(i.enableZoom===!1)return;le(C);break;case r.PAN:if(i.enablePan===!1)return;Y(C);break}}function pe(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(Ro),q(C),i.dispatchEvent(qc))}function oe(C){i.enabled===!1||i.enablePan===!1||xe(C)}function M(C){switch(fe(C),T.length){case 1:switch(i.touches.ONE){case _i.ROTATE:if(i.enableRotate===!1)return;ge(),s=r.TOUCH_ROTATE;break;case _i.PAN:if(i.enablePan===!1)return;I(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case _i.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ae(),s=r.TOUCH_DOLLY_PAN;break;case _i.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ne(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ro)}function _(C){switch(fe(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ve(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;_e(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;b(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;A(C),i.update();break;default:s=r.NONE}}function O(C){i.enabled!==!1&&C.preventDefault()}function j(C){T.push(C)}function Q(C){delete R[C.pointerId];for(let N=0;N<T.length;N++)if(T[N].pointerId==C.pointerId){T.splice(N,1);return}}function fe(C){let N=R[C.pointerId];N===void 0&&(N=new Ue,R[C.pointerId]=N),N.set(C.pageX,C.pageY)}function Me(C){const N=C.pointerId===T[0].pointerId?T[1]:T[0];return R[N.pointerId]}i.domElement.addEventListener("contextmenu",O),i.domElement.addEventListener("pointerdown",H),i.domElement.addEventListener("pointercancel",ue),i.domElement.addEventListener("wheel",pe,{passive:!1}),this.update()}}var Ay=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},sa={},Cy={get exports(){return sa},set exports(n){sa=n}};(function(n,e){(function(t,i){n.exports=i()})(Ay,function(){var t=function(){function i(m){return a.appendChild(m.dom),m}function r(m){for(var g=0;g<a.children.length;g++)a.children[g].style.display=g===m?"block":"none";s=m}var s=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(m){m.preventDefault(),r(++s%a.children.length)},!1);var o=(performance||Date).now(),l=o,c=0,u=i(new t.Panel("FPS","#0ff","#002")),f=i(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=i(new t.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:a,addPanel:i,showPanel:r,begin:function(){o=(performance||Date).now()},end:function(){c++;var m=(performance||Date).now();if(f.update(m-o,200),m>l+1e3&&(u.update(1e3*c/(m-l),100),l=m,c=0,h)){var g=performance.memory;h.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return m},update:function(){o=this.end()},domElement:a,setMode:r}};return t.Panel=function(i,r,s){var a=1/0,o=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,f=48*c,h=3*c,m=2*c,g=3*c,p=15*c,d=74*c,x=30*c,E=document.createElement("canvas");E.width=u,E.height=f,E.style.cssText="width:80px;height:48px";var y=E.getContext("2d");return y.font="bold "+9*c+"px Helvetica,Arial,sans-serif",y.textBaseline="top",y.fillStyle=s,y.fillRect(0,0,u,f),y.fillStyle=r,y.fillText(i,h,m),y.fillRect(g,p,d,x),y.fillStyle=s,y.globalAlpha=.9,y.fillRect(g,p,d,x),{dom:E,update:function(S,T){a=Math.min(a,S),o=Math.max(o,S),y.fillStyle=s,y.globalAlpha=1,y.fillRect(0,0,u,p),y.fillStyle=r,y.fillText(l(S)+" "+i+" ("+l(a)+"-"+l(o)+")",h,m),y.drawImage(E,g+c,p,d-c,x,g,p,d-c,x),y.fillRect(g+d-c,p,c,x),y.fillStyle=s,y.globalAlpha=.9,y.fillRect(g+d-c,p,c,l((1-S/T)*x))}}},t})})(Cy);const Ly=sa,Py=""+new URL("rain-a48adeaf.png",import.meta.url).href,Ry=Sa({__name:"raining",setup(n){const e=cu(null);let t=new gy,i,r,s,a,o;const l=5e3;Ma(()=>{c(e.value.clientWidth,e.value.clientHeight),u(e.value.clientWidth,e.value.clientHeight),h(),m(),g(),f(),p()});const c=(d,x)=>{i=new Bt(75,d/x,.1,40),i.position.set(0,0,40),t.add(i)},u=(d,x)=>{r=new Cf,r.setSize(d,x),e.value.appendChild(r.domElement),r.render(t,i)},f=()=>{a=new Ly,e.value.appendChild(a.dom)},h=()=>{let d=new Ey(4210752);t.add(d);let x=new wy(16777215);x.position.set(1,1,1),t.add(x)},m=()=>{s=new Ty(i,r.domElement),s.enableDamping=!0,s.enableZoom=!0,s.autoRotate=!1,s.enablePan=!0},g=()=>{if(s.update(),r.render(t,i),a&&a.update(),o){const d=o.geometry.getAttribute("position").array;for(let x=0;x<l*3;x+=3)d[x+1]-=Math.random()*.5,d[x+1]<-40&&(d[x+1]=40);o.geometry.getAttribute("position").needsUpdate=!0}requestAnimationFrame(g)},p=()=>{let d=new wn,x=new Float32Array(l*3);for(let T=0;T<l*3;T++)x[T]=(Math.random()-.5)*100;d.setAttribute("position",new Qt(x,3));let y=new My().load(Py),S=new Lf({size:1,transparent:!0,opacity:.5,vertexColors:!1,sizeAttenuation:!0,color:15592941,depthTest:!0,depthWrite:!1,map:y,alphaMap:y,blending:$o});o=new _y(d,S),t.add(o)};return window.addEventListener("resize",()=>{i.aspect=e.value.clientWidth/e.value.clientHeight,i.updateProjectionMatrix(),r.setSize(e.value.clientWidth,e.value.clientHeight),r.setPixelRatio(window.devicePixelRatio)}),(d,x)=>(Uu(),zu("div",{id:"canvas",ref_key:"canvas",ref:e},null,512))}});let Dy=[{path:"/raining",name:"raining",component:Ry}];const Iy=xm({history:Fp(),routes:Dy}),Df=up(mp);Df.use(Iy);Df.mount("#app");
