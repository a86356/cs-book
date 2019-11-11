## 什么是vuepress

- 静态博客，无后端
- markdown语法

## 准备工作

- 前置知识: 基础的nodejs,npm,git知识

- 安装nodejs ，node的版本必须大于8.0 （ http://nodejs.cn/ ） 别用中文路径

- 安装git （ https://git-scm.com/ ）别用中文路径

- 安装 vuepress

  ```java
  npm install -g vuepress
  ```

## 快速开始

- 新建文件夹`project`

  ```javascript
  npm init -y
  ```

- 在project 新建 docs，

  ```
  -docs
  	-.vuepress
  		-public
  			-images
  		 config.js
      README.md
  ```

  `config.js`

  ```javascript
  module.exports = {
      title: '行者课堂',
      description: '可能是最好的零基础前端学习平台',
  }
  ```

  `README.md`

  ```javascript
  # 我的首页 ，作者行者
  ```

- 配置`package.json`

  ```java
   "scripts": {
      "dev": "vuepress dev docs",
      "build": "vuepress build docs"
    },
  ```

-  运行

  ```javascript
  npm run dev
  ```



## 首页搭建

-  修改`readme.md`

  ```javascript
  ---
  home: true
  heroImage: /images/logo_small.png
  actionText: 查看文档 →
  actionLink: /zh/guide/frontend.md
  features:
  - title: 简洁至上
    details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
  - title: Vue驱动
    details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
  - title: 高性能
    details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
  footer: MIT Licensed | Copyright © 2018-present Evan You
  ---
  ```

## 搭建导航

- 在`config.js`添加

  ```javascript
  themeConfig: {
          nav:[
              { text: 'html', link: '/html/' },//内部链接 以docs为根目录,默认文件是README.md
              { text: 'css', link: '/css/' }, 
              { text: 'js', link: '/js/' }, 
              { text: 'cs1024', link: 'http://cs1024.com' }, 
                // 下拉列表
              // {
              //     text: 'GitHub',
              //     items: [
              //         { text: 'GitHub地址', link: 'https' },
              //         {
              //             text: '算法仓库',
              //             link: ''
              //         }
              //     ]
              // }
          ],
      }
  ```

  

## 搭建侧边栏

```javascript
  themeConfig: {
        nav:[
            { text: '介绍前端1', link: '/introduction/' }, // 内部链接 以docs为根目录
            { text: '介绍前端2', link: '/introduction/' }, // 内部链接 以docs为根目录
            { text: '介绍前端3', link: '/introduction/' }, // 内部链接 以docs为根目录
        ],
        sidebar:{
            '/introduction/':[
                '',  //默认访问readme.md, h2标题会在左边
                'first'  // 访问 /docs/introduction/first.md
            ]
        }
    }
```

## 其他配置

	1. zhangsan
 	2. slis 

### 配置favicon.icon



```javascript
module.exports = {
    title: '行者课堂',
    description: '可能是最好的零基础前端学习平台',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/images/logo_small.png' }],   // 增加一个自定义的 favicon(网页标签的图标),在public下面的images文件夹里面
    ],
}
```

### 自定义样式



去网站   `prismjs.com`  下载样式

去`.vuepress/styles/index.styl` 里面复制

```css
/* PrismJS 1.17.1
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript */
/**
 * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML
 * Based on https://github.com/chriskempson/tomorrow-theme
 * @author Rose Pritchard
 */

code[class*="language-"],
pre[class*="language-"] {
  color: #ccc;
  background: none;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;

}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: .5em 0;
  overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: #2d2d2d;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: .1em;
  border-radius: .3em;
  white-space: normal;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #999;
}

.token.punctuation {
  color: #ccc;
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted {
  color: #e2777a;
}

.token.function-name {
  color: #6196cc;
}

.token.boolean,
.token.number,
.token.function {
  color: #f08d49;
}

.token.property,
.token.class-name,
.token.constant,
.token.symbol {
  color: #f8c555;
}

.token.selector,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin {
  color: #cc99cd;
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable {
  color: #7ec699;
}

.token.operator,
.token.entity,
.token.url {
  color: #67cdcc;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.token.inserted {
  color: green;
}
```

## 部署上线

```javascript
npm run build
```

再找到dist目录下面的所有东西，扔到服务器上面去

`ngxin.conf`的配置

```
server {
    root   /webserver/www/book.cs1024.com;
    listen       80 ;
    server_name  book.cs1024.com ;

    location /{
        root /webserver/www/book.cs1024.com;
        index index.html ;
        try_files $uri $uri/ /index.html last;
    }
}
```





