let contentFlag = true;
let nameFlag = true;

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

let countGoods = GOODS.length;
let table = document.getElementById('table');

let tbody = document.createElement('tbody');
let tr = document.createElement('tr');

let items = ['category', 'name', 'amount', 'price'];
for (let i = 0; i < countGoods; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 4; j++) {
        let td = document.createElement('td');
        let item = GOODS[i][items[j]];
        td.innerHTML = item;
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}

table.appendChild(tbody);


window.onload = function () {
    const sortingByCategory = document.getElementById('title-category');
    const sortingByName = document.getElementById('title-name');
    // const search

    document.getElementById('select').addEventListener('change', e => {
        const selectValue = document.getElementById('select');
        filterTable(selectValue.value);
    });

    document.getElementById('inputOfSearch').addEventListener('input', e => {
        let searchName = document.getElementById('inputOfSearch');
    });
    let e = document.getElementById('select');


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

function calculateSumm() {

}

function sortingTableUp(numberColumn) {
    if (numberColumn === 0) {
        const outputTitle = document.getElementById('title-category');
        const outputName = document.getElementById('title-name');
        outputTitle.innerHTML = 'Category ▲';
        outputName.innerHTML = 'Name';
    } else {
        const outputName = document.getElementById('title-name');
        const outputTitle = document.getElementById('title-category');
        outputName.innerHTML = 'Name ▲';
        outputTitle.innerHTML = 'Category';
    }
    let sortedTable = Array.from(table.rows)
        .slice(1, table.rows.length - 1)
        .sort((rowA, rowB) => rowA.cells[numberColumn].innerHTML > rowB.cells[numberColumn].innerHTML ? 1 : -1);
    table.tBodies[0].append(...sortedTable);
}

function sortingTableDown(numberColumn) {
    if (numberColumn === 0) {
        const outputTitle = document.getElementById('title-category');
        const outputName = document.getElementById('title-name');
        outputTitle.innerHTML = 'Category ▼';
        outputName.innerHTML = 'Name';
    } else {
        const outputName = document.getElementById('title-name');
        const outputTitle = document.getElementById('title-category');
        outputName.innerHTML = 'Name ▼';
        outputTitle.innerHTML = 'Category';
    }
    let sortedTable = Array.from(table.rows)
        .slice(1, table.rows.length - 1)
        .sort((rowA, rowB) => rowA.cells[numberColumn].innerHTML < rowB.cells[numberColumn].innerHTML ? 1 : -1);
    table.tBodies[0].append(...sortedTable);
}

function filterTable(string) {
    alert(GOODS.length);
    let filterTable = Array.from(table.rows)
        .slice(1, table.rows.length - 1)
        .filter((string == rowA.cells[0]));

    table.tBodies[0].append(...sortedTable);

}


