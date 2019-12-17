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

const {
    formatdata
} = require('../utils/formatdata');

Router.get('/kucun', (req, res) => {
    let {
        id
    } = req.query;
    let result = formatdata({
        data: 5
    });
    res.send(result)
})

const { mysql: query } = require('../db');//解构并重命名
// console.log(getdata);//? {mysql:fn,mongo:fn}

//get请求获取所有是商品数据 : page=1  num=10
Router.route('/')
    .get(async (req, res) => {
        //查全部数据
        let sql2 = 'SELECT * FROM goodslist';
        let data2 = await query(sql2);//数组 [{},{},{}] 总条数==数组长度

        //查询数据库的数据
        let sql = '';
        let result = {};//传给客户端的数据  null假  {}真  []真  null假
        // console.log(req.query);
        if (req.query.page) {
            // console.log('有参数');
            //传了参数
            let { page, num } = req.query;//{page:1,num:5} 查询第一页5条数据
            // console.log(page, num);
            let index = (page - 1) * num;
            // console.log(str);
            //SELECT * FROM goodslist limit (page -1) * num,5：
            sql = `SELECT * FROM goodslist limit ${index},${num}`;
            let data = await query(sql);//await 等待的是一个promise对象;等到结果是：是对象里面resolve(data) 的结果；一定是放在async函数里面才能用
            // console.log(data);
            let pages = Math.ceil(data2.length / num);
            result = {
                type: 1,//成功，
                mes: '成功',
                total: data2.length, //总条数
                pages, //总页码
                page, //当前页
                num, //每页条数
                list: data  //数据
            }

        } else {
            // console.log('没有参数');
            result = {
                type: 1,//成功，
                mes: '成功',
                total: data2.length, //总条数
                list: data2  //数据
            }
        }

        res.send(result);
    })
    //数据增加
    .post(async (req, res) => {
        let { title, price, color } = req.body;
        // console.log(data);//undefined因为我们的数据不能直接拿到，需要借助中间件,得到一个对象
        let sql = `INSERT INTO goodslist(title,price,color) VALUES('${title}','${price}','${color}')`;
        let data = await query(sql);
        // console.log(data);
        res.send(data);

    });

//获取id为xx的数据：获取单条数据  /goods/2  代表：想要id为2的数据
Router.route('/:id')
    .get(async (req, res) => {
        let { id } = req.params;
        let sql = `SELECT * FROM goodslist where id=${id}`;
        let data = await query(sql);
        res.send(data);
    })

    //删除id为xx数据
    .delete(async (req, res) => {
        let { id } = req.params;
        let sql = `DELETE FROM goodslist WHERE id=${id}`;
        let data = await query(sql);
        res.send(data);
    })

    //修改
    .put(async (req, res) => {
        let { id } = req.params;//url动态路由  /goods/28 修改id=28的数据
        let body = req.body;//对象
        let sql = 'UPDATE goodslist SET ';
        for (let key in body) {
            sql += key + '=' + `'${body[key]}',`;
        }
        sql = sql.slice(0, -1);//切掉最后的逗号
        sql += ` WHERE id=${id}`;
        // console.log(sql);
        //UPDATE goodslist SET title='华为222',price='100', WHERE id=28
        let data = await query(sql);
        res.send(data);
        // res.send('修改成功');
    });


module.exports = Router;