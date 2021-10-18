// параметры документа, окна и работа с ними - 42
"use strict";
const box = document.querySelector(".box"),
	btn = document.querySelector("button");

// const width = box.clientWidth,
// 	height = box.clientHeight;

// const width = box.offsetWidth,
// 	height = box.offsetHeight;

const width = box.scrollWidth,
	height = box.scrollHeight;

console.log(width, height);

btn.addEventListener("click", () => {
	// box.style.height = box.scrollHeight + "px";
	console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);
console.log(style.display);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);

console.log(document.documentElement.scrollTop);
