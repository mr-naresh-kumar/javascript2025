const user = {
    username: "naresh",
    loginCount:8,
    signed:true,
    getUserDetails:function(){
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`)
    }
}
// console.log(user.username)
// console.log(user.getUserDetails());


// consructor function apke havle hai jissed orignal par koi effect nhi padta 

// new keyword  jese hi use karte hai sbse phle ik empty object create hota hai jisko instance bola jata hai 

// 1. new object create ho gya hai 
// 2. constructor function call hota hai new keyword ke kard 
// 3. this keyword use  karke jo bhi apne argument likhe vo use m inject ho jate hai 
// 4. apko function ke ander mil jate hai 


function User(username, loginCount, isLoggedin){
    this.username = username;
    this.loginCount= loginCount;
    this.isLoggedin= isLoggedin

    return this

}
const userOne = User("naresh", 12, true)
console.log(userOne);