const name = "subodh"
const age = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length); 13
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2)); //t
// console.log(gameName.indexOf('t')); 2

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(1, 4)
console.log(anotherString);

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']; //Slice Example of Minus
console.log(animals.slice(2, -1));

const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));