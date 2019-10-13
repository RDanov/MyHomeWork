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
    textArea = textArea.replace(new RegExp(regularOrText, 'g'), '<mark>' + '$&' + '</mark>');
    const output = document.querySelector('.result');
    output.innerHTML = textArea;
}

