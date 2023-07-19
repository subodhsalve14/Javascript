const accountId =44302
let accountEmail ="subodh@google.com"
var accountPassword="12345"
accountCity ="Kalyan"
let accountState

/*
Prefer not to used var
bacause of issue in block scope and functional scope
*/

// accountId=2 not allowed because const is unique
console.log(accountId);


// Display the value in table
console.table([accountId,accountEmail,accountPassword,accountCity, accountState]);

