function Vector(x, y) {
    this.x = x;
    this.y = y;


    // adds vector v to this vector
    this.add = function(v) {
        this.x += v.x;
        this.y += v.y;
    };


    // subtracts vector v from this vector
    this.sub = function(v) {
        this.x -= v.x;
        this.y -= v.y;
    };

    
    // multiplies this vector with scalar m
    this.mult = function(m) {
        this.x *= m;
        this.y *= m;
    };


    // returns the magnitude of this vector
    this.mag = function() {
        var a = Math.pow(this.x, 2);
        var b = Math.pow(this.y, 2);
        return Math.sqrt(a + b);
    };


    // limits the magnitude of this vector to n
    this.lim = function(n) {
        if (this.mag() > n) {
            this.norm();
            this.mult(n);
        }
    };


    // returns a copy of this vector
    this.copy = function() {
        return new Vector(this.x, this.y);
    };


    // normalizes this vector (sets it's magnitude to 1)
    this.norm = function() {
        var tm = this.mag();
        this.x /= tm;
        this.y /= tm;
    };


    // returns the dot product between this vector and vector v
    this.dot = function(v) {
        return (this.x * v.x) + (this.y * v.y)
    };
    
    
    // returns the angle between this vector and vector v
    this.angle = function(v) {
        var d = this.dot(v);
        var m = this.mag() * v.mag();
        return Math.acos(d/m);
    }
    
    
    // returns a  vector perpendicular to this vector
    this.perp = function() {
        return new Vector(-1 * this.y, this.x);
    };
}
