"use strict";

function renderLine(num = 0) {
  console.log(`-------------------------${num}--------------------------`);
}
// Работа с переменными
// Создайте переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода alert.
const num = 3;
console.log(num);
renderLine(1);

// Создайте переменные a = 10 и b = 2. Выведите на экран их сумму, разность, произведение и частное(результат деления).
const a = 10;
const b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
renderLine(2);

// Создайте переменные c = 15 и d = 2. Просуммируйте их, а результат присвойте переменной result.Выведите на экран значение переменной result.
const c = 15;
const d = 2;
const result = c + d;
console.log(result);
renderLine(3);

// Работа со строками
// Создайте переменную str и присвойте ей значение 'Привет, Мир!'.Выведите значение этой переменной на экран.
const str = `Привет, Мир!`;
console.log(str);
renderLine(4);

// Создайте переменные str1 = 'Привет, ' и str2 = 'Мир!'.С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'.
const str1 = `Привет, `;
const str2 = `Мир!`;
console.log(str1 + str2);
renderLine(5);

// Создайте переменную name и присвойте ей ваше имя.Выведите на экран фразу 'Привет, %Имя%!'.
const name = `Олег`;
console.log(`Привет, ${name}!`);
renderLine(6);

// Функция prompt
// Спросите имя пользователя с помощью методы prompt.Выведите с помощью alert сообщение 'Ваше имя %имя%'.
function askName() {
  const name1 = prompt(`Имя скажи-ка`, ``);
  console.log(`Ваше имя ${name1}`);
  renderLine(7);
}
/* askName(); */

// Спросите у пользователя число.Выведите с помощью alert квадрат этого числа.
function askNum() {
  const num1 = +prompt(`А теперь назови число`, ``);
  console.log(`Держи его квадрат ${Math.pow(num1, 2)}`);
  renderLine(8);
}
/* askNum(); */

// Обращение к символам строки
// Создайте переменную str и присвойте ей значение 'abcde'.Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.
const str3 = `abcde`;
console.log(str3[0], str3[2], str3[str3.length - 1]);
renderLine(9);

// Создайте переменную num и присвойте ей значение '12345'.Найдите произведение(умножение) цифр этого числа.
const strNum = `12345`;
const res = strNum.split(``).reduce((prev, cur) => prev * cur, 1);
console.log(res);
renderLine(10);

//   Практика
// Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.
console.log(`час`, 60 * 60);
console.log(`сутки`, 60 * 60 * 24);
console.log(`час`, 60 * 60 * 24 * new Date(2018, 7, 0).getDate()); // число дней в июле 2018
renderLine(11);

// Создайте три переменные - час, минута, секунда.С их помощью выведите текущее время в формате 'час:минута:секунда'.
const date = new Date();
const hour = (`0` + date.getHours()).slice(-2);
const min = (`0` + date.getMinutes()).slice(-2);
const sec = (`0` + date.getSeconds()).slice(-2);
console.log(`${hour}:${min}:${sec}`);
renderLine(12);


