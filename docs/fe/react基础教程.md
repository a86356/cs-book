# ReactJS基础

## react 简介

- React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。由于 React 的设计思想极其独特，属于革命性创新，性能出众，代码逻辑却非常简单。所以，越来越多的人开始关注和使用，认为它可能是将来 Web 开发的主流工具。
- 组件化思想，把前端的页面拆成模块化

-  大公司用的多，三大框架之一


## 前端三大框架

- vue.js 国人写的，入门最容易，国内最火，文档友好
- Angular 学习路线陡峭，中间有版本断层，用的公司少，后端java喜欢用，符合java的思想
- react.js 设计优秀，大厂用的最多，火的程度和vue差不多，国外用的多，一切都是js表现的，单向数据流

找前端工作必会其一，但是这3个都差不多，学会其中一个，其他的上手也很快的。

走势图 https://blog.csdn.net/hyt2018/article/details/86371063

组件化思想:把公共的部分抽出来，便于复用。

## react 生态

react+reator-router+redux+axios+babel+webpack

前后端分离

# dom和虚拟dom

dom是浏览器的一个概念，用来表现html结构的

虚拟dom：用数据结构做出来的一个dom结构，并不是html结构

```javascript
// html
<div id="wrap">
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
	</ul>
</div>

//虚拟dom，用js表现html结构
  var obj={
        tag:"div",
        id:'wrap',
        children:[
            {
                tag:'ul',
                children:[
                    {
                        tag:'li',
                     
                        innerHtml:1
                    },
                    {
                        tag:'li',
                        innerHtml:2
                    },
                    {
                        tag:'li',
                        innerHtml:3
                    },
                ]
            }
        ]
    }
```

如何把虚拟dom转成真实的dom

```javascript
let wrap= document.getElementById("wrap");
let children1 = obj.children;
for (let i=0;i<children1.length;i++){
    let tag = children1[i].tag;
    tag= document.createElement(tag);
    let children2 = children1[i].children;
    for	(let j=0;j<children2.length;j++){
        let tag2 = children2[j].tag;
        tag2= document.createElement(tag2);	
        tag2.innerHTML= children2[j].innerHtml
        tag.appendChild(tag2)
    }
    wrap.appendChild(tag);
}
```

# react 搭建脚手架

yarn和npm?

yarn:也是和npm一样的功能，也是包管理工具，但是速度比npm快，facebook开发的

安装yarn

```java
npm install -g yarn 
```

常用命令

```hava
yarn init
yarn add
yarn remove
yarn -v
yarn install //安装全部依赖
```

https://yarn.bootcss.com/



脚手架：就是react的一个基础框架，你在这个基础框架上开发更方便

初始化脚手架

```javascript
npm install -g create-react-app
create-react-app app
cd app
yarn start
```

安装react-router

```javascript
yarn add react-router
```

# 目录介绍

# 第一个组件

修改app.js为helloworld

# 多个组件

给app.js添加header和footer组件

# 动态渲染数据

```javascript
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Myheader from "./Myheader";

class App extends Component{
    render() {
        let a=1233;
        
        return (
            <div className="App">
                <Myheader/>
                hello world
                {1+2}
                {a}
            </div>
        );
    }
}
export default App;
```

# 状态

React 把组件看成是一个状态机（State Machines）。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。

React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）。

```javascript
import React, {Component} from 'react';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    render() {

        return (
            <div className="App">
                <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
export default App;
```

渲染原理：只改变state的部分，并不是全部重新渲染的



# props

state 和 props 主要的区别在于 **props** 是不可变的，而 state 可以根据与用户交互来改变。这就是为什么有些容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 props 来传递数据。单向数据流

props可以让父组件传值给子组件

父组件

```javascript
import React, {Component} from 'react';

import Myheader from "./Myheader";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    render() {

        return (
            <div className="App">
                <Myheader name="你的头部喽"/>
                <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
export default App;
```

子组件

```javascript
import React, {Component} from 'react';
class Myheader extends Component{
    render() {
        this.props.name='sds'
        return (
            <div className="App">
                我是头部的 {this.props.name}
            </div>
        );
    }
}
export default Myheader;
```

# 事件

```javascript
import React, {Component} from 'react';
import Myheader from "./Myheader";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {name:"张三"};
    }
    render() {
        return (
            <div className="App">
                我的名字是{this.state.name}
                <button onClick={this.changename}>点击换李四</button>
            </div>
        );
    }
    changename=()=>{
        console.log(this)
        this.setState({
            name: "李四"
        })
    }
}
export default App;
```

# 条件渲染

## && 

```javascript
import React, {Component} from 'react';

import Myheader from "./Myheader";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {msg:"2"};
    }
    render() {
        let {msg} = this.state;
        return (
            <div className="App">
                你好
                { msg>0 &&
                    <div>
                        你有{msg}条信息未读
                    </div>
                }
            </div>
        );
    }
}
export default App;
```

