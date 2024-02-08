// const small = 1;
// const medium = 2;
// const large = 3;

// pascalCase
// By Default Compiler define Small = 0 , Medium = 1 , Large = 2 ...
// Ap khud se bhi value de skhty ho any type
const enum Size {
  Small = 2,
  Medium = 5,
  Large,
}

let mySize: Size = Size.Large;
console.log(mySize);