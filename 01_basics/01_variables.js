const account_Id = 144455;
let account_Email = "abc@gmail.com";
var account_Password = "12345";
account_City = "mumbai";
let account_State;

/*
    1)Prefer not to use var
    because of issue in block scope
    and functional scope
    2)const is immutable
    3)string is mutable
*/


account_Email="xyz@gmail.com"
account_Password="123456789"
account_City="pune"


console.table({ account_Id, 
    account_Email, 
    account_Password, 
    account_City,
    account_State });
