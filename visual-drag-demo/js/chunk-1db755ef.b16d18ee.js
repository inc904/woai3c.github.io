(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1db755ef"],{"39df":function(e,l,t){"use strict";var o=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticStyle:{"margin-bottom":"18px"}},[t("el-collapse",{attrs:{accordion:""},model:{value:e.activeName,callback:function(l){e.activeName=l},expression:"activeName"}},[t("el-collapse-item",{attrs:{title:"通用样式",name:"common"}},[t("el-form",{staticStyle:{padding:"10px","padding-top":"0"}},e._l(e.styleKeys,(function(l,o){var n=l.key,a=l.label;return t("el-form-item",{key:o,attrs:{label:a}},[e.isIncludesColor(n)?t("el-color-picker",{attrs:{"show-alpha":""},model:{value:e.curComponent.style[n],callback:function(l){e.$set(e.curComponent.style,n,l)},expression:"curComponent.style[key]"}}):e.selectKey.includes(n)?t("el-select",{model:{value:e.curComponent.style[n],callback:function(l){e.$set(e.curComponent.style,n,l)},expression:"curComponent.style[key]"}},e._l(e.optionMap[n],(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):t("el-input",{attrs:{type:"number"},model:{value:e.curComponent.style[n],callback:function(l){e.$set(e.curComponent.style,n,e._n(l))},expression:"curComponent.style[key]"}})],1)})),1)],1)],1)],1)},n=[],a=(t("b64b"),t("4de4"),t("d3b7"),t("caad"),t("2532"),[{key:"left",label:"x 坐标"},{key:"top",label:"y 坐标"},{key:"rotate",label:"旋转角度"},{key:"width",label:"宽"},{key:"height",label:"高"},{key:"color",label:"颜色"},{key:"backgroundColor",label:"背景色"},{key:"borderWidth",label:"边框宽度"},{key:"borderStyle",label:"边框风格"},{key:"borderColor",label:"边框颜色"},{key:"borderRadius",label:"边框半径"},{key:"fontSize",label:"字体大小"},{key:"fontWeight",label:"字体粗细"},{key:"lineHeight",label:"行高"},{key:"letterSpacing",label:"字间距"},{key:"textAlign",label:"左右对齐"},{key:"verticalAlign",label:"上下对齐"},{key:"opacity",label:"不透明度"}]),r=[{label:"左对齐",value:"left"},{label:"居中",value:"center"},{label:"右对齐",value:"right"}],c=[{label:"实线",value:"solid"},{label:"虚线",value:"dashed"}],i=[{label:"上对齐",value:"top"},{label:"居中对齐",value:"middle"},{label:"下对齐",value:"bottom"}],u=["textAlign","borderStyle","verticalAlign"],s={textAlign:r,borderStyle:c,verticalAlign:i},p={data:function(){return{optionMap:s,styleData:a,textAlignOptions:r,borderStyleOptions:c,verticalAlignOptions:i,selectKey:u,activeName:"common"}},computed:{styleKeys:function(){if(this.curComponent){var e=Object.keys(this.curComponent.style);return this.styleData.filter((function(l){return e.includes(l.key)}))}return[]},curComponent:function(){return this.$store.state.curComponent}},methods:{isIncludesColor:function(e){return e.toLowerCase().includes("color")}}},b=p,m=t("2877"),y=Object(m["a"])(b,o,n,!1,null,null,null);l["a"]=y.exports},"4ea2":function(e,l,t){"use strict";t.r(l);var o=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"attr-list"},[t("CommonAttr"),t("el-form",[t("el-form-item",{attrs:{label:"镜像翻转"}},[t("div",{staticStyle:{clear:"both"}},[t("el-checkbox",{attrs:{label:"horizontal"},model:{value:e.curComponent.propValue.flip.horizontal,callback:function(l){e.$set(e.curComponent.propValue.flip,"horizontal",l)},expression:"curComponent.propValue.flip.horizontal"}},[e._v("水平翻转")]),t("el-checkbox",{attrs:{label:"vertical"},model:{value:e.curComponent.propValue.flip.vertical,callback:function(l){e.$set(e.curComponent.propValue.flip,"vertical",l)},expression:"curComponent.propValue.flip.vertical"}},[e._v("垂直翻转")])],1)])],1)],1)},n=[],a=t("39df"),r={components:{CommonAttr:a["a"]},computed:{curComponent:function(){return this.$store.state.curComponent}}},c=r,i=t("2877"),u=Object(i["a"])(c,o,n,!1,null,null,null);l["default"]=u.exports}}]);
//# sourceMappingURL=chunk-1db755ef.b16d18ee.js.map