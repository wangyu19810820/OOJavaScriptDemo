// 能自动改变自身的函数，模拟第一次调用执行初始化，后续调用执行另一种功能
function a() {
    console.log("a");
    a = function () {
        console.log("b");
    }
}
a();
a();
a();
console.log("--------------------------------------------")

// 自执行函数，也可以模拟初始化，实际执行这一过程
var a = (function () {
    function someSetup() {
        console.log("some setup");
    }

    function actualWork() {
        console.log("actual work");
    }
    someSetup();
    return actualWork;
}());
a();
a();
