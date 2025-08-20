function multipleBy5(num){
    return num*5
}


multipleBy5.power =2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score=  score

}

createUser.prototype.increment =  function(){
    this.score++;
}
createUser.prototype.printMe  =  function(){
    console.log(this.score)
}

const chai = new createUser("chai", 25)
const tea =  new createUser("tea", 250)

chai.printMe()




/* Heres what happens behind the scenes when the keyword is used :
 A new object is created : the new keyword initiates 
 the creation of a new javascript object.
  
 A prototype is linked : The newly created objected
  gets linked to the prototype of the consturctor function.
   this means that it has access to properties and method defind on the constructors prototype


The Constructor is called:  the constructor functionis called with the specified arguments and
 this is bound to the newly created object. if no explicit return 
 value is specified from the constructor , javascript assumes this,
 the newly created object, to be the intended return value.

 The new object is returned: After the constructor function has been 
 called, if it doesn't return a non-primitie value object, array, function, etc 
 the newly created object is returned
 */

