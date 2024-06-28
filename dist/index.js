"use strict";
let num = 23;
if (num < 30)
    num += 10;
console.log(num);
let price = 599;
let course = "TypeScript";
let isPublished = true;
function render(document) {
    console.log(document);
}
let arr = [1, 2, 3];
let nums = [];
let user = [1, "Harshal"];
let myValue = 3;
console.log(myValue);
function calculate(income) {
    return income;
}
function multiply(income) {
    return income;
}
function calculateTax(income, taxYear = 2023) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income;
}
let employee = {
    id: 1,
    name: "harshal",
};
let emp = { id: 100, name: "vedant" };
let workers = {
    id: 1,
    name: "Harshal",
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.0;
}
kgToLbs(10);
kgToLbs('13');
//# sourceMappingURL=index.js.map