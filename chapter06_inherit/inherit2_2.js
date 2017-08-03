// 修正后的继承于原型
// 总体上可看成只继承于原型，用临时对象new F()让每一个类有一个独立的原型对象
// 实例字段在构造函数内定义，类字段和方法在prototype属性内添加
// var F = function() {};
// F.prototype = Xxx.prototype;
// Yyy.prototype = new F();
// 实现继承
// 节省内存和运行开销的同时，也能避免非预期的错误
function Sharp() {
}
Sharp.prototype.name = 'Sharp'
Sharp.prototype.toString = function () {
    return this.name;
}

function TwoDSharp() {
}
var F = function() {}
F.prototype = Sharp.prototype;
TwoDSharp.prototype = new F();
TwoDSharp.prototype.constructor = TwoDSharp;
TwoDSharp.prototype.name = 'TwoDSharp';

function Triangle(side, height) {
    this.side = side;
    this.height = height;
}
var F = function() {}
F.prototype = TwoDSharp.prototype;
Triangle.prototype = new F();
Triangle.prototype.constructor = Triangle;
Triangle.prototype.name = 'Triangle'
Triangle.prototype.getArea = function () {
    return this.side * this.height / 2.0;
}

var my = new Triangle(5, 10)
console.log(my.getArea())
console.log(my.toString())
console.log("--------------------------------------------")

var s = new Sharp();
console.log(s.name)

console.log("I am a " + new TwoDSharp())

