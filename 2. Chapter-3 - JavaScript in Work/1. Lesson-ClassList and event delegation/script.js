//ClassList и делегирование событий - 37
"use strict";
const btns = document.querySelectorAll("button"),
	wrapper = document.querySelector(".btn-block");

// console.log(btns[0].classList.length);

// console.log(btns[0].classList.item(0));

// console.log(btns[0].classList.add("red", "asdad"));

// console.log(btns[0].classList.remove("blue"));

// console.log(btns[0].classList.toggle("blue"));
// -----------------------------------------------------------------------------
// console.log(btns[1].classList.add("red"));

// if (btns[1].classList.contains("red")) {
//   console.log("red");
// }
// -----------------------------------------------------------------------------
// btns[0].addEventListener("click", () => {
//   if (!btns[1].classList.contains("red")) {
//     btns[1].classList.add("red");
//   } else {
//     btns[1].classList.remove("red");
//   }
// });
// -----------------------------------------------------------------------------альтернатива
// btns[0].addEventListener("click", () => {
//   btns[1].classList.toggle("red");
// });
// -----------------------------------------------------------------------------устаревший способ (выводит все классы одной строкой)
// console.log(btns[0].className);
// -----------------------------------------------------------------------------делигирование событий
// wrapper.addEventListener("click", (event) => {
// 	// console.dir(event.target);
// 	if (event.target && event.target.tagName == "BUTTON") {
// 		console.log("Hello");
// 	}
// });
// -----------------------------------------------------------------------------делигирование событий
// wrapper.addEventListener("click", (event) => {
// 	// console.dir(event.target);
// 	if (event.target && event.target.classList.contains("blue")) {
// 		console.log("Hello");
// 	}
// });
// -----------------------------------------------------------------------------делигирование событий
// wrapper.addEventListener("click", (event) => {
// 	if (event.target && event.target.tagName == "BUTTON") {
// 		console.log("Hello");
// 	}
// });

// const btn = document.createElement("button");
// btn.classList.add("red");
// wrapper.append(btn);
// -----------------------------------------------------------------------------делигирование событий (с помощью forEach) можно допустить ошибку
// btns.forEach((btn) => {
// 	btn.addEventListener("click", () => {
// 		console.log("Hello");
// 	});
// });

// const btn = document.createElement("button");
// btn.classList.add("red");
// wrapper.append(btn);
// -----------------------------------------------------------------------------делигирование событий Google dev
wrapper.addEventListener("click", (event) => {
	if (event.target && event.target.matches("button.red")) {
		console.log("Hello");
	}
});

const btn = document.createElement("button");
btn.classList.add("red");
wrapper.append(btn);
