module.exports = {
    title: '行者课堂',
    description: '可能是最好的零基础前端学习平台',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/images/logo_small.png' }],   // 增加一个自定义的 favicon(网页标签的图标),在public下面的images文件夹里面
    ],
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        nav:[
            { text: '介绍前端1', link: '/introduction/' }, // 内部链接 以docs为根目录
            { text: '介绍前端2', link: '/introduction/' }, // 内部链接 以docs为根目录
            { text: '介绍前端3', link: '/introduction/' }, // 内部链接 以docs为根目录
        ],
        sidebar:{
            '/introduction/':[
                '',  //默认访问readme.md, h2标题会在左边
            ],
            '/vuepress/':[
                '',  //默认访问readme.md, h2标题会在左边
            ]
        }
    }
};