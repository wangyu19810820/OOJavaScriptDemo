function A(name) {
    this.name = name;
}
A.prototype.say = function () {
    return this.name;
}
var o = new A('zz')
console.log(o.say())

function B() {
    A.apply(this, arguments)
}
for(var i in A.prototype) {
    B.prototype[i] = A.prototype[i];
}
var o1 = new B('xx')
console.log(o1.say())