## 三目运算

```javascript
import React, {Component} from 'react';
import Myheader from "./Myheader";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {msg:"0"};
    }
    render() {
        let {msg} = this.state;
        return (
            <div className="App">
                你好
                { msg>0 ?
                    <div>
                        你有{msg}条信息未读
                    </div>
                    :
                    <div>
                        你没有未读消息
                    </div>
                }
            </div>
        );
    }
}
export default App;
```

# 循环列表

```javascript
import React, {Component} from 'react';

import Myheader from "./Myheader";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {msg:"0"};
    }

    render() {
        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((number) =>
            <li key={number.toString()}>
                {number}
            </li>
        );
        return (
            <div className="App">
                {listItems}
            </div>
        );
    }
}
export default App;
```

```javascript
import React, {Component} from 'react';

import Myheader from "./Myheader";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {msg:"0"};
    }

    render() {
        const numbers = [{name:"张安",id:'1'},{name:"cs1024.com",id:2}];
        const listItems = numbers.map((item) =>
            <li key={item.id.toString()}>
                {item.name}
            </li>
        );
        return (
            <div className="App">
                {listItems}
            </div>
        );
    }
}
export default App;
```

# 无状态组件

没有state的组件，传入什么显示什么，或者不传入数据

```javascript
import React, {Component} from 'react';
import Myheader from "./Myheader";
const App  =(props)=>{
   return (
       <div className="App">
            123
       </div>
   )
}
export default App;
```

适用于没有state,没有生命周期的组件

# 子组件向父组件传值

通过子组件调用父组建的方法，实现子组件向父组件传值

父组件

```javascript
import React, {Component} from 'react';
import Myheader from "./Myheader";
class App extends Component{
   show(val){
       alert(val)
   }
   render() {
       return (
           <div className="App">
               <Myheader showinfo={this.show} />
           </div>
       )
   }
}
export default App;
```

子组件

```javascript
import React, {Component} from 'react';
class Myheader extends Component{
    render() {
        return (
            <div className="App">
                我是头部的
                <button onClick={this.handleClick}>点击传值给父组件</button>
            </div>
        );
    }
    handleClick=()=>{
        this.props.showinfo('1888')
    }
}
export default Myheader;
```

# 组件之间传值

比如有3个组件，a是父组件，b，c是子组件，b要传数据给c，必须b先传给a，a再传给c这样。

a组件

```javascript
import React, {Component} from 'react';
import Myheader from "./Myheader";
import Myfooter from "./Myfooter";
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            web:"cs1024.com"
        }
    }
   show=(val)=>{
       this.setState({
           web:val
       })
   }
   render() {

       return (
           <div className="App">
               <Myheader showinfo={this.show} />
               <Myfooter web={this.state.web} />
           </div>
       )
   }
}
export default App;
```

b组件

```javascript
import React, {Component} from 'react';
class Myheader extends Component{
    render() {

        return (
            <div className="App">
                我是头部的
                <button onClick={this.handleClick}>点击传值给父组件</button>
            </div>
        );
    }
    handleClick=()=>{
        this.props.showinfo('1888')
    }

}
export default Myheader;
```

c组件

```javascript
import React, {Component} from 'react';


class Myfooter extends Component{
    render() {

        return (
            <div className="App">
                我是底部{this.props.web}
            </div>
        );
    }
    handleClick=()=>{
        this.props.showinfo('1888')
    }

}

export default Myfooter;
```

# 双向数据绑定

修改input的值，页面的值也发生变化

```javascript
import React, {Component} from 'react';
import Myheader from "./Myheader";
import Myfooter from "./Myfooter";


class App extends Component{
    constructor(props){
        super(props);
        this.state={
            web:"cs1024.com"
        }
    }
   show=(val)=>{
       this.setState({
           web:val
       })
   }
   render() {
       return (
           <div className="App">
               <input type="text" value={this.state.web} onChange={(e)=>this.handlechange(e)}/>
           </div>
       )
   }

    handlechange(e){
        this.setState({
            web:e.target.value
        })
    }
}
export default App;
```

# react 生命周期

组件从无到有，再到被改变，再到销毁，这样一个周期的

组件的生命周期可分成三个状态：

- Mounting：已插入真实 DOM
- Updating：正在被重新渲染
- Unmounting：已移出真实 DOM

生命周期的方法有：

- **componentWillMount** 在渲染前调用,在客户端也在服务端。
- **componentDidMount** : 在第一次渲染后调用。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。
- **componentWillReceiveProps** 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
- **shouldComponentUpdate** 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
  可以在你确认不需要更新组件时使用。
- **componentWillUpdate**在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
- **componentDidUpdate** 在组件完成更新后立即调用。在初始化时不会被调用。
- **componentWillUnmount**在组件从 DOM 中移除之前立刻被调用。

https://reactjs.org/docs/react-component.html#lifecycle-methods