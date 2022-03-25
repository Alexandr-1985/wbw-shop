"use strict";
import Swiper, { Autoplay, Navigation, Pagination } from "swiper";
Swiper.use([Autoplay]);
Swiper.use([Navigation]);
Swiper.use([Pagination]);

const sliderServices = () => {
    const swiper = new Swiper(".swiper-service", {
        // Optional parameters
        slidesPerView: 2,
        loop: true,
        // autoplay: {
        //     delay: 1500,
        //     disableOnInteraction: false,
        // },
        // pagination: {
        //   el: ".swiper-pagination",
        //   dynamicBullets: true,
        // },
        navigation: {
            nextEl: ".services__arrow--right",
            prevEl: ".services__arrow--left",
        },
        // breakpoints: {
        //     576: {
        //         slidesPerView: 2,
        //         spaceBetween: 30,
        //     },
        //     768: {
        //         slidesPerView: 3,
        //         spaceBetween: 40,
        //     },
        // },
    });
};
export default sliderServices;