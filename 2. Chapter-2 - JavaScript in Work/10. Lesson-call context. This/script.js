// контекст вызова. This - 46
"use strict";
// ----------------------------------------------1) Обычная функция: this = window, но если "use strict" - undefined
// function showThis() {
// 	console.log(this);
// }
// showThis();
// ----------------------------------------------1.1) Обычная функция: this = window, но если "use strict" - undefined
// function showThis(a, b) {
// 	console.log(this);
// 	function sum() {
// 		console.log(this);
// 		return a + b;
// 	}
// 	console.log(sum());
// }
// showThis(4, 5);
// ----------------------------------------------2) Контекст у методов объекта - это будет сам объект
// const obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function () {
// 		console.log(this);
// 	},
// };

// obj.sum();
// ----------------------------------------------3) Функция конструктор. this в конструкторах и классах - это новый экземпляр объекта
// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function () {
// 		console.log(`Hello ` + this.name);
// 	};
// }
// let ivan = new User("Ivan", 23);
// ----------------------------------------------4) Ручная привязка this: call, apply, bind
// function sayName(surname) {
// 	console.log(this);
// 	console.log(this.name + surname);
// }

// const user = {
// 	name: "John",
// };

// sayName.call(user, "Smith");
// sayName.apply(user, ["Smith"]);

// function count() {
// 	return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));
// ----------------------------------------------Примеры
// ----------------------------------------------вызов this = event.target (при вызове функции классическим способом)
// ----------------------------------------------В обработчике событий, когда мы используем обычный синтаксис через function() мы имеем доступ к this
// ----------------------------------------------Если использовать стрелочную функцию будет ошибка (теряется контекст вызова), мы не сможем его использовать
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
	// console.log(this);
	this.style.backgroundColor = "blue";
});
// ----------------------------------------------вызов this при вызове стрелочной функции
const obj = {
	num: 5,
	sayNumber: function () {
		const say = () => {
			console.log(this.num);
		};

		say();
	},
};

obj.sayNumber();

// ----------------------------------------------Полная запись стрелочной функции
// const double = (a) => {
// 	return a * 2;
// };
// console.log(double(4));
// ----------------------------------------------Альтернатива - короткий способ записи
const double = (a) => a * 2;
console.log(double(4));
