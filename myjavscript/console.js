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

if (x == y) {
    result = "Equal!";
} else {
    result = "Not equal!";
}

console.log(result);

// cault math error
function raiseToPower(b, e) {
    return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);

// correcting nested loop
function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    for (let i = 0; i < m; i++) {
        // Adds the m-th row into newArray
        let row = [];
        for (let j = 0; j < n; j++) {
            // Pushes n zeroes into the current row to create the columns
            row.push(0);
        }
        // Pushes the current row, which now has n zeroes in it, to the array
        newArray.push(row);
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

// Using of unshift() and push()
function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    // Only change code above this line
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

// removing and replacing with splice()
function htmlColorNames(arr) {
    let indexRemove = 0;
    let numberRemove = 2;

    arr.splice(indexRemove, numberRemove, 'DarkSalmon', 'BlanchedAlmond')

    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

// using slice method
function forecast(arr) {
    return arr.slice(2, 4);;
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// using of spread operator (...any)
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));

// Using indexof()
function quickCheck(arr, elem) {
    // Only change code below this line
    if (arr.indexOf(elem) >= 0) {
        return true;
    }
    return false;
    // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// Using for loop to loop through
function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i]);
        }
    }
    // Only change code above this line
    return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));