function namespace(str) {
    var arr = str.split(".");
    this[arr[0]] = {}
    var cur = this[arr[0]];
    for (var i = 1; i < arr.length; i++) {
        cur[arr[i]] = {}
        cur = cur[arr[i]]
    }
}

namespace("MYAPP.module.exports.amazing")
console.log(MYAPP)
MYAPP.module.exports.amazing = (function () {
    function init() {
        console.log("init")
    }
    init();
    return function () {
        console.log('hi')
    }
}())
MYAPP.module.exports.amazing()