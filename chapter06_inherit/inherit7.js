// 在对象之间拷贝属性，模拟继承
function extendCopy(p) {
    var c = {}
    for (var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
    return c;
}

var sharp = {
    name: 'Sharp',
    toString: function () {
        return this.name;
    }
}

var twoDee = extendCopy(sharp)
twoDee.name = '2D Sharp'
twoDee.toString = function () {
    return this.uber.toString() + "," + this.name;
}

var triangle = extendCopy(twoDee)
triangle.name = 'Triangle'
triangle.getArea = function () {
    return this.side * this.height / 2.0;
}
triangle.side = 5;
triangle.height = 10;
console.log(triangle.getArea())
console.log(triangle.toString())
