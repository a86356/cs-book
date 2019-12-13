











# css简介

解决什么问题。页面丑

- css 层叠样式表 (英文全称：Cascading Style Sheets)是一种用来表现HTML 

- 样式？

- 设置字体大小，字体颜色，图片，边框，所有外在的东西，都可以用css来设置，css就是一个html美化的工具

- 层叠

  - 网页其实是一层一层叠起来的
  - 如何看  https://www.cnblogs.com/martinl/p/6040391.html 

- css什么用？

- 给网页的各个层次设置样式

- 写一个demo

  - css键值对结构，分号分隔

    



















# 写css的三种方式

我们可以通过下面3种方式写css样式

- 内联样式: 写在标签的style属性里面,只有在该标签里生效，不方便复用
- 在head里面写style，并且在style里面写，不同的html不方便复用
- 外部引入样式，最推荐使用该方式















名称:行者课堂 

网址:cs1024.com

qq/微信:100000356

# css 语法

语法规范：

css的语法由2个部分组成，选择器和一条或条声明

![image-20191127091604287](F:\project\cs-book\docs\fe\image-20191127091604287.png)

写一个上面的demo

- 选择器:选中html中的元素

- 声明

- 属性：对选择器设置的样式属性

- 值：对选择器设置属性的值
- 属性和值用冒号分隔
- 声明之间用分号分隔

```css
选择器 {
     属性1:属性值1;
     属性2:属性值2;
}
h1 {
    color: green;
    font-size: 100px;
}
```







名称:行者课堂 

网址:cs1024.com

qq/微信:100000356

# css 书写规范

- 写单行

  ```javascript
    h1 {color: green;font-size: 100px;}
  ```

- 分行写 (推荐)

  ```java
  h1 {
      color: green;
      font-size: 100px;
  }
  ```

  - 花括号和选择器之间一个空格
  - 属性值后面的冒号和值之间保留一个空格













































名称:行者课堂 

网址:cs1024.com

qq/微信:100000356

# css的选择器作用

选择器的作用：选出正确的html标签



我们有这样一个需求，把p标签的内容变成红色，div 变成蓝色

```javascript
<div>我是一个div</div>
<p>我是一个段落</p>
```

















名称:行者课堂 

网址:cs1024.com

qq/微信:100000356

# css 标签选择器

- css 选择器有哪些？

  https://www.w3school.com.cn/cssref/css_selectors.asp 

- 标签选择器

  - 用html 标签作为选择器，为页面的某类标签设置css样式
  - 会把样式设置到所有对应的标签

  













网址:cs1024.com，qq/微信:100000356

# css 类选择器

给单独的标签设置样式

```javascript
.类名 {
     属性1:属性值1;
     属性2:属性值2;
}
```

- 类名是自已起的名字，一般用英文或者拼音，不要使用中文，纯数字

- 长名字可以用-区分，

  ```javascript
  .best-person{}
  ```

- 类名要有意义，让别人通俗易懂

- css约定的类名规范，按照规范来，别人和自己更容易看懂和维护

  

  ```java
   CSS命名规则
  
       　　头：header
       　　内容：content/container
       　　尾：footer
       　　导航：nav
       　　侧栏：sidebar
       　　栏目：column
       　　页面外围控制整体布局宽度：wrapper
       　　左右中：left right center
       　　登录条：loginbar
       　　标志：logo
       　　广告：banner
       　　页面主体：main
       　　热点：hot
       　　新闻：news
       　　下载：download
       　　子导航：subnav
       　　菜单：menu
       　　子菜单：submenu
       　　搜索：search
       　　友情链接：friendlink
       　　页脚：footer
       　　版权：copyright
       　　滚动：scroll
       　　内容：content
       　　标签页：tab
       　　文章列表：list
       　　提示信息：msg
       　　小技巧：tips
       　　栏目标题：title
       　　加入：joinus
       　　指南：guild
       　　服务：service
       　　注册：regsiter
       　　状态：status
       　　投票：vote
       　　合作伙伴：partner
  CSS+DIV的命名规则：
  　　登录条:loginBar
  　　标志:logo
  　　侧栏:sideBar
  　　广告:banner
  　　导航:nav
  　　子导航:subNav
  　　菜单:menu
  　　子菜单:subMenu
  　　搜索:search
  　　滚动:scroll
  　　页面主体:main
  　　内容:content
  　　标签页:tab
  　　文章列表:list
  　　提示信息:msg
  　　小技巧:tips
  　　栏目标题:title
  　　友情链接:friendLink
  　　页脚:footer
  　　加入:joinus
  　　指南:guild
  　　服务:service
    　热点:hot
  　　新闻:news
  　　下载:download
  　　注册:regsiter
  　　状态:status
  　　按钮:btn
  　　投票:vote
  　　合作伙伴:partner
  　　版权:copyRight
  　　1.CSSID的命名
  　　外套:wrap
  　　主导航:mainNav
  　　子导航:subnav
  　　页脚:footer
  　　整个页面:content
  　　页眉:header
  　　页脚:footer
  　　商标:label
  　　标题:title
  　　主导航:mainNav(globalNav)
  　　顶导航:topnav
  　　边导航:sidebar
  　　左导航:leftsideBar
  　　右导航:rightsideBar
  　　旗志:logo
  　　标语:banner
  　　菜单内容1:menu1Content
  　　菜单容量:menuContainer
  　　子菜单:submenu
  　　边导航图标:sidebarIcon
  　　注释:note
  　　面包屑:breadCrumb(即页面所处位置导航提示)
  　　容器:container
  　　内容:content
  　　搜索:search
  　　登陆:login
  　　功能区:shop(如购物车，收银台)
  　　当前的current
  　　2.样式文件命名
  　　主要的:master.css
  　　布局版面:layout.css
  　　专栏:columns.css
  　　文字:font.css
  　　打印样式:print.css
  　　主题:themes.css
  ```

  



























网址:cs1024.com，qq/微信:100000356

# css 类的小练习

- 给一句话加上不同的颜色

  ```javascript
   <div>
          举头望明月，低头思故乡
  
      </div>
  上半句变红，下半句变蓝色
  ```

  











网址:cs1024.com，qq/微信:100000356

# css 使用多类名

可以再class 上加多个类名，并且用空格隔开

```html
 <div class="red big">
        举头望明月
    </div>
```

多类名的情况下，对于同一属性来说，后面类名的样式会覆盖前面类名的样式

```
<div class="red green">举头望明月</div>

```







网址:cs1024.com，qq/微信:100000356

# css id选择器

id 选择器可以为特定的html元素指定样式

语法

