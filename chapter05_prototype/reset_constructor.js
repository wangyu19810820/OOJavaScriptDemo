var animal = {
    name: "abc"
}
function Dog() {
    this.say = function (thing) {
        return this.name + " do " + thing;
    }
}

var dog1 = new Dog();
console.log(dog1.constructor)
console.log(dog1.constructor === Dog)
console.log("--------------------------------------------")

Dog.prototype = animal;
var dog2 = new Dog();
console.log(dog2.constructor)
console.log(dog2.constructor === Dog)
console.log("--------------------------------------------")

// 重新指定函数的prototype属性后，需要重置prototype的constructor属性为构造函数
Dog.prototype.constructor = Dog;
console.log(dog2.constructor)
console.log(dog2.constructor === Dog)
