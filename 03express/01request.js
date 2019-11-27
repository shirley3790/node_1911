//请求一个页面的数据，爬取里面的内容，把数据存到json里面，发送给前端渲染

const request = require('request');//爬虫：数据抓取
const cheerio = require('cheerio');//类似jq的模块
const fs = require('fs');

//1.发送get请求,获取到整个网页的内容body

request('https://cnodejs.org/', (err, res, body) => {
    // console.log(body);//字符串格式html文件：node没有DOM，不能用document.getElementById(),需要在这里找元素，提取数据，在node引入jq
    //2.把获取到的body载入到cheerio模块里面，就可以操纵元素
    let $ = cheerio.load(body);
    /*
        [
            {
                gid : 1,
                url : xxx.jpg,
                title : xss
            }
        ]
    */
    let datalist = [];
    $('#topic_list .cell').each((index, ele) => {//jq操纵
        let data = {};
        data.id = index + 1;
        data.url = $(ele).find('.user_avatar img').attr('src');//这种方式图片还是在对方的服务器里面，只是获取src。
        data.title = $(ele).find('.topic_title').attr('title');
        datalist.push(data);
    });

    // console.log(datalist);//把这些数据存到一个json文件里面：fs写入文件
    let writestr = fs.createWriteStream('./data/cnodejs.json');
    let str = JSON.stringify(datalist);
    writestr.write(str);
    writestr.end();//写入完毕
    writestr.on('finish', () => {//写入完成提示
        console.log('写入成功了');
    });
});

