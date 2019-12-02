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
    //命令行：db.集合名.insertOne() 但是在Nodej里面直接写 col.insertOne()
    // col.createCollection('song',() => {
    //     console.log('创建成功');
    // })
    let col = db.collection('song');//无则自动创建
    //增
    // let song = [{
    //     "id": 1,
    //     "name": "月亮代表我的心"
    // }, {
    //     "id": 2,
    //     "name": "我心依旧"
    // }, {
    //     "id": 3,
    //     "name": "涛声依旧"
    // }, {
    //     "id": 4,
    //     "name": "匆匆那年"
    // }];
    // let result = await col.insertMany(song); //一次性插入多条数据，
    // if (result.insertedCount) {
    //     //成功
    //     console.log('success');
    // } else {
    //     console.log('fail');
    // }

    //查询
    //查询所有数据
    // let r1 = await col.find({}).toArray();
    // console.log(r1);

    // 查询id>1的歌曲:$gt 小于 $lt
    // let r2 = await col.find({ id: { $gt: 1 } }).toArray();
    // console.log(r2);

    // 查询id>=2的歌曲:$gte 小于等于：$lte
    // let r3 = await col.find({ id: { $gte: 2 } }).toArray();
    // console.log(r3);

    //查询id不等于3的歌曲:$ne
    // let r4 = await col.find({ id: { $ne: 3 } }).toArray();
    // console.log(r4);

    //查询id在（1,3）范围内的歌曲:$in
    // let r5 = await col.find({ id: { $in: [1, 3] } }).toArray();
    // console.log(r5);

    //查询id不在（2,3）范围内的歌曲:$nin
    // let r5 = await col.find({ id: { $nin: [1, 3] } }).toArray();
    // console.log(r5);

    //查询id为2同时歌名为"我心依旧"的数据
    // let r5 = await col.find({ id: 2, name: '我心依旧' }).toArray();
    // console.log(r5);

    //查询id为3或歌名为 "我心依旧"的数据: $or
    // let r5 = await col.find({ $or: [{ id: 3 }, { name: '我心依旧' }] }).toArray();
    // console.log(r5);

    // 查询1<id<3的歌曲:$lt $gt
    let r5 = await col.find({ id: { $gt: 1, $lt: 3 } }).toArray();
    console.log(r5);

    //关闭数据库
    client.close();
});
