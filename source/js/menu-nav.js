document.addEventListener('DOMContentLoaded', function() {
  let navMain = document.querySelector('.main-nav__list');
  let navToggle = document.querySelector('.main-nav__toggle');
  let navToggleImage = document.querySelectorAll('.main-nav__toggle-img');
  navMain.classList.remove('main-nav__list--no-js');
  navToggle.addEventListener('click', function() {
    navMain.classList.toggle('main-nav__list--close');
    navToggleImage.forEach(e => e.classList.toggle('main-nav__toggle-image--close'));
  });
})
