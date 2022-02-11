const sliderServises = () => {
    const row = document.querySelectorAll('.row');
    const slides = document.querySelectorAll(".col-md-12");
    const serviceBlock = document.querySelector(".service-block");
    const servicesArrows = document.querySelectorAll(".services-arrows");

    let timeInterval = 2000;
    let currentSlide = 0;
    let interval;



    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    }
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

        prevSlide(slides, currentSlide, "col-md-12-active");
        prevSlide(servicesArrows, currentSlide, "services-arrows-active");
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        nextSlide(slides, currentSlide, "col-md-12-active");
        nextSlide(servicesArrows, currentSlide, "services-arrows-active");
    }

    slides.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e.target);

        if (!e.target.matches(".servicesArrows")) {
            return;
        }

        prevSlide(slides, currentSlide, "col-md-12-active");
        prevSlide(servicesArrows, currentSlide, "services-arrows-active");

        if (e.target.matches(".services__arrow--left")) {
            currentSlide--;
        } else if (e.target.matches(".services__arrow--right")) {
            currentSlide++;
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 2;
        }

        nextSlide(slides, currentSlide, "col-md-12-active");
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
    }, true);

    startSlider(timeInterval);
};

export default sliderServises;