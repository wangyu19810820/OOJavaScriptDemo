// function Decorate(o, deco) {
//     this.uber = o;
//     this.decorate = deco
//     this.doDecorate = function () {
//         if (this.uber)
//             this.uber.doDecorate();
//         this.decorate();
//     }
//     return this;
// }
// var a = new Decorate(null, function () {
//     console.log('a')
// })
// var b = new Decorate(a, function () {
//     console.log('b')
// })
// var c = new Decorate(b, function () {
//     console.log('c')
// })
//
// c.doDecorate()

var deco = {
    decorate:function () {
        console.log('base')
    },
    getDeco:function (o) {
        deco[o].prototype = this;
        return new deco[o]
    },
}
deco.a = function(){
    this.decorate=function () {
        this.__proto__.decorate()
        console.log('a')
    }
}
deco.b = function(){
    this.decorate=function () {
        this.__proto__.decorate()
        console.log('b')
    }
}
deco.c = function(){
    this.decorate=function () {
        this.__proto__.decorate()
        console.log('c')
    }
}
var r = deco.getDeco('a').getDeco('b').getDeco('c')
r.decorate()