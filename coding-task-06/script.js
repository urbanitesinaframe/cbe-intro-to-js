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

console.log("Task 02: charCount function");

/*The function has a first parameter for a word which is a string.
 The function has a second parameter which contains the character to search for which is a string.
 Check if the second parameter consists of only one character, if not, quit the function.
 The function returns the number of times the character from the second parameter is present in the word.
 The function should be case insensitive.*/

// TODO: Implement the charCount function

function charCount(parameter1, parameter2) {
  let result = 0;
  if (
    parameter2.length !== 1 ||
    isNaN(false) ||
    typeof parameter2 !== "string"
  ) {
    return "Parameter2 is not a (single) letter";
  } else {
    for (i = 0; i < parameter1.length; i++) {
      if (parameter1[i].toLowerCase() === parameter2.toLowerCase()) {
        result += 1;
      } else {
        result + "";
      }
    }
    return result;
  }
}
console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3

console.log(charCount("Resümee", 2));
//check if 1st if is being triggered. Expected result "Parameter2 is not a (single) letter"

console.log(charCount("Elefant", "e"));
//check if all letters are changed to lower case. Expected result 2
