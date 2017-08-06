// 实现继承，额外借用父类构造器，简化初始化代码
function Sharp(id) {
    this.id = id;
}
Sharp.prototype.name = 'Sharp';
Sharp.prototype.toString = function () {
    return this.name + ", id=" + this.id;
}

// 借用构造器，用prototype实现继承
// 父类的属性会被重复定义，虽然有效属性会覆盖无效属性，终究留下隐患
function Traingle() {
    Sharp.apply(this, arguments);
}
Traingle.prototype = new Sharp(0);
Traingle.prototype.name = 'Traingle';

var my = new Traingle(101);
console.log(my.toString())
console.log(my.id);
console.log(my.__proto__.id)
console.log("--------------------------------------------")


// 借用构造器，用prototype实现继承
// 用拷贝属性的方式实现继承
function extend2(Child, Parent) {
    var p = Parent.prototype;
    var c = Child.prototype;
    for (var i in p) {
        c[i] = p[i];
    }
    c.uber = Parent;
}
function Traingle1() {
    Sharp.apply(this, arguments);
}
extend2(Traingle1, Sharp);
var my1 = new Traingle1(101);
console.log(my1.toString())
console.log(my1.id);
console.log(my1.__proto__.id)

