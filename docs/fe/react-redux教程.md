# 简介

redux是做数据层框架的，为了方便数据统一管理

http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html

# 基本概念

store：一个仓库，里面有state。

action：一个对象，比如

```java
const action = {
  type: 'ADD_TODO',
  payload: 'Learn Redux'
};
```

dispatch：分发一个action，改变state的，用户所有改变store里面的state的行为，都由dispatch操作

reducer：dispatch里面修改state具体操作在这里写，接收state和action这2个参数，返回一个新的state

```java
const reducer = function (state, action) {
  // ...
  return new_state;
};
```

store.subscribe: 可以监听到state的变化，里面有回调函数

```java
store.subscribe(listener);
```

`store.subscribe`方法返回一个函数，调用这个函数就可以解除监听。

```javascript
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

unsubscribe();
```

上面是流程：

大致就是有个公共是state，修改它只能通过dispatch，dispatch的参数是action对象，还有专门创建action的方法，叫actionCreator，dispatch之后，扔给reducer函数，reducer函数接收state和action这2个参数，返回一个新的state，再更新原来的state。

上面就是state的更新流程

