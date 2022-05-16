// Searching for type of
let seven = 7;
let three = "3";
console.log(typeof (seven));
console.log(typeof (three));

// fixing unclosed bracket array and function
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);

// Using of console to debug for string error
const textError = "hello my name is gift and i build a website and you can view it on the link below a href='#Home'";
console.log(textError);

// Debugging error in conditional statement
let x = 7;
let y = 9;
let result = "to come";

if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);