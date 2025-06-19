const myObject = {
    js :"javascript",
    py: "python",
    c: "c++",
}


for(const key in myObject){
    // console.log(`${key} = ${myObject[key]}`)
    console.log(key)
}


const programming = ["javascript", "python", "c++"];

for(const key in programming){
    console.log(`${key} = ${programming[key]}`)
}




const coding = ["javascript", "python", "c++"];

coding.forEach(function(value){
    console.log(value);
})


const myCoding  = [
    {name: "javascript", type: "dynamic"},
    {name: "python", type: "dynamic"},
    {name: "c++", type: "static"},
];

myCoding.forEach((value) =>{
    console.log(value.name);
})