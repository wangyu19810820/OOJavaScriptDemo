var iterator = function (arr) {
    var index = 0;
    return {
        getNext: function () {
            return arr[index++];
        }
    }
}

var ite1 = iterator(['a', 'b', 'c'])
var ite2 = iterator(['aa', 'bb', 'cc'])
console.log(ite1.getNext())
console.log(ite2.getNext())
console.log(ite1.getNext())
console.log(ite1.getNext())
console.log(ite2.getNext())
console.log(ite2.getNext())
console.log(ite1.getNext())
console.log(ite2.getNext())
