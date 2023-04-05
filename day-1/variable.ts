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

// var num:number = 1; // OK
// var Num:number = 2;// OK
// var NUM:number = 3;// OK
// var NuM:number = 4;// OK

// let num:number = 5;// Compiler Error: Cannot redeclared block-scoped variable 'num'
// let Num:number = 6;// Compiler Error: Cannot redeclared block-scoped variable 'Num'
// let NUM:number = 7;// Compiler Error: Cannot redeclared block-scoped variable 'NUM'
// let NuM:number = 8;// Compiler Error: Cannot redeclared block-scoped variable 'NuM'


let num:number = 1; 

function demo() {
    let num:number = 2;

    if(true) { 
        let num:number = 3;
        console.log(num); //Output: 3
    }

    console.log(num);//Output: 2
}
console.log(num); //Output: 1
demo();


// function letDemo(a: number ) { 
//   let a:number = 10 ; //Compiler Error: TS2300: Duplicate identifier 'a'
//   let b:number = 20 ; 

//   return a + b ;
// }

// const num:number = 100;
// num = 200; //Compiler Error: Cannot assign to 'num' because it is a constant or read-only property

// const playerCodes = { 
//   player1 : 9, 
//   player2 : 10, 
//   player3 : 13, 
//   player4 : 20
// }; 
// playerCodes.player2 = 11; // OK

// playerCodes = {     //Compiler Error: Cannot assign to playerCodes because it is a constant or read-only
//   player1 : 50,   // Modified value
//   player2 : 10, 
//   player3 : 13, 
//   player4 : 20
// }; 