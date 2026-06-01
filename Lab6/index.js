// ========================================================
// 6.4.1 LAB 6 - TASK 1: SIMPLE CALCULATOR
// ========================================================
console.log("--- TASK 1: JAVASCRIPT CALCULATOR ---");
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : "Error: Cannot divide by zero";
        default: return "Invalid operator";
    }
}
console.log(`15 + 5 = ${calculate(15, 5, '+')}`);
console.log(`20 / 4 = ${calculate(20, 4, '/')}`);
console.log("-".repeat(50));

// ========================================================
// 6.4.1 LAB 6 - TASK 2: EVEN OR ODD VIA MODULUS
// ========================================================
console.log("\n--- TASK 2: JAVASCRIPT EVEN OR ODD ---");
let testNum = 27;
if (testNum % 2 === 0) {
    console.log(`The number ${testNum} is EVEN.`);
} else {
    console.log(`The number ${testNum} is ODD.`);
}
console.log("-".repeat(50));

// ========================================================
// 6.4.1 LAB 6 - TASK 3: PASSWORD VALIDATION
// ========================================================
console.log("\n--- TASK 3: JAVASCRIPT PASSWORD VALIDATION ---");
function validatePassword(password) {
    let hasMinLength = password.length >= 8;
    let hasSpecialChar = password.includes("!") || password.includes("@") || password.includes("#");
    
    // Logical AND checking both conditions
    if (hasMinLength && hasSpecialChar) {
        return "Password Status: VALID AND SECURE";
    } else {
        return "Password Status: INVALID (Must be 8+ chars and contain !, @, or #)";
    }
}
console.log("Testing 'Pass123':", validatePassword("Pass123"));
console.log("Testing 'Secret@2026':", validatePassword("Secret@2026"));
console.log("-".repeat(50));

// ========================================================
// 6.4.1 LAB 6 - TASK 4: STRING MANIPULATION
// ========================================================
console.log("\n--- TASK 4: JAVASCRIPT STRING MANIPULATION ---");
let rawText = "   PNG University of Technology   ";

let trimmed = rawText.trim();
let upper = trimmed.toUpperCase();
let lower = trimmed.toLowerCase();
let replaced = trimmed.replace("Technology", "Tech");

console.log(`Original: '${rawText}'`);
console.log(`Trimmed:  '${trimmed}'`);
console.log(`Upper:    '${upper}'`);
console.log(`Lower:    '${lower}'`);
console.log(`Replace:  '${replaced}'`);