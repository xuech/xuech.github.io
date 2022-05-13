(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{587:function(_,v,e){"use strict";e.r(v);var s=e(6),t=Object(s.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h2",{attrs:{id:"浏览器页面渲染流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器页面渲染流程"}},[_._v("#")]),_._v(" 浏览器页面渲染流程")]),_._v(" "),e("h3",{attrs:{id:"webkit渲染引擎流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webkit渲染引擎流程"}},[_._v("#")]),_._v(" webkit渲染引擎流程")]),_._v(" "),e("p",[e("a",{attrs:{href:"./imgs/1.png"}},[_._v("1")])]),_._v(" "),e("h3",{attrs:{id:"关键渲染路径"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关键渲染路径"}},[_._v("#")]),_._v(" 关键渲染路径")]),_._v(" "),e("blockquote",[e("p",[_._v("浏览器从最初接收请求来的html、css、js等资源，然后解析、构建树、渲染布局、绘制，最后呈现给客户能看到的界面这整个过程")])]),_._v(" "),e("p",[_._v("浏览器的渲染过程主要包括以下几步")]),_._v(" "),e("ul",[e("li",[_._v("构建对象模型：解析html生成"),e("code",[_._v("DOM Tree")]),_._v("，解析css生成"),e("code",[_._v("CSSOM Tree")])]),_._v(" "),e("li",[_._v("构建渲染树：将"),e("code",[_._v("DOM Tree")]),_._v("与"),e("code",[_._v("CSSOM Tree")]),_._v("合并生成"),e("code",[_._v("Render Tree")])]),_._v(" "),e("li",[_._v("遍历渲染树开始布局（layout），计算每个节点的位置大小信息")]),_._v(" "),e("li",[_._v("将渲染树每个节点绘制（painting）到屏幕")])]),_._v(" "),e("p",[_._v("注意：")]),_._v(" "),e("ul",[e("li",[_._v("当浏览器遇到一个script标签时，DOMTree的构建将被暂停，直至脚本执行完毕")]),_._v(" "),e("li",[_._v("js可以查询和修改DOMTree与CSSOMTree")]),_._v(" "),e("li",[_._v("直至CSSOM构建完毕，js才会执行")]),_._v(" "),e("li",[_._v("脚本在文档中的位置很重要，css资源先于js资源。")])]),_._v(" "),e("h2",{attrs:{id:"js和css对页面渲染的影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js和css对页面渲染的影响"}},[_._v("#")]),_._v(" js和css对页面渲染的影响")]),_._v(" "),e("p",[_._v("css加载不会阻塞DOM树的解析,但会阻塞DOM树的渲染，也会阻塞后面js语句的执行\njs会让CSSOM的构建阻塞DOM的构建")]),_._v(" "),e("h3",{attrs:{id:"defer与async"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#defer与async"}},[_._v("#")]),_._v(" defer与async")]),_._v(" "),e("ul",[e("li",[_._v("defer属性和async属性都能防止脚本下载阻塞页面渲染")]),_._v(" "),e("li",[_._v("两者都只适用于外联脚本")]),_._v(" "),e("li",[_._v("多个声明了defer的脚本则按顺序下载、执行，后者无序")]),_._v(" "),e("li",[_._v("defer脚本会在DOMContentLoaded和load事件之前执行，后者只保证在load事件之前执行")])]),_._v(" "),e("h2",{attrs:{id:"回流和重绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回流和重绘"}},[_._v("#")]),_._v(" 回流和重绘")]),_._v(" "),e("p",[_._v("在操作 DOM 时涉及到元素、样式的修改，就会引起渲染引擎重新计算样式生成 CSSOM 树，同时还有可能触发对元素的重新排布（简称“重排”）和重新绘制（简称“重绘”）。\n引起重排的操作：")]),_._v(" "),e("ul",[e("li",[_._v("修改元素边距、大小")]),_._v(" "),e("li",[_._v("添加、删除元素")]),_._v(" "),e("li",[_._v("改变窗口大小")])]),_._v(" "),e("p",[_._v("重绘：")]),_._v(" "),e("ul",[e("li",[_._v("设置背景图片")]),_._v(" "),e("li",[_._v("修改字体颜色")]),_._v(" "),e("li",[_._v("改变 "),e("code",[_._v("visibility")]),_._v(" 属性值")])]),_._v(" "),e("p",[_._v("重排会导致重绘\n在循环外操作元素")]),_._v(" "),e("h2",{attrs:{id:"几条关于优化渲染效率的建议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#几条关于优化渲染效率的建议"}},[_._v("#")]),_._v(" 几条关于优化渲染效率的建议")]),_._v(" "),e("ul",[e("li",[_._v("合法地去书写 html 和 css ，且不要忘了文档编码类型。")]),_._v(" "),e("li",[_._v("样式文件应当在 head 标签中，而脚本文件在 body 结束前，这样可以防止阻塞的方式。")]),_._v(" "),e("li",[_._v("简化并优化css选择器，尽量将嵌套层减少到最小。")]),_._v(" "),e("li",[_._v("尽量减少在js中进行DOM操作。")]),_._v(" "),e("li",[_._v("修改元素样式时，更改其class属性是性能最高的方法。")]),_._v(" "),e("li",[_._v("尽量用 "),e("code",[_._v("transform")]),_._v(" 来做形变和位移")])]),_._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结：")]),_._v(" "),e("ul",[e("li",[_._v("CSSOMTree需要等到完全构建后才可以被使用，因为后面的属性可能会覆盖掉前面的设置")]),_._v(" "),e("li",[_._v("css被视为阻塞渲染的资源，应放到代码的头部尽快加载")]),_._v(" "),e("li",[_._v("同步的js会暂停DOMTree的构建，应放到代码的尾部最后加载，或者使用async/defer属性异步加载js")]),_._v(" "),e("li",[_._v("重排和重绘会给浏览器渲染线程造成很大的负担，尽量减少重排和重绘的触发次数")])]),_._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/74792085",target:"_blank",rel:"noopener noreferrer"}},[_._v("参考:知乎"),e("OutboundLink")],1),_._v(" "),e("a",{attrs:{href:"https://srtian96.gitee.io/blog/2018/06/01/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B8%B2%E6%9F%93%E5%8E%9F%E7%90%86/",target:"_blank",rel:"noopener noreferrer"}},[_._v("参考:blog"),e("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=t.exports}}]);