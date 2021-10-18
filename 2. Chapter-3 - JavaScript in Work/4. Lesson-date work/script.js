//Работа с датами - 40
"use strict";

const now = new Date();

// console.log(now.getFullYear()); // получение текущего года
// console.log(now.getMonth()); // получение текущего месяца
// console.log(now.getDate()); // получение текущего числа месяца
// console.log(now.getMinutes()); // получение текущие минуты
// console.log(now.getD()); // получение дня текущей недели
// console.log(now.getHours()); // получение текущие часы
// console.log(now.getUTCHours()); // получение UTC часы
// console.log(now.getTimezoneOffset()); // получение разницы текущего времени с форматом UTC
// console.log(now.getTime());
// ----------------------------------------------------------------------------------------------
let start = new Date();

for (let i = 0; i < 100000; i++) {
	let some = i ** 3;
}

let end = new Date();
alert(`Цикл отработал за ${end - start} миллисикунд`);
