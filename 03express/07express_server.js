/*
    express：类似jq和js的关系，提高开发效率，搭建服务器非常方便。
        * 搭建服务器
        * 搭建静态资源服务器
        * 路由
        * get和post
        * 服务器代理：帮前端获取资源  cors  服务器代理
*/

const express = require('express');//函数
//开启服务器
const app = express();//调用express函数得到一个对象：属性 方法

//开启静态资源服务器
app.use(express.static('./'));//express.static()中间件

//端口号的监听
app.listen(5566, () => {
    console.log('服务器开启了，请访问localhost:5566');
});

