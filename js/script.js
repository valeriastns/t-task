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
});
