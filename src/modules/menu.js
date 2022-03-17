"use strict";
const menu = () => {
  const orderCall = document.querySelector(".button"),
    headerModal = document.querySelector(".header-modal"),
    overlay = document.querySelector(".overlay"),
    headerModalClose = document.querySelector(".header-modal__close"),
    servicesModal = document.querySelector(".services-modal"),
    servicesModalClose = document.querySelector(".services-modal__close"),
    serviceButtons = document.querySelectorAll(".service-button");
  serviceButtons.forEach((serviceButton) => {
    serviceButton.addEventListener("click", (e) => {
      e.preventDefault();
      overlay.style.display = "block";
      servicesModal.style.display = "block";
    });
  });
  servicesModalClose.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.style.display = "none";
    servicesModal.style.display = "none";
  });
  orderCall.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.style.display = "block";
    headerModal.style.display = "block";
  });
  headerModalClose.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.style.display = "none";
    headerModal.style.display = "none";
  });
};
export default menu;
