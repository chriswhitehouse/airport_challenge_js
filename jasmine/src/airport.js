class Airport {

  constructor() {
    this.plane_store = [];
  };

  land(plane) {
    plane.land()
    this.plane_store.push(plane)
  }

  take_off(plane) {
    let index = this.plane_store.indexOf(plane)
    return this.plane_store.splice(index, 1)[0];
  }

}
