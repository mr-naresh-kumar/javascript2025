const marvel_herores =["thro", "ironman", "hulk", "captain america", "black widow", "spiderman"];
const dc_heroes = ["superman", "batman", "flash", "wonder"]


// marvel_herores.push(dc_heroes)// Adds the dc_heroes array as a single element to marvel_herores
// console.log(marvel_herores); // Outputs the updated marvel_herores array with dc_heroes as a single element

// console.log(marvel_herores.length); // Outputs the length of the marvel_herores array, which is now 7
// console.log(marvel_herores[marvel_herores.length - 1]); // Outputs the last element of the marvel_herores array, which is the dc_heroes array
// console.log(marvel_herores[6]); // Outputs the last element of the marvel_herores array, which is the dc_heroes array

//   const  all_heroes = marvel_herores.concat(dc_heroes); // Combines marvel_herores

// console.log(all_heroes); // Outputs the marvel_herores array with dc_heroes added as a single element


const all_new_heroes = [...marvel_herores, ...dc_heroes]; // Combines marvel_herores and dc_heroes into a new array using the spread operator

console.log(all_new_heroes); // Outputs the combined array of all heroes

const another_array = [1,2,3,[4,5,6],7[6,7,[4,5]]];

const real_another_array = another_array.flat(2); // Flattens the nested arrays to a depth of 2
console.log(real_another_array); // Outputs the flattened array: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
const myArray = [1, 2, 3, 4, 5];

 const myArray2 = myArray.map((item) => item * 2); // Creates a new array with each element multiplied by 2
 console.log(myArray2); // Outputs the new array: [2, 4, 6, 8, 10
 const myArray3 = myArray.filter((item) => item > 2); // Creates a new array with elements greater than 2
 console.log(myArray3); // Outputs the new array: [3, 4, 5]

const myArray4 = myArray.find((item) => item > 2); // Finds the first element greater than 2
console.log(myArray4); // Outputs the first element greater than 2: 3
const myArray5 = myArray.findIndex((item) => item > 2); // Finds the index of the first element greater than 2
console.log(myArray5); // Outputs the index of the first element greater than 2: 2
const myArray6 = myArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Sums all elements in the array
console.log(myArray6); // Outputs the sum of all elements in the array: 15
const myArray7 = myArray.reduceRight((accumulator, currentValue) => accumulator + currentValue, 0); // Sums all elements in the array from right to left
console.log(myArray7); // Outputs the sum of all elements in the array from right to left: 15
console.log(Array.isArray("Naresh")); // Checks if the value is an array, outputs false
console.log(Array.isArray(myArray)); // Checks if myArray is an array, outputs true
// console.log(Array.isArray([])); // Checks if an empty array is an array, outputs true
console.log(Array.from("Naresh")); // Converts a string to an array, outputs ['N', 'a', 'r', 'e', 's', 'h']

console.log(Array.from({ length: 5 }, (_, index) => index + 1)); // Creates an array of length 5 with values from 1 to 5, outputs [1, 2, 3, 4, 5]


// console.log(Array.from({ 0: "Naresh", 1: "Kumar", length: 2 }, (value) => value)); // Converts an array-like object to an array, outputs ['Naresh', 'Kumar']

// interesting case  *******************
console.log(Array.from({name:"Naresh"})); // Converts an object to an array, outputs [{name: "Naresh"}]
// console.log(Array.from({name:"Naresh"}, (value) => value)); // Converts an object to an array, outputs ['Naresh']
// console.log(Array.from({name:"Naresh"}, (value, key) => `${key}: ${value}`)); // Converts an object to an array with key-value pairs, outputs ['name: Naresh']
// console.log(Array.from({name:"Naresh"}, (value, key) => `${key} is ${value}`)); // Converts an object to an array with key-value pairs, outputs ['name is Naresh']

let score1 = 100
let socre2 = 200
let score3 = 300

console.log(Array.of(score1,socre2,score3)); // Creates an array with the given scores, outputs [100, 200, 300]
