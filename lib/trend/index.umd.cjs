(function(e,o){typeof exports=="object"&&typeof module<"u"?module.exports=o(require("vue")):typeof define=="function"&&define.amd?define(["vue"],o):(e=typeof globalThis<"u"?globalThis:e||self,e.index=o(e.Vue))})(this,function(e){"use strict";const o=t=>t.replace(/(A-Z)g/,"-$1").toLocaleLowerCase(),d={class:"trend"},i={key:1},s={class:"icon"},a=((t,n)=>{const l=t.__vccOpts||t;for(const[r,c]of n)l[r]=c;return l})(e.defineComponent({__name:"index",props:{type:{type:String,default:"up"},upIcon:{type:String,default:"ArrowUp"},downIcon:{type:String,default:"ArrowDown"},text:{type:String,default:"文字"},reverseColor:{type:Boolean,default:!1},upIconColor:{type:String,default:"#f5222d"},downIconColor:{type:String,default:"#52c41a"},upTextColor:{type:String,default:"rgb(0,0,0)"},downTextColor:{type:String,default:"rgb(0,0,0)"}},setup(t){let n=t,l=e.useSlots(),r=e.computed(()=>n.type==="up"?n.upTextColor:n.downTextColor);return(c,u)=>(e.openBlock(),e.createElementBlock("div",d,[e.createElementVNode("div",{class:"text",style:e.normalizeStyle({color:e.unref(r)})},[e.unref(l).default?e.renderSlot(c.$slots,"default",{key:0},void 0,!0):(e.openBlock(),e.createElementBlock("div",i,e.toDisplayString(t.text),1))],4),e.createElementVNode("div",s,[t.type==="up"?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(`el-icon-${e.unref(o)(t.upIcon)}`),{key:0,style:e.normalizeStyle({color:t.reverseColor?"#52c41a":t.upIconColor})},null,8,["style"])):(e.openBlock(),e.createBlock(e.resolveDynamicComponent(`el-icon-${e.unref(o)(t.downIcon)}`),{key:1,style:e.normalizeStyle({color:t.reverseColor?"#f5222d":t.downIconColor})},null,8,["style"]))])]))}}),[["__scopeId","data-v-25d8d543"]]);return{install(t){t.component("sun-trend",a)}}});