import Swiper from 'swiper/dist/js/swiper.min';
(() => {
    Array.prototype.forEach.call(document.getElementsByClassName('swiper-row'), (elem) => {
        new Swiper(elem.getElementsByClassName('swiper-container')[0], {
            slidesPerView: 'auto',
            spaceBetween: 0,
            watchSlidesVisibility: true,
            navigation: {
                nextEl: elem.getElementsByClassName('swiper-row__button_next'),
                prevEl: elem.getElementsByClassName('swiper-row__button_prev'),
            },
            pagination: {
                el: elem.getElementsByClassName('swiper-pagination'),
                type: 'bullets',
                clickable: true,
            },
        });
    });
})();
