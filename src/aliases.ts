// let employe: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void; // how many parameters and what type of parameters
// } = {
//   id: 1,
//   name: "",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

//* Ye saab bhoth maasi code hai, so in future other advance types will use proper and clear clean objects

// So Wee will use DRY: in a programming rule

// (DRY): "Don't Repeat Yourself"

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employe: Employee = {
  id: 1,
  name: "Employee",
  retire: (date: Date) => {
    console.log(date);
  },
};
