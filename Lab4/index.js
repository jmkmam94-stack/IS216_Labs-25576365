// ========================================================
// 4.2.3 LAB 4 - TASK 1: POSITIVE, NEGATIVE, OR ZERO
// ========================================================
console.log("--- TASK 1: JAVASCRIPT NUMBER SIGN CHECK ---");
let testNum = -7; 

if (testNum > 0) {
    console.log(`The number ${testNum} is POSITIVE.`);
} else if (testNum < 0) {
    console.log(`The number ${testNum} is NEGATIVE.`);
} else {
    console.log(`The number is ZERO.`);
}
console.log("-".repeat(50));

// ========================================================
// 4.2.3 LAB 4 - TASK 2: MULTIPLICATION TABLE (NESTED LOOPS)
// ========================================================
console.log("\n--- TASK 2: JAVASCRIPT MULTIPLICATION TABLE (1 to 5) ---");
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        // Pad numbers to align columns neatly
        let product = i * j;
        row += product.toString().padStart(4, " ");
    }
    console.log(row);
}
console.log("-".repeat(50));

// ========================================================
// 4.2.3 LAB 4 - TASK 3: PRIME NUMBER CHECKER
// ========================================================
console.log("\n--- TASK 3: JAVASCRIPT PRIME NUMBER CHECKER ---");
let checkPrime = 17;
let isPrime = true;

if (checkPrime <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(checkPrime); i++) {
        if (checkPrime % i === 0) {
            isPrime = false;
            break;
        }
    }
}
console.log(`Is ${checkPrime} a prime number? -> ${isPrime}`);
console.log("-".repeat(50));

// ========================================================
// 4.2.3 LAB 4 - TASK 4: INTERACTIVE MENU SYSTEM
// ========================================================
console.log("\n--- TASK 4: JAVASCRIPT MENU SYSTEM ---");
let menuChoice = 2; // Simulated input choice

console.log("Welcome to the System Menu:");
console.log("1. View Profile\n2. System Settings\n3. Logout");
console.log(`Selected Option: ${menuChoice}`);

switch (menuChoice) {
    case 1:
        console.log("Action: Loading student profile dashboard...");
        break;
    case 2:
        console.log("Action: Navigating to account system settings...");
        break;
    case 3:
        console.log("Action: Logging out securely. Goodbye!");
        break;
    default:
        console.log("Action: Invalid option selected. Please pick 1, 2, or 3.");
}