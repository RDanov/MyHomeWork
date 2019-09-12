window.onload = function () {
    const buttonOne = document.querySelector('#button_first');
    buttonOne.addEventListener('click', (e) => {
        timeConversionFirst();
    })
    const buttonSecond = document.querySelector('#button_second');
    buttonSecond.addEventListener('click', (e) => {
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

    const secondsInHour = 60 * 60;
    const secondsInMinute = 60;
    const hours = Math.trunc(time / secondsInHour);
    time = time % secondsInHour;
    const minutes = Math.trunc(time / secondsInMinute);
    time = time % secondsInMinute;
    let summ_of_numbers = 0;
    output.innerText = hours + "hour(s), " + minutes + "minute(s), " + time + "second(s)";
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
        if (timeElements.length != 3 || !Number.isInteger(timeElements[i])) {
            alert("enter time in format HH:MM:SS");
            return;
        }
    }
    const output = document.querySelector('#secondResult');
    const secondsInHour = 60 * 60;
    const secondsInMinute = 60;
    const resultTime = timeElements[0] * secondsInHour + timeElements[1] * secondsInMinute + timeElements[2]
    output.innerText = "times in seconds is " + resultTime + " seconds";
}

