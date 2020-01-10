<?=
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>WD_PS4 PHP JSON</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <?= include_once 'php/function.php' ?>
</head>
<body>
<div class="wrapper">
    <div class="container">
        <h1 class="content-center">sum of numbers from -1000 to 1000</h1>
        <form method="post">
            <input type="hidden" value="task1" name="action"/>
            <input class="input-value" type="submit" name="submitFirstTask" value="Calculate Sum"
                   title="sum of numbers"/>
            <p class="content-center"><?= sumOfNumbersFirst() ?></p>
        </form>
    </div>
    <div class="container">
        <h1 class="content-center">sum of numbers from -1000 to 1000 which end at 2, 3, and 7</h1>
        <form method="post">
            <input class="input-value" type="submit" name="submitSecondTask" value="Calculate Sum"
                   title="sum of numbers"/>
            <p class="content-center"><?= sumOfNumbersSecond() ?></p>
        </form>
    </div>
    <div class="container">
        <h1 class="content-center">File Manager</h1>
        <form enctype="multipart/form-data" action="php/function.php" method="POST">
            <input type="hidden" value="task3" name="action"/>
            <span>Upload file:</span><input name="userfile" type="file"/>
            <input type="submit" value="upload">
        </form>
        <div class="board-for-files">
            <?php
            include_once 'php/fileLoader.php';
            echo loadFiles();
            ?>
        </div>
    </div>
    <div class="container">
        <h1 class="content-center">Chessboard</h1>
        <form method="post">
            <label class="content-center">enter width of chessboard
                <input class="input-value" type="text" name="width" title="enter width"/>
            </label>
            <label class="content-center">enter height of chessboard
                <input class="input-value" type="text" name="height" title="enter height"/>
            </label>
            <input class="input-value" type="submit" name="chessboard" value="build" title="create chessboard">
            <div><?= createChessboard() ?></div>
        </form>
    </div>
    <div class="container">
        <h1 class="content-center">Sum of digits of a number</h1>
        <form method="post">
            <label class="content-center">Enter number, please
                <input class="input-value" type="number" name="number" title="enter number"/>
            </label>
            <input class="input-value" type="submit" name="result" value="sum of digits" title="sum of digits"/>
            <p class="content-center"><?= sumOfDigits() ?></p>
        </form>
    </div>
    <div class="container">
        <h1 class="content-center">Processing with array</h1>
        <form method="post">
            <input class="input-value" type="submit" name="processing" value="process" title="process"/>
            <p class="content-center"><?= processWithArray() ?></p>
        </form>
    </div>
    <div class="container">
        <h1 class="content-center">Count sessions</h1>
        <p class="content-center">Количество посещений: <?= countSession() ?></p>
    </div>
    <div class="container">
        <h1 class="content-center">Counting characters</h1>
        <form method="post">
            <label class="content-center">Enter text, please
                <textarea class="input-value" type="text" name="string" title="enter text"></textarea>
            </label>
            <input class="input-value" type="submit" name="calculating" value="calculate" title="calculate"/>
            <p class="content-center">Lines: <?= countLines() ?></p>
            <p class="content-center">Spaces: <?= countSpaces() ?></p>
            <p class="content-center">Symbols: <?= countSymbols() ?></p>
        </form>
    </div>
</div>
</body>