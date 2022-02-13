const timerAction = (deadLine) => {

    const timerDays = document.querySelector(".count_1");
    const timerHours = document.querySelector(".count_2");
    const timerMinutes = document.querySelector(".count_3");
    const timerSeconds = document.querySelector(".count_4");

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
        timerDays.innerHTML = "Days: <br\/>" + getZero(getTime.days);
        timerHours.innerHTML = "Hours: <br\/>" + getZero(getTime.hours);
        timerMinutes.innerHTML = "Minutes: <br\/>" + getZero(getTime.minutes);
        timerSeconds.innerHTML = "Seconds: <br\/>" + getZero(getTime.seconds);

        if (getTime.timeRemaining <= 0) {
            //расчет до 0
            clearInterval(updateClock);
            timerDays.textContent = "00";
            timerDays.style.color = "red";
            timerHours.textContent = "00";
            timerHours.style.color = "red";
            timerMinutes.textContent = "00";
            timerMinutes.style.color = "red";
            timerSeconds.textContent = "00";
            timerSeconds.style.color = "red";
        }
    }, 1000);
};


export default timerAction;