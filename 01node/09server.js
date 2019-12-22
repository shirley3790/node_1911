//需求：开启一个服务器，前端可以和后端进行简单的交互

//开启服务器用到一个原生模块：http
const http = require('http');

//createServer是大写的S，小心。
let app = http.createServer((req, res) => { //1.req:请求request  2.res：响应，response
    //开启服务器
    //返回一个响应给客户端 text/plain：纯文本；text/html：html标签
    //静态的网站里面有什么：html、css、js、图片(各种格式)
    res.writeHead(200, {
        'content-Type': 'text/html;charset=utf-8'
    }); //设置响应头：设置内容类型和编码
    res.write('good good study,day day up!');
    res.write('<h1>我们的nodejs之旅</h1>');
    res.end('结束'); //响应结束后一定要有end结束
});

app.listen(2006, () => {
    //localhost  和 127.0.0.1 是一样的
    console.log('服务器已经开启，请访问http://localhost:2006');
});