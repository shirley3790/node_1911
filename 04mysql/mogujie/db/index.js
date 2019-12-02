
/*
    主入口：查询数据的，都来这里处理  封装query，调用即可，返回查询结果
        * mysql
        * mongoDB
*/

const mysql = require('./mysql');
const mongo = require('./mongo');

module.exports = {
    mysql,
    mongo
}