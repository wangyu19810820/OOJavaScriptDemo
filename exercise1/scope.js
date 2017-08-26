function a() {
    a1 = 'a1'
}
a.prototype.b = function () {
    a2 = 'a2'
}

var c = new a();
c.b();
console.log(a1)
console.log(a2)

