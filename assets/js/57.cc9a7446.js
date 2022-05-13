(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{582:function(t,_,v){"use strict";v.r(_);var e=v(6),a=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"脚手架执行准备过程实现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#脚手架执行准备过程实现"}},[t._v("#")]),t._v(" 脚手架执行准备过程实现")]),t._v(" "),v("h2",{attrs:{id:"_1、检查root启动"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、检查root启动"}},[t._v("#")]),t._v(" 1、检查root启动")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("process.geteuid()")]),t._v(" "),v("ul",[v("li",[t._v("返回 0， 代表超级管理员")]),t._v(" "),v("li",[t._v("返回501，代表登录用户")])])]),t._v(" "),v("li",[t._v("使用"),v("code",[t._v("root-check")]),t._v(" 降级权限")])]),t._v(" "),v("h2",{attrs:{id:"_2、检查用户主目录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、检查用户主目录"}},[t._v("#")]),t._v(" 2、检查用户主目录")]),t._v(" "),v("p",[t._v("使用"),v("code",[t._v("user-home")]),t._v(" 获取用户主目录")]),t._v(" "),v("blockquote",[v("p",[t._v("windows电脑反馈说这个一直有问题！后期排查")])]),t._v(" "),v("h2",{attrs:{id:"_3、检查入参"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、检查入参"}},[t._v("#")]),t._v(" 3、检查入参")]),t._v(" "),v("blockquote",[v("p",[t._v("在 debug 模式下，使用 log.verbose() 打印日志。但log.verbose() 打印日志，正常状态下，是不能打印的。所以这里我们需要解析参数，判断是否是 debug 模式。\n使用"),v("code",[t._v("minimist")]),t._v(",解析参数")])]),t._v(" "),v("h2",{attrs:{id:"_4、检查环境变量"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、检查环境变量"}},[t._v("#")]),t._v(" 4、检查环境变量")]),t._v(" "),v("blockquote",[v("p",[v("code",[t._v("dotenv")]),t._v(" 获取环境变量")])]),t._v(" "),v("ul",[v("li",[t._v("在用户主目录下创建 .env 文件存储和读取环境变量")]),t._v(" "),v("li",[t._v("默认路径："),v("code",[t._v("path.resolve(process.cwd(), '.env')")])]),t._v(" "),v("li",[t._v("从 .env 环境中获得的值，放在了 "),v("code",[t._v("process.env")]),t._v(" 中")])]),t._v(" "),v("h2",{attrs:{id:"_5、检查当前是否为最新版本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5、检查当前是否为最新版本"}},[t._v("#")]),t._v(" 5、检查当前是否为最新版本")]),t._v(" "),v("blockquote",[v("p",[t._v("使用 npm API， 获取所有版本号: http://registry.npmjs.org/@medlog-cli-dev/core")])]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[t._v("将文件后缀名改为.mjs\n"),v("ol",[v("li",[t._v("导入时全部使用import语法")])])])]),t._v(" "),v("h2",{attrs:{id:"_7、其他"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7、其他"}},[t._v("#")]),t._v(" 7、其他")]),t._v(" "),v("p",[t._v("1、每次从npm安装依赖后都需要手动再执行npm link，否则链接失效？")]),t._v(" "),v("p",[t._v("2、一些辅助库")]),t._v(" "),v("h3",{attrs:{id:"npmlog"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#npmlog"}},[t._v("#")]),t._v(" npmlog")]),t._v(" "),v("blockquote",[v("p",[t._v("对终端打印的信息做彩色处理")])]),t._v(" "),v("ul",[v("li",[t._v("level：再不同的环境中是否显示打印信息")]),t._v(" "),v("li",[t._v("heading：在打印行信息中添加head")]),t._v(" "),v("li",[t._v("addLevel：自定义打印信息")])]),t._v(" "),v("h3",{attrs:{id:"colors"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#colors"}},[t._v("#")]),t._v(" colors")]),t._v(" "),v("blockquote",[v("p",[t._v("和上面的类似也是对打印信息做高亮处理")])])])}),[],!1,null,null,null);_.default=a.exports}}]);