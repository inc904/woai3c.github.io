(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b39ef34c"],{"39df":function(e,t,l){"use strict";var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticStyle:{"margin-bottom":"18px"}},[l("el-collapse",{attrs:{accordion:""},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[l("el-collapse-item",{attrs:{title:"通用样式",name:"common"}},[l("el-form",{staticStyle:{padding:"10px","padding-top":"0"}},e._l(e.styleKeys,(function(t,o){var n=t.key,a=t.label;return l("el-form-item",{key:o,attrs:{label:a}},[e.isIncludesColor(n)?l("el-color-picker",{attrs:{"show-alpha":""},model:{value:e.curComponent.style[n],callback:function(t){e.$set(e.curComponent.style,n,t)},expression:"curComponent.style[key]"}}):e.selectKey.includes(n)?l("el-select",{model:{value:e.curComponent.style[n],callback:function(t){e.$set(e.curComponent.style,n,t)},expression:"curComponent.style[key]"}},e._l(e.optionMap[n],(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):l("el-input",{attrs:{type:"number"},model:{value:e.curComponent.style[n],callback:function(t){e.$set(e.curComponent.style,n,e._n(t))},expression:"curComponent.style[key]"}})],1)})),1)],1)],1)],1)},n=[],a=(l("b64b"),l("4de4"),l("d3b7"),l("caad"),l("2532"),[{key:"left",label:"x 坐标"},{key:"top",label:"y 坐标"},{key:"rotate",label:"旋转角度"},{key:"width",label:"宽"},{key:"height",label:"高"},{key:"color",label:"颜色"},{key:"backgroundColor",label:"背景色"},{key:"borderWidth",label:"边框宽度"},{key:"borderStyle",label:"边框风格"},{key:"borderColor",label:"边框颜色"},{key:"borderRadius",label:"边框半径"},{key:"fontSize",label:"字体大小"},{key:"fontWeight",label:"字体粗细"},{key:"lineHeight",label:"行高"},{key:"letterSpacing",label:"字间距"},{key:"textAlign",label:"左右对齐"},{key:"verticalAlign",label:"上下对齐"},{key:"opacity",label:"不透明度"}]),r=[{label:"左对齐",value:"left"},{label:"居中",value:"center"},{label:"右对齐",value:"right"}],c=[{label:"实线",value:"solid"},{label:"虚线",value:"dashed"}],i=[{label:"上对齐",value:"top"},{label:"居中对齐",value:"middle"},{label:"下对齐",value:"bottom"}],s=["textAlign","borderStyle","verticalAlign"],u={textAlign:r,borderStyle:c,verticalAlign:i},p={data:function(){return{optionMap:u,styleData:a,textAlignOptions:r,borderStyleOptions:c,verticalAlignOptions:i,selectKey:s,activeName:"common"}},computed:{styleKeys:function(){if(this.curComponent){var e=Object.keys(this.curComponent.style);return this.styleData.filter((function(t){return e.includes(t.key)}))}return[]},curComponent:function(){return this.$store.state.curComponent}},methods:{isIncludesColor:function(e){return e.toLowerCase().includes("color")}}},b=p,m=l("2877"),y=Object(m["a"])(b,o,n,!1,null,null,null);t["a"]=y.exports},"93dc":function(e,t,l){"use strict";l.r(t);var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"attr-list"},[l("CommonAttr"),l("el-form",[l("el-form-item",{attrs:{label:"内容"}},[l("el-input",{attrs:{type:"textarea"},model:{value:e.curComponent.propValue,callback:function(t){e.$set(e.curComponent,"propValue",t)},expression:"curComponent.propValue"}})],1)],1)],1)},n=[],a=l("39df"),r={components:{CommonAttr:a["a"]},computed:{curComponent:function(){return this.$store.state.curComponent}}},c=r,i=l("2877"),s=Object(i["a"])(c,o,n,!1,null,null,null);t["default"]=s.exports}}]);
//# sourceMappingURL=chunk-b39ef34c.5bb1c50d.js.map