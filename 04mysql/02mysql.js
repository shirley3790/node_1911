/*
    复习mysql的使用
        * 连接数据库
        * 写查询，导出结果
        * 关闭数据库
*/

var mysql = require('mysql');//第三方模块，记得先要安装好

//创建连接对象，并配置参数
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db1911'
});

// 连接数据库
connection.connect();

// 查询数据库
let sql = 'SELECT * FROM goodslist';
connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});

// 关闭连接,释放资源
connection.end();

