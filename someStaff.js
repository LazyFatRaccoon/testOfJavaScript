"use strict";

const option = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        string: {
            length: 4,
            font: 'alfa'
        },
        bg: 'red'
    },
    makeTest: function () {
        console.log("Test");
    }
};

option.makeTest();

const { border, bg } = option.colors;
console.log(border);

console.log(option.name);

delete option.name;

console.log(option);

// for (let key in option) {
//     if (typeof (option[key]) === 'object') {
//         for (let i in option[key]) {
//             console.log(`свойство ${i} имеет значение ${option[key][i]}`);
//         }
//     } else {
//         console.log(`свойство ${key} имеет значение ${option[key]}`);
//     }
// }

function countElements(element) {

    for (let key in element) {
        if (typeof (element[key]) === 'object') { countElements(element[key]); }
        else {
           count++; 
        }
    }
    return count;
}

function showData(element) {
    for (let key in element) {
        if (typeof (element[key]) === 'object') { showData(element[key]); }
        else {
           console.log(`свойство ${key} имеет значение ${element[key]}`); 
        }
    }
}
showData(option);
let count = 0;
console.log(countElements(option));

console.log(Object.keys(option).length);