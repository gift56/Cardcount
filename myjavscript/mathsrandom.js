function randomFraction() {
    return Math.random();
}
//Nearest whole number
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}
// generating a whole numbers with in a range
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
// convert string to number
function convertToInteger(str) {
    return parseInt(str);
}
convertToInteger("56");