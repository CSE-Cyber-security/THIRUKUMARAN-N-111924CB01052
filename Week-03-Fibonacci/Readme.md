# Week -3: Fibonacci Series Generator

## Problem Statement
Write a Python program to print the Fibonacci series for n terms.

## Description
This program generates and prints the Fibonacci series up to n terms. The Fibonacci series is a sequence where each number is the sum of the two preceding ones, typically starting with 0 and 1.

**Series Formula:** F(n) = F(n-1) + F(n-2)

**Starting Values:**
- F(0) = 0
- F(1) = 1

## Input
```
Enter the number of terms: 7
```

## Output
```
Fibonacci Series:
0 1 1 2 3 5 8
```

## How It Works
1. The program prompts the user to enter the number of terms
2. It validates the input (must be a positive integer)
3. It generates the Fibonacci series using an iterative approach
4. It displays all terms in a single line

## Algorithm
The program uses an iterative approach with two variables:
- Initialize a = 0, b = 1
- For each term, add the current value to the series
- Update: a = b, b = a + b
- Repeat n times

## Time Complexity
- **Time:** O(n) - Loop runs n times
- **Space:** O(n) - To store the series

## Usage
```bash
python fibonacci.py
```

Then enter the desired number of terms when prompted.

## Example Test Cases
| Number of Terms | Output |
|-----------------|--------|
| 1 | 0 |
| 2 | 0 1 |
| 5 | 0 1 1 2 3 |
| 7 | 0 1 1 2 3 5 8 |
| 10 | 0 1 1 2 3 5 8 13 21 34 |

## Features
- Input validation
- Efficient iterative generation
- Clean output formatting
- Error handling for invalid inputs
- Well-documented code with docstrings

## Educational Value
Understanding Fibonacci series helps with:
- Recursion and iteration concepts
- Dynamic programming fundamentals
- Mathematical sequence patterns

## Author
Created as part of Week -3 assignment
