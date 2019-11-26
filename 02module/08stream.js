/*
    stream流
        * fs.createReadStream() 读文件，以流的方式
        * fs.createWriteStream() 写文件，以流的方式
*/

const fs = require('fs');

let readstream = fs.createReadStream('./data.txt');
// console.log(readstream);

//用事件监听数据读入过程 data
let str = '';
readstream.on('data', chunk => {
    // console.log(chunk);
    str += chunk;//把buffer一段段的拼接起来
    // console.log(chunk.toString());
});

//用end事件监测是否已经完成
readstream.on('end', () => {
    console.log(str.toString());
});


//写文件：用流的方式写入数据
let wristr = fs.createWriteStream('./mydata.txt');

//写入数据
wristr.write('我们不一样');
wristr.write('我们都一样');
wristr.write('都是58bc58');

//写完了
wristr.end();

wristr.on('finish', () => {
    console.log('写入完毕');
})