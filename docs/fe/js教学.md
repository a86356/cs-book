# 编程



## 编程是什么？

编程：为了让计算机解决某种问题，我们写的一些代码就是编程。

比如1+1

网页

程序员，就是编写代码的人。前端也属于程序员



## 我们怎么让电脑干活？

- 人与人沟通 ，语言

- 通过编程语言，比如javascript ,（html和css 并不能算严格意义上的计算机语言）



## 计算机语言分类

- 机器语言  ，0，1 二进制语言，计算机只认识2进制
- 汇编语言  
- 高级语言 ：javascript,java,c++,c

计算机只能执行0，1的代码

高级语言通过一个叫编译器的工具，先转成汇编语言，再通过一个叫汇编器的工具，转成机器语言，这个转换过程我们不需要关心。













# 计算机组成

## 软件和硬件

硬件 ，有实体的

- 显示器
- 主机
- 键盘
- 鼠标 
- 硬盘
- 内存
- cpu
- 主板

软件  没有实体的

- 比如qq
- 360
- 谷歌浏览器



## 数据存储

-  我们的数据是存在硬盘上的
- 所有数据都是以二进制存储的，不管是存储在内存还是硬盘上
- 程序没运行的时候，存储在硬盘上。运行了，存储在内存里



## 程序是怎么执行的

从硬盘把程度读取到内存，cpu去拿内存里的代码去执行

















# js发展历史

我们学的第一门语言，html和css都不算正式的语言

javascript语言是什么？

是一门编程语言





发展历史



 1990年底，欧洲核能研究组织（CERN）科学家Tim Berners-Lee，在全世界最大的电脑网络——互联网的基础上，发明了万维网（World Wide Web），从此可以在网上浏览网页文件。最早的网页只能在操作系统的终端里浏览，也就是说只能使用命令行操作，网页都是在字符窗口中显示，这当然非常不方便。 



 1994年10月，NCSA的一个主要程序员Marc Andreessen联合风险投资家Jim Clark，成立了Mosaic通信公司（Mosaic Communications），不久后改名为Netscape。这家公司的方向，就是在Mosaic的基础上，开发面向普通用户的新一代的浏览器Netscape Navigator。 （ 网景 ）



1994年12月，Navigator发布了1.0版，市场份额一举超过90%。

Netscape公司很快发现，Navigator浏览器需要一种可以嵌入网页的脚本语言，用来控制浏览器行为。当时，网速很慢而且上网费很贵，有些操作不宜在服务器端完成。比如，如果用户忘记填写“用户名”，就点了“发送”按钮，到服务器再发现这一点就有点太晚了，最好能在用户发出数据之前，就告诉用户“请填写xx栏”。这就需要在网页中嵌入小程序，让浏览器检查每一栏是否都填写了。

管理层对这种浏览器脚本语言的设想是：功能不需要太强，语法较为简单，容易学习和部署。那一年，正逢Java语言开始推向市场，Netscape公司决定，脚本语言的语法要接近Java，并且可以支持Java程序。这些设想直接排除了使用现存语言，比如perl、python和TCL。

1995年，Netscape公司雇佣了程序员Brendan Eich开发这种网页脚本语言。Brendan Eich有很强的函数式编程背景，希望以Scheme语言（函数式语言鼻祖LISP语言的一种方言）为蓝本，实现这种新语言。

1995年5月，Brendan Eich只用了10天，就设计完成了这种语言的第一版。它是一个大杂烩，语法有多个来源：

- 基本语法：借鉴C语言和Java语言。
- 数据结构：借鉴Java语言，包括将值分成原始值和对象两大类。
- 函数的用法：借鉴Scheme语言和Awk语言，将函数当作第一等公民，并引入闭包。
- 原型继承模型：借鉴Self语言（Smalltalk的一种变种）。
- 正则表达式：借鉴Perl语言。
- 字符串和数组处理：借鉴Python语言。

为了保持简单，这种脚本语言缺少一些关键的功能，比如块级作用域、模块、子类型（subtyping）等等，但是可以利用现有功能找出解决办法。这种功能的不足，直接导致了后来JavaScript的一个显著特点：对于其他语言，你需要学习语言的各种功能，而对于JavaScript，你常常需要学习各种解决问题的模式。而且由于来源多样，从一开始就注定，JavaScript的编程风格是函数式编程和面向对象编程的一种混合体。

Netscape公司的这种浏览器脚本语言，最初名字叫做Mocha，1995年9月改为LiveScript。12月，Netscape公司与Sun公司（Java语言的发明者和所有者）达成协议，后者允许将这种语言叫做JavaScript。这样一来，Netscape公司可以借助Java语言的声势，而Sun公司则将自己的影响力扩展到了浏览器。

微软研发了ie浏览器 ，出来一门Jscrpt语言

于是有2个版本了，一个是javascript和jscript

后来网景公司把javascript交给了欧洲 国际性会员制度的信息和电信标准组织 ，这个组织根据javascript制定了一套标准ECMAscript



那不同的浏览器厂家拿到这套标准之后，去做浏览器内核。









# js 在浏览器中运行



浏览器分为2个部分

- 渲染引擎 ：用来解析html,css 俗称内核。比如chrome 浏览器的blink
- js 引擎 ：也称js 解释器 ，用来读取网页中的js代码，并执行。比如chrome 的v8 引擎

浏览器本身不会执行js代码，是通过内置的js引擎（v8）来执行的js代码的。

js引擎执行代码的时候，逐行解释每一句源码，然后由计算机去执行。

所以js语言是脚本语言，会逐行解释执行。



举个alert的例子









 # js的实现



js 组成分为3部分，分别是ECMAscript,dom,bom



es(ECMAscript)  语法

dom 文档对象模型，让我们可以操作网页

bom 浏览器模型，让我们可以操作浏览器







# js的3种书写方式

- 内联js
- script 标签里
- 外部引入

一般我们把js标签放在body 闭合标签的前面

- 可以获得dom 元素
- 先把页面渲染出来，再执行js代码，用户体验更好













# js输出语句

- console.log  
- alert

一般用console.log 调试代码





# js 变量概述



- 什么是变量

  变量 =  放数据的容器，我们可以通过变量获得数据，也可以修改数据

  本质: 变量是程序在内存种申请一块空间，用来存放数据

- 房子图解释变量

- 内存图解变量
  - 变量名
  - 变量值





# js 变量的使用

使用变量的2个步骤

1. 声明

 	2. 赋值

## 声明变量

```javascript
var name;  // 声明了一个名称是name变量
```

- var 是js的一个关键字（之后会讲）用来声明变量，使用var 声明变量之后，计算机会自动为变量分配内存空间，不需要程序员管
- name是程序员定义的变量名，我们通过变量名访问内存中分配的空间

## 变量赋值

```javascript
name="zhangsan"

// 变量声明和赋值可以同时写
var name="zhangsan"
```



## 一个语句定义多个变量

```javascript
var name=1,age=2;
```





































# js 语法

- 区分大小写

  ```javascript
  var a=1;和var A=2;是不一样的
  ```

- 标识符

  ```javascript
  对某一个事物的命名，比如现实生活中，我们对小鸟这个生物取名小鸟，再程序中，我们可以对变量，或者函数名进行命名，比如 var a=1;那这个a就是一个标识符
  
  标识符命名规则:
  1.以字母、下划线(_)或者$符号开头
  2.由字母、下划线、$符号和数字组成
  3.不能把保留字和关键字作为标识符
  ```

-  保留字和关键字

  js代码自己用做特殊用途的，我们写代码的时候不能作为标识符

  ![image-20191208081259551](F:\project\cs-book\docs\fe\image-20191208081259551.png)

- 注释
  - 单行注释
  - 多行注释
  
- 语句

   **JavaScript 语句是由 web 浏览器“执行”的“指令”** 

  比如我们之前学的

  ```javascript
  var a 就是一条声明语句
  a=1   就是一条赋值语句
  语句最好用分号分隔
  var a=1;
  var b=2;
  ```





# js 数据类型

## 概要

js数据类型分为5种基本数据类型和复杂数据类型

### 基本数据类型

- Undefined
- Null
- Boolean
- Number
- String

### 复杂数据类型

- Object 对象



### typeof

可以用typeof 判断数据类型

```javascript
var a=1;
console.log(typeof a)  //number
console.log(typeof (a))
```



# Undefined类型（未定义）



Undefined的类型的值只有一个，undefined，使用了var声明，但是没有赋值的情况，这个值就是undefined。

```javascript
var a;
console.log(a==undefined)
```

undefined和没有声明过的变量是不一样的。

```javascript
var a;    //默认值是 undefined
console.log(b) //会报错


我们在使用一个变量的时候，必须先声明这个变量
```



# Null 类型

Null类型是第二个只有一个值的数据类型，这个值是null

null 表示一个空对象指针 ， 使用typeof null 会返回object

```javascript
console.log(typeof null)  //object
```



实际上，undefined的值是派生自null，所以

```javascript
console.log(undefined==null) //true
```





# undefined和null的区别

 在JavaScript中，`null` 和 `undefined` 几乎相等 

 在 `if` 语句中 `null` 和 `undefined` 都会转为false两者用相等运算符比较也是相等 

```jsx
console.log(null==undefined);    //true  因为两者都默认转换成了false
console.log(typeof undefined);    //"undefined"  
console.log(typeof null);       //"object"  
console.log(null===undefined);    //false   "==="表示绝对相等，null和undefined类型是不一样的，所以输出“false”
```

 `null` 和 `undefined` 基本同义，二者又有什么区别呢？ 

null表示没有对象，即该处不应该有值,

undefined表示缺少值，即此处应该有值，但没有定义



# Boolean 类型（布尔）

Boolean类型的值只有2种，true和false

其他所有类类型的值都可以转为Boolean类型的值，转换规则

- 将字符串转换为Boolean类型的值

  ```javascript
  var myBoolean = new Boolean(“”);
  alert(myBoolean);//false
  //将非空字符串转换为Boolean类型的值
  var myBoolean = new Boolean(“abc”);
  alert(myBoolean);//true
  ```

-  将Boolean类型的值转换为Boolean 

  ```javascript
  //Boolean值为true：
  var myBoolean = new Boolean(true);
  alert(myBoolean);//true
  Boolean值为false：
  var myBoolean = new Boolean(false);
  alert(myBoolean);//false
  ```

-   将对象转换为Boolean

  ```javascript
  var myBoolean = new Boolean([1,3,4]);
  alert(myBoolean);//true
  ```

-  将number类型的值转换为Boolean类型

  ```javascript
  //数值为0：
  var myBoolean = new Boolean(0);
  alert(myBoolean);//false
  //数值为非0：
  var myBoolean = new Boolean(1);
  alert(myBoolean);//true
  ```

- 将undefined和null转为Boolean类型都为false

## 总结

| 类型            | 结论                                          |
| --------------- | --------------------------------------------- |
| String          | 所有非空字符串转换为true  空字符串转换为false |
| Number          | 所有非0数值转换为true    0和NaN转换为false    |
| Object          | 任何对象转换为true     null转换为false        |
| undefined和null | 转换为false                                   |
| Boolean         | true转换为true    false转换为false            |



# Number 类型 （数值）

字面量 ： 看见什么，它就是什么 ,

比如 :  

```javascript
var num1=123;  // 123就是字面量
```

## 进制

- 10进制的表示

  ```java
  var a=1;  // 最常用的
  ```

