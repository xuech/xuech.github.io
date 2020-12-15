---
title: vue-进阶
tags:
 - vues
categories: 
 - frontEnd
date: 2020-01-05
---
 
## 1、什么是发布/订阅模式、观察者模式？
## 2、如何理解Vue2响应式原理？
## 3、vue 的数据驱动原理及如何实现？
## 4、vuex的工作原理是什么？
## 5、谈一谈nextTick 的原理以及运行机制？
## 6、聊聊keep-alive 的实现原理和缓存策略
`keep-alive` 组件接收三个参数，分别为 `include、exclude、max`
- `include` - 数组、字符串或正则表达式。只有名称匹配的组件会被缓存。
- `exclude` - 数组、字符串或正则表达式。任何名称匹配的组件都不会被缓存。
- `max` - 数字。最多可以缓存多少组件实例。
### 实现原理
组件创建时，新建缓存节点，按序保存key，通过传入的`include、exclude`判断是否命中缓存，命中则从缓存中出vnode实例，否则，加入缓存，判断是否超出最大缓存数量，是，则删除最久未使用节点（LRU）
组件一旦被缓存，再次渲染时将不会调用`created`和`mounted`函数，如要在缓存组件再次渲染时进行操作的话可以在`activated`和 `deactivated` 函数中
### 缓存策略（LRU）
> 从内存中找出最久未使用的数据置换新的数据，类似【手机后台任务】
1. 新数据插入到链表头部；
2. 每当缓存命中（即缓存数据被访问），则将数据移到链表头部；
3. 链表满的时候，将链表尾部的数据丢弃；
  
![3](./imgs/3.0.png)

**代码实现**

[代码](https://github.com/xuech/learning/tree/master/LRU)

[leetcood](https://leetcode-cn.com/problems/lru-cache/solution/lruhuan-cun-ji-zhi-by-leetcode-solution/)

## 7、你阅读过axios的 源码吗 ？Axios主要有哪些特性？

## 8、在vue 中 如何 通过createElement创建虚拟dom?
## 9、如何通过 vue, vue-router, vuex进行权限控制？

## 10、为什么 Vue 中不要用 index 作为 key
- diff算法中通过tag和key判断是否是sameNode
- 减少渲染次数，提升渲染性能

## 11、描述组件渲染和更新过程

*、优化
- 如果一个组件是纯展示且不需要有响应式数据状态的处理的可以使用函数式组件(无状态组件)替换， `functional: true`
  - 无需维护响应数据
  - 无钩子函数
  - 没有`instance`实例,组件内部没有办法像传统组件一样通过this来访问组件属性

- 合理使用`v-if`与`v-show`
  - `v-if` 是惰性的，当条件是`false`的时候不渲染dom，而`v-show`无论如何都渲染dom。
  - `v-if `切换开销大，`v-show`初始渲染开销大。所以对于频繁切换的组件，建议使用`v-show`。

- mixin
- `cache`函数，利用闭包实现缓存
- 二次依赖收集时，`cleanupDeps`, 剔除上一次存在但本次渲染不存在的依赖
- `traverse`,处理深度监听数据，解除循环引用
- 编译优化阶段，`optimize`的主要作用是标记 `static` 静态节点
- `keep-alive`组件利用lRU缓存淘汰算法
- 异步组件，分两次渲染

12-15

12-16
[MVVM](https://juejin.cn/post/6844904149239201800)

12-17

12-18
