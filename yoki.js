//const imports = require ("./renuka.js");

//console.log(imports);

//importing specific one 

const {names} = require ("./renuka.js");

// if import is in object don't use import.names in console instead use only names

console.log(names);

// os module

const os = require ('os');

// giving file directories

console.log(os.homedir());