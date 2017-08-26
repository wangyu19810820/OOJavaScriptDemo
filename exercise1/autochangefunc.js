function a() {
    console.log('a')
    a = function () {
        console.log('b')
    }
}
a();
a();
var b = (function () {
    console.log('c')
    return function () {
        console.log('d')
    }
})();
b()
b()
