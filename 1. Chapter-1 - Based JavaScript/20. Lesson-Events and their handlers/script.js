// события и их обработчики - 31
"use strict";
// const btn = document.querySelector("button"),
const btns = document.querySelectorAll("button"),
  overlay = document.querySelector(".overlay");
//---------------------------------------------------------------
// btn.onclick = function () {
//   alert("Click");
// };
//---------------------------------------------------------------
// btn.addEventListener("click", () => {
//   alert("Click");
// });

// btn.addEventListener("click", () => {
//   alert("Second Click");
// });
//---------------------------------------------------------------
// btn.addEventListener("mouseenter", (e) => {
//   // console.log(e.target);
//   e.target.remove(); // удаление при наведении
//   // console.log("Hover");
// });
//---------------------------------------------------------------
// const deleteElement = (e) => {
//   e.target.remove();
// };

// btn.addEventListener("click", deleteElement);
//---------------------------------------------------------------
// let i = 0;
// const deleteElement = (e) => {
//   e.target.remove();
//   i++;
//   if (i == 1) {
//     btn.removeEventListener("click", deleteElement);
//   }
// };

// btn.addEventListener("click", deleteElement);
//---------------------------------------------------------------
// const deleteElement = (e) => {
//   console.log(e.currentTarget);
//   console.log(e.type);
// };

// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

// const link = document.querySelector("a");
// link.addEventListener("click", function (event) {
//   event.preventDefault();

//   console.log(event.target);
// });
//---------------------------------------------------------------
const deleteElement = (e) => {
  console.log(e.currentTarget);
  console.log(e.type);
};

btns.forEach((btn) => {
  btn.addEventListener("click", deleteElement, { once: true });
});

const link = document.querySelector("a");
link.addEventListener("click", function (event) {
  event.preventDefault();

  console.log(event.target);
});
