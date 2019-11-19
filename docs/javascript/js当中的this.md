# js中的对象

对象有属性和方法

```javascript
// 对象有属性和方法，比如下面student 对象有2个属性，分别是age和name，还有一个方法showInfo 
// 属性和方法都是键值对形式的，就是 xx:xx
// 属性名age的属性值是18，属性名name的属性值是张三
// 方法名是showInfo,方法的值是函数

var student = {
     age:18,    
     name:'张三', 
     showInfo:function(){       
         console.log("我的名字是="+this.name+"我今年"+this.age+"岁")
     }
}  

// 我们可以获得对象的属性和方法,通过下面的方式
console.log(student.age);
console.log(student.name);
console.log(student.showInfo);
```

# this 在函数调用的时候表示的当前对象

- 在对象的方法里使用this 表示当前对象，可以在对象的方法里获得对象的属性

  ```javascript
  var student = {
       age:18,    
       name:'张三', 
       showInfo:function(){       
           console.log("我的名字是="+this.name+"我今年"+this.age+"岁")
       }
  }  
  student.showInfo();  //我的名字是=张三我今年18岁
  ```

- js 运行环境中有个全局的对象，window

  ```javascript
      
      // 我们声明一个变量，其实就是给全局的window对象添加了一个属性age，我们可以通过
      // this.age 或者window.age获得这个属性的值
      var age=18;
  
      console.log(window.age);    
      console.log(this.age); 
      console.log(age)
  ```

  ```javascript
      // 我们声明一个函数，就相当于给全局的window对象添加了一个方法,我们可以通过
      // test() 或者window.test()或者 this.test() 调用这个函数
  
      function test(){
          console.log('我是测试函数'+this);
      }
      test();
      this.test();
      window.test();
  ```

  ```javascript
  //测试题目
  //1 
  
  function foo(){
      var a = 1 ;
      console.log(this.a);   
  }
  var a = 10;
  foo();
  
  //2
  function foo(){
      console.log(this.a);
  }
  var obj = {
      a : 10,
      foo : foo
  }
  foo();                
  obj.foo();            
  ```

- 动态改变this的指向

  - 使用apply和call

  ```javascript
  function foo(){
      console.log(this.a);
  }
  var obj = {
      a : 10            //去掉里面的foo
  }
  foo.call(obj);        // 10
  ```

- new 出来的对象

  ```javascript
  function foo(){
      this.a = 10;
  }
  var obj = new foo();      // foo{ a : 10 }                       
  console.log(obj.a);       // 10    new绑定
  ```

- 小结

  - 普通对象 Student
  - 全局对象 window

  - 动态改变this
  - new 出来的对象

# 测试题目

```javascript
var x = 10;
var obj = {
    x: 20,
    f: function(){
        console.log(this.x);        // ?
        var foo = function(){ 
            console.log(this.x);    
            }
        foo();                      // ?
    }
};
obj.f();
```



```javascript
var x = 10;
var obj = {
    x: 20,
    f: function(){ console.log(this.x); }
};
var bar = obj.f;
var obj2 = {
    x: 30,
    f: obj.f
}
obj.f();
bar();
obj2.f();
```

```javascript

// 难 
function foo(arg){
    this.a = arg;
    return this
};

var a = foo(1);
var b = foo(10);

console.log(a.a);    // ?
console.log(b.a);    // ?

// 分析
// 1. 调用this.a=1;就相当于window.a=1,再返回window
// 2. 把window赋值给window.a,window.a = window
// 3. a.a 的时候，因为window.a.a 是undefined ,所以 undefined
//  --------------------
// 1.window.a=10
// 2.window.b = window
// 3.window.b.a = window.a = 10

```





# 箭头函数

箭头函数的this定义：**箭头函数的this是在定义函数时绑定的，不是在执行过程中绑定的。简单的说，函数在定义时，this就继承了定义函数的对象。**

 ```javascript
    var a=1;
    var obj={
        a:2,
        show:function(){
            return ()=>{console.log(this.a)} // 定义的时候所在的对象是obj
        }
    }   
    
    obj.show()();   //2
 ```

