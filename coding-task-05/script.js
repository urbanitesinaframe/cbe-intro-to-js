console.log("Solution to task 01: Spot the error and fix them");

const size = 25;
let result;

if (size >= 10 && size <= 20) {
  result = "Equal or Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

console.log("Alternative Solution to task 01: Spot the error and fix them");

const size2 = 25;
let result2;

if (size2 > 20) {
  result2 = "Greater than 20";
} else if (size2 > 10) {
  result2 = "Greater than 10";
} else {
  result2 = "Lower than 10";
}

console.log(result2);
// Returns Greater than 10 but should return Greater than 20

console.log("Solution to task 02: Implement OddEven Function");

// TODO: Implement the oddEven function

const oddEven = function (number) {
  if (number % 2 === 0) return "even";
  else {
    return "odd";
  }
};

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

console.log("Solution to task 03: oldYoung function");

// TODO: Implement the oldYoung function

/*The function has one parameter which is a number
If the number is less than 16, return "children"
If the number is less than 50, return "young person"
Otherwise return "elder person"
If the number is not a number or a negative number a string invalid parameter*/

const oldYoung = function (age) {
  if (age > 0 && age < 16) {
    return "children";
  } else if (age > 16 && age < 50) {
    return "young person";
  } else if (age < 0) {
    return "invalid parameter";
  } else {
    return "elder person";
  }
};

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
