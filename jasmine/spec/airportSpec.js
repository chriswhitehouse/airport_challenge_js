describe('Airport', function () {
  var plane, helicopter;

  beforeEach(() => {
    airport = new Airport();

    plane = helicopter = {
      land: function() {
        return true;
      },
      take_off: function() {
        return true;
      }
    };
  });

  describe('land', function() {
    it('should land a plane', function() {
      airport.land(plane)
      expect(airport.plane_store).toContain(plane)
    });

    it('should instruct the plane to land', function() {
      spyOn(plane, 'land');
      airport.land(plane);
      expect(plane.land).toHaveBeenCalled();
    });
  });

  describe('take_off',function() {
    it('should instruct a plane to depart', function() {
      airport.land(plane);
      airport.land(helicopter);
      expect(airport.take_off(plane)).toEqual(plane)
    });

    it('plane receives instruction take_off', function() {
      spyOn(plane, 'take_off');
      airport.land(plane);
      airport.take_off(plane);
      expect(plane.take_off).toHaveBeenCalled();
    });

    it('should confirm departure of a plane', function() {
      airport.land(plane);
      airport.take_off(plane)
      expect(airport.plane_store).not.toContain(plane)
    });
  });
});
