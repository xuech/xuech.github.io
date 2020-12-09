---
title: vue-进阶
tags:
 - vues
categories: 
 - frontEnd
date: 2020-01-05
---

## 
1、什么是发布/订阅模式、观察者模式？
2、如何理解Vue2响应式原理？
10、vue 的数据驱动原理及如何实现？

3、vuex的工作原理是什么？

4、谈一谈nextTick 的原理以及运行机制？

5、聊聊keep-alive 的实现原理和缓存策略

6、你阅读过axios的 源码吗 ？Axios主要有哪些特性？

8、在vue 中 如何 通过createElement创建虚拟dom?
9、如何通过 vue, vue-router, vuex进行权限控制？

11、为什么 Vue 中不要用 index 作为 key
- diff算法中通过tag和key判断是否是sameNode
- 减少渲染次数，提升渲染性能

12、描述组件渲染和更新过程

*、优化
- 如果一个组件是纯展示且不需要有响应式数据状态的处理的可以使用函数式组件(无状态组件)替换， `functional: true`
  - 无需维护响应数据
  - 无钩子函数
  - 没有`instance`实例,组件内部没有办法像传统组件一样通过this来访问组件属性

- 合理使用`v-if`与`v-show`
  - `v-if` 是惰性的，当条件是`false`的时候不渲染dom，而`v-show`无论如何都渲染dom。
  - `v-if `切换开销大，`v-show`初始渲染开销大。所以对于频繁切换的组件，建议使用`v-show`。

- mixin