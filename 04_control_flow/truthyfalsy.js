const userEmail =  []  //"", // This is a falsy value  "naresh" thisis a truthy value

if(userEmail) {
    console.log("User email is present");
}else{
    console.log("User email is not present");
}


// falsy values in js 
// false, 0, -0 BigInt "", null, undefined, NaN

// truthy values in js  
// true, 1, -1, BigInt(1), "0", "false" , " ", [], {}, function(){}, Symbol(), Infinity, -Infinity



// Nullish Coalescing operator (??): null underfinded 
let val1;

val1  = 5??10
console.log(val1); // 5


// Terniary Operator 

// condition ? true:false 


const isUserLoggedIn = true;

isUserLoggedIn ? console.log("User is logged in "):console.log("User is not logged in");













const emptyObj  ={}

if(Object.keys(emptyObj).length === 0){
    console.log("object is emothy");
}