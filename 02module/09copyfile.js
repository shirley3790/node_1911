//拷贝文件：做成模块

function copy(oldpath, newpath) {
    console.log(oldpath, newpath);
    const fs = require('fs');

    let readstream = fs.createReadStream(oldpath);

    // //写文件：用流的方式写入数据
    let wristr = fs.createWriteStream(newpath);

    readstream.pipe(wristr);//通过管道，在oldpath读取文件，写入newpath
}

// copy('./data.txt', './data/aa.txt');
//导出模块==暴露模块
module.exports = {
    copy
};

