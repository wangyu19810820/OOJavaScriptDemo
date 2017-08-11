function extend(Child, Parent) {
    for (var i in Parent.prototype) {
        Child.prototype[i] = Parent.prototype[i]
    }
    Child.prototype.uber = Parent.prototype;
}
function extend2(child, parent) {
    for (var i in parent) {
        child[i] = parent[i]
    }
    child.uber = parent;
}
function A() {
}
A.prototype.type = 'A'
A.prototype.hi = function () {
    return this.uber.type + "," + this.type;
}
function B() {
    
}
// extend(B, A)
// B.prototype.type = 'B'
// var o = new B();
// console.log(o.hi())

var a = new A();
var b = new B();
extend2(b, a)
b.type = 'B'
console.log(b.hi())