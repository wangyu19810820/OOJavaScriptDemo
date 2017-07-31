// 普通对象也有数字属性，也可以赋予length属性，模拟出Array的效果
// 但是，Array自带length属性，且length属性可以自动变化
var o = {}
o[0] = 'aa';
o[1] = 'bb';
o[2] = 'cc';
o.length = 3;
for (var i = 0; i < o.length; i++) {
    console.log(o[i]);
}
console.log("--------------------------------------------")

var a = [];
a[0] = 'aa';
a[1] = 'bb';
a[2] = 'cc';
for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}
console.log("--------------------------------------------")

// concat(a1, a2, ...)连接两个或多个数组
var b = ['xx', 'yy'];
var c = [1, 2, 3];
var d = a.concat(b, c);
console.log(a);
console.log(d);

// unshift添加在数组开头，shift移除数组开头的元素
var e = [1, 2, 3, 4, 5, 6];
e.unshift(0);
e.unshift(-1);
console.log(e);
e.shift();
e.shift();
e.shift();
console.log(e);
console.log("--------------------------------------------")

// slice截取出一段子数组，但是原数组不变, 参数是两个索引值，包含头不含尾
var f = [1, 2, 3, 4];
var g = f.slice(1, 3);
console.log(f);
console.log(g);
console.log("--------------------------------------------")

// splice截取一段，并且插入其他元素，第一个参数是索引，第二个参数是截取长度，后续都是插入元素
var h = [1, 2, 3, 4];
var i = h.splice(1, 2, 'a', 'b', 'c');
console.log(h);
console.log(i);
console.log("--------------------------------------------")


// 因为Array的toString被改写了，所以要鉴别Array，需要使用Object的toString方法
console.log(h.toString());
console.log(Object.prototype.toString.call(h));

