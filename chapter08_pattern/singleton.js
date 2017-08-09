// 全局变量
function Logger() {
    if (typeof global_log === "undefined") {
        global_log = this;
    }
    return global_log;
}
var log1 = new Logger();
var log2 = new Logger();
console.log(log1 === log2)

// 构造器属性
function Logger1() {
    if (!Logger1.singleton_instance) {
        Logger1.singleton_instance = this;
    }
    return Logger1.singleton_instance;
}
var log3 = new Logger1();
var log4 = new Logger1();
console.log(log3 === log4)

// 使用闭包
function Logger2() {
    var a = this;
    Logger2 = function () {
        // 捕获第一次调用的this指针
        return a;
    }
    Logger2.prototype = this;
    // Logger2.prototype.constructor = Logger2;
    return a;
}

var log5 = new Logger2();
Logger2.prototype.hi = function () {
    console.log('hi');
}
var log6 = new Logger2();
console.log(log5 === log6)
log6.hi()


