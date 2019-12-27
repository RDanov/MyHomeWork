<?php
function sumOfNumbersFirst()
{
    if (isset($_POST['submitFirstTask'])) {
        $sum = 0;
        for ($i = -1000; $i <= 1000; $i++) {
            $sum += $i;
        }
        echo $sum;
    }
}

function sumOfNumbersSecond()
{
    if (isset($_POST['submitSecondTask'])) {
        $sum = 0;
        for ($i = -1000; $i <= 1000; $i++) {
            $mod = abs($i) % 10;
            if (($mod === 2) || ($mod === 3) || ($mod === 7)) {
                $sum += $i;
            }
        }
        echo $sum;
    }
}


function createChessboard()
{
    if (isset($_POST['chessboard'])) {
        $width = $_POST['width'];
        $height = $_POST['height'];
        $board = '<div class = "board-for-chess" style = "height: ' . ($height * 50) . 'px; width: ' . ($width * 50) . 'px;">';
        for ($i = 0; $i < $width; $i++) {
            for ($j = 0; $j < $height; $j++) {
                if (($i + $j) % 2 === 0) {
                    $board .= '<div class="black"></div>';
                } else {
                    $board .= '<div class="white"></div>';
                }
            }
        }
        $board .= '</div>';
        echo $board;
    }
}

function sumOfDigits()
{
    if (isset($_POST['number'])) {
        $str_number = (string)abs($_POST['number']);
        echo array_sum(str_split($str_number));
    }
}

function processWithArray()
{
    if (isset($_POST['processing'])) {
        $array = array();
        for ($i = 0; $i < 100; $i++) {
            $array[$i] = mt_rand(1, 10);
        }
        $arrayOfUniqual = array_unique($array);
        sort($arrayOfUniqual);
        $resultArray = array_reverse($arrayOfUniqual);
//        $size = array_count_values($resultArray);
        for ($i = 0; $i < count($resultArray); $i++) {
            $resultArray[$i] = $resultArray[$i] * 2;
        }
        print_r($resultArray);
    }
}


function countSymbols()
{
    if (isset($_POST['string'])) {
        echo iconv_strlen($_POST['string']);
    }
}

function countSpaces()
{
    if (isset($_POST['string'])) {
        echo substr_count($_POST['string'], " ");
    }
}

function countLines()
{
    if (isset($_POST['string'])) {
        echo substr_count($_POST['string'], "\n") + 1;
    }
}

function countSession()
{
    if (isset($_SESSION['сounter'])) {
        echo $_SESSION['сounter'];

    }
}