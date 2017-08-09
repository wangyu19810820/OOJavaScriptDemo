var reg = /java/gi;
var str = "java and javascript"
console.log(reg.test(str))
reg.lastIndex = 0;
console.log(reg.exec(str))
reg.lastIndex = 0;
console.log(str.match(reg))
console.log(str.search(reg))
console.log(str.replace(reg, function (match1) {
    return match1.toUpperCase();
}))
