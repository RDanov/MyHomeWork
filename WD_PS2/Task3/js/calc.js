window.onload = function () {
    const button = document.querySelector('.button_calculate');
    button.addEventListener('click', (e) => {
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
    const SECONDS_IN_MINUTE = 60;
    const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * 60;
    const SECONDS_IN_DAY = SECONDS_IN_HOUR * 24;
    const SECONDS_IN_MONTH = SECONDS_IN_DAY * 30;
    const SECONDS_IN_YEAR = SECONDS_IN_DAY * 365;
    const years = Math.trunc(time / SECONDS_IN_YEAR);
    time = time % SECONDS_IN_YEAR;
    const months = Math.trunc(time / SECONDS_IN_MONTH);
    time = time % SECONDS_IN_MONTH;
    const days = Math.trunc(time / SECONDS_IN_DAY);
    time = time % SECONDS_IN_DAY;
    const hours = Math.trunc(time / SECONDS_IN_HOUR);
    time = time % SECONDS_IN_HOUR;
    const minutes = Math.trunc(time / SECONDS_IN_MINUTE);
    time = time % SECONDS_IN_MINUTE;
    let summ_of_numbers = 0;
    output.innerText = years + " year(s), " + months + " month(s), " + days +
        " day(s), " + hours + " hour(s), " + minutes + " minute(s), " + time + " second(s)";
}