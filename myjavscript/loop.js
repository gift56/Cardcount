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