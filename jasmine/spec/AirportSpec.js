describe('Airport', function() {

var airport;
var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();

  });


it('contains a plane after landing', function() {
  airport.land(plane);
  expect(airport.runway).toContain(plane);
});

});
