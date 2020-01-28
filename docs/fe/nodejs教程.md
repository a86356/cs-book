nodejs教程

# node

## 基本介绍

node 是基于 chrome v8 引擎的 js 运行环境

js 是跑在v8 引擎上面的。我把 v8 引擎从浏览器种拿出来

node 就是一个js的运行环境，但是他不是在浏览器中的。

![mark](http://cdn.cs1024.com/images/20191224/t4CUr9qv4Nkt.png?imageslim)

Node.js 就是运行在服务端的 JavaScript，让前端开发人员可以写后端代码

Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。

## 为什么学习node？

为了找工作。现在都要求nodejs了

## 能干嘛

nodejs 能干嘛

写后端

写桌面应用。

electron  https://electronjs.org/

vscode 

## 资源

官网  https://nodejs.org/en/

中文官网： http://nodejs.cn/

书籍 （深入的时候看）

深入浅出nodejs

nodejs实战



# node运行js

node 是在os下运行的一个程序,他提供了一个环境，可以解析js

可以在linux，window,mac 操作系统运行。

需要先下载

下载地址 https://nodejs.org/en/

为了方便，我们也下载一个git的命令行工具 https://git-scm.com/

安装的路径不要出现中文名

到node安装目录下面

点击node.exe

console.log(111);

另外直接cmd ，输入node

console.log(22);

写一个index.js的文件，再命令行到index.js的目录下

node index.js运行

或者用编辑器的命令行工具



# Node.js REPL(交互式解释器)

Node.js REPL(Read Eval Print Loop:交互式解释器) 表示一个电脑的环境，类似 Window 系统的终端或 Unix/Linux shell，我们可以在终端中输入命令，并接收系统的响应。



Node 的交互式解释器可以很好的调试 Javascript 代码。

开始学习 REPL

我们可以输入以下命令来启动 Node 的终端：



cmd启动node

```javascript
1+2
```

前面我们已经提到按下两次 **ctrl + c** 键就能退出 REP





# fs模块



认识模块

nodejs 的话，由模块组成，我们去编写nodejs的代码，一般会用到模块

![mark](http://cdn.cs1024.com/images/20191225/jil5Y9TmyVLd.png?imageslim)

像浏览器的话，有dom模块，js可以操作dom

nodejs模块内置模块，第三方模块，自己写的模块

![mark](http://cdn.cs1024.com/images/20191224/sXCOsnYIB47F.png?imageslim)

http://nodejs.cn/

```javascript
// 文件读取
const fs =require('fs');
fs.readFile('./cs1024com.txt','utf-8', (err,data)=> {
    if (err) throw err;
    console.log(data);
});
// 异步调用
```

```javascript
// 写文件
fs.writeFile('文件.txt', 'Node.js中文网', 'utf8', callback);
```

# http 模块

可以开启一个http的服务，接收客户端的请求

![mark](http://cdn.cs1024.com/images/20191224/K7JJwD9uH8hR.png?imageslim)

http 的服务要一直运行的，因为随时可能会有客户端来请求

```javascript

// 引入http模块
const http = require('http');

// 返回一个server的实例
const server = http.createServer();


server.on('request',(req,resp)=>{

    // req 表示请求过来的对象，包含一些请求的信息
    console.log(req.method);

    // resp 是响应的对象，给客户端响应数据的
    resp.write("hello world");
   
    resp.end();
    
})

// 监听端口
server.listen(8080,function () {
    console.log('收到了来自客户端的消息')
})
```

# nodemon

在编写调试Node.js项目，修改代码后，需要频繁的手动close掉，然后再重新启动，非常繁琐。现在，我们可以使用`nodemon`这个工具，它的作用是监听代码文件的变动，当代码改变之后，自动重启。

```javascript
npm install -g  nodemon
```

启动

```javascript
nodemon app.js
```





# 响应中文

```javascript
// 响应中文
res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
resp.write("张三");
```











# 响应html文件

用fs读取，返回给客户端











# 响应静态资源

需要另外去写响应的代码，在index.html里面插一个图片

```javascript
const http  =require('http');

const fs =require('fs');
var url = require('url');


const server = http.createServer();

server.on('request',(req,resp)=>{
    // 解析请求，包括文件名
    var pathname = url.parse(req.url);

    let ext = req.url.split('.')[1];

    if(ext=='html'){
        console.log(123);
        fs.readFile('./'+req.url,'utf-8', (err,data)=> {
            if (err) throw err;
            resp.write(data);
            resp.end()
        });
    }

    else if(ext=='png'){

        let stream = fs.createReadStream( "./"+req.url );

        var responseData = [];//存储文件流
        if (stream) {//判断状态
            stream.on('data', function( chunk ) {
                responseData.push( chunk );
            });
            stream.on('end', function() {
                var finalData = Buffer.concat( responseData );
                resp.writeHead(200, {'Content-Type': 'image/png'});
                resp.write( finalData );
                resp.end();
            });
        }
    }else{
        console.log("unSupport Type, Please contact Administrator err url");
        resp.write('');
        resp.end();
    }
})
//5000 - 65432
server.listen(8080);

```











# 响应json数据

```javascript
var http = require('http');
var data = {key: 'value', hello: 'world'};
var srv = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(data));
});

srv.listen(8080, function() {
  console.log('listening on localhost:8080');
});
```





# 使用第三方模块

第三方模块都是用npm install 的方式安装的，安装了在node_modules目录下面

```javascript
npm install moment
```

去npm官网查方法







# npm介绍

npm是一个包管理工具

nodejs 有内置模块（http，fs）， 有些大神写的模块（第三方模块），用npm 安装。还有自己写的模块

查看npm版本

```javascript
npm -v
```

npm是node安装的时候默认安装的

npm 有哪些命令

```javascript
npm
```

看帮助文档

安装

```javascript
npm install xx  // npm i xx
```

取消安装

```javascript
npm uninstall xx 
```

初始化一个npm项目

```javascript
npm init // npm init -y 表示都是yes
```





# 开发依赖和生产依赖

```javascript
npm install xx  --save-dev    //   开发环境的依赖 devDependencies 下列出的模块，是我们开发时用的
npm install xx  --save        //   生产环境的依赖 线上的环境 dependencies 下的模块，则是我们发布后还需要依赖的模块，譬如像jQuery库或者Angular框架类似的，我们在开发完后后肯定还要依赖它们，否则就运行不了。
```

省略写法

```javascript
npm install xx  --save-dev  //npm i xx -D
npm install xx  --save  // npm i xx -S
```





# npm 镜像

为什么？

国内墙的问题，所以很慢 ，

用淘宝的npm镜像，就是淘宝把npm从国外复制到国内的服务器上，每隔5分钟同步一次

https://www.jianshu.com/p/9c7509e4ae83

单次使用

```javascript
// 单次从淘宝下载
npm install jquery --registry=https://registry.npm.taobao.org
```

永久使用淘宝的镜像

```javascript
npm config set registry https://registry.npm.taobao.org
npm install jquery // 都会从淘宝下载
```

# package.json和package-lock.json文件

安装了第三方模块后，多了一个**package-lock.json**的文件夹

package.json 记录项目的信息和安装的模块

–save：将保存配置信息到pacjage.json的dependencies节点中。

–save-dev：将保存配置信息到pacjage.json的devDependencies节点中。  也可以 

dependencies：运行时的依赖，发布后，即生产环境下还需要用的模块

devDependencies：开发时的依赖。里面的模块是开发时用的，发布时用不到它。

package.lock.json 记录了详细信息

package.json 记录大致信息，package-lock.json记录详情





你把代码上传到github的话，只需要传一个package.json.别人下载后

```javascript
npm install   // 安装所有package.json的依赖
```



## 

# commonjs 规范的由来

为什么需要规范？

js 运行在不同的环境中，不同给环境需要遵循一样的规范才行。

![mark](http://cdn.cs1024.com/images/20191225/Ka35GQr8pz8h.png?imageslim)

js的能力取决于环境的api，在浏览器中有dom的api，node环境中，有模块的api。

![mark](http://cdn.cs1024.com/images/20191225/jil5Y9TmyVLd.png?imageslim)

我们代码中的require("fs") 就是commonjs的规范中的内容。



# commonjs 规范

模块化思想 ： 所有的东西都是通过模块方式引入和导出的

1. require 引入模块

    require 引入一个模块 ,

2. exports 导出模块

   比如导出才能让别人使用。

   模块本身有个module对象，他表示自身，

   module有一个exports属性，用来导出数据

   用require 引人自己的模块，要加路径./，引入node_modules的第三方模块的时候，可以直接写模块名字

   可以不写文件后缀名

   ```javascript
   exports === modules.exports
   ```

3. 模块标志

   模块的名字，fs，http ，别人用的时候，要先知道你模块的名字

   模块的名字就是文件名，用require 引入

## 实战

```javascript
//module.exports===exports
//window.alert === alert
```

# export 和module export的不同

**module和exports是Node.js给每个js文件内置的两个对象。**

在node.js中打印console.log(module)可以看出 **module** 和 **exports** 都是node中提供的两个对象，其中module里包裹着exports

```json
Module {
  id: '.',
  exports: {},
  parent: null,
  filename: '',
  loaded: false,
  children: [],
  paths:[] 
  }
```

**实际上这两个对象指向同一块内存。这也就是说module.exports和exports是等价的。如图示：**



![mark](http://cdn.cs1024.com/images/20191225/DvfrM4j6uPK0.png?imageslim)

但是这里有个重点，每个导出模块 node.js 默认会返回 `return module.exports`;

```javascript
//song.js
module.exports = {name: '樱花树下'}；
exports = {name: '不吐不快'};
```

```javascript
//main.js
let song= require('./song');
console.log(song);//输出：{name: '樱花树下'}
```

![mark](http://cdn.cs1024.com/images/20191225/1XhEqWdB3CJB.png?imageslim)

所以推荐使用的时候，给export加属性和方法就行了

```javascript
//推荐 1,
export.a=1;
export.b=1;
//推荐 2
module.export={a:1,b:2}


//错误 不要直接给export 赋值
export ={a:1}
```

# 模块加载顺序

假如加了路径，就在路径里找

假如不加路径，先加载核心模块，再第三方模块，都找不到就报错

# http模块拆分

把响应的代码拆出去







# express 框架

## Express 简介

Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。

使用 Express 可以快速地搭建一个完整功能的网站。

Express 框架核心特性：

- 可以设置中间件来响应 HTTP 请求。
- 定义了路由表用于执行不同的 HTTP 请求动作。
- 可以通过向模板传递参数来动态渲染 HTML 页面。

## 安装 Express

```javascript
npm install express --save
```

## 安装插件

```javascript
body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
cookie-parser - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
multer - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。
```

```javascript
npm install body-parser --save
npm install cookie-parser --save
npm install multer --save
```

安装nodemon ，nodejs热更新工具

```javascript
npm install nodemon -g //全局安装
nodemon index.js //运行
```



## get 实例

```javascript
const express = require('express');
const app = express();

// 路由
app.get('/',function (req,res) {
    res.send('hello cs1024.com');
})

app.get('/abc',function (req,res) {
    res.send('abc cs1024.com');
})


app.listen (8081, ()=> {
   // console.log(server.address().port);
})
```

参考文档：https://www.runoob.com/nodejs/nodejs-express-framework.html

## post 和中间件

```javascript
cosnt express = require('express');
let app = express();

app.get('/routing', //路由
    function middleware1(req, res, next) { //中间件1
        console.log('Be invoked firstly.')
        next();
    },
    function middleware2(req, res,next) { //中间件2
        res.send('Hello world!');
        next(); //won't work.
    },
    function middleware3(req, res,next) {
        console.log('Not be invoked!');
    }
)
```

如上所示，当express获取api请求后，依次运行middleware1，middleware2，middleware3……这里middleware1打印完一串字符后，调用`next()`方法，express会接着往下运行middleware2；middleware2直接向response发送了*Hello world!*，然后整个请求就结束了，尽管后面还有`next()`方法，但也不会再调用middleware3了。

![mark](http://cdn.cs1024.com/images/20191225/EJz8tjiCK0yR.png?imageslim)



- 

除了一般的`post`，`get`等方法，`app.use`也可以用到middleware。

```javascript
let logger = (req, res, next) => {
    console.log('LOGGED');
    next();
}

app.use(logger);

app.get('/api', (req, res) => {
    res.send('Hello world!');
})
```

现实开发中我们还会用到很多express的三方库，主要原理都是use各种自定义的middleware

post 实例

```javascript
const express = require('express');
const app = express();

var bodyParser = require('body-parser');
//
app.use(bodyParser.urlencoded({
    extended:true
}));

app.post('/data',function (req,res) {

    console.log(req.body);

    res.send('abc cs1024.com');
})

app.listen (8081, ()=> {
   // console.log(server.address().port);
})
```

https://www.runoob.com/nodejs/nodejs-express-framework.html



## 静态文件

Express 提供了内置的中间件 **express.static** 来设置静态文件如：图片， CSS, JavaScript 等。

你可以使用 **express.static** 中间件来设置静态文件路径。例如，如果你将图片， CSS, JavaScript 文件放在 public 目录下，你可以这么写：

```javascript
app.use('/public', express.static('public'));

app.get('/public/images/*', function (req, res) {
    res.sendFile( __dirname + "/" + req.url );
    console.log("Request for " + req.url + " received.");
})
```









# mysql数据库



## 认识数据库

数据库就是服务端存储数据的地方，比如你的账号，密码都是存储在数据库中的。

交互模型

![mark](http://cdn.cs1024.com/images/20191225/2vUjoSYOAXCR.png?imageslim)

mysql是开源的，用的最多

## 安装

下载phpstudy （php的一个集成开发环境，包括 mysql ,php,nginx）

https://www.xp.cn/

下载hedisql （图形化管理界面，方便我们更容易操作数据库）

https://www.heidisql.com/

## 认识sql语句 基本操作

sql 语句可以帮助我们对数据库进行操作

一共操作包括增加，删除，更新，删除，也称增删改查

数据库和数据表是什么？

数据库 里面可以放数据表

数据表里面有列和行，列也叫字段，行也叫记录

增加

```mysql
INSERT INTO 表名称 VALUES (值1, 值2,....)
```

删除

```mysql
DELETE FROM 表名称 WHERE 列名称 = 值
```

修改

```mysql
UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值
```

查询

```javascript
SELECT 列名称 FROM 表名称
```











## 安装mysql

要在node上操作mysql，不仅仅需要mysql运行起来，同时还需要安装node上对mysql操作的一些模块。

```javascript
npm install mysql
```

添加用户

```javascript
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'test'
});

connection.connect();

connection.query('select * from user', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
});
```

# 用户管理系统

## 搭建环境

## 增加用户

## 查询用户

## 删除用户

## 修改用户

## 什么是 RESTfulapi？

REST即表述性状态传递（英文：Representational State Transfer，简称REST）是Roy Fielding博士在2000年他的博士论文中提出来的一种软件架构风格。

表述性状态转移是一组架构约束条件和原则。满足这些约束条件和原则的应用程序或设计就是RESTful。需要注意的是，REST是设计风格而不是标准。REST通常基于使用HTTP，URI，和XML（标准通用标记语言下的一个子集）以及HTML（标准通用标记语言下的一个应用）这些现有的广泛流行的协议和标准。REST 通常使用 JSON 数据格式。



以下为 REST 基本架构的四个方法：

- **GET** - 用于获取数据。 /user     /user/3    // get 方法
- **PUT** - 用于更新或添加数据。 /user      //put 方法  data
- **DELETE** - 用于删除数据。 /user/1      //delete 方法
- **POST** - 用于添加数据。 /user             // post 方法

# 优化项目

把代码拆分掉





