(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{284:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"git-分支管理规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-分支管理规范"}},[t._v("#")]),t._v(" Git 分支管理规范")]),t._v(" "),a("h3",{attrs:{id:"命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名"}},[t._v("#")]),t._v(" 命名")]),t._v(" "),a("p",[t._v("分支命名以 "),a("code",[t._v("xxx-xx-xx")]),t._v(" 的格式命名，中间用短横线 "),a("code",[t._v("-")]),t._v(" 连接。")]),t._v(" "),a("h3",{attrs:{id:"分支管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支管理"}},[t._v("#")]),t._v(" 分支管理")]),t._v(" "),a("p",[t._v("项目需要根据环境的不同创建对应的分支：")]),t._v(" "),a("ul",[a("li",[t._v("master（线上环境）")]),t._v(" "),a("li",[t._v("dev（开发环境）")]),t._v(" "),a("li",[t._v("test（测试环境）")])]),t._v(" "),a("p",[t._v("...")]),t._v(" "),a("h4",{attrs:{id:"开发新功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发新功能"}},[t._v("#")]),t._v(" 开发新功能")]),t._v(" "),a("p",[t._v("当团队成员开发新功能时，需要从 master 分支上拉一个 "),a("code",[t._v("feature-功能名称-开发姓名")]),t._v(" 分支进行开发，例如："),a("code",[t._v("feature-login-tgz")]),t._v("。开发完成后需要合并到 dev 分支进行部署，需要测试时再合到 test 分支部署测试。")]),t._v(" "),a("h4",{attrs:{id:"修改-bug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-bug"}},[t._v("#")]),t._v(" 修改 bug")]),t._v(" "),a("p",[t._v("当团队成员修改线上 bug 时，需要从 master 分支拉一个 "),a("code",[t._v("hotfix-功能名称-bug号/bug现象")]),t._v(" 分支进行修复，例如："),a("code",[t._v("hotfix-login-404")]),t._v("。\n修复完成并通过测试后再合并到 master 分支进行部署。")]),t._v(" "),a("p",[t._v("以 "),a("code",[t._v("feature")]),t._v(" 或 "),a("code",[t._v("hotfix")]),t._v(" 开始的分支都属于临时分支，在通过测试并上线后需要将临时分支进行删除。避免 git 上出现太多无用的分支。")]),t._v(" "),a("h4",{attrs:{id:"合并分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并分支"}},[t._v("#")]),t._v(" 合并分支")]),t._v(" "),a("p",[t._v("在将一个分支合并到另一个分支时（例如将 "),a("code",[t._v("feature-*")]),t._v(" 合并到 dev），需要查看自己的新分支中有没有多个重复提交或意义不明的 commit。如果有，则需要对它们进行合并（git rebase）。示例：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这两个 commit 可以合并成一个")]),t._v("\nchore: 修改按钮文字\nchore: 修改按钮样式\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并后")]),t._v("\nchore: 修改按钮样式及文字\n")])])]),a("h4",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),a("p",[t._v("在将自己的 feature 分支或 hotfix 分支合并到部署分支时，需要提合并请求进行合并。")]),t._v(" "),a("h2",{attrs:{id:"git-commit-message-规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-commit-message-规范"}},[t._v("#")]),t._v(" Git Commit Message 规范")]),t._v(" "),a("p",[t._v("git 在每次提交时，都需要填写 commit message。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'this is a test'")]),t._v("\n")])])]),a("p",[t._v("commit message 就是对你这次的代码提交进行一个简单的说明，好的提交说明可以让人一眼就明白这次代码提交做了什么。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/6ddb0c3a6a923d70d4d8a72229a2e9b6.png",alt:""}})]),t._v(" "),a("p",[t._v("既然明白了 commit message 的重要性，那我们就更要好好的学习一下 commit message 规范。下面让我们看一下 commit message 的格式：")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("("),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("): "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("subject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("BLANK")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("LINE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("BLANK")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("LINE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("footer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("commit message 分为三个部分(使用空行分割):")]),t._v(" "),a("ol",[a("li",[t._v("标题行（subject）: 必填, 描述主要修改类型和内容。")]),t._v(" "),a("li",[t._v("主题内容（body）: 描述为什么修改, 做了什么样的修改, 以及开发的思路等等。")]),t._v(" "),a("li",[t._v("页脚注释（footer）: 可以写注释，放 BUG 号的链接。")])]),t._v(" "),a("h4",{attrs:{id:"type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[t._v("#")]),t._v(" type")]),t._v(" "),a("p",[t._v("commit 的类型：")]),t._v(" "),a("ul",[a("li",[t._v("feat: 新功能、新特性")]),t._v(" "),a("li",[t._v("fix: 修改 bug")]),t._v(" "),a("li",[t._v("perf: 更改代码，以提高性能（在不影响代码内部行为的前提下，对程序性能进行优化）")]),t._v(" "),a("li",[t._v("refactor: 代码重构（重构，在不影响代码内部行为、功能下的代码修改）")]),t._v(" "),a("li",[t._v("docs: 文档修改")]),t._v(" "),a("li",[t._v("style: 代码格式修改, 注意不是 css 修改（例如分号修改）")]),t._v(" "),a("li",[t._v("test: 测试用例新增、修改")]),t._v(" "),a("li",[t._v("build: 影响项目构建或依赖项修改")]),t._v(" "),a("li",[t._v("revert: 恢复上一次提交")]),t._v(" "),a("li",[t._v("ci: 持续集成相关文件修改")]),t._v(" "),a("li",[t._v("chore: 其他修改（不在上述类型中的修改）")]),t._v(" "),a("li",[t._v("release: 发布新版本")])]),t._v(" "),a("h4",{attrs:{id:"scope"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scope"}},[t._v("#")]),t._v(" scope")]),t._v(" "),a("p",[t._v("commit message 影响的功能或文件范围, 比如: route, component, utils, build...")]),t._v(" "),a("h4",{attrs:{id:"subject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subject"}},[t._v("#")]),t._v(" subject")]),t._v(" "),a("p",[t._v("commit message 的概述")]),t._v(" "),a("h4",{attrs:{id:"body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[t._v("#")]),t._v(" body")]),t._v(" "),a("p",[t._v("具体修改内容, 可以分为多行.")]),t._v(" "),a("h4",{attrs:{id:"footer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#footer"}},[t._v("#")]),t._v(" footer")]),t._v(" "),a("p",[t._v("一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.")]),t._v(" "),a("h4",{attrs:{id:"约定式提交规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#约定式提交规范"}},[t._v("#")]),t._v(" 约定式提交规范")]),t._v(" "),a("p",[t._v("以下内容来源于：https://www.conventionalcommits.org/zh-hans/v1.0.0-beta.4/")]),t._v(" "),a("ul",[a("li",[t._v("每个提交都必须使用类型字段前缀，它由一个名词组成，诸如 "),a("code",[t._v("feat")]),t._v(" 或 "),a("code",[t._v("fix")]),t._v(" ，其后接一个可选的作用域字段，以及一个必要的冒号（英文半角）和空格。")]),t._v(" "),a("li",[t._v("当一个提交为应用或类库实现了新特性时，必须使用 "),a("code",[t._v("feat")]),t._v(" 类型。")]),t._v(" "),a("li",[t._v("当一个提交为应用修复了 "),a("code",[t._v("bug")]),t._v(" 时，必须使用 "),a("code",[t._v("fix")]),t._v(" 类型。")]),t._v(" "),a("li",[t._v("作用域字段可以跟随在类型字段后面。作用域必须是一个描述某部分代码的名词，并用圆括号包围，例如： "),a("code",[t._v("fix(parser):")])]),t._v(" "),a("li",[t._v("描述字段必须紧接在类型/作用域前缀的空格之后。描述指的是对代码变更的简短总结，例如： "),a("code",[t._v("fix: array parsing issue when multiple spaces were contained in string.")])]),t._v(" "),a("li",[t._v("在简短描述之后，可以编写更长的提交正文，为代码变更提供额外的上下文信息。正文必须起始于描述字段结束的一个空行后。")]),t._v(" "),a("li",[t._v("在正文结束的一个空行之后，可以编写一行或多行脚注。脚注必须包含关于提交的元信息，例如：关联的合并请求、Reviewer、破坏性变更，每条元信息一行。")]),t._v(" "),a("li",[t._v("破坏性变更必须标示在正文区域最开始处，或脚注区域中某一行的开始。一个破坏性变更必须包含大写的文本 "),a("code",[t._v("BREAKING CHANGE")]),t._v("，后面紧跟冒号和空格。")]),t._v(" "),a("li",[t._v("在 "),a("code",[t._v("BREAKING CHANGE:")]),t._v(" 之后必须提供描述，以描述对 API 的变更。例如： "),a("code",[t._v("BREAKING CHANGE: environment variables now take precedence over config files.")])]),t._v(" "),a("li",[t._v("在提交说明中，可以使用 "),a("code",[t._v("feat")]),t._v(" 和 "),a("code",[t._v("fix")]),t._v(" 之外的类型。")]),t._v(" "),a("li",[t._v("工具的实现必须不区分大小写地解析构成约定式提交的信息单元，只有 "),a("code",[t._v("BREAKING CHANGE")]),t._v(" 必须是大写的。")]),t._v(" "),a("li",[t._v("可以在类型/作用域前缀之后，: 之前，附加 "),a("code",[t._v("!")]),t._v(" 字符，以进一步提醒注意破坏性变更。当有 "),a("code",[t._v("!")]),t._v(" 前缀时，正文或脚注内必须包含 "),a("code",[t._v("BREAKING CHANGE: description")])])]),t._v(" "),a("h4",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("h5",{attrs:{id:"fix-修复bug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fix-修复bug"}},[t._v("#")]),t._v(" fix（修复BUG）")]),t._v(" "),a("p",[t._v("每次 git commit 最好加上范围描述。")]),t._v(" "),a("p",[t._v("例如这次 BUG 修复影响到全局，可以加个 global。如果影响的是某个目录或某个功能，可以加上该目录的路径，或者对应的功能名称。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 示例1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("修复checkbox不能复选的问题\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 示例2 下面圆括号里的 common 为通用管理的名称")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("common"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 修复字体过小的"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BUG")]),t._v("，将通用管理下所有页面的默认字体大小修改为 14px\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 示例3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length\n")])])]),a("h5",{attrs:{id:"feat-添加新功能或新页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feat-添加新功能或新页面"}},[t._v("#")]),t._v(" feat（添加新功能或新页面）")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("feat")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 添加网站主页静态页面\n\n这是一个示例，假设对任务静态页面进行了一些描述。\n \n这里是备注，可以是放 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BUG")]),t._v(" 链接或者一些重要性的东西。\n")])])]),a("h5",{attrs:{id:"chore-其他修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chore-其他修改"}},[t._v("#")]),t._v(" chore（其他修改）")]),t._v(" "),a("p",[t._v("chore 的中文翻译为日常事务、例行工作。顾名思义，即不在其他 commit 类型中的修改，都可以用 chore 表示。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("chore")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 将表格中的查看详情改为详情\n")])])]),a("p",[t._v("其他类型的 commit 和上面三个示例差不多，在此不再赘述。")])])}),[],!1,null,null,null);a.default=r.exports}}]);