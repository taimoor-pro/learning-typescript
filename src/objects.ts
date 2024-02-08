// let employee = { id: 1 };
// employee.name = 'John'; // js mai valid hai but ts mai //! Error

// let employee: { //! Name is missing error
//   id: number;
//   name: string;
// } = { id: 1}; //* yha name missing hai so we use optional ya ap name define ker doo
// employee.name = "John";

let employee: {
  id: number;
  name?: string;
} = { id: 1 };

employee.name = "John";

employee.id = 0; // ager ap chaty hai ye modified na ho so u wil use readOnly
// ReadOnly

// let employees: {
//   readonly id: number;
//   name: string;

// } = { id: 1, name: "" };

// // employees.id = 0; //! ERROR

let employees: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void; // how many parameters and what type of parameters
} = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};

// employees.id = 0; //! ERROR

//* Ye saab bhoth maasi code hai, so in future other advance types will use proper and clear clean objects

// So Wee will use DRY: in a programming rule

// (DRY): "Don't Repeat Yourself"
