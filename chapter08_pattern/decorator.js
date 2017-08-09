var tree = {};
// 原始对象和装饰对象都有decorate方法
tree.decorate = function () {
    console.log('origin decorate')
}
// tree.decorator1是一个构造函数
tree.decorator1 = function () {
    this.decorate = function () {
        this.decorator1.prototype.decorate();   // 挂靠在构造函数上的父原型的decorate方法
        console.log('decorator1 decorate')    // 自身decorate方法的实际内容
    }
}
tree.decorator2 = function () {
    this.decorate = function () {
        this.decorator2.prototype.decorate();
        console.log('decorator2 decorate')
    }
}
tree.decorator3 = function () {
    this.decorate = function () {
        this.decorator3.prototype.decorate();
        console.log('decorator3 decorate')
    }
}
tree.getDecorator = function (deco) {
    // 自身作为装饰对象的原型，返回这个装饰对象
    tree[deco].prototype = this;
    return new tree[deco];
}

tree = tree.getDecorator('decorator1').getDecorator('decorator2').getDecorator('decorator3')

tree.decorate()