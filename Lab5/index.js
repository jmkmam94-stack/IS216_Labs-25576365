// ========================================================
// 5.2.4 LAB 5 - TASK 1: RECURSIVE FACTORIAL
// ========================================================
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// ========================================================
// 5.2.4 LAB 5 - TASK 2: REVERSE A STRING
// ========================================================
function reverseString(str) {
    return str.split("").reverse().join("");
}

// ========================================================
// 5.2.4 LAB 5 - TASK 3: PALINDROME CHECKER
// ========================================================
function isPalindrome(word) {
    let cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversed = reverseString(cleanWord);
    return cleanWord === reversed;
}

// ========================================================
// 5.2.4 LAB 5 - TASK 4: ALGORITHMS (SEARCH & SORT)
// ========================================================
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

function bubbleSort(arr) {
    let sortedArr = [...arr]; // Copy array to prevent changing original
    let n = sortedArr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                let temp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1];
                sortedArr[j + 1] = temp;
            }
        }
    }
    return sortedArr;
}

function binarySearch(sortedArr, target) {
    let left = 0;
    let right = sortedArr.length - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (sortedArr[mid] === target) return mid;
        else if (sortedArr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

// ========================================================
// 5.2.4 LAB 5 - TASK 5: FIBONACCI SEQUENCE
// ========================================================
function generateFibonacci(terms) {
    let sequence = [0, 1];
    if (terms <= 0) return [];
    if (terms === 1) return [0];
    
    for (let i = 2; i < terms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// ========================================================
// EXECUTION & VERIFICATION TEST LOGS
// ========================================================
console.log("--- JAVASCRIPT LAB 5: FUNCTIONS & ALGORITHMS ---");
console.log("Task 1 (Factorial of 5):", factorial(5));
console.log("Task 2 (Reverse 'PNGUoT'):", reverseString("PNGUoT"));
console.log("Task 3 (Is 'racecar' a palindrome?):", isPalindrome("racecar"));
console.log("Task 3 (Is 'hello' a palindrome?):", isPalindrome("hello"));

let testData = [64, 34, 25, 12, 22, 11, 90];
console.log("\nTask 4 - Original Array:", testData);
let sortedData = bubbleSort(testData);
console.log("Task 4 - Bubble Sorted Array:", sortedData);
console.log("Task 4 - Linear Search (Find 22 in Original): index", linearSearch(testData, 22));
console.log("Task 4 - Binary Search (Find 22 in Sorted): index", binarySearch(sortedData, 22));

console.log("\nTask 5 (Fibonacci - 8 terms):", generateFibonacci(8));
console.log("-".repeat(55));