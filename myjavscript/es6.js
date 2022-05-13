// using let to declare varible globally
function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
// Muting array declared with const
const s = [5, 7, 2];

function editInPlace() {
    s[0] = 2
    s[1] = 5
    s[2] = 7
}
editInPlace();