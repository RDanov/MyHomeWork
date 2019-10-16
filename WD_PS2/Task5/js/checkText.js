window.onload = function () {
    const textArea = document.querySelector('.link_and_ip');
    const outputArea = document.querySelector('.result');
    textArea.addEventListener('blur', (e) => {
        const links = e.target.value;
        checkAndSorting(links);
    });
    outputArea.addEventListener('click', () => {
        window.open();
    })
};

function checkAndSorting(links) {

    if (links) {
        let elements = links.replace(/ /g, '').split(',');
        const regReplace = /^(https?:\/\/)/;
        for (let i = elements.length - 1; i >= 0; i--) {
            if (!checkIPorAddress(elements[i])) {
                elements.splice(i, 1);
            } else {
                elements[i] = elements[i].replace(regReplace, '');
            }
        }
        if (elements.length === 0) {
            alert("no addresses and links");
            return;
        }
        elements.sort();
        const output = document.querySelector('.result');
        let outputText = "";
        for (let i = 0; i < elements.length - 1; i++) {
            outputText += elements[i] + ", ";
        }
        outputText += elements[elements.length - 1];
        output.innerText = outputText;
    } else {
        alert("enter links and IP-addresses please");

    }
}

function checkIPorAddress(element) {
    if (checkIP(element) || checkLink(element))
        return true;
}

function checkIP(ipAddress) {
    let element;
    element = ipAddress.split('.');
    if (element.length === 4 || element.length === 6) {
        for (let i = 0; i < element.length; i++) {
            if (!element[i] || element[i] > 255) return false;
        }
        return true;
    } else {
        return false;
    }
}

function checkLink(link) {
    const myRegExp = /^((https?:\/\/)|(www\.))?([\w.]+)\.([a-z]{2,6}\.?)(\/[\w]*)*\/?$/;
    return myRegExp.test(link);
}

