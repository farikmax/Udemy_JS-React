"use strict";

// if (4 == 9) {
//     console.log('OK!');
// } else {
//     console.log('ERROR!');
// }

// const num = 50;
// if (num < 49) {
//     console.log('Мало');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('OK!');
// }

// (num === 50) ? console.log('OK!') : console.log('ERROR!');

const num = '50';
switch (num) {
    case 49:
        console.log('Неверно!');
        break;
    case 100:
        console.log('Неверно!');
        break;
    case 50:
        console.log('OK!');
        break;
    default:
        console.log('Не сегодня!');
        break;
}