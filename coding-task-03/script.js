console.log("Task 01");

function welcomeMsg(name) {
  return "Welcome " + name;
}

console.log(welcomeMsg("Jane!"));
console.log(welcomeMsg("Marc!"));

console.log("Task 02");
console.log("Implement a calcGrossPrice function");

function calcGrossPrice(price, tax) {
  return (price * (1 + tax)).toFixed(1);
}

console.log(calcGrossPrice(20, 0.19));
console.log(calcGrossPrice(40, 0.16));

console.log("Task 03");
console.log("Implement a addPositive function");

function addPositive(a, b) {
  return Math.abs(a) + Math.abs(b);
}

console.log(addPositive(2, 3));
console.log(addPositive(3, -5));
console.log(addPositive(-1, -8));
