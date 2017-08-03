// 在原型中定义共享属性
// 实例字段在构造函数内定义，类字段和方法在prototype属性内添加
// 通过Xxx.prototype = new Yyy();实现继承
function Shape() {
}
Shape.prototype.name = 'Shape'
Shape.prototype.toString = function () {
    return this.name;
}

function TwoDShape() {
}
TwoDShape.prototype = new Shape();
TwoDShape.prototype.constructor = TwoDShape;
TwoDShape.prototype.name = '2D Shape'

function Triangle(side, height) {
    this.side = side;
    this.height = height;
}
Triangle.prototype = new TwoDShape();
Triangle.prototype.constructor = Triangle;
Triangle.prototype.name = 'Triangle'
Triangle.prototype.getArea = function () {
    return this.side * this.height / 2;
}

var my = new Triangle(5, 10);
console.log(my.getArea())
console.log(my.toString())
console.log("--------------------------------------------")

console.log(my.hasOwnProperty('side'))
console.log(my.hasOwnProperty('name'))
console.log("--------------------------------------------")

console.log(TwoDShape.prototype.isPrototypeOf(my))
console.log(my instanceof Shape)

