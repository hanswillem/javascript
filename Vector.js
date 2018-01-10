class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }


  // adds vector v to this vector
  add(v) {
      this.x += v.x;
      this.y += v.y;
  }


  // subtracts vector v from this vector
  sub(v) {
      this.x -= v.x;
      this.y -= v.y;
  }

  
  // multiplies this vector with scalar m
  mult(m) {
      this.x *= m;
      this.y *= m;
  }


  // returns the magnitude of this vector
  mag() {
      let a = Math.pow(this.x, 2);
      let b = Math.pow(this.y, 2);
      return Math.sqrt(a + b);
  }


  // limits the magnitude of this vector to n
  lim(n) {
      if (this.mag() > n) {
          this.norm();
          this.mult(n);
      }
  }


  // returns a copy of this vector
  copy() {
      return new Vector(this.x, this.y);
  }


  // normalizes this vector (sets it's magnitude to 1)
  norm() {
      let tm = this.mag();
      this.x /= tm;
      this.y /= tm;
  }


  // returns the dot product between this vector and vector v
  dot(v) {
      return (this.x * v.x) + (this.y * v.y)
  }
  
  
  // returns the angle between this vector and vector v
  angle(v) {
      let d = this.dot(v);
      let m = this.mag() * v.mag();
      return Math.acos(d/m);
  }
  
  
  // returns a vector perpendicular to this vector
  perp() {
      return new Vector(-1 * this.y, this.x);
  }
  
}
