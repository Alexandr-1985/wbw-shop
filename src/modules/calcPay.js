import animate from "./animate";
const calc = () => {
    const formGroup = document.querySelectorAll(".form-group");
    const type = document.getElementById("calc-type");
    const typeMaterial = document.getElementById("calc-type-material");
    const inputSquare = document.getElementById("calc-input");
    const total = document.getElementById("calc-total");

    console.log(formGroup);
    console.log(type);
    console.log(typeMaterial);
    console.log(inputSquare);
    console.log(total);

    const countCalc = () => {
        let calcTypeValue = +type.options[type.selectedIndex].value;
        let calcTypeMaterial = +typeMaterial[typeMaterial.selectedIndex].value;
        const calcInputSquare = inputSquare.value;

        if (!calcTypeValue && !calcTypeMaterial) {
            type.value = " ";
            typeMaterial.value = " ";
            inputSquare.value = " ";
        }
        //площадь * value типа балкона * value типа материала
        if (calcTypeValue.value && calcTypeMaterial.value && calcInputSquare.value) {
            totalValue = +calcInputSquare * calcTypeValue * calcTypeMaterial;
        } else {
            totalValue = 0;
        }
        getCounterSmoothAnimate(totalValue, total);

    };
    //плавный счетчик
    const getCounterSmoothAnimate = (num, elem) => {
        animate({
            duration: 500,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                elem.textContent = Math.round(num * progress);
            },
        });
    };

    inputSquare.addEventListener("input", e => {
        console.log(e.target);
        if (e.target === type ||
            e.target === typeMaterial ||
            e.target === inputSquare
        ) {
            countCalc();
        }
    });

};

export default calc;