ID 选择器前面有一个 # 号 - 也称为棋盘号或井号。 

```javascript
#id名 {
	属性名: 属性值;
}
```

- id 相同的页面我们只能定义一个一样的，唯一的，class可以有多个一个的

  ```javascript
     <!--错误写法-->
      <div id="my">
          举头望明月
      </div>
      <div id="my">
          举头望明月
      </div>
      
      <!--正确写法-->
      <div class="b"></div>
      <div class="b"></div>
  ```

- id 经常和js搭配使用











网址:cs1024.com，qq/微信:100000356

# css 通配符选择器

 通配选择器用一个星号（*）表示。单独使用时，这个选择器可以与文档中的任何元素匹配，就像一个通配符。 

语法

```javascript
* {
    margin: 0;
}
```



































网址:cs1024.com，qq/微信:100000356

# css font-family字体系列

设置文字的字体系列

```javascript
body {
            font-family: "微软雅黑","Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;
        }
```

- 尽量使用浏览器默认的字体，假如你设置的字体。用户的电脑上没有，就会乱码。
- 参考其他网站  https://www.jianshu.com/p/afe4036a01f7 
- 2个单词的用引号包裹，单词中间用空格分隔
- 优先使用左边的字体
- body 设置的是全局的字体，任何标签都会使用

- 计算机的字体文件存储的位置       操作系统安装盘:\Windows\Fonts 









# css  font-size字体大小

font-size 可以设置字体的大小

```javascript
  body {
      font-size: 12px;
  }
```

- px 表示像素，像素越大，字体越大
- 什么是像素
- 不同的浏览器的默认字体大小不一样，我们需要根据效果图，设置统一的文字大小
- 设置了body的字体大小，整个页面都会用这个文字大小











# css font-weight 字体粗细

font-weight 可以设置字体的粗细

语法

```javascript
body {
    font-weight: bold;
}
https://www.w3school.com.cn/cssref/pr_font_weight.asp
```

-  normal    默认值。定义标准的字符。 
-  bold   定义粗体字符。
-  数字   定义由粗到细的字符。400 等同于 normal，而 700 等同于 bold。 
-  用normal取消加粗标签的加粗效果









# css font-style 文本风格

 font-style 属性定义字体的风格。 

```javascript
.bc{
    font-style:normal;
}
```

- 文档  https://www.w3school.com.cn/cssref/pr_font_font-style.asp 
- normal   默认值。浏览器显示一个标准的字体样式。
- italic   浏览器会显示一个斜体的字体样式。 
- 让em ，i标签倾斜的字体变正









# css font 字体复合属性

我们可以把上面设置的字体的语句写在一个属性里面，节省代码

```javascript
body{
    font:font-style font-weight font-size/line-height font-family
}
// 例子
.bc{
    font:italic bold 12px/20px "宋体","微软雅黑" ;
}
```

- 顺序不能换，值用空格隔开

- 必须保留 font-size和font-family，否则font属性 不生效











行者课堂  网址:cs1024.com，qq/微信:100000356

# css 文字颜色

设置文本的颜色

语法

```javascript
.bc{
    color: red;
}
```

-   文档https://www.w3school.com.cn/cssref/pr_text_color.asp 
-   英文值： https://www.sioe.cn/yingyong/yanse-rgb-16/ 
-   16进制 开发中最常用的
-   rgb  

```java
.bc{
    color: red;
    color: rgb(	255,182,193);
    color: #FFB6C1;
}
```









行者课堂  网址:cs1024.com，qq/微信:100000356

# css 文本对齐

语法

```javascript
.bc{
    text-align: center;
}

```

- 文档  https://www.w3school.com.cn/cssref/pr_text_text-align.asp 

- | 值     | 描述                                     |
  | :----- | :--------------------------------------- |
  | left   | 把文本排列到左边。默认值：由浏览器决定。 |
  | right  | 把文本排列到右边。                       |
  | center | 把文本排列到中间。                       |

















行者课堂  网址:cs1024.com，qq/微信:100000356

# css 文本装饰

text-decoration可以给文本添加上划线，下划线，删除线

语法

```javascript
h1 {text-decoration: overline}

```

- | 值           | 描述                     |
  | :----------- | :----------------------- |
  | none         | 默认。定义标准的文本。   |
  | underline    | 定义文本下的一条线。     |
  | overline     | 定义文本上的一条线。     |
  | line-through | 定义穿过文本下的一条线。 |

- 取消a标签的下划线







行者课堂  网址:cs1024.com，qq/微信:100000356

# css 文本缩进

text-indent 属性用来设置指定文本的第一行的缩进，通常做段落的首行缩进

效果 http://news.rexian.net.cn/2019/1128/657659.shtml 

语法

```javascript
p{
    text-indent: 10px;
}

```

- em 相对单位 ， 当前元素的（font-size）1个文字大小，设置为2em 的话，就是缩颈2个文字







行者课堂  网址:cs1024.com，qq/微信:100000356

# css line-height 行高

line-height 设置文字行与行之间的距离



行高图示

 https://www.cnblogs.com/zhangyachen/p/8035661.html 

- 一行文本的行高为：上间距 + 文本的高度+下间距，并且上间距是等于下间距的。 

- 修改行高，改变的是上下两个间距的距离

demo

```javascript
p{
    line-height:30px
    font-size:12px
}

```

- 字体12px ，上下间距分别是9px
- 快速测量行高  http://news.rexian.net.cn/2019/1128/657659.shtml 











行者课堂  网址:cs1024.com，qq/微信:100000356

# css 在webstorm里面使用emmet语法

emmet 可以帮你快速编写html和css

### html 编写

初始化结构

```javascript
！=> Tab

```

id和class 快捷键

```javascript
div#test
div.test

```

 子节点，兄弟节点

```javascript
div>ul>li>p
div+ul+p

```

重复

```javascript
div*5

```

内容

```javascript
h1{zhangsan} 

```

递增

```javascript
select>.box$*3

```



### css 编写

```javascript
w100
h100
lh100px
ti2px
dn
db
mt
mr
ml
pl
pt

```









# css 后代选择器

可以选择父元素里面的子元素

语法

```javascript
div p {
    color: red;
}

```











行者课堂  网址:cs1024.com，qq/微信:100000356

# css 子元素选择器

 **与后代选择器相比，子元素选择器（Child selectors）只能选择作为某元素子元素的元素。** 

语法

```javascript
div>a{
    color: red;
}

```









行者课堂  网址:cs1024.com，qq/微信:100000356

# css 并集选择器

并集选择器可以选择多组标签，同时给他们设置相同的样式

```javascript
div,p{
    color: red;
}

```

