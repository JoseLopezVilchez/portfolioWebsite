import{S as A,A as Q,B as W,C as P,D as X,E as y,F as E,U as v,g as b,G as C,H as k,y as ee,I as re,J as ne,w as K,x as te,K as ie,M as se,N as ae,O as fe,P as Y,Q as q,R as M,T as U,V as ue,W as le,X as ce,Y as z,Z as oe,u as j,_ as G,$ as T,a0 as J,a1 as de,a2 as _e,a3 as H,a4 as ve,a5 as pe,a6 as he,a7 as be,i as Z,a8 as we,a9 as Pe,aa as ye}from"./BXWvIqco.js";function x(e,r=null,u){if(typeof e!="object"||e===null||A in e)return e;const a=ee(e);if(a!==Q&&a!==W)return e;var t=new Map,o=re(e),p=P(0);o&&t.set("length",P(e.length));var w;return new Proxy(e,{defineProperty(l,n,i){(!("value"in i)||i.configurable===!1||i.enumerable===!1||i.writable===!1)&&X();var f=t.get(n);return f===void 0?(f=P(i.value),t.set(n,f)):y(f,x(i.value,w)),!0},deleteProperty(l,n){var i=t.get(n);if(i===void 0)n in l&&t.set(n,P(v));else{if(o&&typeof n=="string"){var f=t.get("length"),s=Number(n);Number.isInteger(s)&&s<f.v&&y(f,s)}y(i,v),$(p)}return!0},get(l,n,i){var _;if(n===A)return e;var f=t.get(n),s=n in l;if(f===void 0&&(!s||(_=E(l,n))!=null&&_.writable)&&(f=P(x(s?l[n]:v,w)),t.set(n,f)),f!==void 0){var c=b(f);return c===v?void 0:c}return Reflect.get(l,n,i)},getOwnPropertyDescriptor(l,n){var i=Reflect.getOwnPropertyDescriptor(l,n);if(i&&"value"in i){var f=t.get(n);f&&(i.value=b(f))}else if(i===void 0){var s=t.get(n),c=s==null?void 0:s.v;if(s!==void 0&&c!==v)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return i},has(l,n){var c;if(n===A)return!0;var i=t.get(n),f=i!==void 0&&i.v!==v||Reflect.has(l,n);if(i!==void 0||C!==null&&(!f||(c=E(l,n))!=null&&c.writable)){i===void 0&&(i=P(f?x(l[n],w):v),t.set(n,i));var s=b(i);if(s===v)return!1}return f},set(l,n,i,f){var m;var s=t.get(n),c=n in l;if(o&&n==="length")for(var _=i;_<s.v;_+=1){var g=t.get(_+"");g!==void 0?y(g,v):_ in l&&(g=P(v),t.set(_+"",g))}s===void 0?(!c||(m=E(l,n))!=null&&m.writable)&&(s=P(void 0),y(s,x(i,w)),t.set(n,s)):(c=s.v!==v,y(s,x(i,w)));var h=Reflect.getOwnPropertyDescriptor(l,n);if(h!=null&&h.set&&h.set.call(f,i),!c){if(o&&typeof n=="string"){var I=t.get("length"),O=Number(n);Number.isInteger(O)&&O>=I.v&&y(I,O+1)}$(p)}return!0},ownKeys(l){b(p);var n=Reflect.ownKeys(l).filter(s=>{var c=t.get(s);return c===void 0||c.v!==v});for(var[i,f]of t)f.v!==v&&!(i in l)&&n.push(i);return n},setPrototypeOf(){k()}})}function $(e,r=1){y(e,e.v+r)}function Oe(e,r,u=!1){K&&te();var a=e,t=null,o=null,p=v,w=u?ie:0,l=!1;const n=(f,s=!0)=>{l=!0,i(s,f)},i=(f,s)=>{if(p===(p=f))return;let c=!1;if(K){const _=a.data===se;!!p===_&&(a=ae(),fe(a),Y(!1),c=!0)}p?(t?q(t):s&&(t=M(()=>s(a))),o&&U(o,()=>{o=null})):(o?q(o):s&&(o=M(()=>s(a))),t&&U(t,()=>{t=null})),c&&Y(!0)};ne(()=>{l=!1,r(n),l||i(null,null)},w),K&&(a=ue)}let D=!1;function ge(e){var r=D;try{return D=!1,[e(),D]}finally{D=r}}const me={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Se(e,r,u){return new Proxy({props:e,exclude:r},me)}const Re={get(e,r){if(!e.exclude.includes(r))return b(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,u){return r in e.special||(e.special[r]=Ee({get[r](){return e.props[r]}},r,z)),e.special[r](u),G(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),G(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Te(e,r){return new Proxy({props:e,exclude:r,special:{},version:P(0)},Re)}const xe={get(e,r){let u=e.props.length;for(;u--;){let a=e.props[u];if(T(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a)return a[r]}},set(e,r,u){let a=e.props.length;for(;a--;){let t=e.props[a];T(t)&&(t=t());const o=E(t,r);if(o&&o.set)return o.set(u),!0}return!1},getOwnPropertyDescriptor(e,r){let u=e.props.length;for(;u--;){let a=e.props[u];if(T(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a){const t=E(a,r);return t&&!t.configurable&&(t.configurable=!0),t}}},has(e,r){if(r===A||r===J)return!1;for(let u of e.props)if(T(u)&&(u=u()),u!=null&&r in u)return!0;return!1},ownKeys(e){const r=[];for(let u of e.props){T(u)&&(u=u());for(const a in u)r.includes(a)||r.push(a)}return r}};function Ae(...e){return new Proxy({props:e},xe)}function V(e){for(var r=C,u=C;r!==null&&!(r.f&(de|_e));)r=r.parent;try{return H(r),e()}finally{H(u)}}function Ee(e,r,u,a){var B;var t=(u&ve)!==0,o=!pe||(u&he)!==0,p=(u&be)!==0,w=(u&Pe)!==0,l=!1,n;p?[n,l]=ge(()=>e[r]):n=e[r];var i=A in e||J in e,f=((B=E(e,r))==null?void 0:B.set)??(i&&p&&r in e?d=>e[r]=d:void 0),s=a,c=!0,_=!1,g=()=>(_=!0,c&&(c=!1,w?s=j(a):s=a),s);n===void 0&&a!==void 0&&(f&&o&&le(),n=g(),f&&f(n));var h;if(o)h=()=>{var d=e[r];return d===void 0?g():(c=!0,_=!1,d)};else{var I=V(()=>(t?Z:we)(()=>e[r]));I.f|=ce,h=()=>{var d=b(I);return d!==void 0&&(s=void 0),d===void 0?s:d}}if(!(u&z))return h;if(f){var O=e.$$legacy;return function(d,R){return arguments.length>0?((!o||!R||O||l)&&f(R?h():d),d):h()}}var m=!1,F=!1,N=ye(n),S=V(()=>Z(()=>{var d=h(),R=b(N);return m?(m=!1,F=!0,R):(F=!1,N.v=d)}));return t||(S.equals=oe),function(d,R){if(arguments.length>0){const L=R?b(S):o&&p?x(d):d;return S.equals(L)||(m=!0,y(N,L),_&&s!==void 0&&(s=L),j(()=>b(S))),d}return b(S)}}export{x as a,Oe as i,Te as l,Ee as p,Se as r,Ae as s};