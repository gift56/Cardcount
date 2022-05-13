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
// Freezing object using object.freeze()
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);
  
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch (ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();
