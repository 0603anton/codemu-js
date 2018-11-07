'use strict';

const renderLine = function () {
  let iterator = 1;
  return () => {
    console.log(`-------------------------${iterator}--------------------------`);
    iterator += 1;
  };
}();

// Дана строка.Сделайте заглавным первый символ этой строки не используя цикл.Найдите два решения.
(function () {
  const firstSymboltoUpperCase = (str) => str[0].toUpperCase() + str.slice(1);
  const firstSymboltoUpperCase1 = (str) => {
    const arr = [...str];
    arr[0] = arr[0].toUpperCase();
    return arr.join(``);
  };
  console.log(firstSymboltoUpperCase(`пунька шпунька`));
  console.log(firstSymboltoUpperCase1(`пунька шпунька`));
  renderLine();
})();

// Дана строка, например, '123456'.Переверните эту строку(сделайте из нее '654321') не используя цикл.
(function () {
  console.log([...`123456`].reverse().join(``));
  renderLine();
})();

// Дано число, например, 3751. Отсортируйте цифры в нем(сделайте из него 1357) не используя цикл.
(function () {
  console.log(Number(3751.0.toString().split(``).sort().join(``)));
  renderLine();
})();

//   Проверьте, что строка начинается на http://.
(function () {
  const checkBeginning = (str) => str.substr(0, 7) === `http://`;
  console.log(checkBeginning(`http://sports.ru`));
  console.log(checkBeginning(`https://sports.ru`));
  renderLine();
})();

// Проверьте, что строка заканчивается на.html.
(function () {
  const checkEnding = (str) => str.slice(-5) === `.html`;
  console.log(checkEnding(`index.html`));
  console.log(checkEnding(`index.xml`));
  renderLine();
})();
