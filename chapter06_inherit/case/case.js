function Point(x, y) {
    this.x = x;
    this.y = y;
}
function Line(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
    this.length = function () {
        return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    }
}
function Sharp() {
    this.points = [];
    this.lines = [];
    this.init();
}

Sharp.prototype = {
    constructor:Sharp,
    init:function () {
        if (this.context === undefined) {
            var canvas = document.getElementById('canvas');
            Sharp.prototype.context = canvas.getContext('2d');
        }
    },
    draw:function () {
        var i, ctx = this.context;
        ctx.strokeStyle = this.getColor();
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for (i = 1; i < this.points.length; i++) {
            ctx.lineTo(this.points[i].x, this.points[i].y);
        }
        ctx.closePath();
        ctx.stroke();
    },
    getColor:function () {
        var i, result = [];
        for (i = 0; i < 3; i++) {
            result.push(Math.floor(Math.random() * 256));
        }
        return 'rgb(' + result.join(',') + ')';
    },
    getLines:function () {
        if (this.lines && this.lines.length > 0) {
            return this.lines;
        }
        var i;
        this.lines = [];
        for (i = 0; i < this.points.length - 1; i++) {
            this.lines.push(new Line(this.points[i], this.points[i + 1]));
        }
        this.lines.push(new Line(this.points[i], this.points[0]));
        return this.lines
    },
    getArea:function () {},
    getParameter:function () {
        var i, result = 0, lines = this.getLines();
        for (i = 0; i < lines.length; i++) {
            result += lines[i].length();
        }
        return result;
    }
}

function Traingle(a, b, c) {
    this.points = [a, b, c];
    this.getArea = function () {
        var p = this.getParameter() / 2.0;
        return Math.sqrt(p
            * (p - this.getLines()[0].length())
            * (p - this.getLines()[1].length())
            * (p - this.getLines()[2].length())
        );
    }
}
Traingle.prototype = new Sharp();

function Rectangle(p, side_a, side_b) {
    this.points = [p,
                    new Point(p.x + side_a, p.y),
                    new Point(p.x + side_a, p.y + side_b),
                    new Point(p.x, p.y + side_b)];
    this.getArea = function () {
        return side_a * side_b;
    }
}
Rectangle.prototype = new Sharp();

function Square(p, side) {
    Rectangle.call(this, p, side, side);
}
Square.prototype = new Sharp();

// var p1 = new Point(1, 1);
// var p2 = new Point(1, 2);
// var p3 = new Point(2, 2)
// var line1 = new Line(p1, p2);
// var sharp1 = new Sharp();
// sharp1.points.push(p1)
// sharp1.points.push(p2)
// sharp1.points.push(p3)
//
// // console.log(sharp1.getParameter())
// var triangle = new Traingle(p1, p2, p3);
// console.log(triangle.getArea())
// var rectangle = new Rectangle(p1, 10, 5)
// console.log(rectangle.getArea())
// var square = new Square(p1, 6);
// console.log(square.getArea());

var p1 = new Point(100, 100)
var p2 = new Point(300, 100)
var p3 = new Point(200, 0)
var t = new Traingle(p1, p2, p3)
t.draw();
var r = new Rectangle(new Point(200, 200), 50, 100)
r.draw();
var s = new Square(new Point(130, 130), 50)
s.draw()
new Rectangle(p1, 200, 200).draw()