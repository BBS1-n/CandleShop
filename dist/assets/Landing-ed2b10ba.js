import{_ as je,o as V,c as B,a as k,d as L,r as m,b as N,p as b,e as Oe,n as Me,f as Ee,g as he,w as ee,h as be,i as j,F as ae,j as A,k as R,l as _e,u as we,m as Ne,t as xe}from"./index-5b8ecc45.js";const Le={},De={class:"text-center text-white mx-auto max-w-prose"},Ie=k("h1",{class:"text-4xl font-bold underline text-blue-500"},"Über Uns",-1),ze=k("p",{class:"text-base mt-4"}," Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ",-1),$e=[Ie,ze];function Pe(e,n){return V(),B("div",De,$e)}const Ve=je(Le,[["render",Pe]]),Be="/assets/kerze_bubble-1667db76.jpeg",Re="/assets/kerze_tannenbaum-6c67eebf.jpg",Xe="/assets/kerze_tannenzapfen-4a9c8d79.jpg";/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const d={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},Se={itemsToShow:{default:d.itemsToShow,type:Number},itemsToScroll:{default:d.itemsToScroll,type:Number},wrapAround:{default:d.wrapAround,type:Boolean},throttle:{default:d.throttle,type:Number},snapAlign:{default:d.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:d.transition,type:Number},breakpoints:{default:d.breakpoints,type:Object},autoplay:{default:d.autoplay,type:Number},pauseAutoplayOnHover:{default:d.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:d.mouseDrag,type:Boolean},touchDrag:{default:d.touchDrag,type:Boolean},dir:{default:d.dir,validator(e){return["rtl","ltr"].includes(e)}},i18n:{default:d.i18n,type:Object},settings:{default(){return{}},type:Object}};function Ue({config:e,slidesCount:n}){const{snapAlign:a,wrapAround:s,itemsToShow:o=1}=e;if(s)return Math.max(n-1,0);let i;switch(a){case"start":i=n-o;break;case"end":i=n-1;break;case"center":case"center-odd":i=n-Math.ceil((o-.5)/2);break;case"center-even":i=n-Math.ceil(o/2);break;default:i=0;break}return Math.max(i,0)}function Ye({config:e,slidesCount:n}){const{wrapAround:a,snapAlign:s,itemsToShow:o=1}=e;let i=0;if(a||o>n)return i;switch(s){case"start":i=0;break;case"end":i=o-1;break;case"center":case"center-odd":i=Math.floor((o-1)/2);break;case"center-even":i=Math.floor((o-2)/2);break;default:i=0;break}return i}function te({val:e,max:n,min:a}){return n<a?e:Math.min(Math.max(e,a),n)}function He({config:e,currentSlide:n,slidesCount:a}){const{snapAlign:s,wrapAround:o,itemsToShow:i=1}=e;let g=n;switch(s){case"center":case"center-odd":g-=(i-1)/2;break;case"center-even":g-=(i-2)/2;break;case"end":g-=i-1;break}return o?g:te({val:g,max:a-i,min:0})}function ke(e){return e?e.reduce((n,a)=>{var s;return a.type===ae?[...n,...ke(a.children)]:((s=a.type)===null||s===void 0?void 0:s.name)==="CarouselSlide"?[...n,a]:n},[]):[]}function ne({val:e,max:n,min:a=0}){return e>n?ne({val:e-(n+1),max:n,min:a}):e<a?ne({val:e+(n+1),max:n,min:a}):e}function We(e,n){let a;return n?function(...s){const o=this;a||(e.apply(o,s),a=!0,setTimeout(()=>a=!1,n))}:e}function Ge(e,n){let a;return function(...s){a&&clearTimeout(a),a=setTimeout(()=>{e(...s),a=null},n)}}function Fe(e="",n={}){return Object.entries(n).reduce((a,[s,o])=>a.replace(`{${s}}`,String(o)),e)}var Ke=L({name:"ARIA",setup(){const e=A("config",N(Object.assign({},d))),n=A("currentSlide",m(0)),a=A("slidesCount",m(0));return()=>j("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Fe(e.i18n.itemXofY,{currentSlide:n.value+1,slidesCount:a.value}))}}),qe=L({name:"Carousel",props:Se,setup(e,{slots:n,emit:a,expose:s}){var o;const i=m(null),g=m([]),_=m(0),f=m(0),r=N(Object.assign({},d));let v=Object.assign({},d),w;const u=m((o=e.modelValue)!==null&&o!==void 0?o:0),X=m(0),re=m(0),T=m(0),O=m(0);let C,U;b("config",r),b("slidesCount",f),b("currentSlide",u),b("maxSlide",T),b("minSlide",O),b("slideWidth",_);function Y(){w=Object.assign({},e.breakpoints),v=Object.assign(Object.assign(Object.assign({},v),e),{i18n:Object.assign(Object.assign({},v.i18n),e.i18n),breakpoints:void 0}),oe(v)}function D(){if(!w||!Object.keys(w).length)return;const t=Object.keys(w).map(l=>Number(l)).sort((l,h)=>+h-+l);let c=Object.assign({},v);t.some(l=>{const h=window.matchMedia(`(min-width: ${l}px)`).matches;return h&&(c=Object.assign(Object.assign({},c),w[l])),h}),oe(c)}function oe(t){Object.entries(t).forEach(([c,l])=>r[c]=l)}const ie=Ge(()=>{D(),M()},16);function M(){if(!i.value)return;const t=i.value.getBoundingClientRect();_.value=t.width/r.itemsToShow}function H(){f.value<=0||(re.value=Math.ceil((f.value-1)/2),T.value=Ue({config:r,slidesCount:f.value}),O.value=Ye({config:r,slidesCount:f.value}),r.wrapAround||(u.value=te({val:u.value,max:T.value,min:O.value})))}Oe(()=>{Me(()=>M()),setTimeout(()=>M(),1e3),D(),ce(),window.addEventListener("resize",ie,{passive:!0}),a("init")}),Ee(()=>{U&&clearTimeout(U),C&&clearInterval(C),window.removeEventListener("resize",ie,{passive:!0})});let p=!1;const I={x:0,y:0},z={x:0,y:0},x=N({x:0,y:0}),$=m(!1),W=m(!1),Ae=()=>{$.value=!0},Te=()=>{$.value=!1};function se(t){["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||(p=t.type==="touchstart",p||t.preventDefault(),!(!p&&t.button!==0||S.value)&&(I.x=p?t.touches[0].clientX:t.clientX,I.y=p?t.touches[0].clientY:t.clientY,document.addEventListener(p?"touchmove":"mousemove",le,!0),document.addEventListener(p?"touchend":"mouseup",ue,!0)))}const le=We(t=>{W.value=!0,z.x=p?t.touches[0].clientX:t.clientX,z.y=p?t.touches[0].clientY:t.clientY;const c=z.x-I.x,l=z.y-I.y;x.y=l,x.x=c},r.throttle);function ue(){const t=r.dir==="rtl"?-1:1,c=Math.sign(x.x)*.4,l=Math.round(x.x/_.value+c)*t;if(l&&!p){const h=q=>{q.stopPropagation(),window.removeEventListener("click",h,!0)};window.addEventListener("click",h,!0)}y(u.value-l),x.x=0,x.y=0,W.value=!1,document.removeEventListener(p?"touchmove":"mousemove",le,!0),document.removeEventListener(p?"touchend":"mouseup",ue,!0)}function ce(){!r.autoplay||r.autoplay<=0||(C=setInterval(()=>{r.pauseAutoplayOnHover&&$.value||P()},r.autoplay))}function de(){C&&(clearInterval(C),C=null),ce()}const S=m(!1);function y(t){const c=r.wrapAround?t:te({val:t,max:T.value,min:O.value});u.value===c||S.value||(a("slide-start",{slidingToIndex:t,currentSlideIndex:u.value,prevSlideIndex:X.value,slidesCount:f.value}),S.value=!0,X.value=u.value,u.value=c,U=setTimeout(()=>{if(r.wrapAround){const l=ne({val:c,max:T.value,min:0});l!==u.value&&(u.value=l,a("loop",{currentSlideIndex:u.value,slidingToIndex:t}))}a("update:modelValue",u.value),a("slide-end",{currentSlideIndex:u.value,prevSlideIndex:X.value,slidesCount:f.value}),S.value=!1,de()},r.transition))}function P(){y(u.value+r.itemsToScroll)}function G(){y(u.value-r.itemsToScroll)}const me={slideTo:y,next:P,prev:G};b("nav",me),b("isSliding",S);const fe=he(()=>He({config:r,currentSlide:u.value,slidesCount:f.value}));b("slidesToScroll",fe);const Ce=he(()=>{const t=r.dir==="rtl"?-1:1,c=fe.value*_.value*t;return{transform:`translateX(${x.x-c}px)`,transition:`${S.value?r.transition:0}ms`,margin:r.wrapAround?`0 -${f.value*_.value}px`:"",width:"100%"}});function pe(){Y(),D(),H(),M(),de()}Object.keys(Se).forEach(t=>{["modelValue"].includes(t)||ee(()=>e[t],pe)}),ee(()=>e.modelValue,t=>{t!==u.value&&y(Number(t))}),ee(f,H),a("before-init"),Y();const ve={config:r,slidesCount:f,slideWidth:_,next:P,prev:G,slideTo:y,currentSlide:u,maxSlide:T,minSlide:O,middleSlide:re};s({updateBreakpointsConfigs:D,updateSlidesData:H,updateSlideWidth:M,initDefaultConfigs:Y,restartCarousel:pe,slideTo:y,next:P,prev:G,nav:me,data:ve});const F=n.default||n.slides,K=n.addons,ge=N(ve);return()=>{const t=ke(F==null?void 0:F(ge)),c=(K==null?void 0:K(ge))||[];t.forEach((J,Q)=>J.props.index=Q);let l=t;if(r.wrapAround){const J=t.map((Z,E)=>be(Z,{index:-t.length+E,isClone:!0,key:`clone-before-${E}`})),Q=t.map((Z,E)=>be(Z,{index:t.length+E,isClone:!0,key:`clone-after-${E}`}));l=[...J,...t,...Q]}g.value=t,f.value=Math.max(t.length,1);const h=j("ol",{class:"carousel__track",style:Ce.value,onMousedownCapture:r.mouseDrag?se:null,onTouchstartPassiveCapture:r.touchDrag?se:null},l),q=j("div",{class:"carousel__viewport"},h);return j("section",{ref:i,class:{carousel:!0,"is-sliding":S.value,"is-dragging":W.value,"is-hover":$.value,"carousel--rtl":r.dir==="rtl"},dir:r.dir,"aria-label":r.i18n.ariaGallery,tabindex:"0",onMouseenter:Ae,onMouseleave:Te},[q,c,j(Ke)])}}}),ye;(function(e){e.arrowUp="arrowUp",e.arrowDown="arrowDown",e.arrowRight="arrowRight",e.arrowLeft="arrowLeft"})(ye||(ye={}));var Je=L({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:n}){const a=A("config",N(Object.assign({},d))),s=A("currentSlide",m(0)),o=A("slidesToScroll",m(0)),i=A("isSliding",m(!1)),g=()=>e.index===s.value,_=()=>e.index===s.value-1,f=()=>e.index===s.value+1,r=()=>{const v=Math.floor(o.value),w=Math.ceil(o.value+a.itemsToShow-1);return e.index>=v&&e.index<=w};return()=>{var v;return j("li",{style:{width:`${100/a.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":r(),"carousel__slide--active":g(),"carousel__slide--prev":_(),"carousel__slide--next":f(),"carousel__slide--sliding":i.value},"aria-hidden":!r()},(v=n.default)===null||v===void 0?void 0:v.call(n))}}});const Qe={id:"products",class:"text-center text-white mx-auto max-w-3xl"},Ze=k("h1",{class:"text-4xl font-bold underline text-blue-500"},"Produkte",-1),et={class:"carousel__item"},tt=["src"],nt=L({__name:"Products",setup(e){const n=[{id:1,description:"Wunderschöne Kugelkerze",price:"500€",image:Be},{id:2,description:"Gigantischer Kerzen-Tannebaum",price:"5000€",image:Re},{id:3,description:"Kleine aber wunderschöne Tannenzäpchen",price:"200€",image:Xe}];return(a,s)=>(V(),B("div",Qe,[Ze,R(we(qe),{class:"mt-4",autoplay:parseInt("2000"),itemsToShow:3.95,wrapAround:!0,transition:500},{default:_e(()=>[(V(),B(ae,null,Ne(n,o=>R(we(Je),{key:o.price},{default:_e(()=>[k("div",et,[k("img",{src:o.image},null,8,tt),k("p",null,xe(o.description),1),k("p",null,xe(o.price),1)])]),_:2},1024)),64))]),_:1},8,["autoplay"])]))}});const rt=L({__name:"Landing",setup(e){return(n,a)=>(V(),B(ae,null,[R(Ve,{class:"mb-20"}),R(nt)],64))}});export{rt as default};
