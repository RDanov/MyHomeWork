const API_URL = 'https://picsum.photos/';
const BIG_SIZE = '600/400';
const SMALL_SIZE = '60';
const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const IMAGES = [
    '?image=1080',
    '?image=1079',
    '?image=1069',
    '?image=1063',
    '?image=1050',
    '?image=1039'
];
$(document).ready(function () {
    let preViews = '';
    for (let i = 0; i < IMAGES.length; i++) {
        preViews += '<li><img id="li-' + i + '" src="' + API_URL + SMALL_SIZE + IMAGES[i] + '" alt="image"/></li>';
    }
    $('.slider-previews').append(preViews);
    $('#li_0').parent().addClass('current');
    $('.slider-previews img').click(function () {
        $('li').removeClass('current');
        imagesChange($(this));
    });
    $('body').on("keydown", function (e) {
        let pressedKey = e.keyCode;
        if (pressedKey !== KEY_LEFT && pressedKey !== KEY_RIGHT) return;
        let index = +$('.current img').attr('id').replace('li-', '');
        $('#slider li').removeClass('current');
        if (pressedKey === KEY_LEFT) {
            if (index <= 0) {
                index = IMAGES.length - 1;
            } else index--;
        }
        if (pressedKey === KEY_RIGHT) {
            if (index >= IMAGES.length - 1) {
                index = 0;
            } else index++;
        }
        imagesChange($('#li-' + index + ''));
    });

    function imagesChange(selectImage) {
        let newSource = selectImage.attr('src').replace(SMALL_SIZE, BIG_SIZE);
        selectImage.parent().addClass('current');
        $('.slider-current img').attr('src', newSource);
    }
});

