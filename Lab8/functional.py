from functools import reduce

# ========================================================
# 8.2.3 LAB 8 - TASK 1: SIMULATED FRAMEWORK VIEW (DJANGO)
# ========================================================
print("--- TASK 1: PYTHON FRAMEWORK ROUTE ---")
# Simulating a basic functional view handling a web response routing map
def hello_django_view(request_path):
    return f"HTTP/1.1 200 OK\nContent-Type: text/plain\n\nHello, Django! Routed from '{request_path}'"

print(hello_django_view("/home/dashboard"))
print("-" * 60)

# ========================================================
# 8.2.3 LAB 8 - TASK 2: PURE FUNCTIONS FOR MATHEMATICS
# ========================================================
print("\n--- TASK 2: PYTHON PURE MATHEMATICAL FUNCTIONS ---")
def pure_square(num):
    return num * num

def pure_average(a, b):
    return (a + b) / 2

print(f"Square of 8: {pure_square(8)}")
print(f"Average of 14 and 26: {pure_average(14, 26)}")
print("-" * 60)

# ========================================================
# 8.2.3 LAB 8 - TASKS 3 & 5: MAP/FILTER/REDUCE & REFACTORING
# ========================================================
print("\n--- TASKS 3 & 5: PYTHON REFACTORING IMPERATIVE -> FUNCTIONAL ---")

data_set = [12, 5, 8, 130, 44, 15, 3]
print(f"Raw Imperative Array: {data_set}")

# Task 5 Refactoring: Swapping loops for lambda inline functional mappings
filtered_data = filter(lambda x: x > 10, data_set)         # 1. Filter elements > 10
mapped_data = map(lambda x: x * 2, filtered_data)         # 2. Double those matching elements
processed_sum = reduce(lambda acc, val: acc + val, mapped_data, 0) # 3. Accumulate everything

print(f"Chained Functional Output (Sum of doubled values > 10): {processed_sum}")
print("-" * 60)

# ========================================================
# 8.2.3 LAB 8 - TASK 4: HIGHER-ORDER FUNCTIONS WITH CALLBACKS
# ========================================================
print("\n--- TASK 4: PYTHON HIGHER-ORDER FUNCTION EXECUTION ---")

# Higher-order function receiving functional logic as a parameter block
def process_transaction(amount, callback_func):
    print(f"Processing core transaction ledger amount: K{amount}")
    callback_func(amount)

# Callbacks implemented via lambdas or short tracking actions
process_transaction(450, lambda amount: print(f"Callback Action: Calculated GST tax rate value -> K{amount * 0.10}"))
process_transaction(1200, lambda amount: print(f"Callback Action: Security logged deposit sequence for balance -> K{amount}"))
print("-" * 60)