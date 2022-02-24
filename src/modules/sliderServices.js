import Swiper, { Autoplay, Navigation } from "swiper";

Swiper.use([Autoplay]);
//Swiper.use([Navigation]);

const sliderServices = () => {
    //  const arrow = document.querySelector(".swiper-button-next");

    //  arrow.style.position = "";

    const mySwiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            200: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
        },

    });

};

export default sliderServices;