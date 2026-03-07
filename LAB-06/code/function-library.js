/**
 * Utility Functions Library
 * Demonstrates parameters, return values, JSDoc documentation,
 * DRY principle and organized code.
 */


/* =========================
   STRING FUNCTIONS
========================= */

/**
 * Reverse a string
 * @param {string} text - The text to reverse
 * @returns {string} reversed text
 */
function reverseString(text) {
    return text.split("").reverse().join("");
}


/**
 * Count number of words in text
 * @param {string} text
 * @returns {number}
 */
function countWords(text) {
    return text.trim().split(" ").length;
}


/**
 * Check if text is a palindrome
 * @param {string} text
 * @returns {boolean}
 */
function isPalindrome(text) {
    let reversed = reverseString(text); // DRY: reuse reverse function
    return text === reversed;
}



/* =========================
   MATH FUNCTIONS
========================= */

/**
 * Check if a number is prime
 * @param {number} n
 * @returns {boolean}
 */
function isPrime(n) {

    if (n <= 1) return false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}



/**
 * Calculate factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}



/**
 * Return nth Fibonacci number
 * @param {number} n
 * @returns {number}
 */
function fibonacci(n) {

    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {

        let temp = a + b;

        a = b;

        b = temp;

    }

    return b;
}



/* =========================
   ARRAY FUNCTIONS
========================= */

/**
 * Remove duplicate items from array
 * @param {Array} arr
 * @returns {Array}
 */
function removeDuplicates(arr) {

    return [...new Set(arr)];

}



/**
 * Find median value of numbers
 * @param {number[]} numbers
 * @returns {number}
 */
function findMedian(numbers) {

    numbers.sort((a, b) => a - b);

    let mid = Math.floor(numbers.length / 2);

    if (numbers.length % 2 === 0) {

        return (numbers[mid - 1] + numbers[mid]) / 2;

    } else {

        return numbers[mid];

    }

}



/* =========================
   VALIDATION FUNCTIONS
========================= */

/**
 * Validate email format
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {

    let pattern = /\S+@\S+\.\S+/;

    return pattern.test(email);

}



/**
 * Validate phone number (10–15 digits)
 * @param {string} phone
 * @returns {boolean}
 */
function isValidPhone(phone) {

    let pattern = /^[0-9]{10,15}$/;

    return pattern.test(phone);

}



/* =========================
   TESTING THE FUNCTIONS
========================= */

console.log("Reverse:", reverseString("hello"));

console.log("Word Count:", countWords("I love JavaScript"));

console.log("Palindrome:", isPalindrome("madam"));

console.log("Is Prime:", isPrime(7));

console.log("Factorial:", factorial(5));

console.log("Fibonacci:", fibonacci(6));

console.log("Remove Duplicates:", removeDuplicates([1,2,2,3,4,4]));

console.log("Median:", findMedian([1,2,3,4,5]));

console.log("Valid Email:", isValidEmail("test@gmail.com"));

console.log("Valid Phone:", isValidPhone("08012345678"));