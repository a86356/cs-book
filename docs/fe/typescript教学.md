# 介绍

typescript 是微软出的，js的一个超集，他包含了es6,es5的语法，同时又扩充了一些功能

![mark](http://cdn.cs1024.com/images/20191209/t52GVDh6yTr8.png?imageslim)



# 安装

先安装npm，再执行下面的语句

```javascript
npm install -g typescript
```

 在编辑器，将下面的代码输入到`greeter.ts`文件里： 

```javascript
function greeter(person) {
    return "Hello, " + person;
}
let user = "mm";
greeter(user);
```

命令行运行

```javascript
tsc greeter.ts
```

会看到生成一个greeter.js文件



# 配置webstorm的插件

 设置typescript自动编译，勾选下图圈红线的位置。 

![mark](http://cdn.cs1024.com/images/20191209/pC66K1i3jsGr.png?imageslim)





# 基本类型

## 布尔值

```javascript
let isDone: boolean = false;
```

## 数字

```javascript
let decLiteral: number = 6;
```

## 字符串

```javascript
let name: string = "bob";
name = "smith";
```

字符串模板语法

```javascript
let username: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ username }.
I'll be ${ age + 1 } years old next month.`;
console.log(sentence);
```

## 数组

```javascript
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```

## 元组

```javascript
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
```

## 枚举

```javascript
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

## Any

有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 `any`类型来标记这些变量： 

```javascript
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

## Void

 某种程度上来说，`void`类型像是与`any`类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 `void`： 

```javascript
function warnUser(): void {
    console.log("This is my warning message");
}
```





# 类

```javascript
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
```

## 继承

```javascript
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
```





# 函数





 https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html 