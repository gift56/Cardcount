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

// Acessing nested array
const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
const secondTree = myPlants[1].list[1];

// creating prob value and id withjavascript object

const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateRecords(records, id, prop, value) {
    if (value === '') {
        delete records[id][prop];
    }
    else if (prop === 'tracks') {
        records[id][prop] = records[id][prop] || [];
        records[id][prop].push(value);
    }
    else {
        records[id][prop] = value;
    }
    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');