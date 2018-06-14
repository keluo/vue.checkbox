/*!
 * vue.checkbox.js
 * (c) 2017-2018 yuw
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vue.checkbox"]=t():e["vue.checkbox"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=n.n(o),a=function(e){e.component(r.a.name,r.a)};r.a.install=a,"undefined"!=typeof window&&window.Vue&&a(window.Vue),t.default=r.a},function(e,t,n){var o=n(3)(n(4),n(5),!1,function(e){n(2)},"data-v-7064dcb8",null);e.exports=o.exports},function(e,t){},function(e,t){e.exports=function(e,t,n,o,r,a){var u,c=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(u=e,c=e.default);var l,s="function"==typeof c?c.options:c;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns,s._compiled=!0),n&&(s.functional=!0),r&&(s._scopeId=r),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},s._ssrRegister=l):o&&(l=o),l){var d=s.functional,f=d?s.render:s.beforeCreate;d?(s._injectStyles=l,s.render=function(e,t){return l.call(t),f(e,t)}):s.beforeCreate=f?[].concat(f,l):[l]}return{esModule:u,exports:c,options:s}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vue-checkbox",props:{label:{default:function(){return""},type:String},disabled:{default:function(){return!1},type:Boolean},value:{default:function(){return!1},type:Boolean}},data:function(){return{realValue:this.value}},mounted:function(){},computed:{},watch:{realValue:function(e){this.$emit("input",e),this.$emit("click",e)}},methods:{}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"vue-checkbox-wrap",class:e.disabled?"vue-checkbox-disabled":""},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.realValue,expression:"realValue"}],staticClass:"vue-checkbox-input",attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:Array.isArray(e.realValue)?e._i(e.realValue,null)>-1:e.realValue},on:{change:function(t){var n=e.realValue,o=t.target,r=!!o.checked;if(Array.isArray(n)){var a=e._i(n,null);o.checked?a<0&&(e.realValue=n.concat([null])):a>-1&&(e.realValue=n.slice(0,a).concat(n.slice(a+1)))}else e.realValue=r}}}),n("span",{staticClass:"vue-checkbox-inner"}),e.label?n("span",{staticClass:"vue-checkbox-txt",domProps:{textContent:e._s(e.label)}}):e._e()])},staticRenderFns:[]}}])});