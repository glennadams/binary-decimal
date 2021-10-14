# Decimal Binary Conversions

### Converting Decimal number to Binary
This product explores converting decimal numbers to a binary representation, and then back.  It was inpired by a recent interview question.  

### Technologies used
* Javascript
* Python (TBD)

The **decimalToBinary()** function takes a number (integer or float) and converts that number to its binary form.  The function returns the result in a string.

* input: positive number, either integer or floating point
* return: string representation of the binary equivalent

> // decimalToBinary(14.5)
> 
> // '1110.1'

This function is based on using short form division by two with remainder to derive the binary digits of the integer part, and the short multiplication by two with result to derive the binary digits of the fractional part.

### Converting Binary numbers to Decimal

The **binaryToDecimal()** function takes a binary number and converts that number to its decimal form.  The function returns a number.

* input: binary number represented by a string. Use a period to separate the integer part from the fractional part
* return: number

> // binaryToDecimal('11011.111')
> 
> // 27.875

### Files
* binary2decimal.js
* decimal2binary.js
* readme.md

### References
A deeper discussion on these methods can be found here (https://www.tutorialspoint.com/how-to-convert-decimal-to-binary) and here (https://flexiple.com/developers/decimal-to-binary-conversion/)