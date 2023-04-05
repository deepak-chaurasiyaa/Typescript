// TypeScript is a typed language, where we can specify the type of the variables, function parameters and object properties. We can specify the type using :Type after the name of the variable, parameter or property. There can be a space after the colon. TypeScript includes all the primitive types of JavaScript- number, string and boolean.

// The following example declares variables with different data types:

let age: number = 32; // number variable
// let name: string = 'John'; // string variable
let isUpdated: boolean = true; // Boolean variable

// Example: Type Annotation of Parameters Copy

function display(id: number, name: string) {
  console.log('Id = ' + id + ', Name = ' + name);
}

// Similarly, we can declare an object with inline annotations for each of the properties of the object.

let employee: {
  id: number;
  name: string;
};

employee = {
  id: 100,
  name: 'John',
};
display(employee.id, employee.name);
