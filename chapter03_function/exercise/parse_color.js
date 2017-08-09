// colorString是字符串，类似：#0000FF
function parseColor(colorString) {
    var numArr = [];
    // 舍弃第一位'#',每两位
    for (var i = 1; i < colorString.length; i++) {
        if (i % 2 == 0) {
            var highBitValue = parseInt(colorString[i - 1], 16) * 16;
            numArr.push(highBitValue + parseInt(colorString[i], 16));
        }
    }
    return "rgb(" + numArr[0] + "," + numArr[1] + "," + numArr[2] + ")";
}

console.log(parseColor("#0000FF"))
console.log(parseColor("#00FF00"))

console.log(parseInt(1e1))
console.log(parseFloat('1e1'))
console.log(parseFloat('1.2e2'))
console.log(isFinite(0 / 10));
console.log(isFinite(20 / 0));
console.log(isNaN(parseInt(NaN)))

console.log("--------------------------------------------")
var a = 1;
function f() {
    function n() {
        console.log(a)
    }
    var a = 2;
    n()
}
f()

console.log("--------------------------------------------")
var e;
var f = console.log
eval('e=f')('boom');

(function () {
    return console.log
}())('boom');