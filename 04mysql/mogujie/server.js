//主入口

const express = require('express');

//文件模块：直接require引入就能用
const { PORT } = require('./config.json');

// console.log(PORT);

//开启服务器
const app = express();//返回对象app
let allRouter = require('./router/index');//这里可以写index。也可以不写，因为index是默认的。导入模块

//开启静态资源服务器
app.use(express.static('./'));

app.use(allRouter);//引入总的路由，allRouter是一个中间件

//路由的分配

//监听端口
app.listen(PORT, () => {
    console.log('服务器已开启，请访问localhost:1912');
});