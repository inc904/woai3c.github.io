(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07e4528c"],{2532:function(e,t,n){"use strict";var o=n("23e7"),i=n("5a34"),a=n("1d80"),r=n("ab13");o({target:"String",proto:!0,forced:!r("includes")},{includes:function(e){return!!~String(a(this)).indexOf(i(e),arguments.length>1?arguments[1]:void 0)}})},"2c7d":function(e,t,n){"use strict";n.d(t,"a",(function(){return C})),n.d(t,"b",(function(){return w}));var o=n("4360"),i=n("986e"),a=17,r=86,c=67,d=88,s=89,u=90,l=71,p=66,m=83,f=80,h=68,y=69,v=!1,C=[66,67,68,69,71,80,83,86,88,89,90];function w(){window.onkeydown=function(e){e.keyCode==a?v=!0:v&&e.keyCode==c?o["a"].commit("copy"):v&&e.keyCode==r?(o["a"].commit("paste"),o["a"].commit("recordSnapshot")):v&&e.keyCode==d?o["a"].commit("cut"):v&&e.keyCode==s?(o["a"].commit("redo"),e.preventDefault()):v&&e.keyCode==u?o["a"].commit("undo"):v&&e.keyCode==l&&o["a"].state.areaData.components.length?(o["a"].commit("compose"),o["a"].commit("recordSnapshot"),e.preventDefault()):v&&e.keyCode==p&&o["a"].state.curComponent&&"Group"==o["a"].state.curComponent.component?(o["a"].commit("decompose"),o["a"].commit("recordSnapshot"),e.preventDefault()):v&&e.keyCode==m?(i["a"].$emit("save"),e.preventDefault()):v&&e.keyCode==f?(i["a"].$emit("preview"),e.preventDefault()):v&&e.keyCode==h?(o["a"].commit("deleteComponent"),o["a"].commit("recordSnapshot"),e.preventDefault()):v&&e.keyCode==y&&(i["a"].$emit("clearCanvas"),e.preventDefault())},window.onkeyup=function(e){e.keyCode==a&&(v=!1)}}},"44e7":function(e,t,n){var o=n("861d"),i=n("c6b6"),a=n("b622"),r=a("match");e.exports=function(e){var t;return o(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==i(e))}},"5a34":function(e,t,n){var o=n("44e7");e.exports=function(e){if(o(e))throw TypeError("The method doesn't accept regular expressions");return e}},"6c8f":function(e,t,n){},ab13:function(e,t,n){var o=n("b622"),i=o("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,"/./"[e](t)}catch(o){}}return!1}},b6a9:function(e,t,n){"use strict";n("6c8f")},caad:function(e,t,n){"use strict";var o=n("23e7"),i=n("4d64").includes,a=n("44d2"),r=n("ae40"),c=r("indexOf",{ACCESSORS:!0,1:0});o({target:"Array",proto:!0,forced:!c},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("includes")},d02c:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return"edit"==e.editMode?n("div",{staticClass:"v-text",on:{keydown:e.handleKeydown,keyup:e.handleKeyup}},[n("div",{ref:"text",class:{canEdit:e.canEdit},style:{verticalAlign:e.element.style.verticalAlign},attrs:{contenteditable:e.canEdit,tabindex:e.element.id},domProps:{innerHTML:e._s(e.element.propValue)},on:{dblclick:e.setEdit,paste:e.clearStyle,mousedown:e.handleMousedown,blur:e.handleBlur,input:e.handleInput}})]):n("div",{staticClass:"v-text"},[n("div",{style:{verticalAlign:e.element.style.verticalAlign},domProps:{innerHTML:e._s(e.element.propValue)}})])},i=[],a=(n("caad"),n("2532"),n("5530")),r=n("2f62"),c=n("2c7d"),d={props:{propValue:{type:String,require:!0},element:{type:Object}},data:function(){return{canEdit:!1,ctrlKey:17,isCtrlDown:!1}},computed:Object(a["a"])({},Object(r["b"])(["editMode"])),methods:{handleInput:function(e){this.$emit("input",this.element,e.target.innerHTML)},handleKeydown:function(e){e.keyCode==this.ctrlKey?this.isCtrlDown=!0:this.isCtrlDown&&this.canEdit&&c["a"].includes(e.keyCode)&&e.stopPropagation()},handleKeyup:function(e){e.keyCode==this.ctrlKey&&(this.isCtrlDown=!1)},handleMousedown:function(e){this.canEdit&&e.stopPropagation()},clearStyle:function(e){e.preventDefault();var t=e.clipboardData,n=t.getData("text/plain")||"";""!==n&&document.execCommand("insertText",!1,n),this.$emit("input",this.element,e.target.innerHTML)},handleBlur:function(e){this.element.propValue=e.target.innerHTML||"&nbsp;",this.canEdit=!1},setEdit:function(){this.canEdit=!0,this.selectText(this.$refs.text)},selectText:function(e){var t=window.getSelection(),n=document.createRange();n.selectNodeContents(e),t.removeAllRanges(),t.addRange(n)}}},s=d,u=(n("b6a9"),n("2877")),l=Object(u["a"])(s,o,i,!1,null,"16a92c72",null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-07e4528c.e664b958.js.map