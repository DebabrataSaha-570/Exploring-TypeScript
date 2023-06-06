//..........Project setup
const message = "hello typeScript"
const message2 = "Tata javaScript"
// console.log(message, message2, language)

//....Primitive Types(String, Number and boolean). 


let myName : string;
myName = "Debabrata Saha"

myName = "Shuvo";

// myName = 45;
// myName = false

let age : number;
age = 34; 
// age = 'twenty'

let hasGf : boolean; 
hasGf = false; 
// hasGf = 0;


//.... UnionTypes and how inferred types in typeScript. 

let myAge: number | string | boolean | [] = 56; //(allows both number , string, boolean and array type)

myAge = 'fifty six'
myAge = false
myAge = []


let hisName : "ElonVai" | "ElonMusk" = "ElonVai"; 
// hisName = "shuvo" (gives an error)



