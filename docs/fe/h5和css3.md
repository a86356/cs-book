





# html5 和css3

html5+css3 是针对以前的不足，新增加了一些新的标签和新的属性，

这些新的东西有兼容性的问题，基本上ie9+才能用，不过现在也可以使用，除非你做一些很老的项目。

移动端的话可以直接使用











# html5 语义化新标签

之前都是用div+css布局，div的话他是没有语义的，搜索引擎不知道他代表什么

```javascript
<header>  头部标签
<nav>     导航标签
<article> 内容标签
<section></section>  定义文档中的节（section、区段）
<aside></aside> 定义页面的侧边栏内容
<footer> 底部
```

![mark](http://cdn.cs1024.com/images/20191203/Y7n8Muk2ycV1.png?imageslim)















# html5 视频标签

 https://www.runoob.com/tags/tag-video.html 



![mark](http://cdn.cs1024.com/images/20191204/4G9rnmyO1LmR.png?imageslim)

















# html5 音频标签

 https://www.runoob.com/html/html5-audio.html 























# html5 input新类型

更方便的做用户提交的数据验证

- type 属性
  - email
  - url
  - tel       不支持 `"tel"` 类型的浏览器会默认使用 `"text"` 类型输入. 
  - number
  - search
  - time
  - date
  - month 
  - week
  - datetime-local
  - color

















# html5 新增的表单属性



- placeholder                                表单的提示信息           设置他的背景
- required 必须的                          required="required"    
- mutiple 多选 上传文件用            multiple="multiple"    
- autofocus 自动聚焦                    autofocus="autofocus"  
- autocomplete    自动完成          on| off    表单必须又name 属性，并且提交成功



   















# css3 新增选择器-first-child

## 

- E:first-child   只要E元素是它的父级的第一个子元素，就选中
- E:last-child   只要E元素是它的父级的最后一个子元素，就选中
- E:nth-child(n)  只要E元素是它的父级第n个子元素 ，就选中    even 偶数 | odd 奇数行  可以隔行变色  （1 表示第一个）















# css3 新增选择器-first-of-type 



- E:first-of-type   父元素下的第一个E元素，这个元素不必是父元素的第一个元素
- E:last-of-type    父元素下的最后一个E元素，
- E:nth-of-type    父元素的第n个E元素



















##  first-child和first-of-type的不同

E:first-child  父元素下的第一个元素，并且这个元素是E

E:first-of-type 父元素的下的第一个E元素，这个元素不必是父元素的第一个元素

















# css3 新增伪类选择器

- 选择器::after    在元素内部后面插入内容
- 选择器::before 在元素内部的前面插入元素

特点

- before和after 会创建一个元素，属于行内元素
- 新建的这个元素在文档中是找不到的，所以我们称为伪元素
- before和after  必须有content 属性
- 权重是1，和标签选择器一样



















# css3 使用伪元素显示字体图标



























# css3 盒子模型

改变盒子模型的计算方式

语法

```
box-sizing: content-box|border-box|inherit;
```

content-box  : 盒子的宽度 = 内容区宽度（width）+border宽度+padding宽度  （正常的）

border-box:  盒子的宽度  =  width



开发中使用这个属性

```javascript
*{
    box-sizing:border-box
}
```













# css3 计算盒子宽度

可以动态计算元素的宽度

```java
#div1 {
    position: absolute;
    left: 50px;
    width: calc(100% - 100px);
    border: 1px solid black;
    background-color: yellow;
    padding: 5px;
    text-align: center;
}
```









# 

# css3 vw和vh的单位

- vw : 1vw 等于视窗宽度的1%
- vh : 1vh 等于视窗高度的1%

比如设置一半的宽度 ,一半的高度















# css3 flex 布局 

## Flex 布局是什么？

Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为 Flex 布局。

```css
.box{
  display: flex;
}
```

 注意，设为 Flex 布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效。 



## 基本概念

 采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。 

![mark](http://cdn.cs1024.com/images/20191204/1XcNbm7qhhMa.png?imageslim)

 容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做`main start`，结束位置叫做`main end`；交叉轴的开始位置叫做`cross start`，结束位置叫做`cross end`。











 

##  flex容器的属性

 以下6个属性设置在容器上。 

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content



### flex-direction属性

 `flex-direction`属性决定主轴的方向（即项目的排列方向） 

```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

![mark](http://cdn.cs1024.com/images/20191204/WL5M89zC0BoJ.png?imageslim)



- row`（默认值）：主轴为水平方向，起点在左端。
- `row-reverse`：主轴为水平方向，起点在右端。
- `column`：主轴为垂直方向，起点在上沿。
- `column-reverse`：主轴为垂直方向，起点在下沿。

### flex-wrap属性

 默认情况下，项目都排在一条线（又称"轴线"）上。`flex-wrap`属性定义，如果一条轴线排不下，如何换行。 

![mark](http://cdn.cs1024.com/images/20191204/sPagUiNPI1Cp.png?imageslim)

```css
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

 它可能取三个值。 

- `nowrap`（默认）：不换行。 

![mark](http://cdn.cs1024.com/images/20191204/p748Xt4ECl1K.png?imageslim)

- `wrap`：换行，第一行在上方。 

  ![mark](http://cdn.cs1024.com/images/20191204/hvfpJdje0dnW.png?imageslim)

-   `wrap-reverse`：换行，第一行在下方。 

  ![mark](http://cdn.cs1024.com/images/20191204/QT6iMxk12WtI.png?imageslim)

### flex-flow属性

 `flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。 

```css
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```

### justify-content属性

 `justify-content`属性定义了项目在主轴上的对齐方式。 

```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

![mark](http://cdn.cs1024.com/images/20191204/5BvuUrMUSatj.png?imageslim)

 它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。 

- `flex-start`（默认值）：左对齐
- `flex-end`：右对齐
- `center`： 居中
- `space-between`：两端对齐，项目之间的间隔都相等。
- `space-around`：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

### align-items属性

 `align-items`属性定义项目在交叉轴上如何对齐。 

```java
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

![mark](http://cdn.cs1024.com/images/20191204/7yy4koxUhQWf.png?imageslim)

> - `flex-start`：交叉轴的起点对齐。
> - `flex-end`：交叉轴的终点对齐。
> - `center`：交叉轴的中点对齐。
> - `baseline`: 项目的第一行文字的基线对齐。
> - `stretch`（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

### align-content属性

 `align-content`属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。 

```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

![mark](http://cdn.cs1024.com/images/20191204/oXSqGRX8rkWm.png?imageslim)

 该属性可能取6个值。 

```javascript
flex-start：与交叉轴的起点对齐。
flex-end：与交叉轴的终点对齐。
center：与交叉轴的中点对齐。
space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
stretch（默认值）：轴线占满整个交叉轴。
```











### flex项目的属性

 以下6个属性设置在项目上。 

- `order`
- `flex-grow`
- `flex-shrink`
- `flex-basis`
- `flex`
- `align-self`

### order属性

 `order`属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。 

```css
.item {
  order: <integer>;
}
```

![mark](http://cdn.cs1024.com/images/20191204/znaehFCnHjT5.png?imageslim)

### flex-grow属性

 `flex-grow`属性定义项目的放大比例，默认为`0`，即如果存在剩余空间，也不放大。 

```css
.item {
  flex-grow: <number>; /* default 0 */
}
```

 如果所有项目的`flex-grow`属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的`flex-grow`属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。 

![mark](http://cdn.cs1024.com/images/20191205/niwXtBPyLsVV.png?imageslim)

### flex-shrink属性

 `flex-shrink`属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。 

```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```

![mark](http://cdn.cs1024.com/images/20191205/Wh65Q8rVi8zN.png?imageslim)

如果所有项目的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小。如果一个项目的`flex-shrink`属性为0，其他项目都为1，则空间不足时，前者不缩小。

负值对该属性无效。

###  flex-basis属性

 `flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。 

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

 它可以设为跟`width`或`height`属性一样的值（比如350px），则项目将占据固定空间。 

###  flex属性 (常用)

 `flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。 

```css
.item {
  flex:  none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

该属性有两个快捷值：`auto` (`1 1 auto`) 和 none (`0 0 auto`)。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

### align-self属性

 `align-self`属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。 

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

![mark](http://cdn.cs1024.com/images/20191204/1LJk992WhGkA.png?imageslim)































# css flex布局案例

- 实现水平3等分布局

- 实现水平和垂直居中


- 左右布局

























