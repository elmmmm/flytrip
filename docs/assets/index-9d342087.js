import{D as B,aT as re,c as L,t as E,n as j,h as O,d as q,z as G,af as ve,b as h,j as $,aq as fe,ar as de,aU as he,o as J,H as ge,as as me,J as we,ao as ye,G as be,a as z,ag as K,K as F,az as I,p as Te,aV as _,w as Q,aj as pe}from"./index-69ba64b0.js";import{a as Se,u as Z}from"./index-45798041.js";function Ie(){const e=B([]),g=[];return re(()=>{e.value=[]}),[e,o=>(g[o]||(g[o]=r=>{e.value[o]=r}),g[o])]}const[ee,M]=L("swipe"),xe={loop:E,width:j,height:j,vertical:Boolean,autoplay:O(0),duration:O(500),touchable:E,lazyRender:Boolean,initialSwipe:O(0),indicatorColor:String,showIndicators:E,stopPropagation:E},te=Symbol(ee);var Pe=q({name:ee,props:xe,emits:["change","dragStart","dragEnd"],setup(e,{emit:g,slots:m}){const o=B(),r=B(),a=G({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let T=!1;const v=Se(),{children:w,linkChildren:c}=ve(te),i=h(()=>w.length),l=h(()=>a[e.vertical?"height":"width"]),f=h(()=>e.vertical?v.deltaY.value:v.deltaX.value),b=h(()=>a.rect?(e.vertical?a.rect.height:a.rect.width)-l.value*i.value:0),R=h(()=>l.value?Math.ceil(Math.abs(b.value)/l.value):i.value),k=h(()=>i.value*l.value),p=h(()=>(a.active+i.value)%i.value),Y=h(()=>{const t=e.vertical?"vertical":"horizontal";return v.direction.value===t}),ae=h(()=>{const t={transitionDuration:`${a.swiping?0:e.duration}ms`,transform:`translate${e.vertical?"Y":"X"}(${a.offset}px)`};if(l.value){const s=e.vertical?"height":"width",n=e.vertical?"width":"height";t[s]=`${k.value}px`,t[n]=e[n]?`${e[n]}px`:""}return t}),ie=t=>{const{active:s}=a;return t?e.loop?_(s+t,-1,i.value):_(s+t,0,R.value):s},H=(t,s=0)=>{let n=t*l.value;e.loop||(n=Math.min(n,-b.value));let d=s-n;return e.loop||(d=_(d,b.value,0)),d},y=({pace:t=0,offset:s=0,emitChange:n})=>{if(i.value<=1)return;const{active:d}=a,u=ie(t),C=H(u,s);if(e.loop){if(w[0]&&C!==b.value){const D=C<b.value;w[0].setOffset(D?k.value:0)}if(w[i.value-1]&&C!==0){const D=C>0;w[i.value-1].setOffset(D?-k.value:0)}}a.active=u,a.offset=C,n&&u!==d&&g("change",p.value)},A=()=>{a.swiping=!0,a.active<=-1?y({pace:i.value}):a.active>=i.value&&y({pace:-i.value})},ne=()=>{A(),v.reset(),I(()=>{a.swiping=!1,y({pace:-1,emitChange:!0})})},X=()=>{A(),v.reset(),I(()=>{a.swiping=!1,y({pace:1,emitChange:!0})})};let N;const x=()=>clearTimeout(N),P=()=>{x(),+e.autoplay>0&&i.value>1&&(N=setTimeout(()=>{X(),P()},+e.autoplay))},S=(t=+e.initialSwipe)=>{if(!o.value)return;const s=()=>{var n,d;if(!K(o)){const u={width:o.value.offsetWidth,height:o.value.offsetHeight};a.rect=u,a.width=+((n=e.width)!=null?n:u.width),a.height=+((d=e.height)!=null?d:u.height)}i.value&&(t=Math.min(i.value-1,t),t===-1&&(t=i.value-1)),a.active=t,a.swiping=!0,a.offset=H(t),w.forEach(u=>{u.setOffset(0)}),P()};K(o)?F().then(s):s()},U=()=>S(a.active);let V;const se=t=>{!e.touchable||t.touches.length>1||(v.start(t),T=!1,V=Date.now(),x(),A())},oe=t=>{e.touchable&&a.swiping&&(v.move(t),Y.value&&(!e.loop&&(a.active===0&&f.value>0||a.active===i.value-1&&f.value<0)||(Te(t,e.stopPropagation),y({offset:f.value}),T||(g("dragStart",{index:p.value}),T=!0))))},W=()=>{if(!e.touchable||!a.swiping)return;const t=Date.now()-V,s=f.value/t;if((Math.abs(s)>.25||Math.abs(f.value)>l.value/2)&&Y.value){const d=e.vertical?v.offsetY.value:v.offsetX.value;let u=0;e.loop?u=d>0?f.value>0?-1:1:0:u=-Math[f.value>0?"ceil":"floor"](f.value/l.value),y({pace:u,emitChange:!0})}else f.value&&y({pace:0});T=!1,a.swiping=!1,g("dragEnd",{index:p.value}),P()},le=(t,s={})=>{A(),v.reset(),I(()=>{let n;e.loop&&t===i.value?n=a.active===0?0:t:n=t%i.value,s.immediate?I(()=>{a.swiping=!1}):a.swiping=!1,y({pace:n-a.active,emitChange:!0})})},ce=(t,s)=>{const n=s===p.value,d=n?{backgroundColor:e.indicatorColor}:void 0;return z("i",{style:d,class:M("indicator",{active:n})},null)},ue=()=>{if(m.indicator)return m.indicator({active:p.value,total:i.value});if(e.showIndicators&&i.value>1)return z("div",{class:M("indicators",{vertical:e.vertical})},[Array(i.value).fill("").map(ce)])};return Z({prev:ne,next:X,state:a,resize:U,swipeTo:le}),c({size:l,props:e,count:i,activeIndicator:p}),$(()=>e.initialSwipe,t=>S(+t)),$(i,()=>S(a.active)),$(()=>e.autoplay,P),$([fe,de,()=>e.width,()=>e.height],U),$(he(),t=>{t==="visible"?P():x()}),J(S),ge(()=>S(a.active)),me(()=>S(a.active)),we(x),ye(x),be("touchmove",oe,{target:r}),()=>{var t;return z("div",{ref:o,class:M()},[z("div",{ref:r,style:ae.value,class:M("track",{vertical:e.vertical}),onTouchstartPassive:se,onTouchend:W,onTouchcancel:W},[(t=m.default)==null?void 0:t.call(m)]),ue()])}}});const Me=Q(Pe),[Ce,$e]=L("swipe-item");var ze=q({name:Ce,setup(e,{slots:g}){let m;const o=G({offset:0,inited:!1,mounted:!1}),{parent:r,index:a}=pe(te);if(!r)return;const T=h(()=>{const c={},{vertical:i}=r.props;return r.size.value&&(c[i?"height":"width"]=`${r.size.value}px`),o.offset&&(c.transform=`translate${i?"Y":"X"}(${o.offset}px)`),c}),v=h(()=>{const{loop:c,lazyRender:i}=r.props;if(!i||m)return!0;if(!o.mounted)return!1;const l=r.activeIndicator.value,f=r.count.value-1,b=l===0&&c?f:l-1,R=l===f&&c?0:l+1;return m=a.value===l||a.value===b||a.value===R,m}),w=c=>{o.offset=c};return J(()=>{F(()=>{o.mounted=!0})}),Z({setOffset:w}),()=>{var c;return z("div",{class:$e(),style:T.value},[v.value?(c=g.default)==null?void 0:c.call(g):null])}}});const Re=Q(ze);export{Re as S,Me as a,Ie as u};
