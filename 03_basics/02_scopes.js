let a =10
const b =20
var c =30

if(true){
    let a = 100; // This 'a' is block-scoped
    const b = 200; // This 'b' is block-scoped
    var c = 300; // This 'c' is function-scoped or globally scoped
    
}

console.log(a);
console.log(b);
console.log(c);


function one(){
    const username = "naresh";

    function two(){
        const website = "naresh.com";
        console.log(username); // Accessing 'username' from the outer function
    }
    // console.log(website); // This will throw an error because 'website' is not defined in this scope
    two(); // Call the inner function to access 'username'
}
one(); // Call the outer function to execute the code

if(true){
    const username = "naresh";
    if(username === "naresh"){
        const website = "narsh.com";
        console.log(`User logged in with username: ${username} and website: ${website}`); // Accessing both 'username' and 'website'
    }
}

console.log(addone(10));

function addone(num){
    return num+1; // Return the result of adding 1 to the input number
}


addTwo(10);

const addTwo = function(num){
    return num+2;
}