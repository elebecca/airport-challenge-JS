'use strict';

describe('Feature Test:', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function() {
    airport.land(plane);
    expect(airport.hangar).toContain(plane);
  });
});