# koa2 教程

# 简介

Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并没有捆绑任何中间件， 而是提供了一套优雅的方法，帮助您快速而愉快地编写服务端应用程序。



前置知识

es6

node

npm



# 搭建环境

node版本 大于7.6



初始化项目

```javascript
npm init -y
```

新增一个index.js，再

```javascript
node index.js
```

安装koa

```javascript
npm install koa
```

index.js输入

```javascript
const Koa = require('koa');
const app = new Koa();

//中间件 
app.use(async (ctx,next) => {
  ctx.body = 'Hello World';
});

app.listen(3000);
```



# 中间件

中间件 middleware 

```java
//中间件 
// 每次收到请求，都会执行use方法， async 表示异步
// ctx context 请求上下文 ，设置返回的数据，并可以利用他在各个中间件之间传递数据
// ctx request response
app.use(async (ctx,next) => {
  ctx.body = 'Hello World';
});
```

```javascript
const Koa = require('koa');
const app = new Koa();

// logger

app.use(async (ctx, next) => {
    // 等待下一个中间价执行结束
    console.log("中间件1 start")
    await next();
    console.log("中间件1 end")
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
    const start = Date.now();
    console.log("中间件2 start")

    await next();

    console.log("中间件2 end")

    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// response

app.use(async ctx => {
    console.log("中间件3 start")
    ctx.body = 'Hello World';
    console.log("中间件3 end")

});

app.listen(3000);
```

