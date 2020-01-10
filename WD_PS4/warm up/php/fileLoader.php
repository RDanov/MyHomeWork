<?php

function loadFiles()
{
    $arrayWithFiles = [];
    $directory = 'downloads/';

    if (!is_dir($directory)) return false;
    $workDirectory = opendir($directory);
    while ($file = readdir($workDirectory)) {
        if (($file != '.') && ($file != '..')) {
            $size = filesize($directory . $file);
            $arrayWithFiles[$file] = '(' . fileSizeConvert($size) . ')';
        }
    }
    closedir($workDirectory);
    return addedTegHTML($arrayWithFiles);
}

function fileSizeConvert($bytes)
{
    $sizes = ['b', 'Kb', 'Mb', 'Gb', 'Tb'];
    $factor = floor((strlen($bytes) - 1) / 3);
    return sprintf("%.2f", $bytes / pow(1024, $factor)) . @$sizes[$factor];
}

function addedTegHTML($arr)
{
    $result = "";
    foreach ($arr as $key => $value) {
        if (checkImageFormat($key)) {
            $result = $result . "<div class='board-for-icon'>
          <img src='./downloads/" . $key . "' alt=\"it's an image\">
          <a class='board-for-text' href='./downloads/$key' download>" . $key . '<br>' . $value . '</a>
        </div>';
        } else {
            $result = $result . "<div class='board-for-icon'>
        <img src='./icons/" . 'file.png' . "' alt=\"it's a file\">
        <a class='board-for-text' href='./downloads/$key' download>" . $key . '<br>' . $value . '</a></div>';
        }
    }
    return $result;
}

function checkImageFormat($filename)
{
    $pattern = '/((?<=\.)[a-z]+)$/';
    preg_match($pattern, $filename, $extension);
    $imgFormats = ['jpeg', 'jpg', 'png', 'gif', 'bmp', 'svg'];
    foreach ($imgFormats as $value) {
        if ($value == $extension[0]) {
            return true;
        }
    }
    return false;
}