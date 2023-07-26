// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);



// let myCreatedDate = new Date(2023, 0, 23) //YY MM DD
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // YY MM DD HH MIN
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() +1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",  
})

let currentDate =new Date()
console.log(currentDate.toDateString());//Display Day Month with text, other with Number
console.log(currentDate.toLocaleString());//Display Local Date with Time
console.log(currentDate.toLocaleDateString());//Display Local Date 
