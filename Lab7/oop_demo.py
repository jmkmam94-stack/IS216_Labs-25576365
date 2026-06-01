# ========================================================
# 7.2.5 LAB 7 - TASKS 1, 3, & 4: VEHICLES, ANIMAL INHERITANCE & POLYMORPHISM
# ========================================================
print("--- TASKS 1, 3 & 4: PYTHON INHERITANCE & METHOD OVERRIDING ---")

# Task 1: Base Vehicle Class & Car Subclass
class Vehicle:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
        
    def get_details(self):
        return f"Vehicle: {self.brand} {self.model}"

class Car(Vehicle):
    def __init__(self, brand, model, doors):
        super().__init__(brand, model)
        self.doors = doors
        
    # Task 4: Overriding method
    def get_details(self):
        return f"Car Profile: {self.brand} {self.model} ({self.doors}-Door Sedan)"

# Task 3 & 4: Animal base class and multiple polymorphic subclasses
class Animal:
    def __init__(self, name):
        self.name = name
    def make_sound(self):
        return "Some generic animal sound"

class Dog(Animal):
    def make_sound(self): return f"{self.name} says: Woof! Woof!"

class Cat(Animal):
    def make_sound(self): return f"{self.name} says: Meow!"

class Bird(Animal):
    def make_sound(self): return f"{self.name} says: Chirp! Chirp!"

# Verification Logs
my_car = Car("Toyota", "Mark X", 4)
print(my_car.get_details())

print("\nPolymorphic Animal Sounds:")
farm = [Dog("Buddy"), Cat("Whiskers"), Bird("Pip")]
for animal in farm:
    print(animal.make_sound())
print("-" * 60)


# ========================================================
# 7.2.5 LAB 7 - TASK 2: STUDENT CLASS WITH ENCAPSULATION
# ========================================================
print("\n--- TASK 2: PYTHON STUDENT ENCAPSULATION ---")

class Student:
    def __init__(self, name, student_id):
        self.__name = name            # Double underscore makes it private
        self.__student_id = student_id  # Double underscore makes it private

    # Getters
    def get_name(self): return self.__name
    def get_student_id(self): return self.__student_id

    # Setters
    def set_name(self, new_name): self.__name = new_name
    def set_student_id(self, new_id): self.__student_id = new_id

student = Student("Jessline Ken", "25576365")
print(f"Initial Student: {student.get_name()} (ID: {student.get_student_id()})")
student.set_name("Zeng Ri Qing")
print(f"Updated Student Name: {student.get_name()}")
print("-" * 60)


# ========================================================
# 7.2.5 LAB 7 - TASK 5: BANK ACCOUNT ENCAPSULATION
# ========================================================
print("\n--- TASK 5: PYTHON BANK ACCOUNT CONTROL ---")

class BankAccount:
    def __init__(self, owner, initial_balance):
        self.owner = owner
        self.__balance = initial_balance # Encapsulated internal variable

    def get_balance(self):
        return self.__balance

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print(f"Deposited K{amount}. New balance: K{self.__balance}")

    def withdraw(self, amount):
        if amount > 0 and amount <= self.__balance:
            self.__balance -= amount
            print(f"Withdrew K{amount}. Remaining balance: K{self.__balance}")
        else:
            print("Transaction Denied: Insufficient funds or invalid amount.")

account = BankAccount("Jessline Ken", 500)
print(f"Account Owner: {account.owner} | Starting Balance: K{account.get_balance()}")
account.deposit(250)
account.withdraw(100)
account.withdraw(800) # Triggers restriction check
print("-" * 60)