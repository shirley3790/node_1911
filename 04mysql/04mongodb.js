/*
    连接mongoDB进行数据的处理：
        * 增
        * 删
        * 改
        * 查
*/

//1.连接数据库

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
const { MongoClient } = require('mongodb');//引入第三方模块

/*
    MongoClient.connect(url,fn)
        * url : mongonDB的url  端口号：27017   http:80  mysql:3306  https:443
        * fn 回调函数，两个参数
            * err 错误信息
            * client 子对象
                * 方法
                    * client.db(数据库名字)  连接mongoDB里面的xx数据库
                        * 返回一个子对象  db，返回数据库
                            * db.collection(集合名字) 查找数据库里面的集合,返回对象  集合 col
                                * 利用col在里面进行数据的CRUD操作
                    * client.close() 关闭数据库
*/

//连接mongoDB
MongoClient.connect("mongodb://localhost:27017", async (err, client) => {
    if (err) throw err;
    // 连接数据库，无则自动创建
    let db = client.db('h51911');//连接数据库：有就连接，没有就自动创建
    let col = db.collection('user');//查找集合
    //命令行：db.集合名.insertOne() 但是在Nodej里面直接写 col.insertOne()

    //插入一条数据  增
    // let result = await col.insertOne({ name: '罗妙', password: '123456' });
    // let result = await col.insertMany([{ name: '亭宇', password: '123456' }, { name: '胡海', password: '123456' }]);

    // // console.log(result);
    // if (result.insertedCount) {
    //     //成功
    //     console.log('success');
    // } else {
    //     console.log('fail');
    // }

    //删 
    // let result = await col.deleteMany({ name: '罗妙' });
    // // console.log(result);
    // if (result.deletedCount) {
    //     //成功
    //     console.log('success');
    // } else {
    //     console.log('fail');
    // }

    //改
    // let result = await col.updateMany({ name: '亭宇' }, { $set: { password: 666666 } });
    // console.log(result);
    // if (result.modifiedCount) {
    //     //成功
    //     console.log('success');
    // } else {
    //     console.log('fail');
    // }

    //查
    let result = await col.find({ name: '亭宇' }).toArray();//把查询的内容转成数组  [{},{},{}]
    console.log(result);



    //关闭数据库
    client.close();
});
