(function(t){function e(e){for(var o,a,i=e[0],u=e[1],l=e[2],s=0,d=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(o=!1)}o&&(r.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},a={app:0},c={app:0},r=[];function i(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-2142818a":"0996744e","chunk-3ef62fca":"192c14ba","chunk-64871868":"8023c94a","chunk-70baf288":"fb4b28ed","chunk-cac1b34a":"0e996af0","chunk-cfacd118":"a42fd8d1"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-2142818a":1,"chunk-3ef62fca":1,"chunk-64871868":1,"chunk-70baf288":1,"chunk-cac1b34a":1,"chunk-cfacd118":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-2142818a":"74ef4024","chunk-3ef62fca":"d4cdb83a","chunk-64871868":"ee5a7fa3","chunk-70baf288":"c60154d1","chunk-cac1b34a":"42c8fb88","chunk-cfacd118":"ed76efeb"}[t]+".css",c=u.p+o,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var l=r[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===o||s===c))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],s=l.getAttribute("data-href");if(s===o||s===c)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var o=e&&e.target&&e.target.src||c,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[t],p.parentNode.removeChild(p),n(r)},p.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[t]=0})));var o=c[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,n){o=c[t]=[e,n]}));e.push(o[2]=r);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(t);var d=new Error;l=function(e){s.onerror=s.onload=null,clearTimeout(p);var n=c[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}c[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/visual-drag-demo/",u.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0d53":function(t,e,n){var o={"./":["9210"],"./Group":["736d","chunk-3ef62fca"],"./Group.vue":["736d","chunk-3ef62fca"],"./Picture":["ac55","chunk-cac1b34a"],"./Picture.vue":["ac55","chunk-cac1b34a"],"./RectShape":["43dc","chunk-cfacd118"],"./RectShape.vue":["43dc","chunk-cfacd118"],"./VButton":["dcb2","chunk-2142818a"],"./VButton.vue":["dcb2","chunk-2142818a"],"./VText":["d02c","chunk-64871868"],"./VText.vue":["d02c","chunk-64871868"],"./component-list":["4e67"],"./component-list.js":["4e67"],"./index":["9210"],"./index.js":["9210"]};function a(t){if(!n.o(o,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=o[t],a=e[0];return Promise.all(e.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(o)},a.id="0d53",t.exports=a},4360:function(t,e,n){"use strict";var o=n("5530"),a=(n("a434"),n("ac1f"),n("00b4"),n("2b0e")),c=n("2f62"),r={mutations:{addAnimation:function(t,e){var n=t.curComponent;n.animations.push(e)},removeAnimation:function(t,e){var n=t.curComponent;n.animations.splice(e,1)},alterAnimation:function(t,e){var n=t.curComponent,a=e.index,c=e.data,r=void 0===c?{}:c;if("number"===typeof a){var i=n.animations[a];n.animations[a]=Object(o["a"])(Object(o["a"])({},i),r)}}}},i=n("2909"),u=(n("d3b7"),n("159b"),n("ac24")),l=n("986e"),s=n("fa7d"),d=n("a2ba");function p(t,e,n){var o=Object(s["a"])("#component".concat(t.id)).getBoundingClientRect(),a={x:o.left-e.left+o.width/2,y:o.top-e.top+o.height/2};t.style.rotate=Object(d["e"])(t.style.rotate+n.rotate),t.style.width=parseFloat(t.groupStyle.width)/100*n.width,t.style.height=parseFloat(t.groupStyle.height)/100*n.height,t.style.left=a.x-t.style.width/2,t.style.top=a.y-t.style.height/2,t.groupStyle={}}var f=n("4e67"),h=(n("b64b"),n("a7f7"));function m(t){var e=t.style;t.propValue.forEach((function(t){if(!Object.keys(t.groupStyle).length){var n=Object(o["a"])({},t.style);t.groupStyle=Object(h["b"])(n),t.groupStyle.left=Object(d["g"])((n.left-e.left)/e.width),t.groupStyle.top=Object(d["g"])((n.top-e.top)/e.height),t.groupStyle.width=Object(d["g"])(n.width/e.width),t.groupStyle.height=Object(d["g"])(n.height/e.height)}}))}var b={state:{areaData:{style:{top:0,left:0,width:0,height:0},components:[]},editor:null},mutations:{getEditor:function(t){t.editor=Object(s["a"])("#editor")},setAreaData:function(t,e){t.areaData=e},compose:function(t){var e=t.componentData,n=t.areaData,a=t.editor,c=[];n.components.forEach((function(t){if("Group"!=t.component)c.push(t);else{var e=Object(o["a"])({},t.style),n=t.propValue,r=a.getBoundingClientRect();n.forEach((function(t){p(t,r,e)})),c.push.apply(c,Object(i["a"])(t.propValue))}}));var r=Object(o["a"])(Object(o["a"])({id:Object(u["a"])(),component:"Group"},f["commonAttr"]),{},{style:Object(o["a"])(Object(o["a"])({},f["commonStyle"]),n.style),propValue:c});m(r),D.commit("addComponent",{component:r}),l["a"].$emit("hideArea"),D.commit("batchDeleteComponent",n.components),D.commit("setCurComponent",{component:e[e.length-1],index:e.length-1}),n.components=[]},batchDeleteComponent:function(t,e){var n=t.componentData;e.forEach((function(t){for(var e=0,o=n.length;e<o;e++)if(t.id==n[e].id){n.splice(e,1);break}}))},decompose:function(t){var e=t.curComponent,n=t.editor,a=Object(o["a"])({},e.style),c=e.propValue,r=n.getBoundingClientRect();D.commit("deleteComponent"),c.forEach((function(t){p(t,r,a),D.commit("addComponent",{component:t})}))}}},y={state:{menuTop:0,menuLeft:0,menuShow:!1},mutations:{showContextMenu:function(t,e){var n=e.top,o=e.left;t.menuShow=!0,t.menuTop=n,t.menuLeft=o},hideContextMenu:function(t){t.menuShow=!1}}},g=n("eae4"),v={state:{copyData:null,isCut:!1},mutations:{copy:function(t){t.curComponent?(j(t),C(t),t.isCut=!1):Object(g["a"])("请选择组件")},paste:function(t,e){if(t.copyData){var n=t.copyData.data;e?(n.style.top=t.menuTop,n.style.left=t.menuLeft):(n.style.top+=10,n.style.left+=10),n.id=Object(u["a"])(),"Group"===n.component&&n.propValue.forEach((function(t){t.id=Object(u["a"])()})),D.commit("addComponent",{component:Object(s["b"])(n)}),t.isCut&&(t.copyData=null)}else Object(g["a"])("请选择组件")},cut:function(t){t.curComponent?(j(t),C(t),D.commit("deleteComponent"),t.isCut=!0):Object(g["a"])("请选择组件")}}};function j(t){if(t.isCut&&t.copyData){var e=Object(s["b"])(t.copyData.data),n=t.copyData.index;e.id=Object(u["a"])(),D.commit("addComponent",{component:e,index:n}),t.curComponentIndex>=n&&t.curComponentIndex++}}function C(t){t.copyData={data:Object(s["b"])(t.curComponent),index:t.curComponentIndex}}var O={mutations:{addEvent:function(t,e){var n=t.curComponent,o=e.event,a=e.param;n.events[o]=a},removeEvent:function(t,e){var n=t.curComponent;a["default"].delete(n.events,e)}}},k={mutations:{upComponent:function(t){var e=t.componentData,n=t.curComponentIndex;n<e.length-1?Object(s["c"])(e,n,n+1):Object(g["a"])("已经到顶了")},downComponent:function(t){var e=t.componentData,n=t.curComponentIndex;n>0?Object(s["c"])(e,n,n-1):Object(g["a"])("已经到底了")},topComponent:function(t){var e=t.componentData,n=t.curComponentIndex,o=t.curComponent;n<e.length-1?(e.splice(n,1),e.push(o)):Object(g["a"])("已经到顶了")},bottomComponent:function(t){var e=t.componentData,n=t.curComponentIndex,o=t.curComponent;n>0?(e.splice(n,1),e.unshift(o)):Object(g["a"])("已经到底了")}}},x=(n("7db0"),n("fb6a"),{state:{snapshotData:[],snapshotIndex:-1},mutations:{undo:function(t){if(t.snapshotIndex>=0){t.snapshotIndex--;var e=Object(s["b"])(t.snapshotData[t.snapshotIndex])||[];if(t.curComponent){var n=!e.find((function(e){return t.curComponent.id===e.id}));n&&D.commit("setCurComponent",{component:null,index:null})}D.commit("setComponentData",e)}},redo:function(t){t.snapshotIndex<t.snapshotData.length-1&&(t.snapshotIndex++,D.commit("setComponentData",Object(s["b"])(t.snapshotData[t.snapshotIndex])))},recordSnapshot:function(t){t.snapshotData[++t.snapshotIndex]=Object(s["b"])(t.componentData),t.snapshotIndex<t.snapshotData.length-1&&(t.snapshotData=t.snapshotData.slice(0,t.snapshotIndex+1))}}}),S={mutations:{lock:function(t){var e=t.curComponent;e.isLock=!0},unlock:function(t){var e=t.curComponent;e.isLock=!1}}};a["default"].use(c["a"]);var w={state:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},r.state),b.state),y.state),v.state),O.state),k.state),x.state),S.state),{},{editMode:"edit",canvasStyleData:{width:1200,height:740,scale:100},isInEdiotr:!1,componentData:[],curComponent:null,curComponentIndex:null,isClickComponent:!1}),mutations:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},r.mutations),b.mutations),y.mutations),v.mutations),O.mutations),k.mutations),x.mutations),S.mutations),{},{setClickComponentStatus:function(t,e){t.isClickComponent=e},setEditMode:function(t,e){t.editMode=e},setInEditorStatus:function(t,e){t.isInEdiotr=e},setCanvasStyle:function(t,e){t.canvasStyleData=e},setCurComponent:function(t,e){var n=e.component,o=e.index;t.curComponent=n,t.curComponentIndex=o},setShapeStyle:function(t,e){var n=t.curComponent,o=e.top,a=e.left,c=e.width,r=e.height,i=e.rotate;o&&(n.style.top=o),a&&(n.style.left=a),c&&(n.style.width=c),r&&(n.style.height=r),i&&(n.style.rotate=i)},setShapeSingleStyle:function(t,e){var n=t.curComponent,o=e.key,a=e.value;n.style[o]=a},setComponentData:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];a["default"].set(t,"componentData",e)},addComponent:function(t,e){var n=e.component,o=e.index;void 0!==o?t.componentData.splice(o,0,n):t.componentData.push(n)},deleteComponent:function(t,e){void 0===e&&(e=t.curComponentIndex),e==t.curComponentIndex&&(t.curComponentIndex=null,t.curComponent=null),/\d/.test(e)&&t.componentData.splice(e,1)}})},D=e["a"]=new c["a"].Store(w)},"4e67":function(t,e,n){"use strict";n.r(e),n.d(e,"commonStyle",(function(){return a})),n.d(e,"commonAttr",(function(){return c}));for(var o=n("5530"),a={rotate:0,opacity:1},c={animations:[],events:{},groupStyle:{},isLock:!1},r=[{component:"v-text",label:"文字",propValue:"双击编辑文字",icon:"wenben",style:{width:200,height:22,fontSize:14,fontWeight:500,lineHeight:"",letterSpacing:0,textAlign:"",color:""}},{component:"v-button",label:"按钮",propValue:"按钮",icon:"button",style:{width:100,height:34,borderWidth:1,borderColor:"",borderRadius:"",fontSize:14,fontWeight:500,lineHeight:"",letterSpacing:0,textAlign:"",color:"",backgroundColor:""}},{component:"Picture",label:"图片",icon:"tupian",propValue:n("b2e4"),style:{width:300,height:200,borderRadius:""}},{component:"rect-shape",label:"矩形",propValue:"&nbsp;",icon:"juxing",style:{width:200,height:200,fontSize:14,fontWeight:500,lineHeight:"",letterSpacing:0,textAlign:"center",color:"",borderColor:"#000",borderWidth:1,backgroundColor:"",borderStyle:"solid",borderRadius:"",verticalAlign:"middle"}}],i=0,u=r.length;i<u;i++){var l=r[i];l.style=Object(o["a"])(Object(o["a"])({},a),l.style),r[i]=Object(o["a"])(Object(o["a"])({},c),l)}e["default"]=r},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=n("5c96"),c=n.n(a),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},i=[],u=(n("034f"),n("2877")),l={},s=Object(u["a"])(l,r,i,!1,null,null,null),d=s.exports,p=n("4360"),f=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));o["default"].use(f["a"]);var h=[{path:"/",name:"Home",component:function(){return n.e("chunk-70baf288").then(n.bind(null,"bb51"))}}],m=new f["a"]({routes:h});n("9210"),n("be35"),n("81b4"),n("0fae"),n("5a8b");o["default"].use(c.a,{size:"small"}),o["default"].config.productionTip=!1,new o["default"]({el:"#app",router:m,store:p["a"],render:function(t){return t(d)}})},"5a8b":function(t,e,n){},"81b4":function(t,e,n){},"85ec":function(t,e,n){},9210:function(t,e,n){"use strict";n.r(e);n("d3b7"),n("3ca3"),n("ddb0");var o=n("2b0e"),a=["Picture","VText","VButton","Group","RectShape"];a.forEach((function(t){o["default"].component(t,(function(){return n("0d53")("./".concat(t))}))}))},"986e":function(t,e,n){"use strict";var o=n("2b0e");e["a"]=new o["default"]},a2ba:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return r})),n.d(e,"f",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"e",(function(){return l})),n.d(e,"b",(function(){return s})),n.d(e,"g",(function(){return d}));var o=n("4360");function a(t){return t*Math.PI/180}function c(t,e,n){return{x:(t.x-e.x)*Math.cos(a(n))-(t.y-e.y)*Math.sin(a(n))+e.x,y:(t.x-e.x)*Math.sin(a(n))+(t.y-e.y)*Math.cos(a(n))+e.y}}function r(t,e){return{x:t.x+(e.x-t.x)/2,y:t.y+(e.y-t.y)/2}}function i(t){return Math.abs(Math.sin(a(t)))}function u(t){return Math.abs(Math.cos(a(t)))}function l(t){return(t+360)%360}function s(t){return t*parseInt(o["a"].state.canvasStyleData.scale)/100}function d(t){return 100*t+"%"}},a7f7:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}));var o=n("5530"),a=(n("d3b7"),n("159b"),n("b64b"),n("caad"),n("2532"),n("a2ba")),c=[{key:"left",label:"x 坐标"},{key:"top",label:"y 坐标"},{key:"width",label:"宽"},{key:"height",label:"高"},{key:"color",label:"颜色"},{key:"backgroundColor",label:"背景色"},{key:"borderWidth",label:"边框宽度"},{key:"borderStyle",label:"边框风格"},{key:"borderColor",label:"边框颜色"},{key:"borderRadius",label:"边框半径"},{key:"fontSize",label:"字体大小"},{key:"fontWeight",label:"字体粗细"},{key:"lineHeight",label:"行高"},{key:"letterSpacing",label:"字间距"},{key:"textAlign",label:"左右对齐"},{key:"verticalAlign",label:"上下对齐"},{key:"opacity",label:"透明度"}];function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=["fontSize","width","height","top","left","borderWidth","letterSpacing","borderRadius"],o={};return Object.keys(t).forEach((function(a){e.includes(a)||("rotate"!=a?(o[a]=t[a],n.includes(a)&&(o[a]+="px")):o.transform=a+"("+t[a]+"deg)")})),o}function i(t){if(t=Object(o["a"])({},t),0!=t.rotate){var e=t.width*Object(a["c"])(t.rotate)+t.height*Object(a["f"])(t.rotate),n=(t.width-e)/2;t.left+=n,t.right=t.left+e;var c=t.height*Object(a["c"])(t.rotate)+t.width*Object(a["f"])(t.rotate),r=(c-t.height)/2;t.top-=r,t.bottom=t.top+c,t.width=e,t.height=c}else t.bottom=t.top+t.height,t.right=t.left+t.width;return t}},ac24:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=0;function a(){return o++}},b2e4:function(t,e,n){t.exports=n.p+"img/title.ac55a42f.jpg"},be35:function(t,e,n){},eae4:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("5c96");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1500;Object(o["Message"])({message:t,type:e,duration:n})}},fa7d:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var o=n("53ca"),a=n("2b0e");function c(t){if("object"==Object(o["a"])(t)){var e=Array.isArray(t)?[]:{};for(var n in t)"object"==Object(o["a"])(t[n])?e[n]=c(t[n]):e[n]=t[n];return e}return t}function r(t,e,n){var o=t[e];a["default"].set(t,e,t[n]),a["default"].set(t,n,o)}function i(t){return document.querySelector(t)}}});
//# sourceMappingURL=app.f79a7b41.js.map