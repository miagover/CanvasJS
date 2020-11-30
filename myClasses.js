class Line {
  // Notice that the constructor takes some of its values as inputs,
  //   and sets others by itself.
  constructor() {
    this._pt1 = [0, 0];
    this._pt2 = [0, 0];
    this._vel1 = [Math.random() * 4 - 2, Math.random() * 4 - 2];
    this._vel2 = [Math.random() * 4 - 2, Math.random() * 4 - 2];
    this.color = "#0000ff";
    this.width = 3;
    this.cap = 'round';
  }

  ///////////////// Lots of getters and setters
  get pt1() {
    return this._pt1;
  }

  set pt1(newPt1) {
    this._pt1 = newPt1;
  }

  get pt2() {
    return this._pt2;
  }

  set pt2(newPt2) {
    this._pt2 = newPt2;
  }

  get vel1() {
    return this._vel1;
  }

  set vel1(newVel1) {
    this._vel1 = newVel1;
  }

  get vel2() {
    return this._vel2;
  }

  set vel2(newVel2) {
    this._vel2 = newVel2;
  }

  ////////////////// Custom methods

  applyVelocity() {
    // Add velocity to position in each coordinate
    this.pt1[0] += this.vel1[0];
    this.pt1[1] += this.vel1[1];
    this.pt2[0] += this.vel2[0];
    this.pt2[1] += this.vel2[1];
  }

  bounceCheck() {
    // Check if any point is over any edge.  If it is over the edge, then
    //   set it to be at the edge, reverse direction, and slightly modify
    //   the velocity by a little.
    if (this.pt1[0] > canvas.width) {
      this.pt1[0] = canvas.width;
      this.vel1[0] *= -1;
      this.vel1[0] += Math.random() - 0.5;
    }
    if (this.pt1[0] < 0) {
      this.pt1[0] = 0;
      this.vel1[0] *= -1;
      this.vel1[0] += Math.random() - 0.5;
    }
    if (this.pt2[0] > canvas.width) {
      this.pt2[0] = canvas.width;
      this.vel2[0] *= -1;
      this.vel2[0] += Math.random() - 0.5;
    }
    if (this.pt2[0] < 0) {
      this.pt2[0] = 0;
      this.vel2[0] *= -1;
      this.vel2[0] += Math.random() - 0.5;
    }
    if (this.pt1[1] > canvas.height) {
      this.pt1[1] = canvas.height;
      this.vel1[1] *= -1;
      this.vel1[1] += Math.random() - 0.5;
    }
    if (this.pt1[1] < 0) {
      this.pt1[1] = 0;
      this.vel1[1] *= -1;
      this.vel1[1] += Math.random() - 0.5;
    }
    if (this.pt2[1] > canvas.height) {
      this.pt2[1] = canvas.height;
      this.vel2[1] *= -1;
      this.vel2[1] += Math.random() - 0.5;
    }
    if (this.pt2[1] < 0) {
      this.pt2[1] = 0;
      this.vel2[1] *= -1;
      this.vel2[1] += Math.random() - 0.5;
    }
  }

  draw() {
    context.beginPath();
    context.moveTo(this.pt1[0], this.pt1[1]);
    context.lineTo(this.pt2[0], this.pt2[1]);
    context.stroke();
  }
}
