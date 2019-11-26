
//模块的引入 gulp

//拷贝文件
let obj = require('./09copyfile');//导入模块
console.log(obj);

obj.copy('./data.txt', './data/bb.txt');