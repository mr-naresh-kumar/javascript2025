// window = {this = window} 

// node = {}  
// global = {this = global}

// function SetUsername(username){
//     // conplex DB class 
//     this.username = username;
//     console.log("called");

// }
// function createUser(username, email, password){
//     SetUsername.call(this, username);
//     this.email  = email;
//     this.password = password;

// }

// const chai =  new createUser("chai", "chai@gmail.com", "123");

// console.log(chai);



function Setusernname (){
    this.username = "hitesh"
    console.log("call setuername");
}

function CreateUsername( username, email, password){
    Setusernname.call(this,username);
    this.email= email;
    this.password = password;
}

const chai  = new CreateUsername("chai", "naresh@321", "1232");
console.log(chai);