// ========================================================
// 7.2.5 LAB 7 - TASKS 1, 3, & 4: VEHICLES, ANIMAL INHERITANCE & POLYMORPHISM
// ========================================================
console.log("--- TASKS 1, 3 & 4: JAVASCRIPT INHERITANCE & METHOD OVERRIDING ---");

// Task 1: Base Vehicle Class & Car Subclass
class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    getDetails() {
        return `Vehicle: ${this.brand} ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(brand, model, doors) {
        super(brand, model);
        this.doors = doors;
    }
    // Task 4: Overriding method
    getDetails() {
        return `Car Profile: ${this.brand} ${this.model} (${this.doors}-Door Sedan)`;
    }
}

// Task 3 & 4: Animal base class and multiple polymorphic subclasses
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        return "Some generic animal sound";
    }
}

class Dog extends Animal {
    makeSound() { return `${this.name} says: Woof! Woof!`; }
}

class Cat extends Animal {
    makeSound() { return `${this.name} says: Meow!`; }
}

class Bird extends Animal {
    makeSound() { return `${this.name} says: Chirp! Chirp!`; }
}

// Verification Logs
const myCar = new Car("Toyota", "Mark X", 4);
console.log(myCar.getDetails());

console.log("\nPolymorphic Animal Sounds:");
const farm = [new Dog("Buddy"), new Cat("Whiskers"), new Bird("Pip")];
farm.forEach(animal => console.log(animal.makeSound()));
console.log("-".repeat(60));


// ========================================================
// 7.2.5 LAB 7 - TASK 2: STUDENT CLASS WITH ENCAPSULATION
// ========================================================
console.log("\n--- TASK 2: JAVASCRIPT STUDENT ENCAPSULATION ---");

class Student {
    // '#' declares truly private fields in modern JavaScript
    #name;
    #studentId;

    constructor(name, studentId) {
        this.#name = name;
        this.#studentId = studentId;
    }

    // Getters
    getName() { return this.#name; }
    getStudentId() { return this.#studentId; }

    // Setters
    setName(newName) { this.#name = newName; }
    setStudentId(newId) { this.#studentId = newId; }
}

const student = new Student("Jessline Ken", "25576365");
console.log(`Initial Student: ${student.getName()} (ID: ${student.getStudentId()})`);
// Updating via setter
student.setName("Zeng Ri Qing");
console.log(`Updated Student Name: ${student.getName()}`);
console.log("-".repeat(60));


// ========================================================
// 7.2.5 LAB 7 - TASK 5: BANK ACCOUNT ENCAPSULATION
// ========================================================
console.log("\n--- TASK 5: JAVASCRIPT BANK ACCOUNT CONTROL ---");

class BankAccount {
    #balance;

    constructor(owner, initialBalance) {
        this.owner = owner;
        this.#balance = initialBalance;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited K${amount}. New balance: K${this.#balance}`);
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew K${amount}. Remaining balance: K${this.#balance}`);
        } else {
            console.log("Transaction Denied: Insufficient funds or invalid amount.");
        }
    }
}

const account = new BankAccount("Jessline Ken", 500);
console.log(`Account Owner: ${account.owner} | Starting Balance: K${account.getBalance()}`);
account.deposit(250);
account.withdraw(100);
account.withdraw(800); // Triggers restriction check