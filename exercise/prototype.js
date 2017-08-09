function fun1() {
    
}
var o1 = new fun1();

fun1.prototype.a = function () {
    console.log('a')
}
o1.a()

console.log(o1.hasOwnProperty('a'))
console.log(o1.__proto__.hasOwnProperty('a'))
console.log(o1.propertyIsEnumerable('a'))
console.log(Object.getPrototypeOf(o1).propertyIsEnumerable('a'))

var p = {}
fun1.prototype = p
var o2 = new fun1();
o2.constructor = fun1
console.log(p.isPrototypeOf(o2))

