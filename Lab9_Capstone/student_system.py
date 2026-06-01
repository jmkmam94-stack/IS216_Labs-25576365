# ============================================================================
# IS216 CAPSTONE: STUDENT MANAGEMENT SYSTEM (PYTHON)
# Demonstrates: OOP (5 Classes), Functional Programming, Algorithms, & Error Handling
# ============================================================================
from abc import ABC, abstractmethod
from functools import reduce

# --- CLASS 1: ABSTRACT BASE CLASS (ABSTRACTION/ENCAPSULATION) ---
class Person(ABC):
    def __init__(self, name, email):
        self.name = name
        self.email = email
        
    @abstractmethod
    def get_details(self):
        pass

# --- CLASS 2: STUDENT SUBCLASS (INHERITANCE) ---
class Student(Person):
    def __init__(self, student_id, name, email, major):
        super().__init__(name, email)
        self.id = student_id
        self.major = major
        self.grades = []

    def add_grade(self, mark):
        if mark < 0 or mark > 100:
            raise ValueError("Grade must be strictly inside the 0-100 score bounds.")
        self.grades.append(mark)

    # Functional Programming: Using reduce to isolate average marks
    get_average_grade = lambda self: round(reduce(lambda x, y: x + y, self.grades, 0) / len(self.grades), 2) if self.grades else 0

    def get_details(self):
        return f"Student ID: {self.id} | Name: {self.name} | Major: {self.major} | Avg: {self.get_average_grade()}%"

# --- CLASS 3: COURSE CLASS ---
class Course:
    def __init__(self, code, title, credits):
        self.code = code
        self.title = title
        self.credits = credits

# --- CLASS 4: ENROLLMENT RECORD bluePRINT ---
class Enrollment:
    def __init__(self, student, course, semester):
        self.student = student
        self.course = course
        self.semester = semester
        
    def get_record(self):
        return f"[{self.semester}] {self.student.name} locked into {self.course.code}"

# --- CLASS 5: CENTRAL SYSTEM SYSTEM MANAGEMENT ENGINE ---
class ManagementSystem:
    def __init__(self):
        self.students = []
        self.courses = []
        self.enrollments = []

    def add_student(self, student):
        self.students.append(student)

    def add_course(self, course):
        self.courses.append(course)

    def enroll_student(self, student_id, course_code, semester):
        # Error Handling Block
        try:
            student = next((s for s in self.students if s.id == student_id), None)
            course = next((c for c in self.courses if c.code == course_code), None)

            if not student or not course:
                raise KeyError(f"Enrollment Error: Verification rejected for ID {student_id} or Course {course_code}")

            registration = Enrollment(student, course, semester)
            self.enrollments.append(registration)
            print(f"Success: {student.name} mapped to {course.code} successfully.")
        except KeyError as error:
            print(f"[SYSTEM ERROR LOG]: {error}")

    # Functional Programming: Using filter and list comprehensions (Functional Mapping style)
    def get_honor_roll_students(self):
        print("\n--- RUNNING FUNCTIONAL FILTER + MAP: HONOR ROLL (AVG >= 85%) ---")
        high_achievers = filter(lambda s: s.get_average_grade() >= 85, self.students)
        return list(map(lambda s: f"{s.name} (GPA: {s.get_average_grade()}%)", high_achievers))

    # Algorithm Logic: Bubble Sort array sequencing
    def sort_students_by_id(self):
        print("\n--- RUNNING ALGORITHMIC BUBBLE SORT: ORDER BY ID ---")
        n = len(self.students)
        for i in range(n - 1):
            for j in range(0, n - i - 1):
                if self.students[j].id > self.students[j + 1].id:
                    self.students[j], self.students[j + 1] = self.students[j + 1], self.students[j]

# ============================================================================
# EXECUTION ENGINE TEST SCENARIOS
# ============================================================================
sms = ManagementSystem()

# Seed Courses
sms.add_course(Course("IS216", "Introduction to Programming", 4))
sms.add_course(Course("IS214", "Network Administration", 4))

# Seed Students
s1 = Student("25576365", "Jessline Ken", "jessline.ken@pnguot.ac.pg", "Information Systems")
s2 = Student("11024500", "Reinhard Siura", "reinhard.s@pnguot.ac.pg", "Information Systems")
s3 = Student("33041288", "Alice Koris", "alice.k@pnguot.ac.pg", "Business IT")

sms.add_student(s1)
sms.add_student(s2)
sms.add_student(s3)

# Add Grades
s1.add_grade(92); s1.add_grade(88); s1.add_grade(95)
s2.add_grade(74); s2.add_grade(81); s2.add_grade(78)
s3.add_grade(87); s3.add_grade(89); s3.add_grade(84)

# Execute Assignments
print("--- CAPSTONE SYSTEM LIVE ACTION EXECUTION ---")
sms.enroll_student("25576365", "IS216", "Semester 1, 2026")
sms.enroll_student("11024500", "IS214", "Semester 1, 2026")

# Test Error Handling Edge Case
sms.enroll_student("9999999", "IS216", "Semester 1, 2026")

# Process Functional Pipelines
honors = sms.get_honor_roll_students()
print(f"Honors Output List: {honors}")

# Process Algorithmic Sorting 
print("\nStudents Before Sorting by ID:")
for s in sms.students:
    print(f" -> ID: {s.id} | Name: {s.name}")

sms.sort_students_by_id()

print("\nStudents After Algorithmic Bubble Sort Execution:")
for s in sms.students:
    print(f" -> ID: {s.id} | Name: {s.name}")