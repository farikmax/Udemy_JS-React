// Действия с элементами на странице - 29
"use strict";

const box = document.getElementById("box"),
  btns = document.getElementsByTagName("button"),
  circles = document.getElementsByClassName("circle"),
  hearts = document.querySelectorAll(".heart"),
  oneHeart = document.querySelector(".heart"),
  wrapper = document.querySelector(".wrapper");

// box.style.backgroundColor = "blue";
// box.style.width = "500px";

box.style.cssText = "background-color: blue; width: 500px;";

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "blue";
// }

hearts.forEach((item) => {
  item.style.backgroundColor = "blue";
});

const div = document.createElement("div");
// const text = document.createTextNode("Сдесь был я");

div.classList.add("black");

document.body.append(div);
// document.body.appendChild(div); // устаревший метод

// document.querySelector(".wrapper").append(div);
// wrapper.append(div); // в конец списка

// wrapper.prepend(div); // в начало списка

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]); // устаревший

// circles[0].remove;

// wrapper.removeChild(hearts[1]); // устаревший

// hearts[0].replaceWith(circles[0]);

// wrapper.replaceChild(circles[0], hearts[0]); // устаревший

// div.innerHTML = "<h1>Hello World!</h1>";

// div.textContent = "Hello";

div.innerHTML = "<h1>Hello World!</h1>";
div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>");

// beforebegin - позволяет нам вставить данный html непосредственно перед элементом;
// afterbegin - позволяет нам вставить данный html в начало элемента;
// beforeend - позволяет нам вставить данный html в начало элемента;
// afterend - позволяет нам вставить данный html после элемента;
