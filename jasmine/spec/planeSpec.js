describe('Plane', function() {
  beforeEach( () => {
    var plane = new Plane();
  })

  it('should be not landed', function() {
    expect(plane.isLanded).toBe(true)
  });

  describe('#take_off', function () {
    it('should confirm departure', function() {
      plane.take_off
      expect(plane.isLanded).toBe(false)
    });
  });
});
