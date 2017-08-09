// 形式1
var a = (function () {
    var value = 10;
    value++;
    return value;
})();
console.log(a);

// 形式2
var b = (function () {
    var value = 10;
    value++;
    return value;
}())
console.log(b)

// 有返回值的时候，也可用形式3，但是易看错返回值，不推荐
var c = function () {
    var value = 10;
    value++;
    return value;
}();
console.log(c)