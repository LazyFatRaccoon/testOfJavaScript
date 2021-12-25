"use strict";
// // ---------------------------------------------------1
// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }
//   console.log(sum());
// }

// showThis(5, 10);

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function () {
//     console.log(this);
//     return this.a + this.b;
//   },
// };

// // ---------------------------------------------------2
// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   this.human = true;
//   this.shout = function () {
//     console.log(this);
//   };
// }

// let ivan = new User("Ivan", 30);
// ivan.shout();
// console.log(obj.sum());

// // ---------------------------------------------------3
// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }
// const user = {
//   name: "john",
// };
// sayName.call(user, "Smith");
// sayName.apply(user, ["Smith"]);

// // ---------------------------------------------------4
// function count(num) {
//   return this * num;
// }
// const double = count.bind(2);
// console.log(double(3));

// 1) Default function: this = window, but if we use strict, then this = undefined
// 2) Context of objects methods - object himself
// 3) this in constructors and classes - new exemplar of object
// 4) manual linking of this : call, apply, bind

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  console.log(this);
});

const obj = {
  num: 5,
  sayNumber: function () {
    const say = () => {
      console.log(this);
    };
    say();
  },
};
obj.sayNumber();

const double = (a) => a * 2;
console.log(double(4));
