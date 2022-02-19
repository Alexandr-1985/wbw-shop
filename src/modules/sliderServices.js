import Swiper, { Autoplay, Navigation } from "swiper";

Swiper.use([Autoplay]);
Swiper.use([Navigation]);

const sliderServices = () => {

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
        navigation: {
            nextE1: ".swiper-button-prev",
            prevEl: ".swiper-button-next",
        },
    });


    /*const row = document.querySelector(".row");
    const slides = document.querySelectorAll(".col-md-12");
    const serviceBlock = document.querySelector(".service-block");
    const servicesArrows = document.querySelectorAll(".services-arrows");
    const servicesArrowsLeft = document.querySelector(".services__arrow--left");
    const servicesArrowsRight = document.querySelector(".services__arrow--right");*/
    /*
        const row = document.querySelector(".row");
        const slides = row.querySelectorAll(".col-md-12");
        const serviceBlock = document.querySelector(".service-block");
        const servicesArrows = row.querySelectorAll(".services-arrows");
        const servicesArrowsLeft = document.querySelector(".services__arrow--left");
        const servicesArrowsRight = document.querySelector(".services__arrow--right");

        let timeInterval = 2000;
        let currentSlide = 0;
        let interval;

        const nextSlide = (elems, index, strClass) => {
            elems[index].classList.add(strClass);
        };
        const prevSlide = (elems, index, strClass) => {
            elems[index].classList.remove(strClass);
        };

        const startSlider = (timer = 2000) => {
            interval = setInterval(autoslide, timer);
        };
        const stopSlider = () => {
            clearInterval(interval);
        };

        const autoslide = () => {
            prevSlide(slides, currentSlide, "col-md-12");
            prevSlide(servicesArrows, currentSlide, "services-arrows-active");
            currentSlide++;

            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }

            nextSlide(slides, currentSlide, "col-md-12");
            nextSlide(servicesArrows, currentSlide, "services-arrows-active");
        };

        slides.addEventListener('click', (e) => {
            e.preventDefault();

            if (!e.target.matches(".servicesArrows")) {
                return;
            }

            prevSlide(serviceBlock, currentSlide[2], "service-block-active");
            prevSlide(servicesArrows, currentSlide, "services-arrows-active");

            if (e.target.matches(servicesArrowsLeft)) {
                currentSlide--;
            } else if (e.target.matches(servicesArrowsRight)) {
                currentSlide++;
            }

            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slides.length - 2;
            }

            nextSlide(serviceBlock, currentSlide[2], "service-block-active");
            nextSlide(servicesArrows, currentSlide, "services-arrows-active");


        });

        serviceBlock.addEventListener("mouseenter", (e) => {
            if (e.target.matches(".services-arrows")) {
                stopSlider();
            }
        }, true);
        serviceBlock.addEventListener("mouseleave", (e) => {
            if (e.target.matches(".services-arrows")) {
                startSlider(timeInterval);
            }
        }, true);*/

};

export default sliderServices;