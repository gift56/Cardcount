// Using this keyword on declared object to avoid error
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }
};

dog.sayLegs();

// Declaring a constructor object
function Dog() {
    this.name = "Willams";
    this.color = "brown";
    this.numLegs = 4;
}

// Using a constructor object to reate a new object with new keyword
function Dogs() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
// Only change code below this line
let hound = new Dogs();

// Passing primeters to constructor object
function Dogs(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let terrier = new Dog("Billi", "orange");

// Using instanceOf to compare constructor object and object
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(5);

myHouse instanceof House;

// Using constructor object to set property for two object using for loop
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}

// Using .prototype to avoid repetation of codes
function Dog(name) {
    this.name = name;
    Dog.prototype.numLegs = 4;
}
// Only change code above this line
let beagle = new Dog("Snoopy");

// adding prototype property and into it's own array
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagles = new Dog("Snoopy");

let ownPropss = [];
let prototypeProps = [];

// Only change code below this line
for (let property in beagle) {
    if (beagles.hasOwnProperty(property)) {
        ownPropss.push(property);
    }
    else {
        prototypeProps.push(property);
    }
}

// Using if else statement to check for costructor
function Dog(name) {
    this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    }
    else {
        return false;
    }
}

// Adding more properties to a prototype
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat: function () {
        console.log("Dog love to eat")
    },
    describe: function () {
        console.log("Dogs are describe as an animal")
    }
};

// Remember to assign the constructor object back
function Dog(name) {
    this.name = name;
}

// Only change code below this line
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};

// Using isPrototypeOf()
function Dog(name) {
    this.name = name;
}

let beaglep = new Dog("Snoopy");

// Only change code below this line
Dog.prototype.isPrototypeOf(beagle);