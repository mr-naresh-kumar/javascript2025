// map 

const map = new Map();

map.set("In", "India");
map.set("Us", "United States");
map.set("Uk", "United Kingdom");


console.log(map);

for(const [key, value] of map) {
    console.log(`${key} = ${value}`);
}