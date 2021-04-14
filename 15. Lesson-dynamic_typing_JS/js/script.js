//Динамическая типизация в JS (смена одного типа на другой)
"use strict";

// -------------------------------------------- To string

// 1 - оператор String

// console.log(typeof(String(null)));
// console.log(typeof(String(4)));
console.log(typeof String(null));
console.log(typeof String(4));

// 2 - Конкатинация

console.log(typeof (4 + ""));

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + "px";

// -------------------------------------------- To Number

// 1 - оператор Number
console.log(typeof Number("4"));

// 2 - Унарный плюс
console.log(typeof +"4");

// 3 - Функция parseInt() - принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы исчисления.
console.log(typeof parseInt("15px", 10));

let answer = +prompt("Hello", "");

// -------------------------------------------- To Boolean

// false - 0, "", null, undefined, NaN
// true - все остальное

// 1 - нативный способ
let switcher = null;

// false
if (switcher) {
  console.log("Working...");
}
//true
switcher = 1;
if (switcher) {
  console.log("Working...");
}

// 2 - оператор Boolean
console.log(typeof Boolean("4"));

// 3 - оператор !! (два знака отрицания)
console.log(typeof !!"4");
