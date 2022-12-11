"use strict";

// Работа с условиями

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ок!');
}

//тернарный оператор - в нем учавствуют три аргумента
(num === 50) ? console.log('Ок!') : console.log('Error');

//switch-case - идет всегда на строго сравнение
//с числами
const numm = 51;
switch (numm) {
    case 49:
        console.log('Неверно!');
        break;
    case 100:
        console.log('Неверно!');
        break;
    case 50:
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз!');
        break;
}

//или со строками
const str = '51';
switch (str) {
    case '49':
        console.log('Неверно!');
        break;
    case '100':
        console.log('Неверно!');
        break;
    case '50':
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз!');
        break;
}
