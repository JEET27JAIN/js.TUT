//Primitive

// 7 Types: String, Number, Boolean , Null ,undefined,Symbol,BigInt

 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') 

console.log(id == anotherId);

////Reference (Non Primitive )

//Array , objects,function 
 const heroes = ["Shaktiman", "naagraj","doga"]
 let myObj = {
    name: "jeet"
    
 }

 const myFunction = function(){
    console.log("Hello World");
    
 }