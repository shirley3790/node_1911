//需求：开启一个服务器，前端可以和后端进行简单的交互

//开启服务器用到一个原生模块：http
const http = require('http');

let app = http.createServer((req, res) => {
    //开启服务器
    //返回一个响应给客户端 text/plain：纯文本；text/html：html标签
    //静态的网站里面有什么：html、css、js、图片(各种格式)
    res.writeHead(200, { 'content-Type': 'text/html;charset=utf-8' });//设置响应头：设置内容类型和编码
    // console.log(req.url);//请求对象
    //简单的路由设置：前端传过来的url是虚拟，路由可以是真url。假的路径
    switch (req.url) {
        case '/':
            res.end('欢迎访问服务器');
            break;
        case '/home':
            res.end('首页');
            break;
        case '/login':
            res.end('登陆页');
            break;
        case '/reg':
            res.end('注册页');
            break;
        default:
            res.end(`404错误，${req.url}页面找不到`);
            break;
    }
    res.end('结束');
});

app.listen(2007, () => {
    //localhost  和 127.0.0.1 是一样的
    console.log('服务器已经开启，请访问http://localhost:2007');
});