//压缩文件

const zlib = require('zlib');
const fs = require('fs');

//读文件

let readstr = fs.createReadStream('./goodslist.json');

//写文件
let writestr = fs.createWriteStream('./data/goodslist.json.zip');

readstr.pipe(zlib.createGzip()).pipe(writestr);