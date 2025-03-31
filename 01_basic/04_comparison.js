// console.log(2>1). >= < == !=

// console.log("2">1);
// console.log("02">1);

console.log(null>0);
console.log(null==0);
console.log(null>=0);

//the reason is that an equality check == and comparison < > >= works differently 
// compariosn conveert null to a number , treating it as 0 , thats why (3)
// null >=0 is tru e

console.log(undefined ==0);
console.log(undefined >0);
console.log(undefined <0);
