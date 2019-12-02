/*
    需求：实现数据的CRUD操作
        * 连接数据库:connect()
        * 数据的CRUD操作 : find() update() remove() creat()
        * 关闭数据库 :close() 先有的
*/

const { MongoClient } = require('mongodb');//引入第三方模块
const { DBurl, DBname } = require('../config.json');


//封装一个函数 connect() ：连接mongoDB
// MongoClient.connect(DBurl, async (err, client) => {

//     if (err) throw err;
//     let db = client.db(DBname);
//     let col = db.collection('song');//无则自动创建
//     //数据的CRUD操作

//     //关闭数据库
//     client.close();
// });

function connect() {
    //第一个方法：promise
    return new Promise((resolve, reject) => {
        MongoClient.connect(DBurl, async (err, client) => {
            if (err) reject(err);
            let db = client.db(DBname);

            resolve({ db, client });//成功连接数据库后，返回两个子对象，在调用connect方法的时候就可以得到这个对象，就可以调用里面的方法了
        });
    })

}

//查找功能 find()
async function find() {
    try {
        let { db, client } = await connect();//await只能接收成功的回调resolve
        // obj.then().catch()
        let col = db.collection('song');//无则自动创建
        //数据的CRUD操作
        let result = await col.find({}).toArray();//查找数据
        console.log(result);
        //关闭数据库
        client.close();
    } catch{//接收到reject的数据
        console.log(err);
    }

}

find();

// module.exports = mongo;