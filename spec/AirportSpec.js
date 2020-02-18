'use strict';

describe('Airport', function() {
  var airport
  var plane

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it ('can keep track of planes', function(){
    airport.land(plane)
    expect(airport.hangar).toContain(plane)
  });
  
  it ('can take off', function(){
    airport.takeOff(plane)
    expect(airport.hangar).toEqual([])
  });

  it ('raises error when airport is full', function(){
    airport.land(plane)
    airport.land(plane)
    expect(function(){ airport.land(plane) }).toThrowError("Airport is full")
  });
});