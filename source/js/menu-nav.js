// document.addEventListener('DOMContentLoaded', function() {
//   let navMain = document.querySelector('.main-nav__list');
//   let navToggle = document.querySelector('.main-nav__toggle');
//   let navToggleImage = document.querySelectorAll('.main-nav__toggle-img');
//   navMain.classList.remove('main-nav__list--no-js');
//   navToggle.addEventListener('click', function() {
//     navMain.classList.toggle('main-nav__list--close');
//     navToggleImage.forEach(e => e.classList.toggle('main-nav__toggle-image--close'));
//   });
// })


document.addEventListener('DOMContentLoaded', function() {
  let pageHeader = document.querySelector('.page-header')
  let mainNav = document.querySelector('.main-nav')
  let mainNavList = document.querySelector('.main-nav__list')
  let mainNavToggle = document.querySelector('.main-nav__toggle')
  pageHeader.classList.remove('page-header--no-js')
  mainNav.classList.remove('main-nav--no-js')
  mainNavList.classList.remove('main-nav__list--no-js')
  mainNavList.classList.add('main-nav__list--closed')
  mainNavToggle.classList.remove('main-nav__toggle--no-js')
  mainNavToggle.addEventListener('click', function() {
    mainNavToggle.classList.toggle('main-nav__toggle--closed');
    mainNavList.classList.toggle('main-nav__list--closed');
  })
})
