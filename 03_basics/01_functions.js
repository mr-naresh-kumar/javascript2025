function saymyname(){
    console.log("My ");
    console.log("name");
    console.log("is");
    console.log("Naresh Baghel");
}

//saymyname(); // Outputs "My name is

// we are use function  difination where we can say that value is parameter


// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);

// }

function addTwoNumbers(num1, num2){
    let result = num1 + num2; // Calculate the sum of num1 and num2
    return result; // Return the result of the addition
}
// when we call the function we can pass the value as argument
   const result = addTwoNumbers(7,9); // Outputs 15

//    console.log("Result:", result); // Outputs "Result: undefined" because the function does not return a value


   function loginUserMessage(username  = "sam"){
    if(username === undefined){
        console.log("Please provide a username"); 
        return// Log a message if username is not provided
    }
    return `User logged in with username: ${username}`; // Return a message indicating the user has logged in
   }

   const loginMessage = loginUserMessage("naresh"); // Call the function with a username
//    console.log(loginMessage); // Outputs "User logged in with username: Naresh"



function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(1,2,3,2,4,4,3))

 
  const user = {
    username:"Naresh",
    price : 100,
  }


  function handleObject (obj){
    console.log(`User logged in with username: ${obj.username}`);
  }

  handleObject(user);

  handleObject({
    username:"naresh",
    price:100,
  })

  const myNewArray = [200,400,100,600]


  function returnSecondValue(getArray){
    return getArray[1];
  }
  console.log(returnSecondValue(myNewArray));

  