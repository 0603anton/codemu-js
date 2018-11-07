'use strict';

const renderLine = function () {
  let iterator = 1;
  return () => {
    console.log(`-------------------------${iterator}--------------------------`);
    iterator += 1;
  };
}();

// Даны два массива: [1, 2, 3] и[4, 5, 6].Объедините их вместе.
(function () {
  console.log([1, 2, 3].concat([4, 5, 6]));
  renderLine();
})();

// Дан массив[1, 2, 3].Сделайте из него массив[3, 2, 1].
(function () {
  console.log([1, 2, 3].reverse());
  renderLine();
})();

// Дан массив[1, 2, 3].Добавьте ему в конец элементы 4, 5, 6.
(function () {
  const arr = [1, 2, 3];
  arr.push(4, 5, 6);
  console.log(arr);
  renderLine();
})();


// Дан массив[1, 2, 3].Добавьте ему в начало элементы 4, 5, 6.
(function () {
  const arr = [1, 2, 3];
  arr.unshift(4, 5, 6);
  console.log(arr);
  renderLine();
})();

// Дан массив['js', 'css', 'jq'].Выведите на экран первый элемент.
(function () {
  console.log([`js`, `css`, `jq`].shift());
  renderLine();
})();

// Дан массив['js', 'css', 'jq'].Выведите на экран последний элемент.
(function () {
  console.log([`js`, `css`, `jq`].pop());
  renderLine();
})();

// Дан массив[1, 2, 3, 4, 5].С помощью метода slice запишите в новый элементы[1, 2, 3].
(function () {
  console.log([1, 2, 3, 4, 5].slice(0, 3));
  renderLine();
})();

// Дан массив[1, 2, 3, 4, 5].С помощью метода slice запишите в новый элементы[4, 5].
(function () {
  console.log([1, 2, 3, 4, 5].slice(3));
  renderLine();
})();

// Дан массив[1, 2, 3, 4, 5].С помощью метода splice преобразуйте массив в[1, 4, 5].
(function () {
  const arr = [1, 2, 3, 4, 5];
  arr.splice(1, 2);
  console.log(arr);
  renderLine();
})();

// Дан массив[1, 2, 3, 4, 5].С помощью метода splice запишите в новый массив элементы[2, 3, 4].
(function () {
  const arr = [1, 2, 3, 4, 5].splice(1, 3);
  console.log(arr);
  renderLine();
})();

// Дан массив[1, 2, 3, 4, 5].С помощью метода splice сделайте из него массив[1, 2, 3, 'a', 'b', 'c', 4, 5].
(function () {
  const arr = [1, 2, 3, 4, 5];
  arr.splice(3, 0, `a`, `b`, `c`);
  console.log(arr);
  renderLine();
})();

// Дан массив[1, 2, 3, 4, 5].С помощью метода splice сделайте из него массив[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
(function () {
  const arr = [1, 2, 3, 4, 5];
  arr.splice(1, 0, `a`, `b`);
  arr.splice(6, 0, `c`);
  arr.splice(8, 0, `e`);
  console.log(arr);
  renderLine();
})();

// Дан массив[3, 4, 1, 2, 7].Отсортируйте его от большего к меньшему.
(function () {
  console.log([3, 4, 1, 2, 7].sort((a, b) => b - a));
  renderLine();
})();

// Дан объект { js: 'test', jq: 'hello', css: 'world' }.Получите массив его ключей.
(function () {
  console.log(Object.keys({js: `test`, jq: `hello`, css: `world`}));
})();
