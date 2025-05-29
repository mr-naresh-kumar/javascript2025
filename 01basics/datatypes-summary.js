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