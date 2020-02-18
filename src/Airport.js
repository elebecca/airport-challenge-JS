'use strict';

function Airport() {
    this.hangar = []
}; 
// Airport.prototype.planes = function(){return []; };
Airport.prototype.land = function(plane) {
    this.hangar.push(plane)
};

Airport.prototype.takeOff = function(plane){
    this.hangar.pop(plane)
};

var airport = new Airport;
var plane = new Plane;

console.log(airport.land(plane));
console.log(airport.hangar)