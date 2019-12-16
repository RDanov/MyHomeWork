<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>WD_PS4 PHP JSON</title>
    <link rel="stylesheet" type="text/css" href="CSS/style.css">
    <?php include_once 'php/function.php' ?>
</head>
<body>
<div class="wrapper">
    <div class="container">
        <h1 class="content-center">sum of numbers from -1000 to 1000</h1>
        <form method="post">
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

</div>
</body>