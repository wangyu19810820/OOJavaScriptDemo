// 利用构造函数的uber属性，指向对象的原型
function Sharp() {
}
Sharp.prototype.name = 'sharp'
Sharp.prototype.toString = function () {
    var c = this.constructor;
    return c.uber ? (c.uber.toString() + ',' + this.name) : this.name;
}

// TwoDSharp从Sharp继承了属性和方法
// 但是他的prototype指向了临时对象F，指向“父”类对象，需要跳开F
function TwoDSharp() {
}
var F = function () {}
F.prototype = Sharp.prototype;
TwoDSharp.prototype = new F();
TwoDSharp.prototype.constructor = TwoDSharp;
TwoDSharp.prototype.name = '2D sharp';
TwoDSharp.uber = Sharp.prototype;

function Triangle(side, height) {
    this.side = side;
    this.height = height;
}
var F = function () {}
F.prototype = TwoDSharp.prototype;
Triangle.prototype = new F();
Triangle.prototype.constructor = Triangle;
Triangle.prototype.name = 'triangle'
Triangle.prototype.getArea = function () {
    return this.side * this.height / 2.0;
}
Triangle.uber = F.prototype;

var my = new Triangle(5, 10);
console.log(my.toString());
