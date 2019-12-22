# nginx 基本介绍

## nginx是什么，做什么

介绍

https://baike.baidu.com/item/nginx/3817705?fr=aladdin

Nginx是一款[轻量级](https://baike.baidu.com/item/轻量级/10002835)的[Web](https://baike.baidu.com/item/Web/150564) 服务器/[反向代理](https://baike.baidu.com/item/反向代理/7793488)服务器及[电子邮件](https://baike.baidu.com/item/电子邮件/111106)（IMAP/POP3）代理服务器，在BSD-like 协议下发行。其特点是占有内存少，[并发](https://baike.baidu.com/item/并发/11024806)能力强，事实上nginx的并发能力在同类型的网页服务器中表现较好，中国大陆使用nginx网站用户有：百度、[京东](https://baike.baidu.com/item/京东/210931)、[新浪](https://baike.baidu.com/item/新浪/125692)、[网易](https://baike.baidu.com/item/网易/185754)、[腾讯](https://baike.baidu.com/item/腾讯/112204)、[淘宝](https://baike.baidu.com/item/淘宝/145661)等。能支持高达50000的并发数量。



## 反向代理

### 反向代理和正向代理

什么是正向代理

nginx 可以反向代理，也可以正向代理

正向代理，是在用户端的。比如需要访问某些国外网站，我们可能需要购买vpn。

并且**vpn是在我们的用户浏览器端设置的**(并不是在远端的服务器设置)。

浏览器先访问vpn地址，vpn地址转发请求，并最后将请求结果原路返回来。

详细图解

![mark](http://cdn.cs1024.com/images/20191221/JKHVBgsA3bv3.png?imageslim)



有正向代理，就有反向代理。

**反向代理是作用在服务器端的，是一个虚拟ip(VIP)**。对于用户的一个请求，会转发到多个后端处理器中的一台来处理该具体请求。，反向代理需要在服务器配置，客户端不需要配置。

用了反向大力的话，只是暴露了代理服务器的地址，并没有暴露真实的ip地址

![mark](http://cdn.cs1024.com/images/20191221/EcigWkOLXEVi.png?imageslim)





## 动静分离

为了加快网址的解析速度，可以把原来动态的页面和静态的页面由不同的服务器解析，加快网站访问速度，降低单个服务器的压力。

![mark](http://cdn.cs1024.com/images/20191221/GytpnkovpgD0.png?imageslim)

一般我们现在把静态资源放在cdn，cdn上面，比如国内的七牛云，阿里云

CDN的全称是Content Delivery Network，即[内容分发网络](https://baike.baidu.com/item/内容分发网络/4034265)。CDN是构建在现有网络基础之上的智能虚拟网络

https://baike.baidu.com/item/CDN/420951?fr=aladdin



## 负载均衡

最原始的服务器处理请求的方法

客户端发送请求，服务器接收请求并处理请求，再返回数据给客户端

并发小的时候用

但是随着并发增大，请求的数量大，服务器会性能问题。

怎么办?

提升服务器配置，cpu加大 i5->i7。但是有限，但是没法解决，

一般处理的话

所以用多台服务器。服务器集群，（很多的服务器）

负载均衡的定义：我们可以增加服务器，把请求分发到各个服务器上面，将原先的集中在一台服务器上的请求，分散到多台服务器。

![mark](http://cdn.cs1024.com/images/20191221/ubY2EMvqvRW8.png?imageslim)



# nginx的安装

nginx 是一个服务器要用的软件，我们如何在服务器上安装nginx,

一般我们服务器用的是linux操作系统

在安装nginx前首先要确认系统中安装了**gcc、pcre-devel、zlib-devel、openssl-devel**。

```
yum -y install gcc pcre-devel zlib-devel openssl openssl-devel
```

接下来下载nginx

nginx下载地址：https://nginx.org/download/

下载“nginx-1.9.9.tar.gz”，移动到/usr/local/下。

```javascript
## 解压
tar -zxvf nginx-1.9.9.tar.gz

##进入nginx目录
cd nginx-1.9.9
## 配置
./configure --prefix=/usr/local/nginx

# make
make && make install
```

启动nginx,到nginx目录下的sbin里面，

```javascript
./nginx   // 启动nginx
```

看进程

```javascript
ps -ef | grep nginx  
```

看配置文件

```javascript
nginx.conf
```

访问一下



可能需要关闭防火墙

https://blog.csdn.net/qq_35971258/article/details/79318842

vmware 安装

https://www.jianshu.com/p/552179808ebf

centos 7 linux下载

http://mirrors.163.com/centos/7/isos/x86_64/



需要开启linux的22端口

https://jingyan.baidu.com/article/e3c78d641741567c4c85f5d9.html

```javascript
service sshd  status
service sshd start // 开启22端口
```



root 免密码登录

https://blog.csdn.net/qq_41494853/article/details/84064936



# nginx 常用命令

切换到/usr/local/nginx

查看版本

```nginx
./nginx -v
```

启动nginx

```javascript
./nginx
```

关闭nginx

```javascript
./nginx -s stop
```

重启nginx

```javascript
./nginx -s reload   // 修改了配置文件，我们一般需要重新加载
```

# nginx 配置文件



配置文件的位置

nginx安装了之后的conf文件夹里的nginx.conf

```nginx
#user  nobody;
worker_processes  1; // nginx 处理并发的配置，这个越大，nginx 可以处理并发的数量越多，但是受到硬件的制约，就是工作进程的数量 

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;  // nginx 支持的最大连接数，
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  logs/access.log  main;    // 用户访问日志

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;  // 长链接超时

    #gzip  on;  // 是否开启gzip 压缩，开启了之后，传输的数据会被压缩，传输的速度更快了

    server { 
        listen       80;   // 表示监听的端口 http默认是80端口，当然你也可以自己修改端口号
        server_name  localhost; // 主机名称

        #charset koi8-r;

        #access_log  logs/host.access.log  main;
		# 路径中包含/ ,我们到html这个文件夹下面，先找到index.html，找不到再找index.htm
        location / {
            root   html;
            index  index.html index.htm;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}
}
```

分为3部分

## 第一部分：全局块

全局块

设置一些全局的配置，配置文件开始到event之间的内容

影响nginx整体运行的一些东西



## 第二部分：event块

event块

影响nginx 服务器和用户网络的链接





## 第三部分：http块



http 块（最主要的）

配置反向代理，负载均衡，动静分离

http块包含http全局块和server块

### http全局块

包括一些http的全局配置

### server块

每一个server块都是一台虚拟主机，对用户来说，就是独立的服务器，

里面由全局的server 块，和location块

#### 全局server块

#### location块







# nginx 反向代理的例子1

## 实现的效果

![mark](http://cdn.cs1024.com/images/20191221/Rk7yP8iAF4wS.png?imageslim)

浏览器输入自己服务器的ip地址跳转到www.baidu.com这样的效果,

在location 里面配置proxy_pass https://www.baidu.com





# nginx 反向代理的例子2

效果

ip/taobao/ 当访问的路径中有taobao。就 转发到淘宝 ，

ip/baidu/  当访问的路径中有baidu。转发到百度去

```javascript
# ~ 表示正则匹配 
location ~ /taobao/{
        proxy_pass https://www.taobao.com;
}
location ~ /baidu/{
        proxy_pass https://www.baidu.com;
}
```







# nginx 负载均衡例子

## 效果

访问 ip:80端口，一会转发到tomcat的8080端口上，一会儿转发到tomcat的8081端口上面

## 步骤

先启动2个tomcat的服务，一个监听8080端口，一个监听8081端口

接着改写http模块

```nginx
http{
     upstream cs1024server{
        server ip:port;
        server ip:port;
    }
    server{
        listen       80;   // 表示监听的端口 http默认是80端口，当然你也可以自己修改端口号
        server_name  localhost; // 主机名称 ip或者域名
		 location / {
            proxy_pass http://cs1024server;
        }
    }
}
```

## 分配策略

### 轮询（默认）

每个请求按时间顺序分配到不同的后端服务器，如果后端服务器挂掉，就自动删除。

### weight

weight 表示权重，默认是1，权重越大，分到的请求越多。

### ip_hash

每个ip都生成一个固定的hash，每个访问ip都固定访问一个服务器

```nginx
upstream cs1024server{
    	ip_hash
        server ip:port;
        server ip:port;
    }
```

### fair

按后端响应的时间分配，响应的时间越短，有限分配

```nginx
upstream cs1024server{
    	fair
        server ip:port;
        server ip:port;
    }
```

# nginx 动静分离的例子

## 什么是动静分离

见上文

## 过期时间 expires 

expires 可以给资源设置一个过期时间，设置浏览器缓存的 ，比如设置成30d，表示30天内访问这个url地址，发送一个请求，对比服务器该文件最后更新时间没有变化，则不会从服务器抓取，返回304，如果有修改，那么重新从服务器下载，返回状态码200.   expires适合不经常变得的资源。如图片

## 例子

新建个data目录，里面由www目录和images目录，www里面放index.html。images里面放一张图片。

```nginx
location /www/ {
    root /data/  # 到目录 /data/下面找www目录
        index index.html index.htm
}
location /images/ {
    root /data/  # 到目录 /data/下面找www目录
        # expires 1d;  # 过期时间1天
        autoindex on; # Ngin允许列出整个目录的
}
```

# nginx 配置高可用集群

先看反向代理的例子， nginx 会宕机掉，那反向代理就不行了。

高可用

用2台nginx服务器，主nginx和辅助nginx，主nginx挂掉了，自动切换到备份的nginx。



先安装一个keepalived 软件，他类似于路由，可以检测当前nginx是不是down掉了，down掉了就换到备份的nginx

对外提供一个虚拟的ip，把虚拟ip绑定到2个nginx服务器上，图解

2台nginx 服务器，分别安装keepalived，安装好之后，在/etc目录下面

```nginx
yum install keepalived -y
```

安装nginx

上面有

修改keepalived配置文件



# nginx 原理

![mark](http://cdn.cs1024.com/images/20191221/HSUBsfrVfgR5.png?imageslim)



master 和 worker

nginx启动后，有2个进程，分别是 master 主进程，和worker进程

```nginx
ps -ef | grep nginx
```

![mark](http://cdn.cs1024.com/images/20191221/sSqiwB2aVXux.png?imageslim)

master是老板分配任务的，给worker 干活的，执行者。

![mark](http://cdn.cs1024.com/images/20191221/tOAqijTAorzC.png?imageslim)



1个master多个worker的好处

- 方便做nginx的热部署 nginx -s reload
- 每个worker都是独立的进程，一个worker挂掉了不影响另外的worker的工作，服务器仍然可用

## 设置多少个worker

和cpu数量一样，假如是8核的cpu，就设置8个worker

```nginx
worker_processes  8;
```

官网 http://nginx.org/


