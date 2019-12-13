#  网易考拉pc项目

# less 入门

less 其实是另一种写css的工具，用less 写css的话，会方便一些



第一步：安装一个less的工具

网址  http://koala-app.com/index-zh.html 

基本使用



嵌套

```javascript
// less
.a{
    .b{
        .c{
            color: red;
        }

        div{
            background: red;
        }

        span{
            background: green;
        }
    }
}
// css
.a .b .c {
  color: red;
}
.a .b div {
  background: red;
}
.a .b span {
  background: green;
}

```

变量

```javascript
// less
@fz-small:14px;
@color-red:#f00;

body{
    font-size: @fz-small;
    background:@color-red;
}

//css

body {
  font-size: 14px;
  background: #ff0000;
}

```



# 准备素材

通过ps 把网页的素材切出来





切图神器

cutterman





# 项目目录结构



css 目录下面有3个css文件

base.css 放基础的样式

reset.css 放重置浏览器默认行为的样式

 https://meyerweb.com/eric/tools/css/reset/ 



page.css 放页面单独的样式





# 写头部导航



# 写搜索框部分



















