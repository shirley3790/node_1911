//总路由-里面很多子路由  路由模块化遵循的是RESTful接口规范制作的

// function ss(req, res, next) {
//     //普通函数，不是中间件
// }
const express = require('express'); //模块访问：缓存

const Router = express.Router(); //express自带的中间件，路由设置 Router==app

//把这个路由配置放在所有路由的前面，方便调用next操作
Router.use((req, res, next) => {
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

Router.use(express.urlencoded({})); //为了获取req.body里面的数据

// Router.use((req, res, next) => { //测试
//     res.send('已经进入总路由了');
// });

//引入子路由模块
const goodsRouter = require('./goods');
const usersRouter = require('./users');
const uploadRouter = require('./upload');
let {
    verify
} = require('../utils/token');
let {
    formatdata
} = require('../utils/formatdata'); //自定义模块 

//调用子路由
Router.use('/goods', goodsRouter); //goods.js模块导出了一个中间件
Router.use('/users', usersRouter); //goods.js模块导出了一个中间件
Router.use('/upload', uploadRouter); //goods.js模块导出了一个中间件


Router.get('/verify', (req, res) => {
    // let { token } = req.body;
    let Authorization = req.get('Authorization');
    console.log(Authorization);
    let result = verify(Authorization);
    // console.log(result);//校验是否通行
    if (result) { //可以直接登陆
        res.send(formatdata());
    } else {
        res.send(formatdata({
            code: 0
        }))
    }

});
//暴露模块
module.exports = Router;