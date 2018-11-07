'use strict';

const renderLine = function () {
  let iterator = 1;
  return () => {
    console.log(`-------------------------${iterator}--------------------------`);
    iterator += 1;
  };
}();

// Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на картинку алертом выводился ее src.

function handleClick(elem, event) {
  alert(`событие - ${event.type}`);
  alert(`ссылка - ${elem.src}`);
}

/* Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в атрибут title запишется ее текст.
 Привяжите всем ссылкам событие - по наведению на ссылку в конец ее текста дописывается ее href в круглых скобках, после первого наведению на ссылку следует отвязать от нее событие, которое добавляет href в конец текста */

(function () {
  const links = Array.from(document.querySelectorAll(`#area-2 a`));
  const addInfo = (ev) => {
    const link = ev.target;
    link.innerHTML = link.innerHTML + ` (${link.href})`;
    link.removeEventListener(`mouseover`, addInfo);
  };
  links.forEach((link) => {
    link.addEventListener(`mouseover`, () => {
      link.title = link.getAttribute(`href`);
    });
    link.addEventListener(`mouseover`, addInfo);
  });
})();

/* Привяжите всем инпутам следующее событие - по потери фокуса каждый инпут
выводит свое value в абзац с id="test" */

(function () {
  const area = document.querySelector(`#area-3`);
  const test = document.querySelector(`#area-3 .test`);
  const changeOutput = (ev) => {
    const input = ev.target.closest(`input`);
    if (!input) {
      return;
    }
    test.innerHTML = input.value;
  };
  area.addEventListener(`change`, changeOutput);

})();

// Для всех инпутов сделайте так, чтобы они выводили свой value алертом при нажатии на любой из них, но только по первому нажатию.Повторное нажатие на инпут не должно вызывать реакции.

(function () {
  const inputs = Array.from(document.querySelectorAll(`#area-4 input`));
  const alertValue = ({target}) => {
    alert(target.value);
    target.removeEventListener(`click`, alertValue);
  };
  inputs.forEach((item) => {
    item.addEventListener(`click`, alertValue);
  });
})();

// Даны абзацы с числами.По нажатию на абзац в нем должен появится квадрат числа, которое он содержит.
(function () {
  const area = document.querySelector(`#area-5`);
  const pow = ({target}) => {
    const paragraph = target.closest(`.multy`);
    if (!paragraph) {
      return;
    }
    paragraph.innerHTML = Math.pow(paragraph.innerHTML, 2);
  };
  area.addEventListener(`click`, pow);

})();

// Даны инпуты.Сделайте так, чтобы все инпуты по потери фокуса проверяли свое содержимое на правильное количество символов.Сколько символов должно быть в инпуте, указывается в атрибуте data - length.Если вбито правильное количество, то граница инпута становится зеленой, если неправильное - красной.
(function () {
  const inputs = Array.from(document.querySelectorAll(`#area-6 input`));
  const checkValue = ({target}) => {
    const length = Number(target.dataset.length);
    if (length === target.value.length) {
      target.classList.remove(`invalid`);
      target.classList.add(`valid`);
    } else {
      target.classList.remove(`valid`);
      target.classList.add(`invalid`);
    }
  };
  inputs.forEach((item) => {
    item.addEventListener(`blur`, checkValue);
  });
})();

// Даны дивы.По первому нажатию на каждый див он красится красным фоном, по второму красится обратно и так далее каждый клик происходит чередование фона.Сделайте так, чтобы было две функции: одна красит в красный цвет, другая в зеленый и они сменяли друг друга через removeEventListener.
(function () {
  const colorBlocks = Array.from(document.querySelectorAll(`#area-7 .color-block`));
  const bgToRed = ({target}) => {
    target.classList.remove(`greenBg`);
    target.classList.add(`redBg`);
    target.removeEventListener(`click`, bgToRed);
    target.addEventListener(`click`, bgToGreen);
  };
  const bgToGreen = ({target}) => {
    target.classList.remove(`redBg`);
    target.classList.add(`greenBg`);
    target.removeEventListener(`click`, bgToGreen);
    target.addEventListener(`click`, bgToRed);
  };
  colorBlocks.forEach((item) => {
    item.addEventListener(`click`, bgToRed);
  });

})();
