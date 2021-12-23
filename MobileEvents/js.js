window.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box");
  box.addEventListener("touchend", (e) => {
    e.preventDefault();
    console.log("end");
  });
  box.addEventListener("touchstart", (e) => {
    e.preventDefault();
    console.log("start");
    console.log(e.touches);
  });
  box.addEventListener("touchmove", (e) => {
    e.preventDefault();
    console.log(e.targetTouches[0].pageX);
  });
});
