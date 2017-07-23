// 什么是js中的闭包？
// 如果一个函数会在其父级函数执行结束之后，留住父级作用域链接的话，闭包就会被创建起来
var annotherFuncInF;
function F(param) {
    var N = function () {
        return param;
    }
    annotherFuncInF = function () {
        param++;
    }
    param++;
    return N;
}

var funInF = F(123);
annotherFuncInF();
F(2222);
// 先创建的函数，后执行param++，执行结果是125
// 可见，函数绑定的是作用域本身，而不是创建一个变量副本塞给函数N
console.log(funInF());
console.log("--------------------------------------------")


// 循环中的闭包
// createFunArr中创建的闭包数组，其i都是同一个变量, 所以打印3个3
// （闭包关联的是创建时的作用域，类似于捕获了变量的引用）
function createFunArr1() {
    var funArr = [];
    for (var i = 0; i < 3; i++) {
        funArr.push(function () {
            return i;
        })
    }
    return funArr;
}

var arr = createFunArr1();
for (var k in arr) {
    console.log(arr[k]());
}
console.log("--------------------------------------------")


// 将想要的函数包裹到自执行函数内
// 利用函数的参数是值传递的特性，创建变量的副本
// 这样模拟出：“闭包捕获了变量的副本，而不是变量的引用”
function createFunArr2() {
    var funArr = [];
    for (var i = 0; i < 3; i++) {
        funArr[i] = (function (innerI) {
            return function () {
                return innerI;
            }
        })(i);
    }
    return funArr;
}
arr = createFunArr2();
for (var k in arr) {
    console.log(arr[k]());
}
console.log("--------------------------------------------")


// 利用工厂函数创建闭包，和函数参数是值传递的特性，模拟闭包捕获变量副本
function createFunArr3() {
    var funArr = [];
    var funFactory = function (param) {
        return function () {
            return param;
        }
    }
    for (var i = 0; i < 3; i++) {
        funArr.push(funFactory(i));
    }
    return funArr;
}
arr = createFunArr3();
for (var k in arr) {
    console.log(arr[k]());
}
console.log("--------------------------------------------")