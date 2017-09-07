    google.charts.load('current', { 'packages': ['gauge'] });
    var img;


    function drawChartu() {
        var data1 = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['%', 4]
        ]);
        data1.setValue(0, 1, um);
        var options1 = {
            width: 800,
            height: 240,
            redFrom: 0,
            redTo: 40,
            yellowFrom: 60,
            yellowTo: 100,
            greenFrom: 40,
            greenTo: 60,
            minorTicks: 10
        };
        var chart1 = new google.visualization.Gauge(document.getElementById('chart_divu'));
        chart1.draw(data1, options1);
    }
    function drawChartt() {
        var data1 = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['°C', 9]
        ]);
        data1.setValue(0, 1, temp);
        var options1 = {
            width: 800,
            height: 240,
            min: -10,
            max: 50,
            minorTicks: 10
        };
        var chart1 = new google.visualization.Gauge(document.getElementById('chart_divt'));
        chart1.draw(data1, options1);
    }

    google.charts.setOnLoadCallback(drawChartt);
    google.charts.setOnLoadCallback(drawChartu);
