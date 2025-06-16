// Immediately Invoked Function Expression (IIFE) Example

function chai(){
    console.log("chai function called");

}

chai(); // Output: chai function called
(function chai(){
    console.log("chai function called inside IIFE");
})();


(()=>{
    console.log("DB CONNECTED");

})();