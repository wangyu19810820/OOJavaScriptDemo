// 给构造函数添加属性和方法，这些属性方法就会被构造出来的对象所拥有
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
    return 'Rating:' + this.rating + ",price:" + this.price;
}

var g1 = new Gadget('shoes', 'red');
var g2 = new Gadget('glasses', 'blue');

console.log(g1.whatAreYou());
console.log(g1.getInfo());
console.log(g2.whatAreYou());
console.log(g2.getInfo());
console.log("--------------------------------------------")

// 可以直接给构造函数的prototype属性赋值
// 只能影响到新生成的对象
Gadget.prototype = {
    price: 200,
    rating: 4,
    getInfo:function () {
        return 'rating:' + this.rating + ",price:" + this.price;
    }
}
var g3 = new Gadget('computer', 'black');
console.log(g1.getInfo())
console.log(g3.getInfo())
console.log("--------------------------------------------")

// 修改构造函数的prototype对象，能影响到之前构造出来的对象
Gadget.prototype.get = function (what) {
    return this[what]
}
console.log(g3.get('price'))    // g1,g2的原型对象，与g3的原型对象完全不同，所以只能影响到g3


