import Swiper, { Autoplay, Navigation } from "swiper";

Swiper.use([Autoplay]);
Swiper.use([Navigation]);

const sliderBenefit = () => {
    const arrow = document.querySelector(".swiper-button-next");

    arrow.style.position = "";

    const swiper = new Swiper(".swiper", {
        // Optional parameters
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        breakpoints: {
            200: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
};

export default sliderBenefit;