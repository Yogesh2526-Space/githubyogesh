 let map = new Map();

map.set(1,"Yogesh");

map.set(2,"Aswin");

map.set(3,"Renuka");

map.set(4, "Durai");

map.delete (2);

//map.clear();

console.log(map);
console.log(map.get(1)); 
console.log(map.has(3));
console.log(map.size);

for (key of map){
    console.log(key);
} 

// set

let set = new Set();

set.add("Europa");
set.add("Charon");
set.add("IO");
set.add("Enceladus");

console.log(set);

set.delete("IO");

console.log(set);


console.log(set.has(4));


console.log(set.size);


// Array

let num = [1,2,3,4,5,];

num.push(6);
num.pop(5);

num.unshift(0);

console.log(num);


