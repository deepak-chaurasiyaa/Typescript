// Example: var Variables Scope
var num1: number = 1;

function varDeclaration() {
  var num2: number = 2;

  if (num2 > num1) {
    var num3: number = 3;
    num3++;
  }

  while (num1 < num2) {
    var num4: number = 4;
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
  let num2: number = 2;

  if (num2 > num1) {
    let num3: number = 3;
    num3++;
  }

  while (num1 < num2) {
    let num4: number = 4;
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
let num11: number = 10;

console.log(num2); // OK, Output: undefined
var num2: number = 10;
