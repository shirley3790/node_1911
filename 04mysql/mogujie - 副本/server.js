//主入口

const express = require('express');
const fs = require('fs');

//文件模块：直接require引入就能用
const { PORT } = require('./backend/config.json');


//开启服务器
const app = express();//返回对象app
let allRouter = require('./backend/router/index');//这里可以写index。也可以不写，因为index是默认的。导入模块

//开启静态资源服务器
app.use(express.static('./'));

//路由的模式改成history后需要配置一下，否则刷新就找不到主页index.html
app.use((req, res) => {
    let content = fs.readFileSync('./index.html');
    fs.set('Content-Type', 'text/html; charset=utf-8');
    res.send(content);
});


app.use(allRouter);//引入总的路由，allRouter是一个中间件

//路由的分配

//监听端口
app.listen(PORT, () => {
    console.log('服务器已开启，请访问localhost:1911');
});