- 任何选择器都可以和其他选择器组成并集选择器

  











# css 伪类选择器-a标签的伪类

给某些选择器添加特殊的效果，必须选择第一个元素

伪类选择器书写用到冒号:.比如 a:hover

a 标签的伪类

```javascript
没有被访问过的链接 a:link{}
鼠标已经点击过了 a:visited {}
鼠标悬停 a:hover {}
鼠标按下没有弹起a:active {}

```

- 为了保证生效， 书写顺序 lvha  :link :visited :hover :active           lv哈哈哈哈哈
- a 标签有默认样式，我们需要单独他的设置样式















# css 伪类选择器 :focus选择器

:focus 伪类选择器用于选取获得焦点的表单元素

一般情况只有input标签有才的,textarea

```javascript
input:focus{
    color: red;
}

```















行者课堂  网址:cs1024.com，qq/微信:100000356

# css  块级元素

通常，我们根据显示方式，把html元素分为块级元素，内联元素

常见的块级元素

```javascript
address – 地址 
blockquote – 块引用 
dir – 目录列表 
div – 常用块级容易，也是CSS layout的主要标签 
dl – 定义列表 
fieldset – form控制组 
form – 交互表单 
h1 – h6 标题 
hr – 水平分隔线 
menu – 菜单列表 
ol – 有序表单 
p – 段落 
pre – 格式化文本 
table – 表格 
ul – 无序列表 
li
```



- 块级元素会独占一行，
- 块级元素可以设置宽高 
- 块级元素可以设置margin，padding
- 默认情况下宽度自动填满其父元素宽度 
- 里面可以放内联元素或块级元素









行者课堂  网址:cs1024.com，qq/微信:100000356

# css 内联元素

常见的内联元素

```javca
a，span，em，strong，i
```

特点

- 内联元素(inline)不会独占一行，相邻的内联元素会排在同一行
- 内联元素不可以设置宽高 
- 内联元素可以设置margin，padding，但只在水平方向有效。
- 其宽度随内容的变化而变化。 
- 行内元素里面只能放行内元素

- a 里面不能在放a标签
- a是特殊情况，里面可以放块级元素，但是最好把a标签设置成块级元素











行者课堂  网址:cs1024.com，qq/微信:100000356

# css 行内块元素

常见的行内块元素

```javascript
img,input
```

- 同时具有行内元素和块级元素的特点

- 一行可以放多个 （行内的特点）

- 可以设置宽高，margin,padding （块级元素的特点）

- 行内块元素直接由间隙

  











行者课堂  网址:cs1024.com，qq/微信:100000356

# css 显示模式的转换

css 显示模式 

- 块元素
- 内联元素
- 行内块元素

显示模式

- 块元素       block
- 内联元素   inline
- 行内块元素   inline-block







# css qq导航栏项目

项目地址  https://new.qq.com/ch2/movie 











行者课堂  网址:cs1024.com，qq/微信:100000356

# css 背景颜色

 设置背景颜色

```javascript
background-color:red;
```

-   文档https://www.w3school.com.cn/cssref/pr_text_color.asp 
-   英文值： https://www.sioe.cn/yingyong/yanse-rgb-16/ 
-   16进制 开发中最常用的
-   rgb  













行者课堂  网址:cs1024.com，qq/微信:100000356

# css 背景图片

语法

```javascript
div {
    background-image: url("地址");
}
```























行者课堂  网址:cs1024.com，qq/微信:100000356

# css 背景平铺

语法

```javascript
 background-repeat: no-repeat;
```

- | 值        | 描述                                       |
  | :-------- | :----------------------------------------- |
  | repeat    | 默认。背景图像将在垂直方向和水平方向重复。 |
  | repeat-x  | 背景图像将在水平方向重复。                 |
  | repeat-y  | 背景图像将在垂直方向重复。                 |
  | no-repeat | 背景图像将仅显示一次。                     |























行者课堂  网址:cs1024.com，qq/微信:100000356

# css 背景图位置

设置背景图片的位置

语法

```javascript
background-position :center center;
```



