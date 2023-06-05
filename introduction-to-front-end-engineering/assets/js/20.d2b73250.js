(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{295:function(a,s,t){"use strict";t.r(s);var r=t(14),e=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("Serverless，即无服务架构。是指由第三方云计算供应商以服务的方式为开发者提供所需功能，例如数据库、消息，以及身份验证等。它的核心思想是让开发者专注构建和运行应用，而无需管理服务器。")]),a._v(" "),s("AD"),a._v(" "),s("p",[a._v("Serverless 技术的应用一般有两种：Faas(Function as a Service) 函数即服务和 Baas(Backend as a Service) 后端即服务。")]),a._v(" "),s("h3",{attrs:{id:"优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[a._v("#")]),a._v(" 优点")]),a._v(" "),s("p",[a._v("Serverless 最大的优点就是自动扩展伸缩、无需自己管理。")]),a._v(" "),s("p",[a._v("在以往部署一个应用时，需要经历购买服务器、安装操作系统、购买域名等等一系列步骤，应用才能真正的上线。后来有了云服务器，我们就省去了购买服务器、安装操作系统这些操作步骤。只需要在云服务器上搭建环境、安装数据库就可以部署应用了。")]),a._v(" "),s("p",[a._v("但是这仍然有个问题，当网站访问量过大时，你需要增加服务器；访问量过小时，需要减少服务器。如果使用 Serverless，你就不需要考虑这些，云服务商会帮你管理这一切。云服务商会根据你的访问量自动调整所需的资源。")]),a._v(" "),s("h3",{attrs:{id:"缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[a._v("#")]),a._v(" 缺点")]),a._v(" "),s("p",[a._v("当应用部署在云上，并且使用云存储或云数据库，那可能会让我们的应用访问速度变得比较慢。因为网络的访问速度比内存和硬盘差了一到两个数量级。")]),a._v(" "),s("h2",{attrs:{id:"faas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faas"}},[a._v("#")]),a._v(" Faas")]),a._v(" "),s("p",[s("strong",[a._v("什么是函数即服务？")])]),a._v(" "),s("p",[a._v("一个函数通常用于处理某种业务逻辑，例如一个 "),s("code",[a._v("abs()")]),a._v(" 函数，它将返回所传参数的绝对值。我们可以把这个函数托管到 Faas 平台，由平台提供容器并运行这个函数。当执行函数时，只需要提供函数所需的参数，就可以在不部署应用的情况下得到函数的执行结果。")]),a._v(" "),s("h3",{attrs:{id:"无状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无状态"}},[a._v("#")]),a._v(" 无状态")]),a._v(" "),s("p",[a._v("Faas 运行函数的容器是无状态的，上一次的运行效果和下一次的运行效果是无关的。如果需要存储状态，则需要使用云储存或者云数据库。")]),a._v(" "),s("h3",{attrs:{id:"冷启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#冷启动"}},[a._v("#")]),a._v(" 冷启动")]),a._v(" "),s("p",[a._v("Faas 函数如果长时间未使用，容器就会对其进行回收。所以函数在首次调用或长时间未使用时，容器就需要重新创建该函数的实例，这个过程称为冷启动，一般耗时为数百毫秒。")]),a._v(" "),s("p",[a._v("既然有冷启动，就有热启动。例如容器刚刚调用完函数，过一会又有新的事件触发。这时由于函数仍未被回收，所以可以直接复用原有的函数实例，这被称为热启动。")]),a._v(" "),s("h3",{attrs:{id:"事件驱动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件驱动"}},[a._v("#")]),a._v(" 事件驱动")]),a._v(" "),s("p",[a._v("Faas 函数需要通过触发事件来运行。我们可以指定不同的触发器：")]),a._v(" "),s("ul",[s("li",[a._v("HTTP 触发器")]),a._v(" "),s("li",[a._v("对象存储")]),a._v(" "),s("li",[a._v("定时触发")]),a._v(" "),s("li",[a._v("CDN 触发\n...")])]),a._v(" "),s("p",[a._v("其中 HTTP 触发器是最常见的，即通过 HTTP 请求触发。")]),a._v(" "),s("h3",{attrs:{id:"低成本、按需收费"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#低成本、按需收费"}},[a._v("#")]),a._v(" 低成本、按需收费")]),a._v(" "),s("p",[a._v("像以往我们购买的云服务器一般是采取包月、包年的计费方式，即使你买了不用也要收取费用。Faas 采取的是按需付费的方式，云服务商会根据你的实际使用量来收取费用，不使用不收费（一般来说，Baas 可按需付费，也可包年包月）。")]),a._v(" "),s("h3",{attrs:{id:"需要配合-baas-使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#需要配合-baas-使用"}},[a._v("#")]),a._v(" 需要配合 Baas 使用")]),a._v(" "),s("p",[a._v("Faas 如果单独使用的话，那它只适合部署一些工具类函数。因为它是无状态的，每次运行都可能是在不同的容器上，它不知道上一个函数的运行结果。所以如果要使用 Serverless 来部署整个应用，还得额外购买 OSS 云存储或者云数据库来提供数据存储服务（也就是需要配合 Baas 来使用）。")]),a._v(" "),s("h2",{attrs:{id:"baas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#baas"}},[a._v("#")]),a._v(" Baas")]),a._v(" "),s("p",[s("strong",[a._v("什么是后端即服务？")])]),a._v(" "),s("p",[a._v("假设你是一个前端，现在要开发一个网站。前端部分你可以自己完成，但后端部分怎么办呢？这个时候就可以使用 Baas 了。也就是说，你只需编写和维护前端页面。其他的一切，例如数据库、身份验证、对象存储等等都由云服务商提供。你只需要在前端通过 API 调用它们就可以使用所需的服务。")]),a._v(" "),s("h2",{attrs:{id:"faas-和-baas-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faas-和-baas-的区别"}},[a._v("#")]),a._v(" Faas 和 Baas 的区别")]),a._v(" "),s("p",[a._v("Faas 其实是一个云计算平台，用户可以将自己写的函数托管到平台上运行。而 Baas 则是提供一系列的服务给用户运用，用户通过 API 调用。")]),a._v(" "),s("p",[a._v("其他不同点：")]),a._v(" "),s("ul",[s("li",[a._v("Faas 无状态，Baas 有状态。")]),a._v(" "),s("li",[a._v("Faas 运行的是函数，由开发者自己编写；Baas 提供的是服务，不需要开发者自己开发。")])]),a._v(" "),s("p",[a._v("可以说 Faas 和 Baas 是两个不同的东西，但它们有一个共同点，就是无需自己管理服务器和资源的分配、整理，所以都属于 Serverless。")]),a._v(" "),s("h2",{attrs:{id:"阿里云-faas-实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阿里云-faas-实践"}},[a._v("#")]),a._v(" 阿里云 Faas 实践")]),a._v(" "),s("p",[a._v("现在的阿里云、腾讯云都可以免费体验 Faas，下面以阿里云为例，演示一下如何使用 Faas。")]),a._v(" "),s("p",[a._v("打开"),s("a",{attrs:{href:"https://serverless.aliyun.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("阿里云 serverless"),s("OutboundLink")],1),a._v("，点击立即开通：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/d1aaabe7075ee3468cbf67d3aaabda8f.png",alt:""}})]),a._v(" "),s("p",[a._v("开通后（阿里云每个月提供一定额度的免费流量，可以利用这一点来学习如何使用 Serverless）如果没打开函数计算页面，请点击控制台搜索函数计算：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/9efa98549c7c37aa48802390f89c4264.png",alt:""}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/adfa00893014ad1dea59e1c7b998c405.png",alt:""}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/74d31ca125615c70a0da1799067c31c0.png",alt:""}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/1280613ff1f88b069577f63b081eb5b6.png",alt:""}})]),a._v(" "),s("p",[a._v("然后会提示是否授权，授权成功后，就可以查看刚才创建的函数。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/e36f3cd9cb0a521d4b0b993b5c8026fd.png",alt:""}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/ff48dda427a953153d1afd1831f8f121.png",alt:""}})]),a._v(" "),s("p",[a._v("箭头所指处是一个 API 地址，调用它可以触发你设置的函数。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/c9fb036b0de66c9b886bb686f9f29722.png",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"使用-serverless-框架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-serverless-框架"}},[a._v("#")]),a._v(" 使用 Serverless 框架")]),a._v(" "),s("p",[a._v("从刚才的示例可以发现，要想编写 Faas 函数只能在线编写，或者提前写好复制到阿里云。为了改善这种情况，现在有很多 Serverless 框架，可以让你在本地进行开发，开发完后再部署到阿里云或其他云上。")]),a._v(" "),s("p",[a._v("在这里推荐一下 "),s("a",{attrs:{href:"https://github.com/midwayjs/midway",target:"_blank",rel:"noopener noreferrer"}},[a._v("midway"),s("OutboundLink")],1),a._v(" 框架，主要是国人开发，具有非常详细的中文文档。根据文档的快速指引，就可以成功将函数部署到阿里云或其他云上。")]),a._v(" "),s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[a._v("#")]),a._v(" 小结")]),a._v(" "),s("p",[a._v("Serverless 最大的优点就是弹性扩容和无需亲自管理服务器。即使它也有不少缺点，但相对于优点来说，是可以忽略的，近几年来 Serverless 技术的火热程度也证实了这一点。目前 Serverless 技术仍有很大的发展空间值得我们去探索，毕竟还是一门“出生”不久的新技术。")]),a._v(" "),s("h3",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/62666803",target:"_blank",rel:"noopener noreferrer"}},[a._v("Serverless 是进步的还是退步的？"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.infoq.cn/article/u3eh*z1cfgc9jiriuefv",target:"_blank",rel:"noopener noreferrer"}},[a._v("Serverless世界中，我们仍然需要状态"),s("OutboundLink")],1)])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);