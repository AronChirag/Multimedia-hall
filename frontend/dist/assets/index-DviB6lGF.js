const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AdminDashboard-BXNADzlW.js","assets/Navbar-BHlzaeW1.js","assets/Navbar-ClotraD6.css","assets/StatusBadge-Iey9UjJd.js","assets/StatusBadge-Dq6_462X.css","assets/Dashboard-Ce5L_S5r.js","assets/Dashboard-CuoUlIKR.css","assets/AdminRequests-D1z2SHXA.js","assets/PageBackButton-C7MTZ5mG.js","assets/PageBackButton-79jBHDV3.css","assets/AdminRequests-CQW3PA3o.css","assets/AllBookings-CuqVIZk0.js","assets/fileHelpers-BIkSkuhr.js","assets/colleges-C4I4IHtO.js","assets/CalendarView-NFYEvLoq.js","assets/CalendarView-BmswrLwM.css","assets/Reports-B1u30o_P.js","assets/Reports-CxMs_mkQ.css","assets/ChangePassword-BPzNXKul.js","assets/ChangePassword-DbFRLl0K.css","assets/UserDashboard-CYmh7NJy.js","assets/NewBooking-BJeAMcxi.js","assets/NewBooking-ChGpcxAD.css","assets/MyBookings-BHcRJK7p.js","assets/Login-DFOSFhtJ.js","assets/Login-DIXDP0VQ.css","assets/SupervisorLogin-Dh5P1EVQ.js","assets/ForgotPassword-9LR-y9Du.js","assets/ForgotPassword-Ca8k4XpD.css","assets/AboutDevelopers-BkIU_7ey.js","assets/AboutDevelopers-CyOCF9Eg.css"])))=>i.map(i=>d[i]);
function zI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function HI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vw={exports:{}},zu={},ww={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ma=Symbol.for("react.element"),WI=Symbol.for("react.portal"),qI=Symbol.for("react.fragment"),GI=Symbol.for("react.strict_mode"),KI=Symbol.for("react.profiler"),YI=Symbol.for("react.provider"),JI=Symbol.for("react.context"),XI=Symbol.for("react.forward_ref"),QI=Symbol.for("react.suspense"),ZI=Symbol.for("react.memo"),eC=Symbol.for("react.lazy"),Dg=Symbol.iterator;function tC(t){return t===null||typeof t!="object"?null:(t=Dg&&t[Dg]||t["@@iterator"],typeof t=="function"?t:null)}var Ew={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sw=Object.assign,Tw={};function As(t,e,n){this.props=t,this.context=e,this.refs=Tw,this.updater=n||Ew}As.prototype.isReactComponent={};As.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};As.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Iw(){}Iw.prototype=As.prototype;function Of(t,e,n){this.props=t,this.context=e,this.refs=Tw,this.updater=n||Ew}var bf=Of.prototype=new Iw;bf.constructor=Of;Sw(bf,As.prototype);bf.isPureReactComponent=!0;var Lg=Array.isArray,Cw=Object.prototype.hasOwnProperty,xf={current:null},kw={key:!0,ref:!0,__self:!0,__source:!0};function Rw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Cw.call(e,r)&&!kw.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ma,type:t,key:s,ref:o,props:i,_owner:xf.current}}function nC(t,e){return{$$typeof:ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Df(t){return typeof t=="object"&&t!==null&&t.$$typeof===ma}function rC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mg=/\/+/g;function Zc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?rC(""+t.key):e.toString(36)}function Tl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ma:case WI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Zc(o,0):r,Lg(i)?(n="",t!=null&&(n=t.replace(Mg,"$&/")+"/"),Tl(i,e,n,"",function(c){return c})):i!=null&&(Df(i)&&(i=nC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Mg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Lg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Zc(s,l);o+=Tl(s,e,n,u,i)}else if(u=tC(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Zc(s,l++),o+=Tl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xa(t,e,n){if(t==null)return t;var r=[],i=0;return Tl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function iC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gt={current:null},Il={transition:null},sC={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:Il,ReactCurrentOwner:xf};function Aw(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:Xa,forEach:function(t,e,n){Xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xa(t,function(){e++}),e},toArray:function(t){return Xa(t,function(e){return e})||[]},only:function(t){if(!Df(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=As;K.Fragment=qI;K.Profiler=KI;K.PureComponent=Of;K.StrictMode=GI;K.Suspense=QI;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sC;K.act=Aw;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Sw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Cw.call(e,u)&&!kw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ma,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t){return t={$$typeof:JI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:YI,_context:t},t.Consumer=t};K.createElement=Rw;K.createFactory=function(t){var e=Rw.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:XI,render:t}};K.isValidElement=Df;K.lazy=function(t){return{$$typeof:eC,_payload:{_status:-1,_result:t},_init:iC}};K.memo=function(t,e){return{$$typeof:ZI,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=Il.transition;Il.transition={};try{t()}finally{Il.transition=e}};K.unstable_act=Aw;K.useCallback=function(t,e){return gt.current.useCallback(t,e)};K.useContext=function(t){return gt.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return gt.current.useDeferredValue(t)};K.useEffect=function(t,e){return gt.current.useEffect(t,e)};K.useId=function(){return gt.current.useId()};K.useImperativeHandle=function(t,e,n){return gt.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return gt.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return gt.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return gt.current.useMemo(t,e)};K.useReducer=function(t,e,n){return gt.current.useReducer(t,e,n)};K.useRef=function(t){return gt.current.useRef(t)};K.useState=function(t){return gt.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return gt.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return gt.current.useTransition()};K.version="18.3.1";ww.exports=K;var L=ww.exports;const de=HI(L),oC=zI({__proto__:null,default:de},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aC=L,lC=Symbol.for("react.element"),uC=Symbol.for("react.fragment"),cC=Object.prototype.hasOwnProperty,hC=aC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dC={key:!0,ref:!0,__self:!0,__source:!0};function Nw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)cC.call(e,r)&&!dC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:lC,type:t,key:s,ref:o,props:i,_owner:hC.current}}zu.Fragment=uC;zu.jsx=Nw;zu.jsxs=Nw;vw.exports=zu;var B=vw.exports,nd={},Pw={exports:{}},Ft={},Ow={exports:{}},bw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,H){var G=j.length;j.push(H);e:for(;0<G;){var se=G-1>>>1,Q=j[se];if(0<i(Q,H))j[se]=H,j[G]=Q,G=se;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var H=j[0],G=j.pop();if(G!==H){j[0]=G;e:for(var se=0,Q=j.length,me=Q>>>1;se<me;){var vt=2*(se+1)-1,jt=j[vt],bn=vt+1,xn=j[bn];if(0>i(jt,G))bn<Q&&0>i(xn,jt)?(j[se]=xn,j[bn]=G,se=bn):(j[se]=jt,j[vt]=G,se=vt);else if(bn<Q&&0>i(xn,G))j[se]=xn,j[bn]=G,se=bn;else break e}}return H}function i(j,H){var G=j.sortIndex-H.sortIndex;return G!==0?G:j.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,f=null,m=3,k=!1,y=!1,C=!1,I=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(j){for(var H=n(c);H!==null;){if(H.callback===null)r(c);else if(H.startTime<=j)r(c),H.sortIndex=H.expirationTime,e(u,H);else break;H=n(c)}}function P(j){if(C=!1,E(j),!y)if(n(u)!==null)y=!0,X(M);else{var H=n(c);H!==null&&Ne(P,H.startTime-j)}}function M(j,H){y=!1,C&&(C=!1,w(_),_=-1),k=!0;var G=m;try{for(E(H),f=n(u);f!==null&&(!(f.expirationTime>H)||j&&!N());){var se=f.callback;if(typeof se=="function"){f.callback=null,m=f.priorityLevel;var Q=se(f.expirationTime<=H);H=t.unstable_now(),typeof Q=="function"?f.callback=Q:f===n(u)&&r(u),E(H)}else r(u);f=n(u)}if(f!==null)var me=!0;else{var vt=n(c);vt!==null&&Ne(P,vt.startTime-H),me=!1}return me}finally{f=null,m=G,k=!1}}var F=!1,S=null,_=-1,T=5,A=-1;function N(){return!(t.unstable_now()-A<T)}function O(){if(S!==null){var j=t.unstable_now();A=j;var H=!0;try{H=S(!0,j)}finally{H?R():(F=!1,S=null)}}else F=!1}var R;if(typeof v=="function")R=function(){v(O)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,je=J.port2;J.port1.onmessage=O,R=function(){je.postMessage(null)}}else R=function(){I(O,0)};function X(j){S=j,F||(F=!0,R())}function Ne(j,H){_=I(function(){j(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){y||k||(y=!0,X(M))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(j){switch(m){case 1:case 2:case 3:var H=3;break;default:H=m}var G=m;m=H;try{return j()}finally{m=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,H){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var G=m;m=j;try{return H()}finally{m=G}},t.unstable_scheduleCallback=function(j,H,G){var se=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?se+G:se):G=se,j){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=G+Q,j={id:d++,callback:H,priorityLevel:j,startTime:G,expirationTime:Q,sortIndex:-1},G>se?(j.sortIndex=G,e(c,j),n(u)===null&&j===n(c)&&(C?(w(_),_=-1):C=!0,Ne(P,G-se))):(j.sortIndex=Q,e(u,j),y||k||(y=!0,X(M))),j},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(j){var H=m;return function(){var G=m;m=H;try{return j.apply(this,arguments)}finally{m=G}}}})(bw);Ow.exports=bw;var fC=Ow.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pC=L,Mt=fC;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xw=new Set,Bo={};function Ai(t,e){ps(t,e),ps(t+"Capture",e)}function ps(t,e){for(Bo[t]=e,t=0;t<e.length;t++)xw.add(e[t])}var Kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rd=Object.prototype.hasOwnProperty,mC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fg={},Ug={};function gC(t){return rd.call(Ug,t)?!0:rd.call(Fg,t)?!1:mC.test(t)?Ug[t]=!0:(Fg[t]=!0,!1)}function _C(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function yC(t,e,n,r){if(e===null||typeof e>"u"||_C(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _t(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Je[t]=new _t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Je[e]=new _t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Je[t]=new _t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Je[t]=new _t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Je[t]=new _t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Je[t]=new _t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Je[t]=new _t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Je[t]=new _t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Je[t]=new _t(t,5,!1,t.toLowerCase(),null,!1,!1)});var Lf=/[\-:]([a-z])/g;function Mf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Lf,Mf);Je[e]=new _t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Lf,Mf);Je[e]=new _t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Lf,Mf);Je[e]=new _t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Je[t]=new _t(t,1,!1,t.toLowerCase(),null,!1,!1)});Je.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Je[t]=new _t(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ff(t,e,n,r){var i=Je.hasOwnProperty(e)?Je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(yC(e,n,i,r)&&(n=null),r||i===null?gC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var rr=pC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qa=Symbol.for("react.element"),Bi=Symbol.for("react.portal"),Vi=Symbol.for("react.fragment"),Uf=Symbol.for("react.strict_mode"),id=Symbol.for("react.profiler"),Dw=Symbol.for("react.provider"),Lw=Symbol.for("react.context"),jf=Symbol.for("react.forward_ref"),sd=Symbol.for("react.suspense"),od=Symbol.for("react.suspense_list"),Bf=Symbol.for("react.memo"),hr=Symbol.for("react.lazy"),Mw=Symbol.for("react.offscreen"),jg=Symbol.iterator;function eo(t){return t===null||typeof t!="object"?null:(t=jg&&t[jg]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,eh;function po(t){if(eh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);eh=e&&e[1]||""}return`
`+eh+t}var th=!1;function nh(t,e){if(!t||th)return"";th=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{th=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?po(t):""}function vC(t){switch(t.tag){case 5:return po(t.type);case 16:return po("Lazy");case 13:return po("Suspense");case 19:return po("SuspenseList");case 0:case 2:case 15:return t=nh(t.type,!1),t;case 11:return t=nh(t.type.render,!1),t;case 1:return t=nh(t.type,!0),t;default:return""}}function ad(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vi:return"Fragment";case Bi:return"Portal";case id:return"Profiler";case Uf:return"StrictMode";case sd:return"Suspense";case od:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Lw:return(t.displayName||"Context")+".Consumer";case Dw:return(t._context.displayName||"Context")+".Provider";case jf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bf:return e=t.displayName||null,e!==null?e:ad(t.type)||"Memo";case hr:e=t._payload,t=t._init;try{return ad(t(e))}catch{}}return null}function wC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ad(e);case 8:return e===Uf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function EC(t){var e=Fw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Za(t){t._valueTracker||(t._valueTracker=EC(t))}function Uw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Fw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ld(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function jw(t,e){e=e.checked,e!=null&&Ff(t,"checked",e,!1)}function ud(t,e){jw(t,e);var n=Lr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?cd(t,e.type,n):e.hasOwnProperty("defaultValue")&&cd(t,e.type,Lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function cd(t,e,n){(e!=="number"||Wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var mo=Array.isArray;function ns(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Lr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function hd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $g(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(mo(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Lr(n)}}function Bw(t,e){var n=Lr(e.value),r=Lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function zg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Vw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Vw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var el,$w=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(el=el||document.createElement("div"),el.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=el.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},SC=["Webkit","ms","Moz","O"];Object.keys(vo).forEach(function(t){SC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),vo[e]=vo[t]})});function zw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||vo.hasOwnProperty(t)&&vo[t]?(""+e).trim():e+"px"}function Hw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=zw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var TC=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fd(t,e){if(e){if(TC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function pd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var md=null;function Vf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gd=null,rs=null,is=null;function Hg(t){if(t=ya(t)){if(typeof gd!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Ku(e),gd(t.stateNode,t.type,e))}}function Ww(t){rs?is?is.push(t):is=[t]:rs=t}function qw(){if(rs){var t=rs,e=is;if(is=rs=null,Hg(t),e)for(t=0;t<e.length;t++)Hg(e[t])}}function Gw(t,e){return t(e)}function Kw(){}var rh=!1;function Yw(t,e,n){if(rh)return t(e,n);rh=!0;try{return Gw(t,e,n)}finally{rh=!1,(rs!==null||is!==null)&&(Kw(),qw())}}function $o(t,e){var n=t.stateNode;if(n===null)return null;var r=Ku(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var _d=!1;if(Kn)try{var to={};Object.defineProperty(to,"passive",{get:function(){_d=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{_d=!1}function IC(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var wo=!1,ql=null,Gl=!1,yd=null,CC={onError:function(t){wo=!0,ql=t}};function kC(t,e,n,r,i,s,o,l,u){wo=!1,ql=null,IC.apply(CC,arguments)}function RC(t,e,n,r,i,s,o,l,u){if(kC.apply(this,arguments),wo){if(wo){var c=ql;wo=!1,ql=null}else throw Error(U(198));Gl||(Gl=!0,yd=c)}}function Ni(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Jw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wg(t){if(Ni(t)!==t)throw Error(U(188))}function AC(t){var e=t.alternate;if(!e){if(e=Ni(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Wg(i),t;if(s===r)return Wg(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function Xw(t){return t=AC(t),t!==null?Qw(t):null}function Qw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Qw(t);if(e!==null)return e;t=t.sibling}return null}var Zw=Mt.unstable_scheduleCallback,qg=Mt.unstable_cancelCallback,NC=Mt.unstable_shouldYield,PC=Mt.unstable_requestPaint,be=Mt.unstable_now,OC=Mt.unstable_getCurrentPriorityLevel,$f=Mt.unstable_ImmediatePriority,e0=Mt.unstable_UserBlockingPriority,Kl=Mt.unstable_NormalPriority,bC=Mt.unstable_LowPriority,t0=Mt.unstable_IdlePriority,Hu=null,Cn=null;function xC(t){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(Hu,t,void 0,(t.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:MC,DC=Math.log,LC=Math.LN2;function MC(t){return t>>>=0,t===0?32:31-(DC(t)/LC|0)|0}var tl=64,nl=4194304;function go(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=go(l):(s&=o,s!==0&&(r=go(s)))}else o=n&~i,o!==0?r=go(o):s!==0&&(r=go(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dn(e),i=1<<n,r|=t[n],e&=~i;return r}function FC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function UC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-dn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=FC(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function vd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function n0(){var t=tl;return tl<<=1,!(tl&4194240)&&(tl=64),t}function ih(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dn(e),t[e]=n}function jC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-dn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function zf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function r0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var i0,Hf,s0,o0,a0,wd=!1,rl=[],Ir=null,Cr=null,kr=null,zo=new Map,Ho=new Map,pr=[],BC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gg(t,e){switch(t){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":kr=null;break;case"pointerover":case"pointerout":zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(e.pointerId)}}function no(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ya(e),e!==null&&Hf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function VC(t,e,n,r,i){switch(e){case"focusin":return Ir=no(Ir,t,e,n,r,i),!0;case"dragenter":return Cr=no(Cr,t,e,n,r,i),!0;case"mouseover":return kr=no(kr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return zo.set(s,no(zo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ho.set(s,no(Ho.get(s)||null,t,e,n,r,i)),!0}return!1}function l0(t){var e=ti(t.target);if(e!==null){var n=Ni(e);if(n!==null){if(e=n.tag,e===13){if(e=Jw(n),e!==null){t.blockedOn=e,a0(t.priority,function(){s0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Cl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ed(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);md=r,n.target.dispatchEvent(r),md=null}else return e=ya(n),e!==null&&Hf(e),t.blockedOn=n,!1;e.shift()}return!0}function Kg(t,e,n){Cl(t)&&n.delete(e)}function $C(){wd=!1,Ir!==null&&Cl(Ir)&&(Ir=null),Cr!==null&&Cl(Cr)&&(Cr=null),kr!==null&&Cl(kr)&&(kr=null),zo.forEach(Kg),Ho.forEach(Kg)}function ro(t,e){t.blockedOn===e&&(t.blockedOn=null,wd||(wd=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,$C)))}function Wo(t){function e(i){return ro(i,t)}if(0<rl.length){ro(rl[0],t);for(var n=1;n<rl.length;n++){var r=rl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ir!==null&&ro(Ir,t),Cr!==null&&ro(Cr,t),kr!==null&&ro(kr,t),zo.forEach(e),Ho.forEach(e),n=0;n<pr.length;n++)r=pr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<pr.length&&(n=pr[0],n.blockedOn===null);)l0(n),n.blockedOn===null&&pr.shift()}var ss=rr.ReactCurrentBatchConfig,Jl=!0;function zC(t,e,n,r){var i=ue,s=ss.transition;ss.transition=null;try{ue=1,Wf(t,e,n,r)}finally{ue=i,ss.transition=s}}function HC(t,e,n,r){var i=ue,s=ss.transition;ss.transition=null;try{ue=4,Wf(t,e,n,r)}finally{ue=i,ss.transition=s}}function Wf(t,e,n,r){if(Jl){var i=Ed(t,e,n,r);if(i===null)ph(t,e,r,Xl,n),Gg(t,r);else if(VC(i,t,e,n,r))r.stopPropagation();else if(Gg(t,r),e&4&&-1<BC.indexOf(t)){for(;i!==null;){var s=ya(i);if(s!==null&&i0(s),s=Ed(t,e,n,r),s===null&&ph(t,e,r,Xl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ph(t,e,r,null,n)}}var Xl=null;function Ed(t,e,n,r){if(Xl=null,t=Vf(r),t=ti(t),t!==null)if(e=Ni(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Jw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xl=t,null}function u0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(OC()){case $f:return 1;case e0:return 4;case Kl:case bC:return 16;case t0:return 536870912;default:return 16}default:return 16}}var wr=null,qf=null,kl=null;function c0(){if(kl)return kl;var t,e=qf,n=e.length,r,i="value"in wr?wr.value:wr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return kl=i.slice(t,1<r?1-r:void 0)}function Rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function il(){return!0}function Yg(){return!1}function Ut(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?il:Yg,this.isPropagationStopped=Yg,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),e}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gf=Ut(Ns),_a=Ae({},Ns,{view:0,detail:0}),WC=Ut(_a),sh,oh,io,Wu=Ae({},_a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(sh=t.screenX-io.screenX,oh=t.screenY-io.screenY):oh=sh=0,io=t),sh)},movementY:function(t){return"movementY"in t?t.movementY:oh}}),Jg=Ut(Wu),qC=Ae({},Wu,{dataTransfer:0}),GC=Ut(qC),KC=Ae({},_a,{relatedTarget:0}),ah=Ut(KC),YC=Ae({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),JC=Ut(YC),XC=Ae({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),QC=Ut(XC),ZC=Ae({},Ns,{data:0}),Xg=Ut(ZC),ek={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nk[t])?!!e[t]:!1}function Kf(){return rk}var ik=Ae({},_a,{key:function(t){if(t.key){var e=ek[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kf,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sk=Ut(ik),ok=Ae({},Wu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qg=Ut(ok),ak=Ae({},_a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kf}),lk=Ut(ak),uk=Ae({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),ck=Ut(uk),hk=Ae({},Wu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dk=Ut(hk),fk=[9,13,27,32],Yf=Kn&&"CompositionEvent"in window,Eo=null;Kn&&"documentMode"in document&&(Eo=document.documentMode);var pk=Kn&&"TextEvent"in window&&!Eo,h0=Kn&&(!Yf||Eo&&8<Eo&&11>=Eo),Zg=" ",e_=!1;function d0(t,e){switch(t){case"keyup":return fk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function f0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $i=!1;function mk(t,e){switch(t){case"compositionend":return f0(e);case"keypress":return e.which!==32?null:(e_=!0,Zg);case"textInput":return t=e.data,t===Zg&&e_?null:t;default:return null}}function gk(t,e){if($i)return t==="compositionend"||!Yf&&d0(t,e)?(t=c0(),kl=qf=wr=null,$i=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return h0&&e.locale!=="ko"?null:e.data;default:return null}}var _k={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function t_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_k[t.type]:e==="textarea"}function p0(t,e,n,r){Ww(r),e=Ql(e,"onChange"),0<e.length&&(n=new Gf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var So=null,qo=null;function yk(t){C0(t,0)}function qu(t){var e=Wi(t);if(Uw(e))return t}function vk(t,e){if(t==="change")return e}var m0=!1;if(Kn){var lh;if(Kn){var uh="oninput"in document;if(!uh){var n_=document.createElement("div");n_.setAttribute("oninput","return;"),uh=typeof n_.oninput=="function"}lh=uh}else lh=!1;m0=lh&&(!document.documentMode||9<document.documentMode)}function r_(){So&&(So.detachEvent("onpropertychange",g0),qo=So=null)}function g0(t){if(t.propertyName==="value"&&qu(qo)){var e=[];p0(e,qo,t,Vf(t)),Yw(yk,e)}}function wk(t,e,n){t==="focusin"?(r_(),So=e,qo=n,So.attachEvent("onpropertychange",g0)):t==="focusout"&&r_()}function Ek(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qu(qo)}function Sk(t,e){if(t==="click")return qu(e)}function Tk(t,e){if(t==="input"||t==="change")return qu(e)}function Ik(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gn=typeof Object.is=="function"?Object.is:Ik;function Go(t,e){if(gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!rd.call(e,i)||!gn(t[i],e[i]))return!1}return!0}function i_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function s_(t,e){var n=i_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=i_(n)}}function _0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function y0(){for(var t=window,e=Wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wl(t.document)}return e}function Jf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ck(t){var e=y0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_0(n.ownerDocument.documentElement,n)){if(r!==null&&Jf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=s_(n,s);var o=s_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var kk=Kn&&"documentMode"in document&&11>=document.documentMode,zi=null,Sd=null,To=null,Td=!1;function o_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Td||zi==null||zi!==Wl(r)||(r=zi,"selectionStart"in r&&Jf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),To&&Go(To,r)||(To=r,r=Ql(Sd,"onSelect"),0<r.length&&(e=new Gf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=zi)))}function sl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Hi={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionend:sl("Transition","TransitionEnd")},ch={},v0={};Kn&&(v0=document.createElement("div").style,"AnimationEvent"in window||(delete Hi.animationend.animation,delete Hi.animationiteration.animation,delete Hi.animationstart.animation),"TransitionEvent"in window||delete Hi.transitionend.transition);function Gu(t){if(ch[t])return ch[t];if(!Hi[t])return t;var e=Hi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in v0)return ch[t]=e[n];return t}var w0=Gu("animationend"),E0=Gu("animationiteration"),S0=Gu("animationstart"),T0=Gu("transitionend"),I0=new Map,a_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(t,e){I0.set(t,e),Ai(e,[t])}for(var hh=0;hh<a_.length;hh++){var dh=a_[hh],Rk=dh.toLowerCase(),Ak=dh[0].toUpperCase()+dh.slice(1);Ur(Rk,"on"+Ak)}Ur(w0,"onAnimationEnd");Ur(E0,"onAnimationIteration");Ur(S0,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(T0,"onTransitionEnd");ps("onMouseEnter",["mouseout","mouseover"]);ps("onMouseLeave",["mouseout","mouseover"]);ps("onPointerEnter",["pointerout","pointerover"]);ps("onPointerLeave",["pointerout","pointerover"]);Ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ai("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nk=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function l_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,RC(r,e,void 0,t),t.currentTarget=null}function C0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;l_(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;l_(i,l,c),s=u}}}if(Gl)throw t=yd,Gl=!1,yd=null,t}function _e(t,e){var n=e[Ad];n===void 0&&(n=e[Ad]=new Set);var r=t+"__bubble";n.has(r)||(k0(e,t,2,!1),n.add(r))}function fh(t,e,n){var r=0;e&&(r|=4),k0(n,t,r,e)}var ol="_reactListening"+Math.random().toString(36).slice(2);function Ko(t){if(!t[ol]){t[ol]=!0,xw.forEach(function(n){n!=="selectionchange"&&(Nk.has(n)||fh(n,!1,t),fh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ol]||(e[ol]=!0,fh("selectionchange",!1,e))}}function k0(t,e,n,r){switch(u0(e)){case 1:var i=zC;break;case 4:i=HC;break;default:i=Wf}n=i.bind(null,e,n,t),i=void 0,!_d||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ph(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ti(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Yw(function(){var c=s,d=Vf(n),f=[];e:{var m=I0.get(t);if(m!==void 0){var k=Gf,y=t;switch(t){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":k=sk;break;case"focusin":y="focus",k=ah;break;case"focusout":y="blur",k=ah;break;case"beforeblur":case"afterblur":k=ah;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Jg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=GC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=lk;break;case w0:case E0:case S0:k=JC;break;case T0:k=ck;break;case"scroll":k=WC;break;case"wheel":k=dk;break;case"copy":case"cut":case"paste":k=QC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Qg}var C=(e&4)!==0,I=!C&&t==="scroll",w=C?m!==null?m+"Capture":null:m;C=[];for(var v=c,E;v!==null;){E=v;var P=E.stateNode;if(E.tag===5&&P!==null&&(E=P,w!==null&&(P=$o(v,w),P!=null&&C.push(Yo(v,P,E)))),I)break;v=v.return}0<C.length&&(m=new k(m,y,null,n,d),f.push({event:m,listeners:C}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",m&&n!==md&&(y=n.relatedTarget||n.fromElement)&&(ti(y)||y[Yn]))break e;if((k||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,k?(y=n.relatedTarget||n.toElement,k=c,y=y?ti(y):null,y!==null&&(I=Ni(y),y!==I||y.tag!==5&&y.tag!==6)&&(y=null)):(k=null,y=c),k!==y)){if(C=Jg,P="onMouseLeave",w="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(C=Qg,P="onPointerLeave",w="onPointerEnter",v="pointer"),I=k==null?m:Wi(k),E=y==null?m:Wi(y),m=new C(P,v+"leave",k,n,d),m.target=I,m.relatedTarget=E,P=null,ti(d)===c&&(C=new C(w,v+"enter",y,n,d),C.target=E,C.relatedTarget=I,P=C),I=P,k&&y)t:{for(C=k,w=y,v=0,E=C;E;E=Ui(E))v++;for(E=0,P=w;P;P=Ui(P))E++;for(;0<v-E;)C=Ui(C),v--;for(;0<E-v;)w=Ui(w),E--;for(;v--;){if(C===w||w!==null&&C===w.alternate)break t;C=Ui(C),w=Ui(w)}C=null}else C=null;k!==null&&u_(f,m,k,C,!1),y!==null&&I!==null&&u_(f,I,y,C,!0)}}e:{if(m=c?Wi(c):window,k=m.nodeName&&m.nodeName.toLowerCase(),k==="select"||k==="input"&&m.type==="file")var M=vk;else if(t_(m))if(m0)M=Tk;else{M=Ek;var F=wk}else(k=m.nodeName)&&k.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=Sk);if(M&&(M=M(t,c))){p0(f,M,n,d);break e}F&&F(t,m,c),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&cd(m,"number",m.value)}switch(F=c?Wi(c):window,t){case"focusin":(t_(F)||F.contentEditable==="true")&&(zi=F,Sd=c,To=null);break;case"focusout":To=Sd=zi=null;break;case"mousedown":Td=!0;break;case"contextmenu":case"mouseup":case"dragend":Td=!1,o_(f,n,d);break;case"selectionchange":if(kk)break;case"keydown":case"keyup":o_(f,n,d)}var S;if(Yf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else $i?d0(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(h0&&n.locale!=="ko"&&($i||_!=="onCompositionStart"?_==="onCompositionEnd"&&$i&&(S=c0()):(wr=d,qf="value"in wr?wr.value:wr.textContent,$i=!0)),F=Ql(c,_),0<F.length&&(_=new Xg(_,t,null,n,d),f.push({event:_,listeners:F}),S?_.data=S:(S=f0(n),S!==null&&(_.data=S)))),(S=pk?mk(t,n):gk(t,n))&&(c=Ql(c,"onBeforeInput"),0<c.length&&(d=new Xg("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=S))}C0(f,e)})}function Yo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ql(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=$o(t,n),s!=null&&r.unshift(Yo(t,s,i)),s=$o(t,e),s!=null&&r.push(Yo(t,s,i))),t=t.return}return r}function Ui(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function u_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=$o(n,s),u!=null&&o.unshift(Yo(n,u,l))):i||(u=$o(n,s),u!=null&&o.push(Yo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Pk=/\r\n?/g,Ok=/\u0000|\uFFFD/g;function c_(t){return(typeof t=="string"?t:""+t).replace(Pk,`
`).replace(Ok,"")}function al(t,e,n){if(e=c_(e),c_(t)!==e&&n)throw Error(U(425))}function Zl(){}var Id=null,Cd=null;function kd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rd=typeof setTimeout=="function"?setTimeout:void 0,bk=typeof clearTimeout=="function"?clearTimeout:void 0,h_=typeof Promise=="function"?Promise:void 0,xk=typeof queueMicrotask=="function"?queueMicrotask:typeof h_<"u"?function(t){return h_.resolve(null).then(t).catch(Dk)}:Rd;function Dk(t){setTimeout(function(){throw t})}function mh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Wo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wo(e)}function Rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function d_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ps=Math.random().toString(36).slice(2),Sn="__reactFiber$"+Ps,Jo="__reactProps$"+Ps,Yn="__reactContainer$"+Ps,Ad="__reactEvents$"+Ps,Lk="__reactListeners$"+Ps,Mk="__reactHandles$"+Ps;function ti(t){var e=t[Sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Yn]||n[Sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=d_(t);t!==null;){if(n=t[Sn])return n;t=d_(t)}return e}t=n,n=t.parentNode}return null}function ya(t){return t=t[Sn]||t[Yn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Ku(t){return t[Jo]||null}var Nd=[],qi=-1;function jr(t){return{current:t}}function we(t){0>qi||(t.current=Nd[qi],Nd[qi]=null,qi--)}function pe(t,e){qi++,Nd[qi]=t.current,t.current=e}var Mr={},lt=jr(Mr),It=jr(!1),pi=Mr;function ms(t,e){var n=t.type.contextTypes;if(!n)return Mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ct(t){return t=t.childContextTypes,t!=null}function eu(){we(It),we(lt)}function f_(t,e,n){if(lt.current!==Mr)throw Error(U(168));pe(lt,e),pe(It,n)}function R0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,wC(t)||"Unknown",i));return Ae({},n,r)}function tu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,pi=lt.current,pe(lt,t),pe(It,It.current),!0}function p_(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=R0(t,e,pi),r.__reactInternalMemoizedMergedChildContext=t,we(It),we(lt),pe(lt,t)):we(It),pe(It,n)}var Un=null,Yu=!1,gh=!1;function A0(t){Un===null?Un=[t]:Un.push(t)}function Fk(t){Yu=!0,A0(t)}function Br(){if(!gh&&Un!==null){gh=!0;var t=0,e=ue;try{var n=Un;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Un=null,Yu=!1}catch(i){throw Un!==null&&(Un=Un.slice(t+1)),Zw($f,Br),i}finally{ue=e,gh=!1}}return null}var Gi=[],Ki=0,nu=null,ru=0,Ht=[],Wt=0,mi=null,Bn=1,Vn="";function Yr(t,e){Gi[Ki++]=ru,Gi[Ki++]=nu,nu=t,ru=e}function N0(t,e,n){Ht[Wt++]=Bn,Ht[Wt++]=Vn,Ht[Wt++]=mi,mi=t;var r=Bn;t=Vn;var i=32-dn(r)-1;r&=~(1<<i),n+=1;var s=32-dn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Bn=1<<32-dn(e)+i|n<<i|r,Vn=s+t}else Bn=1<<s|n<<i|r,Vn=t}function Xf(t){t.return!==null&&(Yr(t,1),N0(t,1,0))}function Qf(t){for(;t===nu;)nu=Gi[--Ki],Gi[Ki]=null,ru=Gi[--Ki],Gi[Ki]=null;for(;t===mi;)mi=Ht[--Wt],Ht[Wt]=null,Vn=Ht[--Wt],Ht[Wt]=null,Bn=Ht[--Wt],Ht[Wt]=null}var xt=null,bt=null,Te=!1,sn=null;function P0(t,e){var n=Gt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function m_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xt=t,bt=Rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xt=t,bt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=mi!==null?{id:Bn,overflow:Vn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xt=t,bt=null,!0):!1;default:return!1}}function Pd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Od(t){if(Te){var e=bt;if(e){var n=e;if(!m_(t,e)){if(Pd(t))throw Error(U(418));e=Rr(n.nextSibling);var r=xt;e&&m_(t,e)?P0(r,n):(t.flags=t.flags&-4097|2,Te=!1,xt=t)}}else{if(Pd(t))throw Error(U(418));t.flags=t.flags&-4097|2,Te=!1,xt=t}}}function g_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function ll(t){if(t!==xt)return!1;if(!Te)return g_(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!kd(t.type,t.memoizedProps)),e&&(e=bt)){if(Pd(t))throw O0(),Error(U(418));for(;e;)P0(t,e),e=Rr(e.nextSibling)}if(g_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){bt=Rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}bt=null}}else bt=xt?Rr(t.stateNode.nextSibling):null;return!0}function O0(){for(var t=bt;t;)t=Rr(t.nextSibling)}function gs(){bt=xt=null,Te=!1}function Zf(t){sn===null?sn=[t]:sn.push(t)}var Uk=rr.ReactCurrentBatchConfig;function so(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function ul(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function __(t){var e=t._init;return e(t._payload)}function b0(t){function e(w,v){if(t){var E=w.deletions;E===null?(w.deletions=[v],w.flags|=16):E.push(v)}}function n(w,v){if(!t)return null;for(;v!==null;)e(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function i(w,v){return w=Or(w,v),w.index=0,w.sibling=null,w}function s(w,v,E){return w.index=E,t?(E=w.alternate,E!==null?(E=E.index,E<v?(w.flags|=2,v):E):(w.flags|=2,v)):(w.flags|=1048576,v)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,v,E,P){return v===null||v.tag!==6?(v=Th(E,w.mode,P),v.return=w,v):(v=i(v,E),v.return=w,v)}function u(w,v,E,P){var M=E.type;return M===Vi?d(w,v,E.props.children,P,E.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===hr&&__(M)===v.type)?(P=i(v,E.props),P.ref=so(w,v,E),P.return=w,P):(P=Dl(E.type,E.key,E.props,null,w.mode,P),P.ref=so(w,v,E),P.return=w,P)}function c(w,v,E,P){return v===null||v.tag!==4||v.stateNode.containerInfo!==E.containerInfo||v.stateNode.implementation!==E.implementation?(v=Ih(E,w.mode,P),v.return=w,v):(v=i(v,E.children||[]),v.return=w,v)}function d(w,v,E,P,M){return v===null||v.tag!==7?(v=ui(E,w.mode,P,M),v.return=w,v):(v=i(v,E),v.return=w,v)}function f(w,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Th(""+v,w.mode,E),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qa:return E=Dl(v.type,v.key,v.props,null,w.mode,E),E.ref=so(w,null,v),E.return=w,E;case Bi:return v=Ih(v,w.mode,E),v.return=w,v;case hr:var P=v._init;return f(w,P(v._payload),E)}if(mo(v)||eo(v))return v=ui(v,w.mode,E,null),v.return=w,v;ul(w,v)}return null}function m(w,v,E,P){var M=v!==null?v.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return M!==null?null:l(w,v,""+E,P);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Qa:return E.key===M?u(w,v,E,P):null;case Bi:return E.key===M?c(w,v,E,P):null;case hr:return M=E._init,m(w,v,M(E._payload),P)}if(mo(E)||eo(E))return M!==null?null:d(w,v,E,P,null);ul(w,E)}return null}function k(w,v,E,P,M){if(typeof P=="string"&&P!==""||typeof P=="number")return w=w.get(E)||null,l(v,w,""+P,M);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Qa:return w=w.get(P.key===null?E:P.key)||null,u(v,w,P,M);case Bi:return w=w.get(P.key===null?E:P.key)||null,c(v,w,P,M);case hr:var F=P._init;return k(w,v,E,F(P._payload),M)}if(mo(P)||eo(P))return w=w.get(E)||null,d(v,w,P,M,null);ul(v,P)}return null}function y(w,v,E,P){for(var M=null,F=null,S=v,_=v=0,T=null;S!==null&&_<E.length;_++){S.index>_?(T=S,S=null):T=S.sibling;var A=m(w,S,E[_],P);if(A===null){S===null&&(S=T);break}t&&S&&A.alternate===null&&e(w,S),v=s(A,v,_),F===null?M=A:F.sibling=A,F=A,S=T}if(_===E.length)return n(w,S),Te&&Yr(w,_),M;if(S===null){for(;_<E.length;_++)S=f(w,E[_],P),S!==null&&(v=s(S,v,_),F===null?M=S:F.sibling=S,F=S);return Te&&Yr(w,_),M}for(S=r(w,S);_<E.length;_++)T=k(S,w,_,E[_],P),T!==null&&(t&&T.alternate!==null&&S.delete(T.key===null?_:T.key),v=s(T,v,_),F===null?M=T:F.sibling=T,F=T);return t&&S.forEach(function(N){return e(w,N)}),Te&&Yr(w,_),M}function C(w,v,E,P){var M=eo(E);if(typeof M!="function")throw Error(U(150));if(E=M.call(E),E==null)throw Error(U(151));for(var F=M=null,S=v,_=v=0,T=null,A=E.next();S!==null&&!A.done;_++,A=E.next()){S.index>_?(T=S,S=null):T=S.sibling;var N=m(w,S,A.value,P);if(N===null){S===null&&(S=T);break}t&&S&&N.alternate===null&&e(w,S),v=s(N,v,_),F===null?M=N:F.sibling=N,F=N,S=T}if(A.done)return n(w,S),Te&&Yr(w,_),M;if(S===null){for(;!A.done;_++,A=E.next())A=f(w,A.value,P),A!==null&&(v=s(A,v,_),F===null?M=A:F.sibling=A,F=A);return Te&&Yr(w,_),M}for(S=r(w,S);!A.done;_++,A=E.next())A=k(S,w,_,A.value,P),A!==null&&(t&&A.alternate!==null&&S.delete(A.key===null?_:A.key),v=s(A,v,_),F===null?M=A:F.sibling=A,F=A);return t&&S.forEach(function(O){return e(w,O)}),Te&&Yr(w,_),M}function I(w,v,E,P){if(typeof E=="object"&&E!==null&&E.type===Vi&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Qa:e:{for(var M=E.key,F=v;F!==null;){if(F.key===M){if(M=E.type,M===Vi){if(F.tag===7){n(w,F.sibling),v=i(F,E.props.children),v.return=w,w=v;break e}}else if(F.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===hr&&__(M)===F.type){n(w,F.sibling),v=i(F,E.props),v.ref=so(w,F,E),v.return=w,w=v;break e}n(w,F);break}else e(w,F);F=F.sibling}E.type===Vi?(v=ui(E.props.children,w.mode,P,E.key),v.return=w,w=v):(P=Dl(E.type,E.key,E.props,null,w.mode,P),P.ref=so(w,v,E),P.return=w,w=P)}return o(w);case Bi:e:{for(F=E.key;v!==null;){if(v.key===F)if(v.tag===4&&v.stateNode.containerInfo===E.containerInfo&&v.stateNode.implementation===E.implementation){n(w,v.sibling),v=i(v,E.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else e(w,v);v=v.sibling}v=Ih(E,w.mode,P),v.return=w,w=v}return o(w);case hr:return F=E._init,I(w,v,F(E._payload),P)}if(mo(E))return y(w,v,E,P);if(eo(E))return C(w,v,E,P);ul(w,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,v!==null&&v.tag===6?(n(w,v.sibling),v=i(v,E),v.return=w,w=v):(n(w,v),v=Th(E,w.mode,P),v.return=w,w=v),o(w)):n(w,v)}return I}var _s=b0(!0),x0=b0(!1),iu=jr(null),su=null,Yi=null,ep=null;function tp(){ep=Yi=su=null}function np(t){var e=iu.current;we(iu),t._currentValue=e}function bd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function os(t,e){su=t,ep=Yi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Et=!0),t.firstContext=null)}function Jt(t){var e=t._currentValue;if(ep!==t)if(t={context:t,memoizedValue:e,next:null},Yi===null){if(su===null)throw Error(U(308));Yi=t,su.dependencies={lanes:0,firstContext:t}}else Yi=Yi.next=t;return e}var ni=null;function rp(t){ni===null?ni=[t]:ni.push(t)}function D0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,rp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Jn(t,r)}function Jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dr=!1;function ip(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function L0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Jn(t,n)}return i=r.interleaved,i===null?(e.next=e,rp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Jn(t,n)}function Al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zf(t,n)}}function y_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ou(t,e,n,r){var i=t.updateQueue;dr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,k=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=t,C=l;switch(m=e,k=n,C.tag){case 1:if(y=C.payload,typeof y=="function"){f=y.call(k,f,m);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=C.payload,m=typeof y=="function"?y.call(k,f,m):y,m==null)break e;f=Ae({},f,m);break e;case 2:dr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else k={eventTime:k,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=k,u=f):d=d.next=k,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);_i|=o,t.lanes=o,t.memoizedState=f}}function v_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var va={},kn=jr(va),Xo=jr(va),Qo=jr(va);function ri(t){if(t===va)throw Error(U(174));return t}function sp(t,e){switch(pe(Qo,e),pe(Xo,t),pe(kn,va),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:dd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=dd(e,t)}we(kn),pe(kn,e)}function ys(){we(kn),we(Xo),we(Qo)}function M0(t){ri(Qo.current);var e=ri(kn.current),n=dd(e,t.type);e!==n&&(pe(Xo,t),pe(kn,n))}function op(t){Xo.current===t&&(we(kn),we(Xo))}var Ie=jr(0);function au(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _h=[];function ap(){for(var t=0;t<_h.length;t++)_h[t]._workInProgressVersionPrimary=null;_h.length=0}var Nl=rr.ReactCurrentDispatcher,yh=rr.ReactCurrentBatchConfig,gi=0,ke=null,Fe=null,Ve=null,lu=!1,Io=!1,Zo=0,jk=0;function et(){throw Error(U(321))}function lp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gn(t[n],e[n]))return!1;return!0}function up(t,e,n,r,i,s){if(gi=s,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Nl.current=t===null||t.memoizedState===null?zk:Hk,t=n(r,i),Io){s=0;do{if(Io=!1,Zo=0,25<=s)throw Error(U(301));s+=1,Ve=Fe=null,e.updateQueue=null,Nl.current=Wk,t=n(r,i)}while(Io)}if(Nl.current=uu,e=Fe!==null&&Fe.next!==null,gi=0,Ve=Fe=ke=null,lu=!1,e)throw Error(U(300));return t}function cp(){var t=Zo!==0;return Zo=0,t}function vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?ke.memoizedState=Ve=t:Ve=Ve.next=t,Ve}function Xt(){if(Fe===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=Ve===null?ke.memoizedState:Ve.next;if(e!==null)Ve=e,Fe=t;else{if(t===null)throw Error(U(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Ve===null?ke.memoizedState=Ve=t:Ve=Ve.next=t}return Ve}function ea(t,e){return typeof e=="function"?e(t):e}function vh(t){var e=Xt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((gi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,o=r):u=u.next=f,ke.lanes|=d,_i|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,gn(r,e.memoizedState)||(Et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ke.lanes|=s,_i|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wh(t){var e=Xt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);gn(s,e.memoizedState)||(Et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function F0(){}function U0(t,e){var n=ke,r=Xt(),i=e(),s=!gn(r.memoizedState,i);if(s&&(r.memoizedState=i,Et=!0),r=r.queue,hp(V0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,ta(9,B0.bind(null,n,r,i,e),void 0,null),He===null)throw Error(U(349));gi&30||j0(n,e,i)}return i}function j0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function B0(t,e,n,r){e.value=n,e.getSnapshot=r,$0(e)&&z0(t)}function V0(t,e,n){return n(function(){$0(e)&&z0(t)})}function $0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gn(t,n)}catch{return!0}}function z0(t){var e=Jn(t,1);e!==null&&fn(e,t,1,-1)}function w_(t){var e=vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},e.queue=t,t=t.dispatch=$k.bind(null,ke,t),[e.memoizedState,t]}function ta(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function H0(){return Xt().memoizedState}function Pl(t,e,n,r){var i=vn();ke.flags|=t,i.memoizedState=ta(1|e,n,void 0,r===void 0?null:r)}function Ju(t,e,n,r){var i=Xt();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&lp(r,o.deps)){i.memoizedState=ta(e,n,s,r);return}}ke.flags|=t,i.memoizedState=ta(1|e,n,s,r)}function E_(t,e){return Pl(8390656,8,t,e)}function hp(t,e){return Ju(2048,8,t,e)}function W0(t,e){return Ju(4,2,t,e)}function q0(t,e){return Ju(4,4,t,e)}function G0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function K0(t,e,n){return n=n!=null?n.concat([t]):null,Ju(4,4,G0.bind(null,e,t),n)}function dp(){}function Y0(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&lp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function J0(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&lp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function X0(t,e,n){return gi&21?(gn(n,e)||(n=n0(),ke.lanes|=n,_i|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Et=!0),t.memoizedState=n)}function Bk(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=yh.transition;yh.transition={};try{t(!1),e()}finally{ue=n,yh.transition=r}}function Q0(){return Xt().memoizedState}function Vk(t,e,n){var r=Pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Z0(t))eE(e,n);else if(n=D0(t,e,n,r),n!==null){var i=ft();fn(n,t,r,i),tE(n,e,r)}}function $k(t,e,n){var r=Pr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Z0(t))eE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,gn(l,o)){var u=e.interleaved;u===null?(i.next=i,rp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=D0(t,e,i,r),n!==null&&(i=ft(),fn(n,t,r,i),tE(n,e,r))}}function Z0(t){var e=t.alternate;return t===ke||e!==null&&e===ke}function eE(t,e){Io=lu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function tE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zf(t,n)}}var uu={readContext:Jt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},zk={readContext:Jt,useCallback:function(t,e){return vn().memoizedState=[t,e===void 0?null:e],t},useContext:Jt,useEffect:E_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pl(4194308,4,G0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pl(4,2,t,e)},useMemo:function(t,e){var n=vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=vn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Vk.bind(null,ke,t),[r.memoizedState,t]},useRef:function(t){var e=vn();return t={current:t},e.memoizedState=t},useState:w_,useDebugValue:dp,useDeferredValue:function(t){return vn().memoizedState=t},useTransition:function(){var t=w_(!1),e=t[0];return t=Bk.bind(null,t[1]),vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ke,i=vn();if(Te){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),He===null)throw Error(U(349));gi&30||j0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,E_(V0.bind(null,r,s,t),[t]),r.flags|=2048,ta(9,B0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=vn(),e=He.identifierPrefix;if(Te){var n=Vn,r=Bn;n=(r&~(1<<32-dn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Zo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=jk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Hk={readContext:Jt,useCallback:Y0,useContext:Jt,useEffect:hp,useImperativeHandle:K0,useInsertionEffect:W0,useLayoutEffect:q0,useMemo:J0,useReducer:vh,useRef:H0,useState:function(){return vh(ea)},useDebugValue:dp,useDeferredValue:function(t){var e=Xt();return X0(e,Fe.memoizedState,t)},useTransition:function(){var t=vh(ea)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:F0,useSyncExternalStore:U0,useId:Q0,unstable_isNewReconciler:!1},Wk={readContext:Jt,useCallback:Y0,useContext:Jt,useEffect:hp,useImperativeHandle:K0,useInsertionEffect:W0,useLayoutEffect:q0,useMemo:J0,useReducer:wh,useRef:H0,useState:function(){return wh(ea)},useDebugValue:dp,useDeferredValue:function(t){var e=Xt();return Fe===null?e.memoizedState=t:X0(e,Fe.memoizedState,t)},useTransition:function(){var t=wh(ea)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:F0,useSyncExternalStore:U0,useId:Q0,unstable_isNewReconciler:!1};function nn(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function xd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xu={isMounted:function(t){return(t=t._reactInternals)?Ni(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ft(),i=Pr(t),s=Wn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(fn(e,t,i,r),Al(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ft(),i=Pr(t),s=Wn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(fn(e,t,i,r),Al(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ft(),r=Pr(t),i=Wn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ar(t,i,r),e!==null&&(fn(e,t,r,n),Al(e,t,r))}};function S_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Go(n,r)||!Go(i,s):!0}function nE(t,e,n){var r=!1,i=Mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Jt(s):(i=Ct(e)?pi:lt.current,r=e.contextTypes,s=(r=r!=null)?ms(t,i):Mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function T_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Xu.enqueueReplaceState(e,e.state,null)}function Dd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ip(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Jt(s):(s=Ct(e)?pi:lt.current,i.context=ms(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Xu.enqueueReplaceState(i,i.state,null),ou(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function vs(t,e){try{var n="",r=e;do n+=vC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Eh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ld(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var qk=typeof WeakMap=="function"?WeakMap:Map;function rE(t,e,n){n=Wn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){hu||(hu=!0,Wd=r),Ld(t,e)},n}function iE(t,e,n){n=Wn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ld(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ld(t,e),typeof r!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function I_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new qk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=oR.bind(null,t,e,n),e.then(t,t))}function C_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function k_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wn(-1,1),e.tag=2,Ar(n,e,1))),n.lanes|=1),t)}var Gk=rr.ReactCurrentOwner,Et=!1;function ht(t,e,n,r){e.child=t===null?x0(e,null,n,r):_s(e,t.child,n,r)}function R_(t,e,n,r,i){n=n.render;var s=e.ref;return os(e,i),r=up(t,e,n,r,s,i),n=cp(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xn(t,e,i)):(Te&&n&&Xf(e),e.flags|=1,ht(t,e,r,i),e.child)}function A_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!wp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,sE(t,e,s,r,i)):(t=Dl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Go,n(o,r)&&t.ref===e.ref)return Xn(t,e,i)}return e.flags|=1,t=Or(s,r),t.ref=e.ref,t.return=e,e.child=t}function sE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Go(s,r)&&t.ref===e.ref)if(Et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Et=!0);else return e.lanes=t.lanes,Xn(t,e,i)}return Md(t,e,n,r,i)}function oE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Xi,Ot),Ot|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(Xi,Ot),Ot|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(Xi,Ot),Ot|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(Xi,Ot),Ot|=r;return ht(t,e,i,n),e.child}function aE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Md(t,e,n,r,i){var s=Ct(n)?pi:lt.current;return s=ms(e,s),os(e,i),n=up(t,e,n,r,s,i),r=cp(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xn(t,e,i)):(Te&&r&&Xf(e),e.flags|=1,ht(t,e,n,i),e.child)}function N_(t,e,n,r,i){if(Ct(n)){var s=!0;tu(e)}else s=!1;if(os(e,i),e.stateNode===null)Ol(t,e),nE(e,n,r),Dd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Jt(c):(c=Ct(n)?pi:lt.current,c=ms(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&T_(e,o,r,c),dr=!1;var m=e.memoizedState;o.state=m,ou(e,r,o,i),u=e.memoizedState,l!==r||m!==u||It.current||dr?(typeof d=="function"&&(xd(e,n,d,r),u=e.memoizedState),(l=dr||S_(e,n,l,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,L0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:nn(e.type,l),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Jt(u):(u=Ct(n)?pi:lt.current,u=ms(e,u));var k=n.getDerivedStateFromProps;(d=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||m!==u)&&T_(e,o,r,u),dr=!1,m=e.memoizedState,o.state=m,ou(e,r,o,i);var y=e.memoizedState;l!==f||m!==y||It.current||dr?(typeof k=="function"&&(xd(e,n,k,r),y=e.memoizedState),(c=dr||S_(e,n,c,r,m,y,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Fd(t,e,n,r,s,i)}function Fd(t,e,n,r,i,s){aE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&p_(e,n,!1),Xn(t,e,s);r=e.stateNode,Gk.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=_s(e,t.child,null,s),e.child=_s(e,null,l,s)):ht(t,e,l,s),e.memoizedState=r.state,i&&p_(e,n,!0),e.child}function lE(t){var e=t.stateNode;e.pendingContext?f_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&f_(t,e.context,!1),sp(t,e.containerInfo)}function P_(t,e,n,r,i){return gs(),Zf(i),e.flags|=256,ht(t,e,n,r),e.child}var Ud={dehydrated:null,treeContext:null,retryLane:0};function jd(t){return{baseLanes:t,cachePool:null,transitions:null}}function uE(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(Ie,i&1),t===null)return Od(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ec(o,r,0,null),t=ui(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=jd(n),e.memoizedState=Ud,t):fp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Kk(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Or(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Or(l,s):(s=ui(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?jd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ud,r}return s=t.child,t=s.sibling,r=Or(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function fp(t,e){return e=ec({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cl(t,e,n,r){return r!==null&&Zf(r),_s(e,t.child,null,n),t=fp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Kk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Eh(Error(U(422))),cl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ec({mode:"visible",children:r.children},i,0,null),s=ui(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&_s(e,t.child,null,o),e.child.memoizedState=jd(o),e.memoizedState=Ud,s);if(!(e.mode&1))return cl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=Eh(s,r,void 0),cl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Et||l){if(r=He,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Jn(t,i),fn(r,t,i,-1))}return vp(),r=Eh(Error(U(421))),cl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=aR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,bt=Rr(i.nextSibling),xt=e,Te=!0,sn=null,t!==null&&(Ht[Wt++]=Bn,Ht[Wt++]=Vn,Ht[Wt++]=mi,Bn=t.id,Vn=t.overflow,mi=e),e=fp(e,r.children),e.flags|=4096,e)}function O_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),bd(t.return,e,n)}function Sh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function cE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ht(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&O_(t,n,e);else if(t.tag===19)O_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&au(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Sh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&au(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Sh(e,!0,n,null,s);break;case"together":Sh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ol(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_i|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=Or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Yk(t,e,n){switch(e.tag){case 3:lE(e),gs();break;case 5:M0(e);break;case 1:Ct(e.type)&&tu(e);break;case 4:sp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(iu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?uE(t,e,n):(pe(Ie,Ie.current&1),t=Xn(t,e,n),t!==null?t.sibling:null);pe(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return cE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,oE(t,e,n)}return Xn(t,e,n)}var hE,Bd,dE,fE;hE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bd=function(){};dE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ri(kn.current);var s=null;switch(n){case"input":i=ld(t,i),r=ld(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=hd(t,i),r=hd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Zl)}fd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Bo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Bo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&_e("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};fE=function(t,e,n,r){n!==r&&(e.flags|=4)};function oo(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Jk(t,e,n){var r=e.pendingProps;switch(Qf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(e),null;case 1:return Ct(e.type)&&eu(),tt(e),null;case 3:return r=e.stateNode,ys(),we(It),we(lt),ap(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ll(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,sn!==null&&(Kd(sn),sn=null))),Bd(t,e),tt(e),null;case 5:op(e);var i=ri(Qo.current);if(n=e.type,t!==null&&e.stateNode!=null)dE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return tt(e),null}if(t=ri(kn.current),ll(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Sn]=e,r[Jo]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<_o.length;i++)_e(_o[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":Bg(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":$g(r,s),_e("invalid",r)}fd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&al(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&al(r.textContent,l,t),i=["children",""+l]):Bo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":Za(r),Vg(r,s,!0);break;case"textarea":Za(r),zg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Zl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Sn]=e,t[Jo]=r,hE(t,e,!1,!1),e.stateNode=t;e:{switch(o=pd(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<_o.length;i++)_e(_o[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":Bg(t,r),i=ld(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),_e("invalid",t);break;case"textarea":$g(t,r),i=hd(t,r),_e("invalid",t);break;default:i=r}fd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Hw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&$w(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Vo(t,u):typeof u=="number"&&Vo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Bo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&_e("scroll",t):u!=null&&Ff(t,s,u,o))}switch(n){case"input":Za(t),Vg(t,r,!1);break;case"textarea":Za(t),zg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Lr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ns(t,!!r.multiple,s,!1):r.defaultValue!=null&&ns(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Zl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tt(e),null;case 6:if(t&&e.stateNode!=null)fE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=ri(Qo.current),ri(kn.current),ll(e)){if(r=e.stateNode,n=e.memoizedProps,r[Sn]=e,(s=r.nodeValue!==n)&&(t=xt,t!==null))switch(t.tag){case 3:al(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&al(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Sn]=e,e.stateNode=r}return tt(e),null;case 13:if(we(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&bt!==null&&e.mode&1&&!(e.flags&128))O0(),gs(),e.flags|=98560,s=!1;else if(s=ll(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Sn]=e}else gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tt(e),s=!1}else sn!==null&&(Kd(sn),sn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?Ue===0&&(Ue=3):vp())),e.updateQueue!==null&&(e.flags|=4),tt(e),null);case 4:return ys(),Bd(t,e),t===null&&Ko(e.stateNode.containerInfo),tt(e),null;case 10:return np(e.type._context),tt(e),null;case 17:return Ct(e.type)&&eu(),tt(e),null;case 19:if(we(Ie),s=e.memoizedState,s===null)return tt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)oo(s,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=au(t),o!==null){for(e.flags|=128,oo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&be()>ws&&(e.flags|=128,r=!0,oo(s,!1),e.lanes=4194304)}else{if(!r)if(t=au(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),oo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Te)return tt(e),null}else 2*be()-s.renderingStartTime>ws&&n!==1073741824&&(e.flags|=128,r=!0,oo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=be(),e.sibling=null,n=Ie.current,pe(Ie,r?n&1|2:n&1),e):(tt(e),null);case 22:case 23:return yp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ot&1073741824&&(tt(e),e.subtreeFlags&6&&(e.flags|=8192)):tt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function Xk(t,e){switch(Qf(e),e.tag){case 1:return Ct(e.type)&&eu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ys(),we(It),we(lt),ap(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return op(e),null;case 13:if(we(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(Ie),null;case 4:return ys(),null;case 10:return np(e.type._context),null;case 22:case 23:return yp(),null;case 24:return null;default:return null}}var hl=!1,nt=!1,Qk=typeof WeakSet=="function"?WeakSet:Set,z=null;function Ji(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function Vd(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var b_=!1;function Zk(t,e){if(Id=Jl,t=y0(),Jf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var k;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(k=f.firstChild)!==null;)m=f,f=k;for(;;){if(f===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(k=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cd={focusedElem:t,selectionRange:n},Jl=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var C=y.memoizedProps,I=y.memoizedState,w=e.stateNode,v=w.getSnapshotBeforeUpdate(e.elementType===e.type?C:nn(e.type,C),I);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(P){Pe(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return y=b_,b_=!1,y}function Co(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Vd(e,n,s)}i=i.next}while(i!==r)}}function Qu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function $d(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function pE(t){var e=t.alternate;e!==null&&(t.alternate=null,pE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Sn],delete e[Jo],delete e[Ad],delete e[Lk],delete e[Mk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function mE(t){return t.tag===5||t.tag===3||t.tag===4}function x_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zl));else if(r!==4&&(t=t.child,t!==null))for(zd(t,e,n),t=t.sibling;t!==null;)zd(t,e,n),t=t.sibling}function Hd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Hd(t,e,n),t=t.sibling;t!==null;)Hd(t,e,n),t=t.sibling}var Ge=null,rn=!1;function ur(t,e,n){for(n=n.child;n!==null;)gE(t,e,n),n=n.sibling}function gE(t,e,n){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(Hu,n)}catch{}switch(n.tag){case 5:nt||Ji(n,e);case 6:var r=Ge,i=rn;Ge=null,ur(t,e,n),Ge=r,rn=i,Ge!==null&&(rn?(t=Ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(rn?(t=Ge,n=n.stateNode,t.nodeType===8?mh(t.parentNode,n):t.nodeType===1&&mh(t,n),Wo(t)):mh(Ge,n.stateNode));break;case 4:r=Ge,i=rn,Ge=n.stateNode.containerInfo,rn=!0,ur(t,e,n),Ge=r,rn=i;break;case 0:case 11:case 14:case 15:if(!nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vd(n,e,o),i=i.next}while(i!==r)}ur(t,e,n);break;case 1:if(!nt&&(Ji(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,e,l)}ur(t,e,n);break;case 21:ur(t,e,n);break;case 22:n.mode&1?(nt=(r=nt)||n.memoizedState!==null,ur(t,e,n),nt=r):ur(t,e,n);break;default:ur(t,e,n)}}function D_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Qk),e.forEach(function(r){var i=lR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,rn=!1;break e;case 3:Ge=l.stateNode.containerInfo,rn=!0;break e;case 4:Ge=l.stateNode.containerInfo,rn=!0;break e}l=l.return}if(Ge===null)throw Error(U(160));gE(s,o,i),Ge=null,rn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Pe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_E(e,t),e=e.sibling}function _E(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tn(e,t),yn(t),r&4){try{Co(3,t,t.return),Qu(3,t)}catch(C){Pe(t,t.return,C)}try{Co(5,t,t.return)}catch(C){Pe(t,t.return,C)}}break;case 1:tn(e,t),yn(t),r&512&&n!==null&&Ji(n,n.return);break;case 5:if(tn(e,t),yn(t),r&512&&n!==null&&Ji(n,n.return),t.flags&32){var i=t.stateNode;try{Vo(i,"")}catch(C){Pe(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&jw(i,s),pd(l,o);var c=pd(l,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?Hw(i,f):d==="dangerouslySetInnerHTML"?$w(i,f):d==="children"?Vo(i,f):Ff(i,d,f,c)}switch(l){case"input":ud(i,s);break;case"textarea":Bw(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var k=s.value;k!=null?ns(i,!!s.multiple,k,!1):m!==!!s.multiple&&(s.defaultValue!=null?ns(i,!!s.multiple,s.defaultValue,!0):ns(i,!!s.multiple,s.multiple?[]:"",!1))}i[Jo]=s}catch(C){Pe(t,t.return,C)}}break;case 6:if(tn(e,t),yn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){Pe(t,t.return,C)}}break;case 3:if(tn(e,t),yn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wo(e.containerInfo)}catch(C){Pe(t,t.return,C)}break;case 4:tn(e,t),yn(t);break;case 13:tn(e,t),yn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(gp=be())),r&4&&D_(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(nt=(c=nt)||d,tn(e,t),nt=c):tn(e,t),yn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(z=t,d=t.child;d!==null;){for(f=z=d;z!==null;){switch(m=z,k=m.child,m.tag){case 0:case 11:case 14:case 15:Co(4,m,m.return);break;case 1:Ji(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(C){Pe(r,n,C)}}break;case 5:Ji(m,m.return);break;case 22:if(m.memoizedState!==null){M_(f);continue}}k!==null?(k.return=m,z=k):M_(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=zw("display",o))}catch(C){Pe(t,t.return,C)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(C){Pe(t,t.return,C)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:tn(e,t),yn(t),r&4&&D_(t);break;case 21:break;default:tn(e,t),yn(t)}}function yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(mE(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vo(i,""),r.flags&=-33);var s=x_(t);Hd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=x_(t);zd(t,l,o);break;default:throw Error(U(161))}}catch(u){Pe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function eR(t,e,n){z=t,yE(t)}function yE(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||hl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||nt;l=hl;var c=nt;if(hl=o,(nt=u)&&!c)for(z=i;z!==null;)o=z,u=o.child,o.tag===22&&o.memoizedState!==null?F_(i):u!==null?(u.return=o,z=u):F_(i);for(;s!==null;)z=s,yE(s),s=s.sibling;z=i,hl=l,nt=c}L_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,z=s):L_(t)}}function L_(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nt||Qu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!nt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&v_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}v_(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Wo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}nt||e.flags&512&&$d(e)}catch(m){Pe(e,e.return,m)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function M_(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function F_(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qu(4,e)}catch(u){Pe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Pe(e,i,u)}}var s=e.return;try{$d(e)}catch(u){Pe(e,s,u)}break;case 5:var o=e.return;try{$d(e)}catch(u){Pe(e,o,u)}}}catch(u){Pe(e,e.return,u)}if(e===t){z=null;break}var l=e.sibling;if(l!==null){l.return=e.return,z=l;break}z=e.return}}var tR=Math.ceil,cu=rr.ReactCurrentDispatcher,pp=rr.ReactCurrentOwner,Yt=rr.ReactCurrentBatchConfig,ie=0,He=null,De=null,Ye=0,Ot=0,Xi=jr(0),Ue=0,na=null,_i=0,Zu=0,mp=0,ko=null,wt=null,gp=0,ws=1/0,Mn=null,hu=!1,Wd=null,Nr=null,dl=!1,Er=null,du=0,Ro=0,qd=null,bl=-1,xl=0;function ft(){return ie&6?be():bl!==-1?bl:bl=be()}function Pr(t){return t.mode&1?ie&2&&Ye!==0?Ye&-Ye:Uk.transition!==null?(xl===0&&(xl=n0()),xl):(t=ue,t!==0||(t=window.event,t=t===void 0?16:u0(t.type)),t):1}function fn(t,e,n,r){if(50<Ro)throw Ro=0,qd=null,Error(U(185));ga(t,n,r),(!(ie&2)||t!==He)&&(t===He&&(!(ie&2)&&(Zu|=n),Ue===4&&mr(t,Ye)),kt(t,r),n===1&&ie===0&&!(e.mode&1)&&(ws=be()+500,Yu&&Br()))}function kt(t,e){var n=t.callbackNode;UC(t,e);var r=Yl(t,t===He?Ye:0);if(r===0)n!==null&&qg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&qg(n),e===1)t.tag===0?Fk(U_.bind(null,t)):A0(U_.bind(null,t)),xk(function(){!(ie&6)&&Br()}),n=null;else{switch(r0(r)){case 1:n=$f;break;case 4:n=e0;break;case 16:n=Kl;break;case 536870912:n=t0;break;default:n=Kl}n=kE(n,vE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function vE(t,e){if(bl=-1,xl=0,ie&6)throw Error(U(327));var n=t.callbackNode;if(as()&&t.callbackNode!==n)return null;var r=Yl(t,t===He?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=fu(t,r);else{e=r;var i=ie;ie|=2;var s=EE();(He!==t||Ye!==e)&&(Mn=null,ws=be()+500,li(t,e));do try{iR();break}catch(l){wE(t,l)}while(!0);tp(),cu.current=s,ie=i,De!==null?e=0:(He=null,Ye=0,e=Ue)}if(e!==0){if(e===2&&(i=vd(t),i!==0&&(r=i,e=Gd(t,i))),e===1)throw n=na,li(t,0),mr(t,r),kt(t,be()),n;if(e===6)mr(t,r);else{if(i=t.current.alternate,!(r&30)&&!nR(i)&&(e=fu(t,r),e===2&&(s=vd(t),s!==0&&(r=s,e=Gd(t,s))),e===1))throw n=na,li(t,0),mr(t,r),kt(t,be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Jr(t,wt,Mn);break;case 3:if(mr(t,r),(r&130023424)===r&&(e=gp+500-be(),10<e)){if(Yl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ft(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Rd(Jr.bind(null,t,wt,Mn),e);break}Jr(t,wt,Mn);break;case 4:if(mr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-dn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tR(r/1960))-r,10<r){t.timeoutHandle=Rd(Jr.bind(null,t,wt,Mn),r);break}Jr(t,wt,Mn);break;case 5:Jr(t,wt,Mn);break;default:throw Error(U(329))}}}return kt(t,be()),t.callbackNode===n?vE.bind(null,t):null}function Gd(t,e){var n=ko;return t.current.memoizedState.isDehydrated&&(li(t,e).flags|=256),t=fu(t,e),t!==2&&(e=wt,wt=n,e!==null&&Kd(e)),t}function Kd(t){wt===null?wt=t:wt.push.apply(wt,t)}function nR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mr(t,e){for(e&=~mp,e&=~Zu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dn(e),r=1<<n;t[n]=-1,e&=~r}}function U_(t){if(ie&6)throw Error(U(327));as();var e=Yl(t,0);if(!(e&1))return kt(t,be()),null;var n=fu(t,e);if(t.tag!==0&&n===2){var r=vd(t);r!==0&&(e=r,n=Gd(t,r))}if(n===1)throw n=na,li(t,0),mr(t,e),kt(t,be()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Jr(t,wt,Mn),kt(t,be()),null}function _p(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(ws=be()+500,Yu&&Br())}}function yi(t){Er!==null&&Er.tag===0&&!(ie&6)&&as();var e=ie;ie|=1;var n=Yt.transition,r=ue;try{if(Yt.transition=null,ue=1,t)return t()}finally{ue=r,Yt.transition=n,ie=e,!(ie&6)&&Br()}}function yp(){Ot=Xi.current,we(Xi)}function li(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,bk(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(Qf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&eu();break;case 3:ys(),we(It),we(lt),ap();break;case 5:op(r);break;case 4:ys();break;case 13:we(Ie);break;case 19:we(Ie);break;case 10:np(r.type._context);break;case 22:case 23:yp()}n=n.return}if(He=t,De=t=Or(t.current,null),Ye=Ot=e,Ue=0,na=null,mp=Zu=_i=0,wt=ko=null,ni!==null){for(e=0;e<ni.length;e++)if(n=ni[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ni=null}return t}function wE(t,e){do{var n=De;try{if(tp(),Nl.current=uu,lu){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}lu=!1}if(gi=0,Ve=Fe=ke=null,Io=!1,Zo=0,pp.current=null,n===null||n.return===null){Ue=1,na=e,De=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ye,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var k=C_(o);if(k!==null){k.flags&=-257,k_(k,o,l,s,e),k.mode&1&&I_(s,c,e),e=k,u=c;var y=e.updateQueue;if(y===null){var C=new Set;C.add(u),e.updateQueue=C}else y.add(u);break e}else{if(!(e&1)){I_(s,c,e),vp();break e}u=Error(U(426))}}else if(Te&&l.mode&1){var I=C_(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),k_(I,o,l,s,e),Zf(vs(u,l));break e}}s=u=vs(u,l),Ue!==4&&(Ue=2),ko===null?ko=[s]:ko.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=rE(s,u,e);y_(s,w);break e;case 1:l=u;var v=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Nr===null||!Nr.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var P=iE(s,l,e);y_(s,P);break e}}s=s.return}while(s!==null)}TE(n)}catch(M){e=M,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function EE(){var t=cu.current;return cu.current=uu,t===null?uu:t}function vp(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),He===null||!(_i&268435455)&&!(Zu&268435455)||mr(He,Ye)}function fu(t,e){var n=ie;ie|=2;var r=EE();(He!==t||Ye!==e)&&(Mn=null,li(t,e));do try{rR();break}catch(i){wE(t,i)}while(!0);if(tp(),ie=n,cu.current=r,De!==null)throw Error(U(261));return He=null,Ye=0,Ue}function rR(){for(;De!==null;)SE(De)}function iR(){for(;De!==null&&!NC();)SE(De)}function SE(t){var e=CE(t.alternate,t,Ot);t.memoizedProps=t.pendingProps,e===null?TE(t):De=e,pp.current=null}function TE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Xk(n,e),n!==null){n.flags&=32767,De=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,De=null;return}}else if(n=Jk(n,e,Ot),n!==null){De=n;return}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);Ue===0&&(Ue=5)}function Jr(t,e,n){var r=ue,i=Yt.transition;try{Yt.transition=null,ue=1,sR(t,e,n,r)}finally{Yt.transition=i,ue=r}return null}function sR(t,e,n,r){do as();while(Er!==null);if(ie&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(jC(t,s),t===He&&(De=He=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||dl||(dl=!0,kE(Kl,function(){return as(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yt.transition,Yt.transition=null;var o=ue;ue=1;var l=ie;ie|=4,pp.current=null,Zk(t,n),_E(n,t),Ck(Cd),Jl=!!Id,Cd=Id=null,t.current=n,eR(n),PC(),ie=l,ue=o,Yt.transition=s}else t.current=n;if(dl&&(dl=!1,Er=t,du=i),s=t.pendingLanes,s===0&&(Nr=null),xC(n.stateNode),kt(t,be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(hu)throw hu=!1,t=Wd,Wd=null,t;return du&1&&t.tag!==0&&as(),s=t.pendingLanes,s&1?t===qd?Ro++:(Ro=0,qd=t):Ro=0,Br(),null}function as(){if(Er!==null){var t=r0(du),e=Yt.transition,n=ue;try{if(Yt.transition=null,ue=16>t?16:t,Er===null)var r=!1;else{if(t=Er,Er=null,du=0,ie&6)throw Error(U(331));var i=ie;for(ie|=4,z=t.current;z!==null;){var s=z,o=s.child;if(z.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(z=c;z!==null;){var d=z;switch(d.tag){case 0:case 11:case 15:Co(8,d,s)}var f=d.child;if(f!==null)f.return=d,z=f;else for(;z!==null;){d=z;var m=d.sibling,k=d.return;if(pE(d),d===c){z=null;break}if(m!==null){m.return=k,z=m;break}z=k}}}var y=s.alternate;if(y!==null){var C=y.child;if(C!==null){y.child=null;do{var I=C.sibling;C.sibling=null,C=I}while(C!==null)}}z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,z=o;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Co(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,z=w;break e}z=s.return}}var v=t.current;for(z=v;z!==null;){o=z;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,z=E;else e:for(o=v;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Qu(9,l)}}catch(M){Pe(l,l.return,M)}if(l===o){z=null;break e}var P=l.sibling;if(P!==null){P.return=l.return,z=P;break e}z=l.return}}if(ie=i,Br(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(Hu,t)}catch{}r=!0}return r}finally{ue=n,Yt.transition=e}}return!1}function j_(t,e,n){e=vs(n,e),e=rE(t,e,1),t=Ar(t,e,1),e=ft(),t!==null&&(ga(t,1,e),kt(t,e))}function Pe(t,e,n){if(t.tag===3)j_(t,t,n);else for(;e!==null;){if(e.tag===3){j_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nr===null||!Nr.has(r))){t=vs(n,t),t=iE(e,t,1),e=Ar(e,t,1),t=ft(),e!==null&&(ga(e,1,t),kt(e,t));break}}e=e.return}}function oR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ft(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(Ye&n)===n&&(Ue===4||Ue===3&&(Ye&130023424)===Ye&&500>be()-gp?li(t,0):mp|=n),kt(t,e)}function IE(t,e){e===0&&(t.mode&1?(e=nl,nl<<=1,!(nl&130023424)&&(nl=4194304)):e=1);var n=ft();t=Jn(t,e),t!==null&&(ga(t,e,n),kt(t,n))}function aR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),IE(t,n)}function lR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),IE(t,n)}var CE;CE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||It.current)Et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Et=!1,Yk(t,e,n);Et=!!(t.flags&131072)}else Et=!1,Te&&e.flags&1048576&&N0(e,ru,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ol(t,e),t=e.pendingProps;var i=ms(e,lt.current);os(e,n),i=up(null,e,r,t,i,n);var s=cp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ct(r)?(s=!0,tu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ip(e),i.updater=Xu,e.stateNode=i,i._reactInternals=e,Dd(e,r,t,n),e=Fd(null,e,r,!0,s,n)):(e.tag=0,Te&&s&&Xf(e),ht(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ol(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=cR(r),t=nn(r,t),i){case 0:e=Md(null,e,r,t,n);break e;case 1:e=N_(null,e,r,t,n);break e;case 11:e=R_(null,e,r,t,n);break e;case 14:e=A_(null,e,r,nn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),Md(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),N_(t,e,r,i,n);case 3:e:{if(lE(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,L0(t,e),ou(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=vs(Error(U(423)),e),e=P_(t,e,r,n,i);break e}else if(r!==i){i=vs(Error(U(424)),e),e=P_(t,e,r,n,i);break e}else for(bt=Rr(e.stateNode.containerInfo.firstChild),xt=e,Te=!0,sn=null,n=x0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gs(),r===i){e=Xn(t,e,n);break e}ht(t,e,r,n)}e=e.child}return e;case 5:return M0(e),t===null&&Od(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,kd(r,i)?o=null:s!==null&&kd(r,s)&&(e.flags|=32),aE(t,e),ht(t,e,o,n),e.child;case 6:return t===null&&Od(e),null;case 13:return uE(t,e,n);case 4:return sp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=_s(e,null,r,n):ht(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),R_(t,e,r,i,n);case 7:return ht(t,e,e.pendingProps,n),e.child;case 8:return ht(t,e,e.pendingProps.children,n),e.child;case 12:return ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(iu,r._currentValue),r._currentValue=o,s!==null)if(gn(s.value,o)){if(s.children===i.children&&!It.current){e=Xn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Wn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),bd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),bd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ht(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,os(e,n),i=Jt(i),r=r(i),e.flags|=1,ht(t,e,r,n),e.child;case 14:return r=e.type,i=nn(r,e.pendingProps),i=nn(r.type,i),A_(t,e,r,i,n);case 15:return sE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),Ol(t,e),e.tag=1,Ct(r)?(t=!0,tu(e)):t=!1,os(e,n),nE(e,r,i),Dd(e,r,i,n),Fd(null,e,r,!0,t,n);case 19:return cE(t,e,n);case 22:return oE(t,e,n)}throw Error(U(156,e.tag))};function kE(t,e){return Zw(t,e)}function uR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(t,e,n,r){return new uR(t,e,n,r)}function wp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cR(t){if(typeof t=="function")return wp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===jf)return 11;if(t===Bf)return 14}return 2}function Or(t,e){var n=t.alternate;return n===null?(n=Gt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Dl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")wp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vi:return ui(n.children,i,s,e);case Uf:o=8,i|=8;break;case id:return t=Gt(12,n,e,i|2),t.elementType=id,t.lanes=s,t;case sd:return t=Gt(13,n,e,i),t.elementType=sd,t.lanes=s,t;case od:return t=Gt(19,n,e,i),t.elementType=od,t.lanes=s,t;case Mw:return ec(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dw:o=10;break e;case Lw:o=9;break e;case jf:o=11;break e;case Bf:o=14;break e;case hr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Gt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ui(t,e,n,r){return t=Gt(7,t,r,e),t.lanes=n,t}function ec(t,e,n,r){return t=Gt(22,t,r,e),t.elementType=Mw,t.lanes=n,t.stateNode={isHidden:!1},t}function Th(t,e,n){return t=Gt(6,t,null,e),t.lanes=n,t}function Ih(t,e,n){return e=Gt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function hR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ih(0),this.expirationTimes=ih(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ih(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ep(t,e,n,r,i,s,o,l,u){return t=new hR(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ip(s),t}function dR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function RE(t){if(!t)return Mr;t=t._reactInternals;e:{if(Ni(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Ct(n))return R0(t,n,e)}return e}function AE(t,e,n,r,i,s,o,l,u){return t=Ep(n,r,!0,t,i,s,o,l,u),t.context=RE(null),n=t.current,r=ft(),i=Pr(n),s=Wn(r,i),s.callback=e??null,Ar(n,s,i),t.current.lanes=i,ga(t,i,r),kt(t,r),t}function tc(t,e,n,r){var i=e.current,s=ft(),o=Pr(i);return n=RE(n),e.context===null?e.context=n:e.pendingContext=n,e=Wn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ar(i,e,o),t!==null&&(fn(t,i,o,s),Al(t,i,o)),o}function pu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function B_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sp(t,e){B_(t,e),(t=t.alternate)&&B_(t,e)}function fR(){return null}var NE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Tp(t){this._internalRoot=t}nc.prototype.render=Tp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));tc(t,e,null,null)};nc.prototype.unmount=Tp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yi(function(){tc(null,t,null,null)}),e[Yn]=null}};function nc(t){this._internalRoot=t}nc.prototype.unstable_scheduleHydration=function(t){if(t){var e=o0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pr.length&&e!==0&&e<pr[n].priority;n++);pr.splice(n,0,t),n===0&&l0(t)}};function Ip(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function V_(){}function pR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=pu(o);s.call(c)}}var o=AE(e,r,t,0,null,!1,!1,"",V_);return t._reactRootContainer=o,t[Yn]=o.current,Ko(t.nodeType===8?t.parentNode:t),yi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=pu(u);l.call(c)}}var u=Ep(t,0,!1,null,null,!1,!1,"",V_);return t._reactRootContainer=u,t[Yn]=u.current,Ko(t.nodeType===8?t.parentNode:t),yi(function(){tc(e,u,n,r)}),u}function ic(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=pu(o);l.call(u)}}tc(e,o,t,i)}else o=pR(n,e,t,i,r);return pu(o)}i0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=go(e.pendingLanes);n!==0&&(zf(e,n|1),kt(e,be()),!(ie&6)&&(ws=be()+500,Br()))}break;case 13:yi(function(){var r=Jn(t,1);if(r!==null){var i=ft();fn(r,t,1,i)}}),Sp(t,1)}};Hf=function(t){if(t.tag===13){var e=Jn(t,134217728);if(e!==null){var n=ft();fn(e,t,134217728,n)}Sp(t,134217728)}};s0=function(t){if(t.tag===13){var e=Pr(t),n=Jn(t,e);if(n!==null){var r=ft();fn(n,t,e,r)}Sp(t,e)}};o0=function(){return ue};a0=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};gd=function(t,e,n){switch(e){case"input":if(ud(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ku(r);if(!i)throw Error(U(90));Uw(r),ud(r,i)}}}break;case"textarea":Bw(t,n);break;case"select":e=n.value,e!=null&&ns(t,!!n.multiple,e,!1)}};Gw=_p;Kw=yi;var mR={usingClientEntryPoint:!1,Events:[ya,Wi,Ku,Ww,qw,_p]},ao={findFiberByHostInstance:ti,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gR={bundleType:ao.bundleType,version:ao.version,rendererPackageName:ao.rendererPackageName,rendererConfig:ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Xw(t),t===null?null:t.stateNode},findFiberByHostInstance:ao.findFiberByHostInstance||fR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{Hu=fl.inject(gR),Cn=fl}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mR;Ft.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ip(e))throw Error(U(200));return dR(t,e,null,n)};Ft.createRoot=function(t,e){if(!Ip(t))throw Error(U(299));var n=!1,r="",i=NE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ep(t,1,!1,null,null,n,!1,r,i),t[Yn]=e.current,Ko(t.nodeType===8?t.parentNode:t),new Tp(e)};Ft.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=Xw(e),t=t===null?null:t.stateNode,t};Ft.flushSync=function(t){return yi(t)};Ft.hydrate=function(t,e,n){if(!rc(e))throw Error(U(200));return ic(null,t,e,!0,n)};Ft.hydrateRoot=function(t,e,n){if(!Ip(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=NE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=AE(e,null,t,1,n??null,i,!1,s,o),t[Yn]=e.current,Ko(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new nc(e)};Ft.render=function(t,e,n){if(!rc(e))throw Error(U(200));return ic(null,t,e,!1,n)};Ft.unmountComponentAtNode=function(t){if(!rc(t))throw Error(U(40));return t._reactRootContainer?(yi(function(){ic(null,null,t,!1,function(){t._reactRootContainer=null,t[Yn]=null})}),!0):!1};Ft.unstable_batchedUpdates=_p;Ft.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!rc(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return ic(t,e,n,!1,r)};Ft.version="18.3.1-next-f1338f8080-20240426";function PE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(PE)}catch(t){console.error(t)}}PE(),Pw.exports=Ft;var _R=Pw.exports,$_=_R;nd.createRoot=$_.createRoot,nd.hydrateRoot=$_.hydrateRoot;const yR="modulepreload",vR=function(t){return"/"+t},z_={},fe=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=vR(u),u in z_)return;z_[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":yR,c||(f.as="script"),f.crossOrigin="",f.href=u,l&&f.setAttribute("nonce",l),document.head.appendChild(f),c)return new Promise((m,k)=>{f.addEventListener("load",m),f.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};function wR(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:i,onRegisteredSW:s,onRegisterError:o}=t;let l,u;const c=async(f=!0)=>{await u};async function d(){if("serviceWorker"in navigator){if(l=await fe(async()=>{const{Workbox:f}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:f}},[]).then(({Workbox:f})=>new f("/sw.js",{scope:"/",type:"classic"})).catch(f=>{o==null||o(f)}),!l)return;l.addEventListener("activated",f=>{(f.isUpdate||f.isExternal)&&window.location.reload()}),l.addEventListener("installed",f=>{f.isUpdate||r==null||r()}),l.register({immediate:e}).then(f=>{s?s("/sw.js",f):i==null||i(f)}).catch(f=>{o==null||o(f)})}}return u=d(),c}/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ra(){return ra=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ra.apply(this,arguments)}var Sr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Sr||(Sr={}));const H_="popstate";function ER(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Yd("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:mu(i)}return TR(e,n,null,t)}function Re(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Cp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function SR(){return Math.random().toString(36).substr(2,8)}function W_(t,e){return{usr:t.state,key:t.key,idx:e}}function Yd(t,e,n,r){return n===void 0&&(n=null),ra({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Os(e):e,{state:n,key:e&&e.key||r||SR()})}function mu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Os(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function TR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Sr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(ra({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){l=Sr.Pop;let I=d(),w=I==null?null:I-c;c=I,u&&u({action:l,location:C.location,delta:w})}function m(I,w){l=Sr.Push;let v=Yd(C.location,I,w);c=d()+1;let E=W_(v,c),P=C.createHref(v);try{o.pushState(E,"",P)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(P)}s&&u&&u({action:l,location:C.location,delta:1})}function k(I,w){l=Sr.Replace;let v=Yd(C.location,I,w);c=d();let E=W_(v,c),P=C.createHref(v);o.replaceState(E,"",P),s&&u&&u({action:l,location:C.location,delta:0})}function y(I){let w=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof I=="string"?I:mu(I);return v=v.replace(/ $/,"%20"),Re(w,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,w)}let C={get action(){return l},get location(){return t(i,o)},listen(I){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(H_,f),u=I,()=>{i.removeEventListener(H_,f),u=null}},createHref(I){return e(i,I)},createURL:y,encodeLocation(I){let w=y(I);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:k,go(I){return o.go(I)}};return C}var q_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(q_||(q_={}));function IR(t,e,n){return n===void 0&&(n="/"),CR(t,e,n)}function CR(t,e,n,r){let i=typeof e=="string"?Os(e):e,s=Es(i.pathname||"/",n);if(s==null)return null;let o=OE(t);kR(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=FR(s);l=LR(o[u],c)}return l}function OE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Re(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=br([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Re(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),OE(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:xR(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of bE(s.path))i(s,o,u)}),e}function bE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=bE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function kR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:DR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const RR=/^:[\w-]+$/,AR=3,NR=2,PR=1,OR=10,bR=-2,G_=t=>t==="*";function xR(t,e){let n=t.split("/"),r=n.length;return n.some(G_)&&(r+=bR),e&&(r+=NR),n.filter(i=>!G_(i)).reduce((i,s)=>i+(RR.test(s)?AR:s===""?PR:OR),r)}function DR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function LR(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=Jd({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:br([s,f.pathname]),pathnameBase:$R(br([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=br([s,f.pathnameBase]))}return o}function Jd(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=MR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:k}=d;if(m==="*"){let C=l[f]||"";o=s.slice(0,s.length-C.length).replace(/(.)\/+$/,"$1")}const y=l[f];return k&&!y?c[m]=void 0:c[m]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function MR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Cp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function FR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Cp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Es(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const UR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jR=t=>UR.test(t);function BR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Os(t):t,s;if(n)if(jR(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Cp(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=K_(n.substring(1),"/"):s=K_(n,e)}else s=e;return{pathname:s,search:zR(r),hash:HR(i)}}function K_(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ch(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function VR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function kp(t,e){let n=VR(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Rp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Os(t):(i=ra({},t),Re(!i.pathname||!i.pathname.includes("?"),Ch("?","pathname","search",i)),Re(!i.pathname||!i.pathname.includes("#"),Ch("#","pathname","hash",i)),Re(!i.search||!i.search.includes("#"),Ch("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}l=f>=0?e[f]:"/"}let u=BR(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const br=t=>t.join("/").replace(/\/\/+/g,"/"),$R=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),zR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,HR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function WR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const xE=["post","put","patch","delete"];new Set(xE);const qR=["get",...xE];new Set(qR);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ia(){return ia=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ia.apply(this,arguments)}const sc=L.createContext(null),DE=L.createContext(null),ir=L.createContext(null),oc=L.createContext(null),Vr=L.createContext({outlet:null,matches:[],isDataRoute:!1}),LE=L.createContext(null);function GR(t,e){let{relative:n}=e===void 0?{}:e;bs()||Re(!1);let{basename:r,navigator:i}=L.useContext(ir),{hash:s,pathname:o,search:l}=ac(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:br([r,o])),i.createHref({pathname:u,search:l,hash:s})}function bs(){return L.useContext(oc)!=null}function Pi(){return bs()||Re(!1),L.useContext(oc).location}function ME(t){L.useContext(ir).static||L.useLayoutEffect(t)}function Ap(){let{isDataRoute:t}=L.useContext(Vr);return t?oA():KR()}function KR(){bs()||Re(!1);let t=L.useContext(sc),{basename:e,future:n,navigator:r}=L.useContext(ir),{matches:i}=L.useContext(Vr),{pathname:s}=Pi(),o=JSON.stringify(kp(i,n.v7_relativeSplatPath)),l=L.useRef(!1);return ME(()=>{l.current=!0}),L.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let f=Rp(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:br([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}function ac(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=L.useContext(ir),{matches:i}=L.useContext(Vr),{pathname:s}=Pi(),o=JSON.stringify(kp(i,r.v7_relativeSplatPath));return L.useMemo(()=>Rp(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function YR(t,e){return JR(t,e)}function JR(t,e,n,r){bs()||Re(!1);let{navigator:i}=L.useContext(ir),{matches:s}=L.useContext(Vr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Pi(),d;if(e){var f;let I=typeof e=="string"?Os(e):e;u==="/"||(f=I.pathname)!=null&&f.startsWith(u)||Re(!1),d=I}else d=c;let m=d.pathname||"/",k=m;if(u!=="/"){let I=u.replace(/^\//,"").split("/");k="/"+m.replace(/^\//,"").split("/").slice(I.length).join("/")}let y=IR(t,{pathname:k}),C=tA(y&&y.map(I=>Object.assign({},I,{params:Object.assign({},l,I.params),pathname:br([u,i.encodeLocation?i.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?u:br([u,i.encodeLocation?i.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),s,n,r);return e&&C?L.createElement(oc.Provider,{value:{location:ia({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Sr.Pop}},C):C}function XR(){let t=sA(),e=WR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:i},n):null,null)}const QR=L.createElement(XR,null);class ZR extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?L.createElement(Vr.Provider,{value:this.props.routeContext},L.createElement(LE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function eA(t){let{routeContext:e,match:n,children:r}=t,i=L.useContext(sc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(Vr.Provider,{value:e},r)}function tA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||Re(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:k}=n,y=f.route.loader&&m[f.route.id]===void 0&&(!k||k[f.route.id]===void 0);if(f.route.lazy||y){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let k,y=!1,C=null,I=null;n&&(k=l&&f.route.id?l[f.route.id]:void 0,C=f.route.errorElement||QR,u&&(c<0&&m===0?(aA("route-fallback"),y=!0,I=null):c===m&&(y=!0,I=f.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,m+1)),v=()=>{let E;return k?E=C:y?E=I:f.route.Component?E=L.createElement(f.route.Component,null):f.route.element?E=f.route.element:E=d,L.createElement(eA,{match:f,routeContext:{outlet:d,matches:w,isDataRoute:n!=null},children:E})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?L.createElement(ZR,{location:n.location,revalidation:n.revalidation,component:C,error:k,children:v(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):v()},null)}var FE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(FE||{}),UE=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(UE||{});function nA(t){let e=L.useContext(sc);return e||Re(!1),e}function rA(t){let e=L.useContext(DE);return e||Re(!1),e}function iA(t){let e=L.useContext(Vr);return e||Re(!1),e}function jE(t){let e=iA(),n=e.matches[e.matches.length-1];return n.route.id||Re(!1),n.route.id}function sA(){var t;let e=L.useContext(LE),n=rA(),r=jE();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function oA(){let{router:t}=nA(FE.UseNavigateStable),e=jE(UE.UseNavigateStable),n=L.useRef(!1);return ME(()=>{n.current=!0}),L.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ia({fromRouteId:e},s)))},[t,e])}const Y_={};function aA(t,e,n){Y_[t]||(Y_[t]=!0)}function lA(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function sa(t){let{to:e,replace:n,state:r,relative:i}=t;bs()||Re(!1);let{future:s,static:o}=L.useContext(ir),{matches:l}=L.useContext(Vr),{pathname:u}=Pi(),c=Ap(),d=Rp(e,kp(l,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(d);return L.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function Me(t){Re(!1)}function uA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Sr.Pop,navigator:s,static:o=!1,future:l}=t;bs()&&Re(!1);let u=e.replace(/^\/*/,"/"),c=L.useMemo(()=>({basename:u,navigator:s,static:o,future:ia({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Os(r));let{pathname:d="/",search:f="",hash:m="",state:k=null,key:y="default"}=r,C=L.useMemo(()=>{let I=Es(d,u);return I==null?null:{location:{pathname:I,search:f,hash:m,state:k,key:y},navigationType:i}},[u,d,f,m,k,y,i]);return C==null?null:L.createElement(ir.Provider,{value:c},L.createElement(oc.Provider,{children:n,value:C}))}function cA(t){let{children:e,location:n}=t;return YR(Xd(e),n)}new Promise(()=>{});function Xd(t,e){e===void 0&&(e=[]);let n=[];return L.Children.forEach(t,(r,i)=>{if(!L.isValidElement(r))return;let s=[...e,i];if(r.type===L.Fragment){n.push.apply(n,Xd(r.props.children,s));return}r.type!==Me&&Re(!1),!r.props.index||!r.props.children||Re(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Xd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gu(){return gu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},gu.apply(this,arguments)}function BE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function hA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function dA(t,e){return t.button===0&&(!e||e==="_self")&&!hA(t)}function Qd(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function fA(t,e){let n=Qd(t);return e&&e.forEach((r,i)=>{n.has(i)||e.getAll(i).forEach(s=>{n.append(i,s)})}),n}const pA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],mA=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],gA="6";try{window.__reactRouterVersion=gA}catch{}const _A=L.createContext({isTransitioning:!1}),yA="startTransition",J_=oC[yA];function vA(t){let{basename:e,children:n,future:r,window:i}=t,s=L.useRef();s.current==null&&(s.current=ER({window:i,v5Compat:!0}));let o=s.current,[l,u]=L.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=L.useCallback(f=>{c&&J_?J_(()=>u(f)):u(f)},[u,c]);return L.useLayoutEffect(()=>o.listen(d),[o,d]),L.useEffect(()=>lA(r),[r]),L.createElement(uA,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const wA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",EA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,VE=L.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:f}=e,m=BE(e,pA),{basename:k}=L.useContext(ir),y,C=!1;if(typeof c=="string"&&EA.test(c)&&(y=c,wA))try{let E=new URL(window.location.href),P=c.startsWith("//")?new URL(E.protocol+c):new URL(c),M=Es(P.pathname,k);P.origin===E.origin&&M!=null?c=M+P.search+P.hash:C=!0}catch{}let I=GR(c,{relative:i}),w=TA(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:f});function v(E){r&&r(E),E.defaultPrevented||w(E)}return L.createElement("a",gu({},m,{href:y||I,onClick:C||s?r:v,ref:n,target:u}))}),x6=L.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:u,viewTransition:c,children:d}=e,f=BE(e,mA),m=ac(u,{relative:f.relative}),k=Pi(),y=L.useContext(DE),{navigator:C,basename:I}=L.useContext(ir),w=y!=null&&IA(m)&&c===!0,v=C.encodeLocation?C.encodeLocation(m).pathname:m.pathname,E=k.pathname,P=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(E=E.toLowerCase(),P=P?P.toLowerCase():null,v=v.toLowerCase()),P&&I&&(P=Es(P,I)||P);const M=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let F=E===v||!o&&E.startsWith(v)&&E.charAt(M)==="/",S=P!=null&&(P===v||!o&&P.startsWith(v)&&P.charAt(v.length)==="/"),_={isActive:F,isPending:S,isTransitioning:w},T=F?r:void 0,A;typeof s=="function"?A=s(_):A=[s,F?"active":null,S?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let N=typeof l=="function"?l(_):l;return L.createElement(VE,gu({},f,{"aria-current":T,className:A,ref:n,style:N,to:u,viewTransition:c}),typeof d=="function"?d(_):d)});var Zd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Zd||(Zd={}));var X_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(X_||(X_={}));function SA(t){let e=L.useContext(sc);return e||Re(!1),e}function TA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=Ap(),c=Pi(),d=ac(t,{relative:o});return L.useCallback(f=>{if(dA(f,n)){f.preventDefault();let m=r!==void 0?r:mu(c)===mu(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}function D6(t){let e=L.useRef(Qd(t)),n=L.useRef(!1),r=Pi(),i=L.useMemo(()=>fA(r.search,n.current?null:e.current),[r.search]),s=Ap(),o=L.useCallback((l,u)=>{const c=Qd(typeof l=="function"?l(i):l);n.current=!0,s("?"+c,u)},[s,i]);return[i,o]}function IA(t,e){e===void 0&&(e={});let n=L.useContext(_A);n==null&&Re(!1);let{basename:r}=SA(Zd.useViewTransitionState),i=ac(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Es(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Es(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Jd(i.pathname,o)!=null||Jd(i.pathname,s)!=null}function $E(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=$E(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Tr(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=$E(t))&&(r&&(r+=" "),r+=e);return r}const Ao=t=>typeof t=="number"&&!isNaN(t),vi=t=>typeof t=="string",St=t=>typeof t=="function",Ll=t=>vi(t)||St(t)?t:null,kh=t=>L.isValidElement(t)||vi(t)||St(t)||Ao(t);function CA(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function lc(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:l,position:u,preventExitTransition:c,done:d,nodeRef:f,isIn:m}=o;const k=r?`${e}--${u}`:e,y=r?`${n}--${u}`:n,C=L.useRef(0);return L.useLayoutEffect(()=>{const I=f.current,w=k.split(" "),v=E=>{E.target===f.current&&(I.dispatchEvent(new Event("d")),I.removeEventListener("animationend",v),I.removeEventListener("animationcancel",v),C.current===0&&E.type!=="animationcancel"&&I.classList.remove(...w))};I.classList.add(...w),I.addEventListener("animationend",v),I.addEventListener("animationcancel",v)},[]),L.useEffect(()=>{const I=f.current,w=()=>{I.removeEventListener("animationend",w),i?CA(I,d,s):d()};m||(c?w():(C.current=1,I.className+=` ${y}`,I.addEventListener("animationend",w)))},[m]),de.createElement(de.Fragment,null,l)}}function Q_(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const zt={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},pl=t=>{let{theme:e,type:n,...r}=t;return de.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},Rh={info:function(t){return de.createElement(pl,{...t},de.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return de.createElement(pl,{...t},de.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return de.createElement(pl,{...t},de.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return de.createElement(pl,{...t},de.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return de.createElement("div",{className:"Toastify__spinner"})}};function kA(t){const[,e]=L.useReducer(k=>k+1,0),[n,r]=L.useState([]),i=L.useRef(null),s=L.useRef(new Map).current,o=k=>n.indexOf(k)!==-1,l=L.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:o,getToast:k=>s.get(k)}).current;function u(k){let{containerId:y}=k;const{limit:C}=l.props;!C||y&&l.containerId!==y||(l.count-=l.queue.length,l.queue=[])}function c(k){r(y=>k==null?[]:y.filter(C=>C!==k))}function d(){const{toastContent:k,toastProps:y,staleId:C}=l.queue.shift();m(k,y,C)}function f(k,y){let{delay:C,staleId:I,...w}=y;if(!kh(k)||function(O){return!i.current||l.props.enableMultiContainer&&O.containerId!==l.props.containerId||s.has(O.toastId)&&O.updateId==null}(w))return;const{toastId:v,updateId:E,data:P}=w,{props:M}=l,F=()=>c(v),S=E==null;S&&l.count++;const _={...M,style:M.toastStyle,key:l.toastKey++,...Object.fromEntries(Object.entries(w).filter(O=>{let[R,J]=O;return J!=null})),toastId:v,updateId:E,data:P,closeToast:F,isIn:!1,className:Ll(w.className||M.toastClassName),bodyClassName:Ll(w.bodyClassName||M.bodyClassName),progressClassName:Ll(w.progressClassName||M.progressClassName),autoClose:!w.isLoading&&(T=w.autoClose,A=M.autoClose,T===!1||Ao(T)&&T>0?T:A),deleteToast(){const O=Q_(s.get(v),"removed");s.delete(v),zt.emit(4,O);const R=l.queue.length;if(l.count=v==null?l.count-l.displayedToast:l.count-1,l.count<0&&(l.count=0),R>0){const J=v==null?l.props.limit:1;if(R===1||J===1)l.displayedToast++,d();else{const je=J>R?R:J;l.displayedToast=je;for(let X=0;X<je;X++)d()}}else e()}};var T,A;_.iconOut=function(O){let{theme:R,type:J,isLoading:je,icon:X}=O,Ne=null;const j={theme:R,type:J};return X===!1||(St(X)?Ne=X(j):L.isValidElement(X)?Ne=L.cloneElement(X,j):vi(X)||Ao(X)?Ne=X:je?Ne=Rh.spinner():(H=>H in Rh)(J)&&(Ne=Rh[J](j))),Ne}(_),St(w.onOpen)&&(_.onOpen=w.onOpen),St(w.onClose)&&(_.onClose=w.onClose),_.closeButton=M.closeButton,w.closeButton===!1||kh(w.closeButton)?_.closeButton=w.closeButton:w.closeButton===!0&&(_.closeButton=!kh(M.closeButton)||M.closeButton);let N=k;L.isValidElement(k)&&!vi(k.type)?N=L.cloneElement(k,{closeToast:F,toastProps:_,data:P}):St(k)&&(N=k({closeToast:F,toastProps:_,data:P})),M.limit&&M.limit>0&&l.count>M.limit&&S?l.queue.push({toastContent:N,toastProps:_,staleId:I}):Ao(C)?setTimeout(()=>{m(N,_,I)},C):m(N,_,I)}function m(k,y,C){const{toastId:I}=y;C&&s.delete(C);const w={content:k,props:y};s.set(I,w),r(v=>[...v,I].filter(E=>E!==C)),zt.emit(4,Q_(w,w.props.updateId==null?"added":"updated"))}return L.useEffect(()=>(l.containerId=t.containerId,zt.cancelEmit(3).on(0,f).on(1,k=>i.current&&c(k)).on(5,u).emit(2,l),()=>{s.clear(),zt.emit(3,l)}),[]),L.useEffect(()=>{l.props=t,l.isToastActive=o,l.displayedToast=n.length}),{getToastToRender:function(k){const y=new Map,C=Array.from(s.values());return t.newestOnTop&&C.reverse(),C.forEach(I=>{const{position:w}=I.props;y.has(w)||y.set(w,[]),y.get(w).push(I)}),Array.from(y,I=>k(I[0],I[1]))},containerRef:i,isToastActive:o}}function Z_(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function ey(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function RA(t){const[e,n]=L.useState(!1),[r,i]=L.useState(!1),s=L.useRef(null),o=L.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=L.useRef(t),{autoClose:u,pauseOnHover:c,closeToast:d,onClick:f,closeOnClick:m}=t;function k(P){if(t.draggable){P.nativeEvent.type==="touchstart"&&P.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",w),document.addEventListener("mouseup",v),document.addEventListener("touchmove",w),document.addEventListener("touchend",v);const M=s.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=M.getBoundingClientRect(),M.style.transition="",o.x=Z_(P.nativeEvent),o.y=ey(P.nativeEvent),t.draggableDirection==="x"?(o.start=o.x,o.removalDistance=M.offsetWidth*(t.draggablePercent/100)):(o.start=o.y,o.removalDistance=M.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function y(P){if(o.boundingRect){const{top:M,bottom:F,left:S,right:_}=o.boundingRect;P.nativeEvent.type!=="touchend"&&t.pauseOnHover&&o.x>=S&&o.x<=_&&o.y>=M&&o.y<=F?I():C()}}function C(){n(!0)}function I(){n(!1)}function w(P){const M=s.current;o.canDrag&&M&&(o.didMove=!0,e&&I(),o.x=Z_(P),o.y=ey(P),o.delta=t.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),M.style.transform=`translate${t.draggableDirection}(${o.delta}px)`,M.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function v(){document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",v),document.removeEventListener("touchmove",w),document.removeEventListener("touchend",v);const P=s.current;if(o.canDrag&&o.didMove&&P){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),void t.closeToast();P.style.transition="transform 0.2s, opacity 0.2s",P.style.transform=`translate${t.draggableDirection}(0)`,P.style.opacity="1"}}L.useEffect(()=>{l.current=t}),L.useEffect(()=>(s.current&&s.current.addEventListener("d",C,{once:!0}),St(t.onOpen)&&t.onOpen(L.isValidElement(t.children)&&t.children.props),()=>{const P=l.current;St(P.onClose)&&P.onClose(L.isValidElement(P.children)&&P.children.props)}),[]),L.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||I(),window.addEventListener("focus",C),window.addEventListener("blur",I)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",C),window.removeEventListener("blur",I))}),[t.pauseOnFocusLoss]);const E={onMouseDown:k,onTouchStart:k,onMouseUp:y,onTouchEnd:y};return u&&c&&(E.onMouseEnter=I,E.onMouseLeave=C),m&&(E.onClick=P=>{f&&f(P),o.canCloseOnClick&&d()}),{playToast:C,pauseToast:I,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:E}}function zE(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return de.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},de.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},de.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function AA(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:l,controlledProgress:u,progress:c,rtl:d,isIn:f,theme:m}=t;const k=s||u&&c===0,y={...l,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:k?0:1};u&&(y.transform=`scaleX(${c})`);const C=Tr("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":d}),I=St(o)?o({rtl:d,type:i,defaultClassName:C}):Tr(C,o);return de.createElement("div",{role:"progressbar","aria-hidden":k?"true":"false","aria-label":"notification timer",className:I,style:y,[u&&c>=1?"onTransitionEnd":"onAnimationEnd"]:u&&c<1?null:()=>{f&&r()}})}const NA=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=RA(t),{closeButton:s,children:o,autoClose:l,onClick:u,type:c,hideProgressBar:d,closeToast:f,transition:m,position:k,className:y,style:C,bodyClassName:I,bodyStyle:w,progressClassName:v,progressStyle:E,updateId:P,role:M,progress:F,rtl:S,toastId:_,deleteToast:T,isIn:A,isLoading:N,iconOut:O,closeOnClick:R,theme:J}=t,je=Tr("Toastify__toast",`Toastify__toast-theme--${J}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":S},{"Toastify__toast--close-on-click":R}),X=St(y)?y({rtl:S,position:k,type:c,defaultClassName:je}):Tr(je,y),Ne=!!F||!l,j={closeToast:f,type:c,theme:J};let H=null;return s===!1||(H=St(s)?s(j):L.isValidElement(s)?L.cloneElement(s,j):zE(j)),de.createElement(m,{isIn:A,done:T,position:k,preventExitTransition:n,nodeRef:r},de.createElement("div",{id:_,onClick:u,className:X,...i,style:C,ref:r},de.createElement("div",{...A&&{role:M},className:St(I)?I({type:c}):Tr("Toastify__toast-body",I),style:w},O!=null&&de.createElement("div",{className:Tr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!N})},O),de.createElement("div",null,o)),H,de.createElement(AA,{...P&&!Ne?{key:`pb-${P}`}:{},rtl:S,theme:J,delay:l,isRunning:e,isIn:A,closeToast:f,hide:d,type:c,style:E,className:v,controlledProgress:Ne,progress:F||0})))},uc=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},PA=lc(uc("bounce",!0));lc(uc("slide",!0));lc(uc("zoom"));lc(uc("flip"));const ef=L.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=kA(t),{className:s,style:o,rtl:l,containerId:u}=t;function c(d){const f=Tr("Toastify__toast-container",`Toastify__toast-container--${d}`,{"Toastify__toast-container--rtl":l});return St(s)?s({position:d,rtl:l,defaultClassName:f}):Tr(f,Ll(s))}return L.useEffect(()=>{e&&(e.current=r.current)},[]),de.createElement("div",{ref:r,className:"Toastify",id:u},n((d,f)=>{const m=f.length?{...o}:{...o,pointerEvents:"none"};return de.createElement("div",{className:c(d),style:m,key:`container-${d}`},f.map((k,y)=>{let{content:C,props:I}=k;return de.createElement(NA,{...I,isIn:i(I.toastId),style:{...I.style,"--nth":y+1,"--len":f.length},key:`toast-${I.key}`},C)}))}))});ef.displayName="ToastContainer",ef.defaultProps={position:"top-right",transition:PA,autoClose:5e3,closeButton:zE,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Ah,Xr=new Map,yo=[],OA=1;function HE(){return""+OA++}function bA(t){return t&&(vi(t.toastId)||Ao(t.toastId))?t.toastId:HE()}function No(t,e){return Xr.size>0?zt.emit(0,t,e):yo.push({content:t,options:e}),e.toastId}function _u(t,e){return{...e,type:e&&e.type||t,toastId:bA(e)}}function ml(t){return(e,n)=>No(e,_u(t,n))}function Se(t,e){return No(t,_u("default",e))}Se.loading=(t,e)=>No(t,_u("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),Se.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=vi(i)?Se.loading(i,n):Se.loading(i.render,{...n,...i}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(d,f,m)=>{if(f==null)return void Se.dismiss(r);const k={type:d,...l,...n,data:m},y=vi(f)?{render:f}:f;return r?Se.update(r,{...k,...y}):Se(y.render,{...k,...y}),m},c=St(t)?t():t;return c.then(d=>u("success",o,d)).catch(d=>u("error",s,d)),c},Se.success=ml("success"),Se.info=ml("info"),Se.error=ml("error"),Se.warning=ml("warning"),Se.warn=Se.warning,Se.dark=(t,e)=>No(t,_u("default",{theme:"dark",...e})),Se.dismiss=t=>{Xr.size>0?zt.emit(1,t):yo=yo.filter(e=>t!=null&&e.options.toastId!==t)},Se.clearWaitingQueue=function(t){return t===void 0&&(t={}),zt.emit(5,t)},Se.isActive=t=>{let e=!1;return Xr.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},Se.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:s}=i;const o=Xr.get(s||Ah);return o&&o.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:HE()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,No(o,s)}},0)},Se.done=t=>{Se.update(t,{progress:1})},Se.onChange=t=>(zt.on(4,t),()=>{zt.off(4,t)}),Se.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Se.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},zt.on(2,t=>{Ah=t.containerId||t,Xr.set(Ah,t),yo.forEach(e=>{zt.emit(0,e.content,e.options)}),yo=[]}).on(3,t=>{Xr.delete(t.containerId||t),Xr.size===0&&zt.off(0).off(1).off(5)});function WE(t,e){return function(){return t.apply(e,arguments)}}const{toString:xA}=Object.prototype,{getPrototypeOf:Np}=Object,{iterator:cc,toStringTag:qE}=Symbol,hc=(t=>e=>{const n=xA.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),_n=t=>(t=t.toLowerCase(),e=>hc(e)===t),dc=t=>e=>typeof e===t,{isArray:xs}=Array,Ss=dc("undefined");function wa(t){return t!==null&&!Ss(t)&&t.constructor!==null&&!Ss(t.constructor)&&Rt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const GE=_n("ArrayBuffer");function DA(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&GE(t.buffer),e}const LA=dc("string"),Rt=dc("function"),KE=dc("number"),Ea=t=>t!==null&&typeof t=="object",MA=t=>t===!0||t===!1,Ml=t=>{if(hc(t)!=="object")return!1;const e=Np(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(qE in t)&&!(cc in t)},FA=t=>{if(!Ea(t)||wa(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},UA=_n("Date"),jA=_n("File"),BA=t=>!!(t&&typeof t.uri<"u"),VA=t=>t&&typeof t.getParts<"u",$A=_n("Blob"),zA=_n("FileList"),HA=t=>Ea(t)&&Rt(t.pipe);function WA(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const ty=WA(),ny=typeof ty.FormData<"u"?ty.FormData:void 0,qA=t=>{let e;return t&&(ny&&t instanceof ny||Rt(t.append)&&((e=hc(t))==="formdata"||e==="object"&&Rt(t.toString)&&t.toString()==="[object FormData]"))},GA=_n("URLSearchParams"),[KA,YA,JA,XA]=["ReadableStream","Request","Response","Headers"].map(_n),QA=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Sa(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),xs(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{if(wa(t))return;const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let l;for(r=0;r<o;r++)l=s[r],e.call(null,t[l],l,t)}}function YE(t,e){if(wa(t))return null;e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const ii=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,JE=t=>!Ss(t)&&t!==ii;function tf(){const{caseless:t,skipUndefined:e}=JE(this)&&this||{},n={},r=(i,s)=>{if(s==="__proto__"||s==="constructor"||s==="prototype")return;const o=t&&YE(n,s)||s;Ml(n[o])&&Ml(i)?n[o]=tf(n[o],i):Ml(i)?n[o]=tf({},i):xs(i)?n[o]=i.slice():(!e||!Ss(i))&&(n[o]=i)};for(let i=0,s=arguments.length;i<s;i++)arguments[i]&&Sa(arguments[i],r);return n}const ZA=(t,e,n,{allOwnKeys:r}={})=>(Sa(e,(i,s)=>{n&&Rt(i)?Object.defineProperty(t,s,{value:WE(i,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,s,{value:i,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),t),eN=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),tN=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},nN=(t,e,n,r)=>{let i,s,o;const l={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!l[o]&&(e[o]=t[o],l[o]=!0);t=n!==!1&&Np(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},rN=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},iN=t=>{if(!t)return null;if(xs(t))return t;let e=t.length;if(!KE(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},sN=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Np(Uint8Array)),oN=(t,e)=>{const r=(t&&t[cc]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},aN=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},lN=_n("HTMLFormElement"),uN=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),ry=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),cN=_n("RegExp"),XE=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Sa(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},hN=t=>{XE(t,(e,n)=>{if(Rt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Rt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},dN=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return xs(t)?r(t):r(String(t).split(e)),n},fN=()=>{},pN=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function mN(t){return!!(t&&Rt(t.append)&&t[qE]==="FormData"&&t[cc])}const gN=t=>{const e=new Array(10),n=(r,i)=>{if(Ea(r)){if(e.indexOf(r)>=0)return;if(wa(r))return r;if(!("toJSON"in r)){e[i]=r;const s=xs(r)?[]:{};return Sa(r,(o,l)=>{const u=n(o,i+1);!Ss(u)&&(s[l]=u)}),e[i]=void 0,s}}return r};return n(t,0)},_N=_n("AsyncFunction"),yN=t=>t&&(Ea(t)||Rt(t))&&Rt(t.then)&&Rt(t.catch),QE=((t,e)=>t?setImmediate:e?((n,r)=>(ii.addEventListener("message",({source:i,data:s})=>{i===ii&&s===n&&r.length&&r.shift()()},!1),i=>{r.push(i),ii.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Rt(ii.postMessage)),vN=typeof queueMicrotask<"u"?queueMicrotask.bind(ii):typeof process<"u"&&process.nextTick||QE,wN=t=>t!=null&&Rt(t[cc]),x={isArray:xs,isArrayBuffer:GE,isBuffer:wa,isFormData:qA,isArrayBufferView:DA,isString:LA,isNumber:KE,isBoolean:MA,isObject:Ea,isPlainObject:Ml,isEmptyObject:FA,isReadableStream:KA,isRequest:YA,isResponse:JA,isHeaders:XA,isUndefined:Ss,isDate:UA,isFile:jA,isReactNativeBlob:BA,isReactNative:VA,isBlob:$A,isRegExp:cN,isFunction:Rt,isStream:HA,isURLSearchParams:GA,isTypedArray:sN,isFileList:zA,forEach:Sa,merge:tf,extend:ZA,trim:QA,stripBOM:eN,inherits:tN,toFlatObject:nN,kindOf:hc,kindOfTest:_n,endsWith:rN,toArray:iN,forEachEntry:oN,matchAll:aN,isHTMLForm:lN,hasOwnProperty:ry,hasOwnProp:ry,reduceDescriptors:XE,freezeMethods:hN,toObjectSet:dN,toCamelCase:uN,noop:fN,toFiniteNumber:pN,findKey:YE,global:ii,isContextDefined:JE,isSpecCompliantForm:mN,toJSONObject:gN,isAsyncFn:_N,isThenable:yN,setImmediate:QE,asap:vN,isIterable:wN};let W=class ZE extends Error{static from(e,n,r,i,s,o){const l=new ZE(e.message,n||e.code,r,i,s);return l.cause=e,l.name=e.name,e.status!=null&&l.status==null&&(l.status=e.status),o&&Object.assign(l,o),l}constructor(e,n,r,i,s){super(e),Object.defineProperty(this,"message",{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),r&&(this.config=r),i&&(this.request=i),s&&(this.response=s,this.status=s.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:x.toJSONObject(this.config),code:this.code,status:this.status}}};W.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";W.ERR_BAD_OPTION="ERR_BAD_OPTION";W.ECONNABORTED="ECONNABORTED";W.ETIMEDOUT="ETIMEDOUT";W.ERR_NETWORK="ERR_NETWORK";W.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";W.ERR_DEPRECATED="ERR_DEPRECATED";W.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";W.ERR_BAD_REQUEST="ERR_BAD_REQUEST";W.ERR_CANCELED="ERR_CANCELED";W.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";W.ERR_INVALID_URL="ERR_INVALID_URL";const EN=null;function nf(t){return x.isPlainObject(t)||x.isArray(t)}function eS(t){return x.endsWith(t,"[]")?t.slice(0,-2):t}function Nh(t,e,n){return t?t.concat(e).map(function(i,s){return i=eS(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function SN(t){return x.isArray(t)&&!t.some(nf)}const TN=x.toFlatObject(x,{},null,function(e){return/^is[A-Z]/.test(e)});function fc(t,e,n){if(!x.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=x.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(C,I){return!x.isUndefined(I[C])});const r=n.metaTokens,i=n.visitor||d,s=n.dots,o=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&x.isSpecCompliantForm(e);if(!x.isFunction(i))throw new TypeError("visitor must be a function");function c(y){if(y===null)return"";if(x.isDate(y))return y.toISOString();if(x.isBoolean(y))return y.toString();if(!u&&x.isBlob(y))throw new W("Blob is not supported. Use a Buffer instead.");return x.isArrayBuffer(y)||x.isTypedArray(y)?u&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function d(y,C,I){let w=y;if(x.isReactNative(e)&&x.isReactNativeBlob(y))return e.append(Nh(I,C,s),c(y)),!1;if(y&&!I&&typeof y=="object"){if(x.endsWith(C,"{}"))C=r?C:C.slice(0,-2),y=JSON.stringify(y);else if(x.isArray(y)&&SN(y)||(x.isFileList(y)||x.endsWith(C,"[]"))&&(w=x.toArray(y)))return C=eS(C),w.forEach(function(E,P){!(x.isUndefined(E)||E===null)&&e.append(o===!0?Nh([C],P,s):o===null?C:C+"[]",c(E))}),!1}return nf(y)?!0:(e.append(Nh(I,C,s),c(y)),!1)}const f=[],m=Object.assign(TN,{defaultVisitor:d,convertValue:c,isVisitable:nf});function k(y,C){if(!x.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+C.join("."));f.push(y),x.forEach(y,function(w,v){(!(x.isUndefined(w)||w===null)&&i.call(e,w,x.isString(v)?v.trim():v,C,m))===!0&&k(w,C?C.concat(v):[v])}),f.pop()}}if(!x.isObject(t))throw new TypeError("data must be an object");return k(t),e}function iy(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Pp(t,e){this._pairs=[],t&&fc(t,this,e)}const tS=Pp.prototype;tS.append=function(e,n){this._pairs.push([e,n])};tS.toString=function(e){const n=e?function(r){return e.call(this,r,iy)}:iy;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function IN(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function nS(t,e,n){if(!e)return t;const r=n&&n.encode||IN,i=x.isFunction(n)?{serialize:n}:n,s=i&&i.serialize;let o;if(s?o=s(e,i):o=x.isURLSearchParams(e)?e.toString():new Pp(e,i).toString(r),o){const l=t.indexOf("#");l!==-1&&(t=t.slice(0,l)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class sy{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){x.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Op={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},CN=typeof URLSearchParams<"u"?URLSearchParams:Pp,kN=typeof FormData<"u"?FormData:null,RN=typeof Blob<"u"?Blob:null,AN={isBrowser:!0,classes:{URLSearchParams:CN,FormData:kN,Blob:RN},protocols:["http","https","file","blob","url","data"]},bp=typeof window<"u"&&typeof document<"u",rf=typeof navigator=="object"&&navigator||void 0,NN=bp&&(!rf||["ReactNative","NativeScript","NS"].indexOf(rf.product)<0),PN=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ON=bp&&window.location.href||"http://localhost",bN=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:bp,hasStandardBrowserEnv:NN,hasStandardBrowserWebWorkerEnv:PN,navigator:rf,origin:ON},Symbol.toStringTag,{value:"Module"})),st={...bN,...AN};function xN(t,e){return fc(t,new st.classes.URLSearchParams,{visitor:function(n,r,i,s){return st.isNode&&x.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}function DN(t){return x.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function LN(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function rS(t){function e(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),u=s>=n.length;return o=!o&&x.isArray(i)?i.length:o,u?(x.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!l):((!i[o]||!x.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&x.isArray(i[o])&&(i[o]=LN(i[o])),!l)}if(x.isFormData(t)&&x.isFunction(t.entries)){const n={};return x.forEachEntry(t,(r,i)=>{e(DN(r),i,n,0)}),n}return null}function MN(t,e,n){if(x.isString(t))try{return(e||JSON.parse)(t),x.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Ta={transitional:Op,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=x.isObject(e);if(s&&x.isHTMLForm(e)&&(e=new FormData(e)),x.isFormData(e))return i?JSON.stringify(rS(e)):e;if(x.isArrayBuffer(e)||x.isBuffer(e)||x.isStream(e)||x.isFile(e)||x.isBlob(e)||x.isReadableStream(e))return e;if(x.isArrayBufferView(e))return e.buffer;if(x.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return xN(e,this.formSerializer).toString();if((l=x.isFileList(e))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return fc(l?{"files[]":e}:e,u&&new u,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),MN(e)):e}],transformResponse:[function(e){const n=this.transitional||Ta.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(x.isResponse(e)||x.isReadableStream(e))return e;if(e&&x.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e,this.parseReviver)}catch(l){if(o)throw l.name==="SyntaxError"?W.from(l,W.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:st.classes.FormData,Blob:st.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};x.forEach(["delete","get","head","post","put","patch"],t=>{Ta.headers[t]={}});const FN=x.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),UN=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&FN[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},oy=Symbol("internals"),jN=t=>!/[\r\n]/.test(t);function iS(t,e){if(!(t===!1||t==null)){if(x.isArray(t)){t.forEach(n=>iS(n,e));return}if(!jN(String(t)))throw new Error(`Invalid character in header content ["${e}"]`)}}function lo(t){return t&&String(t).trim().toLowerCase()}function BN(t){let e=t.length;for(;e>0;){const n=t.charCodeAt(e-1);if(n!==10&&n!==13)break;e-=1}return e===t.length?t:t.slice(0,e)}function Fl(t){return t===!1||t==null?t:x.isArray(t)?t.map(Fl):BN(String(t))}function VN(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const $N=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Ph(t,e,n,r,i){if(x.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!x.isString(e)){if(x.isString(r))return e.indexOf(r)!==-1;if(x.isRegExp(r))return r.test(e)}}function zN(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function HN(t,e){const n=x.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}let At=class{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(l,u,c){const d=lo(u);if(!d)throw new Error("header name must be a non-empty string");const f=x.findKey(i,d);(!f||i[f]===void 0||c===!0||c===void 0&&i[f]!==!1)&&(iS(l,u),i[f||u]=Fl(l))}const o=(l,u)=>x.forEach(l,(c,d)=>s(c,d,u));if(x.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(x.isString(e)&&(e=e.trim())&&!$N(e))o(UN(e),n);else if(x.isObject(e)&&x.isIterable(e)){let l={},u,c;for(const d of e){if(!x.isArray(d))throw TypeError("Object iterator must return a key-value pair");l[c=d[0]]=(u=l[c])?x.isArray(u)?[...u,d[1]]:[u,d[1]]:d[1]}o(l,n)}else e!=null&&s(n,e,r);return this}get(e,n){if(e=lo(e),e){const r=x.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return VN(i);if(x.isFunction(n))return n.call(this,i,r);if(x.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=lo(e),e){const r=x.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Ph(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=lo(o),o){const l=x.findKey(r,o);l&&(!n||Ph(r,r[l],l,n))&&(delete r[l],i=!0)}}return x.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||Ph(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return x.forEach(this,(i,s)=>{const o=x.findKey(r,s);if(o){n[o]=Fl(i),delete n[s];return}const l=e?zN(s):String(s).trim();l!==s&&delete n[s],n[l]=Fl(i),r[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return x.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&x.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[oy]=this[oy]={accessors:{}}).accessors,i=this.prototype;function s(o){const l=lo(o);r[l]||(HN(i,o),r[l]=!0)}return x.isArray(e)?e.forEach(s):s(e),this}};At.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);x.reduceDescriptors(At.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});x.freezeMethods(At);function Oh(t,e){const n=this||Ta,r=e||n,i=At.from(r.headers);let s=r.data;return x.forEach(t,function(l){s=l.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function sS(t){return!!(t&&t.__CANCEL__)}let Ia=class extends W{constructor(e,n,r){super(e??"canceled",W.ERR_CANCELED,n,r),this.name="CanceledError",this.__CANCEL__=!0}};function oS(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new W("Request failed with status code "+n.status,[W.ERR_BAD_REQUEST,W.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function WN(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function qN(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(u){const c=Date.now(),d=r[s];o||(o=c),n[i]=u,r[i]=c;let f=s,m=0;for(;f!==i;)m+=n[f++],f=f%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),c-o<e)return;const k=d&&c-d;return k?Math.round(m*1e3/k):void 0}}function GN(t,e){let n=0,r=1e3/e,i,s;const o=(c,d=Date.now())=>{n=d,i=null,s&&(clearTimeout(s),s=null),t(...c)};return[(...c)=>{const d=Date.now(),f=d-n;f>=r?o(c,d):(i=c,s||(s=setTimeout(()=>{s=null,o(i)},r-f)))},()=>i&&o(i)]}const yu=(t,e,n=3)=>{let r=0;const i=qN(50,250);return GN(s=>{const o=s.loaded,l=s.lengthComputable?s.total:void 0,u=o-r,c=i(u),d=o<=l;r=o;const f={loaded:o,total:l,progress:l?o/l:void 0,bytes:u,rate:c||void 0,estimated:c&&l&&d?(l-o)/c:void 0,event:s,lengthComputable:l!=null,[e?"download":"upload"]:!0};t(f)},n)},ay=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},ly=t=>(...e)=>x.asap(()=>t(...e)),KN=st.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,st.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(st.origin),st.navigator&&/(msie|trident)/i.test(st.navigator.userAgent)):()=>!0,YN=st.hasStandardBrowserEnv?{write(t,e,n,r,i,s,o){if(typeof document>"u")return;const l=[`${t}=${encodeURIComponent(e)}`];x.isNumber(n)&&l.push(`expires=${new Date(n).toUTCString()}`),x.isString(r)&&l.push(`path=${r}`),x.isString(i)&&l.push(`domain=${i}`),s===!0&&l.push("secure"),x.isString(o)&&l.push(`SameSite=${o}`),document.cookie=l.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+t+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function JN(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function XN(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function aS(t,e,n){let r=!JN(e);return t&&(r||n==!1)?XN(t,e):e}const uy=t=>t instanceof At?{...t}:t;function wi(t,e){e=e||{};const n={};function r(c,d,f,m){return x.isPlainObject(c)&&x.isPlainObject(d)?x.merge.call({caseless:m},c,d):x.isPlainObject(d)?x.merge({},d):x.isArray(d)?d.slice():d}function i(c,d,f,m){if(x.isUndefined(d)){if(!x.isUndefined(c))return r(void 0,c,f,m)}else return r(c,d,f,m)}function s(c,d){if(!x.isUndefined(d))return r(void 0,d)}function o(c,d){if(x.isUndefined(d)){if(!x.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function l(c,d,f){if(f in e)return r(c,d);if(f in t)return r(void 0,c)}const u={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(c,d,f)=>i(uy(c),uy(d),f,!0)};return x.forEach(Object.keys({...t,...e}),function(d){if(d==="__proto__"||d==="constructor"||d==="prototype")return;const f=x.hasOwnProp(u,d)?u[d]:i,m=f(t[d],e[d],d);x.isUndefined(m)&&f!==l||(n[d]=m)}),n}const lS=t=>{const e=wi({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:l}=e;if(e.headers=o=At.from(o),e.url=nS(aS(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),l&&o.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),x.isFormData(n)){if(st.hasStandardBrowserEnv||st.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(x.isFunction(n.getHeaders)){const u=n.getHeaders(),c=["content-type","content-length"];Object.entries(u).forEach(([d,f])=>{c.includes(d.toLowerCase())&&o.set(d,f)})}}if(st.hasStandardBrowserEnv&&(r&&x.isFunction(r)&&(r=r(e)),r||r!==!1&&KN(e.url))){const u=i&&s&&YN.read(s);u&&o.set(i,u)}return e},QN=typeof XMLHttpRequest<"u",ZN=QN&&function(t){return new Promise(function(n,r){const i=lS(t);let s=i.data;const o=At.from(i.headers).normalize();let{responseType:l,onUploadProgress:u,onDownloadProgress:c}=i,d,f,m,k,y;function C(){k&&k(),y&&y(),i.cancelToken&&i.cancelToken.unsubscribe(d),i.signal&&i.signal.removeEventListener("abort",d)}let I=new XMLHttpRequest;I.open(i.method.toUpperCase(),i.url,!0),I.timeout=i.timeout;function w(){if(!I)return;const E=At.from("getAllResponseHeaders"in I&&I.getAllResponseHeaders()),M={data:!l||l==="text"||l==="json"?I.responseText:I.response,status:I.status,statusText:I.statusText,headers:E,config:t,request:I};oS(function(S){n(S),C()},function(S){r(S),C()},M),I=null}"onloadend"in I?I.onloadend=w:I.onreadystatechange=function(){!I||I.readyState!==4||I.status===0&&!(I.responseURL&&I.responseURL.indexOf("file:")===0)||setTimeout(w)},I.onabort=function(){I&&(r(new W("Request aborted",W.ECONNABORTED,t,I)),I=null)},I.onerror=function(P){const M=P&&P.message?P.message:"Network Error",F=new W(M,W.ERR_NETWORK,t,I);F.event=P||null,r(F),I=null},I.ontimeout=function(){let P=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const M=i.transitional||Op;i.timeoutErrorMessage&&(P=i.timeoutErrorMessage),r(new W(P,M.clarifyTimeoutError?W.ETIMEDOUT:W.ECONNABORTED,t,I)),I=null},s===void 0&&o.setContentType(null),"setRequestHeader"in I&&x.forEach(o.toJSON(),function(P,M){I.setRequestHeader(M,P)}),x.isUndefined(i.withCredentials)||(I.withCredentials=!!i.withCredentials),l&&l!=="json"&&(I.responseType=i.responseType),c&&([m,y]=yu(c,!0),I.addEventListener("progress",m)),u&&I.upload&&([f,k]=yu(u),I.upload.addEventListener("progress",f),I.upload.addEventListener("loadend",k)),(i.cancelToken||i.signal)&&(d=E=>{I&&(r(!E||E.type?new Ia(null,t,I):E),I.abort(),I=null)},i.cancelToken&&i.cancelToken.subscribe(d),i.signal&&(i.signal.aborted?d():i.signal.addEventListener("abort",d)));const v=WN(i.url);if(v&&st.protocols.indexOf(v)===-1){r(new W("Unsupported protocol "+v+":",W.ERR_BAD_REQUEST,t));return}I.send(s||null)})},eP=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,i;const s=function(c){if(!i){i=!0,l();const d=c instanceof Error?c:this.reason;r.abort(d instanceof W?d:new Ia(d instanceof Error?d.message:d))}};let o=e&&setTimeout(()=>{o=null,s(new W(`timeout of ${e}ms exceeded`,W.ETIMEDOUT))},e);const l=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>c.addEventListener("abort",s));const{signal:u}=r;return u.unsubscribe=()=>x.asap(l),u}},tP=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,i;for(;r<n;)i=r+e,yield t.slice(r,i),r=i},nP=async function*(t,e){for await(const n of rP(t))yield*tP(n,e)},rP=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},cy=(t,e,n,r)=>{const i=nP(t,e);let s=0,o,l=u=>{o||(o=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:c,value:d}=await i.next();if(c){l(),u.close();return}let f=d.byteLength;if(n){let m=s+=f;n(m)}u.enqueue(new Uint8Array(d))}catch(c){throw l(c),c}},cancel(u){return l(u),i.return()}},{highWaterMark:2})},hy=64*1024,{isFunction:gl}=x,iP=(({Request:t,Response:e})=>({Request:t,Response:e}))(x.global),{ReadableStream:dy,TextEncoder:fy}=x.global,py=(t,...e)=>{try{return!!t(...e)}catch{return!1}},sP=t=>{t=x.merge.call({skipUndefined:!0},iP,t);const{fetch:e,Request:n,Response:r}=t,i=e?gl(e):typeof fetch=="function",s=gl(n),o=gl(r);if(!i)return!1;const l=i&&gl(dy),u=i&&(typeof fy=="function"?(y=>C=>y.encode(C))(new fy):async y=>new Uint8Array(await new n(y).arrayBuffer())),c=s&&l&&py(()=>{let y=!1;const C=new dy,I=new n(st.origin,{body:C,method:"POST",get duplex(){return y=!0,"half"}}).headers.has("Content-Type");return C.cancel(),y&&!I}),d=o&&l&&py(()=>x.isReadableStream(new r("").body)),f={stream:d&&(y=>y.body)};i&&["text","arrayBuffer","blob","formData","stream"].forEach(y=>{!f[y]&&(f[y]=(C,I)=>{let w=C&&C[y];if(w)return w.call(C);throw new W(`Response type '${y}' is not supported`,W.ERR_NOT_SUPPORT,I)})});const m=async y=>{if(y==null)return 0;if(x.isBlob(y))return y.size;if(x.isSpecCompliantForm(y))return(await new n(st.origin,{method:"POST",body:y}).arrayBuffer()).byteLength;if(x.isArrayBufferView(y)||x.isArrayBuffer(y))return y.byteLength;if(x.isURLSearchParams(y)&&(y=y+""),x.isString(y))return(await u(y)).byteLength},k=async(y,C)=>{const I=x.toFiniteNumber(y.getContentLength());return I??m(C)};return async y=>{let{url:C,method:I,data:w,signal:v,cancelToken:E,timeout:P,onDownloadProgress:M,onUploadProgress:F,responseType:S,headers:_,withCredentials:T="same-origin",fetchOptions:A}=lS(y),N=e||fetch;S=S?(S+"").toLowerCase():"text";let O=eP([v,E&&E.toAbortSignal()],P),R=null;const J=O&&O.unsubscribe&&(()=>{O.unsubscribe()});let je;try{if(F&&c&&I!=="get"&&I!=="head"&&(je=await k(_,w))!==0){let se=new n(C,{method:"POST",body:w,duplex:"half"}),Q;if(x.isFormData(w)&&(Q=se.headers.get("content-type"))&&_.setContentType(Q),se.body){const[me,vt]=ay(je,yu(ly(F)));w=cy(se.body,hy,me,vt)}}x.isString(T)||(T=T?"include":"omit");const X=s&&"credentials"in n.prototype,Ne={...A,signal:O,method:I.toUpperCase(),headers:_.normalize().toJSON(),body:w,duplex:"half",credentials:X?T:void 0};R=s&&new n(C,Ne);let j=await(s?N(R,A):N(C,Ne));const H=d&&(S==="stream"||S==="response");if(d&&(M||H&&J)){const se={};["status","statusText","headers"].forEach(jt=>{se[jt]=j[jt]});const Q=x.toFiniteNumber(j.headers.get("content-length")),[me,vt]=M&&ay(Q,yu(ly(M),!0))||[];j=new r(cy(j.body,hy,me,()=>{vt&&vt(),J&&J()}),se)}S=S||"text";let G=await f[x.findKey(f,S)||"text"](j,y);return!H&&J&&J(),await new Promise((se,Q)=>{oS(se,Q,{data:G,headers:At.from(j.headers),status:j.status,statusText:j.statusText,config:y,request:R})})}catch(X){throw J&&J(),X&&X.name==="TypeError"&&/Load failed|fetch/i.test(X.message)?Object.assign(new W("Network Error",W.ERR_NETWORK,y,R,X&&X.response),{cause:X.cause||X}):W.from(X,X&&X.code,y,R,X&&X.response)}}},oP=new Map,uS=t=>{let e=t&&t.env||{};const{fetch:n,Request:r,Response:i}=e,s=[r,i,n];let o=s.length,l=o,u,c,d=oP;for(;l--;)u=s[l],c=d.get(u),c===void 0&&d.set(u,c=l?new Map:sP(e)),d=c;return c};uS();const xp={http:EN,xhr:ZN,fetch:{get:uS}};x.forEach(xp,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const my=t=>`- ${t}`,aP=t=>x.isFunction(t)||t===null||t===!1;function lP(t,e){t=x.isArray(t)?t:[t];const{length:n}=t;let r,i;const s={};for(let o=0;o<n;o++){r=t[o];let l;if(i=r,!aP(r)&&(i=xp[(l=String(r)).toLowerCase()],i===void 0))throw new W(`Unknown adapter '${l}'`);if(i&&(x.isFunction(i)||(i=i.get(e))))break;s[l||"#"+o]=i}if(!i){const o=Object.entries(s).map(([u,c])=>`adapter ${u} `+(c===!1?"is not supported by the environment":"is not available in the build"));let l=n?o.length>1?`since :
`+o.map(my).join(`
`):" "+my(o[0]):"as no adapter specified";throw new W("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return i}const cS={getAdapter:lP,adapters:xp};function bh(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ia(null,t)}function gy(t){return bh(t),t.headers=At.from(t.headers),t.data=Oh.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),cS.getAdapter(t.adapter||Ta.adapter,t)(t).then(function(r){return bh(t),r.data=Oh.call(t,t.transformResponse,r),r.headers=At.from(r.headers),r},function(r){return sS(r)||(bh(t),r&&r.response&&(r.response.data=Oh.call(t,t.transformResponse,r.response),r.response.headers=At.from(r.response.headers))),Promise.reject(r)})}const hS="1.15.0",pc={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{pc[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const _y={};pc.transitional=function(e,n,r){function i(s,o){return"[Axios v"+hS+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,l)=>{if(e===!1)throw new W(i(o," has been removed"+(n?" in "+n:"")),W.ERR_DEPRECATED);return n&&!_y[o]&&(_y[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,l):!0}};pc.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function uP(t,e,n){if(typeof t!="object")throw new W("options must be an object",W.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const l=t[s],u=l===void 0||o(l,s,t);if(u!==!0)throw new W("option "+s+" must be "+u,W.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new W("Unknown option "+s,W.ERR_BAD_OPTION)}}const Ul={assertOptions:uP,validators:pc},Vt=Ul.validators;let ci=class{constructor(e){this.defaults=e||{},this.interceptors={request:new sy,response:new sy}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const s=(()=>{if(!i.stack)return"";const o=i.stack.indexOf(`
`);return o===-1?"":i.stack.slice(o+1)})();try{if(!r.stack)r.stack=s;else if(s){const o=s.indexOf(`
`),l=o===-1?-1:s.indexOf(`
`,o+1),u=l===-1?"":s.slice(l+1);String(r.stack).endsWith(u)||(r.stack+=`
`+s)}}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=wi(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Ul.assertOptions(r,{silentJSONParsing:Vt.transitional(Vt.boolean),forcedJSONParsing:Vt.transitional(Vt.boolean),clarifyTimeoutError:Vt.transitional(Vt.boolean),legacyInterceptorReqResOrdering:Vt.transitional(Vt.boolean)},!1),i!=null&&(x.isFunction(i)?n.paramsSerializer={serialize:i}:Ul.assertOptions(i,{encode:Vt.function,serialize:Vt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Ul.assertOptions(n,{baseUrl:Vt.spelling("baseURL"),withXsrfToken:Vt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&x.merge(s.common,s[n.method]);s&&x.forEach(["delete","get","head","post","put","patch","common"],y=>{delete s[y]}),n.headers=At.concat(o,s);const l=[];let u=!0;this.interceptors.request.forEach(function(C){if(typeof C.runWhen=="function"&&C.runWhen(n)===!1)return;u=u&&C.synchronous;const I=n.transitional||Op;I&&I.legacyInterceptorReqResOrdering?l.unshift(C.fulfilled,C.rejected):l.push(C.fulfilled,C.rejected)});const c=[];this.interceptors.response.forEach(function(C){c.push(C.fulfilled,C.rejected)});let d,f=0,m;if(!u){const y=[gy.bind(this),void 0];for(y.unshift(...l),y.push(...c),m=y.length,d=Promise.resolve(n);f<m;)d=d.then(y[f++],y[f++]);return d}m=l.length;let k=n;for(;f<m;){const y=l[f++],C=l[f++];try{k=y(k)}catch(I){C.call(this,I);break}}try{d=gy.call(this,k)}catch(y){return Promise.reject(y)}for(f=0,m=c.length;f<m;)d=d.then(c[f++],c[f++]);return d}getUri(e){e=wi(this.defaults,e);const n=aS(e.baseURL,e.url,e.allowAbsoluteUrls);return nS(n,e.params,e.paramsSerializer)}};x.forEach(["delete","get","head","options"],function(e){ci.prototype[e]=function(n,r){return this.request(wi(r||{},{method:e,url:n,data:(r||{}).data}))}});x.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,l){return this.request(wi(l||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}ci.prototype[e]=n(),ci.prototype[e+"Form"]=n(!0)});let cP=class dS{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(l=>{r.subscribe(l),s=l}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,l){r.reason||(r.reason=new Ia(s,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new dS(function(i){e=i}),cancel:e}}};function hP(t){return function(n){return t.apply(null,n)}}function dP(t){return x.isObject(t)&&t.isAxiosError===!0}const sf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(sf).forEach(([t,e])=>{sf[e]=t});function fS(t){const e=new ci(t),n=WE(ci.prototype.request,e);return x.extend(n,ci.prototype,e,{allOwnKeys:!0}),x.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return fS(wi(t,i))},n}const xe=fS(Ta);xe.Axios=ci;xe.CanceledError=Ia;xe.CancelToken=cP;xe.isCancel=sS;xe.VERSION=hS;xe.toFormData=fc;xe.AxiosError=W;xe.Cancel=xe.CanceledError;xe.all=function(e){return Promise.all(e)};xe.spread=hP;xe.isAxiosError=dP;xe.mergeConfig=wi;xe.AxiosHeaders=At;xe.formToJSON=t=>rS(x.isHTMLForm(t)?new FormData(t):t);xe.getAdapter=cS.getAdapter;xe.HttpStatusCode=sf;xe.default=xe;const{Axios:U6,AxiosError:j6,CanceledError:B6,isCancel:V6,CancelToken:$6,VERSION:z6,all:H6,Cancel:W6,isAxiosError:q6,spread:G6,toFormData:K6,AxiosHeaders:Y6,HttpStatusCode:J6,formToJSON:X6,getAdapter:Q6,mergeConfig:Z6}=xe,Ce=xe.create({baseURL:"/api"}),fP=()=>{const t="/api";return/^https?:\/\//i.test(t)?t.replace(/\/api\/?$/,""):window.location.origin},pP=()=>{const t=localStorage.getItem("token");if(t)return t;const e=localStorage.getItem("auth_session");if(!e)return null;try{const n=JSON.parse(e);return!(n!=null&&n.token)||!(n!=null&&n.expiresAt)||n.expiresAt<=Date.now()?(localStorage.removeItem("auth_session"),null):n.token}catch{return localStorage.removeItem("auth_session"),null}};Ce.interceptors.request.use(t=>{const e=pP();return e&&(t.headers.Authorization=`Bearer ${e}`),t});const eF=t=>Ce.post("/auth/forgot-password",{email:t}),tF=(t,e)=>Ce.post("/auth/change-password",{oldPassword:t,newPassword:e}),mP=t=>Ce.post("/auth/push-token",{token:t}),gP=t=>Ce.delete("/auth/push-token",{data:t?{token:t}:{}}),nF=t=>Ce.post("/bookings",t),rF=()=>Ce.get("/bookings/my"),iF=t=>Ce.delete(`/bookings/${t}`),sF=(t,e)=>{const n=new FormData;return n.append("event_report",e),Ce.post(`/bookings/${t}/report`,n)},oF=(t,e)=>Ce.get("/bookings/calendar",{params:{start:t,end:e}}),aF=t=>Ce.get("/bookings",{params:t}),lF=()=>Ce.get("/bookings/pending"),uF=(t,e,n)=>Ce.patch(`/bookings/${t}/status`,{status:e,admin_note:n}),cF=t=>Ce.get("/reports/pdf",{params:t,responseType:"blob"}),hF=t=>Ce.get("/reports/excel",{params:t,responseType:"blob"}),dF=()=>Ce.get("/reports/analytics"),fF=()=>Ce.get("/reports/action-logs/download",{responseType:"blob"}),pF=t=>t?`${fP()}${t}`:null,mF=async t=>{var s;const e=await Ce.get(t,{responseType:"blob"}),n=((s=e.headers)==null?void 0:s["content-type"])||"application/octet-stream",r=new Blob([e.data],{type:n}),i=URL.createObjectURL(r);window.open(i,"_blank","noopener,noreferrer"),setTimeout(()=>URL.revokeObjectURL(i),6e4)},_P=(t,e)=>{if(!t)return e;const n=t.match(/filename\*=UTF-8''([^;]+)/i);if(n!=null&&n[1])try{return decodeURIComponent(n[1])}catch{return n[1]}const r=t.match(/filename="?([^"]+)"?/i);return(r==null?void 0:r[1])||e},gF=async(t,e="file.pdf")=>{var c,d;const n=await Ce.get(t,{responseType:"blob"}),r=((c=n.headers)==null?void 0:c["content-type"])||"application/octet-stream",i=(d=n.headers)==null?void 0:d["content-disposition"],s=_P(i,e),o=new Blob([n.data],{type:r}),l=URL.createObjectURL(o),u=document.createElement("a");u.href=l,u.download=s,u.click(),setTimeout(()=>URL.revokeObjectURL(l),6e4)},yP=()=>{};var yy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=function(t,e){if(!t)throw Ds(e)},Ds=function(t){return new Error("Firebase Database ("+pS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Dp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,k=c&63;u||(k=64,o||(m=64)),r.push(n[d],n[f],n[m],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||f==null)throw new wP;const m=s<<2|l>>4;if(r.push(m),c!==64){const k=l<<4&240|c>>2;if(r.push(k),f!==64){const y=c<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gS=function(t){const e=mS(t);return Dp.encodeByteArray(e,!0)},vu=function(t){return gS(t).replace(/\./g,"")},wu=function(t){try{return Dp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EP(t){return _S(void 0,t)}function _S(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!SP(n)||(t[n]=_S(t[n],e[n]));return t}function SP(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP=()=>TP().__FIREBASE_DEFAULTS__,CP=()=>{if(typeof process>"u"||typeof yy>"u")return;const t=yy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wu(t[1]);return e&&JSON.parse(e)},Lp=()=>{try{return yP()||IP()||CP()||kP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yS=t=>{var e,n;return(n=(e=Lp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Mp=t=>{const e=yS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},vS=()=>{var t;return(t=Lp())===null||t===void 0?void 0:t.config},wS=t=>{var e;return(e=Lp())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function mc(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[vu(JSON.stringify(n)),vu(JSON.stringify(o)),""].join(".")}const Po={};function RP(){const t={prod:[],emulator:[]};for(const e of Object.keys(Po))Po[e]?t.emulator.push(e):t.prod.push(e);return t}function AP(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let vy=!1;function gc(t,e){if(typeof window>"u"||typeof document>"u"||!$r(window.location.host)||Po[t]===e||Po[t]||vy)return;Po[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=RP().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,k){m.setAttribute("width","24"),m.setAttribute("id",k),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{vy=!0,o()},m}function d(m,k){m.setAttribute("id",k),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function f(){const m=AP(r),k=n("text"),y=document.getElementById(k)||document.createElement("span"),C=n("learnmore"),I=document.getElementById(C)||document.createElement("a"),w=n("preprendIcon"),v=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const E=m.element;l(E),d(I,C);const P=c();u(v,w),E.append(v,y,I,P),document.body.appendChild(E)}s?(y.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function NP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ES(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function SS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PP(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function OP(){return pS.NODE_ADMIN===!0}function Bp(){try{return typeof indexedDB=="object"}catch{return!1}}function Vp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function TS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP="FirebaseError";class Zt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bP,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zr.prototype.create)}}class zr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?xP(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Zt(i,l,r)}}function xP(t,e){return t.replace(DP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const DP=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t){return JSON.parse(t)}function Ke(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=oa(wu(s[0])||""),n=oa(wu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},LP=function(t){const e=IS(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},MP=function(t){const e=IS(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ts(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function of(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Eu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Qn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(wy(s)&&wy(o)){if(!Qn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function wy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],u=this.chain_[4],c,d;for(let f=0;f<80;f++){f<40?f<20?(c=l^s&(o^l),d=1518500249):(c=s^o^l,d=1859775393):f<60?(c=s&o|l&(s|o),d=2400959708):(c=s^o^l,d=3395469782);const m=(i<<5|i>>>27)+c+u+d+r[f]&4294967295;u=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function UP(t,e){const n=new jP(t,e);return n.subscribe.bind(n)}class jP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");BP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=xh),i.error===void 0&&(i.error=xh),i.complete===void 0&&(i.complete=xh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xh(){}function VP(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,$(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_c=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP=1e3,HP=2,WP=4*60*60*1e3,qP=.5;function Ey(t,e=zP,n=HP){const r=e*Math.pow(n,t),i=Math.round(qP*r*(Math.random()-.5)*2);return Math.min(WP,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t){return t&&t._delegate?t._delegate:t}class mt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Fp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YP(e))try{this.getOrInitializeService({instanceIdentifier:Qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qr){return this.instances.has(e)}getOptions(e=Qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qr){return this.component?this.component.multipleInstances?e:Qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KP(t){return t===Qr?void 0:t}function YP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new GP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const XP={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},QP=ae.INFO,ZP={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},eO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ZP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ca{constructor(e){this.name=e,this._logLevel=QP,this._logHandler=eO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const tO=(t,e)=>e.some(n=>t instanceof n);let Sy,Ty;function nO(){return Sy||(Sy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rO(){return Ty||(Ty=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const CS=new WeakMap,af=new WeakMap,kS=new WeakMap,Dh=new WeakMap,$p=new WeakMap;function iO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(qn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&CS.set(n,t)}).catch(()=>{}),$p.set(e,t),e}function sO(t){if(af.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});af.set(t,e)}let lf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return af.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oO(t){lf=t(lf)}function aO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Lh(this),e,...n);return kS.set(r,e.sort?e.sort():[e]),qn(r)}:rO().includes(t)?function(...e){return t.apply(Lh(this),e),qn(CS.get(this))}:function(...e){return qn(t.apply(Lh(this),e))}}function lO(t){return typeof t=="function"?aO(t):(t instanceof IDBTransaction&&sO(t),tO(t,nO())?new Proxy(t,lf):t)}function qn(t){if(t instanceof IDBRequest)return iO(t);if(Dh.has(t))return Dh.get(t);const e=lO(t);return e!==t&&(Dh.set(t,e),$p.set(e,t)),e}const Lh=t=>$p.get(t);function yc(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=qn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(qn(o.result),u.oldVersion,u.newVersion,qn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}function Mh(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),qn(n).then(()=>{})}const uO=["get","getKey","getAll","getAllKeys","count"],cO=["put","add","delete","clear"],Fh=new Map;function Iy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fh.get(e))return Fh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=cO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uO.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Fh.set(e,s),s}oO(t=>({...t,get:(e,n,r)=>Iy(e,n)||t.get(e,n,r),has:(e,n)=>!!Iy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const uf="@firebase/app",Cy="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new Ca("@firebase/app"),fO="@firebase/app-compat",pO="@firebase/analytics-compat",mO="@firebase/analytics",gO="@firebase/app-check-compat",_O="@firebase/app-check",yO="@firebase/auth",vO="@firebase/auth-compat",wO="@firebase/database",EO="@firebase/data-connect",SO="@firebase/database-compat",TO="@firebase/functions",IO="@firebase/functions-compat",CO="@firebase/installations",kO="@firebase/installations-compat",RO="@firebase/messaging",AO="@firebase/messaging-compat",NO="@firebase/performance",PO="@firebase/performance-compat",OO="@firebase/remote-config",bO="@firebase/remote-config-compat",xO="@firebase/storage",DO="@firebase/storage-compat",LO="@firebase/firestore",MO="@firebase/ai",FO="@firebase/firestore-compat",UO="firebase",jO="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf="[DEFAULT]",BO={[uf]:"fire-core",[fO]:"fire-core-compat",[mO]:"fire-analytics",[pO]:"fire-analytics-compat",[_O]:"fire-app-check",[gO]:"fire-app-check-compat",[yO]:"fire-auth",[vO]:"fire-auth-compat",[wO]:"fire-rtdb",[EO]:"fire-data-connect",[SO]:"fire-rtdb-compat",[TO]:"fire-fn",[IO]:"fire-fn-compat",[CO]:"fire-iid",[kO]:"fire-iid-compat",[RO]:"fire-fcm",[AO]:"fire-fcm-compat",[NO]:"fire-perf",[PO]:"fire-perf-compat",[OO]:"fire-rc",[bO]:"fire-rc-compat",[xO]:"fire-gcs",[DO]:"fire-gcs-compat",[LO]:"fire-fst",[FO]:"fire-fst-compat",[MO]:"fire-vertex","fire-js":"fire-js",[UO]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=new Map,VO=new Map,hf=new Map;function ky(t,e){try{t.container.addComponent(e)}catch(n){Zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Pt(t){const e=t.name;if(hf.has(e))return Zn.debug(`There were multiple attempts to register component ${e}.`),!1;hf.set(e,t);for(const n of aa.values())ky(n,t);for(const n of VO.values())ky(n,t);return!0}function Pn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function qt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xr=new zr("app","Firebase",$O);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=jO;function zp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:cf,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw xr.create("bad-app-name",{appName:String(i)});if(n||(n=vS()),!n)throw xr.create("no-options");const s=aa.get(i);if(s){if(Qn(n,s.options)&&Qn(r,s.config))return s;throw xr.create("duplicate-app",{appName:i})}const o=new JP(i);for(const u of hf.values())o.addComponent(u);const l=new zO(n,r,o);return aa.set(i,l),l}function Ms(t=cf){const e=aa.get(t);if(!e&&t===cf&&vS())return zp();if(!e)throw xr.create("no-app",{appName:t});return e}function Su(){return Array.from(aa.values())}function We(t,e,n){var r;let i=(r=BO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zn.warn(l.join(" "));return}Pt(new mt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO="firebase-heartbeat-database",WO=1,la="firebase-heartbeat-store";let Uh=null;function RS(){return Uh||(Uh=yc(HO,WO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(la)}catch(n){console.warn(n)}}}}).catch(t=>{throw xr.create("idb-open",{originalErrorMessage:t.message})})),Uh}async function qO(t){try{const n=(await RS()).transaction(la),r=await n.objectStore(la).get(AS(t));return await n.done,r}catch(e){if(e instanceof Zt)Zn.warn(e.message);else{const n=xr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zn.warn(n.message)}}}async function Ry(t,e){try{const r=(await RS()).transaction(la,"readwrite");await r.objectStore(la).put(e,AS(t)),await r.done}catch(n){if(n instanceof Zt)Zn.warn(n.message);else{const r=xr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zn.warn(r.message)}}}function AS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO=1024,KO=30;class YO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new XO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ay();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>KO){const o=QO(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Zn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ay(),{heartbeatsToSend:r,unsentEntries:i}=JO(this._heartbeatsCache.heartbeats),s=vu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Zn.warn(n),""}}}function Ay(){return new Date().toISOString().substring(0,10)}function JO(t,e=GO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ny(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ny(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class XO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bp()?Vp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ry(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ry(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ny(t){return vu(JSON.stringify({version:2,heartbeats:t})).length}function QO(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZO(t){Pt(new mt("platform-logger",e=>new hO(e),"PRIVATE")),Pt(new mt("heartbeat",e=>new YO(e),"PRIVATE")),We(uf,Cy,t),We(uf,Cy,"esm2017"),We("fire-js","")}ZO("");var e2="firebase",t2="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */We(e2,t2,"app");const NS="@firebase/installations",Hp="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=1e4,OS=`w:${Hp}`,bS="FIS_v2",n2="https://firebaseinstallations.googleapis.com/v1",r2=60*60*1e3,i2="installations",s2="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ei=new zr(i2,s2,o2);function xS(t){return t instanceof Zt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS({projectId:t}){return`${n2}/projects/${t}/installations`}function LS(t){return{token:t.token,requestStatus:2,expiresIn:l2(t.expiresIn),creationTime:Date.now()}}async function MS(t,e){const r=(await e.json()).error;return Ei.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function FS({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function a2(t,{refreshToken:e}){const n=FS(t);return n.append("Authorization",u2(e)),n}async function US(t){const e=await t();return e.status>=500&&e.status<600?t():e}function l2(t){return Number(t.replace("s","000"))}function u2(t){return`${bS} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=DS(t),i=FS(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:bS,appId:t.appId,sdkVersion:OS},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await US(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:LS(c.authToken)}}else throw await MS("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2=/^[cdef][\w-]{21}$/,df="";function f2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=p2(t);return d2.test(n)?n:df}catch{return df}}function p2(t){return h2(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=new Map;function VS(t,e){const n=vc(t);$S(n,e),m2(n,e)}function $S(t,e){const n=BS.get(t);if(n)for(const r of n)r(e)}function m2(t,e){const n=g2();n&&n.postMessage({key:t,fid:e}),_2()}let si=null;function g2(){return!si&&"BroadcastChannel"in self&&(si=new BroadcastChannel("[Firebase] FID Change"),si.onmessage=t=>{$S(t.data.key,t.data.fid)}),si}function _2(){BS.size===0&&si&&(si.close(),si=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2="firebase-installations-database",v2=1,Si="firebase-installations-store";let jh=null;function Wp(){return jh||(jh=yc(y2,v2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Si)}}})),jh}async function Tu(t,e){const n=vc(t),i=(await Wp()).transaction(Si,"readwrite"),s=i.objectStore(Si),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&VS(t,e.fid),e}async function zS(t){const e=vc(t),r=(await Wp()).transaction(Si,"readwrite");await r.objectStore(Si).delete(e),await r.done}async function wc(t,e){const n=vc(t),i=(await Wp()).transaction(Si,"readwrite"),s=i.objectStore(Si),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&VS(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qp(t){let e;const n=await wc(t.appConfig,r=>{const i=w2(r),s=E2(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===df?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function w2(t){const e=t||{fid:f2(),registrationStatus:0};return HS(e)}function E2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ei.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=S2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:T2(t)}:{installationEntry:e}}async function S2(t,e){try{const n=await c2(t,e);return Tu(t.appConfig,n)}catch(n){throw xS(n)&&n.customData.serverCode===409?await zS(t.appConfig):await Tu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function T2(t){let e=await Py(t.appConfig);for(;e.registrationStatus===1;)await jS(100),e=await Py(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await qp(t);return r||n}return e}function Py(t){return wc(t,e=>{if(!e)throw Ei.create("installation-not-found");return HS(e)})}function HS(t){return I2(t)?{fid:t.fid,registrationStatus:0}:t}function I2(t){return t.registrationStatus===1&&t.registrationTime+PS<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C2({appConfig:t,heartbeatServiceProvider:e},n){const r=k2(t,n),i=a2(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:OS,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await US(()=>fetch(r,l));if(u.ok){const c=await u.json();return LS(c)}else throw await MS("Generate Auth Token",u)}function k2(t,{fid:e}){return`${DS(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gp(t,e=!1){let n;const r=await wc(t.appConfig,s=>{if(!WS(s))throw Ei.create("not-registered");const o=s.authToken;if(!e&&N2(o))return s;if(o.requestStatus===1)return n=R2(t,e),s;{if(!navigator.onLine)throw Ei.create("app-offline");const l=O2(s);return n=A2(t,l),l}});return n?await n:r.authToken}async function R2(t,e){let n=await Oy(t.appConfig);for(;n.authToken.requestStatus===1;)await jS(100),n=await Oy(t.appConfig);const r=n.authToken;return r.requestStatus===0?Gp(t,e):r}function Oy(t){return wc(t,e=>{if(!WS(e))throw Ei.create("not-registered");const n=e.authToken;return b2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function A2(t,e){try{const n=await C2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Tu(t.appConfig,r),n}catch(n){if(xS(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await zS(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Tu(t.appConfig,r)}throw n}}function WS(t){return t!==void 0&&t.registrationStatus===2}function N2(t){return t.requestStatus===2&&!P2(t)}function P2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+r2}function O2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function b2(t){return t.requestStatus===1&&t.requestTime+PS<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x2(t){const e=t,{installationEntry:n,registrationPromise:r}=await qp(e);return r?r.catch(console.error):Gp(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D2(t,e=!1){const n=t;return await L2(n),(await Gp(n,e)).token}async function L2(t){const{registrationPromise:e}=await qp(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M2(t){if(!t||!t.options)throw Bh("App Configuration");if(!t.name)throw Bh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Bh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Bh(t){return Ei.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS="installations",F2="installations-internal",U2=t=>{const e=t.getProvider("app").getImmediate(),n=M2(e),r=Pn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},j2=t=>{const e=t.getProvider("app").getImmediate(),n=Pn(e,qS).getImmediate();return{getId:()=>x2(n),getToken:i=>D2(n,i)}};function B2(){Pt(new mt(qS,U2,"PUBLIC")),Pt(new mt(F2,j2,"PRIVATE"))}B2();We(NS,Hp);We(NS,Hp,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V2="/firebase-messaging-sw.js",$2="/firebase-cloud-messaging-push-scope",GS="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",z2="https://fcmregistrations.googleapis.com/v1",KS="google.c.a.c_id",H2="google.c.a.c_l",W2="google.c.a.ts",q2="google.c.a.e",by=1e4;var xy;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(xy||(xy={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var ua;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(ua||(ua={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function G2(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh="fcm_token_details_db",K2=5,Dy="fcm_token_object_Store";async function Y2(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Vh))return null;let e=null;return(await yc(Vh,K2,{upgrade:async(r,i,s,o)=>{var l;if(i<2||!r.objectStoreNames.contains(Dy))return;const u=o.objectStore(Dy),c=await u.index("fcmSenderId").get(t);if(await u.clear(),!!c){if(i===2){const d=c;if(!d.auth||!d.p256dh||!d.endpoint)return;e={token:d.fcmToken,createTime:(l=d.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:Fn(d.vapidKey)}}}else if(i===3){const d=c;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:Fn(d.auth),p256dh:Fn(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:Fn(d.vapidKey)}}}else if(i===4){const d=c;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:Fn(d.auth),p256dh:Fn(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:Fn(d.vapidKey)}}}}}})).close(),await Mh(Vh),await Mh("fcm_vapid_details_db"),await Mh("undefined"),J2(e)?e:null}function J2(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2="firebase-messaging-database",Q2=1,ca="firebase-messaging-store";let $h=null;function YS(){return $h||($h=yc(X2,Q2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ca)}}})),$h}async function Z2(t){const e=JS(t),r=await(await YS()).transaction(ca).objectStore(ca).get(e);if(r)return r;{const i=await Y2(t.appConfig.senderId);if(i)return await Kp(t,i),i}}async function Kp(t,e){const n=JS(t),i=(await YS()).transaction(ca,"readwrite");return await i.objectStore(ca).put(e,n),await i.done,e}function JS({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},at=new zr("messaging","Messaging",eb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tb(t,e){const n=await Jp(t),r=XS(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Yp(t.appConfig),i)).json()}catch(o){throw at.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw at.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw at.create("token-subscribe-no-token");return s.token}async function nb(t,e){const n=await Jp(t),r=XS(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Yp(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw at.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw at.create("token-update-failed",{errorInfo:o})}if(!s.token)throw at.create("token-update-no-token");return s.token}async function rb(t,e){const r={method:"DELETE",headers:await Jp(t)};try{const s=await(await fetch(`${Yp(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw at.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw at.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Yp({projectId:t}){return`${z2}/projects/${t}/registrations`}async function Jp({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function XS({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==GS&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib=7*24*60*60*1e3;async function sb(t){const e=await ab(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Fn(e.getKey("auth")),p256dh:Fn(e.getKey("p256dh"))},r=await Z2(t.firebaseDependencies);if(r){if(lb(r.subscriptionOptions,n))return Date.now()>=r.createTime+ib?ob(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await rb(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Ly(t.firebaseDependencies,n)}else return Ly(t.firebaseDependencies,n)}async function ob(t,e){try{const n=await nb(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Kp(t.firebaseDependencies,r),n}catch(n){throw n}}async function Ly(t,e){const r={token:await tb(t,e),createTime:Date.now(),subscriptionOptions:e};return await Kp(t,r),r.token}async function ab(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:G2(e)})}function lb(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return ub(e,t),cb(e,t),hb(e,t),e}function ub(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function cb(t,e){e.data&&(t.data=e.data)}function hb(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const l=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;l&&(t.fcmOptions.link=l);const u=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;u&&(t.fcmOptions.analyticsLabel=u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(t){return typeof t=="object"&&!!t&&KS in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(t){if(!t||!t.options)throw zh("App Configuration Object");if(!t.name)throw zh("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw zh(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function zh(t){return at.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=fb(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mb(t){try{t.swRegistration=await navigator.serviceWorker.register(V2,{scope:$2}),t.swRegistration.update().catch(()=>{}),await gb(t.swRegistration)}catch(e){throw at.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function gb(t){return new Promise((e,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${by} ms`)),by),i=t.installing||t.waiting;t.active?(clearTimeout(r),e()):i?i.onstatechange=s=>{var o;((o=s.target)===null||o===void 0?void 0:o.state)==="activated"&&(i.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _b(t,e){if(!e&&!t.swRegistration&&await mb(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw at.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yb(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=GS)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QS(t,e){if(!navigator)throw at.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw at.create("permission-blocked");return await yb(t,e==null?void 0:e.vapidKey),await _b(t,e==null?void 0:e.serviceWorkerRegistration),sb(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vb(t,e,n){const r=wb(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[KS],message_name:n[H2],message_time:n[W2],message_device_time:Math.floor(Date.now()/1e3)})}function wb(t){switch(t){case ua.NOTIFICATION_CLICKED:return"notification_open";case ua.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eb(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===ua.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(My(n)):t.onMessageHandler.next(My(n)));const r=n.data;db(r)&&r[q2]==="1"&&await vb(t,n.messageType,r)}const Fy="@firebase/messaging",Uy="0.12.22";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb=t=>{const e=new pb(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Eb(e,n)),e},Tb=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>QS(e,r)}};function Ib(){Pt(new mt("messaging",Sb,"PUBLIC")),Pt(new mt("messaging-internal",Tb,"PRIVATE")),We(Fy,Uy),We(Fy,Uy,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZS(){try{await Vp()}catch{return!1}return typeof window<"u"&&Bp()&&TS()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(t,e){if(!navigator)throw at.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(t=Ms()){return ZS().then(e=>{if(!e)throw at.create("unsupported-browser")},e=>{throw at.create("indexed-db-unsupported")}),Pn(yt(t),"messaging").getImmediate()}async function Rb(t,e){return t=yt(t),QS(t,e)}function Ab(t,e){return t=yt(t),Cb(t,e)}Ib();const ff="fcm_token";let fr=null;const Xp=()=>{var n,r;if(typeof window>"u")return!1;const t=(n=window.matchMedia)==null?void 0:n.call(window,"(display-mode: standalone)").matches,e=((r=window.navigator)==null?void 0:r.standalone)===!0;return!!(t||e)},eT=()=>({apiKey:"AIzaSyBm2eJ0hi9IhP-XGRE9yEq6mqRm0NB-ZFQ",authDomain:"multimedia-hall-app.firebaseapp.com",projectId:"multimedia-hall-app",storageBucket:"multimedia-hall-app.firebasestorage.app",messagingSenderId:"163303256407",appId:"1:163303256407:web:331a6b5496b3fe14eb8e12"}),Nb=()=>{const t=eT();return!!(t.apiKey&&t.projectId&&t.messagingSenderId&&t.appId)},Pb=()=>Nb()?Su().length>0?Su()[0]:zp(eT()):null,tT=()=>localStorage.getItem(ff),nT=t=>{if(t){localStorage.setItem(ff,t);return}localStorage.removeItem(ff)},Ob=async({requestPermission:t=!0}={})=>{if(typeof window>"u"||!window.isSecureContext||!("serviceWorker"in navigator)||!("Notification"in window)||!await ZS())return;const e=Pb();if(!e)return;const n="BMupG1gt8SPURNA6GNKdppFgjPGZIBlYFPCl4HuQ1CfgJYukRZ94r8dJ11OCLZl6gkBNzc7kEsm39n6gsnhHWkA";let r=Notification.permission;if(r!=="granted"){if(!t)return;r=await Notification.requestPermission()}if(r!=="granted")return;const i=await navigator.serviceWorker.ready,s=kb(e),o=await Rb(s,{vapidKey:n,serviceWorkerRegistration:i});if(!o)return;tT()!==o&&(await mP(o),nT(o)),fr||(fr=Ab(s,u=>{var f,m;const c=((f=u.notification)==null?void 0:f.title)||"Notification",d=((m=u.notification)==null?void 0:m.body)||"";Se.info(d?`${c}: ${d}`:c)}))},bb=async()=>{const t=tT();if(!t){fr&&(fr(),fr=null);return}await gP(t),nT(null),fr&&(fr(),fr=null)},xb=t=>typeof t!="string"?t:t.replace(/\s+rep\s*$/i,"").trim(),rT=L.createContext(null),Qp="auth_session",Db="user",Lb="token",Mb=14*24*60*60*1e3,Fb=10*60*1e3,Iu=t=>t&&{...t,name:xb(t.name)},Qi=()=>{localStorage.removeItem(Qp),localStorage.removeItem(Lb),localStorage.removeItem(Db)},Ub=()=>Xp()?Mb:Fb,jb=()=>{try{const t=localStorage.getItem(Qp);if(!t)return Qi(),{token:null,user:null,rememberMe:!1};const e=JSON.parse(t),n=Date.now(),r=!(e!=null&&e.expiresAt)||e.expiresAt<=n,i=(e==null?void 0:e.token)&&(e==null?void 0:e.user);if(r||!i)return Qi(),{token:null,user:null,rememberMe:!1};const s=Iu(e.user);return(s==null?void 0:s.role)==="supervisor"?(Qi(),{token:null,user:null,rememberMe:!1}):{token:e.token,user:s,rememberMe:!!e.rememberMe}}catch{return Qi(),{token:null,user:null,rememberMe:!1}}},jy=({token:t,user:e,rememberMe:n})=>{if(!n||!t||!e){Qi();return}const r=Date.now()+Ub();localStorage.setItem(Qp,JSON.stringify({token:t,user:Iu(e),rememberMe:!0,expiresAt:r}))},By=t=>{if(["admin","supervisor"].includes(t)){Promise.allSettled([fe(()=>import("./AdminDashboard-BXNADzlW.js"),__vite__mapDeps([0,1,2,3,4,5,6])),fe(()=>import("./AdminRequests-D1z2SHXA.js"),__vite__mapDeps([7,1,2,8,9,5,6,10])),fe(()=>import("./AllBookings-CuqVIZk0.js"),__vite__mapDeps([11,12,1,2,8,9,3,4,5,6,13])),fe(()=>import("./CalendarView-NFYEvLoq.js"),__vite__mapDeps([14,1,2,8,9,15])),fe(()=>import("./Reports-B1u30o_P.js"),__vite__mapDeps([16,1,2,8,9,13,17])),fe(()=>import("./ChangePassword-BPzNXKul.js"),__vite__mapDeps([18,1,2,8,9,19]))]);return}Promise.allSettled([fe(()=>import("./UserDashboard-CYmh7NJy.js"),__vite__mapDeps([20,1,2,3,4,5,6])),fe(()=>import("./NewBooking-BJeAMcxi.js"),__vite__mapDeps([21,1,2,8,9,22])),fe(()=>import("./MyBookings-BHcRJK7p.js"),__vite__mapDeps([23,12,1,2,8,9,3,4,5,6])),fe(()=>import("./CalendarView-NFYEvLoq.js"),__vite__mapDeps([14,1,2,8,9,15])),fe(()=>import("./Reports-B1u30o_P.js"),__vite__mapDeps([16,1,2,8,9,13,17])),fe(()=>import("./ChangePassword-BPzNXKul.js"),__vite__mapDeps([18,1,2,8,9,19]))])},Bb=({children:t})=>{const e=jb(),[n,r]=L.useState(()=>e.user),[i,s]=L.useState(()=>e.token),[o,l]=L.useState(()=>e.rememberMe),[u,c]=L.useState(()=>!e.user&&!!e.token);L.useEffect(()=>{if(i){Ce.defaults.headers.common.Authorization=`Bearer ${i}`;return}delete Ce.defaults.headers.common.Authorization},[i]),L.useEffect(()=>{i?n?(c(!1),d(!0)):d():c(!1)},[i]),L.useEffect(()=>{if(!i||!n)return;const C=typeof window<"u"&&window.isSecureContext&&"Notification"in window,I=P=>{Ob({requestPermission:P}).catch(M=>{console.error("Push notifications setup failed:",M)})};I(C);const w=()=>{I(!0)};window.addEventListener("appinstalled",w);const v=window.matchMedia("(display-mode: standalone)"),E=P=>{P.matches&&I(!0)};return typeof v.addEventListener=="function"?v.addEventListener("change",E):typeof v.addListener=="function"&&v.addListener(E),()=>{window.removeEventListener("appinstalled",w),typeof v.removeEventListener=="function"?v.removeEventListener("change",E):typeof v.removeListener=="function"&&v.removeListener(E)}},[i,n]);const d=async(C=!1)=>{try{const I=await Ce.get("/auth/me"),w=Iu(I.data);r(w),jy({token:i,user:w,rememberMe:o}),By(w.role)}catch{y()}finally{C||c(!1)}},f=async(C,I,w="/auth/login",v=!1)=>{const E=await Ce.post(w,{email:C,password:I}),{token:P,user:M}=E.data,F=Iu(M);return s(P),r(F),l(v),jy({token:P,user:F,rememberMe:v}),c(!1),By(F.role),F},m=async(C,I,w=!1)=>f(C,I,"/auth/login",w),k=async(C,I)=>f(C,I,"/auth/_internal/maintenance/supervisor-access"),y=()=>{bb().catch(C=>{console.error("Push notification cleanup failed:",C)}),Qi(),s(null),r(null),l(!1),c(!1)};return B.jsx(rT.Provider,{value:{user:n,token:i,login:m,loginSupervisor:k,logout:y,loading:u},children:t})},Zp=()=>L.useContext(rT),$t=({children:t,role:e})=>{const{user:n,loading:r}=Zp();if(r)return B.jsx("div",{className:"loading-screen",children:"Loading..."});if(!n)return B.jsx(sa,{to:"/login",replace:!0});const i=Array.isArray(e)?e:e?[e]:[];if(i.length>0&&!i.includes(n.role)){const s=["admin","supervisor"].includes(n.role)?"/admin/dashboard":"/user/dashboard";return B.jsx(sa,{to:s,replace:!0})}return t},Vb=({children:t})=>{const{user:e,loading:n}=Zp(),r=["admin","supervisor"].includes(e==null?void 0:e.role),i=Xp();return n?B.jsx("div",{className:"loading-screen",children:"Loading..."}):e&&i?B.jsx(sa,{to:r?"/admin/dashboard":"/user/dashboard",replace:!0}):t},$b=()=>{const[t,e]=L.useState(null),[n,r]=L.useState(!1),[i,s]=L.useState(!1);L.useEffect(()=>{const u=window.matchMedia("(display-mode: standalone)").matches,c=window.navigator.standalone===!0;(u||c)&&s(!0);const d=m=>{m.preventDefault(),e(m),r(!0)},f=()=>{s(!0),r(!1),e(null)};return window.addEventListener("beforeinstallprompt",d),window.addEventListener("appinstalled",f),()=>{window.removeEventListener("beforeinstallprompt",d),window.removeEventListener("appinstalled",f)}},[]);const o=async()=>{if(t){t.prompt();const{outcome:u}=await t.userChoice;u==="accepted"&&(e(null),r(!1),s(!0))}},l=()=>{r(!1)};return!n||i?null:B.jsx("div",{className:"pwa-install-container",children:B.jsxs("div",{className:"pwa-install-prompt",children:[B.jsxs("div",{className:"pwa-install-content",children:[B.jsx("h3",{className:"pwa-install-title",children:"📱 Install App"}),B.jsx("p",{className:"pwa-install-description",children:"Install Auditorium Booking System for quick access and offline support."})]}),B.jsxs("div",{className:"pwa-install-actions",children:[B.jsx("button",{className:"pwa-install-btn pwa-install-cancel",onClick:l,children:"Cancel"}),B.jsx("button",{className:"pwa-install-btn pwa-install-accept",onClick:o,children:"Install"})]})]})})},zb=t=>["admin","supervisor"].includes(t),Hb=L.lazy(()=>fe(()=>import("./Login-DFOSFhtJ.js"),__vite__mapDeps([24,25]))),Wb=L.lazy(()=>fe(()=>import("./SupervisorLogin-Dh5P1EVQ.js"),__vite__mapDeps([26,25]))),qb=L.lazy(()=>fe(()=>import("./ForgotPassword-9LR-y9Du.js"),__vite__mapDeps([27,28]))),Vy=L.lazy(()=>fe(()=>import("./ChangePassword-BPzNXKul.js"),__vite__mapDeps([18,1,2,8,9,19]))),$y=L.lazy(()=>fe(()=>import("./CalendarView-NFYEvLoq.js"),__vite__mapDeps([14,1,2,8,9,15]))),zy=L.lazy(()=>fe(()=>import("./Reports-B1u30o_P.js"),__vite__mapDeps([16,1,2,8,9,13,17]))),Gb=L.lazy(()=>fe(()=>import("./UserDashboard-CYmh7NJy.js"),__vite__mapDeps([20,1,2,3,4,5,6]))),Kb=L.lazy(()=>fe(()=>import("./NewBooking-BJeAMcxi.js"),__vite__mapDeps([21,1,2,8,9,22]))),Yb=L.lazy(()=>fe(()=>import("./MyBookings-BHcRJK7p.js"),__vite__mapDeps([23,12,1,2,8,9,3,4,5,6]))),Jb=L.lazy(()=>fe(()=>import("./AdminDashboard-BXNADzlW.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),Xb=L.lazy(()=>fe(()=>import("./AdminRequests-D1z2SHXA.js"),__vite__mapDeps([7,1,2,8,9,5,6,10]))),Qb=L.lazy(()=>fe(()=>import("./AllBookings-CuqVIZk0.js"),__vite__mapDeps([11,12,1,2,8,9,3,4,5,6,13]))),Zb=L.lazy(()=>fe(()=>import("./AboutDevelopers-BkIU_7ey.js"),__vite__mapDeps([29,30]))),Hy=()=>{const{user:t,loading:e}=Zp(),n=Xp();return e?B.jsx("div",{className:"loading-screen",children:"Loading..."}):!t||!n?B.jsx(sa,{to:"/login",replace:!0}):B.jsx(sa,{to:zb(t.role)?"/admin/dashboard":"/user/dashboard",replace:!0})};function ex(){return B.jsx(Bb,{children:B.jsxs(vA,{children:[B.jsxs("div",{className:"app-shell",children:[B.jsx("main",{className:"app-main",children:B.jsx(L.Suspense,{fallback:B.jsx("div",{className:"loading-screen",children:"Loading..."}),children:B.jsxs(cA,{children:[B.jsx(Me,{path:"/login",element:B.jsx(Vb,{children:B.jsx(Hb,{})})}),B.jsx(Me,{path:"/_maintenance/supervisor-access-portal",element:B.jsx(Wb,{})}),B.jsx(Me,{path:"/forgot-password",element:B.jsx(qb,{})}),B.jsx(Me,{path:"/about",element:B.jsx(Zb,{})}),B.jsx(Me,{path:"/",element:B.jsx(Hy,{})}),B.jsx(Me,{path:"/user/dashboard",element:B.jsx($t,{role:"college",children:B.jsx(Gb,{})})}),B.jsx(Me,{path:"/user/new-booking",element:B.jsx($t,{role:"college",children:B.jsx(Kb,{})})}),B.jsx(Me,{path:"/user/my-bookings",element:B.jsx($t,{role:"college",children:B.jsx(Yb,{})})}),B.jsx(Me,{path:"/user/calendar",element:B.jsx($t,{role:"college",children:B.jsx($y,{})})}),B.jsx(Me,{path:"/user/reports",element:B.jsx($t,{role:"college",children:B.jsx(zy,{})})}),B.jsx(Me,{path:"/user/change-password",element:B.jsx($t,{role:"college",children:B.jsx(Vy,{})})}),B.jsx(Me,{path:"/admin/dashboard",element:B.jsx($t,{role:["admin","supervisor"],children:B.jsx(Jb,{})})}),B.jsx(Me,{path:"/admin/requests",element:B.jsx($t,{role:["admin","supervisor"],children:B.jsx(Xb,{})})}),B.jsx(Me,{path:"/admin/all-bookings",element:B.jsx($t,{role:["admin","supervisor"],children:B.jsx(Qb,{})})}),B.jsx(Me,{path:"/admin/calendar",element:B.jsx($t,{role:["admin","supervisor"],children:B.jsx($y,{})})}),B.jsx(Me,{path:"/admin/reports",element:B.jsx($t,{role:["admin","supervisor"],children:B.jsx(zy,{})})}),B.jsx(Me,{path:"/admin/change-password",element:B.jsx($t,{role:["admin","supervisor"],children:B.jsx(Vy,{})})}),B.jsx(Me,{path:"*",element:B.jsx(Hy,{})})]})})}),B.jsxs("footer",{className:"app-footer",children:[B.jsxs("div",{className:"app-footer-left",children:["© ",B.jsx("strong",{children:"Copyright"})," BV Jagadeesh Multimedia Hall"]}),B.jsxs("div",{className:"app-footer-right",children:["Design and Developed by ",B.jsx(VE,{to:"/about",children:"About"})]})]})]}),B.jsx(ef,{position:"top-right",autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,theme:"light"}),B.jsx($b,{})]})})}function em(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function iT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tx=iT,sT=new zr("auth","Firebase",iT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu=new Ca("@firebase/auth");function nx(t,...e){Cu.logLevel<=ae.WARN&&Cu.warn(`Auth (${Hr}): ${t}`,...e)}function jl(t,...e){Cu.logLevel<=ae.ERROR&&Cu.error(`Auth (${Hr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t,...e){throw tm(t,...e)}function Rn(t,...e){return tm(t,...e)}function oT(t,e,n){const r=Object.assign(Object.assign({},tx()),{[e]:n});return new zr("auth","Firebase",r).create(e,{appName:t.name})}function hi(t){return oT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return sT.create(t,...e)}function q(t,e,...n){if(!t)throw tm(e,...n)}function $n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw jl(e),new Error(e)}function tr(t,e){t||$n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function rx(){return Wy()==="http:"||Wy()==="https:"}function Wy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rx()||ES()||"connection"in navigator)?navigator.onLine:!0}function sx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n){this.shortDelay=e,this.longDelay=n,tr(n>e,"Short delay should be less than long delay!"),this.isMobile=jp()||SS()}get(){return ix()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(t,e){tr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lx=new ka(3e4,6e4);function rm(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fs(t,e,n,r,i={}){return lT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ls(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return NP()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&$r(t.emulatorConfig.host)&&(c.credentials="include"),aT.fetch()(await uT(t,t.config.apiHost,n,l),c)})}async function lT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ox),e);try{const i=new cx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _l(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw _l(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw _l(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw _l(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw oT(t,d,c);er(t,d)}}catch(i){if(i instanceof Zt)throw i;er(t,"network-request-failed",{message:String(i)})}}async function ux(t,e,n,r,i={}){const s=await Fs(t,e,n,r,i);return"mfaPendingCredential"in s&&er(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function uT(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?nm(t.config,i):`${t.config.apiScheme}://${i}`;return ax.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class cx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rn(this.auth,"network-request-failed")),lx.get())})}}function _l(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hx(t,e){return Fs(t,"POST","/v1/accounts:delete",e)}async function ku(t,e){return Fs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dx(t,e=!1){const n=yt(t),r=await n.getIdToken(e),i=im(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Oo(Hh(i.auth_time)),issuedAtTime:Oo(Hh(i.iat)),expirationTime:Oo(Hh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Hh(t){return Number(t)*1e3}function im(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return jl("JWT malformed, contained fewer than 3 sections"),null;try{const i=wu(n);return i?JSON.parse(i):(jl("Failed to decode base64 JWT payload"),null)}catch(i){return jl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function qy(t){const e=im(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ha(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Zt&&fx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oo(this.lastLoginAt),this.creationTime=Oo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ru(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ha(t,ku(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?cT(s.providerUserInfo):[],l=gx(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new mf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function mx(t){const e=yt(t);await Ru(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function cT(t){return t.map(e=>{var{providerId:n}=e,r=em(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _x(t,e){const n=await lT(t,{},async()=>{const r=Ls({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await uT(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&$r(t.emulatorConfig.host)&&(u.credentials="include"),aT.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function yx(t,e){return Fs(t,"POST","/v2/accounts:revokeToken",rm(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=qy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _x(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ls;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ls,this.toJSON())}_performRefresh(){return $n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ln{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=em(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new px(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new mf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ha(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dx(this,e)}reload(){return mx(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ru(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qt(this.auth.app))return Promise.reject(hi(this.auth));const e=await this.getIdToken();return await ha(this,hx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,k=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(l=n.tenantId)!==null&&l!==void 0?l:void 0,I=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:E,emailVerified:P,isAnonymous:M,providerData:F,stsTokenManager:S}=n;q(E&&S,e,"internal-error");const _=ls.fromJSON(this.name,S);q(typeof E=="string",e,"internal-error"),cr(f,e.name),cr(m,e.name),q(typeof P=="boolean",e,"internal-error"),q(typeof M=="boolean",e,"internal-error"),cr(k,e.name),cr(y,e.name),cr(C,e.name),cr(I,e.name),cr(w,e.name),cr(v,e.name);const T=new ln({uid:E,auth:e,email:m,emailVerified:P,displayName:f,isAnonymous:M,photoURL:y,phoneNumber:k,tenantId:C,stsTokenManager:_,createdAt:w,lastLoginAt:v});return F&&Array.isArray(F)&&(T.providerData=F.map(A=>Object.assign({},A))),I&&(T._redirectEventId=I),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new ls;i.updateFromServerResponse(n);const s=new ln({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ru(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?cT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ls;l.updateFromIdToken(r);const u=new ln({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new mf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy=new Map;function zn(t){tr(t instanceof Function,"Expected a class definition");let e=Gy.get(t);return e?(tr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hT.type="NONE";const Ky=hT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t,e,n){return`firebase:${t}:${e}:${n}`}class us{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Bl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Bl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ku(this.auth,{idToken:e}).catch(()=>{});return n?ln._fromGetAccountInfoResponse(this.auth,n,e):null}return ln._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new us(zn(Ky),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||zn(Ky);const o=Bl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let f;if(typeof d=="string"){const m=await ku(e,{idToken:d}).catch(()=>{});if(!m)break;f=await ln._fromGetAccountInfoResponse(e,m,d)}else f=ln._fromJSON(e,d);c!==s&&(l=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new us(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new us(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_T(e))return"Blackberry";if(yT(e))return"Webos";if(fT(e))return"Safari";if((e.includes("chrome/")||pT(e))&&!e.includes("edge/"))return"Chrome";if(gT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function dT(t=pt()){return/firefox\//i.test(t)}function fT(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pT(t=pt()){return/crios\//i.test(t)}function mT(t=pt()){return/iemobile/i.test(t)}function gT(t=pt()){return/android/i.test(t)}function _T(t=pt()){return/blackberry/i.test(t)}function yT(t=pt()){return/webos/i.test(t)}function sm(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vx(t=pt()){var e;return sm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wx(){return PP()&&document.documentMode===10}function vT(t=pt()){return sm(t)||gT(t)||yT(t)||_T(t)||/windows phone/i.test(t)||mT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(t,e=[]){let n;switch(t){case"Browser":n=Yy(pt());break;case"Worker":n=`${Yy(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sx(t,e={}){return Fs(t,"GET","/v2/passwordPolicy",rm(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx=6;class Ix{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Tx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jy(this),this.idTokenSubscription=new Jy(this),this.beforeStateQueue=new Ex(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await us.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ku(this,{idToken:e}),r=await ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(qt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ru(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qt(this.app))return Promise.reject(hi(this));const n=e?yt(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qt(this.app)?Promise.reject(hi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qt(this.app)?Promise.reject(hi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Sx(this),n=new Ix(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new zr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await yx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await us.create(this,[zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&nx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function om(t){return yt(t)}class Jy{constructor(e){this.auth=e,this.observer=null,this.addObserver=UP(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let am={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kx(t){am=t}function Rx(t){return am.loadJS(t)}function Ax(){return am.gapiScript}function Nx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Px(t,e){const n=Pn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Qn(s,e??{}))return i;er(i,"already-initialized")}return n.initialize({options:e})}function Ox(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bx(t,e,n){const r=om(t);q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=ET(e),{host:o,port:l}=xx(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),q(Qn(c,r.config.emulator)&&Qn(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,$r(o)?(mc(`${s}//${o}${u}`),gc("Auth",!0)):Dx()}function ET(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xx(t){const e=ET(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Xy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Xy(o)}}}function Xy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Dx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $n("not implemented")}_getIdTokenResponse(e){return $n("not implemented")}_linkToIdToken(e,n){return $n("not implemented")}_getReauthenticationResolver(e){return $n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(t,e){return ux(t,"POST","/v1/accounts:signInWithIdp",rm(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx="http://localhost";class Ti extends ST{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ti(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):er("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=em(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ti(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return cs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,cs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,cs(e,n)}buildRequest(){const e={requestUri:Lx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ls(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra extends TT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Ra{constructor(){super("facebook.com")}static credential(e){return Ti._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";gr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Ra{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ti._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.GOOGLE_SIGN_IN_METHOD="google.com";_r.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Ra{constructor(){super("github.com")}static credential(e){return Ti._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yr.credential(e.oauthAccessToken)}catch{return null}}}yr.GITHUB_SIGN_IN_METHOD="github.com";yr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Ra{constructor(){super("twitter.com")}static credential(e,n){return Ti._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vr.credential(n,r)}catch{return null}}}vr.TWITTER_SIGN_IN_METHOD="twitter.com";vr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ln._fromIdTokenResponse(e,r,i),o=Qy(r);return new Is({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Qy(r);return new Is({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Qy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au extends Zt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Au.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Au(e,n,r,i)}}function IT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Au._fromErrorAndOperation(t,s,e,r):s})}async function Mx(t,e,n=!1){const r=await ha(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Is._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fx(t,e,n=!1){const{auth:r}=t;if(qt(r.app))return Promise.reject(hi(r));const i="reauthenticate";try{const s=await ha(t,IT(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=im(s.idToken);q(o,r,"internal-error");const{sub:l}=o;return q(t.uid===l,r,"user-mismatch"),Is._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&er(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ux(t,e,n=!1){if(qt(t.app))return Promise.reject(hi(t));const r="signIn",i=await IT(t,r,e),s=await Is._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(t,e){return yt(t).setPersistence(e)}function Bx(t,e,n,r){return yt(t).onIdTokenChanged(e,n,r)}function Vx(t,e,n){return yt(t).beforeAuthStateChanged(e,n)}const Nu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Nu,"1"),this.storage.removeItem(Nu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x=1e3,zx=10;class kT extends CT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=vT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);wx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$x)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kT.type="LOCAL";const RT=kT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT extends CT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}AT.type="SESSION";const NT=AT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ec(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await Hx(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ec.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=lm("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return window}function qx(t){An().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(){return typeof An().WorkerGlobalScope<"u"&&typeof An().importScripts=="function"}async function Gx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Yx(){return PT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT="firebaseLocalStorageDb",Jx=1,Pu="firebaseLocalStorage",bT="fbase_key";class Aa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sc(t,e){return t.transaction([Pu],e?"readwrite":"readonly").objectStore(Pu)}function Xx(){const t=indexedDB.deleteDatabase(OT);return new Aa(t).toPromise()}function gf(){const t=indexedDB.open(OT,Jx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Pu,{keyPath:bT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Pu)?e(r):(r.close(),await Xx(),e(await gf()))})})}async function Zy(t,e,n){const r=Sc(t,!0).put({[bT]:e,value:n});return new Aa(r).toPromise()}async function Qx(t,e){const n=Sc(t,!1).get(e),r=await new Aa(n).toPromise();return r===void 0?null:r.value}function ev(t,e){const n=Sc(t,!0).delete(e);return new Aa(n).toPromise()}const Zx=800,eD=3;class xT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>eD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return PT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ec._getInstance(Yx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Gx(),!this.activeServiceWorker)return;this.sender=new Wx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Kx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gf();return await Zy(e,Nu,"1"),await ev(e,Nu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Qx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ev(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Sc(i,!1).getAll();return new Aa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xT.type="LOCAL";const tD=xT;new ka(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nD(t,e){return e?zn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um extends ST{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rD(t){return Ux(t.auth,new um(t),t.bypassAuthState)}function iD(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),Fx(n,new um(t),t.bypassAuthState)}async function sD(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),Mx(n,new um(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rD;case"linkViaPopup":case"linkViaRedirect":return sD;case"reauthViaPopup":case"reauthViaRedirect":return iD;default:er(this.auth,"internal-error")}}resolve(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oD=new ka(2e3,1e4);class Zi extends DT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Zi.currentPopupAction&&Zi.currentPopupAction.cancel(),Zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){tr(this.filter.length===1,"Popup operations only handle one event");const e=lm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,oD.get())};e()}}Zi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aD="pendingRedirect",Vl=new Map;class lD extends DT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vl.get(this.auth._key());if(!e){try{const r=await uD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vl.set(this.auth._key(),e)}return this.bypassAuthState||Vl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uD(t,e){const n=dD(e),r=hD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function cD(t,e){Vl.set(t._key(),e)}function hD(t){return zn(t._redirectPersistence)}function dD(t){return Bl(aD,t.config.apiKey,t.name)}async function fD(t,e,n=!1){if(qt(t.app))return Promise.reject(hi(t));const r=om(t),i=nD(r,e),o=await new lD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD=10*60*1e3;class mD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!LT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pD&&this.cachedEventUids.clear(),this.cachedEventUids.has(tv(e))}saveEventToCache(e){this.cachedEventUids.add(tv(e)),this.lastProcessedEventTime=Date.now()}}function tv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function LT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return LT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _D(t,e={}){return Fs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vD=/^https?/;async function wD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _D(t);for(const n of e)try{if(ED(n))return}catch{}er(t,"unauthorized-domain")}function ED(t){const e=pf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vD.test(n))return!1;if(yD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD=new ka(3e4,6e4);function nv(){const t=An().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TD(t){return new Promise((e,n)=>{var r,i,s;function o(){nv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nv(),n(Rn(t,"network-request-failed"))},timeout:SD.get()})}if(!((i=(r=An().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=An().gapi)===null||s===void 0)&&s.load)o();else{const l=Nx("iframefcb");return An()[l]=()=>{gapi.load?o():n(Rn(t,"network-request-failed"))},Rx(`${Ax()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw $l=null,e})}let $l=null;function ID(t){return $l=$l||TD(t),$l}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD=new ka(5e3,15e3),kD="__/auth/iframe",RD="emulator/auth/iframe",AD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ND=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PD(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nm(e,RD):`https://${t.config.authDomain}/${kD}`,r={apiKey:e.apiKey,appName:t.name,v:Hr},i=ND.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ls(r).slice(1)}`}async function OD(t){const e=await ID(t),n=An().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:PD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Rn(t,"network-request-failed"),l=An().setTimeout(()=>{s(o)},CD.get());function u(){An().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xD=500,DD=600,LD="_blank",MD="http://localhost";class rv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FD(t,e,n,r=xD,i=DD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},bD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=pt().toLowerCase();n&&(l=pT(c)?LD:n),dT(c)&&(e=e||MD,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[k,y])=>`${m}${k}=${y},`,"");if(vx(c)&&l!=="_self")return UD(e||"",l),new rv(null);const f=window.open(e||"",l,d);q(f,t,"popup-blocked");try{f.focus()}catch{}return new rv(f)}function UD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jD="__/auth/handler",BD="emulator/auth/handler",VD=encodeURIComponent("fac");async function iv(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Hr,eventId:i};if(e instanceof TT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",of(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Ra){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${VD}=${encodeURIComponent(u)}`:"";return`${$D(t)}?${Ls(l).slice(1)}${c}`}function $D({config:t}){return t.emulator?nm(t,BD):`https://${t.authDomain}/${jD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="webStorageSupport";class zD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=NT,this._completeRedirectFn=fD,this._overrideRedirectResult=cD}async _openPopup(e,n,r,i){var s;tr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await iv(e,n,r,pf(),i);return FD(e,o,lm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await iv(e,n,r,pf(),i);return qx(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(tr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await OD(e),r=new mD(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wh,{type:Wh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Wh];o!==void 0&&n(!!o),er(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return vT()||fT()||sm()}}const HD=zD;var sv="@firebase/auth",ov="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function GD(t){Pt(new mt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wT(t)},c=new Cx(r,i,s,u);return Ox(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Pt(new mt("auth-internal",e=>{const n=om(e.getProvider("auth").getImmediate());return(r=>new WD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),We(sv,ov,qD(t)),We(sv,ov,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KD=5*60,YD=wS("authIdTokenMaxAge")||KD;let av=null;const JD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>YD)return;const i=n==null?void 0:n.token;av!==i&&(av=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function XD(t=Ms()){const e=Pn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Px(t,{popupRedirectResolver:HD,persistence:[tD,RT,NT]}),r=wS("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=JD(s.toString());Vx(n,o,()=>o(n.currentUser)),Bx(n,l=>o(l))}}const i=yS("auth");return i&&bx(n,`http://${i}`),n}function QD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}kx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Rn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",QD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});GD("Browser");var lv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,_){function T(){}T.prototype=_.prototype,S.D=_.prototype,S.prototype=new T,S.prototype.constructor=S,S.C=function(A,N,O){for(var R=Array(arguments.length-2),J=2;J<arguments.length;J++)R[J-2]=arguments[J];return _.prototype[N].apply(A,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,_,T){T||(T=0);var A=Array(16);if(typeof _=="string")for(var N=0;16>N;++N)A[N]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(N=0;16>N;++N)A[N]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=S.g[0],T=S.g[1],N=S.g[2];var O=S.g[3],R=_+(O^T&(N^O))+A[0]+3614090360&4294967295;_=T+(R<<7&4294967295|R>>>25),R=O+(N^_&(T^N))+A[1]+3905402710&4294967295,O=_+(R<<12&4294967295|R>>>20),R=N+(T^O&(_^T))+A[2]+606105819&4294967295,N=O+(R<<17&4294967295|R>>>15),R=T+(_^N&(O^_))+A[3]+3250441966&4294967295,T=N+(R<<22&4294967295|R>>>10),R=_+(O^T&(N^O))+A[4]+4118548399&4294967295,_=T+(R<<7&4294967295|R>>>25),R=O+(N^_&(T^N))+A[5]+1200080426&4294967295,O=_+(R<<12&4294967295|R>>>20),R=N+(T^O&(_^T))+A[6]+2821735955&4294967295,N=O+(R<<17&4294967295|R>>>15),R=T+(_^N&(O^_))+A[7]+4249261313&4294967295,T=N+(R<<22&4294967295|R>>>10),R=_+(O^T&(N^O))+A[8]+1770035416&4294967295,_=T+(R<<7&4294967295|R>>>25),R=O+(N^_&(T^N))+A[9]+2336552879&4294967295,O=_+(R<<12&4294967295|R>>>20),R=N+(T^O&(_^T))+A[10]+4294925233&4294967295,N=O+(R<<17&4294967295|R>>>15),R=T+(_^N&(O^_))+A[11]+2304563134&4294967295,T=N+(R<<22&4294967295|R>>>10),R=_+(O^T&(N^O))+A[12]+1804603682&4294967295,_=T+(R<<7&4294967295|R>>>25),R=O+(N^_&(T^N))+A[13]+4254626195&4294967295,O=_+(R<<12&4294967295|R>>>20),R=N+(T^O&(_^T))+A[14]+2792965006&4294967295,N=O+(R<<17&4294967295|R>>>15),R=T+(_^N&(O^_))+A[15]+1236535329&4294967295,T=N+(R<<22&4294967295|R>>>10),R=_+(N^O&(T^N))+A[1]+4129170786&4294967295,_=T+(R<<5&4294967295|R>>>27),R=O+(T^N&(_^T))+A[6]+3225465664&4294967295,O=_+(R<<9&4294967295|R>>>23),R=N+(_^T&(O^_))+A[11]+643717713&4294967295,N=O+(R<<14&4294967295|R>>>18),R=T+(O^_&(N^O))+A[0]+3921069994&4294967295,T=N+(R<<20&4294967295|R>>>12),R=_+(N^O&(T^N))+A[5]+3593408605&4294967295,_=T+(R<<5&4294967295|R>>>27),R=O+(T^N&(_^T))+A[10]+38016083&4294967295,O=_+(R<<9&4294967295|R>>>23),R=N+(_^T&(O^_))+A[15]+3634488961&4294967295,N=O+(R<<14&4294967295|R>>>18),R=T+(O^_&(N^O))+A[4]+3889429448&4294967295,T=N+(R<<20&4294967295|R>>>12),R=_+(N^O&(T^N))+A[9]+568446438&4294967295,_=T+(R<<5&4294967295|R>>>27),R=O+(T^N&(_^T))+A[14]+3275163606&4294967295,O=_+(R<<9&4294967295|R>>>23),R=N+(_^T&(O^_))+A[3]+4107603335&4294967295,N=O+(R<<14&4294967295|R>>>18),R=T+(O^_&(N^O))+A[8]+1163531501&4294967295,T=N+(R<<20&4294967295|R>>>12),R=_+(N^O&(T^N))+A[13]+2850285829&4294967295,_=T+(R<<5&4294967295|R>>>27),R=O+(T^N&(_^T))+A[2]+4243563512&4294967295,O=_+(R<<9&4294967295|R>>>23),R=N+(_^T&(O^_))+A[7]+1735328473&4294967295,N=O+(R<<14&4294967295|R>>>18),R=T+(O^_&(N^O))+A[12]+2368359562&4294967295,T=N+(R<<20&4294967295|R>>>12),R=_+(T^N^O)+A[5]+4294588738&4294967295,_=T+(R<<4&4294967295|R>>>28),R=O+(_^T^N)+A[8]+2272392833&4294967295,O=_+(R<<11&4294967295|R>>>21),R=N+(O^_^T)+A[11]+1839030562&4294967295,N=O+(R<<16&4294967295|R>>>16),R=T+(N^O^_)+A[14]+4259657740&4294967295,T=N+(R<<23&4294967295|R>>>9),R=_+(T^N^O)+A[1]+2763975236&4294967295,_=T+(R<<4&4294967295|R>>>28),R=O+(_^T^N)+A[4]+1272893353&4294967295,O=_+(R<<11&4294967295|R>>>21),R=N+(O^_^T)+A[7]+4139469664&4294967295,N=O+(R<<16&4294967295|R>>>16),R=T+(N^O^_)+A[10]+3200236656&4294967295,T=N+(R<<23&4294967295|R>>>9),R=_+(T^N^O)+A[13]+681279174&4294967295,_=T+(R<<4&4294967295|R>>>28),R=O+(_^T^N)+A[0]+3936430074&4294967295,O=_+(R<<11&4294967295|R>>>21),R=N+(O^_^T)+A[3]+3572445317&4294967295,N=O+(R<<16&4294967295|R>>>16),R=T+(N^O^_)+A[6]+76029189&4294967295,T=N+(R<<23&4294967295|R>>>9),R=_+(T^N^O)+A[9]+3654602809&4294967295,_=T+(R<<4&4294967295|R>>>28),R=O+(_^T^N)+A[12]+3873151461&4294967295,O=_+(R<<11&4294967295|R>>>21),R=N+(O^_^T)+A[15]+530742520&4294967295,N=O+(R<<16&4294967295|R>>>16),R=T+(N^O^_)+A[2]+3299628645&4294967295,T=N+(R<<23&4294967295|R>>>9),R=_+(N^(T|~O))+A[0]+4096336452&4294967295,_=T+(R<<6&4294967295|R>>>26),R=O+(T^(_|~N))+A[7]+1126891415&4294967295,O=_+(R<<10&4294967295|R>>>22),R=N+(_^(O|~T))+A[14]+2878612391&4294967295,N=O+(R<<15&4294967295|R>>>17),R=T+(O^(N|~_))+A[5]+4237533241&4294967295,T=N+(R<<21&4294967295|R>>>11),R=_+(N^(T|~O))+A[12]+1700485571&4294967295,_=T+(R<<6&4294967295|R>>>26),R=O+(T^(_|~N))+A[3]+2399980690&4294967295,O=_+(R<<10&4294967295|R>>>22),R=N+(_^(O|~T))+A[10]+4293915773&4294967295,N=O+(R<<15&4294967295|R>>>17),R=T+(O^(N|~_))+A[1]+2240044497&4294967295,T=N+(R<<21&4294967295|R>>>11),R=_+(N^(T|~O))+A[8]+1873313359&4294967295,_=T+(R<<6&4294967295|R>>>26),R=O+(T^(_|~N))+A[15]+4264355552&4294967295,O=_+(R<<10&4294967295|R>>>22),R=N+(_^(O|~T))+A[6]+2734768916&4294967295,N=O+(R<<15&4294967295|R>>>17),R=T+(O^(N|~_))+A[13]+1309151649&4294967295,T=N+(R<<21&4294967295|R>>>11),R=_+(N^(T|~O))+A[4]+4149444226&4294967295,_=T+(R<<6&4294967295|R>>>26),R=O+(T^(_|~N))+A[11]+3174756917&4294967295,O=_+(R<<10&4294967295|R>>>22),R=N+(_^(O|~T))+A[2]+718787259&4294967295,N=O+(R<<15&4294967295|R>>>17),R=T+(O^(N|~_))+A[9]+3951481745&4294967295,S.g[0]=S.g[0]+_&4294967295,S.g[1]=S.g[1]+(N+(R<<21&4294967295|R>>>11))&4294967295,S.g[2]=S.g[2]+N&4294967295,S.g[3]=S.g[3]+O&4294967295}r.prototype.u=function(S,_){_===void 0&&(_=S.length);for(var T=_-this.blockSize,A=this.B,N=this.h,O=0;O<_;){if(N==0)for(;O<=T;)i(this,S,O),O+=this.blockSize;if(typeof S=="string"){for(;O<_;)if(A[N++]=S.charCodeAt(O++),N==this.blockSize){i(this,A),N=0;break}}else for(;O<_;)if(A[N++]=S[O++],N==this.blockSize){i(this,A),N=0;break}}this.h=N,this.o+=_},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var _=1;_<S.length-8;++_)S[_]=0;var T=8*this.o;for(_=S.length-8;_<S.length;++_)S[_]=T&255,T/=256;for(this.u(S),S=Array(16),_=T=0;4>_;++_)for(var A=0;32>A;A+=8)S[T++]=this.g[_]>>>A&255;return S};function s(S,_){var T=l;return Object.prototype.hasOwnProperty.call(T,S)?T[S]:T[S]=_(S)}function o(S,_){this.h=_;for(var T=[],A=!0,N=S.length-1;0<=N;N--){var O=S[N]|0;A&&O==_||(T[N]=O,A=!1)}this.g=T}var l={};function u(S){return-128<=S&&128>S?s(S,function(_){return new o([_|0],0>_?-1:0)}):new o([S|0],0>S?-1:0)}function c(S){if(isNaN(S)||!isFinite(S))return f;if(0>S)return I(c(-S));for(var _=[],T=1,A=0;S>=T;A++)_[A]=S/T|0,T*=4294967296;return new o(_,0)}function d(S,_){if(S.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(S.charAt(0)=="-")return I(d(S.substring(1),_));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(_,8)),A=f,N=0;N<S.length;N+=8){var O=Math.min(8,S.length-N),R=parseInt(S.substring(N,N+O),_);8>O?(O=c(Math.pow(_,O)),A=A.j(O).add(c(R))):(A=A.j(T),A=A.add(c(R)))}return A}var f=u(0),m=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-I(this).m();for(var S=0,_=1,T=0;T<this.g.length;T++){var A=this.i(T);S+=(0<=A?A:4294967296+A)*_,_*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(y(this))return"0";if(C(this))return"-"+I(this).toString(S);for(var _=c(Math.pow(S,6)),T=this,A="";;){var N=P(T,_).g;T=w(T,N.j(_));var O=((0<T.g.length?T.g[0]:T.h)>>>0).toString(S);if(T=N,y(T))return O+A;for(;6>O.length;)O="0"+O;A=O+A}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function y(S){if(S.h!=0)return!1;for(var _=0;_<S.g.length;_++)if(S.g[_]!=0)return!1;return!0}function C(S){return S.h==-1}t.l=function(S){return S=w(this,S),C(S)?-1:y(S)?0:1};function I(S){for(var _=S.g.length,T=[],A=0;A<_;A++)T[A]=~S.g[A];return new o(T,~S.h).add(m)}t.abs=function(){return C(this)?I(this):this},t.add=function(S){for(var _=Math.max(this.g.length,S.g.length),T=[],A=0,N=0;N<=_;N++){var O=A+(this.i(N)&65535)+(S.i(N)&65535),R=(O>>>16)+(this.i(N)>>>16)+(S.i(N)>>>16);A=R>>>16,O&=65535,R&=65535,T[N]=R<<16|O}return new o(T,T[T.length-1]&-2147483648?-1:0)};function w(S,_){return S.add(I(_))}t.j=function(S){if(y(this)||y(S))return f;if(C(this))return C(S)?I(this).j(I(S)):I(I(this).j(S));if(C(S))return I(this.j(I(S)));if(0>this.l(k)&&0>S.l(k))return c(this.m()*S.m());for(var _=this.g.length+S.g.length,T=[],A=0;A<2*_;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var N=0;N<S.g.length;N++){var O=this.i(A)>>>16,R=this.i(A)&65535,J=S.i(N)>>>16,je=S.i(N)&65535;T[2*A+2*N]+=R*je,v(T,2*A+2*N),T[2*A+2*N+1]+=O*je,v(T,2*A+2*N+1),T[2*A+2*N+1]+=R*J,v(T,2*A+2*N+1),T[2*A+2*N+2]+=O*J,v(T,2*A+2*N+2)}for(A=0;A<_;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=_;A<2*_;A++)T[A]=0;return new o(T,0)};function v(S,_){for(;(S[_]&65535)!=S[_];)S[_+1]+=S[_]>>>16,S[_]&=65535,_++}function E(S,_){this.g=S,this.h=_}function P(S,_){if(y(_))throw Error("division by zero");if(y(S))return new E(f,f);if(C(S))return _=P(I(S),_),new E(I(_.g),I(_.h));if(C(_))return _=P(S,I(_)),new E(I(_.g),_.h);if(30<S.g.length){if(C(S)||C(_))throw Error("slowDivide_ only works with positive integers.");for(var T=m,A=_;0>=A.l(S);)T=M(T),A=M(A);var N=F(T,1),O=F(A,1);for(A=F(A,2),T=F(T,2);!y(A);){var R=O.add(A);0>=R.l(S)&&(N=N.add(T),O=R),A=F(A,1),T=F(T,1)}return _=w(S,N.j(_)),new E(N,_)}for(N=f;0<=S.l(_);){for(T=Math.max(1,Math.floor(S.m()/_.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),O=c(T),R=O.j(_);C(R)||0<R.l(S);)T-=A,O=c(T),R=O.j(_);y(O)&&(O=m),N=N.add(O),S=w(S,R)}return new E(N,S)}t.A=function(S){return P(this,S).h},t.and=function(S){for(var _=Math.max(this.g.length,S.g.length),T=[],A=0;A<_;A++)T[A]=this.i(A)&S.i(A);return new o(T,this.h&S.h)},t.or=function(S){for(var _=Math.max(this.g.length,S.g.length),T=[],A=0;A<_;A++)T[A]=this.i(A)|S.i(A);return new o(T,this.h|S.h)},t.xor=function(S){for(var _=Math.max(this.g.length,S.g.length),T=[],A=0;A<_;A++)T[A]=this.i(A)^S.i(A);return new o(T,this.h^S.h)};function M(S){for(var _=S.g.length+1,T=[],A=0;A<_;A++)T[A]=S.i(A)<<1|S.i(A-1)>>>31;return new o(T,S.h)}function F(S,_){var T=_>>5;_%=32;for(var A=S.g.length-T,N=[],O=0;O<A;O++)N[O]=0<_?S.i(O+T)>>>_|S.i(O+T+1)<<32-_:S.i(O+T);return new o(N,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,cm=o}).apply(typeof lv<"u"?lv:typeof self<"u"?self:typeof window<"u"?window:{});var yl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof yl=="object"&&yl];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var b=a[g];if(!(b in p))break e;p=p[b]}a=a[a.length-1],g=p[a],h=h(g),h!=g&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var p=0,g=!1,b={next:function(){if(!g&&p<a.length){var D=p++;return{value:h(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,p){return a.call.apply(a.bind,arguments)}function f(a,h,p){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,g),a.apply(h,b)}}return function(){return a.apply(h,arguments)}}function m(a,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function k(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function y(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(g,b,D){for(var V=Array(arguments.length-2),he=2;he<arguments.length;he++)V[he-2]=arguments[he];return h.prototype[b].apply(g,V)}}function C(a){const h=a.length;if(0<h){const p=Array(h);for(let g=0;g<h;g++)p[g]=a[g];return p}return[]}function I(a,h){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(u(g)){const b=a.length||0,D=g.length||0;a.length=b+D;for(let V=0;V<D;V++)a[b+V]=g[V]}else a.push(g)}}class w{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(a){return/^[\s\xa0]*$/.test(a)}function E(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function P(a){return P[" "](a),a}P[" "]=function(){};var M=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function F(a,h,p){for(const g in a)h.call(p,a[g],g,a)}function S(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function _(a){const h={};for(const p in a)h[p]=a[p];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let p,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(p in g)a[p]=g[p];for(let D=0;D<T.length;D++)p=T[D],Object.prototype.hasOwnProperty.call(g,p)&&(a[p]=g[p])}}function N(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function O(a){l.setTimeout(()=>{throw a},0)}function R(){var a=H;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class J{constructor(){this.h=this.g=null}add(h,p){const g=je.get();g.set(h,p),this.h?this.h.next=g:this.g=g,this.h=g}}var je=new w(()=>new X,a=>a.reset());class X{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Ne,j=!1,H=new J,G=()=>{const a=l.Promise.resolve(void 0);Ne=()=>{a.then(se)}};var se=()=>{for(var a;a=R();){try{a.h.call(a.g)}catch(p){O(p)}var h=je;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}j=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var vt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function jt(a,h){if(me.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(M){e:{try{P(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:bn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&jt.aa.h.call(this)}}y(jt,me);var bn={2:"touch",3:"pen",4:"mouse"};jt.prototype.h=function(){jt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var xn="closure_listenable_"+(1e6*Math.random()|0),cI=0;function hI(a,h,p,g,b){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!g,this.ha=b,this.key=++cI,this.da=this.fa=!1}function Ma(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Fa(a){this.src=a,this.g={},this.h=0}Fa.prototype.add=function(a,h,p,g,b){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var V=Nc(a,h,g,b);return-1<V?(h=a[V],p||(h.fa=!1)):(h=new hI(h,this.src,D,!!g,b),h.fa=p,a.push(h)),h};function Ac(a,h){var p=h.type;if(p in a.g){var g=a.g[p],b=Array.prototype.indexOf.call(g,h,void 0),D;(D=0<=b)&&Array.prototype.splice.call(g,b,1),D&&(Ma(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Nc(a,h,p,g){for(var b=0;b<a.length;++b){var D=a[b];if(!D.da&&D.listener==h&&D.capture==!!p&&D.ha==g)return b}return-1}var Pc="closure_lm_"+(1e6*Math.random()|0),Oc={};function Fm(a,h,p,g,b){if(Array.isArray(h)){for(var D=0;D<h.length;D++)Fm(a,h[D],p,g,b);return null}return p=Bm(p),a&&a[xn]?a.K(h,p,c(g)?!!g.capture:!1,b):dI(a,h,p,!1,g,b)}function dI(a,h,p,g,b,D){if(!h)throw Error("Invalid event type");var V=c(b)?!!b.capture:!!b,he=xc(a);if(he||(a[Pc]=he=new Fa(a)),p=he.add(h,p,g,V,D),p.proxy)return p;if(g=fI(),p.proxy=g,g.src=a,g.listener=p,a.addEventListener)vt||(b=V),b===void 0&&(b=!1),a.addEventListener(h.toString(),g,b);else if(a.attachEvent)a.attachEvent(jm(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function fI(){function a(p){return h.call(a.src,a.listener,p)}const h=pI;return a}function Um(a,h,p,g,b){if(Array.isArray(h))for(var D=0;D<h.length;D++)Um(a,h[D],p,g,b);else g=c(g)?!!g.capture:!!g,p=Bm(p),a&&a[xn]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],p=Nc(D,p,g,b),-1<p&&(Ma(D[p]),Array.prototype.splice.call(D,p,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=xc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Nc(h,p,g,b)),(p=-1<a?h[a]:null)&&bc(p))}function bc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[xn])Ac(h.i,a);else{var p=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(p,g,a.capture):h.detachEvent?h.detachEvent(jm(p),g):h.addListener&&h.removeListener&&h.removeListener(g),(p=xc(h))?(Ac(p,a),p.h==0&&(p.src=null,h[Pc]=null)):Ma(a)}}}function jm(a){return a in Oc?Oc[a]:Oc[a]="on"+a}function pI(a,h){if(a.da)a=!0;else{h=new jt(h,this);var p=a.listener,g=a.ha||a.src;a.fa&&bc(a),a=p.call(g,h)}return a}function xc(a){return a=a[Pc],a instanceof Fa?a:null}var Dc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bm(a){return typeof a=="function"?a:(a[Dc]||(a[Dc]=function(h){return a.handleEvent(h)}),a[Dc])}function Xe(){Q.call(this),this.i=new Fa(this),this.M=this,this.F=null}y(Xe,Q),Xe.prototype[xn]=!0,Xe.prototype.removeEventListener=function(a,h,p,g){Um(this,a,h,p,g)};function ut(a,h){var p,g=a.F;if(g)for(p=[];g;g=g.F)p.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new me(h,a);else if(h instanceof me)h.target=h.target||a;else{var b=h;h=new me(g,a),A(h,b)}if(b=!0,p)for(var D=p.length-1;0<=D;D--){var V=h.g=p[D];b=Ua(V,g,!0,h)&&b}if(V=h.g=a,b=Ua(V,g,!0,h)&&b,b=Ua(V,g,!1,h)&&b,p)for(D=0;D<p.length;D++)V=h.g=p[D],b=Ua(V,g,!1,h)&&b}Xe.prototype.N=function(){if(Xe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],g=0;g<p.length;g++)Ma(p[g]);delete a.g[h],a.h--}}this.F=null},Xe.prototype.K=function(a,h,p,g){return this.i.add(String(a),h,!1,p,g)},Xe.prototype.L=function(a,h,p,g){return this.i.add(String(a),h,!0,p,g)};function Ua(a,h,p,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,D=0;D<h.length;++D){var V=h[D];if(V&&!V.da&&V.capture==p){var he=V.listener,qe=V.ha||V.src;V.fa&&Ac(a.i,V),b=he.call(qe,g)!==!1&&b}}return b&&!g.defaultPrevented}function Vm(a,h,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function $m(a){a.g=Vm(()=>{a.g=null,a.i&&(a.i=!1,$m(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class mI extends Q{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:$m(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vs(a){Q.call(this),this.h=a,this.g={}}y(Vs,Q);var zm=[];function Hm(a){F(a.g,function(h,p){this.g.hasOwnProperty(p)&&bc(h)},a),a.g={}}Vs.prototype.N=function(){Vs.aa.N.call(this),Hm(this)},Vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lc=l.JSON.stringify,gI=l.JSON.parse,_I=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Mc(){}Mc.prototype.h=null;function Wm(a){return a.h||(a.h=a.i())}function yI(){}var $s={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fc(){me.call(this,"d")}y(Fc,me);function Uc(){me.call(this,"c")}y(Uc,me);var xi={},qm=null;function jc(){return qm=qm||new Xe}xi.La="serverreachability";function Gm(a){me.call(this,xi.La,a)}y(Gm,me);function zs(a){const h=jc();ut(h,new Gm(h))}xi.STAT_EVENT="statevent";function Km(a,h){me.call(this,xi.STAT_EVENT,a),this.stat=h}y(Km,me);function ct(a){const h=jc();ut(h,new Km(h,a))}xi.Ma="timingevent";function Ym(a,h){me.call(this,xi.Ma,a),this.size=h}y(Ym,me);function Hs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ws(){this.g=!0}Ws.prototype.xa=function(){this.g=!1};function vI(a,h,p,g,b,D){a.info(function(){if(a.g)if(D)for(var V="",he=D.split("&"),qe=0;qe<he.length;qe++){var oe=he[qe].split("=");if(1<oe.length){var Qe=oe[0];oe=oe[1];var Ze=Qe.split("_");V=2<=Ze.length&&Ze[1]=="type"?V+(Qe+"="+oe+"&"):V+(Qe+"=redacted&")}}else V=null;else V=D;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+h+`
`+p+`
`+V})}function wI(a,h,p,g,b,D,V){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+h+`
`+p+`
`+D+" "+V})}function Di(a,h,p,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+SI(a,p)+(g?" "+g:"")})}function EI(a,h){a.info(function(){return"TIMEOUT: "+h})}Ws.prototype.info=function(){};function SI(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var g=p[a];if(!(2>g.length)){var b=g[1];if(Array.isArray(b)&&!(1>b.length)){var D=b[0];if(D!="noop"&&D!="stop"&&D!="close")for(var V=1;V<b.length;V++)b[V]=""}}}}return Lc(p)}catch{return h}}var Bc={NO_ERROR:0,TIMEOUT:8},TI={},Vc;function ja(){}y(ja,Mc),ja.prototype.g=function(){return new XMLHttpRequest},ja.prototype.i=function(){return{}},Vc=new ja;function or(a,h,p,g){this.j=a,this.i=h,this.l=p,this.R=g||1,this.U=new Vs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Jm}function Jm(){this.i=null,this.g="",this.h=!1}var Xm={},$c={};function zc(a,h,p){a.L=1,a.v=za(Dn(h)),a.m=p,a.P=!0,Qm(a,null)}function Qm(a,h){a.F=Date.now(),Ba(a),a.A=Dn(a.v);var p=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),dg(p.i,"t",g),a.C=0,p=a.j.J,a.h=new Jm,a.g=Pg(a.j,p?h:null,!a.m),0<a.O&&(a.M=new mI(m(a.Y,a,a.g),a.O)),h=a.U,p=a.g,g=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(zm[0]=b.toString()),b=zm);for(var D=0;D<b.length;D++){var V=Fm(p,b[D],g||h.handleEvent,!1,h.h||h);if(!V)break;h.g[V.key]=V}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),zs(),vI(a.i,a.u,a.A,a.l,a.R,a.m)}or.prototype.ca=function(a){a=a.target;const h=this.M;h&&Ln(a)==3?h.j():this.Y(a)},or.prototype.Y=function(a){try{if(a==this.g)e:{const Ze=Ln(this.g);var h=this.g.Ba();const Fi=this.g.Z();if(!(3>Ze)&&(Ze!=3||this.g&&(this.h.h||this.g.oa()||vg(this.g)))){this.J||Ze!=4||h==7||(h==8||0>=Fi?zs(3):zs(2)),Hc(this);var p=this.g.Z();this.X=p;t:if(Zm(this)){var g=vg(this.g);a="";var b=g.length,D=Ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wr(this),qs(this);var V="";break t}this.h.i=new l.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(D&&h==b-1)});g.length=0,this.h.g+=a,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=p==200,wI(this.i,this.u,this.A,this.l,this.R,Ze,p),this.o){if(this.T&&!this.K){t:{if(this.g){var he,qe=this.g;if((he=qe.g?qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(he)){var oe=he;break t}}oe=null}if(p=oe)Di(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wc(this,p);else{this.o=!1,this.s=3,ct(12),Wr(this),qs(this);break e}}if(this.P){p=!0;let en;for(;!this.J&&this.C<V.length;)if(en=II(this,V),en==$c){Ze==4&&(this.s=4,ct(14),p=!1),Di(this.i,this.l,null,"[Incomplete Response]");break}else if(en==Xm){this.s=4,ct(15),Di(this.i,this.l,V,"[Invalid Chunk]"),p=!1;break}else Di(this.i,this.l,en,null),Wc(this,en);if(Zm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ze!=4||V.length!=0||this.h.h||(this.s=1,ct(16),p=!1),this.o=this.o&&p,!p)Di(this.i,this.l,V,"[Invalid Chunked Response]"),Wr(this),qs(this);else if(0<V.length&&!this.W){this.W=!0;var Qe=this.j;Qe.g==this&&Qe.ba&&!Qe.M&&(Qe.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Xc(Qe),Qe.M=!0,ct(11))}}else Di(this.i,this.l,V,null),Wc(this,V);Ze==4&&Wr(this),this.o&&!this.J&&(Ze==4?kg(this.j,this):(this.o=!1,Ba(this)))}else VI(this.g),p==400&&0<V.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),Wr(this),qs(this)}}}catch{}finally{}};function Zm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function II(a,h){var p=a.C,g=h.indexOf(`
`,p);return g==-1?$c:(p=Number(h.substring(p,g)),isNaN(p)?Xm:(g+=1,g+p>h.length?$c:(h=h.slice(g,g+p),a.C=g+p,h)))}or.prototype.cancel=function(){this.J=!0,Wr(this)};function Ba(a){a.S=Date.now()+a.I,eg(a,a.I)}function eg(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Hs(m(a.ba,a),h)}function Hc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}or.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(EI(this.i,this.A),this.L!=2&&(zs(),ct(17)),Wr(this),this.s=2,qs(this)):eg(this,this.S-a)};function qs(a){a.j.G==0||a.J||kg(a.j,a)}function Wr(a){Hc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Hm(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Wc(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||qc(p.h,a))){if(!a.K&&qc(p.h,a)&&p.G==3){try{var g=p.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Ya(p),Ga(p);else break e;Jc(p),ct(18)}}else p.za=b[1],0<p.za-p.T&&37500>b[2]&&p.F&&p.v==0&&!p.C&&(p.C=Hs(m(p.Za,p),6e3));if(1>=rg(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Gr(p,11)}else if((a.K||p.g==a)&&Ya(p),!v(h))for(b=p.Da.g.parse(h),h=0;h<b.length;h++){let oe=b[h];if(p.T=oe[0],oe=oe[1],p.G==2)if(oe[0]=="c"){p.K=oe[1],p.ia=oe[2];const Qe=oe[3];Qe!=null&&(p.la=Qe,p.j.info("VER="+p.la));const Ze=oe[4];Ze!=null&&(p.Aa=Ze,p.j.info("SVER="+p.Aa));const Fi=oe[5];Fi!=null&&typeof Fi=="number"&&0<Fi&&(g=1.5*Fi,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const en=a.g;if(en){const Ja=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ja){var D=g.h;D.g||Ja.indexOf("spdy")==-1&&Ja.indexOf("quic")==-1&&Ja.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Gc(D,D.h),D.h=null))}if(g.D){const Qc=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;Qc&&(g.ya=Qc,ge(g.I,g.D,Qc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var V=a;if(g.qa=Ng(g,g.J?g.ia:null,g.W),V.K){ig(g.h,V);var he=V,qe=g.L;qe&&(he.I=qe),he.B&&(Hc(he),Ba(he)),g.g=V}else Ig(g);0<p.i.length&&Ka(p)}else oe[0]!="stop"&&oe[0]!="close"||Gr(p,7);else p.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?Gr(p,7):Yc(p):oe[0]!="noop"&&p.l&&p.l.ta(oe),p.v=0)}}zs(4)}catch{}}var CI=class{constructor(a,h){this.g=a,this.map=h}};function tg(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ng(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function rg(a){return a.h?1:a.g?a.g.size:0}function qc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Gc(a,h){a.g?a.g.add(h):a.h=h}function ig(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}tg.prototype.cancel=function(){if(this.i=sg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function sg(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return C(a.i)}function kI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],p=a.length,g=0;g<p;g++)h.push(a[g]);return h}h=[],p=0;for(g in a)h[p++]=a[g];return h}function RI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const g in a)h[p++]=g;return h}}}function og(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=RI(a),g=kI(a),b=g.length,D=0;D<b;D++)h.call(void 0,g[D],p&&p[D],a)}var ag=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function AI(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var g=a[p].indexOf("="),b=null;if(0<=g){var D=a[p].substring(0,g);b=a[p].substring(g+1)}else D=a[p];h(D,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function qr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof qr){this.h=a.h,Va(this,a.j),this.o=a.o,this.g=a.g,$a(this,a.s),this.l=a.l;var h=a.i,p=new Ys;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),lg(this,p),this.m=a.m}else a&&(h=String(a).match(ag))?(this.h=!1,Va(this,h[1]||"",!0),this.o=Gs(h[2]||""),this.g=Gs(h[3]||"",!0),$a(this,h[4]),this.l=Gs(h[5]||"",!0),lg(this,h[6]||"",!0),this.m=Gs(h[7]||"")):(this.h=!1,this.i=new Ys(null,this.h))}qr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ks(h,ug,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ks(h,ug,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Ks(p,p.charAt(0)=="/"?OI:PI,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Ks(p,xI)),a.join("")};function Dn(a){return new qr(a)}function Va(a,h,p){a.j=p?Gs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function $a(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function lg(a,h,p){h instanceof Ys?(a.i=h,DI(a.i,a.h)):(p||(h=Ks(h,bI)),a.i=new Ys(h,a.h))}function ge(a,h,p){a.i.set(h,p)}function za(a){return ge(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Gs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ks(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,NI),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function NI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ug=/[#\/\?@]/g,PI=/[#\?:]/g,OI=/[#\?]/g,bI=/[#\?@]/g,xI=/#/g;function Ys(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function ar(a){a.g||(a.g=new Map,a.h=0,a.i&&AI(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Ys.prototype,t.add=function(a,h){ar(this),this.i=null,a=Li(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function cg(a,h){ar(a),h=Li(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function hg(a,h){return ar(a),h=Li(a,h),a.g.has(h)}t.forEach=function(a,h){ar(this),this.g.forEach(function(p,g){p.forEach(function(b){a.call(h,b,g,this)},this)},this)},t.na=function(){ar(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let g=0;g<h.length;g++){const b=a[g];for(let D=0;D<b.length;D++)p.push(h[g])}return p},t.V=function(a){ar(this);let h=[];if(typeof a=="string")hg(this,a)&&(h=h.concat(this.g.get(Li(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return ar(this),this.i=null,a=Li(this,a),hg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function dg(a,h,p){cg(a,h),0<p.length&&(a.i=null,a.g.set(Li(a,h),C(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var g=h[p];const D=encodeURIComponent(String(g)),V=this.V(g);for(g=0;g<V.length;g++){var b=D;V[g]!==""&&(b+="="+encodeURIComponent(String(V[g]))),a.push(b)}}return this.i=a.join("&")};function Li(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function DI(a,h){h&&!a.j&&(ar(a),a.i=null,a.g.forEach(function(p,g){var b=g.toLowerCase();g!=b&&(cg(this,g),dg(this,b,p))},a)),a.j=h}function LI(a,h){const p=new Ws;if(l.Image){const g=new Image;g.onload=k(lr,p,"TestLoadImage: loaded",!0,h,g),g.onerror=k(lr,p,"TestLoadImage: error",!1,h,g),g.onabort=k(lr,p,"TestLoadImage: abort",!1,h,g),g.ontimeout=k(lr,p,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function MI(a,h){const p=new Ws,g=new AbortController,b=setTimeout(()=>{g.abort(),lr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(b),D.ok?lr(p,"TestPingServer: ok",!0,h):lr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),lr(p,"TestPingServer: error",!1,h)})}function lr(a,h,p,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(p)}catch{}}function FI(){this.g=new _I}function UI(a,h,p){const g=p||"";try{og(a,function(b,D){let V=b;c(b)&&(V=Lc(b)),h.push(g+D+"="+encodeURIComponent(V))})}catch(b){throw h.push(g+"type="+encodeURIComponent("_badmap")),b}}function Ha(a){this.l=a.Ub||null,this.j=a.eb||!1}y(Ha,Mc),Ha.prototype.g=function(){return new Wa(this.l,this.j)},Ha.prototype.i=function(a){return function(){return a}}({});function Wa(a,h){Xe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}y(Wa,Xe),t=Wa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Xs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Js(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Xs(this)),this.g&&(this.readyState=3,Xs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function fg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Js(this):Xs(this),this.readyState==3&&fg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Js(this))},t.Qa=function(a){this.g&&(this.response=a,Js(this))},t.ga=function(){this.g&&Js(this)};function Js(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Xs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Xs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Wa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function pg(a){let h="";return F(a,function(p,g){h+=g,h+=":",h+=p,h+=`\r
`}),h}function Kc(a,h,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=pg(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):ge(a,h,p))}function Oe(a){Xe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}y(Oe,Xe);var jI=/^https?$/i,BI=["POST","PUT"];t=Oe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vc.g(),this.v=this.o?Wm(this.o):Wm(Vc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){mg(this,D);return}if(a=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)p.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())p.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),b=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(BI,h,void 0))||g||b||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,V]of p)this.g.setRequestHeader(D,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yg(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){mg(this,D)}};function mg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,gg(a),qa(a)}function gg(a){a.A||(a.A=!0,ut(a,"complete"),ut(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ut(this,"complete"),ut(this,"abort"),qa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qa(this,!0)),Oe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?_g(this):this.bb())},t.bb=function(){_g(this)};function _g(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Ln(a)!=4||a.Z()!=2)){if(a.u&&Ln(a)==4)Vm(a.Ea,0,a);else if(ut(a,"readystatechange"),Ln(a)==4){a.h=!1;try{const V=a.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var g;if(g=V===0){var b=String(a.D).match(ag)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),g=!jI.test(b?b.toLowerCase():"")}p=g}if(p)ut(a,"complete"),ut(a,"success");else{a.m=6;try{var D=2<Ln(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",gg(a)}}finally{qa(a)}}}}function qa(a,h){if(a.g){yg(a);const p=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ut(a,"ready");try{p.onreadystatechange=g}catch{}}}function yg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Ln(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Ln(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),gI(h)}};function vg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function VI(a){const h={};a=(a.g&&2<=Ln(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(v(a[g]))continue;var p=N(a[g]);const b=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=h[b]||[];h[b]=D,D.push(p)}S(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qs(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function wg(a){this.Aa=0,this.i=[],this.j=new Ws,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qs("baseRetryDelayMs",5e3,a),this.cb=Qs("retryDelaySeedMs",1e4,a),this.Wa=Qs("forwardChannelMaxRetries",2,a),this.wa=Qs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new tg(a&&a.concurrentRequestLimit),this.Da=new FI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=wg.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,g){ct(0),this.W=a,this.H=h||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=Ng(this,null,this.W),Ka(this)};function Yc(a){if(Eg(a),a.G==3){var h=a.U++,p=Dn(a.I);if(ge(p,"SID",a.K),ge(p,"RID",h),ge(p,"TYPE","terminate"),Zs(a,p),h=new or(a,a.j,h),h.L=2,h.v=za(Dn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=Pg(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ba(h)}Ag(a)}function Ga(a){a.g&&(Xc(a),a.g.cancel(),a.g=null)}function Eg(a){Ga(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ya(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ka(a){if(!ng(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ne||G(),j||(Ne(),j=!0),H.add(h,a),a.B=0}}function $I(a,h){return rg(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Hs(m(a.Ga,a,h),Rg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new or(this,this.j,a);let D=this.o;if(this.S&&(D?(D=_(D),A(D,this.S)):D=this.S),this.m!==null||this.O||(b.H=D,D=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Tg(this,b,h),p=Dn(this.I),ge(p,"RID",a),ge(p,"CVER",22),this.D&&ge(p,"X-HTTP-Session-Id",this.D),Zs(this,p),D&&(this.O?h="headers="+encodeURIComponent(String(pg(D)))+"&"+h:this.m&&Kc(p,this.m,D)),Gc(this.h,b),this.Ua&&ge(p,"TYPE","init"),this.P?(ge(p,"$req",h),ge(p,"SID","null"),b.T=!0,zc(b,p,null)):zc(b,p,h),this.G=2}}else this.G==3&&(a?Sg(this,a):this.i.length==0||ng(this.h)||Sg(this))};function Sg(a,h){var p;h?p=h.l:p=a.U++;const g=Dn(a.I);ge(g,"SID",a.K),ge(g,"RID",p),ge(g,"AID",a.T),Zs(a,g),a.m&&a.o&&Kc(g,a.m,a.o),p=new or(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Tg(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Gc(a.h,p),zc(p,g,h)}function Zs(a,h){a.H&&F(a.H,function(p,g){ge(h,g,p)}),a.l&&og({},function(p,g){ge(h,g,p)})}function Tg(a,h,p){p=Math.min(a.i.length,p);var g=a.l?m(a.l.Na,a.l,a):null;e:{var b=a.i;let D=-1;for(;;){const V=["count="+p];D==-1?0<p?(D=b[0].g,V.push("ofs="+D)):D=0:V.push("ofs="+D);let he=!0;for(let qe=0;qe<p;qe++){let oe=b[qe].g;const Qe=b[qe].map;if(oe-=D,0>oe)D=Math.max(0,b[qe].g-100),he=!1;else try{UI(Qe,V,"req"+oe+"_")}catch{g&&g(Qe)}}if(he){g=V.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,g}function Ig(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ne||G(),j||(Ne(),j=!0),H.add(h,a),a.v=0}}function Jc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Hs(m(a.Fa,a),Rg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Cg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Hs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),Ga(this),Cg(this))};function Xc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Cg(a){a.g=new or(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Dn(a.qa);ge(h,"RID","rpc"),ge(h,"SID",a.K),ge(h,"AID",a.T),ge(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ge(h,"TO",a.ja),ge(h,"TYPE","xmlhttp"),Zs(a,h),a.m&&a.o&&Kc(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=za(Dn(h)),p.m=null,p.P=!0,Qm(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Ga(this),Jc(this),ct(19))};function Ya(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function kg(a,h){var p=null;if(a.g==h){Ya(a),Xc(a),a.g=null;var g=2}else if(qc(a.h,h))p=h.D,ig(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var b=a.B;g=jc(),ut(g,new Ym(g,p)),Ka(a)}else Ig(a);else if(b=h.s,b==3||b==0&&0<h.X||!(g==1&&$I(a,h)||g==2&&Jc(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),b){case 1:Gr(a,5);break;case 4:Gr(a,10);break;case 3:Gr(a,6);break;default:Gr(a,2)}}}function Rg(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function Gr(a,h){if(a.j.info("Error code "+h),h==2){var p=m(a.fb,a),g=a.Xa;const b=!g;g=new qr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Va(g,"https"),za(g),b?LI(g.toString(),p):MI(g.toString(),p)}else ct(2);a.G=0,a.l&&a.l.sa(h),Ag(a),Eg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Ag(a){if(a.G=0,a.ka=[],a.l){const h=sg(a.h);(h.length!=0||a.i.length!=0)&&(I(a.ka,h),I(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function Ng(a,h,p){var g=p instanceof qr?Dn(p):new qr(p);if(g.g!="")h&&(g.g=h+"."+g.g),$a(g,g.s);else{var b=l.location;g=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var D=new qr(null);g&&Va(D,g),h&&(D.g=h),b&&$a(D,b),p&&(D.l=p),g=D}return p=a.D,h=a.ya,p&&h&&ge(g,p,h),ge(g,"VER",a.la),Zs(a,g),g}function Pg(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Oe(new Ha({eb:p})):new Oe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Og(){}t=Og.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Bt(a,h){Xe.call(this),this.g=new wg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!v(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Mi(this)}y(Bt,Xe),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){Yc(this.g)},Bt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Lc(a),a=p);h.i.push(new CI(h.Ya++,a)),h.G==3&&Ka(h)},Bt.prototype.N=function(){this.g.l=null,delete this.j,Yc(this.g),delete this.g,Bt.aa.N.call(this)};function bg(a){Fc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}y(bg,Fc);function xg(){Uc.call(this),this.status=1}y(xg,Uc);function Mi(a){this.g=a}y(Mi,Og),Mi.prototype.ua=function(){ut(this.g,"a")},Mi.prototype.ta=function(a){ut(this.g,new bg(a))},Mi.prototype.sa=function(a){ut(this.g,new xg)},Mi.prototype.ra=function(){ut(this.g,"b")},Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,Bc.NO_ERROR=0,Bc.TIMEOUT=8,Bc.HTTP_ERROR=6,TI.COMPLETE="complete",yI.EventType=$s,$s.OPEN="a",$s.CLOSE="b",$s.ERROR="c",$s.MESSAGE="d",Xe.prototype.listen=Xe.prototype.K,Oe.prototype.listenOnce=Oe.prototype.L,Oe.prototype.getLastError=Oe.prototype.Ka,Oe.prototype.getLastErrorCode=Oe.prototype.Ba,Oe.prototype.getStatus=Oe.prototype.Z,Oe.prototype.getResponseJson=Oe.prototype.Oa,Oe.prototype.getResponseText=Oe.prototype.oa,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Ha}).apply(typeof yl<"u"?yl:typeof self<"u"?self:typeof window<"u"?window:{});const uv="@firebase/firestore",cv="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Na="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new Ca("@firebase/firestore");function un(t,...e){if(Cs.logLevel<=ae.DEBUG){const n=e.map(hm);Cs.debug(`Firestore (${Na}): ${t}`,...n)}}function MT(t,...e){if(Cs.logLevel<=ae.ERROR){const n=e.map(hm);Cs.error(`Firestore (${Na}): ${t}`,...n)}}function ZD(t,...e){if(Cs.logLevel<=ae.WARN){const n=e.map(hm);Cs.warn(`Firestore (${Na}): ${t}`,...n)}}function hm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,FT(t,r,n)}function FT(t,e,n){let r=`FIRESTORE (${Na}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw MT(r),new Error(r)}function bo(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||FT(e,i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class re extends Zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class eL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class tL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class nL{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){bo(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new xo;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new xo,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{un("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(un("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new xo)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(un("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(bo(typeof r.accessToken=="string",31837,{l:r}),new UT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return bo(e===null||typeof e=="string",2055,{h:e}),new dt(e)}}class rL{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class iL{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new rL(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sL{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){bo(this.o===void 0,3512);const r=s=>{s.error!=null&&un("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,un("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{un("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):un("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new hv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(bo(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new hv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aL(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=oL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function pn(t,e){return t<e?-1:t>e?1:0}function uL(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return pn(r,i);{const s=aL(),o=cL(s.encode(dv(t,n)),s.encode(dv(e,n)));return o!==0?o:pn(r,i)}}n+=r>65535?2:1}return pn(t.length,e.length)}function dv(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function cL(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return pn(t[n],e[n]);return pn(t.length,e.length)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv="__name__";class wn{constructor(e,n,r){n===void 0?n=0:n>e.length&&da(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&da(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=wn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return pn(e.length,n.length)}static compareSegments(e,n){const r=wn.isNumericId(e),i=wn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?wn.extractNumericId(e).compare(wn.extractNumericId(n)):uL(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return cm.fromString(e.substring(4,e.length-2))}}class on extends wn{construct(e,n,r){return new on(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(ne.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new on(n)}static emptyPath(){return new on([])}}const hL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ei extends wn{construct(e,n,r){return new ei(e,n,r)}static isValidIdentifier(e){return hL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ei.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===fv}static keyField(){return new ei([fv])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new re(ne.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new re(ne.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new re(ne.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new re(ne.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ei(n)}static emptyPath(){return new ei([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.path=e}static fromPath(e){return new oi(on.fromString(e))}static fromName(e){return new oi(on.fromString(e).popFirst(5))}static empty(){return new oi(on.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&on.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return on.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oi(new on(e.slice()))}}function dL(t,e,n,r){if(e===!0&&r===!0)throw new re(ne.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fL(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function pL(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":da(12329,{type:typeof t})}function mL(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(ne.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pL(t);throw new re(ne.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t,e){const n={typeString:t};return e&&(n.value=e),n}function Pa(t,e){if(!fL(t))throw new re(ne.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new re(ne.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv=-62135596800,mv=1e6;class En{static now(){return En.fromMillis(Date.now())}static fromDate(e){return En.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*mv);return new En(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<pv)throw new re(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/mv}_compareTo(e){return this.seconds===e.seconds?pn(this.nanoseconds,e.nanoseconds):pn(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:En._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Pa(e,En._jsonSchema))return new En(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-pv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}En._jsonSchemaVersion="firestore/timestamp/1.0",En._jsonSchema={type:Le("string",En._jsonSchemaVersion),seconds:Le("number"),nanoseconds:Le("number")};function gL(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new _L("Invalid base64 string: "+s):s}}(e);return new Ii(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ii(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pn(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ii.EMPTY_BYTE_STRING=new Ii("");const _f="(default)";class Ou{constructor(e,n){this.projectId=e,this.database=n||_f}static empty(){return new Ou("","")}get isDefaultDatabase(){return this.database===_f}isEqual(e){return e instanceof Ou&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function vL(t){return new yL(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gv,Z;(Z=gv||(gv={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new cm([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wL=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EL=1048576;function qh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-r);i>0&&un("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new xo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new dm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(ne.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var _v,yv;(yv=_v||(_v={})).Fa="default",yv.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TL(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT="firestore.googleapis.com",wv=!0;class Ev{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=jT,this.ssl=wv}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:wv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=wL;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<EL)throw new re(ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=TL((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new re(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new re(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new re(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class BT{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ev({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ev(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new eL;switch(r.type){case"firstParty":return new iL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=vv.get(n);r&&(un("ComponentProvider","Removing Datastore"),vv.delete(n),r.terminate())}(this),Promise.resolve()}}function IL(t,e,n,r={}){var i;t=mL(t,BT);const s=$r(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;s&&(mc(`https://${u}`),gc("Firestore",!0)),o.host!==jT&&o.host!==u&&ZD("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},o),{host:u,ssl:s,emulatorOptions:r});if(!Qn(c,l)&&(t._setSettings(c),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=dt.MOCK_USER;else{d=Up(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new re(ne.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new dt(m)}t._authCredentials=new tL(new UT(d,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fm(this.firestore,e,this._query)}}class Tn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pm(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tn(this.firestore,e,this._key)}toJSON(){return{type:Tn._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Pa(n,Tn._jsonSchema))return new Tn(e,r||null,new oi(on.fromString(n.referencePath)))}}Tn._jsonSchemaVersion="firestore/documentReference/1.0",Tn._jsonSchema={type:Le("string",Tn._jsonSchemaVersion),referencePath:Le("string")};class pm extends fm{constructor(e,n,r){super(e,n,vL(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tn(this.firestore,null,new oi(e))}withConverter(e){return new pm(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv="AsyncQueue";class Tv{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new SL(this,"async_queue_retry"),this.oc=()=>{const r=qh();r&&un(Sv,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=qh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=qh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new xo;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!gL(e))throw e;un(Sv,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,MT("INTERNAL UNHANDLED ERROR: ",Iv(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const i=dm.createAndSchedule(this,e,n,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&da(47125,{hc:Iv(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Iv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class CL extends BT{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Tv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tv(e),this._firestoreClient=void 0,await e}}}function kL(t,e){const n=typeof t=="object"?t:Ms(),r=typeof t=="string"?t:_f,i=Pn(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Mp("firestore");s&&IL(i,...s)}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jn(Ii.fromBase64String(e))}catch(n){throw new re(ne.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new jn(Ii.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:jn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Pa(e,jn._jsonSchema))return jn.fromBase64String(e.bytes)}}jn._jsonSchemaVersion="firestore/bytes/1.0",jn._jsonSchema={type:Le("string",jn._jsonSchemaVersion),bytes:Le("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(ne.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ei(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(ne.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(ne.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return pn(this._lat,e._lat)||pn(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:di._jsonSchemaVersion}}static fromJSON(e){if(Pa(e,di._jsonSchema))return new di(e.latitude,e.longitude)}}di._jsonSchemaVersion="firestore/geoPoint/1.0",di._jsonSchema={type:Le("string",di._jsonSchemaVersion),latitude:Le("number"),longitude:Le("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:fi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Pa(e,fi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new fi(e.vectorValues);throw new re(ne.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}fi._jsonSchemaVersion="firestore/vectorValue/1.0",fi._jsonSchema={type:Le("string",fi._jsonSchemaVersion),vectorValues:Le("object")};const RL=new RegExp("[~\\*/\\[\\]]");function AL(t,e,n){if(e.search(RL)>=0)throw Cv(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new VT(...e.split("."))._internalPath}catch{throw Cv(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function Cv(t,e,n,r,i){let s=`Function ${e}() called with invalid data`;s+=". ";let o="";return new re(ne.INVALID_ARGUMENT,s+t+o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Tn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(zT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class NL extends $T{data(){return super.data()}}function zT(t,e){return typeof e=="string"?AL(t,e):e instanceof VT?e._internalPath:e._delegate._internalPath}class vl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hs extends $T{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(zT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new re(ne.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=hs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}hs._jsonSchemaVersion="firestore/documentSnapshot/1.0",hs._jsonSchema={type:Le("string",hs._jsonSchemaVersion),bundleSource:Le("string","DocumentSnapshot"),bundleName:Le("string"),bundle:Le("string")};class zl extends hs{data(e={}){return super.data(e)}}class Do{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new vl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new zl(this._firestore,this._userDataWriter,r.key,r,new vl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re(ne.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new zl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new vl(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new zl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new vl(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:PL(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new re(ne.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Do._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=lL.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function PL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return da(61501,{type:t})}}Do._jsonSchemaVersion="firestore/querySnapshot/1.0",Do._jsonSchema={type:Le("string",Do._jsonSchemaVersion),bundleSource:Le("string","QuerySnapshot"),bundleName:Le("string"),bundle:Le("string")};(function(e,n=!0){(function(i){Na=i})(Hr),Pt(new mt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new CL(new nL(r.getProvider("auth-internal")),new sL(o,r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new re(ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ou(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),We(uv,cv,e),We(uv,cv,"esm2017")})();var kv={};const Rv="@firebase/database",Av="1.0.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let HT="";function OL(t){HT=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bL{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:oa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return sr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new bL(e)}}catch{}return new xL},ai=WT("localStorage"),DL=WT("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=new Ca("@firebase/database"),LL=function(){let t=1;return function(){return t++}}(),qT=function(t){const e=$P(t),n=new FP;n.update(e);const r=n.digest();return Dp.encodeByteArray(r)},Oa=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Oa.apply(null,r):typeof r=="object"?e+=Ke(r):e+=r,e+=" "}return e};let Lo=null,Nv=!0;const ML=function(t,e){$(!0,"Can't turn on custom loggers persistently."),ds.logLevel=ae.VERBOSE,Lo=ds.log.bind(ds)},rt=function(...t){if(Nv===!0&&(Nv=!1,Lo===null&&DL.get("logging_enabled")===!0&&ML()),Lo){const e=Oa.apply(null,t);Lo(e)}},ba=function(t){return function(...e){rt(t,...e)}},yf=function(...t){const e="FIREBASE INTERNAL ERROR: "+Oa(...t);ds.error(e)},nr=function(...t){const e=`FIREBASE FATAL ERROR: ${Oa(...t)}`;throw ds.error(e),new Error(e)},Dt=function(...t){const e="FIREBASE WARNING: "+Oa(...t);ds.warn(e)},FL=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},GT=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},UL=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ks="[MIN_NAME]",Ci="[MAX_NAME]",Us=function(t,e){if(t===e)return 0;if(t===ks||e===Ci)return-1;if(e===ks||t===Ci)return 1;{const n=Pv(t),r=Pv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},jL=function(t,e){return t===e?0:t<e?-1:1},uo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ke(e))},mm=function(t){if(typeof t!="object"||t===null)return Ke(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ke(e[r]),n+=":",n+=mm(t[e[r]]);return n+="}",n},KT=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Qt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const YT=function(t){$(!GT(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let f="";for(u=0;u<64;u+=8){let m=parseInt(d.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},BL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},VL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},$L=new RegExp("^-?(0*)\\d{1,10}$"),zL=-2147483648,HL=2147483647,Pv=function(t){if($L.test(t)){const e=Number(t);if(e>=zL&&e<=HL)return e}return null},xa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Dt("Exception was thrown by user callback.",n),e},Math.floor(0))}},WL=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Mo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qL{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,qt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Dt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(rt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Dt(e)}}class Hl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Hl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm="5",JT="v",XT="s",QT="r",ZT="f",e1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,t1="ls",n1="p",vf="ac",r1="websocket",i1="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,n,r,i,s=!1,o="",l=!1,u=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=u,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ai.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ai.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function KL(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function o1(t,e,n){$(typeof e=="string","typeof type must == string"),$(typeof n=="object","typeof params must == object");let r;if(e===r1)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===i1)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);KL(t)&&(n.ns=t.namespace);const i=[];return Qt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(){this.counters_={}}incrementCounter(e,n=1){sr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return EP(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh={},Kh={};function _m(t){const e=t.toString();return Gh[e]||(Gh[e]=new YL),Gh[e]}function JL(t,e){const n=t.toString();return Kh[n]||(Kh[n]=e()),Kh[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&xa(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov="start",QL="close",ZL="pLPCommand",e4="pRTLPCB",a1="id",l1="pw",u1="ser",t4="cb",n4="seg",r4="ts",i4="d",s4="dframe",c1=1870,h1=30,o4=c1-h1,a4=25e3,l4=3e4;class es{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ba(e),this.stats_=_m(n),this.urlFn=u=>(this.appCheckToken&&(u[vf]=this.appCheckToken),o1(n,i1,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new XL(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(l4)),UL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ym((...s)=>{const[o,l,u,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ov)this.id=l,this.password=u;else if(o===QL)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ov]="t",r[u1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[t4]=this.scriptTagHolder.uniqueCallbackIdentifier),r[JT]=gm,this.transportSessionId&&(r[XT]=this.transportSessionId),this.lastSessionId&&(r[t1]=this.lastSessionId),this.applicationId&&(r[n1]=this.applicationId),this.appCheckToken&&(r[vf]=this.appCheckToken),typeof location<"u"&&location.hostname&&e1.test(location.hostname)&&(r[QT]=ZT);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){es.forceAllow_=!0}static forceDisallow(){es.forceDisallow_=!0}static isAvailable(){return es.forceAllow_?!0:!es.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!BL()&&!VL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=gS(n),i=KT(r,o4);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[s4]="t",r[a1]=e,r[l1]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ym{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=LL(),window[ZL+this.uniqueCallbackIdentifier]=e,window[e4+this.uniqueCallbackIdentifier]=n,this.myIFrame=ym.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){rt("frame writing exception"),l.stack&&rt(l.stack),rt(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||rt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[a1]=this.myID,e[l1]=this.myPW,e[u1]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+h1+r.length<=c1;){const o=this.pendingSegs.shift();r=r+"&"+n4+i+"="+o.seg+"&"+r4+i+"="+o.ts+"&"+i4+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(a4)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{rt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u4=16384,c4=45e3;let bu=null;typeof MozWebSocket<"u"?bu=MozWebSocket:typeof WebSocket<"u"&&(bu=WebSocket);class an{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ba(this.connId),this.stats_=_m(n),this.connURL=an.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[JT]=gm,typeof location<"u"&&location.hostname&&e1.test(location.hostname)&&(o[QT]=ZT),n&&(o[XT]=n),r&&(o[t1]=r),i&&(o[vf]=i),s&&(o[n1]=s),o1(e,r1,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ai.set("previous_websocket_failure",!0);try{let r;OP(),this.mySock=new bu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){an.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&bu!==null&&!an.forceDisallow_}static previouslyFailed(){return ai.isInMemoryStorage||ai.get("previous_websocket_failure")===!0}markConnectionHealthy(){ai.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=oa(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if($(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=KT(n,u4);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(c4))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}an.responsesRequiredToBeHealthy=2;an.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{static get ALL_TRANSPORTS(){return[es,an]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=an&&an.isAvailable();let r=n&&!an.previouslyFailed();if(e.webSocketOnly&&(n||Dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[an];else{const i=this.transports_=[];for(const s of fa.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);fa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}fa.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h4=6e4,d4=5e3,f4=10*1024,p4=100*1024,Yh="t",bv="d",m4="s",xv="r",g4="e",Dv="o",Lv="a",Mv="n",Fv="p",_4="h";class y4{constructor(e,n,r,i,s,o,l,u,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ba("c:"+this.id+":"),this.transportManager_=new fa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Mo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>p4?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>f4?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Yh in e){const n=e[Yh];n===Lv?this.upgradeIfSecondaryHealthy_():n===xv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Dv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=uo("t",e),r=uo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Lv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Mv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=uo("t",e),r=uo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=uo(Yh,e);if(bv in e){const r=e[bv];if(n===_4){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Mv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===m4?this.onConnectionShutdown_(r):n===xv?this.onReset_(r):n===g4?yf("Server Error: "+r):n===Dv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):yf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),gm!==r&&Dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Mo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(h4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Mo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(d4))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ai.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e){this.allowedEvents_=e,this.listeners_={},$(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){$(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu extends f1{static getInstance(){return new xu}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!jp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return $(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=32,jv=768;class Ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ce(){return new Ee("")}function ee(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Fr(t){return t.pieces_.length-t.pieceNum_}function ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ee(t.pieces_,e)}function p1(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function v4(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function m1(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function g1(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ee(e,0)}function ze(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ee)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Ee(n,0)}function Y(t){return t.pieceNum_>=t.pieces_.length}function Kt(t,e){const n=ee(t),r=ee(e);if(n===null)return e;if(n===r)return Kt(ve(t),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function _1(t,e){if(Fr(t)!==Fr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function cn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Fr(t)>Fr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class w4{constructor(e,n){this.errorPrefix_=n,this.parts_=m1(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=_c(this.parts_[r]);y1(this)}}function E4(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=_c(e),y1(t)}function S4(t){const e=t.parts_.pop();t.byteLength_-=_c(e),t.parts_.length>0&&(t.byteLength_-=1)}function y1(t){if(t.byteLength_>jv)throw new Error(t.errorPrefix_+"has a key path longer than "+jv+" bytes ("+t.byteLength_+").");if(t.parts_.length>Uv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Uv+") or object contains a cycle "+Zr(t))}function Zr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm extends f1{static getInstance(){return new vm}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return $(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=1e3,T4=60*5*1e3,Bv=30*1e3,I4=1.3,C4=3e4,k4="server_kill",Vv=3;class Gn extends d1{constructor(e,n,r,i,s,o,l,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=u,this.id=Gn.nextPersistentConnectionId_++,this.log_=ba("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=co,this.maxReconnectDelay_=T4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ke(s)),$(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Fp,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),$(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const u=l.d,c=l.s;Gn.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&sr(e,"w")){const r=Ts(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||MP(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Bv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=LP(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ke(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):yf("Unrecognized action received from server: "+Ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){$(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=co,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=co,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>C4&&(this.reconnectDelay_=co),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*I4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Gn.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const u=function(){l?l.close():(o=!0,r())},c=function(f){$(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?rt("getToken() completed but was canceled"):(rt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,l=new y4(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,k=>{Dt(k+" ("+this.repoInfo_.toString()+")"),this.interrupt(k4)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Dt(f),u())}}}interrupt(e){rt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){rt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],of(this.interruptReasons_)&&(this.reconnectDelay_=co,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>mm(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Ee(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){rt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Vv&&(this.reconnectDelay_=Bv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){rt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Vv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+HT.replace(/\./g,"-")]=1,jp()?e["framework.cordova"]=1:SS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xu.getInstance().currentlyOnline();return of(this.interruptReasons_)&&e}}Gn.nextPersistentConnectionId_=0;Gn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new te(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new te(ks,e),i=new te(ks,n);return this.compare(r,i)!==0}minPost(){return te.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wl;class v1 extends Tc{static get __EMPTY_NODE(){return wl}static set __EMPTY_NODE(e){wl=e}compare(e,n){return Us(e.name,n.name)}isDefinedOn(e){throw Ds("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return te.MIN}maxPost(){return new te(Ci,wl)}makePost(e,n){return $(typeof e=="string","KeyIndex indexValue must always be a string."),new te(e,wl)}toString(){return".key"}}const fs=new v1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$e.RED,this.left=i??Tt.EMPTY_NODE,this.right=s??Tt.EMPTY_NODE}copy(e,n,r,i,s){return new $e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Tt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Tt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$e.RED=!0;$e.BLACK=!1;class R4{copy(e,n,r,i,s){return this}insert(e,n,r){return new $e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Tt{constructor(e,n=Tt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Tt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(e){return new Tt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new El(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new El(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new El(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new El(this.root_,null,this.comparator_,!0,e)}}Tt.EMPTY_NODE=new R4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A4(t,e){return Us(t.name,e.name)}function wm(t,e){return Us(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wf;function N4(t){wf=t}const w1=function(t){return typeof t=="number"?"number:"+YT(t):"string:"+t},E1=function(t){if(t.isLeafNode()){const e=t.val();$(typeof e=="string"||typeof e=="number"||typeof e=="object"&&sr(e,".sv"),"Priority must be a string or number.")}else $(t===wf||t.isEmpty(),"priority of unexpected type.");$(t===wf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $v;class Be{static set __childrenNodeConstructor(e){$v=e}static get __childrenNodeConstructor(){return $v}constructor(e,n=Be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,$(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),E1(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Y(e)?this:ee(e)===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ee(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:($(r!==".priority"||Fr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Be.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+w1(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=YT(this.value_):e+=this.value_,this.lazyHash_=qT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Be.__childrenNodeConstructor?-1:($(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Be.VALUE_TYPE_ORDER.indexOf(n),s=Be.VALUE_TYPE_ORDER.indexOf(r);return $(i>=0,"Unknown leaf type: "+n),$(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let S1,T1;function P4(t){S1=t}function O4(t){T1=t}class b4 extends Tc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Us(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return te.MIN}maxPost(){return new te(Ci,new Be("[PRIORITY-POST]",T1))}makePost(e,n){const r=S1(e);return new te(n,new Be("[PRIORITY-POST]",r))}toString(){return".priority"}}const ot=new b4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x4=Math.log(2);class D4{constructor(e){const n=s=>parseInt(Math.log(s)/x4,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Du=function(t,e,n,r){t.sort(e);const i=function(u,c){const d=c-u;let f,m;if(d===0)return null;if(d===1)return f=t[u],m=n?n(f):f,new $e(m,f.node,$e.BLACK,null,null);{const k=parseInt(d/2,10)+u,y=i(u,k),C=i(k+1,c);return f=t[k],m=n?n(f):f,new $e(m,f.node,$e.BLACK,y,C)}},s=function(u){let c=null,d=null,f=t.length;const m=function(y,C){const I=f-y,w=f;f-=y;const v=i(I+1,w),E=t[I],P=n?n(E):E;k(new $e(P,E.node,C,null,v))},k=function(y){c?(c.left=y,c=y):(d=y,c=y)};for(let y=0;y<u.count;++y){const C=u.nextBitIsOne(),I=Math.pow(2,u.count-(y+1));C?m(I,$e.BLACK):(m(I,$e.BLACK),m(I,$e.RED))}return d},o=new D4(t.length),l=s(o);return new Tt(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jh;const ji={};class Hn{static get Default(){return $(ji&&ot,"ChildrenNode.ts has not been loaded"),Jh=Jh||new Hn({".priority":ji},{".priority":ot}),Jh}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Ts(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Tt?n:null}hasIndex(e){return sr(this.indexSet_,e.toString())}addIndex(e,n){$(e!==fs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(te.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Du(r,e.getCompare()):l=ji;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const d=Object.assign({},this.indexes_);return d[u]=l,new Hn(d,c)}addToIndexes(e,n){const r=Eu(this.indexes_,(i,s)=>{const o=Ts(this.indexSet_,s);if($(o,"Missing index implementation for "+s),i===ji)if(o.isDefinedOn(e.node)){const l=[],u=n.getIterator(te.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&l.push(c),c=u.getNext();return l.push(e),Du(l,o.getCompare())}else return ji;else{const l=n.get(e.name);let u=i;return l&&(u=u.remove(new te(e.name,l))),u.insert(e,e.node)}});return new Hn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Eu(this.indexes_,i=>{if(i===ji)return i;{const s=n.get(e.name);return s?i.remove(new te(e.name,s)):i}});return new Hn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ho;class le{static get EMPTY_NODE(){return ho||(ho=new le(new Tt(wm),null,Hn.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&E1(this.priorityNode_),this.children_.isEmpty()&&$(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ho}updatePriority(e){return this.children_.isEmpty()?this:new le(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ho:n}}getChild(e){const n=ee(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if($(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new te(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ho:this.priorityNode_;return new le(i,o,s)}}updateChild(e,n){const r=ee(e);if(r===null)return n;{$(ee(e)!==".priority"||Fr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ve(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ot,(o,l)=>{n[o]=l.val(e),r++,s&&le.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+w1(this.getPriority().val())+":"),this.forEachChild(ot,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":qT(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new te(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new te(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new te(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,te.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,te.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Da?-1:0}withIndex(e){if(e===fs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new le(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===fs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ot),i=n.getIterator(ot);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===fs?null:this.indexMap_.get(e.toString())}}le.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class L4 extends le{constructor(){super(new Tt(wm),le.EMPTY_NODE,Hn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return le.EMPTY_NODE}isEmpty(){return!1}}const Da=new L4;Object.defineProperties(te,{MIN:{value:new te(ks,le.EMPTY_NODE)},MAX:{value:new te(Ci,Da)}});v1.__EMPTY_NODE=le.EMPTY_NODE;Be.__childrenNodeConstructor=le;N4(Da);O4(Da);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M4=!0;function it(t,e=null){if(t===null)return le.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),$(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Be(n,it(e))}if(!(t instanceof Array)&&M4){const n=[];let r=!1;if(Qt(t,(o,l)=>{if(o.substring(0,1)!=="."){const u=it(l);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new te(o,u)))}}),n.length===0)return le.EMPTY_NODE;const s=Du(n,A4,o=>o.name,wm);if(r){const o=Du(n,ot.getCompare());return new le(s,it(e),new Hn({".priority":o},{".priority":ot}))}else return new le(s,it(e),Hn.Default)}else{let n=le.EMPTY_NODE;return Qt(t,(r,i)=>{if(sr(t,r)&&r.substring(0,1)!=="."){const s=it(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(it(e))}}P4(it);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F4 extends Tc{constructor(e){super(),this.indexPath_=e,$(!Y(e)&&ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Us(e.name,n.name):s}makePost(e,n){const r=it(e),i=le.EMPTY_NODE.updateChild(this.indexPath_,r);return new te(n,i)}maxPost(){const e=le.EMPTY_NODE.updateChild(this.indexPath_,Da);return new te(Ci,e)}toString(){return m1(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U4 extends Tc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Us(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return te.MIN}maxPost(){return te.MAX}makePost(e,n){const r=it(e);return new te(n,r)}toString(){return".value"}}const j4=new U4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B4(t){return{type:"value",snapshotNode:t}}function V4(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function $4(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function zv(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function z4(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ot}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return $(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return $(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ks}hasEnd(){return this.endSet_}getIndexEndValue(){return $(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return $(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ci}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return $(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ot}copy(){const e=new Em;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Hv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ot?n="$priority":t.index_===j4?n="$value":t.index_===fs?n="$key":($(t.index_ instanceof F4,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ke(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ke(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ke(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ke(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ke(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Wv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ot&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu extends d1{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:($(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ba("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Lu.getListenId_(e,r),l={};this.listens_[o]=l;const u=Hv(e._queryParams);this.restRequest_(s+".json",u,(c,d)=>{let f=d;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),Ts(this.listens_,o)===l){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=Lu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Hv(e._queryParams),r=e._path.toString(),i=new Fp;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ls(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let u=null;if(l.status>=200&&l.status<300){try{u=oa(l.responseText)}catch{Dt("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,u)}else l.status!==401&&l.status!==404&&Dt("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H4{constructor(){this.rootNode_=le.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(){return{value:null,children:new Map}}function I1(t,e,n){if(Y(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ee(e);t.children.has(r)||t.children.set(r,Mu());const i=t.children.get(r);e=ve(e),I1(i,e,n)}}function Ef(t,e,n){t.value!==null?n(e,t.value):W4(t,(r,i)=>{const s=new Ee(e.toString()+"/"+r);Ef(i,s,n)})}function W4(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Qt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv=10*1e3,G4=30*1e3,K4=5*60*1e3;class Y4{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new q4(e);const r=qv+(G4-qv)*Math.random();Mo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Qt(e,(i,s)=>{s>0&&sr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Mo(this.reportStats_.bind(this),Math.floor(Math.random()*2*K4))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var In;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(In||(In={}));function C1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function k1(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function R1(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=In.ACK_USER_WRITE,this.source=C1()}operationForChild(e){if(Y(this.path)){if(this.affectedTree.value!=null)return $(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ee(e));return new Fu(ce(),n,this.revert)}}else return $(ee(this.path)===e,"operationForChild called for unrelated child."),new Fu(ve(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=In.OVERWRITE}operationForChild(e){return Y(this.path)?new ki(this.source,ce(),this.snap.getImmediateChild(e)):new ki(this.source,ve(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=In.MERGE}operationForChild(e){if(Y(this.path)){const n=this.children.subtree(new Ee(e));return n.isEmpty()?null:n.value?new ki(this.source,ce(),n.value):new pa(this.source,ce(),n)}else return $(ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new pa(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Y(e))return this.isFullyInitialized()&&!this.filtered_;const n=ee(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function J4(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(z4(o.childName,o.snapshotNode))}),fo(t,i,"child_removed",e,r,n),fo(t,i,"child_added",e,r,n),fo(t,i,"child_moved",s,r,n),fo(t,i,"child_changed",e,r,n),fo(t,i,"value",e,r,n),i}function fo(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,u)=>Q4(t,l,u)),o.forEach(l=>{const u=X4(t,l,s);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(u,t.query_))})})}function X4(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Q4(t,e,n){if(e.childName==null||n.childName==null)throw Ds("Should only compare child_ events.");const r=new te(e.childName,e.snapshotNode),i=new te(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(t,e){return{eventCache:t,serverCache:e}}function Fo(t,e,n,r){return A1(new Sm(e,n,r),t.serverCache)}function N1(t,e,n,r){return A1(t.eventCache,new Sm(e,n,r))}function Sf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ri(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xh;const Z4=()=>(Xh||(Xh=new Tt(jL)),Xh);class ye{static fromObject(e){let n=new ye(null);return Qt(e,(r,i)=>{n=n.set(new Ee(r),i)}),n}constructor(e,n=Z4()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ce(),value:this.value};if(Y(e))return null;{const r=ee(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ve(e),n);return s!=null?{path:ze(new Ee(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Y(e))return this;{const n=ee(e),r=this.children.get(n);return r!==null?r.subtree(ve(e)):new ye(null)}}set(e,n){if(Y(e))return new ye(n,this.children);{const r=ee(e),s=(this.children.get(r)||new ye(null)).set(ve(e),n),o=this.children.insert(r,s);return new ye(this.value,o)}}remove(e){if(Y(e))return this.children.isEmpty()?new ye(null):new ye(null,this.children);{const n=ee(e),r=this.children.get(n);if(r){const i=r.remove(ve(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ye(null):new ye(this.value,s)}else return this}}get(e){if(Y(e))return this.value;{const n=ee(e),r=this.children.get(n);return r?r.get(ve(e)):null}}setTree(e,n){if(Y(e))return n;{const r=ee(e),s=(this.children.get(r)||new ye(null)).setTree(ve(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ye(this.value,o)}}fold(e){return this.fold_(ce(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ze(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ce(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Y(e))return null;{const s=ee(e),o=this.children.get(s);return o?o.findOnPath_(ve(e),ze(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ce(),n)}foreachOnPath_(e,n,r){if(Y(e))return this;{this.value&&r(n,this.value);const i=ee(e),s=this.children.get(i);return s?s.foreachOnPath_(ve(e),ze(n,i),r):new ye(null)}}foreach(e){this.foreach_(ce(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ze(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.writeTree_=e}static empty(){return new mn(new ye(null))}}function Uo(t,e,n){if(Y(e))return new mn(new ye(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Kt(i,e);return s=s.updateChild(o,n),new mn(t.writeTree_.set(i,s))}else{const i=new ye(n),s=t.writeTree_.setTree(e,i);return new mn(s)}}}function Gv(t,e,n){let r=t;return Qt(n,(i,s)=>{r=Uo(r,ze(e,i),s)}),r}function Kv(t,e){if(Y(e))return mn.empty();{const n=t.writeTree_.setTree(e,new ye(null));return new mn(n)}}function Tf(t,e){return Oi(t,e)!=null}function Oi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Kt(n.path,e)):null}function Yv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ot,(r,i)=>{e.push(new te(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new te(r,i.value))}),e}function Dr(t,e){if(Y(e))return t;{const n=Oi(t,e);return n!=null?new mn(new ye(n)):new mn(t.writeTree_.subtree(e))}}function If(t){return t.writeTree_.isEmpty()}function Rs(t,e){return P1(ce(),t.writeTree_,e)}function P1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?($(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=P1(ze(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ze(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(t,e){return M1(e,t)}function eM(t,e,n,r,i){$(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Uo(t.visibleWrites,e,n)),t.lastWriteId=r}function tM(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function nM(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);$(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&rM(l,r.path)?i=!1:cn(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return iM(t),!0;if(r.snap)t.visibleWrites=Kv(t.visibleWrites,r.path);else{const l=r.children;Qt(l,u=>{t.visibleWrites=Kv(t.visibleWrites,ze(r.path,u))})}return!0}else return!1}function rM(t,e){if(t.snap)return cn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&cn(ze(t.path,n),e))return!0;return!1}function iM(t){t.visibleWrites=b1(t.allWrites,sM,ce()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function sM(t){return t.visible}function b1(t,e,n){let r=mn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)cn(n,o)?(l=Kt(n,o),r=Uo(r,l,s.snap)):cn(o,n)&&(l=Kt(o,n),r=Uo(r,ce(),s.snap.getChild(l)));else if(s.children){if(cn(n,o))l=Kt(n,o),r=Gv(r,l,s.children);else if(cn(o,n))if(l=Kt(o,n),Y(l))r=Gv(r,ce(),s.children);else{const u=Ts(s.children,ee(l));if(u){const c=u.getChild(ve(l));r=Uo(r,ce(),c)}}}else throw Ds("WriteRecord should have .snap or .children")}}return r}function x1(t,e,n,r,i){if(!r&&!i){const s=Oi(t.visibleWrites,e);if(s!=null)return s;{const o=Dr(t.visibleWrites,e);if(If(o))return n;if(n==null&&!Tf(o,ce()))return null;{const l=n||le.EMPTY_NODE;return Rs(o,l)}}}else{const s=Dr(t.visibleWrites,e);if(!i&&If(s))return n;if(!i&&n==null&&!Tf(s,ce()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(cn(c.path,e)||cn(e,c.path))},l=b1(t.allWrites,o,e),u=n||le.EMPTY_NODE;return Rs(l,u)}}}function oM(t,e,n){let r=le.EMPTY_NODE;const i=Oi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ot,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Dr(t.visibleWrites,e);return n.forEachChild(ot,(o,l)=>{const u=Rs(Dr(s,new Ee(o)),l);r=r.updateImmediateChild(o,u)}),Yv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Dr(t.visibleWrites,e);return Yv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function aM(t,e,n,r,i){$(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ze(e,n);if(Tf(t.visibleWrites,s))return null;{const o=Dr(t.visibleWrites,s);return If(o)?i.getChild(n):Rs(o,i.getChild(n))}}function lM(t,e,n,r){const i=ze(e,n),s=Oi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Dr(t.visibleWrites,i);return Rs(o,r.getNode().getImmediateChild(n))}else return null}function uM(t,e){return Oi(t.visibleWrites,e)}function cM(t,e,n,r,i,s,o){let l;const u=Dr(t.visibleWrites,e),c=Oi(u,ce());if(c!=null)l=c;else if(n!=null)l=Rs(u,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],f=o.getCompare(),m=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let k=m.getNext();for(;k&&d.length<i;)f(k,r)!==0&&d.push(k),k=m.getNext();return d}else return[]}function hM(){return{visibleWrites:mn.empty(),allWrites:[],lastWriteId:-1}}function Cf(t,e,n,r){return x1(t.writeTree,t.treePath,e,n,r)}function D1(t,e){return oM(t.writeTree,t.treePath,e)}function Jv(t,e,n,r){return aM(t.writeTree,t.treePath,e,n,r)}function Uu(t,e){return uM(t.writeTree,ze(t.treePath,e))}function dM(t,e,n,r,i,s){return cM(t.writeTree,t.treePath,e,n,r,i,s)}function Tm(t,e,n){return lM(t.writeTree,t.treePath,e,n)}function L1(t,e){return M1(ze(t.treePath,e),t.writeTree)}function M1(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fM{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;$(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),$(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,zv(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,$4(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,V4(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,zv(r,e.snapshotNode,i.oldSnap));else throw Ds("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const F1=new pM;class Im{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Sm(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Tm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ri(this.viewCache_),s=dM(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function mM(t,e){$(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),$(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function gM(t,e,n,r,i){const s=new fM;let o,l;if(n.type===In.OVERWRITE){const c=n;c.source.fromUser?o=kf(t,e,c.path,c.snap,r,i,s):($(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!Y(c.path),o=ju(t,e,c.path,c.snap,r,i,l,s))}else if(n.type===In.MERGE){const c=n;c.source.fromUser?o=yM(t,e,c.path,c.children,r,i,s):($(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Rf(t,e,c.path,c.children,r,i,l,s))}else if(n.type===In.ACK_USER_WRITE){const c=n;c.revert?o=EM(t,e,c.path,r,i,s):o=vM(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===In.LISTEN_COMPLETE)o=wM(t,e,n.path,r,s);else throw Ds("Unknown operation type: "+n.type);const u=s.getChanges();return _M(e,o,u),{viewCache:o,changes:u}}function _M(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Sf(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(B4(Sf(e)))}}function U1(t,e,n,r,i,s){const o=e.eventCache;if(Uu(r,n)!=null)return e;{let l,u;if(Y(n))if($(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ri(e),d=c instanceof le?c:le.EMPTY_NODE,f=D1(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Cf(r,Ri(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ee(n);if(c===".priority"){$(Fr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();u=e.serverCache.getNode();const f=Jv(r,n,d,u);f!=null?l=t.filter.updatePriority(d,f):l=o.getNode()}else{const d=ve(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const m=Jv(r,n,o.getNode(),u);m!=null?f=o.getNode().getImmediateChild(c).updateChild(d,m):f=o.getNode().getImmediateChild(c)}else f=Tm(r,c,e.serverCache);f!=null?l=t.filter.updateChild(o.getNode(),c,f,d,i,s):l=o.getNode()}}return Fo(e,l,o.isFullyInitialized()||Y(n),t.filter.filtersNodes())}}function ju(t,e,n,r,i,s,o,l){const u=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(Y(n))c=d.updateFullNode(u.getNode(),r,null);else if(d.filtersNodes()&&!u.isFiltered()){const k=u.getNode().updateChild(n,r);c=d.updateFullNode(u.getNode(),k,null)}else{const k=ee(n);if(!u.isCompleteForPath(n)&&Fr(n)>1)return e;const y=ve(n),I=u.getNode().getImmediateChild(k).updateChild(y,r);k===".priority"?c=d.updatePriority(u.getNode(),I):c=d.updateChild(u.getNode(),k,I,y,F1,null)}const f=N1(e,c,u.isFullyInitialized()||Y(n),d.filtersNodes()),m=new Im(i,f,s);return U1(t,f,n,i,m,l)}function kf(t,e,n,r,i,s,o){const l=e.eventCache;let u,c;const d=new Im(i,e,s);if(Y(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=Fo(e,c,!0,t.filter.filtersNodes());else{const f=ee(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=Fo(e,c,l.isFullyInitialized(),l.isFiltered());else{const m=ve(n),k=l.getNode().getImmediateChild(f);let y;if(Y(m))y=r;else{const C=d.getCompleteChild(f);C!=null?p1(m)===".priority"&&C.getChild(g1(m)).isEmpty()?y=C:y=C.updateChild(m,r):y=le.EMPTY_NODE}if(k.equals(y))u=e;else{const C=t.filter.updateChild(l.getNode(),f,y,m,d,o);u=Fo(e,C,l.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function Xv(t,e){return t.eventCache.isCompleteForChild(e)}function yM(t,e,n,r,i,s,o){let l=e;return r.foreach((u,c)=>{const d=ze(n,u);Xv(e,ee(d))&&(l=kf(t,l,d,c,i,s,o))}),r.foreach((u,c)=>{const d=ze(n,u);Xv(e,ee(d))||(l=kf(t,l,d,c,i,s,o))}),l}function Qv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Rf(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;Y(n)?c=r:c=new ye(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((f,m)=>{if(d.hasChild(f)){const k=e.serverCache.getNode().getImmediateChild(f),y=Qv(t,k,m);u=ju(t,u,new Ee(f),y,i,s,o,l)}}),c.children.inorderTraversal((f,m)=>{const k=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!d.hasChild(f)&&!k){const y=e.serverCache.getNode().getImmediateChild(f),C=Qv(t,y,m);u=ju(t,u,new Ee(f),C,i,s,o,l)}}),u}function vM(t,e,n,r,i,s,o){if(Uu(i,n)!=null)return e;const l=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(Y(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return ju(t,e,n,u.getNode().getChild(n),i,s,l,o);if(Y(n)){let c=new ye(null);return u.getNode().forEachChild(fs,(d,f)=>{c=c.set(new Ee(d),f)}),Rf(t,e,n,c,i,s,l,o)}else return e}else{let c=new ye(null);return r.foreach((d,f)=>{const m=ze(n,d);u.isCompleteForPath(m)&&(c=c.set(d,u.getNode().getChild(m)))}),Rf(t,e,n,c,i,s,l,o)}}function wM(t,e,n,r,i){const s=e.serverCache,o=N1(e,s.getNode(),s.isFullyInitialized()||Y(n),s.isFiltered());return U1(t,o,n,r,F1,i)}function EM(t,e,n,r,i,s){let o;if(Uu(r,n)!=null)return e;{const l=new Im(r,e,i),u=e.eventCache.getNode();let c;if(Y(n)||ee(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Cf(r,Ri(e));else{const f=e.serverCache.getNode();$(f instanceof le,"serverChildren would be complete if leaf node"),d=D1(r,f)}d=d,c=t.filter.updateFullNode(u,d,s)}else{const d=ee(n);let f=Tm(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=u.getImmediateChild(d)),f!=null?c=t.filter.updateChild(u,d,f,ve(n),l,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(u,d,le.EMPTY_NODE,ve(n),l,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Cf(r,Ri(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Uu(r,ce())!=null,Fo(e,c,o,t.filter.filtersNodes())}}function SM(t,e){const n=Ri(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Y(e)&&!n.getImmediateChild(ee(e)).isEmpty())?n.getChild(e):null}function Zv(t,e,n,r){e.type===In.MERGE&&e.source.queryId!==null&&($(Ri(t.viewCache_),"We should always have a full cache before handling merges"),$(Sf(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=gM(t.processor_,i,e,n,r);return mM(t.processor_,s.viewCache),$(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,TM(t,s.changes,s.viewCache.eventCache.getNode())}function TM(t,e,n,r){const i=t.eventRegistrations_;return J4(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ew;function IM(t){$(!ew,"__referenceConstructor has already been defined"),ew=t}function Cm(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return $(s!=null,"SyncTree gave us an op for an invalid query."),Zv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Zv(o,e,n,r));return s}}function km(t,e){let n=null;for(const r of t.views.values())n=n||SM(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tw;function CM(t){$(!tw,"__referenceConstructor has already been defined"),tw=t}class nw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ye(null),this.pendingWriteTree_=hM(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function kM(t,e,n,r,i){return eM(t.pendingWriteTree_,e,n,r,i),i?Cc(t,new ki(C1(),e,n)):[]}function ts(t,e,n=!1){const r=tM(t.pendingWriteTree_,e);if(nM(t.pendingWriteTree_,e)){let s=new ye(null);return r.snap!=null?s=s.set(ce(),!0):Qt(r.children,o=>{s=s.set(new Ee(o),!0)}),Cc(t,new Fu(r.path,s,n))}else return[]}function Ic(t,e,n){return Cc(t,new ki(k1(),e,n))}function RM(t,e,n){const r=ye.fromObject(n);return Cc(t,new pa(k1(),e,r))}function AM(t,e,n,r){const i=$1(t,r);if(i!=null){const s=z1(i),o=s.path,l=s.queryId,u=Kt(o,e),c=new ki(R1(l),u,n);return H1(t,o,c)}else return[]}function NM(t,e,n,r){const i=$1(t,r);if(i){const s=z1(i),o=s.path,l=s.queryId,u=Kt(o,e),c=ye.fromObject(n),d=new pa(R1(l),u,c);return H1(t,o,d)}else return[]}function j1(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const u=Kt(o,e),c=km(l,u);if(c)return c});return x1(i,e,s,n,!0)}function Cc(t,e){return B1(e,t.syncPointTree_,null,O1(t.pendingWriteTree_,ce()))}function B1(t,e,n,r){if(Y(t.path))return V1(t,e,n,r);{const i=e.get(ce());n==null&&i!=null&&(n=km(i,ce()));let s=[];const o=ee(t.path),l=t.operationForChild(o),u=e.children.get(o);if(u&&l){const c=n?n.getImmediateChild(o):null,d=L1(r,o);s=s.concat(B1(l,u,c,d))}return i&&(s=s.concat(Cm(i,t,r,n))),s}}function V1(t,e,n,r){const i=e.get(ce());n==null&&i!=null&&(n=km(i,ce()));let s=[];return e.children.inorderTraversal((o,l)=>{const u=n?n.getImmediateChild(o):null,c=L1(r,o),d=t.operationForChild(o);d&&(s=s.concat(V1(d,l,u,c)))}),i&&(s=s.concat(Cm(i,t,r,n))),s}function $1(t,e){return t.tagToQueryMap.get(e)}function z1(t){const e=t.indexOf("$");return $(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ee(t.substr(0,e))}}function H1(t,e,n){const r=t.syncPointTree_.get(e);$(r,"Missing sync point for query tag that we're tracking");const i=O1(t.pendingWriteTree_,e);return Cm(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Rm(n)}node(){return this.node_}}class Am{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ze(this.path_,e);return new Am(this.syncTree_,n)}node(){return j1(this.syncTree_,this.path_)}}const PM=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},rw=function(t,e,n){if(!t||typeof t!="object")return t;if($(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return OM(t[".sv"],e,n);if(typeof t[".sv"]=="object")return bM(t[".sv"],e);$(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},OM=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:$(!1,"Unexpected server value: "+t)}},bM=function(t,e,n){t.hasOwnProperty("increment")||$(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&$(!1,"Unexpected increment value: "+r);const i=e.node();if($(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},xM=function(t,e,n,r){return Nm(e,new Am(n,t),r)},DM=function(t,e,n){return Nm(t,new Rm(e),n)};function Nm(t,e,n){const r=t.getPriority().val(),i=rw(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=rw(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Be(l,it(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Be(i))),o.forEachChild(ot,(l,u)=>{const c=Nm(u,e.getImmediateChild(l),n);c!==u&&(s=s.updateImmediateChild(l,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Om(t,e){let n=e instanceof Ee?e:new Ee(e),r=t,i=ee(n);for(;i!==null;){const s=Ts(r.node.children,i)||{children:{},childCount:0};r=new Pm(i,r,s),n=ve(n),i=ee(n)}return r}function js(t){return t.node.value}function W1(t,e){t.node.value=e,Af(t)}function q1(t){return t.node.childCount>0}function LM(t){return js(t)===void 0&&!q1(t)}function kc(t,e){Qt(t.node.children,(n,r)=>{e(new Pm(n,t,r))})}function G1(t,e,n,r){n&&e(t),kc(t,i=>{G1(i,e,!0)})}function MM(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function La(t){return new Ee(t.parent===null?t.name:La(t.parent)+"/"+t.name)}function Af(t){t.parent!==null&&FM(t.parent,t.name,t)}function FM(t,e,n){const r=LM(n),i=sr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Af(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Af(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UM=/[\[\].#$\/\u0000-\u001F\u007F]/,jM=/[\[\].#$\u0000-\u001F\u007F]/,Qh=10*1024*1024,K1=function(t){return typeof t=="string"&&t.length!==0&&!UM.test(t)},BM=function(t){return typeof t=="string"&&t.length!==0&&!jM.test(t)},VM=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),BM(t)},Y1=function(t,e,n){const r=n instanceof Ee?new w4(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Zr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Zr(r)+" with contents = "+e.toString());if(GT(e))throw new Error(t+"contains "+e.toString()+" "+Zr(r));if(typeof e=="string"&&e.length>Qh/3&&_c(e)>Qh)throw new Error(t+"contains a string greater than "+Qh+" utf8 bytes "+Zr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Qt(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!K1(o)))throw new Error(t+" contains an invalid key ("+o+") "+Zr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);E4(r,o),Y1(t,l,r),S4(r)}),i&&s)throw new Error(t+' contains ".value" child '+Zr(r)+" in addition to actual children.")}},$M=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!K1(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!VM(n))throw new Error(VP(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function HM(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!_1(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function bi(t,e,n){HM(t,n),WM(t,r=>cn(r,e)||cn(e,r))}function WM(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(qM(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function qM(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Lo&&rt("event: "+n.toString()),xa(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GM="repo_interrupt",KM=25;class YM{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zM,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Mu(),this.transactionQueueTree_=new Pm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function JM(t,e,n){if(t.stats_=_m(t.repoInfo_),t.forceRestClient_||WL())t.server_=new Lu(t.repoInfo_,(r,i,s,o)=>{iw(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>sw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ke(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Gn(t.repoInfo_,e,(r,i,s,o)=>{iw(t,r,i,s,o)},r=>{sw(t,r)},r=>{QM(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=JL(t.repoInfo_,()=>new Y4(t.stats_,t.server_)),t.infoData_=new H4,t.infoSyncTree_=new nw({startListening:(r,i,s,o)=>{let l=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(l=Ic(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),bm(t,"connected",!1),t.serverSyncTree_=new nw({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,u)=>{const c=o(l,u);bi(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function XM(t){const n=t.infoData_.getNode(new Ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function J1(t){return PM({timestamp:XM(t)})}function iw(t,e,n,r,i){t.dataUpdateCount++;const s=new Ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=Eu(n,c=>it(c));o=NM(t.serverSyncTree_,s,u,i)}else{const u=it(n);o=AM(t.serverSyncTree_,s,u,i)}else if(r){const u=Eu(n,c=>it(c));o=RM(t.serverSyncTree_,s,u)}else{const u=it(n);o=Ic(t.serverSyncTree_,s,u)}let l=s;o.length>0&&(l=Dm(t,s)),bi(t.eventQueue_,l,o)}function sw(t,e){bm(t,"connected",e),e===!1&&e3(t)}function QM(t,e){Qt(e,(n,r)=>{bm(t,n,r)})}function bm(t,e,n){const r=new Ee("/.info/"+e),i=it(n);t.infoData_.updateSnapshot(r,i);const s=Ic(t.infoSyncTree_,r,i);bi(t.eventQueue_,r,s)}function ZM(t){return t.nextWriteId_++}function e3(t){X1(t,"onDisconnectEvents");const e=J1(t),n=Mu();Ef(t.onDisconnect_,ce(),(i,s)=>{const o=xM(i,s,t.serverSyncTree_,e);I1(n,i,o)});let r=[];Ef(n,ce(),(i,s)=>{r=r.concat(Ic(t.serverSyncTree_,i,s));const o=i3(t,i);Dm(t,o)}),t.onDisconnect_=Mu(),bi(t.eventQueue_,ce(),r)}function t3(t){t.persistentConnection_&&t.persistentConnection_.interrupt(GM)}function X1(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),rt(n,...e)}function Q1(t,e,n){return j1(t.serverSyncTree_,e,n)||le.EMPTY_NODE}function xm(t,e=t.transactionQueueTree_){if(e||Rc(t,e),js(e)){const n=eI(t,e);$(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&n3(t,La(e),n)}else q1(e)&&kc(e,n=>{xm(t,n)})}function n3(t,e,n){const r=n.map(c=>c.currentWriteId),i=Q1(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];$(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=Kt(e,d.path);s=s.updateChild(f,d.currentOutputSnapshotRaw)}const l=s.val(!0),u=e;t.server_.put(u.toString(),l,c=>{X1(t,"transaction put response",{path:u.toString(),status:c});let d=[];if(c==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,d=d.concat(ts(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();Rc(t,Om(t.transactionQueueTree_,e)),xm(t,t.transactionQueueTree_),bi(t.eventQueue_,e,d);for(let m=0;m<f.length;m++)xa(f[m])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Dt("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Dm(t,e)}},o)}function Dm(t,e){const n=Z1(t,e),r=La(n),i=eI(t,n);return r3(t,i,r),r}function r3(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const u=e[l],c=Kt(n,u.path);let d=!1,f;if($(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)d=!0,f=u.abortReason,i=i.concat(ts(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=KM)d=!0,f="maxretry",i=i.concat(ts(t.serverSyncTree_,u.currentWriteId,!0));else{const m=Q1(t,u.path,o);u.currentInputSnapshot=m;const k=e[l].update(m.val());if(k!==void 0){Y1("transaction failed: Data returned ",k,u.path);let y=it(k);typeof k=="object"&&k!=null&&sr(k,".priority")||(y=y.updatePriority(m.getPriority()));const I=u.currentWriteId,w=J1(t),v=DM(y,m,w);u.currentOutputSnapshotRaw=y,u.currentOutputSnapshotResolved=v,u.currentWriteId=ZM(t),o.splice(o.indexOf(I),1),i=i.concat(kM(t.serverSyncTree_,u.path,v,u.currentWriteId,u.applyLocally)),i=i.concat(ts(t.serverSyncTree_,I,!0))}else d=!0,f="nodata",i=i.concat(ts(t.serverSyncTree_,u.currentWriteId,!0))}bi(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(m){setTimeout(m,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(f==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(f),!1,null))))}Rc(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)xa(r[l]);xm(t,t.transactionQueueTree_)}function Z1(t,e){let n,r=t.transactionQueueTree_;for(n=ee(e);n!==null&&js(r)===void 0;)r=Om(r,n),e=ve(e),n=ee(e);return r}function eI(t,e){const n=[];return tI(t,e,n),n.sort((r,i)=>r.order-i.order),n}function tI(t,e,n){const r=js(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);kc(e,i=>{tI(t,i,n)})}function Rc(t,e){const n=js(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,W1(e,n.length>0?n:void 0)}kc(e,r=>{Rc(t,r)})}function i3(t,e){const n=La(Z1(t,e)),r=Om(t.transactionQueueTree_,e);return MM(r,i=>{Zh(t,i)}),Zh(t,r),G1(r,i=>{Zh(t,i)}),n}function Zh(t,e){const n=js(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?($(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):($(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ts(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?W1(e,void 0):n.length=s+1,bi(t.eventQueue_,La(e),i);for(let o=0;o<r.length;o++)xa(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s3(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function o3(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Dt(`Invalid query segment '${n}' in query '${t}'`)}return e}const ow=function(t,e){const n=a3(t),r=n.namespace;n.domain==="firebase.com"&&nr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&nr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||FL();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new s1(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Ee(n.pathString)}},a3=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(d,f)),d<f&&(i=s3(t.substring(d,f)));const m=o3(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const k=e.slice(0,c);if(k.toLowerCase()==="localhost")n="localhost";else if(k.split(".").length<=2)n=k;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Y(this._path)?null:p1(this._path)}get ref(){return new Bs(this._repo,this._path)}get _queryIdentifier(){const e=Wv(this._queryParams),n=mm(e);return n==="{}"?"default":n}get _queryObject(){return Wv(this._queryParams)}isEqual(e){if(e=yt(e),!(e instanceof Lm))return!1;const n=this._repo===e._repo,r=_1(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+v4(this._path)}}class Bs extends Lm{constructor(e,n){super(e,n,new Em,!1)}get parent(){const e=g1(this._path);return e===null?null:new Bs(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}IM(Bs);CM(Bs);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l3="FIREBASE_DATABASE_EMULATOR_HOST",Nf={};let u3=!1;function c3(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=$r(s);t.repoInfo_=new s1(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function h3(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||nr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),rt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ow(s,i),l=o.repoInfo,u;typeof process<"u"&&kv&&(u=kv[l3]),u?(s=`http://${u}?ns=${l.namespace}`,o=ow(s,i),l=o.repoInfo):o.repoInfo.secure;const c=new GL(t.name,t.options,e);$M("Invalid Firebase Database URL",o),Y(o.path)||nr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=f3(l,t,c,new qL(t,n));return new p3(d,t)}function d3(t,e){const n=Nf[e];(!n||n[t.key]!==t)&&nr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),t3(t),delete n[t.key]}function f3(t,e,n,r){let i=Nf[e.name];i||(i={},Nf[e.name]=i);let s=i[t.toURLString()];return s&&nr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new YM(t,u3,n,r),i[t.toURLString()]=s,s}class p3{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(JM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Bs(this._repo,ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(d3(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&nr("Cannot call "+e+" on a deleted database.")}}function m3(t=Ms(),e){const n=Pn(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Mp("database");r&&g3(n,...r)}return n}function g3(t,e,n,r={}){t=yt(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Qn(r,s.repoInfo_.emulatorOptions))return;nr("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&nr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Hl(Hl.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:Up(r.mockUserToken,t.app.options.projectId);o=new Hl(l)}$r(e)&&(mc(e),gc("Database",!0)),c3(s,i,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _3(t){OL(Hr),Pt(new mt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return h3(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),We(Rv,Av,t),We(Rv,Av,"esm2017")}Gn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Gn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};_3();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI="firebasestorage.googleapis.com",y3="storageBucket",v3=2*60*1e3,w3=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Zt{constructor(e,n,r=0){super(ed(e),`Firebase Storage: ${n} (${ed(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,On.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ed(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Nn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Nn||(Nn={}));function ed(t){return"storage/"+t}function E3(){const t="An unknown error occurred, please check the error payload for server response.";return new On(Nn.UNKNOWN,t)}function S3(){return new On(Nn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function T3(){return new On(Nn.CANCELED,"User canceled the upload/download.")}function I3(t){return new On(Nn.INVALID_URL,"Invalid URL '"+t+"'.")}function C3(t){return new On(Nn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function aw(t){return new On(Nn.INVALID_ARGUMENT,t)}function rI(){return new On(Nn.APP_DELETED,"The Firebase app was deleted.")}function k3(t){return new On(Nn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=hn.makeFromUrl(e,n)}catch{return new hn(e,"")}if(r.path==="")return r;throw C3(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(P){P.path_=decodeURIComponent(P.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",k=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),y={bucket:1,path:3},C=n===nI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",w=new RegExp(`^https?://${C}/${i}/${I}`,"i"),E=[{regex:l,indices:u,postModify:s},{regex:k,indices:y,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let P=0;P<E.length;P++){const M=E[P],F=M.regex.exec(e);if(F){const S=F[M.indices.bucket];let _=F[M.indices.path];_||(_=""),r=new hn(S,_),M.postModify(r);break}}if(r==null)throw I3(e);return r}}class R3{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A3(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...I){c||(c=!0,e.apply(null,I))}function f(I){i=setTimeout(()=>{i=null,t(k,u())},I)}function m(){s&&clearTimeout(s)}function k(I,...w){if(c){m();return}if(I){m(),d.call(null,I,...w);return}if(u()||o){m(),d.call(null,I,...w);return}r<64&&(r*=2);let E;l===1?(l=2,E=0):E=(r+Math.random())*1e3,f(E)}let y=!1;function C(I){y||(y=!0,m(),!c&&(i!==null?(I||(l=2),clearTimeout(i),f(0)):I||(l=1)))}return f(0),s=setTimeout(()=>{o=!0,C(!0)},n),C}function N3(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P3(t){return t!==void 0}function lw(t,e,n,r){if(r<e)throw aw(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw aw(`Invalid value for '${t}'. Expected ${n} or less.`)}function O3(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Bu;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Bu||(Bu={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b3(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x3{constructor(e,n,r,i,s,o,l,u,c,d,f,m=!0,k=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.isUsingEmulator=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,C)=>{this.resolve_=y,this.reject_=C,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Sl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Bu.NO_ERROR,u=s.getStatus();if(!l||b3(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Bu.ABORT;r(!1,new Sl(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Sl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());P3(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=E3();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?rI():T3();o(u)}else{const u=S3();o(u)}};this.canceled_?n(!1,new Sl(!1,null,!0)):this.backoffId_=A3(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&N3(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Sl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function D3(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function L3(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function M3(t,e){e&&(t["X-Firebase-GMPID"]=e)}function F3(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function U3(t,e,n,r,i,s,o=!0,l=!1){const u=O3(t.urlParams),c=t.url+u,d=Object.assign({},t.headers);return M3(d,e),D3(d,n),L3(d,s),F3(d,r),new x3(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j3(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function B3(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n){this._service=e,n instanceof hn?this._location=n:this._location=hn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Vu(e,n)}get root(){const e=new hn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return B3(this._location.path)}get storage(){return this._service}get parent(){const e=j3(this._location.path);if(e===null)return null;const n=new hn(this._location.bucket,e);return new Vu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw k3(e)}}function uw(t,e){const n=e==null?void 0:e[y3];return n==null?null:hn.makeFromBucketSpec(n,t)}function V3(t,e,n,r={}){t.host=`${e}:${n}`;const i=$r(e);i&&(mc(`https://${t.host}/b`),gc("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Up(s,t.app.options.projectId))}class $3{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=nI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=v3,this._maxUploadRetryTime=w3,this._requests=new Set,i!=null?this._bucket=hn.makeFromBucketSpec(i,this._host):this._bucket=uw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=hn.makeFromBucketSpec(this._url,e):this._bucket=uw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){lw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){lw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Vu(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new R3(rI());{const o=U3(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const cw="@firebase/storage",hw="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI="storage";function z3(t=Ms(),e){t=yt(t);const r=Pn(t,iI).getImmediate({identifier:e}),i=Mp("storage");return i&&H3(r,...i),r}function H3(t,e,n,r={}){V3(t,e,n,r)}function W3(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new $3(n,r,i,e,Hr)}function q3(){Pt(new mt(iI,W3,"PUBLIC").setMultipleInstances(!0)),We(cw,hw,""),We(cw,hw,"esm2017")}q3();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u="analytics",G3="firebase_id",K3="origin",Y3=60*1e3,J3="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Mm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new Ca("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X3={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Lt=new zr("analytics","Analytics",X3);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q3(t){if(!t.startsWith(Mm)){const e=Lt.create("invalid-gtag-resource",{gtagURL:t});return Nt.warn(e.message),""}return t}function sI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Z3(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function e6(t,e){const n=Z3("firebase-js-sdk-policy",{createScriptURL:Q3}),r=document.createElement("script"),i=`${Mm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function t6(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function n6(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await sI(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){Nt.error(l)}t("config",i,s)}async function r6(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await sI(n);for(const u of o){const c=l.find(f=>f.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Nt.error(s)}}function i6(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await r6(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await n6(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Nt.error(l)}}return i}function s6(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=i6(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function o6(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Mm)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a6=30,l6=1e3;class u6{constructor(e={},n=l6){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const oI=new u6;function c6(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function h6(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:c6(r)},s=J3.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Lt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function d6(t,e=oI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Lt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Lt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new m6;return setTimeout(async()=>{l.abort()},Y3),aI({appId:r,apiKey:i,measurementId:s},o,l,e)}async function aI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=oI){var s;const{appId:o,measurementId:l}=t;try{await f6(r,e)}catch(u){if(l)return Nt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await h6(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!p6(c)){if(i.deleteThrottleMetadata(o),l)return Nt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Ey(n,i.intervalMillis,a6):Ey(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,f),Nt.debug(`Calling attemptFetch again in ${d} millis`),aI(t,f,r,i)}}function f6(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Lt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function p6(t){if(!(t instanceof Zt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class m6{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function g6(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _6(){if(Bp())try{await Vp()}catch(t){return Nt.warn(Lt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Nt.warn(Lt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function y6(t,e,n,r,i,s,o){var l;const u=d6(t);u.then(k=>{n[k.measurementId]=k.appId,t.options.measurementId&&k.measurementId!==t.options.measurementId&&Nt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${k.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(k=>Nt.error(k)),e.push(u);const c=_6().then(k=>{if(k)return r.getId()}),[d,f]=await Promise.all([u,c]);o6(s)||e6(s,d.measurementId),i("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[K3]="firebase",m.update=!0,f!=null&&(m[G3]=f),i("config",d.measurementId,m),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v6{constructor(e){this.app=e}_delete(){return delete jo[this.app.options.appId],Promise.resolve()}}let jo={},dw=[];const fw={};let td="dataLayer",w6="gtag",pw,lI,mw=!1;function E6(){const t=[];if(ES()&&t.push("This is a browser extension environment."),TS()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Lt.create("invalid-analytics-context",{errorInfo:e});Nt.warn(n.message)}}function S6(t,e,n){E6();const r=t.options.appId;if(!r)throw Lt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Nt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Lt.create("no-api-key");if(jo[r]!=null)throw Lt.create("already-exists",{id:r});if(!mw){t6(td);const{wrappedGtag:s,gtagCore:o}=s6(jo,dw,fw,td,w6);lI=s,pw=o,mw=!0}return jo[r]=y6(t,dw,fw,e,pw,td,n),new v6(t)}function T6(t=Ms()){t=yt(t);const e=Pn(t,$u);return e.isInitialized()?e.getImmediate():I6(t)}function I6(t,e={}){const n=Pn(t,$u);if(n.isInitialized()){const i=n.getImmediate();if(Qn(e,n.getOptions()))return i;throw Lt.create("already-initialized")}return n.initialize({options:e})}function C6(t,e,n,r){t=yt(t),g6(lI,jo[t.app.options.appId],e,n,r).catch(i=>Nt.error(i))}const gw="@firebase/analytics",_w="0.10.17";function k6(){Pt(new mt($u,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return S6(r,i,n)},"PUBLIC")),Pt(new mt("analytics-internal",t,"PRIVATE")),We(gw,_w),We(gw,_w,"esm2017");function t(e){try{const n=e.getProvider($u).getImmediate();return{logEvent:(r,i,s)=>C6(n,r,i,s)}}catch(n){throw Lt.create("interop-component-reg-failed",{reason:n})}}}k6();let Kr=null,yw=null,R6=null,A6=null,N6=null,P6=null;const Pf=()=>({apiKey:"AIzaSyBm2eJ0hi9IhP-XGRE9yEq6mqRm0NB-ZFQ",authDomain:"multimedia-hall-app.firebaseapp.com",projectId:"multimedia-hall-app",storageBucket:"multimedia-hall-app.firebasestorage.app",messagingSenderId:"163303256407",appId:"1:163303256407:web:331a6b5496b3fe14eb8e12"}),O6=()=>{const t=Pf();return!!(t.apiKey&&t.projectId&&t.messagingSenderId&&t.appId)},b6=async()=>{if(!O6())return console.warn("Firebase: Configuration missing"),!1;try{return Su().length>0?Kr=Su()[0]:Kr=zp(Pf()),yw=XD(Kr),await jx(yw,RT),R6=m3(Kr),A6=kL(Kr),N6=z3(Kr),typeof window<"u"&&"measurementId"in Pf()&&(P6=T6(Kr)),console.log("Firebase: Initialized successfully"),!0}catch(t){return console.error("Firebase initialization failed:",t.message),!1}};wR({immediate:!0});b6().then(t=>{t?console.log("Firebase initialized successfully"):console.warn("Firebase initialization failed - app will continue with reduced features")});const uI=document.getElementById("root");if(!uI)throw new Error("Root element not found");nd.createRoot(uI).render(B.jsx(de.StrictMode,{children:B.jsx(ex,{})}));export{VE as L,x6 as N,Se as Q,de as R,Zp as a,_R as b,tF as c,cF as d,hF as e,eF as f,oF as g,fF as h,rF as i,B as j,Pi as k,D6 as l,sF as m,iF as n,mF as o,lF as p,dF as q,L as r,nF as s,pF as t,Ap as u,uF as v,aF as w,gF as x};
