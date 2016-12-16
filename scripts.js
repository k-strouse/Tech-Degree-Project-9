var $alert = $('#alert');
var $closeIcon = $('#closeIcon');
var $iconStatus = $('#iconStatus');
var $monthly = $('#monthly');
var $monthlyChart = $('#monthlyChart');
var $hourly = $('#li1');
var $daily = $('#li2');
var $weekly= $('#li3');
var $monthly = $('#li4');
var $barChart = $('#barChart');
var $pieChart = $('#pieChart');
var $bar2Chart = $('#bar2Chart');

/*   ALERT NOTIFCATION    */
$('#closeIcon').on('click', function() {
  $alert[0].style.display = 'none';
  $iconStatus[0].style.display = 'none';
  console.log('Close notification function has run');
});

/*   CHARTS  */

Chart.defaults.global.legend.display = true;

/*Random Scaling Factor*/

var RSFh = function() {
  return Math.round(Math.random() * 10)
};
var RSFd = function() {
  return Math.round(Math.random() * 100)
};
var RSFw = function() {
  return Math.round(Math.random() * 1000)
};
var RSFm = function() {
  return Math.round(Math.random() * 10000)
};


/*   HOURLY LINE CHART DATA  */


var hourlyData = {
    labels: ['6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '0:00', '2:00', '4:00'],
    datasets: [
        {
            label: "Weekly Traffic",
            backgroundColor: 'rgba(136, 77, 255, 0.1)',
            borderColor: 'rgba(136, 77, 255, 1)',
            borderCapStyle: 'butt',
            pointBackgroundColor: 'rgb(238, 230, 255)',
            pointBorderWidth: 2,
            pointRadius: 5,
            lineTension: 0,
            borderWidth: 1,
            data: [RSFh(), RSFh(), RSFh(), RSFh(), RSFh(), RSFh(), RSFh(), RSFh(), RSFh(), RSFh(), RSFh(), RSFh()],
        }
    ],
    options: {
            responsive: true,
            maintainAspectRatio: true,
    }
};


/*   DAILY LINE CHART DATA  */


var dailyData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
        {
            label: "Daily Traffic",
            backgroundColor: 'rgba(136, 77, 255, 0.1)',
            borderColor: 'rgba(136, 77, 255, 1)',
            borderCapStyle: 'butt',
            pointBackgroundColor: 'rgb(238, 230, 255)',
            pointBorderWidth: 2,
            pointRadius: 5,
            lineTension: 0,
            borderWidth: 1,
            data: [RSFd(), RSFd(), RSFd(), RSFd(), RSFd(), RSFd(), RSFd()],
        }
    ],
    options: {
            responsive: true,
            maintainAspectRatio: true,
    }
};

/*   WEEKLY LINE CHART DATA  */

var weeklyData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
        {
            label: "Weekly Traffic",
            backgroundColor: 'rgba(136, 77, 255, 0.1)',
            borderColor: 'rgba(136, 77, 255, 1)',
            borderCapStyle: 'butt',
            pointBackgroundColor: 'rgb(238, 230, 255)',
            pointBorderWidth: 2,
            pointRadius: 5,
            lineTension: 0,
            borderWidth: 1,
            data: [RSFw(), RSFw(), RSFw(), RSFw()],
        }
    ],
    options: {
            responsive: true,
            maintainAspectRatio: true,
    }
};

/*   MONTHLY LINE CHART DATA  */

var monthlyData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
        {
            label: "Monthly Traffic",
            backgroundColor: 'rgba(136, 77, 255, 0.1)',
            borderColor: 'rgba(136, 77, 255, 1)',
            borderCapStyle: 'butt',
            pointBackgroundColor: 'rgb(238, 230, 255)',
            pointBorderWidth: 2,
            pointRadius: 5,
            lineTension: 0,
            borderWidth: 1,
            data: [RSFm(), RSFm(), RSFm(), RSFm(), RSFm(), RSFm(), RSFm(), RSFm(), RSFm(), RSFm(), RSFm(), RSFm()],
        }
    ],
    options: {
            responsive: true,
            maintainAspectRatio: true,
    }
};

function createChart(ctx, chartType, data) {
  var lineChart = new Chart(ctx, {
    type: chartType,
    data: data,
    options: {}
  });
};

createChart(lineChart, 'line', hourlyData);

/*   RESPONSIVE CHART TIMELINES   */

$monthly.on ('click', function(){
    createChart(lineChart, "line", monthlyData);
    console.log('display monthly line chart');
});

$weekly.on('click', function(){
    createChart(lineChart, "line", weeklyData);
    console.log('display weekly line chart');
});

$daily.on('click', function(){
    createChart(lineChart, "line", dailyData);
    console.log('display daily line chart');
});

$hourly.on('click', function(){
    createChart(lineChart, "line", hourlyData);
    console.log('display hourly line chart');
});

/*    NAV BUTTON ACTIVE CLASS   */

var selector = '.trafficNav li';
$(selector).on('click', function () {
  $(selector).removeClass('selected');
  $(this).addClass('selected');
});

/*   BAR CHART   */

var barData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
        {
            label: "Peak Users",
            backgroundColor: 'rgba(136, 77, 255, 0.1)',
            borderColor: 'rgba(136, 77, 255, 1)',
            borderWidth: 1,
            borderCapStyle: 'round',
            data: [RSFd(), RSFd(), RSFd(), RSFd(), RSFd(), RSFd(), RSFd()],
        },
        {
            label: "Average Users",
            backgroundColor: 'rgba(51, 204, 51, 0.1)',
            borderColor: 'rgba(51, 204, 51, 1)',
            borderWidth: 1,
            borderCapStyle: 'round',
            data: [RSFh(), RSFh(), RSFh(), RSFh(), RSFh(), RSFh(), RSFh()],
        }
    ],
    options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        stepSize: 20,
                        max: 150
            }
          }]
        }
      }
};

var barChart = new Chart($barChart, {
    type: 'bar',
    data: barData,
    options: {}
});

/*   PIE CHART   */

var pieData = {
  labels: ['Phones', 'Tablets', 'Desktop'],
  datasets: [
    {
      label: 'Mobile Users',
      data: [RSFd(), RSFd(), RSFd()],
      backgroundColor: [
        '#884dff',
        '#33cc33',
        '#009999'
      ]
    }
  ]
};

var pieChart = new Chart($pieChart, {
  type: 'doughnut',
  data: pieData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'right',
      fullWidth: true
    },
    animation: {
      animateScale: true
    }
  }
});


var canvas = document.getElementById('barChart');
fitToContainer(canvas);

function fitToContainer(canvas) {
  canvas.style.width='100%';
  canvas.style.height='100%';
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}















































/*      Create an array of li ID's to loop through

var liIDs = [];
$('#trafficHeader').find('li').each(function() {
  liIDs.push($(this).attr('id'));
});

console.log(liIDs);

$('#li1, #li2, #li3, #li4').click(function() {
  for(i=0; i<liIDs.length; i++) {
      var liID = liIDs[i];
      if ($('#'+liID).hasClass('selected')) {
          console.log('has selected class')
    } else {
      ($('#'+liID).removeClass('selected'));
      console.log('remove class')
    }
  }
});


$('#li1, #li2, #li3, #li4').click(function(){
  $(this).addClass('selected');
});

*/
