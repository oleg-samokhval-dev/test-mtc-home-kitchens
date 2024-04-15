import Swiper from 'swiper/bundle';

document.addEventListener('DOMContentLoaded', () => {
    const faqSlider = document.querySelector('.faq__slider');
    if (faqSlider) {
        const swiper = new Swiper(faqSlider, {
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            }
        });
    }
});
