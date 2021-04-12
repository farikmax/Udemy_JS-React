// методы и свойства строк и чисел
"use strict";
//------------------------------------length - Это свойство возвращает количество кодовых значений в строке
// const arr = [1, 2, 3];
// console.log(arr.length);
//------------------------------------
// const str = 'test';
// console.log(str.length);
// console.log(str[2]);
//------------------------------------toUpperCase() - возвращает значение строки, преобразованное в верхний регистр
//------------------------------------toLowerCase() - возвращает значение строки, преобразованное в нижний регистр
// const str = 'test';
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);
//------------------------------------indexOf() - возвращает первый индекс, по которому данный элемент может быть найден или -1, если такого индекса нет;
//------------------------------------indexOf() - поиск подстроки
// const fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));
//------------------------------------slice() - извлекает часть строки и возвращает новую строку без изменения оригинальной строки;
// const logg = 'Hello World!';
// console.log(logg.slice(6, 11));
// console.log(logg.slice(-5, -1));
//------------------------------------substring() - возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки
//------------------------------------substring() - не работает с отрицательными значениями
// const logg = 'Hello World!';
// console.log(logg.substring(6, 11));
//------------------------------------substr() - возвращает указанное количество символов из строки, начиная с указанной позиции.
// const logg = 'Hello World!';
// console.log(logg.substr(6, 5));
//------------------------------------Math.round() - Округляет число до ближайшего целого (13,2 => 13; 13.9 => 13).
// const num = 12.2;
// console.log(Math.round(num));
//------------------------------------parseInt() - принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления.
// const test = '13.2px';
// console.log(parseInt(test));
//------------------------------------parseFloat() - принимает строку в качестве аргумента и возвращает десятичное число (число с плавающей точкой).
const test = '13.2px';
console.log(parseFloat(test));
