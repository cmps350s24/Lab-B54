import promptSync from 'prompt-sync';
const input = promptSync();

// let name = input('What is your name? ');
// console.log(`My Name is ${name}`);

const person = {
    name: "Abdulahi",
    age: 20,
    gender: "Male"
}
const { name } = person

console.log(`Name is ${name}`);
console.log(`Name is ${person.age}`);
console.log(`Name is ${person.gender}`);
// npm init
// npm install --save prompt-sync