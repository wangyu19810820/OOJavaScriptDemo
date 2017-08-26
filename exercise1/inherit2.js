function inherit(o, extra) {
    var F = function () {}
    F.prototype = o;
    var r = new F();
    for(var p in extra) {
        r[p] = extra[p];
    }
    return r;
}

var r = inherit({say:function () {
    return this.name;
}}, {name:'aa'})
console.log(r.say())

