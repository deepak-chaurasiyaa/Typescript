// TypeScript Data Type - Number
// Just like JavaScript, TypeScript supports number data type. All numbers are stored as floating point numbers. These numbers can be Decimal (base 10), Hexadecimal (base 16) or Octal (base 8)
var first = 123; // number
var second = 0x37cf; // hexadecimal
var third = 255; // octal
var fourth = 25; // binary
console.log(first); // 123
console.log(second); // 14287
console.log(third); // 255
console.log(fourth); // 57
// toExponential()
// The toExponential method returns the exponential notation of a number in string format, based on the specified fraction digits.
// Example: toExponential()
var myNumber = 123456;
console.log(myNumber.toExponential()); // returns 1.23456e+5
console.log(myNumber.toExponential(1)); //returns 1.2e+5
console.log(myNumber.toExponential(2)); //returns 1.23e+5
console.log(myNumber.toExponential(3)); //returns 1.235e+5
// toFixed()
// The toFixed method returns the fixed-point notation of a number in string format.
// This function has one optional argument, an integer specifying the number of digits after the decimal point. It returns a string representation of the formatted number.
var myNumber2 = 10.8788;
console.log(myNumber2.toFixed()); // returns 11
console.log(myNumber2.toFixed(1)); //returns 10.9
console.log(myNumber2.toFixed(2)); //returns 10.88
console.log(myNumber2.toFixed(3)); //returns 10.879
console.log(myNumber2.toFixed(4)); //returns 10.8788
// toLocaleString()
// The toLocaleString method converts the number into a local specific representation of the number
var myNumber3 = 10667.987;
console.log(myNumber3.toLocaleString()); // returns 10,667.987 - US English
console.log(myNumber3.toLocaleString('de-DE')); // returns 10.667,987 - German
console.log(myNumber3.toLocaleString('ar-EG')); // returns 10667.987 in Arebic
// toPrecision()
// The toPrecision method returns the string representation in exponential or fixed-point to the specified precision.
var myNumber4 = 10.5679;
console.log(myNumber4.toPrecision(1)); // returns 1e+1
console.log(myNumber4.toPrecision(2)); // returns 11
console.log(myNumber4.toPrecision(3)); // returns 10.6
console.log(myNumber4.toPrecision(4)); // returns 10.57
// toString()
// The toString method returns a string representation of the number in the specified base.
var myNumber5 = 123;
console.log(myNumber5.toString()); // returns '123'
console.log(myNumber5.toString(2)); // returns '1111011'
console.log(myNumber5.toString(4)); // returns '1323'
console.log(myNumber5.toString(8)); // returns '173'
console.log(myNumber5.toString(16)); // returns '7b'
console.log(myNumber5.toString(36)); // returns '3f'
// valueOf()
// The valueOf method returns the primitive value of the number.
var num6 = new Number(123);
console.log(num6); //Output: a number object with value 123
console.log(num6.valueOf()); //Output: 123
console.log(typeof num6); //Output: object
var num7 = num6.valueOf();
console.log(num7); //Output: 123
console.log(typeof num7); //Output: number
