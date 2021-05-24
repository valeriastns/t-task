'use strict';
document.addEventListener('DOMContentLoaded', (event) => {

  /// toogle burger-menu
  const BURGER_MENU = document.querySelector('.burger-menu'),
    NAV_MENU = document.querySelector('.header__nav-menu');


  function toggleBurgerMenu() {
    BURGER_MENU.addEventListener('click', () => {
      if (BURGER_MENU.classList.contains('close')) {
        BURGER_MENU.classList.remove('close')
        NAV_MENU.style.display = "none";

      } else {
        BURGER_MENU.classList.add('close');
        NAV_MENU.style.display = "flex";
      }
    });
  };
  toggleBurgerMenu();

  /// scrollToTop
  const SCROLL_BTN = document.querySelector('.scroll-top');

  function scrollToTop() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function scrollBtnHandler() {
    let scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight
    if ((document.documentElement.scrollTop / scrollTotal) > 0.50) {
      SCROLL_BTN.classList.add('show-btn')
    } else {
      SCROLL_BTN.classList.remove('show-btn')
    }
  }

  SCROLL_BTN.addEventListener('click', scrollToTop);
  document.addEventListener('scroll', scrollBtnHandler);




});