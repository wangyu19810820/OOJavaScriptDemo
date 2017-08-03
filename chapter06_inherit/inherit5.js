// 在构造函数的原型之间拷贝属性，来实现继承
// 有效率问题，还有引用对象浅拷贝互相关联的问题
function extend2(Child, Parent) {
    var p = Parent.prototype;
    var c = Child.prototype;
    for (var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
}

function Sharp() {
}
Sharp.prototype.name = 'sharp'
Sharp.prototype.toString = function () {
    return this.uber ? this.uber.toString() + ',' + this.name : this.name;
}

function TwoDSharp() {
}
extend2(TwoDSharp, Sharp);
TwoDSharp.prototype.name = '2D sharp'

function Triangle(side, height) {
    this.side = side;
    this.height = height;
}
Triangle.prototype.getArea = function () {
    return this.side * this.height / 2.0;
}
extend2(Triangle, TwoDSharp)
Triangle.prototype.name = 'triangle'

var my = new Triangle(5, 10)
console.log(my.toString())
console.log(my.getArea())
console.log(my.__proto__.hasOwnProperty('name'))