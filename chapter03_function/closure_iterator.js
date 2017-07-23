// 利用闭包关联创建时作用域的特性，创建一个迭代器
function createIterator(x) {
    var i = 0;
    return function () {
        return x[i++];
    }
}

var arr = ["a", "b", "c"];
var iterator = createIterator(arr);
console.log(iterator());
console.log(iterator());
console.log(iterator());
