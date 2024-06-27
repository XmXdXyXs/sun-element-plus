(function(e,a){typeof exports=="object"&&typeof module<"u"?module.exports=a(require("vue")):typeof define=="function"&&define.amd?define(["vue"],a):(e=typeof globalThis<"u"?globalThis:e||self,e.index=a(e.Vue))})(this,function(e){"use strict";const a={style:{display:"flex"}},f={style:{"margin-right":"20px"}},p=e.defineComponent({__name:"index",props:{startPlaceholder:{type:String,default:"请选择开始时间"},endPlaceholder:{type:String,default:"请选择结束时间"},startTimeStart:{type:String,default:"08:00"},startStep:{type:String,default:"00:30"},startTimeEnd:{type:String,default:"24:00"},endTimeStart:{type:String,default:"08:00"},endStep:{type:String,default:"00:30"},endTimeEnd:{type:String,default:"24:00"}},emits:["startChange","endChange"],setup(t,{emit:u}){let o=u,d=e.ref(""),l=e.ref(""),s=e.ref(!0);return e.watch(()=>d.value,n=>{n===""?(l.value="",s.value=!0):(s.value=!1,o("startChange",n))}),e.watch(()=>l.value,n=>{n!==""&&o("endChange",{startTime:d.value,endTime:n})}),(n,r)=>{const m=e.resolveComponent("el-time-select");return e.openBlock(),e.createElementBlock("div",a,[e.createElementVNode("div",f,[e.createVNode(m,e.mergeProps({modelValue:e.unref(d),"onUpdate:modelValue":r[0]||(r[0]=i=>e.isRef(d)?d.value=i:d=i),placeholder:t.startPlaceholder,start:t.startTimeStart,step:t.startStep,end:t.startTimeEnd},n.$attrs.startOptions),null,16,["modelValue","placeholder","start","step","end"])]),e.createElementVNode("div",null,[e.createVNode(m,e.mergeProps({modelValue:e.unref(l),"onUpdate:modelValue":r[1]||(r[1]=i=>e.isRef(l)?l.value=i:l=i),"min-time":e.unref(d),placeholder:t.endPlaceholder,start:t.endTimeStart,step:t.endStep,end:t.endTimeEnd,disabled:e.unref(s)},n.$attrs.endOptions),null,16,["modelValue","min-time","placeholder","start","step","end","disabled"])])])}}});return{install(t){t.component("sun-choose-time",p)}}});
