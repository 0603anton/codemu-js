'use strict';

const renderLine = function () {
  let iterator = 1;
  return () => {
    console.log(`-------------------------${iterator}--------------------------`);
    iterator += 1;
  };
}();

// Выведите на экран текущий день.
// Выведите на экран текущий месяц.
// Выведите на экран текущий год.
(function () {
  const now = new Date();
  console.log(`день - ${now.getDate()} |`, `месяц - ${now.getMonth() + 1} |`, `год - ${now.getFullYear()}`);
  renderLine();
})();


// Выведите на экран текущую дату - время в формате '12:59:59 31.12.2014'.Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры(из 1.9.2014 сделает 01.09.2014).
(function () {
  const addZero = (num) => num <= 9 ? `0` + num : String(num);

  const now = new Date();
  const [year, month, date, hours, minutes, seconds] = [now.getFullYear(), now.getMonth() + 1, now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds()].map(addZero);
  const template = `${hours}:${minutes}:${seconds} ${date}.${month}.${year}`;
  console.log(template);
  renderLine();
})();

// Выведите на экран текущий день недели(словом, по - русски).Создайте для этого вспомогательную функцию showDay, которая параметром принимает число, а возвращает день недели по - русски.
// Узнайте, какой был 7 - го января 2015 года.
(function () {
  const showDay = (date) => {
    const days = [`вс`, `пн`, `вт`, `ср`, `чт`, `пт`, `сб`];
    return days[date];
  };
  console.log(`Сегодняшний день недели - ${showDay(new Date().getDay())}`);
  console.log(`7-го января 2015 года - ${showDay(new Date(2015, 0, 7).getDay())}`);
  renderLine();
})();

// Выведите на экран количество минут с 1 - го января 1970 года до настоящего момента времени.
(function () {
  const ms = new Date().getTime();
  console.log(`Количество минут с 1 января 1970 года - ${Math.floor(ms / (1000 * 60))}`);
  renderLine();
})();

// Выведите на экран количество часов, прошедшее между 1 марта 1988 года и текущим моментом
(function () {
  const nowTs = new Date().getTime();
  const pastTs = Date.parse(`1988-03-01T00:00:00`);
  const diff = Math.floor((nowTs - pastTs) / (1000 * 60 * 60));
  console.log(` количество часов, прошедшее между 1 марта 1988 года и текущим моментом - ${diff}`);
  renderLine();
})();


// Разность между датами
// Выведите на экран количество секунд с начала дня до настоящего момента времени.
(function () {
  const now = new Date();
  const [year, month, date] = [now.getFullYear(), now.getMonth(), now.getDate()];
  const past = new Date(year, month, date, 0, 0, 0);
  const diff = Math.floor((now - past) / 1000);
  console.log(` количество секунд, прошедших между текущим моментом и началом дня - ${diff}`);
  renderLine();
})();

// Выведите на экран количество секунд, которое осталось до конца дня.
(function () {
  const now = new Date();
  const [year, month, date] = [now.getFullYear(), now.getMonth(), now.getDate()];
  const future = new Date(year, month, date + 1, 0, 0, 0);
  const diff = Math.floor((future - now) / 1000);
  console.log(` количество секунд,  между текущим моментом и началом следующего дня - ${diff}`);

})();

// Создайте инпут, в который пользователь вводит дату своего рождения в формате '2014-12-31'(с конкретным годом).По потери фокуса выведите под инпутом сколько дней осталось до его дня рождения.Воспользуйтесь методом Date.parse.

(function () {
  const input = document.querySelector(`#area-1 input`);
  const output = document.querySelector(`#area-1 .output`);
  const calcDays = (str) => {
    let diff;
    const now = new Date();

    const [actualYear, actualMonth, actualDate] = [now.getFullYear(), now.getMonth(), +now.getDate()];
    const [birthdayMonth, birthdayDate] = [+str.substr(5, 2) - 1, +str.substr(8, 2)];

    const birthdayThisYear = new Date(actualYear, birthdayMonth, birthdayDate);
    const today = new Date(actualYear, actualMonth, actualDate);

    if (birthdayThisYear - today >= 0) {
      diff = Math.floor((birthdayThisYear - today) / (1000 * 60 * 60 * 24));
    } else {
      diff = Math.floor((new Date(actualYear + 1, birthdayMonth, birthdayDate) - today) / (1000 * 60 * 60 * 24));
    }

    return diff;
  };

  input.addEventListener(`change`, (ev) => {
    const str = ev.target.value;
    output.textContent = calcDays(str);
  });
})();

