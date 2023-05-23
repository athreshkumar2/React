// Normal Function
function printMyName(name) {
    console.log(name);
}


// Arrow Function
// Different ways to decclare arrow functions
const myName = (letters,age) => {
    console.log(letters,age);
} 

const multiply = (number) => {
    return number*2;
}

const addition = digit => digit + 10;



// Calling Functions
printMyName('Athresh');
myName('Kumar',21);
console.log(multiply(4));
console.log(addition(10));