# 闭包

定义：当函数可以访问所在的词法作用域时，这个函数就是闭包，

函数在词法作用域之外执行( 严格类型的闭包)

函数在当前词法作用域执行( 非严格类型的闭包)





例子

```javascript
// 其实是作用域的规则,但不是严格来说的闭包，因为他在自己的作用域里面执行
//定义时候的词法作用域 b->a->全局
function a() {
    var v=1;
    function b() {
        console.log(v)
    }
    b();
}
```

另一个例子

```javascript
// 返回一个函数，这个函数在自己的词法作用域之外调用，也是闭包
// 定义时候的词法作用域 b->a->全局 。使用的词法作用域是全局，2个是不一样的。
function a() {
    var v=1;
    function b() {
        console.log(v)
    }
    return b
}

var q=a();
q();



```

通常情况下，a执行完成之后，整个内部作用域会被销毁，引擎的垃圾回收机制，但是闭包可以阻止被销毁，因为还有q 引用着 b 这个函数，很短时间内，q被调用，依然可以访问到v，q（）执行完之后，a的内部作用域因没有被别人引用，所以销毁了。



无论通过何种手段将内部函数传递到所在的词法作用域以外，它都会持有对原始定义作用域的引用，无论在何处执行这个函数都会使用闭包。



# setTimeout的闭包

```javascript
function a(qq) {
    setTimeout(function bb() {
        console.log(qq)
    },1000)
}
a()
// 当a 被调用的时候，过了1秒，a 的内部作用域不会消失，settimeout内有个引用，指向他内部的函数，内部函数的词法作用域链上有个qq的变量，并且使用了他，这样就是一个闭包。当console.log(qq)执行完了之后，a的内部作用域才会消失

```



# 回调函数 （闭包）

当我们使用了回调函数，我们就使用了闭包

回调函数:不会立刻执行的函数

比如点击事件

```javascript
var a=1;
btn.onclick=function () {
    console.log(a)
}
```



# 自调用函数(闭包)

自调用函数也不能严格说是闭包

因为在自己的词法作用域执行

```javascript
var q;
(function f() {
    console.log(q) 
})();


```





作业：找找你写的闭包。







# 循环和闭包

```javascript
for (var i = 0;i<3;i++){
    setTimeout(function timer() {
        console.log(i)  //
    },1000)
}
```

输出的i是多少？

我们认为每个循环时候，都会自己捕获一个i，但是我们看词法作用域，var i 其实是一个全局变量，唯一的，代码执行的过程是，先把循环全部执行完成，再执行settimeout里面的函数的。

那我们试试下面的

```javascript
for (var i=0;i<3;i++){
    (function(){
        

        setTimeout(function timer() {
            console.log(i)
        },1000)     
    })();

}
```

自调用函数内部作用域 是空的，还是会找全局的i

修改

```javascript
for (var i=0;i<3;i++){
    (function(i){
        
        setTimeout(function timer() {
            console.log(i)   // 0 1 2
        },1000)
    })(i);
}
```

 用let来劫持作用域

```javascript
for (let i=0;i<3;i++){
    
    i = 0
    setTimeout(function timer() {
        console.log(i)  // 0-1 2
    },1000)
}
```



# 利用闭包实现模块

```javascript
function my() {
    var money; //私用

    function one() {
        console.log(money)
    }
	function two){}

    return {
        one:one,
    }
}
var z=my();
z.one();

conso
```

利用闭包可以实现模块，模块包含私有的变量和函数,外部不能访问。

 自己写一个简略版的工具，实现加减

```javascript
var jq= (function () {

    function add(a,b) {
        return a+b;
    }


    return {
        add:add
    }
})()
console.log(jq.add(1,2));
```





# 动态作用域 

this

需要明确的是，事实上 JavaScript 并不具有动态作用域。它只有词法作用域，简单明了。 但是 this 机制某种程度上很像动态作用域。



主要区别：词法作用域是在写代码或者说定义时确定的，而动态作用域是在运行时确定 的。（this 也是！）词法作用域关注函数在何处声明，而动态作用域关注函数从何处调用。