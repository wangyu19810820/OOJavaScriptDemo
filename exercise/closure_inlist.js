var funArr = [];
function createFun() {
    for (var i = 0; i < 3; i++) {
        funArr.push(function () {
            // 捕获的作用域，i的值是3
            console.log(i);
        });
    }

    for (var i = 0; i < 3; i++) {
        funArr.push(function (num) {
            return function () {
                // 捕获的作用域，num的值是值传递，所以是0,1,2
                console.log(num)
            }
        }(i));
    }
}
createFun();
for (var j = 0; j < funArr.length; j++) {
    funArr[j]();
}
