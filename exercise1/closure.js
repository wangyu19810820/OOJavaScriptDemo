function gne(arr1) {
    var i = 0;
    return function () {
        return arr1[i++]
    }
}
var arr = ['a', 'b', 'c'];
var ind1 = gne(arr)
console.log(ind1())
console.log(ind1())
console.log(ind1())
console.log(ind1())