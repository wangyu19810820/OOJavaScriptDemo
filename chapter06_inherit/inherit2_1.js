// 只继承于原型
// 实例字段在构造函数内定义，类字段和方法在prototype属性内添加
// 通过Xxx.prototype = Yyy.prototype;实现继承
// 因为值得继承的内容都是定义在原型中的，这样实现能节省内存和运行开销
function Shape() {
}
Shape.prototype.name = 'Shape'
Shape.prototype.toString = function () {
    return this.name;
}

function TwoDShape() {
}
TwoDShape.prototype = Shape.prototype;
TwoDShape.prototype.constructor = TwoDShape;
TwoDShape.prototype.name = 'TwoDShape'

function Triangle(side, height) {
    this.side = side;
    this.height = height;
}
Triangle.prototype = TwoDShape.prototype;
Triangle.prototype.constructor = Triangle;
Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function () {
    return this.side * this.height / 2.0;
}

var my = new Triangle(5, 10);
console.log(my.getArea())
console.log(my.toString())

// 因为Triangle.prototype的原型和TwoDShape，Shape的原型是同一个对象
// 所以修改Triangle.prototype的时候，会影响到继承体系的其他对象，造成预期外的结果
// 此处运行结果，不能让人满意，明明定义Sharp的name是‘Shape’，却显示‘Triangle’
var s = new Shape();
console.log(s.name)