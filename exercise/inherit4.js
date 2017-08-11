function A(name) {
    this.name = name;
}
A.prototype.hi = function () {
    return this.name;
}
function B(name) {
    A.call(this, 'b')
}
for (var i in A.prototype) {
    B.prototype[i] = A.prototype[i]
}
console.log(new B().hi())