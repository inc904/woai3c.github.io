(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31ccd7ba"],{1342:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"attr-list"},[r("CommonAttr"),r("el-form",[r("el-form-item",{attrs:{label:"内容"}},[r("el-input",{attrs:{type:"textarea",rows:3},model:{value:e.curComponent.propValue,callback:function(t){e.$set(e.curComponent,"propValue",t)},expression:"curComponent.propValue"}})],1)],1)],1)},a=[],l=r("39df"),o={components:{CommonAttr:l["a"]},computed:{curComponent:function(){return this.$store.state.curComponent}}},u=o,s=r("2877"),i=Object(s["a"])(u,n,a,!1,null,null,null);t["default"]=i.exports},"39df":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"v-common-attr",staticStyle:{"margin-bottom":"18px"}},[r("el-collapse",{attrs:{accordion:""},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[r("el-collapse-item",{attrs:{title:"通用样式",name:"style"}},[r("el-form",{staticStyle:{padding:"10px","padding-top":"0"}},e._l(e.styleKeys,(function(t,n){var a=t.key,l=t.label;return r("el-form-item",{key:n,attrs:{label:l}},[e.isIncludesColor(a)?r("el-color-picker",{attrs:{"show-alpha":""},model:{value:e.curComponent.style[a],callback:function(t){e.$set(e.curComponent.style,a,t)},expression:"curComponent.style[key]"}}):e.selectKey.includes(a)?r("el-select",{model:{value:e.curComponent.style[a],callback:function(t){e.$set(e.curComponent.style,a,t)},expression:"curComponent.style[key]"}},e._l(e.optionMap[a],(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):r("el-input",{attrs:{type:"number"},model:{value:e.curComponent.style[a],callback:function(t){e.$set(e.curComponent.style,a,e._n(t))},expression:"curComponent.style[key]"}})],1)})),1)],1),e.curComponent.request?r("Request"):e._e()],1)],1)},a=[],l=(r("b64b"),r("4de4"),r("d3b7"),r("caad"),r("2532"),[{key:"left",label:"x 坐标"},{key:"top",label:"y 坐标"},{key:"rotate",label:"旋转角度"},{key:"width",label:"宽"},{key:"height",label:"高"},{key:"color",label:"颜色"},{key:"backgroundColor",label:"背景色"},{key:"borderWidth",label:"边框宽度"},{key:"borderStyle",label:"边框风格"},{key:"borderColor",label:"边框颜色"},{key:"borderRadius",label:"边框半径"},{key:"fontSize",label:"字体大小"},{key:"fontWeight",label:"字体粗细"},{key:"lineHeight",label:"行高"},{key:"letterSpacing",label:"字间距"},{key:"textAlign",label:"左右对齐"},{key:"verticalAlign",label:"上下对齐"},{key:"opacity",label:"不透明度"}]),o=[{label:"左对齐",value:"left"},{label:"居中",value:"center"},{label:"右对齐",value:"right"}],u=[{label:"实线",value:"solid"},{label:"虚线",value:"dashed"}],s=[{label:"上对齐",value:"top"},{label:"居中对齐",value:"middle"},{label:"下对齐",value:"bottom"}],i=["textAlign","borderStyle","verticalAlign"],c={textAlign:o,borderStyle:u,verticalAlign:s},d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-collapse-item",{staticClass:"request-container",attrs:{title:"数据来源",name:"data"}},[r("el-form",{staticStyle:{padding:"0 10px"}},[r("el-form-item",{attrs:{label:"请求地址"}},[r("el-input",{on:{blur:e.validateURL},model:{value:e.request.url,callback:function(t){e.$set(e.request,"url","string"===typeof t?t.trim():t)},expression:"request.url"}},[r("template",{slot:"prepend"},[e._v("HTTPS://")])],2)],1),r("el-form-item",{attrs:{label:"请求方法"}},[r("el-select",{model:{value:e.request.method,callback:function(t){e.$set(e.request,"method",t)},expression:"request.method"}},e._l(e.methodOptions,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),r("el-form-item",{attrs:{label:"请求参数"}},[r("el-select",{attrs:{placeholder:"参数类型"},on:{change:e.onChnage},model:{value:e.request.paramType,callback:function(t){e.$set(e.request,"paramType",t)},expression:"request.paramType"}},e._l(e.dataOptions,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1),"array"===e.request.paramType?r("div",{staticClass:"param-container"},[r("p",[e._v("数据项")]),e._l(e.request.data,(function(t,n){return r("el-input",{key:n,attrs:{placeholder:"请输入参数值"},model:{value:e.request.data[n],callback:function(t){e.$set(e.request.data,n,t)},expression:"request.data[index]"}})})),r("el-button",{on:{click:e.addArrayData}},[e._v("添加")])],2):"string"===e.request.paramType||"object"===e.request.paramType?r("div",{staticClass:"param-container"},[r("p",[e._v("数据项")]),e._l(e.request.data,(function(t,n){return r("div",{key:n,staticClass:"param-object-container"},[r("el-input",{attrs:{placeholder:"请输入参数名"},model:{value:t[0],callback:function(r){e.$set(t,0,r)},expression:"item[0]"}}),r("el-input",{attrs:{placeholder:"请输入参数值"},model:{value:t[1],callback:function(r){e.$set(t,1,r)},expression:"item[1]"}})],1)})),r("el-button",{on:{click:e.addData}},[e._v("添加")])],2):e._e()],1),r("el-form-item",{attrs:{label:"定时触发"}},[r("el-switch",{model:{value:e.request.series,callback:function(t){e.$set(e.request,"series",t)},expression:"request.series"}}),e.request.series?[r("p",[e._v("触发间隔（ms）")]),r("el-input",{attrs:{type:"number"},model:{value:e.request.time,callback:function(t){e.$set(e.request,"time",t)},expression:"request.time"}}),r("p",[e._v("触发次数（0 为无限）")]),r("el-input",{attrs:{type:"number"},model:{value:e.request.requestCount,callback:function(t){e.$set(e.request,"requestCount",t)},expression:"request.requestCount"}})]:e._e()],2)],1)],1)},p=[],f=(r("ac1f"),r("00b4"),r("b775")),m={data:function(){return{methodOptions:["GET","POST","PUT","DELETE"],dataOptions:["object","array","string"]}},computed:{request:function(){return this.$store.state.curComponent.request}},methods:{addArrayData:function(){this.request.data.push("")},addData:function(){this.request.data.push(["",""])},onChnage:function(){"array"===this.request.paramType?this.request.data=[""]:this.request.data=[["",""]]},validateURL:function(){var e=this.request.url;(e&&/^\d+$/.test(e)||!f["c"].test(Object(f["b"])(e)))&&this.$message.error("请输入正确的 URL")}}},b=m,y=(r("a2d4"),r("2877")),v=Object(y["a"])(b,d,p,!1,null,"4c97ec84",null),h=v.exports,k={components:{Request:h},data:function(){return{optionMap:c,styleData:l,textAlignOptions:o,borderStyleOptions:u,verticalAlignOptions:s,selectKey:i,activeName:""}},computed:{styleKeys:function(){if(this.curComponent){var e=Object.keys(this.curComponent.style);return this.styleData.filter((function(t){return e.includes(t.key)}))}return[]},curComponent:function(){return this.$store.state.curComponent}},methods:{isIncludesColor:function(e){return e.toLowerCase().includes("color")}}},q=k,C=(r("8e26"),Object(y["a"])(q,n,a,!1,null,null,null));t["a"]=C.exports},5568:function(e,t,r){},"8e26":function(e,t,r){"use strict";r("5568")},"99af":function(e,t,r){"use strict";var n=r("23e7"),a=r("da84"),l=r("d039"),o=r("e8b5"),u=r("861d"),s=r("7b0b"),i=r("07fa"),c=r("8418"),d=r("65f0"),p=r("1dde"),f=r("b622"),m=r("2d00"),b=f("isConcatSpreadable"),y=9007199254740991,v="Maximum allowed index exceeded",h=a.TypeError,k=m>=51||!l((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),q=p("concat"),C=function(e){if(!u(e))return!1;var t=e[b];return void 0!==t?!!t:o(e)},g=!k||!q;n({target:"Array",proto:!0,forced:g},{concat:function(e){var t,r,n,a,l,o=s(this),u=d(o,0),p=0;for(t=-1,n=arguments.length;t<n;t++)if(l=-1===t?o:arguments[t],C(l)){if(a=i(l),p+a>y)throw h(v);for(r=0;r<a;r++,p++)r in l&&c(u,p,l[r])}else{if(p>=y)throw h(v);c(u,p++,l)}return u.length=p,u}})},a2d4:function(e,t,r){"use strict";r("c139")},b775:function(e,t,r){"use strict";r.d(t,"c",(function(){return a})),r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return i}));r("d3b7"),r("e9c4"),r("159b"),r("99af"),r("2ca0"),r("ac1f"),r("00b4");var n=r("5c96"),a=/(https?):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/;function l(e){return new Promise((function(t,r){var n=new XMLHttpRequest;n.timeout=6e3;var a=s(e.url);"GET"===e.method&&(a+="".concat(o(e.data))),n.open(e.method,a),n.ontimeout=r,n.onerror=r,n.onload=function(e){t(e.target.response)},n.send(JSON.stringify(u(e.data,e.paramType)))}))}function o(e){var t="";return e.forEach((function(e){e[0]&&(t+="&".concat(e[0],"=").concat(e[1]))})),t?"?"+t:""}function u(e,t){if(!e)return"";if("array"===t)return e;var r={};return e.forEach((function(e){e[0]&&(r[e[0]]=e[1])})),r}function s(e){return e.startsWith("http")?e:"https://"+e}function i(e,t,r){var o,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"object",i=0,c=null===e||void 0===e?void 0:e.url;return(c&&!/^\d+$/.test(c)||a.test(s(c)))&&(e.series?o=setInterval((function(){0!=e.requestCount&&e.requestCount<=i?clearInterval(o):(i++,l(e,u).then((function(e){t[r]="object"===u||"array"===u?JSON.parse(e):e})).catch((function(e){return n["Message"].error((null===e||void 0===e?void 0:e.message)||e)})))}),e.time):l(e,u).then((function(e){t[r]="object"===u||"array"===u?JSON.parse(e):e})).catch((function(e){return n["Message"].error((null===e||void 0===e?void 0:e.message)||e)}))),function(){clearInterval(o)}}},c139:function(e,t,r){},e9c4:function(e,t,r){var n=r("23e7"),a=r("da84"),l=r("d066"),o=r("2ba4"),u=r("e330"),s=r("d039"),i=a.Array,c=l("JSON","stringify"),d=u(/./.exec),p=u("".charAt),f=u("".charCodeAt),m=u("".replace),b=u(1..toString),y=/[\uD800-\uDFFF]/g,v=/^[\uD800-\uDBFF]$/,h=/^[\uDC00-\uDFFF]$/,k=function(e,t,r){var n=p(r,t-1),a=p(r,t+1);return d(v,e)&&!d(h,a)||d(h,e)&&!d(v,n)?"\\u"+b(f(e,0),16):e},q=s((function(){return'"\\udf06\\ud834"'!==c("\udf06\ud834")||'"\\udead"'!==c("\udead")}));c&&n({target:"JSON",stat:!0,forced:q},{stringify:function(e,t,r){for(var n=0,a=arguments.length,l=i(a);n<a;n++)l[n]=arguments[n];var u=o(c,null,l);return"string"==typeof u?m(u,y,k):u}})}}]);
//# sourceMappingURL=chunk-31ccd7ba.075d28a7.js.map