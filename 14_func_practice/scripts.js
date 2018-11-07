'use strict';

const renderLine = function () {
  let iterator = 1;
  return () => {
    console.log(`-------------------------${iterator}--------------------------`);
    iterator += 1;
  };
}();

// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

const isNumberInRange = (num) => num > 0 && num < 10;
console.log(isNumberInRange(11));
console.log(isNumberInRange(1));
renderLine();

// Дан массив с числами.Запишите в новый массив только те числа, которые больше нуля и меньше 10 - ти.Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
console.log([1, 2, 3, 11, 15, 6].filter(isNumberInRange));
renderLine();

// Сделайте функцию getDigitsSum(digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
const getDigitsSum = (num) => {
  return [...String(num)].reduce((prev, cur) => prev + Number(cur), 0);
};
console.log(getDigitsSum(12345));
renderLine();

// Найдите все года от 1 до 2018, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
console.log([...Array(2019).keys()].splice(1).filter((elem) => getDigitsSum(elem) === 13));
renderLine();

// Сделайте функцию isEven()(even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет.Если четное - пусть функция возвращает true, если нечетное - false.
const isEven = (num) => !(num % 2);
console.log(isEven(4));
console.log(isEven(1));

// Дан массив с целыми числами.Создайте из него новый массив, где останутся лежать только четные из этих чисел.Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
const newArr = [1, 2, 3, 4, 5, 6].filter(isEven);
console.log(newArr);

// Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей(чисел, на которое делится данное число).
const getDivisors = (num) => {
  const rawDivisors = [...Array(num).keys()].splice(2);
  return rawDivisors.filter((div) => !(num % div));
};
console.log(getDivisors(30));
renderLine();

// Дана строка.Сделайте заглавным первый символ каждого слова этой строки.Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.
const ucfirst = (str) => str.split(` `).map((elem) => elem[0].toUpperCase() + elem.slice(1)).join(` `);
console.log(ucfirst(`которая будет получать строку`));
renderLine();

// Дана строка вида 'var_text_hello'.Сделайте из него текст 'varTextHello'.
const strToCamelCase = (str) => {
  return str.split(`_`).reduce((prev, cur) => prev + cur[0].toUpperCase() + cur.slice(1));
};
console.log(strToCamelCase(`var_text_hello`));
renderLine();

// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск.Функция должна возвращать true или false.
const inArray = (text, arr) => arr.indexOf(text) !== -1;
console.log(inArray(`рамен`, [`vfvf`, `рамен`, `тофу`]));
renderLine();

// Дана строка, например, '123456'.Сделайте из нее '321654'.
const turnStr = (str) => {
  const tempArr = [];
  for (let index = 0; index < str.length; index += 3) {
    tempArr.push(str.substr(index, 3));
  }
  return tempArr.map((item) => [...item].reverse().join(``)).join(``);
};
console.log(turnStr(`12345678`));

