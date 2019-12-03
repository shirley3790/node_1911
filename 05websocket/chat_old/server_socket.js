const SocketServer = require('ws').Server;
const express = require('express');
const http = require('http');

// web服务器
const app = express();
app.use(express.static('./'))


// 利用http模块连接websocket服务器与web服务器
let server = http.createServer(app)

// WebSocket服务器
let wss = new SocketServer({
    // 在websocket中设置server,连接http模块
    server,
    // port: 1001
});
// console.log('socket服务器启动成功')

server.listen(1915, () => {
    console.log('web & websockt server启动成功,端口号1915')
});


// websocket服务器操作
wss.on('connection', (client) => {
    // client 连接的客户端
    console.log('客户端连接成功');

    client.on('message', msg => {
        // msg: 客户端发送的消息
        console.log(msg)

        // wss.clients保存所有客户端
        // 把msg发送给每一个客户端
        wss.clients.forEach(item => {
            // 服务器主动发送消息
            item.send(msg)
        })
    })
})
