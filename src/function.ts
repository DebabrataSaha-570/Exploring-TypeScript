//Function types (parameter, return, anonymous/callback, function signature, optional parameter / default parameter)

function add(num1: number, num2: number) : void  {
    console.log(num1 + num2)
}
add(10,30)

//Void : if a function do not return anything then the return  type of that function is void.. This function is the example.

// .............................. 

function add2(num1: number, num2: number) : number {
    return num1 + num2;
}
const result = add2(50,30)
// console.log(result)

// ................................. 

const add3 = function (num1: number, num2: number) : number {
    return num1 + num2;
}
const result1 = add3(50,30)
// console.log(result)

//..........................

const add4 = (num1: number, num2: number) : number => {
    return num1 + num2;
}
const result2 = add4(50,30)
// console.log(result)

//..........................

const add5 = (num1: number[], num2: number) : number => {
    return num1[0] + num2;
}
const result3 = add5([10],30)
// console.log(result)

//............................

const add6 = (num1: number, num2: number, num3:number) : number => {
    return num1 + num2 + num3; 
}
const result4 = add6(10 ,30, 10)
// console.log(result)

//......................

const add7 = (num1: number, num2: number, num3:number = 0 ) : number => {
    return num1 + num2 + num3 ; 
}
const result5 = add7(10 ,30, 10)
// console.log(result)

// .........................

const add8 = (...numbers: number[]) : number => {
    return numbers.reduce((pre, cur) => pre + cur,0); 
}
const result6 = add8(77, 75, 23, 344)
console.log(result6)

// .........

// Function signature 


const add9 = (num1: number, num2: number, num3: number = 0): number => {
    return num1 + num2 + num3;
  };
  const result7 = add9(10, 30, 10);
  console.log(result7);