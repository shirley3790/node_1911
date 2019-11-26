//需求：写一个方法，导出，供别人使用

//导出接口==暴露接口

let person = {
    name: 'xiaoxiao',
    adr: '湛江',
    code: function () {
        console.log('代码666');
    },
    eat: function () {
        console.log('我超会吃');
    }
}

let show = function () {
    console.log('婧婧在成都吃火锅');
}

//暴露接口 : module.exports = 对象;
module.exports = person;//用这种方式只能在一个模块里面导出一个接口

// module.exports = show;//不能有两个module.exports。否则报错