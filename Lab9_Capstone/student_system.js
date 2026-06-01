// ============================================================================
// IS216 CAPSTONE: STUDENT MANAGEMENT SYSTEM (JAVASCRIPT)
// Demonstrates: OOP (5 Classes), Functional Programming, Algorithms, & Error Handling
// ============================================================================

// --- CLASS 1: BASE CLASS (ABSTRACTION/ENCAPSULATION) ---
class Person {
    constructor(name, email) {
        if (this.constructor === Person) {
            throw new Error("Abstract class 'Person' cannot be instantiated directly.");
        }
        this.name = name;
        this.email = email;
    }
    getDetails() {
        return `${this.name} (${this.email})`;
    }
}

// --- CLASS 2: STUDENT SUBCLASS (INHERITANCE) ---
class Student extends Person {
    constructor(id, name, email, major) {
        super(name, email);
        this.id = id;
        this.major = major;
        this.grades = []; // Array of numerical marks
    }

    addGrade(mark) {
        if (mark < 0 || mark > 100) throw new RangeError("Grade must be between 0 and 100.");
        this.grades.push(mark);
    }

    // Functional Programming: Using Reduce to calculate GPA/Average
    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        const total = this.grades.reduce((sum, current) => sum + current, 0);
        return (total / this.grades.length).toFixed(2);
    }

    getDetails() {
        return `Student ID: ${this.id} | Name: ${this.name} | Major: ${this.major} | Avg: ${this.getAverageGrade()}%`;
    }
}

// --- CLASS 3: COURSE CLASS ---
class Course {
    constructor(code, title, credits) {
        this.code = code;
        this.title = title;
        this.credits = credits;
    }
}

// --- CLASS 4: ENROLLMENT LEDGER RECORD CLASS ---
class Enrollment {
    constructor(student, course, semester) {
        this.student = student; // Student object reference
        this.course = course;   // Course object reference
        this.semester = semester;
        this.enrollmentDate = new Date().toLocaleDateString();
    }
    getRecord() {
        return `[${this.semester}] ${this.student.name} enrolled in ${this.course.code} - ${this.course.title} on ${this.enrollmentDate}`;
    }
}

// --- CLASS 5: CENTRAL MANAGEMENT SYSTEM ENGINE ---
class ManagementSystem {
    constructor() {
        this.students = [];
        this.courses = [];
        this.enrollments = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    addCourse(course) {
        this.courses.push(course);
    }

    enrollStudent(studentId, courseCode, semester) {
        // Error Handling: Try/Catch validation bounds
        try {
            const student = this.students.find(s => s.id === studentId);
            const course = this.courses.find(c => c.code === courseCode);

            if (!student || !course) {
                throw new Error(`Enrollment failed: Reference verification mismatch for Student ID ${studentId} or Course ${courseCode}.`);
            }

            const registration = new Enrollment(student, course, semester);
            this.enrollments.push(registration);
            console.log(`Success: ${student.name} mapped to ${course.code} successfully.`);
        } catch (error) {
            console.error(`[SYSTEM ERROR LOG]: ${error.message}`);
        }
    }

    // Functional Programming: Filter + Map implementation
    getHonorRollStudents() {
        console.log("\n--- RUNNING FUNCTIONAL FILTER + MAP: HONOR ROLL (AVG >= 85%) ---");
        return this.students
            .filter(student => student.getAverageGrade() >= 85)
            .map(student => `${student.name} (GPA: ${student.getAverageGrade()}%)`);
    }

    // Algorithm Logic: Bubble Sort to rank students by ID number sequence
    sortStudentsById() {
        console.log("\n--- RUNNING ALGORITHMIC BUBBLE SORT: ORDER BY ID ---");
        let n = this.students.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (this.students[j].id > this.students[j + 1].id) {
                    let temp = this.students[j];
                    this.students[j] = this.students[j + 1];
                    this.students[j + 1] = temp;
                }
            }
        }
    }
}

// ============================================================================
// EXECUTION ENGINE TEST SCENARIOS
// ============================================================================
const sms = new ManagementSystem();

// Seed Course Catalogue
sms.addCourse(new Course("IS216", "Introduction to Programming", 4));
sms.addCourse(new Course("IS214", "Network Administration", 4));

// Seed Student Registrations
const s1 = new Student("25576365", "Jessline Ken", "jessline.ken@pnguot.ac.pg", "Information Systems");
const s2 = new Student("11024500", "Reinhard Siura", "reinhard.s@pnguot.ac.pg", "Information Systems");
const s3 = new Student("33041288", "Alice Koris", "alice.k@pnguot.ac.pg", "Business IT");

sms.addStudent(s1);
sms.addStudent(s2);
sms.addStudent(s3);

// Assign Mock Academic Grades
s1.addGrade(92); s1.addGrade(88); s1.addGrade(95); // High marks (Honor Roll)
s2.addGrade(74); s2.addGrade(81); s2.addGrade(78);
s3.addGrade(87); s3.addGrade(89); s3.addGrade(84); // High marks (Honor Roll)

// Execute Course Assignments
console.log("--- CAPSTONE SYSTEM LIVE ACTION EXECUTION ---");
sms.enrollStudent("25576365", "IS216", "Semester 1, 2026");
sms.enrollStudent("11024500", "IS214", "Semester 1, 2026");

// Test Error Handling Edge Case (Invalid ID)
sms.enrollStudent("9999999", "IS216", "Semester 1, 2026");

// Render Filtered Data Pipelines
const honors = sms.getHonorRollStudents();
console.log("Honors Output List:", honors);

// Render Algorithmic Sorting Output
console.log("\nStudents Before Sorting by ID:");
sms.students.forEach(s => console.log(` -> ID: ${s.id} | Name: ${s.name}`));

sms.sortStudentsById();

console.log("\nStudents After Algorithmic Bubble Sort Execution:");
sms.students.forEach(s => console.log(` -> ID: ${s.id} | Name: ${s.name}`));