// Select Scroll Top Button
const scrollTopBtn = document.querySelector(".scroll-top-btn");

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const slider = document.querySelector(".slider");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

nextBtn.addEventListener("click", function () {
  slider.scrollBy({
    left: slider.offsetWidth,
    behavior: "smooth",
  });
});

prevBtn.addEventListener("click", function () {
  slider.scrollBy({
    left: -slider.offsetWidth,
    behavior: "smooth",
  });
});

const burgerBtn = document.querySelector(".burger-container");
const menu = document.querySelector(".header-right");

burgerBtn.addEventListener("click", function () {
  menu.classList.toggle("header-right-mobile");
  burgerBtn.classList.toggle("burger-open-icon");
});
