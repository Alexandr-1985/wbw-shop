"use strict";
const smooth = () => {
  const upBtn = document.querySelector(".smooth-scroll"),
    offer = document.getElementById("offer");
  upBtn.style.display = "none";
  upBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  window.addEventListener("scroll", () => {
    if (window.pageYOffset < offer.scrollHeight - 200) {
      upBtn.style.display = "none";
    } else {
      upBtn.style.display = "block";
    }
  });
};
export default smooth;
