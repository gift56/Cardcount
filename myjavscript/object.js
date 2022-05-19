// Using this keyword on declared object to avoid error
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }
};

dog.sayLegs();

// Declaring a construction object
function Dog() {
    this.name = "Willams";
    this.color = "brown";
    this.numLegs = 4;
}

// Using a construction object to reate a new object with new keyword
function Dogs() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
// Only change code below this line
let hound = new Dogs();

// Passing primeters to construction object
function Dogs(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let terrier = new Dog("Billi", "orange");

// Using instanceOf to compare construction object and object
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(5);

myHouse instanceof House;