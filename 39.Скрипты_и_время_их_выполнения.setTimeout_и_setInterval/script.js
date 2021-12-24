const btn = document.querySelector(".btn");
let timerID,
  i = 0;

function myAnimation() {
  const element = document.querySelector(".box");
  let pos = 0;
  function frame() {
    if (pos == 300) {
      clearInterval(TimerId);
    } else {
      pos += 1;
      element.style.top = `${pos}px`;
      element.style.left = `${pos}px`;
    }
  }
  let TimerId = setTimeout(function repeate() {
    frame();
    TimerId = setTimeout(repeate, 10);
  }, 10);
}

btn.addEventListener("click", myAnimation);
//btn.addEventListener("click", (e) => {
//const timerID = setTimeout(logger, 5000);
//  timerID = setInterval(logger, 2000);

//console.log("timer stoped");
//});

//clearInterval(timerID);

// function logger() {
//   if (i == 3) {
//     clearInterval(timerID);
//   }
//   console.log("text");
//   i++;
// }

// let id = setTimeout(function log() {
//   console.log("Hello");
//   id = setTimeout(log, 500);
// }, 500);
