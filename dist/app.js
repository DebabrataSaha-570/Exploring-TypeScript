"use strict";
//..........Project setup
var message = "hello typeScript";
var message2 = "Tata javaScript";
// console.log(message, message2, language)
//....Primitive Types(String, Number and boolean). 
var myName;
myName = "Debabrata Saha";
myName = "Shuvo";
// myName = 45;
// myName = false
var age;
age = 34;
// age = 'twenty'
var hasGf;
hasGf = false;
// hasGf = 0;
//.... UnionTypes and how inferred types in typeScript. 
var myAge = 56; //(allows both number , string, boolean and array type)
myAge = 'fifty six';
myAge = false;
myAge = [];
var hisName = "ElonVai";
// hisName = "shuvo" (gives an error)
