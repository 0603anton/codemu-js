'use strict';

const renderLine = function () {
  let iterator = 1;
  return () => {
    console.log(`-------------------------${iterator}--------------------------`);
    iterator += 1;
  };
}();

// Работа с %
//   Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
(function () {
  const a = 10;
  const b = 3;
  console.log(a % b);
  renderLine();
})();

// Даны переменные a и b.Проверьте, что a делится без остатка на b.Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.
(function () {
  const isDivideWithoutRemainnder = (a, b) => {
    const remainder = a % b;
    return remainder ? `Делится с остатком ${remainder}` : `Делится`;
  };
  console.log(isDivideWithoutRemainnder(5, 2));
  renderLine();
})();

// Работа со степенью и корнем
// Для решения задач данного блока вам понадобятся следующие методы: Math.pow, Math.sqrt.
//   Возведите 2 в 10 степень.Результат запишите в переменную st.
(function () {
  console.log(Math.pow(2, 10));
  renderLine();
})();

// Найдите квадратный корень из 245.
(function () {
  console.log(Math.sqrt(245));
  renderLine();
})();

// Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов.Для решения воспользуйтесь циклом for.
(function () {
  const arr = [4, 2, 5, 19, 13, 0, 10];
  const result = Math.sqrt(arr.reduce((previous, current) => previous + Math.pow(current, 3), 0));
  console.log(result);
  renderLine();
})();

// Работа с функциями округления
// Для решения задач данного блока вам понадобятся следующие функции: Math.round, Math.ceil, Math.floor, toFixed, toPrecision.
// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
(function () {
  const temp = Math.sqrt(379);
  console.log(Math.round(temp));
  console.log(temp.toFixed(1));
  console.log(temp.toFixed(2));
  renderLine();
})();

// Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.
(function () {
  const temp = Math.sqrt(587);
  const obj = {
    floor: Math.floor(temp),
    ceil: Math.ceil(temp),
  };
  console.log(obj);
  renderLine();
})();

// Нахождение максимального и минимального числа
// Для решения задач данного блока вам понадобятся следующие методы: Math.max, Math.min.
// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
(function () {
  const arr = [4, -2, 5, 19, -130, 0, 10];
  console.log(Math.max(...arr));
  console.log(Math.min(...arr));
  renderLine();
})();

// Работа с рандомом
// Для решения задач данного блока вам понадобятся следующие методы: Math.random.
// Выведите на экран случайное целое число от 1 до 100.
(function () {
  console.log(Math.floor((Math.random() * 100) + 1));
  renderLine();
})();

// Заполните массив 10 - ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while).
(function () {
  const arr = [];
  for (let index = 0; index < 10; index++) {
    arr.push(Math.floor((Math.random() * 100) + 1));
  }
  console.log(arr);
  renderLine();
})();


//   Задачи
// Дан массив arr.Найдите среднее арифметическое его элементов.Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
(function () {
  const arr = [12, 15, 20, 25, 59, 79];
  console.log(arr.reduce((prev, cur) => prev + cur) / arr.length);
  renderLine();
})();

// Напишите скрипт, который будет находить факториал числа.Факториал(обозначается!) - это произведение(умножение) всех целых чисел, меньше данного, и его самого.Например, 4! = 1 * 2 * 3 * 4.
(function () {
  const factorial = (num) => {
    let res = 1;
    for (let index = num; index > 1; index--) {
      res *= index;
    }
    return res;
  };
  console.log(factorial(5));
})();
