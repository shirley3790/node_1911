//总路由-里面很多子路由  路由模块化遵循的是RESTful接口规范制作的

// function ss(req, res, next) {
//     //普通函数，不是中间件
// }
const express = require('express');//模块访问：缓存

const Router = express.Router();//express自带的中间件，路由设置 Router==app

// Router.use((req, res, next) => { //测试
//     res.send('已经进入总路由了');
// });

//引入子路由模块
const goodsRouter = require('./goods');
const usersRouter = require('./users');

//调用子路由
Router.use('/goods', goodsRouter);//goods.js模块导出了一个中间件
Router.use('/users', usersRouter);//goods.js模块导出了一个中间件

//暴露模块
module.exports = Router;