// triangle函数内返回新生成的对象，
// 好处是triangle和new triangle()效果相同
function object(o) {
    var F = function () {}
    F.prototype = o;
    var r = new F();
    r.uber = o;
    return r;
}

var sharp = {
    name: 'Sharp',
    toString:function () {
        return this.uber ? (this.uber.toString() + ',' + this.name) : this.name;
    }
}
var twoDee = object(sharp);
twoDee.name = '2D Sharp';

function triangle(s, h) {
    var triangle = object(twoDee);
    triangle.name = 'Triangle';
    triangle.side = s;
    triangle.height = h;
    triangle.getArea = function () {
        return this.height * this.side / 2.0;
    }
    return triangle;
}

var t1 = triangle(5, 10);
console.log(t1.getArea());
console.log(t1.toString());

var t2 = triangle(5, 10);
console.log(t2.getArea())
console.log(t2.toString())