- 八进制的表示

  ```javascript
  var q=0o10 // 八进制字面量 第一位必须是0o，然后是0-7
  ```

- 16进制的表示

  ```javascript
  var m=0x18;   // 16进制最前面2位必须是0x,后面跟上0-9或者a-f
  ```



## 浮点数

所谓浮点数，我们可以理解位小数

```javascript
var c=1.2
```

浮点数不要做相等算法,因为浮点数存在精度的问题

```javascript
0.1+0.2==0.3 //false 0.30000000000000004
```

所有的编程语言都有这个问题

## 数值限制

由于内存限制，能保持的值是有大小限制的

```javascript
console.log(Number.MAX_VALUE)  //1.7976931348623157e+308 
console.log(Number.MIN_VALUE) //5e-324

// 假如超出了最大值就是 Infinity,超过了最小值就是-Infinity
```

## NaN

NaN 非数值（not a number）

```javascript
NaN == NaN false
//NaN不等于自己本身，特殊的值
```

判断是不是NaN

isNaN,isNaN在接收一个值的时候，会尝试把这个值转为数值。而不能被转为数值的，会导致返回true

```javascript
console.log(isNaN(NaN))  //true
console.log(isNaN(10))  //false 10是一个数值
console.log(isNaN("10"))  //false "10“能被转为一个数值
console.log(isNaN("a"))  //true 不能转为数值
console.log(isNaN(true))  //false 可以被转为数值
```

## 数值转换

有3个函数可以把非数值转为数值，Number(),parseInt(),parseFloat().

- Number 可以用于任何类型

  转化的规则复杂，不常用

- parseInt

  把字符串转为整数

  ```javascript
  console.log(typeof parseInt("10"));  //number
  console.log(typeof "10");    //string
  ```

- parseFloat

  把字符串转为小数

  ```javascript
  console.log(typeof parseFloat("1.2"))
  console.log(parseFloat("1.2"))
  console.log(parseFloat("q1.2a"))  //NaN
  ```





# String 类型 （字符串）

 用单引号或者双引号包括的unicode字符序列

```javascript
var a="1";
var b="2";
var c='3';
// var d= '4";  //错误

console.log(a)
console.log(b)
console.log(c)

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
// 一般情况下，双引号和单引号没区别
```



unicode是什么？

是一种编码格式

