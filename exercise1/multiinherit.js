function multi() {
    var r = {};
    for(var i = 0; i < arguments.length; i++) {
        for(var p in arguments[i]) {
            r[p] = arguments[i][p];
        }
    }
    return r;
}

var r = multi({
    say:function () {
        return this.name;
    }
}, {
    name:'aa'
});
console.log(r.say())
