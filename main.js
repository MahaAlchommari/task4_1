/////////////////////////part one////////////////////////////////////
var num = [2, 4, 6, 8, 10, 12, 11, 20, 21, 23];

for (var i = 0; i < 10; i++) {
  num.push(Math.floor(Math.random() * 10));
}

var sumEven = 0;
for (var i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    sumEven += num[i];
  }
}

console.log("adding even numbers: " + sumEven);

var sumLessThan5 = 0;
for (var i = 0; i < num.length; i++) {
  if (num[i] < 5) {
    sumLessThan5 += num[i];
  }
}

console.log("the sum of numbers whose is less than 5: " + sumLessThan5);

/////////////////////////////////////////////////////////////

var user = {
  name: "Maha",
  number: 123456789,
  age: 23,
  email: "maha@example.com",
};
console.log(user);

console.log("name: " + user.name);
console.log("num:" + user.number);
console.log("age: " + user.age);
console.log("email " + user.email);
