function F() {
    function C() {
        return this;
    }
    return C()
}
var o = new F();
console.log(o === global);
console.log("--------------------------------------------")

function C1() {
    this.a = 1;
    return false;
}
console.log(typeof new C1());
console.log("--------------------------------------------")

var c = [1, 2, [1, 2]]
c.sort();
c.join('--')
console.log(c);
console.log("--------------------------------------------")

