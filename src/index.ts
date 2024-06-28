let num: number = 23;
if (num < 30) num += 10;
console.log(num);

// Data Types
let price: number = 599;
let course: string = "TypeScript";
let isPublished: boolean = true;

// Any type
function render(document: any) {
  console.log(document);
}

// Arrays
let arr: number[] = [1, 2, 3];

// If we don't give any specific type to array it will become type of "any".
let nums = []; //this is having by default "any type"

// tuple
let user: [number, string] = [1, "Harshal"]; // it will contain exactly 2 elements only

// Enums
// const small = 1;
// const medium = 2;
// const large = 3;  //instead of doing this all thing we combine them into enum

const enum Size {
  Small = "s",
  Medium = "m",
  Large = "l",
} //This is for string
const enum Value {
  Small = 1,
  Medium = 2,
  Large = 3,
} //This is for Integer

// Accessing
let myValue: Value = Value.Large;
console.log(myValue);

// Function declaration Explicitly and Implicitly

// Implicit example.. this is implicit because it dose't have any specific return type as such
  
  function calculate(income: number) {
    return income;
  }

// Explicit example.. this is Explicit because it have specific return type Number
function multiply(income: number): number {
  return income;
}

// Implementation
function calculateTax(income: number, taxYear = 2023): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income;
}

// Objects:-

let employee = {
  //normal javascript object declaration
  id: 1,
  name: "harshal",
};

let emp: { id: number; name: string } = { id: 100, name: "vedant" }; //this is typescript declaration.. if we wants to send any parameter as a optional we just have to add a "?" sign to it

// to stop repeating the same object declaration for multiple objects again and again...
// It is also known as type aliases

type Employee = {
    id: number,
    name: string
}

let workers: Employee = {
    id:1,
    name:"Harshal",
}


// Union types

function kgToLbs(weight:number | string) : number {
    if (typeof weight === 'number') 
        return weight*2.2;
    else
        return parseInt(weight)*2.0;
}

kgToLbs(10)
kgToLbs('13')