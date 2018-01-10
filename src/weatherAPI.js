$(document).ready(function(){

  $('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=25c49e7c49f21b58fa679a044316c269&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  });

  $('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=25c49e7c49f21b58fa679a044316c269&units=metric', function(data) {
      $('#current-weather').text(data.weather[0].main);
    });
  });

});
