function Gadget(name, color) {
    this.name = name;
    this.color = color;
    this.whatAreYou = function () {
        return "I am a " + this.color + " " + this.name;
    }
}

Gadget.prototype.price = 100;
Gadget.prototype.rating = 3;
Gadget.prototype.getInfo = function () {
    return 'Rating:' + Gadget.prototype.rating + ",price:" + Gadget.prototype.price;
}

var g = new Gadget('shose', 'red');
console.log(g.getInfo());

// 对象属性能覆盖原型的属性，造成表面修改属性的“现象”
// 同时也能通过访问原型再访问属性获得
console.log(g.price)
g.price = 200
console.log(g.price)
console.log(g.constructor.prototype.price)
console.log("--------------------------------------------")

// hasOwnProperty(propName),对象本身是否拥有属性
console.log(g.hasOwnProperty('price'))
console.log(g.hasOwnProperty('rating'))
console.log(g.constructor.prototype.hasOwnProperty('toString'))
console.log(Object.prototype.hasOwnProperty("toString"))
console.log("--------------------------------------------")

// propertyIsEnumerable(propName),对象本身的该属性是否是可枚举的
console.log(g.propertyIsEnumerable('name'))
console.log(g.propertyIsEnumerable('rating'))
console.log(g.constructor.prototype.propertyIsEnumerable('rating'))
console.log("--------------------------------------------")

// isPrototypeOf(obj)判断自身是否是某个对象的原型
var product = {
    price: 100,
    rating: 3,
    getInfo: function () {
        return 'Rating:' + Gadget.prototype.rating + ",price:" + Gadget.prototype.price;
    }
}
Gadget.prototype = product;
var g1 = new Gadget('shose', 'red')
g1.price = 200
console.log(g1.getInfo())
console.log(product.isPrototypeOf(g1))
console.log("--------------------------------------------")

// Objective.getPrototypeOf(obj)
// 获取某个对象的原型
console.log(Object.getPrototypeOf(g1) === product)

// __proto__在某些浏览器内能返回对象原型
console.log(g1.__proto__ == product)