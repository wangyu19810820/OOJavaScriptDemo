// 深拷贝
function deepCopy(p, c) {
    c = c || {};
    for (var i in p) {
        if (p.hasOwnProperty(i)) {
            if (typeof p[i] === "object") {
                c[i] = Array.isArray(p[i]) ? [] : {};
                deepCopy(p[i], c[i]);
            } else {
                c[i] = p[i];
            }
        }
    }
    return c;
}
var parent = {
    numbers: [1, 2, 3],
    letters: ['a', 'b', 'c'],
    obj:{
        prop:1
    },
    bool:true
}

var myDeep = deepCopy(parent);
myDeep.numbers.push(4)
myDeep.letters.pop();
myDeep.obj.prop = 2;
console.log(JSON.stringify(parent))
console.log(JSON.stringify(myDeep))

