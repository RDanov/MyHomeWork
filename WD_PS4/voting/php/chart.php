<?php
function chartVisual()
{
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        header('location: index.php');
    }
    $path_to_db = '../json/data.json';
    $dataArray = json_decode(file_get_contents($path_to_db), true);
    if (isset($_POST['language'])) {
        $leng = $_POST['language'];
    }
    if (array_key_exists($leng, $dataArray)) {
        $dataArray[$leng]++;
    } else {
        $dataArray[$leng] = 1;
    }
    file_put_contents($path_to_db, json_encode($dataArray));
    echo file_get_contents($path_to_db, true);
}

?>

<link rel="stylesheet" type="text/css" href="../css/style.css">
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        let data = JSON.parse('<?php chartVisual() ?>');
        let arr = [['Task', 'AUTO']];
        for (let key in data) {
            arr.push([key, data[key]]);
        }
        data = google.visualization.arrayToDataTable(arr);
        const chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, null);
    }
</script>
<body>
<div id="piechart" class="container"></div>
</body>
