function Airport() {
  this.runway = [];
};

Airport.prototype.land = function(plane) {
  this.runway.push(plane);
};
