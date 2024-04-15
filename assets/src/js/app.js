'use strict';

import heroSlider from './modules/heroSlider.js';
import faqSlider from './modules/faqSlider.js';
import gallery from './modules/gallery.js';

import '../scss/app.scss';

document.addEventListener('DOMContentLoaded', function () {
    var navOpener = document.querySelector('.nav-opener');
    var body = document.body;

    navOpener.addEventListener('click', function () {
        body.classList.toggle('nav-active');
    });
});