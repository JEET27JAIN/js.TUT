// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) // add in last
// myArr.push(7) 
// myArr.pop() // remove the last element 

// myArr.unshift(9) // joined or add in first
// myArr.shift().  // remove first element

// console.log(myArr.includes(9)); //t or f
// console.log(myArr.indexOf(3));  // value exist or not

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);