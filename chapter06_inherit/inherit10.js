// 进化版，利用原型和对象来模拟继承
// 同时第二个参数用于拷贝属性，将属性注入到新建对象中
function objectPlus(o, stuff) {
    var n;
    function F() {}
    F.prototype = o;
    n = new F();
    n.uber = o;

    for(var i in stuff) {
        n[i] = stuff[i];
    }
    return n;
}

var sharp = {
    name: 'sharp',
    toString:function () {
        return this.name;
    }
}

var twoDee = objectPlus(sharp, {
    name: '2D sharp',
    toString: function () {
        return this.uber.toString() + ',' + this.name;
    }
})
console.log(twoDee.toString())

var triangle = objectPlus(twoDee, {
    name:'triangle',
    side:0,
    height:0,
    getArea:function () {
        return this.side * this.height / 2.0;
    },
})

var my = objectPlus(triangle, {
    side:5,
    height:10,
})
console.log(my.getArea())
console.log(my.toString())