//++++++++++++++++
// Stack(Primitive), Heap(Non Primitive)

let myYoutubename = "jeetjaindotcom"

let anothername = myYoutubename
anothername = "meandmine"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "jeet@google.com"

console.log(userOne.email);
console.log(userTwo.email)

