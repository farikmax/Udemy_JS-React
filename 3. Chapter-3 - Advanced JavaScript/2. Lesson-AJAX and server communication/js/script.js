// AJAX и общение с сервером - 52 (Asynchronous Javascript and XML — «асинхронный JavaScript и XML»)
"use strict";

const inputRub = document.querySelector("#rub");
const inputUsd = document.querySelector("#usd");

inputRub.addEventListener("input", () => {
	const request = new XMLHttpRequest();

	// request.open(method, url, async, login, pass);
	request.open("GET", "js/current.json");
	request.setRequestHeader("Content-type", "application/json; charset=utf-8");
	request.send();

	// ---------------------------------------------------------------1-й способ с использованием - readystatechange
	// 	request.addEventListener("readystatechange", () => {
	// 		if (request.readyState === 4 && request.status === 200) {
	// 			console.log(request.response);
	// 			const data = JSON.parse(request.response);
	// 			inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
	// 		} else {
	// 			inputUsd.value = "Что-то пошло не так, попробуйте позже!";
	// 		}
	// 	});
	// ---------------------------------------------------------------2-й способ с использованием - load
	request.addEventListener("load", () => {
		if (request.status === 200) {
			const data = JSON.parse(request.response);
			inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
		} else {
			inputUsd.value = "Что-то пошло не так, попробуйте позже!";
		}
	});

	// status
	// statusText
	// response
	// readyState
});
