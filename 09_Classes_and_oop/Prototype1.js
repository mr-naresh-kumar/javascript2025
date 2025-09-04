let myName = "hitesh     "
let mychannel = "chai   "

// console.log(myName.trueLength);

let myHeros  = ['thor', "spiderman"]

let heroPower  ={
    thor:"hammer",
    spideerman:"sling",

    getSpiderPower: function(){
        console.log("Spidy power is :", this.spiderman);
    }
}


Object.prototype.hitesh = function(){
    console.log("naresh is present in all objects ");
    }

    Array.prototype.heyNaresh = function(){
    console.log("Hitesh says hello" );
    }


    // heroPower.hitesh(); 
    // myHeros.hitesh()
    // myHeros.heyNaresh();
    // heroPower.heyNaresh();


const User = {
name:"chai",
email:"gamil@.com",
}

  const Teacher  = {
  makeVideo: true
  }

  const  TeacherSupport = {
  isAvailable: false
}

const TaSupport = {
  makeAssignement : "Js assignement ",
  fullTime: true,
  __proto__: TeacherSupport
}

Teacher.__proto__ =  User


console.log(Teacher.name);

// modern syntax 

Object.setPrototypeOf(TeacherSupport, User)


let anotherUsername = "chaiAurCode"


 String.prototype.trueLength =  function(){
    console.log(`The true length of ${this} is :`, this.trim().length);
    // console.log(`  ${this.name} `);
 }

 anotherUsername.trueLength();


//  









