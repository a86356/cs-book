# js设计模式教程

# 构造器模式

构造函数+原型对象-> 实现创建对象+继承

```javascript
function Person(age,name,qq) {
    this.age=age;
    this.name=name;
    this.name=qq;
}
Person.prototype.show=function () {
    console.log(this.qq+this.name)
}
var p1 = new Person();
p1.show();
```

# 模块模式

字面量模块模式

```javascript
var person={
    age:1,
    name:'行者课堂',
    qq:'100000356',
    show:function () {
        console.log('我的名字是='+this.name+"qq是="+this.qq)
    }
}

person.show();
```

函数返回模块

```javascript
var mymodle  =(function () {
    var counter = 0;
    // 通常私有函数或者变量用_开头，
    // 外面无法直接访问这个变量
    var _age=10;

    function add() {
        counter++;
    }

    function getCounter() {
        return counter;
    }

    //通常私有函数或者变量用_开头，
    // 我没有把_cut函数返回出去，那么，外面就无法访问_cut函数
    function _cut() {
        counter--;
    }

    return {
        add :add,
        getCounter:getCounter
    }
})();

mymodle.add()
mymodle.add()
// 主要利用里闭包，将变量或者函数私有化
console.log(mymodle.getCounter())
```

# 单例模式

```javascript
// 单例模式表示只有一个对象的，可以节省内存，或者有些特定场景，只存在一个对象的
//   场景： 比如 一个班级只有一个班主任。
var mySingleton = (function () {

    var instance = null;
    function init() {
        //私有方法
        function privateMethod() {
            console.log('私有方法')
        }
        //共有方法
        function publicMethod() {
            console.log('cs1024.com共有方法')
        }
        return {
            publicMethod:publicMethod,
            publicVar :“行者课堂”
        }
    }
    return {
        getInstance :function () {
            if(!instance){
                return init();
            }
            return  instance;
        }
    }
})();

mySingleton.getInstance().publicMethod();
console.log(mySingleton.getInstance().publicVar);
```

# 观察者模式

观察者模式：观察者模式定义了一种一队多的依赖关系，让多个观察者对象同时监听某一个主题对象。这个主题对象在状态上发生变化时，会通知所有观察者对象，使他们能够自动更新自己

2个角色

主题，观察者

