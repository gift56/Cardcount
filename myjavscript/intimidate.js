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