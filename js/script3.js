"use strict";

/* !!! ИНТЕРПОЛЯЦИЯ - внутри строки можно вставлять переменную !!!*/

const category = 'toys';

/*например, нужно сформировать путь куда будет переходить пользователь и
нужно перейти в категорию toys*/

//можно использовать конкатенацию а можно и другому - 
//и тут приходят на помощь бэктики - косые кавычки
console.log(`https://someurl.com/${category}/5`);

const user = 'Ivan';
alert(`Привет, ${user}`);


/* !!! ОПЕРАТОРЫ !!!*/
// ***** унарный плюс -> + 
console.log('arr' + " - object");
console.log(5 + " - object");
console.log(typeof (5 + " - object")); //string
console.log(typeof ('arr' + " - object")); //string
console.log(5 + "4"); //54 - это конкатенация!!!
//а тут уже как цифры:
console.log(5 + +"4"); //9 !!!
console.log(typeof (5 + +"4")); //number !!!

// ***** инкремент и декремент
let incr = 10,
    decr = 10;
//постфикная форма записи
incr++; //инкремент (+1)
decr--; //декремент (-1)

console.log(incr); //11
console.log(decr); //9

let incr1 = 10,
    decr1 = 10;
//постфикная форма записи
console.log(incr1++); //10
console.log(decr1--); //10
console.log(incr1); //11
console.log(decr1); //9

//префиксная форма записи
let incr2 = 10,
    decr2 = 10;
++incr2; //инкремент (+1)
--decr2; //декремент (-1)
console.log(incr2); //11
console.log(decr2); //9

let incr3 = 10,
    decr3 = 10;
console.log(++incr3); //11
console.log(--decr3); //9

// ***** остаток от деления
console.log(5 % 2); //1
console.log(9 % 2); //1
console.log(11 % 3); //2


// ***** равенство 
// == - по значению
// === - строгое и по значению и по типу
console.log(2 * 4 == 8); //true
console.log(2 * 4 == '8'); //true
console.log(2 * 4 === '8'); //false
console.log(2 * 4 === 8); //true
console.log(2 + 2 * 2 != 8); //true
console.log(2 + 2 * 2 == 6); //true
console.log(2 + 2 * 2 == '6'); //true
console.log(2 + 2 * 2 !== '6'); //false

// ***** логические операторы
const isChecked = true,
    isClose = false;

console.log(isChecked && isClose); //false

console.log(isChecked || isClose); //true

console.log(!isChecked || isClose); //false

//порядок выполнения - смотри в таблице приоритетов



