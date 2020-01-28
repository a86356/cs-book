# 什么是vuex

状态管理工具，相当于弄一个数据中心，所有的组件都可以使用数据中心里面的值

解决嵌套组件传值复杂的问题

在没有vuex的时候，嵌套组件需要不断向上传值给父组件，父组件再不断向下传值，

有了vuex，就可以数据共享了

vuex 是一种设计思路，不是新东西



类似的有redux

vuex里面的数据是响应式的，一个组件里面修改了vuex里面的值 ，其他组件引用这个值的地方也都改变



**![mark](http://cdn.cs1024.com/images/20200108/GHLPMWXlJW8O.png?imageslim)**

## 组成部分

state：全局的数据 data

getters : 获得state数据的方式

actions: 触发mutation

mutations:改变state中的数据，再重新渲染组件

modules:模块。每个模块，都有上面的state，getters,actions,mutations

## 安装

```javascript
npm i vuex
```

# store介绍

```javascript
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    count:1
  },
  mutations:{
    increment (state) {
      state.count++
    }
  }
})
store.commit('increment');
console.log(store.state.count);
```

# state

引入store到全局的组件

```javascript
var vue = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
```

那么到子组件就可以访问了

```javascript
this.$store.state.count
```

也可以写到computed里面

```javascript
computed:{
    isLogin(){
        return this.$store.state.isLogin;
    }
},
```

再在页面上访问

```javascript
{{isLogin}}
```

## mapState

方便我们取state的值的一种方式,对state一种映射

```javascript
import {mapState} from 'vuex'
computed:mapState({
    isLogin:state=>{
        return state.isLogin;
    },
    bb:state=>333
}),
```

加了mapstate 之后，会传入一个默认参数,

# getters

```javascript
state:{
    isLogin:false,
        todo:[
            {id:1,name:"eat"},
            {id:2,name:"eat"},
            {id:3,name:"eat"},
        ]
},
```

我想读取id>1的todo列表，就是对todo做一个filter，每次都拿filter之后的值

一种方式写一个全局函数，每次拿出来都先经过这个全局函数的处理。

另一钟方式，使用getters，getters就可以对我们state里面的数据进行处理再取得。

```javascript
const store = new Vuex.Store({
  state:{
    isLogin:false,
    todo:[
      {id:1,name:"eat"},
      {id:2,name:"eat"},
      {id:3,name:"eat"},
    ]
  },
  mutations:{
    login (state) {
      state.islogin=true;
    },
    logout:(state => {
      state.islogin=false
    })
  },
  getters:{
    mytodo(state){
      return state.todo.filter(item=>item.id>1);
    }
  }

})
```

在页面钟使用getters

```javascript
computed:{
    cc(){
        return this.$store.getters.mytodo
    }
},
```

再在页面里面渲染cc即可

## mapgetter

```javascript
import {mapGetters} from 'vuex'
computed:mapGetters([
    'mytodo'
]),
```

# mutations

vuex规定修改state里面的值只能通过mutation，

```javascript
mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }
}
store.commit('increment', {
  amount: 10
})
```

```javascript
store.commit({
  type: 'increment',
  amount: 10
})
```

mutations 里面必须是同步的函数

在子组件使用,引入mapmutations

```javascript
import {mapState,mapGetters,mapMutations} from 'vuex'
methods:mapMutations([
    'login'
]) 
```

或者用

```javascript
methods: {
     goNav({

         this.$store.commit('increate',{a:1})
 	},
}
```



https://vuex.vuejs.org/zh/guide/mutations.html