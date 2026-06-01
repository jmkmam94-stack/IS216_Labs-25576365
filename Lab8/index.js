// ========================================================
// 8.2.3 LAB 8 - TASK 1: SIMULATED FRAMEWORK COMPONENT (REACT)
// ========================================================
console.log("--- TASK 1: JAVASCRIPT FRAMEWORK COMPONENT ---");
// Simulating a declarative React Functional Component rendering state
function HelloReact(props) {
    return `<p>Hello, ${props.user}! Welcome to React component-based design.</p>`;
}
console.log("Rendered Element output:");
console.log(HelloReact({ user: "Jessline Ken" }));
console.log("-".repeat(60));

// ========================================================
// 8.2.3 LAB 8 - TASK 2: PURE FUNCTIONS FOR MATHEMATICS
// ========================================================
console.log("\n--- TASK 2: JAVASCRIPT PURE MATHEMATICAL FUNCTIONS ---");
// Pure: Same input always generates same output, zero external side effects
const pureSquare = (num) => num * num;
const pureAverage = (a, b) => (a + b) / 2;

console.log(`Square of 8: ${pureSquare(8)}`);
console.log(`Average of 14 and 26: ${pureAverage(14, 26)}`);
console.log("-".repeat(60));

// ========================================================
// 8.2.3 LAB 8 - TASKS 3 & 5: MAP/FILTER/REDUCE & REFACTORING
// ========================================================
console.log("\n--- TASKS 3 & 5: JAVASCRIPT REFACTORING IMPERATIVE -> FUNCTIONAL ---");

const dataSet = [12, 5, 8, 130, 44, 15, 3];
console.log("Raw Imperative Array:", dataSet);

// Task 5: Instead of using typical old-school 'for' loops with mutable loop tracking variables, 
// we chain functional methods keeping data entirely immutable.
const processedSum = dataSet
    .filter(num => num > 10)           // 1. Keep elements over 10
    .map(num => num * 2)               // 2. Double them
    .reduce((acc, val) => acc + val, 0); // 3. Total the results together

console.log(`Chained Functional Output (Sum of doubled values > 10): ${processedSum}`);
console.log("-".repeat(60));

// ========================================================
// 8.2.3 LAB 8 - TASK 4: HIGHER-ORDER FUNCTIONS WITH CALLBACKS
// ========================================================
console.log("\n--- TASK 4: JAVASCRIPT HIGHER-ORDER FUNCTION EXECUTION ---");

// A higher-order function takes an execution instruction block (callback) as a parameter
function processTransaction(amount, callback) {
    console.log(`Processing core transaction ledger amount: K${amount}`);
    callback(amount); // Executing the callback block dynamically
}

const localTaxCallback = (amount) => console.log(`Callback Action: Calculated GST tax rate value -> K${amount * 0.10}`);
const logAlertCallback = (amount) => console.log(`Callback Action: Security logged deposit sequence for balance -> K${amount}`);

processTransaction(450, localTaxCallback);
processTransaction(1200, logAlertCallback);
console.log("-".repeat(60));