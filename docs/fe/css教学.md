









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

# css 内联元素和块元素

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





# css 边框

先写一个box，再设置背景

```javascript
.a{
	border:1px solid red
}

//设置单边的边框
.b{
    border-top: 1px solid green;
    border-left: 1px solid red;
    border-right: 1px solid yellow;
    border-bottom: 1px solid red;
}

// 边框的样式
solid dashed dotted



```



# css 内边距

padding，盒子模型的内容区外面的部分

```javascript
div{
    padding-left: 10px;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
}

```

背景也会填充内边距，不仅仅用在内容区域

在父元素里面写一个子元素，分别设置他们的背景，子元素填充的部分只是内容区域

我们设置父元素的padding，可以看到2个背景，子元素的背景盖在父元素的背景上面

盒子的宽度= 左边border宽度+左边padding宽+内容区宽+右边的padding宽+右边的border的宽度

盒子的高度 =  上边border高度+上边padding高+内容区高+下边的padding高+右边的border的高

padding的简写

```java
padding:10px 10px 10px 10px  // 上右下左 顺时针
padding:10px 20px    // 上下10px 左右20px
padding:10px 20px 30px  //// 上10px 左右20px 下30px 
padding:10px;     // 上下左右都是 10px

```



# css 外边距

margin 外边距

表示与其他盒子模型之间的距离

和内边距类似

```javascript
 margin:10px;

```

页面的元素默认是靠左靠上放的

放2个div盒子，用margin去设置他们之间的间隔



margin 可以设置成为负数

margin 设置 auto 的话，平分左右的margin，通常用来做盒子的水平居中





# css 垂直外边距重叠

相邻的外边距，上面的设置的 margin-bottom,下面的设置的margin-top，会发生外边距重叠

取的是上下外边距的最大值，而不是上下外边距的和



怎么解决？

1.不要相邻即可

2.给父元素设置border-top或者padding-top





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

1.不要相邻即可

2.给父元素设置border-top或者padding-top

3.给父元素设置垂直内边距





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





# css 内联元素盒子模型

内联元素不能设置宽高，宽高是元素包含的内容的宽高

内联可以设置水平和垂直方向的内边距，但是不会影响页面的布局

设置边框，水平方向会移动，垂直方向不影响布局 

设置外边距







# css_display属性

设置元素的显示方式



设置元素的内联或者块元素

```javascript
display: none;        // 元素隐藏
display: inline-block; // 行内块级元素，可以让元素变成块，可以设置宽高，同时可以在同一行显示
display: block;        // 
display: inline;

```

- 内联元素转块元素
  - 比如把a标签设置宽度和高度
- 块元素转内联元素
  - 把div 设置成内联，（仅做演示，不使用）
- 把内联元素转成行内块元素
  - a设置display:inline-block



display:none和visibility:hidden的区别

```javascript
visibility:hidden  // 元素是隐藏的
visibility:visible // 默认可见的

```





# css overflow



当子元素的大小超过父元素，就会发生溢出

```javascript
<!doctype html>
<html lang="en">
<head>
    <style>
        .a{
            width: 300px;
            height: 300px;
            background: red;
        }
        .b{
            width: 1000px;
            height: 100px;
            background: green;
        }
    </style>
</head>
<body>
    <div class='a'>
        <div class="b"></div>
    </div>
<script>
</script>
</body>
</html>

```

overflow可以设置溢出的处理方式

```javascript
overflow:hidden
overflow:visible
overflow:scroll
overflow:auto

```













=================================================

# js基础

我们学的第一门语言，html和css都不算正式的语言

javascript语言是什么？

是一门编程语言



语言

- 人与人对话的方式，包括中文和英文，对话必须用相同的语言，才能正确沟通。比如我说中文，你说英文，我们就沟通不了
- 编程语言：人与计算机对话，通过编程语言操作计算机，而不能通过人的语言
- 中文，英文，编程语言，没本质区别，都是语言，语法不同而已。

计算机语言的发展历史

- 计算机中存储的都是0和1，不管是文本，视频，图片， （机器语言）
- 汇编 （低级语言）
- c ，c++,java,javascript等等各种语言 （高级语言）

