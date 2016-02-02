function shuffleArray(a) {
    newArray = [];
    var size = a.length;
    while (newArray.length < size) {
        var rnd = Math.floor(Math.random() * (a.length));
        newArray.push(a[rnd])
        a.splice(rnd, 1);
    }
    return newArray
}