![mark](http://cdn.cs1024.com/images/20191129/TuFgFMWSLRoK.png?imageslim)

 文档 https://www.w3school.com.cn/cssref/pr_background-position.asp 





























行者课堂  网址:cs1024.com，qq/微信:100000356

# css 项目雪碧图

什么是雪碧图

把一些小图标放在一张图片上，通过background-position去定位



有什么用？

用一张图片，减少资源，网络速度更快

练习



![mark](http://cdn.cs1024.com/images/20191129/0HXl8AirJPGj.png?imageslim)



















行者课堂  网址:cs1024.com，qq/微信:100000356

# css 背景固定

语法

```javascript
background-attachment:fixed
```

 https://www.w3school.com.cn/cssref/pr_background-attachment.asp 

























行者课堂  网址:cs1024.com，qq/微信:100000356

# css 背景的复合属性

语法

```javascript
background:背景颜色 图片地址 背景平铺 背景图像滚动 背景图片位置

也可以只写 背景颜色，背景图片，后面可以省略
```

































行者课堂  网址:cs1024.com，qq/微信:100000356

# css 背景的半透明

```javascript
background:rgba(255,0,0,0.1);
```





























# css iconfont 字体图标项目

iconfont：比css雪碧图更方便的字体图标



项目：使用4个iconfont 的字体图标

 https://www.iconfont.cn/ 



可以设置字体的大小，颜色





















行者课堂  网址:cs1024.com，qq/微信:100000356

# css的层叠性

层叠性

对同一个选择器设置的同一个属性，后面的样式覆盖前面的样式



css 样式冲突的生效原则

css代码从上到下执行，越后面的样式会覆盖前面的样式

可以看一下调试台，就可以看出





















行者课堂  网址:cs1024.com，qq/微信:100000356

# css_继承性

继承： 就好比儿子会继承父亲的遗产

css ：子元素会继承父元素某些的样式，某些样式不会被继承

可以被继承的样式

```javascript
color,font-family,font-size,font-style,font-variant,font-weight,font,letter-spacing,line-height，text-align,text-indent,text-transform,word-spacing

list-style-image,list-style-position,list-style-type,list-style
```





















行者课堂  网址:cs1024.com，qq/微信:100000356

# css 的优先级

- 当使用不同的选择器对同一个元素设置相同的样式的时候，最终使用哪个样式，就由选择器的权重决定
- 权重记忆口诀。从0开始，一个行内样式+1000，一个id+100，一个属性选择器/class或者伪类+10，一个元素名，或者伪元素+1

```javascript
01. *{}                         ====》0
02. li{}                        ====》1(一个元素)
03. li:first-line{}             ====》2(一个元素，一个伪元素)
04. ul li {}                    ====》2（两个元素）
05. ul ol+li{}                  ====》3（三个元素）
06. h1+ *[rel=up] {}            ====》11（一个属性选择器，一个元素）
07. ul ol li.red{}              ====》13（一个类，三个元素）
08. li.red.level{}              ====》21（两个类，一个元素）
09. style=""                    ====》1000(一个行内样式)
10. p {}                        ====》1（一个元素）
11. div p {}                    ====》2（两个元素）
12. .sith {}                    ====》10（一个类）
13. div p.sith{}                ====》12（一个类，两个元素）
14. #sith{}                     ====》100（一个ID选择器）
15. body #darkside .sith p {}   ====》112(1+100+10+1,一个Id选择器，一个类，两个元素)

```

- important

  - 会无视上面的规则，表示最大的权重， 换句话说就是他的级别最高，下面的人都不能取代我 
















行者课堂  网址:cs1024.com，qq/微信:100000356

# css 盒子模型介绍

 在一个文档中，每个元素都被表示为一个矩形的盒子 

看网页的盒子模型有那些

 http://www.cs1024.com/home/index 



网页布局，就是摆放css盒子





















行者课堂  网址:cs1024.com，qq/微信:100000356

# css 盒子模型组成

盒子的组成

- 内容区域 （content） 

- 内边距 (padding)

- 边框 (border)

- 外边距 (margin)

打开chrome看看

![mark](http://cdn.cs1024.com/images/20191129/4UYJUTiCNH3L.png?imageslim)



写demo











































#  内联元素和块元素

## 什么内联元素

内联元素  ： 内容并排显示，比如a,span

## 什么是块级元素

块级元素 :  内容独自占一行 ，比如 div,span



- 内联元素与块级元素的区别

  - 内联元素：

    - 内联元素(inline)不会独占一行，相邻的内联元素会排在同一行
    - 内联元素不可以设置宽高 
    - 内联元素可以设置margin，padding，但只在水平方向有效。
    - 其宽度随内容的变化而变化。 
    - 行内元素里面只能放行内元素

    - a 里面不能在放a标签
    - a是特殊情况，里面可以放块级元素，但是最好把a标签设置成块级元素

  - 块状元素：

    - 块级元素会独占一行，
    - 块级元素可以设置宽高 
    - 块级元素可以设置margin，padding

    - 默认情况下宽度自动填满其父元素宽度 
  - 里面可以放内联元素或块级元素
  
  
  
- 块去包含内联，而不会用内联去包含块元素。



## 常见块级元素和内联元素

块级元素

```javascript
address – 地址 
blockquote – 块引用 
dir – 目录列表 
div – 常用块级容易，也是CSS layout的主要标签 
dl – 定义列表 
fieldset – form控制组 
form – 交互表单 
h1 – h6 标题 
hr – 水平分隔线 
menu – 菜单列表 
ol – 有序表单 
p – 段落 
pre – 格式化文本 
table – 表格 
ul – 无序列表 
li

```

内联元素

```javascript
a – 锚点 
abbr – 缩写 
b – 粗体(不推荐) 
big – 大字体 
br – 换行 
cite – 引用 
code – 计算机代码(在引用源码的时候需要) 
em – 强调 
font – 字体设定(不推荐) 
i – 斜体 
img – 图片 
input – 输入框 
kbd – 定义键盘文本 
label – 表格标签 
q – 短引用 
span – 常用内联容器，定义文本内区块 
strong – 粗体强调 
textarea – 多行文本输入框 


```





- 行内块元素 （同时具有块元素和行内元素的特点）
  - 













# css 的优先级

- 当使用不同的选择器对同一个元素设置相同的样式的时候，最终使用哪个样式，就由选择器的权重决定
- 权重记忆口诀。从0开始，一个行内样式+1000，一个id+100，一个属性选择器/class或者伪类+10，一个元素名，或者伪元素+1

```javascript
01. *{}                         ====》0
02. li{}                        ====》1(一个元素)
03. li:first-line{}             ====》2(一个元素，一个伪元素)
04. ul li {}                    ====》2（两个元素）
05. ul ol+li{}                  ====》3（三个元素）
06. h1+ *[rel=up] {}            ====》11（一个属性选择器，一个元素）
07. ul ol li.red{}              ====》13（一个类，三个元素）
08. li.red.level{}              ====》21（两个类，一个元素）
09. style=""                    ====》1000(一个行内样式)
10. p {}                        ====》1（一个元素）
11. div p {}                    ====》2（两个元素）
12. .sith {}                    ====》10（一个类）
13. div p.sith{}                ====》12（一个类，两个元素）
14. #sith{}                     ====》100（一个ID选择器）
15. body #darkside .sith p {}   ====》112(1+100+10+1,一个Id选择器，一个类，两个元素)

```

- important

  - 会无视上面的规则，表示最大的权重， 换句话说就是他的级别最高，下面的人都不能取代我 

    

























# css元素之间的关系

父元素：直接包含子元素的元素

子元素：直接被父元素包含的元素

祖先元素：直接或者间接包含后代元素的元素，父元素也是祖先元素

后代元素：直接或间接被祖先包含的元素，子元素也是后代元素

兄弟元素：有相同的父元素 









# css中的常用选择器

- 元素选择器

  -  写法： HTML标签名{}      
  -  作用：选中页面中所有与选择器同名的HTML标签。 

  ```javascript
  li{
              color: red;
  }
  
  ```

- 类选择器 （实际开发中最常用的）

  -  写法：  .class名{} 
  -  调用： 在需要应用这套样式的标签上，使用class="class名"调用选择器。 

  ```javascript
  .a{
      color:red
  }
  
  ```

- id 选择器

  -  写法：  #ID名{} 
  -  调用：  在需要应用这套样式的标签上，使用id="ID名"调用选择器。 

  ```javascript
  #name{
  color:red;
  }
  
  ```

- 通用选择器

  - 写法：  *{} 
  - 作用： 作用于页面中所有的HTML标签； 

  ```javascript
  *{
      color:red
  }
  作用： 作用于页面中所有的HTML标签；
  
  ```

- 并集选择器 

  - 写法： 选择器1,选择器2,……选择器n{}  多个选择器之间逗号分隔 
  - (其实相当于多个选择器拆开写) 

  ```javascript
   li,.a{
       color: red;
   }
  
  ```

- 后代选择器 

  -  写法： 选择器1 选择器2 …… 选择器n{} 
  -  生效规则： 只要满足后一个选择器是前一个选择器的后代，样式即可生效（后代包括子代、孙代。。。） 

  ```javascript
  div .a{
      color: red;
  }
  
  ```

- 子代选择器 

  -  写法： 选择器1>选择器2>……>选择器n{} 
  -  生效规则： 必须满足后一个选择器是前一个选择器的直接子代，样式才能生效。（两个选择之间不能有任何其他标签） 

  ```javascript
   div>ul{
       color: red;
   }
  
  ```









# css伪类选择器

伪类: 设置标签的状态的

-  a标签的
   - 访问过的：红色 a:visited 
   - 正在点击的链接: a:active
   - 正常链接 a:link  黄色 
   - 鼠标移上去  a:hover

-  focus
   - 用在input 上面

-  ::selection
   - 元素被选中的样式

-  ::before
   - 指定元素之前

-  ::after
   -  指定元素之后
-  :first-letter
   - 第一个字符
-  :first-line
   -  第一行





# css 属性选择器

- div[title]{}  div中包含title 属性的

- div[title=one]{} div中title属性的值one的

- div[title^="qc"]{}  div的title属性是qc开头的

- div[title$="qc"]{}  div的title属性是qc结尾的

  

  

# css 常用子元素选择器

- :first-child
  -  选择第一个子标签

- :last-child
  - 选择最后一个子标签
- :nth-child(1)
  - 选中第一个子元素
  - :nth-child(even)
  - :nth-child(odd)
  - 用在隔行变色效果  https://www.iviewui.com/components/table 





# css 兄弟选择器

兄弟选择器

- 可以选中一个元素后面紧挨着的兄弟元素

```javascript
p+span{}

```

-  可以选中后面的所有

```javascript
p ~ span{}

```



所有选择器

 https://www.runoob.com/cssref/css-selectors.html 















# css 样式的继承

- 子元素可以继承父亲元素的样式
  - 字体大小
   - line-height 
   - color
     - 不是所有的元素都会被继承

参考: https://blog.csdn.net/qq_39125445/article/details/88142104 









# css 的长度单位

- px 像素，电脑的分辨率，ps 软件
- 百分比 。 浏览器会根据父元素的宽度，设置宽度，比如父元素的宽度是200px，子元素的宽度设置成50%,也就是 100px
- em 相对当前元素的字体大小计算的
- rem 相对于根元素的字体大小进行计算的，用在手机端







# css 颜色单位

- 英文单词
- rgb
- 16进制的表示

颜色大全  https://www.w3school.com.cn/cssref/css_colors.asp 

颜色转换  https://tool.css-js.com/rgba.html 







# css 行高

写一个行高的样式

```javascript
p{
    line-height:30px
}

```

行高类似我们小学学铅笔字时候的本子，他是一行一行的，我们写在行里面



文本是默认居中的，比如行高是60px,文字的高度是30px,那么上下就有各15px的空间



行间距

行间距= line-height-font-size

画图看看



设置行间距为0和负数看效果



- 单位

  - px 
  - 百分比 ,相对于字体大小的百分比
  - 数值 ， 字体大小相应的倍数
  - 

- 行高做垂直居中,

  对于单行文本，把他的行高设置成为父元素的高度，就可以做到垂直居中

  ```javascript
  .a{
      width:100px;
      height:100px;
      line-height:100px;
  }
   <div class="a">
          <span>cs1024.com</span>
      </div>
  
  
  ```

  



# css 字体样式

字体必须是客户的计算机中有的，才可以使用,

比如微软雅黑，一般开发都会设置字体为微软雅黑，来兼容所有的机器

font-family

```javascript
.selector { 
	font-family: "Microsoft YaHei", 微软雅黑
}

```

查看计算机字体的位置

```javascript
os->window->fonts->双击字体文件

```

font-style

```javascript
p.normal {font-style:normal;}    //默认值。浏览器显示一个标准的字体样式。
p.italic {font-style:italic;}    //	浏览器会显示一个斜体的字体样式。
p.oblique {font-style:oblique;}  //浏览器会显示一个倾斜的字体样式。

```

font-weight

```javascript
p.normal {font-weight:normal;}   // 普通
p.thick {font-weight:bold;}      // 字体加粗
p.thicker {font-weight:900;}     // 字体加粗，按数字，越大越粗

```

font-size

```javascript
h1 {font-size:250%;}
h2 {font-size:200%;}
p {font-size:100%}

```

font-variant

```javascript
p.normal {font-variant: normal}   //默认值。浏览器会显示一个标准的字体。
p.small {font-variant: small-caps} //浏览器会显示小型大写字母的字体。

```

统一写在一起

```javascript
font-style
font-variant
font-weight
font-size/line-height
font-family
.a{
    font:italic, small-caps bold   14px/20px "Microsoft YaHei", 微软雅黑
}


//写在一起，只需要解析一次，解析的速度快，分开写要解析5次，解析慢


// 先解析50px的行高
// 后面是14px ,14px后面没有行高，就使用浏览器默认的行高，并不会使用浏览器的行高,因此用font的时候，最好同时设置 字体大小/行高
.a{
    line-height:50px;
    font:italic, small-caps bold   14px "Microsoft YaHei", 微软雅黑
}

// 同时设置高度，下面的会生效
.a{
    width:100px;
   	background:red;
    height:100px;
    height:30px;
}

```



# css 文本样式

- text-transform 设置元素中的英文单词的大小写

  ```javascript
  h1 {text-transform:uppercase}
  h2 {text-transform:capitalize}
  p {text-transform:lowercase}
  
  // 拿一篇英文的文本来演示
  
  ```

- text-decoration  设置文本的划线部分

  ```javascript
  h1 {text-decoration:overline}
  h2 {text-decoration:line-through}
  h3 {text-decoration:underline}
  h4 {text-decoration:blink}
  h5 {text-decoration:none}
  
  
  看一下a标签，默认会有text-decoration:underline的下划线
  
  ```

- letter-space 字符间距

  ```javascript
  .p{
      letter-spacing:10px;
  }
  
  ```

- word-spacing 设置单词之间的距离

  ```javascript
  .p{
      word-spacing:10px;
  }
  
  ```

- 文本对齐

  ```javascript
  h1 {text-align:center}
  h2 {text-align:left}
  h3 {text-align:right}
  
  ```

- 首行缩进 

  ```javascript
  将段落的第一行缩进 50 像素：
  p{
      text-indent:50px;
  }
  
  ```

  

# css盒子模型

css 认为每一个元素都包含在一个不可见的矩形的盒子里面，我们对网页布局其实就是摆放这些盒子



去网易的官网，用盒子表示一下



- 盒子的组成

  - 内容区域 （content） 放子元素的

  - 内边距 (padding)

  - 边框 (border)

  - 外边距 (margin)











行者课堂  网址:cs1024.com，qq/微信:100000356

# css 边框



边框就是元素的边框。包含3个部分，边框宽度，边框样式，边框颜色

 https://www.w3school.com.cn/cssref/pr_border.asp 



先写一个div，

```javascript
div{
    width: 100px;
    height: 100px;
    border-width: 1px;
    border-style: solid;
    border-color: red;
}
```

border-style   文档 https://www.w3school.com.cn/cssref/pr_border-style.asp 



复合写法 （推荐）

```javascript
.a{
    border: 1px solid red;
}
```









行者课堂  网址:cs1024.com，qq/微信:100000356

# css 边框会影响盒子大小

盒子的宽度= 左边border宽度+左边padding宽+内容区宽+右边的padding宽+右边的border的宽度

盒子的高度 =  上边border高度+上边padding高+内容区高+下边的padding高+右边的border的高





























行者课堂  网址:cs1024.com，qq/微信:100000356

# css 内边距

内容和盒子的靠太近了，用padding

padding，盒子模型的内容区外面的部分

```javascript
div{
    padding-left: 10px;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
}

```

- 背景也会填充内边距，不仅仅用在内容区域

- 在父元素里面写一个子元素，分别设置他们的背景，子元素填充的部分只是内容区域

- 我们设置父元素的padding，可以看到2个背景，子元素的背景盖在父元素的背景上面



padding的简写

```java
padding:10px 10px 10px 10px  // 上右下左 顺时针
padding:10px 20px    // 上下10px 左右20px
padding:10px 20px 30px  //// 上10px 左右20px 下30px 
padding:10px;     // 上下左右都是 10px
```















# css 写一个电商导航

用width ,不合理

用padding，合理

![mark](http://cdn.cs1024.com/images/20191130/pwuBAwwN0KXR.png?imageslim)



![mark](http://cdn.cs1024.com/images/20191201/kEjkikR97cIk.png?imageslim)























# css 外边距

margin 外边距

表示与其他盒子模型之间的距离

和内边距类似

```javascript
margin-left 
margin-right
margin-bottom
margin-top
```



```javascript
margin:10px 10px 10px 10px  // 上右下左 顺时针
margin:10px 20px    // 上下10px 左右20px
margin:10px 20px 30px  //// 上10px 左右20px 下30px 
margin:10px;     // 上下左右都是 10px
```

页面的元素默认是靠左靠上放的

放2个div盒子，用margin去设置他们之间的间隔

​	

- margin 可以设置成为负数

-  margin 设置 auto 的话，平分左右的margin，通常用来做盒子的水平居中





















# css 利用box-sizing处理盒子

计算宽度麻烦

有没有办法，直接写width就是量出来的，再写border

```javascript
 .a{
     /*原来的width 就是 内容区域的宽度*/
     width:100px;
     /*设置了 box-sizing: border-box;之后，width 就是内容区域+左右边框的宽度，高度同理*/
     box-sizing: border-box;
 }
```

推荐给body加上box-sizing: border-box;，全局生效。









# css 相邻垂直外边距重叠

相邻元素的外边距，上面的设置的 margin-bottom,下面的设置的margin-top，会发生外边距重叠

取的是上下外边距的最大值，而不是上下外边距的和

![mark](http://cdn.cs1024.com/images/20191201/oH7fhpXisHBW.png?imageslim)

怎么解决？



1.给一个盒子指定垂直方向的的margin











# css 嵌套垂直外边距重叠

嵌套的外边距重叠问题

```javascript
<div class="a">
    <div class="b"></div>
</div>

设置了b的margin-top之后，而是把a顶了下来，
a和b是相邻的状态
a和b的上外边距发生重合，取大的值
子元素的margin-top设置给父元素的margin-top

```



如何解决？

- 父元素设置边框
- 父元素设置内边距
- 父元素加overflow:hidden











# css 关于居中

盒子的居中

margin:0 auto

盒子里面的内容居中

text-align:center;



















# css浏览器的默认样式

浏览器默认的样式

```javascript
div,p,ul,li
```

会影响我们写代码，我们要取消这些默认样式

```javascript
*{margin:0;padding:0}

```



我们在实际开发中，会引入reset.css这样一个文件，这个文件就是取消浏览器的一些默认样式的

reset代码





















# ps 切图教程



- 拖动 空格

- 标尺 ctrl+r ，并设置成像素

- z 和鼠标滚轮 放大和缩小

- c  切图

- 导出web格式

- 取颜色

- 量尺寸

  

























# css 电商列表项目

 https://market.m.taobao.com/app/tb-source-app/aiguangjiepc/content/index.html?spm=a21bo.2017.201870.2.5af911d9cxKkIb&contentId=2400000200682545313&scm=1007.12846.65991.0&pvid=58ad6936-c276-4bcf-aa8c-7ab19fe21e8b 





























# css 网易新闻模块项目

























# css 圆角

盒子模型默认都是矩形的，我们想要圆角



![mark](http://cdn.cs1024.com/images/20191130/yK6OCsTzHj8z.png?imageslim)



 https://www.w3school.com.cn/tiy/t.asp?f=css3_border-radius 

语法

```javascript
border-radius:11px; // px或者百分比
```

- 画一个圆





























# css 盒子模型阴影

语法

```
box-shadow: h-shadow v-shadow blur spread color inset;
```

![mark](http://cdn.cs1024.com/images/20191130/upokmVEk8f9u.png?imageslim)















# css 文字阴影

语法

```javascript
text-shadow: h-shadow v-shadow blur color;
```

![mark](http://cdn.cs1024.com/images/20191130/KcOl3Tt8wShn.png?imageslim)















# css 3种网页的布局方式

网页布局的3种方式

-  文档流 默认布局
  - html标签正常的显示状态
- 浮动布局
  - 对盒子进行左右浮动，来完成布局 ，文档流无法完成的时候，可以用浮动
- 定位
  - 





















# css浮动是什么

 **浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。** 

语法

```javascript
float: left
```

![mark](http://cdn.cs1024.com/images/20191130/JPzr0SgkTrdM.png?imageslim)













# css 浮动元素的特点

- 脱离文档流

  我们之前看过，网页是一层层的，我们看到的是最上层的，但是设置了浮动之后，浮动的元素会脱离原来的文档流，浮在文档流上面，且不占位置

- 浮动的元素会在一行显示，放不下了就换行

- 浮动的元素具有行内块元素的特性

- 浮动的元素假如没有宽度，他的元素大小是根据内容决定的

  





























# css 浮动注意点

-  一般情况下，父元素中有一个子元素浮动了，其他的也应该浮动
  - 结论：浮动的盒子只会影响后面的标准流，不会影响前面的标准流







# css 为什么要清除浮动

之前浮动的子元素的父元素都是设置了高度的，









现实情况下父元素高度不固定，或者是由子元素决定的。

比如  https://www.tmall.com/?spm=a21bo.2017.201859.1.5af911d9KbqnVH 的商品列表



假如没有设置父元素的高度会怎么样？

没有设置高度的话，父元素的高度就是 0，下面的内容就上来了。

这个就是子元素浮动，不占位置了，会造成父元素高度是0，下面的元素就上来了，

所以我们需要清除浮动，所谓清除浮动，就是清除浮动带来的影响，这个影响就是父元素的高度变成了0





















# css 如何清除浮动- 方法1

- 额外标签法
- 选择器：{ clear :both}  实际开发用both

 https://www.w3school.com.cn/cssref/pr_class_clear.asp 





















#  css 如何清除浮动 - 方法2

父级添加overflow：hidden 方法





















# css 如何清除浮动 - 方法3

伪元素的方法 （推荐使用）

```javascript
.clearfix:after {
    /*设置子元素内容为空*/
    content: '';
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
}
.clearfix{
    /*兼容ie6*/
    *zoom: 1;
}
```









# css 浮动 导航布局项目



![mark](http://cdn.cs1024.com/images/20191203/H6MxaaUwxnzK.png?imageslim)

用浮动实现上面的布局，不考虑小图标





# css 浮动 商品列表布局项目

 https://market.m.taobao.com/app/tb-source-app/aiguangjiepc/content/index.html?spm=a21bo.2017.201870.2.5af911d9cxKkIb&contentId=2400000200682545313&scm=1007.12846.65991.0&pvid=58ad6936-c276-4bcf-aa8c-7ab19fe21e8b 





















# css 定位

css 定位是3种布局方式的一种，其他两种是2



为什么需要定位?

完成一些文档流和浮动无法完成的布局，比如固定在页面的回到顶部

 https://www.taobao.com/ 



















# css 定位的组成

定位:就是 将css盒子定在某个地方，所谓定位就是在摆放盒子。

画图，画个矩形，用diagram  模拟定位

定位 = 定位模式+偏移

定位模式就是 说你采用哪种模式定位，偏移就是该元素的最终位置



定位模式

通过css 的 position 属性来设置，他的值有4个

- static  静态定位
- relative 相对定位
- absolute  绝对定位
- fixed 固定定位



偏移

盒子的最终的位置，他的值有top,left,bottom,right 4个属性

- top   top：60px     顶部偏移量，定位的元素相对于父元素上边线的距离
- left   left：60px     顶部偏移量，定位的元素相对于父元素左边线的距离
- right   right：60px     顶部偏移量，定位的元素相对于父元素右边线的距离
- bottom  bottom：60px     顶部偏移量，定位的元素相对于父元素下边线的距离





















# css 相对定位

static 静态定位 （文档流定位，了解即可）

```javascript
选择器 {postition:static}
```

- 没有偏移





relative  相对定位

布局方式是相对于他自己本身的定位，偏移也是相对于自己本身的偏移

语法

```javascript
选择器 {postition:relative}
```

偏移

- 以元素原来的位置偏移的 （画图解释）
- 原来在文档流的位置仍然占有，后面的盒子仍然用标准流的方式对待他 （图解）



最大的作用

实际开发中, 给绝对定位的元素当父元素的





















# css 绝对定位 

绝对定位元素在偏移的时候，他是相对于他的祖先元素来定位的

语法

```javascript
选择器 {postition:absolute}
```

特点

- 如果没有**祖先元素**或者**祖先元素没有定位**，他就以浏览器（html，body）为准定位 （图解）

- 当父元素有定位的话（相对，绝对，固定）。绝对定位的偏移是以最近一级有定位的祖先元素为参考的。（图解）
- 绝对定位不再占有原来的位置 























# css 轮播图项目

父相子绝： 父元素用相对定位，子元素用绝对定位





模拟轮播图

 https://www.taobao.com/ 

用浮动做左右按钮的话，因为浮动只会影响浮动元素后面的元素，假如图片在前面就不行了。

- 子元素绝对定位，不会占有任何位置













# 











# css 固定定位

可以固定到浏览器可视区的位置，主要使用场景：可以在浏览器页面滚动时元素的位置不会改变。

淘宝例子

语法

```javascript
选择器{position:fixed}
```

- 以浏览器的可视窗口为参考点移动元素 （举例子）
- 不随着滚动条滚动而滚动
- 不再占有原来的位置





















# css 固定定位的小例子

固定一个右边的广告位到内容区的右边

 https://www.taobao.com/ 



做法 ，2 步骤

```javascript
.a{
    position: fixed;
    left: 50%;
    margin-left: 500px;
}
```

- 固定定位盒子left:50%,到可视区的中间
- 让固定定位的盒子margin-left:中间内容去的一半



















# css 定位的叠放顺序

盒子重叠的问题

可以使用z-index控制盒子的先后次序 (z 轴)



![mark](http://cdn.cs1024.com/images/20191203/y0TTd0UnTGc7.png?imageslim)



语法

```javascript
选择器{z-index:1}
```

- 数值可以是正整数，负整数，数值越大，盒子越在上面，默认是auto  （图解，写demo） - 

- 如果属性值相同，没设置就是auto，按照书写顺序，后来居上 
- 只有定位（相对定位，固定定位，绝对定位）的盒子才能设置z-index属性





















# css 定位的绝对居中

加了绝对定位的盒子，不能通过margin:0 auto;水平居中的，但是可以通过下面的方式实现水平居中和垂直居中

- left 50%
- margin-left:-自身宽度的一半























# css 定位的一些特性

- 行内元素添加了绝对或者固定定位，可以直接设置宽度和高度
- 块元素添加绝对或者固定定位，如果不设置宽度或者高度，默认大小是内容的大小

- 下面的左浮动的文字不会压住上面的元素，而是到右边去了。定位（绝对定位，固定定位）的话，会覆盖到上面的元素。 因为浮动产生的最初目的是左文字环绕效果的。 https://www.w3school.com.cn/tiy/t.asp?f=csse_float 

























# css 元素的显示和隐藏

display

 https://www.w3school.com.cn/cssref/pr_class_display.asp 

- display:none  之后，不再占有原来的位置

visibility

 https://www.w3school.com.cn/cssref/pr_class_visibility.asp 

visiblity：hidden 之后，继续占有原来的位置























# css overflow溢出隐藏

overflow 就指定了内容区发生溢出，(包括高度，宽度的溢出)，怎么处理

![mark](http://cdn.cs1024.com/images/20191203/qynz3KF5cpPO.png?imageslim)

 https://www.w3school.com.cn/cssref/pr_pos_overflow.asp 











# css 画一个三角形

 https://www.mi.com/ 

```javascript
.a{
    width: 0;
    height: 0;
    border: 100px solid transparent;

    border-left-color:  red;
    /*border-right: 100px solid green;*/
    /*border-bottom: 100px solid blue;*/
    /*border-top: 100px solid burlywood;*/
}
```





# css vertical align的应用

实现图片或者行内块元素和文字的垂直对齐

语法

 https://www.w3school.com.cn/css/pr_pos_vertical-align.asp 

![mark](http://cdn.cs1024.com/images/20191203/4r2gf9j9WOM1.png?imageslim)

可以让文字和图片的这几条线对齐



默认图片和文字的对齐方式，基线对齐

![mark](http://cdn.cs1024.com/images/20191203/abbV2azhOn1g.png?imageslim)

改img的veriical -align ：bottom 和底线对齐













# css 文本省略号

单行

 https://www.jd.com/ 

```javascript
.a{
    //https://www.w3school.com.cn/cssref/pr_text_white-space.asp
    // white-space :normal 文字自动换行
    white-space: nowrap;  // 文本不换行
    overflow: hidden;     // 溢出隐藏
    text-overflow:ellipsis; // 文字用省略号替换溢出的部分
}
```

多行

```javascript
.b{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    width: 50px;
}
```















































## BFC 概念

Formatting context(格式化上下文) 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。



那么 BFC 是什么呢？

BFC 即 Block Formatting Contexts (块级格式化上下文)，它属于上述定位方案的普通流。



官方解释 很深奥

一个块格式化上下文（block formatting context） 是Web页面的可视化CSS渲染出的一部分。它是块级盒布局出现的区域，也是浮动层元素进行交互的区域。
 一个块格式化上下文由以下之一创建：

- 根元素或其它包含它的元素
- 浮动元素 (元素的 float 不是 none)
- 绝对定位元素 (元素具有 position 为 absolute 或 fixed)
- 内联块 (元素具有 display: inline-block)
- 表格单元格 (元素具有 display: table-cell，HTML表格单元格默认属性)
- 表格标题 (元素具有 display: table-caption, HTML表格标题默认属性)
- 具有overflow 且值不是 visible 的块元素，
- display: flow-root
- column-span: all 应当总是会创建一个新的格式化上下文，即便具有 column-span: all 的元素并不被包裹在一个多列容器中。
- 一个块格式化上下文包括创建它的元素内部所有内容，除了被包含于创建新的块级格式化上下文的后代元素内的元素。

块格式化上下文对于定位 (参见 float) 与清除浮动 (参见 clear) 很重要。定位和清除浮动的样式规则只适用于处于同一块格式化上下文内的元素。浮动不会影响其它块格式化上下文中元素的布局，并且清除浮动只能清除同一块格式化上下文中在它前面的元素的浮动。



**具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。**

**通俗一点来讲，可以把 BFC 理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。反之，里面元素也不会影响外面的**



## 触发 BFC

- body 根元素
- 浮动元素：float 除 none 以外的值
- 绝对定位元素：position (absolute、fixed)
- display 为 inline-block、table-cells、flex
- overflow 除了 visible 以外的值 (hidden、auto、scroll)



## BFC 特性及应用

- **同一个 BFC 下外边距会发生折叠** 

  ```javascript
  <head>
  div{
      width: 100px;
      height: 100px;
      background: lightblue;
      margin: 100px;
  }
  </head>
  <body>
      <div></div>
      <div></div>
  </body>
  
  ```

  ![mark](http://cdn.cs1024.com/images/20191202/pdOnIhWQDyx6.png?imageslim)

  从效果上看，因为两个 div 元素都处于同一个 BFC 容器下 (这里指 body 元素) 所以第一个 div 的下边距和第二个 div 的上边距发生了重叠，所以两个盒子之间距离只有 100px，而不是 200px。

  

  

  首先这不是 CSS 的 bug，我们可以理解为一种规范，**如果想要避免外边距的重叠，可以将其放在不同的 BFC 容器中。**

  ```javascript
  <div class="container">
      <p></p>
  </div>
  <div class="container">
      <p></p>
  </div>
  .container {
      overflow: hidden;
  }
  p {
      width: 100px;
      height: 100px;
      background: lightblue;
      margin: 100px;
  }
  ```

  这时候，两个盒子边距就变成了 200px

![mark](http://cdn.cs1024.com/images/20191202/i4Kg29nvF2wJ.png?imageslim)

- **BFC 可以包含浮动的元素（清除浮动）** 

  我们都知道，浮动的元素会脱离普通文档流，来看下下面一个例子 

  ```javascript
  <div style="border: 1px solid #000;">
      <div style="width: 100px;height: 100px;background: #eee;float: left;"></div>
  </div>
  ```

  ![mark](http://cdn.cs1024.com/images/20191202/LXBbbMVABQ4U.png?imageslim)

   由于容器内元素浮动，脱离了文档流，所以容器只剩下 2px 的边距高度。如果使触发容器的 BFC，那么容器将会包裹着浮动元素。 

  ```javascript
  <div style="border: 1px solid #000;overflow: hidden">
      <div style="width: 100px;height: 100px;background: #eee;float: left;"></div>
  </div>
  ```

  ![mark](http://cdn.cs1024.com/images/20191202/0HTjVu2ES3XA.png?imageslim)

- **BFC 可以阻止元素被浮动元素覆盖** 

  先来看一个文字环绕效果： 

  ```javascript
  <div style="height: 100px;width: 100px;float: left;background: lightblue">我是一个左浮动的元素</div>
  <div style="width: 200px; height: 200px;background: #eee">我是一个没有设置浮动, 
  也没有触发 BFC 元素, width: 200px; height:200px; background: #eee;</div>
  ```

  ![image-20191202104448273](F:\project\cs-book\docs\fe\image-20191202104448273.png)

 这时候其实第二个元素有部分被浮动元素所覆盖，(但是文本信息不会被浮动元素所覆盖) 如果想避免元素被覆盖，在第二个元素中加入 **overflow: hidden**，就会变成： 

![mark](http://cdn.cs1024.com/images/20191202/qlJohY2OriYj.png?imageslim)

 这个方法可以用来实现两列自适应布局，效果不错，这时候左边的宽度固定，右边的内容自适应宽度 

















