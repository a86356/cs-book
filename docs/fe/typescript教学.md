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

## 公共，私有与受保护的修饰符

默认为 `public`

在上面的例子里，我们可以自由的访问程序里定义的成员。 如果你对其它语言中的类比较了解，就会注意到我们在之前的代码里并没有使用 `public`来做修饰；例如，C#要求必须明确地使用 `public`指定成员是可见的。 在TypeScript里，成员都默认为 `public`。

你也可以明确的将一个成员标记成 `public`。 我们可以用下面的方式来重写上面的 `Animal`类：

```javascript
class Animal {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
```

理解 `private`

当成员被标记成 `private`时，它就不能在声明它的类的外部访问。比如：

```javascript
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}
new Animal("Cat").name; // 错误: 'name' 是私有的.
```

理解 protected

是受保护的,只有当前类的成员与继承该类的类才能访问

```javascript
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // 错误
```

注意，我们不能在 `Person`类外使用 `name`，但是我们仍然可以通过 `Employee`类的实例方法访问，因为 `Employee`是由 `Person`派生而来的。

# 函数

之前的函数

```javascript
function add(x, y) {
    return x + y;
}
```

ts的函数,加上数据类型

```javascript
function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number { return x + y; };
```

我们可以给每个参数添加类型之后再为函数本身添加返回值类型。 TypeScript能够根据返回语句自动推断出返回值类型，因此我们通常省略它。

## 可选参数和默认参数

传递给一个函数的参数个数必须与函数期望的参数个数一致。

```javascript
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // error, too few parameters
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right
```

JavaScript里，每个参数都是可选的，可传可不传。 没传参的时候，它的值就是undefined。 在TypeScript里我们可以在参数名旁使用 `?`实现可选参数的功能。 比如，我们想让last name是可选的：

```javascript
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");  // works correctly now
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");  // ah, just right
```

可选参数必须跟在必须参数后面。 如果上例我们想让first name是可选的，那么就必须调整它们的位置，把first name放在后面。

默认参数

在TypeScript里，我们也可以为参数提供一个默认值当用户没有传递这个参数或传递的值是`undefined`时。 它们叫做有默认初始化值的参数。 让我们修改上例，把last name的默认值设置为`"Smith"`。

```javascript
function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result4 = buildName("Bob", "Adams");         // ah, just right
```



 watermark/1/image/aHR0cDovL2Nkbi5jczEwMjQuY29tL2ltYWdlcy8yMDE5MTIxOS82Q05tTmZNSWh6YmoucG5nP2ltYWdlc2xpbQ==/dissolve/100/gravity/SouthEast/dx/10/dy/10



 https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html 