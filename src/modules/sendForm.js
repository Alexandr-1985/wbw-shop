const sendForm = (formID) => {
    const form = document.getElementById(formID);

    //оповещение о загрузке, о данных и отправки
    const statusBlock = document.querySelector(".help-block");
    statusBlock.style.color = "white";
    //варианты текста
    const loadText = "load...";
    const errorText = "error";
    const successText = "thanks, our manager call you";

    const sendData = data => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(res => res.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll("input");

        //создаем экземпляр formData и предаем нашу форму
        const formData = new FormData(form);
        const formBody = {};

        //отображение блока с ответом
        statusBlock.textContent = loadText;
        form.append(statusBlock);

        //создаем пустой обхект и перебираем data
        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        //придут обработанные данные от сервера
        sendData(formBody)
            .then(data => {
                statusBlock.textContent = successText;
                statusBlock.style.color = "red";
                formElements.forEach(input => {
                    input.value = "";
                });
                setTimeout(() => {
                    statusBlock.textContent = "";
                }, 2000);
            })
            .catch(error => {
                statusBlock.textContent = errorText;
            });
    };

    form.addEventListener("submit", event => {
        event.preventDefault();

        submitForm();
    });


    /*
        try {
            if (!form) {
                throw new Error("Верните форму на место");
            }

            form.addEventListener("submit", event => {
                event.preventDefault();

                submitForm();
            });
        } catch (error) {
            console.log(error.message);
        }*/
};

sendForm("form1");
sendForm("form2");
sendForm("form3");
sendForm("form4");
sendForm("form5");
sendForm("form6");
sendForm("form7");
//export default sendForm;