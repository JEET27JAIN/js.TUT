// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Jeet",
    "full name": "Jeet J",
    [mySym]: "mykey1",
    age: 18,
    location: "mumbai",
    email: "jeet@google.com",
    isLoggedIn: false, 
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser. email = "jeet@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "jeet@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());