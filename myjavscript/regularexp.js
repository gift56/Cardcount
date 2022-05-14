// using of test() in regex
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

// using the | sign to mmatch multipule objects
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let results = petRegex.test(petString);

// using the i indicaor
let myStrings = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let resulti = fccRegex.test(myString);

// using match()
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let resultM = extractStr.match(codingRegex);