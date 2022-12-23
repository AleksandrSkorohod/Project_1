


function showText(text) {
    console.log(text);
    let num = 20;
}

showText('привет сабака');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(12, 18));
console.log(calc(14, 158));
console.log(calc(1254, 1228));


function net () {
    num = 35;

    //какие то вычисления
    //многа многа вычислений..
    return num;
}

const newNum = net();
console.log(newNum);

const logger = function() {
    console.log('hello');
};

logger();

const strFun = (a, b) => {
    console.log('go to hell');
    return a + b;
}

console.log(strFun(12, 34));