'use strict';

const renderLine = function () {
  let iterator = 1;
  return () => {
    console.log(`-------------------------${iterator}--------------------------`);
    iterator += 1;
  };
}();

// Дан массив с числами.Выведите последовательно его элементы используя рекурсию и не используя цикл.
(function () {
  const arr = [1, 2, 3, 4, 5];
  const lastEl = (arr) => {
    if (!arr.length) {
      return;
    }
    document.write(arr.shift() + `<br>`);
    lastEl(arr);
  };
  lastEl(arr);
  renderLine();
})();

// Дано число.Сложите его цифры.Если сумма получилась более 9 - ти, опять сложите его цифры.И так, пока сумма не станет однозначным числом(9 и менее).
(function () {
  const simplifyDigits = (num) => {
    const tempSum = [...String(num)].reduce((prev, cur) => prev + Number(cur), 0);
    console.log(tempSum);
    return tempSum > 9 ? simplifyDigits(tempSum) : tempSum;
  };
  console.log(simplifyDigits(678945));
  renderLine();
})();