![mark](http://cdn.cs1024.com/images/20191222/gMAfdzi22RaO.png?imageslim)

主题有3个方法，删除订阅的用户，添加订阅的用户，通知订阅的用户。

观察者有1个方法，他可以收到消息并且更新消息。

假如我写一个抽奖的系统。

```javascript
function Person(name,ticket) {
    this.name=name;
    this.ticket=ticket;

    this.update = function (num) {
        console.log('我的名字是='+this.name+"我的票是="+this.ticket+"中奖的票是="+num);
    }
}
// 观察者
var p1 = new Person('张三','1');
var p2 = new Person('李四','2');
var p3 = new Person('王五','3');


//主题

function Subject() {
    this.list=[];
}
Subject.prototype.addItem=function (item) {
    this.list.push(item)
}
Subject.prototype.removeItem=function (item) {
}
//通知的时候，把中奖号码传递过去
Subject.prototype.notify=function (num) {
    let list = this.list;
    for (let i=0;i<list.length;i++){
        list[i].update(num)
    }
}

let sub1 = new Subject();
sub1.addItem(p1);
sub1.addItem(p2);
sub1.addItem(p3);
//中奖号码1
sub1.notify(1);

```

# 订阅发布模式

![mark](http://cdn.cs1024.com/images/20191222/HF0z8hctcyxl.png?imageslim)



**观察者模式：**观察者（Observer）直接订阅（Subscribe）主题（Subject），而当主题被激活的时候，会触发（Fire Event）观察者里的事件。

**发布订阅模式：**订阅者（Subscriber）把自己想订阅的事件注册（Subscribe）到调度中心（Topic），当发布者（Publisher）发布该事件（Publish topic）到调度中心，也就是该事件触发时，由调度中心统一调度（Fire Event）订阅者注册到调度中心的处理代码。 

先画3个角色

![mark](http://cdn.cs1024.com/images/20191222/Pnz2oEknzxNY.png?imageslim)



```javascript
  // 可以订阅任务，发布任务，还有任务列表
var eventCenter = {
    list:{},
    subscribe:function(type,fn) {

        if(!this.list[type]){
            this.list[type]=[];
        }
        this.list[type].push(fn);

    },
    publish:function (type,value) {

        if(!this.list[type])return;
        for(let fn of this.list[type]){
            fn(value);
        }
    }
}

// 订阅的人
function Sub(name,ticket){
    this.name=name;
}
// type是任务的类型，订阅新闻
Sub.prototype.subscribe=function (type,fn) {
    eventCenter.subscribe(type,fn)
}

var sub1 = new Sub('张三')

sub1.subscribe('news', function(value){

    console.log("sub1收到的new是="+value);
})

//发布的人
function Pub(){

}
Pub.prototype.publish= function(type,value){
    eventCenter.publish(type,value)
}
var pub1 = new Pub();
pub1.publish("news",'111');
```

例子

Dom2 的添加事件，删除事件就是根据发布订阅做的，我可以给一个元素添加多个click事件，也可以移出他的click事件 ，addeventlistener removeevernlistener

微信公众号推送就是这个实现的，我订阅公号，公号发送消息我收到了。

# 中介者(mediator)模式

数据库数据同步的时候，假如直接通信，很乱，弄个中介者，每个数据库只要和中介打交道就性了。



![mark](http://cdn.cs1024.com/images/20191222/THngW4DqgdA1.png?imageslim)

就好比租房，我们只用和中介打交道，不同和房东直接打交道。

下面写一个例子，想实现的效果是A对象通过中介者,去设置B对象的值

```javascript
class A{
    constructor(num){
        this.number=0;
    }
    setNumber(num,m){
        this.number = num;
        if(m){
            m.setB();
        }
    }
}

class B{
    constructor(num){
        this.number=num;
    }
    setNumber(num,m){
        this.number = num;
        if(m){
            m.setA();
        }
    }
}


class Mediator {
    constructor (a,b){
        this.a=a;
        this.b=b;
    }
    setA(){
        let number = this.b.number;
        this.a.setNumber(number+1);
    }
    setB(){
        let number = this.a.number;
        this.b.setNumber(number+2);
    }
}


let a = new A();
let b = new B();
let m = new Mediator(a,b);
a.setNumber(10,m);
console.log(a.number,b.number);
b.setNumber(10,m);
console.log(a.number,b.number);
```

前端用到不多。

# 外观模式

![mark](http://cdn.cs1024.com/images/20191222/SBBSlTp3gW23.png?imageslim)

暴露统一的方法

例如事件的兼容写法

```javascript
addEvent : function(element, type, handler) {
    if (element.addEventListener) {
        //事件类型、需要执行的函数、是否捕捉
        element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + type, function() {
            handler.call(element);
        });
    } else {
        element['on' + type] = handler;
    }
},
```

还有jq的$(el),里面el可以是id，类，标签，都是外观模式，对外暴露一个接口，开发者不用管里面的具体实现。用就好了。



# 工厂模式

**简单工厂：**

简单工厂说白了，就是需要想到你要干什么，要分几步做，把每个事件全都摆出来，完咯，开始着手建厂，在厂里把你想干的事情，全都分列清除，把条件弄好，好知道来需求的时候，知道哪些人干活。最后就是客户提的需求了，根据需求去办事

```javascript
/**
* 宝马
*/
var Baoma = function  () {
    this.play = function () {
        console.log('我在造宝马');
    }
}

/**
* 奥迪
*/
var Aodi = function  () {
    this.play = function () {
        console.log('我在造奥迪');
    }
}

//造宝马事件
var baoma = new Baoma();
// 运行造宝马事件
baoma.play();
// 造奥迪事件
var aodi = new Aodi();
// 运行造奥迪事件
aodi.play();

```

**工厂方法：**

工厂方法说白了就是在工厂里面去写方法，在外部写一个公用的方法去调取工厂的独有方法，来实现客户的需求

```javascript
// 安全模式创建工厂类
var Ball = function (type,name) {
    return new this[type](name);
}
// 工厂原型中设置创建所有类型数据对象的基类
Ball.prototype = {
    baoma: function(name) {
        this.play = function() {
            console.log('我在生产'+name);
        }
    },
    aodi: function(name) {
        this.play = function() {
            console.log('我在建造'+name);
        }
    },
}
// 客户需求
var baoma = new Ball('baoma','宝马');
// 开始建造
baoma.play();
// 客户需求
var aodi = new Ball('aodi','奥迪');
// 开始建造
aodi.play();

```



# mixin模式

如果只想复用现有对象的一些属性，用mixin模式

```javascript
function A() {
}
A.prototype.walk=function () {
    console.log('走路')
}

function B() {

}
B.prototype.run=function () {
    console.log('跑步');
}

function Mixin(A,B) {
    if(arguments.length==2){
        for (var attr in B.prototype){
            A.prototype[attr] = B.prototype[attr]
        }
    }
}
Mixin(A,B);
let a = new A();
// run 本来是B构造函数原型上的方法，但是通过a 调用了
a.run();
```

vue就使用了mixin

https://cn.vuejs.org/v2/guide/mixins.html

# 装饰者模式

动态地给一个对象添加一些额外的职责,装饰者模式不会改变原来的对象

![image-20191222200855533](C:\Users\Administrator\Desktop\image-20191222200855533.png)





```javascript
function Person() {}
Person.prototype.go=function () {
    console.log('我在走')
}

function Decorator(person) {
    this.person = person
}

Decorator.prototype.go=function () {
    this.person.go();
    console.log('我在跑')
}

//先初始化一个person对象
let p1 = new Person();
// 再对person 这个对象进行装饰，增加了功能
p1 = new Decorator(p1);
p1.go();
```



# 享元模式

共享内存，对象之间是不是有可以共享的数据。享元就是共享（前端用到少）

思想：事件委托



# 适配器模式

电源转换器，电压不同的，所以需要这个东西

hdmi接口转换器，有些电脑没有hdmi接口，需要买转换器

```javascript
// 新代码
// ajax({
//     url:""
// })

// 不要直接改写来的代码，用适配器模式，原理的老代码仍然可用
var $={
    ajax:function () {
        // ajax({
        //     url:""
        // })
    }
}
// 老代码
//$.ajax
```



# 代理模式

委托别人干事情，比如vpn，我们不能直接访问外面的世界，可以用vpn代理。

还有比如代购

```javascript
 class Student {
          eat(){
              console.log('我在吃饭');
          }
      }

      class Proxy {
          constructor(){
              this.student = new Student();
          }

          do(){
              this.student.eat();
          }
      }

      let proxy =  new Proxy();
      proxy.do();
```

场景：事件委托

![mark](http://cdn.cs1024.com/images/20191222/sKVsx3QkJm6y.png?imageslim)