## 诞生

 1990年底，欧洲核能研究组织（CERN）科学家Tim Berners-Lee，在全世界最大的电脑网络——互联网的基础上，发明了万维网（World Wide Web），从此可以在网上浏览网页文件。最早的网页只能在操作系统的终端里浏览，也就是说只能使用命令行操作，网页都是在字符窗口中显示，这当然非常不方便。 



 1994年10月，NCSA的一个主要程序员Marc Andreessen联合风险投资家Jim Clark，成立了Mosaic通信公司（Mosaic Communications），不久后改名为Netscape。这家公司的方向，就是在Mosaic的基础上，开发面向普通用户的新一代的浏览器Netscape Navigator。 （ 网景 ）



1994年12月，Navigator发布了1.0版，市场份额一举超过90%。

Netscape公司很快发现，Navigator浏览器需要一种可以嵌入网页的脚本语言，用来控制浏览器行为。当时，网速很慢而且上网费很贵，有些操作不宜在服务器端完成。比如，如果用户忘记填写“用户名”，就点了“发送”按钮，到服务器再发现这一点就有点太晚了，最好能在用户发出数据之前，就告诉用户“请填写xx栏”。这就需要在网页中嵌入小程序，让浏览器检查每一栏是否都填写了。

管理层对这种浏览器脚本语言的设想是：功能不需要太强，语法较为简单，容易学习和部署。那一年，正逢Java语言开始推向市场，Netscape公司决定，脚本语言的语法要接近Java，并且可以支持Java程序。这些设想直接排除了使用现存语言，比如perl、python和TCL。

1995年，Netscape公司雇佣了程序员Brendan Eich开发这种网页脚本语言。Brendan Eich有很强的函数式编程背景，希望以Scheme语言（函数式语言鼻祖LISP语言的一种方言）为蓝本，实现这种新语言。

1995年5月，Brendan Eich只用了10天，就设计完成了这种语言的第一版。它是一个大杂烩，语法有多个来源：

- 基本语法：借鉴C语言和Java语言。
- 数据结构：借鉴Java语言，包括将值分成原始值和对象两大类。
- 函数的用法：借鉴Scheme语言和Awk语言，将函数当作第一等公民，并引入闭包。
- 原型继承模型：借鉴Self语言（Smalltalk的一种变种）。
- 正则表达式：借鉴Perl语言。
- 字符串和数组处理：借鉴Python语言。

为了保持简单，这种脚本语言缺少一些关键的功能，比如块级作用域、模块、子类型（subtyping）等等，但是可以利用现有功能找出解决办法。这种功能的不足，直接导致了后来JavaScript的一个显著特点：对于其他语言，你需要学习语言的各种功能，而对于JavaScript，你常常需要学习各种解决问题的模式。而且由于来源多样，从一开始就注定，JavaScript的编程风格是函数式编程和面向对象编程的一种混合体。

Netscape公司的这种浏览器脚本语言，最初名字叫做Mocha，1995年9月改为LiveScript。12月，Netscape公司与Sun公司（Java语言的发明者和所有者）达成协议，后者允许将这种语言叫做JavaScript。这样一来，Netscape公司可以借助Java语言的声势，而Sun公司则将自己的影响力扩展到了浏览器。

微软研发了ie浏览器 ，出来一门Jscrpt语言

于是有2个版本了，一个是javascript和jscript

后来网景公司把javascript交给了欧洲 国际性会员制度的信息和电信标准组织 ，这个组织根据javascript制定了一套标准ECMAscript



那不同的浏览器厂家拿到这套标准之后，去做实现，实现也是不同的。造成了兼容性的一些问题



比如chrome 通过v8引擎去实现ECMAscirpt 标准，v8 引擎速度很快，所以你打开qq 官网，chrome比ie是快一点的。

ECMAscript 标准

javascript   实现

但是javascript包括更多，他包括ECMAscript 和dom，bom。



dom 文档对象模型，让我们可以操作网页

bom 浏览器模型，让我们可以操作浏览器





## 学习目标

es(ECMAscript)  语法

dom

bom































