# 课程介绍

我们这套课是es6的快速入门课程，计划在2个小时内讲es6的最主要，最常用的部分。



# es6是什么

ES6， 全称 ECMAScript 6.0 ，是 JavaScript 的下一个版本标准，2015.06 发版。

ES6 主要是为了解决 ES5 的先天不足，比如 JavaScript 里并没有类的概念，但是目前浏览器的 JavaScript 是 ES5 版本，大多数高版本的浏览器也支持 ES6，不过只实现了 ES6 的部分特性和功能。

## ECMAScript 的背景

JavaScript 是大家所了解的语言名称，但是这个语言名称是商标（ Oracle 公司注册的商标）。因此，JavaScript 的正式名称是 ECMAScript 。1996年11月，JavaScript 的创造者网景公司将 JS 提交给国际化标准组织 ECMA（European computer manufactures association，欧洲计算机制造联合会），希望这种语言能够成为国际标准，随后 ECMA 发布了规定浏览器脚本语言的标准，即 ECMAScript。这也有利于这门语言的开放和中立。

## ECMAScript 的历史

ES6 是 ECMAScript 标准十余年来变动最大的一个版本，为其添加了许多新的语法特性。

- 1997 年 ECMAScript 1.0 诞生。
- 1998 年 6 月 ECMAScript 2.0 诞生，包含一些小的更改，用于同步独立的 ISO 国际标准。
- 1999 年 12 月 ECMAScript 3.0诞生，它是一个巨大的成功，在业界得到了广泛的支持，它奠定了 JS 的基本语法，被其后版本完全继承。直到今天，我们一开始学习 JS ，其实就是在学 3.0 版的语法。
- 2000 年的 ECMAScript 4.0 是当下 ES6 的前身，但由于这个版本太过激烈，对 ES 3 做了彻底升级，所以暂时被"和谐"了。
- 2009 年 12 月，ECMAScript 5.0 版正式发布。ECMA 专家组预计 ECMAScript 的第五个版本会在 2013 年中期到 2018 年作为主流的开发标准。2011年6月，ES 5.1 版发布，并且成为 ISO 国际标准。
- 2013 年，ES6 草案冻结，不再添加新的功能，新的功能将被放到 ES7 中；2015年6月， ES6 正式通过，成为国际标准。

## 浏览器支持情况

目前各大浏览器基本上都支持 ES6 的新特性，其中 Chrome 和 Firefox 浏览器对 ES6 新特性最友好，IE7~11 基本不支持 ES6。

以下是各大浏览器支持情况及开始时间:

![mark](http://cdn.cs1024.com/images/20191214/mBlmA9FS80iw.png?imageslim)

# let和const

ES2015(ES6) 新增加了两个重要的 JavaScript 关键字: **let** 和 **const**。

let 声明的变量只在 let 命令所在的代码块内有效。

const 声明一个只读的常量，一旦声明，常量的值就不能改变。

## let

```javascript
{
  let a = 11;
  a   // 111
}
a   // 报错 ReferenceError: a is not defined
```

**代码块内有效**

let 是在代码块内有效，var 是在全局范围内有效:

```javascript
{
  let a = 111;
  var b = 1;
}
a  // ReferenceError: a is not defined
b  // 1
```

**不能重复声明**

let 只能声明一次 var 可以声明多次:

```javascript
let a = 11;
let a = 22;
var b = 33;
var b = 44;
a  // Identifier 'a' has already been declared
b  // 4
```

 for 循环计数器很适合用 let 

```javascript
for (var i = 0; i < 10; i++) {
  setTimeout(function(){
    console.log(i);
  })
}
// 输出十个 10
for (let j = 0; j < 10; j++) {
  setTimeout(function(){
    console.log(j);
  })
}
// 输出 0123456789
```

变量 i 是用 var 声明的，在全局范围内有效，所以全局中只有一个变量 i, 每次循环时，setTimeout 定时器里面的 i 指的是全局变量 i ，而循环里的十个 setTimeout 是在循环结束后才执行，所以此时的 i 都是 10。

变量 j 是用 let 声明的，当前的 j 只在本轮循环中有效，每次循环的 j 其实都是一个新的变量，所以 setTimeout 定时器里面的 j 其实是不同的变量，即最后输出 12345。（若每次循环的变量 j 都是重新声明的，如何知道前一个循环的值？这是因为 JavaScript 引擎内部会记住前一个循环的值）。

### 不存在变量提升

let 不存在变量提升，var 会变量提升:

```javascript
console.log(a);  //ReferenceError: a is not defined
let a = "apple";
 
console.log(b);  //undefined
var b = "banana";
```

变量 b 用 var 声明存在变量提升，所以当脚本开始运行的时候，b 已经存在了，但是还没有赋值，所以会输出 undefined。

变量 a 用 let 声明不存在变量提升，在声明变量 a 之前，a 不存在，所以会报错。

## const 命令

const 声明一个只读变量，声明之后不允许改变。意味着，一旦声明必须初始化，否则会报错。

基本用法:

```javascript
const PI = "3.14";
PI  // 3.14

const MY_AGE;  // SyntaxError: Missing initializer in const declaration  
```

 暂时性死区: 

```javascript
var PI = "a";
if(true){
  console.log(PI);  // ReferenceError: PI is not defined
  const PI = "3.1415926";
}
```

 ES6 明确规定，代码块内如果存在 let 或者 const，代码块会对这些命令声明的变量从块的开始就形成一个封闭作用域。代码块内，在声明变量 PI 之前使用它会报错。 



# 解构赋值

直接看代码

## 数组解构

```javascript
let [a, b, c] = [1, 2, 3];
// a = 1
// b = 2
// c = 3
```

## 对象解构

```javascript
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
// foo = 'aaa'
// bar = 'bbb'
```

## 嵌套解构

```javascript
let node = {
    type: "Identifier",
    loc: {
      start: {
      line: 1,
      column: 1
       }
    },
    range: [0, 3]
};
let {
    loc: { start },
    range: [ startIndex ]
  } = node;
console.log(start.line); // 1
console.log(start.column); // 1
console.log(startIndex); // 0
```





# Map和Set

##  Map 对象

 Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。 

map 相比较object方法更多

```javascript
var myMap = new Map();
var keyString = "a string"; 
 
myMap.set(keyString, "和键'a string'关联的值");
myMap.get(keyString);    // "和键'a string'关联的值"
```

### 循环

```javascript
var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");
 
// 将会显示两个 log。 一个是 "0 = zero" 另一个是 "1 = one"
for (var [key, value] of myMap) {
  console.log(key + " = " + value);
}
```

## Set 对象

Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。

```javascript
let mySet = new Set();
 
mySet.add(1); // Set(1) {1}
mySet.add(5); // Set(2) {1, 5}
mySet.add(5); // Set(2) {1, 5} 这里体现了值的唯一性
```

### 类型转换

```javascript
// Array 转 Set
var mySet = new Set(["value1", "value2", "value3"]);
// 用...操作符，将 Set 转 Array
var myArray = [...mySet];
```

###  **数组去重** 

```javascript
var mySet = new Set([1, 2, 3, 4, 4]);
[...mySet]; // [1, 2, 3, 4]
```

# String 扩展

- **includes()**：返回布尔值，判断是否找到参数字符串。
- **startsWith()**：返回布尔值，判断参数字符串是否在原字符串的头部。
- **endsWith()**：返回布尔值，判断参数字符串是否在原字符串的尾部。

```javascript
let string = "apple,banana,orange";
string.includes("banana");     // true
string.startsWith("apple");    // true
string.endsWith("apple");      // false
string.startsWith("banana",6)  // true
```

- repeat() 返回新的字符串，表示将字符串重复指定次数返回

```javascript
console.log("Hello,".repeat(2));  // "Hello,Hello,"
```

## 模板字符串

- 基本用法

  ```javascript
  let string = `Hello'\n'world`;
  console.log(string); 
  // "Hello'
  // 'world"
  ```

-  多行字符串

  ```javascript
  let string1 =  `Hey,
  can you stop angry now?`;
  console.log(string1);
  // Hey,
  // can you stop angry now?
  ```

- 变量名写在 ${} 中，${} 中可以放入 JavaScript 表达式。

  ```javascript
  let name = "Mike";
  let age = 27;
  let info = `My Name is ${name},I am ${age+1} years old next year.`
  console.log(info);
  // My Name is Mike,I am 28 years old next year.
  ```

# Number 类型

### 最大/最小安全整数



**安全整数**

安全整数表示在 JavaScript 中能够精确表示的整数，安全整数的范围在 2 的 -53 次方到 2 的 53 次方之间（不包括两个端点），超过这个范围的整数无法精确表示。

**最大安全整数**

安全整数范围的上限，即 2 的 53 次方减 1 。

```javascript
Number.MAX_SAFE_INTEGER 
```

**最小安全整数**

安全整数范围的下限，即 2 的 53 次方减 1 的负数。

```javascript
Number.MIN_SAFE_INTEGER
```

## 方法

- Number.isFinite()

```javascript
用于检查一个数值是否为有限的（ finite ），即不是 Infinity
console.log( Number.isFinite(1));   // true
console.log( Number.isFinite(0.1)); // true
 
// NaN 不是有限的
console.log( Number.isFinite(NaN)); // false

```

- Number.isNaN()

```javascript
用于检查一个值是否为 NaN 。
console.log(Number.isNaN(NaN));      // true
console.log(Number.isNaN('true'/0)); // false
```

# 对象类型

### 属性的简洁表示法

```javascript
const age = 12;
const name = "Amy";
const person = {age, name};
person   //{age: 12, name: "Amy"}
//等同于
const person = {age: age, name: name}
```

### 方法简写

```java
const person = {
  sayHi(){
    console.log("Hi");
  }
}
person.sayHi();  //"Hi"
//等同于
const person = {
  sayHi:function(){
    console.log("Hi");
  }
}
person.sayHi();//"Hi"
```

### 扩展运算符

拓展运算符（...）用于取出参数对象所有可遍历属性然后拷贝到当前对象

#### 基本用法

```javascript
// 创建一个新对象
let person = {name: "Amy", age: 15};
let someone = { ...person };
someone;  //{name: "Amy", age: 15}
```

#### 对象合并

```javascript
let age = {age: 15};
let name = {name: "Amy"};
let person = {...age, ...name};
person;  //{age: 15, name: "Amy"}
```

自定义的属性在拓展运算符后面，则拓展运算符对象内部同名的属性将被覆盖掉

```javascript
let person = {name: "Amy", age: 15};
let someone = { ...person, name: "Mike", age: 17};
someone;  //{name: "Mike", age: 17}
```

### 新方法

合并对象

```javascript
let target = {a: 1};
let object2 = {b: 2};
let object3 = {c: 3};
Object.assign(target,object2,object3);  
// 第一个参数是目标对象，后面的参数是源对象
target;  // {a: 1, b: 2, c: 3
```

- 如果目标对象和源对象有同名属性，或者多个源对象有同名属性，则后面的属性会覆盖前面的属性。
- 如果该函数只有一个参数，当参数为对象时，直接返回该对象；当参数不是对象时，会先将参数转为对象然后返回。



# Array 类型

### 扩展

-  find

查找数组中符合条件的元素,若有多个符合条件的元素，则返回第一个元素。

```javascript
let arr = Array.of(1, 2, 3, 4);
console.log(arr.find(item => item > 2)); // 3
```

- findindex

查找数组中符合条件的元素索引，若有多个符合条件的元素，则返回第一个元素索引。

```javascript
let arr = Array.of(1, 2, 1, 3);
// 参数1：回调函数
// 参数2(可选)：指定回调函数中的 this 值
console.log(arr.findIndex(item => item==2)); // 1
```

- includes()

数组是否包含指定值。

```javascript
// 参数1：包含的指定值
[1, 2, 3].includes(1);    // true
```

- 复制数组

```javascript
let arr = [1, 2],
arr1 = [...arr];
console.log(arr1); // [1, 2]
```

# 函数

### 不定参数

不定参数用来表示不确定参数个数，形如，...变量名，由...加上一个具名参数标识符组成。具名参数只能放在参数组的最后，并且有且只有一个不定参数。

```javascript
function f(...values){
    console.log(values.length);
}
f(1,2);      //2
f(1,2,3,4);  //4
```

## 参数的默认值

```javascript
function f(a=1,b=2) {
    console.log(a,b)
}
f(4,5)//4,5
f()//1,2
```

### 箭头函数

```java
var f = v => v;
//等价于
var f = function(a){
 return a;
}
f(1);  //1

// 超过1个参数的话，就需要用括号把参数括起来，函数里面的内容超过一条语句的话，就用花括号包裹起来
var a=(a,b)=>{
    var v=1;
    console.log(123);
}

```

### 箭头函数的应用场景

```javascript
// 回调函数
var Person = {
    'age': 18,
    'sayHello': function () {
      setTimeout(function () {
        console.log(this.age);
      });
    }
};
var age = 20;

// 匿名函数的this都是window
Person.sayHello();  // 20

var Person1 = {
    'age': 18,
    'sayHello': function () {
      setTimeout(()=>{
        console.log(this.age);
      });
    }
};
var age = 20;
// 箭头函数的this，代表声明时候的对象，而不是调用时候的对象 
Person1.sayHello();  // 18
```

# 迭代器

我们将使用 **for...of** 循环（参见下文的 for...of 循环）对数据结构进行迭代。

## **Array**

```javascript
for (let item of ["zero", "one", "two"]) {
  console.log(item);
}
// output:
// zero
// one
// two
```

## **String**

```javascript
for (const c of 'z\uD83D\uDC0A') {
    console.log(c);
}
// output:
// z
// \uD83D\uDC0A
```

## **Map**

```javascript
const map = new Map();
map.set(0, "zero");
map.set(1, "one");
for (let [key, value] of myMap) {
  console.log(key + " = " + value);
}

```

## set

```javascript
const set = new Set();
set.add("zero");
set.add("one");
 
for (let item of set) {
  console.log(item);
}
// output:
// zero
// one
```

# 类

基本写法

```javascript
class Person{
    // 属性
    name;
    age;
    //构造函数
    constructor(name,age){
        this.age=age;
        this.name=name;

    }
    //方法
    show(){
        console.log(this.name,this.age)
    }


}

let p1 = new Person('zhansan',19);
p1.show();
```

静态方法

```javascript
class Person{

    //静态方法，通过类名去调用
    static  PP(){
        console.log('pp');
    }
}

Person.PP(); //PP
```

setter和getter 函数

```javascript
class Person{
    // 属性
    _name;
    _age;
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    //构造函数
    constructor(name,age){
        this._name = name;
        this._age = age;
    }
    //方法
    show(){
        console.log(this.name,this.age)
    }
}

let p1 = new Person('zhansan',19);
p1.show();
```

继承 子类可以继承父元素的属性和方法

```javascript
class Father {
    eat(){
        console.log('eat salt')
    }
}

class Person extends Father{
    // 属性
    _name;
    _age;
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }
    //构造函数
    constructor(name,age){
        super();
        this._name = name;
        this._age = age;
    }


    //方法
    show(){
        console.log(this.name,this.age)
    }


}

let p1 = new Person('zhansan',19);
p1.show();
p1.eat();
```

# 模块

模块可以导出导入任意js的值，包括变量，函数，类等

下面3个文件同目录，

![mark](http://cdn.cs1024.com/images/20191216/l3gcwdkdixDq.png?imageslim)

a.js

```javascript

let num1=1;
let string1='zhangsa';
let fun1=function(){
    console.log('11');
}
export {num1,string1,fun1}
```

b.js

```javascript
import {num1,string1,fun1} from './a.js'

console.log(num1,string1,fun1);
```

index.html

```html
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
    <script type="module" src="b.js"></script>
</head>
<body>
12313

    <script>
    </script>
</body>
</html>
```

必须放在服务器上才可以运行



### export default 命令

- 在一个文件或模块中，export、import 可以有多个，export default 仅有一个。
- export default 中的 default 是对应的导出接口变量。
- 通过 export 方式导出，在导入时要加{ }，export default 则不需要。
- export default 向外暴露的成员，可以使用任意变量来接收。

a.js

```javascript
let num1=1;
let string1='zhangsa';
let fun1=function(){
    console.log('11');
}
export {num1};
export {string1};


export default {
    num1,
    string1,
}
```

b.js

```javascript
import {num1,string1} from './a.js'
import A from './a.js'
console.log(A);
console.log(num1,string1);
```

### as的用法

对导入的模块重新命名

```javascript
import {num1 as mynum1} from './a.js'
```

# 

# js的异步编程

我们知道的，在 JavaScript 中，所有代码都是单线程的，

所谓"单线程"，就是指一次只能完成一件任务。如果有多个任务，就必须排队，前面一个任务完成，再执行后面一个任务，以此类推。



这种模式的好处是实现起来比较简单，执行环境相对单纯；坏处是只要有一个任务耗时很长，后面的任务都必须排队等着，会拖延整个程序的执行。常见的浏览器无响应（假死），往往就是因为某一段Javascript代码长时间运行（比如死循环），导致整个页面卡在这个地方，其他任务无法执行。

为了解决这个问题，Javascript语言将任务的执行模式分成两种：同步（Synchronous）和异步（Asynchronous）。

"同步模式"就是上一段的模式，后一个任务等待前一个任务结束，然后再执行，程序的执行顺序与任务的排列顺序是一致的、同步的；"异步模式"则完全不同，每一个任务有一个或多个回调函数（callback），前一个任务结束后，不是执行后一个任务，而是执行回调函数，后一个任务则是不等前一个任务结束就执行，所以程序的执行顺序与任务的排列顺序是不一致的、异步的。



"异步模式"非常重要。在浏览器端，耗时很长的操作都应该异步执行，避免浏览器失去响应，最好的例子就是Ajax操作。在服务器端，"异步模式"甚至是唯一的模式，因为执行环境是单线程的，如果允许同步执行所有http请求，服务器性能会急剧下降，很快就会失去响应。



## 异步的实现

这是异步编程最基本的方法。

假定有两个函数f1和f2，后者等待前者的执行结果

```javascript
f1();

f2();
```

如果f1是一个很耗时的任务，可以考虑改写f1，把f2写成f1的回调函数。

```javascript
function f1(callback){

    setTimeout(function () {

        // f1的任务代码

        callback();

    }, 1000);

}
```

执行代码就变成下面这样：

```javascript
f1(f2);
```





没由promise之前的异步编程实现



# Promise 对象

Promise 是异步编程的一种解决方案，其实是一个构造函数，自己身上有all、reject、resolve这几个方法，原型上有then、catch等方法。

Promise对象有以下两个特点。

（1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

下面先 new一个Promise


```javascript
let p = new Promise(function(resolve, reject){
    //做一些异步操作
    setTimeout(function(){
        console.log('执行完成Promise');
        resolve('要返回的数据可以任何数据例如接口返回数据');
    }, 2000);
});

```

>其执行过程是：执行了一个异步操作，也就是setTimeout，2秒后，输出“执行完成”，并且调用resolve方法。

注意！我只是new了一个对象，并没有调用它，我们传进去的函数就已经执行了，这是需要注意的一个细节。所以我们用Promise的时候一般是包在一个函数中，在需要的时候去运行这个函数，如：

```javascript
function time() {
    return new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('执行完成Promise');
            let random =Math.random()*10;
            console.log(random)
            if(random<5){
                resolve('成功啦');
            }else{
                reject('失败啦');
            }
        }, 400);
    })
}

time().then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})
```

还用race和all 方法，

参考https://blog.csdn.net/qq_34645412/article/details/81170576



# Generator 函数

## **介绍**

yield 关键字用来暂停和继续一个生成器函数。我们可以在需要的时候控制函数的运行。

yield 关键字使生成器函数暂停执行，并返回跟在它后面的表达式的当前值。与return类似，但是可以使用next方法让生成器函数继续执行函数yield后面内容，直到遇到yield暂停或return返回或函数执行结束。

## **使用**

函数返回对象包括value和done。其中value值是yield后面表达式值或return后面表达式值。done用于表示函数运行

```javascript
function* ge() {    //声明时需要添加*，普通函数内部不能使用yield关键字，否则会出错
    yield '1';
    yield '2';
    yield '3';
    return '4';
}

var a = ge();    //调用函数后不会运行，而是返回指向函数内部状态的指针
console.log(a.next());    // { value: '1', done: false }   遇到yield暂停
console.log(a.next());  // { value: '2', done: false }
console.log(a.next());    // { value: '3', done: false }
console.log(a.next());   // { value: '4', done: true}    函数执行完毕，返回done
console.log(a.next());    // { value: undefined, done: true}  已经执行完毕，返回undefined
```

## **next 方法**

一般情况下，next 方法不传入参数的时候，yield 表达式的返回值是 undefined 。当 next 传入参数的时候，该参数会作为上一步yield的返回值。

```javascript
function* sendParameter(){
    console.log("strat");
    var x = yield '2';
    console.log("one:" + x);
    var y = yield '3';
    console.log("two:" + y);
    console.log("total:" + (x + y));
}
```

```javascript
//next不传参
var sendp1 = sendParameter();
sendp1.next();
// strat
// {value: "2", done: false}
sendp1.next();
// one:undefined
// {value: "3", done: false}
sendp1.next();
// two:undefined
// total:NaN
// {value: undefined, done: true}
next传参
var sendp2 = sendParameter();
sendp2.next(10);
// strat
// {value: "2", done: false}
sendp2.next(20);
// one:20
// {value: "3", done: false}
sendp2.next(30);
// two:30
// total:50
// {value: undefined, done: true}
```

## **for…of**

for…of循环可以自动遍历Generator函数时生成的Iterator对象。

```javascript
function* ge() { 
  yield '1';
  yield '2';
  yield '3';
  return '4';
}
for(let v of ge()){
  alert(V);    // 1 2 3 4
}
```

# async 函数

## async

async 是 ES7 才有的与异步操作有关的关键字，和 Promise 有很大关联的。

### 语法

```javascript
async function name([param[, param[, ... param]]]) { statements }
```

- name: 函数名称。
- param: 要传递给函数的参数的名称。
- statements: 函数体语句。

### 返回值

async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。

```javascript
async function helloAsync(){
    return "helloAsync";
  }
  
console.log(helloAsync())  // Promise {<resolved>: "helloAsync"}
 
helloAsync().then(v=>{
   console.log(v);         // helloAsync
})
```

## 通常和await 搭配使用

async 函数中可能会有 await 表达式，async 函数执行时，如果遇到 await 就会先暂停执行 ，等到触发的异步操作完成后，恢复 async 函数的执行并返回解析值。

await 关键字仅在 async function 中有效。如果在 async function 函数体外使用 await ，你只会得到一个语法错误。

```javascript
function testAwait(){
   return new Promise((resolve) => {
       setTimeout(function(){
          console.log("testAwait");
          resolve();
       }, 1000);
   });
}
 
async function helloAsync(){
   await testAwait();
   console.log("helloAsync");
 }
helloAsync();
// testAwait
// helloAsync
```

通常用在我们发起请求，后一个请求需要用到前一个请求返回的参数的时候。

await 操作符用于等待一个 Promise 对象, 它只能在异步函数 async function 内部使用。