var thermostat = new Thermostat()

$(document).ready(function(){

$("#current_temperature").text(thermostat.viewTemp());

$("#energy_use_display").text(thermostat.currentEnergyUse());

$("#reset").click(function(){
  $(thermostat.reset());
  $("#current_temperature").text(thermostat.viewTemp());
  $("#energy_use_display").text(thermostat.currentEnergyUse());
});

$("#power_saving_off").click(function(){
  $(thermostat.powerSavingOff());
  $("#current_temperature").text(thermostat.viewTemp());
  $("#energy_use_display").text(thermostat.currentEnergyUse());
});

$("#power_saving_on").click(function(){
  $(thermostat.powerSavingOn());
  $("#current_temperature").text(thermostat.viewTemp());
  $("#energy_use_display").text(thermostat.currentEnergyUse());
});

$("#dec_temp_form").submit(function(event){
    var num = parseInt(document.getElementById("dec_temp_input").value);
    $(thermostat.decTemp(num));
    event.preventDefault();
    $("#current_temperature").text(thermostat.viewTemp());
    $("#energy_use_display").text(thermostat.currentEnergyUse());
  });

$("#inc_temp_form").submit(function(event){
    var num = parseInt(document.getElementById("inc_temp_input").value);
    $(thermostat.incTemp(num));
    event.preventDefault();
    $("#current_temperature").text(thermostat.viewTemp());
    $("#energy_use_display").text(thermostat.currentEnergyUse());
  });
});
