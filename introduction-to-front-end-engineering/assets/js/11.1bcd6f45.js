(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{369:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("构建工具就是指能自动对代码执行检验、转换、压缩等功能的工具。从目前市场上流行的构建工具来看，常见的功能有：")]),t._v(" "),s("ol",[s("li",[t._v("代码转换，例如将 ts 文件转换为 js 文件。")]),t._v(" "),s("li",[t._v("代码打包，将有关联的代码打包在一起。")]),t._v(" "),s("li",[t._v("代码压缩、文件压缩、gzip 压缩等。")]),t._v(" "),s("li",[t._v("热加载，修改代码后自动刷新页面。")]),t._v(" "),s("li",[t._v("代码检验，检查代码格式是否符合规范。\n...")])]),t._v(" "),s("p",[t._v("在开发中使用构建工具，能够大大的提升了开发效率。")]),t._v(" "),s("p",[t._v("由于前端构建工具比较多，所以本章选取了其中的三个 "),s("a",{attrs:{href:"https://webpack.docschina.org/concepts/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack"),s("OutboundLink")],1),t._v("、"),s("a",{attrs:{href:"https://www.rollupjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("rollup"),s("OutboundLink")],1),t._v("、"),s("a",{attrs:{href:"https://github.com/vitejs/vite",target:"_blank",rel:"noopener noreferrer"}},[t._v("vite"),s("OutboundLink")],1),t._v(" 来进行讲解。")]),t._v(" "),s("h2",{attrs:{id:"webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[t._v("#")]),t._v(" webpack")]),t._v(" "),s("p",[t._v("webpack 是目前最火的构建工具，它具有非常多的实用功能：")]),t._v(" "),s("ol",[s("li",[t._v("热加载：开发环境下修改代码，页面实时刷新。")]),t._v(" "),s("li",[t._v("按需加载：每次打开页面时，只加载当前页面所需要的资源。在切换到其他页面时，再加载对应的资源。")]),t._v(" "),s("li",[t._v("代码打包：打包、压缩、分割代码等等。")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://webpack.docschina.org/guides/tree-shaking/",target:"_blank",rel:"noopener noreferrer"}},[t._v("tree-shaking"),s("OutboundLink")],1),t._v("：打包过程中自动剔除没有使用的代码。")]),t._v(" "),s("li",[t._v("可以通过 loader 和 plugin 处理各种各样的资源依赖。")])]),t._v(" "),s("p",[t._v("下面让我们简单的了解一下 webpack 的 "),s("a",{attrs:{href:"https://www.webpackjs.com/contribute/writing-a-loader/",target:"_blank",rel:"noopener noreferrer"}},[t._v("loader"),s("OutboundLink")],1),t._v("、 "),s("a",{attrs:{href:"https://www.webpackjs.com/contribute/writing-a-plugin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("plugin"),s("OutboundLink")],1),t._v(" 和自定义模块加载系统。")]),t._v(" "),s("h3",{attrs:{id:"loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loader"}},[t._v("#")]),t._v(" loader")]),t._v(" "),s("p",[t._v("什么是 loader？它是一个转换器，用于对源代码进行转换。例如使用 "),s("code",[t._v("babel-loader")]),t._v(" 可以将 ES6 代码转换为 ES5 代码；"),s("code",[t._v("sass-loader")]),t._v(" 将 sass 代码转换为 css 代码。")]),t._v(" "),s("p",[t._v("其实 loader 并不复杂，很容易就能写一个 loader。下面就是一个简单的 loader，它的作用是将代码中的 "),s("code",[t._v("var")]),t._v(" 关键词替换为 "),s("code",[t._v("const")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("source")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'const'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// var a = 1; 将被转换为 const a = 1;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugin"}},[t._v("#")]),t._v(" plugin")]),t._v(" "),s("p",[t._v("webpack 在整个编译周期中会触发很多不同的事件，plugin 可以监听这些事件，并且可以调用 webpack 的 API 对输出资源进行处理。")]),t._v(" "),s("p",[t._v("这是它和 loader 的不同之处，loader 一般只能对源文件代码进行转换，而 plugin 可以做得更多。plugin 在整个编译周期中都可以被调用，只要监听事件。")]),t._v(" "),s("p",[t._v("例如 "),s("code",[t._v("html-webpack-plugin")]),t._v(" 插件在编译完成后自动的将资源 URL 插入到 html 文件。")]),t._v(" "),s("h3",{attrs:{id:"自定义模块系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义模块系统"}},[t._v("#")]),t._v(" 自定义模块系统")]),t._v(" "),s("p",[t._v("在 webpack 里，每一个文件都是一个模块。")]),t._v(" "),s("p",[t._v("无论你开发使用的是 CommonJS 规范还是 ES6 模块规范，打包后的文件都统一使用 webpack 自定义的模块规范来管理、加载模块。")]),t._v(" "),s("h3",{attrs:{id:"如何学习-webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何学习-webpack"}},[t._v("#")]),t._v(" 如何学习 webpack")]),t._v(" "),s("p",[t._v("在 webpack 中我认为比较值得学习的是以下 4 项：")]),t._v(" "),s("ol",[s("li",[t._v("写一个 loader 和 plugin，了解 webpack 是如何通过 loader 和 plugin 处理文件的("),s("a",{attrs:{href:"https://juejin.cn/post/6871239792558866440",target:"_blank",rel:"noopener noreferrer"}},[t._v("《实现一个 webpack loader 和 webpack plugin》"),s("OutboundLink")],1),t._v(")。")]),t._v(" "),s("li",[t._v("学习 webpack 的模块加载原理，知道它是怎么加载文件的，知道按需加载的原理是什么("),s("a",{attrs:{href:"https://juejin.cn/post/6872354325553741838",target:"_blank",rel:"noopener noreferrer"}},[t._v("《深入了解 webpack 模块加载原理》"),s("OutboundLink")],1),t._v(")。")]),t._v(" "),s("li",[t._v("学习如何用 webpack 做性能优化（"),s("a",{attrs:{href:"https://juejin.cn/post/6844903651291447309",target:"_blank",rel:"noopener noreferrer"}},[t._v("《三十分钟掌握Webpack性能优化》"),s("OutboundLink")],1),t._v("）。")]),t._v(" "),s("li",[t._v("学习 webpack 的热加载原理（"),s("a",{attrs:{href:"https://juejin.cn/post/6844903933157048333",target:"_blank",rel:"noopener noreferrer"}},[t._v("《搞懂webpack热更新原理》"),s("OutboundLink")],1),t._v("）。")])]),t._v(" "),s("p",[t._v("以上 4 项学会了，基本上 webpack 就掌握得差不多了。不管是在工作中，还是面试中，遇到 webpack 的问题都能轻松解决。")]),t._v(" "),s("h2",{attrs:{id:"rollup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rollup"}},[t._v("#")]),t._v(" rollup")]),t._v(" "),s("p",[t._v("相比于 webpack，它没有热加载，也没有按需加载等非常实用的功能。但 rollup 依然能得到广大开发者的喜爱，依靠的就是它的打包功能。")]),t._v(" "),s("p",[t._v("rollup 打包功能为什么这么优秀？主要有以下两个原因：")]),t._v(" "),s("ol",[s("li",[t._v("对于使用原生 ESM 模块编写的代码，rollup 会静态分析代码中的 import，并将排除任何未实际使用的代码。")]),t._v(" "),s("li",[t._v("支持程序流分析，能更加正确的判断项目本身的代码是否有副作用（配合 tree-shaking）。")])]),t._v(" "),s("p",[t._v("从 webpack 提供的 "),s("a",{attrs:{href:"https://webpack.docschina.org/guides/tree-shaking/",target:"_blank",rel:"noopener noreferrer"}},[t._v("tree-shaking"),s("OutboundLink")],1),t._v(" 官方 DEMO，也能看出 webpack 的 tree-shaking 并不完美：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// math.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("square")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cube")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" cube "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./math.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" element "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pre'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello webpack!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5 cubed is equal to '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cube")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n\\n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("打包后的代码：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 1 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/***/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __webpack_exports__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __webpack_require__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* unused harmony export square */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* harmony export (immutable) */")]),t._v(" __webpack_exports__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cube"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("square")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cube")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("可以看到没有使用的 "),s("code",[t._v("square()")]),t._v(" 函数也打包进来了。对于这一点，webpack 的解释如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7b5a901d08f74c51afa4df24b680251f~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("p",[t._v("rollup 就不会有这种问题，它基于原生 ESM  模块，在编译时就能分析出哪些是没有使用的代码（webpack 还要额外配置）。所以 rollup 打包出来的代码非常干净。")]),t._v(" "),s("p",[t._v("另外 webpack 打包还需要注入自己的模块加载系统，所以还会有一部分“多余”的代码，不够干净。")]),t._v(" "),s("h3",{attrs:{id:"如何学习-rollup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何学习-rollup"}},[t._v("#")]),t._v(" 如何学习 rollup")]),t._v(" "),s("p",[t._v("我建议学习一下 rollup 是如何打包的，也就是它是怎么做到 tree-shaking 的。这一点建议看一下我的文章"),s("a",{attrs:{href:"https://juejin.cn/post/6898865993289105415",target:"_blank",rel:"noopener noreferrer"}},[t._v("《从 rollup 初版源码学习打包原理》"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"vite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vite"}},[t._v("#")]),t._v(" vite")]),t._v(" "),s("p",[t._v("vite 是一个最近兴起的构建工具，它的作者是 vue 之父尤雨溪。vite 对标的构建工具是 webpack，基本上 webpack 有的功能它都有。vite 和 webpack 的不同点主要有以下两点：")]),t._v(" "),s("ol",[s("li",[t._v("开发环境下，使用原生 ESM  模块进行开发。同时拦截资源请求，根据请求找到对应的文件，作少许改动后返回代码。因此无需进行打包，直接按需编译，启动非常快。相比之下，webpack 的热加载在每次更改代码时都需要重新打包所有代码才能刷新页面，特别是代码很多时，打包非常缓慢。")]),t._v(" "),s("li",[t._v("生产环境下使用 rollup 打包。")])]),t._v(" "),s("h3",{attrs:{id:"如何学习-vite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何学习-vite"}},[t._v("#")]),t._v(" 如何学习 vite")]),t._v(" "),s("p",[t._v("建议了解一下 vite 的按需编译是怎么做的。")]),t._v(" "),s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),s("p",[t._v("从构建工具的发展历史来看，使用原生 ESM 模块是大势所趋，未来所有的构建工具都会基于 ESM 设计。如果你还不熟悉 ESM 模块，建议看一下阮一峰老师的"),s("a",{attrs:{href:"https://es6.ruanyifeng.com/#docs/module",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Module 的语法》"),s("OutboundLink")],1),t._v("，或者看一下"),s("a",{attrs:{href:"https://book.douban.com/subject/35175321/?from=tag",target:"_blank",rel:"noopener noreferrer"}},[t._v("《JavaScript高级程序设计（第4版）》"),s("OutboundLink")],1),t._v("的《模块》一章。")])])}),[],!1,null,null,null);a.default=e.exports}}]);