// First aspect
function palindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]+/g, "");
    return str === str.split("").reverse().join("")
}

palindrome("eye");
palindrome("Racecar");

// second question converting number to roman figure
function convertToRoman(num) {
    const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const numeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const arr = [];
    let renum = num;
    while (arr.reduce((before, after) => before + after, 0) < num) {
        const EL = numbers.findIndex(element => renum - element >= 0);
        arr.push(numbers[EL]);
        renum -= numbers[EL];
    }
    return arr.map(element => numeral[numbers.indexOf(element)]).join('');
}

convertToRoman(36);

// solving ceaser ciper question
function rot13(str) {
    const Acode = 'A'.charCodeAt();
    const Ncode = 'N'.charCodeAt();
    const Zcode = 'Z'.charCodeAt();
    return [...str].map(
        function (e) {
            const code = e.charCodeAt();
            if (Acode <= code && code <= Zcode) {
                if (code < Ncode) {
                    return String.fromCharCode(code + 13);
                } else {
                    return String.fromCharCode(code - 13);
                }
            } else {
                return e;
            }
        }
    ).join("");
}

rot13("SERR PBQR PNZC");