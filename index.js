const menuBtn = document.querySelector(".header__menu-btn");
const headerNav = document.querySelector(".header__nav");
const subMenuBtns = document.querySelectorAll(".header__sub-menu-item");

menuBtn.addEventListener("click", () => {
  headerNav.classList.toggle("off");
  document.querySelector("body").classList.toggle("no-scroll");
  headerNav.classList.toggle("on");
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
