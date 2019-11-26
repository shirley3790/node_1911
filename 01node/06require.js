//导入模块
//模块查找机制：05exports.js
let fns = require('./05exports');//这种方式会把所有的接口合并成一个大的对象

console.log(fns);//接收到模块后，直接打印查看怎么去调用

fns.obj.code();

fns.show();