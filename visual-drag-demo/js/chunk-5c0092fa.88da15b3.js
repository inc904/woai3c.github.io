(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c0092fa"],{"25f0":function(t,e,n){"use strict";var r=n("e330"),a=n("5e77").PROPER,o=n("6eeb"),i=n("825a"),s=n("3a9b"),l=n("577e"),u=n("d039"),c=n("ad6d"),d="toString",f=RegExp.prototype,p=f[d],g=r(c),h=u((function(){return"/a/b"!=p.call({source:"a",flags:"b"})})),w=a&&p.name!=d;(h||w)&&o(RegExp.prototype,d,(function(){var t=i(this),e=l(t.source),n=t.flags,r=l(void 0===n&&s(f,t)&&!("flags"in f)?g(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"3fe2":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"svg-triangle-container"},[n("svg",{attrs:{version:"1.1",baseProfile:"full",xmlns:"http://www.w3.org/2000/svg"}},[n("polygon",{ref:"triangle",attrs:{points:t.points,stroke:t.element.style.borderColor,fill:t.element.style.backgroundColor,"stroke-width":"1"}})]),n("v-text",{attrs:{"prop-value":t.element.propValue,element:t.element}})],1)},a=[],o=(n("d81d"),n("d3b7"),n("25f0"),{props:{propValue:{type:String,require:!0,default:""},element:{type:Object,default:function(){}}},data:function(){return{points:""}},watch:{"element.style.width":function(){this.draw()},"element.style.height":function(){this.draw()}},mounted:function(){this.draw()},methods:{draw:function(){var t=this.element.style,e=t.width,n=t.height;this.drawTriangle(e,n)},drawTriangle:function(t,e){var n=[[.5,.05],[1,.95],[0,.95]],r=n.map((function(n){return t*n[0]+" "+e*n[1]}));this.points=r.toString()}}}),i=o,s=(n("563c"),n("2877")),l=Object(s["a"])(i,r,a,!1,null,"4a445a6a",null);e["default"]=l.exports},"50d1":function(t,e,n){},"563c":function(t,e,n){"use strict";n("50d1")},d81d:function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").map,o=n("1dde"),i=o("map");r({target:"Array",proto:!0,forced:!i},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-5c0092fa.88da15b3.js.map