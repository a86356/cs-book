# 行者课堂 cs1024.com



# js中的this

## 什么是对象

现实生活中任何事物都可以被抽象成对象，对象有属性和方法

比如人，有属性，年龄，身高，有方法，吃饭，上课



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

# this 指向调用他的那个对象

-  对象的方法。 在对象的方法里使用this 表示当前对象，可以在对象的方法里获得对象的属性

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

- 普通函数调用。  js 运行环境中有个全局的对象，window

  ```javascript
      
      // 我们声明一个变量，其实就是给全局的window对象添加了一个属性age，我们可以通过
      // this.age 或者window.age获得这个属性的值  
      var age=18;
  	
  	console.log(this==window)
      console.log(window.age);    	
      console.log(this.age); 
      console.log(age)
  ```

  ```javascript
      // 我们声明一个函数，就相当于给全局的window对象添加了一个方法,我们可以通过
      // test() 或者window.test()或者 this.test() 调用这个函数
  	// 调用的时候，没有明确指出什么对象调用该方法的，都视为window 调用
  
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

- 匿名函数的调用

  ```javascript
               
          var a=2;
          function test1(){
              this.a=1;
              return function () {
                  console.log(this.a)
              }
          }
          test1()();  // 1
  
          var a=2;
          function test2(){
              return function () {
                  console.log(this.a)
              }
          }
  
          test2()();  //2
  ```
  
- 小结

  - 普通的函数调用，函数被谁调用，this就是谁。
  - 构造函数调用。 用new操作符生成对象实例后，this就指向了新生成的对象。
  - 对象的调用方法，this指向当前的对象
  - 匿名函数或不处于任何对象中的函数当中的this指向window 。
  - 如果是call，apply等，指定的this是谁，就是谁。
  - 谁调用这个函数，this就指向谁，this的指向是函数被调用的时候决定的
  


