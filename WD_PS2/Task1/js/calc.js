window.onload = function () {
    const button = document.querySelector('.button_calculate');
    button.addEventListener('click', (e) => {
        console.log(e.target);
        sumOfNumbers();
    })
};

function sumOfNumbers() {
    const parent = document.querySelector('.container');

    if (!parent) {
        alert("enter 2 integers please");
        return;
    }

    const elements = [...parent.querySelectorAll('.my_input')];
    if (!elements || elements.length < 2) {
        alert("enter 2 integers please");
        return;
    }

    const firstNumber = +elements[0].value;
    const secondNumber = +elements[1].value;
    if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
        alert("enter 2 integers please");
        return;
    }
    const output = document.querySelector('.result');
    if (!output) {
        alert("enter 2 integers please");
        return;
    }
    let summ_of_numbers = 0;
    const pattern = /3$|7$|2$/;
    for (let index = Math.min(firstNumber, secondNumber); index <= Math.max(firstNumber, secondNumber); index++) {
        if (pattern.test(index)) {
            summ_of_numbers += index;
        }
    }
    output.innerText = summ_of_numbers;
}