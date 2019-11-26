//导出一个模块

let sum = function (n1, n2) {
    return n1 + n2;
}

let toDb = function (num) {
    if (num < 10) {
        return '0' + num;
    } else {
        return '' + num;
    }
}

//暴露模块
// module.exports = sum;

module.exports = {
    sum,
    toDb
}