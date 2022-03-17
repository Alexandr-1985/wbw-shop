"use strict";
import Swiper, { Autoplay, Navigation, Pagination } from "swiper";
Swiper.use([Autoplay]);
Swiper.use([Navigation]);
Swiper.use([Pagination]);

const sliderBenefits = () => {
    const swiper = new Swiper(".swiper", {
        // Optional parameters
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".benefits__arrow--right",
            prevEl: ".benefits__arrow--left",
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
    });
};
export default sliderBenefits;