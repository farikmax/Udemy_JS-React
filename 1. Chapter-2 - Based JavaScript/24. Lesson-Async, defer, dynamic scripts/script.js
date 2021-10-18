// Async, defer, динамические скрипты - 35
"use strict";

const p = document.querySelectorAll("p");
console.log(p);

// const script = document.createElement("script");
// script.src = "test.js";
// script.async = false;
// document.body.append(script);

function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  script.async = false;
  document.body.append(script);
}

loadScript("test.js");
