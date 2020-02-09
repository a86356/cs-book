# 前置工作

至少写过一个vue的项目

对js比较了解

## flow

facebook出的一个js静态类型检查工具，类似typescript,vue3.0就用ts写了

为啥flow？

js灵活，弱类型，容易写出一些隐蔽的bug

flow就是类型检查，就是在编译阶段发现类型的错误，和java这些强类型语言

## flow怎么工作的

https://flow.org/



类型判断：通过变量的使用上下文来推断出变量类型，然后根据这些推断来检查类型

类型判断：它不需要任何代码修改即可进行类型检查，最小化开发者的工作量。它不会强制你改变开发习惯，因为它会自动推断出变量的类型。这就是所谓的类型推断，Flow 最重要的特性之一。

安装

```javascript
npm i -g flow-bin
```

运行测试

```javascript
// @flow
function square(n: number): number {
  return n * n;
}

square("2"); // Error!
```

检查，git bash

```javascript
flow
```

## 目录设计

## 源码构建

rollup

只编译js，更轻

webpack

编译js,less,css ，图片这些都编译

看package.json

npm run build

## runtime-only和runtime-compiler

https://www.jianshu.com/p/466510d84e36

## 编译入口

# 数据驱动

视图的修改，不是直接改dom，而是通过修改dom

jquery，修改dom，

优点：代码少，速度快，有利于维护



写个demo

分析数据如何映射到dom

## new vue

## data的初始化

访问this.message是通过代理的方式

## mount实现

## render 实现



 