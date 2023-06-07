"use strict";
//Function types (parameter, return, anonymous/callback, function signature, optional parameter / default parameter)
function add(num1, num2) {
    console.log(num1 + num2);
}
add(10, 30);
//Void : if a function do not return anything then the return  type of that function is void.. This function is the example.
// .............................. 
function add2(num1, num2) {
    return num1 + num2;
}
var result = add2(50, 30);
// console.log(result)
// ................................. 
var add3 = function (num1, num2) {
    return num1 + num2;
};
var result1 = add3(50, 30);
// console.log(result)
//..........................
var add4 = function (num1, num2) {
    return num1 + num2;
};
var result2 = add4(50, 30);
// console.log(result)
//..........................
var add5 = function (num1, num2) {
    return num1[0] + num2;
};
var result3 = add5([10], 30);
// console.log(result)
//............................
var add6 = function (num1, num2, num3) {
    return num1 + num2 + num3;
};
var result4 = add6(10, 30, 10);
// console.log(result)
//......................
var add7 = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 0; }
    return num1 + num2 + num3;
};
var result5 = add7(10, 30, 10);
// console.log(result)
// .........................
var add8 = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (pre, cur) { return pre + cur; }, 0);
};
var result6 = add8(77, 75, 23, 344);
console.log(result6);
// .........
// Function signature 
var add9 = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 0; }
    return num1 + num2 + num3;
};
var result7 = add9(10, 30, 10);
console.log(result7);
