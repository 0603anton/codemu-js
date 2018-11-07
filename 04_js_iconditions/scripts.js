'use strict';

function renderLine(num = 0) {
  console.log(`-------------------------${num}--------------------------`);
}

// На switch-case
//   Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее.Решите задачу через switch-case.Показать решение.
/*eslint-disable */
const callSeason = (num = 1) => {
  switch (num) {
    case 1:
      return `Зима`;
    case 2:
      return `Весна`;
    case 3:
      return `Лето`;
    case 4:
      return `Осень`;
  }
};
console.log(callSeason(3));
renderLine(1);
/* eslint-enable */

//     Задачи
//     В переменной day лежит какое - то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число(в первую, вторую или третью).Показать решение.
const nameDecade = (day) => {
  return day <= 10 ? `Первая` : day > 10 && day <= 20 ? `Вторая` : `Третья`;
};
console.log(nameDecade(30));
renderLine(2);

//     В переменной month лежит какое - то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц(зима, лето, весна, осень).Показать решение.
const nameSeason2 = (month) => {
  if (month < 1 || month > 12) {
    return `Месяцев всего 12`;
  }
  return month === 12 || month <= 2 ? `Зима` : month <= 5 ? `Весна` : month <= 8 ? `Лето` : `Осень`;
};
console.log(nameSeason2(5));
renderLine(3);

//     Дана строка, состоящая из символов, например, 'abcde'.Проверьте, что первым символом этой строки является буква 'a'.Если это так - выведите 'да', в противном случае выведите 'нет'.Показать решение.
const checkFirstSymbol = (str = `abcde`) => {
  return str[0] === `a` ? `да` : `нет`;
};
console.log(checkFirstSymbol(`abcde`));
renderLine(4);

//     Дана строка с цифрами, например, '12345'.Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.Показать решение.
const checkFirstSymbol1 = (str = `abcde`) => {
  return [`1`, `2`, `3`].includes(str[0]) ? `да` : `нет`;
};
console.log(checkFirstSymbol1(`512345`));
renderLine(5);

//     Дана строка из 3 - х цифр.Найдите сумму этих цифр.То есть сложите как числа первый символ строки, второй и третий.Показать решение.
const str = `674`;
console.log(Array.from(str).reduce((prev, cur) => Number(prev) + Number(cur)));
renderLine(6);

//     Дана строка из 6 - ти цифр.Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр.Если это так - выведите 'да', в противном случае выведите 'нет'.Показать решение.
const str1 = `6749804`;
const sum1 = (Array.from(str1.slice(0, 3)).reduce((prev, cur) => Number(prev) + Number(cur)));
const sum2 = (Array.from(str1.slice(3, 6)).reduce((prev, cur) => Number(prev) + Number(cur)));
console.log(sum1 === sum2);
renderLine(6);
