function Vector(x, y) {
    this.x = x;
    this.y = y;


    this.add = function(v) {
        this.x += v.x;
        this.y += v.y;
    };


    this.sub = function(v) {
        this.x -= v.x;
        this.y -= v.y;
    };


    this.mult = function(m) {
        this.x *= m;
        this.y *= m;
    };


    this.mag = function() {
        var a = Math.pow(this.x, 2);
        var b = Math.pow(this.y, 2);
        return Math.sqrt(a + b);
    };


    this.lim = function(n) {
        if (this.mag() > n) {
            this.norm();
            this.mult(n);
        }
    };


    this.copy = function() {
        return new Vector(this.x, this.y);
    };


    this.norm = function() {
        var tm = this.mag();
        this.x /= tm;
        this.y /= tm;
    };


    this.dot = function(v) {
        return (this.x * v.x) + (this.y * v.y)
    };
}
