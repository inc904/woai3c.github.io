(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{371:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"代码验证及自动格式化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码验证及自动格式化"}},[t._v("#")]),t._v(" 代码验证及自动格式化")]),t._v(" "),a("p",[t._v("规范制订下来了，那怎么确保它被严格执行呢？目前有两个方法：")]),t._v(" "),a("ol",[a("li",[t._v("使用工具校验代码格式。")]),t._v(" "),a("li",[t._v("利用 code review 审查变量命名、注释。")])]),t._v(" "),a("p",[t._v("下面让我们来看一下，如何使用工具来校验代码格式。")]),t._v(" "),a("h4",{attrs:{id:"eslint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint"}},[t._v("#")]),t._v(" ESLint")]),t._v(" "),a("blockquote",[a("p",[t._v("ESLint最初是由Nicholas C. Zakas 于2013年6月创建的开源项目。它的目标是提供一个插件化的javascript代码检测工具。")])]),t._v(" "),a("ol",[a("li",[t._v("下载依赖")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// eslint-config-airbnb-base 使用 airbnb 代码规范\nnpm i -D babel-eslint eslint eslint-config-airbnb-base eslint-plugin-import\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("配置 "),a("code",[t._v(".eslintrc")]),t._v(" 文件")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "parserOptions": {\n        "ecmaVersion": 2019\n    },\n    "env": {\n        "es6": true,\n    },\n    "parser": "babel-eslint",\n    "extends": "airbnb-base",\n}\n')])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("在 "),a("code",[t._v("package.json")]),t._v(" 的 "),a("code",[t._v("scripts")]),t._v(" 加上这行代码 "),a("code",[t._v('"lint": "eslint --ext .js test/ src/"')]),t._v("。然后执行 "),a("code",[t._v("npm run lint")]),t._v(" 即可开始验证代码。代码中的 "),a("code",[t._v("test/ src/")]),t._v(" 是要进行校验的代码目录，这里指明了要检查 "),a("code",[t._v("test")]),t._v("、"),a("code",[t._v("src")]),t._v(" 目录下的代码。")])]),t._v(" "),a("p",[t._v("不过这样检查代码效率太低，每次都得手动检查。并且报错了还得手动修改代码。")]),t._v(" "),a("p",[t._v("为了改善以上缺点，我们可以使用 VSCode。使用它并加上适当的配置可以在每次保存代码的时候，自动验证代码并进行格式化，省去了动手的麻烦（下一节讲如何使用 VSCode 自动格式化代码）。")]),t._v(" "),a("h4",{attrs:{id:"stylelint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stylelint"}},[t._v("#")]),t._v(" Stylelint")]),t._v(" "),a("p",[t._v("Stylelint 是一个开源的、用于检查 CSS 代码格式的开源工具。具体如何使用请看下一节。")]),t._v(" "),a("h3",{attrs:{id:"使用-vscode-自动格式化代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-vscode-自动格式化代码"}},[t._v("#")]),t._v(" 使用 VSCode 自动格式化代码")]),t._v(" "),a("h4",{attrs:{id:"格式化-javascript-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#格式化-javascript-代码"}},[t._v("#")]),t._v(" 格式化 JavaScript 代码")]),t._v(" "),a("p",[t._v("安装 VSCode，然后安装插件 ESLint。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/b4af668deae95fe6f00e8ce9a2b651bf.png",alt:""}})]),t._v(" "),a("p",[t._v("选择 "),a("code",[t._v("File")]),t._v(" -> "),a("code",[t._v("Preference")]),t._v("-> "),a("code",[t._v("Settings")]),t._v("（如果装了中文插件包应该是 文件 -> 选项 -> 设置），搜索 eslint，点击 "),a("code",[t._v("Edit in setting.json")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/9820d5a2ec912c0fa232908174911424.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("将以下选项添加到配置文件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"editor.codeActionsOnSave"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"source.fixAll"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("同时要确保 VSCode 右下角的状态栏 ESlint 是处于工作状态的。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/e80a254f238a3505aa3531fe30aa9f5c.png",alt:"image"}})]),t._v(" "),a("p",[t._v("配置完之后，VSCode 会根据你当前项目下的 "),a("code",[t._v(".eslintrc")]),t._v(" 文件的规则来验证和格式化代码。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/2124694cc6805a78697657ba790f69a0.gif",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript"}},[t._v("#")]),t._v(" TypeScript")]),t._v(" "),a("p",[t._v("下载插件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install --save-dev typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin\n")])])]),a("p",[t._v("在 "),a("code",[t._v(".eslintrc")]),t._v(" 配置文件，添加以下两个配置项：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"parser"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@typescript-eslint/parser"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@typescript-eslint"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("在根目录下的 "),a("code",[t._v("package.json")]),t._v(" 文件的 "),a("code",[t._v("scripts")]),t._v(" 选项里添加以下配置项：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lint"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint --ext .js,.ts,.tsx test/ src/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[a("code",[t._v("test/")]),t._v(" "),a("code",[t._v("src/")]),t._v(" 是你要校验的目录。修改完后，现在 ts 文件也可以自动格式化了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/e990512dbf4bbf446017ec810b878ec1.gif",alt:""}})]),t._v(" "),a("p",[t._v("如果你使用 "),a("code",[t._v("Vue-CLI")]),t._v(" 创建项目，并且想要格式化 TypeScript 的代码，则需要在 "),a("code",[t._v(".eslintrc.js")]),t._v(" 文件添加或修改以下几项：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("parser"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-eslint-parser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nplugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@typescript-eslint'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nparserOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    parser"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@typescript-eslint/parser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ecmaVersion"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("这样就可以格式化 "),a("code",[t._v(".js")]),t._v(" "),a("code",[t._v(".ts")]),t._v(" "),a("code",[t._v(".vue")]),t._v(" 文件了。")]),t._v(" "),a("h4",{attrs:{id:"格式化-css-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#格式化-css-代码"}},[t._v("#")]),t._v(" 格式化 CSS 代码")]),t._v(" "),a("p",[t._v("下载依赖")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install --save-dev stylelint stylelint-config-standard\n")])])]),a("p",[t._v("在项目根目录下新建一个 "),a("code",[t._v(".stylelintrc.json")]),t._v(" 文件，并输入以下内容：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extends"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stylelint-config-standard"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("VSCode 添加 "),a("code",[t._v("stylelint")]),t._v(" 插件：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/afa020a625f5c5aee5fa304d35eb6682.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("然后就可以看到效果了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/6156343f2a04454fa1d843f8bdecd07e.gif",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("如果你想修改插件的默认规则，可以看"),a("a",{attrs:{href:"https://github.com/stylelint/stylelint/blob/5a8465770b4ec17bb1b47f359d1a17132a204a71/docs/user-guide/rules/list.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1),t._v("，它提供了 170 项规则修改。例如我想要用 4 个空格作为缩进，可以这样配置：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extends"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stylelint-config-standard"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"indentation"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("如果你想格式化 "),a("code",[t._v("sass")]),t._v(" "),a("code",[t._v("scss")]),t._v(" 文件，则需要下载 "),a("code",[t._v("stylelint-scss")]),t._v(" 插件：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm i -D stylelint-scss\n")])])]),a("p",[t._v("然后就可以格式化 scss 文件了。")]),t._v(" "),a("h4",{attrs:{id:"扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[t._v("#")]),t._v(" 扩展")]),t._v(" "),a("p",[t._v("如何格式化 HTML、Vue（或其他后缀） 文件中的 HTML 代码？")]),t._v(" "),a("p",[t._v("这需要利用 VSCode 自带的格式化，快捷键是 "),a("code",[t._v("shift + alt + f")]),t._v("。假设当前 VSCode 打开的是一个 Vue 文件，按下 "),a("code",[t._v("shift + alt + f")]),t._v(" 会提示你选择一种格式化规范。如果没提示，那就是已经有默认的格式化规范了（一般是 vetur 插件），然后 Vue 文件的所有代码都会格式化，并且格式化规则还可以自己配置。")]),t._v(" "),a("p",[t._v("具体规则如下图所示，可以根据自己的喜好来选择格式化规则。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/f532633b2856c8e1cedaa6c38c176151.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("因为之前已经设置过 ESlint 和 Stylelint 的格式化规则了，所以 Vue 文件只需要格式化 HTML 中的代码，因此需要禁止 vetur 格式化 JavaScript 和 CSS 代码：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/64fac739a981493721ae2fbdda495be0.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("根据上图配置完成后，回到刚才的 Vue 文件。随意打乱代码的格式，再按下 "),a("code",[t._v("shift + alt + f")]),t._v(" ，会发现 HTML 代码已经格式化了，但是 JavaScript 和 CSS 代码并没格式化。没关系，因为已经设置了 ESlint 和 Stylelint 格式化，所以只要执行保存操作，JavaScript 和 CSS 的代码也会自动格式化。")]),t._v(" "),a("p",[t._v("同理，其他类型的文件也可以这样设置格式化规范。")]),t._v(" "),a("h2",{attrs:{id:"git-commit-message-验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-commit-message-验证"}},[t._v("#")]),t._v(" git commit message 验证")]),t._v(" "),a("p",[t._v("利用 "),a("a",{attrs:{href:"https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90",target:"_blank",rel:"noopener noreferrer"}},[t._v("git hook"),a("OutboundLink")],1),t._v(" 能在特定的重要动作发生时触发自定义脚本。")]),t._v(" "),a("p",[t._v("验证 commit message 也不例外，我们需要通过 git 的 "),a("code",[t._v("pre-commit")]),t._v(" 钩子函数来进行。当然，你还需要下载一个辅助插件 husky 来帮助你进行验证。")]),t._v(" "),a("blockquote",[a("p",[t._v("pre-commit 钩子在键入提交信息前运行，它用于检查即将提交的快照。")])]),t._v(" "),a("p",[t._v("husky 是一个开源的工具，使用它我们可以在 "),a("code",[t._v("package.json")]),t._v(" 里配置 "),a("code",[t._v("git hook")]),t._v(" 脚本。下面让我们看一下如何使用：")]),t._v(" "),a("p",[t._v("下载")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm i -D husky\n")])])]),a("p",[t._v("在 "),a("code",[t._v("package.json")]),t._v(" 加上下面的代码：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"husky"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hooks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pre-commit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm run lint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commit-msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node script/verify-commit.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pre-push"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm test"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("然后在你项目根目录下新建一个文件夹 "),a("code",[t._v("script")]),t._v("，并在下面新建一个文件 "),a("code",[t._v("verify-commit.js")]),t._v("，输入以下代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" msgPath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HUSKY_GIT_PARAMS")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFileSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msgPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("trim")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 提前定义好 commit message 的格式，如果不符合格式就退出程序。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" commitRE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("^(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|release|workflow)(\\(.+\\))?: .{1,50}")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("commitRE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\n        不合法的 commit 消息格式。\n        请查看 git commit 提交规范：https://github.com/woai3c/Front-end-articles/blob/master/git%20commit%20style.md\n    ")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("现在来解释下各个钩子的含义：")]),t._v(" "),a("ol",[a("li",[a("code",[t._v('"pre-commit": "npm run lint"')]),t._v("，在 "),a("code",[t._v("git commit")]),t._v(" 前执行 "),a("code",[t._v("npm run lint")]),t._v(" 检查代码格式。")]),t._v(" "),a("li",[a("code",[t._v('"commit-msg": "node script/verify-commit.js"')]),t._v("，在 "),a("code",[t._v("git commit")]),t._v(" 时执行脚本 "),a("code",[t._v("verify-commit.js")]),t._v(" 验证 commit 消息。如果不符合脚本中定义的格式，将会报错。")]),t._v(" "),a("li",[a("code",[t._v('"pre-push": "npm test"')]),t._v("，在你执行 "),a("code",[t._v("git push")]),t._v(" 将代码推送到远程仓库前，执行 "),a("code",[t._v("npm test")]),t._v(" 进行测试。如果测试失败，将不会执行这次推送。")])]),t._v(" "),a("p",[t._v("通过工具，我们可以很好的管理团队成员的 git commit 格式，无需使用人力来检查，大大提高了开发效率。")]),t._v(" "),a("p",[a("strong",[t._v("注意事项")]),t._v("：如果 husky 不起作用，请卸载 husky，然后重新下载 4.2.3 版本的 husky，就可以解决此问题。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -D husky@4.2.3\n")])])]),a("h4",{attrs:{id:"lint-staged"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lint-staged"}},[t._v("#")]),t._v(" lint-staged")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("lint-staged")]),t._v(" 可以只对 git 暂存区上的文件进行校验，不需要对所有的文件进行 lint 检查。")]),t._v(" "),a("p",[t._v("安装")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm i -D lint-staged\n")])])]),a("p",[t._v("将原来 "),a("code",[t._v("package.json")]),t._v(" 文件中的代码：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"husky"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hooks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pre-commit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm run lint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commit-msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node script/verify-commit.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pre-push"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm test"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("改为：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"husky"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hooks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pre-commit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lint-staged"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commit-msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node script/verify-commit.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pre-push"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm test"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lint-staged"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"src/**/*.{js,jsx,ts,tsx}"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"test/**/*.{js,jsx,ts,tsx}"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("文件过滤说明：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"*.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"项目下所有的 js 文件（不包含子文件夹）"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"**/*.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"项目下所有的 js 文件"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"src/*.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src 目录所有的 js 文件（不包含子文件夹）"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"src/**/*.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src 目录所有的 js 文件"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("多个后缀匹配：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lint-staged"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"src/**/*.{js,jsx,ts,tsx}"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/typicode/husky",target:"_blank",rel:"noopener noreferrer"}},[t._v("husky"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/stylelint/stylelint/blob/5a8465770b4ec17bb1b47f359d1a17132a204a71/docs/user-guide/rules/list.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("stylelint"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://eslint.bootcss.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);