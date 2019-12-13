# js 类型

js的变量是没有类型的，值才有

JavaScript 有七种内置类型：

- 空值（null） 

- 未定义（undefined）

- 布尔值（ boolean）
- 数字（number） 
-  字符串（string） 
-  对象（object） 
-  符号（symbol，ES6 中新增）



看值的类型，typeof

```javascript
 typeof undefined     === "undefined"; // true
typeof true          === "boolean";   // true
typeof 1            === "number";    // true
typeof "1"          === "string";    // true
typeof { life: 1 }  === "object";    // true
typeof null === "object"; // true
```


正确的返回结果应该是 "null"，但这个bug 由来已久，在JavaScript 中已经存在了将近 二十年，也许永远也不会修复，因为这牵涉到太多的 Web 系统，“修复”它会产生更多的 bug，令许多系统无法正常工作。

如何判断null

```javascript
var a = null;  
(!a && typeof a === "object"); // true
```

undefined 和未定义

```javascript
console.log(a) // undefined
var a;
console.log(b) //error
```

undefined 是声明过了，没有赋值

未定义是没有声明





# 



