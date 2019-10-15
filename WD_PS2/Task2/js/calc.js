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

    const hours = Math.trunc(time / SECONDS_IN_HOUR);
    time = time % SECONDS_IN_HOUR;
    const minutes = Math.trunc(time / SECONDS_IN_MINUTE);
    time = time % SECONDS_IN_MINUTE;
    output.innerText = hours + " hour(s), " + minutes + " minute(s), " + time + " second(s)";
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

