document.addEventListener('DOMContentLoaded', function() {
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
})
