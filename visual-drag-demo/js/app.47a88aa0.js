(function(t){function e(e){for(var o,a,u=e[0],i=e[1],s=e[2],p=0,l=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);f&&f(e);while(l.length)l.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},c={app:0},r=[];function u(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2142818a":"aed785b2","chunk-3ef62fca":"16c825b7","chunk-a5fbc3e0":"a0447e14","chunk-cac1b34a":"8e459b18","chunk-cfacd118":"2e7d04e5","chunk-e2a516ea":"a7f7871f"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-2142818a":1,"chunk-3ef62fca":1,"chunk-a5fbc3e0":1,"chunk-cac1b34a":1,"chunk-cfacd118":1,"chunk-e2a516ea":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-2142818a":"74ef4024","chunk-3ef62fca":"d4cdb83a","chunk-a5fbc3e0":"fff46e70","chunk-cac1b34a":"42c8fb88","chunk-cfacd118":"ed76efeb","chunk-e2a516ea":"fa56994d"}[t]+".css",c=i.p+o,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var s=r[u],p=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(p===o||p===c))return e()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],p=s.getAttribute("data-href");if(p===o||p===c)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||c,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[t],f.parentNode.removeChild(f),n(r)},f.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[t]=0})));var o=c[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,n){o=c[t]=[e,n]}));e.push(o[2]=r);var s,p=document.createElement("script");p.charset="utf-8",p.timeout=120,i.nc&&p.setAttribute("nonce",i.nc),p.src=u(t);var l=new Error;s=function(e){p.onerror=p.onload=null,clearTimeout(f);var n=c[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}c[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:p})}),12e4);p.onerror=p.onload=s,document.head.appendChild(p)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/visual-drag-demo/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],p=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=p;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0d53":function(t,e,n){var o={"./":["9210"],"./Group":["736d","chunk-3ef62fca"],"./Group.vue":["736d","chunk-3ef62fca"],"./Picture":["ac55","chunk-cac1b34a"],"./Picture.vue":["ac55","chunk-cac1b34a"],"./RectShape":["43dc","chunk-cfacd118"],"./RectShape.vue":["43dc","chunk-cfacd118"],"./VButton":["dcb2","chunk-2142818a"],"./VButton.vue":["dcb2","chunk-2142818a"],"./VText":["d02c","chunk-a5fbc3e0"],"./VText.vue":["d02c","chunk-a5fbc3e0"],"./component-list":["4e67"],"./component-list.js":["4e67"],"./index":["9210"],"./index.js":["9210"]};function a(t){if(!n.o(o,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=o[t],a=e[0];return Promise.all(e.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(o)},a.id="0d53",t.exports=a},4360:function(t,e,n){"use strict";var o=n("5530"),a=(n("a434"),n("2b0e")),c=n("2f62"),r={mutations:{addAnimation:function(t,e){var n=t.curComponent;n.animations.push(e)},removeAnimation:function(t,e){var n=t.curComponent;n.animations.splice(e,1)},alterAnimation:function(t,e){var n=t.curComponent,a=e.index,c=e.data,r=void 0===c?{}:c;if("number"===typeof a){var u=n.animations[a];n.animations[a]=Object(o["a"])(Object(o["a"])({},u),r)}}}},u=n("2909"),i=(n("159b"),n("ac24")),s=n("986e"),p=n("fa7d"),l=n("a2ba");function f(t,e,n){var o=Object(p["a"])("#component".concat(t.id)).getBoundingClientRect(),a={x:o.left-e.left+o.width/2,y:o.top-e.top+o.height/2};t.style.rotate=Object(l["e"])(t.style.rotate+n.rotate),t.style.width=parseFloat(t.groupStyle.width)/100*n.width,t.style.height=parseFloat(t.groupStyle.height)/100*n.height,t.style.left=a.x-t.style.width/2,t.style.top=a.y-t.style.height/2,t.groupStyle={}}var d=n("4e67"),h=(n("b64b"),n("a7f7"));function m(t){var e=t.style;t.propValue.forEach((function(t){if(!Object.keys(t.groupStyle).length){var n=Object(o["a"])({},t.style);t.groupStyle=Object(h["b"])(n),t.groupStyle.left=Object(l["g"])((n.left-e.left)/e.width),t.groupStyle.top=Object(l["g"])((n.top-e.top)/e.height),t.groupStyle.width=Object(l["g"])(n.width/e.width),t.groupStyle.height=Object(l["g"])(n.height/e.height)}}))}var b={state:{areaData:{style:{top:0,left:0,width:0,height:0},components:[]},editor:null},mutations:{getEditor:function(t){t.editor=Object(p["a"])("#editor")},setAreaData:function(t,e){t.areaData=e},compose:function(t){var e=t.componentData,n=t.areaData,a=t.editor,c=[];n.components.forEach((function(t){if("Group"!=t.component)c.push(t);else{var e=Object(o["a"])({},t.style),n=t.propValue,r=a.getBoundingClientRect();D.commit("deleteComponent"),n.forEach((function(t){f(t,r,e),D.commit("addComponent",{component:t})})),c.push.apply(c,Object(u["a"])(t.propValue)),D.commit("batchDeleteComponent",t.propValue)}}));var r=Object(o["a"])(Object(o["a"])({id:Object(i["a"])(),component:"Group"},d["commonAttr"]),{},{style:Object(o["a"])(Object(o["a"])({},d["commonStyle"]),n.style),propValue:c});m(r),D.commit("addComponent",{component:r}),s["a"].$emit("hideArea"),D.commit("batchDeleteComponent",n.components),D.commit("setCurComponent",{component:e[e.length-1],index:e.length-1}),n.components=[]},batchDeleteComponent:function(t,e){var n=t.componentData;e.forEach((function(t){for(var e=0,o=n.length;e<o;e++)if(t.id==n[e].id){n.splice(e,1);break}}))},decompose:function(t){var e=t.curComponent,n=t.editor,a=Object(o["a"])({},e.style),c=e.propValue,r=n.getBoundingClientRect();D.commit("deleteComponent"),c.forEach((function(t){f(t,r,a),D.commit("addComponent",{component:t})}))}}},v={state:{menuTop:0,menuLeft:0,menuShow:!1},mutations:{showContextMenu:function(t,e){var n=e.top,o=e.left;t.menuShow=!0,t.menuTop=n,t.menuLeft=o},hideContextMenu:function(t){t.menuShow=!1}}},g=n("eae4"),y={state:{copyData:null,isCut:!1},mutations:{copy:function(t){t.curComponent?(j(t),C(t),t.isCut=!1):Object(g["a"])("请选择组件")},paste:function(t,e){if(t.copyData){var n=t.copyData.data;e?(n.style.top=t.menuTop,n.style.left=t.menuLeft):(n.style.top+=10,n.style.left+=10),n.id=Object(i["a"])(),"Group"===n.component&&n.propValue.forEach((function(t){t.id=Object(i["a"])()})),D.commit("addComponent",{component:Object(p["b"])(n)}),t.isCut&&(t.copyData=null)}else Object(g["a"])("请选择组件")},cut:function(t){t.curComponent?(j(t),C(t),D.commit("deleteComponent"),t.isCut=!0):Object(g["a"])("请选择组件")}}};function j(t){if(t.isCut&&t.copyData){var e=Object(p["b"])(t.copyData.data),n=t.copyData.index;e.id=Object(i["a"])(),D.commit("addComponent",{component:e,index:n}),t.curComponentIndex>=n&&t.curComponentIndex++}}function C(t){t.copyData={data:Object(p["b"])(t.curComponent),index:t.curComponentIndex}}var O={mutations:{addEvent:function(t,e){var n=t.curComponent,o=e.event,a=e.param;n.events[o]=a},removeEvent:function(t,e){var n=t.curComponent;a["default"].delete(n.events,e)}}},x={mutations:{upComponent:function(t){var e=t.componentData,n=t.curComponentIndex;n<e.length-1?Object(p["c"])(e,n,n+1):Object(g["a"])("已经到顶了")},downComponent:function(t){var e=t.componentData,n=t.curComponentIndex;n>0?Object(p["c"])(e,n,n-1):Object(g["a"])("已经到底了")},topComponent:function(t){var e=t.componentData,n=t.curComponentIndex,o=t.curComponent;n<e.length-1?(e.splice(n,1),e.push(o)):Object(g["a"])("已经到顶了")},bottomComponent:function(t){var e=t.componentData,n=t.curComponentIndex,o=t.curComponent;n>0?(e.splice(n,1),e.unshift(o)):Object(g["a"])("已经到底了")}}},k=(n("7db0"),n("fb6a"),{state:{snapshotData:[],snapshotIndex:-1},mutations:{undo:function(t){if(t.snapshotIndex>=0){t.snapshotIndex--;var e=Object(p["b"])(t.snapshotData[t.snapshotIndex])||[];if(t.curComponent){var n=!e.find((function(e){return t.curComponent.id===e.id}));n&&D.commit("setCurComponent",{component:null,index:null})}D.commit("setComponentData",e)}},redo:function(t){t.snapshotIndex<t.snapshotData.length-1&&(t.snapshotIndex++,D.commit("setComponentData",Object(p["b"])(t.snapshotData[t.snapshotIndex])))},recordSnapshot:function(t){t.snapshotData[++t.snapshotIndex]=Object(p["b"])(t.componentData),t.snapshotIndex<t.snapshotData.length-1&&(t.snapshotData=t.snapshotData.slice(0,t.snapshotIndex+1))}}}),w={mutations:{lock:function(t){var e=t.curComponent;e.isLock=!0},unlock:function(t){var e=t.curComponent;e.isLock=!1}}};a["default"].use(c["a"]);var S={state:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},r.state),b.state),v.state),y.state),O.state),x.state),k.state),w.state),{},{editMode:"edit",canvasStyleData:{width:1200,height:740,scale:100},componentData:[],curComponent:null,curComponentIndex:null,isClickComponent:!1}),mutations:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},r.mutations),b.mutations),v.mutations),y.mutations),O.mutations),x.mutations),k.mutations),w.mutations),{},{setClickComponentStatus:function(t,e){t.isClickComponent=e},setEditMode:function(t,e){t.editMode=e},setCanvasStyle:function(t,e){t.canvasStyleData=e},setCurComponent:function(t,e){var n=e.component,o=e.index;t.curComponent=n,t.curComponentIndex=o},setShapeStyle:function(t,e){var n=t.curComponent,o=e.top,a=e.left,c=e.width,r=e.height,u=e.rotate;o&&(n.style.top=o),a&&(n.style.left=a),c&&(n.style.width=c),r&&(n.style.height=r),u&&(n.style.rotate=u)},setShapeSingleStyle:function(t,e){var n=t.curComponent,o=e.key,a=e.value;n.style[o]=a},setComponentData:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];a["default"].set(t,"componentData",e)},addComponent:function(t,e){var n=e.component,o=e.index;void 0!==o?t.componentData.splice(o,0,n):t.componentData.push(n)},deleteComponent:function(t,e){void 0===e&&(e=t.curComponentIndex),e==t.curComponentIndex&&(t.curComponentIndex=null,t.curComponent=null),t.componentData.splice(e,1)}})},D=e["a"]=new c["a"].Store(S)},"4e67":function(t,e,n){"use strict";n.r(e),n.d(e,"commonStyle",(function(){return a})),n.d(e,"commonAttr",(function(){return c}));for(var o=n("5530"),a={rotate:0,opacity:1},c={animations:[],events:{},groupStyle:{},isLock:!1},r=[{component:"v-text",label:"文字",propValue:"双击编辑文字",icon:"wenben",style:{width:200,height:22,fontSize:14,fontWeight:500,lineHeight:"",letterSpacing:0,textAlign:"",color:""}},{component:"v-button",label:"按钮",propValue:"按钮",icon:"button",style:{width:100,height:34,borderWidth:1,borderColor:"",borderRadius:"",fontSize:14,fontWeight:500,lineHeight:"",letterSpacing:0,textAlign:"",color:"",backgroundColor:""}},{component:"Picture",label:"图片",icon:"tupian",propValue:n("b2e4"),style:{width:300,height:200,borderRadius:""}},{component:"rect-shape",label:"矩形",propValue:"&nbsp;",icon:"juxing",style:{width:200,height:200,fontSize:14,fontWeight:500,lineHeight:"",letterSpacing:0,textAlign:"center",color:"",borderColor:"#000",borderWidth:1,backgroundColor:"",borderStyle:"solid",verticalAlign:"middle"}}],u=0,i=r.length;u<i;u++){var s=r[u];s.style=Object(o["a"])(Object(o["a"])({},a),s.style),r[u]=Object(o["a"])(Object(o["a"])({},c),s)}e["default"]=r},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=n("5c96"),c=n.n(a),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},u=[],i=(n("034f"),n("2877")),s={},p=Object(i["a"])(s,r,u,!1,null,null,null),l=p.exports,f=n("4360"),d=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));o["default"].use(d["a"]);var h=[{path:"/",name:"Home",component:function(){return n.e("chunk-e2a516ea").then(n.bind(null,"bb51"))}}],m=new d["a"]({routes:h});n("9210"),n("be35"),n("81b4"),n("0fae"),n("5a8b");o["default"].use(c.a,{size:"small"}),o["default"].config.productionTip=!1,new o["default"]({el:"#app",router:m,store:f["a"],render:function(t){return t(l)}})},"5a8b":function(t,e,n){},"81b4":function(t,e,n){},"85ec":function(t,e,n){},9210:function(t,e,n){"use strict";n.r(e);n("d3b7"),n("3ca3"),n("ddb0");var o=n("2b0e"),a=["Picture","VText","VButton","Group","RectShape"];a.forEach((function(t){o["default"].component(t,(function(){return n("0d53")("./".concat(t))}))}))},"986e":function(t,e,n){"use strict";var o=n("2b0e");e["a"]=new o["default"]},a2ba:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return r})),n.d(e,"f",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"e",(function(){return s})),n.d(e,"b",(function(){return p})),n.d(e,"g",(function(){return l}));var o=n("4360");function a(t){return t*Math.PI/180}function c(t,e,n){return{x:(t.x-e.x)*Math.cos(a(n))-(t.y-e.y)*Math.sin(a(n))+e.x,y:(t.x-e.x)*Math.sin(a(n))+(t.y-e.y)*Math.cos(a(n))+e.y}}function r(t,e){return{x:t.x+(e.x-t.x)/2,y:t.y+(e.y-t.y)/2}}function u(t){return Math.abs(Math.sin(a(t)))}function i(t){return Math.abs(Math.cos(a(t)))}function s(t){return(t+360)%360}function p(t){return t*parseInt(o["a"].state.canvasStyleData.scale)/100}function l(t){return 100*t+"%"}},a7f7:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return r}));var o=n("5530"),a=(n("159b"),n("b64b"),n("caad"),n("2532"),n("a2ba"));function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=["fontSize","width","height","top","left","borderWidth","letterSpacing","borderRadius"],o={};return Object.keys(t).forEach((function(a){e.includes(a)||("rotate"!=a?(o[a]=t[a],n.includes(a)&&(o[a]+="px")):o.transform=a+"("+t[a]+"deg)")})),o}function r(t){if(t=Object(o["a"])({},t),0!=t.rotate){var e=t.width*Object(a["c"])(t.rotate)+t.height*Object(a["f"])(t.rotate),n=(t.width-e)/2;t.left+=n,t.right=t.left+e;var c=t.height*Object(a["c"])(t.rotate)+t.width*Object(a["f"])(t.rotate),r=(c-t.height)/2;t.top-=r,t.bottom=t.top+c,t.width=e,t.height=c}else t.bottom=t.top+t.height,t.right=t.left+t.width;return t}},ac24:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=0;function a(){return o++}},b2e4:function(t,e,n){t.exports=n.p+"img/title.ac55a42f.jpg"},be35:function(t,e,n){},eae4:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("5c96");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1500;Object(o["Message"])({message:t,type:e,duration:n})}},fa7d:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return u}));var o=n("53ca"),a=n("2b0e");function c(t){if("object"==Object(o["a"])(t)){var e=Array.isArray(t)?[]:{};for(var n in t)"object"==Object(o["a"])(t[n])?e[n]=c(t[n]):e[n]=t[n];return e}return t}function r(t,e,n){var o=t[e];a["default"].set(t,e,t[n]),a["default"].set(t,n,o)}function u(t){return document.querySelector(t)}}});
//# sourceMappingURL=app.47a88aa0.js.map