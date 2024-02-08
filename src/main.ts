// Remove anotation because ts is know what type of data you want

let NIC = 42101_1190_2323_9;
let course = "TypeScript";
let is_public = true;
let level; // ab nahi pata kai kon sa type hai so you can later change
// level = 1;
// level = "a";

//* Best practice ye hai kai ap avoiding use any type
//* and best is 

// function render(document){ // "noImplicitAny": false,  agr tsconfig mai ye cheez false ker di to error nahi aya ga, but it is not a good practice
//     console.log(document);
    
// }