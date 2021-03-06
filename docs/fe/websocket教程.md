# websocket

## websocket是什么?

WebSocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。

WebSocket 使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。

在 WebSocket API 中，浏览器和服务器只需要做一个握手的动作，然后，浏览器和服务器之间就形成了一条快速通道。两者之间就直接可以数据互相传送。

## 为什么需要websocket

现在，很多网站为了实现推送技术，所用的技术都是 Ajax 轮询。轮询是在特定的的时间间隔（如每1秒），由浏览器对服务器发出HTTP请求，然后由服务器返回最新的数据给客户端的浏览器。这种传统的模式带来很明显的缺点，即浏览器需要不断的向服务器发出请求，然而HTTP请求可能包含较长的头部，其中真正有效的数据可能只是很小的一部分，显然这样会浪费很多的带宽等资源。

HTML5 定义的 WebSocket 协议，能更好的节省服务器资源和带宽，并且能够更实时地进行通讯。

![mark](http://cdn.cs1024.com/images/20200215/tABzjXNojOtJ.png?imageslim)

## 实战



客户端

```javascript
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>

    </style>
</head>
<body>
<script>


    // 协议为ws，
    let ws = new WebSocket('ws://localhost:8888')
    // 连接成功就会执行回调函数
    ws.onopen = function (params) {
        console.log('客户端连接成功')
        // 向服务器发送消息
        ws.send('hello zhangsan')
    }
    // 必须用属性的方式监听事件，监听函数的参数是事件对象
    ws.onmessage = function (e) {
    
        console.log('收到服务器响应', e.data)
    }


</script>
</body>
</html>
```

服务端

```javascript
let express = require('express')
let app = express()

// http服务器
app.listen(8080, () => {
  console.log('point in 8080!')
})

let WebSocketServer = require('ws').Server
// 用WS 模块启动一个websocket服务器，监听8888端口
let wsServer = new WebSocketServer({
  port: 8888
})
// 监听客户端的链接请求， 当客户端链接服务器的时候，就会触发connection事件
// socket代表一个客户端，不是所有客户端共享的，而是每个客户端都要一个socket
wsServer.on('connection', (socket) => {
  console.log('客户端连接成功')
  // 监听对方发送的消息
  socket.on('message', (message) => {
    console.log('接收到客户端的消息', message)
    socket.send('服务器响应'+message+"4455")
  })
})
```

## 参考资料

https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send

https://www.runoob.com/html/html5-websocket.html

