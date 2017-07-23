// 利用闭包（自执行函数）封装一个privateValue，并且提供getter/setter
var getValue, setValue;
(function () {
    var privateValue = 0;
    getValue = function () {
        return privateValue;
    }
    setValue = function (newValue) {
        if (typeof newValue === "number") {
            privateValue = newValue;
        }
    }
})()
console.log(typeof privateValue);
console.log(getValue());
setValue(123)
console.log(getValue());
setValue(false);
console.log(getValue());