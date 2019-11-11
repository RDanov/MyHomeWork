const houses = [
    {house: 'House Arryn', image: 'Images/House_Arryn.png'},
    {house: 'House Baratheon', image: 'Images/House_Baratheon.png'},
    {house: 'House Greyjoy', image: 'Images/House_Greyjoy.png'},
    {house: 'House Lannister', image: 'Images/House_Lannister.png'},
    {house: 'House Martell', image: 'Images/House_Martell.png'},
    {house: 'House Stark', image: 'Images/House_Stark.png'},
    {house: 'House Targaryen', image: 'Images/House_Targaryen.png'},
    {house: 'House Tully', image: 'Images/House_Tully.png'},
    {house: 'House Tyrell', image: 'Images/House_Tyrell.png'}
];

window.onload = function () {
    for (let element of houses) {
        const imageOfHouse = $('<img alt="Image of House" src=""/>');
        const cellOfSelect = $('<div></div>');
        const nameOfHouse = $('<p></p>').text(element.house);
        $(imageOfHouse).attr({"src": element.image, "height": "25px"});
        $(cellOfSelect).append(imageOfHouse, nameOfHouse).addClass('hidden select');
        $('#dropdown').append(cellOfSelect);
    }
};

$(document).ready(function () {
    let selected = $('#select');
    $('.select').click(function () {
        selected = $(this);
        $(selected).siblings('.select').toggle('fast');
    });

    $('.select').on({
        mouseenter: function () {
            $(this).addClass('selected');
        },
        mouseleave: function () {
            $(this).removeClass('selected')
        }
    });
});

$(document).ready(function () {
    $(document).click(function (e) {
        let div = $('#dropdown');
        if ((div.has(e.target).length === 0) && div.is(":visible")) {
            $('#select').siblings('.select').hide('fast');
        }
    });
});