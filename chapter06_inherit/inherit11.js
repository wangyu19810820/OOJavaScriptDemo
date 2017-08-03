// 多重继承，利用属性复制实现多重继承
function multi() {
    var n = {}, stuff, j = 0, len = arguments.length;
    for (var i = 0; i < len; i++) {
        stuff = arguments[i];
        for (var p in stuff) {
            if (stuff.hasOwnProperty(p)) {
                n[p] = stuff[p];
            }
        }
    }
    return n;
}

var shape = {
    name:'shape',
    toString:function () {
        return this.name;
    }
}

var twoDee = {
    name:'2D shape',
    dimensions:2
}
var triangle = multi(shape, twoDee, {
    name:'triangle',
    side:5,
    height:10,
    getArea:function () {
        return this.side * this.height / 2.0;
    }
})
console.log(triangle.getArea())
console.log(triangle.dimensions)
console.log(triangle.toString())
