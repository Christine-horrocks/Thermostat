var thermostat = new Thermostat(16)

$(document).ready(function(){
$("#current_temperature").text(thermostat.viewTemp());
$("#energy_use_display").text(thermostat.currentEnergyUse());
$("#reset").click(function(){
  $(thermostat.reset());
  $("#current_temperature").text(thermostat.viewTemp());
});
});
