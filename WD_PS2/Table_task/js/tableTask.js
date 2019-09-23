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
function sortingTableUp(numberColumn) {
    let sortedTable = Array.from(table.rows)
        .slice(1, table.rows.length-1)
        .sort((rowA, rowB) => rowA.cells[numberColumn].innerHTML > rowB.cells[numberColumn].innerHTML ? 1 : -1);
    table.tBodies[0].append(...sortedTable);
}

function sortingTableDown(numberColumn) {
    let sortedTable = Array.from(table.rows)
        .slice(1, table.rows.length-1)
        .sort((rowA, rowB) => rowA.cells[numberColumn].innerHTML < rowB.cells[numberColumn].innerHTML ? 1 : -1);
    table.tBodies[0].append(...sortedTable);
}

sortingTableDown(0);

