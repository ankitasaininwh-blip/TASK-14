// Given number
let n = 153;

// 1. Sum of first n numbers
let sumFirstN = 0;

for (let i = 1; i <= n; i++) {
    sumFirstN += i;
}

console.log("Number:", n);
console.log("Sum of first " + n + " numbers:", sumFirstN);


// 2. Print table of n
console.log("\nTable of " + n + ":");

for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i));
}


// 3. Check prime number
let isPrime = true;

if (n <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log("\nIs it a prime number?", isPrime ? "Yes" : "No");


// 4. Print all factors
let factors = [];

for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        factors.push(i);
    }
}

console.log("Factors:", factors.join(", "));


// 5. Sum of all digits
let temp = n;
let sumDigits = 0;

while (temp > 0) {
    let digit = temp % 10;
    sumDigits += digit;
    temp = Math.floor(temp / 10);
}

console.log("Sum of digits:", sumDigits);


// 6. Check Armstrong number
let originalNumber = n;
let armstrongTemp = n;
let digitCount = n.toString().length;
let armstrongSum = 0;

while (armstrongTemp > 0) {
    let digit = armstrongTemp % 10;
    armstrongSum += Math.pow(digit, digitCount);
    armstrongTemp = Math.floor(armstrongTemp / 10);
}

let isArmstrong = armstrongSum === originalNumber;

console.log("Is it an Armstrong number?", isArmstrong ? "Yes" : "No");