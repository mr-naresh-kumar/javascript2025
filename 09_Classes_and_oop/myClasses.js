

// Es 6 
// class User { 
//     constructor(username, email, password){
//         this.username=  username;
//         this.email=  email;
//         this.passsword = password;

//     }
//     encryptedPassword(){
//         return `***${this.passsword}***`;

//     }
//     changeusername(){
//       return `${this.username.toUpperCase()}`

//     }
// }

// const chai  = new User("chai", "chai@gmai.com",
//     "123");
//     console.log(chai);
//     console.log(chai.encryptedPassword());
//     console.log(chai.changeusername());


    // behind the scene 


    function User (username, email, password){
        this.username= username;
        this.email= email;
        this.password = password;
        this.password = password;

    }
    User.prototype.encryptedPassword = function(){
        return `***${this.passsword}***`;
    }

     User.prototype.changeusername = function(){
        return `${this.username.toUpperCase()}`
    }
    

    const tea  = new User("chai", "chai@gmai.com",
    "123");
    console.log(tea);
    console.log(tea.encryptedPassword());
    console.log(tea.changeusername());