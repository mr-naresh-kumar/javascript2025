class User {
constructor(username){
 this.username = username;
 }

 logme(){
 console.log(this.username);
 }


 createId(){
 return `1232`
 }

 }

 const naresh = new User("Naresh");
  /// console.log(naresh.createId())  

 class Teacher extends User{
  constructor(username,email){
  super(username);
  this.email = email;
  }

  }

  const iphone  = new Teacher("iphone", "i@phone.com");
  iphone.logme();


 