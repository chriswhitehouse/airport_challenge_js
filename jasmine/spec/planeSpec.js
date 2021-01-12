describe('Plane', function() {

  beforeEach( () => {
    plane = new Plane();
  });

  describe('isLanded', function() {
    it('should be not landed', function() {
      expect(plane.isLanded).toBe(true)
    });
  });

  describe('#take_off', function () {
    it('should confirm departure', function() {
      plane.take_off();
      expect(plane.isLanded).toBe(false)
    });
  });

  describe('#land', function() {
    it('should land itself', function() {
      plane.take_off();
      plane.land();
      expect(plane.isLanded).toBe(true)
    });
  });
});
