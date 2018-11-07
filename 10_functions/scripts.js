'use strict';

const renderLine = function () {
  let iterator = 1;
  return () => {
    console.log(`-------------------------${iterator}--------------------------`);
    iterator += 1;
  };
}();

// Сделайте функцию, которая возвращает квадрат числа.Число передается параметром.
(function () {
  const pow = (num) => Math.pow(num, 2);
  console.log(pow(3));
  renderLine();
})();

// Сделайте функцию, которая возвращает сумму двух чисел.
(function () {
  const sum = (a, b) => a + b;
  console.log(sum(3, 4));
  renderLine();
})();

// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
(function () {
  const calc = (a, b, c) => (a - b) / c;
  console.log(calc(11, 4, 7));
  renderLine();
})();

// Сделайте функцию, которая принимает параметром дату, а возвращает день недели на русском языке.
(function () {
  const dateToWeekDay = (date) => date.toLocaleString(`ru`, {weekday: `long`});
  console.log(dateToWeekDay(new Date()));
})();
