
/**
 * Checks if a number is a prime number.
 * @param {number} num - The number to check.
 * @returns {boolean} True if prime, false otherwise.
 */
const isPrime = (num) => {
    // 1. Numbers less than or equal to 1 are not prime
    if (num <= 1) {
        return false;
    }

    // 2. 2 is prime; other even numbers are not prime
    if (num === 2) {
        return true;
    }

    if (num % 2 === 0) {
        return false;
    }

    // 3. Check factors up to the square root of num
    const limit = Math.sqrt(num);

    for (let i = 3; i <= limit; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

// Export the function for the test cases
module.exports = isPrime;
