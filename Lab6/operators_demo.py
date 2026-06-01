# ========================================================
# 6.4.1 LAB 6 - TASK 1: SIMPLE CALCULATOR
# ========================================================
print("--- TASK 1: PYTHON CALCULATOR ---")
def calculate(num1, num2, operator):
    if operator == '+': return num1 + num2
    elif operator == '-': return num1 - num2
    elif operator == '*': return num1 * num2
    elif operator == '/': return num1 / num2 if num2 != 0 else "Error: Cannot divide by zero"
    else: return "Invalid operator"

print(f"15 + 5 = {calculate(15, 5, '+')}")
print(f"20 / 4 = {calculate(20, 4, '/')}")
print("-" * 50)

# ========================================================
# 6.4.1 LAB 6 - TASK 2: EVEN OR ODD VIA MODULUS
# ========================================================
print("\n--- TASK 2: PYTHON EVEN OR ODD ---")
test_num = 44
if test_num % 2 == 0:
    print(f"The number {test_num} is EVEN.")
else:
    print(f"The number {test_num} is ODD.")
print("-" * 50)

# ========================================================
# 6.4.1 LAB 6 - TASK 3: PASSWORD VALIDATION
# ========================================================
print("\n--- TASK 3: PYTHON PASSWORD VALIDATION ---")
def validate_password(password):
    has_min_length = len(password) >= 8
    has_special_char = "!" in password or "@" in password or "#" in password
    
    # Python uses native text 'and' for logical conjunctions
    if has_min_length and has_special_char:
        return "Password Status: VALID AND SECURE"
    else:
        return "Password Status: INVALID (Must be 8+ chars and contain !, @, or #)"

print(f"Testing 'Pass123': {validate_password('Pass123')}")
print(f"Testing 'Secret@2026': {validate_password('Secret@2026')}")
print("-" * 50)

# ========================================================
# 6.4.1 LAB 6 - TASK 4: STRING MANIPULATION
# ========================================================
print("\n--- TASK 4: PYTHON STRING MANIPULATION ---")
raw_text = "   PNG University of Technology   "

trimmed = raw_text.strip()
upper = trimmed.upper()
lower = trimmed.lower()
replaced = trimmed.replace("Technology", "Tech")

print(f"Original: '{raw_text}'")
print(f"Trimmed:  '{trimmed}'")
print(f"Upper:    '{upper}'")
print(f"Lower:    '{lower}'")
print(f"Replace:  '{replaced}'")