document.addEventListener('DOMContentLoaded', function() {

  //Menu
  if (document.querySelector('.page-header')) {
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
  }

  if (document.querySelector('.contact__map')) {
    let center = [59.938635, 30.323122];
    let navMain = document.querySelector('.contact__map');
    navMain.classList.remove('contact__map--no-js');

    function init() {
      let map = new ymaps.Map('map', {
        center: center,
        zoom: 16
      });

      map.geoObjects
        .add(new ymaps.Placemark([59.938635, 30.323122], {
          balloonContent: '<strong>HTML Academy</strong>',
          iconCaption: ''
        }, {
          preset: 'islands#redCircleDotIconWithCaption',
          iconCaptionMaxWidth: '50'
        }));
      map.controls.remove('geolocationControl'); // удаляем геолокацию
      map.controls.remove('searchControl'); // удаляем поиск
      map.controls.remove('trafficControl'); // удаляем контроль трафика
      map.controls.remove('typeSelector'); // удаляем тип
      map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      map.controls.remove('zoomControl'); // удаляем контрол зуммирования
      map.controls.remove('rulerControl'); // удаляем контрол правил
      map.behaviors.disable(['scrollZoom']); // отключаем скролл карты
    }
    ymaps.ready(init);
  }

})
