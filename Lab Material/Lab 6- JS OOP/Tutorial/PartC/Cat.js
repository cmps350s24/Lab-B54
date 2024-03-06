import Animal from "./Animal.js";
class Cat extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    toString() {
        return `${super.toString()} and is a ${this.breed}`;
    }
}