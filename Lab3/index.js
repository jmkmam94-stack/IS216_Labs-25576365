// ========================================================
// 3.2.3 LAB 3 - TASK 1 & 4: ARRAY MANIPULATION & TYPE CHECK
// ========================================================
console.log("--- TASK 1 & 4: JAVASCRIPT ARRAYS & TYPE CHECKS ---");

// 1. Array of 5 numbers
let numbers = [45, 12, 89, 7, 34];
console.log("Numbers Array:", numbers);

// Finding Max and Min
let maxNum = Math.max(...numbers);
let minNum = Math.min(...numbers);
console.log("Maximum Number:", maxNum);
console.log("Minimum Number:", minNum);

// 4. Checking data types
console.log("Type of 'numbers':", typeof numbers, "(Array check via Array.isArray:", Array.isArray(numbers) + ")");
console.log("Type of 'maxNum':", typeof maxNum);
console.log("-".repeat(50));

// ========================================================
// 3.2.3 LAB 3 - TASK 2 & 3: OBJECTS & NESTED COLLECTIONS
// ========================================================
console.log("\n--- TASK 2 & 3: JAVASCRIPT OBJECTS & BOOK LIST ---");

// 2. Object representing a single book
let singleBook = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};
console.log("Single Book Object:", singleBook);
console.log("Type of 'singleBook':", typeof singleBook);

// 3. List of 3 book objects
let library = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
];

console.log("\nAccessing Details from Book List:");
library.forEach((book, index) => {
    console.log(`Book ${index + 1}: "${book.title}" written by ${book.author} (${book.year})`);
});