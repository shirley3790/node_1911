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

//1.开启服务器
http.createServer((req, res) => {
    // let str = req.url;
    // console.log(str);// /img/1.jpg 绝对路径：d:/list/node/02module/img/1.jpg
    // console.log(__dirname);//当前文件所在目录的绝对路径
    // console.log(__filename);//当前文件所在绝对路径
    // let newpath = path.join(__dirname, str);//拼接得到一个文件所在的绝对路径
    // console.log(newpath);
    // str = '.' + str; 
    // console.log(str);
    fs.readFile('./img/tiantian.jpg', (err, data) => {
        if (req.url === '/favicon.ico') return;//阻止请求favicon.ico文件
        if (err) throw err;
        // res.end('欢迎访问服务器');//把一个字符串返回给前端
        //设置响应头
        res.writeHead(200, { 'content-Type': 'image/jpeg' });
        // res.end('欢迎访问服务器');//返回数据并结束  over
        res.end(data);//返回数据并结束  over
    });
    // res.end('欢迎访问服务器');

}).listen(10086, () => {
    //成功开启服务器了就会执行这里的代码
    console.log('服务器已经开启，请访问：http://localhost:10086');
});
