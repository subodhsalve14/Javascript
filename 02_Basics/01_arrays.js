// array

const myArr = [ 0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[2]);


// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()


myArr.unshift(9) //Add value in first position
myArr.shift()// Retrieve changes to Back
// console.log(myArr)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));

// const newArr = myArr.join()//Convert to String

// console.log(myArr);
// console.log(newArr);//Converted to String


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)//Remove the element --splice
console.log("C ", myArr);
console.log(myn2);