//开启一个静态资源服务器

const express = require('express');

//开启服务器
const app = express();//返回对象app

//借助express的中间件来开启静态资源服务器
//中间件 express.static('./') 服务器根目录root


/*
    面试题：
        中间件是什么？
        1.是一个具备数据处理功能的函数；
        2.一般在请求或响应执行之前调用的。
        3.利用中间件提高开发效率。
        4.express就是通过调用各种中间件来实现开发

        中间件怎么用：
        格式：app.use([path],...middlewares)
    
        中间件分类：
            * 内置中间件
                * express.static() 开启静态资源服务器
                * 缓存：静态资源:html、css、js、视频、音频、图片(数据部分不会缓存，因为是靠ajax请求回来的)
                    * 强制缓存：maxAge : 1h 客户端发送请求后，静态资源已经载入本地，在一个小时内再发送请求，是不会请求静态资源，会从缓存读取数据，不会浪费服务器资源；第一次：请求新的 200 第二次起：如果还在缓存时间内，在本地缓存读取数据。200 cache
                    * 协商缓存：maxAge : 1h 第二次请求，已经超过了缓存时间,比如：a.jpg 已经请求过了，现在要请求第二次资源，服务器和你协商，你要的资源，服务器这边还未改动过，a.jpg,让你(客户端)还是去缓存读取 304.
                    * 离线缓存：访问过某个网页，断网，打开，页面还在。在联网的情况下，设置一个文件，让页面的内容自动载入离线缓存里面 cache storage。离线的时候，还可以看到。小说站。
            * 自定义中间件
            * 第三方中间件
*/
app.use(express.static('./', { index: './main.html', maxAge: 3600000 }));//自动访问你的index.html 内置的static()中间件没有设置next();如果路径满足这里，就进入这个中间件，不会再往下走

//定义一个中间件1
// app.use('/goods', (req, res, next) => {
//     console.log('我是中间件1');
//     // next();//进入下一个中间件
// });
// //定义一个中间件2
// app.use('/login', (req, res, next) => {
//     console.log('我是中间件2');
// });

//多个中间件：use()用法 响应所有的请求：get post put delete patch
// app.use('/goods', (req, res, next) => {
//     console.log('我是中间件1');
//     next();//有next才能进入下一个中间件
// }, (req, res, next) => {
//     console.log('我是中间件2');
// });

// app.get('./', (req, res) => { //欢迎页
//     console.log('欢迎访问1911服务器');
//     res.send('欢迎访问1911服务器');//其实就是res.write和end()的结合 可以直接传对象格式数据
// });

//路由设置
//一般很少用use() 最好直接写方法 符合restful接口规范：有语义
app.get('/goods', (req, res) => { //获取全部商品数据
    console.log('全部数据给你');
    res.send('全部数据给你');
});

app.get('/login', (req, res) => { //获取全部商品数据
    console.log('全部数据给你');
    res.send('登陆成功');
})

app.get('/goods/:id', (req, res) => { //获取id为xx商品数据
    let { id } = req.params;
    console.log('id是：' + id + '的商品数据');
    res.send('id是：' + id + '的商品数据');
});

app.post('/goods', (req, res) => { //提交数据
    console.log('添加成功');
    res.send('添加成功');
});

app.put('/goods/:id', (req, res) => { //修改数据
    console.log('修改成功');
    res.send('修改成功');
});

app.delete('/goods/:id', (req, res) => { //删除数据
    console.log('删除成功');
    res.send('删除成功');
});

/*
    网站接口：
        * 入库
        * 用户管理
            * 查询是否存在
            * 注册
            * 登陆
            * 修改密码
        * 商品新管理
            * 添加商品
            * 查询商品数据
            * 修改
            * 删除
            * 批量删除
        * 订单管理
            * 新增订单
            * 修改订单
            * 删除订单
        * 出库
        * 售后
    
    接口必须分类做成模块化：不然接口就太过了复杂
    结合我们的RESTful接口规范：
        * 不同的请求类型做不同接口
        * 不同的url做不同接口

    结论：路由模块化开发-项目开发规范
*/
//监听端口
app.listen(1911, () => {
    console.log('服务器已开启，请访问localhost:1911');
});