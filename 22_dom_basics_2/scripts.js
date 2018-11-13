'use strict';

const renderLine = function () {
  let iterator = 1;
  return () => {
    console.log(`-------------------------${iterator}--------------------------`);
    iterator += 1;
  };
}();

(function () {
  const elem = document.querySelector(`#area-1 .elem`);
  const addClassBtn = document.querySelector(`#area-1 .addClass`);
  const removeClassBtn = document.querySelector(`#area-1 .removeClass`);
  const hasClassBtn = document.querySelector(`#area-1 .hasClass`);
  const toggleClassBtn = document.querySelector(`#area-1 .toggleClass`);
  const numClassBtn = document.querySelector(`#area-1 .showClassNum`);
  const showClassesBtn = document.querySelector(`#area-1 .showClasses`);
  const showTagNameBtn = document.querySelector(`#area-1 .showTagName`);
  const addTagNameBtn = document.querySelector(`#area-1 .addTagName`);
  // Дан элемент #elem.Добавьте ему класс www.
  addClassBtn.onclick = () => elem.classList.add(`www`);
  // Дан элемент #elem.Удалите у него класс www.
  removeClassBtn.onclick = () => elem.classList.remove(`www`);
  // Дан элемент #elem.Проверьте наличие у него класса www.
  hasClassBtn.onclick = () => {
    alert(elem.classList.contains(`www`));
  };
  // Дан элемент #elem.Добавьте ему класс www, если его нет и удалите - если есть.
  toggleClassBtn.onclick = () => elem.classList.toggle(`www`);
  // Дан элемент #elem.Узнайте количество его классов.
  numClassBtn.onclick = () => alert(elem.classList.length);
  // Дан элемент #elem.Выведите последовательно алертом его классы.
  showClassesBtn.onclick = () => {
    [...elem.classList].map((item) => alert(item));
  };
  // Дан элемент #elem.По клику на него выведите название его тега в нижнем регистре.
  showTagNameBtn.onclick = () => alert(elem.tagName.toLowerCase());
  // Даны элементы.Добавьте элементу в конец название его тега в нижнем регистре.
  addTagNameBtn.onclick = () => {
    elem.innerHTML += ` [${elem.tagName.toLocaleLowerCase()}]`;
  };
})();

// Дан элемент #elem.Сделайте его красного цвета, размером 30px, добавьте ему границу.
(function () {
  const elem = document.querySelector(`#area-2 .elem`);
  elem.style.cssText = `color: red; \
  font-size: 30px; \
  border: 1px solid red`;
})();


// Дан ol.Вставьте ему в конец li с текстом 'пункт'.
(function () {
  const list = document.querySelector(`#area-3 .list`);
  const li = document.createElement(`li`);
  li.textContent = `пункт`;
  list.appendChild(li);
})();

// Дан ul.Дан массив.Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.Сделайте так, чтобы к вставляемым li было привязано следующее событие: по нажатию на li она должна вывести на экран свой текст.
// Дан элемент ul, а в нем li .Вставьте перед первым элементом #elem новую li с текстом '!!!'.
(function () {
  const list = document.querySelector(`#area-4 .list`);
  const listFirstChild = list.firstElementChild;

  const arr = [`опаньки`, `приехали`];
  arr.forEach((item) => {
    const li = document.createElement(`li`);
    li.textContent = item;
    li.onclick = ({target}) => alert(target.innerHTML);
    list.appendChild(li);
  });

  const newChild = document.createElement(`li`);
  newChild.textContent = `!!!`;
  list.insertBefore(newChild, listFirstChild);

})();

// Дан элемент #elem.Вставьте перед ним span с текстом '!!!'.
// Дан элемент #elem.Вставьте после него span с текстом '!!!'.
// Дан элемент #elem.Вставьте ему в начало span с текстом '!!!'.
// Дан элемент #elem.Вставьте ему в конец span с текстом '!!!'.

(function () {
  const elem = document.querySelector(`#area-5 .elem`);
  const buttons = document.querySelector(`#area-5 .buttons`);

  const span = document.createElement(`span`);
  span.textContent = `!!!`;

  buttons.addEventListener(`click`, ({target}) => {
    const addBtn = target.closest(`.add`);
    if (!addBtn) {
      return;
    }
    elem.insertAdjacentHTML(addBtn.dataset.action, `<span>!!!</span>`);
  });
})();

