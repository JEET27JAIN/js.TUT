const accountId  =  144553
let accountEmail =  "jeet@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 //not allowed 

accountEmail = "jj@jj.google.com"
accountPassword = "21212134"
accountCity = "pune"

/*
prefer not to use var , beacause issue 
in block scope and functional  scope

*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
