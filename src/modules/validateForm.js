"use strict";

//import maskPhone from "./mask";

const validateForm = () => {

    const getBtn = bool => {
        const getBtn = document.querySelectorAll(".btn .btn-warning");
        console.log(getBtn);
        getBtn.forEach(item => {
            item.disabled = bool;
        });
    };

    const checkData = () => {
        //debugger;
        const form = document.querySelectorAll("form");
        const input = document.querySelectorAll("input");

        input.forEach(item => {
            item.required = true;
        });
        form.forEach(item => {
            item.addEventListener("input", e => {

                let target = e.target;
                if (target.placeholder === "ваше имя") {
                    //debugger;
                    target.value = target.value.trim().replace(/[^\w+\А-Яа-яЁё]/gi, "");
                    target.style.placeholder = "2px solid green";
                    if (target.value.search(/[^\d\s]/)) {
                        target.value = "";
                        target.style.border = "2px solid red";
                    } else { target.style.placeholder = "2px solid green"; }
                }
                if (
                    target.placeholder === "ваш телефон" || target.placeholder === "контактный телефон") {
                    target.value = target.value.trim().replace(/[^\+\d\(\d)\-]/gi, "");
                    if (target.value.length >= 17) {
                        target.style.placeholder = "2px solid red";
                        getBtn(true);
                    }
                    if (target.value.length <= 16) {
                        target.style.placeholder = "2px solid green";
                        getBtn(false);
                    }
                }
            });
        });
    };
    checkData();

    // const inputs = document.querySelectorAll("input");
    // inputs.forEach((item) => {
    //     item.addEventListener("input", (event) => {
    //         const target = event.target;
    //         if (
    //             target.placeholder === "ваше имя"
    //         ) {
    //             target.value = target.value.replace(/[^А-Яа-яЁё\ ]/, "");
    //             target.value = target.value
    //                 .trim()
    //                 .replace(/[^\s\da-zа-я]/gi, "")
    //                 .replace(/\s+/g, " ");
    //         } else if (target.placeholder === "контактный телефон") {
    //             target.classList.add("form-phone");
    //             maskPhone(".form-phone");
    //         }
    //     });
    // });

};

export default validateForm;