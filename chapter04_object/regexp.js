// 正则表达式5个属性：
// 全局，global
// 忽视大小写，ignoreCase
// 跨行，multiline
// 搜索起始索引，lastIndex
// 匹配模式，source
// 两个方法，test返回boolean值，exec返回数组对象
var re = /j.*t/gim;
console.log(re.test("faJavascriptfad"));
console.log(re.source)
re.lastIndex = 0;
var result = re.exec("a Javascript of javascript");
console.log(result[0])
console.log(result)
console.log(result.index)
re.lastIndex = 0;
console.log("--------------------------------------------")


// String对象内也有正则内容
var str = "ab Javascript of javascript ddd";
console.log(str.match(re));
console.log(str.search(re));
console.log(str.replace(re, 'ok'));
console.log(str);
console.log(str.split(re))
console.log("--------------------------------------------")

// String的replace方法，默认只替换首次出现的匹配项，除非设置了全局匹配属性
console.log(str.replace(/javascript/i, 'ok'))
console.log(str.replace(/javascript/gi, 'ok'))
console.log("--------------------------------------------")

// String的replace方法，也可以接收函数作为回调
// 函数的第一个参数匹配到的值
// 最后两个参数是匹配索引，被匹配的原始字符串
// 中间其余的参数是匹配中，分组字符串，由"()"所捕获的内容
function replaceCallback1(match, index, str) {
    console.log("replaceCallback1:" + index);
    console.log("replaceCallback1:" + str);
    return "_" + match.toUpperCase();
}
console.log(str.replace(/javascript/gi, replaceCallback1));
console.log("--------------------------------------------")

function replaceCallback2() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
    return arguments[1] + " at " + arguments[2] + " dot " + arguments[3];
}
console.log("替换结果：");
console.log("gadfly1981@gmail.com".replace(/(.*)@(.*)\.(.*)/, replaceCallback2));
