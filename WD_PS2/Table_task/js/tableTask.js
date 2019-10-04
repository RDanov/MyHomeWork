let contentFlag = true;
let nameFlag = true;
const COLUMN_IN_TABLE = 4;

const GOODS = [
    {
        category: 'furniture',
        name: 'Chair',
        amount: 1,
        price: 20
    },
    {
        category: 'supplies',
        name: 'Gel Pen',
        amount: 20,
        price: 2
    },
    {
        category: 'other',
        name: 'Trash Bin',
        amount: 1,
        price: 5
    },
    {
        category: 'furniture',
        name: 'Sofa',
        amount: 1,
        price: 50
    },
    {
        category: 'supplies',
        name: 'Notebook',
        amount: 3,
        price: 3
    },
    {
        category: 'other',
        name: 'Calendar 2019',
        amount: 1,
        price: 3
    }
];


window.onload = function () {
    drawTable();
    calculateSumm();
    const sortingByCategory = document.getElementById('title-category');
    const sortingByName = document.getElementById('title-name');

    document.getElementById('select').addEventListener('change', e => {
        drawTable();
        filterTable(document.getElementById('select').value);
        filterTableBySearch(document.getElementById('inputOfSearch').value);
        calculateSumm();
    });

    document.getElementById('inputOfSearch').addEventListener('input', e => {
        drawTable();
        filterTable(document.getElementById('select').value);
        filterTableBySearch(document.getElementById('inputOfSearch').value);
        calculateSumm();
    });


    sortingByCategory.addEventListener('click', e => {
        if (contentFlag) {
            sortingTableDown(0);
            contentFlag = !contentFlag;
        } else {
            sortingTableUp(0);
            contentFlag = !contentFlag;
        }
    });
    sortingByName.addEventListener('click', e => {
        if (nameFlag) {
            sortingTableDown(1);
            nameFlag = !nameFlag;
        } else {
            sortingTableUp(1);
            nameFlag = !nameFlag;
        }
    })
};

function drawTable() {

    let countGoods = GOODS.length;
    let table = document.getElementById('table');
    if (table.rows.length > 2) {
        for (let i = table.rows.length - 2; i > 0; i--) {
            table.rows[i].remove();
        }
    }
    let tbody = document.createElement('tbody');
    let items = ['category', 'name', 'amount', 'price'];
    for (let i = 0; i < countGoods; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < COLUMN_IN_TABLE; j++) {
            let td = document.createElement('td');
            td.innerHTML = GOODS[i][items[j]];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
}

function calculateSumm() {
    const outputTotal = document.getElementById('total');
    let summTotal = 0;
    const table = document.getElementById("table");
    for (let i = 1; i < table.rows.length - 1; i++) {
        let row = table.rows[i];
        summTotal = summTotal + (+row.cells[2].innerHTML * (+row.cells[3].innerHTML));
    }
    outputTotal.innerHTML = summTotal + " $";
}

function sortingTableUp(numberColumn) {
    const outputTitle = document.getElementById('title-category');
    const outputName = document.getElementById('title-name');
    if (numberColumn === 0) {
        outputTitle.innerHTML = 'Category ▲';
        outputName.innerHTML = 'Name';
    } else {
        outputName.innerHTML = 'Name ▲';
        outputTitle.innerHTML = 'Category';
    }
    let sortedTable = Array.from(table.rows)
        .slice(1, table.rows.length - 1)
        .sort((rowA, rowB) => rowA.cells[numberColumn].innerHTML > rowB.cells[numberColumn].innerHTML ? 1 : -1);
    table.tBodies[0].append(...sortedTable);
}

function sortingTableDown(numberColumn) {
    const outputTitle = document.getElementById('title-category');
    const outputName = document.getElementById('title-name');
    if (numberColumn === 0) {
        outputTitle.innerHTML = 'Category ▼';
        outputName.innerHTML = 'Name';
    } else {
        outputName.innerHTML = 'Name ▼';
        outputTitle.innerHTML = 'Category';
    }
    let sortedTable = Array.from(table.rows)
        .slice(1, table.rows.length - 1)
        .sort((rowA, rowB) => rowA.cells[numberColumn].innerHTML < rowB.cells[numberColumn].innerHTML ? 1 : -1);
    table.tBodies[0].append(...sortedTable);
}

function filterTable(string) {
    if (string === '') {
        drawTable();
        return
    }
    const table = document.getElementById("table");
    for (let index = table.rows.length - 2; index > 0; index--) {
        let filter = table.rows[index].cells[0].innerHTML;
        if (!string.toLowerCase().includes(filter.toLowerCase())) {
            table.rows[index].remove();
        }
    }
}

function filterTableBySearch(string) {
    const table = document.getElementById("table");
    for (let index = table.rows.length - 2; index > 0; index--) {
        let filter = table.rows[index].cells[1].innerHTML;
        if (!filter.toLowerCase().startsWith(string.toLowerCase())) {
            table.rows[index].remove();
        }
    }
}

