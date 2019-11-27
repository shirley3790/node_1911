/*
    express：类似jq和js的关系，提高开发效率，搭建服务器非常方便。
        * 搭建服务器
        * 搭建静态资源服务器
        * 路由
        * get和post
        * 服务器代理：帮前端获取资源  cors  服务器代理
*/

const express = require('express');//函数
const app = express();//调用express函数得到一个对象：属性 方法

//开启静态资源服务器
app.use(express.static('./'));//express.static()中间件

//路由的设置:你输入的路径不同，我给你的响应不同，按需响应
//用app.get() 来响应客户端的get的请求
app.get('/', (req, res) => {
    res.send('欢迎你访问服务器');
});

app.get('/login', (req, res) => {
    res.send('登陆页get');
});

app.post('/login', (req, res) => {
    res.send('登陆页post');
});

app.get('/reg', (req, res) => {
    res.send('注册页');
});

app.get('/cart', (req, res) => {
    let goodslist = [
        {
            gid: 1,
            title: '苹果',
            price: 8999
        }, {
            gid: 2,
            title: '华为',
            price: 1888
        }
    ];
    res.send(goodslist);
});


let ggs = [//商品数据
    {
        gid: 1,
        title: '苹果',
        price: 8999
    }, {
        gid: 2,
        title: '华为',
        price: 1888
    }, {
        gid: 3,
        title: '小米',
        price: 999
    }
];

//获取带参数路由的做法：
//利用req.query获取前端传过来了参数  http://localhost:5566/good?gid=3&color=red
app.get('/good', (req, res) => {
    let { gid, color } = req.query;//解构  req.query 得到的就是一个对象 {gid:3,color:red}
    // console.log(gid, color);
    //查询数据库 gid=3对应的商品数据，传给前端
    let good = ggs.filter((item, index) => {//some every reduce filter map
        return item.gid == gid;
    });
    // console.log(good);
    //restful接口规范
    let data = null;
    if (good.length) {
        //不为零：成功
        data = {
            type: 1,//0失败  1成功
            word: '成功',
            data: good
        }
    } else {
        data = {
            type: 0,//0失败  1成功
            word: '失败',
            data: []
        }
    }

    res.send(data);
});


//开启服务器
app.listen(5566, () => {
    console.log('服务器开启了，请访问localhost:5566');
});

