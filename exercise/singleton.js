function single() {
    var a = this;
    single = function () {
        return a;
    }
    single.prototype = this;
    return a;
}

var a = new single();
a.a = 'abc'
var b = new single();
single.prototype.hi = function () {
    return this.a;
}
console.log(a.hi())
console.log(b.hi())