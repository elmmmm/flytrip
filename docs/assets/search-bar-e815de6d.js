import{n as J,t as W,v as he,U as xe,J as ve,ao as Ce,j as oe,L as Te,p as ye,D as q,c as me,d as $e,G as _e,a as z,aG as Se,e as ge,F as Pe,x as De,al as pe,am as we,w as Me,m as te,b as ae,K as Ae,o as Le,H as Be,aA as ze,aH as Ee,T as He,a1 as Ye,av as Ne,l as je,aE as We,I as Re,_ as Fe,aI as Ue,a8 as Ve,a7 as ie,W as ne,X as se,a3 as ce,$ as T,a9 as K,ab as ue,Y as Ze,Z as Ge}from"./index-69ba64b0.js";import{a as Ke,u as Je}from"./index-45798041.js";import{u as qe}from"./city-7cc509fb.js";let Qe=2e3;const Xe=()=>++Qe,et={show:Boolean,zIndex:J,overlay:W,duration:J,teleport:[String,Object],lockScroll:W,lazyRender:W,beforeClose:Function,overlayStyle:Object,overlayClass:he,transitionAppear:Boolean,closeOnClickOverlay:W};let V=0;const le="van-overflow-hidden";function tt(t,u){const f=Ke(),D="01",S="10",p=M=>{f.move(M);const $=f.deltaY.value>0?S:D,N=Te(M.target,t.value),{scrollHeight:O,offsetHeight:C,scrollTop:E}=N;let P="11";E===0?P=C>=O?"00":"01":E+C>=O&&(P="10"),P!=="11"&&f.isVertical()&&!(parseInt(P,2)&parseInt($,2))&&ye(M,!0)},y=()=>{document.addEventListener("touchstart",f.start),document.addEventListener("touchmove",p,{passive:!1}),V||document.body.classList.add(le),V++},m=()=>{V&&(document.removeEventListener("touchstart",f.start),document.removeEventListener("touchmove",p),V--,V||document.body.classList.remove(le))},I=()=>u()&&y(),w=()=>u()&&m();xe(I),ve(w),Ce(w),oe(u,M=>{M?y():m()})}function Oe(t){const u=q(!1);return oe(t,f=>{f&&(u.value=f)},{immediate:!0}),f=>()=>u.value?f():null}const[nt,st]=me("overlay"),at={show:Boolean,zIndex:J,duration:J,className:he,lockScroll:W,lazyRender:W,customStyle:Object};var ot=$e({name:nt,props:at,setup(t,{slots:u}){const f=q(),D=Oe(()=>t.show||!t.lazyRender),S=y=>{t.lockScroll&&ye(y,!0)},p=D(()=>{var y;const m=ge(Pe(t.zIndex),t.customStyle);return De(t.duration)&&(m.animationDuration=`${t.duration}s`),pe(z("div",{ref:f,style:m,class:[st(),t.className]},[(y=u.default)==null?void 0:y.call(u)]),[[we,t.show]])});return _e("touchmove",S,{target:f}),()=>z(Se,{name:"van-fade",appear:!0},{default:p})}});const rt=Me(ot),it=ge({},et,{round:Boolean,position:te("center"),closeIcon:te("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:te("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[ct,de]=me("popup");var ut=$e({name:ct,inheritAttrs:!1,props:it,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(t,{emit:u,attrs:f,slots:D}){let S,p;const y=q(),m=q(),I=Oe(()=>t.show||!t.lazyRender),w=ae(()=>{const d={zIndex:y.value};if(De(t.duration)){const k=t.position==="center"?"animationDuration":"transitionDuration";d[k]=`${t.duration}s`}return d}),M=()=>{S||(S=!0,y.value=t.zIndex!==void 0?+t.zIndex:Xe(),u("open"))},$=()=>{S&&Ne(t.beforeClose,{done(){S=!1,u("close"),u("update:show",!1)}})},N=d=>{u("clickOverlay",d),t.closeOnClickOverlay&&$()},O=()=>{if(t.overlay)return z(rt,{show:t.show,class:t.overlayClass,zIndex:y.value,duration:t.duration,customStyle:t.overlayStyle,role:t.closeOnClickOverlay?"button":void 0,tabindex:t.closeOnClickOverlay?0:void 0,onClick:N},{default:D["overlay-content"]})},C=d=>{u("clickCloseIcon",d),$()},E=()=>{if(t.closeable)return z(Re,{role:"button",tabindex:0,name:t.closeIcon,class:[de("close-icon",t.closeIconPosition),We],classPrefix:t.iconPrefix,onClick:C},null)};let P;const Q=()=>{P&&clearTimeout(P),P=setTimeout(()=>{u("opened")})},X=()=>u("closed"),R=d=>u("keydown",d),ee=I(()=>{var d;const{round:k,position:A,safeAreaInsetTop:h,safeAreaInsetBottom:c}=t;return pe(z("div",je({ref:m,style:w.value,role:"dialog",tabindex:0,class:[de({round:k,[A]:A}),{"van-safe-area-top":h,"van-safe-area-bottom":c}],onKeydown:R},f),[(d=D.default)==null?void 0:d.call(D),E()]),[[we,t.show]])}),L=()=>{const{position:d,transition:k,transitionAppear:A}=t,h=d==="center"?"van-fade":`van-popup-slide-${d}`;return z(Se,{name:k||h,appear:A,onAfterEnter:Q,onAfterLeave:X},{default:ee})};return oe(()=>t.show,d=>{d&&!S&&(M(),f.tabindex===0&&Ae(()=>{var k;(k=m.value)==null||k.focus()})),!d&&S&&(S=!1,u("close"))}),Je({popupRef:m}),tt(m,()=>t.show&&t.lockScroll),_e("popstate",()=>{t.closeOnPopstate&&($(),p=!1)}),Le(()=>{t.show&&M()}),Be(()=>{p&&(u("update:show",!0),p=!1)}),ve(()=>{t.show&&t.teleport&&($(),p=!0)}),ze(Ee,()=>t.show),()=>t.teleport?z(He,{to:t.teleport},{default:()=>[O(),L()]}):z(Ye,null,[O(),L()])}});const Ct=Me(ut);var lt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var be={exports:{}};(function(t,u){(function(f,D){t.exports=D()})(lt,function(){var f=1e3,D=6e4,S=36e5,p="millisecond",y="second",m="minute",I="hour",w="day",M="week",$="month",N="quarter",O="year",C="date",E="Invalid Date",P=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Q=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,X={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(o){var s=["th","st","nd","rd"],e=o%100;return"["+o+(s[(e-20)%10]||s[e]||s[0])+"]"}},R=function(o,s,e){var a=String(o);return!a||a.length>=s?o:""+Array(s+1-a.length).join(e)+o},ee={s:R,z:function(o){var s=-o.utcOffset(),e=Math.abs(s),a=Math.floor(e/60),n=e%60;return(s<=0?"+":"-")+R(a,2,"0")+":"+R(n,2,"0")},m:function o(s,e){if(s.date()<e.date())return-o(e,s);var a=12*(e.year()-s.year())+(e.month()-s.month()),n=s.clone().add(a,$),r=e-n<0,i=s.clone().add(a+(r?-1:1),$);return+(-(a+(e-n)/(r?n-i:i-n))||0)},a:function(o){return o<0?Math.ceil(o)||0:Math.floor(o)},p:function(o){return{M:$,y:O,w:M,d:w,D:C,h:I,m,s:y,ms:p,Q:N}[o]||String(o||"").toLowerCase().replace(/s$/,"")},u:function(o){return o===void 0}},L="en",d={};d[L]=X;var k=function(o){return o instanceof Z},A=function o(s,e,a){var n;if(!s)return L;if(typeof s=="string"){var r=s.toLowerCase();d[r]&&(n=r),e&&(d[r]=e,n=r);var i=s.split("-");if(!n&&i.length>1)return o(i[0])}else{var l=s.name;d[l]=s,n=l}return!a&&n&&(L=n),n||!a&&L},h=function(o,s){if(k(o))return o.clone();var e=typeof s=="object"?s:{};return e.date=o,e.args=arguments,new Z(e)},c=ee;c.l=A,c.i=k,c.w=function(o,s){return h(o,{locale:s.$L,utc:s.$u,x:s.$x,$offset:s.$offset})};var Z=function(){function o(e){this.$L=A(e.locale,null,!0),this.parse(e)}var s=o.prototype;return s.parse=function(e){this.$d=function(a){var n=a.date,r=a.utc;if(n===null)return new Date(NaN);if(c.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var i=n.match(P);if(i){var l=i[2]-1||0,v=(i[7]||"0").substring(0,3);return r?new Date(Date.UTC(i[1],l,i[3]||1,i[4]||0,i[5]||0,i[6]||0,v)):new Date(i[1],l,i[3]||1,i[4]||0,i[5]||0,i[6]||0,v)}}return new Date(n)}(e),this.$x=e.x||{},this.init()},s.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},s.$utils=function(){return c},s.isValid=function(){return this.$d.toString()!==E},s.isSame=function(e,a){var n=h(e);return this.startOf(a)<=n&&n<=this.endOf(a)},s.isAfter=function(e,a){return h(e)<this.startOf(a)},s.isBefore=function(e,a){return this.endOf(a)<h(e)},s.$g=function(e,a,n){return c.u(e)?this[a]:this.set(n,e)},s.unix=function(){return Math.floor(this.valueOf()/1e3)},s.valueOf=function(){return this.$d.getTime()},s.startOf=function(e,a){var n=this,r=!!c.u(a)||a,i=c.p(e),l=function(Y,b){var B=c.w(n.$u?Date.UTC(n.$y,b,Y):new Date(n.$y,b,Y),n);return r?B:B.endOf(w)},v=function(Y,b){return c.w(n.toDate()[Y].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(b)),n)},_=this.$W,g=this.$M,x=this.$D,j="set"+(this.$u?"UTC":"");switch(i){case O:return r?l(1,0):l(31,11);case $:return r?l(1,g):l(0,g+1);case M:var H=this.$locale().weekStart||0,F=(_<H?_+7:_)-H;return l(r?x-F:x+(6-F),g);case w:case C:return v(j+"Hours",0);case I:return v(j+"Minutes",1);case m:return v(j+"Seconds",2);case y:return v(j+"Milliseconds",3);default:return this.clone()}},s.endOf=function(e){return this.startOf(e,!1)},s.$set=function(e,a){var n,r=c.p(e),i="set"+(this.$u?"UTC":""),l=(n={},n[w]=i+"Date",n[C]=i+"Date",n[$]=i+"Month",n[O]=i+"FullYear",n[I]=i+"Hours",n[m]=i+"Minutes",n[y]=i+"Seconds",n[p]=i+"Milliseconds",n)[r],v=r===w?this.$D+(a-this.$W):a;if(r===$||r===O){var _=this.clone().set(C,1);_.$d[l](v),_.init(),this.$d=_.set(C,Math.min(this.$D,_.daysInMonth())).$d}else l&&this.$d[l](v);return this.init(),this},s.set=function(e,a){return this.clone().$set(e,a)},s.get=function(e){return this[c.p(e)]()},s.add=function(e,a){var n,r=this;e=Number(e);var i=c.p(a),l=function(g){var x=h(r);return c.w(x.date(x.date()+Math.round(g*e)),r)};if(i===$)return this.set($,this.$M+e);if(i===O)return this.set(O,this.$y+e);if(i===w)return l(1);if(i===M)return l(7);var v=(n={},n[m]=D,n[I]=S,n[y]=f,n)[i]||1,_=this.$d.getTime()+e*v;return c.w(_,this)},s.subtract=function(e,a){return this.add(-1*e,a)},s.format=function(e){var a=this,n=this.$locale();if(!this.isValid())return n.invalidDate||E;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=c.z(this),l=this.$H,v=this.$m,_=this.$M,g=n.weekdays,x=n.months,j=n.meridiem,H=function(b,B,U,G){return b&&(b[B]||b(a,r))||U[B].slice(0,G)},F=function(b){return c.s(l%12||12,b,"0")},Y=j||function(b,B,U){var G=b<12?"AM":"PM";return U?G.toLowerCase():G};return r.replace(Q,function(b,B){return B||function(U){switch(U){case"YY":return String(a.$y).slice(-2);case"YYYY":return c.s(a.$y,4,"0");case"M":return _+1;case"MM":return c.s(_+1,2,"0");case"MMM":return H(n.monthsShort,_,x,3);case"MMMM":return H(x,_);case"D":return a.$D;case"DD":return c.s(a.$D,2,"0");case"d":return String(a.$W);case"dd":return H(n.weekdaysMin,a.$W,g,2);case"ddd":return H(n.weekdaysShort,a.$W,g,3);case"dddd":return g[a.$W];case"H":return String(l);case"HH":return c.s(l,2,"0");case"h":return F(1);case"hh":return F(2);case"a":return Y(l,v,!0);case"A":return Y(l,v,!1);case"m":return String(v);case"mm":return c.s(v,2,"0");case"s":return String(a.$s);case"ss":return c.s(a.$s,2,"0");case"SSS":return c.s(a.$ms,3,"0");case"Z":return i}return null}(b)||i.replace(":","")})},s.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},s.diff=function(e,a,n){var r,i=this,l=c.p(a),v=h(e),_=(v.utcOffset()-this.utcOffset())*D,g=this-v,x=function(){return c.m(i,v)};switch(l){case O:r=x()/12;break;case $:r=x();break;case N:r=x()/3;break;case M:r=(g-_)/6048e5;break;case w:r=(g-_)/864e5;break;case I:r=g/S;break;case m:r=g/D;break;case y:r=g/f;break;default:r=g}return n?r:c.a(r)},s.daysInMonth=function(){return this.endOf($).$D},s.$locale=function(){return d[this.$L]},s.locale=function(e,a){if(!e)return this.$L;var n=this.clone(),r=A(e,a,!0);return r&&(n.$L=r),n},s.clone=function(){return c.w(this.$d,this)},s.toDate=function(){return new Date(this.valueOf())},s.toJSON=function(){return this.isValid()?this.toISOString():null},s.toISOString=function(){return this.$d.toISOString()},s.toString=function(){return this.$d.toUTCString()},o}(),re=Z.prototype;return h.prototype=re,[["$ms",p],["$s",y],["$m",m],["$H",I],["$W",w],["$M",$],["$y",O],["$D",C]].forEach(function(o){re[o[1]]=function(s){return this.$g(s,o[0],o[1])}}),h.extend=function(o,s){return o.$i||(o(s,Z,h),o.$i=!0),h},h.locale=A,h.isDayjs=k,h.unix=function(o){return h(1e3*o)},h.en=d[L],h.Ls=d,h.p={},h})})(be);var ft=be.exports;const Ie=dt(ft);function fe(t,u="MM月DD日"){return Ie(t).format(u)}function Tt(t,u){return Ie(u).diff(t,"day")}const ke=t=>(Ze("data-v-5301c7e6"),t=t(),Ge(),t),ht={class:"search-bar"},vt={key:0,class:"left"},yt={class:"select-time"},mt={class:"item start"},$t=ke(()=>T("div",{class:"name"},"住",-1)),_t={class:"date"},St={class:"item end"},gt=ke(()=>T("div",{class:"name"},"离",-1)),Dt={class:"date"},pt={class:"content"},wt={class:"keyword"},Mt={class:"right"},Ot={key:0,class:"icon-search"},bt={__name:"search-bar",props:{keyWord:{type:String,default:"关键字/位置/民宿名"},searchIcon:{type:Boolean,default:!0},height:{type:String,default:"35px"}},setup(t){const u=t;Ue(w=>({"1c072f9f":u.height}));const f=Ve(),{startDate:D,endDate:S}=ie(f),p=ae(()=>fe(D.value,"MM.DD")),y=ae(()=>fe(S.value,"MM.DD")),m=qe(),{currentCity:I}=ie(m);return(w,M)=>(ne(),se("div",ht,[ce(I).cityName?(ne(),se("div",vt,[T("span",null,K(ce(I).cityName),1)])):ue("",!0),T("div",yt,[T("div",mt,[$t,T("div",_t,K(p.value),1)]),T("div",St,[gt,T("div",Dt,K(y.value),1)])]),T("div",pt,[T("div",wt,K(t.keyWord),1)]),T("div",Mt,[t.searchIcon?(ne(),se("i",Ot)):ue("",!0)])]))}},Pt=Fe(bt,[["__scopeId","data-v-5301c7e6"]]);export{Ct as P,Pt as S,fe as f,Tt as g};
