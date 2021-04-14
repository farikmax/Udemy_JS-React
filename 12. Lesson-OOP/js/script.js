// Основы ООП (объекто-ориентированое программирование), прототипно-ориентированное наследование
"use strict";

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);
// --------------------------------------------результат
// string
// object
// --------------------------------------------__proto__ - прототип (устаревшее свойство)
// const soldier = {
//   health: 400,
//   armor: 100,
//   sayHello: function() {
//     console.log('Hello');
//   }
// };

// const jonh = {
//   health: 100
// };

// jonh.__proto__ = soldier; 
// console.log(jonh);
// console.log(jonh.armor);
// jonh.sayHello();
// --------------------------------------------Метод Object.setPrototypeOf() - устанавливает прототип (то есть, внутреннее свойство [[Prototype]]) указанного объекта в другой объект или null.
// const soldier = {
//   health: 400,
//   armor: 100,
//   sayHello: function() {
//     console.log('Hello');
//   }
// };

// const jonh = {
//   health: 100
// };

// Object.setPrototypeOf(jonh, soldier); // (obj, ptototype)
// --------------------------------------------Метод Object.create() - создаёт новый объект с указанным прототипом и свойствами.
const soldier = {
  health: 400,
  armor: 100,
  sayHello: function() {
    console.log('Hello');
  }
};

const jonh = Object.create(soldier);

Object.setPrototypeOf(jonh, soldier); // (obj, ptototype)

jonh.sayHello();

