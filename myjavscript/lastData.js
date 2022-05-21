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

// Validating phone numbers
let regex = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

function telephoneCheck(str) {
    return regex.test(str);
}

telephoneCheck("555-555-5555");

// card matching
const checkCashRegister = (price, cash, cid) => {
    const UNIT_AMOUNT = {
        "PENNY": .01,
        "NICKEL": .05,
        "DIME": .10,
        "QUARTER": .25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00
    }
    let totalCID = 0;
    for (let element of cid) {
        totalCID += element[1];
    } totalCID = totalCID.toFixed(2);
    let changeToGive = cash - price;
    const changeArray = [];
    if (changeToGive > totalCID) {
        return { status: "INSUFFICIENT_FUNDS", change: changeArray };
    }
    else if (changeToGive.toFixed(2) === totalCID) {
        return { status: "CLOSED", change: cid };
    }
    else {
        cid = cid.reverse();
        for (let elem of cid) {
            let temp = [elem[0], 0];
            while (changeToGive >= UNIT_AMOUNT[elem[0]] && elem[1] > 0) {
                temp[1] += UNIT_AMOUNT[elem[0]]; elem[1] -= UNIT_AMOUNT[elem[0]]; changeToGive -= UNIT_AMOUNT[elem[0]]; changeToGive = changeToGive.toFixed(2);
            }
            if (temp[1] > 0) {
                changeArray.push(temp);
            }
        }
    }
    if (changeToGive > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change: changeArray };
}