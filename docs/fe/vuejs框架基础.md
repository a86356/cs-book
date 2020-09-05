# vue简介

vuejs是一款渐进式框架

渐进式：有浅入深，有简单到复杂

官网： https://cn.vuejs.org/

优点：

- 体积小，压缩后才33kb

-  使用虚拟dom：可以减少dom的操作，

- 双向数据绑定
- 生态丰富，社群人多，入门容易

虚拟dom（先大致了解有这个东西）

https://segmentfault.com/a/1190000016647776

# 安装

1. 直接使用js

   [https://cn.vuejs.org/v2/guide/#%E8%B5%B7%E6%AD%A5](https://cn.vuejs.org/v2/guide/#起步)

2. vue-cli 工具

cli介绍

https://cli.vuejs.org/zh/guide/

初学者不推荐cli，推荐使用第一种直接引入的方式

# 创建第一个vue应用

```html
<div id="app">
  {{ message }}
</div>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

# vue生命周期

# 模板插值语法

# 模块的指令语法

# class和style的绑定

# 条件渲染

# 列表循环

# 事件处理

# 表单输入绑定





