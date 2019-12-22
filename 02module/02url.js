/*
    url构成 http://www.baidu:8888/list?name=malin&adr=guangxi#231
        * 协议 ： http://
        * 子域名：/www
        * 主域名：baidu
        * 端口号：8888
        * 目录：list
        * 参数：name=malin&adr=guangxi
        * 哈希值(锚点) ：#231
*/

/*
    url模块：对象，不记得学会查看api
        * 属性
            * href： 解析前的完整原始 URL，协议名和主机名已转为小写
            * search: 查询对象，即：queryString，包括之前的问号“?”
        * 方法
            * url.parse(url, boolean)：把url信息转成对象
            * url.format(params)：对象转字符串，url.parse的反过程
            * url.resolve(): 以一种 Web 浏览器解析超链接的方式把一个目标 URL 解析成相对于一个基础 URL
*/

const url = require('url');

let str = 'http://www.baidu:8888/list?name=malin&adr=guangxi#231';
let data = url.parse(str, true); //true：帮你把参数提取出来并转成对象  {name:malin,adr:guangxi}
let obj = url.parse(str, true).query; //true：帮你把参数提取出来并转成对象  {name:malin,adr:guangxi}
console.log(obj);
console.log(obj.name);


let str2 = url.format(data); //把对象拼接成字符串。但是要按照指定的格式声明对象
console.log("str2:" + str2);

let str3 = url.resolve('http://www.qq.com/', '/list/list.html'); //合并网址
console.log(str3);