window.onload = function () {
    const button = document.querySelector('.button_check')
    button.addEventListener('click', e => {
        analisingText();
    })
};

function analisingText() {
    const textArea = document.querySelector('.text_for_checked').value;
    const regularOrText = document.querySelector('.my_input').value;
    if (!textArea || !regularOrText) {
        alert("Enter text and regular");
        return;
    }
    const output = document.querySelector('.result');
    output.innerHTML = textArea.replace(regularOrText, '<mark>$&</mark>');
}