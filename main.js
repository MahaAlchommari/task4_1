/////////////////////////part one////////////////////////////////////

var numbers = [];
for (var i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 10));
}

var evenSum = 0;
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenSum += numbers[i];
  }
}
var sumLess = 0;
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] < 5) {
    sumLess += numbers[i];
  }
}

console.log("Random numbers: " + numbers.join(", "));
console.log("adding even numbers:" + evenSum);
console.log("the sum of numbers whose is less than 5: " + sumLess);
document.write("Random numbers: " + numbers.join(", ") + "<br>");
document.write("adding even numbers:" + evenSum + "<br>");
document.write("the sum of numbers whose is less than 5: " + sumLess + "<br>");

/////////////////////////////////////////////////////////////

/////////////////////////part 2////////////////////////////////////
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
console.log("email: " + user.email);

document.write(JSON.stringify(user) + "<br>");
document.write(user + "<br>");
document.write("name: " + user.name + "<br>");
document.write("num:" + user.number + "<br>");
document.write("age " + user.age + "<br>");
document.write("email: " + user.email + "<br>");
/////////////////////////////////////////////////////////////
