const SECONDS_IN_HOUR = 60 * 60;
const SECONDS_IN_MINUTE = 60;

window.onload = function () {
    const buttonOne = document.querySelector('#button_first');
    buttonOne.addEventListener('click', () => {
        timeConversionFirst();
    });
    const buttonSecond = document.querySelector('#button_second');
    buttonSecond.addEventListener('click', () => {
        timeConversionSecond();
    })
};

function timeConversionFirst() {
    const parent = document.querySelector('.container');

    if (!parent) {
        alert("enter time in seconds please");
        return;
    }

    const elements = [...parent.querySelectorAll('#firstInput')];
    if (!elements) {
        alert("enter time in seconds please");
        return;
    }

    let time = +elements[0].value;

    const output = document.querySelector('#firstResult');
    if (!output || !time) {
        alert("enter time in seconds please");
        return;
    }

    let hours = Math.trunc(time / SECONDS_IN_HOUR);
    if (hours < 10) hours = "0" + hours;
    time = time % SECONDS_IN_HOUR;
    let minutes = Math.trunc(time / SECONDS_IN_MINUTE);
    if (minutes < 10) minutes = "0" + minutes;
    time = time % SECONDS_IN_MINUTE;
    if(time < 10) time = "0" + time;
    output.innerText = `${hours}:${minutes}:${time}`;
}

function timeConversionSecond() {
    const parent = document.querySelectorAll('.container');

    if (!parent) {
        alert("enter time in format HH:MM:SS");
        return;
    }

    const element = document.getElementById("secondInput");
    const timeElements = element.value.split(':');
    for (let i = 0; i < timeElements.length; i++) {
        timeElements[i] = +timeElements[i];
        if (!Number.isInteger(timeElements[i])) {
            alert("enter time in format HH:MM:SS");
            return;
        }
    }
    const output = document.querySelector('#secondResult');
    let resultTime = timeElements[0] * SECONDS_IN_HOUR + timeElements[1] * SECONDS_IN_MINUTE;
    if (timeElements.length === 3) resultTime += timeElements[2];
    output.innerText = "times is " + resultTime + " seconds";
}

