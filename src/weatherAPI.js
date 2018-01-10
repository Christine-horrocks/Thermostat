$(document).ready(function(){

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=25c49e7c49f21b58fa679a044316c269';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
      $('#current-weather').text(data.weather[0].main);
    });
  }

    $('#select-city').submit(function(event) {
      event.preventDefault();
      var city = $('#current-city').val();
      displayWeather(city);
    });

});
