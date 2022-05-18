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