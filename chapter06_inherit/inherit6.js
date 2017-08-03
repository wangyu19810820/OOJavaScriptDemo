// 在构造函数的原型之间拷贝属性，来实现继承
// 引用对象浅拷贝互相关联的问题的展现
function extend2(Child, Parent) {
    var p = Parent.prototype;
    var c = Child.prototype;
    for (var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
}

function Papa() {
}
Papa.prototype.name = 'Bear'
Papa.prototype.owns = ["porrideg", "chair", "bed"]

function Wee() {
}

extend2(Wee, Papa)
Wee.prototype.name = 'Little bear'
Wee.prototype.owns.pop();

console.log(Papa.prototype.name)
console.log(Papa.prototype.owns)

