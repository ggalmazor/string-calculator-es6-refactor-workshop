# Refactoring to functions workshop

## Instructions
 
This is a NodeJS project. You should do the following steps to ensure that you will be able to follow the workshop:

- NodeJS 6 or greater is required
- Download dependencies with `npm install` or `yarn`
- Run the tests with `npm run test` or `yarn test`

If you can follow these steps and you get a report of 7 passing tests, sit back and relax.

If you have a problem, file an issue or contact me on [my Twitter account (@ggalmazor)](http://twitter.com/ggalmazor).

# String Calculator

## Basic behavior

- The string calculator can take a string with zero, one, or two numbers separated with a comma and outputs their sum:
  - The sum of an empty string is zero
  - The sum of a string with just a number is that number
  - Example: "1,2" = 3

## Extended behavior

- It can take three or more numbers.
- The numbers can be separated with the newline character (\\n) too.
- A custom one-char separator can be defined.
  - Example: "//;\n1;2" = 3
- A string with negative numbers will produce an error.
  - The error trace must contain any negative number found.
- Numbers equal or greater than 1000 are ignored
  - Example: "1000,1" = 1
- A custom multi-char separator can be defined.
 	- Example: "//[***]\n1***2***3" = 6
- Many separators can be defined.
 	- Example: "//[*][%]\n1*2%3" = 6