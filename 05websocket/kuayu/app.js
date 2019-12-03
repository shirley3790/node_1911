//1、引入express做web服务器
const express = require('express');

//2、开启服务器
const app = express();

//3.静态资源服务器开启 借助express.static
app.use(express.static('./'));


app.listen(1911, () => {
    console.log('服务器已经开启，请访问1911端口');
});