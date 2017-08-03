var shape = {
    type:'type1',
    getType:function () {
        return this.type;
    }
}

function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype = shape;
Triangle.prototype.type = 'triangle';
Triangle.prototype.constructor = Triangle;
Triangle.prototype.getPerimeter = function () {
    return this.a + this.b + this.c;
}

var t = new Triangle(1, 2, 3);
console.log(t.constructor === Triangle)
console.log(shape.isPrototypeOf(t))
console.log(t.getPerimeter())
console.log(t.getType())
console.log("--------------------------------------------")

for (var p in t) {
    if (t.hasOwnProperty(p)) {
        console.log(p)
    }
}