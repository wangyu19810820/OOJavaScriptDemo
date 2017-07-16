// 函数定义内定义的变量只在函数内可见
var c = "c"
function outerFun() {
    var a = "a";
    function innerFun() {
        var b = "b";
        console.log("innerFun_" + a)
        console.log("innerFun_" + b)
        console.log("innerFun_" + c)
    }
    innerFun()
    console.log("outerFun_" + a)
    console.log("outerFun_" + typeof (b))
    console.log("outerFun_" + c)
}

outerFun()
console.log("-----------------------------------------------")

// 变量不用var声明的话，定义在全局
function fun1() {
    fun1V = "aa"
}

console.log(typeof fun1V)
fun1()
console.log(fun1V)
console.log("-----------------------------------------------")

// 函数内声明的变量都会被移动到函数最开始的地方
// 但是变量的赋值仍然在原处
var outV = "bb"
function fun2 () {
    console.log(outV)
}

function fun3() {
    console.log(typeof outV);
    var outV = "cc"
    console.log(outV)
}

fun2()
fun3()