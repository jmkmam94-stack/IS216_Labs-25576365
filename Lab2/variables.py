# ========================================================
# 2.3.3 LAB 2 - TASK 1: VARIABLE DECLARATION & PRINTING
# ========================================================
name = "Jessline Ken"
age = 25
price = 19.99
active = True

print("--- TASK 1: PYTHON VARIABLE DECLARATIONS ---")
print(f"String Name: {name} (Type: {type(name).__name__})")
print(f"Integer Age: {age} (Type: {type(age).__name__})")
print(f"Float Price: {price} (Type: {type(price).__name__})")
print(f"Boolean Active: {active} (Type: {type(active).__name__})")
print("-" * 45)

# ========================================================
# 2.3.3 LAB 2 - TASK 2: VALUE TYPE BEHAVIOR (STACK)
# ========================================================
print("\n--- TASK 2: VALUE TYPE BEHAVIOR ---")
x = 5
y = x  # y gets a direct independent COPY of the value on the stack
y = 10 
print(f"Value Type Results -> x (original): {x}, y (modified): {y}")
print("Explanation: Changing 'y' did not affect 'x' because primitives copy independent values on the Stack.")

# ========================================================
# 2.3.3 LAB 2 - TASK 3: TESTING CONSTANTS IN PYTHON
# ========================================================
print("\n--- TASK 3: CONSTANT CONVENTION ---")
PI = 3.14159
print(f"Initial Constant PI: {PI}")

# Python does not support rigid final keyword checks; it uses developer notation conventions
PI = 3.14 
print(f"Modified Constant PI: {PI}")
print("Note: Python allows updates to uppercase variables, but doing so violates professional code rules.")