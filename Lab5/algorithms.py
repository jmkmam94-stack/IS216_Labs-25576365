# ========================================================
# 5.2.4 LAB 5 - TASK 1: RECURSIVE FACTORIAL
# ========================================================
def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)

# ========================================================
# 5.2.4 LAB 5 - TASK 2: REVERSE A STRING
# ========================================================
def reverse_string(text):
    return text[::-1]

# ========================================================
# 5.2.4 LAB 5 - TASK 3: PALINDROME CHECKER
# ========================================================
def is_palindrome(word):
    clean_word = "".join(char.lower() for char in word if char.isalnum())
    return clean_word == reverse_string(clean_word)

# ========================================================
# 5.2.4 LAB 5 - TASK 4: ALGORITHMS (SEARCH & SORT)
# ========================================================
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

def bubble_sort(arr):
    sorted_arr = list(arr) # Create a structural copy
    n = len(sorted_arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if sorted_arr[j] > sorted_arr[j + 1]:
                sorted_arr[j], sorted_arr[j + 1] = sorted_arr[j + 1], sorted_arr[j]
    return sorted_arr

def binary_search(sorted_arr, target):
    left = 0
    right = len(sorted_arr) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if sorted_arr[mid] == target:
            return mid
        elif sorted_arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# ========================================================
# 5.2.4 LAB 5 - TASK 5: FIBONACCI SEQUENCE
# ========================================================
def generate_fibonacci(terms):
    if terms <= 0:
        return []
    if terms == 1:
        return [0]
    sequence = [0, 1]
    while len(sequence) < terms:
        sequence.append(sequence[-1] + sequence[-2])
    return sequence

# ========================================================
# EXECUTION & VERIFICATION TEST LOGS
# ========================================================
print("--- PYTHON LAB 5: FUNCTIONS & ALGORITHMS ---")
print(f"Task 1 (Factorial of 5): {factorial(5)}")
print(f"Task 2 (Reverse 'PNGUoT'): {reverse_string('PNGUoT')}")
print(f"Task 3 (Is 'racecar' a palindrome?): {is_palindrome('racecar')}")
print(f"Task 3 (Is 'hello' a palindrome?): {is_palindrome('hello')}")

test_data = [64, 34, 25, 12, 22, 11, 90]
print(f"\nTask 4 - Original Array: {test_data}")
sorted_data = bubble_sort(test_data)
print(f"Task 4 - Bubble Sorted Array: {sorted_data}")
print(f"Task 4 - Linear Search (Find 22 in Original): index {linear_search(test_data, 22)}")
print(f"Task 4 - Binary Search (Find 22 in Sorted): index {binary_search(sorted_data, 22)}")

print(f"\nTask 5 (Fibonacci - 8 terms): {generate_fibonacci(8)}")
print("-" * 55)