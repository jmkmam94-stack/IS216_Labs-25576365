# ========================================================
# 3.2.3 LAB 3 - TASK 1 & 4: LIST MANIPULATION & TYPE CHECK
# ========================================================
print("--- TASK 1 & 4: PYTHON LISTS & TYPE CHECKS ---")

# 1. List of 5 numbers
numbers = [45, 12, 89, 7, 34]
print(f"Numbers List: {numbers}")

# Finding Max and Min
max_num = max(numbers)
min_num = min(numbers)
print(f"Maximum Number: {max_num}")
print(f"Minimum Number: {min_num}")

# 4. Checking data types
print(f"Type of 'numbers': {type(numbers).__name__}")
print(f"Type of 'max_num': {type(max_num).__name__}")
print("-" * 50)

# ========================================================
# 3.2.3 LAB 3 - TASK 2 & 3: DICTIONARIES & NESTED LISTS
# ========================================================
print("\n--- TASK 2 & 3: PYTHON DICTIONARIES & BOOK LIST ---")

# 2. Dictionary representing a single book
single_book = {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "year": 1960
}
print(f"Single Book Dictionary: {single_book}")
print(f"Type of 'single_book': {type(single_book).__name__}")

# 3. List of 3 book objects (dictionaries)
library = [
    {"title": "The Hobbit", "author": "J.R.R. Tolkien", "year": 1937},
    {"title": "1984", "author": "George Orwell", "year": 1949},
    {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "year": 1925}
]

print("\nAccessing Details from Book List:")
for index, book in enumerate(library, start=1):
    print(f"Book {index}: \"{book['title']}\" written by {book['author']} ({book['year']})")