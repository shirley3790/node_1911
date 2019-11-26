/*
    实现下载文件
*/

const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

//1.开启http服务器
http.createServer((req, res) => {
    // if (req.url === '/favicon.ico') return;//阻止请求favicon.ico文件
    let pathname = url.parse(req.url).pathname;
    // console.log(pathname);//获取网页文件路径：img/g1.jpg
    // console.log(__dirname);//获取当前js所在路径：D:\code\code for three\code-of-node\nodejs\01node
    let realpath = path.join(__dirname, pathname);//把两个路径拼接好：D:\code\code for three\code-of-node\nodejs\01node\img\g1.jpg,有了这个路径，我们就可以根据路径读取文件了，读到的文件再响应给前端并渲染到页面中。
    // console.log(realpath);

    //文件的读取
    fs.readFile(realpath, (err, data) => {

        res.writeHead(200, { 'Content-Type': 'xx/xx' });//写上不识别的Content-Typ，前端访问服务器的时候，就是下载对应资源
        // console.log(data);
        res.end(data);
    });
    // res.end('结束');
}).listen(3009, () => {
    console.log('启动服务器，端口为3009');
});