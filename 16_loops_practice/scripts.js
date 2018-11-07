'use strict';

const renderLine = function () {
  let iterator = 1;
  return () => {
    console.log(`-------------------------${iterator}--------------------------`);
    iterator += 1;
  };
}();

// Выведите с помощью цикла столбец чисел от 1 до 5.
(function () {
  for (let index = 1; index < 6; index++) {
    console.log(index);
  }
  renderLine();
})();

// Выведите с помощью цикла столбец чисел от 5 до 1.
(function () {
  for (let index = 5; index > 0; index--) {
    console.log(index);
  }
  renderLine();
})();

// Выведите с помощью цикла столбец четных чисел от 1 до 5.
(function () {
  for (let index = 1; index < 6; index++) {
    if ((index % 2) === 0) {
      console.log(index);
    }
  }
  renderLine();
})();

// Заполните массив 10 - ю иксами с помощью цикла.
(function () {
  const arr = [];
  for (let index = 0; index < 10; index++) {
    arr[index] = `x`;
  }
  console.log(arr);
  renderLine();
})();

// Заполните массив числами от 1 до 10 с помощью цикла.
(function () {
  const arr = [];
  for (let index = 1; index < 11; index++) {
    arr[index - 1] = index;
  }
  console.log(arr);
  renderLine();
})();

// Заполните массив 10 - ю случайными числами(дробями) от 0 до 1 с помощью цикла.Дроби округляйте до двух знаков в дробной части.
(function () {
  const arr = [];
  for (let index = 0; index < 10; index++) {
    arr[index] = parseFloat(Math.random().toFixed(2));
  }
  console.log(arr);
  renderLine();
})();

// Заполните массив 10 - ю случайными числами от 1 до 10 с помощью цикла.
(function () {
  const arr = [];
  for (let index = 0; index < 10; index++) {
    arr[index] = Math.floor((Math.random() * 10) + 1);
  }
  console.log(arr);
  renderLine();
})();

// Дан массив с числами.С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10 - ти.
(function () {
  const arr = [1, 11, 2, 22, 33, 3];
  for (const elem of arr) {
    if (elem > 0 && elem < 10) {
      console.log(elem);
    }
  }
  renderLine();
})();

// Дан массив с числами.С помощью цикла проверьте, что в нем есть элемент со значением 5. Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл.Если такого элемента нет - ничего не выводите.
(function () {
  const arr = [1, 11, 2, 22, 5, 33, 3];
  for (const elem of arr) {
    if (elem === 5) {
      console.log(`Опаньки`);
      break;
    }
  }
  renderLine();
})();

// Дан массив с числами.С помощью цикла найдите сумму элементов этого массива.
(function () {
  const arr = [1, 11, 2, 22, 5, 33, 3];
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  console.log(sum);
  renderLine();
})();

// Дан массив с числами.С помощью цикла найдите сумму квадратов элементов этого массива.
(function () {
  const arr = [1, 2, 3];
  let sum = 0;
  arr.forEach((element) => {
    sum += Math.pow(element, 2);
  });
  console.log(sum);
  renderLine();
})();

// Дан массив с числами.Найдите среднее арифметическое его элементов(сумма элементов, делить на количество).
(function () {
  const arr = [1, 2, 3, 4];
  const average = arr.reduce((prev, cur) => prev + cur) / arr.length;
  console.log(average);
  renderLine();
})();

