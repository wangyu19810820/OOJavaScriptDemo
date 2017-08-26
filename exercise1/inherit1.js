function A() {

}
A.prototype.name = 'A'
A.prototype.say = function () {
    var ubName = this.constructor.uber ? this.constructor.uber.say() + "," : "";
    return ubName + this.name
}

function B() {

}
var N = function () {
}
N.prototype = A.prototype;
B.prototype = new N();
B.prototype.constructor = B;
B.prototype.name = 'B'
B.uber = A.prototype;

function C() {

}
var N = function () {
}
N.prototype = B.prototype;
C.prototype = new N();
C.prototype.constructor = C;
C.prototype.name = 'C'
C.uber = B.prototype;

var o = new C();
console.log(o.say())