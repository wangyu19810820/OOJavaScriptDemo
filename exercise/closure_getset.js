var oper = (function () {
    var value = 0;
    function getValue() {
        return value;
    }
    function setValue(v) {
        value = v;
    }
    return {
        getValue:getValue,
        setValue:setValue
    }
}());

oper.setValue(10);
console.log(oper.getValue())