'use strict';

const renderLine = function () {
  let iterator = 1;
  return () => {
    console.log(`-------------------------${iterator}--------------------------`);
    iterator += 1;
  };
}();

(function () {
  const elem = document.querySelector(`.test`);

  // Дан элемент #elem с границами.По нажатию на кнопку выведите толщину его верхней границы.
  const bTop = document.querySelector(`[data-prop=clientTop]`);
  bTop.addEventListener(`click`, () => alert(elem.clientTop));

  // Дан элемент #elem с границами.По нажатию на кнопку выведите толщину его левой границы.
  const bLeft = document.querySelector(`[data-prop=clientLeft]`);
  bLeft.addEventListener(`click`, () => alert(elem.clientTop));

  // Дан элемент #elem с границами.По нажатию на кнопку выведите его полную ширину с учетом границы и padding.
  const ofWidth = document.querySelector(`[data-prop=offsetWidth]`);
  ofWidth.addEventListener(`click`, () => alert(elem.offsetWidth));

  // Дан элемент #elem с границами.По нажатию на кнопку выведите его полную высоту с учетом границы и padding.
  const ofHeight = document.querySelector(`[data-prop=offsetHeight]`);
  ofHeight.addEventListener(`click`, () => alert(elem.offsetHeight));

  // Дан элемент #elem с границами.По нажатию на кнопку выведите его полную ширину без учета границы, но с padding.
  const clWidth = document.querySelector(`[data-prop=clientWidth]`);
  clWidth.addEventListener(`click`, () => alert(elem.clientWidth));

  // Дан элемент #elem с границами.По нажатию на кнопку выведите его полную высоту без учета границы, но с padding.
  const clHeight = document.querySelector(`[data-prop=clientHeight]`);
  clHeight.addEventListener(`click`, () => alert(elem.clientHeight));

  // Дан элемент #elem.Получите его ширину и высоту, без учета границы и padding.
  const pureWidth = document.querySelector(`.widthHeight`);
  pureWidth.addEventListener(`click`, () => {
    const cssStyles = getComputedStyle(elem);
    const width = elem.clientWidth - parseInt(cssStyles.borderLeft, 10) - parseInt(cssStyles.borderRight, 10);
    const height = elem.clientHeight - parseInt(cssStyles.borderTop, 10) - parseInt(cssStyles.borderTop, 10);
    alert(`width: ${width} height: ${height}`);
  });

  // Дан элемент #elem с вертикальной полосой прокрутки.По нажатию на кнопку выведите на сколько элемент прокручен сверху.
  const scrTop = document.querySelector(`.scrollTop`);
  scrTop.addEventListener(`click`, () => alert(elem.scrollTop));

  // Дан элемент #elem с вертикальной полосой прокрутки.По нажатию на кнопку прокрутите его до позиции 100px сверху.
  const scrTo100 = document.querySelector(`.scrollTo`);
  scrTo100.addEventListener(`click`, () => {
    elem.scrollTop = 100;
  });

  // Дан элемент #elem с вертикальной полосой прокрутки.По нажатию на кнопку прокрутите его на 100px вниз от текущего положения.
  const scrBy100 = document.querySelector(`.scrollPlus`);
  scrBy100.addEventListener(`click`, () => {
    elem.scrollTop = elem.scrollTop + 100;
  });

  // Дан элемент #elem с вертикальной полосой прокрутки.По нажатию на кнопку выведите реальную высоту элемента с учетом прокрутки.
  const scrHeight = document.querySelector(`.scrollHeight`);
  scrHeight.addEventListener(`click`, () => alert(elem.scrollHeight));

  // Дан элемент #elem с вертикальной полосой прокрутки.По нажатию на кнопку прокрутите его до позиции 100px от нижнего края элемента.
  const scrBottom = document.querySelector(`.scrollBottom`);
  scrBottom.addEventListener(`click`, () => {
    elem.scrollTop = elem.scrollHeight - 100;
  });

})();

(function () {
  // Дана страница с вертикальной полосой прокрутки.По нажатию на кнопку узнайте на сколько страница прокручена по вертикали.
  const offset = document.querySelector(`.offset`);
  offset.addEventListener(`click`, () => alert(pageYOffset));

  // Дана страница с горизонтальной и вертикальной полосами прокрутки.По нажатию на кнопку прокрутите ее в точку 300px сверху.
  const scrTo = document.querySelector(`.scrollUpTo`);
  scrTo.addEventListener(`click`, () => {
    window.scrollTo(0, 300);
  });

  // Дана страница с вертикальной полосой прокрутки.По нажатию на кнопку прокрутите на 300px вверх от текущего положения.
  const scrBy = document.querySelector(`.scrollBy`);
  scrBy.addEventListener(`click`, () => {
    window.scrollBy(0, -300);
  });

  // По нажатию на кнопку прокрутите страницу до самого низа.
  const scrToDown = document.querySelector(`.down`);
  scrToDown.addEventListener(`click`, () => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  // По нажатию на кнопку прокрутите страницу на 400px от текущего положения.
  const scrBy400 = document.querySelector(`.downby400`);
  scrBy400.addEventListener(`click`, () => {
    window.scrollBy(0, 400);
  });

  // По нажатию на кнопку проверьте, прокручена ли страница до самого низа.Если это так - прокрутите ее в положение 100px от верхнего края.
  const scrChk = document.querySelector(`.down-infinite`);
  scrChk.addEventListener(`click`, () => {
    if (document.documentElement.clientHeight + pageYOffset === document.documentElement.scrollHeight) {
      window.scrollTo(0, 100);
    }
  });

  // Дан элемент #elem.По клику на него увеличьте его ширину и высоту в 2 раза.
  const elem1 = document.querySelector(`#elem1`);
  elem1.addEventListener(`click`, function () {
    elem1.style.height = (elem1.offsetHeight * 2) + `px`;
    elem1.style.width = (elem1.offsetWidth * 2) + `px`;
  }, {once: true});
})();


