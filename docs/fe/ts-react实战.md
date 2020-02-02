# typescript+react 实战 todolist

## 环境搭建

先搭建react 脚手架



typescript

```javascript
npm i typescript awesome-typescript-loader -D
```

再在webpack里面加一个loader

![mark](http://cdn.cs1024.com/images/20200201/6wlMsEuEmjLe.png?imageslim)



tsconfig.json

```javascript
{
    "compilerOptions": {
        "allowSyntheticDefaultImports": true,
        "jsx": "react",
        "module": "commonjs",
        "noImplicitAny": true,
        "outDir": "./build/",
        "preserveConstEnums": true,
        "removeComments": true,
        "sourceMap": true,
        "target": "ES5"
    },
    "include": [
        "./src/**/*"
    ]
}
```

安装types

```javascript
npm i @types/react @types/react-dom -D
```

把index.js 改成index.tsx ，运行



脚手架想要调出webpack,必须先git一下，再yarn eject.





