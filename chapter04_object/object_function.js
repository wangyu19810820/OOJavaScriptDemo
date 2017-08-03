// Function对象创建的函数，最后一个参数是函数体，其余是函数参数
// 这些参数可以分开写，也可以合并写（用逗号分隔）
var a = new Function('a', 'b', 'c, d', 'return a + b + c + d;');
var result = a(1, 2, 3, 4)
console.log(result)
console.log("------------------------- -------------------")

// 函数的constructor属性是Function,length属性是形参数量
function b(x, y, z) {

}
console.log(b.constructor);
console.log(b.length);
console.log(a.constructor);
console.log(a.length);
console.log("--------------------------------------------")


// 构造函数的prototype属性,会在创建对象时指定对象的原型对象为该属性的值
// 让创建的对象拥有继承属性和方法
var c = {x:1, y:2, z:3};
function D() {
    this.a = 4;
}
D.prototype = c;
var d = new D();
console.log(d.x);
console.log(d.__proto__);

// call, apply改变函数的this指针
function say(who) {
    console.log(who + " say " + this.name);
}
say.call({name:'jim'}, 'tom');
say.apply({name:'allen'}, ['green']);
console.log("--------------------------------------------")


// arguments对象返回函数实参，是个类数组对象
function f() {
    console.log(arguments);
    // 通过call或者apply，来实现数组的方法
    console.log([].reverse.call(arguments));
}
f(1, 2, 3, 4);


