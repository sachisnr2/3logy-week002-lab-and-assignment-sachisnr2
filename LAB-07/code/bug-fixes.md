# Debugging Report

## Bug #1

### Error Type
Syntax Error

### Problem Explanation
The function `greet` is missing a closing curly brace `}`. Because of this, JavaScript cannot understand where the function ends.

### Fixed Code
```javascript
function greet(name) {
  console.log(`Hello, ${name}`);
}

greet("Alice");
How I Debugged It
I checked the function and noticed the opening { did not have a matching }. Adding the closing brace fixed the syntax error.

Bug #2
Error Type

Logical Error (Off-by-One)

Problem Explanation

The loop runs 10 times but the array only contains 5 elements. When the loop index becomes greater than 4, JavaScript prints undefined.

Fixed Code
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
How I Debugged It
I compared the loop limit with the array length and realized the loop should stop at numbers.length.

Bug #3
Error Type

Logical Error

Problem Explanation

The function checks if a number is even but uses the wrong condition n % 2 === 1. That actually checks if the number is odd.

Fixed Code
function isEven(n) {
  return n % 2 === 0;
}

console.log(isEven(4));
How I Debugged It
Even numbers leave remainder 0 when divided by 2, so I corrected the condition.

Bug #4
Error Type

Type Conversion Error

Problem Explanation

userInput is a string "5". When adding it to 10, JavaScript concatenates instead of performing addition.

Fixed Code
const userInput = "5";
const result = Number(userInput) + 10;

console.log(result);
How I Debugged It

I noticed the variable was a string and converted it to a number using Number().

Bug #5
Error Type

Runtime / Logical Error

Problem Explanation

An empty array was passed to the function. Because the array has no items, both the first and last values become undefined.

Fixed Code
function getFirstAndLast(items) {

  if (items.length === 0) {
    return "Array is empty";
  }

  const first = items[0];
  const last = items[items.length - 1];

  return { first, last };
}

const result = getFirstAndLast([]);
console.log(result);
How I Debugged It

I checked the input and saw the array was empty, so I added a condition to handle that case.
