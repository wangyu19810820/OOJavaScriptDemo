Array.prototype.inArray = function (needle) {
    for(var i = 0; i < this.length; i++) {
        if (this[i] === needle) {
            return true;
        }
    }
    return false;
}
var arr = ["a", "b", "c"]
console.log(arr.inArray("b"))
console.log(arr.inArray("d"))

String.prototype.reverse = function () {
    return Array.prototype.reverse.call(this.split("")).join("");
}

var str = "abcd";
console.log(str.reverse());
console.log(str)