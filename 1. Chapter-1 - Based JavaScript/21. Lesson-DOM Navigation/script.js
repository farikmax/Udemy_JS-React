// Навигация по DOM - элементамб data-атрибуты, преимущество for/of - 32
"use strict";
// console.log(document.body); // body
// console.log(document.documentElement); // html
// console.log(document.body.childNodes); // дети body
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector("#current").parentNode.parentNode);

// console.log(document.querySelector('[data-current="3"]')); //получение элемента по дата-атрибуту

// console.log(document.querySelector('[data-current="3"]').nextSibling);//получение узла по дата-атрибуту на строку выше
// console.log(document.querySelector('[data-current="3"]').previousSibling);//получение узла по дата-атрибуту на строку ниже

// console.log(document.querySelector("#current").parentElement);

// console.log(document.body.firstElementChild);

for (let node of document.body.childNodes) {
  if (node.nodeName == "#text") {
    continue;
  }

  console.log(node);
}
