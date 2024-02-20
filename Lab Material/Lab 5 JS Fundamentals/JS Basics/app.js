// // variable declarations

// // let x = 10
// // let y = "Hello"

// // // there are similar things with other programming languages that you have studies in CMPS251 CMPS303


// // const names = ["John", "Jane", "Bob"]

// // // functions

// // const add = function (a, b) {
// //     return a + b
// // }
// // const sub = function (a, b) {
// //     return a - b
// // }

// // const a = 20
// // const b = 30

// // let result = add(a, b)
// // let result2 = add(20, 30)

// // console.log("Addition is ", result);
// // console.log("Addition is ", result2);

// function calculator(ab, bz, callback) {
//     const result = callback(ab, bz)
//     console.log("--->", result);
//     return result

// }

// calculator(20, 30, (a, b) => a - b)
// calculator(20, 30, (a, b) => a + b)
// calculator(20, 30, (a, b) => a * b)
// calculator(20, 30, (a, b) => a / b)

// console.log(calculator(20, 30, (a, b) => a - b));

// // function name(callback) {
// //     callback(22)
// // }

// // name(age => console.log("Age is ", age))


// // // calculator(a, b, add)
// // calculator(a, b, sub)
// // calculator(20, 30, function (a, b) {
// //     return a - b
// // })




// // how to simplify a function in javascript using arrows

// function cube(n) {
//     return n ** 3;
// }

// function failOrPass(grade) {
//     if (grade >= 70) {
//         return "Pass"
//     } else {
//         return "Fail"
//     }
// }

// grade => grade >= 70 ? "Pass" : "Fail"


// console.log("Cube of the number is ", 9, cube(9));

// const cube2 = n => n ** 3;

// console.log("Cube 2 of the number is ", 9, cube2(9));


// arrays and their methods

const numbers = [1, -2, -3, 4, 4, 6, 4, 8, 9, 10, 1001]
console.log(numbers);

// get the third element in the array
console.log("Third element in the array", numbers[3]);

// add element to the array
numbers.push(100)
console.log("After pushing 100 to the array", numbers);

numbers.pop()
console.log("After popping the array", numbers);

// add element to the beginning of the array
numbers.unshift(0)
console.log("After unshifting 0 to the array", numbers);

// remove element from the beginning of the array
numbers.shift()
console.log("After shifting 0 from the array", numbers);

// how to remove element from a specific location in the array
numbers.splice(2, 3)
console.log("After splicing the array", numbers);

// a bit more advance methods
// display all the elements in the array


numbers.forEach(num => console.log("the number is ", num))
console.log("sort a-b", numbers.sort((a, b) => a - b));
console.log("sort b-a", numbers.sort((a, b) => b - a));
console.log("sort", numbers.sort());

// find 
const foundElement = numbers.find(num => num == 10)
console.log("Find The found element is ", foundElement);

// filter
const negElements = numbers.filter(num => num < 0)
console.log("Filter The negative elements are ", negElements);

// map transform from one shape to another
const cubeElements = numbers.map(num => num ** 3)
console.log("Map the cube of the numbers is ", cubeElements);

// reduce
let acc = 0

for (const curr of numbers) {
    acc += curr
}

console.log("old way of summing", acc);

const rsum = numbers.reduce((acc, curr) => acc + curr, 0)
// const rsum = numbers.reduce((acc, curr) => acc * curr, 1)
// num = [1,-2,10,4,5]

// acc = 0, curr = 1
// acc = acc + curr
// acc = 0 + 1 = 1

// round 2
// acc = 1, curr = -2
// acc = 1 - 2 = -1
// acc = -1, curr = 10
// acc = -1 + 10 = 9


const number = [
    [1, 2, 3, 40, 5],
    [3, 4, 5, 60, 6],
    [1, 2, 3, 4, 5, [4, 50, 6, 7, 7]]
]

console.log(number.flat(2));
console.log(number.flat(Infinity));