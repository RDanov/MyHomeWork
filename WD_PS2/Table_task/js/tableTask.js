let contentFlag = true;
let nameFlag = true;
const CURRENCY = " $";
const outputTitle = document.getElementById('title-category');
const outputName = document.getElementById('title-name');
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

    document.getElementById('select').addEventListener('change', () => {
        drawTable();
    });

    document.getElementById('inputOfSearch').addEventListener('input', () => {
        drawTable();
    });

    outputTitle.addEventListener('click', () => {
        sortingTable(0, contentFlag);
        contentFlag = !contentFlag;
        drawTable();
    });
    outputName.addEventListener('click', () => {
        sortingTable(1, nameFlag);
        nameFlag = !nameFlag;
        drawTable();
    })
};

function drawTable() {
    const table = document.getElementById('table-body');
    const outputTotal = document.getElementById('total');
    const searchName = document.getElementById('inputOfSearch').value;
    const filterByCategory = document.getElementById('select').value;
    let tableBody = "<tbody>";
    const countGoods = GOODS.length;
    let total = 0;
    for (let i = 0; i < countGoods; i++) {
        tableBody += '<tr>';
        if ((filterByCategory.toLowerCase().includes(GOODS[i].category.toLowerCase())) || (filterByCategory === '')) {
            if ((GOODS[i].name.toLowerCase().includes(searchName.toLowerCase())) || (searchName === '')) {
                tableBody += "<th>" + GOODS[i].category + "</th>" + "<th>" + GOODS[i].name + "</th>" +
                    "<th>" + GOODS[i].amount + "</th>" + "<th>" + GOODS[i].price + "</th>";
                total += ((+GOODS[i].price) * (+GOODS[i].amount));
            }
        }
    }
    tableBody += "</tr>";
    table.innerHTML = tableBody;
    outputTotal.innerHTML = total + CURRENCY;
}

function sortingTable(numberColumn, contentFlag) {
    if (contentFlag) {
        if (numberColumn === 0) {
            outputTitle.innerHTML = 'Category ▲';
            outputName.innerHTML = 'Name';
            GOODS.sort((a, b) => a.category > b.category ? 1 : -1);
        } else {
            outputName.innerHTML = 'Name ▲';
            outputTitle.innerHTML = 'Category';
            GOODS.sort((a, b) => a.name > b.name ? 1 : -1);
        }
    } else {
        if (numberColumn === 0) {
            outputTitle.innerHTML = 'Category ▼';
            outputName.innerHTML = 'Name';
            GOODS.sort((a, b) => a.category > b.category ? -1 : 1);
        } else {
            outputName.innerHTML = 'Name ▼';
            outputTitle.innerHTML = 'Category';
            GOODS.sort((a, b) => a.name > b.name ? -1 : 1);
        }
    }
}