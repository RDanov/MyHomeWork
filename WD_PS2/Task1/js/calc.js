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
        alert("enter numbers please");
        return;
    }

    const elements = [...parent.querySelectorAll('.my_input')];
    if (!elements || elements.length < 2) {
        alert("enter numbers please");
        return;
    }

    const firstNumber = +elements[0].value;
    const secondNumber = +elements[1].value;
    if (firstNumber.isInteger || secondNumber.isInteger) {
        alert("enter numbers please");
        return;
    }
    const output = document.querySelector('.result');
    if (!output) {
        alert("enter numbers please");
        return;
    }
    let summ_of_numbers = 0;
    if (firstNumber > secondNumber) {
        for (let i = secondNumber; i <= firstNumber; i++) {
            if (Math.abs(i) % 10 === 2 || Math.abs(i) % 10 === 3 || Math.abs(i) % 10 === 7) {
                summ_of_numbers += i;
            }
        }
    } else {
        for (let i = firstNumber; i <= secondNumber; i++) {
            if (Math.abs(i) % 10 === 2 || Math.abs(i) % 10 === 3 || Math.abs(i) % 10 === 7) {
                summ_of_numbers += i;
            }
        }
    }
    output.innerText = summ_of_numbers;
}