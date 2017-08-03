// 最原始原型链继承
// 最原始的方式，所有的属性方法都写在构造函数中
// 通过Xxx.prototype = new Yyy();实现继承
function Shape() {
    this.name = 'Shape';
    this.toString = function () {
        return this.name;
    }
}

function TwoDShape() {
    this.name = '2D Shape';
}

function Triangle(side, height) {
    this.name = 'Triangle';
    this.side = side;
    this.height = height;
    this.getArea = function () {
        return this.side * this.height / 2.0;
    }
}

TwoDShape.prototype = new Shape();
TwoDShape.prototype.constructor = TwoDShape;
Triangle.prototype = new TwoDShape();
Triangle.prototype.constructor = Triangle;

var t = new Triangle(10, 5)
console.log(t.toString())
console.log(t.getArea())
console.log(t.constructor === Triangle)
console.log(t instanceof Shape)
console.log(t instanceof TwoDShape)
console.log(t instanceof Triangle)
console.log(t instanceof Array)
console.log("--------------------------------------------")

console.log(Shape.prototype.isPrototypeOf(t))
console.log(TwoDShape.prototype.isPrototypeOf(t))
console.log(Triangle.prototype.isPrototypeOf(t))
console.log(String.prototype.isPrototypeOf(t))
console.log("--------------------------------------------")

var td = new TwoDShape();
console.log(td.constructor == TwoDShape)
console.log(td.toString())
console.log("--------------------------------------------")

var s = new Shape()
console.log(s.constructor)
