const person = {
    name: "Efe",
    height: 6 + " feet tall",
    age: 18,
    friends: ["Babatunde", "Bossteeh", "Bumi", "Simeon", "Walexy"]
}
// adding new stuff to object
person.lifestye = "Coding";

// deleting items from object
delete person.age;

console.log(person);

const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// assign playername to player
const playerNumber = 16;
const player = testObj[playerNumber];

// using of lookup object with has hasOwnProperty
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    }
    else {
        return "Not Found";
    }
}

// manupulating object
const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Wizkid Starboy",
        "title": "Big Ass",
        "release_year": 2016,
        "formats": ["CD", "100T", "LP"]
    }
];

// accessing nested object
const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"];