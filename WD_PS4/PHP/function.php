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