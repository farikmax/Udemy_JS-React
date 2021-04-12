// Функции, стрелочные функции (ES6)
"use strict";

// function showFirstMassage () {
//     console.log('Hello World!');
// }
//showFirstMassage();
//-------------------------------------------------------
// function showFirstMassage (text) {
//     console.log(text);
// }

// showFirstMassage('Hello World!');
//-------------------------------------------------------
// let num = 20;
// function showFirstMassage (text) {
//     console.log(text);
//     num = 10;
// }

// showFirstMassage('Hello World!');
// console.log(num);
//-------------------------------------------------------
// let num = 20;
// function showFirstMassage (text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMassage('Hello World!');
// console.log(num);
//-------------------------------------------------------
// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(5, 8));
// console.log(calc(10, 6));
// console.log(calc(15, 23));
//-------------------------------------------------------function declaration - можно вызвать перед ее обьявлением
// function ret() {
//     let num = 50;
//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);
//-------------------------------------------------------fuction expression - можно вызвать только после ее обьявления
// const logger = function() {
//     console.log('Hello!');
// };
// logger();
//-------------------------------------------------------стрелочная функция
// const calc = (a, b) => {return a + b};
// const calc = (a, b) => a + b;
const calc = (a, b) => {
    console.log('1');
    return a + b;
};