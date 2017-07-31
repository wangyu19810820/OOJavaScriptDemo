var a = new Date('2017 7 30');
console.log(a);
console.log(new Date(2017, 6, 30, 18, 7, 0));
console.log(new Date(1501409319234));

a.setMonth(0);
console.log(a);

console.log(Date.parse('2017 7 30'))
console.log(typeof Date.now().valueOf())