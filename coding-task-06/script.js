console.log("Task 01: oddNumbers function");

function oddNumbers(numOne, numTwo) {
  let result = "";
  if (numOne < 0 || numTwo < 0) {
    return "Input can't be smaller than 0";
  } else {
    for (i = numOne; i <= numTwo; i++) {
      if (i % 2 !== 0) {
        result += i + ",";
      } else {
        result += "";
      }
    }
    return result.substring(0, result.length - 1); //Ta Onur
  }
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11
