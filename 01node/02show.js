let arr = [1, 2, 3];

let str = arr.map(item => {
    return `<li>${item}</li>`;
}).join('');

console.log(str);