var MyMath = {};
MyMath.max = function (arr) {
    if (!Array.isArray(arr)) {
        return arr;
    }
    var result = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > result) {
            result = arr[i];
        }
    }
    return result
}
MyMath.min = function (arr) {
    if (!Array.isArray(arr)) {
        return arr;
    }
    var result = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < result) {
            result = arr[i];
        }
    }
    return result
}
MyMath.random = function (min, max, inclusive) {
    var range = max - min + (inclusive === false ? 0 : 1);
    return min + Math.floor(Math.random() * range);
}

console.log(MyMath.max([2, 4, 1, 3]))
console.log(MyMath.min([2, 4, 1, 3]))
var arr0 = 0;
var arr1 = 0;
var arr2 = 0;
var arr3 = 0;
for (var i = 0; i < 300; i++) {
    var temp = MyMath.random(0, 3, false);
    console.log(temp)
    if (temp == 0)
        arr0++;
    else if (temp == 1)
        arr1++;
    else if (temp == 2)
        arr2++;
    else if (temp == 3)
        arr3++;
    
}

console.log(arr0)
console.log(arr1)
console.log(arr2)
console.log(arr3)