
$(document).ready(function(){
var thermostat = new Thermostat();
  updateTemperature();
  updateEnergyUse();

  function updateTemperature() {
    $("#current_temperature").text(thermostat.viewTemp());
  }

  function updateEnergyUse() {
    $("#energy_use_display").text(thermostat.currentEnergyUse());
  }

  $("#reset").click(function(){
    $(thermostat.reset());
    updateTemperature();
    updateEnergyUse();
  });

  $("#power_saving_off").click(function(){
    $(thermostat.powerSavingOff());
    updateTemperature();
    updateEnergyUse();
  });

  $("#power_saving_on").click(function(){
    $(thermostat.powerSavingOn());
    updateTemperature();
    updateEnergyUse();
  });

  $("#dec_temp_form").submit(function(event){
      var num = parseInt(document.getElementById("dec_temp_input").value);
      $(thermostat.decTemp(num));
      event.preventDefault();
      updateTemperature();
      updateEnergyUse();
    });

  $("#inc_temp_form").submit(function(event){
      var num = parseInt(document.getElementById("inc_temp_input").value);
      $(thermostat.incTemp(num));
      event.preventDefault();
      updateTemperature();
      updateEnergyUse();
    });
});
