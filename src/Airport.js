'use strict';
const CAPACITY = 2

function Airport() {
    this.hangar = []
    
}; 
// Airport.prototype.planes = function(){return []; };
Airport.prototype.land = function(plane) {
    if (this.full()) {
        throw new Error ("Airport is full");
    } else {
        this.hangar.push(plane)
    };
};

Airport.prototype.takeOff = function(plane){
    this.hangar.pop(plane)
};

Airport.prototype.full = function(){
    return this.hangar.length >= CAPACITY
};

var airport = new Airport;
var plane = new Plane;

console.log(airport.land(plane));
console.log(airport.hangar.length)
console.log(airport.full)