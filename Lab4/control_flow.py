import math

# ========================================================
# 4.2.3 LAB 4 - TASK 1: POSITIVE, NEGATIVE, OR ZERO
# ========================================================
print("--- TASK 1: PYTHON NUMBER SIGN CHECK ---")
test_num = 14

if test_num > 0:
    print(f"The number {test_num} is POSITIVE.")
elif test_num < 0:
    print(f"The number {test_num} is NEGATIVE.")
else:
    print("The number is ZERO.")
print("-" * 50)

# ========================================================
# 4.2.3 LAB 4 - TASK 2: MULTIPLICATION TABLE (NESTED LOOPS)
# ========================================================
print("\n--- TASK 2: PYTHON MULTIPLICATION TABLE (1 to 5) ---")
for i in range(1, 6):
    row = ""
    for j in range(1, 6):
        product = i * j
        row += f"{product:4}" # Formats with 4 spaces of structural padding
    print(row)
print("-" * 50)

# ========================================================
# 4.2.3 LAB 4 - TASK 3: PRIME NUMBER CHECKER
# ========================================================
print("\n--- TASK 3: PYTHON PRIME NUMBER CHECKER ---")
check_prime = 20
is_prime = True

if check_prime <= 1:
    is_prime = False
else:
    for i in range(2, int(math.sqrt(check_prime)) + 1):
        if check_prime % i == 0:
            is_prime = False
            break

print(f"Is {check_prime} a prime number? -> {is_prime}")
print("-" * 50)

# ========================================================
# 4.2.3 LAB 4 - TASK 4: INTERACTIVE MENU SYSTEM
# ========================================================
print("\n--- TASK 4: PYTHON MENU SYSTEM ---")
menu_choice = 1

print("Welcome to the System Menu:")
print("1. View Profile\n2. System Settings\n3. Logout")
print(f"Selected Option: {menu_choice}")

# Python uses clean if/elif matches to act seamlessly like a switch block
if menu_choice == 1:
    print("Action: Loading student profile dashboard...")
elif menu_choice == 2:
    print("Action: Navigating to account system settings...")
elif menu_choice == 3:
    print("Action: Logging out securely. Goodbye!")
else:
    print("Action: Invalid option selected. Please pick 1, 2, or 3.")