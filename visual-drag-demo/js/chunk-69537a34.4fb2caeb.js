(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69537a34"],{"39df":function(e,l,t){"use strict";var n=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("el-form",e._l(e.styleKeys,(function(l,n){var o=l.key,a=l.label;return t("el-form-item",{key:n,attrs:{label:a}},[e.isIncludesColor(o)?t("el-color-picker",{attrs:{"show-alpha":""},model:{value:e.curComponent.style[o],callback:function(l){e.$set(e.curComponent.style,o,l)},expression:"curComponent.style[key]"}}):e.selectKey.includes(o)?t("el-select",{model:{value:e.curComponent.style[o],callback:function(l){e.$set(e.curComponent.style,o,l)},expression:"curComponent.style[key]"}},e._l(e.optionMap[o],(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):t("el-input",{attrs:{type:"number"},model:{value:e.curComponent.style[o],callback:function(l){e.$set(e.curComponent.style,o,e._n(l))},expression:"curComponent.style[key]"}})],1)})),1)},o=[],a=(t("b64b"),t("4de4"),t("d3b7"),t("caad"),t("2532"),[{key:"left",label:"x 坐标"},{key:"top",label:"y 坐标"},{key:"rotate",label:"旋转角度"},{key:"width",label:"宽"},{key:"height",label:"高"},{key:"color",label:"颜色"},{key:"backgroundColor",label:"背景色"},{key:"borderWidth",label:"边框宽度"},{key:"borderStyle",label:"边框风格"},{key:"borderColor",label:"边框颜色"},{key:"borderRadius",label:"边框半径"},{key:"fontSize",label:"字体大小"},{key:"fontWeight",label:"字体粗细"},{key:"lineHeight",label:"行高"},{key:"letterSpacing",label:"字间距"},{key:"textAlign",label:"左右对齐"},{key:"verticalAlign",label:"上下对齐"},{key:"opacity",label:"透明度"}]),r=[{label:"左对齐",value:"left"},{label:"居中",value:"center"},{label:"右对齐",value:"right"}],s=[{label:"实线",value:"solid"},{label:"虚线",value:"dashed"}],u=[{label:"上对齐",value:"top"},{label:"居中对齐",value:"middle"},{label:"下对齐",value:"bottom"}],i=["textAlign","borderStyle","verticalAlign"],c={textAlign:r,borderStyle:s,verticalAlign:u},b={data:function(){return{optionMap:c,styleData:a,textAlignOptions:r,borderStyleOptions:s,verticalAlignOptions:u,selectKey:i}},computed:{styleKeys:function(){if(this.curComponent){var e=Object.keys(this.curComponent.style);return this.styleData.filter((function(l){return e.includes(l.key)}))}return[]},curComponent:function(){return this.$store.state.curComponent}},methods:{isIncludesColor:function(e){return e.toLowerCase().includes("color")}}},y=b,p=t("2877"),d=Object(p["a"])(y,n,o,!1,null,null,null);l["a"]=d.exports},"714e":function(e,l,t){"use strict";t.r(l);var n=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"attr-list"},[t("CommonAttr")],1)},o=[],a=t("39df"),r={components:{CommonAttr:a["a"]}},s=r,u=t("2877"),i=Object(u["a"])(s,n,o,!1,null,null,null);l["default"]=i.exports}}]);
//# sourceMappingURL=chunk-69537a34.4fb2caeb.js.map