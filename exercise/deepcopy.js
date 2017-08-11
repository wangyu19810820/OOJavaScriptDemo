function deepcopy(child, parent) {
    for (var i in parent) {
        if (Array.isArray(parent[i])) {
            var c = [];
            child[i] = c;
            deepcopy(c, parent[i])
        } else if (typeof parent[i] == "object") {
            var c = {}
            child[i] = c;
            deepcopy(c, parent[i])
        } else {
            child[i] = parent[i]
        }
    }
}
var a  = {
    type:'a',
    arr:[1, 2, 3],
    obj:{
        type:'obj'
    }
}
var b = {}
deepcopy(b, a)
b.type = 'b';
b.arr.push(4)
b.obj.type = 'obj1'
console.log(a)
console.log(b)