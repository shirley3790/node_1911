/*
    搭建静态资源服务器：

        网站的静态资源：
            * html
            * css
            * 图片 ： 本地相册
            * js
            * 音频
            * 视频
*/

//用到四个模块
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const mime = require('./js/mime');//该模块下包含很多常用的数据类型对应的content-Type

//1.开启服务器
http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    let ext = path.extname(pathname).slice(1);
    // console.log(pathname);
    // console.log(ext);
    // console.log(mime[ext]);//获取对象的属性值
    pathname = path.join(__dirname, pathname);
    fs.readFile(pathname, (err, data) => {
        if (req.url === '/favicon.ico') return;//阻止请求favicon.ico文件
        if (err) throw err;
        // res.end('欢迎访问服务器');//把一个字符串返回给前端
        //设置响应头
        res.writeHead(200, { 'content-Type': `${mime[ext]};charset=utf-8` });
        // res.end('欢迎访问服务器');//返回数据并结束  over
        res.end(data);//返回数据并结束  over  必须写end
    });
    // res.end('欢迎访问服务器');

}).listen(10111, () => {
    //成功开启服务器了就会执行这里的代码
    console.log('服务器已经开启，请访问：http://localhost:10111');
});


