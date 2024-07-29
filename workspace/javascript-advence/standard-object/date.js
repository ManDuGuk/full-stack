// Date
let now = new Date();
// console.log(now);


let someDay = new Date(1000 * 60 * 60 * 24);
console.log(someDay);


someDay = new Date("2024-01-02T00:00:00.000Z");
console.log(someDay);

someDay = new Date(2024, 7 - 1, 28 + 1);
console.log(someDay);


console.log(now.toString());
console.log(now.toDateString());
console.log(now.toLocaleTimeString());


now = new Date();
console.log(now.setDate(now.getDate() + 3));
console.log(now.toLocaleString());
console.log(now.setMonth(now.getMonth() + 3));
console.log(now.toLocaleString());