// using of test() in regex
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
// using the | sign to mmatch multipule objects
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let results = petRegex.test(petString);