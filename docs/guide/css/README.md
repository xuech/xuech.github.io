## CSS 基础知识

### 定位
- absolut与relative分别依据什么定位？
  - 
- 居中对齐有哪些方法
  - [1.md](1.md)

  
### 布局
- 盒模型
  - 盒模型的宽度如何计算
    - offsetWidth = 内容W + 内边距 + 边框
    - border-box
  - margin纵向重叠问题
- BFC
  - BFC理解和应用
  - [2.md](2.md)
- float
  - 布局问题，以及clearfix
  - [3.md](3.md)
- flex
  - 容器常见：
    - flex-direction(主轴的方向): row | row-reverse | column | column-reverse
    - flex-wrap
    - justify-content(主轴上的对齐方式): flex-start | flex-end | center | space-between | space-around
    - align-items(交叉轴上对齐方式): flex-start | flex-end | center | baseline | stretch
  - flex属性
    - [MDN-Flex属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)
    - [实战教程](https://juejin.cn/post/6844904148324843534)
  - align-self属性（单个项目有与其他项目不一样的对齐方式）: auto | flex-start | flex-end | center | baseline | stretch
  - flex画色子

### 移动端响应式
- rem
  - rem是什么？如何实现响应式？
- media query
- vm/vh
- [4.md](4.md)


### css3
- 动画
- 渐变

### `line-height`的继承问题?
```css
body {
  font-size: 20px;
  /* 第一种情况：父元素直接给出具体数值 则p标签的line-height直接继承*/
  line-height: 16px;
  /* 第二种情况：给了一个系数值，p的 line-height = 1.5*自己的font-size = 1.5*16 = 24px*/
  line-height: 1.5;
  /* 第三种情况：给了一个百分比，p的 line-height = 200%*父元素的font-size = 200%* 20px = 40px */
  line-height: 200%;
}

p {
  font-size: 16px;
}
```


