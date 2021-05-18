// rest оператор и параметры по умолчанию (ES6) - 49
"use strict";
const log = function (a, b, ...rest) {
	console.log(a, b, rest);
};

log("basic", "rest", "operator", "usage");

function calcOrDouble(number, basis = 2) {
	console.log(number * basis);
}

calcOrDouble(3, 5);
