function fun1(o, staff) {
    var F = function () {}
    F.prototype = o;
    var r = new F();
    for (var p in staff) {
        r[p] = staff[p];
    }
    return r;
}

var a = {
    name:'a',
    hi:function () {
        return this.name;
    }
}
var b = fun1(a, {name:'b'})
console.log(b.hi())
var c = new fun1(a, {name:'c'})
console.log(c.hi())