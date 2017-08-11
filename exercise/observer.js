function make(o) {
    o.subscribers = [];
    o.add = function (callback) {
        this.subscribers.push(callback)
    }
    o.remove = function (callback) {
        for(var i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i] === callback) {
                delete this.subscribers[i];
                return
            }
        }
    }
    o.write = function (what) {
        for (var i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i])
                this.subscribers[i](what)
        }
    }
}
function a(res) {
    console.log("a" + res)
}
function b(res) {
    console.log("b" + res)
}
function c(res) {
    console.log("c" + res)
}
var author = {}
make(author)
author.add(a)
author.add(b)
author.add(c)
author.remove(b)
author.write('hi')

