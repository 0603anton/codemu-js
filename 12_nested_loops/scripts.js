'use strict';

const renderLine = function () {
  let iterator = 1;
  return () => {
    console.log(`-------------------------${iterator}--------------------------`);
    iterator += 1;
  };
}();

// Выведите на экран таблицу умножения(как в школьной тетради).
(function () {
  for (let i = 1; i < 10; i++) {
    let str = ``;
    for (let j = 1; j < 10; j++) {
      str += (i * j) + ` `;
    }
    document.write(str + `<br>`);
  }
  document.write(`<hr>`);
})();

//   Пирамидки
// С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.
(function () {
  let str = ``;
  for (let index = 1; index < 10; index++) {
    str += index;
  }
  console.log(str);
  renderLine();
})();

// С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str.
(function () {
  let str = ``;
  for (let index = 9; index > 0; index--) {
    str += index;
  }
  console.log(str);
  renderLine();
})();

// С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.
(function () {
  let str = `-`;
  for (let index = 1; index < 10; index++) {
    str += `${index}-`;
  }
  console.log(str);
  renderLine();
})();

// Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
(function () {
  for (let i = 1; i < 21; i++) {
    let str = ``;
    for (let j = 1; j <= i; j++) {
      str += `x`;
    }
    document.write(str + `<br>`);
  }
  document.write(`<hr>`);
})();


// С помощью двух вложенных циклов нарисуйте следующую пирамидку:
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
//
(function () {
  for (let i = 1; i < 10; i++) {
    let str = ``;
    for (let j = 1; j <= i; j++) {
      str += i;
    }
    document.write(str + `<br>`);
  }
  document.write(`<hr>`);
})();

// Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:

// xx
// xxxx
// xxxxxx
// xxxxxxxx
// xxxxxxxxxx
//
(function () {
  for (let i = 2; i < 11; i += 2) {
    let str = ``;
    for (let j = 2; j <= i; j += 2) {
      str += `xx`;
    }
    document.write(str + `<br>`);
  }
  document.write(`<hr>`);
})();
