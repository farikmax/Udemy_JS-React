// Передача по ссылке ил по значению, Spread оператор (ES6-ES9)
"use strict";

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//   a: 5,
//   b: 1
// };

// const copy = obj; // Передает ссылку

// copy.a = 10;

// console.log(copy);
// console.log(obj);
// ---------------------------------------------поверхносная копия объекта (способ с циклами)
// function copy(mainObj) {
//   let objCopy = {};

//   let key;
//   for (key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }
//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4
//   }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.a.x = 10;

// console.log(newNumbers);
// console.log(numbers);
// ---------------------------------------------Метод Object.assign() - используется для копирования значений всех собственных перечисляемых свойств из одного или более исходных объектов в целевой объект. После копирования он возвращает целевой объект.
// function copy(mainObj) {
//   let objCopy = {};

//   let key;
//   for (key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }
//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4
//   }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.a.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//   d: 17,
//   e: 20
// };

// console.log(Object.assign(numbers, add));// 1-й аргумент - это объект в который мы помещаем, 2-й это который помещаем
// ---------------------------------------------Результат
// { a: 10, b: 5, c: { x: 7, y: 4 } }
// { a: 2, b: 5, c: { x: 7, y: 4 } }
// { a: 2, b: 5, c: { x: 7, y: 4 }, d: 17, e: 20 }
// ---------------------------------------------Копирование в пустой объект
// const add = {
//   d: 17,
//   e: 20
// };

// const clone = Object.assign({}, add);
// clone.d = 20;

// console.log(add);
// console.log(clone);
// ---------------------------------------------slice() - Метод возвращает новый массив, содержащий копию части исходного массива.
// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice();

// newArray[1] = 'good';
// console.log(newArray);
// console.log(oldArray);
// ---------------------------------------------Результат
// [ 'a', 'good', 'c' ]
// [ 'a', 'b', 'c' ]
// --------------------------------------------- ... - Spread syntax позволяет расширить доступные для итерации элементы (например, массивы или строки) в местах
// --------------------------------------------- для функций: где ожидаемое количество аргументов для вызовов функций равно нулю или больше нуля
// --------------------------------------------- для элементов (литералов массива)
// --------------------------------------------- для выражений объектов: в местах, где количество пар "ключ-значение" должно быть равно нулю или больше (для объектных литералов)
// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);
// ---------------------------------------------Результат
// [
//   'youtube',
//   'vimeo',
//   'rutube',
//   'wordpress',
//   'livejournal',
//   'blogger',
//   'vk',
//   'facebook'
// ]
// ---------------------------------------------
// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 5, 7];
// log(...num);
// ---------------------------------------------Результат
// 2
// 5
// 7
// ---------------------------------------------Копируем массив с помощью Spread опертатора
// const array = ['a', 'b'],
//       newArray = [...array];

// console.log(newArray);
// ---------------------------------------------Копируем объект с помощью Spread опертатора
const q = {
  one: 1,
  two: 2
};

const newObj = {...q};

console.log(newObj);
// ---------------------------------------------Результат
// { one: 1, two: 2 }