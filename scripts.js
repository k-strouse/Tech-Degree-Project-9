var $alert = $('#alert');
var $closeIcon = $('#closeIcon');
var $iconStatus = $('#iconStatus');
var $monthly = $('#monthly');
var $monthlyChart = $('#monthlyChart');
var $hourly = $('#li1');
var $daily = $('#li2');
var $weekly= $('#li3');
var $monthly = $('#li4');



/*   ALERT NOTIFCATION    */
$('#closeIcon').on('click', function() {
  $alert[0].style.display = 'none';
  $iconStatus[0].style.display = 'none';
  console.log('Close notification function has run');
});

/*  LINE CHARTS  */

Chart.defaults.global.legend.display = false;

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
            data: [10, 15, 23, 25, 28, 30, 35, 32, 24, 12, 6, 2],
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
            label: "Weekly Traffic",
            backgroundColor: 'rgba(136, 77, 255, 0.1)',
            borderColor: 'rgba(136, 77, 255, 1)',
            borderCapStyle: 'butt',
            pointBackgroundColor: 'rgb(238, 230, 255)',
            pointBorderWidth: 2,
            pointRadius: 5,
            lineTension: 0,
            borderWidth: 1,
            data: [33, 31, 21, 18, 46, 74, 69],
        }
    ]
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
            data: [250, 122, 276, 100],
        }
    ]
};

/*   MONTHLY LINE CHART DATA  */

var monthlyData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
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
            data: [1659, 1200, 2200, 1340, 987, 1650, 350],
        }
    ]
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
