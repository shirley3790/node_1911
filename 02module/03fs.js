//需求：读取一个文件内容并打印

//1.引入fs模块
const fs = require('fs');

// console.log(fs);//? 对象

//1.异步读取数据
fs.readFile('./data.txt', (err, data) => {
    if (err) {
        console.log('读取失败' + err);
        return;//阻塞后面代码的执行
        // if (err) throw err;//如果出错，打印该错误，并阻塞后面的代码
    } else {
        // console.log('读取成功');
        console.log(data);//buffer数据：二进制流数据，类数组形式；文件：视频、音频、图片 多媒体数据
        console.log(data.toString());//把二进制转换字符串
    }
});

//同步读取
// let data = fs.readFileSync('./data.txt');
// console.log(data.toString());


//2.异步写文件:如果没有该文件，创建并写入数据；如果有该文件，就会覆盖里面的内容
fs.writeFile('./newdata.txt', '我们不一样', err => {
    if (err) throw err;
    console.log('写入成功了');
});

//3.异步追加数据
fs.appendFile('./data.txt', '婧婧你快回来', err => {
    if (err) throw err;
    console.log('写入成功了');
});

/*

    什么是同步异步：我想买个汉堡，付钱，等待，服务员，要30分钟汉堡才可以拿。
        * 等：同步sync，安全的方式，缺点：浪费时间
        * 不等：异步async，去隔壁喝奶茶慢慢等，服务员打电话告诉我好了，我就回去拿，不够安全

    js本身是单线程：同步机制，利用回调函数，实现异步操作
*/

