// primitive 
// 7 types: string, number, boolean, null, undefined, symbol, bigint

// const id = Symbol('123');  
// console.log(id); // Symbol(123)

// Reference (Non primitive)
// 2 types: object, function, array

const heros = ['thor', 'spiderman', 'ironman'];

let person = {
    name: 'Tony Stark',
    age: 45,
    isAvenger: true,
    address: {
        city: 'New York',
        state: 'NY'
    },
    friends: ['Steve', 'Natasha', 'Bruce'],
    greet: function() {
        console.log('Hello, I am ' + this.name);
    }
};
 console.log(person); 

const myFunction = function(){
    console.log('This is a function');


}
console.log( myFunction()); // function
console.log(typeof person); // object



// ++++++++++++++++++++++++++++++++++


// stack(primitive) , heap (Non-Primitive)


let myYoutubename = 'hiteshchoudharyofficial';

let anothername = myYoutubename;
anothername = 'hiteshchoudhary';

// console.log(myYoutubename); // hiteshchoudharyofficial
// console.log(anothername); // hiteshchoudhary
// console.log(anothername );


// heap  data by reference then main data is change 
let userOne = {
    email: 'nareshbaghel274@gmail.com',
    upi:"nareshbaghel@okhdfcbank"
}
let userTwo = userOne;
userTwo.email = 'nareshbaghel90482@gmail.com'
console.log(userOne.email); 
console.log(userTwo.email);


