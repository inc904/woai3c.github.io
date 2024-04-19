(function(){var t={755:function(t,e,n){"use strict";n.d(e,{FI:function(){return o},ZZ:function(){return r}});const o={rotate:0,opacity:1},r={animations:[],events:{},groupStyle:{},isLock:!1,collapseName:"style",linkage:{duration:0,data:[{id:"",label:"",event:"",style:[{key:"",value:""}]}]}},a=[{component:"VText",label:"文字",propValue:"双击编辑文字",icon:"wenben",request:{method:"GET",data:[],url:"",series:!1,time:1e3,paramType:"",requestCount:0},style:{width:200,height:28,fontSize:14,fontWeight:400,lineHeight:"",letterSpacing:0,textAlign:"",color:"",padding:4}},{component:"VButton",label:"按钮",propValue:"按钮",icon:"button",style:{width:100,height:34,borderWidth:1,borderColor:"",borderRadius:"",fontSize:14,fontWeight:400,lineHeight:"",letterSpacing:0,textAlign:"",color:"",backgroundColor:""}},{component:"Picture",label:"图片",icon:"tupian",propValue:{url:n(6864),flip:{horizontal:!1,vertical:!1}},style:{width:300,height:200,borderRadius:""}},{component:"RectShape",label:"矩形",propValue:"&nbsp;",icon:"juxing",style:{width:200,height:200,fontSize:14,fontWeight:400,lineHeight:"",letterSpacing:0,textAlign:"center",color:"",borderColor:"#000",borderWidth:1,backgroundColor:"",borderStyle:"solid",borderRadius:"",verticalAlign:"middle"}},{component:"LineShape",label:"直线",propValue:"",icon:"zhixian",style:{width:200,height:2,backgroundColor:"#000"}},{component:"CircleShape",label:"圆形",propValue:"&nbsp;",icon:"24gl-circle",style:{width:200,height:200,fontSize:14,fontWeight:400,lineHeight:"",letterSpacing:0,textAlign:"center",color:"",borderColor:"#000",borderWidth:1,backgroundColor:"",borderStyle:"solid",borderRadius:"",verticalAlign:"middle"}},{component:"SVGStar",label:"星形",icon:"kongwujiaoxing",propValue:"",style:{width:80,height:80,fontSize:14,fontWeight:400,lineHeight:"",letterSpacing:0,textAlign:"center",color:"",borderColor:"#000",backgroundColor:"rgba(255, 255, 255, 1)"}},{component:"SVGTriangle",label:"三角形",icon:"xingzhuang-sanjiaoxing",propValue:"",style:{width:80,height:80,fontSize:14,fontWeight:400,lineHeight:"",letterSpacing:0,textAlign:"center",color:"",borderColor:"#000",backgroundColor:"rgba(255, 255, 255, 1)"}},{component:"VTable",label:"表格",icon:"biaoge",propValue:{data:[["表头1","表头2","表头3"],["内容1","内容2","内容3"]],stripe:!0,thBold:!0},request:{method:"GET",data:[],url:"",series:!1,time:1e3,paramType:"",requestCount:0},style:{width:600,height:200,fontSize:14,fontWeight:400,textAlign:"center",color:"",backgroundColor:"rgba(255, 255, 255, 1)"}},{component:"VChart",label:"图表",icon:"el-icon-data-analysis",propValue:{chart:"VChart",option:{title:{text:"柱状图",show:!0},legend:{show:!0},tooltip:{show:!0,trigger:"item"},xAxis:{show:!0,data:["A","B","C","D","E"]},yAxis:{},series:{type:"bar",name:"销量",data:[23,61,35,77,35],itemStyle:{barBorderRadius:5,borderWidth:1,borderType:"solid",borderColor:"#73c0de",shadowColor:"#5470c6",shadowBlur:3}}}},style:{width:800,height:500,borderRadius:""}}];for(let i=0,c=a.length;i<c;i++){const t=a[i];t.style={...o,...t.style},a[i]={...r,...t}}e.Ay=a},9760:function(t,e,n){"use strict";var o=n(5471),r=n(1052),a=n.n(r),i=function(){var t=this,e=t._self._c;return e("router-view")},c=[],u=n(1656),s={},l=(0,u.A)(s,i,c,!1,null,null,null),d=l.exports,p=n(5527),f=n(173);o["default"].use(f.A);const h=[{path:"/",name:"Home",component:()=>Promise.all([n.e(344),n.e(560)]).then(n.bind(n,8560))}];var m=new f.A({mode:"history",base:"/visual-drag-demo/",routes:h});const g=["CircleShape","Picture","VText","VButton","Group","RectShape","LineShape","VTable","VChart"];g.forEach((t=>{o["default"].component(t,(()=>n(3884)(`./${t}/Component`))),o["default"].component(t+"Attr",(()=>n(1302)(`./${t}/Attr`)))}));const y=["SVGStar","SVGTriangle"];y.forEach((t=>{o["default"].component(t,(()=>n(906)(`./${t}/Component`))),o["default"].component(t+"Attr",(()=>n(4816)(`./${t}/Attr`)))})),o["default"].use(a(),{size:"small"}),o["default"].config.productionTip=!1,new o["default"]({el:"#app",router:m,store:p.A,render:t=>t(d)})},5527:function(t,e,n){"use strict";n.d(e,{A:function(){return D}});var o=n(5471),r=n(5353),a={mutations:{addAnimation({curComponent:t},e){t.animations.push(e)},removeAnimation({curComponent:t},e){t.animations.splice(e,1)},alterAnimation({curComponent:t},{index:e,data:n={}}){if("number"===typeof e){const o=t.animations[e];t.animations[e]={...o,...n}}}}},i=n(5123),c=n(9459),u=n(2112),s=n(5379);function l(t,e,n){const o=(0,u.$)(`#component${t.id}`).getBoundingClientRect(),r={x:o.left-e.left+o.width/2,y:o.top-e.top+o.height/2};t.style.rotate=(0,s.WR)(t.style.rotate+n.rotate),t.style.width=parseFloat(t.groupStyle.width)/100*n.width,t.style.height=parseFloat(t.groupStyle.height)/100*n.height,t.style.left=r.x-t.style.width/2,t.style.top=r.y-t.style.height/2,t.groupStyle={}}var d=n(755),p=n(1736),f={state:{areaData:{style:{top:0,left:0,width:0,height:0},components:[]},editor:null},mutations:{getEditor(t){t.editor=(0,u.$)("#editor")},setAreaData(t,e){t.areaData=e},compose({componentData:t,areaData:e,editor:n}){const o=[];e.components.forEach((t=>{if("Group"!=t.component)o.push(t);else{const e={...t.style},r=t.propValue,a=n.getBoundingClientRect();r.forEach((t=>{l(t,a,e)})),o.push(...t.propValue)}}));const r={id:(0,i.A)(),component:"Group",label:"组合",icon:"zuhe",...d.ZZ,style:{...d.FI,...e.style},propValue:o};(0,p.Ry)(r),D.commit("addComponent",{component:r}),c.A.$emit("hideArea"),D.commit("batchDeleteComponent",e.components),D.commit("setCurComponent",{component:t[t.length-1],index:t.length-1}),e.components=[]},batchDeleteComponent({componentData:t},e){e.forEach((e=>{for(let n=0,o=t.length;n<o;n++)if(e.id==t[n].id){t.splice(n,1);break}}))},decompose({curComponent:t,editor:e}){const n={...t.style},o=t.propValue,r=e.getBoundingClientRect();D.commit("deleteComponent"),o.forEach((t=>{l(t,r,n),D.commit("addComponent",{component:t})}))}}},h={state:{menuTop:0,menuLeft:0,menuShow:!1},mutations:{showContextMenu(t,{top:e,left:n}){t.menuShow=!0,t.menuTop=e,t.menuLeft=n},hideContextMenu(t){t.menuShow=!1}}},m=n(5242),g={state:{copyData:null,isCut:!1},mutations:{copy(t){t.curComponent?(y(t),C(t),t.isCut=!1):(0,m.A)("请选择组件")},paste(t,e){if(!t.copyData)return void(0,m.A)("请选择组件");const n=t.copyData.data;e?(n.style.top=t.menuTop,n.style.left=t.menuLeft):(n.style.top+=10,n.style.left+=10),D.commit("addComponent",{component:b(n)}),t.isCut&&(t.copyData=null)},cut(t){t.curComponent?(y(t),C(t),D.commit("deleteComponent"),t.isCut=!0):(0,m.A)("请选择组件")}}};function y(t){if(t.isCut&&t.copyData){const e=(0,u.A4)(t.copyData.data),n=t.copyData.index;D.commit("addComponent",{component:e,index:n}),t.curComponentIndex>=n&&t.curComponentIndex++}}function C(t){t.copyData={data:(0,u.A4)(t.curComponent),index:t.curComponentIndex}}function b(t){const e=(0,u.A4)(t);return e.id=(0,i.A)(),"Group"===e.component&&e.propValue.forEach(((t,n)=>{e.propValue[n]=b(t)})),e}var S={mutations:{addEvent({curComponent:t},{event:e,param:n}){t.events[e]=n},removeEvent({curComponent:t},e){o["default"].delete(t.events,e)}}},v={mutations:{upComponent(t){const{componentData:e,curComponentIndex:n}=t;n<e.length-1?((0,u.wg)(e,n,n+1),t.curComponentIndex=n+1):(0,m.A)("已经到顶了")},downComponent(t){const{componentData:e,curComponentIndex:n}=t;n>0?((0,u.wg)(e,n,n-1),t.curComponentIndex=n-1):(0,m.A)("已经到底了")},topComponent(t){const{componentData:e,curComponentIndex:n,curComponent:o}=t;n<e.length-1?(e.splice(n,1),e.push(o),t.curComponentIndex=e.length-1):(0,m.A)("已经到顶了")},bottomComponent(t){const{componentData:e,curComponentIndex:n,curComponent:o}=t;n>0?(e.splice(n,1),e.unshift(o),t.curComponentIndex=0):(0,m.A)("已经到底了")}}},A=n(6865),x={mutations:{lock({curComponent:t}){t.isLock=!0},unlock({curComponent:t}){t.isLock=!1}}};o["default"].use(r.Ay);const w={state:{...a.state,...f.state,...h.state,...g.state,...S.state,...v.state,...A.A.state,...x.state,lastScale:100,editMode:"edit",canvasStyleData:{width:1200,height:740,scale:100,color:"#000",opacity:1,background:"#fff",fontSize:14},isInEdiotr:!1,componentData:[],curComponent:null,curComponentIndex:null,isClickComponent:!1,rightList:!0,isDarkMode:!1},mutations:{...a.mutations,...f.mutations,...h.mutations,...g.mutations,...S.mutations,...v.mutations,...A.A.mutations,...x.mutations,aceSetCanvasData(t,e){t.canvasStyleData=e},setLastScale(t,e){t.lastScale=e},aceSetcurComponent(t,e){for(let n=0;n<t.componentData.length;n++)t.componentData[n].id===e.id&&t.componentData.splice(n,1);t.componentData.push(e),t.curComponent=e},setClickComponentStatus(t,e){t.isClickComponent=e},isShowRightList(t){t.rightList=!t.rightList},toggleDarkMode(t,e){t.isDarkMode=e,t.canvasStyleData.background=e?"#817f7f":"#fff",localStorage.setItem("isDarkMode",JSON.stringify(t.isDarkMode))},setEditMode(t,e){t.editMode=e},setInEditorStatus(t,e){t.isInEdiotr=e},setCanvasStyle(t,e){t.canvasStyleData=e},setCurComponent(t,{component:e,index:n}){t.curComponent=e,t.curComponentIndex=n},setShapeStyle({curComponent:t},{top:e,left:n,width:o,height:r,rotate:a,padding:i}){void 0!==e&&(t.style.top=Math.round(e)),void 0!==n&&(t.style.left=Math.round(n)),o&&(t.style.width=Math.round(o)),i&&(t.style.padding=Math.round(i)),r&&(t.style.height=Math.round(r)),a&&(t.style.rotate=Math.round(a))},setShapeSingleStyle({curComponent:t},{key:e,value:n}){t.style[e]=n},setComponentData(t,e=[]){o["default"].set(t,"componentData",e)},addComponent(t,{component:e,index:n}){void 0!==n?t.componentData.splice(n,0,e):t.componentData.push(e)},deleteComponent(t,e){void 0===e&&(e=t.curComponentIndex),e==t.curComponentIndex&&(t.curComponentIndex=null,t.curComponent=null),/\d/.test(e)&&t.componentData.splice(e,1)}}};var D=new r.Ay.Store(w)},6865:function(t,e,n){"use strict";n.d(e,{N:function(){return u}});var o=n(5527),r=n(2112),a=n(7236);let i=[];function c(){return JSON.parse(JSON.stringify(i))}function u(t=[]){i=t}e.A={state:{snapshotData:[],snapshotIndex:-1},mutations:{undo(t){if(t.snapshotIndex>=0){t.snapshotIndex--;let e=(0,r.A4)(t.snapshotData[t.snapshotIndex])||c();if(t.curComponent){const n=!e.find((e=>t.curComponent.id===e.id));n&&o.A.commit("setCurComponent",{component:null,index:null})}e=(0,a.A)(t.lastScale,e),o.A.commit("setComponentData",e)}},redo(t){if(t.snapshotIndex<t.snapshotData.length-1){t.snapshotIndex++;let e=(0,a.A)(t.lastScale,(0,r.A4)(t.snapshotData[t.snapshotIndex]));o.A.commit("setComponentData",e)}},recordSnapshot(t){let e=(0,r.A4)(t.componentData);e.forEach((e=>e.lastScale=t.lastScale)),t.snapshotData[++t.snapshotIndex]=e,t.snapshotIndex<t.snapshotData.length-1&&(t.snapshotData=t.snapshotData.slice(0,t.snapshotIndex+1))}}}},7236:function(t,e,n){"use strict";n.d(e,{A:function(){return c},N:function(){return s}});var o=n(2112),r=n(5527),a=n(8720);const i=["top","left","width","height","fontSize","padding"];function c(t,e=null){const n=e||(0,o.A4)(r.A.state.componentData);if(n.forEach((n=>{Object.keys(n.style).forEach((o=>{if(i.includes(o)){let a;a=e?(n.style[o]/e[0].lastScale*t).toFixed(4)-0:(n.style[o]/r.A.state.canvasStyleData.scale*t).toFixed(4)-0,n.style[o]="top"==o||"left"==o?a:0==a?1:a}}))})),e)return n;r.A.commit("setComponentData",n),r.A.commit("setCurComponent",{component:n[r.A.state.curComponentIndex],index:r.A.state.curComponentIndex}),r.A.commit("setCanvasStyle",{...r.A.state.canvasStyleData,scale:t})}const u=["width","height","fontSize","padding"];function s(t){Object.keys(t.style).forEach((e=>{if(u.includes(e)){if("fontSize"===e&&""===t.style[e])return;t.style[e]=l(t.style[e],r.A.state.canvasStyleData.scale)}}))}function l(t,e){return(0,a.lwT)(t,(0,a.Qrk)(parseFloat(e),100))}},9459:function(t,e,n){"use strict";var o=n(5471);e.A=new o["default"]},5123:function(t,e,n){"use strict";n.d(e,{A:function(){return r}});var o=n(4329);function r(){return(0,o.Ak)()}},1736:function(t,e,n){"use strict";n.d(e,{O_:function(){return l},Ry:function(){return d},SC:function(){return i},X9:function(){return r},gd:function(){return c},qG:function(){return u}});var o=n(5379);function r(t){const e={};return["width","height","top","left","rotate"].forEach((n=>{"rotate"!=n?e[n]=t[n]+"px":e.transform="rotate("+t[n]+"deg)"})),e}const a=["fontSize","width","height","top","left","borderWidth","letterSpacing","borderRadius"];function i(t,e=[]){const n={};return["opacity","width","height","top","left","rotate","fontSize","fontWeight","lineHeight","letterSpacing","textAlign","color"].forEach((o=>{e.includes(o)||("rotate"!=o?""!==t[o]&&(n[o]=t[o],a.includes(o)&&(n[o]+="px")):n.transform=o+"("+t[o]+"deg)")})),n}function c(t,e=[]){const n={};return Object.keys(t).forEach((o=>{e.includes(o)||("rotate"!=o?""!==t[o]&&(n[o]=t[o],a.includes(o)&&(n[o]+="px")):n.transform=o+"("+t[o]+"deg)")})),n}function u(t){if(t={...t},0!=t.rotate){const e=t.width*(0,o.gn)(t.rotate)+t.height*(0,o.F8)(t.rotate),n=(t.width-e)/2;t.left+=n,t.right=t.left+e;const r=t.height*(0,o.gn)(t.rotate)+t.width*(0,o.F8)(t.rotate),a=(r-t.height)/2;t.top-=a,t.bottom=t.top+r,t.width=e,t.height=r}else t.bottom=t.top+t.height,t.right=t.left+t.width;return t}const s=["width","height","scale"];function l(t){const e={};return Object.keys(t).filter((t=>!s.includes(t))).forEach((n=>{e[n]=t[n],"fontSize"===n&&(e[n]+="px")})),e}function d(t){const e=t.style;t.propValue.forEach((t=>{if(!Object.keys(t.groupStyle).length){const n={...t.style};t.component.startsWith("SVG")?t.groupStyle=i(n):t.groupStyle=c(n),t.groupStyle.left=(0,o.BY)((n.left-e.left)/e.width),t.groupStyle.top=(0,o.BY)((n.top-e.top)/e.height),t.groupStyle.width=(0,o.BY)(n.width/e.width),t.groupStyle.height=(0,o.BY)(n.height/e.height)}}))}},5242:function(t,e,n){"use strict";n.d(e,{A:function(){return r}});var o=n(1052);function r(t="",e="error",n=1500){(0,o.Message)({message:t,type:e,duration:n})}},5379:function(t,e,n){"use strict";n.d(e,{BY:function(){return p},EX:function(){return c},F8:function(){return u},Gq:function(){return d},WG:function(){return i},WR:function(){return l},gn:function(){return s}});var o=n(5527),r=n(8720);function a(t){return t*Math.PI/180}function i(t,e,n){return{x:(t.x-e.x)*Math.cos(a(n))-(t.y-e.y)*Math.sin(a(n))+e.x,y:(t.x-e.x)*Math.sin(a(n))+(t.y-e.y)*Math.cos(a(n))+e.y}}function c(t,e){return{x:t.x+(e.x-t.x)/2,y:t.y+(e.y-t.y)/2}}function u(t){return Math.abs(Math.sin(a(t)))}function s(t){return Math.abs(Math.cos(a(t)))}function l(t){return(t+360)%360}function d(t){return(0,r.lwT)(t,(0,r.Qrk)(parseInt(o.A.state.canvasStyleData.scale),100))}function p(t){return 100*t+"%"}},2112:function(t,e,n){"use strict";n.d(e,{$:function(){return i},A4:function(){return r},uy:function(){return u},wg:function(){return a}});var o=n(5471);function r(t){if("object"==typeof t){const e=Array.isArray(t)?[]:{};for(const n in t)"object"==typeof t[n]?e[n]=r(t[n]):e[n]=t[n];return e}return t}function a(t,e,n){const r=t[e];o["default"].set(t,e,t[n]),o["default"].set(t,n,r)}function i(t){return document.querySelector(t)}const c=["VText","RectShape","CircleShape"];function u(t){return!c.includes(t)&&!t.startsWith("SVG")}},4816:function(t,e,n){var o={"./SVGStar/Attr":[6575,62,115],"./SVGTriangle/Attr":[9715,62,871]};function r(t){if(!n.o(o,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=o[t],r=e[0];return Promise.all(e.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(o)},r.id=4816,t.exports=r},906:function(t,e,n){var o={"./SVGStar/Component":[5235,235],"./SVGTriangle/Component":[1386,386]};function r(t){if(!n.o(o,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=o[t],r=e[0];return n.e(e[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(o)},r.id=906,t.exports=r},1302:function(t,e,n){var o={"./CircleShape/Attr":[3980,62,572],"./Group/Attr":[9379,62,607],"./LineShape/Attr":[4466,62,214],"./Picture/Attr":[7687,62,323],"./RectShape/Attr":[1529,62,489],"./VButton/Attr":[8479,62,99],"./VChart/Attr":[9012,62,344,620],"./VTable/Attr":[2782,62,698],"./VText/Attr":[2598,62,218],"./svgs/SVGStar/Attr":[6575,62,115],"./svgs/SVGTriangle/Attr":[9715,62,871]};function r(t){if(!n.o(o,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=o[t],r=e[0];return Promise.all(e.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(o)},r.id=1302,t.exports=r},3884:function(t,e,n){var o={"./CircleShape/Component":[7207,207],"./Group/Component":[8159,159],"./LineShape/Component":[4655,655],"./Picture/Component":[8048,48],"./RectShape/Component":[4175,175],"./VButton/Component":[8701,701],"./VChart/Component":[6329,329],"./VTable/Component":[4202,202],"./VText/Component":[9464,464],"./svgs/SVGStar/Component":[5235,235],"./svgs/SVGTriangle/Component":[1386,386]};function r(t){if(!n.o(o,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=o[t],r=e[0];return n.e(e[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(o)},r.id=3884,t.exports=r},6864:function(t,e,n){"use strict";t.exports=n.p+"img/title.07a15c19.jpg"},1234:function(){}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,loaded:!1,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=t,function(){n.amdD=function(){throw new Error("define cannot be used indirect")}}(),function(){n.amdO={}}(),function(){var t=[];n.O=function(e,o,r,a){if(!o){var i=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],a=t[l][2];for(var c=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(c=!1,a<i&&(i=a));if(c){t.splice(l--,1);var s=r();void 0!==s&&(e=s)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[o,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{48:"2754c995",62:"f8a18836",99:"075a6fa3",115:"abcad9cd",159:"7d807088",175:"dd6a6cb6",202:"ba43319a",207:"9bdc0245",214:"62c0a7b7",218:"dcbb54da",235:"c2968a7a",323:"b79b3309",329:"3ba24962",344:"10b4964e",386:"a0d7ed43",464:"efa248ec",489:"786a10d2",560:"bfa46309",572:"d996c121",607:"382fce1e",620:"4e6598cc",655:"78980163",698:"a2f12ed6",701:"cec175f4",871:"58c57fb5"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{99:"13e55089",115:"13e55089",159:"c9bb01ac",175:"37096d2f",202:"fe837325",207:"36af9885",214:"13e55089",218:"13e55089",235:"88167297",323:"13e55089",329:"0e77911d",386:"40151495",464:"dd43148a",489:"13e55089",560:"a74ba16d",572:"13e55089",607:"13e55089",620:"5b98fa66",655:"0c7d2d18",698:"adfb06ab",701:"ebb4f00b",871:"13e55089"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="visual-drag-demo:";n.l=function(o,r,a,i){if(t[o])t[o].push(r);else{var c,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+a){c=d;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",e+a),c.src=o),t[o]=[r];var p=function(e,n){c.onerror=c.onload=null,clearTimeout(f);var r=t[o];if(delete t[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p="/visual-drag-demo/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,o,r,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var c=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var o=n&&n.type,c=n&&n.target&&n.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+o+": "+c+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=o,u.request=c,i.parentNode&&i.parentNode.removeChild(i),a(u)}};return i.onerror=i.onload=c,i.href=e,o?o.parentNode.insertBefore(i,o.nextSibling):document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===t||a===e))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===t||a===e)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),c=n.p+i;if(e(i,c))return r();t(o,c,null,r,a)}))},r={524:0};n.f.miniCss=function(t,e){var n={99:1,115:1,159:1,175:1,202:1,207:1,214:1,218:1,235:1,323:1,329:1,386:1,464:1,489:1,560:1,572:1,607:1,620:1,655:1,698:1,701:1,871:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=o(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}}(),function(){var t={524:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(e),c=new Error,u=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,r[1](c)}};n.l(i,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,i=o[0],c=o[1],u=o[2],s=0;if(i.some((function(e){return 0!==t[e]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(u)var l=u(n)}for(e&&e(o);s<i.length;s++)a=i[s],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},o=self["webpackChunkvisual_drag_demo"]=self["webpackChunkvisual_drag_demo"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(9760)}));o=n.O(o)})();
//# sourceMappingURL=app.fa1c1c73.js.map