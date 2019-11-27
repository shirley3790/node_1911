
//需求：抓取某个网站的图片，下载到本地 http://www.netbian.com/youxi/


const request = require('request');//爬虫：数据抓取
const cheerio = require('cheerio');//类似jq的模块
const fs = require('fs');
const path = require('path');

//1.获取一级页面的所有html
request('http://www.netbian.com/youxi/', (err, res, body) => {//异步
    let $ = cheerio.load(body);
    $('#main .list li').each((index, ele) => {
        let href = $(ele).find('a').attr('href');
        if (href.startsWith('/')) {
            //判断href是以/开头的才是我想要的路径
            //http://www.netbian.com 和 /desk/22304.htm
            // let pathurl = path.join('http://www.netbian.com', href);
            let pathurl = 'http://www.netbian.com' + href;
            // console.log(pathurl);//目的就是拼接出二级页面的url，可以发送第二请求

            //2.发送第二次请求
            request(pathurl, (err2, res2, body) => {
                // console.log(body2);
                let $ = cheerio.load(body);//目的是为了得到大图的路径
                let urlstr = $('.pic img').attr('src');
                // //在url里面提取图片本来的文件名  xxx.jpg
                let filename = path.basename(urlstr);
                // console.log(filename);
                //3.发送第三次请求  拿到该图片
                let writestr = fs.createWriteStream('./img/' + filename);
                request(urlstr).pipe(writestr);// ./img/xx.jpg
                // writestr.end();//结束
            });
        }
    });
});

