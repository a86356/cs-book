# git教程

# git介绍

git是啥？

版本控制系统，

什么是“版本控制”？ 版本控制是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。 在本书所展示的例子中，我们对保存着软件源代码的文件作版本控制，但实际上，你可以对任何类型的文件进行版本控制

因为代码不可能一次写完，代码管理

没有版本控制的请求

1201v1 //增加了xx功能

1201v2 //增加了xx功能

1201v3 //增加了xx功能

修改必须保留原来的版本

多人合作，版本覆盖问题，代码都不知道是谁的了

出现了git这个版本控制工具，可以让我们更好管理代码



# git 基础

3棵树

工作区：写代码的

暂存区：临时存储代码的

本地仓库：存储历史版本的



git中的3棵树

![mark](http://cdn.cs1024.com/images/20191229/4k0kLCsT2WMo.png?imageslim)

工作流程

1.在工作区添加，修改文件，

2.将需要版本控制的文件存放到暂存区

3.将暂存区的文件提交到git本地仓库



git的操作所有操作几乎是本地的，除非你提交文件到git服务器，或者从git服务器下载文件



# git和代码托管中心

代码托管中心

自建：gitlab   https://git.lug.ustc.edu.cn/users/sign_in   就是你自己搭建一个代码托管中心，

用自己的服务器

用别人的：

github https://github.com/，

码云  https://gitee.com/

别人提供的代码托管服务，不用自己的服务器



git是操作代码托管中心文件的一种方式



代码托管中心有什么用？

维护远程的仓库



# 本地仓库和远程仓库

![mark](http://cdn.cs1024.com/images/20191230/a3wyEAGs63tw.png?imageslim)

![mark](http://cdn.cs1024.com/images/20191230/VM3scIFzFy4U.png?imageslim)



# 安装git

下载地址

https://git-scm.com/



linux 安装

```javascript
sudo yum install git
```

mac 安装

http://git-scm.com/download/mac



# 配置git

初次使用需要先配置

```java
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

查看

```javascript
git config --list
```

git有什么用

记录你每次版本的变动

基本上我们都是用命令行工具去弄git的

# 初始化git

创建git （显示隐藏文件）

```javascript
git init
```

.git记录的git如何管理版本的，不要删了，不要修改

# 基本操作

## 文件提交本地仓库

新建readme.md (一般做项目都会有，一般是堆项目的介绍)

把readme.md提交到暂存区，

```javascript
git add filename
```

把文件从暂存区返回到工作区

```javascript
git restore --staged file 
```

把暂存区的readme.md提交到git仓库

```javascript
git commit -m"add  readme.md" // -m 后面是本次提交的备注
```

对比上面的流程



## 查看文件状态

命令

```javascript
git status
```

master 分支，

![mark](http://cdn.cs1024.com/images/20191229/WHuo5OrBCoRQ.png?imageslim)



导致工作区的文件与暂存区的文件不一样了

![mark](http://cdn.cs1024.com/images/20191229/H73mp4vHthxp.png?imageslim)

```javascript
git add file  // 更新stage的版本
```

添加到stage,

![mark](http://cdn.cs1024.com/images/20191229/9bxc3RicY5Af.png?imageslim)

再添加到git本地仓库

![mark](http://cdn.cs1024.com/images/20191229/YUNiu2vJAGVB.png?imageslim)

working,stage,git仓库的都是独立的文件夹，

![mark](http://cdn.cs1024.com/images/20191229/y12dDfkdIAif.png?imageslim)

## 查看提交记录

```javascript
git log
git log --oneline
按q退出
```

![mark](http://cdn.cs1024.com/images/20191229/IYRc8nMBqcEp.png?imageslim)

sha1 的值

账号+内容+时间计算出来的。



为啥需要这个？

sha-1是一种密码学的哈希算法，此算法的特点是，如果被加密的内容相同，得出的sha-1值也是相同，如果被加密的值不同，那么得到的sha-1也绝对不会相同，于是可以利用sha-1值唯一标识指定内容。

![mark](http://cdn.cs1024.com/images/20191229/4hvzU5VJelfP.png?imageslim)





## 版本前进后退

![mark](http://cdn.cs1024.com/images/20191229/4cFg8vmCLNUc.png?imageslim)

下图表示git仓库的图示，也就是第3棵树里的内容 用git log 看提交的版本记录

![mark](http://cdn.cs1024.com/images/20191229/4hvzU5VJelfP.png?imageslim)



**git checkout [commit] **

重置某个commit的指定文件到暂存区和工作区

**git revert [commit]**

用[commit]所对应节点的提交，创建一个新的反转的提交

**git reset [commit]**  (别用)

重置为[commit]所对应节点的提交（通过移动分支指针和HEAD指针实现），如果不指定[commit]则默认为HEAD
--soft 工作区和暂存区不变，重置仓库
--mixed 工作区不变，重置暂存区和仓库，此为默认选项
--hard 工作区、暂存区和仓库全部重置，修改完全丢失

统一用一种 **git checkout**



## 查看本版本的不同点

```javascript
gitk [filename]
```

github看分支



# head和master的不同



# 分支

我们默认是再master分支上

![mark](http://cdn.cs1024.com/images/20191229/XwQT36NQ0X3b.png?imageslim)



## 基本操作

创建一个新的分支，比如加功能，加功能一般叫add new feature

```javascript
git branch feature-1
```

查看所有分支

```javascript
git branch -a
```

切换分支

```javascript
git checkout branchname
```

再新分支上创建，git add .git commit 不影响其他分支

删除分支

```javascript
git branch -D branchname
```

创建并切换分支

```javascript
git checkout -b feature-a
```

## git 的head

https://blog.csdn.net/bdss58/article/details/40537859

https://www.jianshu.com/p/4219b6f62ce3

## 合并分支

先切换到要合并到的分支，我先切换到主分支

```hava
git checkout master
```

接下来合并feature-a到master分支上面

```javascript
git merge feature-a
```



合并的时候存在冲突怎么解决？

比如master上，先分出一个分支,feature-a

master修改a。再add ,commit 

再切换到feature-a,再修改a，再add.commit

再切换到master, 执行

```javascript
git merge feature-a
```

这个时候就有冲突了

修改文件，重新

```javascript
git add .
git commit
```

即可

# github

基本介绍

全球最大的代码托管中心，很有优秀的开源软件都在上面



## 创建账号

https://github.com/

## 创建本地库

## 创建远程库



## 新建项目

### 把本地的项目推送到github

先分别把建立本地库，github远程库

先添加远程库的地址，使用http协议

```javascript
git remote -v 看项目的远程地址
git remote add origin https://github.com/ // origin 是后面地址的别名
```

推送

```javascript
git push origin master // 推送远程服务器的master分支上
git push  //默认是推送到master分支
```

### 下载已有的github项目

加了一个开发者，或者你换了电脑

```javascript
git clone  xx
```

默认创建好远程地址的别名

自动初始化一个git项目

把远程代码复制下来

### 修改本地库并提交

先添加成员的账号，另外别人会收到链接

![mark](http://cdn.cs1024.com/images/20191230/rgWrkNj9QTyt.png?imageslim)



```javascript
git add .
git commit -m"i change some thing"
git push origin master  // 输入换了个人的账号 git push和git push origin master是一样的
```

### 从远程库拉取

```javascript
git fetch origin master //下载远程的master分支，但不会修改本地的分支,git fetch 远程别名 远程分支

//查看下载的远程分支是怎么样的
git checkout origin/master  //查看远程的东西都要带上别名 ,这里是origin

git merge origin/master //合并远程的分支  git merge 远程别名/远程分支
```

#### git fetch和git pull的不同

git在本地会保存两个版本的仓库，分为本地仓库和远程仓库。
1、本地仓库就是我们平时 add、commit 的那个仓库。
2、远程仓库可以用git remote -v查看（这里的远程仓库是保存在本地的远程仓库，等同于另一个版本，不是远程的远程仓库）。

说说 fetch 和 pull 的不同:

fetch 只能更新远程仓库的代码为最新的，本地仓库的代码还未被更新，我们需要通过 git merge origin/master 来合并这两个版本，你可以把它理解为合并分支一样的。

pull 操作是将本地仓库和远程仓库（本地的）更新到远程的最新版本。

如果想要更加可控一点的话推荐使用fetch + merge。

### 解决协作冲突

如果远程库被人改了，你的版本并不是最新的，你是推送不上去的

开虚拟机演示下

你必须先拉取，再解决冲突

```javascript
git fetch origin master
git merge origin/master
```

### 别人对你提bug

用fork和pull request 处理.

看上面的图

```javascript
fork
```

需要代码的主管人，需要审核代码

# ssh登录

http需要用户名密码，可能记不住

可以用ssh登录

```javascript
cd ~  //进入到用户目录
rm -rf .ssh/   // 先删除之前的ssh目录
```

创建ssh

```javascript
ssh-keygen -t rsa -C github账号名
```

创建好了之后，会有.ssh目录，我们进入这个目录

```javascript
cd .ssh/
```

看文件

```javascript
ls
```

看id_rsa.pub的内容复制

```javascript
cat id_rsa.pub
```

![mark](http://cdn.cs1024.com/images/20191230/Liu3fK4xWxkH.png?imageslim)

查远程别名

```javascript
git remote -v //http
```

新建ssh的远程地址

```java
git remote add origin_ssh ssh地址
```

再看

```javascript
git remote -v //http
```

再推送

```javascript
git push origin_ssh master
```

# 分支实战

![mark](http://cdn.cs1024.com/images/20191230/kg0EHsXO98q9.png?imageslim)

​						小张																老张													老张

审核代码，合并代码都是在本地操作，不是在远程库操作的

# gitignore

gitignore的文件不会提交到github上面

```javascript
.DS_Store
node_modules/
/dist/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln

```



