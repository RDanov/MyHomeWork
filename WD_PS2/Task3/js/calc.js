window.onload = function () {
    const button = document.querySelector('.button_calculate');
    button.addEventListener('click', (e) => {
        console.log(e.target);
        timeBetweenDates();
    })
};

function timeBetweenDates() {
    const parent = document.querySelector('.container');

    if (!parent) {
        alert("enter 2 times please");
        return;
    }

    const elements = [...parent.querySelectorAll('.my_input')];
    if (!elements || elements.length < 2) {
        alert("enter 2 times please");
        return;
    }

    const firstTime = new Date(elements[0].value);
    const secondTime = new Date(elements[1].value);
    let time = Math.abs(firstTime.getTime() - secondTime.getTime()) / 1000;

    const output = document.querySelector('.result');
    if (!output || !time) {
        alert("enter 2 times please");
        return;
    }
    const secondsInYear = 60 * 60 * 24 * 365;
    const secondsInMonth = 60 * 60 * 24 * 30;
    const secondsInDay = 60 * 60 * 24;
    const secondsInHour = 60 * 60;
    const secondsInMinute = 60;
    const years = Math.trunc(time / secondsInYear);
    time = time % secondsInYear;
    const months = Math.trunc(time / secondsInMonth);
    time = time % secondsInMonth;
    const days = Math.trunc(time / secondsInDay);
    time = time % secondsInDay;
    const hours = Math.trunc(time / secondsInHour);
    time = time % secondsInHour;
    const minutes = Math.trunc(time / secondsInMinute);
    time = time % secondsInMinute;
    let summ_of_numbers = 0;
    output.innerText = years + "year(s), " + months + "month(s), " + days +
        "day(s), " + hours + "hour(s), " + minutes + "minute(s), " + time + "second(s)";
}