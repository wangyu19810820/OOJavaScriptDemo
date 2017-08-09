var observe = {
    add:function (callback) {
        this.subscribers.push(callback)
    },
    remove:function (callback) {
        for (var i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i] === callback) {
                delete this.subscribers[i];
            }
        }
    },
    publish:function (what) {
        for (var i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i] !== undefined) {
                this.subscribers[i](what);
            }
        }
    },
    make:function (o) {
        for (var p in this) {
            if (this.hasOwnProperty(p)) {
                o[p] = this[p]
            }
        }
        o.subscribers = [];
    }
}

var blogger = {};
observe.make(blogger);

var o1 = function (res) {
    console.log("o1 receive:" + res);
}
var o2 = function (res) {
    console.log("o2 receive:" + res);
}
var o3 = function (res) {
    console.log("o3 receive:" + res);
}

blogger.add(o1);
blogger.add(o2);
blogger.add(o3);
blogger.publish('hello blog')
blogger.remove(o2)
blogger.publish('lesson one')