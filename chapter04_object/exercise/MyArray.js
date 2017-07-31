function MyArray() {
    this.length = arguments.length;
    for (var i = 0; i < this.length; i++) {
        this[i] = arguments[i];
    }

    this.toString = function () {
        return this.join(",")
    }

    this.push = function (item) {
        this[this.length] = item;
        this.length += 1;
        return this.length;
    }

    this.pop = function () {
        var result = new MyArray(this[this.length - 1]);
        delete this[this.length];
        this.length -= 1;
        return result;
    }
    
    this.join = function (s) {
        var result = "[";
        for (var i = 0; i < this.length; i++) {
            if (i == 0) {
                result += this[i];
            } else {
                result += s + this[i];
            }
        }
        return result + "]"
    }
}

var arr1 = new MyArray(1, 2, 3, "test");
console.log(arr1.toString())
console.log(arr1.length);
console.log(arr1[arr1.length - 1]);
console.log(arr1.push("boo"))
console.log(arr1.toString())
console.log(arr1.pop().toString());
console.log(arr1.toString());
console.log(arr1.join(" is not "));
