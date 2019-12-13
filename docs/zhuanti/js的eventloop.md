# js的eventloop

js是单线程，他只有一个调用栈，每次只能做一件事

看代码

![image-20191201090915173](F:\project\cs-book\docs\fe\image-20191201090915173.png)

当一个函数被调用，他就进入了栈（stack），当一个函数调用结束，他就出栈了。

死循环调用栈

```javascript
function a(){
    return a()
}
a();
```



阻塞

有些操作很耗时间，比如网络请求，网络请求就会阻塞代码执行。

在栈里面执行很慢，我们都可以说被阻塞了。

对单线程的js来说， 假设有2个网络请求，js的单线程的，先跑第一个请求，，等死我了。再第二个请求，当代码完全被执行完了，栈就被清空了。



阻塞带来的问题，给用户看到就是一卡一卡的





怎么解决？



异步回调：函数不是立刻执行的，而是js的单线程先只管往下执行，当满足了某件，再回来执行函数。



```jacva

```







dom 操作，ajax,settimeout 不是v8的东西，是浏览器的api







看下面的调用栈动画

```javascript
console.log(1);
setTimeout(function () {
    console.log(2)   // 这里把console.log 放到队列里面，稍后执行的
},1000)
console.log(3)
```

![mark](http://cdn.cs1024.com/images/20191201/xy4huoxilhLd.png?imageslim)





事件循环必须等到栈被清空了，才会被推到栈里面执行

 

主要是一个执行的动画流

