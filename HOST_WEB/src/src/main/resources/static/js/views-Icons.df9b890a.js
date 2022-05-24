(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-Icons"],{"21be":function(t,e,i){"use strict";var o=i("2b0e"),a=i("80d2");e["a"]=o["a"].extend().extend({name:"stackable",data(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex(){if("undefined"===typeof window)return 0;const t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(a["t"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex(t=[]){const e=this.$el,i=[this.stackMinZIndex,Object(a["t"])(e)],o=[...document.getElementsByClassName("v-menu__content--active"),...document.getElementsByClassName("v-dialog__content--active")];for(let n=0;n<o.length;n++)t.includes(o[n])||i.push(Object(a["t"])(o[n]));return Math.max(...i)}}})},"4ad4":function(t,e,i){"use strict";var o=i("16b7"),a=i("f2e7"),n=i("58df"),s=i("80d2"),r=i("d9bd");const c=Object(n["a"])(o["a"],a["a"]);e["a"]=c.extend({name:"activatable",props:{activator:{default:null,validator:t=>["string","object"].includes(typeof t)},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean,openOnFocus:Boolean},data:()=>({activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}),watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted(){const t=Object(s["s"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(r["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy(){this.removeActivatorEvents()},methods:{addActivatorEvents(){if(!this.activator||this.disabled||!this.getActivator())return;this.listeners=this.genActivatorListeners();const t=Object.keys(this.listeners);for(const e of t)this.getActivator().addEventListener(e,this.listeners[e])},genActivator(){const t=Object(s["r"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners(){if(this.disabled)return{};const t={};return this.openOnHover?(t.mouseenter=t=>{this.getActivator(t),this.runDelay("open")},t.mouseleave=t=>{this.getActivator(t),this.runDelay("close")}):t.click=t=>{const e=this.getActivator(t);e&&e.focus(),t.stopPropagation(),this.isActive=!this.isActive},this.openOnFocus&&(t.focus=t=>{this.getActivator(t),t.stopPropagation(),this.isActive=!this.isActive}),t},getActivator(t){if(this.activatorElement)return this.activatorElement;let e=null;if(this.activator){const t=this.internalActivator?this.$el:document;e="string"===typeof this.activator?t.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){const t=this.activatorNode[0].componentInstance;e=t&&t.$options.mixins&&t.$options.mixins.some(t=>t.options&&["activatable","menuable"].includes(t.options.name))?t.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=e,this.activatorElement},getContentSlot(){return Object(s["r"])(this,"default",this.getValueProxy(),!0)},getValueProxy(){const t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents(){if(!this.activator||!this.activatorElement)return;const t=Object.keys(this.listeners);for(const e of t)this.activatorElement.removeEventListener(e,this.listeners[e]);this.listeners={}},resetActivator(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},"75eb":function(t,e,i){"use strict";var o=i("9d65"),a=i("80d2"),n=i("58df"),s=i("d9bd");function r(t){const e=typeof t;return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}e["a"]=Object(n["a"])(o["a"]).extend({name:"detachable",props:{attach:{default:!1,validator:r},contentClass:{type:String,default:""}},data:()=>({activatorNode:null,hasDetached:!1}),watch:{attach(){this.hasDetached=!1,this.initDetach()},hasContent(){this.$nextTick(this.initDetach)}},beforeMount(){this.$nextTick(()=>{if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach(t=>{if(!t.elm)return;if(!this.$el.parentNode)return;const e=this.$el===this.$el.parentNode.firstChild?this.$el:this.$el.nextSibling;this.$el.parentNode.insertBefore(t.elm,e)})}})},mounted(){this.hasContent&&this.initDetach()},deactivated(){this.isActive=!1},beforeDestroy(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach(t=>{t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)})}}catch(t){console.log(t)}},methods:{getScopeIdAttrs(){const t=Object(a["o"])(this.$vnode,"context.$options._scopeId");return t&&{[t]:""}},initDetach(){if(this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach)return;let t;t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(s["c"])("Unable to locate target "+(this.attach||"[data-app]"),this)}}})},9734:function(t,e,i){},"9cc6":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{id:"icons-view",fluid:"",tag:"section"}},[i("view-intro",{attrs:{heading:"Icons",link:"components/icons"}}),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("material-card",{attrs:{color:"success","full-header":""},scopedSlots:t._u([{key:"heading",fn:function(){return[i("div",{staticClass:"pa-6 white--text"},[i("div",{staticClass:"text-h4 font-weight-light"},[t._v(" Material Design Icons ")]),i("div",{staticClass:"text-subtitle-1"},[t._v(" See all available "),i("a",{staticClass:"white--text",attrs:{href:"https://github.com/Templarian/MaterialDesign",target:"_blank",rel:"noopener noreferrer"}},[t._v("Icons")])])])]},proxy:!0}])},[i("v-row",{attrs:{align:"center",justify:"center"}},t._l(t.icons,(function(e){return i("v-col",{key:e,staticClass:"ma-2",attrs:{cols:"auto"}},[i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.attrs,n=o.on;return[i("v-icon",t._g(t._b({},"v-icon",a,!1),n),[t._v(" "+t._s(e)+" ")])]}}],null,!0)},[i("span",[t._v(t._s(e))])])],1)})),1)],1)],1),i("v-col",{staticClass:"mx-auto",attrs:{cols:"auto"}},[i("app-btn",{attrs:{href:"https://github.com/Templarian/MaterialDesign",large:"",rel:"noopener noreferrer",target:"_blank"}},[i("v-icon",{attrs:{left:""}},[t._v(" mdi-material-design ")]),i("span",[t._v("See all icons")])],1)],1)],1)],1)},a=[],n={name:"IconsView",data:function(){return{icons:["mdi-access-point","mdi-access-point-network","mdi-account","mdi-account-alert","mdi-account-box","mdi-account-box-multiple","mdi-account-box-outline","mdi-account-card-details","mdi-account-check","mdi-account-circle","mdi-account-convert","mdi-account-edit","mdi-account-group","mdi-account-heart","mdi-account-key","mdi-account-location","mdi-account-minus","mdi-account-multiple","mdi-account-multiple-check","mdi-account-multiple-minus","mdi-account-multiple-outline","mdi-account-multiple-plus","mdi-account-multiple-plus-outline","mdi-account-network","mdi-account-off","mdi-account-outline","mdi-account-plus","mdi-account-plus-outline","mdi-account-remove","mdi-account-search","mdi-account-search-outline","mdi-account-settings","mdi-account-settings-variant","mdi-account-star","mdi-account-switch","mdi-accusoft","mdi-adjust","mdi-adobe","mdi-air-conditioner","mdi-airballoon","mdi-airplane","mdi-airplane-landing","mdi-airplane-off","mdi-airplane-takeoff","mdi-airplay","mdi-airport","mdi-alarm","mdi-alarm-bell","mdi-alarm-check","mdi-alarm-light","mdi-alarm-multiple","mdi-alarm-off","mdi-alarm-plus","mdi-alarm-snooze","mdi-album","mdi-alert","mdi-alert-box","mdi-alert-circle","mdi-alert-circle-outline","mdi-alert-decagram","mdi-alert-octagon","mdi-alert-octagram","mdi-alert-outline","mdi-alien","mdi-all-inclusive","mdi-alpha","mdi-alphabetical","mdi-altimeter","mdi-amazon","mdi-amazon-alexa","mdi-amazon-drive","mdi-ambulance","mdi-amplifier","mdi-anchor","mdi-android","mdi-android-debug-bridge","mdi-android-head","mdi-android-studio","mdi-angle-acute","mdi-angle-obtuse","mdi-angle-right","mdi-angular","mdi-angularjs","mdi-animation","mdi-animation-play","mdi-anvil","mdi-apple","mdi-apple-finder","mdi-apple-icloud","mdi-apple-ios","mdi-apple-keyboard-caps","mdi-apple-keyboard-command","mdi-apple-keyboard-control","mdi-apple-keyboard-option","mdi-apple-keyboard-shift","mdi-apple-safari","mdi-application","mdi-approval","mdi-apps","mdi-arch","mdi-archive","mdi-arrange-bring-forward","mdi-arrange-bring-to-front","mdi-arrange-send-backward","mdi-arrange-send-to-back","mdi-arrow-all","mdi-arrow-bottom-left","mdi-arrow-bottom-left-bold-outline","mdi-arrow-bottom-left-thick","mdi-arrow-bottom-right","mdi-arrow-bottom-right-bold-outline","mdi-arrow-bottom-right-thick","mdi-arrow-collapse","mdi-arrow-collapse-all","mdi-arrow-collapse-down","mdi-arrow-collapse-horizontal","mdi-arrow-collapse-left","mdi-arrow-collapse-right","mdi-arrow-collapse-up","mdi-arrow-collapse-vertical","mdi-arrow-decision","mdi-arrow-decision-auto","mdi-arrow-decision-auto-outline","mdi-arrow-decision-outline","mdi-arrow-down","mdi-arrow-down-bold","mdi-arrow-down-bold-box","mdi-arrow-down-bold-box-outline","mdi-arrow-down-bold-circle","mdi-arrow-down-bold-circle-outline","mdi-arrow-down-bold-hexagon-outline","mdi-arrow-down-bold-outline","mdi-arrow-down-box","mdi-arrow-down-drop-circle","mdi-arrow-down-drop-circle-outline","mdi-arrow-down-thick","mdi-arrow-expand","mdi-arrow-expand-all","mdi-arrow-expand-down","mdi-arrow-expand-horizontal","mdi-arrow-expand-left","mdi-arrow-expand-right","mdi-arrow-expand-up","mdi-arrow-expand-vertical","mdi-arrow-left","mdi-arrow-left-bold","mdi-arrow-left-bold-box","mdi-arrow-left-bold-box-outline","mdi-arrow-left-bold-circle","mdi-arrow-left-bold-circle-outline","mdi-arrow-left-bold-hexagon-outline","mdi-arrow-left-bold-outline","mdi-arrow-left-box","mdi-arrow-left-drop-circle","mdi-arrow-left-drop-circle-outline","mdi-arrow-left-right-bold-outline","mdi-arrow-left-thick","mdi-arrow-right","mdi-arrow-right-bold","mdi-arrow-right-bold-box","mdi-arrow-right-bold-box-outline","mdi-arrow-right-bold-circle","mdi-arrow-right-bold-circle-outline","mdi-arrow-right-bold-hexagon-outline","mdi-arrow-right-bold-outline","mdi-arrow-right-box","mdi-arrow-right-drop-circle","mdi-arrow-right-drop-circle-outline","mdi-arrow-right-thick","mdi-arrow-split-horizontal","mdi-arrow-split-vertical","mdi-arrow-top-left","mdi-arrow-top-left-bold-outline","mdi-arrow-top-left-thick","mdi-arrow-top-right","mdi-arrow-top-right-bold-outline","mdi-arrow-top-right-thick","mdi-arrow-up","mdi-arrow-up-bold","mdi-arrow-up-bold-box","mdi-arrow-up-bold-box-outline","mdi-arrow-up-bold-circle","mdi-arrow-up-bold-circle-outline","mdi-arrow-up-bold-hexagon-outline","mdi-arrow-up-bold-outline","mdi-arrow-up-box","mdi-arrow-up-down-bold-outline","mdi-arrow-up-drop-circle","mdi-arrow-up-drop-circle-outline","mdi-arrow-up-thick","mdi-artist","mdi-assistant","mdi-asterisk","mdi-at","mdi-atlassian","mdi-atom","mdi-attachment","mdi-audio-video","mdi-audiobook","mdi-augmented-reality","mdi-auto-fix","mdi-auto-upload","mdi-autorenew","mdi-av-timer","mdi-axe","mdi-azure","mdi-baby","mdi-baby-buggy","mdi-backburger","mdi-backspace","mdi-backup-restore","mdi-badminton"]}}},s=n,r=i("2877"),c=i("6544"),d=i.n(c),l=i("62ad"),h=i("a523"),m=i("132d"),u=i("0fd9"),p=(i("9734"),i("4ad4")),f=i("a9ad"),v=i("16b7"),g=i("b848"),b=i("75eb"),w=i("f573"),x=i("f2e7"),y=i("80d2"),A=i("d9bd"),k=i("58df"),O=Object(k["a"])(f["a"],v["a"],g["a"],b["a"],w["a"],x["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,i=!this.bottom&&!this.left&&!this.top&&!this.right,o=!1!==this.attach?t.offsetLeft:t.left;let a=0;return this.top||this.bottom||i?a=o+t.width/2-e.width/2:(this.left||this.right)&&(a=o+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),this.calcXOverflow(a,this.dimensions.content.width)+"px"},calculatedTop(){const{activator:t,content:e}=this.dimensions,i=!1!==this.attach?t.offsetTop:t.top;let o=0;return this.top||this.bottom?o=i+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=i+t.height/2-e.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),this.calcYOverflow(o+this.pageYOffset)+"px"},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:Object(y["g"])(this.maxWidth),minWidth:Object(y["g"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick(()=>{this.value&&this.callActivate()})},mounted(){"v-slot"===Object(y["s"])(this,"activator",!0)&&Object(A["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=p["a"].options.methods.genActivatorListeners.call(this);return t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")},t.keydown=t=>{t.keyCode===y["w"].esc&&(this.getActivator(t),this.runDelay("close"))},t},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent(()=>[this.genTransition()]),this.genActivator()])}}),C=Object(r["a"])(s,o,a,!1,null,null,null);e["default"]=C.exports;d()(C,{VCol:l["a"],VContainer:h["a"],VIcon:m["a"],VRow:u["a"],VTooltip:O})},"9d65":function(t,e,i){"use strict";var o=i("d9bd"),a=i("2b0e");e["a"]=a["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&Object(o["e"])("lazy",this)},methods:{showLazyContent(t){return this.hasContent&&t?t():[this.$createElement()]}}})},b848:function(t,e,i){"use strict";var o=i("58df");function a(t){const e=[];for(let i=0;i<t.length;i++){const o=t[i];o.isActive&&o.isDependent?e.push(o):e.push(...a(o.$children))}return e}e["a"]=Object(o["a"])().extend({name:"dependent",data(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive(t){if(t)return;const e=this.getOpenDependents();for(let i=0;i<e.length;i++)e[i].isActive=!1}},methods:{getOpenDependents(){return this.closeDependents?a(this.$children):[]},getOpenDependentElements(){const t=[],e=this.getOpenDependents();for(let i=0;i<e.length;i++)t.push(...e[i].getClickableDependentElements());return t},getClickableDependentElements(){const t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push(...this.getOpenDependentElements()),t}}})},f573:function(t,e,i){"use strict";var o=i("fe6c"),a=i("21be"),n=i("4ad4"),s=i("58df"),r=i("80d2");const c=Object(s["a"])(a["a"],o["a"],n["a"]);e["a"]=c.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,openOnClick:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:()=>({absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}),computed:{computedLeft(){const t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,o=Math.max(t.width,e.width);let a=0;if(a+=this.left?i-(o-t.width):i,this.offsetX){const e=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));a+=this.left?-e:t.width}return this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),a},computedTop(){const t=this.dimensions.activator,e=this.dimensions.content;let i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator}},watch:{disabled(t){t&&this.callDeactivate()},isActive(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount(){this.hasWindow="undefined"!==typeof window},methods:{absolutePosition(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate(){},calcLeft(t){return Object(r["g"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop(){return Object(r["g"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow(t,e){const i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow(t){const e=this.getInnerHeight(),i=this.pageYOffset+e,o=this.dimensions.activator,a=this.dimensions.content.height,n=t+a,s=i<n;return s&&this.offsetOverflow&&o.top>a?t=this.pageYOffset+(o.top-a):s&&!this.allowOverflow?t=i-a-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate(){this.hasWindow&&this.activate()},callDeactivate(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed(){if(!1!==this.attach)return;let t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1},deactivate(){},genActivatorListeners(){const t=n["a"].options.methods.genActivatorListeners.call(this),e=t.click;return t.click=t=>{this.openOnClick&&e&&e(t),this.absoluteX=t.clientX,this.absoluteY=t.clientY},t},getInnerHeight(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect(t){const e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure(t){if(!t||!this.hasWindow)return null;const e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){const i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek(t){requestAnimationFrame(()=>{const e=this.$refs.content;e&&"none"===e.style.display?(e.style.display="inline-block",t(),e.style.display="none"):t()})},startTransition(){return new Promise(t=>requestAnimationFrame(()=>{this.isContentActive=this.hasJustFocused=this.isActive,t()}))},updateDimensions(){this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;const t={activator:{...this.dimensions.activator},content:{...this.dimensions.content}};if(!this.hasActivator||this.absolute)t.activator=this.absolutePosition();else{const e=this.getActivator();if(!e)return;t.activator=this.measure(e),t.activator.offsetLeft=e.offsetLeft,!1!==this.attach?t.activator.offsetTop=e.offsetTop:t.activator.offsetTop=0}this.sneakPeek(()=>{this.$refs.content&&(t.content=this.measure(this.$refs.content)),this.dimensions=t})}}})}}]);
//# sourceMappingURL=views-Icons.df9b890a.js.map