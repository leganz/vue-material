/*!
* Vue Material v0.7.3
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=470)})({0:function(e,t){e.exports=function(e,t,n,r,i){var o,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(o=e,s=e.default);var a="function"==typeof s?s.options:s;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),r&&(a._scopeId=r);var d;if(i?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},a._ssrRegister=d):n&&(d=n),d){var c=a.functional,l=c?a.render:a.beforeCreate;c?a.render=function(e,t){return d.call(t),l(e,t)}:a.beforeCreate=l?[].concat(l,d):[d]}return{esModule:o,exports:s,options:a}}},1:function(e,t,n){"use strict";function r(e){if(!e)return null;var t=e.mdTheme;return t||"md-theme"!==e.$options._componentTag||(t=e.mdName),t||r(e.$parent)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return r(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(e){this.$material.useTheme(e)}},beforeMount:function(){var e=this.mdTheme;this.$material.useTheme(e?e:"default")}},e.exports=t.default},104:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e){e.component("md-speed-dial",s.default),e.material.styles.push(a.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var o=n(349),s=r(o),u=n(286),a=r(u);e.exports=t.default},180:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=r(i);t.default={name:"md-speed-dial",props:{mdOpen:{type:String,default:"click"},mdMode:{type:String,default:"fling"},mdDirection:{type:String,default:"top"}},mixins:[o.default],data:function(){return{fabTrigger:null,active:!1}},computed:{classes:function e(){var e={"md-active":this.active};return e["md-mode-"+this.mdMode]=!0,e["md-direction-"+this.mdDirection]=!0,e}},methods:{closeSpeedDial:function(e){!e.target!==this.fabTrigger&&this.fabTrigger.contains(e.target)||(this.active=!1,document.body.removeEventListener("click",this.closeSpeedDial))},toggleSpeedDial:function(){var e=this;this.active=!this.active,window.setTimeout((function(){document.body.addEventListener("click",e.closeSpeedDial)}),50)}},mounted:function(){var e=this;this.$nextTick((function(){e.fabTrigger=e.$el.querySelector("[md-fab-trigger]"),"click"===e.mdOpen?e.fabTrigger.addEventListener("click",e.toggleSpeedDial):(e.$el.addEventListener("mouseenter",e.toggleSpeedDial),e.$el.addEventListener("mouseleave",e.closeSpeedDial))}))},beforeDestroy:function(){this.fabTrigger.removeEventListener("click",this.toggleSpeedDial),document.body.removeEventListener("click",this.closeSpeedDial)}},e.exports=t.default},247:function(e,t){},286:function(e,t){e.exports=""},349:function(e,t,n){function r(e){n(247)}var i=n(0)(n(180),n(412),r,null,null);e.exports=i.exports},412:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-speed-dial",class:[e.themeClass,e.classes]},[e._t("default")],2)},staticRenderFns:[]}},470:function(e,t,n){e.exports=n(104)}})}));