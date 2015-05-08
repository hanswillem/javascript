function Perceptron(numX) {
    this.numX = numX;
    this.w = [];
    this.c = 0.01;
    this.sumRes = 0;
    for (var i=0; i < numX; i++) {
        this.w.push(0);
    }

    this.sum = function(x) {
        for (var i=0; i < numX; i++) {
            this.sumRes += x[i] * this.w[i];
        }
        if (this.sumRes > 0) {
            return 1;
        } else {
            return 0;
        }
    };  
    
    this.train = function(x) {
        if (this.sum(x) != x[numX + 1]) {
            for (var i=0; i < numX; i++) {
                this.w[i] += x[i] * this.c;
            }
        }
    };
}
