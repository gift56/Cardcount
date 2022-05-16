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

// finding multiple items in a string with mathc() in Regex
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
let resultg = twinkleStar.match(starRegex);

//using the wildcard character
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // 
let resultun = unRegex.test(exampleStr);

// match multiple string in searching for vowel
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let resultv = quoteSample.match(vowelRegex); 

// matching all letters
let quoteSamplems = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let resultMs = quoteSamplems.match(alphabetRegex);

// using + sign in Regex
let difficultSpelling = "Mississippi";
let myRegexd = /s+/g;
let resultd = difficultSpelling.match(myRegex);