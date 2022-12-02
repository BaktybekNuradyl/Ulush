document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".js-overlay-modal")) {
    /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
    var modalButtons = document.querySelectorAll(".js-open-modal"),
      overlay = document.querySelector(".js-overlay-modal"),
      closeButtons = document.querySelectorAll(".js-modal-close");

    /* Перебираем массив кнопок */
    modalButtons.forEach(function (item) {
      /* Назначаем каждой кнопке обработчик клика */
      item.addEventListener("click", function (e) {
        /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
        e.preventDefault();

        /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
        var modalId = this.getAttribute("data-modal"),
          modalElem = document.querySelector(
            '.modal[data-modal="' + modalId + '"]'
          );

        /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
        modalElem.classList.add("showmodal");
        overlay.classList.add("showmodal");
      });
    });

    closeButtons.forEach(function (item) {
      item.addEventListener("click", function (e) {
        var parentModal = this.closest(".modal");

        parentModal.classList.remove("showmodal");
        overlay.classList.remove("showmodal");
      });
    });

    overlay.addEventListener("click", function () {
      document.querySelector(".modal.showmodal").classList.remove("showmodal");
      this.classList.remove("showmodal");
    });
    document.onkeydown = function (evt) {
      if (evt.key == "Escape" || evt.key == "Esc" || evt.key == 27) {
        evt.preventDefault();
        el(".modal.showmodal").classList.remove("showmodal");
        overlay.classList.remove("showmodal");
      }
    };
  }
});

// IMPROVED JAVASCRIPT & ADDED A FEW CHANGES

const slider = document.querySelector(".items");
const slidesItem = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = Math.floor(Math.random() * slidesItem.length);
let prev = current > 0 ? current - 1 : slidesItem.length - 1;
let next = current < slidesItem.length - 1 ? current + 1 : 0;

const update = () => {
  slidesItem.forEach((it) => {
    it.classList.remove("active");
    it.classList.remove("prev");
    it.classList.remove("next");
  });

  slidesItem[current].classList.add("active");
  slidesItem[prev].classList.add("prev");
  slidesItem[next].classList.add("next");
};

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => (i == 0 ? gotoPrev() : gotoNext()));
}

const gotoPrev = () =>
  current > 0 ? gotoNum(current - 1) : gotoNum(slidesItem.length - 1);
const gotoNext = () =>
  current < slidesItem.length - 1 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = (number) => {
  current = number;
  prev = current > 0 ? current - 1 : slidesItem.length - 1;
  next = current < slidesItem.length - 1 ? current + 1 : 0;
  if (document.querySelector(".slide-tour")) {
    update();
  }
};

if (document.querySelector(".slide-tour")) {
  update();
}
