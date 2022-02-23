import animate from "./animate";
const calc = () => {
    const type = document.getElementById("calc-type");
    const typeMaterial = document.getElementById("calc-type-material");
    const inputSquare = document.getElementById("calc-input");
    const total = document.getElementById("calc-total");


    const countCalc = () => {

        let calcTypeValue = +type.options[type.selectedIndex].value;
        let calcTypeMaterial = +typeMaterial.options[typeMaterial.selectedIndex].value;
        let calcInputSquare = inputSquare.value;

        let totalValue = 0;

        if (!calcTypeValue && !calcTypeMaterial) {
            type.value = " ";
            typeMaterial.value = " ";
            inputSquare.value = " ";
        }
        //площадь * value типа балкона * value типа материала
        if (calcInputSquare) {
            totalValue = +calcInputSquare * calcTypeValue * calcTypeMaterial;
            total.value = Math.random(totalValue);

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

        if (e.target === type ||
            e.target === typeMaterial ||
            e.target === inputSquare
        ) {
            countCalc();
        }
    });

};


export default calc;