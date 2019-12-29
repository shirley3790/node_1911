const express = require('express'); //模块访问：缓存
const path = require('path');
const Router = express.Router();
//引入multer实现文件上传
const multer = require('multer');

//设置上传目录:中间件,基础版，缺点，上传的文件没有后缀，文件名是随机字符无语义
// const upload = multer({
//     dest: 'uploads/'
// });

//设置上传目录和文件名:高级版
var storage = multer.diskStorage({
    //设置上传目录，无则自动创建
    destination: 'uploads/',
    //这个写法如果没有uploads/目录则报错
    // destination: function (req, file, cb) {
    //     cb(null, 'uploads/')
    // },
    filename: function (req, file, cb) {
        console.log(file);
        let ext = path.extname(file.originalname); //获取后缀
        let fname = file.originalname.split('.')[0]; //获取文件名
        // console.log(fname);

        // cb(null, file.fieldname + '-' + Date.now() + ext); //重命名文件名 + 时间戳 + 后缀
        cb(null, fname + '-' + Date.now() + ext); //重命名文件名 + 时间戳 + 后缀
    }
})

var upload = multer({
    storage: storage
});


//上传头像：一个图
Router.post('/touxiang', upload.single('touxiang'), (req, res) => {
    //upload.single()会对上传的图片进行处理，并存到req的file属性中
    console.log(req.file); //存到数据库中
    res.send(req.file.path);
});


//上传商品图片
Router.post('/goods', upload.array('goods', 5), (req, res) => {
    //upload.array()会对上传的图片进行处理，并存到req的files属性中
    console.log(req.files); //存到数据库中
    let imgurl = '';
    req.files.forEach(item => {
        imgurl += item.path + '&';
    });
    imgurl = imgurl.slice(0, -1);
    console.log(imgurl);
    res.send(imgurl);
});





module.exports = Router;