// using let to declare varible globally
function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
// Muting array declared with const
const s = [5, 7, 2];

function editInPlace() {
    s[0] = 2
    s[1] = 5
    s[2] = 7
}
editInPlace();
// Freezing object using object.freeze()
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);

    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
// using arrow function
const magic = () => new Date();
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));
// assigning value defaultly using arrow function
const increment = (number, value = 1) => number + value;
// returning stuff with ...(anything)
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
// Using the spread operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];

console.log(arr2);
// destruting of object
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Only change code below this line

const { today, tomorrow } = HIGH_TEMPERATURES;

  // Only change code above this line