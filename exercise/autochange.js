var a = (function () {
    function setup() {
        console.log("setup");
    }
    function fun1() {
        console.log("exec")
    }
    setup();
    return fun1;
})();

a();
a();
a();