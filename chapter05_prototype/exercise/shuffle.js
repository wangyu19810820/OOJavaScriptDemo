var o = [1, 2, 3, 4, 5, 6, 7, 8, 9]

Array.prototype.shuffe = function () {
    function random(count) {
        return Math.floor(Math.random() * count);
    }

    var temp = this.concat();
    var result = [];
    for (var i = this.length; i > 0; i--) {
        var index = random(i);
        result.push(temp[index]);
        temp = temp.slice(0, index).concat(temp.slice(index + 1, temp.length))
    }
    return result;
}

console.log(o.shuffe())