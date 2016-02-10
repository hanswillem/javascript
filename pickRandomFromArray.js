// A function tha picks a random item from an array, without ever picking the same item twice in a row

myList = ['apple', 'pear', 'banana'];

function pickRandom(a) {
    var r = Math.floor(Math.random() * (a.length - 1));
    var item = a[r];
    a.splice(r, 1);
    a.push(item);
    return item
}
