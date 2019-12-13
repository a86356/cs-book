

# 工具使用

我们写前端的话，需要一些软件

- 编辑器
  
- vscode   https://code.visualstudio.com/ 
  
- photoshop

  



# 认识网页

## 用户眼中的网页的组成

> 网页是由文字，图片，视频，音频（mp3）这些组成

![mark](http://cdn.cs1024.com/images/20191206/O4pjhQ3hBVYW.png?imageslim)







## 前端眼中的网页

鼠标右键，查看网页源代码，这些代码就是前端编写的，

![mark](http://cdn.cs1024.com/images/20191206/auHVCtUXWNtr.png?imageslim)







# 常见的浏览器

## 浏览器有什么用？

我们可以通过浏览器浏览网页



## 浏览器的种类

- chrome 谷歌浏览器  (最常用)
- firefox  火狐浏览器
- ie 浏览器
- 360 浏览器
- ...



# Web 标准

- web标准是什么
  - web标准是由W3C（万维网联盟）和其他组织制定的一套标准
- 为什么需要web标准
  - 不同的浏览器厂商对前端代码的处理方式不同，比如我们不设置字体大小，chrome 可能是10px，ie可能是20px。就会造成不同的浏览器，对网页的显示是不同的。要是不同的浏览器厂商都遵循这套web标准，那显示的网页就不会有太大的差异
- web标准包括什么
  -  html
  -  css
  -  javscript



# html 简介

我们学习前端开发的话，最开始是从html的

html的话，就是网页的结构，他的英文是 HyperText Markup Language ，中文是 超文本标记语言  ，

我们网页里面的图片，文字，视频等等都是通过html 写出来的

```javascript
我是第一个网页 
<h1>我是第一个网页</h1>

<h1>是什么？  
```

## 



# html 的骨架

一个大楼由自己的骨架，那一个标准的html 也有自己的骨架

```javascript
<html>
    <head>
        <title>我是第一个网页</title>
    </head>
    <body>
    </body>
</html>
```



# 写第一个自己的网页



















名称:行者课堂 

网址:cs1024.com

qq/微信:100000356



# 软件开发

### 软件架构介绍

- cs 架构

  - c （client）表示客户端(用户自己的电脑) ，s （server）表示服务端 （为用户的客户端提供服务的电脑）
  - 例子：qq
  - 客户端 发送消息，服务端返回消息，使用的是程序员自定的协议
  - 不具备跨平台特性

- bs 架构

  - b（brower） 表示浏览器,比如，s 表示服务器
  - 例子： 淘宝
  - 客户端 发送请求，服务端返回响应，使用http 和https协议
  - 具备跨平台性

- 名词解释

  - 客户端 

  - 服务端

  - 协议

  - 跨平台性

    

### 项目开发流程

- 立项
- 讨论
- 设计原型
- 设计师设计   设计psd
- 前端开发      切图+写交互
- 后端开发      开发接口
- 前后端联调
- 测试              修改bug
- 部署上线
- 维护           出了bug要修复
- 迭代开发   出了新功能要开发



## 作业

了解软件架构和项目开发流程













名称:行者课堂 

网址:cs1024.com

qq/微信:100000356 



## 前端入门简介



w3c 组织（ 万维网联盟 ），制定标准

- html  结构
- css  表现
- JavaScript（js） 行为



前端要学习的就是上面3个部分，以及和他们相关的一些知识



### 解释html,css,js

- 对于一个网页，HTML定义网页的结构，CSS描述网页的样子，JavaScript定义网页的行为，打个比喻，HTML就像 一个人的骨骼、器官，而CSS就是人的皮肤，有了这两样也就构成了一个植物人了，加上javascript这个植物人就可以对外界刺激做出反应，可以思考、运动、可以给自己整容化妆（改变CSS）等等，成为一个活生生的人 

- 在网页中的话，html就是描述网页的结构的，css控制网页的样式的，js响应用户操作的。



## 作业

知道html,css,js是什么











名称:行者课堂 

网址:cs1024.com

qq/微信:100000356 

## 学习编程需要的工具



-  编辑器
   - webstorm   http://www.jetbrains.com/webstorm/ 
   - vscode 教程    https://code.visualstudio.com/ 
   - 我录制的一套免费的课程，vscode零基础入门到精通
   - 网易云课堂 https://study.163.com/course/viewCourse.htm?courseId=1209566918&providerId=480000001946651 
   - B站  https://www.bilibili.com/video/av73369478/ 

-  ps 
-  浏览器
   - 谷歌
   - 火狐
   - 360



## 作业

下载vscode 编辑器，并安装成功，看我b站录制的视频，并且安装插件





















名称:行者课堂 

网址:cs1024.com

qq/微信:100000356 

## 常见的浏览器和内核

- 常见的

  - 谷歌 （最常用的）
  - 火狐
  - ie 
  - qq 浏览器
  - 360浏览器
  - safari  苹果浏览器
  - opera 浏览器

- 浏览器内核

  可以读取网页内容，并把网页内容显示出来

  - chrome     Blink 
  - ie            Trident 
  - firefox     gecko
  - safari      webkit



## 作业

下载安装谷歌，火狐，ie 浏览器 







名称:行者课堂 

网址:cs1024.com

qq/微信:100000356 

# Web 标准

- web标准是什么
  - web标准是由W3C（万维网联盟）和其他组织制定的一套标准
- 为什么需要web标准
  - 不同的浏览器厂商对前端代码的处理方式不同，比如我们不设置字体大小，chrome 可能是10px，ie可能是20px。就会造成不同的浏览器，对网页的显示是不同的。要是不同的浏览器厂商都遵循这套web标准，那显示的网页就不会有太大的差异
- web标准包括什么
  -  html
  -  css
  -  javscript





























名称:行者课堂 

网址:cs1024.com

qq/微信:100000356 

# html_简介

- html   HyperText Markup Language   超文本标记语言  

- 描述网页的结构

- 什么是网页？

  - 网站  cs1024.com ，网页的一个集合，1个或几个网页组成一个网站，
  - 网页 就是html 文件，可以在浏览器中打开的

- 什么是文本？

  - 我们平常在记事本里写的文字 

  - 写一个网页

- 什么是超文本？

  - 不仅仅是文字，包括图片，视频等

- 什么是标记？

  - 用标记把内容包括起来 ，标记也叫标签，开始标签（也叫起始标签），结束标签（也叫闭合标签）
  - 试着把网页写的内容用h1标签包括起来

- 写一个基本网页的框架

  ```javascript
  <html> 根标签,只用一个，最外层 
  <head>  头部
  <body>  身体 
  <title> 标题    
  ```
















名称:行者课堂 

网址:cs1024.com

qq/微信:100000356 

# html_注释

- 不是写给用户看的，是写给开发者自己看的，不会在网页上面显示

  ```html
  <!-- 我是注释 -->  
  ```

- webstorm 的注释快捷键 ctrl+/ 











名称:行者课堂 

网址:cs1024.com

qq/微信:100000356 

# html_属性

- html的属性用来描述这个标签的，
- 比如大部分标签都有的`style`属性，可以设置标签的样式（css），对网页美化

w3c文档

 https://www.w3school.com.cn/ 





















名称:行者课堂 

网址:cs1024.com

qq/微信:100000356



# html_的文档声明

HTML1.0在1993年6月作为互联网工程工作小组（IETF）工作草案发布（并非标准）：

HTML 2.0——1995年11月作为RFC 1866发布，在RFC 2854于2000年6月发布之后被宣布已经过时

各大浏览器厂商的标准不一样，导致表现不一样。写网页要写不同的代码来适应不同的浏览器。

HTML 3.2——1997年1月14日，W3C推荐标准

HTML 4.0——1997年12月18日，W3C推荐标准

HTML 4.01（微小改进）——1999年12月24日，W3C推荐标准

```javascript
<!DOCTYPE HTML PUBLIC
"-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">
```

HTML5 —— 2014年10月29日，万维网联盟宣布，经过接近8年的艰苦努力，该标准规范终于制定完成

```javascript
<!doctype html>
```

## 文档声明

为了让网页知道我们使用的是html5版本，我们需要在html 顶部 加一个  `<!doctype html>`  ，声明我们我们这个网页是按照html5的标准编写的







名称:行者课堂 

网址:cs1024.com

qq/微信:100000356

# html_进制的知识

计算机使用的是二进制存储，只能存储0,1

二进制: 逢二进一

常用的进制

- 二进制 
  - 只有0,1
  - 01,10,11,100,101,110,111
- 八进制 
  - 只有01234567
  - 01,02,03,04,5,6,7,10,11,12,13,14,15,16
- 10进制
  - 只有0123456789
- 16进制 
  - 只有0123456789abcdef

进制如何转换

 https://tool.lu/hexconvert/ 







名称:行者课堂 

网址:cs1024.com

qq/微信:100000356

# html_div和span标签

## html的语法特性

- 对换行不敏感
- 空白折叠     HTML中所有的文字之间，如果有空格、换行、tab都将被折叠为一个空格显示。

## html_div标签,span标签

- 标签分为2种: 块级元素和行内元素
- 行内元素
  - 与其他行内元素并排
  - 不能设置宽高，默认的宽度就是文字的宽度
- 块级元素
  - 霸占一行，不能与其他任何元素并列。
  - 能接受宽高，如果不设置宽度，那么宽度将默认变为父级的100%。
- 块级元素和行内元素可以通过css 进行相互转换















名称:行者课堂 

网址:cs1024.com

qq/微信:100000356



# html_p和h1到h6和br标签

- h1-h6 字体变小，用来表示网页标题部分
- p 用来表示网页中的段落
- br是换行，自闭合标签



























名称:行者课堂 

网址:cs1024.com

qq/微信:100000356

# html_a标签和img标签

- img

```html
<img src="baby.jpg" alt="巴黎结婚照" />     
src是img标签的属性，baby.jpg是这个属性的值
alt是英语alternate“替代”的意思，就表示不管因为什么原因，当这个图片无法被显示的时候，出现的替代文字（有的浏览器不支持）
```

- a

```html
<a href="1.html">结婚照</a>
1）title 悬停文本
2）target 是否在新窗口中打开
3) 瞄点 <a href="#wdzp">点击我就查看我的作品</a>
```







名称:行者课堂 

网址:cs1024.com

qq/微信:100000356

## html_相对路径和绝对路径

- 相对路径    资源相对于本文件的路径
- 绝对路径   文件在硬盘上真正存在的路径

```html
./  表示当前目录，
../ 来表示上一级目录

```

- 相对路径的好处，假如文件位置发生改变，方便修改



























名称:行者课堂 

网址:cs1024.com

qq/微信:100000356

# html_图片的格式

- png

  - 图片是透明的
  - 保存透明图

- jpg，jpeg

  - 图片可以压缩，但不是透明的
  - 保存一般的图片

- gif

  - 图片是动图

- 使用图片的时候，再保证效果的情况下，尽量去压缩图片，看百度

  





名称:行者课堂 

网址:cs1024.com

qq/微信:100000356

# html_实体字符

在 HTML 中，某些字符是预留的。

在 HTML 中不能使用小于号（<）和大于号（>），这是因为浏览器会误认为它们是标签。

如果希望正确地显示预留字符，我们必须在 HTML 源代码中使用实体字符

```javascript
<   	&lt;
>       &gt; 
&nbsp;  空格
```

参考文档

 https://www.w3school.com.cn/html/html_entities.asp 











名称:行者课堂 

网址:cs1024.com

qq/微信:100000356

# html_字符编码

- 计算机只认识0和1，只能存储0和1

- 计算机中的任何内容，最终都会转换成0和1这样的二进制保存起来

- 比如行者课堂，在计算机的底层,可能是0011111001111010001010010101

- 在读取的时候，将0011111001111010001010010101 转成行者课堂

- 编码: 根据一定的规则，将字符转成二进制的过程

- 解码:根据一定的规则，将二进制转成字符的过程

- 类比打电话的流程，我们拿着话筒说话，声音先被编码成声波，再在线路上传输，穿到了之后再解码，人才可以听懂。

- 字符集:编码和解码的规则

  - 乱码的原因？
  - 编码和解码使用的字符集不同

- 常见的字符集

  - ascii 英文  http://ascii.911cha.com/ 
  - gbk  中国
  - gb2312 中国
  - UTF-8   支持所有文字
  - 编码和解码的图解，如何保存和读取行者这几个字符

- 设置编码方式和解码方式

  - 设置webstorm的编码方式
  - utf-8 编码
  - 设置网页的解码方式

  ```javascript
  <meta charset="UTF-8">
  ```

  































名称:行者课堂 

网址:cs1024.com

qq/微信:100000356

# html_ meta标签

元数据（Metadata）是数据的数据信息。

<meta> 标签提供了 HTML 文档的元数据。元数据不会显示在客户端，但是会被浏览器解析。


META元素通常用于指定网页的描述，关键词，作者及其他元数据。还可以设置网页的字符编码

元数据可以被使用浏览器（如何显示内容或重新加载页面），搜索引擎（关键词）

```javascript
<meta name="description" content="行者课堂,可能是最好的前端入门教程">
<meta name="keywords" content="HTML,CSS,JavaScript">
<meta name="author" content="行者">
<meta charset="UTF-8">
```

































名称:行者课堂 

网址:cs1024.com

qq/微信:100000356

# html_ul、ol标签

- ul

```html
<ul>
     <li>无序号列表</li>
     <li>无序号列表</li>
     <li>无序号列表</li>
     <li>无序号列表</li>
     <li>无序号列表</li>
</ul>
```

- ol

```html
<ol>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
</ol>
```









名称:行者课堂 

网址:cs1024.com

qq/微信:100000356

# html_不常用标签

- strong  加粗字体
- em   斜体
- cite 引文
- del 删除线
- ins，u 下划线
- sup，sub 上标字，下标字
- tt 打字机
- big,small 大字体，小字体
- blockquote 引用

```javascript
<div>正常</div>
<strong>加粗</strong>
<cite>引用</cite>
<del>删除</del>

<ins>下划线</ins>
<u>下划线</u>

<sup>上标字</sup>
<sub>下标字</sub>

<tt>打字机</tt>
<big>大写的</big>
<small>小写的</small>

<blockquote>引用</blockquote>
```











名称:行者课堂 

网址:cs1024.com

qq/微信:100000356

# html_表格标签

表格布局包括table,tr,th,td 等标签

```javascript
 <table border="1" width="500" height="300">
        <tr>
            <th>序号</th>
            <th>产品名称</th>
            <th>产品价格</th>
            <th>产品数量</th>
        </tr>
        <tr align="center">
            <td>1</td>
            <td>苹果</td>
            <td>RMB5.00</td>
            <td>1000</td>
        </tr>
        <tr align="center">
            <td>2</td>
            <td>橘子</td>
            <td>RMB10.00</td>
            <td>2000</td>
        </tr>
</table>
```

































名称:行者课堂 

网址:cs1024.com

qq/微信:100000356

# html_表单标签

## 文本框

```html
<label for="male">Male</label>
<input type="text" value="默认有的值" name="male" />
value表示“值”，value属性就是默认有的值，文本框中已经被填写好了
```

## 密码框

```html
<input type="password" />
```

## 单选按钮

```html
<input type="radio" name="xingbie" checked="checked" /> 男
<input type="radio" name="xingbie" /> 女
默认被选择，就应该书写checked=”checked”
```

## 复选框

```html
<p>
    请选择你的爱好：
    <input type="checkbox" name="aihao"/> 睡觉
    <input type="checkbox" name="aihao"/> 吃饭
    <input type="checkbox" name="aihao"/> 足球
    <input type="checkbox" name="aihao"/> 篮球
    <input type="checkbox" name="aihao"/> 乒乓球
    <input type="checkbox" name="aihao"/> 打豆豆
</p>
```

## 下拉列表

```html
<select>
      <option>北京</option>
      <option>河北</option>
      <option>河南</option>
      <option>山东</option>
      <option>山西</option>
      <option>湖北</option>
      <option>安徽</option>
</select>
```

## 多行文本框

```html
<textarea cols="30" rows="10"></textarea>
```

## 按钮

```html
1）普通按钮：<input type="button" value="我是一个普通按钮" />
2）提交按钮：<input type="submit" />
3）重置按钮：<input type="reset" />
```

## 整合表单标签

```html
<form action="http://localhost" method="GET">
    姓名: <input type="text">
    <input type="submit" value='提交'>
</form>
```

## 作业 写个人信息的表格demo

参考 https://www.php.cn/div-tutorial-411532.html 





