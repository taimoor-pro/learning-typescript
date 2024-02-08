// function calculateTax(num: number) {
//     return 'a';
// }

// function calculateTax(num: number): number {
//   return 1;
// }

// function calculateTax(num: number, taxYear: number): number {
//   //   let x; // "noUnusedLocals": true,
//   // undefined
//   if (taxYear < 50_000) {
//     return num * 1.2;
//   }
//   //   Now issue resolve, I will enable "noImplicitReturns": true,
//   return num * 1.4;
// }

// calculateTax(20_000, 2024);

// // Optional ?
// function calculateTax(num: number, taxYear?: number): number {
//   // if (taxYear < 50_000) {
//   //   return num * 1.2;
//   // } //! Error

//   //   || 2000 optional value ager textYear hai to textYear otherWise 2000 default
//   if ((taxYear || 2000) < 50_000) {
//     return num * 1.2;
//   }

//   return num * 1.4;
// }

// calculateTax(20_000);

// Optional ?
function calculateTax(num: number, taxYear = 2000): number {
  if (taxYear < 50_000) {
    return num * 1.2;
  }

  return num * 1.4;
}

calculateTax(20_000);
