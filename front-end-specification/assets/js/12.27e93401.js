(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{289:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"文件组织"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件组织"}},[s._v("#")]),s._v(" 文件组织")]),s._v(" "),a("p",[s._v("大多数页面都可能会用到的组件或函数需要放在公共目录；如果只是单个页面使用的组件，则放在该页面下。示例：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("- src\n    - utils "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 工具函数目录，放置所有的工具函数")]),s._v("\n    - components "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这是个公共组件目录，所有的组件都会在多个页面上使用")]),s._v("\n        - Header.vue\n        - Footer.vue\n    - pages\n        - home\n            - index.vue\n            - Button.vue "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只用于该页面的组件放在该页面目录下")]),s._v("\n        - list.vue\n")])])]),a("h2",{attrs:{id:"文件命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件命名"}},[s._v("#")]),s._v(" 文件命名")]),s._v(" "),a("p",[s._v("文件命名使用小驼峰式命名，类文件、组件文件等使用大驼峰式命名。如果文件只有一个导出对象/函数，则文件名要跟该对象/函数命名相同。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("- views\n    - home.vue\n    - list.vue\n\n- Apple.js\n- add.js\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 文件名为 add.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" b\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 文件名为 Apple.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Apple")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("如果组件、类的代码过于庞大，需要进行拆分，可以创建几个小文件，并放在一个以大驼峰命名的文件夹里。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" components\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" Editor\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vue\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" Header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vue\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" Main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vue\n")])])]),a("p",[s._v("一些特殊的文件可保持不变，例如执行 "),a("code",[s._v("npm init -y")]),s._v(" 命令默认生成的 "),a("code",[s._v("package-lock.json")]),s._v(" 文件。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("package-lock.json\n")])])]),a("h2",{attrs:{id:"目录命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录命名"}},[s._v("#")]),s._v(" 目录命名")]),s._v(" "),a("p",[s._v("目录一般使用小写驼峰命名，如果一个组件太大，需要拆分成多个小组件的，可以把目录改为组件名，即大驼峰式全名：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("- Home\n    - index.vue\n    - Button.vue\n    - Main.vue\n    - Header.vue\n    - Footer.vue\n")])])]),a("h2",{attrs:{id:"复数与缩写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复数与缩写"}},[s._v("#")]),s._v(" 复数与缩写")]),s._v(" "),a("p",[s._v("当你的目录有多个子文件时，需要用复数形式，示例：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("- tests "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试文件目录，有多个测试文件")]),s._v("\n    - a.spec.js\n    - b.spec.js\n")])])]),a("p",[s._v("但如果你的目录命名为缩写，则不要使用复数形式，示例：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("- src\n    - a.js\n    - b.js\n- lib\n    - axios\n    - jquery\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);