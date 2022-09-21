let btn = document.querySelector('.header__btn-burger');
let menu = document.querySelector('.header__menu-burger');

btn.addEventListener('click', function () {
   menu.classList.toggle('header__menu-burger_active');
});