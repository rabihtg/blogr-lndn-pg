"use strict";
const menuBtn = document.querySelector(".header__menu-btn");
const headerNav = document.querySelector(".header__nav");
const subMenuBtns = document.querySelectorAll(".header__sub-menu-item");
const body = document.querySelector("body");

menuBtn.addEventListener("click", () => {
  headerNav.classList.toggle("off");
  headerNav.classList.toggle("on");

  if (headerNav.classList.contains("on")) {
    menuBtn.src = "./images/icon-close.svg";
  } else {
    menuBtn.src = "./images/icon-hamburger.svg";
  }

  body.classList.toggle("no-scroll");
});

subMenuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const subMenuItems = btn.nextElementSibling;
    const arrow = btn.querySelector("picture");
    btn.classList.toggle("on");
    arrow.classList.toggle("rotate-x");
    subMenuItems.classList.toggle("off");
    subMenuItems.classList.toggle("on");
  });
});
