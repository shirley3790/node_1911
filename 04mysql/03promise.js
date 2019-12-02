// setTimeout(() => {
//     console.log(12);
// }, 2000);

// console.log('666');
// setTimeout(() => {
//     console.log(56);
// }, 1000);

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(12);
        console.log(12);
    }, 1000);

});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(56);
        console.log(56);
    }, 1000);
});

// //调用
p1.then(p2)

p2.then();

//async和await的使用
async function show() {
    let data = await query();
    //等到数据后，再使用数据
}

app.use('/goods', async (req, res) => {
    try {
        let data = await query();
        //等到数据后，再使用数据
    } catch (err) {
        console.log(err);
    }

})

//try{} catch{}
