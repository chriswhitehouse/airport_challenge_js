describe('Airport', function () {
  it('should land a plane', function() {
    airport = new Airport();
    plane = new Plane();
    expect(airport.land(plane)).toBe(plane)
  });
});
