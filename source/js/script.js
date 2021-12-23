'use strict';
const btnMenu = document.querySelector('.navigation__toggle');
const nav = document.querySelector('.navigation');

if (btnMenu) {
  btnMenu.addEventListener('click', function (item) {
    item.preventDefault();
    nav.classList.toggle('navigation--open');
  })
}
