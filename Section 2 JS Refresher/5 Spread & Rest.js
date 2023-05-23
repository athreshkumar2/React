// Spread operator on Arrays
const Number = [1,2,3,4];
const newNumber = [...Number,5,6];

console.log(newNumber);

// Spread Operator on Object(functions)
const Person = {
    name : 'Athresh'
};

const newPerson = {
    ...Person,
    age : 21
}

console.log(newPerson);