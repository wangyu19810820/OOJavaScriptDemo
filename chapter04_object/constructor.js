function Hero(name) {
    this.name = name;
}

var h2 = new Hero("aa");
console.log(h2.name);
console.log(h2.constructor);    // new出来的对象，其constructor属性就是构造函数

var h3 = new h2.constructor("bb")
console.log(h3.name)

console.log("--------------------------------------------")

var o = {}
console.log(o.constructor);

console.log("--------------------------------------------")
// instanceof检验对象是否是某个构造函数构造出来的，
// 或者原型链上的对象是否是某个构造函数构造出来的
console.log(h2 instanceof Hero);
console.log(h3 instanceof Object);
console.log(o instanceof Object);
console.log("--------------------------------------------")

// 这段在浏览器里面打印1，普通函数调用，其this指向根对象window
// 在nodejs中打印undefined
var a = 1
function out() {
    var a = 2;
    console.log(this.a)

}
out();
console.log("--------------------------------------------")


// 构造函数，返回基本类型，或者无返回值，其实返回的是this
// 如果返回的是对象，那接收的就是这个返回对象，而非构造对象
function C1() {
    this.a = 1;
    return 2;
}

var c1 = new C1();
console.log(c1.a);

function C2() {
    this.a = 1;
    return {b: 2};
}

var c2 = new C2();
console.log(typeof c2.a);
console.log(c2.b);
console.log("--------------------------------------------")


