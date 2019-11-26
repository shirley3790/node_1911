//需求：开启服务器，让前端可以访问

const http = require('http');

/*
    知识点：
        * 利用http对象里面的一个方法来配置一个服务器：
            createServer(fn):fn是回调函数，里面有两个形参
                * request :请求
                * response ：响应
                    * 方法：response.write() 写相应内容给前端
                    * 方法：response.writeHead() 设置响应头，服务器返回给客户端的
                    * 方法：response.end() 设置结束标记
        * 监听端口号：利用createServer()方法返回的对象app，调用里面的方法listen()实现端口的监听
            listen(端口号,fn)
                * 参数一：端口号
                * 参数二：回调
*/

http.createServer((req, res) => {
    //req:请求  对象，存储客户端传过来的信息：客户端=>服务器的数据
    //res：响应  对象，给客户端发送消息：服务器=>客户端的数据

    //设置响应头
    res.writeHead(200, { 'content-Type': 'text/html;charset=utf-8' });
    res.end('欢迎访问服务器');
}).listen(2019, () => {
    //成功开启服务器了就会执行这里的代码
    console.log('服务器已经开启，请访问：http://localhost:2019');
});