"use strict";

const arr = [1, 22, 3, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

console.log(arr.length);

arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} inside of array ${arr}`);
});

arr.pop();
arr.push(5);
arr.shift();
console.log(arr);
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {

    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

const str = prompt("Enter a list of goods ", "");
const products = str.split(" ");
products.sort();
console.log(products.join("; "));