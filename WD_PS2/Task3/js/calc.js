const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DAYS_IN_MONTH = 30;
const MONTHS_IN_YEAR = 12;

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
    const output = document.querySelector('.result');
    if (!firstTime.getTime() || !secondTime.getTime()) {
        alert("enter 2 times please");
        return;
    }
    if (firstTime >= secondTime) {
        calculateTimeBetweenDates(firstTime, secondTime);
    } else {
        calculateTimeBetweenDates(secondTime, firstTime);
    }

    function calculateTimeBetweenDates(firstTime, secondTime) {
        let years = firstTime.getFullYear() - secondTime.getFullYear();
        let months = firstTime.getMonth() - secondTime.getMonth();
        let days = firstTime.getDay() - secondTime.getDay();
        let hours = firstTime.getHours() - secondTime.getHours();
        let minutes = firstTime.getMinutes() - secondTime.getMinutes();
        let seconds = firstTime.getSeconds() - secondTime.getSeconds();
        if (seconds < 0) {
            minutes--;
            seconds += SECONDS_IN_MINUTE;
        }
        if (minutes < 0) {
            hours--;
            minutes += MINUTES_IN_HOUR;
        }
        if (hours < 0) {
            days--;
            hours += HOURS_IN_DAY;
        }
        if (days < 0) {
            months--;
            days += DAYS_IN_MONTH;
        }
        if (months < 0) {
            years--;
            months += MONTHS_IN_YEAR;
        }

        output.innerText = years + " year(s), " + months + " month(s), " + days +
            " day(s), " + hours + " hour(s), " + minutes + " minute(s), " + seconds + " second(s)";
    }
}