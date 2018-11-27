'use strict';

const renderLine = function () {
  let iterator = 1;
  return () => {
    console.log(`-------------------------${iterator}--------------------------`);
    iterator += 1;
  };
}();

// вывести координаты при движении мышки
(function () {
  const elem = document.querySelector(`#area1`);
  elem.addEventListener(`mousemove`, (ev) => {
    elem.innerHTML = `x: ${ev.clientX} y: ${ev.clientY}`;
  });
})();

// по клику задать координаты левому верхнему углу квадрата
(function () {
  const elem = document.querySelector(`#area2`);
  const innerElem = elem.querySelector(`.square`);
  elem.addEventListener(`click`, (ev) => {
    innerElem.style.left = ev.offsetX + `px`;
    innerElem.style.top = ev.offsetY + `px`;
  });
})();

// по клику задать координаты центру квадрата
(function () {
  const elem = document.querySelector(`#area3`);
  const innerElem = elem.querySelector(`.square`);
  elem.addEventListener(`click`, (ev) => {
    innerElem.style.left = ev.offsetX - (innerElem.offsetWidth / 2) + `px`;
    innerElem.style.top = ev.offsetY - (innerElem.offsetHeight / 2) + `px`;
  });
})();

// вывести код нажатой клавиши, саму нажатую клавишу
(function () {
  const input = document.querySelector(`#area4 input`);
  const output = document.querySelector(`#area4 .output`);

  input.addEventListener(`keypress`, ({target, key, keyCode}) => {
    target.value = ``;
    output.innerHTML = `код: ${keyCode} клавиша ${key}`;
  });
})();

// Дан элемент.Сделайте так, чтобы по клику на него он красился в красный цвет, если в момент клика нажата клавиша Ctrl, и в зеленый цвет, если в момент клика нажата клавиша Alt.
(function () {
  const area = document.querySelector(`#area5`);
  console.log(area);
  area.addEventListener(`click`, ({altKey, ctrlKey}) => {
    if (altKey && ctrlKey) {
      area.innerHTML = `А ты жадный!!!!!!!!!!`;
    } else if (ctrlKey) {
      area.style.backgroundColor = `green`;
    } else if (altKey) {
      area.style.backgroundColor = `red`;
    } else {
      area.style.backgroundColor = null;
    }
  });
})();

// Дан инпут.В него вводится текст и нажимается клавиша Enter(ее код имеет номер 13).Сделайте так, чтобы по нажатию Enter введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.

(function () {
  const input = document.querySelector(`#area6 input`);
  const output = document.querySelector(`#area6 .output`);

  input.addEventListener(`keypress`, ({target, key}) => {
    if (key === `Enter`) {
      output.innerHTML = `${target.value}`;
      target.value = ``;
    }
  });
})();

// Дан ul, в нем несколько li.Под ul сделайте кнопку, по нажатию на которую в конец ul будет добавляться новый li с текстом 'пункт'.Сделайте так, чтобы при клике на каждый li, ему в конец добавлялся '!'.Это должно работать и для вновь добавленных li.Задачу решите с помощью делегирования(то есть событие должно быть навешано на ul).
(function () {
  const list = document.querySelector(`#area7 .list`);
  const btn = document.querySelector(`#area7 .add`);

  btn.addEventListener(`click`, () => {
    const newItem = document.createElement(`li`);
    newItem.textContent = `New item`;
    list.appendChild(newItem);
  });

  list.addEventListener(`click`, ({target}) => {
    const li = target.closest(`li`);
    if (li) {
      li.textContent += `!`;
    }
  });
})();

// Дана таблица с юзерами с двумя колонками: имя и фамилия.Под таблицей сделайте форму, с помощью которой можно будет добавить нового юзера в таблицу.Сделайте так, чтобы при клике на любую ячейку появлялся prompt, с помощью которого можно изменить текст ячейки.Задачу решите с помощью делегирования(то есть событие должно быть навешано на table).
(function () {
  const table = document.querySelector(`#area8 table`);
  const tbodyRef = table.getElementsByTagName(`tbody`)[0];
  const firstNameInput = document.querySelector(`#area8 .firstName`);
  const lastNameInput = document.querySelector(`#area8 .lastName`);
  const btn = document.querySelector(`#area8 button`);
  const form = document.querySelector(`#area8 form`);


  function checkInputs() {
    return firstNameInput.value && lastNameInput.value ? true : alert(`Заполни все поля`);
  }

  function createUserArray(firstName, lastName) {
    const user = [];
    user[0] = firstName.value;
    user[1] = lastName.value;
    return user;
  }

  function addRow(user) {
    const row = tbodyRef.insertRow(tbodyRef.rows.length);
    const firstSell = row.insertCell(0);
    const secondSell = row.insertCell(1);
    firstSell.textContent = user[0];
    secondSell.textContent = user[1];
  }

  function addNewInformation(node) {
    const newText = prompt(`Добавьте новую информацию`, node.textContent);
    if (newText) {
      node.textContent = newText;
    }
  }

  table.addEventListener(`click`, (ev) => {
    const target = ev.target;
    const td = target.closest(`td`);
    if (td) {
      addNewInformation(td);
    }
  });

  form.addEventListener(`submit`, (ev) => {
    ev.preventDefault();
    if (checkInputs()) {
      const user = createUserArray(firstNameInput, lastNameInput);
      addRow(user);
      firstNameInput.value = ``;
      lastNameInput.value = ``;
    }
  });
})();
