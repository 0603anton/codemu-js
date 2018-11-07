'use strict';

const renderLine = function () {
  let iterator = 1;
  return () => {
    console.log(`-------------------------${iterator}--------------------------`);
    iterator += 1;
  };
}();

// Дана строка 'js'.Сделайте из нее строку 'JS'.
(function () {
  const str = `js`;
  console.log(str.toUpperCase());
  renderLine();
})();

// Дана строка 'JS'.Сделайте из нее строку 'js'.
(function () {
  const str = `JS`;
  console.log(str.toLowerCase());
  renderLine();
})();

// Дана строка 'я учу javascript!'.Найдите количество символов в этой строке.
(function () {
  const str = `я учу javascript!`;
  console.log(str.length);
  renderLine();
})();

// Дана строка 'я учу javascript!'.Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами(через substr, substring, slice).
(function () {
  const str = `я учу javascript!`;
  console.log(str.slice(2, 6));
  console.log(str.substring(2, 6));
  console.log(str.substr(2, 3));
  renderLine();
})();

// Дана строка 'я учу javascript!'.Найдите позицию подстроки 'учу'.
(function () {
  const str = `я учу javascript!`;
  console.log(str.indexOf(`учу`));
  renderLine();
})();

// Дана переменная str, в которой хранится какой - либо текст.Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'.В противном случае в переменную result запишем содержимое переменной str.
(function () {
  const cutString = (str, numSymbols = 5) => str.length > numSymbols ? str.substr(0, numSymbols).trim() + `...` : str;

  console.log(cutString(`пам пам пам`));
  console.log(cutString(`пам `));
  renderLine();
})();

// Дана строка 'Я-учу-javascript!'.Замените все дефисы на '!' с помощью глобального поиска и замены.
(function () {
  const str = `Я - учу - javascript!`;
  console.log(str.replace(/-/g, `!`));
  renderLine();
})();

// Дана строка 'я учу javascript!'.С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
(function () {
  console.log(`я учу javascript!`.split(` `));
  renderLine();
})();

// Дана строка 'я учу javascript!'.С помощью метода split запишите каждый символ этой строки в отдельный элемент массива
(function () {
  console.log(`я учу javascript!`.split(``));
  renderLine();
})();

// В переменной date лежит дата в формате '2025-12-31'.Преобразуйте эту дату в формат '31.12.2025'.
(function () {
  console.log(`2025-12-31`.split(`-`).reverse().join(`.`));
  renderLine();
})();

// Дан массив['я', 'учу', 'javascript', '!'].С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.
(function () {
  const arr = [`я`, `учу`, `javascript`, `!`];
  console.log(arr.join(`+`));
  renderLine();
})();

// Преобразуйте первую букву строки в верхний регистр.
(function () {
  const firstLetterToUpperCase = (str) => str[0].toUpperCase() + str.slice(1);
  console.log(firstLetterToUpperCase(`пунька`));
  renderLine();
})();

// Преобразуйте первую букву каждого слова строки в верхний регистр.
(function () {
  const firstLettersToUpperCase = (str) => {
    return str.split(` `).map((word) => word[0].toUpperCase() + word.slice(1)).join(` `);
  };
  console.log(firstLettersToUpperCase(`пум пум пум ! ля лЯ`));
  renderLine();
})();

// Преобразуйте строку 'var_test_text' в 'varTestText'.Скрипт, конечно же, должен работать с любыми аналогичными строками.
(function () {
  const strToCamelCase = (str) => {
    return str.split(`_`).reduce((prev, cur) => prev + cur[0].toUpperCase() + cur.slice(1));
  };
  console.log(strToCamelCase(`var_test_text`));
})();
