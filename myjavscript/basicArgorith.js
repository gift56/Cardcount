// Using javascript to calculate for celsius and fahrenheit
function convertToF(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
}

convertToF(30);

// reavaesing a string in javascript
function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

// Or use these method
function reverseString(str) {
    return str
        .split("")
        .reverse()
        .join("");
}

// Factorizing number
function factorialize(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorialize(num - 1);
}

factorialize(5);

// Using javascript for loop to find longest word in the string
function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }

    return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// finding longest number in an array
function largestOfFour(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
        let largestNumber = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > largestNumber) {
                largestNumber = arr[i][j];
            }
        }
        results[i] = largestNumber;
    }

    return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Checking for the ending of the string
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

// reapeting a string
function repeatStringNumTimes(str, num) {
    let accumulatedStr = "";

    for (let i = 0; i < num; i++) {
        accumulatedStr += str;
    }

    return accumulatedStr;
}

repeatStringNumTimes("abc", 3);

// OR Use if else statement
function repeatStringNumTimes(str, num) {
    if (num < 1) {
        return "";
    } else {
        return str + repeatStringNumTimes(str, num - 1);
    }
}