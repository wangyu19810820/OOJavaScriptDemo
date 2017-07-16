// 即时函数：函数定义后可立即执行
// 两种形式
// 形式1
(function (count) {
    console.log("add one, count origin is " + count)
    return count + 1
})(5);

// 形式2
(function (count) {
    console.log("multiple two, count origin is " + count)
    return count * 2
}(6));

console.log("--------------------------------------------")

// 需要用到即时函数的返回值时，第二种形式的最外层括号可省略，这样就有三种形式
var a = (function (count) {
    return count + 1
})(1);

var b = (function (count) {
    return count + 1
}(1))

// 第三种形式，容易让人误以为c的值是函数，而不是函数返回值，所以不太好
var c = function (count) {
    return count + 1
}(1)

console.log(a);
console.log(b);
console.log(c)