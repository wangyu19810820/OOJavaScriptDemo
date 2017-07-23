function Hero(name) {
    this.name = name;
}

var h2 = new Hero("aa");
console.log(h2.name);
console.log(h2.constructor);

var h3 = new h2.constructor("bb")
console.log(h3.name)

console.log("--------------------------------------------")

var o = {}
console.log(o.constructor);

console.log("--------------------------------------------")
console.log(h2 instanceof Hero);
console.log(h3 instanceof Object);
console.log(o instanceof Object);
console.log("--------------------------------------------")

this.a = 1
function out() {
    var a = 2;
    console.log(this.a)

}
out();