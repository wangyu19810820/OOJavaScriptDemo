function multiInherit() {
    var r = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        for (var p in arguments[i]) {
            r[p] = arguments[i][p];
        }
    }
}
var a = {}
var b = {
    name:'B'
}
var c = {
    hi:function () {
        return this.name;
    }
}
multiInherit(a, b, c);
console.log(a.hi())