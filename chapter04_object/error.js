// Error对象一般有两个属性：name, message
try {
    iDontExist();
} catch (e) {
    // console.log(e);
    console.log(e.name);
    console.log(e.message);
}
console.log("--------------------------------------------")

// 也可以自己抛出异常
try {
    throw new Error('A Error')
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}
console.log("--------------------------------------------")

try {
    throw new RangeError('A Error')
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}
console.log("--------------------------------------------")

// 也可以抛出一个只是包含了name, message的对象
try {
    throw {name: 'MyError', message:'A Error Occure'}
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}