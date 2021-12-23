function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  script.async = false;
  document.body.append(script);
}
loadScript("js1.js");
loadScript("js2.js");

const btns = document.querySelectorAll("button"),
  overlay = document.querySelector(".overlay"),
  p = document.querySelectorAll("p");

console.log(p);

// btn.addEventListener("click", () => {
//   alert("Click");
// });

let i = 0;
const deleteElement = (e) => {
  alert("click");
};

//   i++;
//   if (i == 1) {
//     e.target.removeEventListener("click", deleteElement);
//     i = 0;
//   }
// };
// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

// const link = document.querySelector("a");
// link.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log(event.target);
// });

btns.forEach((btn) => {
  btn.addEventListener("click", deleteElement, { once: true });
});
