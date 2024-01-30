// const userEmail="abc@gmail.com" //returns true
const userEmail=[] //also returns true
if(userEmail){
    console.log("got email")
}else{
    console.log("didnt reveive")
}

//falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaN


//truthy values
// true,"0"," ",[],{},"false",function(){}

// if(userEmail.length ===0){
//     console.log("array empty")
// }else{
//     console.log("not empty")
// }

const emptyObject={}
if(Object.keys(emptyObject).length===0){
    console.log("empty")
}else{
    console.log("not empty")
}

//nullish coalescing operator (??): null undefined
// will come in use when working with databases
// can say only made for null and undefined cases

let val1;
let val2;
let val3;
let val4;
val1= 5 ?? 20
val2=null ?? 10
val3=undefined ?? 50
val4=null ?? 10 ?? 35
console.log(val1)
console.log(val2)
console.log(val3)
console.log(val4)