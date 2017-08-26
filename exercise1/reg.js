var reg = /javascript/gi;
var s = "hello javascript, hi, javaScript";
// console.log(s.match(reg))
// console.log(s.search(reg))
// console.log(s.replace(reg, 'aaa'))
// console.log(reg.test(s))
// // console.log(reg.lastIndex)
// console.log(reg.test(s))
// console.log(reg.test(s))
console.log(s.replace(reg, function (match, index, str) {
    return match.toUpperCase();
}))