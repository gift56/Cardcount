// suming all the numbers in an array
function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
        sumBetween += i;
    }
    return sumBetween;
}

sumAll([1, 4]);
// substrating everything
function diffArray(arr1, arr2) {
    return arr1
        .concat(arr2)
        .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// seek and destroy
function destroyer(arr) {
    let valsToRemove = Array.from(arguments).slice(1);

    return arr.filter(function (val) {
        return !valsToRemove.includes(val);
    });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//  WHo art Thou in javascript
function whatIsInAName(collection, source) {

    // Only change code below this line
    const souceKeys = Object.keys(source);

    // filter the collection
    return collection.filter(obj => {
        for (let i = 0; i < souceKeys.length; i++) {
            if (!obj.hasOwnProperty(souceKeys[i]) ||
                obj[souceKeys[i]] !== source[souceKeys[i]]) {
                return false;
            }
        }
        return true;
    });

    // Only change code above this line
}

whatIsInAName(
    [
        { first: "Romeo", last: "Montague" },
        { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
);

// Spinal tab using regex

function spinalCase(str) {
    // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;

    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

    // Replace space and underscore with -
    return str.replace(regex, "-").toLowerCase();
}

spinalCase('This Is Spinal Tap');

// Pig Latin use to checke if vowel or consonant
function translatePigLatin(str) {
    // Create variables to be used
    var pigLatin = "";
    var regex = /[aeiou]/gi;

    // Check if the first character is a vowel
    if (str[0].match(regex)) {
        pigLatin = str + "way";
    }
    else if (str.match(regex) === null) {
        // Check if the string contains only consonants
        pigLatin = str + "ay";
    }
    else {
        // Find how many consonants before the first vowel.
        let vowelIndice = str.indexOf(str.match(regex)[0]);

        // Take the string from the first vowel to the last char
        // then add the consonants that were previously omitted and add the ending.
        pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
    }

    return pigLatin;
}

translatePigLatin("consonant");

// Searching and replacing string to upercase or lowercase

function myReplace(str, before, after) {
    // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
    if (/^[A-Z]/.test(before)) {
        after = after[0].toUpperCase() + after.substring(1)
    }
    else {
        after = after[0].toLowerCase() + after.substring(1)
    }

    // return string with argument "before" replaced by argument "after" (with correct case)
    return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// Dna pairing with for loopor map
function pairElement(str) {
    // Return each strand as an array of two elements, the original and the pair.
    var paired = [];

    // Function to check with strand to pair.
    var search = function (char) {
        switch (char) {
            case "A":
                paired.push(["A", "T"]);
                break;
            case "T":
                paired.push(["T", "A"]);
                break;
            case "C":
                paired.push(["C", "G"]);
                break;
            case "G":
                paired.push(["G", "C"]);
                break;
        }
    };

    // Loops through the input and pair.
    for (var i = 0; i < str.length; i++) {
        search(str[i]);
    }

    return paired;
}

pairElement("GCG");

// Or use map
function pairElement(str) {
    //create object for pair lookup
    var pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };
    //split string into array of characters
    var arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(x => [x, pairs[x]]);
}

//test here
pairElement("GCG");

// Searching for missing letter using for each()
function fearNotLetter(str) {
    let currCharCode = str.charCodeAt(0);
    let missing = undefined;

    str.split("").forEach(letter => {
        if (letter.charCodeAt(0) === currCharCode) {
            currCharCode++;
        } else {
            missing = String.fromCharCode(currCharCode);
        }
    });

    return missing;
}

fearNotLetter("abce");

// Sorted union
function uniteUnique(arr) {
    const args = [...arguments];
    const result = [];
    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < args[i].length; j++) {
            if (!result.includes(args[i][j])) {
                result.push(args[i][j]);
            }
        }
    }
    return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// using some tags to achieve html tag
function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    // Using a regex, replace characters with it's corresponding html entity
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

convertHTML("Dolce & Gabbana");

// Sum All Odd Fibonacci Numbers
function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }
        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}

sumFibs(4);

// Suming all prime number that starts with 2
function sumPrimes(num) {
    let primes = [];
    for (let i = 2; i <= num; i++) {
        if (primes.every((prime) => i % prime !== 0))
            primes.push(i);
    }
    return primes.reduce((sum, prime) => sum + prime, 0);
}

sumPrimes(10);

// Smallest Common Multiple
function smallestCommons(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const range = Array(max - min + 1)
        .fill(0)
        .map((_, i) => i + min);
    // Largest possible value for SCM
    const upperBound = range.reduce((prod, curr) => prod * curr);
    // Test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max) {
        // Check if every value in range divides 'multiple'
        const divisible = range.every((value) => multiple % value === 0);
        if (divisible) {
            return multiple;
        }
    }
}

smallestCommons([1, 5]);

// Dropping it 
function dropElements(arr, func) {
    let originalLen = arr.length;
    for (let i = 0; i < originalLen; i++) {
        if (func(arr[0])) {
            break;
        } else {
            arr.shift();
        }
    }
    return arr;
}

dropElements([1, 2, 3], function (n) { return n < 3; });

// Steamroller
function steamrollArray(val, flatArr = []) {
    val.forEach(item => {
        if (Array.isArray(item)) steamrollArray(item, flatArr);
        else flatArr.push(item);
    });
    return flatArr;
}

steamrollArray([1, [2], [3, [[4]]]]);

// Using Binary agent
function binaryAgent(str) {
    let biString = str.split(" ");
    let uniString = [];

    /*using the radix (or base) parameter in parseInt, we can convert the binary
        number to a decimal number while simultaneously converting to a char*/

    for (var i = 0; i < biString.length; i++) {
        uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
    }

    // we then simply join the string
    return uniString.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// Making everything true
function truthCheck(collection, pre) {
    let counter = 0;
    // Check for each object
    for (let c in collection) {
        // If it is has property and value is truthy
        if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
            counter++;
        }
    }
    // Outside the loop, check to see if we got true for all of them and return true or false
    return counter == collection.length;
}

truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");

// arguement sections
function addTogether() {
    const [first, second] = arguments;
    if (typeof (first) !== "number")
        return undefined;
    if (second === undefined)
        return (second) => addTogether(first, second);
    if (typeof (second) !== "number")
        return undefined;
    return first + second;
}

addTogether(2, 3);