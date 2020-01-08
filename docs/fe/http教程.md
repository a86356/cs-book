https://www.bilibili.com/video/av28681865?t=214&p=2
# http 协议

# 简介

## 什么是协议

协议： 我们生活中的协议就是一种规定，人们都认可的。就好比是中文交流，你说中文，我也说中文，我们就能沟通了。

http协议：互联网上的计算机相互沟通的方法，类似我们人类的语言。

## 为什么会出现http协议？

因为计算机之间要通信，传递信息。比如我给你发送qq消息，微信消息。

而计算机有不说中文，那他们怎么沟通？

就有人提出了一个http协议这个概念，让互联网上所有计算机都遵从的一种通信协议，那他们之间就能够相互通信了

## 计算机协议的种类

http,tcp/ip.ftp,stmp

## http协议是怎么工作的

1.建立链接	

2.发送请求

3.响应数据

4.断开链接

![mark](http://cdn.cs1024.com/images/20191228/j0i2m92hON2h.png?imageslim)

# http 包含什么

发送请求，就是发送了一个http 请求，响应请求，就是发送了一个http响应

http请求和http响应长什么样子？

看百度的http请求和响应



http 请求信息和响应信息的格式

# http请求

- 请求行
- 请求头信息
- 请求主体信息



请求行，分为3部分

请求方法，请求路径，所用的协议



请求方法： get/post/delete/put

请求路径：http://www.baidu.com

所用的协议：http

利用fiddler抓包 （抓包，就是抓取发送的请求和响应的请求）

GET（请求方法）  https://www.baidu.com/ （请求路径）    HTTP/1.1（所用的协议）

fiddler 下载地址

https://www.telerik.com/fiddler



加个空格，

头信息， 很多，后面会具体讲

```http
Host: www.baidu.com
Connection: keep-alive
Cache-Control: max-age=0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36
Sec-Fetch-User: ?1
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3
Sec-Fetch-Site: none
Sec-Fetch-Mode: navigate
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9
Cookie: BD_UPN=12314753; BAIDUID=5FB1B496BF5A45E6C28B98A379DDF31F:FG=1; PSTM=1575632735; BIDUPSID=ED4D5DE1438DD7C6D67C14C295458537; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598; H_WISE_SIDS=138597_136722_137754_137929_139403_138716_125579_120167_133995_138878_137985_137690_131246_132551_137746_118895_118868_118845_118835_118796_136687_107314_138883_136430_122035_136863_138146_138114_139176_139592_136194_125086_137105_139275_139398_133847_137735_138343_137468_138564_131424_138010_137960_139246_137782_136413_110085_138554_139458_127969_139161_138838_139512_139409_128196_138313_137187_136635_138426_139159_138943_139676_139222; BDUSS=JFazdHeUtoZXpxS0toSG15QTU0VkQ4dDl5Y2NIM2VST1h3aGtaR29TZ3RGaVJlSVFBQUFBJCQAAAAAAAAAAAEAAADHSmDQd3owMTA3NjY2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC2J~F0tifxdNH; BD_HOME=1; delPer=0; BD_CK_SAM=1; PSINO=3; pgv_pvi=2330091520; pgv_si=s3439075328; BDRCVFR[feWj1Vr5u3D]=mk3SLVN4HKm; H_PS_PSSID=1449_21124_30211_30283_30512; H_PS_645EC=f19bw7%2BK9EpsY5jcLQhm6lkmlPtGndfHJpUrsL26wqNI69%2FDVcNXVnco3dvXqJ4jkMEY; COOKIE_SESSION=15151_0_9_3_39_7_0_0_9_6_9_0_15057_0_14_0_1577532820_0_1577532806%7C9%2310051_738_1577438443%7C9; sug=3; sugstore=1; ORIGIN=0; bdime=0
```



空一行

主题信息



# http响应

看fiddler抓包

- 响应行
- 响应头信息
- 响应主体信息





响应行 ：协议版本 状态码 状态文字

HTTP/1.1 200 OK



# 分析postman的请求



浏览器能发送http协议，http协议只能浏览器发送吗？

http协议仅仅是一种规范，只要你满足了这种协议，什么工具都能够发送http协议



比如利用postman





postman请求 ，看fiddler 



# http方法和状态码

方法: (常用的是get,post) ，使用下head通过postman

https://www.runoob.com/http/http-methods.html

状态码

https://www.runoob.com/http/http-status-codes.html



图片304，就是etag有没有变，没有变就返回304















