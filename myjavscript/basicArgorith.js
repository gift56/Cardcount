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