'use strict';

describe('Airport', function() {
  var airport
  var plane
  var weather

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    weather = new Weather();

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

  it ('raises error when it is stormy', function(){
    spyOn(airport, 'stormy').and.returnValue(true);
    expect(function(){ airport.takeOff(plane) }).toThrowError("Can't take off when it is stormy")
  });
});