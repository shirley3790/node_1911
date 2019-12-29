//1、引入express做web服务器
const express = require('express');
const proxy = require('http-proxy-middleware');

//2、开启服务器
const app = express();

//3.静态资源服务器开启 借助express.static
app.use(express.static('./'));

//4.1912端口下的数据接口  后端实现：jsonp接口开放
app.get('/jsonp', (req, res) => {
    let {
        callback
    } = req.query; //{callback : 'getdata'}
    // console.log(callback);
    let data = {
        username: 'malin',
        password: 123456,
        gender: 'female'
    };
    res.send(`${callback}(${JSON.stringify(data)})`); //getdata(data)
    // res.send(`666`);//getdata(data)
});

//把这个路由配置放在所有路由的前面，方便调用next操作
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,PATCH,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") { //特殊请求：发送了请求头的那些请求
        res.sendStatus(200); /*让options请求快速返回*/
    } else {
        next();
    }
})

//5.cors 开放这里的接口
app.get('/cors', (req, res) => {
    let data = '准备过春节啦，倒计时开始';
    // res.header('Access-Control-Allow-Origin', '*');
    res.send(data);
});

//6.服务器代理 借助第三方模块

//新浪接口代理
//https://m.weibo.cn/api/config/list
//发送请求：http://localhost:1912/sinaapi/api/config/list
//代理：https://m.weibo.cn/api/config/list
app.use('/sinaapi', proxy({
    "target": "https://m.weibo.cn", //你要代理的网址
    "changeOrigin": true,
    "pathRewrite": { //重写路径
        "^/sinaapi": "/"
    }
}));

app.listen(1913, () => {
    console.log('服务器已经开启，请访问1913端口');
});