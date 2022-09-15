let btnSearch = document.querySelector('.header__btn-search');
let formSearch = document.querySelector('.form-search');
let btnClose = document.querySelector('.form-search__btn-close');

formSearch.addEventListener('submit', function (e) {
   e.preventDefault();
})

btnSearch.addEventListener('click', function () {
   formSearch.classList.add('form-search_show');
})

btnClose.addEventListener('click', function () {
   formSearch.classList.remove('form-search_show');
})