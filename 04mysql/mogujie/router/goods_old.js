/*
    * 商品信息管理
        * 添加商品
        * 查询商品数据
        * 修改
        * 删除
        * 批量删除
*/

const express = require('express');//模块访问：缓存

const Router = express.Router();

// const query = require('../db/mysql');
const { mysql: query } = require('../db');//解构并重命名
// console.log(getdata);//? {mysql:fn,mongo:fn}

//这里的代码因为要实现复用，已经提取到DB/mysql.js 里面
// var mysql = require('mysql');//引入mysql模块

// //创建连接池：https://blog.csdn.net/zxsrendong/article/details/17006185
// var pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     port: 3306,
//     database: 'db1911',
//     charset: 'UTF8_GENERAL_CI',
//     multipleStatements: true //允许写多个sql语句,允许你拼接sql一次执行多个语句
// });

// let data = [
//     {
//         "id": 1,
//         "url": "https://avatars2.githubusercontent.com/u/14975630?v=4&s=120",
//         "title": "12 月 14 日，技术大牛齐聚 D2，带你解锁前端新姿势"
//     },
//     {
//         "id": 2,
//         "url": "https://avatars2.githubusercontent.com/u/227713?v=4&s=120",
//         "title": "Node 12 值得关注的新特性"
//     }
// ];


//get请求获取所有是商品数据 : page=1  num=10
Router.get('/', async (req, res) => {
    //查询数据库的数据
    let sql = 'SELECT * FROM goodslist';
    //初级写法
    // query(sql, data => {
    //     // console.log(data);
    //     res.send(data);
    // });

    //中级写法：promise写法
    // let p = query(sql);//得到一个实例
    // p.then(data => {
    //     res.send(data);
    // }).catch(err => {
    //     console.log(err);
    //     res.send(err);
    // });

    //高级写法:用同步的写法实现异步效果
    /*
        ES7语法：
            async : 如果函数加上了async，则函数返回的是一个promise对象。
            await: 等待一个promise对象resolve(data)成功返回的数据，再往下执行代码，用同步的写法实现异步效果,await一定要在async里面使用
    */
    let data = await query(sql);//await 等待的是一个promise对象;等到结果是：是对象里面resolve(data) 的结果；一定是放在async函数里面才能用
    res.send(data);

    //这里的代码也需要实现复用，已经飞走了
    // pool.query(sql, (err, rows) => {//查询数据库所有商品数据响应给客户端
    //     if (err) throw err;
    //     res.send(rows);
    // });
    // res.send(data);
});

//获取id为xx的数据：获取单条数据  /goods/2  代表：想要id为2的数据
Router.get('/:id', async (req, res) => {
    let { id } = req.params;
    let sql = `SELECT * FROM goodslist where id=${id}`;
    // pool.query(sql, (err, rows) => {//查询数据库所有商品数据响应给客户端
    //     if (err) throw err;
    //     res.send(rows);
    // });
    // query(sql, data => {
    //     // console.log(data);
    //     res.send(data);
    // })
    // res.send(id + '数据拿到');

    let data = await query(sql);
    res.send(data);
});

//删除id为xx数据
Router.delete('/:id', (req, res) => {
    let { id } = req.params;
    res.send(id + '已删除');
});

//修改
Router.put('/:id', (req, res) => {
    let { id } = req.params;
    res.send(id + '数据已修改');
});

//数据增加
Router.post('/', (req, res) => {
    res.send('添加成功');
});



module.exports = Router;