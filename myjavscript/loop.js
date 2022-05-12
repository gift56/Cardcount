const myArray = [];
let i = 0;

while (i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray);

// for loop
const myArray2 = [];

for (let i = 1; i < 5; i++) {
    myArray2.push(i);
}
console.log(myArray2);

// incrementing odd number
const myArray3 = [];

for (let i = 1; i < 10; i += 2) {
    myArray3.push(i);
}
console.log(myArray3);

// sum and array iteration with for loop

const myArray4 = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArray4.length; i++) {
    total += myArray4[i];
}
// Running nested array with for loop
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    // Only change code above this line
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// Learning do while loop
const myArray5 = [];
let i5 = 10;

do {
    myArray5.push(i5);
    i++;
} while (i5 < 5);

// Working on recusion and not using loop
function sum(arr, n) {
    if (n <= 0) {
        return 0;
    }
    else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}
// Returning object with for loop
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {

    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property"
        }
    }
    return "No such contact";
}

lookUpProfile("Akira", "likes");

// count down with out using loop
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const arr = countdown(n - 1);
        arr.unshift(n);
        return arr;
    }
}