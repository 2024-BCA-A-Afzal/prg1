
const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

const limit = 100;

console.log("Prime numbers from 1 to " + limit + ":");

for (let num = 2; num <= limit; num++) {
    if (isPrime(num)) {
        console.log(num);
    }
}
