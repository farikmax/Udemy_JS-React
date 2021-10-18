// JSON формат передачи данных, глубокое клонирование объектов - 51
"use strict";
const persone = {
	name: "Alex",
	tel: "+744444444444",
	parents: {
		mom: "Olga",
		dad: "Mike",
	},
};
// ---------------------------------------------------------------
// console.log(JSON.parse(JSON.stringify(persone)));
// parse - получение данных с JSON
// stringify - отправка данных в JSON
// ---------------------------------------------------------------
const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = "Ann";
console.log(persone);
console.log(clone);
