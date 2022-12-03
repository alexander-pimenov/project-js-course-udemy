"use strict";

/* !!! ЕСТЬ ВЕЩИ КОТОРЫЕ ЕСТЬ ТОЛЬКО ВНУТРИ БРАУЗЕРА !!!
 - prompt, alert, confirm, document, window - 
 эти команды тестируются только внутри браузера*/

//команда вызывает модальное окно
//обычно в нем хотим предупредить пользователя
//alert('Hello');

//если хотим получить ответ, то используем
//const result = confirm('Are you here?');
//и тот результат который нажали в браузере, сохраняется 
//в эту переменную result
//console.log(result);

//команда в которой пользователь вводит ответ
//второй аргумент - это плейсхолдер
//ответ приходит как string
// const answer = prompt('Вам есть 18?', 'сюда писать');
// console.log(answer);

//оператор для проверки на типы данных
// console.log(typeof(answer));

/*!!!!!! ВСЯ ИНФОРМАЦИЯ ПРИХОДЯЩАЯ ОТ ПОЛЬЗОВАТЕЛЯ БУДЕТ В ВИДЕ СТРОК !!!!!!*/
/*!!!!!! НЕ ВАЖНО КАК ПОЛУЧИЛИ: ИЗ prompt, confirm, элемента на странице !!!!!!*/

//Но есть вариант получать цифры - динамическая типизация
//мы преобразуем один тип данных в другой
// const answerAge = +prompt('Введите ваш возраст', '');
// console.log(answerAge + 10);
// console.log(typeof(answerAge));

//несколько ответов можем записывать в массив
const answers = [];
answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

//поработаем со страницей - document.write('123456'); - эта команда очень редко используется
//она выводит на страницу что в ней написано, в нашем случае это будет массив 
//полученных данных из promt
document.write(answers);


//prompt, alert - эти команды блокируют построение страницы, пока их не выпонят

console.log(typeof(answers)); //object

console.log(typeof(null)); //тоже object, и это официально признанная ошибка

