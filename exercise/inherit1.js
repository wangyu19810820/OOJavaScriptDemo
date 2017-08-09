function extend(Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = F.prototype;
}

function A() {
    this.name = 'a';
}

A.prototype.type = 'A'
A.prototype.hi = function () {
    var uber = this.constructor.uber;
    console.log(this.name + (uber ? uber.type + this.type : this.type))
}

function B() {

}
extend(B, A);
B.prototype.type = 'B'

new A().hi();
new B().hi();