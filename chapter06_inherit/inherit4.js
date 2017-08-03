// 将借助中间变量，实现原型继承的方式封装到一个函数内
function extend(Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;
}
// ----------------------------------------------------------
function Sharp() {
}
Sharp.prototype.name = 'sharp'
Sharp.prototype.toString = function () {
    var c = this.constructor;
    return c.uber ? (c.uber.toString() + ',' + this.name) : this.name;
}
// ------------------------------------------------------------
function TwoDSharp() {
}
extend(TwoDSharp, Sharp)
TwoDSharp.prototype.name = '2D sharp'
// ------------------------------------------------------------
function Triangle(side, height) {
    this.side = side;
    this.height = height;
}
extend(Triangle, TwoDSharp);
Triangle.prototype.name = 'triangle'
Triangle.prototype.getArea = function () {
    return this.side * this.height / 2.0;
}

var my = new Triangle(5, 10)
console.log(my.getArea())
console.log(my.toString())

var m = new TwoDSharp();
console.log(m.name)
console.log(m.hasOwnProperty('name'))
console.log(m.__proto__.hasOwnProperty('name'))
