class User {
    constructor (username){
        this.username = username;
    }
    logMe(){
        console.log(`You are logged in as ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username);
        this.email= email;
        this.password = password;
        
    }
    addCourse(){
        console.log( `${this.username} just added a new course`);
    }
}

const chai   = new  Teacher("chai", "chai@gmail.com", "123");


chai.addCourse()

const masalaChai  = new User("masalaChai");
masalaChai.logMe();

console.log(chai ===  masalaChai);

console.log(chai instanceof Teacher);