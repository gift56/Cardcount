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
