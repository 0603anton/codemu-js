'use strict';

function renderLine(num = 0) {
  console.log(`-------------------------${num}--------------------------`);
}

// Циклы while и for
//  Выведите столбец чисел от 1 до 100.
const arr = [];
for (let index = 1; index <= 100; index++) {
  arr.push(index);
}
console.log(arr);
renderLine(1);

// Выведите столбец чисел от 11 до 33.
const arr1 = [];
let index1 = 11;
while (index1 < 34) {
  arr1.push(index1);
  index1 += 1;
}
console.log(arr1);
renderLine(2);

// Выведите столбец четных чисел в промежутке от 0 до 100.
const arr2 = [];
for (let index = 0; index <= 100; index++) {
  if (index % 2 !== 0) {
    continue;
  }
  arr2.push(index);
}
console.log(arr2);
renderLine(3);

// С помощью цикла найдите сумму чисел от 1 до 100.
let sum = 0;
for (let index = 0; index <= 100; index++) {
  sum += index;
}
console.log(sum);
renderLine(4);

// Работа с for для массивов
//  Дан массив с элементами[1, 2, 3, 4, 5].С помощью цикла for выведите все эти элементы на экран.
(function () {
  const arr = [1, 2, 3, 4, 5];
  for (const item of arr) {
    console.log(item);
  }
  renderLine(5);
})();

// Работа с for-in
//   Дан объект obj.С помощью цикла for-in выведите на экран ключи и элементы этого объекта.
(function () {
  const obj = {green: `зеленый`, red: `красный`, blue: `голубой`};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const element = obj[key];
      console.log(`${key} - ${element}`);
    }
  }
  renderLine(6);
})();


//   Задачи
// Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3 - х, но меньше 10.
(function () {
  const arr = [2, 5, 9, 15, 0, 4];
  for (const item of arr) {
    if (item > 3 && item < 10) {
      console.log(item);
    }
  }
  renderLine(7);
})();

// Дан массив с числами.Числа могут быть положительными и отрицательными.Найдите сумму положительных элементов массива.
(function () {
  const sumPositive = (arr) => {
    return arr.filter((item) => item > 0).reduce((prev, cur) => prev + cur);
  };
  console.log(sumPositive([2, 5, -9, -15, 0, 4]));
  renderLine(8);
})();

// Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла.Если нет - ничего делать не надо.
(function () {
  const arr = [1, 2, 5, 9, 4, 13, 4, 10];
  for (const iterator of arr) {
    if (iterator === 4) {
      console.log(`Есть`);
      break;
    }
  }
  renderLine(9);
})();

// Дан массив числами, например: [10, 20, 30, 50, 235, 3000].Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
(function () {
  const arr = [10, 20, 30, 50, 235, 3000];
  for (const iterator of arr) {
    if ([`1`, `2`, `5`].includes(String(iterator)[0])) {
      console.log(iterator);
    }
  }
  renderLine(10);
})();

// Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
(function () {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let str = `-`;
  for (const iterator of arr) {
    str += `${iterator}-`;
  }
  console.log(str);
  renderLine(11);
})();

// Составьте массив дней недели.С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
(function () {
  const arr = [`пн`, `вт`, `ср`, `чт`, `пт`, `cб`, `вс`];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (index > 4) {
      document.write(`<b>${element}</b><br>`);
      continue;
    }
    document.write(element + `<br>`);
  }
  document.write(`---------------------------------<br>`);
})();

// Составьте массив дней недели.С помощью цикла for выведите все дни недели, а текущий день выведите курсивом.Текущий день должен храниться в переменной day.
(function () {
  const arr = [`пн`, `вт`, `ср`, `чт`, `пт`, `cб`, `вс`];
  const day = new Date().getDay() - 1;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (index === day) {
      document.write(`<i>${element}</i><br>`);
      continue;
    }
    document.write(element + `<br>`);
  }
})();

// Дано число n = 1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится ? Посчитайте количество итераций, необходимых для этого(итерация - это проход цикла), и запишите его в переменную num.
(function () {
  let num = 1000;
  let iterator = 0;
  while (num >= 50) {
    num /= 2;
    iterator += 1;
  }
  console.log(iterator);
  renderLine(12);
})();
// for (var n = 1000, num = 0; n > 50; n /= 2, num++); //болеее коротко
