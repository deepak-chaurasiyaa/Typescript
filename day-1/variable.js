// Example: var Variables Scope
var num1 = 1;
function varDeclaration() {
    var num2 = 2;
    if (num2 > num1) {
        var num3 = 3;
        num3++;
    }
    while (num1 < num2) {
        var num4 = 4;
        num1++;
    }
    console.log(num1); //2
    console.log(num2); //2
    console.log(num3); //4
    console.log(num4); //4
}
varDeclaration();
// Example: let Variables Scope
// let num1: number = 1;
function letDeclaration() {
    var num2 = 2;
    if (num2 > num1) {
        var num3 = 3;
        num3++;
    }
    while (num1 < num2) {
        var num4 = 4;
        num1++;
    }
    console.log(num1); //OK
    console.log(num2); //OK
    // console.log(num3); //Compiler Error: Cannot find name 'num3'
    // console.log(num4); //Compiler Error: Cannot find name 'num4'
}
letDeclaration();
// Advantages of using let over var
// 1) Block-scoped let variables cannot be read or written to before they are declared.
// Example: let vs varCopied!
console.log(num1); // Compiler Error: error TS2448: Block-scoped variable 'num' used before its declaration
var num11 = 10;
console.log(num2); // OK, Output: undefined
var num2 = 10;
// var num:number = 1; // OK
// var Num:number = 2;// OK
// var NUM:number = 3;// OK
// var NuM:number = 4;// OK
// let num:number = 5;// Compiler Error: Cannot redeclared block-scoped variable 'num'
// let Num:number = 6;// Compiler Error: Cannot redeclared block-scoped variable 'Num'
// let NUM:number = 7;// Compiler Error: Cannot redeclared block-scoped variable 'NUM'
// let NuM:number = 8;// Compiler Error: Cannot redeclared block-scoped variable 'NuM'
var num = 1;
function demo() {
    var num = 2;
    if (true) {
        var num_1 = 3;
        console.log(num_1); //Output: 3
    }
    console.log(num); //Output: 2
}
console.log(num); //Output: 1
demo();

