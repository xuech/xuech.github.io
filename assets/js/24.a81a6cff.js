(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{513:function(t,s,a){t.exports=a.p+"assets/img/Vue.9c3047a8.png"},572:function(t,s,a){"use strict";a.r(s);var e=a(6),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("img",{attrs:{src:a(513),alt:"vue"}})]),t._v(" "),e("h2",{attrs:{id:"组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[t._v("#")]),t._v(" 组件")]),t._v(" "),e("h3",{attrs:{id:"父子组件的生命周期及调用顺序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#父子组件的生命周期及调用顺序"}},[t._v("#")]),t._v(" 父子组件的生命周期及调用顺序")]),t._v(" "),e("ul",[e("li",[t._v("单个组件\n"),e("ol",[e("li",[t._v("挂载\n"),e("ul",[e("li",[e("code",[t._v("beforeCreate")])]),t._v(" "),e("li",[e("code",[t._v("created")])]),t._v(" "),e("li",[e("code",[t._v("beforeMounte")])]),t._v(" "),e("li",[e("code",[t._v("mounted")])])])]),t._v(" "),e("li",[t._v("更新\n"),e("ul",[e("li",[e("code",[t._v("beforeUpdate")])]),t._v(" "),e("li",[e("code",[t._v("updated")])])])]),t._v(" "),e("li",[t._v("销毁\n"),e("ul",[e("li",[e("code",[t._v("beforeDestroy")])]),t._v(" "),e("li",[e("code",[t._v("destroyed")])])])])])]),t._v(" "),e("li",[t._v("父子组件\n"),e("ul",[e("li",[t._v("从外到内创建，从内向外渲染")]),t._v(" "),e("li",[t._v("父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted")]),t._v(" "),e("li",[t._v("父beforeUpdate->子beforeUpdate->子updated->父updated")]),t._v(" "),e("li",[t._v("父beforeDestroy->子beforeDestroy->子destroyed->父destroyed")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("何时需要使用"),e("code",[t._v("beforeDestory")]),t._v("？")])]),t._v(" "),e("ul",[e("li",[t._v("解绑自定义事件 "),e("code",[t._v("event.$off")])]),t._v(" "),e("li",[t._v("清楚定时器")]),t._v(" "),e("li",[t._v("解绑自定义DOM事件，window、scroll等")])]),t._v(" "),e("h3",{attrs:{id:"组件间通信的方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件间通信的方式"}},[t._v("#")]),t._v(" 组件间通信的方式")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("v-bind")]),t._v(" 和 "),e("code",[t._v("props")]),t._v(" （通过绑定属性进行传值）         父 -> 子")]),t._v(" "),e("li",[e("code",[t._v("v-on")]),t._v(" 和 "),e("code",[t._v("$emit")]),t._v(" （通过触发事件进行传值）           子 -> 父")]),t._v(" "),e("li",[e("code",[t._v("$ref、$parent、$children")]),t._v("（通过获取到dom进行传值）")]),t._v(" "),e("li",[e("code",[t._v("provide")]),t._v("和"),e("code",[t._v("inject")]),t._v(" （使用依赖注入进行传值）         父 -> 孙")]),t._v(" "),e("li",[e("code",[t._v("$attrs")]),t._v(" 和 "),e("code",[t._v("$listeners")]),t._v(" (获取剩余参数进行传值)     父 -> 孙/子")]),t._v(" "),e("li",[e("code",[t._v("EventBus")]),t._v(" (利用事件总线进行传值)                   兄 -> 兄")]),t._v(" "),e("li",[e("code",[t._v("vuex")]),t._v(" （利用 "),e("code",[t._v("vuex")]),t._v(" 插件进行传值）"),e("br"),t._v(" "),e("a",{attrs:{href:"https://juejin.cn/post/6844903925716353031",target:"_blank",rel:"noopener noreferrer"}},[t._v("总结的比较好的文章"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"异步组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异步组件"}},[t._v("#")]),t._v(" 异步组件")]),t._v(" "),e("blockquote",[e("p",[t._v("按需加载，异步加载大组件")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("components"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("HelloWorld")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./components/HelloWorld.vue'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("h3",{attrs:{id:"动态组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动态组件"}},[t._v("#")]),t._v(" 动态组件")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("component "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("is"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dt"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Xinput "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./components/Xinput.vue'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dt"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Xinput'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("p",[t._v("一般用在图文混排的列表页面中，因为你不知道出现的文章格式是什么样子的\n当然也可以用v-if来实现")]),t._v(" "),e("p",[t._v("问：")]),t._v(" "),e("ul",[e("li",[t._v("v-if和v-show及动态组件的区别？")]),t._v(" "),e("li",[t._v("v-if和v-for的优先级？\n"),e("ul",[e("li",[t._v("在 vue 2.x 中，在一个元素上同时使用 "),e("code",[t._v("v-if")]),t._v(" 和 "),e("code",[t._v("v-for")]),t._v(" 时，"),e("code",[t._v("v-for")]),t._v(" 会优先作用。")]),t._v(" "),e("li",[t._v("在 vue 3.x 中，"),e("code",[t._v("v-if")]),t._v(" 总是优先于 "),e("code",[t._v("v-for")]),t._v(" 生效。")]),t._v(" "),e("li",[t._v("最佳做法，把过滤放在"),e("code",[t._v("computed")]),t._v("里面")])])])]),t._v(" "),e("h3",{attrs:{id:"与keep-alive结合使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#与keep-alive结合使用"}},[t._v("#")]),t._v(" 与keep-alive结合使用")]),t._v(" "),e("blockquote",[e("p",[t._v("缓存组件，一般在频繁切换且不需要重复渲染的情况下使用\n与v-show的区别")])]),t._v(" "),e("h2",{attrs:{id:"v-if和v-for哪个优先级高"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-if和v-for哪个优先级高"}},[t._v("#")]),t._v(" v-if和v-for哪个优先级高")]),t._v(" "),e("p",[t._v("当我们使用compiler对代码进行编译时，实际上是将v-for转为一个循环体，里面放着一个if语句的\n判断，不满足条件时返回了一个空，这样对性能是有损耗的，所以for的优先级比if高\n而且我们一般不同时使用if和for，而是使用computed计算属性对需要遍历的数据进行一次过滤")]),t._v(" "),e("h2",{attrs:{id:"vue中组件name的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue中组件name的作用"}},[t._v("#")]),t._v(" vue中组件name的作用")]),t._v(" "),e("ul",[e("li",[t._v("当项目使用keep-alive时，可搭配组件name进行缓存过滤")]),t._v(" "),e("li",[t._v("方便调试")])]),t._v(" "),e("h2",{attrs:{id:"vue-nexttick"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-nexttick"}},[t._v("#")]),t._v(" Vue.$nextTick")]),t._v(" "),e("blockquote",[e("p",[t._v("修改页面数据后立即调用该方法才能获取更新后的DOM")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ul v"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"it in list"')]),t._v(" ref"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ullist"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("li"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("it"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("li"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ul"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button @click"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"updateMessage"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("点我"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    list"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nmethods"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("updateMessage")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("$nextTick")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//上面注释掉时页面上显示1，2，3，4，但是DOM数据并没有更新")]),t._v("\n    console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ullist"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("没有调用"),e("code",[t._v("await this.$nextTick()")]),t._v("时\n"),e("a",{attrs:{href:"imgs/1.0.png"}},[t._v("1.0")])]),t._v(" "),e("h2",{attrs:{id:"mixin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mixin"}},[t._v("#")]),t._v(" mixin")]),t._v(" "),e("blockquote",[e("p",[t._v("对有相同逻辑的多个组件进行抽离")])]),t._v(" "),e("p",[t._v("问题：")]),t._v(" "),e("ul",[e("li",[t._v("可读性差")]),t._v(" "),e("li",[t._v("可能造成命名冲突")])]),t._v(" "),e("h2",{attrs:{id:"vuex"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuex"}},[t._v("#")]),t._v(" vuex")]),t._v(" "),e("p",[t._v("四大核心："),e("code",[t._v("state、getters、action、mutation")])]),t._v(" "),e("h2",{attrs:{id:"vue-router"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-router"}},[t._v("#")]),t._v(" vue-router")]),t._v(" "),e("ul",[e("li",[t._v("路由模式： hash、history")]),t._v(" "),e("li",[t._v("路由配置：动态路由、懒加载")])])])}),[],!1,null,null,null);s.default=r.exports}}]);