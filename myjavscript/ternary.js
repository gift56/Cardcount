function checkEqual(a, b) {
    return a == b ? "Equal" : "Not Equal";
}
checkEqual(1, 2);

// multiple if else if and else
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

checkSign(10);

// Replacing the first leter to uppercase and the rest to lowercase
function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
        updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
}

titleCase("I'm a little tea pot");

// or use Regex
function titleCase(str) {
    return str
        .toLowerCase()
        .replace(/(^|\s)\S/g, L => L.toUpperCase());
}

// replacing on array with another
function frankenSplice(arr1, arr2, n) {
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Using the filter value in javascript
function bouncer(arr) {
    return arr.filter(Boolean);;
}

bouncer([7, "ate", "", false, 9]);

// Where do i belong in freecode camp quiz
function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
}

getIndexToIns([40, 60], 50);

// mutating an array
function mutation(arr) {
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
}

mutation(["hello", "hey"]);

// Chunking an array
function chunkArrayInGroups(arr, size) {
    let temp = [];
    let result = [];

    for (let a = 0; a < arr.length; a++) {
        if (a % size !== size - 1) temp.push(arr[a]);
        else {
            temp.push(arr[a]);
            result.push(temp);
            temp = [];
        }
    }

    if (temp.length !== 0) result.push(temp);
    return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);