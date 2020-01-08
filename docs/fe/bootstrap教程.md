# bootstrap 基本介绍

https://getbootstrap.com/docs/3.4/javascript/#affix

```javascript
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" rel="stylesheet">
```



# 入门

https://getbootstrap.com/docs/4.4/examples/starter-template/

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>bootstap 项目</title>
    <link rel="stylesheet" href="bootstrap-3.4.1/dist/css/bootstrap.css">
    <style>
        body{
            padding-top: 50px;
        }
        .content{
            text-align: center;
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand">
                    navbar
                </a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="">home</a></li>
                    <li class=""><a href="">about us</a></li>
                    <li class=""><a href="">contact</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container">
        <div class="content">
            <h1>Bootstrap starter template</h1>
            <h1>学习前端,cs1024.com</h1>
        </div>
    </div>
</body>
</html>
```

# 全局css样式

去bs的css目录看

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>bootstap 项目</title>
    <link rel="stylesheet" href="bootstrap-3.4.1/dist/css/bootstrap.css">
</head>
<body>
    <div class="container">
        <h1>行者课堂 <small>可能是最好的前端视频教学网站</small></h1>
        <p class="lead">行者课堂，cs1024.com</p>
        <p class="text-left">左边</p>
        <p class="text-center">中间</p>
        <p class="text-right">右边</p>
        <p class="text-primary">蓝色</p>
    </div>
</body>
</html>
```

# 栅格布局

https://getbootstrap.com/docs/4.4/layout/grid/

最外层必须是container类,container-fluid 是宽度100%的，一般用container即可

bs栅格系统分12列，不同的视口显示不同的效果。

| Extra small <576px  | Small ≥576px                         | Medium ≥768px | Large ≥992px | Extra large ≥1200px |            |
| ------------------- | ------------------------------------ | ------------- | ------------ | ------------------- | ---------- |
| Max container width | None (auto)                          | 540px         | 720px        | 960px               | 1140px     |
| Class prefix        | `.col-`                              | `.col-sm-`    | `.col-md-`   | `.col-lg-`          | `.col-xl-` |
| # of columns        | 12                                   |               |              |                     |            |
| Gutter width        | 30px (15px on each side of a column) |               |              |                     |            |
| Nestable            | Yes                                  |               |              |                     |            |
| Column ordering     | Yes                                  |               |              |                     |            |

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>bootstap 项目</title>
    <link rel="stylesheet" href="bootstrap-3.4.1/dist/css/bootstrap.css">
    <style>
        .row div{
            border: 1px solid green;
            background: yellow;
            text-align: center;
            padding: 20px ;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-8">8888</div>
            <div class="col-md-4">6666</div>
        </div>
        <div class="row">
            <div class="col-md-4 col-md-offset-4">6666</div>
        </div>
    </div>
</body>
</html>
```

# css代码块

```html
<div class="container">
    <div>
        我是内联代码<code>&lt;html&gt</code>
    </div>
    <div>
        <pre>
                var a=1;
            </pre>
    </div>
    <div>
        <kbd>特效</kbd>
    </div>
</div>
```

# 表格

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>bootstap 项目</title>
    <link rel="stylesheet" href="bootstrap-3.4.1/dist/css/bootstrap.css">
    <style>
        .row div{
            border: 1px solid green;
            background: yellow;
            text-align: center;
            padding: 20px ;
        }
    </style>
</head>
<body>
    <div class="table-responsive">
        <table class="table table-bordered table-striped table-hover">
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>年龄</th>
                </tr>
            </thead>
            <tbody>
                <tr class="success">
                    <td>张三</td>
                    <td>男</td>
                    <td>18</td>
                </tr>
                <tr class="info">
                    <td>李四</td>
                    <td>男</td>
                    <td>18</td>
                </tr>
                <tr class="warning">
                    <td>李四</td>
                    <td>男</td>
                    <td>18</td>
                </tr>
                <tr class="danger">
                    <td>李四</td>
                    <td>男</td>
                    <td>18</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>
```

# 表单

https://v3.bootcss.com/css/#forms

https://www.youtube.com/watch?v=CB7XLVo3XSY&list=PLmOn9nNkQxJFCeKeTP8MoTrGkmYMPkBD6&index=3

