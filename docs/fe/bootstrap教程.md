# 基本介绍

https://www.bootcss.com/

bootstrap 是一个响应式框架

什么是响应式？

随着屏幕的屏幕的变化，生产不同的布局

https://www.youzhan.org/

核心：媒体查询

下载源码 ，下载2份，源码和生产环境的版本

https://v3.bootcss.com/getting-started/#download

介绍下载的东西

新建index.html，引入生产环境的版本的bootstrap(bootstrap-3.3.7-dist)

jq的cdn https://www.bootcdn.cn/jquery/

# Bootstrap 核心概念

## 容器

```css
container-fluid // 流体容器
container   // 固定容器
```

固定容器的变化 (媒体查询实现) ,查询宽度小的应该放在最上面

```css
小于768px
@media (min-width: 768px)  // 》 768
.container {
    width: 750px;
}

@media (min-width: 992px)   // 》992
.container {
    width: 970px;
}
@media (min-width: 1200px) //》1200
.container {
    width: 1170px;
}


```

## 栅格布局 (grid)

总共12列,多写一些看效果

```javascript
<div class="container">
        <div class="row">
            <div class="col-lg-10">10</div>
            <div class="col-lg-2">2</div>
        </div>
  <div class="row">
            <div class="col-lg-2">2</div>
            <div class="col-lg-2">2</div>
        </div>
  <div class="row">
            <div class="col-lg-10">10</div>
            <div class="col-lg-10">10</div>
        </div>
</div>
```

lg表示什么？ // lg 大屏幕   ，md 中屏幕   sm 平板  xs 移动手机

md,sm,xs表示什么？

# 栅格实现原理

源码里的less，

```javascript
minxin-
  grid.less
  grid.framework.less
grid.less
varible.less  
```

复制上面四个到项目中，

介绍上面四个

```vs
minxin-
  grid.less
  grid.framework.less
grid.less     // 栅格主体
varible.less  //变量
```

看grid.less

先通过mixin.less 引入mixin里面的文件

```javascript
.container-fixed(@gutter: @grid-gutter-width) { //@grid-gutter-width 去变量里找
  margin-right: auto;
  margin-left: auto;
  padding-left:  floor((@gutter / 2));
  padding-right: ceil((@gutter / 2));
  &:extend(.clearfix all);   // 继承自mixin的clearfix
}
```

# 行和列

```javascript
.make-grid-columns(); 
在grid-framework里面
```

```javascript
.make-grid-columns() {
  // Common styles for all sizes of grid columns, widths 1-12
  .col(@index) { // initial
    @item: ~".col-xs-@{index}, .col-sm-@{index}, .col-md-@{index}, .col-lg-@{index}";
    .col((@index + 1), @item);
  }
  .col(@index, @list) when (@index =< @grid-columns) { // general; "=<" isn't a typo
    @item: ~".col-xs-@{index}, .col-sm-@{index}, .col-md-@{index}, .col-lg-@{index}";
    .col((@index + 1), ~"@{list}, @{item}");
  }
  .col(@index, @list) when (@index > @grid-columns) { // terminal
    @{list} {
      position: relative;
      // Prevent columns from collapsing when empty
      min-height: 1px;
      // Inner gutter via padding
      padding-left:  ceil((@grid-gutter-width / 2));
      padding-right: floor((@grid-gutter-width / 2));
    }
  }
  .col(1); // kickstart it
}
```

# 列排序和偏移

```javascript
  .loop-grid-columns(@grid-columns, @class, pull);
  .loop-grid-columns(@grid-columns, @class, push);
```

# 栅格实例

bootstrap 官网的实例

# 自制bootstrap

# bootstrap 项目实战-模块列布局

# bootstrap 项目实战-导航

# bootstrap 项目实战-登录表单



