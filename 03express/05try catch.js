console.log('start');

// if (age == 18) {//报错：下面的代码就不再执行，同步，阻塞机制
//     console.log('你成年啦');
// }
let age = 18;
try {//先试着执行这里的代码，如果出错，继续往下执行。不阻塞后面的代码
    if (age == 18) {//报错：下面的代码就不再执行，同步，阻塞机制
        console.log('你成年啦');
    }
} catch (err) {//如果出错，捕捉错误并打印
    console.log(err);
}

console.log('end');