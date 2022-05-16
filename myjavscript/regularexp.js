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

// using the ? in Regex
let text = "<h1>Winter is coming</h1>";
let myRegexmm = /<.*?>/;
let resultmm = text.match(myRegex);

// using + an any letters to match things
let reCriminals = /C+/g;

// Using of cater ^ operator to search for patterns from the begining
let myText = "hello y name is jacob";
let regex = /^hello/;
let resultT = myText.match(regex);

// Using of $ sign operator to search for the ending of the string
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let resultc = lastRegex.test(caboose);

// Using of shortcourt
let quoteSampleS = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let resultS = quoteSample.match(alphabetRegexV2).length;

// opposite of /W
let quoteSampleS2 = "The five boxing wizards jump quickly.";
let alphabetRegexV2s = /\w/g; // Change this line
let resultS2 = quoteSampleS2.match(alphabetRegexV2).length;

// Using of digit
let quoteSampled = "2001 watch";
let alphabetRegexV2d = /\d/g; // Change this line
let resultds = quoteSampled.match(alphabetRegexV2).length;