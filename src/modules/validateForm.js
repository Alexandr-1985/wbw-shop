const validateForm = () => {

    const getBtn = bool => {
        const getBtn = document.querySelectorAll(".btn .btn-warning");
        console.log(getBtn);
        getBtn.forEach(item => {
            item.disabled = bool;
        });
    };

    const checkData = () => {
        const form = document.querySelectorAll("form");
        const input = document.querySelectorAll("input");

        input.forEach(item => {
            item.required = true;
        });
        form.forEach(item => {
            item.addEventListener(".focusout", e => {
                let target = e.target;
                if (target.placeholder === "Ваше имя") {
                    target.value = target.value.trim().replace(/[^\s\d\a-zа-я]/gi, "");
                    if (target.value.search(/[^A-Za-zА-Яа-я]/)) {
                        target.value = "";
                        targer.style.border = "2px solid red";
                    } else { target.style.placeholder = "2px solid green"; }
                } else if (
                    target.placeholder === "Ваш телефон" || targer.placeholder === "Контактный телефон") {
                    target.value = targe.value.trim().replace(/[^\+\d\()\-]/gi, "");
                    if (target.value.length >= 17) {
                        target.style.border = "2px solid red";
                        getBtn(true);
                    }
                    if (target.value.length <= 16) {
                        target.style.border = "2px solid green";
                        getBtn(false);
                    }
                }

            });
        });

    };
    checkData();

};

export default validateForm;