![mark](http://cdn.cs1024.com/images/20191226/AcAYT3JJumdR.png?imageslim)



假如把第2个中间件await next();注释掉会怎么用？





https://koa.bootcss.com/#introduction



# 路由

http://localhost:3000/goods

这里的/goods就是一个路由，表示用户实际访问的地址

```javascript
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx,next) => {
   if(ctx.request.path==='/'){
       ctx.response.body = '<h1>cs1024.com</h1>'
   }
    if(ctx.request.path==='/404'){
        ctx.response.body = '<h1>404</h1>'
    }
});

app.listen(3000);
```

上面写法笨重，借助koa-router

安装

```java
npm i koa-router -S
```

demo

```javascript
const Koa = require('koa');
var router = require('koa-router')();
const app = new Koa();


router.get('/abc',async (ctx,next)=>{

    ctx.response.status=200
    ctx.response.body='cs1024.com'
})


//当前面都没有匹配到对应的路由，就进入这里
router.all('/*',async (ctx,next)=>{
    ctx.response.status=404
    ctx.response.body='404'
})

app.use(router.routes());   /*启动路由*/
app.listen(3000);
```

多中间件

```javascript
router.get('/abc', (ctx,next)=>{
    ctx.response.status=200

    console.log(123);
    next();

},async  (ctx,next)=>[

    ctx.response.body='cs1024.com'
])
```

带参数的路由

```javascript

router.get('/abc/:id', (ctx,next)=>{
    ctx.response.status=200

    console.log(123);
    next();

},async  (ctx,next)=>[

    ctx.response.body='cs1024.com'
])
```

路由前缀

```javascript
router.prefix('/A')
```



# get请求

```javascript
//get
http://localhost:3000/abc?a=1&b=2


const Koa = require('koa');
var router = require('koa-router')();
const app = new Koa();

router.get('/abc', (ctx,next)=>{

    console.log(ctx.request.query)  // 请求对象
    console.log(ctx.request.querystring) // 请求的字符串

    console.log(ctx.request.query.a)
    ctx.response.status=200
    ctx.response.body='cs1024.com'
})


//当前面都没有匹配到对应的路由，就进入这里
router.all('/*',async (ctx,next)=>{
    ctx.response.status=404
    ctx.response.body='404'
})


app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
/*
 * router.allowedMethods()作用： 这是官方文档的推荐用法,我们可以
 * 看到 router.allowedMethods()用在了路由匹配 router.routes()之后,所以在当所有
 * 路由中间件最后调用.此时根据 ctx.status 设置 response 响应头
 *
 */

app.listen(3000);

```

```javascript
// get
http://localhost:3000/abc/31
router.get('/abc/:id', (ctx,next)=>{
    console.log(ctx.params)  // 请求对象
    ctx.response.status=200
    ctx.response.body='cs1024.com'
})

```

# post请求

请求的时候，需要安装body-parser

```javascript
npm i koa-bodyparser -S
```

使用

```javascript
const Koa = require('koa');
var router = require('koa-router')();
const bodyparser = require('koa-bodyparser')
const app = new Koa();
app.use(bodyparser())

router.post('/user/', (ctx,next)=>{

    let {username,password}  =ctx.request.body;
    console.log(username,password);
    ctx.response.status=200
    ctx.response.body='cs1024.com'
})

//当前面都没有匹配到对应的路由，就进入这里
router.all('/*',async (ctx,next)=>{
    ctx.response.status=404
    ctx.response.body='404'
})

app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
/*
 * router.allowedMethods()作用： 这是官方文档的推荐用法,我们可以
 * 看到 router.allowedMethods()用在了路由匹配 router.routes()之后,所以在当所有
 * 路由中间件最后调用.此时根据 ctx.status 设置 response 响应头
 *
 */


app.listen(3000);
```

# 优化项目

优化路由，先安装

```javascript
npm i glob
```

![mark](http://cdn.cs1024.com/images/20191226/A761w2FghHOQ.png?imageslim)

router/index.js

```javascript
const compose = require('koa-compose')
const glob = require('glob')
const { resolve } = require('path')

registerRouter = () => {
    let routers = [];
    glob.sync(resolve(__dirname, './', '**/*.js'))
        .filter(value => (value.indexOf('index.js') === -1))
        .map(router => {
            routers.push(require(router).routes())
            routers.push(require(router).allowedMethods())
        })
    return compose(routers)
}

module.exports = registerRouter
```

router/getuser

```javascript
var Router = require('koa-router');
const router = new Router();
router.get('/user', (ctx,next)=>{

    ctx.response.status=200
    let user={name:"zhangsan"}
    ctx.response.body=user;
})

module.exports=router;
```

router/adduser

```javascript
var Router = require('koa-router');
const router = new Router();
router.post('/adduser', (ctx,next)=>{

    let user={name:"添加成功"}
    ctx.response.body=user;
})
module.exports=router;
```

index.js

```javascript
const Koa = require('koa');
const app = new Koa();
const registerRouter  = require('./router/index')

app.use(registerRouter())
app.listen(3000);
```

优化业务逻辑代码，放到controller目录下面

![mark](http://cdn.cs1024.com/images/20191226/XUrKnQy15oY8.png?imageslim)

controller/user/user

```javascript
module.exports ={
     getUser:async (ctx)=>{
         ctx.response.body={name:'读取成功'}
     },
     addUser:async (ctx)=>{
         ctx.response.body={name:"添加成功"}
     }
}
```

adduser.js

```javascript
var Router = require('koa-router');
const router = new Router();
const User  = require('../controller/user/user')
router.post('/adduser',User.addUser)
module.exports=router;
```

假如还有和数据库交互，我们还可以分出service层，用于和数据库交互。

# 处理静态资源

用koa-static 处理

```javascript
npm i koa-static -S
```

![mark](http://cdn.cs1024.com/images/20191226/wJMamw5s4LwH.png?imageslim)

```javascript
const Koa = require('koa');
const path = require('path');
const app = new Koa();
const registerRouter  = require('./router/index')
const staticFiles = require('koa-static');
app.use(staticFiles(path.resolve(__dirname,'./public')))
app.use(registerRouter())
app.listen(3000);
```

图片路径

http://localhost:3000/images/1.png

# 日志

做过后端的都知道日志的重要性，排查错误

日志分类

debug 调试信息的

info    普通日志

warn   警告

error    后台挂掉的错误

日志按日期分

安装日志工具

```javascript
npm i log4js -S
```

基本使用

```javascript
// 第一个 log4js 例子
const log4js = require('log4js');
// 此处没有选择 category，故而使用默认 category
let logger = log4js.getLogger();
// 设置日志的等级，此处为 info
logger.level = 'info';
// 使用相同或更高的等级 (>= info) 可以输出日志
logger.info("hello world");
```

一个实际项目的使用。 实现了request 记录，请求时间记录，日志全局化，日志等级分割

logformat

```javascript
module.exports={

    requestFormat:(ctx,obj)=> {
        const {method, url, host, headers} = ctx.request;
        const client = {
            method,
            url,
            host,
            userAgent: headers['user-agent']
        }
        return JSON.stringify({...obj, ...client})
    },
    responseFormat:(ctx)=> {
        let {status,message,body,header}=ctx.response

        let respobj={
            status,
            content:body.name,
            message,
            header
        }
        let q= JSON.stringify(respobj)
        return q;
    },

    errorFommat:(err)=> {

        return err;
    },
}
```

```javascript
var log4js = require('log4js');
const {requestFormat,responseFormat,errorFommat} = require('./logformat')

// 日志挂载都ctx 对象上
const methods = ['trace','debug','info','warn','error','fatal','mark']

const reqLogPath = 'logs/reqlog/req';
const resLogPath = 'logs/reslog/resp';
const errLogPath = 'logs/errlog/error';
const config = {
    appenders:{
        console:{type: 'console'},
        // 请求日志
        reqLogger: {
            type: 'dateFile', // 日志类型
            filename: reqLogPath, // 输出文件名
            pattern: 'yyyy-MM-dd.log', // 后缀
            alwaysIncludePattern: true, // 上面两个参数是否合并
            encoding: 'utf-8', // 编码格式,
            keepFileExt: true,
            daysToKeep: 3,
        },
        // 响应日志
        'resLogger': {
            type: 'dateFile',
            filename: resLogPath,
            pattern: '-yyyy-MM-dd.log',
            alwaysIncludePattern: true,
            encoding: 'utf-8',
            keepFileExt: true,
            daysToKeep: 3,
        },
        // 错误日志
        'errLogger': {
            type: 'dateFile',
            filename: errLogPath,
            pattern: '-yyyy-MM-dd.log',
            alwaysIncludePattern: true,
            encoding: 'utf-8',
            keepFileExt: true,
            daysToKeep: 3,
        }
    },
    categories: {

        default: {
            appenders: ['console'],
            level: 'all'
        },
        reqLogger:{
            appenders: ['reqLogger'],
            level: 'info',
        },
        resLogger:{
            appenders: ['resLogger'],
            level: 'info',
        },
        errLogger: {
            appenders: ['errLogger'],
            level: 'error'
        }

    }
};
log4js.configure(config);


module.exports = ()=>{

    return async (ctx,next)=>{
        const cxtlog={}

        const start = new Date().getTime();

        var logger = log4js.getLogger();
        methods.forEach((method)=>{
            cxtlog[method]=(msg)=>{
                logger[method](msg)
            }
        })
        ctx.log= cxtlog;
        await next();

        try{

            const end = new Date().getTime();
            let req={...ctx.request};
            req.responseTime=end-start;
            let obj={
                responseTime:`响应的时间${(end-start)/1000}秒`
            }
            var reqlogger = log4js.getLogger('reqLogger');
            var resLogger = log4js.getLogger('resLogger');

            reqlogger.info(requestFormat(ctx,obj));
            resLogger.info(responseFormat(ctx));

        }catch (e) {

            const errlog = log4js.getLogger('errLogger');
            errlog.error(errorFommat(e));
        }
    }
};
```

入口index.js

```javascript
const Koa = require('koa');
const path = require('path');
const app = new Koa();
const registerRouter  = require('./router/index')
const logger  = require('./middleware/log/index')

const staticFiles = require('koa-static');

app.use(staticFiles(path.resolve(__dirname,'./public')))

const middleware = logger();
app.use(logger());

app.use(registerRouter())
app.listen(3000);
```



![mark](http://cdn.cs1024.com/images/20191227/iX2XoBhTh93e.png?imageslim)



# 接口不存在的处理

![mark](http://cdn.cs1024.com/images/20191227/H2xLRWORSuAh.png?imageslim)

```javascript
//notfound.js
module.exports = (options)=>{
    return async (ctx,next)=>{
        try{
            await next();
            if(ctx.response.status===404 ) ctx.throw(404)

        }catch (e) {

            ctx.response.body='接口不存在';
        }
    }
};
```

实战，另一套课程。

# mysql数据库基本操作

```javascript
npm i sequelize mysql2
npm i sequelize-cli -g
sequelize init
```

新建之后，会出现几个文件

![mark](http://cdn.cs1024.com/images/20191228/hw5xH8yqYav4.png?imageslim)

创建模型

```javascript
sequelize mode:generate --name MemberBase --attribute title:string
```





先看mysql的一套课程

安装 mysql

```javascript
npm i mysql
```

nodejs 跑ts

```javascript
npm i pm2 -D
npm i ts-node
```





