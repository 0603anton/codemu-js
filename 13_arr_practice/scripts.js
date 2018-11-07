'use strict';

const renderLine = function () {
  let iterator = 1;
  return () => {
    console.log(`-------------------------${iterator}--------------------------`);
    iterator += 1;
  };
}();

// Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
(function () {
  let str = ``;
  let arr = [...Array(10)].map(() => {
    str += `x`;
    return str;
  });
  console.log(arr);
  renderLine();
})();

// Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.
(function () {
  let arr = [...Array(9)].map((item, i) => Array(i + 1).fill(i + 1).join(``));
  console.log(arr);
  renderLine();
})();

// Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями.Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве.Пример: arrayFill('x', 5) сделает массив['x', 'x', 'x', 'x', 'x'].
(function () {
  const arrayFill = (el, length) => {
    return Array(length).fill(el);
  };
  console.log(arrayFill(`x`, 5));
  renderLine();
})();

// Дан массив с числами.Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10 - ти.
(function () {
  const numElTo10 = (arr) => {
    let sum = 0;
    let els = 0;
    for (const elem of arr) {
      sum += elem;
      els += 1;
      if (sum >= 10) {
        return els;
      }
    }
    return `сумма элементов не превышает 10`;
  };
  console.log(numElTo10([1, 2, 3, 4, 5]));
  renderLine();
})();

// Дан массив с числами.Не используя метода reverse переверните его элементы в обратном порядке.
(function () {
  console.log([1, 2, 3].sort((a, b) => b - a));
  renderLine();
})();

// Дан двухмерный массив с числами, например[[1, 2, 3], [4, 5], [6]].Найдите сумму элементов этого массива.Массив, конечно же, может быть произвольным.
// Дан трехмерный массив с числами, например[[[1, 2], [3, 4]], [[5, 6], [7, 8]]].Найдите сумму элементов этого массива.Массив, конечно же, может быть произвольным.
(function () {
  const arrSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      const addition = Array.isArray(element) ? arrSum(element) : element;
      sum += addition;
    }
    return sum;
  };
  console.log(arrSum([[1, 2, 3], [4, 5], [6]]));
  console.log(arrSum([[[1, 2], [3, 4]], [[5, 6], [7, 8]]]));
})();

