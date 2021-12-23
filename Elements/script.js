"use strict";

const box = document.getElementById("box"),
  btns = document.getElementsByTagName("button"),
  circles = document.getElementsByClassName("circle"),
  wrapper = document.querySelector(".wrapper"),
  hearts = wrapper.querySelectorAll(".heart"),
  oneHeart = wrapper.querySelector(".heart");

console.dir(box);
box.style.backgroundColor = "blue";
box.style.width = "500px";
btns[1].style.borderRadius = "90%";

hearts.forEach((item, i) => {
  item.style.backgroundColor = "blue";
});

const div = document.createElement("div");
const text = document.createTextNode("I was here");

div.classList.add("black");
//document.body.append(div);

wrapper.append(div);

div.innerHTML = "<h3>World!</h3>";

div.insertAdjacentHTML("afterend", "<h2>Hello</h2>");
//div.textContent = "Hello";
// hearts[1].after(div);
// hearts[1].remove();
// wrapper.appendChild(div);
// wrapper.insertBefore(div, hearts[0]);
// circles[0].style.backgroundColor = "red";
// hearts[0].replaceWith(circles[0]);
// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "blue";
// }
