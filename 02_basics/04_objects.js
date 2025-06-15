const tinderUser  = new Object();
console.log(tinderUser); // Outputs an empty object


 tinderUser.id = "123abc";
 tinderUser.name = "Naresh";
 tinderUser.isLoggedIn = true;
//  console.log(tinderUser); // Outputs the tinderUser object with properties

const reguralUser = {
    email:"nareshbaghel43@gmail.com",
    fullname:{
        userfullname:{
            firstName: "Naresh",
            lastName: "Baghel"
        }
    }
}

console.log(reguralUser); // Outputs the reguralUser object with nested properties
console.log(reguralUser.fullname.userfullname.firstName); // Outputs "Naresh"

const obj1 = {
    1: "one",
    2: "two",

}
const obj2 = {
    3: "three",
    4: "four",
}
// const obj3 = {obj1, obj2};
// const obj3  = Object.assign(obj1,obj2); // Merging obj1 and obj2 into obj3 using Object.assign 
const obj3 = {...obj1, ...obj2}; // Merging obj1 and obj2 into obj3 using spread operator
console.log(obj3); // Outputs the obj3 object containing obj1 and obj2 as properties


const user =[
    {
        id:1,
        email:"nareshbaghel274@gmail.com"

    },
    {
        id:1,
        email:"nareshbaghel274@gmail.com"
        
    },
    {
        id:1,
        email:"nareshbaghel274@gmail.com"
        
    }
]

user[1].email 
console.log(user[1].email); // Outputs " 

console.log(tinderUser); 
// Outputs the tinderUser object with properties
console.log(Object.keys(tinderUser)); // Outputs the keys of the tinderUser object


console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Outputs true if the property exists, false otherwise


const course = {
    coursename: "js in hindi",
    prince :"999",
    courseAuthor:"naresh baghel",

}

course.courseAuthor

const {coursename, prince, courseAuthor} = course; // Destructuring the course object
console.log(coursename); // Outputs "js in hindi"
console.log(prince); // Outputs "999"

const {coursename:name} = course; // Renaming the destructured property
 
console.log(name); // Outputs "js in hindi"



const user = ({company}) =>{

}

user(company = "tinder")


[
    {
        id: 1,
        email: "
    }
]

