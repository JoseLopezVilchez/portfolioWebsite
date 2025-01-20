import{q as ie,w as q,x as le,L as ae,y as ce,z as de}from"./index-client.B_RD2HsF.js";import{i as ue,c as pe,d as fe,n as be,b as ge}from"./disclose-version.CapIu7Sp.js";function he(e,r){if(r){const t=document.body;e.autofocus=!0,ie(()=>{document.activeElement===t&&e.focus()})}}function Qe(e,r,t,o,i){var n;q&&le();var s=(n=r.$$slots)==null?void 0:n[t],l=!1;s===!0&&(s=r.children,l=!0),s===void 0||s(e,l?()=>o:o)}function me(e,r){r?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function ye(e,r,t,o){var i=e.__attributes??(e.__attributes={});q&&(i[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName==="LINK")||i[r]!==(i[r]=t)&&(r==="style"&&"__styles"in e&&(e.__styles={}),r==="loading"&&(e[ae]=t),t==null?e.removeAttribute(r):typeof t!="string"&&ee(e).includes(r)?e[r]=t:e.setAttribute(r,t))}function De(e,r,t,o,i=!1,s=!1,l=!1){var n=r||{},g=e.tagName==="OPTION";for(var h in r)h in t||(t[h]=null);var m=ee(e),C=e.__attributes??(e.__attributes={});for(const c in t){let u=t[c];if(g&&c==="value"&&u==null){e.value=e.__value="",n[c]=u;continue}var x=n[c];if(u!==x){n[c]=u;var _=c[0]+c[1];if(_!=="$$"){if(_==="on"){const y={},v="$$"+c;let k=c.slice(2);var w=ge(k);if(ue(k)&&(k=k.slice(0,-7),y.capture=!0),!w&&x){if(u!=null)continue;e.removeEventListener(k,n[v],y),n[v]=null}if(u!=null)if(w)e[`__${k}`]=u,fe([k]);else{let E=function(T){n[c].call(this,T)};n[v]=pe(k,e,E,y)}else w&&(e[`__${k}`]=void 0)}else if(c==="style"&&u!=null)e.style.cssText=u+"";else if(c==="autofocus")he(e,!!u);else if(c==="__value"||c==="value"&&u!=null)e.value=e[c]=e.__value=u;else if(c==="selected"&&g)me(e,u);else{var d=c;i||(d=be(d));var f=d==="defaultValue"||d==="defaultChecked";if(u==null&&!s&&!f)if(C[c]=null,d==="value"||d==="checked"){let y=e;if(d==="value"){let v=y.defaultValue;y.removeAttribute(d),y.defaultValue=v}else{let v=y.defaultChecked;y.removeAttribute(d),y.defaultChecked=v}}else e.removeAttribute(c);else f||m.includes(d)&&(s||typeof u!="string")?e[d]=u:typeof u!="function"&&(q&&(d==="src"||d==="href"||d==="srcset")||ye(e,d,u))}c==="style"&&"__styles"in e&&(e.__styles={})}}}return n}var H=new Map;function ee(e){var r=H.get(e.nodeName);if(r)return r;H.set(e.nodeName,r=[]);for(var t,o=e,i=Element.prototype;i!==o;){t=de(o);for(var s in t)t[s].set&&r.push(s);o=ce(o)}return r}const F="-",ve=e=>{const r=we(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:l=>{const n=l.split(F);return n[0]===""&&n.length!==1&&n.shift(),re(n,r)||xe(l)},getConflictingClassGroupIds:(l,n)=>{const g=t[l]||[];return n&&o[l]?[...g,...o[l]]:g}}},re=(e,r)=>{var l;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),i=o?re(e.slice(1),o):void 0;if(i)return i;if(r.validators.length===0)return;const s=e.join(F);return(l=r.validators.find(({validator:n})=>n(s)))==null?void 0:l.classGroupId},Q=/^\[(.+)\]$/,xe=e=>{if(Q.test(e)){const r=Q.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},we=e=>{const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return Ce(Object.entries(e.classGroups),t).forEach(([s,l])=>{U(l,o,s,r)}),o},U=(e,r,t,o)=>{e.forEach(i=>{if(typeof i=="string"){const s=i===""?r:D(r,i);s.classGroupId=t;return}if(typeof i=="function"){if(ke(i)){U(i(o),r,t,o);return}r.validators.push({validator:i,classGroupId:t});return}Object.entries(i).forEach(([s,l])=>{U(l,D(r,s),t,o)})})},D=(e,r)=>{let t=e;return r.split(F).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t},ke=e=>e.isThemeGetter,Ce=(e,r)=>r?e.map(([t,o])=>{const i=o.map(s=>typeof s=="string"?r+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([l,n])=>[r+l,n])):s);return[t,i]}):e,_e=e=>{if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;const i=(s,l)=>{t.set(s,l),r++,r>e&&(r=0,o=t,t=new Map)};return{get(s){let l=t.get(s);if(l!==void 0)return l;if((l=o.get(s))!==void 0)return i(s,l),l},set(s,l){t.has(s)?t.set(s,l):i(s,l)}}},te="!",ze=e=>{const{separator:r,experimentalParseClassName:t}=e,o=r.length===1,i=r[0],s=r.length,l=n=>{const g=[];let h=0,m=0,C;for(let f=0;f<n.length;f++){let c=n[f];if(h===0){if(c===i&&(o||n.slice(f,f+s)===r)){g.push(n.slice(m,f)),m=f+s;continue}if(c==="/"){C=f;continue}}c==="["?h++:c==="]"&&h--}const x=g.length===0?n:n.substring(m),_=x.startsWith(te),w=_?x.substring(1):x,d=C&&C>m?C-m:void 0;return{modifiers:g,hasImportantModifier:_,baseClassName:w,maybePostfixModifierPosition:d}};return t?n=>t({className:n,parseClassName:l}):l},Ae=e=>{if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r},Se=e=>({cache:_e(e.cacheSize),parseClassName:ze(e),...ve(e)}),Me=/\s+/,Ge=(e,r)=>{const{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:i}=r,s=[],l=e.trim().split(Me);let n="";for(let g=l.length-1;g>=0;g-=1){const h=l[g],{modifiers:m,hasImportantModifier:C,baseClassName:x,maybePostfixModifierPosition:_}=t(h);let w=!!_,d=o(w?x.substring(0,_):x);if(!d){if(!w){n=h+(n.length>0?" "+n:n);continue}if(d=o(x),!d){n=h+(n.length>0?" "+n:n);continue}w=!1}const f=Ae(m).join(":"),c=C?f+te:f,u=c+d;if(s.includes(u))continue;s.push(u);const y=i(d,w);for(let v=0;v<y.length;++v){const k=y[v];s.push(c+k)}n=h+(n.length>0?" "+n:n)}return n};function Re(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=oe(r))&&(o&&(o+=" "),o+=t);return o}const oe=e=>{if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=oe(e[o]))&&(t&&(t+=" "),t+=r);return t};function Ie(e,...r){let t,o,i,s=l;function l(g){const h=r.reduce((m,C)=>C(m),e());return t=Se(h),o=t.cache.get,i=t.cache.set,s=n,n(g)}function n(g){const h=o(g);if(h)return h;const m=Ge(g,t);return i(g,m),m}return function(){return s(Re.apply(null,arguments))}}const p=e=>{const r=t=>t[e]||[];return r.isThemeGetter=!0,r},se=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ne=/^\d+\/\d+$/,Pe=new Set(["px","full","screen"]),Ee=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Te=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Le=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,je=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,$e=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,A=e=>G(e)||Pe.has(e)||Ne.test(e),S=e=>R(e,"length",Je),G=e=>!!e&&!Number.isNaN(Number(e)),B=e=>R(e,"number",G),N=e=>!!e&&Number.isInteger(Number(e)),Oe=e=>e.endsWith("%")&&G(e.slice(0,-1)),a=e=>se.test(e),M=e=>Ee.test(e),Ve=new Set(["length","size","percentage"]),We=e=>R(e,Ve,ne),Be=e=>R(e,"position",ne),Ue=new Set(["image","url"]),qe=e=>R(e,Ue,Xe),Fe=e=>R(e,"",Ke),P=()=>!0,R=(e,r,t)=>{const o=se.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1},Je=e=>Te.test(e)&&!Le.test(e),ne=()=>!1,Ke=e=>je.test(e),Xe=e=>$e.test(e),Ye=()=>{const e=p("colors"),r=p("spacing"),t=p("blur"),o=p("brightness"),i=p("borderColor"),s=p("borderRadius"),l=p("borderSpacing"),n=p("borderWidth"),g=p("contrast"),h=p("grayscale"),m=p("hueRotate"),C=p("invert"),x=p("gap"),_=p("gradientColorStops"),w=p("gradientColorStopPositions"),d=p("inset"),f=p("margin"),c=p("opacity"),u=p("padding"),y=p("saturate"),v=p("scale"),k=p("sepia"),E=p("skew"),T=p("space"),J=p("translate"),$=()=>["auto","contain","none"],O=()=>["auto","hidden","clip","visible","scroll"],V=()=>["auto",a,r],b=()=>[a,r],K=()=>["",A,S],L=()=>["auto",G,a],X=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],j=()=>["solid","dashed","dotted","double","none"],Y=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],W=()=>["start","end","center","between","around","evenly","stretch"],I=()=>["","0",a],Z=()=>["auto","avoid","all","avoid-page","page","left","right","column"],z=()=>[G,a];return{cacheSize:500,separator:":",theme:{colors:[P],spacing:[A,S],blur:["none","",M,a],brightness:z(),borderColor:[e],borderRadius:["none","","full",M,a],borderSpacing:b(),borderWidth:K(),contrast:z(),grayscale:I(),hueRotate:z(),invert:I(),gap:b(),gradientColorStops:[e],gradientColorStopPositions:[Oe,S],inset:V(),margin:V(),opacity:z(),padding:b(),saturate:z(),scale:z(),sepia:I(),skew:z(),space:b(),translate:b()},classGroups:{aspect:[{aspect:["auto","square","video",a]}],container:["container"],columns:[{columns:[M]}],"break-after":[{"break-after":Z()}],"break-before":[{"break-before":Z()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...X(),a]}],overflow:[{overflow:O()}],"overflow-x":[{"overflow-x":O()}],"overflow-y":[{"overflow-y":O()}],overscroll:[{overscroll:$()}],"overscroll-x":[{"overscroll-x":$()}],"overscroll-y":[{"overscroll-y":$()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[d]}],"inset-x":[{"inset-x":[d]}],"inset-y":[{"inset-y":[d]}],start:[{start:[d]}],end:[{end:[d]}],top:[{top:[d]}],right:[{right:[d]}],bottom:[{bottom:[d]}],left:[{left:[d]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",N,a]}],basis:[{basis:V()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",a]}],grow:[{grow:I()}],shrink:[{shrink:I()}],order:[{order:["first","last","none",N,a]}],"grid-cols":[{"grid-cols":[P]}],"col-start-end":[{col:["auto",{span:["full",N,a]},a]}],"col-start":[{"col-start":L()}],"col-end":[{"col-end":L()}],"grid-rows":[{"grid-rows":[P]}],"row-start-end":[{row:["auto",{span:[N,a]},a]}],"row-start":[{"row-start":L()}],"row-end":[{"row-end":L()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",a]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",a]}],gap:[{gap:[x]}],"gap-x":[{"gap-x":[x]}],"gap-y":[{"gap-y":[x]}],"justify-content":[{justify:["normal",...W()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...W(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...W(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[u]}],px:[{px:[u]}],py:[{py:[u]}],ps:[{ps:[u]}],pe:[{pe:[u]}],pt:[{pt:[u]}],pr:[{pr:[u]}],pb:[{pb:[u]}],pl:[{pl:[u]}],m:[{m:[f]}],mx:[{mx:[f]}],my:[{my:[f]}],ms:[{ms:[f]}],me:[{me:[f]}],mt:[{mt:[f]}],mr:[{mr:[f]}],mb:[{mb:[f]}],ml:[{ml:[f]}],"space-x":[{"space-x":[T]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[T]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",a,r]}],"min-w":[{"min-w":[a,r,"min","max","fit"]}],"max-w":[{"max-w":[a,r,"none","full","min","max","fit","prose",{screen:[M]},M]}],h:[{h:[a,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[a,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[a,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[a,r,"auto","min","max","fit"]}],"font-size":[{text:["base",M,S]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",B]}],"font-family":[{font:[P]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",a]}],"line-clamp":[{"line-clamp":["none",G,B]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",A,a]}],"list-image":[{"list-image":["none",a]}],"list-style-type":[{list:["none","disc","decimal",a]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[c]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[c]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...j(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",A,S]}],"underline-offset":[{"underline-offset":["auto",A,a]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:b()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",a]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",a]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[c]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...X(),Be]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",We]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},qe]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[_]}],"gradient-via":[{via:[_]}],"gradient-to":[{to:[_]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[n]}],"border-w-x":[{"border-x":[n]}],"border-w-y":[{"border-y":[n]}],"border-w-s":[{"border-s":[n]}],"border-w-e":[{"border-e":[n]}],"border-w-t":[{"border-t":[n]}],"border-w-r":[{"border-r":[n]}],"border-w-b":[{"border-b":[n]}],"border-w-l":[{"border-l":[n]}],"border-opacity":[{"border-opacity":[c]}],"border-style":[{border:[...j(),"hidden"]}],"divide-x":[{"divide-x":[n]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[n]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[c]}],"divide-style":[{divide:j()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...j()]}],"outline-offset":[{"outline-offset":[A,a]}],"outline-w":[{outline:[A,S]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:K()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[c]}],"ring-offset-w":[{"ring-offset":[A,S]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",M,Fe]}],"shadow-color":[{shadow:[P]}],opacity:[{opacity:[c]}],"mix-blend":[{"mix-blend":[...Y(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Y()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[g]}],"drop-shadow":[{"drop-shadow":["","none",M,a]}],grayscale:[{grayscale:[h]}],"hue-rotate":[{"hue-rotate":[m]}],invert:[{invert:[C]}],saturate:[{saturate:[y]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[g]}],"backdrop-grayscale":[{"backdrop-grayscale":[h]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[m]}],"backdrop-invert":[{"backdrop-invert":[C]}],"backdrop-opacity":[{"backdrop-opacity":[c]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",a]}],duration:[{duration:z()}],ease:[{ease:["linear","in","out","in-out",a]}],delay:[{delay:z()}],animate:[{animate:["none","spin","ping","pulse","bounce",a]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[v]}],"scale-x":[{"scale-x":[v]}],"scale-y":[{"scale-y":[v]}],rotate:[{rotate:[N,a]}],"translate-x":[{"translate-x":[J]}],"translate-y":[{"translate-y":[J]}],"skew-x":[{"skew-x":[E]}],"skew-y":[{"skew-y":[E]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",a]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",a]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":b()}],"scroll-mx":[{"scroll-mx":b()}],"scroll-my":[{"scroll-my":b()}],"scroll-ms":[{"scroll-ms":b()}],"scroll-me":[{"scroll-me":b()}],"scroll-mt":[{"scroll-mt":b()}],"scroll-mr":[{"scroll-mr":b()}],"scroll-mb":[{"scroll-mb":b()}],"scroll-ml":[{"scroll-ml":b()}],"scroll-p":[{"scroll-p":b()}],"scroll-px":[{"scroll-px":b()}],"scroll-py":[{"scroll-py":b()}],"scroll-ps":[{"scroll-ps":b()}],"scroll-pe":[{"scroll-pe":b()}],"scroll-pt":[{"scroll-pt":b()}],"scroll-pr":[{"scroll-pr":b()}],"scroll-pb":[{"scroll-pb":b()}],"scroll-pl":[{"scroll-pl":b()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",a]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[A,S,B]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},er=Ie(Ye);export{De as a,ye as b,Re as c,Qe as s,er as t};
