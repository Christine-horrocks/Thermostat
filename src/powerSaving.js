const DEFAULT_STATUS = true;

function PowerSaving(status = DEFAULT_STATUS) {
  this.status = status;
}


PowerSaving.prototype.turnOff = function() {
  this.status = false;
};

PowerSaving.prototype.turnOn = function() {
  this.status = true;
};
