// singleton
// Object.create

// object literals
const mySym = Symbol["key1"]

const Userjs = {
    Name: "Subodh Salve",// define 0 also to the key
    [mySym]: "key12345",
    age: 18,
    location: "Maharashtra",
    email: "subodh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(Userjs.location);
// console.log(Userjs["location"]);// give by string key value
// console.log(Userjs[mySym]);
// console.log(typeof Userjs[mySym]);

Userjs.email ="subodhsalve@chatgpt.com"//change the email value
// console.log(Userjs.email);

Userjs.email = "hitesh@chatgpt.com"
// Object.freeze(Userjs) //freeze the changes happening 
Userjs.email = "hitesh@microsoft.com"
// console.log(Userjs);

Userjs.greeting = function(){
    console.log("Hello JS user");
}
Userjs.greetingTwo = function(){
    console.log(`Hello JS user, ${this.Name}`); //Apply name ${this} is used
}

console.log(Userjs.greeting());
console.log(Userjs.greetingTwo());
