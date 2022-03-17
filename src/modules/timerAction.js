"use strict";
const timerAction = (deadLine) => {
    const timerDays = document.querySelector(".count_1");
    const spanDays = timerDays.querySelector("span");
    const timerHours = document.querySelector(".count_2");
    const spanHours = timerHours.querySelector("span");
    const timerMinutes = document.querySelector(".count_3");
    const spanMinutes = timerMinutes.querySelector("span");
    const timerSeconds = document.querySelector(".count_4");
    const spanSeconds = timerSeconds.querySelector("span");

    const getTimeRemaining = () => {
        let dateStop = new Date(deadLine).getTime();
        let dateNow = new Date().getTime();

        //колличество милисекунд до deadLine (/1000 - получение секунд)
        let timeRemaining = (dateStop - dateNow) / 1000;

        //колличество дней оставшихся до deadLine
        let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return {
            timeRemaining,
            days,
            hours,
            minutes,
            seconds,
        };
    };

    const getZero = (n) => {
        if (n < 10) return "0" + n;
        return n;
    };

    //обновление таймера
    const updateClock = setInterval(() => {
        let getTime = getTimeRemaining();

        //заносим время в span
        /*timerDays.innerHTML = "Days: <br\/>" + getZero(getTime.days);
            timerHours.innerHTML = "Hours: <br\/>" + getZero(getTime.hours);
            timerMinutes.innerHTML = "Minutes: <br\/>" + getZero(getTime.minutes);
            timerSeconds.innerHTML = "Seconds: <br\/>" + getZero(getTime.seconds);
            */
        spanDays.innerHTML = getZero(getTime.days);
        spanHours.innerHTML = getZero(getTime.hours);
        spanMinutes.innerHTML = getZero(getTime.minutes);
        spanSeconds.innerHTML = getZero(getTime.seconds);

        function getStyle(str, size = "18px", weight = "900", color = "red") {
            str.style.fontSize = size;
            str.style.fontWeight = weight;
            str.style.color = color;
        }

        if (getTime.timeRemaining <= 0) {
            //расчет до 0
            clearInterval(updateClock);
            spanDays.innerHTML = "00";
            getStyle(timerDays);
            spanHours.innerHTML = "00";
            getStyle(timerHours);
            spanMinutes.innerHTML = "00";
            getStyle(timerMinutes);
            spanSeconds.innerHTML = "00";
            getStyle(timerSeconds);
        }
    }, 1000);
};

export default timerAction;