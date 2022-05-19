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

// conbining the chain
function Dog(name) {
    this.name = name;
}

let beagleC = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

// creating a supertype objectin order to avoid repeatation {DRY}
function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,
};

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom")
    }
};

// using object.create() to access Animal
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagled = Object.create(Animal.prototype); // Change this line

// Making the children to have the property of parent
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagleP = new Dog();

// Leting thier children know where they are being gotten from
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


let ducks = new Bird();
let beaglePa = new Dog();

// Making Dog have two properties
function Animal() { }
Animal.prototype.eat = function () { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    console.log("Woof!");
}

// Only change code above this line

let beagleDg = new Dog();

// overriding a given construtor functor word
function Bird() { }

Bird.prototype.fly = function () { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly = function () {
    return "Alas, this is a flightless bird.";
}
// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());

// Creating a mixin function
let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

// Only change code below this line
let glideMixin = function (obj) {
    obj.glide = function () {
        console.log("glazing, wooosh!");
    }
}
glideMixin(bird);
glideMixin(boat);

// Creating a private varible
function Bird() {
    let weight = 15;
    this.getWeight = function () {
        return weight;
    }
}

//Understand the Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("A cozy nest is ready");
})();

// Using (IIFE) in combining mixin
let funModule = (function () {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                return true;
            };
        },
        singMixin: function (obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            };
        }
    }
})();