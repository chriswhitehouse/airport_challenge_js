describe('Airport', function () {
  it('should land a plane', function() {
    airport = new Airport();
    // plane = new Plane();
    airport.land('plane')
    expect(airport.plane_store).toContain('plane')
  });

  it('should instruct a plane to depart', function() {
    airport = new Airport();
    airport.land('plane');
    airport.land('helicopter');
    expect(airport.take_off('plane')).toEqual('plane')
  });

  it('should confirm departure of a plane', function() {
    airport = new Airport();
    airport.land('plane');
    airport.take_off('plane')
    expect(airport.plane_store).not.toContain('plane')
  });
});
