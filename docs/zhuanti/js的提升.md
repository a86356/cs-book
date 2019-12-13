# 变量提升

通常情况，我们认为js是从上到下执行的。

但实际上这并不完全正确，有一种特殊情况会导致这个假设是错误的。

我们看2个例子

```javascript
b = 2; 
var b; 
console.log(b);
```

```javascript
console.log(b); 
var b= 2;
```

js引擎会 在解释js代码之前首先对其进行编译。

编译阶段中的一部分工作就是找到所有的声明，并用合适的作用域将它们关联起来。

因此，正确的思考思路是，包括变量和函数在内的所有声明都会在任何代码被执行前首先被处理。



当你看到 var a = 2; 时，可能会认为这是一个声明。

但 JavaScript 实际上会将其看成两个 声明：var a; 和 a = 2;。

第一个定义声明是在编译阶段进行的。第二个赋值声明会被留在原地等待执行阶段。



我们的第一个代码片段会以如下处理

```javascript
var b; 
b = 2; 
console.log( b );
```

其中第一部分是编译，而第二部分是执行。
我们的第二个代码片段会以如下处理

```javascript
var b; 
console.log( b); 
b = 2;
```



总结:现有声明，再有赋值





## 函数声明和函数表达式的处理方式不同

```javascript
a() //ok
function a() {

}

b(); //error   相当于 undefined()
var b=function () {

}
```



# 函数先于变量提升

函数和变量都会被提升，但是函数先于变量提升

```javascript
a();
        
var a;

function a() {
    console.log('a')
}

a=function () {
    console.log('b')
}
```

实际的执行顺序是

```javascript
function a() {
    console.log('a')
}
var a; // 重复声明，被编译器忽略了

a();


a=function () {
    console.log('b')
}
```

特别注意的是这里var a;是重复声明，因为上面已经对a进行过声明，是一个函数。

- 结论：别对一个变量重复定义







