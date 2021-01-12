describe('Airport', function () {
  it('should land a plane', function() {
    airport = new Airport();
    // plane = new Plane();
    expect(airport.land('plane')).toBe('plane')
  });

  it('should instruct a plane to depart', function() {
    airport = new Airport();
    airport.land('plane');
    airport.land('helicopter');
    expect(airport.take_off('plane')).toBe('plane')
  });
});
