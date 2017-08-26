// function N() {
//     this.name = 'N'
//     this.say = function () {
//         console.log('hello ' + this.N)
//     }
// }
// var a = {}
// N.prototype = a;
// var o = new N();
// console.log(a.isPrototypeOf(o))
// console.log(o.hasOwnProperty('name'))
// console.log(o.propertyIsEnumerable('say'))

Array.prototype.shift = function () {
    var r = [];
    var t = this.concat();
    for (var i = t.length; i > 0; i--) {
        var random = Math.floor(Math.random(i) * t.length);
        r[this.length - i] = t[random];
        t.splice(random, 1);
    }
    return r;
}
var a = [1, 2, 3, 4, 5, 6]
var b = a.shift();
console.log(b)
