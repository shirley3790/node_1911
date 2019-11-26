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

//一个模块里面一次性导出两个接口(导入该模块，就可以拥有两个功能)
exports.obj = person;

exports.show = show;