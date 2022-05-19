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