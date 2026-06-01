// ========================================================
// 2.3.3 LAB 2 - TASK 1: VARIABLE DECLARATION & PRINTING
// ========================================================
let name = "Jessline Ken"; 
let age = 25;
let price = 19.99;
let active = true;

console.log("--- TASK 1: JAVASCRIPT VARIABLE DECLARATIONS ---");
console.log("String Name: ", name);
console.log("Integer Age: ", age);
console.log("Float Price: ", price);
console.log("Boolean Active: ", active);
console.log("-".repeat(45));

// ========================================================
// 2.3.3 LAB 2 - TASK 2: REFERENCE TYPE BEHAVIOR (HEAP)
// ========================================================
console.log("\n--- TASK 2: REFERENCE TYPE BEHAVIOR ---");
let obj1 = { score: 85 };
let obj2 = obj1; // Both variables share the exact same reference address

obj2.score = 100; // Altering obj2 changes the value inside obj1
console.log("Reference Type -> obj1.score:", obj1.score, " | obj2.score:", obj2.score);
console.log("Explanation: Modifying obj2 impacted obj1 because they point to the same Heap address.");

// ========================================================
// 2.3.3 LAB 2 - TASK 3: MODIFYING CONSTANTS & ERROR HANDLING
// ========================================================
console.log("\n--- TASK 3: MODIFYING CONSTANTS ---");
const PI = 3.14159;
console.log("Constant PI Initialized to:", PI);

try {
    PI = 3.14; // Forces a deliberate runtime assignment crash
} catch (error) {
    console.log("Documented Expected Error: " + error.message);
}

// ========================================================
// 2.3.3 LAB 2 - TASK 4: SCOPE DIFFERENCES (var vs let)
// ========================================================
console.log("\n--- TASK 4: SCOPE DIFFERENCES ---");
function scopeDemo() {
    if (true) {
        var functionScopedVar = "I am a var (accessible anywhere in this function).";
        let blockScopedLet = "I am a let (trapped strictly inside this block).";
    }
    console.log("Testing var outside block: " + functionScopedVar); // Succeeds
    try {
        console.log(blockScopedLet); // Fails Intentionally
    } catch (error) {
        console.log("Testing let outside block: Caught Expected " + error.name + " (" + error.message + ")");
    }
}
scopeDemo();