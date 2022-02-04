const menuBtn = document.querySelector(".header__menu-btn");
const headerNav = document.querySelector(".header__nav");
const subMenuBtns = document.querySelectorAll(".header__sub-menu-items-cont");

menuBtn.addEventListener("click", () => {
  headerNav.classList.toggle("off");
  headerNav.classList.toggle("on");
});

subMenuBtns.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", function () {
    console.log(btn);
    const subMenuItems = btn.querySelector(".header__sub-menu-items-cont");
    subMenuItems.classList.toggle("off");
    subMenuItems.classList.toggle("on");
  });
});
