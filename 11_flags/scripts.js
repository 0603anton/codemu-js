'use strict';

const renderLine = function () {
  let iterator = 1;
  return () => {
    console.log(`-------------------------${iterator}--------------------------`);
    iterator += 1;
  };
}();

// Дан массив с числами.Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.
(function () {

  let flag = `нет`;
  for (const elem of [111, 22323, 5, 1231, 5]) {
    if (elem === 5) {
      flag = `да`;
      break;
    }
  }
  console.log(flag);
  renderLine();
})();

// Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы.То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.

(function () {

  let flag = false;
  const num = 31;
  let temp = 2;
  while (temp < num) {
    if (num % temp === 0) {
      flag = true;
      break;
    }
    temp += 1;
  }
  console.log(flag);
  renderLine();
})();

// Дан массив с числами.Проверьте, есть ли в нем два одинаковых числа подряд.Если есть - выведите 'да', а если нет - выведите 'нет'.
(function () {
  const arr = [1211, 123, 123, 4, 5];
  let flag = `нет`;
  let temp = null;
  for (const elem of arr) {
    if (temp === elem) {
      flag = `да`;
      break;
    }
    temp = elem;
  }
  console.log(flag === `да` ? flag : `нет`);
})();
