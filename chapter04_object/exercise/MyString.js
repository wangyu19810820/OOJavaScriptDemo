function MyString(str) {
    this.length = 0;

    while(true) {
        if (str[this.length] != undefined) {
            this[this.length] = str[this.length];
            this.length += 1;
        } else {
            break;
        }
    }

    this.toString = function () {
        var result = "";
        for (var i = 0; i < this.length; i++) {
            result += this[i];
        }
        return result;
    }

    this.valueOf = function () {
        return str;
    }
    
    this.charAt = function (index) {
        return this[index];
    }

    this.concat = function (str1) {
        return new MyString(str + str1).valueOf();
    }

    this.slice = function (first, last) {
        if (first < 0) {
            first += this.length;
        }
        if (last < 0) {
            last += this.length;
        }
        if (last <= first) {
            return "";
        }
        var result = "";
        for (var i = first; i < this.length && i < last; i++) {
            result += str[i];
        }
        return result;
    }
    
    this.split = function (s) {
        var sLen = 0;
        while(true) {
            if (s[sLen] == undefined) {
                break;
            } else {
                sLen++;
            }
        }
        if (sLen == 0) {
            return [];
        }

        var result = [];
        var temp = "";
        for (var i = 0; i < this.length; ) {
            if (this.slice(i, i + sLen) == s) {
                result.push(temp);
                temp = "";
                i += sLen;
            } else {
                temp += this[i];
                i++;
            }
        }
        result.push(temp);
        return result;
    }

    this.reverse = function () {
        var result = new MyString(str);
        return Array.prototype.reverse.call(result).toString();
    }
}

var str = "abcdef";
var str1 = new MyString(str);
console.log(str1[0]);
console.log(str1.length);
console.log(str1.toString());
console.log(str1.valueOf());
console.log(str1.charAt(1));
console.log(str1.concat('gh'));
console.log(str1.slice(1, 3));
console.log(str1.slice(1, -1));
console.log(str1.split("bc"));
console.log(str1.reverse());
console.log(str1.toString())
