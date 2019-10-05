window.onload = function () {
    const button = document.querySelector('.button_check');
    button.addEventListener('click', e => {
        analisingText();
    })
};

function analisingText() {
    let textArea = document.querySelector('.text_for_checked').value;
    const regularOrText = document.querySelector('.my_input').value;
    if (!textArea || !regularOrText) {
        alert("Enter text and regular");
        return;
    }
    const regex = new RegExp(regularOrText, 'g');
    const array = [...textArea.matchAll(regex)];
    for (let index = 0; index < array.length; index++) {
        let temp = new RegExp(array[index], 'g');
        textArea = textArea.replace(temp, '<mark>' + array[index] + '</mark>');
    }
    const output = document.querySelector('.result');
    output.innerHTML = textArea;
}

