((addHeadScript) => {
    const ClassName = {
        BLOCK: 'ymaps',
    };
    const Settings = {
        API: '//api-maps.yandex.ru/2.1/?lang=ru_RU',
    };
    const init = function() {
        const ymaps = global.ymaps;
        Array.from(document.getElementsByClassName(ClassName.BLOCK)).forEach((block)=>{
            ymaps.ready(()=>{
                // Инициализируем карту;
                var map = new ymaps.Map(block, {
                    center: [0, 0],
                    zoom: 10,
                    controls: ['fullscreenControl'],
                });

                // Добавляем точки на карту
                if (block.dataset['placemarks']) {
                    $.ajax(block.dataset['placemarks'], {
                        dataType: 'json',
                        success: (json) => {
                            // Создаем шаблон контента для Placemark
                            var placemarkContentLayout = ymaps.templateLayoutFactory.createClass('<i class="ymaps__placemark"></i>');
                            // Создаем кластер;
                            var clusterer = new ymaps.Clusterer(
                                {
                                    clusterIconColor: '#0A61FF',
                                }
                            );
                            // Формируем список точек;
                            var placemark = json.map((placemark)=> new ymaps.Placemark(
                                placemark.coords,
                                {
                                    balloonContentHeader: placemark.balloonContentHeader,
                                    balloonContentBody: placemark.balloonContentBody,
                                },
                                {
                                    iconLayout: 'default#imageWithContent',
                                    iconImageHref: '',
                                    iconContentLayout: placemarkContentLayout
                                }
                            ));
                            // Добавляем точки в кластер;
                            clusterer.add(placemark);
                            // Добавляем кластер на карту;
                            map.geoObjects.add(clusterer);
                            // Масштабируем карту по изменению размера;
                            map.events.add('sizechange', (e) => {
                                if (placemark.length > 1) {
                                    map.setBounds(map.geoObjects.getBounds());
                                } else {
                                    map.setCenter(placemark[0].geometry.getCoordinates(), 12);
                                }
                            });
                        },
                    });
                }
            });
        });
    };
    !global.ymaps ? (addHeadScript(Settings.API, init)) : init();
})(window.addHeadScript);