- ascii 码  

   [https://baike.baidu.com/item/ASCII/309296?fromtitle=ascii%E7%A0%81&fromid=99077&fr=aladdin](https://baike.baidu.com/item/ASCII/309296?fromtitle=ascii码&fromid=99077&fr=aladdin)

  

  进制转换工具

   https://tool.lu/hexconvert/  

- GBK

   [https://baike.baidu.com/item/GBK%E5%AD%97%E5%BA%93?fromtitle=GBK&fromid=481954](https://baike.baidu.com/item/GBK字库?fromtitle=GBK&fromid=481954) 

- GB2312

- unicode   Unicode为世界上所有字符都分配了一个唯一的数字编号，这个编号范围从 0x000000 到 0x10FFFF(十六进制)，有110多万，每个字符都有一个唯一的Unicode编号， 



## 转义序列

String的数据类型中包含了一些特殊类型的字符字面量，也叫转义字符。

| \'   | 单引号 |
| ---- | ------ |
| \"   | 双引号 |
| \&   | 和号   |
| \\   | 反斜杠 |
| \n   | 换行符 |
| \r   | 回车符 |
| \t   | 制表符 |
| \b   | 退格符 |
| \f   | 换页符 |

我们用反斜杠来表示这些转义字符

```javascript
console.log("\"")
```

转义字符也被当做一个字符处理

```javascript
console.log("\"a".length)  //2
```

## 转为字符串

数值，布尔值，对象和字符串都有tostring().方法，null和undefined没有

tostring(),可以把他们转为字符串

```javascript
//字符串
var str1="1"
console.log(typeof str1.toString());

//数字
var num=1
console.log(typeof num.toString())

//布尔值
var b= true
console.log(typeof b.toString())

//对象
var obj={}
console.log(obj.toString())  //[object Object]
```









# Object类型 （对象）

创建

```javascript
var obj1={}
var obj2=new Object();
```

对象有属性和方法

```javascript
/*2种创建Object类型的方法，没有本质区别，只是写法不同*/
var obj1={};
var obj2=new Object();

console.log(obj1) //Object
console.log(obj2) //Object

//person可以叫实例
var person = new Object();
//他有一个age的属性，值是19
person.age=19;
//他有一个eat的方法，
person.eat=function () {
    console.log(1111);
}


console.log(person.age);
person.eat();

var obj3={
    age:19,
    eat:function () {

    }
}

obj3.name='zhangsan';
console.log(obj3.name)
//之后会具体讲解
```



# 操作符

## ++（自增操作符）和--（自减操作符）

对自身+1或者-1

```javascript
/*++ 和-- 只能针对number类型*/
var age=18;
age++;
console.log(age) //19
++age;
console.log(age) //20
--age; // -1
age--; // -1
console.log(age); //18
++age;// age =age+1
```

## 放前面和后面的区别

```javascript
单独写一行是没有区别的

在赋值语句是有区别的
var age=1;

var num1 = ++age;  //先执行右边的+1操作，再赋值给左边的值,结果是2
var num2 = age++;  //先执行赋值操作，再执行+1操作，

console.log(num1)  //2
console.log(num2)  //2
console.log(age)   //3
```



## 布尔操作符

逻辑运算符通常用于布尔型的值。这种情况下，它们返回一个布尔值。然而，`&&` 和 `||` 运算符会返回一个指定操作数的值， 

- 逻辑非

  ！表示，后面接上任何js的值，相当于一个取反的操作

  - 如果是true,取反是false，如果是false,取反是true

  -  如果一个操作数是一个对象，返回true;
  -  如果一个操作数是一个空字符串，返回false;
  -  如果一个操作数是一个非空字符串，返回false;
  -  如果一个操作数是一个数值0，返回false;
  -  如果一个操作数是任意的非零字符，返回true;
  -  如果一个操作数是null，返回false;
  -  如果一个操作数是NaN，返回false;
  -  如果一个操作数是undefined，返回true; 

  ```javascript
  console.log(!false) //true
  console.log(!true) //false
  var obj = {id:1,name:'tom'};    
  console.log(!obj);      //false
  var obj = '';    
  console.log(!obj);      //true 
  var obj = 'tom';               
  console.log(!obj);      //false
  var obj = 0;                   
  console.log(!obj);      //true
  var obj = 5;    
  console.log(!obj);      //false
  var obj = null;   
  console.log(!obj);      //true
  var obj = NaN; 
  console.log(!obj);      //true
  var obj = undefined;
  console.log(!obj);      //true
  
  //空的字符串，0，null,undefined,NaN 对这些值进行逻辑非操作的话，会返回true，
  // 其他的值会返回false
  ```

- **逻辑与（&&）** 

  - 对于布尔值，只有都为true才返回true，只要有一个false，就返回false；

      ```javascript
     console.log(true && true) //true
     console.log(true && false) //false
     console.log(false && true) //false
     console.log(false && false) //false
     ```

  -  对于不是布尔值的情况则： 

    - 如果第一个操作数是对象，则返回第二个数
    - 如果第二个操作数是对象，则只有在第一个操作数的求值结果为true的情况下才会返回该对象。
    - 如果两个操作数都是对象，则返回第二个数操作数。 
    - 如果有一个操作数是null，则返回null。 
    - 如果有一个操作数是NaN，则返回第NaN。
    - 如果第一个操作数是undefined，则返回undefined。 

    ```javascript
    var obj={};   
    console.log(obj && null);                     //null
    console.log(null && obj);                     //null
    console.log(obj && undefined)            //undefined
    console.log(undefined && obj);           //undefined
    console.log(obj && NaN);                    //NaN
    console.log(NaN && obj);                   //NaN
    var obj2={} ;  var a=(obj && obj2);
    console.log(a);                                    //{} 返回第二个obj2{}
    console.log(a==obj2);                        //true
    ```

  - 第一个操作数的进行布尔取值操作，取得的布尔值是false的话，返回第一个值，否则返回第二个值

  - 短路操作

     对于逻辑与的短路问题：

    对于逻辑与，如果第一个操作数是false，无论第二个操作数是什么，他都不会对第二个求值。

    ```javascript
    var found=true;    
    var result=(found && someUdefinedVariable);   
    console.log(result);   //显示someUdefinedVariable
    //例子中的found为true,所以会对someUdefinedVariable继续求值，但是该变量未定义，所以会提示错误
    
    var found=false;   
    var result=(found && someUdefinedVariable);   
    console.log(result); 
    ```

-  **逻辑或（||）** 

  - 对于布尔值，逻辑或是非常简单的，只要有一个true，就返回true； 

    ```javascript
    console.log(true || false) //true
    console.log(true || true) //true
    console.log(false || false) //false
    console.log(false || true) //true
    ```
  
-  对于不是布尔值的情况则： 
    - 如果第一个操作数是对象，则返第一个操作数
    
    - 如果第一个操作数的求值结果为false，则返回第二个操作数
    
    - 如果两个操作数都是对象，则返回第一个操作数
    
  - 如果两个操作数是null，则返回null
    
    - 如果两个操作数是NaN，则返回NaN
    
  - 如果两个操作数是undefined，则返回undefined 
    
      ```javascript
      // 如果第一个操作数是对象，则返第一个操作数
      var obj={};
      console.log(obj || null)  //Object
      
      // 如果第一个操作数的求值结果为false，则返回第二个操作数
      var a1=null;
      console.log(null || undefined) //undefined
      
      //如果两个操作数都是对象，则返回第一个操作数
      var obj1={a:1};
      var obj2={b:2};
      console.log(obj1 || obj2); // {a:1}
      ```
    
    - 总结: 对操作数进行布尔取值，遇到布尔取值是true的，直接返回该操作数，否则返回第二个操作数
    
  - 短路操作
  
    ```java
    var found=true;
    var result=(found || someUdefinedVariable);
    console.log(result);                //true
    //对于逻辑或，当一个为true的时候，就不会在对第二个操作数进行求值了
    console.log('' == false);     //true
    console.log('' || '- - ');         //‘- -’      相当于false || ‘- -’
    ```
  

# 其他常用操作符

## 乘法操作符

```javascript
console.log(3*3);
```

## 除法操作符

```javascript
console.log(9/3);
```

## 取余操作符

```javascript
console.log(10%3)
```

## 加法操作符

```javascript
console.log(1+2);
```

## 减法操作符

```javascript
console.log(3-1);
```

## 关系操作符

用于进行比较的运算符称作为关系运算符：小于(<)、大于(>)、小于等于(<=)、大于等于(>=)、相等(==)、不等(!=)、全等(恒等)(===)、不全等(不恒等)(!==)



```javascript
var box = 2 == 2; //true
var box = '2' == 2; //true，'2'会转成成数值2
var box = false == 0; //true，false转成数值就是0
var box = 'a' == 'A'; //false，转换后的编码不一样
var box= '3' > 22; //false  会把字符串3转为数字3
var box= 'a' > 'b'; //false a=97,b=98  两个操作数都是字符串，则比较两个字符串对应的字符编码值;
var box = 2 == {}; //false，执行toString()或valueOf()会改变
var box = 2 == NaN; //false，只要有NaN，都是false
var q1={};
var q2={}
var box = q1== q2; //false，比较的是他们的地址，每个新创建对象的引用地址都不同
var age = {};
var height = age;
var box = age == height; //true，引用地址一样，所以相等
var box = '2' === 2 //false，值和类型都必须相等
var box = 2 !== 2 //false，值和类型都相等了
```

特殊值对比表 

| 表达式          | 值    |
| --------------- | ----- |
| null==undefined | true  |
| NaN==NaN        | false |
| 5==NaN          | false |
| NaN==NaN        | false |
| false==0        | true  |
| true==1         | true  |
| true==2         | false |
| undefined==0    | false |
| null==0         | false |
| 100==100        | true  |
| 100==="100"     | false |



## 三目操作符

```java
var a=1;
var b=(a==1)?2:3;  // 假如a==1是true的话，返回冒号前面的值2，否则返回冒号后面的3
```

## 赋值操作符

```javascript
var a=1;
a+=3；  //  相当于 a=a+3;
a*=3   //   a=a*3;
```

## 逗号操作符

```javascript
//使用逗号操作符可以在一条语句中执行多个操作
var num1=1,num2=2;
//在赋值操作的时候，逗号总会返回表达式的最后一项
var num3 = (1,2,3,4,0); //0
console.log(num3);
```

# 条件语句

## if

 **条件语句用于基于不同条件执行不同的动作。** 

```javascript
//if 语句
if (条件) {
    如果条件为 true 时执行的代码
} 
var hour=1;
if (hour < 18) {
    greeting = "Good day";
}



//else 语句
if (条件) {
    条件为 true 时执行的代码块
} else { 
    条件为 false 时执行的代码块
}
var hour=1;
if (hour < 18) {
    greeting = "Good day";
 } else {
    greeting = "Good evening";
 } 


//else if 语句
//请使用 else if 来规定当首个条件为 false 时的新条件。
if (条件 1) {
    条件 1 为 true 时执行的代码块
} else if (条件 2) {
    条件 1 为 false 而条件 2 为 true 时执行的代码块
} else {
    条件 1 和条件 2 同时为 false 时执行的代码块
}
var time=11;
if (time < 10) {
    greeting = "Good morning";
} else if (time < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
} 

```

## switch

 请使用 switch 语句来选择多个需被执行的代码块之一。 

```java
switch(表达式) {
     case n:
        代码块
        break;
     case n:
        代码块
        break;
     default:
        默认代码块
} 

switch (new Date().getDay()) {
    case 0:
        day = "星期天";
        break;
    case 1:
        day = "星期一";
         break;
    case 2:
        day = "星期二";
         break;
    case 3:
        day = "星期三";
         break;
    case 4:
        day = "星期四";
         break;
    case 5:
        day = "星期五";
         break;
    case 6:
        day = "星期六";
} 


//假如switch没有break，break的作用是跳出循环
```

# 循环语句

重复执行代码

## for循环 （最常用）

```javascript
for 循环的语法如下：
for (语句 1; 语句 2; 语句 3) {
     要执行的代码块
}

语句 1 在循环（代码块）开始之前执行。
语句 2 定义运行循环（代码块）的条件。
语句 3 会在循环（代码块）每次被执行后执行。

var text='';
for (var i = 0; i < 5; i++) {
     text += "数字是 " + i + "<br>";
}
```

## while 循环

 while 循环会一直循环代码块，只要指定的条件为 true。 

```javascript
while (条件) {
    要执行的代码块
}

var i=0;
var text='';
while (i < 10) {
    text += "数字是 " + i;
    i++;
}

//注意不要死循环
```

## do while循环

 do/while 循环是 while 循环的变体。在检查条件是否为真之前，这种循环会执行一次代码块，然后只要条件为真就会重复循环。 

```javascript
do {
    要执行的代码块
}
while (条件);


do {
    text += "The number is " + i;
    i++;
 }
while (i < 10);
```

## break 和continue

### break 

跳出当前循环,不再执行循环

```javascript
for (var i=0;i<4;i++){
    if(i==1){
        break;
    }
    console.log(i)
}
```

### continue

跳过本次循环，继续执行循环代码

```javascript
for (var i=0;i<4;i++){
    if(i==1){
        continue;
    }
    console.log(i)
}
```



# 函数

 **JavaScript 函数是被设计为执行特定任务的代码块。** 

函数定义语法

```javascript
function 函数的名字(参数 1, 参数 2, 参数 3) {
    要执行的代码
}

函数的名字自己取的，要符合标志符的规范，并且好区分。
参数就是函数里面要使用的数据，再函数调用的时候，按顺序传入对应的参数


```

## 函数调用

```javascript
// 要有函数声明才可以调用，否则报错
函数名(参数1，参数2);

function sum(a,b) {
 	console.log(a,b);
}
```

## 函数返回

```javascript
在函数内部使用 return;

function sum(a,b) {
    return a+b;
}

//返回就代码函数执行结束，返回后面的代码不会再执行
function sum(a,b) {
    return a+b;
    console.log(111);// 不会执行
}
```

参数就是函数的输入，返回值就是函数的输出。

# 引用类型和基本类型

js的数据类型分为普通类型，也叫基本类型，复杂类型，也叫引用类型

## 基本类型

- Undefined
- Null
- Boolean
- Number
- String

![image-20191210211425272](F:\project\cs-book\docs\fe\image-20191210211425272.png)



## 复杂类型

- Object 对象

## 访问方式不同

基本类型是 也叫按值访问，引用类型是按引用访问

![image-20191210211430476](F:\project\cs-book\docs\fe\image-20191210211430476.png)

## 对象可以添加属性和方法

在编程的世界里面，我们可以把事物都看成对象，这个一种思维方式，叫面向对象开发。

比如我们现实生活中有人的这个生物，编程的世界里面也可以有人这个对象，他有属性和方法，属性表示人的一些特性，方法表示人的一些行为。

```javascript
var person = new Object();
person.age=18;
person.height="180cm";
person.eat=function () {
    console.log('我可以吃饭')
}
```

## 复制变量值的不同

### 对基本数据来说

```javascript
var num1=5;
var num2=num1;

num1=1;
console.log(num1) //1
console.log(num2) //5
```

复制之后，num1和num2都是独立的

![mark](http://cdn.cs1024.com/images/20191210/DL0vUxlzeR6Q.png?imageslim)

### 对引用数据来说

引用的复制其实是地址的复制，复制之后，2个变量因为地址相同，所以指向同一个变量。

```javascript
var obj1=new Object();
var obj2 = obj1;
obj1.name='zhangsan';
console.log(obj2.name) // zhangsan
```

![mark](http://cdn.cs1024.com/images/20191210/KFIQTRwIeQQG.png?imageslim)

## 参数传递

基本数据类型的参数传递是按值传递的，就是复制了一份变量，和之前的变量没有任何关系

```javascript
var num1=5;
function test(num2) {
    num2=33
}
test(num1)
console.log(num1);
```

![mark](http://cdn.cs1024.com/images/20191210/DL0vUxlzeR6Q.png?imageslim)



引用类型的参数传递

按引用传递，在函数里面修改对象的属性或者方法，会影响外面的属性和方法

```javascript
var obj1=new Object();
obj1.age=18;
function test2(obj1) {
    obj1.age=28;
}
test2(obj1);
console.log(obj1.age);  //
```

![mark](http://cdn.cs1024.com/images/20191210/KFIQTRwIeQQG.png?imageslim)

# 执行环境和作用域

## 执行环境



执行环境也叫环境。表示代码所在的位置

先现实生活中，我们都生活在某个环境中，可能某个工厂被拆迁了，那这个工厂这个环境就消失了

- 我们生活在具体的环境中
- 环境会消失

![mark](http://cdn.cs1024.com/images/20191210/gQ8zFfRlaeIe.png?imageslim)

对js来说，也存在环境，全局环境和局部环境（也叫函数环境）

全局环境(也叫window环境)是浏览器打开的时候，会自动有的，除非你关闭了浏览器

局部环境只有函数调用的时候存在，函数调用结束，局部环境就消失了。

![mark](http://cdn.cs1024.com/images/20191210/5GH1yXgKniMH.png?imageslim)

## 作用域

寻找标识符（变量也是一种标识符）是从内部作用域向外部作用域查找的，这样形成的链条就叫作用域链。

```javascript
//在全局作用域中找到了
var a=1;
function a(q) {
    function b(c) {
        console.log(a)
    }
    b(1);
}
a(2);

```

![mark](http://cdn.cs1024.com/images/20191210/Yxmg86hqYvpq.png?imageslim)

在某一个作用域中找到了，就停止继续查找，否则继续查找，到了全局作用域也找不到，就报错

```javascript
var a=1;
function a(q) {
    function b(c) {
        var a=11;
        console.log(a)
    }
    b(1);
}
a(2);
```

var 声明的变量会添加到最近的作用域

```javascript

function a() {
	// c变量会添加到a函数的局部环境，只有在函数调用的时候才能获得c（根据作用域链的查找规则）
    var c=1;
}

// q 变量会被添加到全局作用域，全局的变量在哪里都能被调用，（根据作用域链的查找规则）
var q=1;

```

# js 垃圾回收

## 内存泄漏是什么？

不再用到的内存，没有及时释放，就叫做内存泄漏。

有些语言（比如c语言）必须手动释放内存，程序员负责内存管理。

## js会自动垃圾回收

 Js具有垃圾自动回收机制 ，周期性执行，找出那些不在继续使用的变量，然后释放其内存。. 

## 标记清除方式 

 最常见的垃圾回收方式——标记清除方式 

 是当变量进入环境时，将这个变量标记为“进入环境”。当变量离开环境时，则将其标记为“离开环境”。标记“离开环境”的就回收内存。 

工作流程：

1. 当变量进入环境时，声明标记“进入环境”。
2. 当变量离开环境时，标记为“离开环境”。
3. 垃圾回收器完成内存清除工作，销毁那些带标记的值并回收他们所占用的内存空间。

# 引用类型

包括Object ,Array,Date,正则表达式,函数

# Object（对象）

Object是js内置的一种引用类型的数据，我们之前都是用Object。

对象或者实例：都是引用类型的值 （Object可以看作一个模板，对象和实例可以看成根据模板生成的实物）

## 创建Object对象的2种方法

```javascript
//1 
var obj1=new Object();
obj1.name='zhangsan'

//2
var obj2= {
    age:18,
    name:"lisi"
} // 字面量


//3 
var obj3={};
obj3.name='wangwu';
```

## 使用对象的属性和方法

方法：在对象里，函数叫做方法，只是叫法不同，但功能完全一样

```javascript


var person1 ={
    age:1,
    name:'lisi',
    showinfo:function () {
        console.log('我被调用了');
    }
};

// 读取
console.log(person1.age) //1
console.log(person1['age']) //1
person1.showinfo()     //2

//修改
var person2 ={
    age:1,
    name:'lisi',
    showinfo:function () {
        console.log('我被调用了');
    }
};
person2.age=12;
console.log(person2.age) //12

```

# Array（数组）

把数据按一定的顺序放到一个容器里，这个容器就叫数组

![mark](http://cdn.cs1024.com/images/20191210/TH83rG4ADAAO.png?imageslim)

## 数组的创建方法

```javascript
var arr1=[1,2,3,4]; // 里面有4个包含项,最常用
var arr2=new Array(4) // 创建4个包含项，
var arr3= new Array('lisi') //创建了一个包含项，他的值是字符串，lisi
console.log(arr1[0])  //获得数组的元素，下标从0开始，第一个元素下标是0
arr1[0]=888  // 修改数组的第一个元素的值
```

## 数组的长度

```javascript
var arr1=[1,2,3,4]; 
console.log(arr1.length);
```

## 判断是不是数组

1. 方法1

先用typeof 判断看看，发现无法判断是数组还是Object对象，方法1无效

```javascript
var arr1=[];
var obj={};
console.log(typeof arr1)  //object
console.log(typeof obj)   //object
```

2.  方法2

```javascript
Array.isArray()；
```

3.  方法3

```javascript
var ary = [1,23,4];
function isArray(o){
	return Object.prototype.toString.call(o)== '[object Array]';
}
console.log(isArray(ary));
```

推荐使用方法2和方法3



## 栈方法

栈是什么？

我们可以把数组立起来，把底部封上 ,再往里面放数据,或者在里面取东西，

栈顶和栈底



![mark](http://cdn.cs1024.com/images/20191211/vd9dFkgja28o.png?imageslim)

有点像我们把东西放在箱子里，最后放的在最上面

### 入栈



```javascript
var arr1=[];
arr1.push(1);

console.log(arr1);
```

![mark](http://cdn.cs1024.com/images/20191210/4dPbkEzSCUfU.png?imageslim)

### 出栈

```javascript
// 从栈的顶部先出去
var arr1=[];
arr1.push(1);
arr1.push(2);
console.log(arr1);
arr1.pop();
console.log(arr1)
```

先进后出



## 队列

现实生活中排队打饭，先来的先打饭。

队列也是这样，先进来的先出去，先进先出

### 入队

```javascript
var arr1=[];
var q= arr1.unshift(3,12)
console.log(q);  //返回数组的长度
```

### 出队

```javascript
var b= arr1.shift()
console.log(arr1) //[12]
console.log(b)   //3 返回出队的那个项目
```

## 数组排序

交换变量的值 (添加中间变量)

```javascript
var x=1;
var y=2;
var temp = y;
y=x;
x=temp;
console.log(x) //2
console.log(y) //1
```

从小打到排序 （ 图解）

```javascript
var arr=[1,3,1,2];
for (var i=0;i<arr.length-1;i++){
    for (var j=0;j<arr.length-1;j++){
        if(arr[j]>arr[j+1]){
            var temp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp
        }
    }
}
console.log(arr);  //) [1, 1, 2, 3]
```

## 数组操作

- 合并

  ```javascript
  var arr1=[1,2,3];
  var arr2=[4,5,6];
  console.log(arr1.concat(arr2))
  ```

- 查询元素的位置

  ```javascript
  var arr1=[1,2,3,5,6,7];
  console.log(arr1.indexOf(2))//1
  console.log(arr1.indexOf(211))//-1
  ```



# Date 类型

创建一个日期对象

```javascript
var date=new Date();
console.log(date)  //Wed Dec 11 2019 08:47:13 GMT+0800 (中国标准时间)
```

常用

```javascript

var myDate = new Date();
myDate.getYear(); //获取当前年份(2位)
myDate.getFullYear(); //获取完整的年份(4位,1970-????)
myDate.getMonth(); //获取当前月份(0-11,0代表1月)
myDate.getDate(); //获取当前日(1-31)
myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
myDate.getHours(); //获取当前小时数(0-23)
myDate.getMinutes(); //获取当前分钟数(0-59)
myDate.getSeconds(); //获取当前秒数(0-59)
myDate.getMilliseconds(); //获取当前毫秒数(0-999)
myDate.toLocaleDateString(); //获取当前日期
var mytime=myDate.toLocaleTimeString(); //获取当前时间
myDate.toLocaleString( ); //获取日期与时间
```

写一个获得当前年月日的函数

```javascript
function getNow() {
    var date=new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    return year+'-'+month+'-'+day;
}
console.log(getNow());
```



时间戳是指格林威治时间1970年01月01日00时00分00秒(北京时间1970年01月01日08时00分00秒)起至现在的总秒数 

```javascript
var timestamp = (new Date()).getTime();
console.log(timestamp); //
```

# RegExp 类型

RegExp 正则表达式，用来匹配或者提取字符串的。

语法

```javascript
var express = /pattern/ flags
var express = new RegExp(pattern,flags)
```

例子

```javascript
var reg = new RegExp('\d', 'gi');
```

通过 new 构造一个正则表达式对象，其中第一个参数 '\d' 是正则内容，第二个参数 'gi' 是修饰符。两个参数皆为字符串类型.

| 修饰符 | 说明                                         |
| ------ | -------------------------------------------- |
| i      | 忽略大小写匹配                               |
| g      | 全局匹配，即是匹配一个后继续匹配，直到结束   |
| m      | 多行匹配，即是遇到换行后不停止匹配，直到结束 |



## 字符匹配

 比如`/hello/`，也只能匹配字符串中的"hello"这个子串。 

```javascript
var regex = /hello/;
console.log(regex.test("hello") ); 
// => true
```



### 量词

其实现的方式是使用量词。譬如`{m,n}`，表示连续出现最少m次，最多n次。

比如`/ab{2,5}c/`表示匹配这样一个字符串：第一个字符是“a”，接下来是2到5个字符“b”，最后是字符“c”。测试如下：

```javascript
var regex = /ab{2,5}c/g;
var string = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
console.log( string.match(regex) ); 
// => ["abbc", "abbbc", "abbbbc", "abbbbbc"]

```

### 中括号

譬如`[abc]`，表示该字符是可以字符“a”、“b”、“c”中的任何一个。

比如`/a[123]b/`可以匹配如下三种字符串："a1b"、"a2b"、"a3b"。测试如下：

```javascript
var regex = /a[123]b/g;
var string = "a0b a1b a2b a3b a4b";
console.log( string.match(regex) ); 
// => ["a1b", "a2b", "a3b"]
```

### 范围表示方法

如果字符组里的字符特别多的话，怎么办？可以使用范围表示法。

比如`[123456abcdefGHIJKLM]`，可以写成`[1-6a-fG-M]`。用连字符`-`来省略和简写。

因为连字符有特殊用途，那么要匹配“a”、“-”、“z”这三者中任意一个字符，该怎么做呢？

不能写成`[a-z]`，因为其表示小写字符中的任何一个字符。

可以写成如下的方式：`[-az]`或`[az-]`或`[a\-z]`。即要么放在开头，要么放在结尾，要么转义。总之不会让引擎认为是范围表示法就行了。



### 简写形式 

**`\d`**就是`[0-9]`。表示是一位数字。记忆方式：其英文是digit（数字）。

**`\D`**就是`[^0-9]`。表示除数字外的任意字符。

**`\w`**就是`[0-9a-zA-Z_]`。表示数字、大小写字母和下划线。记忆方式：w是word的简写，也称单词字符。

**`\W`**是`[^0-9a-zA-Z_]`。非单词字符。

**`\s`**是`[ \t\v\n\r\f]`。表示空白符，包括空格、水平制表符、垂直制表符、换行符、回车符、换页符。记忆方式：s是space character的首字母。

**`\S`**是`[^ \t\v\n\r\f]`。 非空白符。


### 量词

`**{m,}**` 表示至少出现m次。

`**{m}**` 等价于`{m,m}`，表示出现m次。

`**?**` 等价于`{0,1}`，表示出现或者不出现。记忆方式：问号的意思表示，有吗？

`**+** `等价于`{1,}`，表示出现至少一次。记忆方式：加号是追加的意思，得先有一个，然后才考虑追加。

`*****` 等价于`{0,}`，表示出现任意次，有可能不出现。记忆方式：看看天上的星星，可能一颗没有，可能零散有几颗，可能数也数不过来。

###  **贪婪匹配和惰性匹配** 

```javascript
var regex = /\d{2,5}/g;
var string = "123 1234 12345 123456";
console.log( string.match(regex) ); 
// => ["123", "1234", "12345", "12345"]

```

其中正则`/\d{2,5}/`，表示数字连续出现2到5次。会匹配2位、3位、4位、5位连续数字。

但是其是贪婪的，它会尽可能多的匹配。你能给我6个，我就要5个。你能给我3个，我就3要个。反正只要在能力范围内，越多越好。

我们知道有时贪婪不是一件好事（请看文章最后一个例子）。而惰性匹配，就是尽可能少的匹配：

```javascript
var regex = /\d{2,5}?/g;
var string = "123 1234 12345 123456";
console.log( string.match(regex) ); 
// => ["12", "12", "34", "12", "34", "12", "34", "56"]
```

 其中`/\d{2,5}?/`表示，虽然2到5次都行，当2个就够的时候，就不在往下尝试了。 

### 多选分支

 具体形式如下：`(p1|p2|p3)`，其中`p1`、`p2`和`p3`是子模式，用`|`（管道符）分隔，表示其中任何之一。 

 例如要匹配"good"和"nice"可以使用`/good|nice/`。测试如下 

```javascript
var regex = /good|nice/g;
var string = "good idea, nice try.";
console.log( string.match(regex) ); 
// => ["good", "nice"]
```

### 案例分析

 **匹配16进制颜色值** 

>\#ffbbad
>
>\#Fc01DF
>
>\#FFF
>
>\#ffE

表示一个16进制字符，可以用字符组`[0-9a-fA-F]`。

其中字符可以出现3或6次，需要是用量词和分支结构。

使用分支结构时，需要注意顺序。

正则如下：

```javascript
var regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;
var string = "#ffbbad #Fc01DF #FFF #ffE";
console.log( string.match(regex) ); 
// => ["#ffbbad", "#Fc01DF", "#FFF", "#ffE"]
```

**匹配时间**

以24小时制为例。

要求匹配：

> 23:59
>
> 02:07

共4位数字，第一位数字可以为`[0-2]`。

当第1位为2时，第2位可以为`[0-3]`，其他情况时，第2位为`[0-9]`。

第3位数字为`[0-5]`，第4位为`[0-9]`

正则如下：

```javascript
var regex = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/;
console.log( regex.test("23:59") ); 
console.log( regex.test("02:07") ); 
// => true
// => true
```

 **匹配日期** 

比如yyyy-mm-dd格式为例。

要求匹配：

>  2017-06-10 

分析：

年，四位数字即可，可用`[0-9]{4}`。

月，共12个月，分两种情况01、02、……、09和10、11、12，可用`(0[1-9]|1[0-2])`。

日，最大31天，可用`(0[1-9]|[12][0-9]|3[01])`。

正则如下：

```javascript
var regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
console.log( regex.test("2017-06-10") ); 
// => true
```

### 分组提取

 比如提取出年、月、日，可以这么做： 

```javascript
var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
console.log( string.match(regex) ); 
// => ["2017-06-12", "2017", "06", "12", index: 0, input: "2017-06-12"]
```

 https://juejin.im/post/5965943ff265da6c30653879 

## 常用js正则

验证手机号

```javascript
var phone='18367724001'
var phonereg= /^1[13456789]\d{9}$/
console.log(phonereg.test(phone)) //true
```

验证email邮箱

```javascript
var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
if(reg.test(email)){
    console("邮箱格式正确");
}else{
    console("邮箱格式不正确");
}
```

 https://blog.csdn.net/weixin_30947043/article/details/98816888 



# Function 类型

函数也是对象，也是引用类型的一种

函数名其实是一个指针，里面包含一个地址，指向了堆内存的里面的具体的函数

```javascript
function sum(a,b) {
    return a+b;
}
```

![mark](http://cdn.cs1024.com/images/20191211/lAO8hR8SfsPI.png?imageslim)

## 没有重载

重载就是方法名相同，参数（个数或类型）不同

```javascript
function add(a,b,c) {
    return a+b+c;
}

function add(a,b) {
    return a+b+1;
}
//假如有重载的话，上面2个函数就是不同的函数，我可以分别调用他们
add(1,2,3)
add(1,2)
```

但是js没有重载，后面的函数会覆盖前面的函数,

```javascript
function add(a,b,c) {
    return a+b+c;
}

function add(a,b) {
    return a+b+1;
}

//最后我们调用的时候，使用的是后面声明的函数
function add(a,b) {
    return a+b+1;
}
```

## 函数声明和函数表达式

```javascript
//函数声明
function add(a,b) {
    return a+b;
}
// 函数表达式
var minus =function (a,b) {
    return a-b;
}

console.log(add(1,2))  //3
console.log(minus(4,2)) //2
```

## 预解析

### 函数声明和函数表达式不同

```javascript
//函数声明
function add(a,b) {
    return a+b;
}
// 函数表达式
var add =function (a,b) {
    return a+b;
}
// 函数声明会自动预解析，最先执行，所以只要在全局环境声明了函数，在任意地方都能调用
// 函数表达式必须被执行过才可以调用这个函数。
```

### 变量的预解析（变量提升）

```javascript
console.log(a); // undefined
var a=12;
```

js在指向上面的代码的时候，会把变量的声明提升到代码的最前面，也叫变量提升，所以上面的代码实际执行的顺序是

```javascript
var a;   //这里a就是undefined
console.log(a);
a=12;
```

## 函数内部属性 （this和arguments）

在函数内部，有2个特殊的对象。arguments和this

arguments，表示参数

```javascript
function sum(a,b) {
    console.log(arguments.length) //2
    console.log(arguments[0]) //第一个参数 11
    console.log(arguments[1]) //第二个参数 22
}
sum(11,22);
```

this 表示当前的对象

```javascript
function test() {
    console.log(this)
}
test();//  全局环境中有一个全局的对象，window，test函数可以看成他的一个方法，所以可以写成window.test(); this 指的就是调用这个函数的对象，这里是window调用的，所以输出的this是window

//在全局环境中输出
console.log(this) //window
console.log(window) // window
```

# window对象的属性和方法

```javascript
// 这里的a就是window对象的一个属性，我们也可以用window.a访问a的值
var a=1;
console.log(window.a==a)

// 这里的add就是window对象的一个方法，我们也可以用window.add()调用这个方法
function add(a,b) {
    return a+b;
}
add(1,2) // 等同于 window.add(1,2)
```

# 基本包装类型

js 还提供了3个特殊的引用类型，Boolean,Number,String类型 ，

基本包装类型：把Boolean，Number，String这些基本类型转为引用类型，引用类型就是对象，这样就可以给他们加方法了。

- Boolean 

  ```javascript
  var b1=true;            //字面量
  var b2 = new Boolean(true)  // 开发不使用
  console.log(b1==b2);  //true
  ```

- Number 

  ```javascript
  var b1=123;            //字面量
  var b2 = new Number(123)  // 开发不使用
  console.log(b1==b2);  //true
  ```

- String 类型

  ```javascript
  var b1="zhangsan";            //字面量
  var b2 = new String("zhangsan")  // 开发不使用
  console.log(b1==b2);  //true
  ```

我们知道引用类型是对象，对象有方法和属性，那我们Number,String,Boolean有什么方法和属性呢？

 比如Number 类型

```javascript
var b1= 1.12312;
var b2 = new Number(1.12312)
console.log(b2);   // tofixed 保留小数
```

还有String 类型

```javascript
var b1= "1232dd";
var b2 = new String( "1232dd")
console.log(b2);   // string有很多方法，我们下节课讲一些常用的
```

# String 类型

String类型的常用方法

- split 

  ```javascript
  // 字符串分隔
  var str='abc 123';
  var arr= str.split(' ')
  console.log(arr);
  ```

- indexof

  ```javascript
  // 返回查找元素的下标，没找到返回-1
  var str='abc';
  console.log(str.indexOf('b'));  //1
  ```

查找文档

 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript 



# window对象

window是一个全局对象，在js代码中都可以被访问



变量是window的属性，函数是window的方法

```javascript
var a=1;
console.log(window.a==a)
function test() {
    console.log(111)
}
test();
window.test();
```

# Math 对象

- min和max

  ```javascript
  var max = Math.max(1,2,3,4);
  var min = Math.min(1,2,3,4);
  console.log(max,min);
  ```

- 舍入方法

  ```javascript
  Math.round()  “四舍五入”， 该函数返回的是一个四舍五入后的的整数
  
  var d = 3.1415926;
  Math.round(d);    // 结果 3
  
  Math.ceil()  “向上取整”， 即小数部分直接舍去，并向正数部分进1
  var d = 3.1415926;
  Math.ceil(d); //4
  
  
  Math.floor()  “向下取整” ，即小数部分直接舍去
  var d = 3.1415926;
  Math.floor(d);  //3
  
  ```

- 随机数方法

  ```javascript
  Math.random(); //返回介于 0（包含） ~ 1（不包含） 之间的一个随机数：
  ```

  

# 面向对象开发

面向对象开发是一种思想，就是把所有的东西都抽象成对象，比如人可以是一个对象

```javascript
var person = {
    qq:"100000356",
    web:"cs1024.com",
    show:function () {
        console.log("我的qq是="+this.qq+'我的网站是='+this.web)
    }
}
//this 表示调用这个方法的对象，这里的this指的是person，因为person.qq是"100000356"
//所以this.qq也是100000356
person.show();
```

# 创建对象

## 工厂模式

为什么需要工厂模式，可以标准化地创建对象

没有工厂模式的时候，我们创建对象如下

```javascript
var person1 = {
    qq:"100000356",
    web:"cs1024.com",
    show:function () {
        console.log("我的qq是="+this.qq+'我的网站是='+this.web)
    }
}
var person2 = {
    qq:"111",
    web:"cs1024.com",
    show:function () {
        console.log("我的qq是="+this.qq+'我的网站是='+this.web)
    }
}
```

工厂模式怎么创建对象

```javascript
function createPerson(qq,web){
    var obj = new Object();

    obj.qq=qq;
    obj.web=web;
    obj.show=function () {
        console.log("我的qq是="+this.qq+'我的网站是='+this.web)
    }
    return obj;
}

var person1 = createPerson('100000356','cs1024.com')
var person2 = createPerson('100000356','www.cs1024.com')
```

## 构造函数创建对象

构造函数也是函数，和普通函数没有区别，只不过他用来创建对象，所以叫他构造函数。

js有些内置的构造函数可以创建对象，比如Object,Array,

```javascript
var obj1= new Object()
var arr1= new Array()
```

我们也可以自定义构造函数

```javascript
// 构造函数的函数名首字母一般大写，用来和普通函数做区分。
function Person(qq,web) {
    this.qq=qq;
    this.web=web;
    this.show=function () {
        console.log(this.qq)
    }
}

var person1 = new Person('100000356','cs1024.com')
var person2 = new Person('10000356','www.cs1024.com')
```

构造函数创建对象的过程

1. 创建一个新的对象
2. 把构造函数的作用域赋给新对象（把this指向这个新对象）

3. 执行构造函数里面的代码（为这个新对象添加属性）
4. 返回新对象



我们通过new 构造函数创建的方法会有一个construct的属性，指向构造函数

```javascript
function Person(qq,web) {
    this.qq=qq;
    this.web=web;
    this.show=function () {
        console.log(this.qq)
    }
}

var person1 = new Person('100000356','cs1024.com')
var person2 = new Person('10000356','www.cs1024.com')

console.log(person1.constructor==Person)  //true
console.log(person2.constructor==Person)  //true
```

## 构造函数与普通函数的不同

构造函数与普通函数唯一的不同就是，他们的调用方式不同

任何函数，只要他通过new 操作符来调用，那么他就可以作为构造函数。

如果不通过new操作符调用，他和普通函数没什么不同

```javascript
function Person(qq,web) {
    this.qq=qq;
    this.web=web;
    this.show=function () {
        console.log(this.qq)
    }
}

//当构造函数使用
var person1 = new Person('100000356','cs1024.com')
person1.show();

//当普通函数调用
Person('123456','cs1024'); // 添加到window
console.log(qq)      //123456
console.log(window.qq) //123456
```

## 构造函数的问题

对象的方法都是不同的

```javascript
function Person(qq,web) {
    this.qq=qq;
    this.web=web;
    this.show=function () {
        console.log(this.qq)
    }
}

var person1 = new Person('100000356','cs1024.com')
var person2 = new Person('10000356','www.cs1024.com')
console.log(person1.show==person2.show) //false
```

这样就造成了内存的浪费，我们有没有办法把方法用一个呢？

```javascript
function Person(qq,web) {
    this.qq=qq;
    this.web=web;
    this.show=show
}

var person1 = new Person('100000356','cs1024.com')
var person2 = new Person('10000356','www.cs1024.com')


function show(){
    console.log(this.qq)
}
console.log(person1.show==person2.show) //true
```

这样有什么问题呢？我们把函数写在全局，但是被某个构造函数调用，很容易冲突。比如我别的构造函数也用到show这个方法，我就很难去区分。就是没有封装性。

什么是封装性：就是同一个功能的代码块要有密切的联系

![mark](http://cdn.cs1024.com/images/20191212/8gwloihY1Uuv.png?imageslim)

那我们可以使用原型模式



## 原型模式

我们的函数也是对象（js一切都是对象），我们创建的每个函数都有一个prototype的属性，这个属性是一个指针，指向一个对象,这个对象叫原型对象，我们所有通过new 构造函数创建的对象都有原型对象的属性和方法

```javascript
function Person(qq,web) {
    this.qq=qq;
    this.web=web;
    this.show=show
}

var person1 = new Person('100000356','cs1024.com')
var person2 = new Person('10000356','www.cs1024.com')

Person.prototype.name='zhangsan';
console.log(person1.name) // zhangsan
console.log(person2.name) //zhangsan
```

我们看看Object这个内置对象的原型对象上有什么方法和属性

```javascript
console.log(Object.prototype);
```

Array的原型对象

```javascript
console.log(Array.prototype);
```

## 图解原型对象

![mark](http://cdn.cs1024.com/images/20191212/ITb2gAGdGFIt.png?imageslim)



![mark](http://cdn.cs1024.com/images/20191212/sBGP889zHCWa.png?imageslim)



判断实例对象的原型对象是不是某个对象

```javascript
function Person(qq,web) {
    this.qq=qq;
    this.web=web;
}

var person1 = new Person('100000356','cs1024.com')
console.log(person1 instanceof Person) //true

person1.__proto__ ={}
// person的__proto__是不是指向Person.prototype指向的对象所在的原型链上，是就返回true，否则false
console.log(person1 instanceof Person) //false

```



## 重写原型对象

```java
function Person(){}

Person.prototype = {
    constructor:Person, // 我们需要把constructor重新指向Person
    name:"Nic",
    age:"29",
    sayName:function(){
        alert(this.name)
    }
};
var friend1 = new Person();    //实例在这里

friend1.sayName();  //ok

Person.prototype={}
var friend2 = new Person();    //实例在这里
friend2.sayName();  //error
```

```javascript
function Person(){}

    var friend2 = new Person();    //实例在这里
    Person.prototype = {
        name : "aty",
        sayName:function(){
            alert(this.name);
        }
    };

    friend2.sayName();
```

两个例子都是重写了原型对象，但是实例创建的顺序直接导致了俩个输出的结果。

第一个弹出 “Nic”，而第二个会报错“TypeError: friend2.sayName is not a function” ！！！

两端代码唯一的区别就是实例在原型对象重写之前还是之后。

第一段重写后再创建实例，此时实例指向改写后的原型对象，所以能调用到原型中的sayName()。

第二段创建实例后再重写，此时实例还是指向刚开始的原型对象。重写原型对象后会将 之前原型对象 的属性和方法全部清除，所以实例访问不到sayName()。



总结：

“实例中的指针仅指向原型，而不是指向构造函数”。

“重写原型对象切断了现有原型与任何之前已经存在的对象实例之间的关系；它们引用的仍然是最初的原型”。

 ![mark](http://cdn.cs1024.com/images/20191212/bD6XLVPqsNxa.png?imageslim)

## 原型链

 ![mark](http://cdn.cs1024.com/images/20191212/ViUM4iBNa7a9.png?imageslim)

## 继承



爸爸的资产儿子继承

实例可以使用原型链上对象的属性和方法



# 递归 

函数自己调用自己

```javascript
function add(num) {
    if(num<=1){
        return 1;
    }else{
        return num *add(num-1)
    }
}
console.log(add(5))
```

# 闭包

有权访问另一个函数作用域的函数

访问规则，根据作于作用域规则

```javascript
function a() {
    var m=1;
    function b() {
        console.log(m)
    }
    return b;
}

// 正常情况下，我们无法访问m这个变量,但我们可以通过返回一个函数，来访问m
var qq=a();
qq();
```

# 在循环中使用闭包

```javascript
var arr=[];
for (var i=0;i<3;i++){
    arr[i]=function () {
        console.log(i)
    }
}

arr[0](); //3
arr[1](); //3
arr[2](); //3
```

```javascript
var arr=[];
for (var i=0;i<3;i++){
    arr[i]=function (num) {
        return function () {
            console.log(num)
        }
    }(i)
}
arr[0](); //0
arr[1](); //1
arr[2](); //2
```

# Bom

 浏览器对象模型。将整个浏览器看作是一个对象。js中所有成员变量、成员方法都是浏览器对     象的属性和方法。所有的其他对象都是浏览器对象子对象。 

![mark](http://cdn.cs1024.com/images/20191212/SI3W7MmA0Gp8.png?imageslim)

## window 对象

 Window 对象表示浏览器中打开的窗口。 

- 窗口位置

  表示浏览器窗口相对于屏幕左边和上边的距离

  ```javascript
  let leftpos = (typeof window.screenLeft =='number')?window.screenLeft:window.screenX;
  let toppos = (typeof window.screenTop =='number')?window.screenTop:window.screenY;
  console.log(leftpos,toppos);
  ```

- 窗口大小

  ```javascript
  var winWidth = 0;
  var winHeight = 0;
  function findDimensions() //函数：获取尺寸
  {
      //获取窗口宽度
      if (window.innerWidth){
          winWidth = window.innerWidth;
      } else if ((document.body) && (document.body.clientWidth)){
          winWidth = document.body.clientWidth;
      }
      //获取窗口高度
      if (window.innerHeight){
          winHeight = window.innerHeight;
      }
      else if ((document.body) && (document.body.clientHeight)){
          winHeight = document.body.clientHeight;
      }
      console.log(winWidth,winHeight)
  }
  findDimensions();
  window.onresize = findDimensions
  ```

- setTimeout和setInterval

  ```javascript
  setTimeout(function () {
      console.log("我在一秒后被调用")
  },1000)
  ```

  ```javascript
  var i=0;
  var timer = setInterval(function () {
      console.log('我被调用了,i='+i);
      i++;
  })
  clearInterval(timer);
  
  
  ```

  ### Window 对象属性

  | 属性                                                         | 描述                                                         |
  | :----------------------------------------------------------- | :----------------------------------------------------------- |
  | [closed](https://www.w3school.com.cn/jsref/prop_win_closed.asp) | 返回窗口是否已被关闭。                                       |
  | [defaultStatus](https://www.w3school.com.cn/jsref/prop_win_defaultstatus.asp) | 设置或返回窗口状态栏中的默认文本。                           |
  | [document](https://www.w3school.com.cn/jsref/dom_obj_document.asp) | 对 Document 对象的只读引用。请参阅 [Document 对象](https://www.w3school.com.cn/jsref/dom_obj_document.asp)。 |
  | [history](https://www.w3school.com.cn/jsref/dom_obj_history.asp) | 对 History 对象的只读引用。请参数 [History 对象](https://www.w3school.com.cn/jsref/dom_obj_history.asp)。 |
  | [innerheight](https://www.w3school.com.cn/jsref/prop_win_innerheight_innerwidth.asp) | 返回窗口的文档显示区的高度。                                 |
  | [innerwidth](https://www.w3school.com.cn/jsref/prop_win_innerheight_innerwidth.asp) | 返回窗口的文档显示区的宽度。                                 |
  | length                                                       | 设置或返回窗口中的框架数量。                                 |
  | [location](https://www.w3school.com.cn/jsref/dom_obj_location.asp) | 用于窗口或框架的 Location 对象。请参阅 [Location 对象](https://www.w3school.com.cn/jsref/dom_obj_location.asp)。 |
  | [name](https://www.w3school.com.cn/jsref/prop_win_name.asp)  | 设置或返回窗口的名称。                                       |
  | [Navigator](https://www.w3school.com.cn/jsref/dom_obj_navigator.asp) | 对 Navigator 对象的只读引用。请参数 [Navigator 对象](https://www.w3school.com.cn/jsref/dom_obj_navigator.asp)。 |
  | [opener](https://www.w3school.com.cn/jsref/prop_win_opener.asp) | 返回对创建此窗口的窗口的引用。                               |
  | [outerheight](https://www.w3school.com.cn/jsref/prop_win_outerheight.asp) | 返回窗口的外部高度。                                         |
  | [outerwidth](https://www.w3school.com.cn/jsref/prop_win_outerwidth.asp) | 返回窗口的外部宽度。                                         |
  | pageXOffset                                                  | 设置或返回当前页面相对于窗口显示区左上角的 X 位置。          |
  | pageYOffset                                                  | 设置或返回当前页面相对于窗口显示区左上角的 Y 位置。          |
  | parent                                                       | 返回父窗口。                                                 |
  | [Screen](https://www.w3school.com.cn/jsref/dom_obj_screen.asp) | 对 Screen 对象的只读引用。请参数 [Screen 对象](https://www.w3school.com.cn/jsref/dom_obj_screen.asp)。 |
  | [self](https://www.w3school.com.cn/jsref/prop_win_self.asp)  | 返回对当前窗口的引用。等价于 Window 属性。                   |
  | [status](https://www.w3school.com.cn/jsref/prop_win_status.asp) | 设置窗口状态栏的文本。                                       |
  | [top](https://www.w3school.com.cn/jsref/prop_win_top.asp)    | 返回最顶层的先辈窗口。                                       |
  | window                                                       | window 属性等价于 self 属性，它包含了对窗口自身的引用。      |
  | screenLeftscreenTopscreenXscreenY                            | 只读整数。声明了窗口的左上角在屏幕上的的 x 坐标和 y 坐标。IE、Safari 和 Opera 支持 screenLeft 和 screenTop，而 Firefox 和 Safari 支持 screenX 和 screenY。 |

  #### Window 对象方法

  | 方法                                                         | 描述                                               |
  | :----------------------------------------------------------- | :------------------------------------------------- |
  | [alert()](https://www.w3school.com.cn/jsref/met_win_alert.asp) | 显示带有一段消息和一个确认按钮的警告框。           |
  | [blur()](https://www.w3school.com.cn/jsref/met_win_blur.asp) | 把键盘焦点从顶层窗口移开。                         |
  | [clearInterval()](https://www.w3school.com.cn/jsref/met_win_clearinterval.asp) | 取消由 setInterval() 设置的 timeout。              |
  | [clearTimeout()](https://www.w3school.com.cn/jsref/met_win_cleartimeout.asp) | 取消由 setTimeout() 方法设置的 timeout。           |
  | [close()](https://www.w3school.com.cn/jsref/met_win_close.asp) | 关闭浏览器窗口。                                   |
  | [confirm()](https://www.w3school.com.cn/jsref/met_win_confirm.asp) | 显示带有一段消息以及确认按钮和取消按钮的对话框。   |
  | [createPopup()](https://www.w3school.com.cn/jsref/met_win_createpopup.asp) | 创建一个 pop-up 窗口。                             |
  | [focus()](https://www.w3school.com.cn/jsref/met_win_focus.asp) | 把键盘焦点给予一个窗口。                           |
  | [moveBy()](https://www.w3school.com.cn/jsref/met_win_moveby.asp) | 可相对窗口的当前坐标把它移动指定的像素。           |
  | [moveTo()](https://www.w3school.com.cn/jsref/met_win_moveto.asp) | 把窗口的左上角移动到一个指定的坐标。               |
  | [open()](https://www.w3school.com.cn/jsref/met_win_open.asp) | 打开一个新的浏览器窗口或查找一个已命名的窗口。     |
  | [print()](https://www.w3school.com.cn/jsref/met_win_print.asp) | 打印当前窗口的内容。                               |
  | [prompt()](https://www.w3school.com.cn/jsref/met_win_prompt.asp) | 显示可提示用户输入的对话框。                       |
  | [resizeBy()](https://www.w3school.com.cn/jsref/met_win_resizeby.asp) | 按照指定的像素调整窗口的大小。                     |
  | [resizeTo()](https://www.w3school.com.cn/jsref/met_win_resizeto.asp) | 把窗口的大小调整到指定的宽度和高度。               |
  | [scrollBy()](https://www.w3school.com.cn/jsref/met_win_scrollby.asp) | 按照指定的像素值来滚动内容。                       |
  | [scrollTo()](https://www.w3school.com.cn/jsref/met_win_scrollto.asp) | 把内容滚动到指定的坐标。                           |
  | [setInterval()](https://www.w3school.com.cn/jsref/met_win_setinterval.asp) | 按照指定的周期（以毫秒计）来调用函数或计算表达式。 |
  | [setTimeout()](https://www.w3school.com.cn/jsref/met_win_settimeout.asp) | 在指定的毫秒数后调用函数或计算表达式。             |

  

  ## location 对象

  Location 对象包含有关当前 URL 的信息。

  Location 对象是 Window 对象的一个部分，可通过 window.location 属性来访问。

  ```javascript
  window.location.href="https://www.baidu.com"
  ```

  #### Location 对象属性

  | 属性                                                         | 描述                                          |
  | :----------------------------------------------------------- | :-------------------------------------------- |
  | [hash](https://www.w3school.com.cn/jsref/prop_loc_hash.asp)  | 设置或返回从井号 (#) 开始的 URL（锚）。       |
  | [host](https://www.w3school.com.cn/jsref/prop_loc_host.asp)  | 设置或返回主机名和当前 URL 的端口号。         |
  | [hostname](https://www.w3school.com.cn/jsref/prop_loc_hostname.asp) | 设置或返回当前 URL 的主机名。                 |
  | [href](https://www.w3school.com.cn/jsref/prop_loc_href.asp)  | 设置或返回完整的 URL。                        |
  | [pathname](https://www.w3school.com.cn/jsref/prop_loc_pathname.asp) | 设置或返回当前 URL 的路径部分。               |
  | [port](https://www.w3school.com.cn/jsref/prop_loc_port.asp)  | 设置或返回当前 URL 的端口号。                 |
  | [protocol](https://www.w3school.com.cn/jsref/prop_loc_protocol.asp) | 设置或返回当前 URL 的协议。                   |
  | [search](https://www.w3school.com.cn/jsref/prop_loc_search.asp) | 设置或返回从问号 (?) 开始的 URL（查询部分）。 |

  #### Location 对象方法

  | 属性                                                         | 描述                     |
  | :----------------------------------------------------------- | :----------------------- |
  | [assign()](https://www.w3school.com.cn/jsref/met_loc_assign.asp) | 加载新的文档。           |
  | [reload()](https://www.w3school.com.cn/jsref/met_loc_reload.asp) | 重新加载当前文档。       |
  | [replace()](https://www.w3school.com.cn/jsref/met_loc_replace.asp) | 用新的文档替换当前文档。 |

  ## navigator 对象

   Navigator 对象包含有关浏览器的信息。 

  ```javascript
  console.log(navigator)
  ```

  #### Navigator 对象属性

  | 属性                                                         | 描述                                           |
  | :----------------------------------------------------------- | :--------------------------------------------- |
  | [appCodeName](https://www.w3school.com.cn/jsref/prop_nav_appcodename.asp) | 返回浏览器的代码名。                           |
  | [appMinorVersion](https://www.w3school.com.cn/jsref/prop_nav_appminorversion.asp) | 返回浏览器的次级版本。                         |
  | [appName](https://www.w3school.com.cn/jsref/prop_nav_appname.asp) | 返回浏览器的名称。                             |
  | [appVersion](https://www.w3school.com.cn/jsref/prop_nav_appversion.asp) | 返回浏览器的平台和版本信息。                   |
  | [browserLanguage](https://www.w3school.com.cn/jsref/prop_nav_browserlanguage.asp) | 返回当前浏览器的语言。                         |
  | [cookieEnabled](https://www.w3school.com.cn/jsref/prop_nav_cookieenabled.asp) | 返回指明浏览器中是否启用 cookie 的布尔值。     |
  | [cpuClass](https://www.w3school.com.cn/jsref/prop_nav_cpuclass.asp) | 返回浏览器系统的 CPU 等级。                    |
  | [onLine](https://www.w3school.com.cn/jsref/prop_nav_online.asp) | 返回指明系统是否处于脱机模式的布尔值。         |
  | [platform](https://www.w3school.com.cn/jsref/prop_nav_platform.asp) | 返回运行浏览器的操作系统平台。                 |
  | [systemLanguage](https://www.w3school.com.cn/jsref/prop_nav_systemlanguage.asp) | 返回 OS 使用的默认语言。                       |
  | [userAgent](https://www.w3school.com.cn/jsref/prop_nav_useragent.asp) | 返回由客户机发送服务器的 user-agent 头部的值。 |
  | [userLanguage](https://www.w3school.com.cn/jsref/prop_nav_userlanguage.asp) | 返回 OS 的自然语言设置。                       |

  #### Navigator 对象方法

  | 方法                                                         | 描述                                         |
  | :----------------------------------------------------------- | :------------------------------------------- |
  | [javaEnabled()](https://www.w3school.com.cn/jsref/met_nav_javaenabled.asp) | 规定浏览器是否启用 Java。                    |
  | [taintEnabled()](https://www.w3school.com.cn/jsref/met_nav_taintenabled.asp) | 规定浏览器是否启用数据污点 (data tainting)。 |

  

  ## screen 对象

  

   Screen 对象包含有关客户端显示屏幕的信息。 

  ## Screen 对象属性

  | 属性                                                         | 描述                                         |
  | :----------------------------------------------------------- | :------------------------------------------- |
  | [availHeight](https://www.w3school.com.cn/jsref/prop_screen_availheight.asp) | 返回显示屏幕的高度 (除 Windows 任务栏之外)。 |
  | [availWidth](https://www.w3school.com.cn/jsref/prop_screen_availwidth.asp) | 返回显示屏幕的宽度 (除 Windows 任务栏之外)。 |
  | [bufferDepth](https://www.w3school.com.cn/jsref/prop_screen_bufferdepth.asp) | 设置或返回调色板的比特深度。                 |
  | [colorDepth](https://www.w3school.com.cn/jsref/prop_screen_colordepth.asp) | 返回目标设备或缓冲器上的调色板的比特深度。   |
  | [deviceXDPI](https://www.w3school.com.cn/jsref/prop_screen_devicexdpi.asp) | 返回显示屏幕的每英寸水平点数。               |
  | [deviceYDPI](https://www.w3school.com.cn/jsref/prop_screen_deviceydpi.asp) | 返回显示屏幕的每英寸垂直点数。               |
  | [fontSmoothingEnabled](https://www.w3school.com.cn/jsref/prop_screen_fontsmoothingenabled.asp) | 返回用户是否在显示控制面板中启用了字体平滑。 |
  | [height](https://www.w3school.com.cn/jsref/prop_screen_height.asp) | 返回显示屏幕的高度。                         |
  | [logicalXDPI](https://www.w3school.com.cn/jsref/prop_screen_logicalxdpi.asp) | 返回显示屏幕每英寸的水平方向的常规点数。     |
  | [logicalYDPI](https://www.w3school.com.cn/jsref/prop_screen_logicalydpi.asp) | 返回显示屏幕每英寸的垂直方向的常规点数。     |
  | [pixelDepth](https://www.w3school.com.cn/jsref/prop_screen_pixeldepth.asp) | 返回显示屏幕的颜色分辨率（比特每像素）。     |
  | [updateInterval](https://www.w3school.com.cn/jsref/prop_screen_updateinterval.asp) | 设置或返回屏幕的刷新率。                     |
  | [width](https://www.w3school.com.cn/jsref/prop_screen_width.asp) | 返回显示器屏幕的宽度。                       |

## History 对象

 History 对象包含用户（在浏览器窗口中）访问过的 URL。 

### History 对象属性



| 属性                                                         | 描述                              |
| :----------------------------------------------------------- | :-------------------------------- |
| [length](https://www.w3school.com.cn/jsref/prop_his_length.asp) | 返回浏览器历史列表中的 URL 数量。 |

### History 对象方法



| 方法                                                         | 描述                                |
| :----------------------------------------------------------- | :---------------------------------- |
| [back()](https://www.w3school.com.cn/jsref/met_his_back.asp) | 加载 history 列表中的前一个 URL。   |
| [forward()](https://www.w3school.com.cn/jsref/met_his_forward.asp) | 加载 history 列表中的下一个 URL。   |
| [go()](https://www.w3school.com.cn/jsref/met_his_go.asp)     | 加载 history 列表中的某个具体页面。 |

 



# DOM

 文档对象模型（Document Object Model，简称DOM） 

Dom树：把网页看成一棵树

![mark](http://cdn.cs1024.com/images/20191213/zbzSc18UKWSf.png?imageslim)



## Dom 节点类型

Dom节点，Dom树上的具体元素

- element 节点 ，也叫标签节点，比如上面的html,head,title,body,a   （最常用）
- Document 节点，就是上面的文档，一个网页只有一个的，是网页的根节点
- Text 节点，就是文本节点，就是上面的一些文本，文档标题，我的链接
- comment 节点，注释的节点

## Dom 节点的属性

获得节点的方法

```javascript
var aaa = document.getElementById("aaa");
```

- nodetype 表示节点的类型

  ```javascript
  var aaa = document.getElementById("aaa");
  console.log(aaa.nodeType) // 1
  ```

![mark](http://cdn.cs1024.com/images/20191213/txzwUIWU1GHY.png?imageslim)

- nodeName 表示节点的名字

  ```javascript
  var aaa = document.getElementById("aaa");
  console.log(aaa.nodeType) //DIV  
  ```

- childNodes 表示节点的子节点

  ```javascript
  <div id="aaa">
      <p>123</p>
  </div>
  
  // js
  var aaa = document.getElementById("aaa");
  console.log(aaa.childNodes);
  console.log(aaa.childNodes[0].nodeType);
  ```

- parentNode 表示节点的父节点

  ```javascript
  var aaa = document.getElementById("aaa");
  console.log(aaa.parentNode);
  ```

## Dom 节点的方法

- 创建节点

  ```javascript
  var btn=document.createElement("BUTTON");
  var t=document.createTextNode("CLICK ME");
  //也可以btn.innerHTML='CLICK ME'
  ```

-  添加节点

  ```javascript
  var aaa = document.getElementById("aaa");
  var p  =document.createElement('p');
  p.innerHTML='ppp'
  aaa.appendChild(p)
  ```

- 删除节点

  ```javascript
  <div id="aaa">
      <p id="p">123</p>
  </div>
  
  var aaa = document.getElementById("aaa");
  var p = document.getElementById("p");
  aaa.removeChild(p)
  ```

## Document 节点

document 节点表示整个页面，同时document也是window.对象的一个属性，特点如下

- nodetype为9
- parentNode为null

### 子节点

#### 子节点信息

```java
var html = document.documentElement; //取得对<html>的引用
var body = document.body  // 取得对<body>的引用
var doctype =document.doctype; // 取得对<!Doctype>的引用
var title =document.title; // 获得网页的标题

console.log(html);
console.log(body);
console.log(doctype);
console.log(title);
```

#### 查找元素

```javascript
var a= document.getElementById("a") // id 在一个网页里面必须是唯一的
var img= document.getElementById("img")
var plist = document.getElementsByTagName('p')// 获得网页所有p元素的节点
var alist = document.getElementsByClassName('bb')// 获得网页所有类是bb的节点

// 读取节点的属性
console.log(a.innerHTML);
console.log(img.src);
console.log(a.link);
```

## Element 子节点

最常用的节点 ，元素节点，标签节点，特征

- nodetype 的值是1
- nodeName 的值是元素的标签名

### 获得节点的属性

```javascript
<div id="aaa" class="bcbc">
</div>

var a = document.getElementById("aaa");
console.log(a.id) //aaa
console.log(a.className) //bcbc
a.id ='newid'
a.className ='newclassname'
```

### 取得属性的方法

```javascript
var a = document.getElementById("aaa");
console.log(a.getAttribute("id")) //aaa
console.log(a.getAttribute("class")) //aaa
```

### 设置属性的方法

```javascript
var a = document.getElementById("aaa");
console.log(a.getAttribute("id")) //aaa
console.log(a.getAttribute("class")) //aaa

a.setAttribute("id",'qqq')
a.setAttribute("class",'bbb')
```

### 作业

给ul 添加3个li节点，并设置内容分别为1，2，3



## Text 节点

文本节点由text类型表示，包含的是纯文本内容，特点

- nodetype 的值是3
- nodeValue的值是节点 所包含的文本

### 创建文本节点

```javascript
var a=document.getElementById("a");

var div =document.createElement("div");
div.className='qqb'
var txt = document.createTextNode("张三");
div.appendChild(txt);
a.appendChild(div);
```

## comment 节点 （了解）

表示html的注释节点,特点，特点

- nodetype 为 8
- nodeValue 是注释的内容

### 访问注释的节点

```javascript
<div id="aaa" >
    <!-- 我是注释的内容-->
</div>

var aaa = document.getElementById("aaa");
console.log(aaa.childNodes[0].data) //获得注释的内容
```

# Dom 操作技术

## 动态引入js脚本

可以动态加载外部的js

```javascript
function loadJs(url) {
    var script = document.createElement("script");
    script.src=url;
    document.body.appendChild(script);
}
```

## 动态引入样式表

```javascript
function loadCss(url) {
    var link = document.createElement('link');

    link.href=url;
    var head = document.getElementsByTagName('head')[0]
    head.appendChild(link);
}
```

## 动态读写css 样式

```javascript
.bb{
    width: 100px;
}
--------------
<div id="aaa" >
12
    </div>
-------------
var a = document.getElementById("aaa");
console.log(a.style.width)
a.style.backgroundColor = 'red';  
```

## 获得元素大小

### 获得元素的偏移大小



```javascript
.bb{
    width: 100px;
    height: 110px;
    background: red;
    position: absolute;
    left: 150px;
    top: 120px;
}

-----
<div id="a" class="bb" >
        12
</div>
------
var a = document.getElementById("a");
console.log(a.offsetWidth)
console.log(a.offsetHeight)
console.log(a.offsetLeft)
console.log(a.offsetTop)
```

![mark](http://cdn.cs1024.com/images/20191213/x3H2Xdnzx0se.png?imageslim)

### 获得客户区的大小

客户区的大小指元素内容及其内边距所占的大小

可以使用我们可以获得视口（网页可见区域）的大小

![mark](http://cdn.cs1024.com/images/20191213/eIqBa6Oe7yGE.png?imageslim)

```javascript
function getViewport() {
    // ie7之前兼容写法
    if(document.compatMode=='BackCompat'){
        return  {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        }
    }
    return {
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight,
    }
}

console.log(getViewport());
```

### 滚动条

![mark](http://cdn.cs1024.com/images/20191213/WWADYxDmnKQ7.png?imageslim)

获得文档的高度

因为浏览器的兼容性问题，获得文档的宽度和高度用下面的方法

```javascript
var docHeight = Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight)
var docWidth = Math.max(document.documentElement.scrollWidth,document.documentElement.clientWidth)
console.log(docWidth,docHeight);
```

# 事件

## 点击事件

```javascript
var a=document.getElementById("a");
a.onclick=function () {
    alert(111);
}
```



## 事件流

我们点击一个按钮的时候，其实是点击了整个网页，事件流动的方向。

## 冒泡（IE）

冒泡就是从底层的元素开始触发事件，一直向上传递事件，直到最顶部，事件的传递方向是从下向上的。

```javascript
<div id="a"  >
    12
</div>
---------------
var a=document.getElementById("a");
var body = document.getElementsByTagName('body')[0]
a.onclick=function () {
    alert('a 点击了');
}
body.onclick = function () {
    alert("body 被点击了");
}      
```

![mark](http://cdn.cs1024.com/images/20191213/GD4qvtWumvUT.png?imageslim)



## 捕获

另一种处理事件的方式，最上面的节点的事件先执行，再慢慢地到下面去( 一般不会使用)

```javascript
.box{
    width: 200px;
    height: 100px;
    background: red;
}
----------
<div class="box" id="box">
    <div id="a">
        12
    </div>
</div>
----------
var a=document.getElementById("a");
var box=document.getElementById("box");

a.addEventListener('click',function () {
    alert("a")
},true)

box.addEventListener('click',function () {
    alert("box")
},true)
```



![mark](http://cdn.cs1024.com/images/20191213/GelUXD96HlDb.png?imageslim)

## 事件流

事件流包括3个阶段，事件捕获阶段，处于目标阶段，事件冒泡阶段。

```javascript
.box{
    width: 200px;
    height: 100px;
    background: red;
}
-------
<div class="box" id="box">
    <div id="a">
        12
    </div>
</div>
--------
var a=document.getElementById("a");
var box=document.getElementById("box");

a.addEventListener('click',function () {
    alert("a被捕获了")
},true)

box.addEventListener('click',function () {
    alert("box被捕获了")
},true)

a.addEventListener('click',function () {
    alert("a冒泡")
},false)
box.addEventListener('click',function () {
    alert("box冒泡")
},false)
    
```

![mark](http://cdn.cs1024.com/images/20191213/mpJQNlnja8Sy.png?imageslim)

# 事件处理程序

事件处理程序就是指触发事件时候会执行的某些操作，

## html 事件处理程序

把事件写在html里面 （不常用）

```javascript
<div id="a" onclick="alert('123456789')">
    12
</div>
```

## Dom0 级事件处理程序

```javascript
<div id="a">
    12
</div>
-----------
var a= document.getElementById("a");
a.onclick=function () {
    alert('qqq')
}
   
```

## DOM2 级事件处理程序

```javascript
<div id="a">
    12
</div>
-------
// 添加事件
var a= document.getElementById("a");
a.addEventListener("click",function () {
    alert("vvv")
},false) // false 表示冒泡，true 表示捕获，现在基本上都用冒泡了

------------
// 移除事件
var a= document.getElementById("a");
var handler = function(){
    alert('1')
}
a.removeEventListener("click",handler,false)
```

## IE的事件处理程序

ie有自己的事件处理程序

```javascript
// 添加事件
btn.attachEvent('onclick', function(event){
    alert(event.type); // click
});
// 移除事件
var handler = function(){}
btn.detachEvent("onclick",handler)
```

## 跨浏览器的事件处理程序

```javascript

<input type="button" id="button1" value="按钮" />

-------
    
function show(){
    alert("Hello world!");
}
//声明一个对象
var eventUtil={
    //添加句柄
    addHandler:function(element,type,handler){
        //DOM2级事件处理判断
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){//IE事件处理判断
            element.attachEvent('on'+type,handler);
        }else{//DOM0级事件判断
            element['on'+type]=handler;
        }
    },
    //删除句柄
    removeHandler:function(element,type,handler){
        //DOM2级事件处理判断
        if(element.removeEventListener){
            elememt.removeEventListener(type,handler,false);
        }else if(element.detachEvent){//IE事件处理判断
            element.detachEvent('on'+type,handler);
        }else{//DOM0级事件判断
            element['on'+type]=null;
        }
    }
}
eventUtil.addHandler(button3,'click',show);
```

# 事件对象

## DOM中的事件对象

我们在触发事件的时候，会默认给事件处理函数传入一个event的事件对象的参数，

```javascript
var a= document.getElementById("a");
a.onclick=function (event) {
    console.log(event.type) //click 事件类型
    console.log(event)
}
```

### 事件的this,target,currentTarget属性

currentTarget 事件处理程序正在处理的那个元素 ( 和this是相等的)

target 事件的实际目标

- 假如我们写了一个按钮，并且绑定事件，我们点击按钮，那么this,currenttarget,target都是一样的

  ```javascript
  <input type="button" value="按钮" id="btn">
      
  -----
  var btn= document.getElementById("btn");
  
  btn.onclick=function (event) {
      var target = event.target
      var currentTarget = event.currentTarget;
  
      console.log(this==target) //true
      console.log(this==currentTarget) //true
  }
  ```

- 假如事件是绑定在input的父级元素body上面的

  ```javascript
  <body id="body">
  <input type="button" value="按钮" id="btn">
      <script>
          var body= document.getElementById("body");
          body.onclick=function (event) {
              var target = event.target
              var currentTarget = event.currentTarget;
              // target 表示实际点击的元素，这里我们实际点击的元素是按钮，所以target 是按钮，和this还有currentTarget不同了
              console.log(target)
              console.log(currentTarget)
              console.log(this)
          }
      </script>
  </body>
  ```

  ### 阻止默认行为和冒泡

  组织a标签的默认跳转的行为

  ```javascript
  <body>
  <a href="http://www.baidu.com">baidu</a>
      <script>
          var a = document.getElementById("a");
          a.onclick=function (event) {
              // 阻止跳转的默认行为
              e.preventDefault();
              console.log('111');
          }
      </script>
  </body>
  ```

  阻止事件向上冒泡

  ```javascript
  <body id="body">
  
  <div id="a">123</div>
      <script>
  
          var a = document.getElementById("a");
          var body = document.getElementById("body");
          a.onclick=function (event) {
              // 阻止冒泡
              event.stopPropagation();
              console.log('a 被点击了');
          }
          body.onclick=function () {
              console.log('body 被点击了')
          }
  		
      </script>
  </body>
  ```

  ## IE的事件对象 

  ```javascript
  var a = document.getElementById("a");
  var body = document.getElementById("body");
  a.onclick=function () {
  
      var event = window.event;
      window.event.returnValue = false // 阻止默认行为
      window.event.cancelBubble = true // 阻止冒泡
      console.log('a 被点击了');
  }
  ```

  ## 跨浏览器的事件对象

  ```javascript
  var eventUtils = {
      addHandle: function(element,eventType,handler){
              if(element.addEventListener)
              element.addEventListener(eventType,handler,false);
              else if(element.attachEvent)
              element.attachEvent('on'+eventType,handler);
              else
              element['on'+type] = handler;
      },
      removeHandle: function(element,eventType,handler){
          if(element.removeEventListener)
          element.removeEventListener(eventType,handler,false);
          else if(element.detachEvent)
          element.detachEvent("on"+eventType,handler);
          else
          element["on"+eventType] = null;
      },
      getEvent:function(event){
          return event ? event : window.event;
      },
      getTarget:function(event){
          return event.target || event.srcElement;
      },
      preventDefault:function(event){
          if(event.preventDefault)
          event.preventDefault();
          else
          event.returnValue = false;
      },
      stopPropagation:function(event){
          if(event.stopPropagation)
          event.stopPropagation();
          else
          event.cancelBubble = true;
      }
  }
  
  
  // Use:
  btn.onclick = function(event){
      var e = eventUtils.getEvent(event);
  } 
  
  ```

  

  # 事件类型

  ## UI 事件

  页面上的一些事件，UI就是可以理解为设计稿

  ### load 事件

  当页面全部加载后，（包括所有图像，js文件，css文件等外部资源），就会触发window的onload事件

  ```javascript
  window.onload=function () {
      console.log('页面加载好了');
  }
  ```

  ### resize 事件

  页面大小改变的时候会调用的事件

  ```javascript
  window.onresize=function (event) {
      console.log('我被调用了');
  }
  ```

  ### scroll事件

  ```javascript
  window.onscroll=function (e) {
      // 滚动条距离顶部的距离
      console.log(document.documentElement.scrollTop)
  }
  ```

  ## 鼠标与滚轮事件

  ### 鼠标单击事件

  ```javascript
  var a = document.getElementById('a');
  a.onclick=function () {
  
  }
  
  ```

  ## 键盘事件 

  - KeyDown：用户摁下摁键时发生
  - KeyPress：用户摁下摁键，并且产生一个字符时发生 （ 完整的 key press 过程分为两个部分：1. 按键被按下；2. 按键被松开 ）
  - KeyUp： 用户释放某一个摁键时触发

  ```javasc
  <body >
  <input type="text" id="text">
  
  <script>
  var text = document.getElementById("text");
  
  
  text.onkeydown=function (ev) {
  
  console.log(ev.keyCod)
  }
  
  </script>
  </body>
  ```

  

  

