const accountId = 144553
let accountEmail = "alok@gmail.com"
var accountPassword= "1234"
accountCity="Jaipur"
let accountState;


/*
Prefer not to use var 
because of issue in block scope 
*/
console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])