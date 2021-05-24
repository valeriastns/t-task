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


  let cardHtmlTemplate = (catCard) => `
  <div class="card">
  <div class="card__img" style="background-image: url(${catCard.url})">
    <div class="add">
      ${!catCard.onsale ?`<div class="add__sale" style="visibility: hidden"></div>`:`<div class="add__sale">${catCard.onsale}%</div>`}
      <button class="btn add__favorite saved"></button>
    </div>
  </div>
  <div class="card__info">
    <div class="card__info-title">${catCard.title}</div>
    <div class="card__info-descr">
      <div class="color">Коричневый окрас</div>
      <div class="age"><span class="bold">2 мес.</span> Возраст </div>
      <div class="additional"><span class="bold">4</span> кол-во лап</div>
    </div>
    <div class="card__info-price">${catCard.price} руб.</div>
  </div>
  ${!catCard.status ? `<button class="buy-btn btn ">Купить</button>` : `<button class="sold buy-btn btn ">Продан</button>`}
</div>  
  `

  let catsCards = [
    {
      url: "assets/images/cat-1.jpg",
      title: "Кот полосатый",
      price: "20 000",
      status: "sold",
      onsale: 30
    },
    {
      url: "assets/images/cat-2.jpg",
      title: "Кот полосатый",
      price: "33 000",
    },
    {
      url: "assets/images/cat-3.jpg",
      title: "Кот полосатый",
      price: "42 000",
    },
    {
      url: "assets/images/cat-2.jpg",
      title: "Кот полосатый",
      price: "40 000",
    },
    {
      url: "assets/images/cat-3.jpg",
      title: "Кот полосатый",
      price: "35 000",
      status: "sold",
      onsale: 40
    },
    {
      url: "assets/images/cat-1.jpg",
      title: "Кот полосатый",
      price: "30 000",
      status: "sold",
    },
     {
      url: "assets/images/cat-3.jpg",
      title: "Кот полосатый",
      price: "25 000",
    },
     {
      url: "assets/images/cat-1.jpg",
      title: "Кот полосатый",
      price: "10 000",
      onsale: 40
    },
    {
      url: "assets/images/cat-2.jpg",
      title: "Кот полосатый",
      price: "15 000",
      status: "sold",
      onsale: 40
    },
  ]

  let catsCardsHolder = document.querySelector('.cats-cards')
  catsCardsHolder.insertAdjacentHTML('afterbegin', catsCards.map(catCard => cardHtmlTemplate(catCard)).join(''));

});