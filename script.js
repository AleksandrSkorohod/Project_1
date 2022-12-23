

// const text = 'падла дурны, сабака пъяная';
const arr = [2, 4, 2, 7]


console.log(text.length);    // обращение к свойству, через точку, без скобок
console.log(text[2]);        // можно обратиться к строке по индексу


console.log(text.indexOf('са'));   // с какого индекса начинается кусок строки
console.log(text);


const text = 'падла дурны, сабака пъяная';


console.log(text.slice(-6));    // срез, по индексу.
console.log(text);

console.log(text.substring(6, 11));   //неподдерживает отрицательные значения индексов

const num = 12.3;

console.log(Math.round(num));   //округление

const test = '15.65px';

console.log(parseInt(test));   //строку в числовой в целое число
console.log(parseFloat(test));    //строку в числовой в дробное
