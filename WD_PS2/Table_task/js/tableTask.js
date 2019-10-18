let contentFlag = true;
let nameFlag = true;
const CURRENCY = " $";
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
    const filterByCategory = document.getElementById('select').value;
    const searchByName = document.getElementById('inputOfSearch').value;
    drawTable(filterByCategory, searchByName);

    document.getElementById('select').addEventListener('change', () => {
        const filterByCategory = document.getElementById('select').value;
        const searchByName = document.getElementById('inputOfSearch').value;
        drawTable(filterByCategory, searchByName);
    });

    document.getElementById('inputOfSearch').addEventListener('input', () => {
        const searchByName = document.getElementById('inputOfSearch').value;
        const filterByCategory = document.getElementById('select').value;
        drawTable(filterByCategory, searchByName);
    });

    const sortingByCategory = document.getElementById('title-category');
    sortingByCategory.addEventListener('click', () => {
        const searchByName = document.getElementById('inputOfSearch').value;
        const filterByCategory = document.getElementById('select').value;
        if (contentFlag) {
            sortingTableUp(0);
            contentFlag = !contentFlag;
        } else {
            sortingTableDown(0);
            contentFlag = !contentFlag;
        }
        drawTable(filterByCategory, searchByName);
    });
    const sortingByName = document.getElementById('title-name');
    sortingByName.addEventListener('click', () => {
        const searchByName = document.getElementById('inputOfSearch').value;
        const filterByCategory = document.getElementById('select').value;
        if (nameFlag) {
            sortingTableUp(1);
            nameFlag = !nameFlag;
        } else {
            sortingTableDown(1);
            nameFlag = !nameFlag;
        }
        drawTable(filterByCategory, searchByName);
    })
};

function drawTable(categorySelect, searchName) {
    const table = document.getElementById('table-body');
    const outputTotal = document.getElementById('total');
    let tableBody = "<tbody>";
    const countGoods = GOODS.length;
    let total = 0;
    for (let i = 0; i < countGoods; i++) {
        tableBody += '<tr>';
        if ((categorySelect.toLowerCase().includes(GOODS[i].category.toLowerCase())) || (categorySelect === '')) {
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


function sortingTableUp(numberColumn) {
    const outputTitle = document.getElementById('title-category');
    const outputName = document.getElementById('title-name');
    if (numberColumn === 0) {
        outputTitle.innerHTML = 'Category ▲';
        outputName.innerHTML = 'Name';
        GOODS.sort((a, b) => a.category > b.category ? 1 : -1);
    } else {
        outputName.innerHTML = 'Name ▲';
        outputTitle.innerHTML = 'Category';
        GOODS.sort((a, b) => a.name > b.name ? 1 : -1);
    }
}

function sortingTableDown(numberColumn) {
    const outputTitle = document.getElementById('title-category');
    const outputName = document.getElementById('title-name');
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