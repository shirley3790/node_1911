/*
    跨域：
        * jsonp 通过script标签src获取跨域资源,low 前端,不能发送ajax
        * cors ：主要是后端设置权限 ：'Access-Control-Allow-Origin': '*'
            * 服务器设置权限
            * IE10+
        * 服务器代理：后端跟别人的后端拿数据，再传给前端
*/
/*
    request(path,fn) 用于发送ajax请求的模块，类似jq的$.ajax()
        fn : 回调函数，里面有三个参数
            * 参数一：err 错误
            * 参数二：res 响应
            * 参数三：body 响应的内容
*/

//cors：获取接口的数据转给前端

const request = require('request');
const http = require('http');

// request('https://m.weibo.cn/api/config/list', (err, res, body) => {
//     console.log(body);
// });

http.createServer((req, res) => {
    request('https://m.weibo.cn/api/config/list', (err, res2, body) => {
        // console.log(body);
        res.writeHead(200, {//设置响应头，是实现cors的关键
            'Access-Control-Allow-Origin': '*' //所有人都可以访问该接口
        });
        res.end(body);
    });
}).listen('9080', () => {
    console.log('服务器开启，端口号是9080');
});

