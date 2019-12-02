console.log('start');

// if (age == 18) {//报错：下面的代码就不再执行，同步，阻塞机制
//     console.log('你成年啦');
// }
// let age = 18;
try {//先试着执行这里的代码，如果出错，继续往下执行。不阻塞后面的代码
    if (age == 18) {//报错：下面的代码就不再执行，同步，阻塞机制
        console.log('你成年啦');
    }
} catch (err) {//如果出错，捕捉错误并打印
    console.log(err);
}

console.log('end');

/*
    try catch优点：
        * 捕获异常：捕获异常并打印
        * 捕获阻塞后面代码的执行

    两种可能：
        * 没有出错 ：start->你成年啦->end
        * 出错了：start->错误信息->end
*/