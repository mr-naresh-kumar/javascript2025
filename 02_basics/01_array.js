// array 
const myArray = [0,1,2,3,4,5,6];

const myHeros = ['Batman', 'Superman']
console.log(myArray[0]); // Outputs the first element of the array, which is 0


// array  method 
myArray.push(7); // Adds 7 to the end of the array
console.log(myArray); // Outputs the updated array: [0, 1, 2, 3, 4, 5, 6, 7]


const  newArray = myArray.join();
console.log(myArray); // Outputs the array as a string: "0,1,2,3,4,5,6,7"
console.log(newArray); // Outputs the array as a string: "0,1,2,3,4,5,6,7"


// slice or splice 
console.log("A", myArray);
const myn1 = myArray.slice(0, 3); // Creates a new array with elements from index 0 to 2

console.log("B", myn1); // Outputs the sliced array: [0, 1, 2]
const myn2 = myArray.splice(0, 3); // Removes elements from index 0 to 2 and returns them
console.log("C", myn2); // Outputs the removed elements: [0, 1, 2]
console.log("D", myArray); // Outputs the updated array after splice: [3, 4, 5, 6, 7]
// concat
const myArray2 = [8, 9, 10];
const myArray3 = myArray.concat(myArray2); // Combines myArray and myArray2 into a new array
