// 混合模式，利用中间变量和原型实现继承
// object函数的参数是对象，而非构造函数
function object(o) {
    var n;
    function F() {}
    F.prototype = o;
    n = new F();
    n.uber = o;
    return n;
}

var sharp = {
    name: 'sharp',
    toString: function () {
        return this.uber ? this.uber.toString() + ',' + this.name : this.name; 
    }
}
var twoDee = object(sharp);
twoDee.name = '2D sharp'

console.log(twoDee.toString())
