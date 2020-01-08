# 自己动手实现小型mvvm框架

## 原理

model的数据改变会通过 viewmodel影响view,

同理view的改变，会通过viewmodel,影响model

![mark](http://cdn.cs1024.com/images/20200106/zhOjxRyLupTJ.png?imageslim)

![mark](http://cdn.cs1024.com/images/20200106/g5QpdBpDRu8l.png?imageslim)



vue的调用

```javascript
var app = new Myvue({
    data:{
        msg:'我是消息'
    },
    el:"#root",
    method:{
        getmsg(){
        },
        setmsg(){
        }
    }
})
```

# 第一步监听数据改变

model的改变，要影响view，我们需要监听到model的改变。也就i是上面的

```javascript
data{msg:"我是消息"}
```

通过 **Object.defineProperty**这个api，当对象的属性发生改变的时候，就能被监听到。

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

通过下面的写法，就能监听到数据的改变

```javascript
//index.html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="app">
        <input type="text" v-model="msg">
        <div>{{msg}}</div>
    </div>

<script src="Mvvm.js"></script>

    <script>
        let vm = new Mvvm({
            el:"app",
            data:{
                msg:"张三"
            }
        })

        vm.data.msg='李四'

    </script>
</body>
</html>
```

mvvm.js

```javascript
class Mvvm {
    constructor(options){
        this.$el = options.el;
        this.data= options.data;
        this.vm=this;

        let observer= new Observer()
        observer.observerData(this.vm);
      //  new Compiler(this.vm);
    }
}



class Observer {
    observerData(vm){
        if(!vm || !vm.data || typeof vm.data!='object')return;
        let data =vm.data;
        for (let i in data){
            Object.keys(data).forEach(key=>{
                this.observeProperty(data,key,data[key])
            })
        }
    }
    observeProperty(data,key,val){
        // 递归调用
        this.observerData(val);

        Object.defineProperty(data,key,{
            set(newVal) {
                if(val==newVal)return;
                val= newVal;
            },
            get() {

            }
        })
    }
}
```

# 第二步编译数据

```javascript
class Mvvm {
    constructor(options){
        this.$el = options.el;
        this.$data= options.data;
        this.vm=this;

        // 数据劫持
        new Observer(this.$data)


        // //编译模板数据
        new Compiler(this.vm);
    }
}

class Compiler {
    constructor(vm){
        // 获得根节点 dom元素
        this.el = document.getElementById(vm.$el);

        //把根节点的内部dom转成碎片节点，关于碎片节点 https://blog.csdn.net/Allenyhy/article/details/82903121
        let fragment = this.getFragment(this.el);
        this.vm=vm;

        //编译里面的内容
        this.compile(fragment)

        //再把fragment碎片加回去
        this.el.appendChild(fragment)
    }

    isDirective(name){
        return name.indexOf('v-')==0
    }

    //编译元素节点
    compileElement(node){
       let attrs = node.attributes;
        [...attrs].forEach(attr=>{
            let {name,value}=attr; // v-model="msg"
            if(this.isDirective(name)){
                // 这里是指令了  v-html v-model v-onclick
                let directiveName =  name.split('-')[1]
                CompilerUtils[directiveName](node,value,this.vm);
            }

        })

    }
    //编译文本节点
    compileText(node){
        let content = node.textContent;
        if(/\{\{(.*?)\}\}/.test(content)){

            CompilerUtils['text'](node,content,this.vm)
        }
    }

    compile(node){
        let childnodes= node.childNodes;
        childnodes.forEach(child=>{
            let nodeType= child.nodeType
            //元素节点
            if(nodeType==1){
                this.compileElement(child);
                // 递归调用子元素
                this.compile(child)
            }
            //文本节点
            if(nodeType==3){
                this.compileText(child)
            }
        })
    }


    getFragment(rootNode){
        let firstChild ;
        let fragment = document.createDocumentFragment();
        while (firstChild = rootNode.firstChild){
            fragment.appendChild(firstChild)
        }
        return fragment;
    }
}



class CompilerUtils {
    static model(node,express,vm){  //node是节点 express 是表达式 v-mode="msg"中的msg，vm.$data提供数据
        node.value=vm.$data[express];// 一层的结构
    }
    static text(node,express,vm){

        let cnt =  express.replace(/\{\{(.*)\}\}/g,(...item)=>{
            return vm.$data[item[1]];
        })
        node.textContent = cnt;
    }
}

class Observer {

    constructor(data){
        this.observer(data)
    }
    observer(data){
        if(!data || typeof data!='object')return;

        for (let key in data){

           this.defineProperty(data,key,data[key])
        }
    }

    defineProperty(data,key,val){
        // 递归调用 val 也可能是对象
        this.observer(val);


        Object.defineProperty(data,key,{
            set:(newVal)=> {
                if(val==newVal)return;
                //新赋值的也赋值设置 setter getter
                this.observer(newVal);

                val=newVal;
            },
            get() {
                return val;
            }
        })
    }
}
```

# 第三步 观察者模式

2个角色，一个是观察者，一个是被观察者。(发布订阅)

当观察者察觉到数据变化，就通知被观察者们

``` // $watch 是一个实例方法
// $watch 是一个实例方法
vm.$watch('a', function (newValue, oldValue) {//a是属性名，表示要监听的对象
// 这个回调将在 `vm.a` 改变后调用
})
```

```javascript
class Mvvm {
    constructor(options){
        this.$el = options.el;
        this.$data= options.data;
        this.vm=this;

        // 数据劫持
        new Observer(this.$data)

        // //编译模板数据
        new Compiler(this.vm);
    }
}

class Dep {
    constructor(){
        this.subs=[] //存放所有的watcher
    }
    //订阅
    addSub(watcher){
        this.subs.push(watcher)
    }
    //通知
    notify(){
        this.subs.forEach(sub=>{
            sub.update();
        })
    }

}

class Watcher {
    constructor(vm,key,cb){
        this.vm=vm;
        this.key=key;
        this.cb = cb;
        this.oldVal =this.get();
    }

    get(){
        Dep.target=this; //
        let v= CompilerUtils.getVal(this.vm,this.key)
        Dep.target=null; //
        return v;
    }
    update(){
        let newVal = CompilerUtils.getVal(this.vm,this.key)
        if(newVal!=this.oldVal){
            this.cb(newVal)
        }
    }
}



class Compiler {
    constructor(vm){
        // 获得根节点 dom元素
        this.el = document.getElementById(vm.$el);

        //把根节点的内部dom转成碎片节点，关于碎片节点 https://blog.csdn.net/Allenyhy/article/details/82903121
        let fragment = this.getFragment(this.el);
        this.vm=vm;

        //编译里面的内容
        this.compile(fragment)

        //再把fragment碎片加回去
        this.el.appendChild(fragment)
    }

    isDirective(name){
        return name.indexOf('v-')==0
    }

    //编译元素节点
    compileElement(node){
       let attrs = node.attributes;
        [...attrs].forEach(attr=>{
            let {name,value}=attr; // v-model="msg"
            if(this.isDirective(name)){
                // 这里是指令了  v-html v-model v-onclick
                let directiveName =  name.split('-')[1]
                CompilerUtils[directiveName](node,value,this.vm);
            }

        })

    }
    //编译文本节点
    compileText(node){
        let content = node.textContent;
        if(/\{\{(.*?)\}\}/.test(content)){

            CompilerUtils['text'](node,content,this.vm)
        }
    }

    compile(node){
        let childnodes= node.childNodes;
        childnodes.forEach(child=>{
            let nodeType= child.nodeType
            //元素节点
            if(nodeType==1){
                this.compileElement(child);
                // 递归调用子元素
                this.compile(child)
            }
            //文本节点
            if(nodeType==3){
                this.compileText(child)
            }
        })
    }


    getFragment(rootNode){
        let firstChild ;
        let fragment = document.createDocumentFragment();
        while (firstChild = rootNode.firstChild){
            fragment.appendChild(firstChild)
        }
        return fragment;
    }
}



let CompilerUtils ={

    getVal:function(vm,expr){
        //都是单层的
        return vm.$data[expr];
    },
    setVal:function(vm,expr,value){
        //都是单层的
        vm.$data[expr]=value;
    },
    model:function(node,expression,vm){  //node是节点 express 是表达式 v-mode="msg"中的msg，vm.$data提供数据
        let newVal= this.getVal(vm,expression)


        new Watcher(vm,expression,(newVal)=>{ // 给输入框加一个观察者，数据更新就触发此方法
            node.value=newVal;
        })
        node.addEventListener('input',(e)=>{
            this.setVal(vm,expression,e.target.value)
        })
        node.value=newVal;// 一层的结构
    },

    getTextContent(vm,expression){

        let cnt=  expression.replace(/\{\{(.+?)\}\}/g,(...item)=>{
            return this.getVal(vm,item[1]);
        })
        return cnt;
    },
    text:function(node,expression,vm){

        let fn = this.updater['text'];
        let cnt =  expression.replace(/\{\{(.*?)\}\}/g,(...item)=>{ // 这些 {{msg}}  {{web}} 数据，都要加上观察者
            //文本数据更新的时候，会调用到这里
            new Watcher(vm,item[1],()=>{

               fn(node,this.getTextContent(vm,expression))  //每次都全部刷新
            })
            return this.getVal(vm,item[1]);
        })
        fn(node,cnt)
    },
    updater:{
        text:(node,value)=>{
            node.textContent=value
        },
        model:(node,value)=>{
            node.value=value;
        }
    }

}

class Observer {

    constructor(data){
        this.observer(data)
    }
    observer(data){
        if(!data || typeof data!='object')return;

        for (let key in data){

           this.defineProperty(data,key,data[key])
        }
    }

    defineProperty(data,key,val){
        // 递归调用 val 也可能是对象
        this.observer(val);
        // 每个属性都有自己的dep，改变一个属性，只需要处理自己属性的dep即可
        let dep=new Dep();


        Object.defineProperty(data,key,{
            set:(newVal)=> {
                if(val==newVal)return;
                //新赋值的也赋值设置 setter getter
                this.observer(newVal);

                val=newVal;

                dep.notify();
            },
            get() {
                if(Dep.target){
                    dep.addSub(Dep.target)
                }

                return val;
            }
        })
    }
}

```

# 第四步 实现代理

```javascript
vm.msg 获得数据等于 vm.$data.msg
```

```javascript
class Mvvm {
    constructor(options){
        this.$el = options.el;
        this.$data= options.data;
        this.vm=this;

        // 数据劫持
        new Observer(this.$data)

        this.proxy(this.$data)
        // //编译模板数据
        new Compiler(this.vm);
    }
    
    proxy(data){
        for(let key in data){
            Object.defineProperty(this,key,{
                get() {
                    return data[key]
                }
            })
        }
    }
}
```







