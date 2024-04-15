import Swiper from 'swiper/bundle';

document.addEventListener('DOMContentLoaded', () => {
    const heroSlider = document.querySelector('.hero__slider');
    if (heroSlider) {
        const swiper = new Swiper(heroSlider, {
            loop: true,
            effect: 'fade',
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            }
        });
    }
});
