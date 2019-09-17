window.onload = function () {
    const textArea = document.querySelector('.link_and_ip');
    textArea.addEventListener('blur', (e) => {
        console.log(e.target);
        const links = e.target.value;
        checkAndSorting(links);
    })
};

function checkAndSorting(links) {

    if (!links) {
        alert("enter links and IP-addresses please");
        return;
    }

    let elements = links.split(',');
    for (let i = elements.length; i >= 0; i--) {

        if (!checkIPorAddress(elements[i])) {
            elements.splice(i, 1);
        }
    }

    if (elements.length === 0) {
        alert("no addresses and links");
        return;
    }
    const output = document.querySelector('.result');
    let outputText;

    for (let i = 0; i < elements.length - 1; i++) {
        outputText += elements[i] + ", ";
    }
    outputText += elements[elements.length - 1];
    // if (!outputText) outputText = ;
    output.innerText = outputText;
}

function checkIPorAddress(element) {
    if (checkIP(element))
        return true;
}

function checkIP(ipAddress) {

    // ipAddress = ipAddress.split('.');
    // // if (ipAddress.length != 4 || ipAddress.length != 6) return false;
    // for (i = 0; i < ipAddress.length; i++) {
    //     if (!ipAddress[i] || ipAddress[i] > 255) return false;
    // }

    return true;

}
