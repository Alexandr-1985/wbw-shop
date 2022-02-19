import animate from "./animate";


const btnServicesModal = () => {
    const button = document.querySelector(".service-button");
    const servicesModal = document.querySelector(".services-modal");
    const wrapper = document.querySelector(".overlay");
    const body = document.querySelector("body");
    const MOBILE_WIDTH = 768;

    button.addEventListener("click", e => {
        showModal();
        e.preventDefault();
    });

    const showModal = () => {
        if (document.documentElement.offsetWidth >= MOBILE_WIDTH) {
            animate({
                duration: 200,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    getStyleDisplay("block");
                    servicesModal.style.opacity = progress;
                },
            });
        }
        getStyleDisplay("none");
    };

    const closeModal = () => {
        /*   if (document.documentElement.offsetWidth >= MOBILE_WIDTH) {
               animate({
                   duration: 300,
                   timing(timeFraction) {
                       return timeFraction;
                   },
                   draw(progress) {
                       getStyleDisplay("block");
                       servicesModal.style.opacity = 1 - progress;
                       if (progress === 1) {
                           getStyleDisplay("none");
                       }
                   },
               });
           }*/
        getStyleDisplay("none");
    };

    const getStyleDisplay = str => {
        wrapper.style.display = str;
        servicesModal.style.display = str;
    };
    body.addEventListener("click", e => {
        const target = e.target;
        if (target.matches(".overlay") || target.matches(".services-modal__close")) {
            closeModal();
        }
    });
};

export default btnServicesModal;