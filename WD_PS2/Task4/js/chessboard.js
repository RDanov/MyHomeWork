let horizontalQuantity = 0;
let verticalQuantity = 0;

window.onload = function () {
    const button = document.querySelector('.button_bild');
    button.addEventListener('click', (e) => {
        console.log(e.target);

        sizeChessBoard();
        drawChessBoard(horizontalQuantity, verticalQuantity);
    })
};

function sizeChessBoard() {
    const parent = document.querySelector('.container');

    if (!parent) {
        alert("enter the size of the chessboard in the format 8x8");
        return;
    }

    const element = [...parent.querySelectorAll('.my_input')];
    if (!element || element.length !== 1) {
        alert("enter the size of the chessboard in the format 8x8");
        return;
    }

    let sizeOfChessboard = element[0].value.split('x');
    horizontalQuantity = +sizeOfChessboard[0];
    verticalQuantity = +sizeOfChessboard[1];
    if (sizeOfChessboard.length != 2 || !Number.isInteger(horizontalQuantity) || !Number.isInteger(verticalQuantity)) {
        alert("enter the size of the chessboard in the format 8x8");
        horizontalQuantity = 0;
        verticalQuantity = 0;
    }
}

function drawChessBoard() {
    if (horizontalQuantity == 0 || verticalQuantity == 0) return;
    const chessBoard = document.querySelector('.chessboard');
    ctx = chessBoard.getContext('2d');
    chessBoard.width = 1000;
    // chessBoard.border = 2;
    const sizeOfBlock = +(chessBoard.width / horizontalQuantity);
    chessBoard.height = +(verticalQuantity * sizeOfBlock);
    let flag = 1;
    for (let i = 0; i < verticalQuantity; i++) {
        for (let j = 0; j < horizontalQuantity / 2; j++) {
            if (flag > 0) {
                ctx.fillRect(2 * j * sizeOfBlock, i * sizeOfBlock, sizeOfBlock, sizeOfBlock)
            } else {
                ctx.fillRect((2 * j + 1) * sizeOfBlock, i * sizeOfBlock, sizeOfBlock, sizeOfBlock)
            }
        }
        flag = -flag;
    }
}
