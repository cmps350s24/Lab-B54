export default class Animal {
    static animalCounter = 0
    constructor(name, age) {
        this.setName(name)
        this.age = age

        Animal.animalCounter++
    }

    setName(name) {
        if (name.length >= 3)
            this.name = name
    }
    getName() {
        return this.name
    }
    static getCounter() {
        return Animal.animalCounter
    }

    toString() {
        return `${this.name} is ${this.age} years old`
    }

}



