import{c as j,a as s,d as q,b as D,e as X,g as ot,n as Y,m as E,f as he,w as de,r as at,u as st,B as it,I as Me,p as ct,h as se,t as F,i as Ce,j as J,o as Ke,k as lt,l as ge,q as ie,s as Ue,v as Fe,x as rt,y as ut,z as dt,A as je,C as mt,D as N,E as ft,F as ht,G as vt,H as Xe,J as gt,T as yt,K as _t,L as bt,M as Qe,N as fe,O as wt,P as kt,Q as pe,R as St,S as Te,U as Dt,V as xe,_ as ee,W as x,X as M,Y as ye,Z as _e,$ as d,a0 as Ee,a1 as re,a2 as be,a3 as ue,a4 as xt,a5 as At,a6 as Oe,a7 as ce,a8 as Ct,a9 as O,aa as pt,ab as Pe,ac as Ne}from"./index-69ba64b0.js";import{u as Tt,S as It,a as Rt}from"./index-9d342087.js";import{P as Je,f as Ve,g as We,S as Bt}from"./search-bar-e815de6d.js";/* empty css              */import{u as Mt}from"./city-7cc509fb.js";import{u as ze,h as Ze}from"./index-45798041.js";import{R as Ot,u as Pt}from"./useScroll-2abd9175.js";const[zt,le]=j("loading"),Zt=Array(12).fill(null).map((e,t)=>s("i",{class:le("line",String(t+1))},null)),$t=s("svg",{class:le("circular"),viewBox:"25 25 50 50"},[s("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),Ht={size:Y,type:E("circular"),color:String,vertical:Boolean,textSize:Y,textColor:String};var Ft=q({name:zt,props:Ht,setup(e,{slots:t}){const n=D(()=>X({color:e.color},ot(e.size))),r=()=>{const i=e.type==="spinner"?Zt:$t;return s("span",{class:le("spinner",e.type),style:n.value},[t.icon?t.icon():i])},l=()=>{var i;if(t.default)return s("span",{class:le("text"),style:{fontSize:he(e.textSize),color:(i=e.textColor)!=null?i:e.color}},[t.default()])};return()=>{const{type:i,vertical:f}=e;return s("div",{class:le([i,{vertical:f}]),"aria-live":"polite","aria-busy":!0},[r(),l()])}}});const qe=de(Ft),[Et,te]=j("button"),Nt=X({},at,{tag:E("button"),text:String,icon:String,type:E("default"),size:E("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:E("button"),loadingSize:Y,loadingText:String,loadingType:String,iconPosition:E("left")});var Vt=q({name:Et,props:Nt,emits:["click"],setup(e,{emit:t,slots:n}){const r=st(),l=()=>n.loading?n.loading():s(qe,{size:e.loadingSize,type:e.loadingType,class:te("loading")},null),i=()=>{if(e.loading)return l();if(n.icon)return s("div",{class:te("icon")},[n.icon()]);if(e.icon)return s(Me,{name:e.icon,class:te("icon"),classPrefix:e.iconPrefix},null)},f=()=>{let u;if(e.loading?u=e.loadingText:u=n.default?n.default():e.text,u)return s("span",{class:te("text")},[u])},m=()=>{const{color:u,plain:b}=e;if(u){const g={color:b?u:"white"};return b||(g.background=u),u.includes("gradient")?g.border=0:g.borderColor=u,g}},a=u=>{e.loading?ct(u):e.disabled||(t("click",u),r())};return()=>{const{tag:u,type:b,size:g,block:v,round:w,plain:k,square:V,loading:G,disabled:C,hairline:$,nativeType:Q,iconPosition:P}=e,K=[te([b,g,{plain:k,block:v,round:w,square:V,loading:G,disabled:C,hairline:$}]),{[it]:$}];return s(u,{type:Q,class:K,style:m(),disabled:C,onClick:a},{default:()=>[s("div",{class:te("content")},[P==="left"&&i(),f(),P==="right"&&i()])]})}}});const Wt=de(Vt);j("picker-toolbar");const Lt={title:String,cancelButtonText:String,confirmButtonText:String},et=X({loading:Boolean,readonly:Boolean,allowHtml:Boolean,optionHeight:se(44),showToolbar:F,swipeDuration:se(1e3),visibleOptionNum:se(6)},Lt);X({},et,{columns:Ce(),modelValue:Ce(),toolbarPosition:E("top"),columnsFieldNames:Object});let ae=0;function Yt(e){e?(ae||document.body.classList.add("van-toast--unclickable"),ae++):ae&&(ae--,ae||document.body.classList.remove("van-toast--unclickable"))}const[Gt,ne]=j("toast"),Kt=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],Ut={icon:String,show:Boolean,type:E("text"),overlay:Boolean,message:Y,iconSize:Y,duration:Ue(2e3),position:E("middle"),teleport:[String,Object],wordBreak:String,className:Fe,iconPrefix:String,transition:E("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:Fe,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var tt=q({name:Gt,props:Ut,emits:["update:show"],setup(e,{emit:t,slots:n}){let r,l=!1;const i=()=>{const g=e.show&&e.forbidClick;l!==g&&(l=g,Yt(l))},f=g=>t("update:show",g),m=()=>{e.closeOnClick&&f(!1)},a=()=>clearTimeout(r),u=()=>{const{icon:g,type:v,iconSize:w,iconPrefix:k,loadingType:V}=e;if(g||v==="success"||v==="fail")return s(Me,{name:g||v,size:w,class:ne("icon"),classPrefix:k},null);if(v==="loading")return s(qe,{class:ne("loading"),size:w,type:V},null)},b=()=>{const{type:g,message:v}=e;if(n.message)return s("div",{class:ne("text")},[n.message()]);if(rt(v)&&v!=="")return g==="html"?s("div",{key:0,class:ne("text"),innerHTML:String(v)},null):s("div",{class:ne("text")},[v])};return J(()=>[e.show,e.forbidClick],i),J(()=>[e.show,e.type,e.message,e.duration],()=>{a(),e.show&&e.duration>0&&(r=setTimeout(()=>{f(!1)},e.duration))}),Ke(i),lt(i),()=>s(Je,ge({class:[ne([e.position,e.wordBreak==="normal"?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:m,onClosed:a,"onUpdate:show":f},ie(e,Kt)),{default:()=>[u(),b()]})}});function jt(){const e=dt({show:!1}),t=l=>{e.show=l},n=l=>{X(e,l,{transitionAppear:!0}),t(!0)},r=()=>t(!1);return ze({open:n,close:r,toggle:t}),{open:n,close:r,state:e,toggle:t}}function Xt(e){const t=ut(e),n=document.createElement("div");return document.body.appendChild(n),{instance:t.mount(n),unmount(){t.unmount(),document.body.removeChild(n)}}}const Qt={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let me=[],Jt=!1,Le=X({},Qt);const qt=new Map;function en(e){return mt(e)?e:{message:e}}function tn(){const{instance:e,unmount:t}=Xt({setup(){const n=N(""),{open:r,state:l,close:i,toggle:f}=jt(),m=()=>{},a=()=>s(tt,ge(l,{onClosed:m,"onUpdate:show":f}),null);return J(n,u=>{l.message=u}),ft().render=a,{open:r,close:i,message:n}}});return e}function nn(){if(!me.length||Jt){const e=tn();me.push(e)}return me[me.length-1]}function Ye(e={}){if(!je)return{};const t=nn(),n=en(e);return t.open(X({},Le,qt.get(n.type||Le.type),n)),t}de(tt);function on(e,t){let n=null,r=0;return function(...l){if(n)return;const i=Date.now()-r,f=()=>{r=Date.now(),n=!1,e.apply(this,l)};i>=t?f():n=setTimeout(f,t)}}const[an,Ae]=j("back-top"),sn={right:Y,bottom:Y,zIndex:Y,target:[String,Object],offset:se(200),immediate:Boolean,teleport:{type:[String,Object],default:"body"}};var cn=q({name:an,inheritAttrs:!1,props:sn,emits:["click"],setup(e,{emit:t,slots:n,attrs:r}){let l=!1;const i=N(!1),f=N(),m=N(),a=D(()=>X(ht(e.zIndex),{right:he(e.right),bottom:he(e.bottom)})),u=w=>{var k;t("click",w),(k=m.value)==null||k.scrollTo({top:0,behavior:e.immediate?"auto":"smooth"})},b=()=>{i.value=m.value?Qe(m.value)>=+e.offset:!1},g=()=>{const{target:w}=e;if(typeof w=="string"){const k=document.querySelector(w);if(k)return k}else return w},v=()=>{je&&_t(()=>{m.value=e.target?g():bt(f.value),b()})};return vt("scroll",on(b,100),{target:m}),Ke(v),Xe(()=>{l&&(i.value=!0,l=!1)}),gt(()=>{i.value&&e.teleport&&(i.value=!1,l=!0)}),J(()=>e.target,v),()=>{const w=s("div",ge({ref:e.teleport?void 0:f,class:Ae({active:i.value}),style:a.value,onClick:u},r),[n.default?n.default():s(Me,{name:"back-top",class:Ae("icon")},null)]);return e.teleport?[s("div",{ref:f,class:Ae("placeholder")},null),s(yt,{to:e.teleport},{default:()=>[w]})]:w}}});const ln=de(cn),[rn,A,U]=j("calendar"),un=e=>U("monthTitle",e.getFullYear(),e.getMonth()+1);function Ie(e,t){const n=e.getFullYear(),r=t.getFullYear();if(n===r){const l=e.getMonth(),i=t.getMonth();return l===i?0:l>i?1:-1}return n>r?1:-1}function Z(e,t){const n=Ie(e,t);if(n===0){const r=e.getDate(),l=t.getDate();return r===l?0:r>l?1:-1}return n}const ve=e=>new Date(e),Ge=e=>Array.isArray(e)?e.map(ve):ve(e);function $e(e,t){const n=ve(e);return n.setDate(n.getDate()+t),n}const Re=e=>$e(e,-1),nt=e=>$e(e,1),Be=()=>{const e=new Date;return e.setHours(0,0,0,0),e};function dn(e){const t=e[0].getTime();return(e[1].getTime()-t)/(1e3*60*60*24)+1}X({},et,{modelValue:Ce(),filter:Function,formatter:{type:Function,default:(e,t)=>t}});const mn=(e,t)=>32-new Date(e,t-1,32).getDate(),[fn]=j("calendar-day");var hn=q({name:fn,props:{item:fe(Object),color:String,index:Number,offset:Ue(0),rowHeight:String},emits:["click"],setup(e,{emit:t,slots:n}){const r=D(()=>{var a;const{item:u,index:b,color:g,offset:v,rowHeight:w}=e,k={height:w};if(u.type==="placeholder")return k.width="100%",k;if(b===0&&(k.marginLeft=`${100*v/7}%`),g)switch(u.type){case"end":case"start":case"start-end":case"multiple-middle":case"multiple-selected":k.background=g;break;case"middle":k.color=g;break}return v+(((a=u.date)==null?void 0:a.getDate())||1)>28&&(k.marginBottom=0),k}),l=()=>{e.item.type!=="disabled"&&t("click",e.item)},i=()=>{const{topInfo:a}=e.item;if(a||n["top-info"])return s("div",{class:A("top-info")},[n["top-info"]?n["top-info"](e.item):a])},f=()=>{const{bottomInfo:a}=e.item;if(a||n["bottom-info"])return s("div",{class:A("bottom-info")},[n["bottom-info"]?n["bottom-info"](e.item):a])},m=()=>{const{item:a,color:u,rowHeight:b}=e,{type:g,text:v}=a,w=[i(),v,f()];return g==="selected"?s("div",{class:A("selected-day"),style:{width:b,height:b,background:u}},[w]):w};return()=>{const{type:a,className:u}=e.item;return a==="placeholder"?s("div",{class:A("day"),style:r.value},null):s("div",{role:"gridcell",style:r.value,class:[A("day",a),u],tabindex:a==="disabled"?void 0:-1,onClick:l},[m()])}}});const[vn]=j("calendar-month"),gn={date:fe(Date),type:String,color:String,minDate:fe(Date),maxDate:fe(Date),showMark:Boolean,rowHeight:Y,formatter:Function,lazyRender:Boolean,currentDate:[Date,Array],allowSameDay:Boolean,showSubtitle:Boolean,showMonthTitle:Boolean,firstDayOfWeek:Number};var yn=q({name:vn,props:gn,emits:["click"],setup(e,{emit:t,slots:n}){const[r,l]=wt(),i=N(),f=N(),m=kt(f),a=D(()=>un(e.date)),u=D(()=>he(e.rowHeight)),b=D(()=>{const h=e.date.getDay();return e.firstDayOfWeek?(h+7-e.firstDayOfWeek)%7:h}),g=D(()=>mn(e.date.getFullYear(),e.date.getMonth()+1)),v=D(()=>r.value||!e.lazyRender),w=()=>a.value,k=h=>{const p=I=>e.currentDate.some(S=>Z(S,I)===0);if(p(h)){const I=Re(h),S=nt(h),R=p(I),o=p(S);return R&&o?"multiple-middle":R?"end":o?"start":"multiple-selected"}return""},V=h=>{const[p,I]=e.currentDate;if(!p)return"";const S=Z(h,p);if(!I)return S===0?"start":"";const R=Z(h,I);return e.allowSameDay&&S===0&&R===0?"start-end":S===0?"start":R===0?"end":S>0&&R<0?"middle":""},G=h=>{const{type:p,minDate:I,maxDate:S,currentDate:R}=e;if(Z(h,I)<0||Z(h,S)>0)return"disabled";if(R===null)return"";if(Array.isArray(R)){if(p==="multiple")return k(h);if(p==="range")return V(h)}else if(p==="single")return Z(h,R)===0?"selected":"";return""},C=h=>{if(e.type==="range"){if(h==="start"||h==="end")return U(h);if(h==="start-end")return`${U("start")}/${U("end")}`}},$=()=>{if(e.showMonthTitle)return s("div",{class:A("month-title")},[n["month-title"]?n["month-title"]({date:e.date,text:a.value}):a.value])},Q=()=>{if(e.showMark&&v.value)return s("div",{class:A("month-mark")},[e.date.getMonth()+1])},P=D(()=>{const h=Math.ceil((g.value+b.value)/7);return Array(h).fill({type:"placeholder"})}),K=D(()=>{const h=[],p=e.date.getFullYear(),I=e.date.getMonth();for(let S=1;S<=g.value;S++){const R=new Date(p,I,S),o=G(R);let c={date:R,type:o,text:S,bottomInfo:C(o)};e.formatter&&(c=e.formatter(c)),h.push(c)}return h}),H=D(()=>K.value.filter(h=>h.type==="disabled")),ke=(h,p)=>{if(i.value){const I=pe(i.value),S=P.value.length,o=(Math.ceil((p.getDate()+b.value)/7)-1)*I.height/S;St(h,I.top+o+h.scrollTop-pe(h).top)}},Se=(h,p)=>s(hn,{item:h,index:p,color:e.color,offset:b.value,rowHeight:u.value,onClick:I=>t("click",I)},ie(n,["top-info","bottom-info"])),De=()=>s("div",{ref:i,role:"grid",class:A("days")},[Q(),(v.value?K:P).value.map(Se)]);return ze({getTitle:w,getHeight:()=>m.value,setVisible:l,scrollToDate:ke,disabledDays:H}),()=>s("div",{class:A("month"),ref:f},[$(),De()])}});const[_n]=j("calendar-header");var bn=q({name:_n,props:{date:Date,title:String,subtitle:String,showTitle:Boolean,showSubtitle:Boolean,firstDayOfWeek:Number},emits:["clickSubtitle"],setup(e,{slots:t,emit:n}){const r=()=>{if(e.showTitle){const m=e.title||U("title"),a=t.title?t.title():m;return s("div",{class:A("header-title")},[a])}},l=m=>n("clickSubtitle",m),i=()=>{if(e.showSubtitle){const m=t.subtitle?t.subtitle({date:e.date,text:e.subtitle}):e.subtitle;return s("div",{class:A("header-subtitle"),onClick:l},[m])}},f=()=>{const{firstDayOfWeek:m}=e,a=U("weekdays"),u=[...a.slice(m,7),...a.slice(0,m)];return s("div",{class:A("weekdays")},[u.map(b=>s("span",{class:A("weekday")},[b]))])};return()=>s("div",{class:A("header")},[r(),i(),f()])}});const wn={show:Boolean,type:E("single"),title:String,color:String,round:F,readonly:Boolean,poppable:F,maxRange:se(null),position:E("bottom"),teleport:[String,Object],showMark:F,showTitle:F,formatter:Function,rowHeight:Y,confirmText:String,rangePrompt:String,lazyRender:F,showConfirm:F,defaultDate:[Date,Array],allowSameDay:Boolean,showSubtitle:F,closeOnPopstate:F,showRangePrompt:F,confirmDisabledText:String,closeOnClickOverlay:F,safeAreaInsetTop:Boolean,safeAreaInsetBottom:F,minDate:{type:Date,validator:Te,default:Be},maxDate:{type:Date,validator:Te,default:()=>{const e=Be();return new Date(e.getFullYear(),e.getMonth()+6,e.getDate())}},firstDayOfWeek:{type:Y,default:0,validator:e=>e>=0&&e<=6}};var kn=q({name:rn,props:wn,emits:["select","confirm","unselect","monthShow","overRange","update:show","clickSubtitle"],setup(e,{emit:t,slots:n}){const r=(o,c=e.minDate,y=e.maxDate)=>Z(o,c)===-1?c:Z(o,y)===1?y:o,l=(o=e.defaultDate)=>{const{type:c,minDate:y,maxDate:_,allowSameDay:z}=e;if(o===null)return o;const B=Be();if(c==="range"){Array.isArray(o)||(o=[]);const W=r(o[0]||B,y,z?_:Re(_)),T=r(o[1]||B,z?y:nt(y));return[W,T]}return c==="multiple"?Array.isArray(o)?o.map(W=>r(W)):[r(B)]:((!o||Array.isArray(o))&&(o=B),r(o))};let i;const f=N(),m=N({text:"",date:void 0}),a=N(l()),[u,b]=Tt(),g=D(()=>e.firstDayOfWeek?+e.firstDayOfWeek%7:0),v=D(()=>{const o=[],c=new Date(e.minDate);c.setDate(1);do o.push(new Date(c)),c.setMonth(c.getMonth()+1);while(Ie(c,e.maxDate)!==1);return o}),w=D(()=>{if(a.value){if(e.type==="range")return!a.value[0]||!a.value[1];if(e.type==="multiple")return!a.value.length}return!a.value}),k=()=>a.value,V=()=>{const o=Qe(f.value),c=o+i,y=v.value.map((T,L)=>u.value[L].getHeight()),_=y.reduce((T,L)=>T+L,0);if(c>_&&o>0)return;let z=0,B;const W=[-1,-1];for(let T=0;T<v.value.length;T++){const L=u.value[T];z<=c&&z+y[T]>=o&&(W[1]=T,B||(B=L,W[0]=T),u.value[T].showed||(u.value[T].showed=!0,t("monthShow",{date:L.date,title:L.getTitle()}))),z+=y[T]}v.value.forEach((T,L)=>{const He=L>=W[0]-1&&L<=W[1]+1;u.value[L].setVisible(He)}),B&&(m.value={text:B.getTitle(),date:B.date})},G=o=>{xe(()=>{v.value.some((c,y)=>Ie(c,o)===0?(f.value&&u.value[y].scrollToDate(f.value,o),!0):!1),V()})},C=()=>{if(!(e.poppable&&!e.show))if(a.value){const o=e.type==="single"?a.value:a.value[0];Te(o)&&G(o)}else xe(V)},$=()=>{e.poppable&&!e.show||(xe(()=>{i=Math.floor(pe(f).height)}),C())},Q=(o=l())=>{a.value=o,C()},P=o=>{const{maxRange:c,rangePrompt:y,showRangePrompt:_}=e;return c&&dn(o)>+c?(_&&Ye(y||U("rangePrompt",c)),t("overRange"),!1):!0},K=()=>{var o;return t("confirm",(o=a.value)!=null?o:Ge(a.value))},H=(o,c)=>{const y=_=>{a.value=_,t("select",Ge(_))};if(c&&e.type==="range"&&!P(o)){y([o[0],$e(o[0],+e.maxRange-1)]);return}y(o),c&&!e.showConfirm&&K()},ke=(o,c,y)=>{var _;return(_=o.find(z=>Z(c,z.date)===-1&&Z(z.date,y)===-1))==null?void 0:_.date},Se=D(()=>u.value.reduce((o,c)=>{var y,_;return o.push(...(_=(y=c.disabledDays)==null?void 0:y.value)!=null?_:[]),o},[])),De=o=>{if(e.readonly||!o.date)return;const{date:c}=o,{type:y}=e;if(y==="range"){if(!a.value){H([c]);return}const[_,z]=a.value;if(_&&!z){const B=Z(c,_);if(B===1){const W=ke(Se.value,_,c);if(W){const T=Re(W);Z(_,T)===-1?H([_,T]):H([c])}else H([_,c],!0)}else B===-1?H([c]):e.allowSameDay&&H([c,c],!0)}else H([c])}else if(y==="multiple"){if(!a.value){H([c]);return}const _=a.value,z=_.findIndex(B=>Z(B,c)===0);if(z!==-1){const[B]=_.splice(z,1);t("unselect",ve(B))}else e.maxRange&&_.length>=+e.maxRange?Ye(e.rangePrompt||U("rangePrompt",e.maxRange)):H([..._,c])}else H(c,!0)},h=o=>t("update:show",o),p=(o,c)=>{const y=c!==0||!e.showSubtitle;return s(yn,ge({ref:b(c),date:o,currentDate:a.value,showMonthTitle:y,firstDayOfWeek:g.value},ie(e,["type","color","minDate","maxDate","showMark","formatter","rowHeight","lazyRender","showSubtitle","allowSameDay"]),{onClick:De}),ie(n,["top-info","bottom-info","month-title"]))},I=()=>{if(n.footer)return n.footer();if(e.showConfirm){const o=n["confirm-text"],c=w.value,y=c?e.confirmDisabledText:e.confirmText;return s(Wt,{round:!0,block:!0,type:"primary",color:e.color,class:A("confirm"),disabled:c,nativeType:"button",onClick:K},{default:()=>[o?o({disabled:c}):y||U("confirm")]})}},S=()=>s("div",{class:[A("footer"),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[I()]),R=()=>s("div",{class:A()},[s(bn,{date:m.value.date,title:e.title,subtitle:m.value.text,showTitle:e.showTitle,showSubtitle:e.showSubtitle,firstDayOfWeek:g.value,onClickSubtitle:o=>t("clickSubtitle",o)},ie(n,["title","subtitle"])),s("div",{ref:f,class:A("body"),onScroll:V},[v.value.map(p)]),S()]);return J(()=>e.show,$),J(()=>[e.type,e.minDate,e.maxDate],()=>Q(l(a.value))),J(()=>e.defaultDate,(o=null)=>{a.value=o,C()}),ze({reset:Q,scrollToDate:G,getSelectedDate:k}),Dt($),()=>e.poppable?s(Je,{show:e.show,class:A("popup"),round:e.round,position:e.position,closeable:e.showTitle||e.showSubtitle,teleport:e.teleport,closeOnPopstate:e.closeOnPopstate,safeAreaInsetTop:e.safeAreaInsetTop,closeOnClickOverlay:e.closeOnClickOverlay,"onUpdate:show":h},{default:R}):R()}});const Sn=de(kn);const Dn={},xn=e=>(ye("data-v-a0028e2e"),e=e(),_e(),e),An={class:"nav-bar"},Cn=xn(()=>d("div",{class:"title"},"风植旅途",-1)),pn=[Cn];function Tn(e,t){return x(),M("div",An,pn)}const In=ee(Dn,[["render",Tn],["__scopeId","data-v-a0028e2e"]]);const Rn={class:"banner"},Bn=["src"],Mn={__name:"home-swipe",setup(e){const t=["home/banner.webp","home/banner2.webp"];return(n,r)=>{const l=It,i=Rt;return x(),M("div",Rn,[s(i,{class:"banner-swipe",autoplay:3e3,"indicator-color":"white"},{default:Ee(()=>[(x(),M(re,null,be(t,f=>s(l,{key:f},{default:Ee(()=>[d("img",{src:ue(xt)(f)},null,8,Bn)]),_:2},1024)),64))]),_:1})])}}},On=ee(Mn,[["__scopeId","data-v-43f962be"]]);const Pn="data:image/png;base64,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";function zn(){return Ze.get({url:"/home/hotSuggests"})}function Zn(){return Ze.get({url:"/home/categories"})}function $n(e){return Ze.get({url:"/home/houselist",params:{page:e}})}const we=At("home",{state:()=>({hotSuggests:[],categories:[],currentPage:1,houselist:[]}),actions:{async fetchHotSuggestData(){const e=await zn();this.hotSuggests=e.data},async fetchCategoriesData(){const e=await Zn();this.categories=e.data},async fetchHouselistData(){const e=await $n(this.currentPage);this.houselist.push(...e.data),this.currentPage++}}});const oe=e=>(ye("data-v-10ba3f3a"),e=e(),_e(),e),Hn={class:"search-box"},Fn={class:"location"},En=oe(()=>d("span",{class:"text"},"我的位置",-1)),Nn=oe(()=>d("img",{src:Pn,alt:""},null,-1)),Vn=[En,Nn],Wn={class:"start"},Ln={class:"date"},Yn=oe(()=>d("span",{class:"tip"},"入住",-1)),Gn={class:"time"},Kn={class:"stay"},Un={class:"end"},jn={class:"date"},Xn=oe(()=>d("span",{class:"tip"},"离店",-1)),Qn={class:"time"},Jn=oe(()=>d("div",{class:"section price-counter bottom-gray-line"},[d("div",{class:"start"},"价格不限"),d("div",{class:"end"},"人数不限")],-1)),qn=oe(()=>d("div",{class:"section keyword bottom-gray-line"},"关键字/位置/民宿名",-1)),eo={class:"section hot-suggests"},to={__name:"home-search-box",setup(e){const t=Oe(),n=()=>{t.push("/city")},r=()=>{navigator.geolocation.getCurrentPosition(C=>{console.log("获取位置成功",C)},C=>{console.log("获取位置失败",C)},{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},l=Mt(),{currentCity:i}=ce(l),f=Ct(),{startDate:m,endDate:a}=ce(f),u=D(()=>Ve(m.value)),b=D(()=>Ve(a.value)),g=N(We(m.value,a.value)),v=N(!1),w=C=>{f.startDate=C[0],f.endDate=C[1],g.value=We(C[0],C[1]),v.value=!v.value},k=we(),{hotSuggests:V}=ce(k),G=()=>{t.push({path:"./search",query:{startDate:m.value,endDate:a.value,currentCity:i.value.cityName}})};return(C,$)=>{const Q=Sn;return x(),M("div",Hn,[d("div",Fn,[d("div",{class:"city",onClick:n},O(ue(i).cityName),1),d("div",{class:"position",onClick:r},Vn)]),d("div",{class:"section date-range bottom-grey-line",onClick:$[0]||($[0]=P=>v.value=!0)},[d("div",Wn,[d("div",Ln,[Yn,d("span",Gn,O(u.value),1)]),d("div",Kn,"共"+O(g.value)+"晚",1)]),d("div",Un,[d("div",jn,[Xn,d("span",Qn,O(b.value),1)])])]),s(Q,{show:v.value,"onUpdate:show":$[1]||($[1]=P=>v.value=P),type:"range",color:"#ff9854",round:!1,"show-confirm":!0,onConfirm:w},null,8,["show"]),Jn,qn,d("div",eo,[(x(!0),M(re,null,be(ue(V),(P,K)=>(x(),M("div",{key:K,class:"item",style:pt({color:P.tagText.color,background:P.tagText.background.color})},O(P.tagText.text),5))),128))]),d("div",{class:"section search-btn"},[d("div",{class:"btn",onClick:G},"开始搜索")])])}}},no=ee(to,[["__scopeId","data-v-10ba3f3a"]]);const oo={class:"categories"},ao=["src"],so={class:"text"},io={__name:"home-categories",setup(e){const t=we(),{categories:n}=ce(t);return(r,l)=>(x(),M("div",oo,[(x(!0),M(re,null,be(ue(n),(i,f)=>(x(),M("div",{key:i.id,class:"item"},[d("img",{src:i.pictureUrl,alt:""},null,8,ao),d("div",so,O(i.title),1)]))),128))]))}},co=ee(io,[["__scopeId","data-v-58052cd1"]]);const lo={class:"house-item"},ro={class:"item-inner"},uo={class:"cover"},mo=["src"],fo={class:"info"},ho={class:"summary"},vo={class:"name"},go={class:"price"},yo={class:"new"},_o={__name:"house-item-v9",props:{itemData:{type:Object,default:()=>({})}},setup(e){const t=e,n=D(()=>Number(t.itemData.commentScore));return(r,l)=>{const i=Ot;return x(),M("div",lo,[d("div",ro,[d("div",uo,[d("img",{src:e.itemData.image.url,alt:""},null,8,mo)]),d("div",fo,[d("div",ho,O(e.itemData.summaryText),1),d("div",vo,O(e.itemData.houseName),1),d("div",go,[s(i,{"model-value":n.value,color:"#fff",size:15,readonly:"","allow-half":""},null,8,["model-value"]),d("div",yo,"￥"+O(e.itemData.finalPrice),1)])])])])}}},bo=ee(_o,[["__scopeId","data-v-f1e72e0b"]]),wo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAAeFBMVEUAAABnZ2dnZ2dmZmZoaGhqampra2tmZmZnZ2dnZ2dnZ2dnZ2dnZ2dnZ2d2dnZmZmZmZmZnZ2dnZ2dmZmZnZ2doaGh2dnZnZ2dmZmb////ExMT09PTz8/OwsLCqqqqpqamjo6OQkJCJiYmAgIB1dXVzc3Pb29u6urrw6XOgAAAAGHRSTlMA+W+aJyEX5NnLuKyGTwZ68u3fvmZdDXR4g75jAAAA5klEQVQ4y5WT2RKCMAxF29oWFAF3U9wV9P//0EFCWFJwOG83cx5uJ6mYho136S62YoBEzaFirhKfEG+gYRNzYQldln1hBn1mXUEBR7UFLYEjdcuIwEfUCIaGxf1zLygZ3uJxds6dH7zJAif5yZWccswLMkKcXF3FFXNIxgonGRoZ5hUZ9VsvaFwwSzICnLzQeGEOWFO4/YQbsKYp1Dyzd/aklJJhJfiQlm12ZLvGuzkjWuyBs/93IGryFVJb3tJ/RpH/v2xJ2CbCy4F+1GHwU4bVWVgxiAnKjRoxgl7DWotR9BGFKXwBpr0w2bTaHhMAAAAASUVORK5CYII=";const ko=e=>(ye("data-v-48878cd5"),e=e(),_e(),e),So={class:"house-item"},Do={class:"item-inner"},xo={class:"cover"},Ao=["src"],Co={class:"info"},po={class:"location"},To=ko(()=>d("img",{src:wo,alt:""},null,-1)),Io={class:"name"},Ro={class:"summary"},Bo={class:"price"},Mo={class:"new"},Oo={class:"old"},Po={key:0,class:"tip"},zo={__name:"house-item-v3",props:{itemData:{type:Object,default:()=>({})}},setup(e){return(t,n)=>{var r,l;return x(),M("div",So,[d("div",Do,[d("div",xo,[d("img",{src:(l=(r=e.itemData)==null?void 0:r.image)==null?void 0:l.url,alt:""},null,8,Ao)]),d("div",Co,[d("div",po,[To,d("span",null,O(e.itemData.location),1)]),d("div",Io,O(e.itemData.houseName),1),d("div",Ro,O(e.itemData.summaryText),1),d("div",Bo,[d("div",Mo," ¥ "+O(e.itemData.finalPrice),1),d("div",Oo," ¥ "+O(e.itemData.productPrice),1),e.itemData.priceTipBadge?(x(),M("div",Po,O(e.itemData.priceTipBadge.text),1)):Pe("",!0)])])])])}}},Zo=ee(zo,[["__scopeId","data-v-48878cd5"]]);const $o=e=>(ye("data-v-646d1d77"),e=e(),_e(),e),Ho={class:"content"},Fo=$o(()=>d("h2",{class:"title"},"热门精选",-1)),Eo={class:"list"},No={__name:"home-content",setup(e){const t=we(),{houselist:n}=ce(t),r=Oe(),l=i=>{r.push("/detail/"+i.houseId)};return(i,f)=>(x(),M("div",Ho,[Fo,d("div",Eo,[(x(!0),M(re,null,be(ue(n),(m,a)=>(x(),M(re,{key:m.data.houseId},[m.discoveryContentType===9?(x(),Ne(bo,{key:0,"item-data":m.data,onClick:u=>l(m.data)},null,8,["item-data","onClick"])):m.discoveryContentType===3?(x(),Ne(Zo,{key:1,"item-data":m.data,onClick:u=>l(m.data)},null,8,["item-data","onClick"])):Pe("",!0)],64))),128))])]))}},Vo=ee(No,[["__scopeId","data-v-646d1d77"]]);const Wo={key:0,class:"home-top"},Lo={name:"home"},Yo=Object.assign(Lo,{setup(e){const t=we();t.fetchHotSuggestData(),t.fetchCategoriesData(),t.fetchHouselistData();const n=N(),{isReachBottom:r,scrollTop:l}=Pt(n);J(r,a=>{a&&t.fetchHouselistData().then(u=>{r.value=!1})}),Xe(()=>{var a;(a=n.value)==null||a.scrollTo({top:l.value})});const i=D(()=>l.value>350),f=Oe(),m=()=>{f.push("/search")};return(a,u)=>{const b=ln;return x(),M("div",{class:"home",ref_key:"homeRef",ref:n},[s(In),s(On),s(no),s(co),i.value?(x(),M("div",Wo,[s(Bt,{height:"45px",onClick:m})])):Pe("",!0),s(Vo),s(b,{bottom:"10vh",offset:"400"})],512)}}}),qo=ee(Yo,[["__scopeId","data-v-763b3904"]]);export{qo as default};
