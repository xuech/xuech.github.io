---
title: 读Vue官方学习文档笔记（一）
tags:
 - vue
categories: 
 - frontEnd
---

<!-- ::: slot header

## 数据类型

::: -->
#### 优先级 A 的规则：必要的 (规避错误)

* * *
##### 一、组件名应该始终是多个单词的，根组件App除外
例如：
```js
Vue.component('todo-item', {
  // ...
})
export default {
  name: 'TodoItem',
  // ...
}
```
>避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的。

##### 二、组件的 `data` 必须是一个函数
当在组件中使用 `data` 属性的时候 (除了 new Vue 外的任何地方)，它的值必须是返回一个对象的函数。
例如：
```js
export default {
  data () {
    return {
      foo: 'bar'
    }
  }
}
```
然而在一个 Vue 的根实例上直接使用对象是可以的，因为只存在一个这样的实例。
```js
new Vue({
  data: {
    foo: 'bar'
  }
})
```
`反例`：
```js
export default {
  data: {
    foo: 'bar'
  }
}
```
>如果data的值是一个对象时，它会在这个组件的所有实例间共享该对象。当我们重用该组件时，因为所有组件的实例都引用了相同的数据对象，更改其中任意一个就会改动其他数据。为了避免这种问题，每个实例必须生产一个独立的数据对象。在JS中，只要在一个函数中返回这个对象即可。如下：
```js
data: function () {
  return {
    listTitle: '',
    todos: []
  }
}
```

##### 三、Prop 定义应该尽量详细
prop 的定义应该尽量详细，至少需要指定其类型。
例如：
```js
props: {
  status: String
}
// 更好的做法！
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```
`反例`
```js
// 这样做只有开发原型系统时可以接受
props: ['status']
```
>细致的 prop 定义有两个好处：
>* 它们写明了组件的API，所以很容易看懂组件的用法；
>* 在开发环境下，如果向一个组件提供格式不正确的prop，Vue将会告警，以帮助你捕获潜在的错误来源。

##### 四、为 v-for 设置键值
**总是用 key 配合 v-for**
例如
```js
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```
>key的作用主要是快速定位到需要更新的DOM节点，提高效率

##### 五、避免 v-if 和 v-for 用在一起
**永远不要把 v-if 和 v-for 同时用在同一个元素上。**
也就是说不要在遍历数据的时候去判断数据状态是否符合需求
`反例`：
```js
<ul>
  <li
    v-for="user in users"
    v-if="shouldShowUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```
>可以先对需要遍历的数组进行过滤，用过滤后的数据进行遍历！
```js
<ul>
  <li
    v-for="user in activeUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>

computed: {
  activeUsers: function () {
    return this.users.filter(function (user) {
      return user.isActive
    })
  }
}
```

* 过滤后的列表只会在 users 数组发生相关变化时才被重新运算，过滤更高效。

* 使用 v-for="user in activeUsers" 之后，我们在渲染的时候只遍历活跃用户，渲染更高效。

* 解藕渲染层的逻辑，可维护性 (对逻辑的更改和扩展) 更强。

##### 六、为组件样式设置作用域
如果想在单文件中使用`CSS`样式记得使用`scoped`特性
>设置作用域也可以通过 CSS `Modules`，那是一个基于 class 的类似[BEM记号法](https://blog.csdn.net/chenmoquan/article/details/17095465)的策略

例：
```js
<template>
  <button class="button button-close">X</button>
</template>

<!-- 使用 `scoped` 特性 -->
<style scoped>
.button {
  border: none;
  border-radius: 2px;
}

.button-close {
  background-color: red;
}
</style>
```
```js
<template>
  <button :class="[$style.button, $style.buttonClose]">X</button>
</template>

<!-- 使用 CSS Modules -->
<style module>
.button {
  border: none;
  border-radius: 2px;
}

.buttonClose {
  background-color: red;
}
</style>
```

```js
<template>
  <button class="c-Button c-Button--close">X</button>
</template>

<!-- 使用 BEM 约定 -->
<style>
.c-Button {
  border: none;
  border-radius: 2px;
}

.c-Button--close {
  background-color: red;
}
</style>
```

##### 七、私有属性名
例如
```js
var myGreatMixin = {
  // ...
  methods: {
    $_myGreatMixin_update: function () {
      // ...
    }
  }
}
```




