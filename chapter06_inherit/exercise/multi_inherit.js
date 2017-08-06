function objectMulti() {
    var F = function () {}
    for (var i = 0; i < arguments.length - 1; i++) {
        for (var j in arguments[i]) {
            F.prototype[j] = arguments[i][j];
        }
    }
    var r = new F();
    for (var k in arguments[arguments.length - 1]) {
        r[k] = arguments[arguments.length - 1][k];
    }
    return r;
}

var obj = {name:"obj"}
var another_obj = {desc:"desc:another_obj"}
var a_third = {};
var my = objectMulti(obj, another_obj, a_third, {
    additional:"properties"
})

console.log(my.name)
console.log(my.desc)
console.log(my.additional)