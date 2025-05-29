const name = "naresh";
const repoCount = 10;

// string interpulation use backticks and ${} to insert variables

// console.log("Hello " + name + ", your repo count is " + repoCount);


const gameName  = new String("Counter Strike", "Call of Duty", "PUBG", "Fortnite");
console.log(gameName[0]); // C
console.log(gameName.__proto__); // String {}


const  newString = "  HEllow World   ";
console.log(newString);
console.log(newString.trim());

const url = "https://www.google.com";

console.log(url.replace("https", "http")); 

console.log(gameName.split('--'));