// Дан элемент #elem.Найдите первого потомка этого элемента и сделайте его текст красного цвета.
// Дан элемент #elem.Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
// Дан элемент #elem.Найдите всех потомков этого элемента и добавьте им в конец текст '!'.
// Дан элемент #elem.Найдите его соседа сверху и добавьте ему в конец текст '!'.
// Дан элемент #elem.Найдите его соседа снизу и добавьте ему в конец текст '!'.
// Дан элемент #elem.Найдите его соседа снизу его соседа снизу(следующий элемент за соседним) и добавьте ему в конец текст '!'.
// Дан элемент #elem.Найдите его родителя и покрасьте его в розовый цвет.
(function () {
  const list = document.querySelector(`#area-6 .list`);
  list.firstElementChild.style = `color: red`;
  list.lastElementChild.style = `color: red`;
  Array.prototype.slice.call(list.children).forEach((item) => (item.textContent += `!`));
  list.previousElementSibling.textContent += `!`;
  list.nextElementSibling.textContent += `!`;
  list.nextElementSibling.nextElementSibling.textContent += `!`;
  list.parentElement.style = `background-color: pink;`;
})();


// Дан элемент #parent, внутри него дан элемент #child.Дана кнопка.По нажатию на эту кнопку удалите элемент #child.
(function () {
  const parent = document.querySelector(`#area-7 .parent`);
  const child = document.querySelector(`#area-7 .child`);
  const btn = document.querySelector(`#area-7 button`);
  btn.addEventListener(`click`, () => {
    parent.removeChild(child);
  }, {once: true}); // событие срабатывает только раз
})();

// Дан ol.По нажатию на кнопку получите его последнего потомка и удалите его.
(function () {
  const parent = document.querySelector(`#area-8 .list`);
  const btn = document.querySelector(`#area-8 button`);
  btn.addEventListener(`click`, () => {
    parent.removeChild(parent.lastElementChild);
  }, {once: true});
})();

// Дан элемент.Сделайте так, чтобы по нажатию по нему этот элемент удалялся.
(function () {
  const btn = document.querySelector(`#area-9 button`);
  btn.addEventListener(`click`, function ({target}) {
    target.remove();
  }, {once: true});
})();

// Дан ol, а внутри него li.Сделайте так, чтобы по нажатию на любую li эта li удалялась.
(function () {
  const parent = document.querySelector(`#area-10 .list`);
  parent.addEventListener(`click`, ({target}) => {
    if (target.closest(`li`)) {
      target.remove();
    }
  });
})();

// Дан инпут.Дана кнопка.По нажатию на кнопку клонируйте этот инпут.
(function () {
  const btn = document.querySelector(`#area-11 button`);
  const input = document.querySelector(`#area-11 input`);
  btn.addEventListener(`click`, function () {
    input.parentNode.insertBefore(input.cloneNode(), btn);
  });
})();

// Дан массив.Создайте ul через createElement, затем вставьте каждый элемент этого массива в отдельную li внутри этой ul, затем вставьте эту ul в area-12.
(function () {
  const arr = [`One`, `Two`, `Three`];
  const area = document.querySelector(`#area-12`);
  const ul = document.createElement(`ul`);
  arr.forEach((item) => {
    const li = document.createElement(`li`);
    li.innerHTML = item;
    ul.appendChild(li);
  });
  area.appendChild(ul);
})();

// Дан инпут.В него вводится число.По потери фокуса сделайте так, чтобы каждая цифра вставилась в новый инпут.Инпутов для цифр изначально не существует, они должны создаться в процессе работы скрипта.
(function () {
  const input = document.querySelector(`#area-13 .add`);
  const area = document.querySelector(`#area-13`);
  input.addEventListener(`blur`, createInputs);
  function createInputs({target}) {
    if (target.value.length === 0) {
      return;
    }
    cleanAddedInputs();
    const arr = target.value.split(``);
    arr.forEach((item) => {
      const newInput = document.createElement(`input`);
      newInput.value = item;
      area.appendChild(newInput);
    });
  }
  function cleanAddedInputs() {
    const addedInputs = Array.from(document.querySelectorAll(`#area-13 input:not(.add)`));
    addedInputs.forEach((item) => {
      area.removeChild(item);
    });
  }
})();

// Дана кнопка.Сделайте так, чтобы по нажатию на эту кнопку, скрывался родитель этой кнопки.
(function () {
  const btn = document.querySelector(`#area-14 button`);
  btn.addEventListener(`click`, function ({target}) {
    target.parentNode.remove();
  }, {once: true});
})();
