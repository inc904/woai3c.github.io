"use strict";(self["webpackChunkvisual_drag_demo"]=self["webpackChunkvisual_drag_demo"]||[]).push([[213],{4213:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var o=function(){var t=this,e=t._self._c;return"edit"==t.editMode?e("div",{staticClass:"v-text",on:{keydown:t.handleKeydown,keyup:t.handleKeyup}},[e("div",{ref:"text",class:{"can-edit":t.canEdit},style:{verticalAlign:t.element.style.verticalAlign},attrs:{contenteditable:t.canEdit,tabindex:"0"},domProps:{innerHTML:t._s(t.element.propValue)},on:{dblclick:t.setEdit,paste:t.clearStyle,mousedown:t.handleMousedown,blur:t.handleBlur,input:t.handleInput}})]):e("div",{staticClass:"v-text preview"},[e("div",{style:{verticalAlign:t.element.style.verticalAlign},domProps:{innerHTML:t._s(t.element.propValue)}})])},i=[],r=(n(6699),n(629)),s=n(9657),a=n(4471),c=n(2689),l={extends:c.Z,props:{propValue:{type:String,required:!0,default:""},request:{type:Object,default:()=>{}},element:{type:Object,default:()=>{}},linkage:{type:Object,default:()=>{}}},data(){return{canEdit:!1,ctrlKey:17,isCtrlDown:!1,cancelRequest:null}},computed:{...(0,r.rn)(["editMode"])},created(){this.request&&(this.cancelRequest=(0,a.ZP)(this.request,this.element,"propValue","string"))},beforeDestroy(){this.request&&this.cancelRequest()},methods:{handleInput(t){this.$emit("input",this.element,t.target.innerHTML)},handleKeydown(t){this.canEdit&&t.stopPropagation(),t.keyCode==this.ctrlKey?this.isCtrlDown=!0:(this.isCtrlDown&&this.canEdit&&s.k.includes(t.keyCode)||46==t.keyCode)&&t.stopPropagation()},handleKeyup(t){this.canEdit&&t.stopPropagation(),t.keyCode==this.ctrlKey&&(this.isCtrlDown=!1)},handleMousedown(t){this.canEdit&&t.stopPropagation()},clearStyle(t){t.preventDefault();const e=t.clipboardData,n=e.getData("text/plain")||"";""!==n&&document.execCommand("insertText",!1,n),this.$emit("input",this.element,t.target.innerHTML)},handleBlur(t){this.element.propValue=t.target.innerHTML||"&nbsp;";const e=t.target.innerHTML;""!==e?this.element.propValue=t.target.innerHTML:(this.element.propValue="",this.$nextTick((()=>{this.element.propValue="&nbsp;"}))),this.canEdit=!1},setEdit(){this.element.isLock||(this.canEdit=!0,this.selectText(this.$refs.text))},selectText(t){const e=window.getSelection(),n=document.createRange();n.selectNodeContents(t),e.removeAllRanges(),e.addRange(n)}}},u=l,d=n(1001),p=(0,d.Z)(u,o,i,!1,null,"458f462c",null),h=p.exports},2689:function(t,e,n){n.d(e,{Z:function(){return u}});var o,i,r=n(4003),s={props:{linkage:{type:Object,default:()=>{}},element:{type:Object,default:()=>{}}},created(){this.linkage?.data?.length&&(r.Z.$on("v-click",this.onClick),r.Z.$on("v-hover",this.onHover))},mounted(){const{data:t,duration:e}=this.linkage||{};t?.length&&(this.$el.style.transition=`all ${e}s`)},beforeDestroy(){this.linkage?.data?.length&&(r.Z.$off("v-click",this.onClick),r.Z.$off("v-hover",this.onHover))},methods:{changeStyle(t=[]){t.forEach((t=>{t.style.forEach((t=>{t.key&&(this.element.style[t.key]=t.value)}))}))},onClick(t){const e=this.linkage.data.filter((e=>e.id===t&&"v-click"===e.event));this.changeStyle(e)},onHover(t){const e=this.linkage.data.filter((e=>e.id===t&&"v-hover"===e.event));this.changeStyle(e)}}},a=s,c=n(1001),l=(0,c.Z)(a,o,i,!1,null,null,null),u=l.exports},4471:function(t,e,n){n.d(e,{Ax:function(){return c},ZP:function(){return l},_q:function(){return i}});var o=n(4720);const i=/(https?):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/;function r(t){return new Promise(((e,n)=>{const o=new XMLHttpRequest;o.timeout=6e3;let i=c(t.url);"GET"===t.method&&(i+=`${s(t.data)}`),o.open(t.method,i),o.ontimeout=n,o.onerror=n,o.onload=t=>{e(t.target.response)},o.send(JSON.stringify(a(t.data,t.paramType)))}))}function s(t){let e="";return t.forEach((t=>{t[0]&&(e+=`&${t[0]}=${t[1]}`)})),e?"?"+e:""}function a(t,e){if(!t)return"";if("array"===e)return t;const n={};return t.forEach((t=>{t[0]&&(n[t[0]]=t[1])})),n}function c(t){return t.startsWith("http")?t:"https://"+t}function l(t,e,n,s="object"){let a,l=0;const u=t?.url;return(u&&!/^\d+$/.test(u)||i.test(c(u)))&&(t.series?a=setInterval((()=>{0!=t.requestCount&&t.requestCount<=l?clearInterval(a):(l++,r(t,s).then((t=>{e[n]="object"===s||"array"===s?JSON.parse(t):t})).catch((t=>o.Message.error(t?.message||t))))}),t.time):r(t,s).then((t=>{e[n]="object"===s||"array"===s?JSON.parse(t):t})).catch((t=>o.Message.error(t?.message||t)))),function(){clearInterval(a)}}},9657:function(t,e,n){n.d(e,{Y:function(){return S},k:function(){return C}});var o=n(6763),i=n(4003);const r=17,s=91,a=86,c=67,l=88,u=89,d=90,p=71,h=66,m=76,f=85,y=83,v=80,g=68,k=46,Z=69,C=[66,67,68,69,71,76,80,83,85,86,88,89,90],w={[a]:M,[u]:q,[d]:D,[y]:_,[v]:P,[Z]:A},b={...w,[f]:V},E={...w,[c]:x,[l]:T,[p]:L,[h]:H,[g]:j,[k]:j,[m]:O};let $=!1;function S(){window.onkeydown=t=>{if(!o.Z.state.isInEdiotr)return;const{curComponent:e}=o.Z.state,{keyCode:n}=t;n===r||n===s?$=!0:n==k&&e?(o.Z.commit("deleteComponent"),o.Z.commit("recordSnapshot")):$&&(!E[n]||e&&e.isLock?b[n]&&e&&e.isLock&&(t.preventDefault(),b[n]()):(t.preventDefault(),E[n]()))},window.onkeyup=t=>{t.keyCode!==r&&t.keyCode!==s||($=!1)},window.onmousedown=()=>{o.Z.commit("setInEditorStatus",!1)}}function x(){o.Z.commit("copy")}function M(){o.Z.commit("paste"),o.Z.commit("recordSnapshot")}function T(){o.Z.commit("cut")}function q(){o.Z.commit("redo")}function D(){o.Z.commit("undo")}function L(){o.Z.state.areaData.components.length&&(o.Z.commit("compose"),o.Z.commit("recordSnapshot"))}function H(){const t=o.Z.state.curComponent;t&&!t.isLock&&"Group"==t.component&&(o.Z.commit("decompose"),o.Z.commit("recordSnapshot"))}function _(){i.Z.$emit("save")}function P(){i.Z.$emit("preview")}function j(){o.Z.state.curComponent&&(o.Z.commit("deleteComponent"),o.Z.commit("recordSnapshot"))}function A(){i.Z.$emit("clearCanvas")}function O(){o.Z.commit("lock")}function V(){o.Z.commit("unlock")}}}]);
//# sourceMappingURL=213.0c4ba1ad.js.map