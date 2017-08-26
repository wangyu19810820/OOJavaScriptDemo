function deepcopy(o) {
    if (Array.isArray(o)) {
        var r = [];
    } else {
        var r = {};
    }
    
    for (var p in o) {
        if (typeof(o[p]) == 'object') {
            r[p] = deepcopy(o[p])
        } else {
            r[p] = o[p]
        }
    }
    return r;
}

var a = {'a': 'zz', b:[1, 2, 3], c:{name:'xx'}}
var b = deepcopy(a)
console.log(b)
