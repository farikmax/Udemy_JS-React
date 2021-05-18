// функции-конструкторы - 45
"use strict";
//-------------------------------------------------устаревшие способы
// const num = new Number(3);
// console.log(num);

// const num = new Function(3);
// console.log(num);
//-------------------------------------------------Standart ES-5
// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function () {
// 		console.log(`Hello ${this.name}`);
// 	};
// }

// User.prototype.exit = function () {
// 	console.log(`Пользователь ${this.name} ушел в туман`);
// };

// const ivan = new User("Ivan", 28);
// const alex = new User("Alex", 30);

// ivan.exit();
// alex.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);
//-------------------------------------------------классы Standart ES-6+
class User {
	constructor(name, id) {
		this.name = name;
		this.id = id;
		this.human = true;
	}
	hello() {
		console.log(`Hello! ${this.name}`);
	}
	exit() {
		console.log(`Пользователь ${this.name} ушел в астрал`);
	}
}

const ivan = new User("Ivan", 28);
const alex = new User("Alex", 30);

ivan.exit();
alex.exit();

ivan.hello();
alex.hello();
