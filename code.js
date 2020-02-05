async function getWeather() {
    var city = document.getElementById("city").value;
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5e0f04e1325355177bc7ff1c5c8f64f3`;
    var data = await fetch(url);
    var result = await data.json();
    console.log(result);
    var c = result.main.temp;
    document.getElementById("result").innerHTML = c;
}
async function getForecast() {
    var city = document.getElementById("city").value;
    var url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=5e0f04e1325355177bc7ff1c5c8f64f3`;
    var data = await fetch(url);
    var result = await data.json();
    var xaxis = [];
    var yaxis = [];
    xaxis.push(result.list[0].dt_txt.split(" ")[0]);
    yaxis.push(result.list[0].main.temp);
    for (var i = 8; i < 40; i += 8) {
        xaxis.push(result.list[i].dt_txt.split(" ")[0]);
        yaxis.push(result.list[i].main.temp);
    }
    console.log(result);
    //console.log(result.list[0].dt_txt);
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xaxis,
            datasets: [{
                label: '# of Votes',
                data: yaxis,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}