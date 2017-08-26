var a = new Function('a', 'b', 'return a + b')
console.log(a(2, 3))

function say(a, b) {
    console.log('hello ' + this.name + ' with:' + a + ',' + b)
}
var o = {name : 'dog'};
say.call(o, 'a', 'b')
say.apply(o, ['a', 'b'])
console.log(say.length)