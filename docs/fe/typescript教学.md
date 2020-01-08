# 介绍

typescript 是微软出的，js的一个超集，他包含了es6,es5的语法，同时又扩充了一些功能

为什么有ts？

js本身是弱类型语言（就是变量的数据类型可以换，造成不确定性），没有数据校验，不适合大型项目。

```javascript
let a=1;
a='asd'
```

js没有函数参数的类型校验

```javascript
function add(a,b) {
    return a+b;
}
console.log(add(1,2))
console.log(add(1 ))  
```



![mark](http://cdn.cs1024.com/images/20191209/t52GVDh6yTr8.png?imageslim)



ts怎么运行

ts会被编译成es5的语法，浏览器实际运行的就是 js，而不是ts。

这些就需要一个ts编译器把ts语法转成es5的语法

webstorm内置这个编译器

所以我们开发的时候写ts代码，浏览器运行的是js代码



js和ts的区别

ts=js+类型+其他

ts 可以让项目可维护性更好



# 安装ts

安装nodejs和npm （nodejs安装了之后，自动安装了npm）

去官网 https://nodejs.org/en/

nodejs ：Node.js 就是运行在服务端的 JavaScript

npm:前端的包管理工具



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





# 配置环境 

webstorm的插件， 设置typescript自动编译，勾选下图圈红线的位置。 

![mark](http://cdn.cs1024.com/images/20191209/pC66K1i3jsGr.png?imageslim)

配置tsconfig.json文件

创建

```
tsc --init
```

指定ts编译的一些参数信息

```javascript
{
  "compilerOptions": {
      "experimentalDecorators": true,
    "target": "es5" // 设置把ts编译成es5的语法
  },
  "experimentalDecorators": true  // 去掉使用装饰器时候的报错信息
}
```



https://segmentfault.com/a/1190000013514680

# 基本类型

ts新增了类型校验

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
//元组属于数组的一种
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
```

## 枚举

```javascript
// 我们表示颜色 ，比如现在红色表示1 ，但是之后可以红色表示11，用枚举类型就可以了，
enum Color {Red=1, Green=2, Blue=3}
let c: Color = Color.Green;
```

## Any

有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 `any`类型来标记这些变量： 

```javascript
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```



## undefined和null

```javascript
let s3: undefined | string // 可以是undefined或者string类型，设置个类型
```

## Void

 某种程度上来说，`void`类型像是与`any`类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 `void`，通常是方法没有返回值会设置void

```javascript
function warnUser(): void {
    console.log("This is my warning message");
}
```

## never

包含undefined和null，表示从不会出现的值，用不到



## 默认设置类型

```javascript

let a=1;  // a 初始化是number类型，那么以后也要number类型，虽然没有写:number
let b='1';
a='2' //error

var qq;  // 只有初始化， 就默认是any 类型的
qq=1
qq='2'; //ok
```

# 函数

之前的函数

```javascript
//函数声明
function add(x, y) {
    return x + y;
}
//函数表达式
let add = function(x,y){
    return x+y;
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

## 

## 可选参数

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

可选参数必须跟在必须参数后面。 

## 默认参数

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

## 不定参数

```javascript
// 用在参数不确定的时候，不定参数放在参数的最后面
function add(...params:number[]):number {
    let sum:number=0;
    for (let i=0;i<params.length;i++){
       sum+=params[i]
    }
    return sum;
}
console.log(add(11,22,33))
console.log(add(11,22))
```

# 类

类的基本介绍

```javascript
// es5
function Person(age) {
    this.age=age;
}
Person.prototype.say=function () {
    console.log('hello world')
}
let p = new Person(18);


// 创建对象的一种方法
class Greeter {
    greeting: string;  // 前面省略了public 关键字 本来是 public greeting:string
    constructor(message: string) {
        this.greeting = message;
    }
    greet():void {
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

public       公有                在类，子类，类外面都可以访问 （默认修饰符是公有的）

protected 保护             在类，子类可以访问，类外面不可以访问

private     私有             在类可以访问，子类，类外面不可以访问

一般情况，我们默认public就行了。除非设计接口的时候，团队有规范。

```javascript
class Animal {
    public name: string;

    public sleep():void{
        console.log('i am sleep')
    }

    setName(name:string):void{
        this.name=name;
    }
    run():void{
        console.log(this.name+" is run")
    }
}

class Cat extends Animal{
    public showname():void{
        console.log('我是'+this.name)
    }
}


let a = new Animal();
a.setName('cat')

// 类外面访问public
console.log(a.name)

//类里面访问public
a.run()

//在子类访问public
let cat =new Cat();
cat.sleep()

```

 `private`

```javascript
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}
new Animal("Cat").name; // 在类外面不能访问私有的，同时在子类也不能访问private修饰的
```

 protected

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

let howard = new Employee("Howard", "Sales"); //
console.log(howard.getElevatorPitch()); // 在子类可以访问父类的protected修饰的 
console.log(howard.name); // 在类外面不能访问protected修饰的
```

## 静态属性和静态方法

```java

class Animal {
    public name: string;
    // static 修饰的方法就是静态方法
    static eat():void{
        console.log('eat')
    }

    // 静态属性
    static sex='male'
}
// 直接用类名去调用的
Animal.eat();

console.log(Animal.sex)

```

## 抽象方法和抽象类

抽象类有什么用？

可以保证继承的子元素都实现特定的方法，比如人都有吃东西的方法，不管是北方人还是南方人都吃东西，但是吃的可能不一样。

抽象方法必须在抽象类里面

```javascript
// 抽象类用 abstract修饰，继承抽象类的子类必须实现抽象类的方法
abstract class Person {
    abstract eat():void;

}

// 抽象类不能实例化

class NanPerson extends Person{
    eat():void{
        console.log('吃饭');
    }
}

class BeiPerson extends Person{
    eat(): void {
        console.log('吃面');
    }
}
let nan=new NanPerson();
let bei=new BeiPerson();

nan.gg();
bei.eat()
```

### 存取器

TypeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。

下面来看如何把一个简单的类改写成使用 `get`和 `set`。 首先，我们从一个没有使用存取器的例子开始。

```javascript
class Employee {
    fullName: string;
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
```

用了存取器的话，我们在操作属性的时候，可以进行一层校验

```javascript
class Person {
    get age(): number {
        return this._age;
    }
    //alt +enter 快速生成读写器
    set age(value: number) {
        this._age = value;
    }
    get name(): string {
        return this._name+"goods";
    }

    set name(value: string) {

        if(value==''){
            alert("value不能为空");
            return;
        }
        this._name = value;
    }

    private _name:string // 变成私有的属性


    private _age:number;
}

let p1 = new Person();
p1.name='cs1024.com';
console.log(p1.name)
```





# 接口

抽象类和接口都是差不多的，都是定义标准，别人去实现

### 函数接口

```javascript
//对参数进行约束
interface User {
    name:string;
    url:string;
}

function Person(user:User) {
    console.log(user.name+user.url)
}

Person({name:'行者',url:"cs1024.com"})

// 对函数类型
interface http {
    (url:string,data:string):string
}

let get:http=function (url:string,data:string):string {
    return  '';
}

// 可选参数
interface User {
    name?:string;
    url:string;
}

function Person(user:User) {
    console.log(user.name+user.url)
}

Person({url:"cs1024.com"})


// 只读接口
interface User {
    name?:string;
    readonly url:string;
}

let p1:User={url:"cs1024.com"};
p1.url='sdsd'; //error
```

### 类接口

```javascript
interface Person {
    eat():void;
}

class Man implements Person{
    eat(): void {
        console.log('吃饭')
    }
}

let p1:any= new Man();
p1.eat();

```

接口与抽象类的不同

接口相比抽象类范围更大

接口可以实现多个，继承只能继承一个抽象类

抽象类里面写函数实现，接口不能

实际开发用接口，





# 泛型

泛型允许程序员在强类型程序设计语言中编写代码时定义一些可变部分。

比如我们现在一个数据类型是string，将来我可能是number，我们就可以用泛型去设计

泛型的话再java或者c#用的很多

## 函数泛型

```javascript
// 我想实现这样一个属性，有个函数，我传入什么类型就返回什么类型
function getString(s1:string):string {
    return  '';
}
function getNumber(s1:number):number {
    return  1;
}
// 上面代码重复太多

// 使用泛型T ，当然可以用别的字母，但是通常用T，
function get<T>(val:T):T {
    return  val;
}

console.log(get<number>(1))
console.log(get<string>('1'))
```

## 类的泛型

```javascript
class Show<T> {
    showsomething<T>(val:T):T{
        return val;
    }
}

let show1 = new Show<string>();
show1.showsomething<string>('11');

let show2 =new Show<number>();
show2.showsomething<number>(111);
```

# 装饰器模式

装饰器可以去修改类的一些行为

## 类的装饰器

没有参数的类装饰器

```javascript
// param 表示传入的对象
function check(params:any) {

    params.prototype.checkphone=function () {
        //console.log(this.phone)
        if(!this.phone){
            console.log('请输入手机号码');
        }
    }
}

@check
class Submit {
    phone:string;
    password:string;
}

let sub1:any=  new Submit();
sub1.phone='1111';
sub1.checkphone();

```

有参数的类装饰器

```javascript
// param 表示传入的参数
function check(params:any) {
    //target 表示 原来的对象
    return function(target:any){

        console.log(params)
        target.prototype.checkphone=function () {

            if(!this.phone){
                console.log('请输入手机号码');
            }
        }
    }

}

@check('zhangsan')
class Submit {
    phone:string;
    password:string;
}

let sub1:any=  new Submit();
//sub1.phone='1111';
sub1.checkphone();

```

在tsconfig.json里面设置

```javascript
"experimentalDecorators": true, 
```



# 写一个github项目

## 项目准备

初始化一个npm的项目

```javascript
npm init -y
```

初始化ts配置

```javascript
tsc  --init
```

安装lodash 和request

```javascript
npm install request lodash --save
npm install @types/lodash @types/request --save-dev  //ts 有类型校验

npm install nodemon -g --save //需要先安装node 环境，nodemon是热更新node
```

lodash是一个js的辅助函数的类库

https://www.cnblogs.com/webbest/p/8268115.html

新建src的目录和out目录





index.ts

```javascript
import * as _ from 'lodash'
let array = [1,2,3,4,5];
 _.reverse(array);
```

接口

```javascript
https://api.github.com/users/a86356
```

新建用户的model

user.ts

```javascript
class User {
    login:string;
    fullName:string;
    repoCount:number;
    followerCount:number;
    repos:Repo[];
}
```

repo.ts

```javascript
class Repo {
    name:string;
    description:string;
    url:string;
    size:number;
    forkCount:number;
}
```

githubapiservice.ts

```javascript
import * as request from 'request';

class GithubApiService {
    getUserInfo(username:string){
        let options:any={
            headers:{
                'User-Agent':'request'
            },
            json:true
        }

        request.get("https://api.github.com/users/"+username,options,(error:any,response:any,body:any)=>{
            //console.log(error);
            //console.log(response);
            console.log(body);
        })
    }
    getRepos(){

    }
}
```

写一个User的构造器来接收返回的数据



 https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html 