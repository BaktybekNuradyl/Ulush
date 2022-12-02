//   contacts   form

let contactform = document.querySelector(".contact-form");
if (contactform) {
  contactform.addEventListener("submit", function (e) {
    e.preventDefault();

    let data = new FormData(this);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "../order/");
    xhr.onload = function () {
      console.log(this.responseText);
      contactform.style.display = "none";
      let info = document.querySelector(".info-footer");
      info.innerText = "Спасибо, ваша заявка принята!";
    };
    xhr.send(data);
  });
}

//    add days  admin  panel

document.addEventListener("click", (e) => {
  // e.preventDefault();
  // console.log("" + e.target.dataset.target);
  if (e.target.classList.contains("add-days__btn")) {
    document
      .querySelector("." + e.target.dataset.target)
      .classList.add("show-days");
  }
  if (e.target.classList.contains("save-tour__btn")) {
    document
      .querySelector("." + e.target.dataset.target)
      .classList.remove("show-days");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const routeWrap = document.querySelector(".route-wrapper");
  const programFix = document.querySelector(".program-fixed");
  const scrollItems = document.querySelectorAll(".img-item");

  const scrollAnimation = () => {
    let windowCenter = window.innerHeight / 2 + window.scrollY;
    scrollItems.forEach((el) => {
      let scrollOffset = el.offsetTop + el.offsetHeight / 2;
      if (windowCenter >= scrollOffset) {
        el.classList.add("animation-class");
      } else {
        el.classList.remove("animation-class");
      }
    });
  };

  window.addEventListener("scroll", () => {
    scrollAnimation();
  });

  const progFixed = () => {
    let scrollTop = window.scrollY;
    let routeCenter = routeWrap.offsetHeight / 2;

    if (scrollTop >= routeCenter) {
      programFix.classList.add("fixed");
    } else {
      programFix.classList.remove("fixed");
    }
  };

  if (document.querySelector(".about-company-wrapper")) {
    let aboutcompany_wrapper = document.querySelector(".about-company-wrapper");
    let aboutcompany_wrapper_coords =
      aboutcompany_wrapper.getBoundingClientRect();
    let aboutcompany_nav = document.querySelector(".about-company__nav");

    window.addEventListener("scroll", () => {
      if (document.querySelector(".about-company__nav")) {
        if (window.scrollY >= 5450) {
          aboutcompany_nav.style.visibility = "hidden";
        } else {
          aboutcompany_nav.style.visibility = "visible";
        }
      }
    });

    const aboutWrapper = document.querySelector(".about-company__info");
    let w = window.innerWidth;

    window.addEventListener("scroll", () => {
      if (document.querySelector(".about-company-wrapper")) {
        if (w > 450) {
          if (window.scrollY >= aboutcompany_wrapper_coords.top) {
            aboutcompany_nav.style.position = "fixed";
            aboutWrapper.style.marginLeft = "18em";
            aboutcompany_nav.style.left =
              aboutcompany_wrapper_coords.left + "px";
            aboutcompany_nav.style.width =
              aboutcompany_wrapper_coords.width * 0.13 + "px";
            aboutcompany_nav.style.top = "10vh";
          } else {
            aboutcompany_nav.style.position = "relative";
            aboutcompany_nav.style.left = "0";
            aboutcompany_nav.style.top = "0";
            aboutWrapper.style.marginLeft = "0em";
          }
        }
      }
    });
  }
  scrollAnimation();
  window.addEventListener("scroll", () => {
    if (document.querySelector(".route-wrapper")) {
      progFixed();
    }
  });
});

//   function for change color of fixed nav about
const aboutLinks = document.querySelector(".about-company__subnav");

let aboutLink;

if (document.querySelector(".about-link")) {
  aboutLinks.addEventListener("click", (event) => {
    let aboutLink = event.target.closest(".about-link");

    if (!aboutLink) return;

    if (!aboutLinks.contains(aboutLink)) return;

    changeColorLink(aboutLink);
  });

  function changeColorLink(e) {
    if (aboutLink) {
      aboutLink.classList.remove("about-link-focus");
    }
    aboutLink = e;
    aboutLink.classList.add("about-link-focus");
  }
}

//    burger  menu
let burger = document.getElementsByClassName("burger")[0];
let show = document.getElementsByClassName("nav-item__right")[0];

if (document.querySelector(".burger")) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("show-menu");
    show.classList.toggle("show");
  });
}

//    tabs  filter  section

let faqLabel = document.querySelectorAll(".faq-label");

faqLabel.forEach(
  (item) =>
    (item.onclick = () => {
      //selektuje Answer
      item.nextElementSibling.classList.toggle("active");

      let labelIcon = item.lastElementChild;
      let icons = labelIcon.lastElementChild;
      icons.classList.toggle("rotate");
    })
);

//    atbs   about  us

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active-link");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active-link");
    });
    tab.classList.add("active-link");
    target.classList.add("active-link");
  });
});

//    audio  player

const audio = document.querySelector("audio");
const container = document.querySelector(".container-audio");
const playButton = document.querySelector(".play-button");
const musicIcon = document.querySelector(".music-icon");
const musicOn = document.querySelector(".music-on");
let isPlaying = false;

const toggleAudio = () => {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    playButton.classList.remove("playing");
    musicIcon.style.display = "block";
    musicOn.style.display = "none";
  } else {
    audio.play();
    isPlaying = true;
    playButton.classList.add("playing");
    musicIcon.style.display = "none";
    musicOn.style.display = "block";
  }
};

//    slydes  for  climat  section

//    slide  main page

let slideIndex = 1;

if (document.querySelector(".main")) {
  showSlides(slideIndex);
}

function plus(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slidesMain = document.getElementsByClassName("main");
  if (n > slidesMain.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slidesMain.length;
  }
  for (i = 0; i < slidesMain.length; i++) {
    slidesMain[i].style.display = "none";
  }
  slidesMain[slideIndex - 1].style.display = "flex";
}

//   slide tour page

//    slydes  for  climat  section

let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let index = 0;

function prevSlide(n) {
  index += n;
  changeSlide();
}

function nextSlide(n) {
  index += n;
  changeSlide();
}

if (document.querySelector(".slide-tour")) {
  changeSlide();
}

function changeSlide() {
  if (index > slides.length - 1) index = 0;

  if (index < 0) index = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

    dots[i].classList.remove("active");
  }

  slides[index].style.display = "block";
  dots[index].classList.add("active");
}

//     pop up for  map

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
  }
});
