import Swiper from 'swiper/dist/js/swiper.min';
(() => {
    const ClassName = {
        BLOCK: 'swiper-page-pagination',
        NEXT: 'swiper-page-pagination__button_next',
        PREV: 'swiper-page-pagination__button_prev',
    };
    Array.prototype.forEach.call(document.getElementsByClassName(ClassName.BLOCK), (block) => {
        new Swiper(block.getElementsByClassName('swiper-container')[0], {
            slidesPerView: 'auto',
            spaceBetween: 0,
            watchSlidesVisibility: true,
            initialSlide: Number(block.dataset.active) - 1,
            navigation: {
                nextEl: block.getElementsByClassName(ClassName.NEXT),
                prevEl: block.getElementsByClassName(ClassName.PREV),
            },
        });
    });
})();
